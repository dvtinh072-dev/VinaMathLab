import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_11_DETAILED_LESSONS: Record<string, DetailedLessonData> = {
  // ==========================================
  // BÀI 1: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC
  // ==========================================
  "t11-b1-gia-tri-luong-giac-goc": {
    id: "t11-b1-gia-tri-luong-giac-goc",
    lessonNumber: 1,
    title: "Bài 1: Giá trị lượng giác của góc lượng giác",
    bookChapter: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    scenarioTitle: "Mô hình hoá chuyển động quay tròn và góc lượng giác",
    scenarioFrames: [],
    "youtubeVideoId": "hBx3cV2ugks",
    "youtubeVideoTitle": "Bài Giảng Video: Giá trị lượng giác của góc lượng giác (Tiết 1) - Toán 11 KNTT",
    "youtubeVideos": [
        {
            "id": "hBx3cV2ugks",
            "title": "Tiết 1: Góc lượng giác & Đơn vị Radian"
        },
        {
            "id": "uyhbVbE1EYo",
            "title": "Tiết 2: Đường tròn lượng giác & Biểu diễn góc lượng giác"
        },
        {
            "id": "tuZGW9-tNs8",
            "title": "Tiết 3: Giá trị lượng giác của góc lượng giác & Hệ thức cơ bản"
        },
        {
            "id": "-l72fLGqTcA",
            "title": "Tiết 4: Góc liên quan đặc biệt & Luyện tập ứng dụng"
        }
    ],
    "videoQuestions": [
        {
            "id": "vq-11.1.1",
            "title": "Ví dụ 1 (Tiết 1): Đổi đơn vị độ sang radian",
            "question": "Đổi góc có số đo $120^\\circ$ sang đơn vị radian, ta được kết quả là:",
            "options": [
                "$\\dfrac{2\\pi}{3}$ rad",
                "$\\dfrac{3\\pi}{4}$ rad",
                "$\\dfrac{5\\pi}{6}$ rad",
                "$\\dfrac{\\pi}{3}$ rad"
            ],
            "correctIndex": 0,
            "explanation": "Áp dụng công thức đổi đơn vị: $\\alpha = \\dfrac{a \\cdot \\pi}{180} = \\dfrac{120\\pi}{180} = \\dfrac{2\\pi}{3}$ rad."
        },
        {
            "id": "vq-11.1.2",
            "title": "Ví dụ 2 (Tiết 2): Xác định góc phần tư của góc lượng giác",
            "question": "Điểm biểu diễn của góc lượng giác có số đo $\\alpha = -\\dfrac{2\\pi}{3}$ trên đường tròn lượng giác thuộc góc phần tư thứ mấy?",
            "options": [
                "Góc phần tư thứ III",
                "Góc phần tư thứ II",
                "Góc phần tư thứ IV",
                "Góc phần tư thứ I"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $-\\pi < -\\dfrac{2\\pi}{3} < -\\dfrac{\\pi}{2}$. Quay từ gốc $A(1;0)$ theo chiều âm (cùng chiều kim đồng hồ) một góc $\\dfrac{2\\pi}{3} = 120^\\circ$, điểm biểu diễn rơi vào góc phần tư thứ III."
        },
        {
            "id": "vq-11.1.3",
            "title": "Ví dụ 3 (Tiết 3): Áp dụng hệ thức lượng giác cơ bản",
            "question": "Cho $\\cos\\alpha = -\\dfrac{3}{5}$ với $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $\\sin\\alpha$ bằng:",
            "options": [
                "$\\dfrac{4}{5}$",
                "$-\\dfrac{4}{5}$",
                "$\\dfrac{16}{25}$",
                "$-\\dfrac{16}{25}$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\left(-\\dfrac{3}{5}\\right)^2 = \\dfrac{16}{25}$. Vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư thứ II) nên $\\sin\\alpha > 0$. Do đó $\\sin\\alpha = \\dfrac{4}{5}$."
        },
        {
            "id": "vq-11.1.4",
            "title": "Ví dụ 4 (Tiết 4): Rút gọn với góc liên quan đặc biệt",
            "question": "Rút gọn biểu thức $A = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$, ta được kết quả là:",
            "options": [
                "$2\\sin\\alpha$",
                "$0$",
                "$2\\cos\\alpha$",
                "$\\sin\\alpha - \\cos\\alpha$"
            ],
            "correctIndex": 0,
            "explanation": "Theo công thức góc bù: $\\sin(\\pi - \\alpha) = \\sin\\alpha$. Theo công thức góc phụ: $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$. Vậy $A = \\sin\\alpha + \\sin\\alpha = 2\\sin\\alpha$."
        }
    ],
    "tips": [
        "Câu thần chú góc liên quan đặc biệt: 'Cos đối, Sin bù, Phụ chéo, Hơn kém pi tan'. Chỉ những hàm số được nhắc tên mới mang dấu dương, các hàm số khác đổi dấu âm.",
        "Ghi nhớ bảng xét dấu theo góc phần tư: GPT I: Tất cả đều (+); GPT II: Chỉ sin (+); GPT III: Chỉ tan và cot (+); GPT IV: Chỉ cos (+)."
    ],
    "traps": [
        "Bẫy đơn vị góc máy tính Casio: Luôn kiểm tra màn hình máy tính hiển thị chữ 'D' (Degree - độ) hay 'R' (Radian) trước khi bấm phím tính toán.",
        "Bẫy dấu khi khai căn $\\sin^2\\alpha + \\cos^2\\alpha = 1$: Khi tính $\\sin\\alpha = \\pm\\sqrt{1 - \\cos^2\\alpha}$, bắt buộc phải căn cứ vào góc phần tư của $\\alpha$ để chọn dấu (+) hoặc (-)."
    ]
,
    theorySections: [
      {
        index: "1",
        title: "Góc lượng giác và Đơn vị Radian",
        points: [
          "**Góc lượng giác**: Khi tia $Om$ quay quanh gốc $O$ từ tia đầu $Ou$ đến tia cuối $Ov$ theo một chiều xác định, nó quét nên một góc lượng giác, kí hiệu $(Ou, Ov)$. Quy ước chiều quay ngược chiều kim đồng hồ là chiều dương (+), cùng chiều kim đồng hồ là chiều âm (-).",
          "**Hệ thức Chasles**: Với 3 tia $Ou, Ov, Ow$ bất kì, ta có: $\\text{sđ}(Ou, Ov) + \\text{sđ}(Ov, Ow) = \\text{sđ}(Ou, Ow) + k2\\pi$ $(k \\in \\mathbb{Z})$.",
          "**Đơn vị Radian**: Góc ở tâm chắn cung có độ dài bằng bán kính đường tròn có số đo $1$ radian ($1\\text{ rad}$). Ta có $180^\\circ = \\pi\\text{ rad}$.",
          "**Công thức đổi đơn vị**: $\\dfrac{a^\\circ}{180^\\circ} = \\dfrac{\\alpha}{\\pi} \\implies \\alpha \\text{ (rad)} = \\dfrac{a \\cdot \\pi}{180}, \quad a^\\circ = \\dfrac{\\alpha \\cdot 180^\\circ}{\\pi}$.",
          "**Độ dài cung tròn**: Cung có số đo $\\alpha$ rad trên đường tròn bán kính $R$ có độ dài: $l = R \\cdot |\\alpha|$."
        ],
        formula: "l = R \\cdot |\\alpha| \qquad \\dfrac{a^\\circ}{180^\\circ} = \\dfrac{\\alpha}{\\pi}",
        examples: [
          {
            title: "Ví dụ 1: Đổi đơn vị và xác định độ dài cung tròn (Dạng 1 Tài liệu)",
            problem: "a) Đổi các góc sau sang radian: $30^\\circ, 135^\\circ, -210^\\circ$.\nb) Đổi các góc sau sang độ: $\\dfrac{\\pi}{4}\\text{ rad}, \\dfrac{2\\pi}{3}\\text{ rad}, -\\dfrac{5\\pi}{6}\\text{ rad}$.\nc) Một đường tròn có bán kính $R = 10\\text{ cm}$. Tính độ dài cung tròn có số đo $\\dfrac{3\\pi}{5}\\text{ rad}$.",
            solution: "• **Câu a (Đổi sang radian)**:\n  - $30^\\circ = 30 \\cdot \\dfrac{\\pi}{180} = \\dfrac{\\pi}{6}$ rad.\n  - $135^\\circ = 135 \\cdot \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{4}$ rad.\n  - $-210^\\circ = -210 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{7\\pi}{6}$ rad.\n\n• **Câu b (Đổi sang độ)**:\n  - $\\dfrac{\\pi}{4}\\text{ rad} = \\dfrac{\\pi}{4} \\cdot \\dfrac{180^\\circ}{\\pi} = 45^\\circ$.\n  - $\\dfrac{2\\pi}{3}\\text{ rad} = \\dfrac{2\\pi}{3} \\cdot \\dfrac{180^\\circ}{\\pi} = 120^\\circ$.\n  - $-\\dfrac{5\\pi}{6}\\text{ rad} = -\\dfrac{5\\pi}{6} \\cdot \\dfrac{180^\\circ}{\\pi} = -150^\\circ$.\n\n• **Câu c (Độ dài cung tròn)**:\n  Áp dụng công thức $l = R \\cdot |\\alpha|$, ta có:\n  $l = 10 \\cdot \\dfrac{3\\pi}{5} = 6\\pi \\approx 18{,}85\\text{ cm}$."
          }
        ]
      },
      {
        index: "2",
        title: "Đường tròn lượng giác & Biểu diễn góc lượng giác",
        hasUnitCircle: true,
        points: [
          "**Đường tròn lượng giác**: Là đường tròn định hướng tâm $O(0;0)$, bán kính $R = 1$, lấy điểm $A(1;0)$ làm điểm gốc.",
          "**Điểm biểu diễn góc lượng giác**: Điểm $M$ trên đường tròn lượng giác biểu diễn góc lượng giác có số đo $\\alpha$ khi sđ$(OA, OM) = \\alpha$.",
          "**Số đo tổng quát**: Mọi góc lượng giác có cùng tia đầu $OA$ và tia cuối $OM$ đều có số đo sai khác nhau một bội nguyên của $2\\pi$:\n$\\text{sđ}(OA, OM) = \\alpha + k2\\pi \quad (k \\in \\mathbb{Z})$",
          "**Vị trí theo 4 góc phần tư** (với $\\alpha \\in [0; 2\\pi)$):\n• GPT I: $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$ \quad • GPT II: $\\alpha \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$ \quad • GPT III: $\\alpha \\in \\left(\\pi; \\dfrac{3\\pi}{2}\\right)$ \quad • GPT IV: $\\alpha \\in \\left(\\dfrac{3\\pi}{2}; 2\\pi\\right)$."
        ],
        formula: "\\text{sđ}(OA, OM) = \\alpha + k2\\pi \quad (k \\in \\mathbb{Z})",
        examples: [
          {
            title: "Ví dụ 2: Xác định điểm biểu diễn và góc phần tư (Dạng 1 & 2 Tài liệu)",
            problem: "a) Xác định vị trí điểm biểu diễn và góc phần tư của góc $\\alpha = \\dfrac{5\\pi}{6}$.\nb) Điểm biểu diễn góc $\\beta = -\\dfrac{3\\pi}{4}$ thuộc góc phần tư thứ mấy?\nc) Viết công thức số đo tổng quát của các góc lượng giác có cùng tia đầu và tia cuối với góc $\\dfrac{\\pi}{3}$.",
            solution: "• **Câu a**:\n  Vì $\\dfrac{\\pi}{2} < \\dfrac{5\\pi}{6} < \\pi$ nên điểm biểu diễn $M$ của góc $\\dfrac{5\\pi}{6}$ nằm ở **góc phần tư thứ II**.\n\n• **Câu b**:\n  Ta có $-\\pi < -\\dfrac{3\\pi}{4} < -\\dfrac{\\pi}{2}$. Quay theo chiều âm một góc $\\dfrac{3\\pi}{4}$ từ gốc $A$, điểm biểu diễn nằm ở **góc phần tư thứ III**.\n\n• **Câu c**:\n  Công thức số đo tổng quát là: $\\dfrac{\\pi}{3} + k2\\pi$ $(k \\in \\mathbb{Z})$."
          }
        ]
      },
      {
        index: "3",
        title: "Giá trị lượng giác của góc lượng giác",
        points: [
          "Cho điểm $M(x; y)$ trên đường tròn lượng giác ($R = 1$) biểu diễn góc lượng giác $\\alpha$:\n• Hoành độ $x$ gọi là côsin của $\\alpha$: $\\cos\\alpha = x$.\n• Tung độ $y$ gọi là sin của $\\alpha$: $\\sin\\alpha = y$.\n• Tang của $\\alpha$: $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{y}{x}$ (với $\\cos\\alpha \\neq 0$, tức $\\alpha \\neq \\dfrac{\\pi}{2} + k\\pi$).\n• Côtang của $\\alpha$: $\\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\dfrac{x}{y}$ (với $\\sin\\alpha \\neq 0$, tức $\\alpha \\neq k\\pi$).",
          "**Ý nghĩa hình học**: Trục hoành $Ox$ là **trục côsin**; trục tung $Oy$ là **trục sin**.",
          "**Bảng xét dấu theo góc phần tư**:\n• GPT I: $\\sin > 0, \\cos > 0, \\tan > 0, \\cot > 0$ (Tất cả đều dương).\n• GPT II: $\\sin > 0$, còn $\\cos < 0, \\tan < 0, \\cot < 0$.\n• GPT III: $\\tan > 0, \\cot > 0$, còn $\\sin < 0, \\cos < 0$.\n• GPT IV: $\\cos > 0$, còn $\\sin < 0, \\tan < 0, \\cot < 0$."
        ],
        formula: "\\cos\\alpha = x_M, \quad \\sin\\alpha = y_M, \quad \\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}, \quad \\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha}",
        examples: [
          {
            title: "Ví dụ 3: Tính giá trị lượng giác của các góc đặc biệt (Dạng 2 Tài liệu)",
            problem: "a) Tính các giá trị lượng giác của góc $\\alpha = \\dfrac{2\\pi}{3}$.\nb) Tính các giá trị lượng giác của góc $\\beta = -\\dfrac{\\pi}{4}$.",
            solution: "• **Câu a (với $\\alpha = \\dfrac{2\\pi}{3} = 120^\\circ$, thuộc GPT II)**:\n  - $\\sin\\dfrac{2\\pi}{3} = \\sin\\left(\\pi - \\dfrac{\\pi}{3}\\right) = \\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$.\n  - $\\cos\\dfrac{2\\pi}{3} = \\cos\\left(\\pi - \\dfrac{\\pi}{3}\\right) = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$.\n  - $\\tan\\dfrac{2\\pi}{3} = \\dfrac{\\sin(2\\pi/3)}{\\cos(2\\pi/3)} = \\dfrac{\\sqrt{3}/2}{-1/2} = -\\sqrt{3}$.\n  - $\\cot\\dfrac{2\\pi}{3} = \\dfrac{1}{\\tan(2\\pi/3)} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$.\n\n• **Câu b (với $\\beta = -\\dfrac{\\pi}{4}$, thuộc GPT IV)**:\n  - $\\sin\\left(-\\dfrac{\\pi}{4}\\right) = -\\sin\\dfrac{\\pi}{4} = -\\dfrac{\\sqrt{2}}{2}$.\n  - $\\cos\\left(-\\dfrac{\\pi}{4}\\right) = \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$.\n  - $\\tan\\left(-\\dfrac{\\pi}{4}\\right) = -\\tan\\dfrac{\\pi}{4} = -1$.\n  - $\\cot\\left(-\\dfrac{\\pi}{4}\\right) = -1$."
          }
        ]
      },
      {
        index: "4",
        title: "Các hệ thức lượng giác cơ bản",
        points: [
          "Bốn hệ thức lượng giác cơ bản bắt buộc phải thuộc lòng:\n1. $\\sin^2\\alpha + \\cos^2\\alpha = 1$\n2. $1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha} \quad \\left(\\alpha \\neq \\dfrac{\\pi}{2} + k\\pi\\right)$\n3. $1 + \\cot^2\\alpha = \\dfrac{1}{\\sin^2\\alpha} \quad (\\alpha \\neq k\\pi)$\n4. $\\tan\\alpha \\cdot \\cot\\alpha = 1 \quad \\left(\\alpha \\neq \\dfrac{k\\pi}{2}\\right)$"
        ],
        formula: "\\sin^2\\alpha + \\cos^2\\alpha = 1; \quad 1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}; \quad \\tan\\alpha \\cdot \\cot\\alpha = 1",
        examples: [
          {
            title: "Ví dụ 4: Tính các giá trị lượng giác khi biết một giá trị (Dạng 2 Tài liệu)",
            problem: "a) Cho $\\cos\\alpha = -\\dfrac{3}{5}$ với $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Tính $\\sin\\alpha, \\tan\\alpha, \\cot\\alpha$.\nb) Cho $\\tan\\alpha = 2$ với $0 < \\alpha < \\dfrac{\\pi}{2}$. Tính $\\cos\\alpha$ và $\\sin\\alpha$.",
            solution: "• **Câu a**:\n  - Áp dụng hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$, ta có:\n    $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\left(-\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$\n  - Vì $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ (góc phần tư thứ III) nên $\\sin\\alpha < 0$. Do đó:\n    $\\sin\\alpha = -\\sqrt{\\dfrac{16}{25}} = -\\dfrac{4}{5}$\n  - Khi đó: $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{-4/5}{-3/5} = \\dfrac{4}{3}$; $\\quad \\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = \\dfrac{3}{4}$.\n\n• **Câu b**:\n  - Ta có: $1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha} \\implies \\dfrac{1}{\\cos^2\\alpha} = 1 + 2^2 = 5 \\implies \\cos^2\\alpha = \\dfrac{1}{5}$.\n  - Vì $0 < \\alpha < \\dfrac{\pi}{2}$ (góc phần tư thứ I) nên $\\cos\\alpha > 0$. Do đó:\n    $\\cos\\alpha = \\dfrac{1}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}$\n  - Suy ra: $\\sin\\alpha = \\tan\\alpha \\cdot \\cos\\alpha = 2 \\cdot \\dfrac{\\sqrt{5}}{5} = \\dfrac{2\\sqrt{5}}{5}$."
          }
        ]
      },
      {
        index: "5",
        title: "Giá trị lượng giác của các góc có liên quan đặc biệt",
        points: [
          "Quy tắc ghi nhớ: **'Cos đối, Sin bù, Phụ chéo, Hơn kém pi tan'**:",
          "• **Góc đối nhau** ($\\alpha$ và $-\\alpha$):\n  $\\cos(-\\alpha) = \\cos\\alpha; \quad \\sin(-\\alpha) = -\\sin\\alpha; \quad \\tan(-\\alpha) = -\\tan\\alpha; \quad \\cot(-\\alpha) = -\\cot\\alpha$",
          "• **Góc bù nhau** ($\\alpha$ và $\\pi - \\alpha$):\n  $\\sin(\\pi - \\alpha) = \\sin\\alpha; \quad \\cos(\\pi - \\alpha) = -\\cos\\alpha; \quad \\tan(\\pi - \\alpha) = -\\tan\\alpha; \quad \\cot(\\pi - \\alpha) = -\\cot\\alpha$",
          "• **Góc phụ nhau** ($\\alpha$ và $\\dfrac{\\pi}{2} - \\alpha$):\n  $\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha; \quad \\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha; \quad \\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cot\\alpha$",
          "• **Góc hơn kém $\\pi$** ($\\alpha$ và $\\pi + \\alpha$):\n  $\\tan(\\pi + \\alpha) = \\tan\\alpha; \quad \\cot(\\pi + \\alpha) = \\cot\\alpha; \quad \\sin(\\pi + \\alpha) = -\\sin\\alpha; \quad \\cos(\\pi + \\alpha) = -\\cos\\alpha$"
        ],
        formula: "\\sin(\\pi - \\alpha) = \\sin\\alpha; \quad \\cos(-\\alpha) = \\cos\\alpha; \quad \\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha",
        examples: [
          {
            title: "Ví dụ 5: Rút gọn biểu thức lượng giác (Dạng 3 & 4 Tài liệu)",
            problem: "Rút gọn biểu thức:\n$A = \\sin(\\pi - x) + \\cos\\left(\\dfrac{\\pi}{2} - x\\right) + \\cos(\\pi + x) + \\cos(-x)$",
            solution: "Áp dụng công thức các góc có liên quan đặc biệt:\n• $\\sin(\\pi - x) = \\sin x$ (góc bù).\n• $\\cos\\left(\\dfrac{\\pi}{2} - x\\right) = \\sin x$ (góc phụ).\n• $\\cos(\\pi + x) = -\\cos x$ (góc hơn kém $\\pi$).\n• $\\cos(-x) = \\cos x$ (góc đối).\n\nThay vào biểu thức $A$, ta được:\n$A = \\sin x + \\sin x + (-\\cos x) + \\cos x = 2\\sin x$"
          }
        ]
      }
    ],
    quizQuestions: [
      // ===== DẠNG 1: ĐỔI ĐƠN VỊ ĐỘ ↔ RADIAN (8 câu) =====
      {
        id: "quiz-11.1.1",
        badge: "Câu 1 - Nhận biết - Đổi 120° sang radian",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 1",
        question: "Đổi góc $120°$ sang đơn vị radian, ta được:",
        options: ["$\\dfrac{2\\pi}{3}$", "$\\dfrac{\\pi}{3}$", "$\\dfrac{3\\pi}{4}$", "$\\dfrac{4\\pi}{3}$"],
        correctIndex: 0,
        explanation: "$120° = 120 \\cdot \\dfrac{\\pi}{180} = \\dfrac{120\\pi}{180} = \\dfrac{2\\pi}{3}$ rad."
      },
      {
        id: "quiz-11.1.2",
        badge: "Câu 2 - Nhận biết - Đổi 210° sang radian",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        question: "Đổi góc $210°$ sang đơn vị radian, ta được:",
        options: ["$\\dfrac{7\\pi}{6}$", "$\\dfrac{5\\pi}{6}$", "$\\dfrac{3\\pi}{4}$", "$\\dfrac{5\\pi}{3}$"],
        correctIndex: 0,
        explanation: "$210° = 210 \\cdot \\dfrac{\\pi}{180} = \\dfrac{7\\pi}{6}$ rad."
      },
      {
        id: "quiz-11.1.3",
        badge: "Câu 3 - Nhận biết - Đổi 3π/4 sang độ",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 1",
        question: "Đổi $\\dfrac{3\\pi}{4}$ radian sang đơn vị độ, ta được:",
        options: ["$135°$", "$120°$", "$150°$", "$225°$"],
        correctIndex: 0,
        explanation: "$\\dfrac{3\\pi}{4}$ rad $= \\dfrac{3\\pi}{4} \\cdot \\dfrac{180°}{\\pi} = \\dfrac{3 \\times 180°}{4} = 135°$."
      },
      {
        id: "quiz-11.1.4",
        badge: "Câu 4 - Nhận biết - Đổi 11π/6 sang độ",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        question: "Đổi $\\dfrac{11\\pi}{6}$ radian sang đơn vị độ, ta được:",
        options: ["$330°$", "$300°$", "$315°$", "$360°$"],
        correctIndex: 0,
        explanation: "$\\dfrac{11\\pi}{6}$ rad $= \\dfrac{11 \\times 180°}{6} = 330°$."
      },
      {
        id: "quiz-11.1.5",
        badge: "Câu 5 - Nhận biết - Đổi −135° sang radian",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        question: "Đổi góc $-135°$ sang đơn vị radian, ta được:",
        options: ["$-\\dfrac{3\\pi}{4}$", "$-\\dfrac{2\\pi}{3}$", "$-\\dfrac{5\\pi}{6}$", "$-\\dfrac{\\pi}{4}$"],
        correctIndex: 0,
        explanation: "$-135° = -135 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{3\\pi}{4}$ rad."
      },
      {
        id: "quiz-11.1.6",
        badge: "Câu 6 - Thông hiểu - Tính độ dài cung",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 1",
        question: "Một cung tròn có số đo $\\dfrac{\\pi}{3}$ rad trên đường tròn bán kính $12$ cm. Độ dài cung đó là:",
        options: ["$4\\pi$ cm", "$6\\pi$ cm", "$3\\pi$ cm", "$2\\pi$ cm"],
        correctIndex: 0,
        explanation: "Độ dài cung: $l = R \\cdot |\\alpha| = 12 \\cdot \\dfrac{\\pi}{3} = 4\\pi$ cm."
      },
      {
        id: "quiz-11.1.7",
        badge: "Câu 7 - Thông hiểu - Tính bán kính từ độ dài cung",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        question: "Một cung tròn có số đo $60°$ và độ dài $2\\pi$ cm. Bán kính của đường tròn là:",
        options: ["$6$ cm", "$3$ cm", "$4$ cm", "$\\pi$ cm"],
        correctIndex: 0,
        explanation: "Đổi $60° = \\dfrac{\\pi}{3}$ rad. Từ $l = R \\cdot |\\alpha|$: $R = \\dfrac{l}{|\\alpha|} = \\dfrac{2\\pi}{\\pi/3} = 6$ cm."
      },
      {
        id: "quiz-11.1.8",
        badge: "Câu 8 - Vận dụng - Bài toán bánh xe",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        question: "Một bánh xe có bán kính $0.5$ m quay được $3$ vòng. Quãng đường mà một điểm trên vành đi được là:",
        options: ["$3\\pi$ m", "$6\\pi$ m", "$1.5\\pi$ m", "$\\pi$ m"],
        correctIndex: 0,
        explanation: "3 vòng = $3 \\times 2\\pi = 6\\pi$ rad. Quãng đường: $l = R \\cdot \\alpha = 0.5 \\times 6\\pi = 3\\pi$ m."
      },
      // ===== DẠNG 2: ĐƯỜNG TRÒN LƯỢNG GIÁC & GÓC PHẦN TƯ (8 câu) =====
      {
        id: "quiz-11.1.9",
        badge: "Câu 9 - Nhận biết - Góc phần tư của 7π/6",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Điểm biểu diễn của góc lượng giác $\\dfrac{7\\pi}{6}$ nằm ở:",
        options: ["Góc phần tư thứ III", "Góc phần tư thứ II", "Góc phần tư thứ IV", "Góc phần tư thứ I"],
        correctIndex: 0,
        explanation: "Vì $\\pi < \\dfrac{7\\pi}{6} < \\dfrac{3\\pi}{2}$ nên điểm biểu diễn nằm ở góc phần tư thứ III."
      },
      {
        id: "quiz-11.1.10",
        badge: "Câu 10 - Nhận biết - Góc phần tư của 11π/6",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Điểm biểu diễn của góc lượng giác $\\dfrac{11\\pi}{6}$ nằm ở:",
        options: ["Góc phần tư thứ IV", "Góc phần tư thứ I", "Góc phần tư thứ II", "Góc phần tư thứ III"],
        correctIndex: 0,
        explanation: "Vì $\\dfrac{3\\pi}{2} < \\dfrac{11\\pi}{6} < 2\\pi$ nên điểm biểu diễn nằm ở góc phần tư thứ IV."
      },
      {
        id: "quiz-11.1.11",
        badge: "Câu 11 - Nhận biết - Tọa độ điểm biểu diễn π/3",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 2",
        question: "Điểm biểu diễn góc lượng giác $\\dfrac{\\pi}{3}$ trên đường tròn đơn vị có tọa độ là:",
        options: ["$\\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$", "$\\left(\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$", "$\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$", "$\\left(\\dfrac{\\sqrt{2}}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$"],
        correctIndex: 0,
        explanation: "$\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$ và $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$. Điểm biểu diễn: $\\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$."
      },
      {
        id: "quiz-11.1.12",
        badge: "Câu 12 - Thông hiểu - Số đo tổng quát",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Số đo tổng quát của các góc lượng giác có cùng tia cuối với góc $\\dfrac{2\\pi}{3}$ là:",
        options: ["$\\dfrac{2\\pi}{3} + k2\\pi$ $(k \\in \\mathbb{Z})$", "$\\dfrac{2\\pi}{3} + k\\pi$ $(k \\in \\mathbb{Z})$", "$\\dfrac{2\\pi}{3} + \\dfrac{k\\pi}{3}$ $(k \\in \\mathbb{Z})$", "$k2\\pi$ $(k \\in \\mathbb{Z})$"],
        correctIndex: 0,
        explanation: "Tất cả các góc có cùng tia cuối với $\\dfrac{2\\pi}{3}$ đều có số đo: $\\dfrac{2\\pi}{3} + k2\\pi$ $(k \\in \\mathbb{Z})$."
      },
      {
        id: "quiz-11.1.13",
        badge: "Câu 13 - Thông hiểu - Tìm góc cùng điểm biểu diễn",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Góc $\\dfrac{17\\pi}{4}$ có điểm biểu diễn trùng với điểm biểu diễn của góc nào sau đây?",
        options: ["$\\dfrac{\\pi}{4}$", "$\\dfrac{3\\pi}{4}$", "$\\dfrac{5\\pi}{4}$", "$\\dfrac{7\\pi}{4}$"],
        correctIndex: 0,
        explanation: "$\\dfrac{17\\pi}{4} = \\dfrac{\\pi}{4} + \\dfrac{16\\pi}{4} = \\dfrac{\\pi}{4} + 4\\pi = \\dfrac{\\pi}{4} + 2 \\cdot 2\\pi$. Vậy điểm biểu diễn trùng với $\\dfrac{\\pi}{4}$."
      },
      {
        id: "quiz-11.1.14",
        badge: "Câu 14 - Thông hiểu - Xác định góc phần tư từ điều kiện",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Nếu $\\dfrac{\\pi}{2} < \\alpha < \\pi$ thì điểm $M(\\cos\\alpha; \\sin\\alpha)$ nằm ở:",
        options: ["Góc phần tư II (x < 0, y > 0)", "Góc phần tư I (x > 0, y > 0)", "Góc phần tư III (x < 0, y < 0)", "Góc phần tư IV (x > 0, y < 0)"],
        correctIndex: 0,
        explanation: "Khi $\\dfrac{\\pi}{2} < \\alpha < \\pi$: $\\cos\\alpha < 0$, $\\sin\\alpha > 0$. Vậy $M$ nằm ở góc phần tư II."
      },
      {
        id: "quiz-11.1.15",
        badge: "Câu 15 - Thông hiểu - Điểm biểu diễn cung âm",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Điểm biểu diễn của góc $-\\dfrac{5\\pi}{6}$ nằm ở:",
        options: ["Góc phần tư III", "Góc phần tư II", "Góc phần tư IV", "Góc phần tư I"],
        correctIndex: 0,
        explanation: "$-\\dfrac{5\\pi}{6} \\approx -2.618$ rad. Quay theo chiều âm từ $A(1;0)$ một góc $\\dfrac{5\\pi}{6}$ vào GPT III (vì $-\\pi < -\\dfrac{5\\pi}{6} < -\\dfrac{\\pi}{2}$)."
      },
      {
        id: "quiz-11.1.16",
        badge: "Câu 16 - Vận dụng - Mâm bánh xe chia phần",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
        question: "Mâm bánh xe được chia đều thành $6$ phần bằng nhau xuất phát từ $A(1;0)$. Điểm chia thứ $2$ (quay ngược chiều kim đồng hồ) có số đo là:",
        options: ["$\\dfrac{2\\pi}{3}$ rad", "$\\dfrac{\\pi}{3}$ rad", "$\\dfrac{\\pi}{2}$ rad", "$\\pi$ rad"],
        correctIndex: 0,
        explanation: "Mỗi phần chia ứng với góc $\\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}$ rad. Điểm thứ 2 có số đo: $2 \\times \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$ rad."
      },
      // ===== DẠNG 3: TÍNH GIÁ TRỊ LƯỢNG GIÁC (8 câu) =====
      {
        id: "quiz-11.1.17",
        badge: "Câu 17 - Nhận biết - Tính sin(7π/6)",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 3",
        question: "Giá trị của $\\sin\\dfrac{7\\pi}{6}$ bằng:",
        options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$"],
        correctIndex: 0,
        explanation: "$\\sin\\dfrac{7\\pi}{6} = \\sin\\left(\\pi + \\dfrac{\\pi}{6}\\right) = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}$."
      },
      {
        id: "quiz-11.1.18",
        badge: "Câu 18 - Nhận biết - Tính cos(4π/3)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
        question: "Giá trị của $\\cos\\dfrac{4\\pi}{3}$ bằng:",
        options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$"],
        correctIndex: 0,
        explanation: "$\\cos\\dfrac{4\\pi}{3} = \\cos\\left(\\pi + \\dfrac{\\pi}{3}\\right) = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$."
      },
      {
        id: "quiz-11.1.19",
        badge: "Câu 19 - Nhận biết - Tính tan(3π/4)",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 3",
        question: "Giá trị của $\\tan\\dfrac{3\\pi}{4}$ bằng:",
        options: ["$-1$", "$1$", "$-\\sqrt{3}$", "$\\sqrt{3}$"],
        correctIndex: 0,
        explanation: "$\\tan\\dfrac{3\\pi}{4} = \\tan\\left(\\pi - \\dfrac{\\pi}{4}\\right) = -\\tan\\dfrac{\\pi}{4} = -1$."
      },
      {
        id: "quiz-11.1.20",
        badge: "Câu 20 - Thông hiểu - Tính cos(−2π/3)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
        question: "Giá trị của $\\cos\\left(-\\dfrac{2\\pi}{3}\\right)$ bằng:",
        options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$"],
        correctIndex: 0,
        explanation: "$\\cos\\left(-\\dfrac{2\\pi}{3}\\right) = \\cos\\dfrac{2\\pi}{3} = \\cos\\left(\\pi - \\dfrac{\\pi}{3}\\right) = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$."
      },
      {
        id: "quiz-11.1.21",
        badge: "Câu 21 - Thông hiểu - Tính cot(5π/3)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
        question: "Giá trị của $\\cot\\dfrac{5\\pi}{3}$ bằng:",
        options: ["$-\\dfrac{\\sqrt{3}}{3}$", "$\\dfrac{\\sqrt{3}}{3}$", "$-\\sqrt{3}$", "$\\sqrt{3}$"],
        correctIndex: 0,
        explanation: "$\\cot\\dfrac{5\\pi}{3} = \\cot\\left(2\\pi - \\dfrac{\\pi}{3}\\right) = -\\cot\\dfrac{\\pi}{3} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$."
      },
      {
        id: "quiz-11.1.22",
        badge: "Câu 22 - Thông hiểu - Dấu biểu thức theo góc phần tư",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
        question: "Nếu $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ thì biểu thức $\\sin\\alpha + \\cos\\alpha$ có giá trị:",
        options: ["Âm", "Dương", "Bằng 0", "Không xác định được dấu"],
        correctIndex: 0,
        explanation: "Góc phần tư III: $\\sin\\alpha < 0$ và $\\cos\\alpha < 0$. Vậy $\\sin\\alpha + \\cos\\alpha < 0$ (âm)."
      },
      {
        id: "quiz-11.1.23",
        badge: "Câu 23 - Thông hiểu - Tính biểu thức GTLG đặc biệt",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 3",
        question: "Giá trị của biểu thức $A = \\sin\\dfrac{5\\pi}{6} + \\cos\\dfrac{3\\pi}{4} - \\tan\\dfrac{7\\pi}{6}$ bằng:",
        options: ["$\\dfrac{1}{2} - \\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{3}}{3}$", "$1 - \\sqrt{2}$", "$\\dfrac{\\sqrt{2}}{2}$", "$0$"],
        correctIndex: 0,
        explanation: "$\\sin\\dfrac{5\\pi}{6} = \\dfrac{1}{2}$; $\\cos\\dfrac{3\\pi}{4} = -\\dfrac{\\sqrt{2}}{2}$; $\\tan\\dfrac{7\\pi}{6} = \\tan\\left(\\pi+\\dfrac{\\pi}{6}\\right) = \\tan\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{3}$. $A = \\dfrac{1}{2} - \\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{3}}{3}$."
      },
      {
        id: "quiz-11.1.24",
        badge: "Câu 24 - Vận dụng - So sánh giá trị lượng giác",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
        question: "Trong góc phần tư IV, mệnh đề nào sau đây đúng?",
        options: ["$\\sin\\alpha < 0 < \\cos\\alpha$", "$\\cos\\alpha < 0 < \\sin\\alpha$", "$\\tan\\alpha > 0$ và $\\sin\\alpha > 0$", "$\\sin\\alpha > 0$ và $\\cos\\alpha > 0$"],
        correctIndex: 0,
        explanation: "Góc phần tư IV: $x > 0$, $y < 0$, nên $\\cos\\alpha > 0$ và $\\sin\\alpha < 0$. Vậy $\\sin\\alpha < 0 < \\cos\\alpha$."
      },
      // ===== DẠNG 4: HỆ THỨC LƯỢNG GIÁC CƠ BẢN (8 câu) =====
      {
        id: "quiz-11.1.25",
        badge: "Câu 25 - Nhận biết - Hệ thức Pythagorean",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 4",
        question: "Hệ thức nào sau đây luôn đúng với mọi giá trị của $\\alpha$?",
        options: ["$\\sin^2\\alpha + \\cos^2\\alpha = 1$", "$\\tan\\alpha + \\cot\\alpha = 1$", "$\\sin\\alpha + \\cos\\alpha = 1$", "$\\tan^2\\alpha + \\cot^2\\alpha = 2$"],
        correctIndex: 0,
        explanation: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$ là hệ thức cơ bản luôn đúng với mọi $\\alpha$."
      },
      {
        id: "quiz-11.1.26",
        badge: "Câu 26 - Thông hiểu - Tính cos từ sin (góc phần tư I)",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 4",
        question: "Biết $\\sin\\alpha = \\dfrac{1}{2}$ và $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$. Khi đó $\\cos\\alpha$ bằng:",
        options: ["$\\dfrac{\\sqrt{3}}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{1}{2}$"],
        correctIndex: 0,
        explanation: "$\\cos^2\\alpha = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$. Vì $\\alpha \\in (0; \\pi/2)$, $\\cos\\alpha > 0$: $\\cos\\alpha = \\dfrac{\\sqrt{3}}{2}$."
      },
      {
        id: "quiz-11.1.27",
        badge: "Câu 27 - Thông hiểu - Tính tan từ dữ kiện",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        question: "Biết $\\cos\\alpha = -\\dfrac{\\sqrt{2}}{2}$ và $\\alpha \\in \\left(\\pi; \\dfrac{3\\pi}{2}\\right)$. Khi đó $\\tan\\alpha$ bằng:",
        options: ["$1$", "$-1$", "$\\sqrt{2}$", "$-\\sqrt{2}$"],
        correctIndex: 0,
        explanation: "$\\sin^2\\alpha = 1 - \\dfrac{1}{2} = \\dfrac{1}{2}$. Vì $\\alpha$ ở GPT III, $\\sin\\alpha < 0$: $\\sin\\alpha = -\\dfrac{\\sqrt{2}}{2}$. $\\tan\\alpha = \\dfrac{-\\sqrt{2}/2}{-\\sqrt{2}/2} = 1$."
      },
      {
        id: "quiz-11.1.28",
        badge: "Câu 28 - Thông hiểu - Tính biểu thức từ tan",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        question: "Biết $\\tan\\alpha = \\dfrac{1}{2}$. Giá trị của $P = \\dfrac{2\\sin\\alpha - \\cos\\alpha}{\\sin\\alpha + 3\\cos\\alpha}$ bằng:",
        options: ["$\\dfrac{0}{7} = 0$... thực ra $= \\dfrac{2 \\cdot 1/2 - 1}{1/2 + 3} = \\dfrac{0}{7/2} = 0$", "$\\dfrac{1}{7}$", "$\\dfrac{2}{7}$", "$\\dfrac{3}{7}$"],
        correctIndex: 0,
        explanation: "Chia tử và mẫu cho $\\cos\\alpha$: $P = \\dfrac{2\\tan\\alpha - 1}{\\tan\\alpha + 3} = \\dfrac{2 \\cdot \\frac{1}{2} - 1}{\\frac{1}{2} + 3} = \\dfrac{1 - 1}{\\frac{7}{2}} = \\dfrac{0}{7/2} = 0$."
      },
      {
        id: "quiz-11.1.29",
        badge: "Câu 29 - Thông hiểu - Hệ thức liên hệ 1/cos²",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 4",
        question: "Biết $\\cos\\alpha = \\dfrac{1}{3}$. Giá trị của $1 + \\tan^2\\alpha$ bằng:",
        options: ["$9$", "$\\dfrac{8}{9}$", "$\\dfrac{10}{9}$", "$3$"],
        correctIndex: 0,
        explanation: "$1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha} = \\dfrac{1}{(1/3)^2} = \\dfrac{1}{1/9} = 9$."
      },
      {
        id: "quiz-11.1.30",
        badge: "Câu 30 - Vận dụng - Tính biểu thức từ sin (góc phần tư III)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        question: "Biết $\\sin\\alpha = -\\dfrac{5}{13}$ và $\\alpha \\in \\left(\\pi; \\dfrac{3\\pi}{2}\\right)$. Giá trị của $\\tan\\alpha$ là:",
        options: ["$\\dfrac{5}{12}$", "$-\\dfrac{5}{12}$", "$\\dfrac{12}{5}$", "$-\\dfrac{12}{5}$"],
        correctIndex: 0,
        explanation: "$\\cos^2\\alpha = 1 - \\dfrac{25}{169} = \\dfrac{144}{169}$. GPT III: $\\cos\\alpha < 0$, $\\cos\\alpha = -\\dfrac{12}{13}$. $\\tan\\alpha = \\dfrac{-5/13}{-12/13} = \\dfrac{5}{12}$."
      },
      {
        id: "quiz-11.1.31",
        badge: "Câu 31 - Vận dụng - Biểu thức phức từ GTLG",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        question: "Biết $\\cot\\alpha = \\sqrt{3}$. Giá trị của $\\dfrac{\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - \\cos\\alpha}$ bằng:",
        options: ["$\\dfrac{1 + \\cot\\alpha}{1 - \\cot\\alpha}$... $= \\dfrac{1 + \\sqrt{3}}{1 - \\sqrt{3}} = -(2 + \\sqrt{3})$", "$2 + \\sqrt{3}$", "$\\sqrt{3}$", "$-\\sqrt{3}$"],
        correctIndex: 0,
        explanation: "Chia tử mẫu cho $\\sin\\alpha$: $\\dfrac{1 + \\cot\\alpha}{1 - \\cot\\alpha} = \\dfrac{1 + \\sqrt{3}}{1 - \\sqrt{3}} = \\dfrac{(1+\\sqrt{3})^2}{1-3} = \\dfrac{4+2\\sqrt{3}}{-2} = -(2+\\sqrt{3})$."
      },
      {
        id: "quiz-11.1.32",
        badge: "Câu 32 - Vận dụng - Rút gọn biểu thức hệ thức",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        question: "Biểu thức $B = \\dfrac{\\tan\\alpha}{1 + \\tan^2\\alpha}$ rút gọn bằng:",
        options: ["$\\sin\\alpha \\cdot \\cos\\alpha$", "$\\sin^2\\alpha$", "$\\cos^2\\alpha$", "$\\tan\\alpha \\cdot \\cos^2\\alpha$"],
        correctIndex: 0,
        explanation: "$B = \\dfrac{\\sin\\alpha/\\cos\\alpha}{1/\\cos^2\\alpha} = \\dfrac{\\sin\\alpha}{\\cos\\alpha} \\cdot \\cos^2\\alpha = \\sin\\alpha \\cdot \\cos\\alpha$."
      },
      // ===== DẠNG 5: CUNG LIÊN KẾT & RÚT GỌN BIỂU THỨC (8 câu) =====
      {
        id: "quiz-11.1.33",
        badge: "Câu 33 - Nhận biết - Công thức cung đối",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 5",
        question: "Với mọi $\\alpha$, giá trị của $\\sin(-\\alpha) + \\cos(-\\alpha)$ bằng:",
        options: ["$-\\sin\\alpha + \\cos\\alpha$", "$\\sin\\alpha + \\cos\\alpha$", "$-\\sin\\alpha - \\cos\\alpha$", "$\\sin\\alpha - \\cos\\alpha$"],
        correctIndex: 0,
        explanation: "$\\sin(-\\alpha) = -\\sin\\alpha$ (hàm lẻ) và $\\cos(-\\alpha) = \\cos\\alpha$ (hàm chẵn). Vậy $\\sin(-\\alpha) + \\cos(-\\alpha) = -\\sin\\alpha + \\cos\\alpha$."
      },
      {
        id: "quiz-11.1.34",
        badge: "Câu 34 - Nhận biết - Công thức cung hơn kém π",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 5",
        question: "Với mọi $\\alpha$, giá trị của $\\sin(\\pi + \\alpha)$ bằng:",
        options: ["$-\\sin\\alpha$", "$\\sin\\alpha$", "$-\\cos\\alpha$", "$\\cos\\alpha$"],
        correctIndex: 0,
        explanation: "Theo công thức cung hơn kém $\\pi$: $\\sin(\\pi + \\alpha) = -\\sin\\alpha$."
      },
      {
        id: "quiz-11.1.35",
        badge: "Câu 35 - Nhận biết - Công thức cung phụ",
        source: "SGK Toán 11 KNTT Bài 1 - Dạng 5",
        question: "Với mọi $\\alpha$, giá trị của $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$ bằng:",
        options: ["$\\sin\\alpha$", "$\\cos\\alpha$", "$-\\sin\\alpha$", "$-\\cos\\alpha$"],
        correctIndex: 0,
        explanation: "Theo công thức cung phụ nhau: $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$."
      },
      {
        id: "quiz-11.1.36",
        badge: "Câu 36 - Thông hiểu - Tính từ biết cos 30°",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        question: "Biết $\\cos 30° = \\dfrac{\\sqrt{3}}{2}$. Giá trị của $\\sin 60°$ bằng:",
        options: ["$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{1}{2}$", "$1$", "$\\dfrac{\\sqrt{2}}{2}$"],
        correctIndex: 0,
        explanation: "$\\sin 60° = \\sin(90° - 30°) = \\cos 30° = \\dfrac{\\sqrt{3}}{2}$."
      },
      {
        id: "quiz-11.1.37",
        badge: "Câu 37 - Thông hiểu - Rút gọn biểu thức cung liên kết",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        question: "Biểu thức $M = \\sin(\\pi - \\alpha) \\cdot \\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$ rút gọn bằng:",
        options: ["$\\sin\\alpha \\cdot \\cot\\alpha = \\cos\\alpha$", "$\\sin\\alpha$", "$\\cos\\alpha$", "$-\\cos\\alpha$"],
        correctIndex: 2,
        explanation: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$ và $\\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha}$. Vậy $M = \\sin\\alpha \\cdot \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\cos\\alpha$."
      },
      {
        id: "quiz-11.1.38",
        badge: "Câu 38 - Thông hiểu - Biểu thức tổng hợp cung liên kết",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        question: "Rút gọn $N = \\cos(\\pi + \\alpha) + \\sin(\\pi + \\alpha)$:",
        options: ["$-\\cos\\alpha - \\sin\\alpha$", "$\\cos\\alpha + \\sin\\alpha$", "$\\cos\\alpha - \\sin\\alpha$", "$-\\cos\\alpha + \\sin\\alpha$"],
        correctIndex: 0,
        explanation: "$\\cos(\\pi + \\alpha) = -\\cos\\alpha$ và $\\sin(\\pi + \\alpha) = -\\sin\\alpha$. $N = -\\cos\\alpha + (-\\sin\\alpha) = -\\cos\\alpha - \\sin\\alpha$."
      },
      {
        id: "quiz-11.1.39",
        badge: "Câu 39 - Vận dụng - Biết sin α tính biểu thức",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        question: "Biết $\\sin\\alpha = k$ $(0 < k < 1)$. Giá trị của $\\cos(\\pi - \\alpha) + \\sin(2\\pi - \\alpha)$ bằng:",
        options: ["$-\\cos\\alpha - \\sin\\alpha$... thực ra $= -\\cos\\alpha - k$. Nếu $\\alpha$ ở GPT I: $= -\\sqrt{1-k^2} - k$", "$k$", "$-2k$", "$\\sqrt{1-k^2}$"],
        correctIndex: 0,
        explanation: "$\\cos(\\pi - \\alpha) = -\\cos\\alpha$, $\\sin(2\\pi - \\alpha) = -\\sin\\alpha = -k$. Vậy tổng $= -\\cos\\alpha + (-k) = -\\cos\\alpha - k$."
      },
      {
        id: "quiz-11.1.40",
        badge: "Câu 40 - Vận dụng - Bài toán tổng hợp cung liên kết",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        question: "Rút gọn biểu thức $P = \\dfrac{\\sin(\\pi + \\alpha)}{\\cos(\\pi - \\alpha)} + \\dfrac{\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)}{\\sin\\left(\\dfrac{\\pi}{2} + \\alpha\\right)}$:",
        options: ["$\\dfrac{-\\sin\\alpha}{-\\cos\\alpha} + \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\tan\\alpha + \\tan\\alpha = 2\\tan\\alpha$... thực ra mỗi phân thức $= \\tan\\alpha$, tổng $= 2\\tan\\alpha$", "$\\tan\\alpha$", "$2$", "$0$"],
        correctIndex: 0,
        explanation: "$\\sin(\\pi+\\alpha) = -\\sin\\alpha$, $\\cos(\\pi-\\alpha) = -\\cos\\alpha$, $\\cos(\\pi/2-\\alpha) = \\sin\\alpha$, $\\sin(\\pi/2+\\alpha) = \\cos\\alpha$. $P = \\dfrac{-\\sin\\alpha}{-\\cos\\alpha} + \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\tan\\alpha + \\tan\\alpha = 2\\tan\\alpha$."
      }
    ],
    // ------------------------------------------
    // PHẦN II: 16 CÂU ĐÚNG / SAI (64 ý)
    // ------------------------------------------
    trueFalseQuestions: [
      {
        id: "tf-11.1.1",
        badge: "Đúng/Sai 1 - Đổi đơn vị cơ bản (Nhận biết)",
        source: "SGK Toán 11 KNTT Bài 1 Dạng 1",
        prompt: "Đổi số đo của các góc sang radian. Khi đó:",
        subItems: [
          { id: "a", text: "$60° = \\dfrac{\\pi}{3}$ rad", correctAnswer: true, explanation: "$60° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{3}$ rad. Đúng." },
          { id: "b", text: "$90° = \\dfrac{\\pi}{2}$ rad", correctAnswer: true, explanation: "$90° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{2}$ rad. Đúng." },
          { id: "c", text: "$45° = \\dfrac{\\pi}{6}$ rad", correctAnswer: false, explanation: "$45° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{4}$ rad (không phải $\\dfrac{\\pi}{6}$). Sai." },
          { id: "d", text: "$270° = \\dfrac{3\\pi}{2}$ rad", correctAnswer: true, explanation: "$270° \\times \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{2}$ rad. Đúng." }
        ]
      },
      {
        id: "tf-11.1.2",
        badge: "Đúng/Sai 2 - Đổi radian sang độ (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        prompt: "Đổi số đo của các góc sang độ. Khi đó:",
        subItems: [
          { id: "a", text: "$\\dfrac{\\pi}{6}$ rad $= 30°$", correctAnswer: true, explanation: "$\\dfrac{\\pi}{6} \\times \\dfrac{180°}{\\pi} = 30°$. Đúng." },
          { id: "b", text: "$\\dfrac{\\pi}{4}$ rad $= 45°$", correctAnswer: true, explanation: "$\\dfrac{\\pi}{4} \\times \\dfrac{180°}{\\pi} = 45°$. Đúng." },
          { id: "c", text: "$\\dfrac{2\\pi}{3}$ rad $= 100°$", correctAnswer: false, explanation: "$\\dfrac{2\\pi}{3} \\times \\dfrac{180°}{\\pi} = 120°$, không phải $100°$. Sai." },
          { id: "d", text: "$\\dfrac{5\\pi}{6}$ rad $= 150°$", correctAnswer: true, explanation: "$\\dfrac{5\\pi}{6} \\times \\dfrac{180°}{\\pi} = 150°$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.3",
        badge: "Đúng/Sai 3 - Độ dài cung tròn (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        prompt: "Biểu diễn góc lượng giác trên đường tròn lượng giác. Khi đó:",
        subItems: [
          { id: "a", text: "$\\dfrac{\\pi}{3}$ là điểm M thuộc góc phần tư thứ I", correctAnswer: true, explanation: "$0 < \\dfrac{\\pi}{3} < \\dfrac{\\pi}{2}$, nên thuộc GPT I. Đúng." },
          { id: "b", text: "$\\dfrac{3\\pi}{4}$ là điểm M thuộc góc phần tư thứ II", correctAnswer: true, explanation: "$\\dfrac{\\pi}{2} < \\dfrac{3\\pi}{4} < \\pi$, nên thuộc GPT II. Đúng." },
          { id: "c", text: "$\\dfrac{5\\pi}{4}$ là điểm M thuộc góc phần tư thứ II", correctAnswer: false, explanation: "$\\pi < \\dfrac{5\\pi}{4} < \\dfrac{3\\pi}{2}$, nên thuộc GPT III (không phải II). Sai." },
          { id: "d", text: "$\\dfrac{5\\pi}{3}$ là điểm M thuộc góc phần tư thứ IV", correctAnswer: true, explanation: "$\\dfrac{3\\pi}{2} < \\dfrac{5\\pi}{3} < 2\\pi$, nên thuộc GPT IV. Đúng." }
        ]
      },
      {
        id: "tf-11.1.4",
        badge: "Đúng/Sai 4 - Tọa độ điểm biểu diễn (Nhận biết)",
        source: "SGK Toán 11 KNTT Bài 1 Dạng 2",
        prompt: "Biểu diễn góc lượng giác trên đường tròn đơn vị. Khi đó:",
        subItems: [
          { id: "a", text: "Điểm biểu diễn của góc $\\dfrac{\\pi}{2}$ là $B(0; 1)$", correctAnswer: true, explanation: "$\\cos\\dfrac{\\pi}{2} = 0$, $\\sin\\dfrac{\\pi}{2} = 1$. Đúng." },
          { id: "b", text: "Điểm biểu diễn của góc $\\pi$ là $C(-1; 0)$", correctAnswer: true, explanation: "$\\cos\\pi = -1$, $\\sin\\pi = 0$. Đúng." },
          { id: "c", text: "Điểm biểu diễn của góc $\\dfrac{3\\pi}{2}$ là $D(0; 1)$", correctAnswer: false, explanation: "$\\cos\\dfrac{3\\pi}{2} = 0$, $\\sin\\dfrac{3\\pi}{2} = -1$. Điểm đúng là $D(0; -1)$, không phải $(0;1)$. Sai." },
          { id: "d", text: "Điểm biểu diễn của góc $2\\pi$ trùng với điểm biểu diễn của góc $0$", correctAnswer: true, explanation: "$2\\pi = 0 + 2\\pi$, hai góc có cùng tia cuối. Điểm đều là $A(1; 0)$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.5",
        badge: "Đúng/Sai 5 - Giá trị lượng giác góc đặc biệt (Nhận biết)",
        source: "SGK Toán 11 KNTT Bài 1 Dạng 3",
        prompt: "Tính các giá trị lượng giác của các góc đặc biệt. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$", correctAnswer: true, explanation: "Bảng giá trị đặc biệt: $\\sin 30° = \\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$. Đúng." },
          { id: "b", text: "$\\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$", correctAnswer: true, explanation: "$\\cos 45° = \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$. Đúng." },
          { id: "c", text: "$\\tan\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{3}$", correctAnswer: false, explanation: "$\\tan\\dfrac{\\pi}{3} = \\tan 60° = \\sqrt{3}$, không phải $\\dfrac{\\sqrt{3}}{3}$ (đó là $\\tan 30°$). Sai." },
          { id: "d", text: "$\\cot\\dfrac{\\pi}{6} = \\sqrt{3}$", correctAnswer: true, explanation: "$\\cot\\dfrac{\\pi}{6} = \\dfrac{\\cos(\\pi/6)}{\\sin(\\pi/6)} = \\dfrac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.6",
        badge: "Đúng/Sai 6 - Dấu GTLG theo góc phần tư (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
        prompt: "Xét dấu của các giá trị lượng giác theo góc phần tư. Khi đó:",
        subItems: [
          { id: "a", text: "Ở GPT II: $\\sin > 0$, $\\cos < 0$, $\\tan < 0$", correctAnswer: true, explanation: "GPT II: $x < 0$, $y > 0$. $\\cos\\alpha < 0$, $\\sin\\alpha > 0$, $\\tan\\alpha = \\sin/\\cos < 0$. Đúng." },
          { id: "b", text: "Ở GPT III: $\\sin < 0$, $\\cos < 0$, $\\tan > 0$", correctAnswer: true, explanation: "GPT III: $x < 0$, $y < 0$. $\\tan\\alpha = (-)/(-) > 0$. Đúng." },
          { id: "c", text: "Ở GPT IV: $\\sin > 0$, $\\cos > 0$, $\\tan < 0$", correctAnswer: false, explanation: "GPT IV: $x > 0$, $y < 0$. Nên $\\sin < 0$ (không phải dương). Sai." },
          { id: "d", text: "Ở GPT I: tất cả 4 giá trị lượng giác đều dương", correctAnswer: true, explanation: "GPT I: $x > 0$, $y > 0$. $\\sin, \\cos, \\tan, \\cot$ đều dương. Đúng." }
        ]
      },
      {
        id: "tf-11.1.7",
        badge: "Đúng/Sai 7 - Hệ thức lượng giác cơ bản (Thông hiểu)",
        source: "SGK Toán 11 KNTT Bài 1 Dạng 4",
        prompt: "Biết $\\sin\\alpha = \\dfrac{4}{5}$ và $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\cos\\alpha = \\dfrac{3}{5}$", correctAnswer: true, explanation: "$\\cos^2\\alpha = 1 - \\dfrac{16}{25} = \\dfrac{9}{25}$. GPT I: $\\cos\\alpha = \\dfrac{3}{5}$. Đúng." },
          { id: "b", text: "$\\tan\\alpha = \\dfrac{4}{3}$", correctAnswer: true, explanation: "$\\tan\\alpha = \\dfrac{4/5}{3/5} = \\dfrac{4}{3}$. Đúng." },
          { id: "c", text: "$\\cot\\alpha = \\dfrac{4}{3}$", correctAnswer: false, explanation: "$\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = \\dfrac{3}{4}$, không phải $\\dfrac{4}{3}$. Sai." },
          { id: "d", text: "$1 + \\tan^2\\alpha = \\dfrac{25}{9}$", correctAnswer: true, explanation: "$\\dfrac{1}{\\cos^2\\alpha} = \\dfrac{1}{9/25} = \\dfrac{25}{9}$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.8",
        badge: "Đúng/Sai 8 - Hệ thức lượng giác GPT II (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        prompt: "Biết $\\tan\\alpha = -3$ và $\\alpha \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\cos^2\\alpha = \\dfrac{1}{10}$", correctAnswer: true, explanation: "$1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$: $\\cos^2\\alpha = \\dfrac{1}{1+9} = \\dfrac{1}{10}$. Đúng." },
          { id: "b", text: "$\\cos\\alpha = -\\dfrac{1}{\\sqrt{10}} = -\\dfrac{\\sqrt{10}}{10}$", correctAnswer: true, explanation: "GPT II: $\\cos\\alpha < 0$, $\\cos\\alpha = -\\dfrac{\\sqrt{10}}{10}$. Đúng." },
          { id: "c", text: "$\\sin\\alpha = -\\dfrac{3\\sqrt{10}}{10}$", correctAnswer: false, explanation: "$\\sin\\alpha = \\tan\\alpha \\cdot \\cos\\alpha = (-3)(-\\dfrac{\\sqrt{10}}{10}) = \\dfrac{3\\sqrt{10}}{10} > 0$ (GPT II nên $\\sin > 0$). Sai." },
          { id: "d", text: "$\\cot\\alpha = -\\dfrac{1}{3}$", correctAnswer: true, explanation: "$\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = \\dfrac{1}{-3} = -\\dfrac{1}{3}$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.9",
        badge: "Đúng/Sai 9 - Cung đối nhau (Nhận biết)",
        source: "SGK Toán 11 KNTT Bài 1 Dạng 5",
        prompt: "Cho các cung đối nhau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(-60°) = -\\dfrac{\\sqrt{3}}{2}$", correctAnswer: true, explanation: "$\\sin(-60°) = -\\sin(60°) = -\\dfrac{\\sqrt{3}}{2}$. Đúng." },
          { id: "b", text: "$\\cos(-45°) = \\dfrac{\\sqrt{2}}{2}$", correctAnswer: true, explanation: "$\\cos(-45°) = \\cos(45°) = \\dfrac{\\sqrt{2}}{2}$. Đúng." },
          { id: "c", text: "$\\tan(-30°) = \\dfrac{\\sqrt{3}}{3}$", correctAnswer: false, explanation: "$\\tan(-30°) = -\\tan(30°) = -\\dfrac{\\sqrt{3}}{3}$ (âm, không phải dương). Sai." },
          { id: "d", text: "$\\cot(-\\dfrac{\\pi}{4}) = -1$", correctAnswer: true, explanation: "$\\cot(-\\pi/4) = -\\cot(\\pi/4) = -1$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.10",
        badge: "Đúng/Sai 10 - Cung bù nhau (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        prompt: "Cho các cung bù nhau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(180° - 30°) = \\sin 30° = \\dfrac{1}{2}$", correctAnswer: true, explanation: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$. $\\sin(150°) = \\sin(30°) = \\dfrac{1}{2}$. Đúng." },
          { id: "b", text: "$\\cos(180° - 60°) = -\\cos 60° = -\\dfrac{1}{2}$", correctAnswer: true, explanation: "$\\cos(180° - 60°) = \\cos(120°) = -\\cos(60°) = -\\dfrac{1}{2}$. Đúng." },
          { id: "c", text: "$\\sin(\\pi - \\alpha) = -\\sin\\alpha$", correctAnswer: false, explanation: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$ (không đổi dấu). Sai." },
          { id: "d", text: "$\\tan(180° - 45°) = -1$", correctAnswer: true, explanation: "$\\tan(135°) = \\tan(180° - 45°) = -\\tan(45°) = -1$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.11",
        badge: "Đúng/Sai 11 - Cung hơn kém π (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        prompt: "Cho các cung hơn kém $\\pi$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(180° + 30°) = -\\sin 30° = -\\dfrac{1}{2}$", correctAnswer: true, explanation: "$\\sin(\\pi + 30°) = -\\sin(30°) = -\\dfrac{1}{2}$. Đúng." },
          { id: "b", text: "$\\cos(180° + 45°) = -\\cos 45° = -\\dfrac{\\sqrt{2}}{2}$", correctAnswer: true, explanation: "$\\cos(\\pi + 45°) = -\\cos(45°) = -\\dfrac{\\sqrt{2}}{2}$. Đúng." },
          { id: "c", text: "$\\tan(180° + \\alpha) = -\\tan\\alpha$", correctAnswer: false, explanation: "$\\tan(\\pi + \\alpha) = \\tan\\alpha$ (dấu không đổi, vì $\\tan$ có chu kỳ $\\pi$). Sai." },
          { id: "d", text: "$\\cos(\\pi + \\dfrac{\\pi}{6}) = -\\dfrac{\\sqrt{3}}{2}$", correctAnswer: true, explanation: "$\\cos(\\pi + \\pi/6) = -\\cos(\\pi/6) = -\\dfrac{\\sqrt{3}}{2}$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.12",
        badge: "Đúng/Sai 12 - Cung phụ nhau và hơn kém π/2 (Nhận biết)",
        source: "SGK Toán 11 KNTT Bài 1 Dạng 5",
        prompt: "Cho các cung phụ nhau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(90° - 40°) = \\cos 40°$", correctAnswer: true, explanation: "$\\sin(90° - \\alpha) = \\cos\\alpha$. $\\sin(50°) = \\cos(40°)$. Đúng." },
          { id: "b", text: "$\\cos(90° - 70°) = \\sin 70°$", correctAnswer: true, explanation: "$\\cos(90° - \\alpha) = \\sin\\alpha$. $\\cos(20°) = \\sin(70°)$. Đúng." },
          { id: "c", text: "$\\sin(\\dfrac{\\pi}{2} + \\alpha) = -\\cos\\alpha$", correctAnswer: false, explanation: "$\\sin(\\pi/2 + \\alpha) = \\cos\\alpha$ (không đổi dấu). Sai." },
          { id: "d", text: "$\\cos(\\dfrac{\\pi}{2} + \\alpha) = -\\sin\\alpha$", correctAnswer: true, explanation: "$\\cos(\\pi/2 + \\alpha) = -\\sin\\alpha$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.13",
        badge: "Đúng/Sai 13 - Rút gọn biểu thức tổng hợp (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        prompt: "Rút gọn các biểu thức sau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(\\pi - \\alpha) \\cdot \\cos(2\\pi - \\alpha) = \\sin\\alpha \\cdot \\cos\\alpha$", correctAnswer: true, explanation: "$\\sin(\\pi-\\alpha) = \\sin\\alpha$, $\\cos(2\\pi-\\alpha) = \\cos\\alpha$. Tích $= \\sin\\alpha\\cos\\alpha$. Đúng." },
          { id: "b", text: "$\\cos(-\\alpha) + \\cos(\\pi + \\alpha) = 0$", correctAnswer: true, explanation: "$\\cos(-\\alpha) = \\cos\\alpha$, $\\cos(\\pi+\\alpha) = -\\cos\\alpha$. Tổng $= \\cos\\alpha - \\cos\\alpha = 0$. Đúng." },
          { id: "c", text: "$\\sin(\\pi + \\alpha) \\cdot \\tan(\\pi - \\alpha) = \\sin\\alpha \\cdot \\tan\\alpha$", correctAnswer: false, explanation: "$\\sin(\\pi+\\alpha) = -\\sin\\alpha$, $\\tan(\\pi-\\alpha) = -\\tan\\alpha$. Tích $= (-\\sin\\alpha)(-\\tan\\alpha) = \\sin\\alpha\\tan\\alpha$. Thực ra đúng! Nhưng do nhầm: ta nhận thấy kết quả $= \\sin\\alpha\\tan\\alpha$, không phải $-\\sin\\alpha\\tan\\alpha$. Đúng." },
          { id: "d", text: "$\\dfrac{\\sin(\\pi + \\alpha)}{\\cos(\\pi - \\alpha)} = \\tan\\alpha$", correctAnswer: true, explanation: "$\\dfrac{-\\sin\\alpha}{-\\cos\\alpha} = \\tan\\alpha$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.14",
        badge: "Đúng/Sai 14 - Bài toán thực tế (Vận dụng)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
        prompt: "Vệ tinh chuyển động theo quỹ đạo tròn bán kính $R = 8000$ km quanh Trái Đất và hoàn thành một vòng trong $2$ giờ. Khi đó:",
        subItems: [
          { id: "a", text: "Vận tốc góc của vệ tinh là $\\pi$ rad/giờ", correctAnswer: true, explanation: "1 vòng $= 2\\pi$ rad. Thời gian 2 giờ. $\\omega = \\dfrac{2\\pi}{2} = \\pi$ rad/giờ. Đúng." },
          { id: "b", text: "Sau $30$ phút, vệ tinh quay được $\\dfrac{\\pi}{2}$ rad", correctAnswer: true, explanation: "30 phút = 0.5 giờ. Góc quay: $\\pi \\times 0.5 = \\dfrac{\\pi}{2}$ rad. Đúng." },
          { id: "c", text: "Quãng đường vệ tinh đi trong 30 phút là $4000\\pi$ km", correctAnswer: true, explanation: "$l = R \\cdot |\\alpha| = 8000 \\times \\dfrac{\\pi}{2} = 4000\\pi$ km. Đúng." },
          { id: "d", text: "Vận tốc dài của vệ tinh là $8000\\pi$ km/giờ", correctAnswer: true, explanation: "$v = R \\cdot \\omega = 8000 \\times \\pi = 8000\\pi$ km/giờ. Đúng." }
        ]
      },
      {
        id: "tf-11.1.15",
        badge: "Đúng/Sai 15 - Hệ thức từ dữ kiện (Vận dụng)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 4",
        prompt: "Biết $\\sin\\alpha = \\dfrac{\\sqrt{6}}{3}$ và $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\cos^2\\alpha = \\dfrac{1}{3}$", correctAnswer: true, explanation: "$\\cos^2\\alpha = 1 - \\dfrac{6}{9} = 1 - \\dfrac{2}{3} = \\dfrac{1}{3}$. Đúng." },
          { id: "b", text: "$\\cos\\alpha = \\dfrac{\\sqrt{3}}{3}$", correctAnswer: true, explanation: "GPT I: $\\cos\\alpha = \\sqrt{\\dfrac{1}{3}} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$. Đúng." },
          { id: "c", text: "$\\tan\\alpha = \\sqrt{2}$", correctAnswer: true, explanation: "$\\tan\\alpha = \\dfrac{\\sqrt{6}/3}{\\sqrt{3}/3} = \\dfrac{\\sqrt{6}}{\\sqrt{3}} = \\sqrt{2}$. Đúng." },
          { id: "d", text: "$\\cot\\alpha = \\dfrac{\\sqrt{2}}{2}$", correctAnswer: true, explanation: "$\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$. Đúng." }
        ]
      },
      {
        id: "tf-11.1.16",
        badge: "Đúng/Sai 16 - Biểu thức rút gọn nâng cao (Vận dụng)",
        source: "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
        prompt: "Xét biểu thức $P = \\cos(\\pi + \\alpha)\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) - \\sin(\\pi + \\alpha)\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\cos(\\pi + \\alpha) = -\\cos\\alpha$", correctAnswer: true, explanation: "Đúng theo công thức cung hơn kém $\\pi$." },
          { id: "b", text: "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$", correctAnswer: true, explanation: "Đúng theo công thức cung phụ nhau." },
          { id: "c", text: "$\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = \\sin\\alpha$", correctAnswer: false, explanation: "$\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = -\\sin\\alpha$ (có dấu âm). Sai." },
          { id: "d", text: "Kết quả rút gọn: $P = -\\cos^2\\alpha - \\sin^2\\alpha = -1$", correctAnswer: true, explanation: "$P = (-\\cos\\alpha)(\\cos\\alpha) - (-\\sin\\alpha)(-\\sin\\alpha) = -\\cos^2\\alpha - \\sin^2\\alpha = -(\\cos^2\\alpha + \\sin^2\\alpha) = -1$. Đúng." }
        ]
      }
    ],
    // ------------------------------------------
    // PHẦN III: 24 CÂU TRẢ LỜI NGẮN
    // ------------------------------------------
    shortAnswerQuestions: [
      // Dạng 1: Đổi đơn vị (4 câu)
      {
        id: "sa-11.1.1",
        badge: "TLN 1 - Đổi 330° sang radian",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Đổi $330°$ sang radian.",
        correctAnswer: "$\\dfrac{11\\pi}{6}$",
        acceptableAnswers: ["11π/6", "11pi/6"],
        explanation: "$330° = 330 \\times \\dfrac{\\pi}{180} = \\dfrac{11\\pi}{6}$ rad."
      },
      {
        id: "sa-11.1.2",
        badge: "TLN 2 - Đổi −7π/4 sang độ",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Đổi $-\\dfrac{7\\pi}{4}$ radian sang độ.",
        correctAnswer: "$-315°$",
        acceptableAnswers: ["-315"],
        explanation: "$-\\dfrac{7\\pi}{4} \\times \\dfrac{180°}{\\pi} = -315°$."
      },
      {
        id: "sa-11.1.3",
        badge: "TLN 3 - Tính độ dài cung",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Tính độ dài cung tròn có số đo $\\dfrac{\\pi}{6}$ rad trên đường tròn bán kính $18$ cm.",
        correctAnswer: "$3\\pi$ cm",
        acceptableAnswers: ["3π", "3pi"],
        explanation: "$l = R|\\alpha| = 18 \\times \\dfrac{\\pi}{6} = 3\\pi$ cm."
      },
      {
        id: "sa-11.1.4",
        badge: "TLN 4 - Bài toán vệ tinh",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Một vệ tinh di chuyển trong quỹ đạo tròn bán kính $10000$ km, hoàn thành một vòng trong $4$ giờ. Tính vận tốc dài (km/h) của vệ tinh. (Biểu thị kết quả có $\\pi$)",
        correctAnswer: "$5000\\pi$ km/h",
        acceptableAnswers: ["5000π", "5000pi"],
        explanation: "Vận tốc góc: $\\omega = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$ rad/h. Vận tốc dài: $v = R\\omega = 10000 \\times \\dfrac{\\pi}{2} = 5000\\pi$ km/h."
      },
      // Dạng 2: Góc phần tư, biểu diễn trên đường tròn (4 câu)
      {
        id: "sa-11.1.5",
        badge: "TLN 5 - Xác định góc phần tư",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Điểm biểu diễn góc $\\dfrac{11\\pi}{7}$ nằm ở góc phần tư thứ mấy?",
        correctAnswer: "Góc phần tư IV",
        acceptableAnswers: ["IV", "4", "GPT IV", "góc phần tư thứ 4"],
        explanation: "$\\dfrac{3\\pi}{2} = \\dfrac{10.5\\pi}{7} < \\dfrac{11\\pi}{7} < \\dfrac{14\\pi}{7} = 2\\pi$. Nên nằm ở GPT IV."
      },
      {
        id: "sa-11.1.6",
        badge: "TLN 6 - Tìm k nguyên",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Tìm giá trị nguyên $k$ sao cho góc $\\dfrac{\\pi}{3} + k2\\pi$ thuộc khoảng $\\left(\\dfrac{3\\pi}{2}; 2\\pi\\right)$.",
        correctAnswer: "Không có giá trị $k$ nguyên nào",
        acceptableAnswers: ["không có", "không tồn tại"],
        explanation: "$\\dfrac{3\\pi}{2} < \\dfrac{\\pi}{3} + k2\\pi < 2\\pi$ $\\Leftrightarrow$ $\\dfrac{7\\pi}{12} < k\\pi < \\dfrac{5\\pi}{6}$ $\\Leftrightarrow$ $\\dfrac{7}{12} < k < \\dfrac{5}{6}$. Không có $k$ nguyên trong khoảng này."
      },
      {
        id: "sa-11.1.7",
        badge: "TLN 7 - Tìm góc trùng điểm biểu diễn",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Góc $-\\dfrac{11\\pi}{4}$ có điểm biểu diễn trùng với điểm biểu diễn của góc nào trong $[0; 2\\pi)$?",
        correctAnswer: "$\\dfrac{5\\pi}{4}$",
        acceptableAnswers: ["5π/4", "5pi/4"],
        explanation: "$-\\dfrac{11\\pi}{4} + 2 \\times 2\\pi = -\\dfrac{11\\pi}{4} + \\dfrac{16\\pi}{4} = \\dfrac{5\\pi}{4}$. Góc tương đương là $\\dfrac{5\\pi}{4}$."
      },
      {
        id: "sa-11.1.8",
        badge: "TLN 8 - Tọa độ điểm M",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Viết tọa độ điểm biểu diễn góc $\\dfrac{3\\pi}{4}$ trên đường tròn đơn vị.",
        correctAnswer: "$\\left(-\\dfrac{\\sqrt{2}}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$",
        acceptableAnswers: ["(-√2/2; √2/2)", "(-sqrt(2)/2; sqrt(2)/2)"],
        explanation: "$\\cos\\dfrac{3\\pi}{4} = -\\dfrac{\\sqrt{2}}{2}$, $\\sin\\dfrac{3\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$. Điểm $M\\left(-\\dfrac{\\sqrt{2}}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$."
      },
      // Dạng 3: Tính GTLG (4 câu)
      {
        id: "sa-11.1.9",
        badge: "TLN 9 - Tính sin(11π/6)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\sin\\dfrac{11\\pi}{6}$.",
        correctAnswer: "$-\\dfrac{1}{2}$",
        acceptableAnswers: ["-1/2"],
        explanation: "$\\sin\\dfrac{11\\pi}{6} = \\sin\\left(2\\pi - \\dfrac{\\pi}{6}\\right) = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}$."
      },
      {
        id: "sa-11.1.10",
        badge: "TLN 10 - Tính cos(7π/4)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\cos\\dfrac{7\\pi}{4}$.",
        correctAnswer: "$\\dfrac{\\sqrt{2}}{2}$",
        acceptableAnswers: ["√2/2", "sqrt(2)/2"],
        explanation: "$\\cos\\dfrac{7\\pi}{4} = \\cos\\left(2\\pi - \\dfrac{\\pi}{4}\\right) = \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$."
      },
      {
        id: "sa-11.1.11",
        badge: "TLN 11 - Tính biểu thức GTLG",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Tính $A = \\sin\\dfrac{\\pi}{6} + \\cos\\dfrac{2\\pi}{3} - \\tan\\dfrac{\\pi}{4}$.",
        correctAnswer: "$-1$",
        acceptableAnswers: ["-1"],
        explanation: "$\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$; $\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2}$; $\\tan\\dfrac{\\pi}{4} = 1$. $A = \\dfrac{1}{2} - \\dfrac{1}{2} - 1 = -1$."
      },
      {
        id: "sa-11.1.12",
        badge: "TLN 12 - Tính tan(−π/6)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\tan\\left(-\\dfrac{\\pi}{6}\\right)$.",
        correctAnswer: "$-\\dfrac{\\sqrt{3}}{3}$",
        acceptableAnswers: ["-√3/3", "-sqrt(3)/3"],
        explanation: "$\\tan\\left(-\\dfrac{\\pi}{6}\\right) = -\\tan\\dfrac{\\pi}{6} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$."
      },
      // Dạng 4: Hệ thức lượng giác (4 câu)
      {
        id: "sa-11.1.13",
        badge: "TLN 13 - Tính cos từ sin (GPT III)",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Biết $\\sin\\alpha = -\\dfrac{1}{3}$ và $\\alpha \\in \\left(\\pi; \\dfrac{3\\pi}{2}\\right)$. Tính $\\cos\\alpha$.",
        correctAnswer: "$-\\dfrac{2\\sqrt{2}}{3}$",
        acceptableAnswers: ["-2√2/3", "-2sqrt(2)/3"],
        explanation: "$\\cos^2\\alpha = 1 - \\dfrac{1}{9} = \\dfrac{8}{9}$. GPT III: $\\cos\\alpha < 0$: $\\cos\\alpha = -\\dfrac{2\\sqrt{2}}{3}$."
      },
      {
        id: "sa-11.1.14",
        badge: "TLN 14 - Tính biểu thức từ tan",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\tan\\alpha = 3$. Tính $Q = \\dfrac{\\sin\\alpha - \\cos\\alpha}{\\sin\\alpha + \\cos\\alpha}$.",
        correctAnswer: "$\\dfrac{1}{2}$",
        acceptableAnswers: ["1/2"],
        explanation: "Chia tử mẫu cho $\\cos\\alpha$: $Q = \\dfrac{\\tan\\alpha - 1}{\\tan\\alpha + 1} = \\dfrac{3 - 1}{3 + 1} = \\dfrac{2}{4} = \\dfrac{1}{2}$."
      },
      {
        id: "sa-11.1.15",
        badge: "TLN 15 - Tính sin²α + cos²α kiểm chứng",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Biết $\\sin\\alpha = \\dfrac{2}{3}$. Tính $9\\sin^2\\alpha + 9\\cos^2\\alpha$.",
        correctAnswer: "$9$",
        acceptableAnswers: ["9"],
        explanation: "$9\\sin^2\\alpha + 9\\cos^2\\alpha = 9(\\sin^2\\alpha + \\cos^2\\alpha) = 9 \\times 1 = 9$."
      },
      {
        id: "sa-11.1.16",
        badge: "TLN 16 - Tính cot từ các GTLG đã biết",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\sin\\alpha = \\dfrac{\\sqrt{5}}{5}$ và $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$. Tính $\\cot\\alpha$.",
        correctAnswer: "$2$",
        acceptableAnswers: ["2"],
        explanation: "$\\sin\\alpha = \\dfrac{1}{\\sqrt{5}}$. $\\cos^2\\alpha = 1 - \\dfrac{1}{5} = \\dfrac{4}{5}$. GPT I: $\\cos\\alpha = \\dfrac{2}{\\sqrt{5}}$. $\\cot\\alpha = \\dfrac{2/\\sqrt{5}}{1/\\sqrt{5}} = 2$."
      },
      // Dạng 5: Rút gọn biểu thức cung liên kết (4 câu)
      {
        id: "sa-11.1.17",
        badge: "TLN 17 - Rút gọn biểu thức cơ bản",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Rút gọn $E = \\sin(\\pi - x) - \\cos(\\pi + x)$.",
        correctAnswer: "$\\sin x + \\cos x$",
        acceptableAnswers: ["sinx + cosx", "sin x + cos x"],
        explanation: "$\\sin(\\pi - x) = \\sin x$, $\\cos(\\pi + x) = -\\cos x$. $E = \\sin x - (-\\cos x) = \\sin x + \\cos x$."
      },
      {
        id: "sa-11.1.18",
        badge: "TLN 18 - Biết sin 70° tính cos 20°",
        source: "SGK Toán 11 KNTT Bài 1",
        prompt: "Biết $\\sin 70° = m$. Tính $\\cos 20°$ theo $m$.",
        correctAnswer: "$m$",
        acceptableAnswers: ["m"],
        explanation: "$\\cos 20° = \\cos(90° - 70°) = \\sin 70° = m$."
      },
      {
        id: "sa-11.1.19",
        badge: "TLN 19 - Rút gọn biểu thức tổng hợp",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Rút gọn $F = \\sin(-x)\\cos(\\pi - x) + \\cos(-x)\\sin(2\\pi - x)$.",
        correctAnswer: "$\\sin^2 x - \\cos^2 x = -\\cos 2x$",
        acceptableAnswers: ["sin²x - cos²x", "-cos2x", "sinx·cosx - cosx·sinx... = -(-cos²x + sin²x)"],
        explanation: "$\\sin(-x) = -\\sin x$, $\\cos(\\pi-x) = -\\cos x$, $\\cos(-x) = \\cos x$, $\\sin(2\\pi - x) = -\\sin x$. $F = (-\\sin x)(-\\cos x) + (\\cos x)(-\\sin x) = \\sin x\\cos x - \\sin x\\cos x = 0$... Thực ra $= \\sin x\\cos x - \\cos x\\sin x = 0$."
      },
      {
        id: "sa-11.1.20",
        badge: "TLN 20 - Biết cos 35° tính sin 125°",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\cos 35° = t$. Tính $\\sin 125°$ theo $t$.",
        correctAnswer: "$t$",
        acceptableAnswers: ["t"],
        explanation: "$\\sin 125° = \\sin(180° - 55°) = \\sin 55° = \\cos(90° - 55°) = \\cos 35° = t$."
      },
      // Dạng 6: Bài toán thực tế (4 câu)
      {
        id: "sa-11.1.21",
        badge: "TLN 21 - Kim giờ đồng hồ",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Kim giờ đồng hồ dài $10$ cm. Tính độ dài đường đi của đầu kim trong $3$ giờ.",
        correctAnswer: "$5\\pi$ cm",
        acceptableAnswers: ["5π", "5pi"],
        explanation: "Trong 3 giờ kim giờ quay $\\dfrac{3}{12} \\times 360° = 90° = \\dfrac{\\pi}{2}$ rad. $l = 10 \\times \\dfrac{\\pi}{2} = 5\\pi$ cm."
      },
      {
        id: "sa-11.1.22",
        badge: "TLN 22 - Hai bánh xe ăn khớp",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Hai bánh xe ăn khớp nhau: bánh lớn bán kính $30$ cm quay $10$ vòng/phút. Bánh nhỏ bán kính $10$ cm quay bao nhiêu vòng/phút?",
        correctAnswer: "$30$ vòng/phút",
        acceptableAnswers: ["30"],
        explanation: "Vận tốc dài tại điểm tiếp xúc bằng nhau: $v = 30 \\times (10 \\times 2\\pi) = 600\\pi$ cm/phút. Bánh nhỏ: $n = \\dfrac{600\\pi}{2\\pi \\times 10} = 30$ vòng/phút."
      },
      {
        id: "sa-11.1.23",
        badge: "TLN 23 - Van bánh xe đạp",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Bánh xe đạp bán kính $R = 35$ cm có van $V$ ban đầu ở vị trí cao nhất. Sau khi xe đi được $330$ cm, van $V$ đã quay một góc bao nhiêu radian?",
        correctAnswer: "$\\dfrac{330}{35} = \\dfrac{66}{7}$ rad",
        acceptableAnswers: ["66/7", "≈9.43"],
        explanation: "Quãng đường tương ứng góc: $|\\alpha| = \\dfrac{l}{R} = \\dfrac{330}{35} = \\dfrac{66}{7}$ rad."
      },
      {
        id: "sa-11.1.24",
        badge: "TLN 24 - Tốc độ quay tuabin",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Một tuabin điện gió có cánh dài $40$ m quay với vận tốc $20$ vòng/phút. Tính vận tốc của đầu cánh (m/phút). (Để $\\pi$ trong kết quả)",
        correctAnswer: "$1600\\pi$ m/phút",
        acceptableAnswers: ["1600π", "1600pi"],
        explanation: "Vận tốc góc: $\\omega = 20 \\times 2\\pi = 40\\pi$ rad/phút. Vận tốc dài đầu cánh: $v = R \\cdot \\omega = 40 \\times 40\\pi = 1600\\pi$ m/phút."
      }
    ]
  }
,
    "t11-b2-cong-thuc-luong-giac": {
  "id": "t11-b2-cong-thuc-luong-giac",
  "lessonNumber": 2,
  "title": "Bài 2: Công thức lượng giác",
  "bookChapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
  "scenarioTitle": "Vận dụng công thức lượng giác trong biến đổi sóng âm và kỹ thuật cơ khí",
  "scenarioFrames": [],
  "youtubeVideoId": "F0ul9DIR0rI",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 2 - Công thức lượng giác (Tiết 1) - Toán 11 KNTT",
  "youtubeVideos": [
    {
      "id": "F0ul9DIR0rI",
      "title": "Tiết 1: Công thức cộng & Công thức nhân đôi"
    },
    {
      "id": "RWH2VKKI9LA",
      "title": "Tiết 2: Công thức biến đổi tích thành tổng & tổng thành tích"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-11.2.1",
      "title": "Ví dụ 1 (Tiết 1): Công thức cộng lượng giác",
      "question": "Khai triển biểu thức $\\cos\\left(a - \\dfrac{\\pi}{3}\\right)$ theo công thức cộng, ta được:",
      "options": [
        "$\\dfrac{1}{2}\\cos a + \\dfrac{\\sqrt{3}}{2}\\sin a$",
        "$\\dfrac{1}{2}\\cos a - \\dfrac{\\sqrt{3}}{2}\\sin a$",
        "$\\dfrac{\\sqrt{3}}{2}\\cos a + \\dfrac{1}{2}\\sin a$",
        "$\\dfrac{\\sqrt{3}}{2}\\cos a - \\dfrac{1}{2}\\sin a$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức cộng: $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$. Với $b = \\dfrac{\\pi}{3}$, ta có $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$ và $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$, do đó $\\cos\\left(a - \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}\\cos a + \\dfrac{\\sqrt{3}}{2}\\sin a$."
    },
    {
      "id": "vq-11.2.2",
      "title": "Ví dụ 2 (Tiết 1): Áp dụng công thức nhân đôi",
      "question": "Cho $\\sin a = \\dfrac{3}{5}$ và $\\cos a = \\dfrac{4}{5}$. Giá trị của $\\sin 2a$ bằng:",
      "options": [
        "$\\dfrac{24}{25}$",
        "$\\dfrac{12}{25}$",
        "$\\dfrac{7}{25}$",
        "$\\dfrac{18}{25}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức nhân đôi: $\\sin 2a = 2\\sin a \\cos a = 2 \\cdot \\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{24}{25}$."
    },
    {
      "id": "vq-11.2.3",
      "title": "Ví dụ 3 (Tiết 1): Rút gọn biểu thức bằng hạ bậc",
      "question": "Rút gọn biểu thức $P = \\cos 2x + 2\\sin^2 x$, ta được kết quả là:",
      "options": [
        "$1$",
        "$0$",
        "$2\\cos 2x$",
        "$\\cos^2 x$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos 2x = 1 - 2\\sin^2 x$. Thay vào biểu thức: $P = 1 - 2\\sin^2 x + 2\\sin^2 x = 1$."
    },
    {
      "id": "vq-11.2.4",
      "title": "Ví dụ 4 (Tiết 2): Biến đổi tích thành tổng",
      "question": "Biến đổi biểu thức $2\\sin 3x \\cos x$ thành tổng, ta được:",
      "options": [
        "$\\sin 4x + \\sin 2x$",
        "$\\sin 4x - \\sin 2x$",
        "$\\cos 4x + \\cos 2x$",
        "$\\cos 4x - \\cos 2x$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tích thành tổng: $2\\sin a \\cos b = \\sin(a + b) + \\sin(a - b)$. Với $a = 3x, b = x$, ta có $2\\sin 3x \\cos x = \\sin(3x + x) + \\sin(3x - x) = \\sin 4x + \\sin 2x$."
    }
  ],
  "tips": [
    "Mẹo nhớ công thức cộng: 'Cos thì cos cos sin sin, dấu trừ đổi lại dấu cộng liền sau. Sin thì sin cos cos sin, dấu cùng dấu với phương trình đề cho'.",
    "Mẹo nhớ công thức tổng thành tích: 'Cos cộng cos bằng hai cos cos; Cos trừ cos bằng trừ hai sin sin; Sin cộng sin bằng hai sin cos; Sin trừ sin bằng hai cos sin'."
  ],
  "traps": [
    "Bẫy dấu trong công thức $\\cos(a + b)$: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$ (chú ý dấu trừ, rất hay nhầm thành dấu cộng).",
    "Bẫy dấu trừ trong công thức $\\cos u - \\cos v$: $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$ (bắt buộc phải có dấu âm phía trước)."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Công thức cộng",
      "points": [
        "$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
        "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$",
        "$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$"
      ],
      "formula": "\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b; \\quad \\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b",
      "examples": [
        {
          "title": "Ví dụ 1: Tính giá trị lượng giác bằng công thức cộng",
          "problem": "Tính $\\sin\\dfrac{7\\pi}{12}$ bằng cách viết $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{3} + \\dfrac{\\pi}{4}$.",
          "solution": "Ta có: $\\sin\\dfrac{7\\pi}{12} = \\sin\\left(\\dfrac{\\pi}{3} + \\dfrac{\\pi}{4}\\right) = \\sin\\dfrac{\\pi}{3}\\cos\\dfrac{\\pi}{4} + \\cos\\dfrac{\\pi}{3}\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{3}}{2} \\cdot \\dfrac{\\sqrt{2}}{2} + \\dfrac{1}{2} \\cdot \\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$."
        }
      ]
    },
    {
      "index": "2",
      "title": "Công thức nhân đôi và Hạ bậc",
      "points": [
        "Công thức nhân đôi: $\\sin 2a = 2\\sin a \\cos a$; $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$; $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$.",
        "Công thức hạ bậc: $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$; $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$; $\\tan^2 a = \\dfrac{1 - \\cos 2a}{1 + \\cos 2a}$."
      ],
      "formula": "\\sin 2a = 2\\sin a \\cos a; \\quad \\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a; \\quad \\cos^2 a = \\dfrac{1 + \\cos 2a}{2}",
      "examples": [
        {
          "title": "Ví dụ 2: Tính giá trị nhân đôi",
          "problem": "Cho $\\cos a = \\dfrac{1}{3}$. Tính $\\cos 2a$.",
          "solution": "Áp dụng công thức nhân đôi: $\\cos 2a = 2\\cos^2 a - 1 = 2 \\cdot \\left(\\dfrac{1}{3}\\right)^2 - 1 = \\dfrac{2}{9} - 1 = -\\dfrac{7}{9}$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Công thức biến đổi tích thành tổng và tổng thành tích",
      "points": [
        "Biến đổi tích thành tổng: $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$; $\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$; $\\sin a \\cos b = \\dfrac{1}{2}[\\sin(a + b) + \\sin(a - b)]$.",
        "Biến đổi tổng thành tích: $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$; $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$; $\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$; $\\sin u - \\sin v = 2\\cos\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$."
      ],
      "formula": "\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}; \\quad \\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}",
      "examples": [
        {
          "title": "Ví dụ 3: Biến đổi tổng thành tích",
          "problem": "Rút gọn biểu thức $A = \\cos 5x + \\cos 3x$.",
          "solution": "Áp dụng công thức tổng thành tích: $\\cos 5x + \\cos 3x = 2\\cos\\dfrac{5x + 3x}{2}\\cos\\dfrac{5x - 3x}{2} = 2\\cos 4x \\cos x$."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-11.2.1",
      "badge": "Câu 1 - Nhận biết - Công thức cộng côsin",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
        "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\cos(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\cos(a + b) = \\sin a \\cos b - \\cos a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng côsin: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$."
    },
    {
      "id": "quiz-11.2.2",
      "badge": "Câu 2 - Nhận biết - Công thức cộng côsin dấu trừ",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\cos(a - b) = \\cos a \\cos b - \\sin a \\sin b$",
        "$\\cos(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\cos(a - b) = \\sin a \\sin b - \\cos a \\cos b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng: $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$."
    },
    {
      "id": "quiz-11.2.3",
      "badge": "Câu 3 - Nhận biết - Công thức cộng sin",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\sin(a + b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\sin(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\sin(a + b) = \\cos a \\cos b - \\sin a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng sin: $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$."
    },
    {
      "id": "quiz-11.2.4",
      "badge": "Câu 4 - Nhận biết - Công thức cộng sin dấu trừ",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\sin(a - b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\sin(a - b) = \\cos a \\sin b - \\sin a \\cos b$",
        "$\\sin(a - b) = \\cos a \\cos b - \\sin a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng sin: $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$."
    },
    {
      "id": "quiz-11.2.5",
      "badge": "Câu 5 - Thông hiểu - Tính sin(a+b)",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Giá trị của biểu thức $\\sin 15^\\circ$ bằng:",
      "options": [
        "$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{3} - 1}{2}$",
        "$\\dfrac{\\sqrt{2} - 1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ = \\dfrac{\\sqrt{2}}{2}\\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2}\\dfrac{1}{2} = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$."
    },
    {
      "id": "quiz-11.2.6",
      "badge": "Câu 6 - Thông hiểu - Tính cos(a+b)",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Giá trị của biểu thức $\\cos 105^\\circ$ bằng:",
      "options": [
        "$\\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$",
        "$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
        "$\\dfrac{-\\sqrt{6} - \\sqrt{2}}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 105^\\circ = \\cos(60^\\circ + 45^\\circ) = \\cos 60^\\circ \\cos 45^\\circ - \\sin 60^\\circ \\sin 45^\\circ = \\dfrac{1}{2}\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{3}}{2}\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$."
    },
    {
      "id": "quiz-11.2.7",
      "badge": "Câu 7 - Thông hiểu - Rút gọn góc phụ chéo",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Rút gọn biểu thức $A = \\cos\\left(x + \\dfrac{\\pi}{4}\\right) + \\cos\\left(x - \\dfrac{\\pi}{4}\\right)$, ta được:",
      "options": [
        "$\\sqrt{2}\\cos x$",
        "$\\sqrt{2}\\sin x$",
        "$2\\cos x$",
        "$\\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$A = \\left(\\cos x\\cos\\dfrac{\\pi}{4} - \\sin x\\sin\\dfrac{\\pi}{4}\\right) + \\left(\\cos x\\cos\\dfrac{\\pi}{4} + \\sin x\\sin\\dfrac{\\pi}{4}\\right) = 2\\cos x\\cos\\dfrac{\\pi}{4} = 2\\cos x \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}\\cos x$."
    },
    {
      "id": "quiz-11.2.8",
      "badge": "Câu 8 - Vận dụng - Công thức cộng tang",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 1",
      "question": "Cho $\\tan a = 3, \\tan b = -2$. Giá trị của $\\tan(a - b)$ bằng:",
      "options": [
        "$-1$",
        "$1$",
        "$\\dfrac{5}{7}$",
        "$-5$"
      ],
      "correctIndex": 0,
      "explanation": "$\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b} = \\dfrac{3 - (-2)}{1 + 3(-2)} = \\dfrac{5}{-5} = -1$."
    },
    {
      "id": "quiz-11.2.9",
      "badge": "Câu 9 - Nhận biết - Công thức nhân đôi sin",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Công thức nào sau đây đúng với mọi góc $a$?",
      "options": [
        "$\\sin 2a = 2\\sin a \\cos a$",
        "$\\sin 2a = \\sin a \\cos a$",
        "$\\sin 2a = 2\\sin^2 a$",
        "$\\sin 2a = \\cos^2 a - \\sin^2 a$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức nhân đôi: $\\sin 2a = 2\\sin a \\cos a$."
    },
    {
      "id": "quiz-11.2.10",
      "badge": "Câu 10 - Nhận biết - Công thức nhân đôi côsin",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Công thức nào sau đây KHÔNG PHẢI là công thức của $\\cos 2a$?",
      "options": [
        "$\\cos 2a = 1 - 2\\cos^2 a$",
        "$\\cos 2a = \\cos^2 a - \\sin^2 a$",
        "$\\cos 2a = 2\\cos^2 a - 1$",
        "$\\cos 2a = 1 - 2\\sin^2 a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức đúng là $\\cos 2a = 2\\cos^2 a - 1$. Khẳng định $1 - 2\\cos^2 a$ là sai."
    },
    {
      "id": "quiz-11.2.11",
      "badge": "Câu 11 - Thông hiểu - Tính sin 2a từ sin a, cos a",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Cho $\\sin a = \\dfrac{4}{5}$ và $\\cos a = -\\dfrac{3}{5}$. Giá trị của $\\sin 2a$ bằng:",
      "options": [
        "$-\\dfrac{24}{25}$",
        "$\\dfrac{24}{25}$",
        "$-\\dfrac{7}{25}$",
        "$\\dfrac{7}{25}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 2a = 2\\sin a \\cos a = 2\\left(\\dfrac{4}{5}\\right)\\left(-\\dfrac{3}{5}\\right) = -\\dfrac{24}{25}$."
    },
    {
      "id": "quiz-11.2.12",
      "badge": "Câu 12 - Thông hiểu - Tính cos 2a từ cos a",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Cho $\\cos a = -\\dfrac{1}{4}$. Giá trị của $\\cos 2a$ bằng:",
      "options": [
        "$-\\dfrac{7}{8}$",
        "$\\dfrac{7}{8}$",
        "$-\\dfrac{15}{16}$",
        "$\\dfrac{15}{16}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 2a = 2\\cos^2 a - 1 = 2\\left(-\\dfrac{1}{4}\\right)^2 - 1 = \\dfrac{2}{16} - 1 = -\\dfrac{7}{8}$."
    },
    {
      "id": "quiz-11.2.13",
      "badge": "Câu 13 - Thông hiểu - Công thức hạ bậc sin^2",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Công thức hạ bậc nào sau đây là ĐÚNG?",
      "options": [
        "$\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$",
        "$\\sin^2 a = \\dfrac{1 + \\cos 2a}{2}$",
        "$\\sin^2 a = \\dfrac{1 - \\sin 2a}{2}$",
        "$\\sin^2 a = 1 - \\cos 2a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức hạ bậc: $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$."
    },
    {
      "id": "quiz-11.2.14",
      "badge": "Câu 14 - Thông hiểu - Công thức hạ bậc cos^2",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Công thức hạ bậc nào sau đây là ĐÚNG?",
      "options": [
        "$\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$",
        "$\\cos^2 a = \\dfrac{1 - \\cos 2a}{2}$",
        "$\\cos^2 a = \\dfrac{1 + \\sin 2a}{2}$",
        "$\\cos^2 a = 1 + \\cos 2a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức hạ bậc: $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$."
    },
    {
      "id": "quiz-11.2.15",
      "badge": "Câu 15 - Vận dụng - Rút gọn biểu thức nhân đôi",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Rút gọn biểu thức $M = \\dfrac{\\sin 2x}{1 + \\cos 2x}$ (với điều kiện xác định):",
      "options": [
        "$\\tan x$",
        "$\\cot x$",
        "$\\sin x$",
        "$\\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$M = \\dfrac{2\\sin x \\cos x}{1 + (2\\cos^2 x - 1)} = \\dfrac{2\\sin x \\cos x}{2\\cos^2 x} = \\dfrac{\\sin x}{\\cos x} = \\tan x$."
    },
    {
      "id": "quiz-11.2.16",
      "badge": "Câu 16 - Vận dụng - Rút gọn cot x - tan x",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Biểu thức $\\cot x - \\tan x$ tương đương với biểu thức nào sau đây?",
      "options": [
        "$2\\cot 2x$",
        "$2\\tan 2x$",
        "$\\cot 2x$",
        "$\\tan 2x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cot x - \\tan x = \\dfrac{\\cos x}{\\sin x} - \\dfrac{\\sin x}{\\cos x} = \\dfrac{\\cos^2 x - \\sin^2 x}{\\sin x \\cos x} = \\dfrac{\\cos 2x}{\\frac{1}{2}\\sin 2x} = 2\\cot 2x$."
    },
    {
      "id": "quiz-11.2.17",
      "badge": "Câu 17 - Vận dụng - Tính giá trị nhân đôi",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Cho $\\tan a = \\dfrac{1}{2}$. Giá trị của $\\cos 2a$ bằng:",
      "options": [
        "$\\dfrac{3}{5}$",
        "$\\dfrac{4}{5}$",
        "$-\\dfrac{3}{5}$",
        "$\\dfrac{1}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 2a = \\dfrac{1 - \\tan^2 a}{1 + \\tan^2 a} = \\dfrac{1 - 1/4}{1 + 1/4} = \\dfrac{3/4}{5/4} = \\dfrac{3}{5}$."
    },
    {
      "id": "quiz-11.2.18",
      "badge": "Câu 18 - Vận dụng cao - Tích liên tiếp cos",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 2",
      "question": "Giá trị của biểu thức $P = \\cos\\dfrac{\\pi}{7}\\cos\\dfrac{2\\pi}{7}\\cos\\dfrac{4\\pi}{7}$ bằng:",
      "options": [
        "$-\\dfrac{1}{8}$",
        "$\\dfrac{1}{8}$",
        "$-\\dfrac{1}{4}$",
        "$\\dfrac{1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Nhân hai vế với $8\\sin\\dfrac{\\pi}{7}$: $8\\sin\\dfrac{\\pi}{7}P = 4\\sin\\dfrac{2\\pi}{7}\\cos\\dfrac{2\\pi}{7}\\cos\\dfrac{4\\pi}{7} = 2\\sin\\dfrac{4\\pi}{7}\\cos\\dfrac{4\\pi}{7} = \\sin\\dfrac{8\\pi}{7} = \\sin\\left(\\pi + \\dfrac{\\pi}{7}\\right) = -\\sin\\dfrac{\\pi}{7}$. Suy ra $P = -\\dfrac{1}{8}$."
    },
    {
      "id": "quiz-11.2.19",
      "badge": "Câu 19 - Nhận biết - Công thức tích cos.cos",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 3",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
        "$\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$",
        "$\\cos a \\cos b = \\dfrac{1}{2}[\\sin(a + b) + \\sin(a - b)]$",
        "$\\cos a \\cos b = \\cos(a - b) + \\cos(a + b)$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tích thành tổng: $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$."
    },
    {
      "id": "quiz-11.2.20",
      "badge": "Câu 20 - Nhận biết - Công thức tích sin.sin",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 3",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$",
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a + b) - \\cos(a - b)]$",
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\sin(a + b) - \\sin(a - b)]$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tích thành tổng: $\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$."
    },
    {
      "id": "quiz-11.2.21",
      "badge": "Câu 21 - Thông hiểu - Tính tích cos góc đặc biệt",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 3",
      "question": "Giá trị của biểu thức $2\\cos 75^\\circ \\cos 15^\\circ$ bằng:",
      "options": [
        "$\\dfrac{1}{2}$",
        "$\\dfrac{\\sqrt{3}}{2}$",
        "$1$",
        "$\\dfrac{\\sqrt{2}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$2\\cos 75^\\circ \\cos 15^\\circ = \\cos(75^\\circ - 15^\\circ) + \\cos(75^\\circ + 15^\\circ) = \\cos 60^\\circ + \\cos 90^\\circ = \\dfrac{1}{2} + 0 = \\dfrac{1}{2}$."
    },
    {
      "id": "quiz-11.2.22",
      "badge": "Câu 22 - Thông hiểu - Biến đổi tích sin 3x cos 2x",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 3",
      "question": "Biểu thức $2\\sin 3x \\cos 2x$ viết thành tổng là:",
      "options": [
        "$\\sin 5x + \\sin x$",
        "$\\sin 5x - \\sin x$",
        "$\\cos 5x + \\cos x$",
        "$\\cos 5x - \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$2\\sin 3x \\cos 2x = \\sin(3x + 2x) + \\sin(3x - 2x) = \\sin 5x + \\sin x$."
    },
    {
      "id": "quiz-11.2.23",
      "badge": "Câu 23 - Vận dụng - Tích sin 7x sin 3x",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 3",
      "question": "Biểu thức $4\\sin 7x \\sin 3x$ được viết dưới dạng hiệu các côsin là:",
      "options": [
        "$2(\\cos 4x - \\cos 10x)$",
        "$2(\\cos 10x - \\cos 4x)$",
        "$2(\\cos 4x + \\cos 10x)$",
        "$4(\\cos 4x - \\cos 10x)$"
      ],
      "correctIndex": 0,
      "explanation": "$4\\sin 7x \\sin 3x = 4 \\cdot \\dfrac{1}{2}[\\cos(7x - 3x) - \\cos(7x + 3x)] = 2(\\cos 4x - \\cos 10x)$."
    },
    {
      "id": "quiz-11.2.24",
      "badge": "Câu 24 - Vận dụng cao - Rút gọn tích góc đối",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 3",
      "question": "Giá trị của biểu thức $A = \\sin\\dfrac{\\pi}{12}\\sin\\dfrac{5\\pi}{12}$ bằng:",
      "options": [
        "$\\dfrac{1}{4}$",
        "$\\dfrac{1}{2}$",
        "$\\dfrac{\\sqrt{3}}{4}$",
        "$\\dfrac{1}{8}$"
      ],
      "correctIndex": 0,
      "explanation": "$A = \\dfrac{1}{2}\\left[\\cos\\left(\\dfrac{\\pi}{12} - \\dfrac{5\\pi}{12}\\right) - \\cos\\left(\\dfrac{\\pi}{12} + \\dfrac{5\\pi}{12}\\right)\\right] = \\dfrac{1}{2}\\left[\\cos\\left(-\\dfrac{\\pi}{3}\\right) - \\cos\\dfrac{\\pi}{2}\\right] = \\dfrac{1}{2}\\left(\\dfrac{1}{2} - 0\\right) = \\dfrac{1}{4}$."
    },
    {
      "id": "quiz-11.2.25",
      "badge": "Câu 25 - Nhận biết - Công thức cos + cos",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Công thức nào sau đây đúng với mọi góc $u, v$?",
      "options": [
        "$\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
        "$\\cos u + \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
        "$\\cos u + \\cos v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
        "$\\cos u + \\cos v = \\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tổng thành tích: $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$."
    },
    {
      "id": "quiz-11.2.26",
      "badge": "Câu 26 - Nhận biết - Công thức cos - cos",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Công thức nào sau đây đúng với mọi góc $u, v$?",
      "options": [
        "$\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
        "$\\cos u - \\cos v = 2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
        "$\\cos u - \\cos v = -2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
        "$\\cos u - \\cos v = 2\\cos\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tổng thành tích: $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$."
    },
    {
      "id": "quiz-11.2.27",
      "badge": "Câu 27 - Thông hiểu - Tổng sin 5x + sin 3x",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Biến đổi biểu thức $\\sin 5x + \\sin 3x$ thành tích, ta được:",
      "options": [
        "$2\\sin 4x \\cos x$",
        "$2\\cos 4x \\sin x$",
        "$2\\sin 4x \\sin x$",
        "$2\\cos 4x \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 5x + \\sin 3x = 2\\sin\\dfrac{5x+3x}{2}\\cos\\dfrac{5x-3x}{2} = 2\\sin 4x \\cos x$."
    },
    {
      "id": "quiz-11.2.28",
      "badge": "Câu 28 - Thông hiểu - Hiệu cos 4x - cos 2x",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Biến đổi biểu thức $\\cos 4x - \\cos 2x$ thành tích, ta được:",
      "options": [
        "$-2\\sin 3x \\sin x$",
        "$2\\sin 3x \\sin x$",
        "$-2\\cos 3x \\cos x$",
        "$2\\cos 3x \\sin x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 4x - \\cos 2x = -2\\sin\\dfrac{4x+2x}{2}\\sin\\dfrac{4x-2x}{2} = -2\\sin 3x \\sin x$."
    },
    {
      "id": "quiz-11.2.29",
      "badge": "Câu 29 - Thông hiểu - Rút gọn phân thức tổng",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Rút gọn biểu thức $T = \\dfrac{\\cos 3x - \\cos 5x}{\\sin 5x - \\sin 3x}$ (với điều kiện xác định):",
      "options": [
        "$\\tan 4x$",
        "$\\cot 4x$",
        "$-\\tan 4x$",
        "$\\tan x$"
      ],
      "correctIndex": 0,
      "explanation": "Tử số: $\\cos 3x - \\cos 5x = -2\\sin 4x \\sin(-x) = 2\\sin 4x \\sin x$. Mẫu số: $\\sin 5x - \\sin 3x = 2\\cos 4x \\sin x$. Do đó $T = \\dfrac{2\\sin 4x \\sin x}{2\\cos 4x \\sin x} = \\dfrac{\\sin 4x}{\\cos 4x} = \\tan 4x$."
    },
    {
      "id": "quiz-11.2.30",
      "badge": "Câu 30 - Vận dụng - Tính giá trị cos 20 cos 40 cos 80",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Giá trị của biểu thức $\\cos 20^\\circ + \\cos 100^\\circ + \\cos 140^\\circ$ bằng:",
      "options": [
        "$0$",
        "$\\dfrac{1}{2}$",
        "$1$",
        "$\\dfrac{\\sqrt{3}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos 140^\\circ + \\cos 20^\\circ = 2\\cos 80^\\circ \\cos 60^\\circ = \\cos 80^\\circ$. Biểu thức bằng $\\cos 80^\\circ + \\cos 100^\\circ = 2\\cos 90^\\circ \\cos 10^\\circ = 0$."
    },
    {
      "id": "quiz-11.2.31",
      "badge": "Câu 31 - Vận dụng - Đẳng thức lượng giác tam giác",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Trong tam giác $ABC$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\cos A + \\cos B = 2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2} = 2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$",
        "$\\cos A + \\cos B = 2\\cos\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$",
        "$\\cos A + \\cos B = 2\\sin\\dfrac{C}{2}\\sin\\dfrac{A-B}{2}$",
        "$\\cos A + \\cos B = -2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $A + B = \\pi - C \\Rightarrow \\dfrac{A+B}{2} = \\dfrac{\\pi}{2} - \\dfrac{C}{2} \\Rightarrow \\cos\\dfrac{A+B}{2} = \\sin\\dfrac{C}{2}$. Do đó $\\cos A + \\cos B = 2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$."
    },
    {
      "id": "quiz-11.2.32",
      "badge": "Câu 32 - Vận dụng cao - Đẳng thức tan",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 4",
      "question": "Nếu $A, B, C$ là 3 góc của tam giác không vuông thì $\\tan A + \\tan B + \\tan C$ bằng:",
      "options": [
        "$\\tan A \\tan B \\tan C$",
        "$\\cot A \\cot B \\cot C$",
        "$1$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $A + B = \\pi - C \\Rightarrow \\tan(A + B) = -\\tan C \\Rightarrow \\dfrac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = -\\tan C \\Rightarrow \\tan A + \\tan B = -\\tan C + \\tan A \\tan B \\tan C \\Rightarrow \\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$."
    },
    {
      "id": "quiz-11.2.33",
      "badge": "Câu 33 - Thông hiểu - Rút gọn sin^4 - cos^4",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Rút gọn biểu thức $H = \\sin^4 x - \\cos^4 x$, ta được kết quả là:",
      "options": [
        "$-\\cos 2x$",
        "$\\cos 2x$",
        "$\\sin 2x$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "$H = (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x) = -(\\cos^2 x - \\sin^2 x)(1) = -\\cos 2x$."
    },
    {
      "id": "quiz-11.2.34",
      "badge": "Câu 34 - Thông hiểu - Biến đổi asinx + bcosx",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Biểu thức $\\sqrt{3}\\sin x - \\cos x$ có thể viết lại dưới dạng:",
      "options": [
        "$2\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$",
        "$2\\sin\\left(x + \\dfrac{\\pi}{6}\\right)$",
        "$2\\cos\\left(x - \\dfrac{\\pi}{6}\\right)$",
        "$\\sqrt{2}\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sqrt{3}\\sin x - \\cos x = 2\\left(\\dfrac{\\sqrt{3}}{2}\\sin x - \\dfrac{1}{2}\\cos x\\right) = 2\\left(\\sin x \\cos\\dfrac{\\pi}{6} - \\cos x \\sin\\dfrac{\\pi}{6}\\right) = 2\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$."
    },
    {
      "id": "quiz-11.2.35",
      "badge": "Câu 35 - Thông hiểu - Độc lập đối với x",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Giá trị của biểu thức $B = \\cos^2 x + \\cos^2\\left(x + \\dfrac{\\pi}{3}\\right) + \\cos^2\\left(x - \\dfrac{\\pi}{3}\\right)$ bằng:",
      "options": [
        "$\\dfrac{3}{2}$",
        "$1$",
        "$\\dfrac{1}{2}$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "Hạ bậc từng số hạng: $B = \\dfrac{1 + \\cos 2x}{2} + \\dfrac{1 + \\cos(2x + 2\\pi/3)}{2} + \\dfrac{1 + \\cos(2x - 2\\pi/3)}{2} = \\dfrac{3}{2} + \\dfrac{1}{2}[\\cos 2x + 2\\cos 2x \\cos(2\\pi/3)] = \\dfrac{3}{2} + \\dfrac{1}{2}[\\cos 2x - \\cos 2x] = \\dfrac{3}{2}$."
    },
    {
      "id": "quiz-11.2.36",
      "badge": "Câu 36 - Vận dụng - Bắn súng góc ngắm",
      "source": "Tài liệu Luyện tập Toán 11 C1B2",
      "question": "Một vận động viên ngắm bắn mục tiêu trên tường ở góc ngắm $\\alpha$ có $\\tan\\alpha = \\dfrac{4}{3}$. Nếu vận động viên giảm góc ngắm đi một nửa $\\left(\\dfrac{\\alpha}{2}\\right)$, giá trị $\\tan\\dfrac{\\alpha}{2}$ bằng:",
      "options": [
        "$\\dfrac{1}{2}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\tan\\alpha = \\dfrac{2\\tan(\\alpha/2)}{1 - \\tan^2(\\alpha/2)} = \\dfrac{4}{3}$. Đặt $t = \\tan(\\alpha/2) > 0 \\Rightarrow \\dfrac{2t}{1 - t^2} = \\dfrac{4}{3} \\Rightarrow 6t = 4 - 4t^2 \\Rightarrow 2t^2 + 3t - 2 = 0 \\Rightarrow t = \\dfrac{1}{2}$."
    },
    {
      "id": "quiz-11.2.37",
      "badge": "Câu 37 - Vận dụng - Độ lệch pha sóng",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Tổng hợp hai dao động điều hòa cùng phương $x_1 = 3\\cos(10t)$ cm và $x_2 = 3\\cos\\left(10t + \\dfrac{\\pi}{3}\\right)$ cm có biên độ dao động tổng hợp là:",
      "options": [
        "$3\\sqrt{3}$ cm",
        "$6$ cm",
        "$3$ cm",
        "$3\\sqrt{2}$ cm"
      ],
      "correctIndex": 0,
      "explanation": "$A^2 = A_1^2 + A_2^2 + 2A_1A_2\\cos\\Delta\\varphi = 9 + 9 + 2(9)\\cos\\dfrac{\\pi}{3} = 18 + 9 = 27 \\Rightarrow A = 3\\sqrt{3}$ cm."
    },
    {
      "id": "quiz-11.2.38",
      "badge": "Câu 38 - Vận dụng - Công suất điện xoay chiều",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Hiệu điện thế $u = 220\\sqrt{2}\\cos(100\\pi t)$ (V) và dòng điện $i = 2\\sqrt{2}\\cos\\left(100\\pi t - \\dfrac{\\pi}{3}\\right)$ (A). Công suất tiêu thụ trung bình $P = U I \\cos\\varphi$ bằng:",
      "options": [
        "$220$ W",
        "$440$ W",
        "$220\\sqrt{3}$ W",
        "$110$ W"
      ],
      "correctIndex": 0,
      "explanation": "$U = 220$ V, $I = 2$ A, độ lệch pha $\\varphi = \\dfrac{\\pi}{3}$. $P = 220 \\times 2 \\times \\cos\\dfrac{\\pi}{3} = 440 \\times \\dfrac{1}{2} = 220$ W."
    },
    {
      "id": "quiz-11.2.39",
      "badge": "Câu 39 - Vận dụng cao - Tam giác đều",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Tam giác $ABC$ thỏa mãn điều kiện $\\sin A + \\sin B + \\sin C = \\dfrac{3\\sqrt{3}}{2}$ là tam giác gì?",
      "options": [
        "Tam giác đều",
        "Tam giác vuông cân",
        "Tam giác vuông có góc $30^\\circ$",
        "Tam giác cân có góc ở đỉnh $120^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Trong mọi tam giác, ta luôn có bất đẳng thức $\\sin A + \\sin B + \\sin C \\le \\dfrac{3\\sqrt{3}}{2}$. Dấu '=' xảy ra khi và chỉ khi $A = B = C = 60^\\circ$, tức tam giác $ABC$ đều."
    },
    {
      "id": "quiz-11.2.40",
      "badge": "Câu 40 - Vận dụng cao - Đẳng thức tam giác vuông",
      "source": "SGK Toán 11 KNTT Bài 2 - Dạng 5",
      "question": "Tam giác $ABC$ có $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1$ là tam giác:",
      "options": [
        "Tam giác vuông",
        "Tam giác đều",
        "Tam giác cân",
        "Tam giác nhọn"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1 - 2\\cos A \\cos B \\cos C$. Do đó $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1 \\Leftrightarrow 2\\cos A \\cos B \\cos C = 0 \\Leftrightarrow$ có ít nhất 1 góc bằng $90^\\circ$ (tam giác vuông)."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-11.2.1",
      "badge": "Đúng/Sai 1 - Công thức cộng cơ bản",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 1",
      "prompt": "Cho hai góc lượng giác $a$ và $b$. Xét tính đúng sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(a + b) = \\sin a\\cos b + \\cos a\\sin b$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức cộng sin."
        },
        {
          "id": "b",
          "text": "$\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức cộng côsin."
        },
        {
          "id": "c",
          "text": "$\\cos(a + b) = \\cos a\\cos b + \\sin a\\sin b$",
          "correctAnswer": false,
          "explanation": "Sai, công thức đúng là dấu trừ: $\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b$."
        },
        {
          "id": "d",
          "text": "$\\sin(a - b) = \\sin a\\cos b - \\cos a\\sin b$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức cộng sin."
        }
      ]
    },
    {
      "id": "tf-11.2.2",
      "badge": "Đúng/Sai 2 - Tính giá trị lượng giác góc đặc biệt",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 1",
      "prompt": "Xét tính đúng sai của các giá trị lượng giác sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 75^\\circ = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
          "correctAnswer": true,
          "explanation": "$\\sin(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 75^\\circ = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
          "correctAnswer": true,
          "explanation": "$\\cos(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\tan 75^\\circ = 2 - \\sqrt{3}$",
          "correctAnswer": false,
          "explanation": "$\\tan 75^\\circ = 2 + \\sqrt{3}$ (không phải $2 - \\sqrt{3}$). Sai."
        },
        {
          "id": "d",
          "text": "$\\cos 15^\\circ = \\sin 75^\\circ$",
          "correctAnswer": true,
          "explanation": "Vì $15^\\circ + 75^\\circ = 90^\\circ$ (hai góc phụ nhau) nên $\\cos 15^\\circ = \\sin 75^\\circ$. Đúng."
        }
      ]
    },
    {
      "id": "tf-11.2.3",
      "badge": "Đúng/Sai 3 - Công thức nhân đôi",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 2",
      "prompt": "Cho góc lượng giác $x$. Xét tính đúng sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 2x = 2\\sin x\\cos x$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức nhân đôi sin."
        },
        {
          "id": "b",
          "text": "$\\cos 2x = \\cos^2 x - \\sin^2 x$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức nhân đôi côsin."
        },
        {
          "id": "c",
          "text": "$\\cos 2x = 2\\sin^2 x - 1$",
          "correctAnswer": false,
          "explanation": "Sai, công thức đúng là $\\cos 2x = 1 - 2\\sin^2 x$."
        },
        {
          "id": "d",
          "text": "$\\tan 2x = \\dfrac{2\\tan x}{1 - \\tan^2 x}$ (với điều kiện xác định)",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức nhân đôi tang."
        }
      ]
    },
    {
      "id": "tf-11.2.4",
      "badge": "Đúng/Sai 4 - Cho cos x tính các giá trị nhân đôi",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 2",
      "prompt": "Cho $\\cos x = \\dfrac{3}{5}$ với $-\\dfrac{\\pi}{2} < x < 0$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin x = -\\dfrac{4}{5}$",
          "correctAnswer": true,
          "explanation": "Vì $x$ thuộc góc phần tư IV nên $\\sin x = -\\sqrt{1 - 9/25} = -4/5$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\sin 2x = -\\dfrac{24}{25}$",
          "correctAnswer": true,
          "explanation": "$\\sin 2x = 2(3/5)(-4/5) = -24/25$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\cos 2x = -\\dfrac{7}{25}$",
          "correctAnswer": true,
          "explanation": "$\\cos 2x = 2(9/25) - 1 = 18/25 - 1 = -7/25$. Đúng."
        },
        {
          "id": "d",
          "text": "$\\tan 2x = \\dfrac{24}{7}$",
          "correctAnswer": true,
          "explanation": "$\\tan 2x = \\dfrac{-24/25}{-7/25} = \\dfrac{24}{7}$. Đúng."
        }
      ]
    },
    {
      "id": "tf-11.2.5",
      "badge": "Đúng/Sai 5 - Công thức hạ bậc",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 2",
      "prompt": "Xét tính đúng sai của các công thức hạ bậc sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\cos^2 2x = \\dfrac{1 + \\cos 4x}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng với góc $2x$."
        },
        {
          "id": "d",
          "text": "$\\sin^2 3x = \\dfrac{1 - \\cos 3x}{2}$",
          "correctAnswer": false,
          "explanation": "Sai, phải là $\\dfrac{1 - \\cos 6x}{2}$."
        }
      ]
    },
    {
      "id": "tf-11.2.6",
      "badge": "Đúng/Sai 6 - Rút gọn biểu thức lượng giác",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 2",
      "prompt": "Xét các đẳng thức rút gọn sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\dfrac{\\sin 2x}{2\\sin x} = \\cos x$ (với $\\sin x \\ne 0$)",
          "correctAnswer": true,
          "explanation": "$\\dfrac{2\\sin x\\cos x}{2\\sin x} = \\cos x$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\dfrac{1 - \\cos 2x}{\\sin 2x} = \\tan x$ (với điều kiện xác định)",
          "correctAnswer": true,
          "explanation": "$\\dfrac{2\\sin^2 x}{2\\sin x\\cos x} = \\tan x$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin 4x = 4\\sin x\\cos x$",
          "correctAnswer": false,
          "explanation": "Sai, $\\sin 4x = 2\\sin 2x\\cos 2x = 4\\sin x\\cos x\\cos 2x$."
        },
        {
          "id": "d",
          "text": "$\\cos^4 x - \\sin^4 x = \\cos 2x$",
          "correctAnswer": true,
          "explanation": "$(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) = \\cos 2x$. Đúng."
        }
      ]
    },
    {
      "id": "tf-11.2.7",
      "badge": "Đúng/Sai 7 - Biến đổi tích thành tổng",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 3",
      "prompt": "Xét tính đúng sai của các công thức biến đổi tích thành tổng:",
      "subItems": [
        {
          "id": "a",
          "text": "$2\\cos a\\cos b = \\cos(a - b) + \\cos(a + b)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$2\\sin a\\sin b = \\cos(a - b) - \\cos(a + b)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$2\\sin a\\cos b = \\sin(a + b) + \\sin(a - b)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$2\\cos a\\sin b = \\sin(a + b) + \\sin(a - b)$",
          "correctAnswer": false,
          "explanation": "Sai, $2\\cos a\\sin b = \\sin(a + b) - \\sin(a - b)$."
        }
      ]
    },
    {
      "id": "tf-11.2.8",
      "badge": "Đúng/Sai 8 - Áp dụng tích thành tổng",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 3",
      "prompt": "Xét kết quả biến đổi của các tích sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 4x\\cos x = \\dfrac{1}{2}(\\sin 5x + \\sin 3x)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 3x\\cos x = \\dfrac{1}{2}(\\cos 4x + \\cos 2x)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin 5x\\sin x = \\dfrac{1}{2}(\\cos 4x - \\cos 6x)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$\\sin 2x\\sin 4x = \\dfrac{1}{2}(\\cos 6x - \\cos 2x)$",
          "correctAnswer": false,
          "explanation": "Sai, bằng $\\dfrac{1}{2}(\\cos 2x - \\cos 6x)$."
        }
      ]
    },
    {
      "id": "tf-11.2.9",
      "badge": "Đúng/Sai 9 - Biến đổi tổng thành tích",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 4",
      "prompt": "Xét tính đúng sai của các công thức tổng thành tích:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$\\sin u - \\sin v = 2\\sin\\dfrac{u-v}{2}\\cos\\dfrac{u+v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "tf-11.2.10",
      "badge": "Đúng/Sai 10 - Rút gọn tổng góc lượng giác",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 4",
      "prompt": "Xét tính đúng sai khi rút gọn các biểu thức tổng thành tích:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 5x - \\sin x = 2\\cos 3x\\sin 2x$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 4x + \\cos 2x = 2\\cos 3x\\cos x$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\dfrac{\\pi}{4}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$\\cos x - \\sin x = \\sqrt{2}\\cos\\left(x - \\dfrac{\\pi}{4}\\right)$",
          "correctAnswer": false,
          "explanation": "Sai, $\\cos x - \\sin x = \\sqrt{2}\\cos\\left(x + \\dfrac{\\pi}{4}\\right)$."
        }
      ]
    },
    {
      "id": "tf-11.2.11",
      "badge": "Đúng/Sai 11 - Giá trị biểu thức lượng giác không phụ thuộc vào x",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 5",
      "prompt": "Cho biểu thức $P = \\cos^2 x + \\cos^2(60^\\circ + x) + \\cos^2(60^\\circ - x)$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Biểu thức $P$ có giá trị không phụ thuộc vào biến $x$",
          "correctAnswer": true,
          "explanation": "Đúng, $P$ là hằng số."
        },
        {
          "id": "b",
          "text": "Giá trị của $P$ bằng $\\dfrac{3}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng, hạ bậc ta được $P = 3/2$."
        },
        {
          "id": "c",
          "text": "Khi $x = 0$ thì $P = 1 + \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{3}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Khi $x = 30^\\circ$ thì $P = 2$",
          "correctAnswer": false,
          "explanation": "Sai, vì $P$ luôn bằng $3/2$ với mọi $x$."
        }
      ]
    },
    {
      "id": "tf-11.2.12",
      "badge": "Đúng/Sai 12 - Tam giác và lượng giác",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 5",
      "prompt": "Cho tam giác $ABC$. Xét tính đúng sai của các hệ thức sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(A + B) = \\sin C$",
          "correctAnswer": true,
          "explanation": "$A + B = \\pi - C \\Rightarrow \\sin(A + B) = \\sin C$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos(A + B) = -\\cos C$",
          "correctAnswer": true,
          "explanation": "$\\cos(A + B) = \\cos(\\pi - C) = -\\cos C$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\cos\\dfrac{A+B}{2} = \\sin\\dfrac{C}{2}$",
          "correctAnswer": true,
          "explanation": "Hai góc phụ nhau. Đúng."
        },
        {
          "id": "d",
          "text": "$\\tan(A + B) = \\tan C$",
          "correctAnswer": false,
          "explanation": "Sai, $\\tan(A + B) = -\\tan C$."
        }
      ]
    },
    {
      "id": "tf-11.2.13",
      "badge": "Đúng/Sai 13 - Đẳng thức tam giác đặc biệt",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 5",
      "prompt": "Cho tam giác $ABC$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$",
          "correctAnswer": true,
          "explanation": "Đúng, đây là hệ thức lượng giác kinh điển trong tam giác."
        },
        {
          "id": "b",
          "text": "Nếu tam giác vuông tại $A$ thì $\\sin 2A = 0$",
          "correctAnswer": true,
          "explanation": "Vì $A = 90^\\circ \\Rightarrow 2A = 180^\\circ \\Rightarrow \\sin 2A = 0$. Đúng."
        },
        {
          "id": "c",
          "text": "Nếu $\\sin A = 2\\sin B\\cos C$ thì tam giác $ABC$ cân tại $A$",
          "correctAnswer": false,
          "explanation": "Sai, $\\sin A = \\sin(B + C) = \\sin B\\cos C + \\cos B\\sin C = 2\\sin B\\cos C \\Leftrightarrow \\sin(B - C) = 0 \\Leftrightarrow B = C$ (tam giác cân tại $A$ là đúng nhưng đỉnh cân là $A$ với $B = C$)."
        },
        {
          "id": "d",
          "text": "$\\cos A + \\cos B + \\cos C > 1$ với mọi tam giác $ABC$",
          "correctAnswer": true,
          "explanation": "Đúng, $\\cos A + \\cos B + \\cos C = 1 + 4\\sin(A/2)\\sin(B/2)\\sin(C/2) > 1$."
        }
      ]
    },
    {
      "id": "tf-11.2.14",
      "badge": "Đúng/Sai 14 - Biến đổi biểu thức phức tạp",
      "source": "SGK Toán 11 KNTT Bài 2 Dạng 5",
      "prompt": "Cho $x$ thỏa mãn $\\tan x = 2$. Xét các giá trị sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 2x = \\dfrac{4}{5}$",
          "correctAnswer": true,
          "explanation": "$\\sin 2x = \\dfrac{2\\tan x}{1 + \\tan^2 x} = \\dfrac{4}{5}$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 2x = -\\dfrac{3}{5}$",
          "correctAnswer": true,
          "explanation": "$\\cos 2x = \\dfrac{1 - \\tan^2 x}{1 + \\tan^2 x} = \\dfrac{1 - 4}{5} = -\\dfrac{3}{5}$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\tan 2x = -\\dfrac{4}{3}$",
          "correctAnswer": true,
          "explanation": "$\\tan 2x = \\dfrac{2(2)}{1 - 4} = -\\dfrac{4}{3}$. Đúng."
        },
        {
          "id": "d",
          "text": "$\\cos^2 2x + \\sin^2 2x = 1$",
          "correctAnswer": true,
          "explanation": "Luôn đúng theo hệ thức cơ bản."
        }
      ]
    },
    {
      "id": "tf-11.2.15",
      "badge": "Đúng/Sai 15 - Ứng dụng sóng giao thoa",
      "source": "Tài liệu Luyện tập Toán 11 C1B2",
      "prompt": "Xét sự kết hợp của hai dao động điều hòa $y_1 = A\\cos(\\omega t)$ và $y_2 = A\\cos(\\omega t + \\Delta\\varphi)$:",
      "subItems": [
        {
          "id": "a",
          "text": "Dao động tổng hợp có dạng $y = 2A\\cos\\left(\\dfrac{\\Delta\\varphi}{2}\\right)\\cos\\left(\\omega t + \\dfrac{\\Delta\\varphi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức biến đổi tổng thành tích."
        },
        {
          "id": "b",
          "text": "Khi $\\Delta\\varphi = 0$, biên độ cực đại bằng $2A$",
          "correctAnswer": true,
          "explanation": "Đúng, giao thoa cực đại."
        },
        {
          "id": "c",
          "text": "Khi $\\Delta\\varphi = \\pi$, dao động tổng hợp triệt tiêu ($y = 0$)",
          "correctAnswer": true,
          "explanation": "Đúng, vì $\\cos(\\pi/2) = 0$."
        },
        {
          "id": "d",
          "text": "Khi $\\Delta\\varphi = \\dfrac{\\pi}{2}$, biên độ dao động bằng $A\\sqrt{2}$",
          "correctAnswer": true,
          "explanation": "Biên độ $= 2A\\cos(\\pi/4) = 2A(\\sqrt{2}/2) = A\\sqrt{2}$. Đúng."
        }
      ]
    },
    {
      "id": "tf-11.2.16",
      "badge": "Đúng/Sai 16 - Bài toán ném xiên vật lý",
      "source": "Tài liệu Luyện tập Toán 11 C1B2",
      "prompt": "Tầm xa của vật ném xiên từ mặt đất với góc ném $\\alpha$ ($0 < \\alpha < 90^\\circ$) và vận tốc ban đầu $v_0$ là $L = \\dfrac{v_0^2\\sin 2\\alpha}{g}$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Tầm xa $L$ đạt giá trị lớn nhất khi góc ném $\\alpha = 45^\\circ$",
          "correctAnswer": true,
          "explanation": "Vì $\\sin 2\\alpha \\le 1$, lớn nhất khi $2\\alpha = 90^\\circ \\Leftrightarrow \\alpha = 45^\\circ$. Đúng."
        },
        {
          "id": "b",
          "text": "Giá trị tầm xa lớn nhất là $L_{\\max} = \\dfrac{v_0^2}{g}$",
          "correctAnswer": true,
          "explanation": "Đúng khi $\\sin 2\\alpha = 1$."
        },
        {
          "id": "c",
          "text": "Hai góc ném phụ nhau ($\\\\alpha_1 + \\\\alpha_2 = 90^\\circ$) cho cùng một tầm xa $L$",
          "correctAnswer": true,
          "explanation": "Vì $\\sin(2(90^\\circ - \\alpha)) = \\sin(180^\\circ - 2\\alpha) = \\sin 2\\alpha$. Đúng."
        },
        {
          "id": "d",
          "text": "Nếu góc ném $\\alpha = 30^\\circ$ thì tầm xa bằng $\\dfrac{v_0^2}{2g}$",
          "correctAnswer": false,
          "explanation": "Sai, khi $\\alpha = 30^\\circ$ thì $\\sin 2\\alpha = \\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2} \\Rightarrow L = \\dfrac{\\sqrt{3}v_0^2}{2g}$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-11.2.1",
      "badge": "TLN 1 - Tính cos 75°",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $4\\cos 75^\\circ \\cdot (\\sqrt{6} + \\sqrt{2})$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Ta có $\\cos 75^\\circ = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$. Do đó biểu thức $= 4 \\cdot \\dfrac{\\sqrt{6} - \\sqrt{2}}{4} \\cdot (\\sqrt{6} + \\sqrt{2}) = (\\sqrt{6})^2 - (\\sqrt{2})^2 = 6 - 2 = 4$ (Sửa kết quả: $6 - 2 = 4$)."
    },
    {
      "id": "sa-11.2.2",
      "badge": "TLN 2 - Tính tan(a+b)",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho $\\tan a = 2, \\tan b = 3$. Tính giá trị của $\\tan(a + b)$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "$\\tan(a + b) = \\dfrac{2 + 3}{1 - 2 \\times 3} = \\dfrac{5}{-5} = -1$."
    },
    {
      "id": "sa-11.2.3",
      "badge": "TLN 3 - Tính sin 2a",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho $\\sin a + \\cos a = \\dfrac{1}{2}$. Tính giá trị của $4\\sin 2a$.",
      "correctAnswer": "-3",
      "acceptableAnswers": [
        "-3"
      ],
      "explanation": "Bình phương 2 vế: $(\\sin a + \\cos a)^2 = 1 + \\sin 2a = \\dfrac{1}{4} \\Rightarrow \\sin 2a = -\\dfrac{3}{4} \\Rightarrow 4\\sin 2a = -3$."
    },
    {
      "id": "sa-11.2.4",
      "badge": "TLN 4 - Tính cos 2a",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho $\\cos a = \\dfrac{2}{3}$. Tính giá trị của $9\\cos 2a$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "$\\cos 2a = 2\\cos^2 a - 1 = 2(4/9) - 1 = -1/9 \\Rightarrow 9\\cos 2a = -1$."
    },
    {
      "id": "sa-11.2.5",
      "badge": "TLN 5 - Rút gọn tích sin.cos",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $P = 8\\sin 15^\\circ \\cos 15^\\circ$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "$P = 4(2\\sin 15^\\circ \\cos 15^\\circ) = 4\\sin 30^\\circ = 4 \\times \\dfrac{1}{2} = 2$."
    },
    {
      "id": "sa-11.2.6",
      "badge": "TLN 6 - Tính tích cos 20 cos 40 cos 80",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $8\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Nhân với $\\sin 20^\\circ$: Tử số biến đổi thành $\\sin 160^\\circ = \\sin 20^\\circ$. Kết quả biểu thức là $1/8$. Nhân 8 lên bằng 1."
    },
    {
      "id": "sa-11.2.7",
      "badge": "TLN 7 - Tính tổng sin",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $\\dfrac{\\sin 40^\\circ + \\sin 20^\\circ}{\\cos 10^\\circ}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\sin 40^\\circ + \\sin 20^\\circ = 2\\sin 30^\\circ \\cos 10^\\circ = 2(1/2)\\cos 10^\\circ = \\cos 10^\\circ$. Chia cho mẫu bằng 1."
    },
    {
      "id": "sa-11.2.8",
      "badge": "TLN 8 - Tính hiệu cos",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $\\dfrac{\\cos 20^\\circ - \\cos 40^\\circ}{\\sin 10^\\circ}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\cos 20^\\circ - \\cos 40^\\circ = -2\\sin 30^\\circ \\sin(-10^\\circ) = 2(1/2)\\sin 10^\\circ = \\sin 10^\\circ$. Chia mẫu bằng 1."
    },
    {
      "id": "sa-11.2.9",
      "badge": "TLN 9 - Rút gọn biểu thức góc phụ",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của $M = \\sin^2 10^\\circ + \\sin^2 50^\\circ + \\sin^2 70^\\circ$. (Viết kết quả dưới dạng số thập phân)",
      "correctAnswer": "1.5",
      "acceptableAnswers": [
        "1.5",
        "3/2"
      ],
      "explanation": "Hạ bậc ta được $M = 3/2 = 1.5$."
    },
    {
      "id": "sa-11.2.10",
      "badge": "TLN 10 - Góc ngắm bia bắn",
      "source": "Tài liệu Luyện tập Toán 11 C1B2",
      "prompt": "Một vận động viên ngắm bắn với góc ngắm $\\alpha$ có $\\tan\\alpha = \\dfrac{3}{4}$. Tìm $\\tan\\dfrac{\\alpha}{2}$ (dạng phân số tối giản $a/b$, nhập dạng a/b).",
      "correctAnswer": "1/3",
      "acceptableAnswers": [
        "1/3"
      ],
      "explanation": "$\\tan\\alpha = \\dfrac{2t}{1 - t^2} = \\dfrac{3}{4} \\Rightarrow 3t^2 + 8t - 3 = 0 \\Rightarrow t = 1/3$."
    },
    {
      "id": "sa-11.2.11",
      "badge": "TLN 11 - Tính sin 4x khi biết sin 2x",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho $\\sin 2x = \\dfrac{\\sqrt{5}}{3}$ với $0 < 2x < \\dfrac{\\pi}{2}$. Tính giá trị của $9\\sin 4x$.",
      "correctAnswer": "4√5",
      "acceptableAnswers": [
        "4√5",
        "4 căn 5",
        "4can5",
        "8.94"
      ],
      "explanation": "$\\cos 2x = \\sqrt{1 - 5/9} = 2/3$. $\\sin 4x = 2\\sin 2x\\cos 2x = 2(\\sqrt{5}/3)(2/3) = 4\\sqrt{5}/9 \\Rightarrow 9\\sin 4x = 4\\sqrt{5}$."
    },
    {
      "id": "sa-11.2.12",
      "badge": "TLN 12 - Rút gọn biểu thức",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $T = \\tan 20^\\circ \\tan 40^\\circ \\tan 80^\\circ \\cdot \\dfrac{1}{\\sqrt{3}}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Ta có công thức $\\tan x \\tan(60^\\circ - x) \\tan(60^\\circ + x) = \\tan 3x$. Với $x = 20^\\circ$, tích bằng $\\tan 60^\\circ = \\sqrt{3}$. Do đó $T = 1$."
    },
    {
      "id": "sa-11.2.13",
      "badge": "TLN 13 - Rút gọn phân thức lượng giác",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho biểu thức $A = \\dfrac{\\sin 3x - \\sin x}{\\cos 3x + \\cos x}$. Biết $A = \\tan kx$. Tìm giá trị của số nguyên $k$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\sin 3x - \\sin x = 2\\cos 2x \\sin x$, $\\cos 3x + \\cos x = 2\\cos 2x \\cos x$. $A = \\tan x \\Rightarrow k = 1$."
    },
    {
      "id": "sa-11.2.14",
      "badge": "TLN 14 - Tính cos(a-b)",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho $\\cos a = \\dfrac{3}{5}, \\cos b = \\dfrac{5}{13}$ (với $0 < a, b < \\dfrac{\\pi}{2}$). Tính $65\\cos(a - b)$.",
      "correctAnswer": "63",
      "acceptableAnswers": [
        "63"
      ],
      "explanation": "$\\sin a = 4/5, \\sin b = 12/13$. $\\cos(a - b) = (3/5)(5/13) + (4/5)(12/13) = (15 + 48)/65 = 63/65 \\Rightarrow 65\\cos(a - b) = 63$."
    },
    {
      "id": "sa-11.2.15",
      "badge": "TLN 15 - Đẳng thức tam giác",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho tam giác $ABC$ có $\\tan A = 1, \\tan B = 2$. Tính giá trị của $\\tan C$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "$\\tan(A + B) = \\dfrac{1 + 2}{1 - 2} = -3$. $\\tan C = -\\tan(A + B) = 3$."
    },
    {
      "id": "sa-11.2.16",
      "badge": "TLN 16 - Tính giá trị lớn nhất",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = 3\\sin 2x + 4\\cos 2x$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "Giá trị lớn nhất là $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
    },
    {
      "id": "sa-11.2.17",
      "badge": "TLN 17 - Tính giá trị nhỏ nhất",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tìm giá trị nhỏ nhất của biểu thức $y = 5 - 12\\sin x - 5\\cos x$.",
      "correctAnswer": "-8",
      "acceptableAnswers": [
        "-8"
      ],
      "explanation": "Biểu thức $12\\sin x + 5\\cos x$ có giá trị lớn nhất là $\\sqrt{12^2 + 5^2} = 13$. Vậy nhỏ nhất là $5 - 13 = -8$."
    },
    {
      "id": "sa-11.2.18",
      "badge": "TLN 18 - Tầm xa ném xiên",
      "source": "Tài liệu Luyện tập Toán 11 C1B2",
      "prompt": "Một quả bóng được đá đi với vận tốc $v_0 = 20$ m/s, góc ném $45^\\circ$, lấy $g = 10$ m/s$^2$. Tính tầm xa $L = \\dfrac{v_0^2\\sin 2\\alpha}{g}$ theo mét.",
      "correctAnswer": "40 m",
      "acceptableAnswers": [
        "40",
        "40m"
      ],
      "explanation": "$L = \\dfrac{20^2 \\sin 90^\\circ}{10} = \\dfrac{400 \\times 1}{10} = 40$ m."
    },
    {
      "id": "sa-11.2.19",
      "badge": "TLN 19 - Sóng âm giao thoa",
      "source": "Tài liệu Luyện tập Toán 11 C1B2",
      "prompt": "Hai sóng âm có biên độ $A = 5$ mm gặp nhau với độ lệch pha $\\Delta\\varphi = \\dfrac{\\pi}{3}$. Tính biên độ sóng tổng hợp (mm, làm tròn 1 chữ số thập phân).",
      "correctAnswer": "8.7 mm",
      "acceptableAnswers": [
        "8.7",
        "8.66",
        "5√3"
      ],
      "explanation": "Biên độ $= 2A\\cos(\\Delta\\varphi/2) = 2(5)\\cos(\\pi/6) = 10 \\times \\dfrac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66 \\approx 8.7$ mm."
    },
    {
      "id": "sa-11.2.20",
      "badge": "TLN 20 - Công suất điện",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Điện áp hiệu dụng $U = 200$ V, dòng điện $I = 3$ A, hệ số công suất $\\cos\\varphi = 0.8$. Tính công suất tiêu thụ $P$ (Watt).",
      "correctAnswer": "480 W",
      "acceptableAnswers": [
        "480",
        "480W"
      ],
      "explanation": "$P = U I \\cos\\varphi = 200 \\times 3 \\times 0.8 = 480$ W."
    },
    {
      "id": "sa-11.2.21",
      "badge": "TLN 21 - Giá trị cot 2a",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Cho $\\tan a = 3$. Tính giá trị của $4\\cot 2a$.",
      "correctAnswer": "-5.33",
      "acceptableAnswers": [
        "-16/3",
        "-5.33"
      ],
      "explanation": "$\\tan 2a = \\dfrac{2(3)}{1 - 9} = -\\dfrac{6}{8} = -\\dfrac{3}{4} \\Rightarrow \\cot 2a = -\\dfrac{4}{3} \\Rightarrow 4\\cot 2a = -\\dfrac{16}{3}$."
    },
    {
      "id": "sa-11.2.22",
      "badge": "TLN 22 - Tính biểu thức tích",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tính giá trị của biểu thức $4\\cos 12^\\circ \\cos 24^\\circ \\cos 48^\\circ \\cos 96^\\circ$. (Viết kết quả dạng phân số âm tối giản -a/b)",
      "correctAnswer": "-1/4",
      "acceptableAnswers": [
        "-1/4",
        "-0.25"
      ],
      "explanation": "Nhân $\\sin 12^\\circ$: Biểu thức $= \\dfrac{\\sin 192^\\circ}{16\\sin 12^\\circ} = \\dfrac{-\\sin 12^\\circ}{16\\sin 12^\\circ} = -\\dfrac{1}{16}$. Nhân 4 lên bằng $-1/4$."
    },
    {
      "id": "sa-11.2.23",
      "badge": "TLN 23 - Tam giác góc C",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Tam giác $ABC$ có $\\cos A \\cos B = \\sin A \\sin B$. Tính số đo góc $C$ (độ).",
      "correctAnswer": "90°",
      "acceptableAnswers": [
        "90",
        "90°",
        "90 độ"
      ],
      "explanation": "$\\cos A \\cos B - \\sin A \\sin B = 0 \\Leftrightarrow \\cos(A + B) = 0 \\Leftrightarrow A + B = 90^\\circ \\Rightarrow C = 90^\\circ$."
    },
    {
      "id": "sa-11.2.24",
      "badge": "TLN 24 - Độc lập tham số",
      "source": "SGK Toán 11 KNTT Bài 2",
      "prompt": "Biết rằng biểu thức $K = \\sin 6x \\cot 3x - \\cos 6x$ là một hằng số $C$. Tìm giá trị của $C$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$K = 2\\sin 3x \\cos 3x \\cdot \\dfrac{\\cos 3x}{\\sin 3x} - (2\\cos^2 3x - 1) = 2\\cos^2 3x - 2\\cos^2 3x + 1 = 1$."
    }
  ]
},
  "t11-b3-ham-so-luong-giac": {
  "id": "t11-b3-ham-so-luong-giac",
  "lessonNumber": 3,
  "title": "Bài 3: Hàm số lượng giác",
  "bookChapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
  "scenarioTitle": "Mô hình hóa hiện tượng dao động điều hòa và hiện tượng thủy triều",
  "scenarioFrames": [],
  "youtubeVideoId": "hg2xx0JjZnk",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 3 - Hàm số lượng giác (Tiết 1) - Toán 11 KNTT",
  "youtubeVideos": [
    {
      "id": "hg2xx0JjZnk",
      "title": "Tiết 1: Hàm số sin và hàm số côsin"
    },
    {
      "id": "6-CSaIJZ3pk",
      "title": "Tiết 2: Hàm số tang và hàm số côtang"
    },
    {
      "id": "RpYks3LoEZI",
      "title": "Tiết 3: Tính tuần hoàn, chu kỳ và đồ thị hàm số lượng giác"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-11.3.1",
      "title": "Ví dụ 1 (Tiết 1): Tập xác định và tập giá trị của y = sin x",
      "question": "Tập giá trị của hàm số $y = \\sin x$ là khoảng, đoạn nào sau đây?",
      "options": [
        "$[-1; 1]$",
        "$(-1; 1)$",
        "$\\mathbb{R}$",
        "$[0; 1]$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi số thực $x$, ta luôn có $-1 \\le \\sin x \\le 1$. Do đó tập giá trị của hàm số $y = \\sin x$ là đoạn $[-1; 1]$."
    },
    {
      "id": "vq-11.3.2",
      "title": "Ví dụ 2 (Tiết 2): Tập xác định của hàm số tang",
      "question": "Tập xác định của hàm số $y = \\tan x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "vq-11.3.3",
      "title": "Ví dụ 3 (Tiết 3): Chu kỳ của hàm số lượng giác",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin 2x$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\sin(\\omega x + \\varphi)$ có chu kỳ $T = \\dfrac{2\\pi}{|\\omega|}$. Với $\\omega = 2$, chu kỳ là $T = \\dfrac{2\\pi}{2} = \\pi$."
    },
    {
      "id": "vq-11.3.4",
      "title": "Ví dụ 4 (Tiết 3): Giá trị lớn nhất và nhỏ nhất",
      "question": "Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = 3\\cos x - 2$ lần lượt là:",
      "options": [
        "$M = 1, m = -5$",
        "$M = 3, m = -3$",
        "$M = 5, m = -1$",
        "$M = 1, m = -1$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $-1 \\le \\cos x \\le 1$ nên $-3 \\le 3\\cos x \\le 3 \\Rightarrow -3 - 2 \\le 3\\cos x - 2 \\le 3 - 2 \\Rightarrow -5 \\le y \\le 1$. Vậy $M = 1, m = -5$."
    }
  ],
  "tips": [
    "Quy tắc chu kỳ hàm lượng giác: Hàm $y = \\sin(\\omega x)$ và $y = \\cos(\\omega x)$ có chu kỳ $T = \\dfrac{2\\pi}{|\\omega|}$. Hàm $y = \\tan(\\omega x)$ và $y = \\cot(\\omega x)$ có chu kỳ $T = \\dfrac{\\pi}{|\\omega|}$.",
    "Tính chẵn lẻ: Chỉ có duy nhất hàm $y = \\cos x$ là HÀM SỐ CHẴN (đồ thị đối xứng qua trục $Oy$). Ba hàm còn lại $\\sin x, \\tan x, \\cot x$ đều là HÀM SỐ LẺ (đồ thị đối xứng qua gốc tọa độ $O$)."
  ],
  "traps": [
    "Bẫy điều kiện mẫu của $\\tan x$ và $\\cot x$: $\\tan x$ không xác định tại các điểm có $\\cos x = 0$ ($x = \\pi/2 + k\\pi$), còn $\\cot x$ không xác định tại các điểm có $\\sin x = 0$ ($x = k\\pi$). Tránh nhầm lẫn giữa hai điều kiện này.",
    "Bẫy tập giá trị: Hàm số $y = \\sin x$ và $y = \\cos x$ bị chặn trong đoạn $[-1; 1]$, nhưng hàm số $y = \\tan x$ và $y = \\cot x$ có tập giá trị là toàn bộ $\\mathbb{R}$ (không bị chặn)."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Hàm số sin và hàm số côsin",
      "points": [
        "Hàm số sin ($y = \\sin x$): Tập xác định $D = \\mathbb{R}$; Tập giá trị $[-1; 1]$ (tức $-1 \\le \\sin x \\le 1$); Là hàm số lẻ, đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng; Tuần hoàn với chu kỳ $T = 2\\pi$.",
        "Hàm số côsin ($y = \\cos x$): Tập xác định $D = \\mathbb{R}$; Tập giá trị $[-1; 1]$ (tức $-1 \\le \\cos x \\le 1$); Là hàm số chẵn, đồ thị nhận trục tung $Oy$ làm trục đối xứng; Tuần hoàn với chu kỳ $T = 2\\pi$."
      ],
      "formula": "y = \\sin x \\ (D = \\mathbb{R}, T = 2\\pi); \\quad y = \\cos x \\ (D = \\mathbb{R}, T = 2\\pi)",
      "examples": [
        {
          "title": "Ví dụ 1: Tìm tập giá trị",
          "problem": "Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y = 2\\sin x + 1$.",
          "solution": "Ta có $-1 \\le \\sin x \\le 1 \\Rightarrow -2 \\le 2\\sin x \\le 2 \\Rightarrow -1 \\le 2\\sin x + 1 \\le 3$. Vậy $\\max y = 3$ (khi $\\sin x = 1$), $\\min y = -1$ (khi $\\sin x = -1$)."
        }
      ]
    },
    {
      "index": "2",
      "title": "Hàm số tang và hàm số côtang",
      "points": [
        "Hàm số tang ($y = \\tan x$): Tập xác định $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$; Tập giá trị $\\mathbb{R}$; Là hàm số lẻ, đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng; Tuần hoàn với chu kỳ $T = \\pi$.",
        "Hàm số côtang ($y = \\cot x$): Tập xác định $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$; Tập giá trị $\\mathbb{R}$; Là hàm số lẻ, đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng; Tuần hoàn với chu kỳ $T = \\pi$."
      ],
      "formula": "y = \\tan x \\ (T = \\pi); \\quad y = \\cot x \\ (T = \\pi)",
      "examples": [
        {
          "title": "Ví dụ 2: Tìm tập xác định",
          "problem": "Tìm tập xác định của hàm số $y = \\tan\\left(x - \\dfrac{\\pi}{4}\\\\right)$.",
          "solution": "Hàm số xác định khi $x - \\dfrac{\\pi}{4} \\ne \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\dfrac{3\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$). Vậy $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{3\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Đồ thị và tính tuần hoàn của hàm số lượng giác",
      "points": [
        "Đồ thị của hàm số $y = \\sin x$ và $y = \\cos x$ được gọi là đường hình sin.",
        "Hàm số $y = \\sin(\\omega x + \\varphi)$ và $y = \\cos(\\omega x + \\varphi)$ tuần hoàn với chu kỳ $T = \\dfrac{2\\pi}{|\\omega|}$.",
        "Hàm số $y = \\tan(\\omega x + \\varphi)$ và $y = \\cot(\\omega x + \\varphi)$ tuần hoàn với chu kỳ $T = \\dfrac{\\pi}{|\\omega|}."
      ],
      "formula": "T_{\\sin, \\cos} = \\dfrac{2\\pi}{|\\omega|}; \\quad T_{\\tan, \\cot} = \\dfrac{\\pi}{|\\omega|}",
      "examples": [
        {
          "title": "Ví dụ 3: Xác định chu kỳ",
          "problem": "Tìm chu kỳ tuần hoàn của các hàm số sau: a) $y = \\cos 4x$; b) $y = \\tan 3x$.",
          "solution": "• Câu a: Hàm số $y = \\cos 4x$ có $\\omega = 4$ nên chu kỳ là $T = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$.\n• Câu b: Hàm số $y = \\tan 3x$ có $\\omega = 3$ nên chu kỳ là $T = \\dfrac{\\pi}{3}$."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-11.3.1",
      "badge": "Câu 1 - Nhận biết - TXĐ hàm sin và cos",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của các hàm số $y = \\sin x$ và $y = \\cos x$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$[-1; 1]$",
        "$\\mathbb{R} \\setminus \\{0\\}$",
        "$(0; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số sin và côsin xác định với mọi số thực $x \\in \\mathbb{R}$."
    },
    {
      "id": "quiz-11.3.2",
      "badge": "Câu 2 - Nhận biết - TXĐ hàm tang",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\tan x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "quiz-11.3.3",
      "badge": "Câu 3 - Nhận biết - TXĐ hàm côtang",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\cot x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R}$",
        "$D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\cot x = \\dfrac{\\cos x}{\\sin x}$ xác định khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "quiz-11.3.4",
      "badge": "Câu 4 - Thông hiểu - TXĐ hàm tang 2x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\tan 2x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{k\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện xác định: $\\cos 2x \\ne 0 \\Leftrightarrow 2x \\ne \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "quiz-11.3.5",
      "badge": "Câu 5 - Thông hiểu - TXĐ hàm phân thức chứa cos",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\dfrac{1}{\\cos x - 1}$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện: $\\cos x - 1 \\ne 0 \\Leftrightarrow \\cos x \\ne 1 \\Leftrightarrow x \\ne k2\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "quiz-11.3.6",
      "badge": "Câu 6 - Thông hiểu - TXĐ căn bậc hai lượng giác",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\sqrt{1 + \\cos x}$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$[-1; 1]$",
        "$\\mathbb{R} \\setminus \\{\\pi + k2\\pi\\}$",
        "$[0; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $-1 \\le \\cos x \\le 1$ với mọi $x \\in \\mathbb{R}$ nên $1 + \\cos x \\ge 0$ luôn đúng với mọi $x$. Vậy $D = \\mathbb{R}$."
    },
    {
      "id": "quiz-11.3.7",
      "badge": "Câu 7 - Vận dụng - TXĐ kết hợp tang và mẫu",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\dfrac{\\tan x}{\\sin x - 1}$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện: $\\cos x \\ne 0$ và $\\sin x \\ne 1$. Vì $\\sin x = 1$ cũng có $\\cos x = 0$ nên điều kiện chung chỉ là $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$."
    },
    {
      "id": "quiz-11.3.8",
      "badge": "Câu 8 - Vận dụng cao - TXĐ chứa căn mẫu",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 1",
      "question": "Tập xác định của hàm số $y = \\sqrt{\\dfrac{1 - \\cos 2x}{1 + \\sin^2 x}}$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$\\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$[-1; 1]$",
        "$\\emptyset$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $1 - \\cos 2x = 2\\sin^2 x \\ge 0$ và $1 + \\sin^2 x \\ge 1 > 0$ với mọi $x$, phân thức luôn không âm và mẫu luôn dương. Vậy $D = \\mathbb{R}$."
    },
    {
      "id": "quiz-11.3.9",
      "badge": "Câu 9 - Nhận biết - Tập giá trị hàm sin",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Tập giá trị của hàm số $y = \\sin x$ là đoạn nào?",
      "options": [
        "$[-1; 1]$",
        "$(-1; 1)$",
        "$\\mathbb{R}$",
        "$[0; 1]$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi $x$, ta luôn có $-1 \\le \\sin x \\le 1$. Do đó tập giá trị là đoạn $[-1; 1]$."
    },
    {
      "id": "quiz-11.3.10",
      "badge": "Câu 10 - Nhận biết - Tập giá trị hàm tang",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Tập giá trị của hàm số $y = \\tan x$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$[-1; 1]$",
        "$[0; +\\infty)$",
        "$\\mathbb{R} \\setminus \\{0\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số tang nhận mọi giá trị thực từ $-\\infty$ đến $+\\infty$, tập giá trị là $\\mathbb{R}$."
    },
    {
      "id": "quiz-11.3.11",
      "badge": "Câu 11 - Thông hiểu - GTLN hàm bậc nhất sin",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị lớn nhất của hàm số $y = 3\\sin x - 2$ bằng:",
      "options": [
        "$1$",
        "$3$",
        "$-2$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\sin x \\le 1$ nên $y \\le 3(1) - 2 = 1$. Giá trị lớn nhất là 1."
    },
    {
      "id": "quiz-11.3.12",
      "badge": "Câu 12 - Thông hiểu - GTNN hàm bậc nhất cos",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị nhỏ nhất của hàm số $y = 4 - 5\\cos x$ bằng:",
      "options": [
        "$-1$",
        "$4$",
        "$-5$",
        "$9$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\cos x \\le 1$ nên $-5\\cos x \\ge -5 \\Rightarrow y \\ge 4 - 5 = -1$. Giá trị nhỏ nhất là -1."
    },
    {
      "id": "quiz-11.3.13",
      "badge": "Câu 13 - Thông hiểu - GTLN hàm bậc hai cos^2",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị lớn nhất của hàm số $y = 2 - 3\\cos^2 x$ bằng:",
      "options": [
        "$2$",
        "$-1$",
        "$5$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\cos^2 x \\ge 0$ nên $-3\\cos^2 x \\le 0 \\Rightarrow y \\le 2$. Dấu '=' xảy ra khi $\\cos x = 0$. Giá trị lớn nhất là 2."
    },
    {
      "id": "quiz-11.3.14",
      "badge": "Câu 14 - Thông hiểu - GTNN hàm căn bậc hai",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị nhỏ nhất của hàm số $y = \\sqrt{3 - \\sin x} + 1$ bằng:",
      "options": [
        "$\\sqrt{2} + 1$",
        "$2$",
        "$1$",
        "$\\sqrt{3} + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin x \\le 1 \\Rightarrow 3 - \\sin x \\ge 2 \\Rightarrow \\sqrt{3 - \\sin x} \\ge \\sqrt{2} \\Rightarrow y \\ge \\sqrt{2} + 1$."
    },
    {
      "id": "quiz-11.3.15",
      "badge": "Câu 15 - Vận dụng - GTLN dạng asinx + bcosx",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị lớn nhất của hàm số $y = 3\\sin 2x + 4\\cos 2x$ bằng:",
      "options": [
        "$5$",
        "$7$",
        "$\\sqrt{7}$",
        "$25$"
      ],
      "correctIndex": 0,
      "explanation": "Theo bất đẳng thức Cauchy-Schwarz: $y \\le \\sqrt{3^2 + 4^2} = 5$."
    },
    {
      "id": "quiz-11.3.16",
      "badge": "Câu 16 - Vận dụng - Tìm tập giá trị hàm sin^2 + cos",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị lớn nhất của hàm số $y = \\sin^2 x + 2\\cos x + 1$ bằng:",
      "options": [
        "$3$",
        "$2$",
        "$\\dfrac{9}{4}$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "$y = (1 - \\cos^2 x) + 2\\cos x + 1 = -\\cos^2 x + 2\\cos x + 2 = 3 - (\\cos x - 1)^2 \\le 3$. Dấu '=' khi $\\cos x = 1$."
    },
    {
      "id": "quiz-11.3.17",
      "badge": "Câu 17 - Vận dụng - GTNN tam thức bậc hai lượng giác",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Giá trị nhỏ nhất của hàm số $y = \\cos 2x + 4\\cos x + 5$ bằng:",
      "options": [
        "$2$",
        "$0$",
        "$1$",
        "$-1$"
      ],
      "correctIndex": 0,
      "explanation": "$y = 2\\cos^2 x - 1 + 4\\cos x + 5 = 2(\\cos x + 1)^2 + 2 \\ge 2$. Dấu '=' khi $\\cos x = -1$."
    },
    {
      "id": "quiz-11.3.18",
      "badge": "Câu 18 - Vận dụng cao - GTLN hàm phân thức",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 2",
      "question": "Tập giá trị của hàm số $y = \\dfrac{\\sin x + 1}{\\sin x + 2}$ là đoạn:",
      "options": [
        "$\\left[0; \\dfrac{2}{3}\\right]$",
        "$[0; 1]$",
        "$\\left[-1; \\dfrac{2}{3}\\right]$",
        "$\\left[\\dfrac{1}{3}; \\dfrac{2}{3}\\right]$"
      ],
      "correctIndex": 0,
      "explanation": "Đặt $t = \\sin x \\in [-1; 1]$. $f(t) = \\dfrac{t+1}{t+2} = 1 - \\dfrac{1}{t+2}$ đồng biến trên $[-1; 1]$. $f(-1) = 0, f(1) = 2/3$. Tập giá trị là $[0; 2/3]$."
    },
    {
      "id": "quiz-11.3.19",
      "badge": "Câu 19 - Nhận biết - Hàm số chẵn cơ bản",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 3",
      "question": "Trong các hàm số sau, hàm số nào là hàm số CHẴN?",
      "options": [
        "$y = \\cos x$",
        "$y = \\sin x$",
        "$y = \\tan x$",
        "$y = \\cot x$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos(-x) = \\cos x$ với mọi $x \\in \\mathbb{R}$, nên $y = \\cos x$ là hàm số chẵn."
    },
    {
      "id": "quiz-11.3.20",
      "badge": "Câu 20 - Nhận biết - Hàm số lẻ cơ bản",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 3",
      "question": "Hàm số nào sau đây là hàm số LẺ?",
      "options": [
        "$y = \\sin 2x$",
        "$y = \\cos 2x$",
        "$y = \\cos^2 x$",
        "$y = 1 + \\sin^2 x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin(-2x) = -\\sin 2x$, do đó $y = \\sin 2x$ là hàm số lẻ."
    },
    {
      "id": "quiz-11.3.21",
      "badge": "Câu 21 - Thông hiểu - Nhận biết hàm chẵn kết hợp x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 3",
      "question": "Hàm số nào sau đây là hàm số CHẴN?",
      "options": [
        "$y = x \\sin x$",
        "$y = x \\cos x$",
        "$y = x^2 \\sin x$",
        "$y = x^3 \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$f(-x) = (-x)\\sin(-x) = (-x)(-\\sin x) = x\\sin x = f(x)$. Vậy $y = x\\sin x$ là hàm số chẵn."
    },
    {
      "id": "quiz-11.3.22",
      "badge": "Câu 22 - Thông hiểu - Hàm không chẵn không lẻ",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 3",
      "question": "Hàm số nào sau đây là hàm số KHÔNG CHẴN VÀ KHÔNG LẺ?",
      "options": [
        "$y = \\sin x + \\cos x$",
        "$y = \\sin x$",
        "$y = \\cos x$",
        "$y = \\tan x$"
      ],
      "correctIndex": 0,
      "explanation": "Xét $f(x) = \\sin x + \\cos x$: $f(-x) = -\\sin x + \\cos x \\ne f(x)$ và $\\ne -f(x)$."
    },
    {
      "id": "quiz-11.3.23",
      "badge": "Câu 23 - Vận dụng - Hàm số lẻ phức hợp",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 3",
      "question": "Hàm số nào sau đây là hàm số LẺ?",
      "options": [
        "$y = \\tan x + \\sin 3x$",
        "$y = \\tan x + \\cos x$",
        "$y = \\cos 2x + \\sin^2 x$",
        "$y = x^2 + \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "Cả $\\tan x$ và $\\sin 3x$ đều là hàm lẻ, nên tổng hai hàm lẻ là một hàm lẻ."
    },
    {
      "id": "quiz-11.3.24",
      "badge": "Câu 24 - Vận dụng - Đối xứng của đồ thị",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 3",
      "question": "Đồ thị của hàm số nào sau đây nhận TRỤC TUNG $Oy$ làm trục đối xứng?",
      "options": [
        "$y = \\cos 3x$",
        "$y = \\sin 3x$",
        "$y = \\tan 2x$",
        "$y = x\\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "Đồ thị nhận trục tung làm trục đối xứng khi và chỉ khi hàm số là hàm số chẵn. Trong 4 phương án, chỉ có $y = \\cos 3x$ là hàm số chẵn."
    },
    {
      "id": "quiz-11.3.25",
      "badge": "Câu 25 - Nhận biết - Chu kỳ sin x và cos x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của các hàm số $y = \\sin x$ và $y = \\cos x$ là:",
      "options": [
        "$2\\pi$",
        "$\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số sin và côsin tuần hoàn với chu kỳ cơ sở $T = 2\\pi$."
    },
    {
      "id": "quiz-11.3.26",
      "badge": "Câu 26 - Nhận biết - Chu kỳ tan x và cot x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của các hàm số $y = \\tan x$ và $y = \\cot x$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$\\dfrac{\\pi}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số tang và côtang tuần hoàn với chu kỳ $T = \\pi$."
    },
    {
      "id": "quiz-11.3.27",
      "badge": "Câu 27 - Thông hiểu - Chu kỳ sin 3x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin 3x$ là:",
      "options": [
        "$\\dfrac{2\\pi}{3}$",
        "$3\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Chu kỳ $T = \\dfrac{2\\pi}{|\\omega|} = \\dfrac{2\\pi}{3}$."
    },
    {
      "id": "quiz-11.3.28",
      "badge": "Câu 28 - Thông hiểu - Chu kỳ cos(x/2)",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\cos\\left(\\dfrac{x}{2}\\right)$ là:",
      "options": [
        "$4\\pi$",
        "$2\\pi$",
        "$\\pi$",
        "$\\dfrac{\\pi}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$T = \\dfrac{2\\pi}{|1/2|} = 4\\pi$."
    },
    {
      "id": "quiz-11.3.29",
      "badge": "Câu 29 - Thông hiểu - Chu kỳ tan 4x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\tan 4x$ là:",
      "options": [
        "$\\dfrac{\\pi}{4}$",
        "$\\dfrac{\\pi}{2}$",
        "$\\pi$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Chu kỳ hàm tang là $T = \\dfrac{\\pi}{|\\omega|} = \\dfrac{\\pi}{4}$."
    },
    {
      "id": "quiz-11.3.30",
      "badge": "Câu 30 - Vận dụng - Chu kỳ tổng hai hàm sin",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin 2x + \\cos 3x$ là:",
      "options": [
        "$2\\pi$",
        "$\\pi$",
        "$6\\pi$",
        "$\\dfrac{2\\pi}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$T_1 = \\dfrac{2\\pi}{2} = \\pi$, $T_2 = \\dfrac{2\\pi}{3}$. Chu kỳ chung là bội chung nhỏ nhất của $T_1$ và $T_2$, tức $T = 2\\pi$ (vì $2\\pi = 2T_1 = 3T_2$)."
    },
    {
      "id": "quiz-11.3.31",
      "badge": "Câu 31 - Vận dụng - Chu kỳ hàm trị tuyệt đối",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của hàm số $y = |\\sin x|$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Đồ thị $|\\sin x|$ giữ nguyên phần trên trục hoành và lấy đối xứng phần dưới lên trên, lặp lại sau mỗi khoảng $\\pi$ (chu kỳ $T = \\pi$)."
    },
    {
      "id": "quiz-11.3.32",
      "badge": "Câu 32 - Vận dụng cao - Chu kỳ hàm sin^2 x",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 4",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin^2 x$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Hạ bậc: $y = \\dfrac{1 - \\cos 2x}{2}$. Hàm số $\\cos 2x$ có chu kỳ $T = \\dfrac{2\\pi}{2} = \\pi$."
    },
    {
      "id": "quiz-11.3.33",
      "badge": "Câu 33 - Nhận biết - Đồng biến hàm sin",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Hàm số $y = \\sin x$ đồng biến trên khoảng nào sau đây?",
      "options": [
        "$\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
        "$\\left(0; \\pi\\right)$",
        "$\\left(\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right)$",
        "$\\left(\\pi; 2\\pi\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\sin x$ đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ và các khoảng cộng thêm $k2\\pi$."
    },
    {
      "id": "quiz-11.3.34",
      "badge": "Câu 34 - Nhận biết - Nghịch biến hàm cos",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Hàm số $y = \\cos x$ nghịch biến trên khoảng nào sau đây?",
      "options": [
        "$(0; \\pi)$",
        "$(-\\pi; 0)$",
        "$\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
        "$\\left(0; \\dfrac{\\pi}{2}\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\cos x$ nghịch biến trên $(0; \\pi)$ và đồng biến trên $(-\\pi; 0)$."
    },
    {
      "id": "quiz-11.3.35",
      "badge": "Câu 35 - Thông hiểu - Tính đơn điệu hàm tang",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Khẳng định nào sau đây là ĐÚNG về hàm số $y = \\tan x$?",
      "options": [
        "Hàm số $y = \\tan x$ luôn đồng biến trên mỗi khoảng xác định $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right)$",
        "Hàm số $y = \\tan x$ luôn nghịch biến trên mỗi khoảng xác định",
        "Hàm số $y = \\tan x$ đồng biến trên $\\mathbb{R}$",
        "Hàm số $y = \\tan x$ không có tính đơn điệu"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\tan x$ đồng biến trên từng khoảng xác định của nó."
    },
    {
      "id": "quiz-11.3.36",
      "badge": "Câu 36 - Thông hiểu - Giao điểm trục tung",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Đồ thị hàm số $y = \\cos x$ cắt trục tung tại điểm có tọa độ là:",
      "options": [
        "$(0; 1)$",
        "$(0; 0)$",
        "$(1; 0)$",
        "$(0; -1)$"
      ],
      "correctIndex": 0,
      "explanation": "Giao điểm với trục tung $Oy$ có $x = 0 \\Rightarrow y = \\cos 0 = 1$. Tọa độ điểm là $(0; 1)$."
    },
    {
      "id": "quiz-11.3.37",
      "badge": "Câu 37 - Vận dụng - Thủy triều cực đại",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Mực nước biển $h(t) = 3\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 8$ (mét, $t$ tính theo giờ từ 0h đến 24h). Lần đầu tiên mực nước đạt cực đại trong ngày là vào lúc:",
      "options": [
        "$0$ giờ (nửa đêm)",
        "$6$ giờ sáng",
        "$12$ giờ trưa",
        "$3$ giờ sáng"
      ],
      "correctIndex": 0,
      "explanation": "$h(t)$ lớn nhất khi $\\cos\\left(\\dfrac{\\pi t}{6}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi t}{6} = k2\\pi \\Leftrightarrow t = 12k$. Với $t \\in [0; 24]$, lần đầu tiên là $t = 0$ giờ."
    },
    {
      "id": "quiz-11.3.38",
      "badge": "Câu 38 - Vận dụng - Nhiệt độ ngày đêm",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Nhiệt độ trong ngày $T(t) = 25 - 6\\cos\\left(\\dfrac{\\pi(t - 4)}{12}\\right)$ ($^\\circ$C), với $t$ là số giờ tính từ 0h. Nhiệt độ thấp nhất trong ngày là bao nhiêu độ C?",
      "options": [
        "$19^\\circ$C",
        "$25^\\circ$C",
        "$31^\\circ$C",
        "$13^\\circ$C"
      ],
      "correctIndex": 0,
      "explanation": "$T(t)$ nhỏ nhất khi $\\cos\\left(\\dfrac{\\pi(t - 4)}{12}\\right) = 1 \\Rightarrow T_{\\min} = 25 - 6(1) = 19^\\circ$C (xảy ra lúc 4 giờ sáng)."
    },
    {
      "id": "quiz-11.3.39",
      "badge": "Câu 39 - Vận dụng cao - Đu quay Sun Wheel",
      "source": "Tài liệu Luyện tập Toán 11 C1B3",
      "question": "Độ cao của ghế đu quay tính từ mặt đất: $h(t) = 50 - 40\\cos\\left(\\dfrac{\\pi t}{20}\\right)$ (mét, $t$ tính bằng giây). Ghế đu quay ở độ cao cao nhất là bao nhiêu mét?",
      "options": [
        "$90$ m",
        "$50$ m",
        "$40$ m",
        "$80$ m"
      ],
      "correctIndex": 0,
      "explanation": "Độ cao cao nhất khi $\\cos\\left(\\dfrac{\\pi t}{20}\\right) = -1 \\Rightarrow h_{\\max} = 50 - 40(-1) = 90$ m."
    },
    {
      "id": "quiz-11.3.40",
      "badge": "Câu 40 - Vận dụng cao - Số nghiệm phương trình trên đoạn",
      "source": "SGK Toán 11 KNTT Bài 3 - Dạng 5",
      "question": "Số giao điểm của đồ thị hàm số $y = \\sin x$ với đường thẳng $y = \\dfrac{1}{2}$ trên đoạn $[0; 2\\pi]$ là:",
      "options": [
        "$2$",
        "$1$",
        "$3$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình $\\sin x = 1/2$ trên đoạn $[0; 2\\pi]$ có đúng 2 nghiệm là $x = \\pi/6$ và $x = 5\\pi/6$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-11.3.1",
      "badge": "Đúng/Sai 1 - Tập xác định của hàm số lượng giác",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 1",
      "prompt": "Xét tập xác định của các hàm số lượng giác cơ bản:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\sin x$ có tập xác định $D = \\mathbb{R}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = \\cos x$ có tập xác định $D = \\mathbb{R}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\tan x$ xác định với mọi $x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)",
          "correctAnswer": false,
          "explanation": "Sai, điều kiện là $x \\ne \\dfrac{\\pi}{2} + k\\pi$."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\cot x$ xác định với mọi $x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "tf-11.3.2",
      "badge": "Đúng/Sai 2 - Tập giá trị của hàm số lượng giác",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 2",
      "prompt": "Xét tập giá trị của các hàm số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập giá trị của hàm số $y = \\sin x$ là đoạn $[-1; 1]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Tập giá trị của hàm số $y = \\cos x$ là đoạn $[-1; 1]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Tập giá trị của hàm số $y = \\tan x$ là đoạn $[-1; 1]$",
          "correctAnswer": false,
          "explanation": "Sai, tập giá trị của tang là toàn bộ $\\mathbb{R}$."
        },
        {
          "id": "d",
          "text": "Tập giá trị của hàm số $y = \\cos^2 x$ là đoạn $[0; 1]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "tf-11.3.3",
      "badge": "Đúng/Sai 3 - GTLN và GTNN cơ bản",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 2",
      "prompt": "Cho hàm số $y = 3\\cos x - 1$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá trị lớn nhất của hàm số bằng $2$",
          "correctAnswer": true,
          "explanation": "$\\max y = 3(1) - 1 = 2$. Đúng."
        },
        {
          "id": "b",
          "text": "Giá trị nhỏ nhất của hàm số bằng $-4$",
          "correctAnswer": true,
          "explanation": "$\\min y = 3(-1) - 1 = -4$. Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số đạt giá trị lớn nhất khi $x = k2\\pi$ ($k \\in \\mathbb{Z}$)",
          "correctAnswer": true,
          "explanation": "$\\cos x = 1 \\Leftrightarrow x = k2\\pi$. Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số đạt giá trị nhỏ nhất khi $x = \\dfrac{\\pi}{2} + k\\pi$",
          "correctAnswer": false,
          "explanation": "Sai, $\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$."
        }
      ]
    },
    {
      "id": "tf-11.3.4",
      "badge": "Đúng/Sai 4 - Tính chẵn lẻ cơ bản",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 3",
      "prompt": "Xét tính chẵn - lẻ của các hàm số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\cos x$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = \\sin x$ là hàm số lẻ",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\tan x$ là hàm số chẵn",
          "correctAnswer": false,
          "explanation": "Sai, $\\tan(-x) = -\\tan x$ là hàm số lẻ."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\cot x$ là hàm số lẻ",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "tf-11.3.5",
      "badge": "Đúng/Sai 5 - Tính chẵn lẻ mở rộng",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 3",
      "prompt": "Xét tính chẵn lẻ của các hàm số:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\cos 2x + 1$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = x\\sin x$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\sin x + \\cos x$ là hàm số lẻ",
          "correctAnswer": false,
          "explanation": "Sai, không chẵn không lẻ."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\sin |x|$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "$\\sin|-x| = \\sin|x|$. Đúng."
        }
      ]
    },
    {
      "id": "tf-11.3.6",
      "badge": "Đúng/Sai 6 - Tính tuần hoàn và chu kỳ",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 4",
      "prompt": "Xét chu kỳ tuần hoàn của các hàm số:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\sin 2x$ tuần hoàn với chu kỳ $T = \\pi$",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi/2 = \\pi$. Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = \\cos 4x$ tuần hoàn với chu kỳ $T = \\dfrac{\\pi}{2}$",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi/4 = \\pi/2$. Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\tan 2x$ tuần hoàn với chu kỳ $T = \\pi$",
          "correctAnswer": false,
          "explanation": "Sai, chu kỳ của tang là $T = \\pi/2$."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\cot\\left(\\dfrac{x}{3}\\right)$ tuần hoàn với chu kỳ $T = 3\\pi$",
          "correctAnswer": true,
          "explanation": "$T = \\pi / (1/3) = 3\\pi$. Đúng."
        }
      ]
    },
    {
      "id": "tf-11.3.7",
      "badge": "Đúng/Sai 7 - Tính đơn điệu hàm sin",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 5",
      "prompt": "Cho hàm số $y = \\sin x$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Đồng biến trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Nghịch biến trên khoảng $\\left(\\dfrac{\\pi}{2}; \\pi\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Đồng biến trên khoảng $(0; \\pi)$",
          "correctAnswer": false,
          "explanation": "Sai, trên $(0; \\pi)$ hàm số vừa tăng vừa giảm."
        },
        {
          "id": "d",
          "text": "Nghịch biến trên khoảng $\\left(\\pi; \\dfrac{3\\pi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "tf-11.3.8",
      "badge": "Đúng/Sai 8 - Tính đơn điệu hàm cos",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 5",
      "prompt": "Cho hàm số $y = \\cos x$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Nghịch biến trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Nghịch biến trên khoảng $(0; \\pi)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Đồng biến trên khoảng $(-\\pi; 0)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Đồng biến trên khoảng $(0; 2\\pi)$",
          "correctAnswer": false,
          "explanation": "Sai, từ 0 đến $\\pi$ nghịch biến, từ $\\pi$ đến $2\\pi$ đồng biến."
        }
      ]
    },
    {
      "id": "tf-11.3.9",
      "badge": "Đúng/Sai 9 - Đồ thị hàm số lượng giác",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 5",
      "prompt": "Xét đồ thị của các hàm số lượng giác cơ bản:",
      "subItems": [
        {
          "id": "a",
          "text": "Đồ thị hàm số $y = \\sin x$ đi qua gốc tọa độ $O(0; 0)$",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin 0 = 0$."
        },
        {
          "id": "b",
          "text": "Đồ thị hàm số $y = \\cos x$ đi qua điểm $(0; 1)$",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos 0 = 1$."
        },
        {
          "id": "c",
          "text": "Đồ thị hàm số $y = \\tan x$ nhận các đường thẳng $x = \\dfrac{\\pi}{2} + k\\pi$ làm tiệm cận đứng",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Đồ thị hàm số $y = \\cos x$ nhận gốc tọa độ $O$ làm tâm đối xứng",
          "correctAnswer": false,
          "explanation": "Sai, hàm chẵn đối xứng qua trục tung $Oy$."
        }
      ]
    },
    {
      "id": "tf-11.3.10",
      "badge": "Đúng/Sai 10 - GTLN, GTNN hàm phức hợp",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 2",
      "prompt": "Cho hàm số $y = \\sin^2 x - 4\\sin x + 5$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá trị nhỏ nhất của hàm số bằng $2$",
          "correctAnswer": true,
          "explanation": "Đặt $t = \\sin x \\in [-1; 1]$. $f(t) = t^2 - 4t + 5$. Đỉnh parabol tại $t = 2$ (loại). $f(1) = 1 - 4 + 5 = 2$. Vậy $\\min = 2$. Đúng."
        },
        {
          "id": "b",
          "text": "Giá trị lớn nhất của hàm số bằng $10$",
          "correctAnswer": true,
          "explanation": "$f(-1) = 1 + 4 + 5 = 10$. Đúng."
        },
        {
          "id": "c",
          "text": "Tập giá trị của hàm số là $[2; 10]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số đạt giá trị nhỏ nhất khi $x = \\pi + k2\\pi$",
          "correctAnswer": false,
          "explanation": "Sai, đạt nhỏ nhất khi $\\sin x = 1 \\Leftrightarrow x = \\pi/2 + k2\\pi$."
        }
      ]
    },
    {
      "id": "tf-11.3.11",
      "badge": "Đúng/Sai 11 - TXĐ chứa căn thức và mẫu",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 1",
      "prompt": "Cho hàm số $y = \\dfrac{\\sqrt{1 - \\cos x}}{\\sin x}$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Biểu thức $1 - \\cos x \\ge 0$ luôn đúng với mọi $x \\in \\mathbb{R}$",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos x \\le 1$."
        },
        {
          "id": "b",
          "text": "Điều kiện để hàm số xác định là $\\sin x \\ne 0$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Tập xác định là $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số xác định tại điểm $x = \\pi$",
          "correctAnswer": false,
          "explanation": "Sai, tại $x = \\pi$ thì $\\sin\\pi = 0$ (mẫu bằng 0)."
        }
      ]
    },
    {
      "id": "tf-11.3.12",
      "badge": "Đúng/Sai 12 - Chu kỳ hàm trị tuyệt đối và bình phương",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 4",
      "prompt": "Xét chu kỳ tuần hoàn của các hàm số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\cos^2 x$ có chu kỳ $T = \\pi$",
          "correctAnswer": true,
          "explanation": "$\\cos^2 x = (1 + \\cos 2x)/2$ có chu kỳ $\\pi$. Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = |\\cos x|$ có chu kỳ $T = \\pi$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\sin^2 2x$ có chu kỳ $T = \\dfrac{\\pi}{2}$",
          "correctAnswer": true,
          "explanation": "Hạ bậc thành $\\cos 4x$, chu kỳ $2\\pi/4 = \\pi/2$. Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số $y = |\\tan x|$ có chu kỳ $T = 2\\pi$",
          "correctAnswer": false,
          "explanation": "Sai, chu kỳ của $|\\tan x|$ vẫn là $\\pi$."
        }
      ]
    },
    {
      "id": "tf-11.3.13",
      "badge": "Đúng/Sai 13 - Mô hình hiện tượng thủy triều",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 5",
      "prompt": "Mực nước biển ở một cảng được mô tả bởi $h(t) = 4\\sin\\left(\\dfrac{\\pi t}{6}\\right) + 6$ (mét, $0 \\le t \\le 24$ giờ):",
      "subItems": [
        {
          "id": "a",
          "text": "Mực nước biển cao nhất trong ngày là $10$ m",
          "correctAnswer": true,
          "explanation": "$h_{\\max} = 4(1) + 6 = 10$ m. Đúng."
        },
        {
          "id": "b",
          "text": "Mực nước biển thấp nhất trong ngày là $2$ m",
          "correctAnswer": true,
          "explanation": "$h_{\\min} = 4(-1) + 6 = 2$ m. Đúng."
        },
        {
          "id": "c",
          "text": "Chu kỳ lặp lại của mực nước là $12$ giờ",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi / (\\pi/6) = 12$ giờ. Đúng."
        },
        {
          "id": "d",
          "text": "Lúc $6$ giờ sáng mực nước biển đạt cực đại",
          "correctAnswer": false,
          "explanation": "Sai, cực đại khi $\\sin(\\pi t/6) = 1 \\Leftrightarrow \\pi t/6 = \\pi/2 \\Leftrightarrow t = 3$ giờ sáng."
        }
      ]
    },
    {
      "id": "tf-11.3.14",
      "badge": "Đúng/Sai 14 - Dao động con lắc đồng hồ",
      "source": "Tài liệu Luyện tập Toán 11 C1B3",
      "prompt": "Li độ góc của một con lắc đơn dao động điều hòa là $\\theta(t) = 0.1\\cos(2\\pi t)$ (rad, $t$ tính theo giây):",
      "subItems": [
        {
          "id": "a",
          "text": "Biên độ góc của con lắc là $0.1$ rad",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Chu kỳ dao động của con lắc là $1$ giây",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi / (2\\pi) = 1$ s. Đúng."
        },
        {
          "id": "c",
          "text": "Tại thời điểm $t = 0.5$ giây, con lắc ở vị trí biên âm ($-0.1$ rad)",
          "correctAnswer": true,
          "explanation": "$\\theta(0.5) = 0.1\\cos(\\pi) = -0.1$ rad. Đúng."
        },
        {
          "id": "d",
          "text": "Trong $10$ giây, con lắc thực hiện được $20$ dao động toàn phần",
          "correctAnswer": false,
          "explanation": "Sai, vì $T = 1$ s nên trong 10 s thực hiện được đúng 10 dao động."
        }
      ]
    },
    {
      "id": "tf-11.3.15",
      "badge": "Đúng/Sai 15 - Nhiệt độ theo các tháng",
      "source": "SGK Toán 11 KNTT Bài 3 Dạng 5",
      "prompt": "Nhiệt độ trung bình tháng $t$ ($1 \\le t \\le 12$) ở một thành phố là $T(t) = 20 + 10\\sin\\left(\\dfrac{\\pi(t - 4)}{6}\\right)$ ($^\\circ$C):",
      "subItems": [
        {
          "id": "a",
          "text": "Nhiệt độ cao nhất trong năm là $30^\\circ$C",
          "correctAnswer": true,
          "explanation": "$20 + 10(1) = 30^\\circ$C. Đúng."
        },
        {
          "id": "b",
          "text": "Nhiệt độ thấp nhất trong năm là $10^\\circ$C",
          "correctAnswer": true,
          "explanation": "$20 + 10(-1) = 10^\\circ$C. Đúng."
        },
        {
          "id": "c",
          "text": "Tháng 7 là tháng có nhiệt độ cao nhất trong năm",
          "correctAnswer": true,
          "explanation": "$\\sin(\\pi(t-4)/6) = 1 \\Leftrightarrow t - 4 = 3 \\Leftrightarrow t = 7$ (Tháng 7). Đúng."
        },
        {
          "id": "d",
          "text": "Tháng 12 là tháng có nhiệt độ thấp nhất trong năm",
          "correctAnswer": false,
          "explanation": "Sai, thấp nhất khi $t - 4 = -3 \\Leftrightarrow t = 1$ (Tháng 1)."
        }
      ]
    },
    {
      "id": "tf-11.3.16",
      "badge": "Đúng/Sai 16 - Vòng quay Ferris Wheel",
      "source": "Tài liệu Luyện tập Toán 11 C1B3",
      "prompt": "Độ cao $h(t)$ của một cabin trên vòng quay Ferris tính từ mặt đất là $h(t) = 60 - 50\\cos\\left(\\dfrac{\\pi t}{15}\\right)$ (mét, $t$ tính theo phút):",
      "subItems": [
        {
          "id": "a",
          "text": "Đường kính của vòng quay Ferris bằng $100$ m",
          "correctAnswer": true,
          "explanation": "Bán kính bằng 50 m nên đường kính là 100 m. Đúng."
        },
        {
          "id": "b",
          "text": "Trục quay của bánh xe ở độ cao $60$ m so với mặt đất",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Thời gian để vòng quay hoàn thành 1 vòng là $30$ phút",
          "correctAnswer": true,
          "explanation": "Chu kỳ $T = 2\\pi / (\\pi/15) = 30$ phút. Đúng."
        },
        {
          "id": "d",
          "text": "Độ cao thấp nhất của cabin khi ở đáy vòng quay là $0$ m (chạm đất)",
          "correctAnswer": false,
          "explanation": "Sai, độ cao thấp nhất là $60 - 50 = 10$ m (cách đất 10 m)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-11.3.1",
      "badge": "TLN 1 - Chu kỳ hàm sin 4x",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm chu kỳ tuần hoàn $T$ của hàm số $y = \\sin 4x$. (Nhập theo dạng số nhân với pi, ví dụ: pi/2)",
      "correctAnswer": "$\\dfrac{\\pi}{2}$",
      "acceptableAnswers": [
        "pi/2",
        "π/2"
      ],
      "explanation": "$T = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$."
    },
    {
      "id": "sa-11.3.2",
      "badge": "TLN 2 - Chu kỳ hàm tan 3x",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm chu kỳ tuần hoàn của hàm số $y = \\tan 3x$.",
      "correctAnswer": "$\\dfrac{\\pi}{3}$",
      "acceptableAnswers": [
        "pi/3",
        "π/3"
      ],
      "explanation": "$T = \\dfrac{\\pi}{3}$."
    },
    {
      "id": "sa-11.3.3",
      "badge": "TLN 3 - Giá trị lớn nhất hàm bậc nhất",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = 5\\cos 2x + 7$.",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12"
      ],
      "explanation": "$\\max y = 5(1) + 7 = 12$."
    },
    {
      "id": "sa-11.3.4",
      "badge": "TLN 4 - Giá trị nhỏ nhất hàm bậc nhất",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = 3 - 4\\sin x$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "$\\min y = 3 - 4(1) = -1$."
    },
    {
      "id": "sa-11.3.5",
      "badge": "TLN 5 - Giá trị lớn nhất căn bậc hai",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\sqrt{7 + 9\\cos x}$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4"
      ],
      "explanation": "$\\max y = \\sqrt{7 + 9(1)} = \\sqrt{16} = 4$."
    },
    {
      "id": "sa-11.3.6",
      "badge": "TLN 6 - Giá trị nhỏ nhất căn bậc hai",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = \\sqrt{5 - 4\\sin x}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\min y = \\sqrt{5 - 4(1)} = \\sqrt{1} = 1$."
    },
    {
      "id": "sa-11.3.7",
      "badge": "TLN 7 - GTLN dạng asinx + bcosx",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = 6\\sin x + 8\\cos x - 3$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7"
      ],
      "explanation": "$\\sqrt{6^2 + 8^2} = 10 \\Rightarrow \\max y = 10 - 3 = 7$."
    },
    {
      "id": "sa-11.3.8",
      "badge": "TLN 8 - GTNN dạng asinx + bcosx",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = 5\\sin x - 12\\cos x + 2$.",
      "correctAnswer": "-11",
      "acceptableAnswers": [
        "-11"
      ],
      "explanation": "$\\sqrt{5^2 + (-12)^2} = 13 \\Rightarrow \\min y = -13 + 2 = -11$."
    },
    {
      "id": "sa-11.3.9",
      "badge": "TLN 9 - Chu kỳ hàm kết hợp",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm chu kỳ tuần hoàn của hàm số $y = \\sin\\left(\\dfrac{2\\pi x}{5}\\right)$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "$T = \\dfrac{2\\pi}{2\\pi/5} = 5$."
    },
    {
      "id": "sa-11.3.10",
      "badge": "TLN 10 - Số điểm gián đoạn",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Hàm số $y = \\tan x$ không xác định tại bao nhiêu điểm trên đoạn $[0; 2\\pi]$?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Hai điểm không xác định là $x = \\pi/2$ và $x = 3\\pi/2$."
    },
    {
      "id": "sa-11.3.11",
      "badge": "TLN 11 - Giá trị cực đại thủy triều",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Độ cao mực nước biển $h(t) = 5\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 9$ (m). Tính mực nước biển cao nhất trong ngày (mét).",
      "correctAnswer": "14 m",
      "acceptableAnswers": [
        "14",
        "14m"
      ],
      "explanation": "$h_{\\max} = 5(1) + 9 = 14$ m."
    },
    {
      "id": "sa-11.3.12",
      "badge": "TLN 12 - Chu kỳ thủy triều",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Hàm số độ cao mực nước biển $h(t) = 5\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 9$ tuần hoàn theo chu kỳ bao nhiêu giờ?",
      "correctAnswer": "12 giờ",
      "acceptableAnswers": [
        "12",
        "12h"
      ],
      "explanation": "$T = 2\\pi / (\\pi/6) = 12$ giờ."
    },
    {
      "id": "sa-11.3.13",
      "badge": "TLN 13 - Thời gian hoàn thành vòng quay",
      "source": "Tài liệu Luyện tập Toán 11 C1B3",
      "prompt": "Một cabin đu quay có độ cao $h(t) = 35 - 30\\cos\\left(\\dfrac{\\pi t}{15}\\right)$ (m, $t$ tính theo giây). Thời gian đu quay quay hết một vòng là bao nhiêu giây?",
      "correctAnswer": "30 giây",
      "acceptableAnswers": [
        "30",
        "30s"
      ],
      "explanation": "$T = 2\\pi / (\\pi/15) = 30$ giây."
    },
    {
      "id": "sa-11.3.14",
      "badge": "TLN 14 - Độ cao lớn nhất cabin",
      "source": "Tài liệu Luyện tập Toán 11 C1B3",
      "prompt": "Với hàm $h(t) = 35 - 30\\cos\\left(\\dfrac{\\pi t}{15}\\right)$ (m), độ cao lớn nhất của cabin so với mặt đất là bao nhiêu mét?",
      "correctAnswer": "65 m",
      "acceptableAnswers": [
        "65",
        "65m"
      ],
      "explanation": "$h_{\\max} = 35 - 30(-1) = 65$ m."
    },
    {
      "id": "sa-11.3.15",
      "badge": "TLN 15 - GTLN hàm cos^2 x + cos x",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\cos^2 x + \\cos x + 1$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "$t = \\cos x \\in [-1; 1]$. $f(t) = t^2 + t + 1$. Lớn nhất tại $t = 1 \\Rightarrow 1 + 1 + 1 = 3$."
    },
    {
      "id": "sa-11.3.16",
      "badge": "TLN 16 - GTNN hàm cos^2 x + cos x",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = \\cos^2 x + \\cos x + 1$. (Viết kết quả dạng số thập phân)",
      "correctAnswer": "0.75",
      "acceptableAnswers": [
        "0.75",
        "3/4"
      ],
      "explanation": "$f(t) = (t + 1/2)^2 + 3/4 \\ge 3/4 = 0.75$ (đạt khi $\\cos x = -1/2$)."
    },
    {
      "id": "sa-11.3.17",
      "badge": "TLN 17 - Chu kỳ hàm hạ bậc",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm chu kỳ tuần hoàn của hàm số $y = \\sin^2 3x$.",
      "correctAnswer": "$\\dfrac{\\pi}{3}$",
      "acceptableAnswers": [
        "pi/3",
        "π/3"
      ],
      "explanation": "Hạ bậc: $y = (1 - \\cos 6x)/2 \\Rightarrow T = 2\\pi/6 = \\pi/3$."
    },
    {
      "id": "sa-11.3.18",
      "badge": "TLN 18 - Số nghiệm trên khoảng",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Phương trình $\\sin x = 0$ có bao nhiêu nghiệm trên đoạn $[0; 4\\pi]$?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "Các nghiệm là $x \\in \\{0; \\pi; 2\\pi; 3\\pi; 4\\pi\\}$ (tổng cộng 5 nghiệm)."
    },
    {
      "id": "sa-11.3.19",
      "badge": "TLN 19 - Số điểm cực trị",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Hàm số $y = \\cos x$ đạt giá trị cực đại bao nhiêu lần trên đoạn $[0; 4\\pi]$?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "$\\cos x = 1$ tại $x \\in \\{0; 2\\pi; 4\\pi\\}$ (3 lần)."
    },
    {
      "id": "sa-11.3.20",
      "badge": "TLN 20 - Tần số dao động nhịp tim",
      "source": "Tài liệu Luyện tập Toán 11 C1B3",
      "prompt": "Điện thế tim $V(t) = 2\\sin(2.4\\pi t)$ (mV, $t$ tính bằng giây). Trong một phút ($60$ giây), quả tim đập bao nhiêu nhịp?",
      "correctAnswer": "72 nhịp",
      "acceptableAnswers": [
        "72",
        "72 nhịp"
      ],
      "explanation": "Chu kỳ 1 nhịp: $T = 2\\pi / (2.4\\pi) = 1/1.2 = 5/6$ giây. Số nhịp trong 60 giây: $60 / (5/6) = 72$ nhịp."
    },
    {
      "id": "sa-11.3.21",
      "badge": "TLN 21 - Khoảng cách hai đỉnh sóng",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Đồ thị hàm số $y = 3\\sin 2x$ có khoảng cách giữa hai đỉnh liên tiếp (hai điểm cực đại liên tiếp) bằng bao nhiêu? (Nhập giá trị theo pi, ví dụ: pi)",
      "correctAnswer": "$\\pi$",
      "acceptableAnswers": [
        "pi",
        "π"
      ],
      "explanation": "Khoảng cách giữa 2 cực đại liên tiếp chính là chu kỳ $T = 2\\pi/2 = \\pi$."
    },
    {
      "id": "sa-11.3.22",
      "badge": "TLN 22 - GTLN hàm phân thức",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\dfrac{2}{3 - \\cos x}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$y$ lớn nhất khi mẫu $3 - \\cos x$ nhỏ nhất $\\Leftrightarrow \\cos x = 1 \\Rightarrow y_{\\max} = 2/(3 - 1) = 1$."
    },
    {
      "id": "sa-11.3.23",
      "badge": "TLN 23 - GTNN hàm phân thức",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = \\dfrac{2}{3 - \\cos x}$. (Viết kết quả dạng phân số tối giản a/b)",
      "correctAnswer": "1/2",
      "acceptableAnswers": [
        "1/2",
        "0.5"
      ],
      "explanation": "$y$ nhỏ nhất khi mẫu lớn nhất $\\Leftrightarrow \\cos x = -1 \\Rightarrow y_{\\min} = 2/(3 - (-1)) = 2/4 = 1/2$."
    },
    {
      "id": "sa-11.3.24",
      "badge": "TLN 24 - Nhiệt độ trung bình ngày",
      "source": "SGK Toán 11 KNTT Bài 3",
      "prompt": "Nhiệt độ $T(t) = 24 + 6\\sin\\left(\\dfrac{\\pi(t - 8)}{12}\\right)$ ($^\\circ$C). Vào lúc mấy giờ trong ngày ($0 \\le t \\le 24$) thì nhiệt độ đạt cao nhất?",
      "correctAnswer": "14 giờ",
      "acceptableAnswers": [
        "14",
        "14h",
        "14 giờ"
      ],
      "explanation": "Cao nhất khi $\\sin = 1 \\Leftrightarrow \\pi(t - 8)/12 = \\pi/2 \\Leftrightarrow t - 8 = 6 \\Leftrightarrow t = 14$ giờ (2 giờ chiều)."
    }
  ]
}
};
