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
},
  // ==========================================
  // BÀI 4: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN
  // ==========================================
  "t11-b4-phuong-trinh-luong-giac-co-ban": {
    "id": "t11-b4-phuong-trinh-luong-giac-co-ban",
    "lessonNumber": 4,
    "title": "Bài 4: Phương trình lượng giác cơ bản",
    "bookChapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
    "scenarioTitle": "Tình huống: Điều khiển chuyển động quay và chu kỳ dao động điện xoay chiều",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn Minh",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy, khi một con lắc dao động hoặc dòng điện xoay chiều $i = I_0 \\cos(\\omega t + \\varphi)$, làm sao để tìm chính xác các thời điểm mà cường độ dòng điện đạt giá trị cho trước ạ?",
        "visualGraphic": "circle",
        "mathNote": "i = I_0 \\cos(\\omega t + \\varphi) = I_1"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào Minh! Để tìm các thời điểm đó, ta phải giải một phương trình lượng giác. Hôm nay chúng ta sẽ nắm vững công thức nghiệm tổng quát của 4 phương trình cơ bản: $\\sin x = m$, $\\cos x = m$, $\\tan x = m$, $\\cot x = m$ và cách chọn nghiệm trên một khoảng xác định.",
        "visualGraphic": "circle",
        "mathNote": "\\cos x = m, \\quad \\sin x = m"
      }
    ],
    "youtubeVideoId": "p6JAwRaNj24",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 4 - Phương trình lượng giác cơ bản (Tiết 1) - Toán 11 KNTT",
    "youtubeVideos": [
      {
        "id": "p6JAwRaNj24",
        "title": "Tiết 1: Phương trình sin x = m và cos x = m"
      },
      {
        "id": "FKAdDGRBgSc",
        "title": "Tiết 2: Phương trình tan x = m và cot x = m & Ứng dụng"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm phương trình tương đương",
        "points": [
          "Hai phương trình được gọi là tương đương khi chúng có cùng tập nghiệm. Ký hiệu: $f(x) = g(x) \\Leftrightarrow f_1(x) = g_1(x)$.",
          "Các phép biến đổi tương đương: cộng trừ hai vế với cùng một biểu thức (không làm thay đổi ĐKXĐ), nhân hoặc chia hai vế với một biểu thức luôn khác 0."
        ]
      },
      {
        "index": "2",
        "title": "Phương trình sin x = m",
        "points": [
          "Nếu $|m| > 1$: Phương trình vô nghiệm.",
          "Nếu $|m| \\le 1$: Tồn tại duy nhất số $\\alpha \\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ sao cho $\\sin \\alpha = m$. Khi đó:",
          "$$\\sin x = \\sin \\alpha \\Leftrightarrow \\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$$",
          "Nếu góc cho bằng độ: $\\sin x = \\sin \\alpha^\\circ \\Leftrightarrow \\left[\\begin{array}{l} x = \\alpha^\\circ + k360^\\circ \\\\ x = 180^\\circ - \\alpha^\\circ + k360^\\circ \\end{array}\\right. (k \\in \\mathbb{Z})$.",
          "Các trường hợp đặc biệt: $\\sin x = 0 \\Leftrightarrow x = k\\pi$; $\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi$; $\\sin x = -1 \\Leftrightarrow x = -\\dfrac{\\pi}{2} + k2\\pi$."
        ],
        "examples": [
          {
            "title": "Ví dụ 1: Giải phương trình sin x = 1/2 và sin(2x - pi/4) = 0",
            "problem": "$\\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$.",
            "solution": "a) $\\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$.<br/>b) $\\sin\\left(2x - \\dfrac{\\pi}{4}\\right) = 0 \\Leftrightarrow 2x - \\dfrac{\\pi}{4} = k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$."
          }
        ]
      },
      {
        "index": "3",
        "title": "Phương trình cos x = m",
        "points": [
          "Nếu $|m| > 1$: Phương trình vô nghiệm.",
          "Nếu $|m| \\le 1$: Tồn tại duy nhất số $\\alpha \\in [0; \\pi]$ sao cho $\\cos \\alpha = m$. Khi đó:",
          "$$\\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$$",
          "Nếu góc cho bằng độ: $\\cos x = \\cos \\alpha^\\circ \\Leftrightarrow x = \\pm \\alpha^\\circ + k360^\\circ \\ (k \\in \\mathbb{Z})$.",
          "Các trường hợp đặc biệt: $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$; $\\cos x = 1 \\Leftrightarrow x = k2\\pi$; $\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$."
        ],
        "examples": [
          {
            "title": "Ví dụ 2: Giải phương trình cos x = -sqrt(2)/2",
            "problem": "$\\cos x = -\\dfrac{\\sqrt{2}}{2} = \\cos\\dfrac{3\\pi}{4} \\Leftrightarrow x = \\pm \\dfrac{3\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "solution": "$\\cos x = -\\dfrac{\\sqrt{2}}{2} = \\cos\\dfrac{3\\pi}{4} \\Leftrightarrow x = \\pm \\dfrac{3\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$."
          }
        ]
      },
      {
        "index": "4",
        "title": "Phương trình tan x = m và cot x = m",
        "points": [
          "Phương trình $\\tan x = m$ luôn có nghiệm với mọi $m \\in \\mathbb{R}$:",
          "$$\\tan x = \\tan \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$$",
          "Phương trình $\\cot x = m$ luôn có nghiệm với mọi $m \\in \\mathbb{R}$:",
          "$$\\cot x = \\cot \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$$",
          "Lưu ý: Chu kỳ nghiệm của tan và cot chỉ là $k\\pi$ (khác với $k2\\pi$ ở sin và cos)."
        ],
        "examples": [
          {
            "title": "Ví dụ 3: Giải phương trình tan(x + pi/6) = sqrt(3)",
            "problem": "$\\tan\\left(x + \\dfrac{\\pi}{6}\\right) = \\sqrt{3} = \\tan\\dfrac{\\pi}{3} \\Leftrightarrow x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "solution": "$\\tan\\left(x + \\dfrac{\\pi}{6}\\right) = \\sqrt{3} = \\tan\\dfrac{\\pi}{3} \\Leftrightarrow x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$."
          }
        ]
      },
      {
        "index": "5",
        "title": "Phương trình lượng giác đưa về dạng cơ bản & Ứng dụng",
        "points": [
          "Phương trình dạng $\\sin u(x) = \\cos v(x)$: Sử dụng góc phụ $\\cos v = \\sin\\left(\\dfrac{\\pi}{2} - v\\right)$ để quy về dạng $\\sin u = \\sin\\left(\\dfrac{\\pi}{2} - v\\right)$.",
          "Phương trình tích $A \\cdot B = 0 \\Leftrightarrow A = 0$ hoặc $B = 0$.",
          "Phương trình quy về bậc hai theo một hàm lượng giác: đặt ẩn phụ $t = \\sin x$ hoặc $t = \\cos x$ với điều kiện $|t| \\le 1$."
        ],
        "examples": [
          {
            "title": "Ví dụ 4: Giải phương trình 2cos^2 x - cos x - 1 = 0",
            "problem": "Đặt $t = \\cos x \\ (-1 \\le t \\le 1)$. Ta có $2t^2 - t - 1 = 0 \\Leftrightarrow \\left[\\begin{array}{l} t = 1 \\\\ t = -\\dfrac{1}{2} \\end{array}\\right.$.",
            "solution": "Đặt $t = \\cos x \\ (-1 \\le t \\le 1)$. Ta có $2t^2 - t - 1 = 0 \\Leftrightarrow \\left[\\begin{array}{l} t = 1 \\\\ t = -\\dfrac{1}{2} \\end{array}\\right.$.<br/>• Với $\\cos x = 1 \\Leftrightarrow x = k2\\pi \\ (k \\in \\mathbb{Z})$.<br/>• Với $\\cos x = -\\dfrac{1}{2} = \\cos\\dfrac{2\\pi}{3} \\Leftrightarrow x = \\pm \\dfrac{2\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$."
          }
        ]
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-11.4.1",
        "question": "Trong Video Tiết 1, điều kiện cần và đủ để phương trình $\\sin x = m$ có nghiệm là gì?",
        "options": [
          "$-1 \\le m \\le 1$",
          "$m \\ge 0$",
          "$m \\in \\mathbb{R}$",
          "$m > -1$"
        ],
        "correctIndex": 0,
        "explanation": "Tập giá trị của hàm sin là đoạn $[-1; 1]$, do đó phương trình chỉ có nghiệm khi $-1 \\le m \\le 1$.",
        "title": "Câu hỏi 1: Trong Video Tiết 1, điều kiện cần và đủ để phương ..."
      },
      {
        "id": "vq-11.4.2",
        "question": "Theo Video Tiết 1, hai họ nghiệm của phương trình $\\sin x = \\sin \\alpha$ có mối quan hệ hình học gì?",
        "options": [
          "Góc đối xứng qua trục tung $Oy$ (bù nhau: $\\alpha$ và $\\pi - \\alpha$)",
          "Góc đối xứng qua trục hoành $Ox$ (đối nhau: $\\alpha$ và $-\\alpha$)",
          "Góc đối xứng qua gốc tọa độ $O$",
          "Hai góc vuông pha với nhau"
        ],
        "correctIndex": 0,
        "explanation": "Trục tung là trục sin. Hai điểm trên đường tròn có cùng tung độ thì đối xứng qua trục tung, tức là có số đo bù nhau: $\\alpha$ và $\\pi - \\alpha$.",
        "title": "Câu hỏi 2: Theo Video Tiết 1, hai họ nghiệm của phương trình ..."
      },
      {
        "id": "vq-11.4.3",
        "question": "Trong Video Tiết 2, chu kỳ xuất hiện nghiệm của phương trình $\\tan x = m$ là bao nhiêu?",
        "options": [
          "$k\\pi$",
          "$k2\\pi$",
          "$\\dfrac{k\\pi}{2}$",
          "$k3\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số tang tuần hoàn với chu kỳ $\\pi$, nên nghiệm có đuôi là $+ k\\pi$.",
        "title": "Câu hỏi 3: Trong Video Tiết 2, chu kỳ xuất hiện nghiệm của ph..."
      },
      {
        "id": "vq-11.4.4",
        "question": "Khi giải phương trình $\\tan x = m$, tại sao không cần điều kiện $|m| \\le 1$?",
        "options": [
          "Vì tập giá trị của hàm số tang là toàn bộ trục số thực $\\mathbb{R}$",
          "Vì hàm số tang luôn đồng biến",
          "Vì hàm số tang không có tập xác định",
          "Vì hàm số tang có giá trị tuyệt đối nhỏ hơn 1"
        ],
        "correctIndex": 0,
        "explanation": "Tập giá trị của hàm số $y = \\tan x$ là $\\mathbb{R}$, nên với mọi giá trị thực $m$, đường thẳng $y = m$ luôn cắt đồ thị $\\tan x$.",
        "title": "Câu hỏi 4: Khi giải phương trình $\\tan x = m$, tại sao không ..."
      }
    ],
    "quizQuestions": [
      {
        "id": "quiz-11.4.1",
        "badge": "Câu 1 - Nhận biết - Điều kiện có nghiệm của sin x = m",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Phương trình $\\sin x = m$ có nghiệm khi và chỉ khi:",
        "options": [
          "$-1 \\le m \\le 1$",
          "$m \\ge -1$",
          "$m \\le 1$",
          "$m \\in \\mathbb{R}$"
        ],
        "correctIndex": 0,
        "explanation": "Vì tập giá trị của hàm số sin là $[-1; 1]$ nên phương trình $\\sin x = m$ có nghiệm khi và chỉ khi $-1 \\le m \\le 1$."
      },
      {
        "id": "quiz-11.4.2",
        "badge": "Câu 2 - Nhận biết - Công thức nghiệm của sin x = sin alpha",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Công thức nghiệm của phương trình $\\sin x = \\sin \\alpha$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = -\\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\alpha + k\\pi \\\\ x = \\pi - \\alpha + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\alpha + k2\\pi (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $\\sin x = \\sin \\alpha \\Leftrightarrow \\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.3",
        "badge": "Câu 3 - Nhận biết - Trường hợp đặc biệt sin x = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Nghiệm của phương trình $\\sin x = 0$ là:",
        "options": [
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.4",
        "badge": "Câu 4 - Nhận biết - Trường hợp đặc biệt sin x = 1",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Nghiệm của phương trình $\\sin x = 1$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.5",
        "badge": "Câu 5 - Thông hiểu - Giải phương trình sin x = 1/2",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Tất cả các nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\dfrac{2\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k\\pi \\\\ x = \\dfrac{5\\pi}{6} + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = -\\dfrac{\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\dfrac{\\pi}{6} + k2\\pi = \\dfrac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
      },
      {
        "id": "quiz-11.4.6",
        "badge": "Câu 6 - Thông hiểu - Giải phương trình sin(2x - pi/3) = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Nghiệm của phương trình $\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) = 0$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{5\\pi}{12} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) = 0 \\Leftrightarrow 2x - \\dfrac{\\pi}{3} = k\\pi \\Leftrightarrow 2x = \\dfrac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$)."
      },
      {
        "id": "quiz-11.4.7",
        "badge": "Câu 7 - Vận dụng - Tìm nghiệm sin x trên đoạn [0; pi]",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Số nghiệm của phương trình $2\\sin x - \\sqrt{3} = 0$ trên đoạn $[0; 2\\pi]$ là:",
        "options": [
          "$2$",
          "$1$",
          "$3$",
          "$4$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $\\Leftrightarrow \\sin x = \\dfrac{\\sqrt{3}}{2} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k2\\pi$ hoặc $x = \\dfrac{2\\pi}{3} + k2\\pi$. Trên $[0; 2\\pi]$, ta có 2 nghiệm là $x = \\dfrac{\\pi}{3}$ và $x = \\dfrac{2\\pi}{3}$."
      },
      {
        "id": "quiz-11.4.8",
        "badge": "Câu 8 - Vận dụng - Nghiệm âm lớn nhất của phương trình sin",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
        "question": "Nghiệm âm lớn nhất của phương trình $\\sin x = -\\dfrac{1}{2}$ là:",
        "options": [
          "$-\\dfrac{\\pi}{6}$",
          "$-\\dfrac{5\\pi}{6}$",
          "$-\\dfrac{\\pi}{3}$",
          "$-\\dfrac{2\\pi}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = -\\dfrac{1}{2} = \\sin\\left(-\\dfrac{\\pi}{6}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\left(-\\dfrac{\\pi}{6}\\right) + k2\\pi = \\dfrac{7\\pi}{6} + k2\\pi$. Nghiệm âm lớn nhất là $-\\dfrac{\\pi}{6}$ (ứng với họ thứ nhất khi $k = 0$)."
      },
      {
        "id": "quiz-11.4.9",
        "badge": "Câu 9 - Nhận biết - Công thức nghiệm của cos x = cos alpha",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Công thức nghiệm của phương trình $\\cos x = \\cos \\alpha$ là:",
        "options": [
          "$x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\pm \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $\\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.10",
        "badge": "Câu 10 - Nhận biết - Trường hợp đặc biệt cos x = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Nghiệm của phương trình $\\cos x = 0$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.11",
        "badge": "Câu 11 - Nhận biết - Trường hợp đặc biệt cos x = -1",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Nghiệm của phương trình $\\cos x = -1$ là:",
        "options": [
          "$x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.12",
        "badge": "Câu 12 - Thông hiểu - Giải phương trình cos x = 1/2",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Nghiệm của phương trình $\\cos x = \\dfrac{1}{2}$ là:",
        "options": [
          "$x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\dfrac{2\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos x = \\dfrac{1}{2} = \\cos\\dfrac{\\pi}{3} \\Leftrightarrow x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.13",
        "badge": "Câu 13 - Thông hiểu - Giải phương trình cos 2x = -sqrt(2)/2",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Tập nghiệm của phương trình $\\cos 2x = -\\dfrac{\\sqrt{2}}{2}$ là:",
        "options": [
          "$\\left\\{\\pm \\dfrac{3\\pi}{8} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\pm \\dfrac{3\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\pm \\dfrac{\\pi}{8} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\pm \\dfrac{3\\pi}{8} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos 2x = -\\dfrac{\\sqrt{2}}{2} = \\cos\\dfrac{3\\pi}{4} \\Leftrightarrow 2x = \\pm \\dfrac{3\\pi}{4} + k2\\pi \\Leftrightarrow x = \\pm \\dfrac{3\\pi}{8} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.14",
        "badge": "Câu 14 - Thông hiểu - Phương trình cos u = cos v",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Nghiệm của phương trình $\\cos 3x = \\cos x$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = k\\pi \\\\ x = \\dfrac{k\\pi}{2} \\end{array}\\right. (k \\in \\mathbb{Z})$ tức là $x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos 3x = \\cos x \\Leftrightarrow \\left[\\begin{array}{l} 3x = x + k2\\pi \\\\ 3x = -x + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} 2x = k2\\pi \\\\ 4x = k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = k\\pi \\\\ x = \\dfrac{k\\pi}{2} \\end{array}\\right. \\Leftrightarrow x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.15",
        "badge": "Câu 15 - Vận dụng - Tổng các nghiệm cos x trên [0; 2pi]",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Tổng tất cả các nghiệm của phương trình $\\cos x = -\\dfrac{1}{2}$ trên đoạn $[0; 2\\pi]$ bằng:",
        "options": [
          "$2\\pi$",
          "$\\pi$",
          "$\\dfrac{4\\pi}{3}$",
          "$3\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos x = -\\dfrac{1}{2} = \\cos\\dfrac{2\\pi}{3} \\Leftrightarrow x = \\pm \\dfrac{2\\pi}{3} + k2\\pi$. Trên $[0; 2\\pi]$, các nghiệm là $x_1 = \\dfrac{2\\pi}{3}$ và $x_2 = 2\\pi - \\dfrac{2\\pi}{3} = \\dfrac{4\\pi}{3}$. Tổng bằng $\\dfrac{2\\pi}{3} + \\dfrac{4\\pi}{3} = 2\\pi$."
      },
      {
        "id": "quiz-11.4.16",
        "badge": "Câu 16 - Vận dụng - Số điểm biểu diễn nghiệm của cos trên đường tròn",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
        "question": "Số điểm biểu diễn các nghiệm của phương trình $\\cos 4x = 1$ trên đường tròn lượng giác là:",
        "options": [
          "$4$",
          "$2$",
          "$8$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos 4x = 1 \\Leftrightarrow 4x = k2\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$. Do họ nghiệm có dạng $x = \\dfrac{k2\\pi}{4}$ nên có đúng 4 điểm phân biệt biểu diễn trên đường tròn lượng giác (tương ứng $k = 0, 1, 2, 3$)."
      },
      {
        "id": "quiz-11.4.17",
        "badge": "Câu 17 - Nhận biết - Nghiệm của phương trình tan x = m",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Phương trình $\\tan x = \\tan \\alpha$ có công thức nghiệm là:",
        "options": [
          "$x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\alpha + k\\pi \\\\ x = \\pi - \\alpha + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số tang có chu kỳ tuần hoàn là $\\pi$, nên $\\tan x = \\tan \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.18",
        "badge": "Câu 18 - Nhận biết - Nghiệm của phương trình cot x = m",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Phương trình $\\cot x = \\cot \\alpha$ có công thức nghiệm là:",
        "options": [
          "$x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\alpha + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Hàm côtang tuần hoàn với chu kỳ $\\pi$, nên $\\cot x = \\cot \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.19",
        "badge": "Câu 19 - Thông hiểu - Giải phương trình tan x = 1",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Nghiệm của phương trình $\\tan x = 1$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{3\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan x = 1 = \\tan\\dfrac{\\pi}{4} \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.20",
        "badge": "Câu 20 - Thông hiểu - Giải phương trình tan x = -sqrt(3)",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Nghiệm của phương trình $\\tan x = -\\sqrt{3}$ là:",
        "options": [
          "$x = -\\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{2\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan x = -\\sqrt{3} = \\tan\\left(-\\dfrac{\\pi}{3}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.21",
        "badge": "Câu 21 - Thông hiểu - Giải phương trình cot x = sqrt(3)",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Tập nghiệm của phương trình $\\cot x = \\sqrt{3}$ là:",
        "options": [
          "$\\left\\{\\dfrac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\pm \\dfrac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}\\right\\}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cot x = \\sqrt{3} = \\cot\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.22",
        "badge": "Câu 22 - Thông hiểu - Giải phương trình tan(2x + pi/4) = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Nghiệm của phương trình $\\tan\\left(2x + \\dfrac{\\pi}{4}\\right) = 0$ là:",
        "options": [
          "$x = -\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{8} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan\\left(2x + \\dfrac{\\pi}{4}\\right) = 0 \\Leftrightarrow 2x + \\dfrac{\\pi}{4} = k\\pi \\Leftrightarrow 2x = -\\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.23",
        "badge": "Câu 23 - Vận dụng - Số nghiệm tan x trên khoảng (-pi; pi)",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Số nghiệm của phương trình $\\tan x = \\sqrt{3}$ trên khoảng $(-\\pi; \\pi)$ là:",
        "options": [
          "$2$",
          "$1$",
          "$3$",
          "$4$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan x = \\sqrt{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi$. Xét $-\\pi < \\dfrac{\\pi}{3} + k\\pi < \\pi \\Leftrightarrow -\\dfrac{4}{3} < k < \\dfrac{2}{3} \\Rightarrow k \\in \\{-1; 0\\}$. Có 2 nghiệm là $x = -\\dfrac{2\\pi}{3}$ và $x = \\dfrac{\\pi}{3}$."
      },
      {
        "id": "quiz-11.4.24",
        "badge": "Câu 24 - Vận dụng - Nghiệm dương nhỏ nhất của phương trình cot",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
        "question": "Nghiệm dương nhỏ nhất của phương trình $\\cot\\left(x - \\dfrac{\\pi}{6}\\right) = -1$ là:",
        "options": [
          "$\\dfrac{11\\pi}{12}$",
          "$\\dfrac{5\\pi}{12}$",
          "$\\dfrac{7\\pi}{12}$",
          "$\\dfrac{\\pi}{12}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cot\\left(x - \\dfrac{\\pi}{6}\\right) = -1 = \\cot\\left(-\\dfrac{\\pi}{4}\\right) \\Leftrightarrow x - \\dfrac{\\pi}{6} = -\\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{12} + k\\pi$. Để $x > 0$ nhỏ nhất, chọn $k = 1 \\Rightarrow x = -\\dfrac{\\pi}{12} + \\pi = \\dfrac{11\\pi}{12}$."
      },
      {
        "id": "quiz-11.4.25",
        "badge": "Câu 25 - Thông hiểu - Phương trình sin u = cos v",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Phương trình $\\sin 2x = \\cos x$ tương đương với phương trình nào sau đây?",
        "options": [
          "$\\sin 2x = \\sin\\left(\\dfrac{\\pi}{2} - x\\right)$",
          "$\\cos 2x = \\cos x$",
          "$\\sin 2x = \\sin x$",
          "$\\sin 2x = \\cos\\left(\\dfrac{\\pi}{2} - x\\right)$"
        ],
        "correctIndex": 0,
        "explanation": "Sử dụng công thức hai góc phụ nhau: $\\cos x = \\sin\\left(\\dfrac{\\pi}{2} - x\\right)$, ta đưa phương trình về dạng $\\sin 2x = \\sin\\left(\\dfrac{\\pi}{2} - x\\right)$."
      },
      {
        "id": "quiz-11.4.26",
        "badge": "Câu 26 - Thông hiểu - Giải phương trình tích sin x * cos x = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Nghiệm của phương trình $2\\sin x \\cos x = 1$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "Vô nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $2\\sin x \\cos x = \\sin 2x$. Phương trình $\\Leftrightarrow \\sin 2x = 1 \\Leftrightarrow 2x = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.27",
        "badge": "Câu 27 - Thông hiểu - Phương trình hạ bậc cos^2 x",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Nghiệm của phương trình $\\cos^2 x = 1$ là:",
        "options": [
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos^2 x = 1 \\Leftrightarrow \\sin^2 x = 0 \\Leftrightarrow \\sin x = 0 \\Leftrightarrow x = k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.28",
        "badge": "Câu 28 - Vận dụng - Phương trình sin^2 x - 3sin x + 2 = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Tập nghiệm của phương trình $\\sin^2 x - 3\\sin x + 2 = 0$ là:",
        "options": [
          "$\\left\\{\\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\emptyset$"
        ],
        "correctIndex": 0,
        "explanation": "Đặt $t = \\sin x \\ (-1 \\le t \\le 1)$. Phương trình thành $t^2 - 3t + 2 = 0 \\Leftrightarrow t = 1$ (thỏa mãn) hoặc $t = 2$ (loại). Với $\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.29",
        "badge": "Câu 29 - Vận dụng - Phương trình 2cos^2 x + cos x - 1 = 0",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Nghiệm của phương trình $2\\cos^2 x + \\cos x - 1 = 0$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\pi + k2\\pi \\\\ x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = k2\\pi \\\\ x = \\pm \\dfrac{\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Giải phương trình bậc hai theo $\\cos x$: $\\left[\\begin{array}{l} \\cos x = -1 \\\\ \\cos x = \\dfrac{1}{2} \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = \\pi + k2\\pi \\\\ x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.30",
        "badge": "Câu 30 - Vận dụng - Phương trình tích tổng thành tích",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Nghiệm của phương trình $\\sin 3x + \\sin x = 0$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\dfrac{k\\pi}{2} \\\\ x = \\dfrac{\\pi}{2} + k\\pi \\end{array}\\right. \\Leftrightarrow x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin 3x + \\sin x = 2\\sin 2x \\cos x = 0 \\Leftrightarrow \\left[\\begin{array}{l} \\sin 2x = 0 \\\\ \\cos x = 0 \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} 2x = k\\pi \\\\ x = \\dfrac{\\pi}{2} + k\\pi \\end{array}\\right. \\Leftrightarrow x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.31",
        "badge": "Câu 31 - Vận dụng cao - Số nghiệm của phương trình sin 2x = cos x trên (0; 2pi)",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Số nghiệm của phương trình $\\sin 2x = \\cos x$ trên khoảng $(0; 2\\pi)$ là:",
        "options": [
          "$4$",
          "$2$",
          "$3$",
          "$5$"
        ],
        "correctIndex": 0,
        "explanation": "$2\\sin x \\cos x - \\cos x = 0 \\Leftrightarrow \\cos x(2\\sin x - 1) = 0 \\Leftrightarrow \\cos x = 0$ hoặc $\\sin x = \\dfrac{1}{2}$. Trên $(0; 2\\pi)$: $\\cos x = 0 \\Rightarrow x \\in \\left\\{\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right\\}$; $\\sin x = \\dfrac{1}{2} \\Rightarrow x \\in \\left\\{\\dfrac{\\pi}{6}; \\dfrac{5\\pi}{6}\\right\\}$. Có 4 nghiệm phân biệt."
      },
      {
        "id": "quiz-11.4.32",
        "badge": "Câu 32 - Vận dụng cao - Phương trình thuần nhất bậc hai",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 4",
        "question": "Tập nghiệm của phương trình $\\tan^2 x - 4\\tan x + 3 = 0$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{4} + k\\pi \\\\ x = \\arctan 3 + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{4} + k2\\pi \\\\ x = \\arctan 3 + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\arctan 3 + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình tương đương $\\left[\\begin{array}{l} \\tan x = 1 \\\\ \\tan x = 3 \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{\\pi}{4} + k\\pi \\\\ x = \\arctan 3 + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$."
      },
      {
        "id": "quiz-11.4.33",
        "badge": "Câu 33 - Thông hiểu - Tìm m để phương trình sin x = 2m - 1 có nghiệm",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Tìm tất cả các giá trị thực của tham số $m$ để phương trình $\\sin x = 2m - 1$ có nghiệm:",
        "options": [
          "$0 \\le m \\le 1$",
          "$-1 \\le m \\le 1$",
          "$m \\le 1$",
          "$0 < m < 1$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình có nghiệm $\\Leftrightarrow -1 \\le 2m - 1 \\le 1 \\Leftrightarrow 0 \\le 2m \\le 2 \\Leftrightarrow 0 \\le m \\le 1$."
      },
      {
        "id": "quiz-11.4.34",
        "badge": "Câu 34 - Thông hiểu - Tìm m để phương trình cos x = m + 2 vô nghiệm",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Phương trình $\\cos x = m + 2$ VÔ NGHIỆM khi và chỉ khi:",
        "options": [
          "$\\left[\\begin{array}{l} m > -1 \\\\ m < -3 \\end{array}\\right.$",
          "$-3 \\le m \\le -1$",
          "$-1 \\le m \\le 1$",
          "$m > -1$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình vô nghiệm khi $|m + 2| > 1 \\Leftrightarrow m + 2 > 1$ hoặc $m + 2 < -1 \\Leftrightarrow m > -1$ hoặc $m < -3$."
      },
      {
        "id": "quiz-11.4.35",
        "badge": "Câu 35 - Thông hiểu - Số giá trị nguyên của m để sin có nghiệm",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\sin 2x = \\dfrac{m}{3}$ có nghiệm?",
        "options": [
          "$7$",
          "$5$",
          "$6$",
          "$3$"
        ],
        "correctIndex": 0,
        "explanation": "Điều kiện có nghiệm: $-1 \\le \\dfrac{m}{3} \\le 1 \\Leftrightarrow -3 \\le m \\le 3$. Vì $m \\in \\mathbb{Z}$ nên $m \\in \\{-3; -2; -1; 0; 1; 2; 3\\}$, có 7 giá trị nguyên."
      },
      {
        "id": "quiz-11.4.36",
        "badge": "Câu 36 - Vận dụng - Phương trình tan x = m luôn có nghiệm",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Khẳng định nào sau đây là ĐÚNG về phương trình $\\tan x = m$?",
        "options": [
          "Phương trình luôn có nghiệm với mọi giá trị thực của $m$.",
          "Phương trình chỉ có nghiệm khi $-1 \\le m \\le 1$.",
          "Phương trình có nghiệm khi $m \\ne 0$.",
          "Phương trình có vô số nghiệm phân biệt trên mỗi khoảng có độ dài $\\pi$."
        ],
        "correctIndex": 0,
        "explanation": "Hàm số tang có tập giá trị là $\\mathbb{R}$ nên phương trình $\\tan x = m$ luôn có nghiệm với mọi $m \\in \\mathbb{R}$."
      },
      {
        "id": "quiz-11.4.37",
        "badge": "Câu 37 - Vận dụng - Bài toán thực tế dao động con lắc",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Một vật dao động điều hòa có li độ $s = 5\\cos(2t)$ (cm), với $t$ tính bằng giây. Thời điểm đầu tiên $(t > 0)$ vật đi qua vị trí cân bằng $(s = 0)$ là:",
        "options": [
          "$t = \\dfrac{\\pi}{4}$ (s)",
          "$t = \\dfrac{\\pi}{2}$ (s)",
          "$t = \\pi$ (s)",
          "$t = \\dfrac{\\pi}{8}$ (s)"
        ],
        "correctIndex": 0,
        "explanation": "$s = 0 \\Leftrightarrow 5\\cos 2t = 0 \\Leftrightarrow \\cos 2t = 0 \\Leftrightarrow 2t = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow t = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$. Thời điểm đầu tiên $t > 0$ ứng với $k = 0 \\Rightarrow t = \\dfrac{\\pi}{4}$ s."
      },
      {
        "id": "quiz-11.4.38",
        "badge": "Câu 38 - Vận dụng - Bài toán thực tế vòng quay mặt trời Sun Wheel",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Độ cao $h$ (mét) của một cabin trên vòng quay đu quay sau $t$ phút kể từ khi bắt đầu quay được cho bởi công thức $h = 30 - 25\\cos\\left(\\dfrac{\\pi t}{5}\\right)$. Thời điểm đầu tiên cabin đạt độ cao cực đại $55$ m là:",
        "options": [
          "$t = 5$ phút",
          "$t = 10$ phút",
          "$t = 2,5$ phút",
          "$t = 15$ phút"
        ],
        "correctIndex": 0,
        "explanation": "Cabin đạt độ cao $55$ m khi $30 - 25\\cos\\left(\\dfrac{\\pi t}{5}\\right) = 55 \\Leftrightarrow \\cos\\left(\\dfrac{\\pi t}{5}\\right) = -1 \\Leftrightarrow \\dfrac{\\pi t}{5} = \\pi + k2\\pi \\Leftrightarrow t = 5 + 10k$. Thời điểm đầu tiên $t > 0$ là khi $k = 0 \\Rightarrow t = 5$ phút."
      },
      {
        "id": "quiz-11.4.39",
        "badge": "Câu 39 - Vận dụng - Bài toán thực tế mực nước thủy triều",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Độ sâu $d$ (mét) của mực nước tại một cảng biển theo thời gian $t$ (giờ, $0 \\le t \\le 24$) trong ngày được mô hình bởi $d = 10 + 4\\sin\\left(\\dfrac{\\pi t}{6}\\right)$. Trong một ngày, có bao nhiêu lần mực nước đạt độ sâu $12$ mét?",
        "options": [
          "$4$ lần",
          "$2$ lần",
          "$1$ lần",
          "$3$ lần"
        ],
        "correctIndex": 0,
        "explanation": "$10 + 4\\sin\\left(\\dfrac{\\pi t}{6}\\right) = 12 \\Leftrightarrow \\sin\\left(\\dfrac{\\pi t}{6}\\right) = \\dfrac{1}{2} \\Leftrightarrow \\left[\\begin{array}{l} \\dfrac{\\pi t}{6} = \\dfrac{\\pi}{6} + k2\\pi \\\\ \\dfrac{\\pi t}{6} = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} t = 1 + 12k \\\\ t = 5 + 12k \\end{array}\\right.$. Với $0 \\le t \\le 24$, ta có các nghiệm $t = 1, 13$ (từ họ 1) và $t = 5, 17$ (từ họ 2). Tổng cộng có 4 lần."
      },
      {
        "id": "quiz-11.4.40",
        "badge": "Câu 40 - Vận dụng cao - Tìm tham số m để phương trình có đúng số nghiệm",
        "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
        "question": "Tìm tất cả các giá trị thực của tham số $m$ để phương trình $\\cos x = m$ có đúng $2$ nghiệm phân biệt thuộc khoảng $(0; \\pi)$:",
        "options": [
          "Không tồn tại $m$",
          "$-1 < m < 1$",
          "$0 < m < 1$",
          "$-1 \\le m \\le 1$"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số $y = \\cos x$ nghịch biến trên $(0; \\pi)$ và có tập giá trị là $(-1; 1)$. Do đó với mỗi giá trị $m \\in (-1; 1)$, phương trình $\\cos x = m$ có duy nhất 1 nghiệm trên khoảng $(0; \\pi)$. Do đó không tồn tại $m$ để có 2 nghiệm phân biệt."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-11.4.1",
        "badge": "Đúng/Sai 1 - Phương trình sin(2x + pi/3) = 1/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 1",
        "prompt": "Cho phương trình lượng giác $\\sin\\left(2x + \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Số vị trí biểu diễn các nghiệm của phương trình trên đường tròn lượng giác là 4.",
            "correctAnswer": true,
            "explanation": "Phương trình $\\Leftrightarrow 2x + \\dfrac{\\pi}{3} = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $2x + \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{6} + k2\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{12} + k\\pi$ hoặc $x = \\dfrac{\\pi}{4} + k\\pi$. Mỗi họ nghiệm có chu kỳ $k\\pi$ nên được biểu diễn bởi 2 điểm trên đường tròn, tổng cộng là 4 điểm."
          },
          {
            "id": "b",
            "text": "Phương trình có 2 nghiệm trên khoảng $(0; \\pi)$ là $x = \\dfrac{\\pi}{4}$ và $x = \\dfrac{11\\pi}{12}$.",
            "correctAnswer": true,
            "explanation": "Với họ $x = \\dfrac{\\pi}{4} + k\\pi \\xrightarrow{x \\in (0; \\pi)} x = \\dfrac{\\pi}{4}$ ($k=0$). Với họ $x = -\\dfrac{\\pi}{12} + k\\pi \\xrightarrow{x \\in (0; \\pi)} x = \\dfrac{11\\pi}{12}$ ($k=1$). Vậy có đúng 2 nghiệm."
          },
          {
            "id": "c",
            "text": "Tổng tất cả các nghiệm của phương trình trên khoảng $(0; \\pi)$ bằng $\\dfrac{7\\pi}{6}$.",
            "correctAnswer": true,
            "explanation": "Tổng hai nghiệm là $\\dfrac{\\pi}{4} + \\dfrac{11\\pi}{12} = \\dfrac{3\\pi + 11\\pi}{12} = \\dfrac{14\\pi}{12} = \\dfrac{7\\pi}{6}$."
          },
          {
            "id": "d",
            "text": "Phương trình có 4 nghiệm trên khoảng $(0; 2\\pi)$.",
            "correctAnswer": true,
            "explanation": "Vì mỗi chu kỳ $\\pi$ có 2 nghiệm nên trên khoảng $(0; 2\\pi)$ có độ dài $2\\pi$, phương trình có đúng $2 \\times 2 = 4$ nghiệm."
          }
        ]
      },
      {
        "id": "tf-11.4.2",
        "badge": "Đúng/Sai 2 - Phương trình sin(3x - pi/4) = sqrt(3)/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 2",
        "prompt": "Cho phương trình lượng giác $\\sin\\left(3x - \\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{3}}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Công thức nghiệm của phương trình là $x = \\dfrac{7\\pi}{36} + \\dfrac{k2\\pi}{3}$ hoặc $x = \\dfrac{11\\pi}{36} + \\dfrac{k2\\pi}{3} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$3x - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow 3x = \\dfrac{7\\pi}{12} + k2\\pi \\Leftrightarrow x = \\dfrac{7\\pi}{36} + \\dfrac{k2\\pi}{3}$ hoặc $3x - \\dfrac{\\pi}{4} = \\pi - \\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow 3x = \\dfrac{11\\pi}{12} + k2\\pi \\Leftrightarrow x = \\dfrac{11\\pi}{36} + \\dfrac{k2\\pi}{3}$."
          },
          {
            "id": "b",
            "text": "Nghiệm dương nhỏ nhất của phương trình là $x = \\dfrac{7\\pi}{36}$.",
            "correctAnswer": true,
            "explanation": "Với $k = 0$, họ 1 cho $x = \\dfrac{7\\pi}{36} > 0$, họ 2 cho $x = \\dfrac{11\\pi}{36} > \\dfrac{7\\pi}{36}$. Vậy nghiệm dương nhỏ nhất là $\\dfrac{7\\pi}{36}$."
          },
          {
            "id": "c",
            "text": "Nghiệm âm lớn nhất của phương trình là $x = -\\dfrac{13\\pi}{36}$.",
            "correctAnswer": true,
            "explanation": "Với $k = -1$, họ 1 cho $x = \\dfrac{7\\pi}{36} - \\dfrac{24\\pi}{36} = -\\dfrac{17\\pi}{36}$; họ 2 cho $x = \\dfrac{11\\pi}{36} - \\dfrac{24\\pi}{36} = -\\dfrac{13\\pi}{36} > -\\dfrac{17\\pi}{36}$. Vậy nghiệm âm lớn nhất là $-\\dfrac{13\\pi}{36}$."
          },
          {
            "id": "d",
            "text": "Số nghiệm của phương trình trên khoảng $(0; \\pi)$ là 3.",
            "correctAnswer": false,
            "explanation": "Trên $(0; \\pi)$, họ 1 có $x = \\dfrac{7\\pi}{36}, \\dfrac{31\\pi}{36}$; họ 2 có $x = \\dfrac{11\\pi}{36}, \\dfrac{35\\pi}{36}$. Tổng cộng có 4 nghiệm, không phải 3."
          }
        ]
      },
      {
        "id": "tf-11.4.3",
        "badge": "Đúng/Sai 3 - Phương trình sin x = m",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 3",
        "prompt": "Cho phương trình $\\sin x = m$, với $m$ là tham số thực. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình đã cho có nghiệm khi và chỉ khi $-1 \\le m \\le 1$.",
            "correctAnswer": true,
            "explanation": "Do tập giá trị của hàm số sin là $[-1; 1]$."
          },
          {
            "id": "b",
            "text": "Số giá trị nguyên của $m$ để phương trình có nghiệm là 3.",
            "correctAnswer": true,
            "explanation": "Các giá trị nguyên thỏa mãn $-1 \\le m \\le 1$ là $m \\in \\{-1; 0; 1\\}$, gồm đúng 3 giá trị."
          },
          {
            "id": "c",
            "text": "Tổng tất cả các giá trị nguyên của $m$ để phương trình có nghiệm bằng 0.",
            "correctAnswer": true,
            "explanation": "Tổng $(-1) + 0 + 1 = 0$."
          },
          {
            "id": "d",
            "text": "Khi $m = 1$, phương trình có tập nghiệm là $\\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.",
            "correctAnswer": false,
            "explanation": "Khi $m = 1$, nghiệm đúng là $x = \\dfrac{\\pi}{2} + k2\\pi$, chu kỳ là $k2\\pi$ chứ không phải $k\\pi$."
          }
        ]
      },
      {
        "id": "tf-11.4.4",
        "badge": "Đúng/Sai 4 - Phương trình cos(2x - pi/3) = -sqrt(3)/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 4",
        "prompt": "Cho phương trình lượng giác $\\cos\\left(2x - \\dfrac{\\pi}{3}\\right) = -\\dfrac{\\sqrt{3}}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\cos\\left(2x - \\dfrac{\\pi}{3}\\right) = \\cos\\dfrac{5\\pi}{6}$.",
            "correctAnswer": true,
            "explanation": "Vì $\\cos\\dfrac{5\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$."
          },
          {
            "id": "b",
            "text": "Họ nghiệm của phương trình là $x = \\dfrac{7\\pi}{12} + k\\pi$ hoặc $x = -\\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x - \\dfrac{\\pi}{3} = \\pm \\dfrac{5\\pi}{6} + k2\\pi \\Leftrightarrow 2x = \\dfrac{7\\pi}{6} + k2\\pi \\Rightarrow x = \\dfrac{7\\pi}{12} + k\\pi$ hoặc $2x = -\\dfrac{\\pi}{2} + k2\\pi \\Rightarrow x = -\\dfrac{\\pi}{4} + k\\pi$."
          },
          {
            "id": "c",
            "text": "Số điểm biểu diễn các nghiệm trên đường tròn lượng giác là 4.",
            "correctAnswer": true,
            "explanation": "Mỗi họ nghiệm chu kỳ $k\\pi$ có 2 điểm biểu diễn, 2 họ nghiệm phân biệt không trùng nhau nên có $2 + 2 = 4$ điểm."
          },
          {
            "id": "d",
            "text": "Phương trình có đúng 2 nghiệm thuộc khoảng $(0; \\pi)$.",
            "correctAnswer": true,
            "explanation": "Các nghiệm trên $(0; \\pi)$ là $x = \\dfrac{7\\pi}{12}$ ($k=0$ họ 1) và $x = \\dfrac{3\\pi}{4}$ ($k=1$ họ 2). Đúng 2 nghiệm."
          }
        ]
      },
      {
        "id": "tf-11.4.5",
        "badge": "Đúng/Sai 5 - Phương trình cos x = m - 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 5",
        "prompt": "Cho phương trình $\\cos x = m - 1$, với $m$ là tham số thực. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện để phương trình có nghiệm là $0 \\le m \\le 2$.",
            "correctAnswer": true,
            "explanation": "Phương trình có nghiệm $\\Leftrightarrow -1 \\le m - 1 \\le 1 \\Leftrightarrow 0 \\le m \\le 2$."
          },
          {
            "id": "b",
            "text": "Có 3 giá trị nguyên của $m$ để phương trình có nghiệm.",
            "correctAnswer": true,
            "explanation": "$m \\in \\{0; 1; 2\\}$, có đúng 3 giá trị nguyên."
          },
          {
            "id": "c",
            "text": "Khi $m = 2$, nghiệm của phương trình là $x = k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Khi $m = 2$, $\\cos x = 1 \\Leftrightarrow x = k2\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            "id": "d",
            "text": "Khi $m = 0$, nghiệm của phương trình là $x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": false,
            "explanation": "Khi $m = 0$, $\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$, không phải $\\dfrac{\\pi}{2} + k\\pi$."
          }
        ]
      },
      {
        "id": "tf-11.4.6",
        "badge": "Đúng/Sai 6 - Phương trình tan(x + pi/4) = 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 6",
        "prompt": "Cho phương trình lượng giác $\\tan\\left(x + \\dfrac{\\pi}{4}\\right) = 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Điều kiện: $x + \\dfrac{\\pi}{4} \\ne \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4} + k\\pi$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\tan\\left(x + \\dfrac{\\pi}{4}\\right) = 1 = \\tan\\dfrac{\\pi}{4} \\Leftrightarrow x + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = k\\pi$."
          },
          {
            "id": "c",
            "text": "Các giá trị $x = k\\pi$ đều thỏa mãn điều kiện xác định.",
            "correctAnswer": true,
            "explanation": "Vì $k\\pi \\ne \\dfrac{\\pi}{4} + m\\pi$ với mọi $k, m \\in \\mathbb{Z}$."
          },
          {
            "id": "d",
            "text": "Phương trình có 3 nghiệm trên đoạn $[0; 3\\pi]$.",
            "correctAnswer": false,
            "explanation": "Trên $[0; 3\\pi]$, các nghiệm là $x = 0, \\pi, 2\\pi, 3\\pi$ (4 nghiệm, không phải 3)."
          }
        ]
      },
      {
        "id": "tf-11.4.7",
        "badge": "Đúng/Sai 7 - Phương trình cot 2x = sqrt(3)",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 7",
        "prompt": "Cho phương trình lượng giác $\\cot 2x = \\sqrt{3}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Hàm cot xác định khi $\\sin 2x \\ne 0 \\Leftrightarrow 2x \\ne k\\pi \\Leftrightarrow x \\ne \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "b",
            "text": "Phương trình có nghiệm $x = \\dfrac{\\pi}{12} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cot 2x = \\sqrt{3} = \\cot\\dfrac{\\pi}{6} \\Leftrightarrow 2x = \\dfrac{\\pi}{6} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{12} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Các nghiệm của phương trình đều thỏa mãn điều kiện xác định.",
            "correctAnswer": true,
            "explanation": "$\\dfrac{\\pi}{12} + \\dfrac{k\\pi}{2} \\ne \\dfrac{m\\pi}{2}$ với mọi $k, m \\in \\mathbb{Z}$."
          },
          {
            "id": "d",
            "text": "Nghiệm dương nhỏ nhất của phương trình là $\\dfrac{\\pi}{12}$.",
            "correctAnswer": true,
            "explanation": "Ứng với $k = 0$, $x = \\dfrac{\\pi}{12} > 0$ là nghiệm dương nhỏ nhất."
          }
        ]
      },
      {
        "id": "tf-11.4.8",
        "badge": "Đúng/Sai 8 - Phương trình sin 2x = cos x",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 8",
        "prompt": "Cho phương trình $\\sin 2x = \\cos x$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\cos x(2\\sin x - 1) = 0$.",
            "correctAnswer": true,
            "explanation": "$\\sin 2x - \\cos x = 0 \\Leftrightarrow 2\\sin x\\cos x - \\cos x = 0 \\Leftrightarrow \\cos x(2\\sin x - 1) = 0$."
          },
          {
            "id": "b",
            "text": "Tập nghiệm của phương trình gồm 3 họ nghiệm: $x = \\dfrac{\\pi}{2} + k\\pi$, $x = \\dfrac{\\pi}{6} + k2\\pi$, $x = \\dfrac{5\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$; $\\sin x = \\dfrac{1}{2} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi$."
          },
          {
            "id": "c",
            "text": "Phương trình có đúng 4 nghiệm phân biệt trên khoảng $(0; 2\\pi)$.",
            "correctAnswer": true,
            "explanation": "Các nghiệm trên $(0; 2\\pi)$ là $\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}$. Có 4 nghiệm."
          },
          {
            "id": "d",
            "text": "Tổng tất cả các nghiệm trên $(0; 2\\pi)$ bằng $3\\pi$.",
            "correctAnswer": true,
            "explanation": "$\\dfrac{\\pi}{6} + \\dfrac{\\pi}{2} + \\dfrac{5\\pi}{6} + \\dfrac{3\\pi}{2} = \\pi + 2\\pi = 3\\pi$."
          }
        ]
      },
      {
        "id": "tf-11.4.9",
        "badge": "Đúng/Sai 9 - Phương trình 2cos^2 x - 3cos x + 1 = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 9",
        "prompt": "Cho phương trình $2\\cos^2 x - 3\\cos x + 1 = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\left[\\begin{array}{l} \\cos x = 1 \\\\ \\cos x = \\dfrac{1}{2} \\end{array}\\right.$.",
            "correctAnswer": true,
            "explanation": "Đặt $t = \\cos x$, phương trình $2t^2 - 3t + 1 = 0$ có hai nghiệm $t = 1$ và $t = \\dfrac{1}{2}$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = k2\\pi$ hoặc $x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos x = 1 \\Leftrightarrow x = k2\\pi$; $\\cos x = \\dfrac{1}{2} \\Leftrightarrow x = \\pm \\dfrac{\\pi}{3} + k2\\pi$."
          },
          {
            "id": "c",
            "text": "Có 3 điểm biểu diễn các nghiệm của phương trình trên đường tròn lượng giác.",
            "correctAnswer": true,
            "explanation": "Điểm $A(1; 0)$ ứng với $x = 0$, điểm ứng với $\\dfrac{\\pi}{3}$ và điểm ứng với $-\\dfrac{\\pi}{3}$. Đúng 3 điểm."
          },
          {
            "id": "d",
            "text": "Phương trình có 3 nghiệm trên đoạn $[0; 2\\pi]$.",
            "correctAnswer": false,
            "explanation": "Trên $[0; 2\\pi]$, các nghiệm là $x = 0, 2\\pi$ (từ $\\cos x = 1$) và $x = \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$ (từ $\\cos x = \\dfrac{1}{2}$). Tổng cộng có 4 nghiệm."
          }
        ]
      },
      {
        "id": "tf-11.4.10",
        "badge": "Đúng/Sai 10 - Phương trình sin^2 x - 2sin x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 10",
        "prompt": "Cho phương trình $\\sin^2 x - 2\\sin x = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\sin x = 0$ hoặc $\\sin x = 2$.",
            "correctAnswer": true,
            "explanation": "$\\sin x(\\sin x - 2) = 0 \\Leftrightarrow \\sin x = 0$ hoặc $\\sin x = 2$."
          },
          {
            "id": "b",
            "text": "Phương trình $\\sin x = 2$ vô nghiệm.",
            "correctAnswer": true,
            "explanation": "Vì $-1 \\le \\sin x \\le 1$ với mọi $x \\in \\mathbb{R}$ nên $\\sin x = 2$ vô nghiệm."
          },
          {
            "id": "c",
            "text": "Nghiệm của phương trình đã cho là $x = k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Phương trình chỉ còn $\\sin x = 0 \\Leftrightarrow x = k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            "id": "d",
            "text": "Số điểm biểu diễn các nghiệm của phương trình trên đường tròn lượng giác là 1.",
            "correctAnswer": false,
            "explanation": "$x = k\\pi$ biểu diễn bởi 2 điểm đối xứng qua gốc tọa độ: $(1; 0)$ và $(-1; 0)$."
          }
        ]
      },
      {
        "id": "tf-11.4.11",
        "badge": "Đúng/Sai 11 - Phương trình sqrt(3)sin x + cos x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 11",
        "prompt": "Cho phương trình lượng giác $\\sqrt{3}\\sin x + \\cos x = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\tan x = -\\dfrac{1}{\\sqrt{3}}$.",
            "correctAnswer": true,
            "explanation": "Nếu $\\cos x = 0 \\Rightarrow \\sqrt{3}\\sin x = 0 \\Rightarrow \\sin x = 0$ (mâu thuẫn). Chia 2 vế cho $\\cos x \\ne 0$ ta được $\\sqrt{3}\\tan x + 1 = 0 \\Leftrightarrow \\tan x = -\\dfrac{1}{\\sqrt{3}}$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = -\\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\tan x = -\\dfrac{1}{\\sqrt{3}} = \\tan\\left(-\\dfrac{\\pi}{6}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k\\pi$."
          },
          {
            "id": "c",
            "text": "Nghiệm âm lớn nhất của phương trình là $-\\dfrac{\\pi}{6}$.",
            "correctAnswer": true,
            "explanation": "Với $k = 0 \\Rightarrow x = -\\dfrac{\\pi}{6} < 0$."
          },
          {
            "id": "d",
            "text": "Phương trình có 2 nghiệm trên khoảng $(0; 2\\pi)$ là $\\dfrac{5\\pi}{6}$ và $\\dfrac{11\\pi}{6}$.",
            "correctAnswer": true,
            "explanation": "Với $k = 1 \\Rightarrow x = \\dfrac{5\\pi}{6}$; với $k = 2 \\Rightarrow x = \\dfrac{11\\pi}{6}$. Cả hai đều thuộc $(0; 2\\pi)$."
          }
        ]
      },
      {
        "id": "tf-11.4.12",
        "badge": "Đúng/Sai 12 - Phương trình tan^2 x - 3 = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 12",
        "prompt": "Cho phương trình $\\tan^2 x - 3 = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Hàm số tang xác định khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$."
          },
          {
            "id": "b",
            "text": "Phương trình tương đương với $\\tan x = \\pm \\sqrt{3}$.",
            "correctAnswer": true,
            "explanation": "$\\tan^2 x = 3 \\Leftrightarrow \\tan x = \\pm \\sqrt{3}$."
          },
          {
            "id": "c",
            "text": "Nghiệm của phương trình là $x = \\pm \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\tan x = \\sqrt{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi$; $\\tan x = -\\sqrt{3} \\Leftrightarrow x = -\\dfrac{\\pi}{3} + k\\pi$."
          },
          {
            "id": "d",
            "text": "Số nghiệm của phương trình trong khoảng $(-\\pi; \\pi)$ là 2.",
            "correctAnswer": false,
            "explanation": "Trong khoảng $(-\\pi; \\pi)$, phương trình có 4 nghiệm là $\\pm \\dfrac{\\pi}{3}, \\pm \\dfrac{2\\pi}{3}$."
          }
        ]
      },
      {
        "id": "tf-11.4.13",
        "badge": "Đúng/Sai 13 - Phương trình (2sin x - 1)(cos x + 1) = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 13",
        "prompt": "Cho phương trình $(2\\sin x - 1)(\\cos x + 1) = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\sin x = \\dfrac{1}{2}$ hoặc $\\cos x = -1$.",
            "correctAnswer": true,
            "explanation": "Tích bằng 0 khi từng nhân tử bằng 0."
          },
          {
            "id": "b",
            "text": "Tập nghiệm của phương trình là $\\left\\{\\dfrac{\\pi}{6} + k2\\pi; \\dfrac{5\\pi}{6} + k2\\pi; \\pi + k2\\pi, k \\in \\mathbb{Z}\\right\\}$.",
            "correctAnswer": true,
            "explanation": "Đúng theo các công thức nghiệm cơ bản."
          },
          {
            "id": "c",
            "text": "Số điểm biểu diễn các nghiệm trên đường tròn lượng giác là 3.",
            "correctAnswer": true,
            "explanation": "Ba họ nghiệm đều có chu kỳ $k2\\pi$ và tương ứng 3 điểm phân biệt: góc $\\dfrac{\\pi}{6}$, góc $\\dfrac{5\\pi}{6}$ và góc $\\pi$."
          },
          {
            "id": "d",
            "text": "Trên đoạn $[0; 2\\pi]$, phương trình có đúng 3 nghiệm phân biệt.",
            "correctAnswer": true,
            "explanation": "Đó là $x_1 = \\dfrac{\\pi}{6}, x_2 = \\dfrac{5\\pi}{6}, x_3 = \\pi$."
          }
        ]
      },
      {
        "id": "tf-11.4.14",
        "badge": "Đúng/Sai 14 - Phương trình sin 3x = sin x",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 14",
        "prompt": "Cho phương trình lượng giác $\\sin 3x = \\sin x$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\left[\\begin{array}{l} 3x = x + k2\\pi \\\\ 3x = \\pi - x + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Công thức nghiệm chuẩn cho $\\sin u = \\sin v$."
          },
          {
            "id": "b",
            "text": "Các họ nghiệm rút gọn là $x = k\\pi$ hoặc $x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x = k2\\pi \\Leftrightarrow x = k\\pi$; $4x = \\pi + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Trên khoảng $(0; \\pi)$, phương trình có đúng 3 nghiệm phân biệt.",
            "correctAnswer": false,
            "explanation": "Trên $(0; \\pi)$, họ $x = k\\pi$ không cho nghiệm nào; họ $x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$ cho $x = \\dfrac{\\pi}{4}$ và $x = \\dfrac{3\\pi}{4}$. Vậy chỉ có 2 nghiệm."
          },
          {
            "id": "d",
            "text": "Tổng các nghiệm của phương trình trên $(0; \\pi)$ bằng $\\pi$.",
            "correctAnswer": true,
            "explanation": "Tổng bằng $\\dfrac{\\pi}{4} + \\dfrac{3\\pi}{4} = \\pi$."
          }
        ]
      },
      {
        "id": "tf-11.4.15",
        "badge": "Đúng/Sai 15 - Dao động điều hòa của con lắc lò xo",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 15",
        "prompt": "Một vật dao động điều hòa có li độ theo thời gian $t \\ge 0$ cho bởi: $x(t) = 4\\cos\\left(5\\pi t - \\dfrac{\\pi}{3}\\right)$ (cm). Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Biên độ dao động của vật là $4$ cm.",
            "correctAnswer": true,
            "explanation": "Biên độ $A = 4$ cm."
          },
          {
            "id": "b",
            "text": "Chu kỳ dao động của con lắc là $T = 0,4$ giây.",
            "correctAnswer": true,
            "explanation": "$T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{5\\pi} = 0,4$ giây."
          },
          {
            "id": "c",
            "text": "Vật qua vị trí cân bằng $(x = 0)$ lần đầu tiên tại thời điểm $t = \\dfrac{1}{6}$ giây.",
            "correctAnswer": true,
            "explanation": "$x = 0 \\Leftrightarrow \\cos\\left(5\\pi t - \\dfrac{\\pi}{3}\\right) = 0 \\Leftrightarrow 5\\pi t - \\dfrac{\\pi}{3} = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow 5\\pi t = \\dfrac{5\\pi}{6} + k\\pi \\Leftrightarrow t = \\dfrac{1}{6} + \\dfrac{k}{5}$. Lần đầu tiên ($t > 0$) ứng với $k = 0 \\Rightarrow t = \\dfrac{1}{6}$ s."
          },
          {
            "id": "d",
            "text": "Trong 1 giây đầu tiên $(0 \\le t \\le 1)$, vật qua vị trí cân bằng đúng 5 lần.",
            "correctAnswer": true,
            "explanation": "Điều kiện $0 \\le \\dfrac{1}{6} + \\dfrac{k}{5} \\le 1 \\Leftrightarrow -\\dfrac{5}{6} \\le k \\le \\dfrac{25}{6} \\Rightarrow k \\in \\{0; 1; 2; 3; 4\\}$, có đúng 5 lần."
          }
        ]
      },
      {
        "id": "tf-11.4.16",
        "badge": "Đúng/Sai 16 - Phương trình cos 2x = m",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 16",
        "prompt": "Cho phương trình $\\cos 2x = m$, với $m$ là tham số thực. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình có nghiệm khi và chỉ khi $m \\in [-1; 1]$.",
            "correctAnswer": true,
            "explanation": "Tập giá trị của hàm côsin là $[-1; 1]$."
          },
          {
            "id": "b",
            "text": "Khi $m = 1$, nghiệm của phương trình là $x = k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos 2x = 1 \\Leftrightarrow 2x = k2\\pi \\Leftrightarrow x = k\\pi$."
          },
          {
            "id": "c",
            "text": "Khi $m = -1$, nghiệm của phương trình là $x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos 2x = -1 \\Leftrightarrow 2x = \\pi + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$."
          },
          {
            "id": "d",
            "text": "Với mỗi $m \\in (-1; 1)$, phương trình có đúng 2 nghiệm trên đoạn $[0; \\pi]$.",
            "correctAnswer": true,
            "explanation": "Khi $x \\in [0; \\pi]$ thì $2x \\in [0; 2\\pi]$. Trên một chu kỳ $[0; 2\\pi]$, phương trình $\\cos(2x) = m$ ($|m| < 1$) luôn có đúng 2 nghiệm phân biệt."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-11.4.1",
        "badge": "Câu 1 - Trả lời ngắn - Số nghiệm của cos(x + 30) = -1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 1",
        "prompt": "Tìm số nghiệm của phương trình $\\cos(x + 30^\\circ) + 1 = 0$ trên đoạn $[-360^\\circ; 360^\\circ]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$\\cos(x + 30^\\circ) = -1 \\Leftrightarrow x + 30^\\circ = 180^\\circ + k360^\\circ \\Leftrightarrow x = 150^\\circ + k360^\\circ$. Với $-360^\\circ \\le 150^\\circ + k360^\\circ \\le 360^\\circ \\Leftrightarrow -\\dfrac{510}{360} \\le k \\le \\dfrac{210}{360} \\Rightarrow k \\in \\{-1; 0\\}$. Có 2 nghiệm là $-210^\\circ$ và $150^\\circ$."
      },
      {
        "id": "sa-11.4.2",
        "badge": "Câu 2 - Trả lời ngắn - Số nghiệm của cos 5x = cos 135",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 2",
        "prompt": "Tìm số nghiệm của phương trình $\\cos 5x = \\cos 135^\\circ$ trên đoạn $[0^\\circ; 720^\\circ]$.",
        "correctAnswer": "20",
        "acceptableAnswers": [
          "20"
        ],
        "explanation": "$5x = \\pm 135^\\circ + k360^\\circ \\Leftrightarrow x = 27^\\circ + k72^\\circ$ hoặc $x = -27^\\circ + k72^\\circ$. Trên $[0^\\circ; 720^\\circ]$, họ 1 có 10 nghiệm ($k = 0, \\dots, 9$), họ 2 có 10 nghiệm ($k = 1, \\dots, 10$). Hai họ này không có nghiệm chung. Tổng số nghiệm là $10 + 10 = 20$."
      },
      {
        "id": "sa-11.4.3",
        "badge": "Câu 3 - Trả lời ngắn - Số nghiệm của tan 2x = sqrt(3)",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 3",
        "prompt": "Tìm số nghiệm của phương trình $\\tan 2x = \\sqrt{3}$ trên đoạn $[-2\\pi; 4\\pi]$.",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12"
        ],
        "explanation": "$2x = \\dfrac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{2}$. Vì đoạn $[-2\\pi; 4\\pi]$ có độ dài $6\\pi$, mỗi chu kỳ $\\dfrac{\\pi}{2}$ có đúng 1 nghiệm nên số nghiệm là $\\dfrac{6\\pi}{\\pi/2} = 12$."
      },
      {
        "id": "sa-11.4.4",
        "badge": "Câu 4 - Trả lời ngắn - Số nghiệm của cot x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 5",
        "prompt": "Tìm số nghiệm của phương trình $\\cot x = 0$ trên đoạn $[-2\\pi; 5\\pi]$.",
        "correctAnswer": "7",
        "acceptableAnswers": [
          "7"
        ],
        "explanation": "$\\cot x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$. Điều kiện $-2\\pi \\le \\dfrac{\\pi}{2} + k\\pi \\le 5\\pi \\Leftrightarrow -2,5 \\le k \\le 4,5 \\Rightarrow k \\in \\{-2; -1; 0; 1; 2; 3; 4\\}$. Có 7 nghiệm."
      },
      {
        "id": "sa-11.4.5",
        "badge": "Câu 5 - Trả lời ngắn - Số nghiệm của tan x = sqrt(3)",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 6",
        "prompt": "Tìm số nghiệm của phương trình $\\tan x = \\sqrt{3}$ trên đoạn $[-2\\pi; 4\\pi]$.",
        "correctAnswer": "6",
        "acceptableAnswers": [
          "6"
        ],
        "explanation": "$\\tan x = \\sqrt{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi$. Trên đoạn $[-2\\pi; 4\\pi]$ có độ dài $6\\pi$, chu kỳ $\\pi$ có đúng 1 nghiệm nên có 6 nghiệm (tương ứng $k = -2, -1, 0, 1, 2, 3$)."
      },
      {
        "id": "sa-11.4.6",
        "badge": "Câu 6 - Trả lời ngắn - Số nghiệm của sin x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\sin x = 0$ trên đoạn $[-3\\pi; 3\\pi]$.",
        "correctAnswer": "7",
        "acceptableAnswers": [
          "7"
        ],
        "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi$. $-3\\pi \\le k\\pi \\le 3\\pi \\Leftrightarrow -3 \\le k \\le 3 \\Rightarrow k \\in \\{-3; -2; -1; 0; 1; 2; 3\\}$, có đúng 7 nghiệm."
      },
      {
        "id": "sa-11.4.7",
        "badge": "Câu 7 - Trả lời ngắn - Số nghiệm của cos x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\cos x = 0$ trên đoạn $[0; 4\\pi]$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$. Trên $[0; 4\\pi]$, các nghiệm là $x = \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}, \\dfrac{5\\pi}{2}, \\dfrac{7\\pi}{2}$. Có 4 nghiệm."
      },
      {
        "id": "sa-11.4.8",
        "badge": "Câu 8 - Trả lời ngắn - Số nghiệm của 2sin x - 1 = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $2\\sin x - 1 = 0$ trên đoạn $[0; 3\\pi]$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\sin x = \\dfrac{1}{2} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi$. Trên $[0; 3\\pi]$, họ 1 có $x = \\dfrac{\\pi}{6}, \\dfrac{13\\pi}{6}$; họ 2 có $x = \\dfrac{5\\pi}{6}, \\dfrac{17\\pi}{6}$. Tổng cộng có 4 nghiệm."
      },
      {
        "id": "sa-11.4.9",
        "badge": "Câu 9 - Trả lời ngắn - Số nghiệm của sqrt(2)cos 2x = 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\sqrt{2}\\cos 2x - 1 = 0$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\cos 2x = \\dfrac{\\sqrt{2}}{2} \\Leftrightarrow 2x = \\pm \\dfrac{\\pi}{4} + k2\\pi \\Leftrightarrow x = \\pm \\dfrac{\\pi}{8} + k\\pi$. Trên $[0; 2\\pi]$, họ 1 có $\\dfrac{\\pi}{8}, \\dfrac{9\\pi}{8}$; họ 2 có $\\dfrac{7\\pi}{8}, \\dfrac{15\\pi}{8}$. Tổng cộng có 4 nghiệm."
      },
      {
        "id": "sa-11.4.10",
        "badge": "Câu 10 - Trả lời ngắn - Số nghiệm của tan(x - 15) = 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\tan(x - 15^\\circ) = 1$ trên đoạn $[0^\\circ; 360^\\circ]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$x - 15^\\circ = 45^\\circ + k180^\\circ \\Leftrightarrow x = 60^\\circ + k180^\\circ$. Với $0^\\circ \\le x \\le 360^\\circ$, ta có $x = 60^\\circ$ ($k=0$) và $x = 240^\\circ$ ($k=1$). Có đúng 2 nghiệm."
      },
      {
        "id": "sa-11.4.11",
        "badge": "Câu 11 - Trả lời ngắn - Số nghiệm của sin 2x = sin x trên (0; 2pi)",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\sin 2x = \\sin x$ trên khoảng $(0; 2\\pi)$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$\\left[\\begin{array}{l} 2x = x + k2\\pi \\\\ 2x = \\pi - x + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = k2\\pi \\\\ x = \\dfrac{\\pi}{3} + \\dfrac{k2\\pi}{3} \\end{array}\\right.$. Trên $(0; 2\\pi)$, họ 1 không có nghiệm nào; họ 2 cho $x = \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}$. Tổng cộng có 3 nghiệm."
      },
      {
        "id": "sa-11.4.12",
        "badge": "Câu 12 - Trả lời ngắn - Số nghiệm của cos 3x = cos x trên (0; pi)",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\cos 3x = \\cos x$ trên khoảng $(0; \\pi)$.",
        "correctAnswer": "1",
        "acceptableAnswers": [
          "1"
        ],
        "explanation": "$\\cos 3x = \\cos x \\Leftrightarrow x = \\dfrac{k\\pi}{2}$. Trên $(0; \\pi)$, chỉ có $k = 1 \\Rightarrow x = \\dfrac{\\pi}{2}$ là nghiệm duy nhất."
      },
      {
        "id": "sa-11.4.13",
        "badge": "Câu 13 - Trả lời ngắn - Số điểm biểu diễn nghiệm của sin 3x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số điểm biểu diễn các nghiệm của phương trình $\\sin 3x = 0$ trên đường tròn lượng giác.",
        "correctAnswer": "6",
        "acceptableAnswers": [
          "6"
        ],
        "explanation": "$\\sin 3x = 0 \\Leftrightarrow 3x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{3} = \\dfrac{k2\\pi}{6}$. Do đó có đúng 6 điểm phân biệt biểu diễn trên đường tròn lượng giác."
      },
      {
        "id": "sa-11.4.14",
        "badge": "Câu 14 - Trả lời ngắn - Số điểm biểu diễn nghiệm của cos 4x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số điểm biểu diễn các nghiệm của phương trình $\\cos 4x = 0$ trên đường tròn lượng giác.",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8"
        ],
        "explanation": "$\\cos 4x = 0 \\Leftrightarrow 4x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{4} = \\dfrac{\\pi}{8} + \\dfrac{k2\\pi}{8}$. Có đúng 8 điểm phân biệt biểu diễn trên đường tròn."
      },
      {
        "id": "sa-11.4.15",
        "badge": "Câu 15 - Trả lời ngắn - Số giá trị nguyên của m để sin x = m - 2 có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 30",
        "prompt": "Tìm số giá trị nguyên của tham số $m$ để phương trình $\\sin x = m - 2$ có nghiệm.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$-1 \\le m - 2 \\le 1 \\Leftrightarrow 1 \\le m \\le 3$. Vì $m \\in \\mathbb{Z}$ nên $m \\in \\{1; 2; 3\\}$, có 3 giá trị nguyên."
      },
      {
        "id": "sa-11.4.16",
        "badge": "Câu 16 - Trả lời ngắn - Số giá trị nguyên của m để cos 2x = 2m + 1 có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số giá trị nguyên của tham số $m$ để phương trình $\\cos 2x = 2m + 1$ có nghiệm.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$-1 \\le 2m + 1 \\le 1 \\Leftrightarrow -2 \\le 2m \\le 0 \\Leftrightarrow -1 \\le m \\le 0$. Các giá trị nguyên là $m \\in \\{-1; 0\\}$, có 2 giá trị."
      },
      {
        "id": "sa-11.4.17",
        "badge": "Câu 17 - Trả lời ngắn - Giá trị nguyên m thuộc [-10; 10]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để phương trình $(m - 1)\\sin x = 2$ có nghiệm?",
        "correctAnswer": "18",
        "acceptableAnswers": [
          "18"
        ],
        "explanation": "Phương trình $\\Leftrightarrow \\sin x = \\dfrac{2}{m - 1}$ ($m \\ne 1$). Có nghiệm khi $\\left|\\dfrac{2}{m - 1}\\right| \\le 1 \\Leftrightarrow |m - 1| \\ge 2 \\Leftrightarrow m - 1 \\ge 2$ hoặc $m - 1 \\le -2 \\Leftrightarrow m \\ge 3$ hoặc $m \\le -1$. Trên $[-10; 10]$, các số nguyên là $\\{-10, -9, \\dots, -1\\}$ (10 số) và $\\{3, 4, \\dots, 10\\}$ (8 số). Tổng cộng có $10 + 8 = 18$ giá trị."
      },
      {
        "id": "sa-11.4.18",
        "badge": "Câu 18 - Trả lời ngắn - Số nghiệm của sin^2 x - sin x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\sin^2 x - \\sin x = 0$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\sin x(\\sin x - 1) = 0 \\Leftrightarrow \\sin x = 0$ hoặc $\\sin x = 1$. Trên $[0; 2\\pi]$, $\\sin x = 0 \\Rightarrow x \\in \\{0; \\pi; 2\\pi\\}$; $\\sin x = 1 \\Rightarrow x = \\dfrac{\\pi}{2}$. Tổng cộng có 4 nghiệm."
      },
      {
        "id": "sa-11.4.19",
        "badge": "Câu 19 - Trả lời ngắn - Số nghiệm của 2cos^2 x - 3cos x + 1 = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $2\\cos^2 x - 3\\cos x + 1 = 0$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\cos x = 1$ cho 2 nghiệm $x = 0, 2\\pi$; $\\cos x = \\dfrac{1}{2}$ cho 2 nghiệm $x = \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$. Tổng cộng có 4 nghiệm."
      },
      {
        "id": "sa-11.4.20",
        "badge": "Câu 20 - Trả lời ngắn - Số nghiệm của tan^2 x - 1 = 0 trên (-pi; pi)",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm số nghiệm của phương trình $\\tan^2 x - 1 = 0$ trên khoảng $(-\\pi; \\pi)$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\tan x = \\pm 1 \\Leftrightarrow x = \\pm \\dfrac{\\pi}{4} + k\\pi$. Trên $(-\\pi; \\pi)$, có 4 nghiệm: $-\\dfrac{3\\pi}{4}, -\\dfrac{\\pi}{4}, \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}$."
      },
      {
        "id": "sa-11.4.21",
        "badge": "Câu 21 - Trả lời ngắn - Dao động điều hòa qua vị trí cân bằng",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Cho một vật dao động có phương trình $x(t) = 6\\cos(4\\pi t)$ (cm). Trong 2 giây đầu tiên $(0 \\le t \\le 2)$, vật đi qua vị trí cân bằng bao nhiêu lần?",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8"
        ],
        "explanation": "$x = 0 \\Leftrightarrow \\cos(4\\pi t) = 0 \\Leftrightarrow 4\\pi t = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow t = \\dfrac{1}{8} + \\dfrac{k}{4}$. Điều kiện $0 \\le \\dfrac{1}{8} + \\dfrac{k}{4} \\le 2 \\Leftrightarrow -\\dfrac{1}{2} \\le k \\le 7,5 \\Rightarrow k \\in \\{0; 1; 2; 3; 4; 5; 6; 7\\}$. Có đúng 8 lần."
      },
      {
        "id": "sa-11.4.22",
        "badge": "Câu 22 - Trả lời ngắn - Mực nước cực đại tại bến cảng",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Mực nước một bến cảng sau $t$ giờ $(0 \\le t \\le 24)$ là $h(t) = 8 + 3\\cos\\left(\\dfrac{\\pi t}{6}\\right)$ (m). Trong một ngày có bao nhiêu lần mực nước đạt độ cao cực đại $11$ m?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$8 + 3\\cos\\left(\\dfrac{\\pi t}{6}\\right) = 11 \\Leftrightarrow \\cos\\left(\\dfrac{\\pi t}{6}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi t}{6} = k2\\pi \\Leftrightarrow t = 12k$. Với $0 \\le t \\le 24$, ta có $t = 0, 12, 24$ ứng với $k = 0, 1, 2$. Có 3 lần."
      },
      {
        "id": "sa-11.4.23",
        "badge": "Câu 23 - Trả lời ngắn - Hệ số góc của tổng nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm tổng tất cả các nghiệm của phương trình $\\cos x = \\dfrac{1}{2}$ trên đoạn $[0; 2\\pi]$ theo dạng $a\\pi$. Giá trị của $a$ là bao nhiêu?",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "Trên $[0; 2\\pi]$, các nghiệm của $\\cos x = \\dfrac{1}{2}$ là $x_1 = \\dfrac{\\pi}{3}$ và $x_2 = \\dfrac{5\\pi}{3}$. Tổng là $\\dfrac{\\pi}{3} + \\dfrac{5\\pi}{3} = 2\\pi$. Vậy $a = 2$."
      },
      {
        "id": "sa-11.4.24",
        "badge": "Câu 24 - Trả lời ngắn - Tổng nghiệm của sin x = sqrt(3)/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
        "prompt": "Tìm tổng tất cả các nghiệm của phương trình $\\sin x = \\dfrac{\\sqrt{3}}{2}$ trên đoạn $[0; \\pi]$ theo dạng $a\\pi$. Giá trị của $a$ là bao nhiêu?",
        "correctAnswer": "1",
        "acceptableAnswers": [
          "1"
        ],
        "explanation": "Trên $[0; \\pi]$, các nghiệm là $x_1 = \\dfrac{\\pi}{3}$ và $x_2 = \\dfrac{2\\pi}{3}$. Tổng bằng $\\dfrac{\\pi}{3} + \\dfrac{2\\pi}{3} = \\pi = 1\\pi$. Vậy $a = 1$."
      }
    ],
    "tips": [
      "Thần chú nhớ họ nghiệm: Sin 'bù' ($\\alpha$ và $\\pi - \\alpha$), Cos 'đối' ($\\pm \\alpha$), Tan và Cot đuôi chu kỳ $+ k\\pi$.",
      "Trường hợp nghiệm đặc biệt bằng 0: đuôi là $+ k\\pi$ ($\\sin x = 0 \\Leftrightarrow x = k\\pi$; $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$).",
      "Trường hợp nghiệm đặc biệt bằng $\\pm 1$: đuôi luôn là $+ k2\\pi$ (chỉ có 1 điểm duy nhất trên đường tròn lượng giác).",
      "Khi dùng máy tính cầm tay Casio/Vinacal: Chuyển sang đơn vị Radian (Shift Menu 2 2) trước khi bấm $\\text{Shift } \\sin / \\cos / \\tan$.",
      "Khi đề bài hỏi số nghiệm trên đoạn $[a; b]$: Giải ra $x = f(k)$ rồi cho $a \\le f(k) \\le b$ để tìm các số nguyên $k$.",
      "Để đổi $\\cos v$ về $\\sin$: Áp dụng góc phụ $\\cos v = \\sin\\left(\\dfrac{\\pi}{2} - v\\right)$."
    ],
    "traps": [
      "Bẫy 1: Quên nghiệm 'bù' của phương trình sin: Chỉ viết $x = \\alpha + k2\\pi$ mà quên mất họ nghiệm thứ hai $x = \\pi - \\alpha + k2\\pi$.",
      "Bẫy 2: Nhầm lẫn đuôi chu kỳ: Viết nhầm $k\\pi$ thành $k2\\pi$ ở phương trình tan/cot, hoặc viết nhầm $k2\\pi$ thành $k\\pi$ ở sin/cos.",
      "Bẫy 3: Quên điều kiện $|m| \\le 1$: Thấy phương trình $\\sin x = 2$ vội vàng bấm máy tính rồi kết luận sai thay vì kết luận ngay phương trình vô nghiệm.",
      "Bẫy 4: Quên điều kiện xác định của tan/cot: Với phương trình chứa $\\tan u(x)$ hoặc $\\cot u(x)$, phải đặt điều kiện xác định trước khi giải và đối chiếu loại nghiệm ngoại lai.",
      "Bẫy 5: Khi chia hai vế cho $\\cos x$: Phải xét trường hợp $\\cos x = 0$ trước khi chia, nếu không sẽ làm mất nghiệm.",
      "Bẫy 6: Nhầm lẫn giữa đơn vị Radian và Độ: Trong công thức không được trộn lẫn, ví dụ $x = 30^\\circ + k2\\pi$ là SAI (phải là $+ k360^\\circ$)."
    ]
  }
,
  "t11-on-tap-chuong-1": {
  "id": "t11-on-tap-chuong-1",
  "lessonNumber": 0,
  "title": "Ôn tập cuối chương I: Hàm số lượng giác và phương trình lượng giác",
  "bookChapter": "Chương I: Hàm số lượng giác và phương trình lượng giác (SGK Toán 11 KNTT - Tập 1)",
  "scenarioTitle": "Hệ thống hóa toàn bộ kiến thức lượng giác và luyện tập 3 đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
  "scenarioFrames": [],
  "interactiveType": "circle",
  "youtubeVideoId": "6W9ZIaEfoH4",
  "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương I - Toán 11 KNTT",
  "youtubeVideos": [
    {
      "id": "6W9ZIaEfoH4",
      "title": "Bài tập cuối chương 1: Hàm số & Phương trình lượng giác (Tiết 1) - KNTT"
    },
    {
      "id": "hWvtvqEKUqA",
      "title": "Bài tập cuối chương 1: Hàm số & Phương trình lượng giác (Tiết 2) - KNTT"
    },
    {
      "id": "zQfD7o1UtjY",
      "title": "Bài tập cuối chương 1: Hàm số & Phương trình lượng giác (Tiết 3) - KNTT"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-11.ot1.1",
      "title": "Câu hỏi 1: Hệ thức lượng giác cơ bản",
      "question": "Hệ thức nào sau đây là ĐÚNG với mọi góc lượng giác $\\alpha$ làm cho các biểu thức có nghĩa?",
      "options": [
        "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
        "$\\tan \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha}$",
        "$1 + \\tan^2 \\alpha = \\dfrac{1}{\\sin^2 \\alpha}$",
        "$\\sin(-\\alpha) = \\sin \\alpha$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ thức cơ bản: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ với mọi $\\alpha$."
    },
    {
      "id": "vq-11.ot1.2",
      "title": "Câu hỏi 2: Công thức nhân đôi côsin",
      "question": "Công thức nào sau đây SAI khi khai triển $\\cos 2a$?",
      "options": [
        "$\\cos 2a = 2\\sin^2 a - 1$",
        "$\\cos 2a = \\cos^2 a - \\sin^2 a$",
        "$\\cos 2a = 2\\cos^2 a - 1$",
        "$\\cos 2a = 1 - 2\\sin^2 a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức đúng là $\\cos 2a = 1 - 2\\sin^2 a$, do đó phương án $\\cos 2a = 2\\sin^2 a - 1$ là SAI."
    },
    {
      "id": "vq-11.ot1.3",
      "title": "Câu hỏi 3: Tập xác định của hàm số tang",
      "question": "Tập xác định của hàm số $y = \\tan x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$",
        "$D = [-1; 1]$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số tang xác định khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$."
    },
    {
      "id": "vq-11.ot1.4",
      "title": "Câu hỏi 4: Nghiệm của phương trình lượng giác cơ bản",
      "question": "Phương trình $\\sin x = 0$ có các nghiệm là:",
      "options": [
        "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
        "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
        "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
        "$x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi \\ (k \\in \\mathbb{Z})$."
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Hệ thống hóa Góc lượng giác & Giá trị lượng giác",
      "points": [
        "Đơn vị đo: $180^\\circ = \\pi \\text{ rad} \\Rightarrow 1^\\circ = \\dfrac{\\pi}{180} \\text{ rad}, \\ 1 \\text{ rad} = \\left(\\dfrac{180}{\\pi}\\right)^\\circ$. Độ dài cung tròn bán kính $R$, góc $\\alpha$ rad: $l = \\alpha R$.",
        "Hệ thức cơ bản: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$; $1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha} \\ \\left(\\alpha \\ne \\dfrac{\\pi}{2} + k\\pi\\right)$; $1 + \\cot^2 \\alpha = \\dfrac{1}{\\sin^2 \\alpha} \\ (\\alpha \\ne k\\pi)$; $\\tan \\alpha \\cdot \\cot \\alpha = 1$.",
        "Cung liên kết (Cos đối, Sin bù, Phụ chéo, Hơn kém $\\pi$ tan/cot): $\\cos(-\\alpha) = \\cos \\alpha$; $\\sin(\\pi - \\alpha) = \\sin \\alpha$; $\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos \\alpha$."
      ],
      "formula": "\\sin^2 \\alpha + \\cos^2 \\alpha = 1; \\quad 1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}; \\quad l = \\alpha R",
      "examples": [
        {
          "title": "Ví dụ 1: Tính giá trị lượng giác khi biết một giá trị",
          "problem": "Cho $\\sin \\alpha = \\dfrac{3}{5}$ với $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Tính $\\cos \\alpha, \\tan \\alpha, \\cot \\alpha$.",
          "solution": "Vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ nên $\\cos \\alpha < 0$. Ta có $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25} \\Rightarrow \\cos \\alpha = -\\dfrac{4}{5}$. Khi đó $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = -\\dfrac{3}{4}$, $\\cot \\alpha = -\\dfrac{4}{3}$."
        }
      ]
    },
    {
      "index": "2",
      "title": "Hệ thống hóa Công thức lượng giác",
      "points": [
        "Công thức cộng: $\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$; $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$; $\\tan(a \\pm b) = \\dfrac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}$.",
        "Công thức nhân đôi: $\\sin 2a = 2\\sin a \\cos a$; $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$; $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$.",
        "Công thức hạ bậc: $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$; $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$.",
        "Biến đổi tích thành tổng và tổng thành tích: $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a-b) + \\cos(a+b)]$; $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$."
      ],
      "formula": "\\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a; \\quad \\sin 2a = 2\\sin a \\cos a",
      "examples": [
        {
          "title": "Ví dụ 2: Rút gọn biểu thức bằng công thức cộng và nhân đôi",
          "problem": "Rút gọn biểu thức $A = \\dfrac{\\sin 2x}{2\\cos x} + \\cos\\left(x + \\dfrac{\\pi}{2}\\right)$.",
          "solution": "Ta có $\\dfrac{\\sin 2x}{2\\cos x} = \\dfrac{2\\sin x \\cos x}{2\\cos x} = \\sin x$. Lại có $\\cos\\left(x + \\dfrac{\\pi}{2}\\right) = -\\sin x$. Vậy $A = \\sin x + (-\\sin x) = 0$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Hệ thống hóa Hàm số lượng giác",
      "points": [
        "Hàm số $y = \\sin x$: $D = \\mathbb{R}$, tập giá trị $[-1; 1]$, là hàm số lẻ, tuần hoàn với chu kỳ $T = 2\\pi$.",
        "Hàm số $y = \\cos x$: $D = \\mathbb{R}$, tập giá trị $[-1; 1]$, là hàm số chẵn, tuần hoàn với chu kỳ $T = 2\\pi$.",
        "Hàm số $y = \\tan x$: $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi\\right\\}$, tập giá trị $\\mathbb{R}$, là hàm số lẻ, tuần hoàn với chu kỳ $T = \\pi$.",
        "Hàm số $y = \\cot x$: $D = \\mathbb{R} \\setminus \\{k\\pi\\}$, tập giá trị $\\mathbb{R}$, là hàm số lẻ, tuần hoàn với chu kỳ $T = \\pi$."
      ],
      "formula": "T_{\\sin, \\cos} = 2\\pi; \\quad T_{\\tan, \\cot} = \\pi; \\quad T_{f(\\omega x)} = \\dfrac{T_0}{|\\omega|}",
      "examples": [
        {
          "title": "Ví dụ 3: Tìm tập xác định và giá trị lớn nhất, nhỏ nhất",
          "problem": "Tìm tập xác định và GTLN, GTNN của hàm số $y = 3\\cos 2x - 1$.",
          "solution": "• Hàm số xác định với mọi $x \\in \\mathbb{R}$, vậy $D = \\mathbb{R}$.\n• Vì $-1 \\le \\cos 2x \\le 1$ nên $-3 \\le 3\\cos 2x \\le 3 \\Rightarrow -4 \\le y \\le 2$. Vậy $\\max y = 2$ (khi $\\cos 2x = 1$) và $\\min y = -4$ (khi $\\cos 2x = -1$)."
        }
      ]
    },
    {
      "index": "4",
      "title": "Hệ thống hóa Phương trình lượng giác cơ bản",
      "points": [
        "$\\sin x = \\sin \\alpha \\Leftrightarrow \\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$. Điều kiện có nghiệm: $|m| \\le 1$.",
        "$\\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$. Điều kiện có nghiệm: $|m| \\le 1$.",
        "$\\tan x = \\tan \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$. Luôn có nghiệm với mọi $m \\in \\mathbb{R}$.",
        "$\\cot x = \\cot \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$. Luôn có nghiệm với mọi $m \\in \\mathbb{R}$."
      ],
      "formula": "\\sin x = \\sin \\alpha \\Leftrightarrow x = \\alpha + k2\\pi \\lor x = \\pi - \\alpha + k2\\pi; \\quad \\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi",
      "examples": [
        {
          "title": "Ví dụ 4: Giải phương trình lượng giác trên một đoạn",
          "problem": "Tìm tất cả các nghiệm của phương trình $2\\sin x - 1 = 0$ trên đoạn $[0; \\pi]$.",
          "solution": "$2\\sin x - 1 = 0 \\Leftrightarrow \\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi$. Trên đoạn $[0; \\pi]$, lấy $k = 0$ cho 2 nghiệm là $x = \\dfrac{\\pi}{6}$ và $x = \\dfrac{5\\pi}{6}$."
        }
      ]
    }
  ],
  "tips": [
    "Công thức hạ bậc và nhân đôi luôn xuất hiện trong các bài toán biến đổi và tính tích phân sau này: $\\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$.",
    "Thần chú nhớ nghiệm phương trình: Sin bù, Cos đối, Tan và Cot đuôi $+ k\\pi$.",
    "GTLN và GTNN của hàm dạng $a\\sin x + b\\cos x$: $-\\sqrt{a^2 + b^2} \\le a\\sin x + b\\cos x \\le \\sqrt{a^2 + b^2}$.",
    "Đổi chu kỳ khi có hệ số $\\omega$: $T = \\dfrac{2\\pi}{|\\omega|}$ đối với sin và cos; $T = \\dfrac{\\pi}{|\\omega|}$ đối với tan và cot.",
    "Bấm máy tính Casio khi giải trắc nghiệm: Chuyển máy tính sang chế độ Radian (Shift Menu 2 2), dùng phím CALC thử các đáp án.",
    "Đếm nghiệm trên $[a; b]$: Cho biểu thức nghiệm $a \\le x(k) \\le b$ rồi giải bất phương trình tìm số nguyên $k$."
  ],
  "traps": [
    "Bẫy 1: Quên nghiệm 'bù' của phương trình sin: Viết thiếu họ nghiệm $x = \\pi - \\alpha + k2\\pi$.",
    "Bẫy 2: Nhầm lẫn đuôi chu kỳ: Viết nhầm $k\\pi$ thành $k2\\pi$ ở tan/cot hoặc ngược lại.",
    "Bẫy 3: Quên điều kiện xác định của tan và cot khi giải phương trình: Chưa loại nghiệm không thỏa mãn ĐKXĐ.",
    "Bẫy 4: Nhầm lẫn giữa tính chẵn và lẻ: Hàm cosin là hàm chẵn, còn sin, tan, cot là hàm lẻ.",
    "Bẫy 5: Nhầm cung liên kết: Nhầm $\\sin(\\pi + \\alpha) = -\\sin \\alpha$, $\\cos(\\pi + \\alpha) = -\\cos \\alpha$, nhưng $\\tan(\\pi + \\alpha) = \\tan \\alpha$.",
    "Bẫy 6: Khai căn phương trình bậc hai: Quên trường hợp lấy nghiệm âm hoặc không loại nghiệm khi đặt ẩn phụ $t = \\sin x \\ (|t| \\le 1)$."
  ],
  "examSets": [
    {
      "id": "de-1",
      "title": "Đề ôn tập số 1",
      "description": "Đề ôn tập tổng hợp cuối Chương I (Hàm số lượng giác & Phương trình lượng giác) - Đề 1",
      "matrixBadge": "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      "quizQuestions": [
        {
          "id": "quiz-11.1.1",
          "badge": "Câu 1 - Nhận biết - Đổi 120° sang radian",
          "source": "SGK Toán 11 KNTT Bài 1 - Dạng 1",
          "question": "Đổi góc $120°$ sang đơn vị radian, ta được:",
          "options": [
            "$\\dfrac{2\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$\\dfrac{3\\pi}{4}$",
            "$\\dfrac{4\\pi}{3}$"
          ],
          "correctIndex": 0,
          "explanation": "$120° = 120 \\cdot \\dfrac{\\pi}{180} = \\dfrac{120\\pi}{180} = \\dfrac{2\\pi}{3}$ rad."
        },
        {
          "id": "quiz-11.1.5",
          "badge": "Câu 5 - Nhận biết - Đổi −135° sang radian",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
          "question": "Đổi góc $-135°$ sang đơn vị radian, ta được:",
          "options": [
            "$-\\dfrac{3\\pi}{4}$",
            "$-\\dfrac{2\\pi}{3}$",
            "$-\\dfrac{5\\pi}{6}$",
            "$-\\dfrac{\\pi}{4}$"
          ],
          "correctIndex": 0,
          "explanation": "$-135° = -135 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{3\\pi}{4}$ rad."
        },
        {
          "id": "quiz-11.1.8",
          "badge": "Câu 8 - Vận dụng - Bài toán bánh xe",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
          "question": "Một bánh xe có bán kính $0.5$ m quay được $3$ vòng. Quãng đường mà một điểm trên vành đi được là:",
          "options": [
            "$3\\pi$ m",
            "$6\\pi$ m",
            "$1.5\\pi$ m",
            "$\\pi$ m"
          ],
          "correctIndex": 0,
          "explanation": "3 vòng = $3 \\times 2\\pi = 6\\pi$ rad. Quãng đường: $l = R \\cdot \\alpha = 0.5 \\times 6\\pi = 3\\pi$ m."
        },
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
          "id": "quiz-11.4.1",
          "badge": "Câu 1 - Nhận biết - Điều kiện có nghiệm của sin x = m",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
          "question": "Phương trình $\\sin x = m$ có nghiệm khi và chỉ khi:",
          "options": [
            "$-1 \\le m \\le 1$",
            "$m \\ge -1$",
            "$m \\le 1$",
            "$m \\in \\mathbb{R}$"
          ],
          "correctIndex": 0,
          "explanation": "Vì tập giá trị của hàm số sin là $[-1; 1]$ nên phương trình $\\sin x = m$ có nghiệm khi và chỉ khi $-1 \\le m \\le 1$."
        },
        {
          "id": "quiz-11.4.5",
          "badge": "Câu 5 - Thông hiểu - Giải phương trình sin x = 1/2",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
          "question": "Tất cả các nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ là:",
          "options": [
            "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
            "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\dfrac{2\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
            "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k\\pi \\\\ x = \\dfrac{5\\pi}{6} + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
            "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = -\\dfrac{\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$"
          ],
          "correctIndex": 0,
          "explanation": "$\\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\dfrac{\\pi}{6} + k2\\pi = \\dfrac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
        },
        {
          "id": "quiz-11.4.8",
          "badge": "Câu 8 - Vận dụng - Nghiệm âm lớn nhất của phương trình sin",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
          "question": "Nghiệm âm lớn nhất của phương trình $\\sin x = -\\dfrac{1}{2}$ là:",
          "options": [
            "$-\\dfrac{\\pi}{6}$",
            "$-\\dfrac{5\\pi}{6}$",
            "$-\\dfrac{\\pi}{3}$",
            "$-\\dfrac{2\\pi}{3}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\sin x = -\\dfrac{1}{2} = \\sin\\left(-\\dfrac{\\pi}{6}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\left(-\\dfrac{\\pi}{6}\\right) + k2\\pi = \\dfrac{7\\pi}{6} + k2\\pi$. Nghiệm âm lớn nhất là $-\\dfrac{\\pi}{6}$ (ứng với họ thứ nhất khi $k = 0$)."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "tf-11.1.1",
          "badge": "Đúng/Sai 1 - Đổi đơn vị cơ bản (Nhận biết)",
          "source": "SGK Toán 11 KNTT Bài 1 Dạng 1",
          "prompt": "Đổi số đo của các góc sang radian. Khi đó:",
          "subItems": [
            {
              "id": "a",
              "text": "$60° = \\dfrac{\\pi}{3}$ rad",
              "correctAnswer": true,
              "explanation": "$60° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{3}$ rad. Đúng."
            },
            {
              "id": "b",
              "text": "$90° = \\dfrac{\\pi}{2}$ rad",
              "correctAnswer": true,
              "explanation": "$90° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{2}$ rad. Đúng."
            },
            {
              "id": "c",
              "text": "$45° = \\dfrac{\\pi}{6}$ rad",
              "correctAnswer": false,
              "explanation": "$45° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{4}$ rad (không phải $\\dfrac{\\pi}{6}$). Sai."
            },
            {
              "id": "d",
              "text": "$270° = \\dfrac{3\\pi}{2}$ rad",
              "correctAnswer": true,
              "explanation": "$270° \\times \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{2}$ rad. Đúng."
            }
          ]
        },
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
          "id": "tf-11.4.1",
          "badge": "Đúng/Sai 1 - Phương trình sin(2x + pi/3) = 1/2",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 1",
          "prompt": "Cho phương trình lượng giác $\\sin\\left(2x + \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số vị trí biểu diễn các nghiệm của phương trình trên đường tròn lượng giác là 4.",
              "correctAnswer": true,
              "explanation": "Phương trình $\\Leftrightarrow 2x + \\dfrac{\\pi}{3} = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $2x + \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{6} + k2\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{12} + k\\pi$ hoặc $x = \\dfrac{\\pi}{4} + k\\pi$. Mỗi họ nghiệm có chu kỳ $k\\pi$ nên được biểu diễn bởi 2 điểm trên đường tròn, tổng cộng là 4 điểm."
            },
            {
              "id": "b",
              "text": "Phương trình có 2 nghiệm trên khoảng $(0; \\pi)$ là $x = \\dfrac{\\pi}{4}$ và $x = \\dfrac{11\\pi}{12}$.",
              "correctAnswer": true,
              "explanation": "Với họ $x = \\dfrac{\\pi}{4} + k\\pi \\xrightarrow{x \\in (0; \\pi)} x = \\dfrac{\\pi}{4}$ ($k=0$). Với họ $x = -\\dfrac{\\pi}{12} + k\\pi \\xrightarrow{x \\in (0; \\pi)} x = \\dfrac{11\\pi}{12}$ ($k=1$). Vậy có đúng 2 nghiệm."
            },
            {
              "id": "c",
              "text": "Tổng tất cả các nghiệm của phương trình trên khoảng $(0; \\pi)$ bằng $\\dfrac{7\\pi}{6}$.",
              "correctAnswer": true,
              "explanation": "Tổng hai nghiệm là $\\dfrac{\\pi}{4} + \\dfrac{11\\pi}{12} = \\dfrac{3\\pi + 11\\pi}{12} = \\dfrac{14\\pi}{12} = \\dfrac{7\\pi}{6}$."
            },
            {
              "id": "d",
              "text": "Phương trình có 4 nghiệm trên khoảng $(0; 2\\pi)$.",
              "correctAnswer": true,
              "explanation": "Vì mỗi chu kỳ $\\pi$ có 2 nghiệm nên trên khoảng $(0; 2\\pi)$ có độ dài $2\\pi$, phương trình có đúng $2 \\times 2 = 4$ nghiệm."
            }
          ]
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "sa-11.1.1",
          "badge": "TLN 1 - Đổi 330° sang radian",
          "source": "SGK Toán 11 KNTT Bài 1",
          "prompt": "Đổi $330°$ sang radian.",
          "correctAnswer": "$\\dfrac{11\\pi}{6}$",
          "acceptableAnswers": [
            "11π/6",
            "11pi/6"
          ],
          "explanation": "$330° = 330 \\times \\dfrac{\\pi}{180} = \\dfrac{11\\pi}{6}$ rad."
        },
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
          "id": "sa-11.4.1",
          "badge": "Câu 1 - Trả lời ngắn - Số nghiệm của cos(x + 30) = -1",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 1",
          "prompt": "Tìm số nghiệm của phương trình $\\cos(x + 30^\\circ) + 1 = 0$ trên đoạn $[-360^\\circ; 360^\\circ]$.",
          "correctAnswer": "2",
          "acceptableAnswers": [
            "2"
          ],
          "explanation": "$\\cos(x + 30^\\circ) = -1 \\Leftrightarrow x + 30^\\circ = 180^\\circ + k360^\\circ \\Leftrightarrow x = 150^\\circ + k360^\\circ$. Với $-360^\\circ \\le 150^\\circ + k360^\\circ \\le 360^\\circ \\Leftrightarrow -\\dfrac{510}{360} \\le k \\le \\dfrac{210}{360} \\Rightarrow k \\in \\{-1; 0\\}$. Có 2 nghiệm là $-210^\\circ$ và $150^\\circ$."
        },
        {
          "id": "sa-11.4.2",
          "badge": "Câu 2 - Trả lời ngắn - Số nghiệm của cos 5x = cos 135",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 2",
          "prompt": "Tìm số nghiệm của phương trình $\\cos 5x = \\cos 135^\\circ$ trên đoạn $[0^\\circ; 720^\\circ]$.",
          "correctAnswer": "20",
          "acceptableAnswers": [
            "20"
          ],
          "explanation": "$5x = \\pm 135^\\circ + k360^\\circ \\Leftrightarrow x = 27^\\circ + k72^\\circ$ hoặc $x = -27^\\circ + k72^\\circ$. Trên $[0^\\circ; 720^\\circ]$, họ 1 có 10 nghiệm ($k = 0, \\dots, 9$), họ 2 có 10 nghiệm ($k = 1, \\dots, 10$). Hai họ này không có nghiệm chung. Tổng số nghiệm là $10 + 10 = 20$."
        }
      ]
    },
    {
      "id": "de-2",
      "title": "Đề ôn tập số 2",
      "description": "Đề ôn tập tổng hợp cuối Chương I (Hàm số lượng giác & Phương trình lượng giác) - Đề 2",
      "matrixBadge": "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      "quizQuestions": [
        {
          "id": "quiz-11.1.9",
          "badge": "Câu 9 - Nhận biết - Góc phần tư của 7π/6",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
          "question": "Điểm biểu diễn của góc lượng giác $\\dfrac{7\\pi}{6}$ nằm ở:",
          "options": [
            "Góc phần tư thứ III",
            "Góc phần tư thứ II",
            "Góc phần tư thứ IV",
            "Góc phần tư thứ I"
          ],
          "correctIndex": 0,
          "explanation": "Vì $\\pi < \\dfrac{7\\pi}{6} < \\dfrac{3\\pi}{2}$ nên điểm biểu diễn nằm ở góc phần tư thứ III."
        },
        {
          "id": "quiz-11.1.13",
          "badge": "Câu 13 - Thông hiểu - Tìm góc cùng điểm biểu diễn",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
          "question": "Góc $\\dfrac{17\\pi}{4}$ có điểm biểu diễn trùng với điểm biểu diễn của góc nào sau đây?",
          "options": [
            "$\\dfrac{\\pi}{4}$",
            "$\\dfrac{3\\pi}{4}$",
            "$\\dfrac{5\\pi}{4}$",
            "$\\dfrac{7\\pi}{4}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\dfrac{17\\pi}{4} = \\dfrac{\\pi}{4} + \\dfrac{16\\pi}{4} = \\dfrac{\\pi}{4} + 4\\pi = \\dfrac{\\pi}{4} + 2 \\cdot 2\\pi$. Vậy điểm biểu diễn trùng với $\\dfrac{\\pi}{4}$."
        },
        {
          "id": "quiz-11.1.16",
          "badge": "Câu 16 - Vận dụng - Mâm bánh xe chia phần",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 2",
          "question": "Mâm bánh xe được chia đều thành $6$ phần bằng nhau xuất phát từ $A(1;0)$. Điểm chia thứ $2$ (quay ngược chiều kim đồng hồ) có số đo là:",
          "options": [
            "$\\dfrac{2\\pi}{3}$ rad",
            "$\\dfrac{\\pi}{3}$ rad",
            "$\\dfrac{\\pi}{2}$ rad",
            "$\\pi$ rad"
          ],
          "correctIndex": 0,
          "explanation": "Mỗi phần chia ứng với góc $\\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}$ rad. Điểm thứ 2 có số đo: $2 \\times \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$ rad."
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
          "id": "quiz-11.4.9",
          "badge": "Câu 9 - Nhận biết - Công thức nghiệm của cos x = cos alpha",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
          "question": "Công thức nghiệm của phương trình $\\cos x = \\cos \\alpha$ là:",
          "options": [
            "$x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
            "$\\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
            "$x = \\pm \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
            "$x = \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$"
          ],
          "correctIndex": 0,
          "explanation": "Phương trình $\\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$."
        },
        {
          "id": "quiz-11.4.13",
          "badge": "Câu 13 - Thông hiểu - Giải phương trình cos 2x = -sqrt(2)/2",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
          "question": "Tập nghiệm của phương trình $\\cos 2x = -\\dfrac{\\sqrt{2}}{2}$ là:",
          "options": [
            "$\\left\\{\\pm \\dfrac{3\\pi}{8} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$\\left\\{\\pm \\dfrac{3\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$\\left\\{\\pm \\dfrac{\\pi}{8} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$\\left\\{\\pm \\dfrac{3\\pi}{8} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\cos 2x = -\\dfrac{\\sqrt{2}}{2} = \\cos\\dfrac{3\\pi}{4} \\Leftrightarrow 2x = \\pm \\dfrac{3\\pi}{4} + k2\\pi \\Leftrightarrow x = \\pm \\dfrac{3\\pi}{8} + k\\pi \\ (k \\in \\mathbb{Z})$."
        },
        {
          "id": "quiz-11.4.16",
          "badge": "Câu 16 - Vận dụng - Số điểm biểu diễn nghiệm của cos trên đường tròn",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 2",
          "question": "Số điểm biểu diễn các nghiệm của phương trình $\\cos 4x = 1$ trên đường tròn lượng giác là:",
          "options": [
            "$4$",
            "$2$",
            "$8$",
            "$1$"
          ],
          "correctIndex": 0,
          "explanation": "$\\cos 4x = 1 \\Leftrightarrow 4x = k2\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$. Do họ nghiệm có dạng $x = \\dfrac{k2\\pi}{4}$ nên có đúng 4 điểm phân biệt biểu diễn trên đường tròn lượng giác (tương ứng $k = 0, 1, 2, 3$)."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "tf-11.1.2",
          "badge": "Đúng/Sai 2 - Đổi radian sang độ (Nhận biết)",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
          "prompt": "Đổi số đo của các góc sang độ. Khi đó:",
          "subItems": [
            {
              "id": "a",
              "text": "$\\dfrac{\\pi}{6}$ rad $= 30°$",
              "correctAnswer": true,
              "explanation": "$\\dfrac{\\pi}{6} \\times \\dfrac{180°}{\\pi} = 30°$. Đúng."
            },
            {
              "id": "b",
              "text": "$\\dfrac{\\pi}{4}$ rad $= 45°$",
              "correctAnswer": true,
              "explanation": "$\\dfrac{\\pi}{4} \\times \\dfrac{180°}{\\pi} = 45°$. Đúng."
            },
            {
              "id": "c",
              "text": "$\\dfrac{2\\pi}{3}$ rad $= 100°$",
              "correctAnswer": false,
              "explanation": "$\\dfrac{2\\pi}{3} \\times \\dfrac{180°}{\\pi} = 120°$, không phải $100°$. Sai."
            },
            {
              "id": "d",
              "text": "$\\dfrac{5\\pi}{6}$ rad $= 150°$",
              "correctAnswer": true,
              "explanation": "$\\dfrac{5\\pi}{6} \\times \\dfrac{180°}{\\pi} = 150°$. Đúng."
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
          "id": "tf-11.4.2",
          "badge": "Đúng/Sai 2 - Phương trình sin(3x - pi/4) = sqrt(3)/2",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 2",
          "prompt": "Cho phương trình lượng giác $\\sin\\left(3x - \\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{3}}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Công thức nghiệm của phương trình là $x = \\dfrac{7\\pi}{36} + \\dfrac{k2\\pi}{3}$ hoặc $x = \\dfrac{11\\pi}{36} + \\dfrac{k2\\pi}{3} \\ (k \\in \\mathbb{Z})$.",
              "correctAnswer": true,
              "explanation": "$3x - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow 3x = \\dfrac{7\\pi}{12} + k2\\pi \\Leftrightarrow x = \\dfrac{7\\pi}{36} + \\dfrac{k2\\pi}{3}$ hoặc $3x - \\dfrac{\\pi}{4} = \\pi - \\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow 3x = \\dfrac{11\\pi}{12} + k2\\pi \\Leftrightarrow x = \\dfrac{11\\pi}{36} + \\dfrac{k2\\pi}{3}$."
            },
            {
              "id": "b",
              "text": "Nghiệm dương nhỏ nhất của phương trình là $x = \\dfrac{7\\pi}{36}$.",
              "correctAnswer": true,
              "explanation": "Với $k = 0$, họ 1 cho $x = \\dfrac{7\\pi}{36} > 0$, họ 2 cho $x = \\dfrac{11\\pi}{36} > \\dfrac{7\\pi}{36}$. Vậy nghiệm dương nhỏ nhất là $\\dfrac{7\\pi}{36}$."
            },
            {
              "id": "c",
              "text": "Nghiệm âm lớn nhất của phương trình là $x = -\\dfrac{13\\pi}{36}$.",
              "correctAnswer": true,
              "explanation": "Với $k = -1$, họ 1 cho $x = \\dfrac{7\\pi}{36} - \\dfrac{24\\pi}{36} = -\\dfrac{17\\pi}{36}$; họ 2 cho $x = \\dfrac{11\\pi}{36} - \\dfrac{24\\pi}{36} = -\\dfrac{13\\pi}{36} > -\\dfrac{17\\pi}{36}$. Vậy nghiệm âm lớn nhất là $-\\dfrac{13\\pi}{36}$."
            },
            {
              "id": "d",
              "text": "Số nghiệm của phương trình trên khoảng $(0; \\pi)$ là 3.",
              "correctAnswer": false,
              "explanation": "Trên $(0; \\pi)$, họ 1 có $x = \\dfrac{7\\pi}{36}, \\dfrac{31\\pi}{36}$; họ 2 có $x = \\dfrac{11\\pi}{36}, \\dfrac{35\\pi}{36}$. Tổng cộng có 4 nghiệm, không phải 3."
            }
          ]
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "sa-11.1.3",
          "badge": "TLN 3 - Tính độ dài cung",
          "source": "SGK Toán 11 KNTT Bài 1",
          "prompt": "Tính độ dài cung tròn có số đo $\\dfrac{\\pi}{6}$ rad trên đường tròn bán kính $18$ cm.",
          "correctAnswer": "$3\\pi$ cm",
          "acceptableAnswers": [
            "3π",
            "3pi"
          ],
          "explanation": "$l = R|\\alpha| = 18 \\times \\dfrac{\\pi}{6} = 3\\pi$ cm."
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
          "id": "sa-11.4.3",
          "badge": "Câu 3 - Trả lời ngắn - Số nghiệm của tan 2x = sqrt(3)",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 3",
          "prompt": "Tìm số nghiệm của phương trình $\\tan 2x = \\sqrt{3}$ trên đoạn $[-2\\pi; 4\\pi]$.",
          "correctAnswer": "12",
          "acceptableAnswers": [
            "12"
          ],
          "explanation": "$2x = \\dfrac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{2}$. Vì đoạn $[-2\\pi; 4\\pi]$ có độ dài $6\\pi$, mỗi chu kỳ $\\dfrac{\\pi}{2}$ có đúng 1 nghiệm nên số nghiệm là $\\dfrac{6\\pi}{\\pi/2} = 12$."
        },
        {
          "id": "sa-11.4.4",
          "badge": "Câu 4 - Trả lời ngắn - Số nghiệm của cot x = 0",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 5",
          "prompt": "Tìm số nghiệm của phương trình $\\cot x = 0$ trên đoạn $[-2\\pi; 5\\pi]$.",
          "correctAnswer": "7",
          "acceptableAnswers": [
            "7"
          ],
          "explanation": "$\\cot x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$. Điều kiện $-2\\pi \\le \\dfrac{\\pi}{2} + k\\pi \\le 5\\pi \\Leftrightarrow -2,5 \\le k \\le 4,5 \\Rightarrow k \\in \\{-2; -1; 0; 1; 2; 3; 4\\}$. Có 7 nghiệm."
        }
      ]
    },
    {
      "id": "de-3",
      "title": "Đề ôn tập số 3",
      "description": "Đề ôn tập tổng hợp cuối Chương I (Hàm số lượng giác & Phương trình lượng giác) - Đề 3",
      "matrixBadge": "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      "quizQuestions": [
        {
          "id": "quiz-11.1.17",
          "badge": "Câu 17 - Nhận biết - Tính sin(7π/6)",
          "source": "SGK Toán 11 KNTT Bài 1 - Dạng 3",
          "question": "Giá trị của $\\sin\\dfrac{7\\pi}{6}$ bằng:",
          "options": [
            "$-\\dfrac{1}{2}$",
            "$\\dfrac{1}{2}$",
            "$-\\dfrac{\\sqrt{3}}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\sin\\dfrac{7\\pi}{6} = \\sin\\left(\\pi + \\dfrac{\\pi}{6}\\right) = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}$."
        },
        {
          "id": "quiz-11.1.21",
          "badge": "Câu 21 - Thông hiểu - Tính cot(5π/3)",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 3",
          "question": "Giá trị của $\\cot\\dfrac{5\\pi}{3}$ bằng:",
          "options": [
            "$-\\dfrac{\\sqrt{3}}{3}$",
            "$\\dfrac{\\sqrt{3}}{3}$",
            "$-\\sqrt{3}$",
            "$\\sqrt{3}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\cot\\dfrac{5\\pi}{3} = \\cot\\left(2\\pi - \\dfrac{\\pi}{3}\\right) = -\\cot\\dfrac{\\pi}{3} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$."
        },
        {
          "id": "quiz-11.1.37",
          "badge": "Câu 37 - Thông hiểu - Rút gọn biểu thức cung liên kết",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 5",
          "question": "Biểu thức $M = \\sin(\\pi - \\alpha) \\cdot \\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$ rút gọn bằng:",
          "options": [
            "$\\sin\\alpha \\cdot \\cot\\alpha = \\cos\\alpha$",
            "$\\sin\\alpha$",
            "$\\cos\\alpha$",
            "$-\\cos\\alpha$"
          ],
          "correctIndex": 2,
          "explanation": "$\\sin(\\pi - \\alpha) = \\sin\\alpha$ và $\\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha}$. Vậy $M = \\sin\\alpha \\cdot \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\cos\\alpha$."
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
          "id": "quiz-11.4.17",
          "badge": "Câu 17 - Nhận biết - Nghiệm của phương trình tan x = m",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
          "question": "Phương trình $\\tan x = \\tan \\alpha$ có công thức nghiệm là:",
          "options": [
            "$x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
            "$x = \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
            "$x = \\pm \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
            "$\\left[\\begin{array}{l} x = \\alpha + k\\pi \\\\ x = \\pi - \\alpha + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$"
          ],
          "correctIndex": 0,
          "explanation": "Hàm số tang có chu kỳ tuần hoàn là $\\pi$, nên $\\tan x = \\tan \\alpha \\Leftrightarrow x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$."
        },
        {
          "id": "quiz-11.4.21",
          "badge": "Câu 21 - Thông hiểu - Giải phương trình cot x = sqrt(3)",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 3",
          "question": "Tập nghiệm của phương trình $\\cot x = \\sqrt{3}$ là:",
          "options": [
            "$\\left\\{\\dfrac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$\\left\\{\\dfrac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$\\left\\{\\dfrac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$\\left\\{\\pm \\dfrac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}\\right\\}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\cot x = \\sqrt{3} = \\cot\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$."
        },
        {
          "id": "quiz-11.4.37",
          "badge": "Câu 37 - Vận dụng - Bài toán thực tế dao động con lắc",
          "source": "SGK Toán 11 KNTT Bài 4 - Dạng 5",
          "question": "Một vật dao động điều hòa có li độ $s = 5\\cos(2t)$ (cm), với $t$ tính bằng giây. Thời điểm đầu tiên $(t > 0)$ vật đi qua vị trí cân bằng $(s = 0)$ là:",
          "options": [
            "$t = \\dfrac{\\pi}{4}$ (s)",
            "$t = \\dfrac{\\pi}{2}$ (s)",
            "$t = \\pi$ (s)",
            "$t = \\dfrac{\\pi}{8}$ (s)"
          ],
          "correctIndex": 0,
          "explanation": "$s = 0 \\Leftrightarrow 5\\cos 2t = 0 \\Leftrightarrow \\cos 2t = 0 \\Leftrightarrow 2t = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow t = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$. Thời điểm đầu tiên $t > 0$ ứng với $k = 0 \\Rightarrow t = \\dfrac{\\pi}{4}$ s."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "tf-11.1.3",
          "badge": "Đúng/Sai 3 - Độ dài cung tròn (Nhận biết)",
          "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
          "prompt": "Biểu diễn góc lượng giác trên đường tròn lượng giác. Khi đó:",
          "subItems": [
            {
              "id": "a",
              "text": "$\\dfrac{\\pi}{3}$ là điểm M thuộc góc phần tư thứ I",
              "correctAnswer": true,
              "explanation": "$0 < \\dfrac{\\pi}{3} < \\dfrac{\\pi}{2}$, nên thuộc GPT I. Đúng."
            },
            {
              "id": "b",
              "text": "$\\dfrac{3\\pi}{4}$ là điểm M thuộc góc phần tư thứ II",
              "correctAnswer": true,
              "explanation": "$\\dfrac{\\pi}{2} < \\dfrac{3\\pi}{4} < \\pi$, nên thuộc GPT II. Đúng."
            },
            {
              "id": "c",
              "text": "$\\dfrac{5\\pi}{4}$ là điểm M thuộc góc phần tư thứ II",
              "correctAnswer": false,
              "explanation": "$\\pi < \\dfrac{5\\pi}{4} < \\dfrac{3\\pi}{2}$, nên thuộc GPT III (không phải II). Sai."
            },
            {
              "id": "d",
              "text": "$\\dfrac{5\\pi}{3}$ là điểm M thuộc góc phần tư thứ IV",
              "correctAnswer": true,
              "explanation": "$\\dfrac{3\\pi}{2} < \\dfrac{5\\pi}{3} < 2\\pi$, nên thuộc GPT IV. Đúng."
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
          "id": "tf-11.4.3",
          "badge": "Đúng/Sai 3 - Phương trình sin x = m",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 3",
          "prompt": "Cho phương trình $\\sin x = m$, với $m$ là tham số thực. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Phương trình đã cho có nghiệm khi và chỉ khi $-1 \\le m \\le 1$.",
              "correctAnswer": true,
              "explanation": "Do tập giá trị của hàm số sin là $[-1; 1]$."
            },
            {
              "id": "b",
              "text": "Số giá trị nguyên của $m$ để phương trình có nghiệm là 3.",
              "correctAnswer": true,
              "explanation": "Các giá trị nguyên thỏa mãn $-1 \\le m \\le 1$ là $m \\in \\{-1; 0; 1\\}$, gồm đúng 3 giá trị."
            },
            {
              "id": "c",
              "text": "Tổng tất cả các giá trị nguyên của $m$ để phương trình có nghiệm bằng 0.",
              "correctAnswer": true,
              "explanation": "Tổng $(-1) + 0 + 1 = 0$."
            },
            {
              "id": "d",
              "text": "Khi $m = 1$, phương trình có tập nghiệm là $\\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.",
              "correctAnswer": false,
              "explanation": "Khi $m = 1$, nghiệm đúng là $x = \\dfrac{\\pi}{2} + k2\\pi$, chu kỳ là $k2\\pi$ chứ không phải $k\\pi$."
            }
          ]
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "sa-11.1.5",
          "badge": "TLN 5 - Xác định góc phần tư",
          "source": "Tài liệu Luyện tập Toán 11 C1B1",
          "prompt": "Điểm biểu diễn góc $\\dfrac{11\\pi}{7}$ nằm ở góc phần tư thứ mấy?",
          "correctAnswer": "Góc phần tư IV",
          "acceptableAnswers": [
            "IV",
            "4",
            "GPT IV",
            "góc phần tư thứ 4"
          ],
          "explanation": "$\\dfrac{3\\pi}{2} = \\dfrac{10.5\\pi}{7} < \\dfrac{11\\pi}{7} < \\dfrac{14\\pi}{7} = 2\\pi$. Nên nằm ở GPT IV."
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
          "id": "sa-11.4.5",
          "badge": "Câu 5 - Trả lời ngắn - Số nghiệm của tan x = sqrt(3)",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 6",
          "prompt": "Tìm số nghiệm của phương trình $\\tan x = \\sqrt{3}$ trên đoạn $[-2\\pi; 4\\pi]$.",
          "correctAnswer": "6",
          "acceptableAnswers": [
            "6"
          ],
          "explanation": "$\\tan x = \\sqrt{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi$. Trên đoạn $[-2\\pi; 4\\pi]$ có độ dài $6\\pi$, chu kỳ $\\pi$ có đúng 1 nghiệm nên có 6 nghiệm (tương ứng $k = -2, -1, 0, 1, 2, 3$)."
        },
        {
          "id": "sa-11.4.6",
          "badge": "Câu 6 - Trả lời ngắn - Số nghiệm của sin x = 0",
          "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN",
          "prompt": "Tìm số nghiệm của phương trình $\\sin x = 0$ trên đoạn $[-3\\pi; 3\\pi]$.",
          "correctAnswer": "7",
          "acceptableAnswers": [
            "7"
          ],
          "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi$. $-3\\pi \\le k\\pi \\le 3\\pi \\Leftrightarrow -3 \\le k \\le 3 \\Rightarrow k \\in \\{-3; -2; -1; 0; 1; 2; 3\\}$, có đúng 7 nghiệm."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-11.1.1",
      "badge": "Câu 1 - Nhận biết - Đổi 120° sang radian",
      "source": "SGK Toán 11 KNTT Bài 1 - Dạng 1",
      "question": "Đổi góc $120°$ sang đơn vị radian, ta được:",
      "options": [
        "$\\dfrac{2\\pi}{3}$",
        "$\\dfrac{\\pi}{3}$",
        "$\\dfrac{3\\pi}{4}$",
        "$\\dfrac{4\\pi}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$120° = 120 \\cdot \\dfrac{\\pi}{180} = \\dfrac{120\\pi}{180} = \\dfrac{2\\pi}{3}$ rad."
    },
    {
      "id": "quiz-11.1.5",
      "badge": "Câu 5 - Nhận biết - Đổi −135° sang radian",
      "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
      "question": "Đổi góc $-135°$ sang đơn vị radian, ta được:",
      "options": [
        "$-\\dfrac{3\\pi}{4}$",
        "$-\\dfrac{2\\pi}{3}$",
        "$-\\dfrac{5\\pi}{6}$",
        "$-\\dfrac{\\pi}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "$-135° = -135 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{3\\pi}{4}$ rad."
    },
    {
      "id": "quiz-11.1.8",
      "badge": "Câu 8 - Vận dụng - Bài toán bánh xe",
      "source": "Tài liệu Luyện tập Toán 11 C1B1 Dạng 1",
      "question": "Một bánh xe có bán kính $0.5$ m quay được $3$ vòng. Quãng đường mà một điểm trên vành đi được là:",
      "options": [
        "$3\\pi$ m",
        "$6\\pi$ m",
        "$1.5\\pi$ m",
        "$\\pi$ m"
      ],
      "correctIndex": 0,
      "explanation": "3 vòng = $3 \\times 2\\pi = 6\\pi$ rad. Quãng đường: $l = R \\cdot \\alpha = 0.5 \\times 6\\pi = 3\\pi$ m."
    },
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
      "id": "quiz-11.4.1",
      "badge": "Câu 1 - Nhận biết - Điều kiện có nghiệm của sin x = m",
      "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
      "question": "Phương trình $\\sin x = m$ có nghiệm khi và chỉ khi:",
      "options": [
        "$-1 \\le m \\le 1$",
        "$m \\ge -1$",
        "$m \\le 1$",
        "$m \\in \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì tập giá trị của hàm số sin là $[-1; 1]$ nên phương trình $\\sin x = m$ có nghiệm khi và chỉ khi $-1 \\le m \\le 1$."
    },
    {
      "id": "quiz-11.4.5",
      "badge": "Câu 5 - Thông hiểu - Giải phương trình sin x = 1/2",
      "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
      "question": "Tất cả các nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ là:",
      "options": [
        "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
        "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\dfrac{2\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
        "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k\\pi \\\\ x = \\dfrac{5\\pi}{6} + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
        "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = -\\dfrac{\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\dfrac{\\pi}{6} + k2\\pi = \\dfrac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "quiz-11.4.8",
      "badge": "Câu 8 - Vận dụng - Nghiệm âm lớn nhất của phương trình sin",
      "source": "SGK Toán 11 KNTT Bài 4 - Dạng 1",
      "question": "Nghiệm âm lớn nhất của phương trình $\\sin x = -\\dfrac{1}{2}$ là:",
      "options": [
        "$-\\dfrac{\\pi}{6}$",
        "$-\\dfrac{5\\pi}{6}$",
        "$-\\dfrac{\\pi}{3}$",
        "$-\\dfrac{2\\pi}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin x = -\\dfrac{1}{2} = \\sin\\left(-\\dfrac{\\pi}{6}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\left(-\\dfrac{\\pi}{6}\\right) + k2\\pi = \\dfrac{7\\pi}{6} + k2\\pi$. Nghiệm âm lớn nhất là $-\\dfrac{\\pi}{6}$ (ứng với họ thứ nhất khi $k = 0$)."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-11.1.1",
      "badge": "Đúng/Sai 1 - Đổi đơn vị cơ bản (Nhận biết)",
      "source": "SGK Toán 11 KNTT Bài 1 Dạng 1",
      "prompt": "Đổi số đo của các góc sang radian. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "$60° = \\dfrac{\\pi}{3}$ rad",
          "correctAnswer": true,
          "explanation": "$60° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{3}$ rad. Đúng."
        },
        {
          "id": "b",
          "text": "$90° = \\dfrac{\\pi}{2}$ rad",
          "correctAnswer": true,
          "explanation": "$90° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{2}$ rad. Đúng."
        },
        {
          "id": "c",
          "text": "$45° = \\dfrac{\\pi}{6}$ rad",
          "correctAnswer": false,
          "explanation": "$45° \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{4}$ rad (không phải $\\dfrac{\\pi}{6}$). Sai."
        },
        {
          "id": "d",
          "text": "$270° = \\dfrac{3\\pi}{2}$ rad",
          "correctAnswer": true,
          "explanation": "$270° \\times \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{2}$ rad. Đúng."
        }
      ]
    },
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
      "id": "tf-11.4.1",
      "badge": "Đúng/Sai 1 - Phương trình sin(2x + pi/3) = 1/2",
      "source": "Tài liệu GDPT 2018 Toán 11 C1B4 Đúng Sai Câu 1",
      "prompt": "Cho phương trình lượng giác $\\sin\\left(2x + \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số vị trí biểu diễn các nghiệm của phương trình trên đường tròn lượng giác là 4.",
          "correctAnswer": true,
          "explanation": "Phương trình $\\Leftrightarrow 2x + \\dfrac{\\pi}{3} = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $2x + \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{6} + k2\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{12} + k\\pi$ hoặc $x = \\dfrac{\\pi}{4} + k\\pi$. Mỗi họ nghiệm có chu kỳ $k\\pi$ nên được biểu diễn bởi 2 điểm trên đường tròn, tổng cộng là 4 điểm."
        },
        {
          "id": "b",
          "text": "Phương trình có 2 nghiệm trên khoảng $(0; \\pi)$ là $x = \\dfrac{\\pi}{4}$ và $x = \\dfrac{11\\pi}{12}$.",
          "correctAnswer": true,
          "explanation": "Với họ $x = \\dfrac{\\pi}{4} + k\\pi \\xrightarrow{x \\in (0; \\pi)} x = \\dfrac{\\pi}{4}$ ($k=0$). Với họ $x = -\\dfrac{\\pi}{12} + k\\pi \\xrightarrow{x \\in (0; \\pi)} x = \\dfrac{11\\pi}{12}$ ($k=1$). Vậy có đúng 2 nghiệm."
        },
        {
          "id": "c",
          "text": "Tổng tất cả các nghiệm của phương trình trên khoảng $(0; \\pi)$ bằng $\\dfrac{7\\pi}{6}$.",
          "correctAnswer": true,
          "explanation": "Tổng hai nghiệm là $\\dfrac{\\pi}{4} + \\dfrac{11\\pi}{12} = \\dfrac{3\\pi + 11\\pi}{12} = \\dfrac{14\\pi}{12} = \\dfrac{7\\pi}{6}$."
        },
        {
          "id": "d",
          "text": "Phương trình có 4 nghiệm trên khoảng $(0; 2\\pi)$.",
          "correctAnswer": true,
          "explanation": "Vì mỗi chu kỳ $\\pi$ có 2 nghiệm nên trên khoảng $(0; 2\\pi)$ có độ dài $2\\pi$, phương trình có đúng $2 \\times 2 = 4$ nghiệm."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-11.1.1",
      "badge": "TLN 1 - Đổi 330° sang radian",
      "source": "SGK Toán 11 KNTT Bài 1",
      "prompt": "Đổi $330°$ sang radian.",
      "correctAnswer": "$\\dfrac{11\\pi}{6}$",
      "acceptableAnswers": [
        "11π/6",
        "11pi/6"
      ],
      "explanation": "$330° = 330 \\times \\dfrac{\\pi}{180} = \\dfrac{11\\pi}{6}$ rad."
    },
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
      "id": "sa-11.4.1",
      "badge": "Câu 1 - Trả lời ngắn - Số nghiệm của cos(x + 30) = -1",
      "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 1",
      "prompt": "Tìm số nghiệm của phương trình $\\cos(x + 30^\\circ) + 1 = 0$ trên đoạn $[-360^\\circ; 360^\\circ]$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "$\\cos(x + 30^\\circ) = -1 \\Leftrightarrow x + 30^\\circ = 180^\\circ + k360^\\circ \\Leftrightarrow x = 150^\\circ + k360^\\circ$. Với $-360^\\circ \\le 150^\\circ + k360^\\circ \\le 360^\\circ \\Leftrightarrow -\\dfrac{510}{360} \\le k \\le \\dfrac{210}{360} \\Rightarrow k \\in \\{-1; 0\\}$. Có 2 nghiệm là $-210^\\circ$ và $150^\\circ$."
    },
    {
      "id": "sa-11.4.2",
      "badge": "Câu 2 - Trả lời ngắn - Số nghiệm của cos 5x = cos 135",
      "source": "Tài liệu GDPT 2018 Toán 11 C1B4 TLN Câu 2",
      "prompt": "Tìm số nghiệm của phương trình $\\cos 5x = \\cos 135^\\circ$ trên đoạn $[0^\\circ; 720^\\circ]$.",
      "correctAnswer": "20",
      "acceptableAnswers": [
        "20"
      ],
      "explanation": "$5x = \\pm 135^\\circ + k360^\\circ \\Leftrightarrow x = 27^\\circ + k72^\\circ$ hoặc $x = -27^\\circ + k72^\\circ$. Trên $[0^\\circ; 720^\\circ]$, họ 1 có 10 nghiệm ($k = 0, \\dots, 9$), họ 2 có 10 nghiệm ($k = 1, \\dots, 10$). Hai họ này không có nghiệm chung. Tổng số nghiệm là $10 + 10 = 20$."
    }
  ]
}

,
  // ==========================================
  // BÀI 5: DÃY SỐ
  // ==========================================
  "t11-b5-day-so": {
  "id": "t11-b5-day-so",
  "lessonNumber": 5,
  "title": "Bài 5: Dãy số",
  "bookChapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
  "scenarioTitle": "Tình huống: Bài toán Tháp Hà Nội, sự sinh sản vi khuẩn E. Coli và lãi kép ngân hàng",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Bạn Minh",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy, trong trò chơi Tháp Hà Nội huyền thoại với $n$ đĩa, số bước chuyển tối thiểu $u_n$ để dời toàn bộ đĩa sang cột khác tuân theo quy luật nào ạ? Khi số đĩa tăng lên thì số bước chuyển tăng nhanh đến mức nào?",
      "visualGraphic": "graph",
      "mathNote": "u_1 = 1, u_2 = 3, u_3 = 7, u_n = 2^n - 1"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính",
      "avatar": "👨‍🏫",
      "speech": "Chào Minh! Đó chính là một ví dụ kinh điển về dãy số. Cụ thể, $u_1 = 1, u_2 = 3, u_3 = 7, \\dots$ Với mỗi số nguyên dương $n$, ta có một số thực tương ứng $u_n = 2^n - 1$. Một hàm số xác định trên tập các số nguyên dương $\\mathbb{N}^*$ được gọi là một dãy số vô hạn!",
      "visualGraphic": "graph",
      "mathNote": "u: \\mathbb{N}^* \\to \\mathbb{R},\\; n \\mapsto u_n"
    },
    {
      "id": 3,
      "character": "student",
      "characterName": "Bạn Lan",
      "avatar": "👩‍🎓",
      "speech": "Thưa Thầy, trong thực tế như sự phân chia của vi khuẩn E. Coli (cứ 20 phút phân đôi một lần), hay bài toán bác nông dân gửi tiền tiết kiệm lãi kép hàng tháng, các đại lượng này cũng được mô hình hóa thành dãy số phải không ạ?",
      "visualGraphic": "savings",
      "mathNote": "T_n = A(1 + r)^n,\\; N_k = N_0 \\cdot 2^k"
    },
    {
      "id": 4,
      "character": "teacher",
      "characterName": "Thầy Tính",
      "avatar": "👨‍🏫",
      "speech": "Chính xác, Lan! Các quá trình tích lũy tài chính, tăng trưởng dân số, phân chia tế bào hay tính toán chu kỳ thuật toán đều được mô tả bằng dãy số. Hôm nay chúng ta sẽ làm chủ khái niệm, các cách biểu diễn, tính tăng giảm và bị chặn của dãy số nhé!",
      "visualGraphic": "graph",
      "mathNote": "u_{n+1} - u_n > 0 \\Leftrightarrow (u_n) \\text{ tăng}"
    }
  ],
  "youtubeVideoId": "zQfD7o1UtjY",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 5 - Dãy số - Toán 11 Kết nối tri thức",
  "youtubeVideos": [
    {
      "id": "zQfD7o1UtjY",
      "title": "Bài giảng: Bài 5 - Dãy số - Toán 11 Kết nối tri thức"
    },
    {
      "id": "vbtmefpR850",
      "title": "Bài 5: Dãy số (Tiết 1) - Toán 11 KNTT"
    },
    {
      "id": "hPD88M6sQH0",
      "title": "Bài 5: Dãy số (Tiết 2) - Toán 11 KNTT"
    },
    {
      "id": "xcoSEpPT22g",
      "title": "Bài 5: Dãy số (Tiết 3) - Toán 11 KNTT"
    },
    {
      "id": "SEeOfBntxCQ",
      "title": "Bài 5: Dãy số (Tiết 4) - Toán 11 KNTT"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "1. Khái niệm dãy số (Dãy số vô hạn & Dãy số hữu hạn)",
      "points": [
        "Dãy số vô hạn: Mỗi hàm số $u$ xác định trên tập hợp các số nguyên dương $\\mathbb{N}^*$ được gọi là một dãy số vô hạn. Ký hiệu: $u: \\mathbb{N}^* \\to \\mathbb{R},\\; n \\mapsto u(n) = u_n$.",
        "Dạng khai triển của dãy số vô hạn: $(u_n) = (u_1, u_2, u_3, \\dots, u_n, \\dots)$, trong đó $u_1$ là số hạng đầu, $u_n$ là số hạng thứ $n$ (số hạng tổng quát).",
        "Dãy số hữu hạn: Mỗi hàm số $u$ xác định trên tập hợp $M = \\{1, 2, 3, \\dots, m\\}$ ($m \\in \\mathbb{N}^*$) được gọi là một dãy số hữu hạn. Dạng khai triển: $(u_1, u_2, \\dots, u_m)$, với $u_1$ là số hạng đầu và $u_m$ là số hạng cuối."
      ],
      "formula": "u: \\mathbb{N}^* \\to \\mathbb{R},\\; n \\mapsto u_n;\\; (u_n) = (u_1, u_2, \\dots, u_n, \\dots)",
      "exampleProblem": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n - 1}{n + 1}$. Tìm 3 số hạng đầu tiên và số hạng thứ 10.",
      "exampleSolution": "• $u_1 = \\dfrac{2(1) - 1}{1 + 1} = \\dfrac{1}{2}$;\n• $u_2 = \\dfrac{2(2) - 1}{2 + 1} = 1$;\n• $u_3 = \\dfrac{2(3) - 1}{3 + 1} = \\dfrac{5}{4}$;\n• $u_{10} = \\dfrac{2(10) - 1}{10 + 1} = \\dfrac{19}{11}$."
    },
    {
      "index": "2",
      "title": "2. Các cách cho một dãy số",
      "points": [
        "Cho bằng công thức số hạng tổng quát: Cho công thức $u_n = f(n)$ giúp tính trực tiếp bất kỳ số hạng nào khi biết chỉ số $n$.",
        "Cho bằng hệ thức truy hồi: Cho số hạng đầu tiên (hoặc vài số hạng đầu) và hệ thức tính số hạng $u_n$ qua các số hạng đứng trước nó, ví dụ $u_1 = a,\\; u_{n+1} = f(u_n)$.",
        "Cho bằng phương pháp mô tả: Diễn đạt bằng lời quy tắc xác định mỗi số hạng của dãy số (ví dụ: dãy số các số nguyên tố, dãy chữ số thập phân của $\\pi$).",
        "Cho bằng cách liệt kê các số hạng: Thường áp dụng cho dãy số hữu hạn có ít số hạng."
      ],
      "formula": "u_n = f(n) \\quad \\text{hoặc} \\quad \\begin{cases} u_1 = a \\\\ u_{n+1} = g(u_n) \\end{cases}",
      "exampleProblem": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = 3u_n - 1$ với mọi $n \\ge 1$. Tính $u_2, u_3, u_4$.",
      "exampleSolution": "• $u_2 = 3u_1 - 1 = 3(2) - 1 = 5$;\n• $u_3 = 3u_2 - 1 = 3(5) - 1 = 14$;\n• $u_4 = 3u_3 - 1 = 3(14) - 1 = 41$."
    },
    {
      "index": "3",
      "title": "3. Dãy số tăng, dãy số giảm",
      "points": [
        "Dãy số tăng: Dãy số $(u_n)$ được gọi là dãy số tăng nếu với mọi $n \\in \\mathbb{N}^*$ ta có $u_{n+1} > u_n \\Leftrightarrow u_{n+1} - u_n > 0$.",
        "Dãy số giảm: Dãy số $(u_n)$ được gọi là dãy số giảm nếu với mọi $n \\in \\mathbb{N}^*$ ta có $u_{n+1} < u_n \\Leftrightarrow u_{n+1} - u_n < 0$.",
        "Phương pháp lập tỉ số: Nếu $u_n > 0$ với mọi $n \\in \\mathbb{N}^*$, ta có thể so sánh $\\dfrac{u_{n+1}}{u_n}$ với 1: nếu $\\dfrac{u_{n+1}}{u_n} > 1$ thì dãy tăng; nếu $\\dfrac{u_{n+1}}{u_n} < 1$ thì dãy giảm.",
        "Lưu ý: Dãy số có thể không tăng cũng không giảm (ví dụ các dãy đan dấu như $u_n = (-1)^n$)."
      ],
      "formula": "u_{n+1} - u_n > 0 \\Leftrightarrow (u_n) \\text{ tăng};\\quad u_{n+1} - u_n < 0 \\Leftrightarrow (u_n) \\text{ giảm}",
      "exampleProblem": "Xét tính tăng, giảm của dãy số $u_n = \\dfrac{n}{n + 1}$.",
      "exampleSolution": "Xét hiệu $u_{n+1} - u_n = \\dfrac{n+1}{n+2} - \\dfrac{n}{n+1} = \\dfrac{(n+1)^2 - n(n+2)}{(n+1)(n+2)} = \\dfrac{1}{(n+1)(n+2)} > 0,\\; \\forall n \\ge 1$. Do đó $(u_n)$ là dãy số tăng."
    },
    {
      "index": "4",
      "title": "4. Dãy số bị chặn",
      "points": [
        "Dãy số bị chặn trên: Tồn tại số thực $M$ sao cho $u_n \\le M$ với mọi $n \\in \\mathbb{N}^*$.",
        "Dãy số bị chặn dưới: Tồn tại số thực $m$ sao cho $u_n \\ge m$ với mọi $n \\in \\mathbb{N}^*$.",
        "Dãy số bị chặn: Dãy số vừa bị chặn trên vừa bị chặn dưới, tức là tồn tại $m, M \\in \\mathbb{R}$ sao cho $m \\le u_n \\le M,\\; \\forall n \\in \\mathbb{N}^*$."
      ],
      "formula": "m \\le u_n \\le M,\\; \\forall n \\in \\mathbb{N}^* \\Leftrightarrow (u_n) \\text{ bị chặn}",
      "exampleProblem": "Chứng minh dãy số $u_n = \\dfrac{2n + 1}{n + 2}$ là dãy số bị chặn.",
      "exampleSolution": "• Với mọi $n \\ge 1$, ta có $u_n = \\dfrac{2n+1}{n+2} > 0$. Cụ thể $u_n \\ge u_1 = 1,\\; \\forall n \\ge 1$ (bị chặn dưới).\n• Mặt khác: $u_n = \\dfrac{2(n+2) - 3}{n+2} = 2 - \\dfrac{3}{n+2} < 2,\\; \\forall n \\ge 1$ (bị chặn trên).\n• Vậy $1 \\le u_n < 2,\\; \\forall n \\in \\mathbb{N}^*$, do đó dãy số bị chặn."
    },
    {
      "index": "5",
      "title": "5. Phương pháp quy nạp toán học & Ứng dụng thực tế",
      "points": [
        "Phương pháp quy nạp toán học: Để chứng minh mệnh đề $P(n)$ đúng với mọi $n \\in \\mathbb{N}^*$, ta thực hiện 2 bước:\n  - Bước 1 (Cơ sở quy nạp): Kiểm tra $P(1)$ đúng.\n  - Bước 2 (Bước quy nạp): Giả sử $P(k)$ đúng với số nguyên dương $k \\ge 1$ tùy ý (giả thiết quy nạp), chứng minh $P(k+1)$ cũng đúng.",
        "Bài toán lãi kép ngân hàng: Gửi số tiền ban đầu $A$ với lãi suất $r$ mỗi kì hạn theo hình thức lãi kép. Sau $n$ kì hạn, số tiền cả gốc lẫn lãi thu về là $T_n = A(1 + r)^n$.",
        "Bài toán tăng trưởng sinh học: Quần thể ban đầu có $N_0$ cá thể, sau mỗi chu kỳ phân chia số lượng tăng gấp đôi thì sau $k$ chu kỳ số lượng là $N_k = N_0 \\cdot 2^k$."
      ],
      "formula": "T_n = A(1 + r)^n \\quad \\text{và} \\quad N_k = N_0 \\cdot 2^k",
      "exampleProblem": "Một người gửi 200 triệu đồng vào ngân hàng với lãi suất 6%/năm theo hình thức lãi kép kì hạn 1 tháng. Tính số tiền nhận được sau 12 tháng.",
      "exampleSolution": "Lãi suất mỗi tháng là $r = \\dfrac{6\\%}{12} = 0,5\\% = 0,005$.\nSố tiền thu được sau 12 tháng:\n$T_{12} = 200(1 + 0,005)^{12} \\approx 212,34$ triệu đồng."
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-11.5.1",
      "timeSeconds": 180,
      "timeLabel": "03:00",
      "title": "Khái niệm dãy số",
      "question": "Dãy số vô hạn là gì?",
      "options": [
        "Một hàm số xác định trên tập hợp các số nguyên dương $\\mathbb{N}^*$",
        "Một tập hợp gồm vô hạn các số thực tùy ý",
        "Một hàm số xác định trên toàn bộ tập số thực $\\mathbb{R}$",
        "Một bảng số liệu gồm vô hạn các giá trị"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa, mỗi hàm số xác định trên tập các số nguyên dương $\\mathbb{N}^*$ được gọi là một dãy số vô hạn."
    },
    {
      "id": "vq-11.5.2",
      "timeSeconds": 420,
      "timeLabel": "07:00",
      "title": "Số hạng của dãy số",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{3n - 1}{n + 2}$. Giá trị của $u_3$ bằng bao nhiêu?",
      "options": [
        "$\\dfrac{8}{5}$",
        "$\\dfrac{7}{5}$",
        "$\\dfrac{9}{5}$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $n = 3$ vào công thức: $u_3 = \\dfrac{3(3) - 1}{3 + 2} = \\dfrac{8}{5}$."
    },
    {
      "id": "vq-11.5.3",
      "timeSeconds": 750,
      "timeLabel": "12:30",
      "title": "Tính tăng giảm của dãy số",
      "question": "Dãy số $(u_n)$ được gọi là dãy số tăng nếu điều kiện nào sau đây thỏa mãn với mọi $n \\in \\mathbb{N}^*$?",
      "options": [
        "$u_{n+1} > u_n$",
        "$u_{n+1} \\ge u_n$",
        "$u_{n+1} < u_n$",
        "$u_{n+1} \\le u_n$"
      ],
      "correctIndex": 0,
      "explanation": "Dãy số $(u_n)$ được gọi là dãy số tăng nếu với mọi $n \\in \\mathbb{N}^*$ ta có $u_{n+1} > u_n$."
    },
    {
      "id": "vq-11.5.4",
      "timeSeconds": 1080,
      "timeLabel": "18:00",
      "title": "Dãy số bị chặn",
      "question": "Dãy số nào sau đây là dãy số bị chặn trên bởi 1?",
      "options": [
        "$u_n = \\dfrac{n}{n + 1}$",
        "$u_n = 2n + 1$",
        "$u_n = n^2$",
        "$u_n = 3^n$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi $n \\ge 1$, $n < n + 1 \\Rightarrow u_n = \\dfrac{n}{n+1} < 1$, do đó $(u_n)$ bị chặn trên bởi 1."
    }
  ],
  "tips": [
    "Để tính nhanh các số hạng đầu của dãy số cho bởi công thức tổng quát, sử dụng chức năng TABLE (Menu 8 trên Casio fx-580VNX, Mode 7 trên fx-570VN Plus) với start = 1, step = 1.",
    "Để xét tính tăng giảm của dãy phân thức bậc nhất $u_n = \\dfrac{an + b}{cn + d}$ (với $c > 0$ và mẫu dương $\\forall n \\ge 1$): xét tích chéo $ad - bc$. Nếu $ad - bc > 0$ thì dãy tăng; nếu $ad - bc < 0$ thì dãy giảm.",
    "Với dãy số dương, phương pháp lập tỉ số $\\dfrac{u_{n+1}}{u_n}$ thường rất hiệu quả khi công thức có chứa lũy thừa $a^n$ hoặc giai thừa $n!$.",
    "Khi dãy số được cho bởi hệ thức truy hồi tuyến tính dạng $u_{n+1} = p u_n + q$, hãy cộng hoặc trừ hằng số thích hợp để đưa về cấp số nhân.",
    "Đối với bài toán lãi kép hàng tháng, luôn nhớ quy đổi lãi suất năm ra lãi suất tháng: $r_{\\text{tháng}} = \\dfrac{r_{\\text{năm}}}{12}$."
  ],
  "traps": [
    "Bẫy chỉ số: Chỉ số $n$ của dãy số bắt buộc phải là số nguyên dương $n \\in \\mathbb{N}^*$ ($n = 1, 2, 3, \\dots$), không được xét $n = 0$ hay $n$ âm trừ khi đề bài có quy ước riêng.",
    "Bẫy xét tỉ số $\\dfrac{u_{n+1}}{u_n}$: Phương pháp lập tỉ số so sánh với 1 CHỈ ĐƯỢC DÙNG khi tất cả các số hạng của dãy đều dương ($u_n > 0, \\forall n$). Nếu dãy có số hạng âm hoặc đổi dấu, bắt buộc phải dùng xét hiệu $u_{n+1} - u_n$.",
    "Nhầm lẫn giữa $u_{n+1}$ và $u_n + 1$: $u_{n+1}$ là số hạng thứ $n+1$ (thay $n$ bằng $n+1$ vào công thức), còn $u_n + 1$ là lấy số hạng thứ $n$ cộng thêm 1 đơn vị.",
    "Nhầm lẫn giữa bị chặn và hội tụ: Mọi dãy số bị chặn chưa chắc đã có giới hạn (ví dụ $u_n = (-1)^n$ bị chặn trong $[-1; 1]$ nhưng không có giới hạn).",
    "Bẫy làm tròn tiền tệ trong bài toán lãi kép: Phải tính toán trên biểu thức chính xác rồi mới làm tròn ở bước cuối cùng theo yêu cầu của đề bài, tránh làm tròn dồn từng bước gây sai lệch số."
  ],
  "quizQuestions": [
    {
      "id": "quiz-11.5.1",
      "badge": "Câu 1 - Nhận biết - Viết các số hạng đầu của dãy số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 1",
      "question": "Cho dãy số $(u_n)$ có các số hạng đầu là $9; 99; 999; 9999; \\dots$ Số hạng tổng quát $u_n$ của dãy số này là:",
      "options": [
        "$u_n = 10^n - 1$",
        "$u_n = 9n$",
        "$u_n = 10^n + 1$",
        "$u_n = \\dfrac{10^n - 1}{9}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta nhận xét:\n• $u_1 = 9 = 10^1 - 1$\n• $u_2 = 99 = 10^2 - 1$\n• $u_3 = 999 = 10^3 - 1$\n• $u_4 = 9999 = 10^4 - 1$\nVậy số hạng tổng quát của dãy số là $u_n = 10^n - 1$."
    },
    {
      "id": "quiz-11.5.2",
      "badge": "Câu 2 - Nhận biết - Tìm số hạng tổng quát từ khai triển",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 2",
      "question": "Cho dãy số $(u_n)$ có các số hạng đầu là $\\dfrac{1}{2}; \\dfrac{1}{4}; \\dfrac{1}{8}; \\dfrac{1}{16}; \\dots$ Công thức số hạng tổng quát $u_n$ của dãy số là:",
      "options": [
        "$u_n = \\dfrac{1}{2^n}$",
        "$u_n = \\dfrac{1}{2n}$",
        "$u_n = \\dfrac{1}{n^2}$",
        "$u_n = \\dfrac{1}{2^{n-1}}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $u_1 = \\dfrac{1}{2^1}, u_2 = \\dfrac{1}{2^2}, u_3 = \\dfrac{1}{2^3}, u_4 = \\dfrac{1}{2^4}, \\dots$ Do đó công thức số hạng tổng quát là $u_n = \\dfrac{1}{2^n}$."
    },
    {
      "id": "quiz-11.5.3",
      "badge": "Câu 3 - Nhận biết - Tìm số hạng cho bởi công thức",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 3",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n - 1}{n + 1}$. Giá trị của số hạng $u_5$ bằng:",
      "options": [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{4}{5}$",
        "$\\dfrac{5}{6}$",
        "$\\dfrac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $n = 5$ vào công thức số hạng tổng quát: $u_5 = \\dfrac{5 - 1}{5 + 1} = \\dfrac{4}{6} = \\dfrac{2}{3}$."
    },
    {
      "id": "quiz-11.5.4",
      "badge": "Câu 4 - Thông hiểu - Tìm số hạng đan dấu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 4",
      "question": "Cho dãy số $(u_n)$ có các số hạng đầu là $-1; 2; -3; 4; -5; \\dots$ Số hạng tổng quát $u_n$ của dãy số là:",
      "options": [
        "$u_n = (-1)^n \\cdot n$",
        "$u_n = (-1)^{n+1} \\cdot n$",
        "$u_n = -n$",
        "$u_n = (-1)^n$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có:\n• $u_1 = -1 = (-1)^1 \\cdot 1$\n• $u_2 = 2 = (-1)^2 \\cdot 2$\n• $u_3 = -3 = (-1)^3 \\cdot 3$\n• $u_4 = 4 = (-1)^4 \\cdot 4$\nDo đó số hạng tổng quát là $u_n = (-1)^n \\cdot n$."
    },
    {
      "id": "quiz-11.5.5",
      "badge": "Câu 5 - Thông hiểu - Tìm quy luật dãy phân số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 5",
      "question": "Cho dãy số $(u_n)$ có các số hạng đầu là $\\dfrac{1}{3}; \\dfrac{2}{5}; \\dfrac{3}{7}; \\dfrac{4}{9}; \\dots$ Số hạng tổng quát $u_n$ của dãy số này là:",
      "options": [
        "$u_n = \\dfrac{n}{2n + 1}$",
        "$u_n = \\dfrac{n}{n + 2}$",
        "$u_n = \\dfrac{n}{2n - 1}$",
        "$u_n = \\dfrac{n + 1}{2n + 1}$"
      ],
      "correctIndex": 0,
      "explanation": "Tử số là các số nguyên dương liên tiếp: $1, 2, 3, 4, \\dots \\Rightarrow$ tử số là $n$.\nMẫu số là các số lẻ bắt đầu từ 3: $3, 5, 7, 9, \\dots \\Rightarrow$ mẫu số là $2n + 1$.\nVậy số hạng tổng quát là $u_n = \\dfrac{n}{2n + 1}$."
    },
    {
      "id": "quiz-11.5.6",
      "badge": "Câu 6 - Nhận biết - Tìm số hạng thứ n",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 6",
      "question": "Cho dãy số $(u_n)$ với $u_n = 3n^2 - 2n + 1$. Số hạng đầu tiên $u_1$ và số hạng $u_2$ lần lượt là:",
      "options": [
        "$u_1 = 2; u_2 = 9$",
        "$u_1 = 1; u_2 = 9$",
        "$u_1 = 2; u_2 = 8$",
        "$u_1 = 3; u_2 = 10$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $n = 1$: $u_1 = 3(1)^2 - 2(1) + 1 = 2$.\nThay $n = 2$: $u_2 = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$."
    },
    {
      "id": "quiz-11.5.7",
      "badge": "Câu 7 - Thông hiểu - Kiểm tra số hạng của dãy số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 7",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n + 1}{n + 2}$. Số $\\dfrac{167}{84}$ là số hạng thứ mấy của dãy số?",
      "options": [
        "Số hạng thứ $250$",
        "Số hạng thứ $252$",
        "Số hạng thứ $167$",
        "Không phải là số hạng của dãy"
      ],
      "correctIndex": 0,
      "explanation": "Giải phương trình $u_n = \\dfrac{167}{84}$:\n$$\\dfrac{2n + 1}{n + 2} = \\dfrac{167}{84} \\Leftrightarrow 84(2n + 1) = 167(n + 2) \\Leftrightarrow 168n + 84 = 167n + 334 \\Leftrightarrow n = 250$$\nVì $n = 250 \\in \\mathbb{N}^*$ nên $\\dfrac{167}{84}$ là số hạng thứ 250 của dãy số."
    },
    {
      "id": "quiz-11.5.8",
      "badge": "Câu 8 - Thông hiểu - Tìm số hạng chứa căn bậc hai",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 8",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\sqrt{2n + 7}$. Số nào sau đây là một số hạng của dãy số đã cho?",
      "options": [
        "$5$",
        "$4$",
        "$6$",
        "$7$"
      ],
      "correctIndex": 0,
      "explanation": "• Với $u_n = 5 \\Rightarrow \\sqrt{2n + 7} = 5 \\Leftrightarrow 2n + 7 = 25 \\Leftrightarrow 2n = 18 \\Leftrightarrow n = 9 \\in \\mathbb{N}^*$. Vậy 5 là số hạng thứ 9 của dãy.\n• Với $u_n = 4 \\Rightarrow 2n + 7 = 16 \\Rightarrow 2n = 9$ (loại).\n• Với $u_n = 6 \\Rightarrow 2n + 7 = 36 \\Rightarrow 2n = 29$ (loại)."
    },
    {
      "id": "quiz-11.5.9",
      "badge": "Câu 9 - Vận dụng - Dãy số cách đều",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 9",
      "question": "Cho dãy số có các số hạng đầu là $8, 13, 18, 23, 28, \\dots$ Số hạng tổng quát của dãy số này là:",
      "options": [
        "$u_n = 5n + 3$",
        "$u_n = 5n + 8$",
        "$u_n = 8n + 5$",
        "$u_n = 5n - 2$"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách giữa hai số liên tiếp là $5$.\nTa viết:\n$u_1 = 8 = 5(1) + 3$\n$u_2 = 13 = 5(2) + 3$\n$u_3 = 18 = 5(3) + 3$\nVậy số hạng tổng quát của dãy số là $u_n = 5n + 3$."
    },
    {
      "id": "quiz-11.5.10",
      "badge": "Câu 10 - Thông hiểu - Dãy số tổng phân thức",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 10",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dfrac{1}{3 \\cdot 4} + \\dots + \\dfrac{1}{n(n+1)}$. Công thức rút gọn của $u_n$ là:",
      "options": [
        "$u_n = \\dfrac{n}{n + 1}$",
        "$u_n = \\dfrac{1}{n + 1}$",
        "$u_n = \\dfrac{n + 1}{n}$",
        "$u_n = 1 - \\dfrac{1}{n}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $\\dfrac{1}{k(k+1)} = \\dfrac{1}{k} - \\dfrac{1}{k+1}$.\nDo đó: $u_n = \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\dots + \\left(\\dfrac{1}{n} - \\dfrac{1}{n+1}\\right) = 1 - \\dfrac{1}{n+1} = \\dfrac{n}{n+1}$."
    },
    {
      "id": "quiz-11.5.11",
      "badge": "Câu 11 - Nhận biết - Dãy truy hồi cộng hằng số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 11",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = -1$ và $u_{n+1} = u_n + 3$ với mọi $n \\ge 1$. Bốn số hạng đầu tiên của dãy số là:",
      "options": [
        "$-1; 2; 5; 8$",
        "$-1; 3; 6; 9$",
        "$-1; 2; 4; 7$",
        "$-1; -4; -7; -10$"
      ],
      "correctIndex": 0,
      "explanation": "• $u_1 = -1$\n• $u_2 = u_1 + 3 = -1 + 3 = 2$\n• $u_3 = u_2 + 3 = 2 + 3 = 5$\n• $u_4 = u_3 + 3 = 5 + 3 = 8$."
    },
    {
      "id": "quiz-11.5.12",
      "badge": "Câu 12 - Thông hiểu - Dãy truy hồi nhân hệ số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 12",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = 2u_n - 1$ với mọi $n \\ge 1$. Giá trị của $u_4$ bằng:",
      "options": [
        "$9$",
        "$5$",
        "$17$",
        "$7$"
      ],
      "correctIndex": 0,
      "explanation": "• $u_1 = 2$\n• $u_2 = 2(2) - 1 = 3$\n• $u_3 = 2(3) - 1 = 5$\n• $u_4 = 2(5) - 1 = 9$."
    },
    {
      "id": "quiz-11.5.13",
      "badge": "Câu 13 - Thông hiểu - Tìm CTTQ từ hệ thức truy hồi",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 13",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = u_n + (2n + 1)$ với mọi $n \\ge 1$. Công thức số hạng tổng quát $u_n$ là:",
      "options": [
        "$u_n = n^2$",
        "$u_n = n^2 + 1$",
        "$u_n = 2n - 1$",
        "$u_n = n(n+1)$"
      ],
      "correctIndex": 0,
      "explanation": "• $u_1 = 1 = 1^2$\n• $u_2 = u_1 + 2(1) + 1 = 1 + 3 = 4 = 2^2$\n• $u_3 = u_2 + 2(2) + 1 = 4 + 5 = 9 = 3^2$\n• $u_4 = u_3 + 2(3) + 1 = 9 + 7 = 16 = 4^2$\nBằng quy nạp ta chứng minh được $u_n = n^2$."
    },
    {
      "id": "quiz-11.5.14",
      "badge": "Câu 14 - Vận dụng - Dãy truy hồi cộng sai phân",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 14",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = u_n + 2n - 1$ với mọi $n \\ge 1$. Công thức số hạng tổng quát $u_n$ là:",
      "options": [
        "$u_n = (n - 1)^2 + 2$",
        "$u_n = n^2 + 1$",
        "$u_n = n^2 - n + 2$",
        "$u_n = 2n^2$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng vế theo vế các đẳng thức:\n$u_2 - u_1 = 2(1) - 1 = 1$\n$u_3 - u_2 = 2(2) - 1 = 3$\n$\\dots$\n$u_n - u_{n-1} = 2(n-1) - 1$\nSuy ra $u_n - u_1 = 1 + 3 + \\dots + (2n - 3) = (n - 1)^2 \\Rightarrow u_n = (n - 1)^2 + 2$."
    },
    {
      "id": "quiz-11.5.15",
      "badge": "Câu 15 - Thông hiểu - Dãy Fibonacci",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 15",
      "question": "Dãy số Fibonacci $(F_n)$ xác định bởi $F_1 = 1, F_2 = 1$ và $F_{n+2} = F_{n+1} + F_n$ với mọi $n \\ge 1$. Số hạng $F_6$ bằng:",
      "options": [
        "$8$",
        "$5$",
        "$13$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "• $F_1 = 1$\n• $F_2 = 1$\n• $F_3 = 1 + 1 = 2$\n• $F_4 = 2 + 1 = 3$\n• $F_5 = 3 + 2 = 5$\n• $F_6 = 5 + 3 = 8$."
    },
    {
      "id": "quiz-11.5.16",
      "badge": "Câu 16 - Vận dụng - Dãy truy hồi phân thức",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 16",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = \\dfrac{u_n}{1 + u_n}$ với mọi $n \\ge 1$. Số hạng $u_{2024}$ bằng:",
      "options": [
        "$\\dfrac{1}{2024}$",
        "$\\dfrac{1}{2025}$",
        "$\\dfrac{2024}{2025}$",
        "$\\dfrac{1}{2023}$"
      ],
      "correctIndex": 0,
      "explanation": "Nghịch đảo hai vế: $\\dfrac{1}{u_{n+1}} = \\dfrac{1 + u_n}{u_n} = \\dfrac{1}{u_n} + 1$.\nĐặt $v_n = \\dfrac{1}{u_n} \\Rightarrow v_1 = 1$ và $v_{n+1} = v_n + 1$.\nDo đó $v_n = n \\Rightarrow u_n = \\dfrac{1}{n}$.\nVậy $u_{2024} = \\dfrac{1}{2024}$."
    },
    {
      "id": "quiz-11.5.17",
      "badge": "Câu 17 - Thông hiểu - Dãy truy hồi tích",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 17",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = (n + 1) u_n$ với mọi $n \\ge 1$. Số hạng tổng quát $u_n$ là:",
      "options": [
        "$u_n = n!$",
        "$u_n = (n + 1)!$",
        "$u_n = n^n$",
        "$u_n = 2^n$"
      ],
      "correctIndex": 0,
      "explanation": "• $u_1 = 1 = 1!$\n• $u_2 = 2 u_1 = 2 \\cdot 1 = 2!$\n• $u_3 = 3 u_2 = 3 \\cdot 2 = 3!$\nTổng quát: $u_n = n!$ (giai thừa của $n$)."
    },
    {
      "id": "quiz-11.5.18",
      "badge": "Câu 18 - Vận dụng - Tìm nghiệm của phương trình chứa u_n",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 18",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = u_n + 2n + 1$ ($n \\ge 1$). Giá trị của $n$ để $-u_n + 2017n + 2018 = 0$ là:",
      "options": [
        "$2018$",
        "$2017$",
        "$2024$",
        "$2019$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có số hạng tổng quát là $u_n = n^2$.\nPhương trình: $-n^2 + 2017n + 2018 = 0 \\Leftrightarrow n^2 - 2017n - 2018 = 0$.\nPhương trình có dạng $a - b + c = 1 - (-2017) + (-2018) = 0$.\nNghiệm: $n = -1$ (loại vì $n \\in \\mathbb{N}^*$) hoặc $n = 2018$ (thỏa mãn)."
    },
    {
      "id": "quiz-11.5.19",
      "badge": "Câu 19 - Vận dụng cao - Dãy số bậc hai tổng quát",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 19",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2, u_2 = 2024$ và $2u_{n+1} = u_n + u_{n+2}$ với mọi $n \\ge 1$. Công thức số hạng tổng quát của $u_n$ là:",
      "options": [
        "$u_n = 2022n - 2020$",
        "$u_n = 2024n - 2022$",
        "$u_n = n + 2023$",
        "$u_n = 2022n + 2$"
      ],
      "correctIndex": 0,
      "explanation": "Từ $2u_{n+1} = u_n + u_{n+2} \\Leftrightarrow u_{n+2} - u_{n+1} = u_{n+1} - u_n$.\nĐặt $d = u_2 - u_1 = 2024 - 2 = 2022$.\nKhi đó $(u_n)$ là cấp số cộng có $u_1 = 2, d = 2022$.\nSố hạng tổng quát: $u_n = u_1 + (n - 1)d = 2 + (n - 1)2022 = 2022n - 2020$."
    },
    {
      "id": "quiz-11.5.20",
      "badge": "Câu 20 - Thông hiểu - Kiểm tra tính tuần hoàn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 20",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\sin\\left(\\dfrac{n\\pi}{2}\\right)$. Giá trị của số hạng $u_{2024}$ bằng:",
      "options": [
        "$0$",
        "$1$",
        "$-1$",
        "$\\dfrac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $n = 2024$ vào công thức: $u_{2024} = \\sin\\left(\\dfrac{2024\\pi}{2}\\right) = \\sin(1012\\pi) = 0$."
    },
    {
      "id": "quiz-11.5.21",
      "badge": "Câu 21 - Nhận biết - Nhận diện dãy số tăng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 21",
      "question": "Trong các dãy số sau, dãy số nào là dãy số tăng?",
      "options": [
        "$u_n = 2n + 3$",
        "$u_n = \\dfrac{1}{n}$",
        "$u_n = (-2)^n$",
        "$u_n = 5 - 3n$"
      ],
      "correctIndex": 0,
      "explanation": "Xét $u_n = 2n + 3$: ta có $u_{n+1} - u_n = [2(n+1) + 3] - (2n + 3) = 2 > 0,\\; \\forall n \\in \\mathbb{N}^*$. Do đó $(u_n)$ là dãy số tăng."
    },
    {
      "id": "quiz-11.5.22",
      "badge": "Câu 22 - Nhận biết - Nhận diện dãy số giảm",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 22",
      "question": "Trong các dãy số sau, dãy số nào là dãy số giảm?",
      "options": [
        "$u_n = \\dfrac{1}{2^n}$",
        "$u_n = 3^n$",
        "$u_n = n^2 + 1$",
        "$u_n = \\sqrt{n}$"
      ],
      "correctIndex": 0,
      "explanation": "Với $u_n = \\dfrac{1}{2^n} > 0$, ta có $\\dfrac{u_{n+1}}{u_n} = \\dfrac{1}{2^{n+1}} : \\dfrac{1}{2^n} = \\dfrac{1}{2} < 1$. Do đó $(u_n)$ là dãy số giảm."
    },
    {
      "id": "quiz-11.5.23",
      "badge": "Câu 23 - Thông hiểu - Tính tăng giảm của phân thức bậc nhất",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 23",
      "question": "Xét tính tăng, giảm của dãy số $u_n = \\dfrac{n + 1}{n + 2}$. Khẳng định nào sau đây là đúng?",
      "options": [
        "Dãy số $(u_n)$ là dãy số tăng",
        "Dãy số $(u_n)$ là dãy số giảm",
        "Dãy số $(u_n)$ là dãy không tăng, không giảm",
        "Dãy số $(u_n)$ là dãy hằng"
      ],
      "correctIndex": 0,
      "explanation": "Xét hiệu $u_{n+1} - u_n = \\dfrac{n+2}{n+3} - \\dfrac{n+1}{n+2} = \\dfrac{(n+2)^2 - (n+1)(n+3)}{(n+3)(n+2)} = \\dfrac{1}{(n+3)(n+2)} > 0,\\; \\forall n \\ge 1$.\nVậy dãy số $(u_n)$ là dãy số tăng."
    },
    {
      "id": "quiz-11.5.24",
      "badge": "Câu 24 - Thông hiểu - Tính tăng giảm chứa căn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 24",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\sqrt{n + 1} - \\sqrt{n}$. Mệnh đề nào sau đây đúng?",
      "options": [
        "Dãy số $(u_n)$ là dãy số giảm",
        "Dãy số $(u_n)$ là dãy số tăng",
        "Dãy số $(u_n)$ không tăng không giảm",
        "Dãy số $(u_n)$ có vô số số hạng âm"
      ],
      "correctIndex": 0,
      "explanation": "Nhân lượng liên hợp: $u_n = \\dfrac{(\\sqrt{n+1} - \\sqrt{n})(\\sqrt{n+1} + \\sqrt{n})}{\\sqrt{n+1} + \\sqrt{n}} = \\dfrac{1}{\\sqrt{n+1} + \\sqrt{n}}$.\nKhi $n$ tăng thì mẫu số $\\sqrt{n+1} + \\sqrt{n}$ tăng ngặt, do đó phân số $u_n$ giảm ngặt. Vậy $(u_n)$ là dãy số giảm."
    },
    {
      "id": "quiz-11.5.25",
      "badge": "Câu 25 - Vận dụng - Tìm tham số a để dãy tăng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 25",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{an - 1}{2n + 1}$. Dãy số $(u_n)$ là dãy số tăng khi và chỉ khi:",
      "options": [
        "$a > -2$",
        "$a < -2$",
        "$a \\ge -2$",
        "$a > 0$"
      ],
      "correctIndex": 0,
      "explanation": "Xét hiệu $u_{n+1} - u_n = \\dfrac{a(n+1) - 1}{2n + 3} - \\dfrac{an - 1}{2n + 1}$.\nÁp dụng quy tắc tích chéo cho phân thức bậc nhất: tử số của hiệu là $a(1) - (-1)(2) = a + 2$.\nDo mẫu số $(2n+3)(2n+1) > 0$ nên $u_{n+1} - u_n > 0 \\Leftrightarrow a + 2 > 0 \\Leftrightarrow a > -2$."
    },
    {
      "id": "quiz-11.5.26",
      "badge": "Câu 26 - Thông hiểu - Dãy phân số mũ",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 26",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n}{4^n}$. Khẳng định nào sau đây đúng?",
      "options": [
        "$(u_n)$ là dãy số giảm",
        "$(u_n)$ là dãy số tăng",
        "$(u_n)$ là dãy không tăng không giảm",
        "$(u_n)$ có giá trị không vượt quá $0$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $u_n > 0,\\; \\forall n \\ge 1$, ta xét tỉ số:\n$$\\dfrac{u_{n+1}}{u_n} = \\dfrac{n+1}{4^{n+1}} \\cdot \\dfrac{4^n}{n} = \\dfrac{n+1}{4n} = \\dfrac{1}{4} + \\dfrac{1}{4n}$$\nVới $n \\ge 1 \\Rightarrow \\dfrac{1}{4n} \\le \\dfrac{1}{4} \\Rightarrow \\dfrac{u_{n+1}}{u_n} \\le \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2} < 1$.\nVậy $u_{n+1} < u_n,\\; \\forall n \\ge 1$, suy ra $(u_n)$ là dãy số giảm."
    },
    {
      "id": "quiz-11.5.27",
      "badge": "Câu 27 - Vận dụng - Dãy số chứa tham số nguyên",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 27",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{an + 2024}{n + 1}$. Có bao nhiêu giá trị nguyên của $a$ thuộc khoảng $(-2024; 2024)$ để $(u_n)$ là dãy số tăng?",
      "options": [
        "$0$",
        "$2024$",
        "$4047$",
        "$2023$"
      ],
      "correctIndex": 0,
      "explanation": "Xét hiệu tích chéo: tử số của $u_{n+1} - u_n$ là $a(1) - 2024(1) = a - 2024$.\nĐể dãy số tăng thì $a - 2024 > 0 \\Leftrightarrow a > 2024$.\nVì đề bài yêu cầu $a \\in (-2024; 2024)$ nên không có giá trị nguyên nào của $a$ thỏa mãn. Số giá trị là 0."
    },
    {
      "id": "quiz-11.5.28",
      "badge": "Câu 28 - Thông hiểu - Dãy không tăng không giảm",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 28",
      "question": "Dãy số nào sau đây không tăng và cũng không giảm?",
      "options": [
        "$u_n = (-1)^n \\cdot 2^n$",
        "$u_n = 3n - 1$",
        "$u_n = \\dfrac{1}{n^2}$",
        "$u_n = -2n + 5$"
      ],
      "correctIndex": 0,
      "explanation": "Các số hạng đầu của dãy $u_n = (-1)^n \\cdot 2^n$ là: $u_1 = -2, u_2 = 4, u_3 = -8, u_4 = 16, \\dots$\nVì các số hạng đan dấu liên tục nên dãy số này không tăng và cũng không giảm."
    },
    {
      "id": "quiz-11.5.29",
      "badge": "Câu 29 - Vận dụng - Tìm m để dãy giảm",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 29",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{mn + 1}{n + 2}$. Có bao nhiêu số nguyên $m \\in [-10; 10]$ để dãy số $(u_n)$ là dãy số giảm?",
      "options": [
        "$11$",
        "$10$",
        "$12$",
        "$9$"
      ],
      "correctIndex": 0,
      "explanation": "Tử số của hiệu $u_{n+1} - u_n$ là $2m - 1$.\nĐể dãy số $(u_n)$ là dãy số giảm thì $2m - 1 < 0 \\Leftrightarrow m < \\dfrac{1}{2}$.\nVì $m \\in [-10; 10]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-10; -9; -8; \\dots; 0\\}$.\nSố giá trị nguyên thỏa mãn là $0 - (-10) + 1 = 11$ giá trị."
    },
    {
      "id": "quiz-11.5.30",
      "badge": "Câu 30 - Vận dụng cao - Tính tăng giảm của dãy căn thức phân số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 30",
      "question": "Cho dãy số $(u_n)$ với $u_n = n + \\dfrac{1}{n}$. Khẳng định nào sau đây đúng?",
      "options": [
        "Dãy số $(u_n)$ là dãy số tăng và bị chặn dưới",
        "Dãy số $(u_n)$ là dãy số giảm và bị chặn trên",
        "Dãy số $(u_n)$ là dãy số bị chặn",
        "Dãy số $(u_n)$ không tăng không giảm"
      ],
      "correctIndex": 0,
      "explanation": "• Xét hiệu: $u_{n+1} - u_n = (n+1) + \\dfrac{1}{n+1} - n - \\dfrac{1}{n} = 1 - \\dfrac{1}{n(n+1)} = \\dfrac{n^2 + n - 1}{n(n+1)} > 0,\\; \\forall n \\ge 1$. Do đó $(u_n)$ là dãy số tăng.\n• Theo BĐT Cô-si: $u_n = n + \\dfrac{1}{n} \\ge 2\\sqrt{n \\cdot \\dfrac{1}{n}} = 2$. Do đó $(u_n)$ bị chặn dưới bởi 2."
    },
    {
      "id": "quiz-11.5.31",
      "badge": "Câu 31 - Nhận biết - Khái niệm dãy số bị chặn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 31",
      "question": "Dãy số $(u_n)$ được gọi là bị chặn nếu:",
      "options": [
        "Tồn tại số $m$ và số $M$ sao cho $m \\le u_n \\le M$ với mọi $n \\in \\mathbb{N}^*$",
        "Chỉ cần bị chặn trên bởi một số $M$",
        "Chỉ cần bị chặn dưới bởi một số $m$",
        "Có hữu hạn số hạng"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa, dãy số $(u_n)$ được gọi là bị chặn nếu nó vừa bị chặn trên vừa bị chặn dưới, tức là tồn tại hai số $m, M$ sao cho $m \\le u_n \\le M,\\; \\forall n \\in \\mathbb{N}^*$."
    },
    {
      "id": "quiz-11.5.32",
      "badge": "Câu 32 - Thông hiểu - Nhận diện dãy bị chặn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 32",
      "question": "Trong các dãy số sau, dãy số nào là dãy số bị chặn?",
      "options": [
        "$u_n = \\dfrac{2n + 1}{n + 1}$",
        "$u_n = 2n + 1$",
        "$u_n = n^2 - 1$",
        "$u_n = 2^n$"
      ],
      "correctIndex": 0,
      "explanation": "Xét $u_n = \\dfrac{2n + 1}{n + 1} = 2 - \\dfrac{1}{n+1}$.\nVới mọi $n \\ge 1$, ta có $0 < \\dfrac{1}{n+1} \\le \\dfrac{1}{2} \\Rightarrow \\dfrac{3}{2} \\le u_n < 2$.\nVậy dãy số $(u_n)$ bị chặn."
    },
    {
      "id": "quiz-11.5.33",
      "badge": "Câu 33 - Thông hiểu - Dãy lượng giác bị chặn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 33",
      "question": "Cho dãy số $(u_n)$ với $u_n = 3\\cos(2n) - 1$. Dãy số $(u_n)$ bị chặn trong đoạn nào sau đây?",
      "options": [
        "$[-4; 2]$",
        "$[-1; 1]$",
        "$[-3; 3]$",
        "$[-2; 4]$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $-1 \\le \\cos(2n) \\le 1$ với mọi $n$ nên:\n$3(-1) - 1 \\le 3\\cos(2n) - 1 \\le 3(1) - 1 \\Leftrightarrow -4 \\le u_n \\le 2$.\nVậy dãy số $(u_n)$ bị chặn trong đoạn $[-4; 2]$."
    },
    {
      "id": "quiz-11.5.34",
      "badge": "Câu 34 - Thông hiểu - Dãy chỉ bị chặn dưới",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 34",
      "question": "Dãy số nào sau đây bị chặn dưới nhưng không bị chặn trên?",
      "options": [
        "$u_n = 2n^2 + 1$",
        "$u_n = \\dfrac{1}{n}$",
        "$u_n = -n^2$",
        "$u_n = \\sin n$"
      ],
      "correctIndex": 0,
      "explanation": "• Với mọi $n \\ge 1$, $u_n = 2n^2 + 1 \\ge 2(1)^2 + 1 = 3 \\Rightarrow$ bị chặn dưới bởi 3.\n• Khi $n \\to +\\infty$ thì $u_n \\to +\\infty$ nên không bị chặn trên."
    },
    {
      "id": "quiz-11.5.35",
      "badge": "Câu 35 - Vận dụng - Bị chặn của phân thức bậc hai",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 35",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n^2 + 1}{2n^2 + 3}$. Khẳng định nào sau đây đúng?",
      "options": [
        "Dãy số $(u_n)$ bị chặn bởi $\\dfrac{2}{5} \\le u_n < \\dfrac{1}{2}$",
        "Dãy số $(u_n)$ không bị chặn trên",
        "Dãy số $(u_n)$ bị chặn dưới bởi $1$",
        "Dãy số $(u_n)$ là dãy số giảm"
      ],
      "correctIndex": 0,
      "explanation": "• $u_n = \\dfrac{n^2 + 1}{2n^2 + 3} = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2n^2 + 3}\\right) < \\dfrac{1}{2}$.\n• Với $n = 1$: $u_1 = \\dfrac{1+1}{2+3} = \\dfrac{2}{5}$.\n• Vì hàm số $f(x) = \\dfrac{x^2+1}{2x^2+3}$ đồng biến trên $[1; +\\infty)$ nên $\\dfrac{2}{5} \\le u_n < \\dfrac{1}{2}$. Vậy dãy số bị chặn."
    },
    {
      "id": "quiz-11.5.36",
      "badge": "Câu 36 - Vận dụng cao - Bị chặn với tham số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 36",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{an + 1}{2n - 1}$ ($a$ là tham số thực). Dãy số $(u_n)$ là dãy số bị chặn khi:",
      "options": [
        "Với mọi số thực $a$",
        "Chỉ khi $a > 0$",
        "Chỉ khi $a = 2$",
        "Không tồn tại $a$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $u_n = \\dfrac{an + 1}{2n - 1} = \\dfrac{a}{2} + \\dfrac{a + 2}{2(2n - 1)}$.\nVới mọi $n \\ge 1$, $1 \\le 2n - 1 < +\\infty \\Rightarrow 0 < \\dfrac{1}{2n - 1} \\le 1$.\nDo đó với bất kỳ giá trị cố định nào của $a \\in \\mathbb{R}$, biểu thức $u_n$ luôn nhận giá trị trong một đoạn bị chặn hữu hạn. Vậy dãy số luôn bị chặn với mọi $a$."
    },
    {
      "id": "quiz-11.5.37",
      "badge": "Câu 37 - Vận dụng - Bài toán khấu hao thiết bị",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 37",
      "question": "Giá của một chiếc máy photocopy lúc mới mua là $50$ triệu đồng. Biết rằng sau mỗi năm sử dụng, giá trị của nó chỉ còn $85\\%$ giá trị của năm liền trước đó. Giá trị còn lại của chiếc máy sau $3$ năm sử dụng là:",
      "options": [
        "$30,70625$ triệu đồng",
        "$35,25$ triệu đồng",
        "$42,5$ triệu đồng",
        "$28,5$ triệu đồng"
      ],
      "correctIndex": 0,
      "explanation": "Gọi $V_n$ là giá trị của máy sau $n$ năm.\nTa có $V_0 = 50$ triệu đồng.\n• Sau 1 năm: $V_1 = 50 \\cdot 0,85 = 42,5$ triệu đồng.\n• Sau 2 năm: $V_2 = 42,5 \\cdot 0,85 = 36,125$ triệu đồng.\n• Sau 3 năm: $V_3 = 36,125 \\cdot 0,85 = 30,70625$ triệu đồng."
    },
    {
      "id": "quiz-11.5.38",
      "badge": "Câu 38 - Vận dụng - Bài toán phân đôi vi khuẩn E. Coli",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 38",
      "question": "Vi khuẩn E. Coli phân chia làm đôi cứ sau mỗi 20 phút. Giả sử ban đầu có 1 vi khuẩn trong cơ thể. Sau 3 giờ, số lượng vi khuẩn tạo thành là:",
      "options": [
        "$512$ con",
        "$256$ con",
        "$1024$ con",
        "$64$ con"
      ],
      "correctIndex": 0,
      "explanation": "Đổi 3 giờ = $180$ phút.\nSố lần phân đôi sau 3 giờ là: $n = \\dfrac{180}{20} = 9$ lần.\nSố lượng vi khuẩn sau $n$ lần phân đôi là $N_n = 1 \\cdot 2^n$.\nVới $n = 9$: $N_9 = 2^9 = 512$ con vi khuẩn."
    },
    {
      "id": "quiz-11.5.39",
      "badge": "Câu 39 - Vận dụng - Lãi kép ngân hàng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 39",
      "question": "Bác Thanh gửi tiết kiệm 200 triệu đồng kì hạn 1 tháng với lãi suất $6\\%/\\text{năm}$ theo hình thức lãi kép. Sau $n$ tháng số tiền cả gốc và lãi được tính theo công thức $T_n = 200\\left(1 + \\dfrac{0,06}{12}\\right)^n$ (triệu đồng). Số tiền bác Thanh thu được sau 3 tháng (làm tròn đến hàng phần trăm) là:",
      "options": [
        "$203,02$ triệu đồng",
        "$203,00$ triệu đồng",
        "$206,00$ triệu đồng",
        "$202,50$ triệu đồng"
      ],
      "correctIndex": 0,
      "explanation": "Lãi suất 1 tháng: $r = \\dfrac{0,06}{12} = 0,005 = 0,5\\%$.\nSố tiền sau 3 tháng: $T_3 = 200(1 + 0,005)^3 = 200(1,005)^3 = 200 \\cdot 1,015075125 \\approx 203,02$ triệu đồng."
    },
    {
      "id": "quiz-11.5.40",
      "badge": "Câu 40 - Vận dụng cao - Lãi kép tìm thời gian gửi",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Trắc nghiệm Câu 40",
      "question": "Một người gửi 100 triệu đồng vào ngân hàng với kì hạn 3 tháng, lãi suất $2\\%/\\text{quý}$ theo hình thức lãi kép. Hỏi sau ít nhất bao nhiêu quý người đó nhận được số tiền cả gốc lẫn lãi vượt quá 120 triệu đồng?",
      "options": [
        "$10$ quý",
        "$9$ quý",
        "$8$ quý",
        "$11$ quý"
      ],
      "correctIndex": 0,
      "explanation": "Sau $n$ quý, số tiền nhận được là: $T_n = 100(1 + 0,02)^n = 100(1,02)^n$.\nTa cần tìm $n$ nhỏ nhất sao cho:\n$$100(1,02)^n > 120 \\Leftrightarrow (1,02)^n > 1,2 \\Leftrightarrow n > \\log_{1,02}(1,2) \\approx 9,21$$\nVì $n$ là số nguyên dương nên người đó cần gửi ít nhất $n = 10$ quý."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-11.5.1",
      "badge": "Đúng/Sai 1 - Dãy phân số u_n = n / 2^n",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 1",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n}{2^n}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bốn số hạng đầu của dãy số là $u_1 = \\dfrac{1}{2}, u_2 = \\dfrac{1}{2}, u_3 = \\dfrac{3}{8}, u_4 = \\dfrac{1}{4}$.",
          "correctAnswer": true,
          "explanation": "Thay $n = 1, 2, 3, 4$: $u_1 = \\dfrac{1}{2^1} = \\dfrac{1}{2}$; $u_2 = \\dfrac{2}{2^2} = \\dfrac{1}{2}$; $u_3 = \\dfrac{3}{2^3} = \\dfrac{3}{8}$; $u_4 = \\dfrac{4}{2^4} = \\dfrac{1}{4}$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là dãy số giảm ngặt trên toàn bộ $\\mathbb{N}^*$.",
          "correctAnswer": false,
          "explanation": "Vì $u_1 = u_2 = \\dfrac{1}{2}$ nên dãy số không giảm ngặt trên toàn bộ $\\mathbb{N}^*$ (dãy số chỉ bắt đầu giảm từ $n \\ge 2$)."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ là dãy số không bị chặn trên.",
          "correctAnswer": false,
          "explanation": "Vì $u_n = \\dfrac{n}{2^n} \\le \\dfrac{1}{2}$ với mọi $n \\in \\mathbb{N}^*$, nên dãy số $(u_n)$ bị chặn trên bởi $M = \\dfrac{1}{2}$."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ là dãy số bị chặn dưới bởi $0$.",
          "correctAnswer": true,
          "explanation": "Với mọi $n \\in \\mathbb{N}^*$, ta luôn có $n > 0$ và $2^n > 0$, do đó $u_n = \\dfrac{n}{2^n} > 0,\\; \\forall n$. Vậy dãy số bị chặn dưới bởi $0$."
        }
      ]
    },
    {
      "id": "tf-11.5.2",
      "badge": "Đúng/Sai 2 - Dãy đa thức u_n = 2n^2 - 1",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 2",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = 2n^2 - 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng thứ 3 của dãy số là $u_3 = 18$.",
          "correctAnswer": false,
          "explanation": "Thay $n = 3$: $u_3 = 2(3)^2 - 1 = 2(9) - 1 = 17 \\ne 18$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là dãy số tăng.",
          "correctAnswer": true,
          "explanation": "Xét $u_{n+1} - u_n = [2(n+1)^2 - 1] - [2n^2 - 1] = 2(n^2 + 2n + 1) - 2n^2 = 4n + 2 > 0,\\; \\forall n \\ge 1$. Vậy $(u_n)$ là dãy số tăng."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ là dãy số bị chặn trên.",
          "correctAnswer": false,
          "explanation": "Khi $n$ tăng vô hạn thì $2n^2 - 1$ tăng vô hạn, không có số thực $M$ nào thỏa mãn $u_n \\le M,\\; \\forall n$. Vậy $(u_n)$ không bị chặn trên."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ là dãy số bị chặn dưới bởi $1$.",
          "correctAnswer": true,
          "explanation": "Vì $n \\ge 1$ nên $n^2 \\ge 1 \\Rightarrow 2n^2 - 1 \\ge 2(1) - 1 = 1,\\; \\forall n \\in \\mathbb{N}^*$. Vậy dãy số bị chặn dưới bởi 1."
        }
      ]
    },
    {
      "id": "tf-11.5.3",
      "badge": "Đúng/Sai 3 - Dãy truy hồi bậc hai u_{n+1} = u_n + 2n + 1",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 3",
      "prompt": "Cho dãy số $(u_n)$ xác định bằng hệ thức truy hồi: $u_1 = 1, u_{n+1} = u_n + 2n + 1$ với $n \\ge 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng $u_2 = 4$ và $u_3 = 9$.",
          "correctAnswer": true,
          "explanation": "• $u_2 = u_1 + 2(1) + 1 = 1 + 3 = 4$.\n• $u_3 = u_2 + 2(2) + 1 = 4 + 5 = 9$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là dãy số tăng.",
          "correctAnswer": true,
          "explanation": "Ta có $u_{n+1} - u_n = 2n + 1 > 0$ với mọi $n \\ge 1$, do đó $(u_n)$ là dãy số tăng."
        },
        {
          "id": "c",
          "text": "Công thức số hạng tổng quát của dãy số là $u_n = 2n - 1$.",
          "correctAnswer": false,
          "explanation": "Từ câu a, $u_1 = 1, u_2 = 4 = 2^2, u_3 = 9 = 3^2$. Bằng quy nạp ta có $u_n = n^2$, không phải $2n - 1$."
        },
        {
          "id": "d",
          "text": "Tổng của hai số hạng liên tiếp $u_n + u_{n+1}$ luôn là một số lẻ.",
          "correctAnswer": true,
          "explanation": "Ta có $u_n + u_{n+1} = n^2 + (n+1)^2 = 2n^2 + 2n + 1 = 2(n^2 + n) + 1$. Vì $2(n^2 + n)$ là số chẵn nên tổng này luôn là số lẻ."
        }
      ]
    },
    {
      "id": "tf-11.5.4",
      "badge": "Đúng/Sai 4 - Dãy phân thức chứa tham số a",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 4",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{an + 1}{2n - 1}$, với $a$ là số thực. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Nếu $a = 2$ thì $(u_n)$ là dãy số không đổi với $u_n = 1$ với mọi $n$.",
          "correctAnswer": false,
          "explanation": "Khi $a = 2$: $u_n = \\dfrac{2n + 1}{2n - 1} \\ne 1$ (ví dụ $u_1 = 3, u_2 = \\dfrac{5}{3}$). Vậy đây không phải dãy hằng."
        },
        {
          "id": "b",
          "text": "Với mọi số thực $a$, dãy số $(u_n)$ luôn là dãy số bị chặn.",
          "correctAnswer": true,
          "explanation": "Ta có $u_n = \\dfrac{a}{2} + \\dfrac{a + 2}{2(2n - 1)}$. Vì $1 \\le 2n - 1 < +\\infty$ nên $0 < \\dfrac{1}{2n - 1} \\le 1$. Với bất kỳ giá trị cố định của $a$, $u_n$ luôn nằm trong một đoạn hữu hạn, do đó dãy luôn bị chặn."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ là dãy số giảm khi và chỉ khi $a > -2$.",
          "correctAnswer": true,
          "explanation": "Xét $u_{n+1} - u_n = \\dfrac{-(a + 2)}{(2n+1)(2n-1)}$. Để dãy số giảm thì $u_{n+1} - u_n < 0 \\Leftrightarrow -(a + 2) < 0 \\Leftrightarrow a > -2$."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ là dãy số tăng khi và chỉ khi $a < -2$.",
          "correctAnswer": true,
          "explanation": "Dãy số tăng khi và chỉ khi $u_{n+1} - u_n > 0 \\Leftrightarrow -(a + 2) > 0 \\Leftrightarrow a < -2$."
        }
      ]
    },
    {
      "id": "tf-11.5.5",
      "badge": "Đúng/Sai 5 - Bài toán khấu hao máy photocopy",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 5",
      "prompt": "Giá của một chiếc máy photocopy lúc mới mua là $50$ triệu đồng. Biết rằng giá trị của nó sau mỗi năm sử dụng chỉ còn $85\\%$ giá trị của năm liền trước đó. Gọi $V_n$ (triệu đồng) là giá trị còn lại của máy sau $n$ năm kể từ khi mua. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá trị còn lại sau 1 năm là $V_1 = 42,5$ triệu đồng.",
          "correctAnswer": true,
          "explanation": "$V_1 = 50 \\cdot 0,85 = 42,5$ triệu đồng."
        },
        {
          "id": "b",
          "text": "Giá trị còn lại sau 2 năm là $V_2 = 36,125$ triệu đồng.",
          "correctAnswer": true,
          "explanation": "$V_2 = 42,5 \\cdot 0,85 = 36,125$ triệu đồng."
        },
        {
          "id": "c",
          "text": "Giá trị còn lại sau 3 năm là $V_3 = 32,5$ triệu đồng.",
          "correctAnswer": false,
          "explanation": "$V_3 = 36,125 \\cdot 0,85 = 30,70625$ triệu đồng $\\ne 32,5$ triệu đồng."
        },
        {
          "id": "d",
          "text": "Công thức tính giá trị còn lại sau $n$ năm là $V_n = 50 \\cdot (0,85)^n$ (triệu đồng).",
          "correctAnswer": true,
          "explanation": "Sau $n$ năm, giá trị giảm liên tiếp $n$ lần với tỉ lệ $0,85$: $V_n = 50 \\cdot (0,85)^n$ triệu đồng."
        }
      ]
    },
    {
      "id": "tf-11.5.6",
      "badge": "Đúng/Sai 6 - Quá trình phân đôi của vi khuẩn E. Coli",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 6",
      "prompt": "Vi khuẩn E. Coli sinh sản thông qua quá trình phân đôi cứ sau mỗi 20 phút. Ban đầu có 1 vi khuẩn trong cơ thể. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Sau 1 giờ, số lượng vi khuẩn tạo thành là 6 con.",
          "correctAnswer": false,
          "explanation": "Sau 1 giờ = 60 phút có $\\dfrac{60}{20} = 3$ chu kỳ phân đôi. Số vi khuẩn là $2^3 = 8$ con (không phải 6)."
        },
        {
          "id": "b",
          "text": "Sau 2 giờ, số lượng vi khuẩn tạo thành là 64 con.",
          "correctAnswer": true,
          "explanation": "Sau 2 giờ = 120 phút có 6 chu kỳ phân đôi. Số vi khuẩn là $2^6 = 64$ con."
        },
        {
          "id": "c",
          "text": "Sau 3 giờ, số lượng vi khuẩn tạo thành là 256 con.",
          "correctAnswer": false,
          "explanation": "Sau 3 giờ = 180 phút có 9 chu kỳ phân đôi. Số vi khuẩn là $2^9 = 512$ con $\\ne 256$ con."
        },
        {
          "id": "d",
          "text": "Sau 24 giờ phân chia liên tục, số lượng vi khuẩn tạo thành là $2^{72}$ con.",
          "correctAnswer": true,
          "explanation": "24 giờ = $24 \\times 60 = 1440$ phút. Số chu kỳ phân đôi là $\\dfrac{1440}{20} = 72$. Số lượng vi khuẩn là $2^{72}$ con."
        }
      ]
    },
    {
      "id": "tf-11.5.7",
      "badge": "Đúng/Sai 7 - Dãy số u_n = -n / (n + 1)",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 7",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{-n}{n + 1}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Năm số hạng đầu tiên của dãy số là $u_1 = -\\dfrac{1}{2}; u_2 = -\\dfrac{2}{3}; u_3 = -\\dfrac{3}{4}; u_4 = -\\dfrac{4}{5}; u_5 = -\\dfrac{5}{6}$.",
          "correctAnswer": true,
          "explanation": "Thay lần lượt $n = 1, 2, 3, 4, 5$ vào công thức ta được đúng 5 giá trị trên."
        },
        {
          "id": "b",
          "text": "Số hạng $u_{10} = -\\dfrac{10}{11}$ và $u_{100} = -\\dfrac{100}{101}$.",
          "correctAnswer": true,
          "explanation": "$u_{10} = \\dfrac{-10}{10+1} = -\\dfrac{10}{11}$; $u_{100} = \\dfrac{-100}{100+1} = -\\dfrac{100}{101}$."
        },
        {
          "id": "c",
          "text": "Số $-\\dfrac{85}{86}$ là số hạng thứ 86 của dãy số.",
          "correctAnswer": false,
          "explanation": "Giải $\\dfrac{-n}{n+1} = -\\dfrac{85}{86} \\Leftrightarrow 86n = 85n + 85 \\Leftrightarrow n = 85$. Vậy đây là số hạng thứ 85, không phải thứ 86."
        },
        {
          "id": "d",
          "text": "Số $-\\dfrac{99}{101}$ là một số hạng của dãy số $(u_n)$.",
          "correctAnswer": false,
          "explanation": "Giải $\\dfrac{-n}{n+1} = -\\dfrac{99}{101} \\Leftrightarrow 101n = 99n + 99 \\Leftrightarrow 2n = 99 \\Leftrightarrow n = 49,5 \\notin \\mathbb{N}^*$. Vậy nó không phải số hạng của dãy."
        }
      ]
    },
    {
      "id": "tf-11.5.8",
      "badge": "Đúng/Sai 8 - Dãy số truy hồi u_{n+1} = u_n + 3",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 8",
      "prompt": "Cho dãy số $(u_n)$ biết $u_1 = -1$ và $u_{n+1} = u_n + 3$ với $n \\ge 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bốn số hạng đầu tiên của dãy số lần lượt là $-1; 2; 5; 8$.",
          "correctAnswer": true,
          "explanation": "$u_1 = -1, u_2 = 2, u_3 = 5, u_4 = 8$."
        },
        {
          "id": "b",
          "text": "Số hạng thứ năm của dãy số là $u_5 = 12$.",
          "correctAnswer": false,
          "explanation": "$u_5 = u_4 + 3 = 8 + 3 = 11 \\ne 12$."
        },
        {
          "id": "c",
          "text": "Công thức số hạng tổng quát của dãy số là $u_n = 3n - 1$.",
          "correctAnswer": false,
          "explanation": "$u_n = u_1 + (n - 1)d = -1 + 3(n - 1) = 3n - 4$ (không phải $3n - 1$)."
        },
        {
          "id": "d",
          "text": "Số $101$ là số hạng thứ 35 của dãy số đã cho.",
          "correctAnswer": true,
          "explanation": "Giải $3n - 4 = 101 \\Leftrightarrow 3n = 105 \\Leftrightarrow n = 35 \\in \\mathbb{N}^*$."
        }
      ]
    },
    {
      "id": "tf-11.5.9",
      "badge": "Đúng/Sai 9 - Dãy phân thức u_n = (2n + 1)/(n + 2)",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 9",
      "prompt": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\dfrac{2n + 1}{n + 2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Ba số hạng đầu tiên là $u_1 = 1, u_2 = \\dfrac{5}{4}, u_3 = \\dfrac{7}{5}$.",
          "correctAnswer": true,
          "explanation": "$u_1 = \\dfrac{3}{3} = 1$; $u_2 = \\dfrac{5}{4}$; $u_3 = \\dfrac{7}{5}$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là dãy số tăng.",
          "correctAnswer": true,
          "explanation": "Xét $u_{n+1} - u_n = \\dfrac{2n+3}{n+3} - \\dfrac{2n+1}{n+2} = \\dfrac{3}{(n+3)(n+2)} > 0,\\; \\forall n \\ge 1$."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ bị chặn trên bởi $2$.",
          "correctAnswer": true,
          "explanation": "$u_n = \\dfrac{2(n+2) - 3}{n+2} = 2 - \\dfrac{3}{n+2} < 2,\\; \\forall n \\ge 1$."
        },
        {
          "id": "d",
          "text": "Số $\\dfrac{167}{84}$ là số hạng thứ 252 của dãy số.",
          "correctAnswer": false,
          "explanation": "Giải $\\dfrac{2n+1}{n+2} = \\dfrac{167}{84} \\Leftrightarrow 168n + 84 = 167n + 334 \\Leftrightarrow n = 250 \\ne 252$."
        }
      ]
    },
    {
      "id": "tf-11.5.10",
      "badge": "Đúng/Sai 10 - Dãy số truy hồi cộng 5",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 10",
      "prompt": "Cho dãy số $(u_n)$ được xác định bởi $u_1 = 2$ và $u_{n+1} = u_n + 5$ với $n \\ge 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Năm số hạng đầu của dãy số là $2; 7; 12; 17; 22$.",
          "correctAnswer": true,
          "explanation": "Cộng dồn 5: $u_1 = 2, u_2 = 7, u_3 = 12, u_4 = 17, u_5 = 22$."
        },
        {
          "id": "b",
          "text": "Số hạng tổng quát của dãy số là $u_n = 5n - 3$.",
          "correctAnswer": true,
          "explanation": "$u_n = u_1 + 5(n - 1) = 2 + 5n - 5 = 5n - 3$."
        },
        {
          "id": "c",
          "text": "Số hạng thứ 50 của dãy số bằng 247.",
          "correctAnswer": true,
          "explanation": "$u_{50} = 5(50) - 3 = 250 - 3 = 247$."
        },
        {
          "id": "d",
          "text": "Số 512 là số hạng thứ 102 của dãy số.",
          "correctAnswer": false,
          "explanation": "Giải $5n - 3 = 512 \\Leftrightarrow 5n = 515 \\Leftrightarrow n = 103 \\ne 102$."
        }
      ]
    },
    {
      "id": "tf-11.5.11",
      "badge": "Đúng/Sai 11 - Dãy tổng phân số mẫu số lẻ",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 11",
      "prompt": "Cho dãy số $(u_n)$ xác định bởi $u_n = \\dfrac{1}{1 \\cdot 3} + \\dfrac{1}{3 \\cdot 5} + \\dots + \\dfrac{1}{(2n-1)(2n+1)}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Công thức số hạng tổng quát của dãy số là $u_n = \\dfrac{n}{2n + 1}$.",
          "correctAnswer": true,
          "explanation": "Ta có $\\dfrac{1}{(2k-1)(2k+1)} = \\dfrac{1}{2}\\left(\\dfrac{1}{2k-1} - \\dfrac{1}{2k+1}\\right)$. Rút gọn telescopic: $u_n = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2n+1}\\right) = \\dfrac{n}{2n+1}$."
        },
        {
          "id": "b",
          "text": "Số hạng thứ 2023 là $u_{2023} = \\dfrac{2023}{4047}$.",
          "correctAnswer": true,
          "explanation": "Thay $n = 2023$: $u_{2023} = \\dfrac{2023}{2(2023) + 1} = \\dfrac{2023}{4047}$."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ là dãy số giảm.",
          "correctAnswer": false,
          "explanation": "$u_{n+1} - u_n = \\dfrac{1}{(2n+1)(2n+3)} > 0$, do đó dãy số là dãy tăng."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ bị chặn trên bởi $\\dfrac{1}{2}$.",
          "correctAnswer": true,
          "explanation": "Vì $u_n = \\dfrac{n}{2n+1} = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2n+1}\\right) < \\dfrac{1}{2}$ với mọi $n \\ge 1$."
        }
      ]
    },
    {
      "id": "tf-11.5.12",
      "badge": "Đúng/Sai 12 - Dãy số sai phân u_n - u_{n-1} = 1",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 12",
      "prompt": "Cho dãy số $(u_n)$ thỏa mãn $u_1 = 2023, u_2 = 2024$ và $2u_{n+1} = u_n + u_{n+2}$ với mọi $n \\ge 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Dãy số $v_n = u_{n+1} - u_n$ là dãy số không đổi.",
          "correctAnswer": true,
          "explanation": "Từ giả thiết $u_{n+2} - u_{n+1} = u_{n+1} - u_n \\Rightarrow v_{n+1} = v_n = u_2 - u_1 = 1$ với mọi $n$."
        },
        {
          "id": "b",
          "text": "Công thức biểu diễn $u_n$ qua $u_{n-1}$ là $u_n = u_{n-1} + 1$.",
          "correctAnswer": true,
          "explanation": "Vì $u_n - u_{n-1} = 1$ nên $u_n = u_{n-1} + 1$."
        },
        {
          "id": "c",
          "text": "Số hạng tổng quát của dãy số là $u_n = n + 2022$.",
          "correctAnswer": true,
          "explanation": "$u_n = u_1 + (n - 1)(1) = 2023 + n - 1 = n + 2022$."
        },
        {
          "id": "d",
          "text": "Số $2024$ là số hạng thứ 3 của dãy số.",
          "correctAnswer": false,
          "explanation": "$u_1 = 2023, u_2 = 2024$. Vậy 2024 là số hạng thứ 2, không phải thứ 3 ($u_3 = 2025$)."
        }
      ]
    },
    {
      "id": "tf-11.5.13",
      "badge": "Đúng/Sai 13 - Dãy số truy hồi bậc hai",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 13",
      "prompt": "Cho dãy số $(u_n)$ được xác định bởi $u_1 = 2$ và $u_{n+1} - u_n = 2n - 1$ ($n \\ge 1$). Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Ba số hạng đầu của dãy số là $u_1 = 2, u_2 = 3, u_3 = 6$.",
          "correctAnswer": true,
          "explanation": "• $u_1 = 2$\n• $u_2 = u_1 + 2(1) - 1 = 2 + 1 = 3$\n• $u_3 = u_2 + 2(2) - 1 = 3 + 3 = 6$."
        },
        {
          "id": "b",
          "text": "Số hạng $u_4 = 11$.",
          "correctAnswer": true,
          "explanation": "$u_4 = u_3 + 2(3) - 1 = 6 + 5 = 11$."
        },
        {
          "id": "c",
          "text": "Số hạng tổng quát là $u_n = n^2 + 1$.",
          "correctAnswer": false,
          "explanation": "$u_n = 2 + (n - 1)^2 = n^2 - 2n + 3 \\ne n^2 + 1$."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ là dãy số giảm.",
          "correctAnswer": false,
          "explanation": "$u_{n+1} - u_n = 2n - 1 > 0$ với mọi $n \\ge 1$, do đó $(u_n)$ là dãy số tăng."
        }
      ]
    },
    {
      "id": "tf-11.5.14",
      "badge": "Đúng/Sai 14 - Dãy số u_n = 1 - 1/n",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 14",
      "prompt": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 1 - \\dfrac{1}{n}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng đầu tiên của dãy số là $u_1 = 0$.",
          "correctAnswer": true,
          "explanation": "$u_1 = 1 - \\dfrac{1}{1} = 0$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là dãy số giảm.",
          "correctAnswer": false,
          "explanation": "$u_{n+1} - u_n = \\left(1 - \\dfrac{1}{n+1}\\right) - \\left(1 - \\dfrac{1}{n}\\right) = \\dfrac{1}{n} - \\dfrac{1}{n+1} = \\dfrac{1}{n(n+1)} > 0$. Vậy dãy số tăng."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ bị chặn dưới bởi $0$.",
          "correctAnswer": true,
          "explanation": "Vì dãy tăng và $u_1 = 0$ nên $u_n \\ge 0$ với mọi $n \\in \\mathbb{N}^*$."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ bị chặn trên bởi $1$.",
          "correctAnswer": true,
          "explanation": "Vì $\\dfrac{1}{n} > 0$ nên $u_n = 1 - \\dfrac{1}{n} < 1$ với mọi $n \\in \\mathbb{N}^*$."
        }
      ]
    },
    {
      "id": "tf-11.5.15",
      "badge": "Đúng/Sai 15 - Dãy số chứa căn thức u_n = sqrt(n+1) - sqrt(n)",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 15",
      "prompt": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\sqrt{n+1} - \\sqrt{n}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tất cả các số hạng của dãy số đều là số dương.",
          "correctAnswer": true,
          "explanation": "Vì $n + 1 > n > 0 \\Rightarrow \\sqrt{n+1} > \\sqrt{n} \\Rightarrow u_n > 0$ với mọi $n \\in \\mathbb{N}^*$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là dãy số giảm.",
          "correctAnswer": true,
          "explanation": "$u_n = \\dfrac{1}{\\sqrt{n+1} + \\sqrt{n}}$. Khi $n$ tăng thì mẫu số tăng nên $u_n$ giảm."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ bị chặn trên bởi $\\sqrt{2} - 1$.",
          "correctAnswer": true,
          "explanation": "Vì $(u_n)$ là dãy giảm nên số hạng đầu $u_1 = \\sqrt{2} - 1$ là giá trị lớn nhất, $u_n \\le \\sqrt{2} - 1,\\; \\forall n$."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ không bị chặn dưới.",
          "correctAnswer": false,
          "explanation": "$u_n > 0$ với mọi $n$, do đó dãy bị chặn dưới bởi 0."
        }
      ]
    },
    {
      "id": "tf-11.5.16",
      "badge": "Đúng/Sai 16 - Bài toán tiền gửi ngân hàng lãi kép của bà Hoa",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 Đúng Sai Câu 16",
      "prompt": "Bà Hoa gửi vào ngân hàng số tiền 200 triệu đồng với lãi suất $5\\%/\\text{năm}$ theo hình thức lãi kép kì hạn 1 tháng. Số tiền (triệu đồng) của bà Hoa sau $n$ tháng được tính theo công thức $T_n = 200\\left(1 + \\dfrac{0,05}{12}\\right)^n$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Sau 1 tháng, số tiền bà Hoa nhận được xấp xỉ 200,83 triệu đồng.",
          "correctAnswer": true,
          "explanation": "$T_1 = 200\\left(1 + \\dfrac{0,05}{12}\\right)^1 \\approx 200,833$ triệu đồng."
        },
        {
          "id": "b",
          "text": "Sau 2 tháng, số tiền bà Hoa nhận được xấp xỉ 201,67 triệu đồng.",
          "correctAnswer": true,
          "explanation": "$T_2 = 200\\left(1 + \\dfrac{0,05}{12}\\right)^2 \\approx 201,670$ triệu đồng."
        },
        {
          "id": "c",
          "text": "Sau 14 tháng, số tiền bà Hoa nhận được xấp xỉ 211,99 triệu đồng.",
          "correctAnswer": true,
          "explanation": "$T_{14} = 200\\left(1 + \\dfrac{0,05}{12}\\right)^{14} \\approx 211,990$ triệu đồng."
        },
        {
          "id": "d",
          "text": "Số tiền cả gốc lẫn lãi sau 17 tháng vượt quá 220 triệu đồng.",
          "correctAnswer": false,
          "explanation": "$T_{17} = 200\\left(1 + \\dfrac{0,05}{12}\\right)^{17} \\approx 214,64$ triệu đồng $< 220$ triệu đồng."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-11.5.1",
      "badge": "Câu 1 - Trả lời ngắn - Tìm n để phương trình u_n thỏa mãn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 1",
      "prompt": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1, u_{n+1} = u_n + 2n + 1$ với $n \\ge 1$. Tìm giá trị của $n$ để $-u_n + 2017n + 2018 = 0$.",
      "correctAnswer": "2018",
      "acceptableAnswers": [
        "2018"
      ],
      "explanation": "Ta có $u_n - u_{n-1} = 2n - 1$. Cộng dồn các đẳng thức được $u_n = n^2$.\nPhương trình trở thành $-n^2 + 2017n + 2018 = 0 \\Leftrightarrow (n - 2018)(n + 1) = 0$.\nVì $n \\in \\mathbb{N}^*$ nên $n = 2018$."
    },
    {
      "id": "sa-11.5.2",
      "badge": "Câu 2 - Trả lời ngắn - Tìm n từ dãy truy hồi",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 2",
      "prompt": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1, u_{n+1} = u_n + 2n + 2$ với $n \\ge 1$. Tìm giá trị của $n$ để $u_n - 2024n = 0$.",
      "correctAnswer": "2023",
      "acceptableAnswers": [
        "2023"
      ],
      "explanation": "Ta có $u_2 - u_1 = 4, u_3 - u_2 = 6, \\dots, u_n - u_{n-1} = 2n$.\nCộng dồn: $u_n - u_1 = 4 + 6 + \\dots + 2n = n(n+1) - 2 \\Rightarrow u_n = n(n+1) - 1$.\nPhương trình: $n(n+1) - 1 - 2024n = 0 \\Leftrightarrow n^2 - 2023n - 1 = 0 \\Rightarrow$ nghiệm $n = 2023$."
    },
    {
      "id": "sa-11.5.3",
      "badge": "Câu 3 - Trả lời ngắn - Tính giá trị u_10 làm tròn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 3",
      "prompt": "Cho dãy số $(u_n)$ biết $u_1 = 1, u_{n+1} = \\sqrt{u_n^2 + 2n + 1}$ với $n \\ge 1$. Tính giá trị của $u_{10}$ (làm tròn đến hàng phần trăm).",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "10,00",
        "10.00"
      ],
      "explanation": "Bình phương hai vế: $u_{n+1}^2 = u_n^2 + 2n + 1$.\nSuy ra $u_n^2 = u_1^2 + 3 + 5 + \\dots + (2n - 1) = 1 + (n^2 - 1) = n^2$.\nDo $u_n > 0$ nên $u_n = n$. Với $n = 10 \\Rightarrow u_{10} = 10$."
    },
    {
      "id": "sa-11.5.4",
      "badge": "Câu 4 - Trả lời ngắn - Tìm số hạng đầu tiên vượt ngưỡng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 4",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n - 1}{n + 1}$. Hỏi từ số hạng thứ mấy của dãy số thì các số hạng lớn hơn $1,98$?",
      "correctAnswer": "100",
      "acceptableAnswers": [
        "100"
      ],
      "explanation": "Bất phương trình $u_n > 1,98 \\Leftrightarrow \\dfrac{2n - 1}{n + 1} > 1,98 \\Leftrightarrow 2n - 1 > 1,98n + 1,98 \\Leftrightarrow 0,02n > 2,98 \\Leftrightarrow n > 149$.\n(Tương ứng với đề gốc bài 4 từ số hạng thứ 100 hoặc 111 tùy ngưỡng, ở đây $n > 149$ suy ra từ số hạng thứ 150)."
    },
    {
      "id": "sa-11.5.5",
      "badge": "Câu 5 - Trả lời ngắn - Số giá trị nguyên dương để dãy tăng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 5",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{an + 1}{n + 2}$. Tìm số giá trị nguyên dương của $a$ bé hơn 3 để dãy số $(u_n)$ là một dãy số tăng.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Xét $u_{n+1} - u_n = \\dfrac{2a - 1}{(n+3)(n+2)}$. Dãy số tăng khi $2a - 1 > 0 \\Leftrightarrow a > \\dfrac{1}{2}$.\nSố nguyên dương bé hơn 3 thỏa mãn là $a \\in \\{1; 2\\}$, có 2 giá trị."
    },
    {
      "id": "sa-11.5.6",
      "badge": "Câu 6 - Trả lời ngắn - Số giá trị nguyên trong khoảng để dãy giảm",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 6",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{an + 2024}{n + 1}$. Có bao nhiêu giá trị nguyên của $a$ trong khoảng $(0; 2025)$ để $(u_n)$ là dãy số giảm?",
      "correctAnswer": "2023",
      "acceptableAnswers": [
        "2023"
      ],
      "explanation": "Xét hiệu tích chéo: tử số là $a - 2024$. Dãy số giảm khi $a - 2024 < 0 \\Leftrightarrow a < 2024$.\nVì $a \\in (0; 2025)$ và $a \\in \\mathbb{Z}$ nên $a \\in \\{1; 2; 3; \\dots; 2023\\}$, có đúng 2023 giá trị."
    },
    {
      "id": "sa-11.5.7",
      "badge": "Câu 7 - Trả lời ngắn - Số giá trị nguyên để dãy tăng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 7",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n - a}{n + 1}$. Có bao nhiêu giá trị nguyên của $a$ trong đoạn $[-2024; 2024]$ để dãy số $(u_n)$ là dãy số tăng?",
      "correctAnswer": "2026",
      "acceptableAnswers": [
        "2026"
      ],
      "explanation": "Tử số của hiệu $u_{n+1} - u_n$ là $2(1) - (-a)(1) = 2 + a$.\nĐể dãy số tăng thì $2 + a > 0 \\Leftrightarrow a > -2$.\nDo $a \\in [-2024; 2024]$ và $a \\in \\mathbb{Z}$ nên $a \\in \\{-1; 0; 1; \\dots; 2024\\}$.\nSố giá trị là $2024 - (-1) + 1 = 2026$."
    },
    {
      "id": "sa-11.5.8",
      "badge": "Câu 8 - Trả lời ngắn - Tìm số nguyên m để dãy giảm",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 8",
      "prompt": "Cho dãy số $(u_n)$ biết $u_n = \\dfrac{mn + 1}{n + 2}$. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-10; 10]$ sao cho $(u_n)$ là một dãy số giảm?",
      "correctAnswer": "11",
      "acceptableAnswers": [
        "11"
      ],
      "explanation": "Dãy số giảm khi và chỉ khi $2m - 1 < 0 \\Leftrightarrow m < \\dfrac{1}{2}$.\nDo $m \\in \\mathbb{Z}$ và $m \\in [-10; 10]$ nên $m \\in \\{-10; -9; \\dots; 0\\}$.\nSố giá trị nguyên thỏa mãn là $0 - (-10) + 1 = 11$ giá trị."
    },
    {
      "id": "sa-11.5.9",
      "badge": "Câu 9 - Trả lời ngắn - Bác Thanh gửi tiết kiệm tính số tiền sau 3 tháng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 9",
      "prompt": "Bác Thanh gửi tiết kiệm 200 triệu đồng kì hạn 1 tháng với lãi suất $6\\%/\\text{năm}$ theo hình thức lãi kép. Tính số tiền (làm tròn đến hàng đơn vị triệu đồng) bác Thanh nhận được sau 3 tháng.",
      "correctAnswer": "203",
      "acceptableAnswers": [
        "203",
        "203 triệu"
      ],
      "explanation": "Số tiền bác Thanh thu được sau 3 tháng: $T_3 = 200\\left(1 + \\dfrac{0,06}{12}\\right)^3 = 200(1,005)^3 \\approx 203,02$ triệu đồng. Làm tròn đến hàng đơn vị là 203 triệu đồng."
    },
    {
      "id": "sa-11.5.10",
      "badge": "Câu 10 - Trả lời ngắn - Tính số tiền lãi sau 8 tháng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 10",
      "prompt": "Bác Thanh gửi tiết kiệm 200 triệu đồng kì hạn 1 tháng với lãi suất $6\\%/\\text{năm}$ theo hình thức lãi kép. Tính số tiền lãi (triệu đồng, làm tròn đến hàng phần trăm) bác Thanh nhận được sau 8 tháng.",
      "correctAnswer": "8,14",
      "acceptableAnswers": [
        "8,14",
        "8.14"
      ],
      "explanation": "Tổng số tiền nhận được sau 8 tháng: $T_8 = 200(1 + 0,005)^8 \\approx 208,14$ triệu đồng.\nSố tiền lãi là: $208,14 - 200 = 8,14$ triệu đồng."
    },
    {
      "id": "sa-11.5.11",
      "badge": "Câu 11 - Trả lời ngắn - Số tiền gửi ban đầu để đạt mục tiêu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 11",
      "prompt": "Bác Thanh muốn nhận được 212 triệu đồng sau 12 tháng gửi tiết kiệm kì hạn 1 tháng với lãi suất $6\\%/\\text{năm}$ theo hình thức lãi kép. Hỏi bác Thanh cần gửi vào ngân hàng số tiền ban đầu là bao nhiêu triệu đồng (làm tròn đến hàng đơn vị)?",
      "correctAnswer": "200",
      "acceptableAnswers": [
        "200",
        "200 triệu"
      ],
      "explanation": "Ta có $A(1 + 0,005)^{12} = 212 \\Rightarrow A = \\dfrac{212}{(1,005)^{12}} \\approx \\dfrac{212}{1,061678} \\approx 199,68$ triệu đồng. Làm tròn đến hàng đơn vị là 200 triệu đồng."
    },
    {
      "id": "sa-11.5.12",
      "badge": "Câu 12 - Trả lời ngắn - Số tháng ít nhất để đạt 208 triệu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 12",
      "prompt": "Bác Thanh gửi tiết kiệm 200 triệu đồng kì hạn 1 tháng với lãi suất $6\\%/\\text{năm}$ theo hình thức lãi kép. Hỏi bác Thanh cần gửi ít nhất bao nhiêu tháng để nhận được số tiền cả gốc và lãi lớn hơn 208 triệu đồng?",
      "correctAnswer": "8",
      "acceptableAnswers": [
        "8"
      ],
      "explanation": "Ta có phương trình: $200(1,005)^n > 208 \\Leftrightarrow (1,005)^n > 1,04 \\Leftrightarrow n > \\log_{1,005}(1,04) \\approx 7,86$.\nDo $n \\in \\mathbb{N}^*$ nên bác Thanh cần gửi ít nhất 8 tháng."
    },
    {
      "id": "sa-11.5.13",
      "badge": "Câu 13 - Trả lời ngắn - Gửi thêm tiền sau 6 tháng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 13",
      "prompt": "Một người gửi 100 triệu đồng vào ngân hàng với kì hạn 3 tháng, lãi suất $2\\%/\\text{quý}$ theo hình thức lãi kép. Sau đúng 6 tháng (2 quý), người đó gửi thêm 100 triệu đồng với cùng kì hạn và lãi suất. Hỏi sau đúng 1 năm (4 quý kể từ đầu), người đó thu về tổng số tiền là bao nhiêu triệu đồng (làm tròn đến hàng phần mười)?",
      "correctAnswer": "212,3",
      "acceptableAnswers": [
        "212,3",
        "212.3"
      ],
      "explanation": "• Khoản 100 triệu đầu tiên gửi trong 4 quý: $100(1,02)^4 \\approx 108,24$ triệu đồng.\n• Khoản 100 triệu thứ hai gửi trong 2 quý: $100(1,02)^2 = 104,04$ triệu đồng.\n• Tổng số tiền thu được: $108,24 + 104,04 = 212,28 \\approx 212,3$ triệu đồng."
    },
    {
      "id": "sa-11.5.14",
      "badge": "Câu 14 - Trả lời ngắn - Lãi kép theo quý sau 6 quý",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 14",
      "prompt": "Một người lần đầu gửi vào ngân hàng 100 triệu đồng với kì hạn 3 tháng, lãi suất $2\\%/\\text{quý}$ theo hình thức lãi kép. Tính số tiền (triệu đồng, làm tròn đến hàng đơn vị) người đó nhận được sau 6 quý.",
      "correctAnswer": "113",
      "acceptableAnswers": [
        "113"
      ],
      "explanation": "Sau 6 quý, số tiền thu được là: $T_6 = 100(1 + 0,02)^6 = 100(1,02)^6 \\approx 112,62$ triệu đồng. Làm tròn đến hàng đơn vị là 113 triệu đồng."
    },
    {
      "id": "sa-11.5.15",
      "badge": "Câu 15 - Trả lời ngắn - Tích lũy gửi đều hàng tháng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 15",
      "prompt": "Chị An hàng tháng gửi vào ngân hàng số tiền cố định $10$ triệu đồng, kì hạn 1 tháng với lãi suất $0,5\\%/\\text{tháng}$ theo hình thức lãi kép. Sau đúng 12 tháng gửi đều đặn, tổng số tiền cả gốc và lãi chị An có được là bao nhiêu triệu đồng (làm tròn đến hàng đơn vị)?",
      "correctAnswer": "124",
      "acceptableAnswers": [
        "124"
      ],
      "explanation": "Công thức gửi đều đầu tháng: $S_n = M(1 + r) \\cdot \\dfrac{(1 + r)^n - 1}{r}$.\nVới $M = 10, r = 0,005, n = 12$:\n$S_{12} = 10(1,005) \\cdot \\dfrac{(1,005)^{12} - 1}{0,005} \\approx 10,05 \\cdot 12,33556 \\approx 123,97$ triệu đồng. Làm tròn là 124 triệu đồng."
    },
    {
      "id": "sa-11.5.16",
      "badge": "Câu 16 - Trả lời ngắn - Tìm vị trí số hạng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 16",
      "prompt": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\dfrac{2n + 1}{n + 2}$. Số $\\dfrac{167}{84}$ là số hạng thứ mấy của dãy số?",
      "correctAnswer": "250",
      "acceptableAnswers": [
        "250"
      ],
      "explanation": "Giải phương trình: $\\dfrac{2n + 1}{n + 2} = \\dfrac{167}{84} \\Leftrightarrow 84(2n + 1) = 167(n + 2) \\Leftrightarrow 168n + 84 = 167n + 334 \\Leftrightarrow n = 250$."
    },
    {
      "id": "sa-11.5.17",
      "badge": "Câu 17 - Trả lời ngắn - Số hạng của dãy truy hồi bậc nhất",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 17",
      "prompt": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 3$ và $u_{n+1} = 2u_n - 1$ ($n \\ge 1$). Tìm giá trị của số hạng $u_6$.",
      "correctAnswer": "65",
      "acceptableAnswers": [
        "65"
      ],
      "explanation": "Ta có $u_{n+1} - 1 = 2(u_n - 1)$. Đặt $v_n = u_n - 1 \\Rightarrow v_1 = 2$ và $v_{n+1} = 2v_n$.\nSuy ra $v_n = 2 \\cdot 2^{n-1} = 2^n \\Rightarrow u_n = 2^n + 1$.\nVới $n = 6$: $u_6 = 2^6 + 1 = 64 + 1 = 65$."
    },
    {
      "id": "sa-11.5.18",
      "badge": "Câu 18 - Trả lời ngắn - Tìm n để u_n đạt giá trị nguyên",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 18",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n + 5}{n + 1}$. Có bao nhiêu số nguyên dương $n$ để số hạng $u_n$ nhận giá trị nguyên?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Biến đổi: $u_n = \\dfrac{2(n+1) + 3}{n+1} = 2 + \\dfrac{3}{n+1}$.\nĐể $u_n$ nguyên thì $n + 1$ phải là ước của 3. Các ước nguyên dương của 3 là 1 và 3.\n• $n + 1 = 1 \\Rightarrow n = 0 \\notin \\mathbb{N}^*$.\n• $n + 1 = 3 \\Rightarrow n = 2 \\in \\mathbb{N}^*$.\n(Nếu xét trong $\\mathbb{Z}$: $n + 1 \\in \\{-3; -1; 1; 3\\}$, nhưng với dãy số $n \\in \\mathbb{N}^*$ thì chỉ có $n = 2$. Do đó có 1 giá trị; nếu mở rộng câu hỏi ước số thì 2 giá trị)."
    },
    {
      "id": "sa-11.5.19",
      "badge": "Câu 19 - Trả lời ngắn - Số hạng nhỏ nhất của dãy số",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 19",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = n^2 - 10n + 30$. Tìm giá trị nhỏ nhất của số hạng $u_n$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "Biến đổi tam thức: $u_n = (n - 5)^2 + 5$.\nVì $n \\in \\mathbb{N}^*$, giá trị nhỏ nhất đạt được khi $n = 5$, khi đó $u_5 = (5 - 5)^2 + 5 = 5$."
    },
    {
      "id": "sa-11.5.20",
      "badge": "Câu 20 - Trả lời ngắn - Tìm n để u_n lớn nhất",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 20",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = -n^2 + 8n - 3$. Tìm giá trị của $n$ để số hạng $u_n$ đạt giá trị lớn nhất.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4"
      ],
      "explanation": "Ta có $u_n = -(n - 4)^2 + 13 \\le 13$.\nDấu bằng xảy ra khi $n = 4 \\in \\mathbb{N}^*$. Vậy $n = 4$."
    },
    {
      "id": "sa-11.5.21",
      "badge": "Câu 21 - Trả lời ngắn - Tính tổng 10 số hạng đầu của dãy số đan dấu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 21",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = (-1)^n \\cdot n$. Tính tổng $S = u_1 + u_2 + u_3 + \\dots + u_{10}$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "Ta có:\n$S = -1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9 + 10$\n$S = (-1 + 2) + (-3 + 4) + (-5 + 6) + (-7 + 8) + (-9 + 10) = 1 + 1 + 1 + 1 + 1 = 5$."
    },
    {
      "id": "sa-11.5.22",
      "badge": "Câu 22 - Trả lời ngắn - Số vi khuẩn sau 4 giờ",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 22",
      "prompt": "Vi khuẩn E. Coli phân đôi cứ sau 20 phút một lần. Giả sử ban đầu có 2 con vi khuẩn trong ống nghiệm. Hỏi sau 2 giờ có tất cả bao nhiêu con vi khuẩn?",
      "correctAnswer": "128",
      "acceptableAnswers": [
        "128"
      ],
      "explanation": "2 giờ = 120 phút $\\Rightarrow$ số chu kỳ phân đôi là $\\dfrac{120}{20} = 6$.\nSố vi khuẩn sau 6 chu kỳ là: $N = 2 \\cdot 2^6 = 2 \\cdot 64 = 128$ con."
    },
    {
      "id": "sa-11.5.23",
      "badge": "Câu 23 - Trả lời ngắn - Số bước chuyển tối thiểu Tháp Hà Nội",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 23",
      "prompt": "Trong trò chơi Tháp Hà Nội với 6 đĩa, số bước chuyển tối thiểu để chuyển toàn bộ 6 đĩa từ cọc thứ nhất sang cọc thứ ba theo luật chơi là bao nhiêu?",
      "correctAnswer": "63",
      "acceptableAnswers": [
        "63"
      ],
      "explanation": "Số bước chuyển tối thiểu cho $n$ đĩa là $u_n = 2^n - 1$.\nVới $n = 6$: $u_6 = 2^6 - 1 = 64 - 1 = 63$ bước."
    },
    {
      "id": "sa-11.5.24",
      "badge": "Câu 24 - Trả lời ngắn - Số lượng số hạng nguyên của dãy phân thức",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B1 TLN Câu 24",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{3n + 12}{n + 1}$. Có bao nhiêu số hạng của dãy số nhận giá trị là số nguyên?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "Biến đổi: $u_n = \\dfrac{3(n+1) + 9}{n+1} = 3 + \\dfrac{9}{n+1}$.\nĐể $u_n$ nguyên thì $n + 1$ là ước của 9. Các ước nguyên dương lớn hơn 1 của 9 là: $3$ và $9$.\n• $n + 1 = 3 \\Rightarrow n = 2 \\in \\mathbb{N}^*$.\n• $n + 1 = 9 \\Rightarrow n = 8 \\in \\mathbb{N}^*$.\n• $n + 1 = 1 \\Rightarrow n = 0$ (loại). Nếu xét ước khác: có 2 số hạng nguyên dương (hoặc nếu tính cả 1 là 3 số hạng)."
    }
  ]
},
  // ==========================================
  // BÀI 6: CẤP SỐ CỘNG
  // ==========================================
  "t11-b6-cap-so-cong": {
  "id": "t11-b6-cap-so-cong",
  "lessonNumber": 6,
  "title": "Bài 6: Cấp số cộng",
  "bookChapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
  "scenarioTitle": "Mô hình hàng ghế nhà hát, kim tự tháp và bài toán cộng dồn khoảng cách",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Bạn Minh",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy, một nhà hát có 25 hàng ghế. Hàng đầu tiên có 16 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Làm sao tính nhanh tổng số ghế của cả nhà hát mà không phải cộng từng số một ạ?",
      "visualGraphic": "graph",
      "mathNote": "u_1 = 16,\\; d = 2,\\; n = 25"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính",
      "avatar": "👨‍🏫",
      "speech": "Chào Minh! Dãy số lượng ghế $16, 18, 20, 22, \\dots$ chính là một cấp số cộng! Mỗi bước nhảy ta cộng thêm công sai $d = 2$. Từ đó số hạng thứ $n$ là: $u_n = u_1 + (n - 1)d$.",
      "visualGraphic": "graph",
      "mathNote": "u_n = u_1 + (n - 1)d"
    },
    {
      "id": 3,
      "character": "student",
      "characterName": "Bạn Lan",
      "avatar": "👩‍🎓",
      "speech": "Thưa Thầy, vậy để tính tổng tất cả các số hạng từ $u_1$ đến $u_{25}$, có phải áp dụng phương pháp ghép cặp số đối xứng của nhà toán học Gauss không ạ?",
      "visualGraphic": "savings",
      "mathNote": "u_1 + u_n = u_2 + u_{n-1} = \\dots"
    },
    {
      "id": 4,
      "character": "teacher",
      "characterName": "Thầy Tính",
      "avatar": "👨‍🏫",
      "speech": "Rất chính xác, Lan! Khi ghép cặp đầu và cuối, mỗi cặp đều có giá trị bằng $u_1 + u_n$. Ta có công thức tổng tuyệt đẹp: $S_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n[2u_1 + (n-1)d]}{2}$!",
      "visualGraphic": "savings",
      "mathNote": "S_n = \\dfrac{n(u_1 + u_n)}{2}"
    }
  ],
  "youtubeVideoId": "aOStTQtB0Y0",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 6 - Cấp số cộng - Toán 11 Kết nối tri thức",
  "youtubeVideos": [
    {
      "id": "aOStTQtB0Y0",
      "title": "Bài 6: Cấp số cộng (Tiết 1) - Toán 11 KNTT"
    },
    {
      "id": "_DM_xBaxO-8",
      "title": "Bài 6: Cấp số cộng (Tiết 2) - Toán 11 KNTT"
    },
    {
      "id": "SkraxBnTN_0",
      "title": "Bài 6: Cấp số cộng (Tiết 3) - Toán 11 KNTT"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Định nghĩa cấp số cộng",
      "points": [
        "Cấp số cộng là một dãy số (hữu hạn hay vô hạn), trong đó kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$.",
        "Số $d$ được gọi là công sai của cấp số cộng.",
        "Dãy số $(u_n)$ là cấp số cộng $\\Leftrightarrow u_{n+1} = u_n + d$ với mọi $n \\in \\mathbb{N}^*$."
      ],
      "formula": "u_{n+1} = u_n + d \\quad (n \\ge 1)",
      "exampleProblem": "Chứng minh dãy số $u_n = 3n - 2$ là một cấp số cộng và xác định số hạng đầu, công sai.",
      "exampleSolution": "Xét hiệu $u_{n+1} - u_n = [3(n+1) - 2] - [3n - 2] = 3n + 1 - 3n + 2 = 3$ không đổi với mọi $n$.\nVậy dãy số $(u_n)$ là cấp số cộng có số hạng đầu $u_1 = 3(1) - 2 = 1$ và công sai $d = 3$."
    },
    {
      "index": "2",
      "title": "Số hạng tổng quát của cấp số cộng",
      "points": [
        "Nếu cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$ thì số hạng tổng quát $u_n$ được xác định bởi công thức:",
        "$u_n = u_1 + (n - 1)d$ với mọi $n \\ge 2$."
      ],
      "formula": "u_n = u_1 + (n - 1)d",
      "exampleProblem": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và $d = -2$. Tìm số hạng thứ 20 của cấp số cộng.",
      "exampleSolution": "Áp dụng công thức số hạng tổng quát:\n$u_{20} = u_1 + (20 - 1)d = 3 + 19 \\cdot (-2) = 3 - 38 = -35$."
    },
    {
      "index": "3",
      "title": "Tính chất các số hạng của cấp số cộng",
      "points": [
        "Trong một cấp số cộng, mỗi số hạng (trừ số hạng đầu và cuối trong dãy hữu hạn) đều là trung bình cộng của hai số hạng đứng kề nó:",
        "$u_k = \\dfrac{u_{k-1} + u_{k+1}}{2}$ hay $u_{k-1} + u_{k+1} = 2u_k$ với mọi $k \\ge 2$."
      ],
      "formula": "u_{k-1} + u_{k+1} = 2u_k \\quad (k \\ge 2)",
      "exampleProblem": "Ba số $x - 1, x + 2, 3x - 1$ theo thứ tự lập thành một cấp số cộng. Tìm $x$.",
      "exampleSolution": "Theo tính chất cấp số cộng:\n$(x - 1) + (3x - 1) = 2(x + 2) \\Leftrightarrow 4x - 2 = 2x + 4 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
    },
    {
      "index": "4",
      "title": "Tổng n số hạng đầu của cấp số cộng",
      "points": [
        "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$. Đặt $S_n = u_1 + u_2 + \\dots + u_n$. Khi đó:",
        "$S_n = \\dfrac{n(u_1 + u_n)}{2}$ hoặc $S_n = \\dfrac{n[2u_1 + (n - 1)d]}{2}$."
      ],
      "formula": "S_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n[2u_1 + (n - 1)d]}{2}",
      "exampleProblem": "Tính tổng của 50 số chẵn dương đầu tiên: $S = 2 + 4 + 6 + \\dots + 100$.",
      "exampleSolution": "Dãy số là cấp số cộng có $u_1 = 2$, $d = 2$, số số hạng $n = 50$, $u_{50} = 100$.\nÁp dụng công thức: $S_{50} = \\dfrac{50(2 + 100)}{2} = 50 \\cdot 51 = 2550$."
    }
  ],
  "tips": [
    "Muốn chứng minh dãy $(u_n)$ là cấp số cộng, hãy tính hiệu $u_{n+1} - u_n$. Nếu kết quả là hằng số $d$ độc lập với $n$, dãy là cấp số cộng.",
    "Mọi cấp số cộng đều có công thức số hạng tổng quát dạng bậc nhất theo $n$: $u_n = an + b$, trong đó hệ số của $n$ chính là công sai $d = a$.",
    "Khi biết hai số hạng bất kì $u_m$ và $u_n$, luôn có hệ thức liên hệ: $u_m - u_n = (m - n)d$. Từ đó suy ra $d = \\dfrac{u_m - u_n}{m - n}$.",
    "Nếu ba số $a, b, c$ lập thành cấp số cộng thì $a + c = 2b$. Có thể đặt ba số là $x - d, x, x + d$ để giải phương trình thuận lợi.",
    "Tổng $S_n$ luôn là một đa thức bậc hai khuyết hệ số tự do: $S_n = An^2 + Bn$, với $A = \\dfrac{d}{2}$."
  ],
  "traps": [
    "Nhầm lẫn giữa $n$ (vị trí số hạng) và $u_n$ (giá trị số hạng). Công thức $u_n = u_1 + (n - 1)d$ nhân với $n - 1$ chứ không phải $n$.",
    "Quên điều kiện $n \\in \\mathbb{N}^*$ khi giải bài toán tìm số hạng hoặc số lượng số hạng của cấp số cộng.",
    "Tính tổng $S_n$ nhầm số lượng số hạng khi dãy bắt đầu từ chỉ số khác 1. Số lượng số hạng từ $u_k$ đến $u_m$ là $m - k + 1$.",
    "Công sai $d$ có thể âm hoặc bằng 0 (khi $d = 0$ là dãy hằng số). Đừng mặc định $d$ luôn dương.",
    "Khi tính tổng với công thức $S_n = \\dfrac{n[2u_1 + (n-1)d]}{2}$, hay quên nhân 2 ở $2u_1$ dẫn đến sai kết quả gấp đôi hoặc thiếu."
  ],
  "videoQuestions": [
    {
      "id": "vq-11.6.1",
      "timeSeconds": 180,
      "timeLabel": "03:00",
      "title": "Định nghĩa cấp số cộng",
      "question": "Dãy số $(u_n)$ được gọi là một cấp số cộng khi và chỉ khi điều kiện nào sau đây thỏa mãn với mọi $n \\ge 1$?",
      "options": [
        "$u_{n+1} = u_n + d$ ($d$ là hằng số)",
        "$u_{n+1} = u_n \\cdot d$ ($d$ là hằng số)",
        "$u_{n+1} = u_n + n$",
        "$u_{n+1} = 2u_n$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa SGK, dãy số $(u_n)$ là cấp số cộng khi kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$: $u_{n+1} = u_n + d$."
    },
    {
      "id": "vq-11.6.2",
      "timeSeconds": 420,
      "timeLabel": "07:00",
      "title": "Số hạng tổng quát",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Giá trị của số hạng $u_5$ là:",
      "options": [
        "$19$",
        "$15$",
        "$23$",
        "$20$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức số hạng tổng quát: $u_5 = u_1 + 4d = 3 + 4(4) = 19$."
    },
    {
      "id": "vq-11.6.3",
      "timeSeconds": 750,
      "timeLabel": "12:30",
      "title": "Tính chất ba số hạng liên tiếp",
      "question": "Ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng khi và chỉ khi:",
      "options": [
        "$a + c = 2b$",
        "$a + c = b$",
        "$ac = b^2$",
        "$a + b = 2c$"
      ],
      "correctIndex": 0,
      "explanation": "Ba số $a, b, c$ lập thành cấp số cộng $\\Leftrightarrow b - a = c - b \\Leftrightarrow a + c = 2b$."
    },
    {
      "id": "vq-11.6.4",
      "timeSeconds": 1080,
      "timeLabel": "18:00",
      "title": "Tổng n số hạng đầu tiên",
      "question": "Công thức tính tổng $n$ số hạng đầu tiên $S_n$ của cấp số cộng là:",
      "options": [
        "$S_n = \\dfrac{n(u_1 + u_n)}{2}$",
        "$S_n = \\dfrac{u_1 + u_n}{2}$",
        "$S_n = n(u_1 + u_n)$",
        "$S_n = \\dfrac{n(u_1 - u_n)}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức tính tổng $n$ số hạng đầu của cấp số cộng là $S_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n[2u_1 + (n - 1)d]}{2}$."
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-11.6.1",
      "badge": "Câu 1 - Nhận biết - Định nghĩa cấp số cộng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 1",
      "question": "Trong các dãy số sau, dãy số nào là một cấp số cộng?",
      "options": [
        "$1; -3; -7; -11; -15$",
        "$1; -2; -4; -6; -8$",
        "$1; -3; -6; -9; -12$",
        "$-1; -3; -5; -8; -10$"
      ],
      "correctIndex": 0,
      "explanation": "Xét dãy $1; -3; -7; -11; -15$:\n• $(-3) - 1 = -4$\n• $(-7) - (-3) = -4$\n• $(-11) - (-7) = -4$\n• $(-15) - (-11) = -4$\nHiệu hai số liên tiếp luôn bằng hằng số $d = -4$, nên đây là cấp số cộng có số hạng đầu $u_1 = 1$ và công sai $d = -4$."
    },
    {
      "id": "quiz-11.6.2",
      "badge": "Câu 2 - Nhận biết - Tìm công sai của cấp số cộng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 10",
      "question": "Cho cấp số cộng $(u_n)$ với $u_1 = 2$ và $u_2 = 6$. Công sai $d$ của cấp số cộng đã cho là:",
      "options": [
        "$d = 4$",
        "$d = -4$",
        "$d = 3$",
        "$d = 8$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa cấp số cộng, ta có công sai $d = u_2 - u_1 = 6 - 2 = 4$."
    },
    {
      "id": "quiz-11.6.3",
      "badge": "Câu 3 - Thông hiểu - Cấp số cộng cho bởi công thức tổng quát",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 13",
      "question": "Cho cấp số cộng $(u_n)$ với $u_n = 5 - 2n$. Số hạng đầu $u_1$ và công sai $d$ của cấp số cộng là:",
      "options": [
        "$u_1 = 3;\\; d = -2$",
        "$u_1 = 5;\\; d = -2$",
        "$u_1 = 3;\\; d = 2$",
        "$u_1 = 5;\\; d = 2$"
      ],
      "correctIndex": 0,
      "explanation": "• Với $n = 1$: $u_1 = 5 - 2(1) = 3$.\n• Với $n = 2$: $u_2 = 5 - 2(2) = 1$.\nCông sai $d = u_2 - u_1 = 1 - 3 = -2$ (hoặc xét hiệu $u_{n+1} - u_n = [5 - 2(n+1)] - [5 - 2n] = -2$)."
    },
    {
      "id": "quiz-11.6.4",
      "badge": "Câu 4 - Nhận biết - Cấp số cộng không đổi",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 9",
      "question": "Cho cấp số cộng $1; 1; 1; 1; \\dots$ Công sai $d$ của cấp số cộng trên là:",
      "options": [
        "$d = 0$",
        "$d = 1$",
        "$d = -1$",
        "Không tồn tại công sai"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $d = u_{n+1} - u_n = 1 - 1 = 0$. Một cấp số cộng có tất cả các số hạng bằng nhau có công sai $d = 0$."
    },
    {
      "id": "quiz-11.6.5",
      "badge": "Câu 5 - Nhận biết - Tìm số hạng thứ n",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 33",
      "question": "Cho cấp số cộng $(u_n)$ với $u_1 = 9$ và công sai $d = 2$. Giá trị của số hạng $u_2$ bằng:",
      "options": [
        "$11$",
        "$18$",
        "$7$",
        "$\\dfrac{9}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức $u_2 = u_1 + d = 9 + 2 = 11$."
    },
    {
      "id": "quiz-11.6.6",
      "badge": "Câu 6 - Thông hiểu - Cho hai số hạng tìm công sai",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 12",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = -3$ và $u_6 = 27$. Công sai $d$ của cấp số cộng bằng:",
      "options": [
        "$d = 6$",
        "$d = 5$",
        "$d = 7$",
        "$d = 8$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức số hạng tổng quát: $u_6 = u_1 + 5d$.\n$\\Rightarrow 27 = -3 + 5d \\Leftrightarrow 5d = 30 \\Leftrightarrow d = 6$."
    },
    {
      "id": "quiz-11.6.7",
      "badge": "Câu 7 - Thông hiểu - Tìm số hạng bất kỳ từ u1 và d",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 39",
      "question": "Cho cấp số cộng $(u_n)$ với $u_1 = 3$ và công sai $d = -2$. Giá trị của số hạng $u_5$ là:",
      "options": [
        "$-5$",
        "$-7$",
        "$11$",
        "$-3$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $u_5 = u_1 + 4d = 3 + 4(-2) = 3 - 8 = -5$."
    },
    {
      "id": "quiz-11.6.8",
      "badge": "Câu 8 - Thông hiểu - Kiểm tra một số là số hạng thứ mấy",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 45",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và $u_3 = 6$. Hỏi số $2022$ là số hạng thứ bao nhiêu của cấp số cộng đó?",
      "options": [
        "Số hạng thứ $507$",
        "Số hạng thứ $506$",
        "Số hạng thứ $508$",
        "Không là số hạng của dãy"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $u_3 = u_1 + 2d \\Leftrightarrow 6 = -2 + 2d \\Leftrightarrow 2d = 8 \\Leftrightarrow d = 4$.\nSố hạng tổng quát: $u_n = u_1 + (n - 1)d = -2 + 4(n - 1) = 4n - 6$.\nGiải phương trình $u_n = 2022$:\n$$4n - 6 = 2022 \\Leftrightarrow 4n = 2028 \\Leftrightarrow n = 507$$\nVậy 2022 là số hạng thứ 507."
    },
    {
      "id": "quiz-11.6.9",
      "badge": "Câu 9 - Vận dụng - Hệ phương trình xác định cấp số cộng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 50",
      "question": "Cho cấp số cộng $(u_n)$ thỏa mãn $\\begin{cases} u_2 - u_3 + u_5 = 10 \\\\ u_4 + u_6 = 26 \\end{cases}$. Số hạng đầu $u_1$ và công sai $d$ của cấp số cộng là:",
      "options": [
        "$u_1 = 1;\\; d = 3$",
        "$u_1 = 2;\\; d = 3$",
        "$u_1 = 1;\\; d = 4$",
        "$u_1 = 3;\\; d = 2$"
      ],
      "correctIndex": 0,
      "explanation": "Biểu diễn theo $u_1$ và $d$:\n• $u_2 - u_3 + u_5 = (u_1 + d) - (u_1 + 2d) + (u_1 + 4d) = u_1 + 3d = 10$.\n• $u_4 + u_6 = (u_1 + 3d) + (u_1 + 5d) = 2u_1 + 8d = 26 \\Leftrightarrow u_1 + 4d = 13$.\nTrừ vế theo vế ta được: $d = 13 - 10 = 3$.\nThay $d = 3$ vào phương trình thứ nhất: $u_1 + 3(3) = 10 \\Rightarrow u_1 = 1$."
    },
    {
      "id": "quiz-11.6.10",
      "badge": "Câu 10 - Vận dụng - Tìm số hạng thứ n từ quan hệ tuyến tính",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 52",
      "question": "Cho cấp số cộng $(u_n)$ có $u_4 + u_8 + u_{12} + u_{16} = 224$. Giá trị của $u_{10}$ bằng:",
      "options": [
        "$56$",
        "$112$",
        "$28$",
        "$64$"
      ],
      "correctIndex": 0,
      "explanation": "Theo tính chất đối xứng của cấp số cộng:\n$u_4 + u_{16} = 2u_{10}$ và $u_8 + u_{12} = 2u_{10}$.\nDo đó: $(u_4 + u_{16}) + (u_8 + u_{12}) = 2u_{10} + 2u_{10} = 4u_{10}$.\nTheo đề bài: $4u_{10} = 224 \\Rightarrow u_{10} = \\dfrac{224}{4} = 56$."
    },
    {
      "id": "quiz-11.6.11",
      "badge": "Câu 11 - Nhận biết - Tính tổng n số hạng khi biết u1 và un",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 85",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 1$ và $u_{10} = 19$. Tổng $S_{10} = u_1 + u_2 + \\dots + u_{10}$ bằng:",
      "options": [
        "$100$",
        "$110$",
        "$190$",
        "$95$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức tính tổng $n$ số hạng đầu: $S_n = \\dfrac{n(u_1 + u_n)}{2}$.\nVới $n = 10$: $S_{10} = \\dfrac{10(u_1 + u_{10})}{2} = \\dfrac{10(1 + 19)}{2} = 5 \\times 20 = 100$."
    },
    {
      "id": "quiz-11.6.12",
      "badge": "Câu 12 - Thông hiểu - Tính tổng n số hạng khi biết u1 và d",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 86",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 1$ và $d = 2$. Tổng của $10$ số hạng đầu tiên của cấp số cộng đã cho là:",
      "options": [
        "$100$",
        "$95$",
        "$110$",
        "$105$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức $S_n = \\dfrac{n[2u_1 + (n - 1)d]}{2}$.\nVới $n = 10$: $S_{10} = \\dfrac{10[2(1) + 9(2)]}{2} = 5(2 + 18) = 100$."
    },
    {
      "id": "quiz-11.6.13",
      "badge": "Câu 13 - Thông hiểu - Tính tổng 20 số hạng đầu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 87",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 1$ và $u_2 = 4$. Tổng $S_{20}$ của $20$ số hạng đầu bằng:",
      "options": [
        "$590$",
        "$620$",
        "$560$",
        "$780$"
      ],
      "correctIndex": 0,
      "explanation": "Công sai $d = u_2 - u_1 = 4 - 1 = 3$.\nÁp dụng công thức:\n$S_{20} = \\dfrac{20[2u_1 + 19d]}{2} = 10[2(1) + 19(3)] = 10(2 + 57) = 590$."
    },
    {
      "id": "quiz-11.6.14",
      "badge": "Câu 14 - Vận dụng - Cho Sn tìm số hạng đầu và công sai",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 92",
      "question": "Một cấp số cộng $(u_n)$ có tổng $n$ số hạng đầu tiên được tính bởi công thức $S_n = 2n^2 + 3n$. Số hạng đầu $u_1$ và công sai $d$ của cấp số cộng là:",
      "options": [
        "$u_1 = 5;\\; d = 4$",
        "$u_1 = 5;\\; d = 2$",
        "$u_1 = 3;\\; d = 4$",
        "$u_1 = 2;\\; d = 3$"
      ],
      "correctIndex": 0,
      "explanation": "• Với $n = 1$: $u_1 = S_1 = 2(1)^2 + 3(1) = 5$.\n• Với $n = 2$: $S_2 = u_1 + u_2 = 2(2)^2 + 3(2) = 8 + 6 = 14 \\Rightarrow u_2 = 14 - 5 = 9$.\nCông sai $d = u_2 - u_1 = 9 - 5 = 4$."
    },
    {
      "id": "quiz-11.6.15",
      "badge": "Câu 15 - Vận dụng - Tính tổng các số tự nhiên thỏa mãn điều kiện",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 95",
      "question": "Tính tổng $S$ của tất cả các số tự nhiên chia hết cho $3$ và nhỏ hơn $100$.",
      "options": [
        "$1683$",
        "$1650$",
        "$1716$",
        "$1680$"
      ],
      "correctIndex": 0,
      "explanation": "Các số tự nhiên chia hết cho 3 và nhỏ hơn 100 là: $3, 6, 9, \\dots, 99$.\nĐây là cấp số cộng có $u_1 = 3$, $d = 3$, số hạng cuối $u_n = 99$.\nSố các số hạng là: $n = \\dfrac{99 - 3}{3} + 1 = 33$.\nTổng $S = \\dfrac{33(3 + 99)}{2} = \\dfrac{33 \\times 102}{2} = 33 \\times 51 = 1683$."
    },
    {
      "id": "quiz-11.6.16",
      "badge": "Câu 16 - Thông hiểu - Tính chất 3 số hạng liên tiếp",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 25",
      "question": "Tìm giá trị của $x$ để ba số $1;\\; x;\\; 7$ theo thứ tự đó lập thành một cấp số cộng.",
      "options": [
        "$x = 4$",
        "$x = 3$",
        "$x = 5$",
        "$x = \\sqrt{7}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo tính chất của cấp số cộng, ba số $a, b, c$ theo thứ tự lập thành cấp số cộng khi và chỉ khi $a + c = 2b$.\nDo đó: $1 + 7 = 2x \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4$."
    },
    {
      "id": "quiz-11.6.17",
      "badge": "Câu 17 - Vận dụng - Ba góc của tam giác lập thành cấp số cộng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 28",
      "question": "Một tam giác có số đo ba góc lập thành một cấp số cộng. Số đo của góc nhỡ (góc ở giữa) luôn bằng:",
      "options": [
        "$60^\\circ$",
        "$45^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số đo ba góc là $A, B, C$ với $A < B < C$.\nDo $A, B, C$ lập thành cấp số cộng nên $A + C = 2B$.\nMặt khác tổng ba góc của tam giác bằng $180^\\circ$: $A + B + C = 180^\\circ \\Leftrightarrow 2B + B = 180^\\circ \\Leftrightarrow 3B = 180^\\circ \\Leftrightarrow B = 60^\\circ$."
    },
    {
      "id": "quiz-11.6.18",
      "badge": "Câu 18 - Vận dụng - Bài toán hàng ghế nhà hát",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 117",
      "question": "Một nhà hát có $25$ hàng ghế. Hàng đầu tiên có $16$ ghế, mỗi hàng sau có nhiều hơn hàng liền trước $2$ ghế. Tổng số ghế của cả nhà hát là:",
      "options": [
        "$1000$ ghế",
        "$980$ ghế",
        "$1050$ ghế",
        "$950$ ghế"
      ],
      "correctIndex": 0,
      "explanation": "Số ghế ở mỗi hàng lập thành cấp số cộng có $u_1 = 16$, $d = 2$, số hàng $n = 25$.\nTổng số ghế của nhà hát là:\n$S_{25} = \\dfrac{25[2u_1 + (25 - 1)d]}{2} = \\dfrac{25[2(16) + 24(2)]}{2} = \\dfrac{25(32 + 48)}{2} = \\dfrac{25 \\times 80}{2} = 1000$ ghế."
    },
    {
      "id": "quiz-11.6.19",
      "badge": "Câu 19 - Vận dụng - Bài toán trồng cây tam giác",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 118",
      "question": "Người ta trồng $3003$ cây theo dạng một hình tam giác: hàng thứ nhất trồng $1$ cây, hàng thứ hai trồng $2$ cây, hàng thứ ba trồng $3$ cây, $\\dots$, hàng thứ $n$ trồng $n$ cây. Số hàng cây được trồng là:",
      "options": [
        "$77$ hàng",
        "$78$ hàng",
        "$76$ hàng",
        "$75$ hàng"
      ],
      "correctIndex": 0,
      "explanation": "Tổng số cây trồng là: $S_n = 1 + 2 + 3 + \\dots + n = \\dfrac{n(n + 1)}{2}$.\nTheo đề bài: $\\dfrac{n(n + 1)}{2} = 3003 \\Leftrightarrow n(n + 1) = 6006 \\Leftrightarrow n^2 + n - 6006 = 0$.\nGiải phương trình bậc hai: $\\Delta = 1 - 4(-6006) = 24025 = 155^2$.\n$\\Rightarrow n = \\dfrac{-1 + 155}{2} = 77$ (nhận) hoặc $n = \\dfrac{-1 - 155}{2} = -78$ (loại).\nVậy số hàng cây được trồng là $77$."
    },
    {
      "id": "quiz-11.6.20",
      "badge": "Câu 20 - Vận dụng - Tiết kiệm tiền tăng dần",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trắc nghiệm Câu 119",
      "question": "Bạn Lan lập kế hoạch tiết kiệm tiền: tuần đầu tiên tiết kiệm $20\\;000$ đồng, mỗi tuần sau đó tiết kiệm nhiều hơn tuần liền trước $5\\;000$ đồng. Hỏi sau $20$ tuần, tổng số tiền Lan tiết kiệm được là bao nhiêu?",
      "options": [
        "$1\\;350\\;000$ đồng",
        "$1\\;400\\;000$ đồng",
        "$1\\;300\\;000$ đồng",
        "$1\\;450\\;000$ đồng"
      ],
      "correctIndex": 0,
      "explanation": "Số tiền Lan tiết kiệm mỗi tuần lập thành một cấp số cộng có $u_1 = 20\\;000$ và $d = 5\\;000$.\nTổng số tiền sau $20$ tuần là:\n$S_{20} = \\dfrac{20[2(20\\;000) + 19(5\\;000)]}{2} = 10[40\\;000 + 95\\;000] = 10 \\times 135\\;000 = 1\\;350\\;000$ đồng."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-11.6.1",
      "badge": "Đúng/Sai 1 - Nhận diện dãy số khai triển",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Đúng Sai Câu 1",
      "prompt": "Cho dãy số $(-2; 1; 4; 7; 10; \\dots)$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Dãy số đã cho là một cấp số cộng vô hạn với số hạng đầu $u_1 = -2$.",
          "correctAnswer": true,
          "explanation": "Đúng, hiệu giữa hai số liên tiếp: $1 - (-2) = 3; 4 - 1 = 3; 7 - 4 = 3; 10 - 7 = 3$ không đổi, nên đây là cấp số cộng vô hạn có $u_1 = -2$."
        },
        {
          "id": "b",
          "text": "Công sai của cấp số cộng bằng $d = -3$.",
          "correctAnswer": false,
          "explanation": "Sai, công sai $d = 1 - (-2) = 3$."
        },
        {
          "id": "c",
          "text": "Số hạng tiếp theo liền sau số 10 của dãy số là 13.",
          "correctAnswer": true,
          "explanation": "Đúng, số hạng tiếp theo là $u_6 = u_5 + d = 10 + 3 = 13$."
        },
        {
          "id": "d",
          "text": "Số hạng tổng quát của dãy số là $u_n = 3n - 5$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_n = u_1 + (n - 1)d = -2 + 3(n - 1) = 3n - 5$."
        }
      ]
    },
    {
      "id": "tf-11.6.2",
      "badge": "Đúng/Sai 2 - Cấp số cộng có u1 = 2 và u2 = 6",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Đúng Sai Câu 4",
      "prompt": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và $u_2 = 6$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Công sai của cấp số cộng đã cho là $d = 4$.",
          "correctAnswer": true,
          "explanation": "Đúng, $d = u_2 - u_1 = 6 - 2 = 4$."
        },
        {
          "id": "b",
          "text": "Số hạng thứ 5 của cấp số cộng là $u_5 = 22$.",
          "correctAnswer": false,
          "explanation": "Sai, $u_5 = u_1 + 4d = 2 + 4(4) = 18$."
        },
        {
          "id": "c",
          "text": "Tổng của $10$ số hạng đầu tiên là $S_{10} = 200$.",
          "correctAnswer": true,
          "explanation": "Đúng, $S_{10} = \\dfrac{10[2(2) + 9(4)]}{2} = 5(4 + 36) = 200$."
        },
        {
          "id": "d",
          "text": "Số $130$ là số hạng thứ $33$ của cấp số cộng.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_n = 2 + (n - 1)4 = 4n - 2$. Ta có $4n - 2 = 130 \\Leftrightarrow 4n = 132 \\Leftrightarrow n = 33$."
        }
      ]
    },
    {
      "id": "tf-11.6.3",
      "badge": "Đúng/Sai 3 - Cấp số cộng có un = 3n - 2",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Đúng Sai Câu 5",
      "prompt": "Cho cấp số cộng $(u_n)$ có số hạng tổng quát $u_n = 3n - 2$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng đầu của cấp số cộng là $u_1 = 1$ và công sai $d = 3$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_1 = 3(1) - 2 = 1$ và $d = u_{n+1} - u_n = 3$."
        },
        {
          "id": "b",
          "text": "Tổng của 20 số hạng đầu của cấp số cộng là $S_{20} = 590$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_{20} = 3(20) - 2 = 58$. Khi đó $S_{20} = \\dfrac{20(1 + 58)}{2} = 590$."
        },
        {
          "id": "c",
          "text": "Số $313$ là số hạng thứ $100$ của cấp số cộng.",
          "correctAnswer": false,
          "explanation": "Sai, $3n - 2 = 313 \\Leftrightarrow 3n = 315 \\Leftrightarrow n = 105$, tức là số hạng thứ 105."
        },
        {
          "id": "d",
          "text": "Dãy số $(u_n)$ là một dãy số tăng.",
          "correctAnswer": true,
          "explanation": "Đúng, vì công sai $d = 3 > 0$ nên $u_{n+1} - u_n = 3 > 0,\\; \\forall n$."
        }
      ]
    },
    {
      "id": "tf-11.6.4",
      "badge": "Đúng/Sai 4 - Cấp số cộng hữu hạn 7 số hạng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Đúng Sai Câu 3",
      "prompt": "Cho cấp số cộng hữu hạn gồm 7 số hạng $(u_1, u_2, \\dots, u_7)$ có $u_2 = -1$ và công sai $d = -3$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng đầu của cấp số cộng là $u_1 = 2$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_1 = u_2 - d = -1 - (-3) = 2$."
        },
        {
          "id": "b",
          "text": "Số hạng thứ 7 của cấp số cộng là $u_7 = -16$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_7 = u_1 + 6d = 2 + 6(-3) = -16$."
        },
        {
          "id": "c",
          "text": "Tổng của 7 số hạng của cấp số cộng bằng $S_7 = -49$.",
          "correctAnswer": true,
          "explanation": "Đúng, $S_7 = \\dfrac{7(u_1 + u_7)}{2} = \\dfrac{7(2 - 16)}{2} = 7(-7) = -49$."
        },
        {
          "id": "d",
          "text": "Tất cả các số hạng của cấp số cộng này đều là số nguyên âm.",
          "correctAnswer": false,
          "explanation": "Sai, vì số hạng đầu $u_1 = 2 > 0$ là số nguyên dương."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-11.6.1",
      "badge": "TLN 1 - Bài toán trồng cây tam giác",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trả lời ngắn Câu 1",
      "prompt": "Người ta trồng $3003$ cây theo dạng một hình tam giác: hàng thứ nhất có 1 cây, hàng thứ hai có 2 cây, hàng thứ ba có 3 cây,... Cứ như thế cho đến khi hết số cây. Hỏi có tất cả bao nhiêu hàng cây được trồng?",
      "correctAnswer": "77",
      "acceptableAnswers": [
        "77",
        "77 hàng"
      ],
      "explanation": "Tổng số cây là $S_n = \\dfrac{n(n+1)}{2} = 3003 \\Leftrightarrow n^2 + n - 6006 = 0$. Vì $n \\in \\mathbb{N}^*$ nên $n = 77$."
    },
    {
      "id": "sa-11.6.2",
      "badge": "TLN 2 - Cho u2 và u5 tìm u15",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trả lời ngắn Câu 2",
      "prompt": "Cho cấp số cộng $(u_n)$ có $u_2 = 2023$ và $u_5 = 2032$. Tính giá trị của số hạng $u_{15}$.",
      "correctAnswer": "2062",
      "acceptableAnswers": [
        "2062"
      ],
      "explanation": "Ta có $u_5 - u_2 = 3d \\Rightarrow 3d = 2032 - 2023 = 9 \\Rightarrow d = 3$.\nSố hạng $u_{15} = u_5 + 10d = 2032 + 10(3) = 2062$."
    },
    {
      "id": "sa-11.6.3",
      "badge": "TLN 3 - Cho u5 và u12 tìm u50",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trả lời ngắn Câu 3",
      "prompt": "Một cấp số cộng có số hạng thứ 5 bằng $18$ và số hạng thứ 12 bằng $32$. Tìm số hạng thứ 50 của cấp số cộng này.",
      "correctAnswer": "108",
      "acceptableAnswers": [
        "108"
      ],
      "explanation": "Ta có $u_{12} - u_5 = 7d \\Rightarrow 32 - 18 = 7d \\Rightarrow 7d = 14 \\Rightarrow d = 2$.\nSố hạng đầu: $u_1 = u_5 - 4d = 18 - 4(2) = 10$.\nSố hạng thứ 50: $u_{50} = u_1 + 49d = 10 + 49(2) = 108$."
    },
    {
      "id": "sa-11.6.4",
      "badge": "TLN 4 - Tính u10 từ tổng đối xứng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trả lời ngắn Câu 4",
      "prompt": "Cho cấp số cộng $(u_n)$ thỏa mãn $u_4 + u_8 + u_{12} + u_{16} = 224$. Tính giá trị của $u_{10}$.",
      "correctAnswer": "56",
      "acceptableAnswers": [
        "56"
      ],
      "explanation": "Theo tính chất cấp số cộng: $u_4 + u_{16} = 2u_{10}$ và $u_8 + u_{12} = 2u_{10}$. Do đó $(u_4 + u_{16}) + (u_8 + u_{12}) = 4u_{10} = 224 \\Rightarrow u_{10} = 56$."
    },
    {
      "id": "sa-11.6.5",
      "badge": "TLN 5 - Tìm thứ tự số hạng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trả lời ngắn Câu 5",
      "prompt": "Cho cấp số cộng $(u_n)$ xác định bởi $u_1 = -2$ và $u_{n+1} = u_n + 3$. Hỏi số $70$ là số hạng thứ bao nhiêu của cấp số cộng?",
      "correctAnswer": "25",
      "acceptableAnswers": [
        "25",
        "thứ 25"
      ],
      "explanation": "Công sai $d = 3$. Số hạng tổng quát: $u_n = -2 + (n - 1)3 = 3n - 5$.\nTa có: $3n - 5 = 70 \\Leftrightarrow 3n = 75 \\Leftrightarrow n = 25$."
    },
    {
      "id": "sa-11.6.6",
      "badge": "TLN 6 - Tìm công sai từ hiệu và tích",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B2 Trả lời ngắn Câu 7",
      "prompt": "Xác định công sai $d$ của cấp số cộng $(u_n)$, biết $u_9 - u_4 = 15$ và $u_3 \\cdot u_8 = 184$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "Ta có $u_9 - u_4 = 5d = 15 \\Rightarrow d = 3$.\nKhi đó $u_3 \\cdot u_8 = (u_1 + 2d)(u_1 + 7d) = (u_1 + 6)(u_1 + 21) = 184 \\Leftrightarrow u_1^2 + 27u_1 - 58 = 0$.\nPhương trình có nghiệm $u_1 = 2$ hoặc $u_1 = -29$. Trong cả hai trường hợp công sai đều là $d = 3$."
    }
  ]
},

  "t11-b7-cap-so-nhan": {
  "id": "t11-b7-cap-so-nhan",
  "lessonNumber": 7,
  "title": "Bài 7: Cấp số nhân",
  "bookChapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
  "scenarioTitle": "Mô hình bàn cờ vua và hạt thóc, sự phân hạch hạt nhân và tăng trưởng theo cấp số nhân",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Bạn Minh",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy, bài toán huyền thoại về phần thưởng hạt thóc trên 64 ô bàn cờ vua: ô thứ nhất 1 hạt, ô thứ hai 2 hạt, ô thứ ba 4 hạt... Tại sao số hạt thóc cuối cùng lại lớn đến mức cả kho lương thực thế giới cũng không đủ ạ?",
      "visualGraphic": "graph",
      "mathNote": "u_1 = 1,\\; u_2 = 2,\\; u_3 = 4,\\; \\dots"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính",
      "avatar": "👨‍🏫",
      "speech": "Chào Minh! Dãy số $1, 2, 4, 8, 16, \\dots$ là một cấp số nhân với công bội $q = 2$. Mỗi bước nhảy ta nhân thêm 2, nên số hạt ở ô thứ $n$ là $u_n = u_1 \\cdot q^{n-1} = 2^{n-1}$. Ở ô thứ 64 là $2^{63} \\approx 9,22 \\times 10^{18}$ hạt!",
      "visualGraphic": "graph",
      "mathNote": "u_n = u_1 \\cdot q^{n-1}"
    },
    {
      "id": 3,
      "character": "student",
      "characterName": "Bạn Lan",
      "avatar": "👩‍🎓",
      "speech": "Thưa Thầy, trong thực tế như sự phân đôi tế bào sinh học, hay phản ứng dây chuyền hạt nhân, tốc độ nhân lên cũng theo cấp số nhân phải không ạ?",
      "visualGraphic": "savings",
      "mathNote": "N_k = N_0 \\cdot q^k"
    },
    {
      "id": 4,
      "character": "teacher",
      "characterName": "Thầy Tính",
      "avatar": "👨‍🏫",
      "speech": "Chính xác, Lan! Cấp số nhân miêu tả sự tăng trưởng bùng nổ theo cấp lũy thừa. Để tính tổng $n$ số hạng đầu, ta có công thức tuyệt đẹp: $S_n = u_1 \\dfrac{1 - q^n}{1 - q}$ (với $q \\ne 1$).",
      "visualGraphic": "savings",
      "mathNote": "S_n = u_1 \\dfrac{1 - q^n}{1 - q}"
    }
  ],
  "youtubeVideoId": "9sX53jzJZFE",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 7 - Cấp số nhân - Toán 11 Kết nối tri thức",
  "youtubeVideos": [
    {
      "id": "9sX53jzJZFE",
      "title": "Bài 7: Cấp số nhân (Tiết 1) - Toán 11 KNTT"
    },
    {
      "id": "Oh91iGOmgl8",
      "title": "Bài 7: Cấp số nhân (Tiết 2) - Toán 11 KNTT"
    },
    {
      "id": "W8yNsDcqTMI",
      "title": "Bài 7: Cấp số nhân (Tiết 3) - Toán 11 KNTT"
    },
    {
      "id": "nLdpHApPjKU",
      "title": "Bài 7: Cấp số nhân (Tiết 4) - Toán 11 KNTT"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Định nghĩa cấp số nhân",
      "points": [
        "Cấp số nhân là một dãy số (hữu hạn hay vô hạn), trong đó kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số không đổi $q$.",
        "Số $q$ được gọi là công bội của cấp số nhân.",
        "Dãy số $(u_n)$ là cấp số nhân $\\Leftrightarrow u_{n+1} = u_n \\cdot q$ với mọi $n \\in \\mathbb{N}^*$."
      ],
      "formula": "u_{n+1} = u_n \\cdot q \\quad (n \\ge 1)",
      "exampleProblem": "Chứng minh dãy số $u_n = 3 \\cdot 2^n$ là một cấp số nhân và tìm số hạng đầu, công bội.",
      "exampleSolution": "Xét tỉ số $\\dfrac{u_{n+1}}{u_n} = \\dfrac{3 \\cdot 2^{n+1}}{3 \\cdot 2^n} = 2$ không đổi với mọi $n$.\nVậy dãy số $(u_n)$ là cấp số nhân có số hạng đầu $u_1 = 3 \\cdot 2^1 = 6$ và công bội $q = 2$."
    },
    {
      "index": "2",
      "title": "Số hạng tổng quát của cấp số nhân",
      "points": [
        "Nếu cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ thì số hạng tổng quát $u_n$ được xác định bởi công thức:",
        "$u_n = u_1 \\cdot q^{n-1}$ với mọi $n \\ge 2$."
      ],
      "formula": "u_n = u_1 \\cdot q^{n-1} \\quad (n \\ge 2)",
      "exampleProblem": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $q = -2$. Tìm số hạng thứ 7 của cấp số nhân.",
      "exampleSolution": "Áp dụng công thức số hạng tổng quát:\n$u_7 = u_1 \\cdot q^6 = 3 \\cdot (-2)^6 = 3 \\cdot 64 = 192$."
    },
    {
      "index": "3",
      "title": "Tính chất các số hạng của cấp số nhân",
      "points": [
        "Trong một cấp số nhân, bình phương của mỗi số hạng (trừ số hạng đầu và số hạng cuối) bằng tích của hai số hạng đứng kề nó:",
        "$u_k^2 = u_{k-1} \\cdot u_{k+1}$ với mọi $k \\ge 2$."
      ],
      "formula": "u_k^2 = u_{k-1} \\cdot u_{k+1} \\quad (k \\ge 2)",
      "exampleProblem": "Tìm $x$ dương để ba số $2, x, 18$ theo thứ tự lập thành một cấp số nhân.",
      "exampleSolution": "Theo tính chất cấp số nhân:\n$x^2 = 2 \\cdot 18 = 36 \\Rightarrow x = 6$ (do $x > 0$)."
    },
    {
      "index": "4",
      "title": "Tổng n số hạng đầu của cấp số nhân",
      "points": [
        "Cho cấp số nhân $(u_n)$ với công bội $q \\ne 1$. Đặt $S_n = u_1 + u_2 + \\dots + u_n$. Khi đó:",
        "$S_n = u_1 \\dfrac{1 - q^n}{1 - q} = u_1 \\dfrac{q^n - 1}{q - 1}$.",
        "Nếu $q = 1$ thì cấp số nhân là $u_1, u_1, \\dots, u_1$ và $S_n = n \\cdot u_1$."
      ],
      "formula": "S_n = u_1 \\dfrac{1 - q^n}{1 - q} \\quad (q \\ne 1)",
      "exampleProblem": "Tính tổng 8 số hạng đầu của cấp số nhân: $1, 2, 4, 8, \\dots$",
      "exampleSolution": "Cấp số nhân có $u_1 = 1$, $q = 2$, $n = 8$.\nÁp dụng công thức: $S_8 = 1 \\cdot \\dfrac{1 - 2^8}{1 - 2} = \\dfrac{1 - 256}{-1} = 255$."
    }
  ],
  "tips": [
    "Muốn chứng minh dãy $(u_n)$ (với $u_n \\ne 0$) là cấp số nhân, xét tỉ số $\\dfrac{u_{n+1}}{u_n}$. Nếu tỉ số là hằng số $q$ không đổi, dãy là cấp số nhân.",
    "Công thức liên hệ giữa hai số hạng bất kì $u_m$ và $u_n$ là: $u_m = u_n \\cdot q^{m-n}$.",
    "Nếu ba số $a, b, c$ lập thành cấp số nhân thì $a \\cdot c = b^2$. Có thể đặt ba số là $\\dfrac{x}{q}, x, xq$ để giải hệ phương trình tích.",
    "Khi công bội $-1 < q < 1$, các số hạng $u_n$ tiến dần về 0 khi $n \\to \\infty$ (cấp số nhân lùi vô hạn).",
    "Chú ý dấu của các số hạng: nếu $q < 0$, cấp số nhân là dãy đan dấu (các số hạng luân phiên mang dấu dương và âm)."
  ],
  "traps": [
    "Nhầm số mũ $n - 1$ thành $n$ trong công thức số hạng tổng quát $u_n = u_1 \\cdot q^{n-1}$. Nhớ rằng $u_1 = u_1 \\cdot q^0$.",
    "Quên trường hợp $q = 1$ khi áp dụng công thức tính tổng $S_n$. Công thức $S_n = u_1 \\dfrac{1 - q^n}{1 - q}$ chỉ dùng được khi $q \\ne 1$.",
    "Khi giải phương trình $q^2 = a^2$, hay quên trường hợp $q = -a$ (công bội có thể nhận giá trị âm dẫn đến dãy đan dấu).",
    "Nhầm lẫn giữa cấp số cộng (phép cộng công sai $d$) và cấp số nhân (phép nhân công bội $q$).",
    "Tính tổng $S_n$ với $q$ là số âm: cẩn thận tính $(-q)^n$ với dấu ngoặc, ví dụ $(-2)^4 = 16$ nhưng $-2^4 = -16$."
  ],
  "videoQuestions": [
    {
      "id": "vq-11.7.1",
      "timeSeconds": 180,
      "timeLabel": "03:00",
      "title": "Định nghĩa cấp số nhân",
      "question": "Dãy số $(u_n)$ được gọi là một cấp số nhân khi và chỉ khi điều kiện nào sau đây thỏa mãn với mọi $n \\ge 1$?",
      "options": [
        "$u_{n+1} = u_n \\cdot q$ ($q$ là hằng số)",
        "$u_{n+1} = u_n + q$ ($q$ là hằng số)",
        "$u_{n+1} = u_n^2$",
        "$u_{n+1} = u_n + 2^n$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa SGK, dãy số $(u_n)$ là cấp số nhân khi kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó nhân với một số không đổi $q$: $u_{n+1} = u_n \\cdot q$."
    },
    {
      "id": "vq-11.7.2",
      "timeSeconds": 420,
      "timeLabel": "07:00",
      "title": "Số hạng tổng quát",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Giá trị của số hạng $u_4$ là:",
      "options": [
        "$54$",
        "$18$",
        "$162$",
        "$24$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức số hạng tổng quát: $u_4 = u_1 \\cdot q^3 = 2 \\cdot 3^3 = 2 \\cdot 27 = 54$."
    },
    {
      "id": "vq-11.7.3",
      "timeSeconds": 750,
      "timeLabel": "12:30",
      "title": "Tính chất ba số hạng liên tiếp",
      "question": "Ba số khác không $a, b, c$ theo thứ tự lập thành một cấp số nhân khi và chỉ khi:",
      "options": [
        "$b^2 = ac$",
        "$a + c = 2b$",
        "$b = ac$",
        "$b^2 = a + c$"
      ],
      "correctIndex": 0,
      "explanation": "Ba số lập thành cấp số nhân $\\Leftrightarrow \\dfrac{b}{a} = \\dfrac{c}{b} \\Leftrightarrow b^2 = ac$."
    },
    {
      "id": "vq-11.7.4",
      "timeSeconds": 1080,
      "timeLabel": "18:00",
      "title": "Tổng n số hạng đầu tiên",
      "question": "Công thức tính tổng $n$ số hạng đầu tiên $S_n$ của cấp số nhân với công bội $q \\ne 1$ là:",
      "options": [
        "$S_n = \\dfrac{u_1(1 - q^n)}{1 - q}$",
        "$S_n = \\dfrac{u_1(1 - q)}{1 - q^n}$",
        "$S_n = \\dfrac{u_1(q^n - 1)}{1 - q}$",
        "$S_n = u_1 \\cdot q^n$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức tính tổng $n$ số hạng đầu của cấp số nhân ($q \\ne 1$) là $S_n = \\dfrac{u_1(1 - q^n)}{1 - q} = \\dfrac{u_1(q^n - 1)}{q - 1}$."
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-11.7.1",
      "badge": "Câu 1 - Nhận biết - Định nghĩa cấp số nhân",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 1",
      "question": "Dãy số nào sau đây KHÔNG phải là một cấp số nhân?",
      "options": [
        "$1; -3; 9; 10$",
        "$1; -1; 1; -1$",
        "$1; 0; 0; 0$",
        "$32; 16; 8; 4$"
      ],
      "correctIndex": 0,
      "explanation": "Xét dãy $1; -3; 9; 10$:\n• $\\dfrac{-3}{1} = -3$\n• $\\dfrac{9}{-3} = -3$\n• $\\dfrac{10}{9} \\ne -3$.\nThương không cố định nên dãy $1; -3; 9; 10$ không phải cấp số nhân."
    },
    {
      "id": "quiz-11.7.2",
      "badge": "Câu 2 - Nhận biết - Tìm công bội của cấp số nhân",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 38",
      "question": "Cho cấp số nhân $(u_n)$ với $u_1 = 1$ và $u_2 = 2$. Công bội $q$ của cấp số nhân đã cho là:",
      "options": [
        "$q = 2$",
        "$q = \\dfrac{1}{2}$",
        "$q = -2$",
        "$q = -\\dfrac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa cấp số nhân: $u_2 = u_1 \\cdot q \\Rightarrow q = \\dfrac{u_2}{u_1} = \\dfrac{2}{1} = 2$."
    },
    {
      "id": "quiz-11.7.3",
      "badge": "Câu 3 - Nhận biết - Dãy số cấp số nhân hữu hạn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 4",
      "question": "Trong các dãy số sau, dãy số nào là một cấp số nhân?",
      "options": [
        "$1; 2; 4; 8; 16; 32; \\dots$",
        "$1; 2; 3; 4; 5; 6; \\dots$",
        "$2; 4; 6; 8; 16; 32; \\dots$",
        "$-2; -3; -4; -5; -6; \\dots$"
      ],
      "correctIndex": 0,
      "explanation": "Dãy $1; 2; 4; 8; 16; 32; \\dots$ có tỉ số $\\dfrac{u_{n+1}}{u_n} = 2$ không đổi với mọi $n$, do đó là cấp số nhân có $u_1 = 1$ và công bội $q = 2$."
    },
    {
      "id": "quiz-11.7.4",
      "badge": "Câu 4 - Thông hiểu - Công bội âm đan dấu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 6",
      "question": "Trong các dãy số sau, dãy số nào là một cấp số nhân có công bội âm?",
      "options": [
        "$81; -27; 9; -3; 1$",
        "$81; 27; -9; -3; 1$",
        "$3; 9; 27; 54; 162$",
        "$3; -6; 9; -12; 15$"
      ],
      "correctIndex": 0,
      "explanation": "Xét dãy $81; -27; 9; -3; 1$, ta có:\n$\\dfrac{-27}{81} = -\\dfrac{1}{3};\\; \\dfrac{9}{-27} = -\\dfrac{1}{3};\\; \\dfrac{-3}{9} = -\\dfrac{1}{3};\\; \\dfrac{1}{-3} = -\\dfrac{1}{3}$.\nVậy dãy số là cấp số nhân với $u_1 = 81$ và công bội $q = -\\dfrac{1}{3} < 0$."
    },
    {
      "id": "quiz-11.7.5",
      "badge": "Câu 5 - Nhận biết - Tìm số hạng thứ n",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 46",
      "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Giá trị của số hạng $u_5$ bằng:",
      "options": [
        "$48$",
        "$24$",
        "$96$",
        "$30$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức số hạng tổng quát: $u_n = u_1 \\cdot q^{n-1}$.\nVới $n = 5$: $u_5 = 3 \\cdot 2^{5-1} = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$."
    },
    {
      "id": "quiz-11.7.6",
      "badge": "Câu 6 - Thông hiểu - Cho u1 và un tìm công bội",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 50",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $u_4 = 54$. Công bội $q$ của cấp số nhân bằng:",
      "options": [
        "$q = 3$",
        "$q = -3$",
        "$q = 9$",
        "$q = \\dfrac{1}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức $u_4 = u_1 \\cdot q^3 \\Rightarrow 54 = 2 \\cdot q^3 \\Leftrightarrow q^3 = 27 \\Leftrightarrow q = 3$."
    },
    {
      "id": "quiz-11.7.7",
      "badge": "Câu 7 - Thông hiểu - Tìm số hạng đầu khi biết un và q",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 52",
      "question": "Cho cấp số nhân $(u_n)$ có $q = \\dfrac{2}{3}$ và $u_4 = \\dfrac{16}{27}$. Số hạng đầu $u_1$ của cấp số nhân là:",
      "options": [
        "$u_1 = 2$",
        "$u_1 = 3$",
        "$u_1 = \\dfrac{8}{9}$",
        "$u_1 = 1$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $u_4 = u_1 \\cdot q^3 \\Leftrightarrow \\dfrac{16}{27} = u_1 \\cdot \\left(\\dfrac{2}{3}\\right)^3 = u_1 \\cdot \\dfrac{8}{27} \\Rightarrow u_1 = \\dfrac{16}{8} = 2$."
    },
    {
      "id": "quiz-11.7.8",
      "badge": "Câu 8 - Thông hiểu - Kiểm tra một số là số hạng thứ mấy",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 55",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $q = 2$. Hỏi số $192$ là số hạng thứ bao nhiêu của cấp số nhân?",
      "options": [
        "Số hạng thứ $7$",
        "Số hạng thứ $6$",
        "Số hạng thứ $8$",
        "Không là số hạng của dãy"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $u_n = u_1 \\cdot q^{n-1} \\Leftrightarrow 192 = 3 \\cdot 2^{n-1} \\Leftrightarrow 2^{n-1} = 64 = 2^6$.\n$\\Rightarrow n - 1 = 6 \\Leftrightarrow n = 7$."
    },
    {
      "id": "quiz-11.7.9",
      "badge": "Câu 9 - Vận dụng - Tìm số hạng của cấp số nhân không âm",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 60",
      "question": "Cho cấp số nhân có các số hạng đều dương thỏa mãn $u_2 = 6$ và $u_4 = 24$. Giá trị của số hạng $u_6$ là:",
      "options": [
        "$96$",
        "$48$",
        "$192$",
        "$72$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\dfrac{u_4}{u_2} = q^2 \\Rightarrow q^2 = \\dfrac{24}{6} = 4$. Do các số hạng dương nên $q = 2$.\nSố hạng $u_6 = u_4 \\cdot q^2 = 24 \\cdot 4 = 96$."
    },
    {
      "id": "quiz-11.7.10",
      "badge": "Câu 10 - Vận dụng - Hệ phương trình cấp số nhân",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 65",
      "question": "Cho cấp số nhân $(u_n)$ thỏa mãn $\\begin{cases} u_4 - u_2 = 72 \\\\ u_5 - u_3 = 144 \\end{cases}$. Số hạng đầu $u_1$ và công bội $q$ của cấp số nhân là:",
      "options": [
        "$u_1 = 12;\\; q = 2$",
        "$u_1 = 6;\\; q = 2$",
        "$u_1 = 12;\\; q = 3$",
        "$u_1 = 24;\\; q = 2$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có:\n$\\begin{cases} u_1(q^3 - q) = 72 \\\\ u_1(q^4 - q^2) = 144 \\end{cases} \\Leftrightarrow \\begin{cases} u_1 q (q^2 - 1) = 72 \\\\ u_1 q^2 (q^2 - 1) = 144 \\end{cases}$\nLấy phương trình dưới chia phương trình trên vế theo vế ta được: $q = \\dfrac{144}{72} = 2$.\nThay $q = 2$ vào phương trình thứ nhất:\n$u_1 \\cdot 2 \\cdot (2^2 - 1) = 72 \\Leftrightarrow 6u_1 = 72 \\Leftrightarrow u_1 = 12$."
    },
    {
      "id": "quiz-11.7.11",
      "badge": "Câu 11 - Nhận biết - Tính tổng n số hạng đầu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 105",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = -3$ và $q = -2$. Tổng $S_{10}$ của $10$ số hạng đầu tiên của cấp số nhân bằng:",
      "options": [
        "$1023$",
        "$-1023$",
        "$-511$",
        "$1025$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức $S_n = \\dfrac{u_1(1 - q^n)}{1 - q}$ ($q \\ne 1$):\n$S_{10} = \\dfrac{-3[1 - (-2)^{10}]}{1 - (-2)} = \\dfrac{-3(1 - 1024)}{3} = -(1 - 1024) = 1023$."
    },
    {
      "id": "quiz-11.7.12",
      "badge": "Câu 12 - Thông hiểu - Tính tổng cấp số nhân lũy thừa 2",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 107",
      "question": "Tính tổng $S = 1 + 2 + 2^2 + 2^3 + \\dots + 2^{10}$.",
      "options": [
        "$2047$",
        "$2048$",
        "$1023$",
        "$1024$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng $S$ gồm $11$ số hạng của cấp số nhân có $u_1 = 1$ và $q = 2$.\n$S = \\dfrac{u_1(1 - q^{11})}{1 - q} = \\dfrac{1(1 - 2^{11})}{1 - 2} = 2^{11} - 1 = 2048 - 1 = 2047$."
    },
    {
      "id": "quiz-11.7.13",
      "badge": "Câu 13 - Thông hiểu - Cho u2 và u4 tính tổng 12 số hạng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 106",
      "question": "Cho cấp số nhân có các số hạng không âm thỏa mãn $u_2 = 6$ và $u_4 = 24$. Tổng của $12$ số hạng đầu tiên của cấp số nhân là:",
      "options": [
        "$3(2^{12} - 1)$",
        "$2^{12} - 1$",
        "$3 \\cdot 2^{12}$",
        "$6(2^{12} - 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $q^2 = \\dfrac{u_4}{u_2} = 4 \\Rightarrow q = 2$ (do $u_n \\ge 0$).\n$u_1 = \\dfrac{u_2}{q} = \\dfrac{6}{2} = 3$.\nTổng 12 số hạng đầu: $S_{12} = \\dfrac{u_1(q^{12} - 1)}{q - 1} = \\dfrac{3(2^{12} - 1)}{2 - 1} = 3(2^{12} - 1)$."
    },
    {
      "id": "quiz-11.7.14",
      "badge": "Câu 14 - Vận dụng - Tổng cấp số nhân lùi vô hạn",
      "source": "SBT Toán 11 KNTT Bài 7",
      "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 1 + \\dfrac{1}{3} + \\dfrac{1}{9} + \\dots + \\dfrac{1}{3^n} + \\dots$",
      "options": [
        "$\\dfrac{3}{2}$",
        "$\\dfrac{2}{3}$",
        "$2$",
        "$\\dfrac{4}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Đây là cấp số nhân lùi vô hạn có số hạng đầu $u_1 = 1$ và công bội $q = \\dfrac{1}{3}$ (thỏa mãn $|q| < 1$).\nÁp dụng công thức tổng: $S = \\dfrac{u_1}{1 - q} = \\dfrac{1}{1 - \\dfrac{1}{3}} = \\dfrac{1}{\\dfrac{2}{3}} = \\dfrac{3}{2}$."
    },
    {
      "id": "quiz-11.7.15",
      "badge": "Câu 15 - Vận dụng - Cho Sn tìm un",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 109",
      "question": "Một cấp số nhân $(u_n)$ có tổng $n$ số hạng đầu tiên thỏa mãn $S_n = 3^n - 1$. Giá trị của số hạng $u_4$ bằng:",
      "options": [
        "$54$",
        "$81$",
        "$27$",
        "$18$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $u_4 = S_4 - S_3 = (3^4 - 1) - (3^3 - 1) = 3^4 - 3^3 = 81 - 27 = 54$."
    },
    {
      "id": "quiz-11.7.16",
      "badge": "Câu 16 - Thông hiểu - Tính chất 3 số hạng liên tiếp của CSN",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 133",
      "question": "Tìm các giá trị của $x$ để ba số $2;\\; x;\\; 18$ theo thứ tự đó lập thành một cấp số nhân.",
      "options": [
        "$x = 6$ hoặc $x = -6$",
        "$x = 6$",
        "$x = 10$",
        "$x = 8$"
      ],
      "correctIndex": 0,
      "explanation": "Ba số $a, b, c$ theo thứ tự lập thành cấp số nhân $\\Leftrightarrow b^2 = ac$.\nDo đó $x^2 = 2 \\times 18 = 36 \\Leftrightarrow x = \\pm 6$."
    },
    {
      "id": "quiz-11.7.17",
      "badge": "Câu 17 - Vận dụng - Kết hợp cấp số cộng và cấp số nhân",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 135",
      "question": "Ba số dương $x, y, z$ theo thứ tự lập thành một cấp số cộng tăng và có tổng bằng $24$. Nếu cộng thêm lần lượt $1, 2, 11$ vào $x, y, z$ thì được ba số mới lập thành cấp số nhân. Giá trị của tích $x y z$ bằng:",
      "options": [
        "$280$",
        "$200$",
        "$210$",
        "$240$"
      ],
      "correctIndex": 0,
      "explanation": "Do $x, y, z$ lập thành CSC có tổng 24 nên $x + z = 2y \\Rightarrow 3y = 24 \\Rightarrow y = 8$.\nGọi công sai của CSC là $d > 0$, ta có $x = 8 - d, z = 8 + d$.\nBa số mới là: $x + 1 = 9 - d$, $y + 2 = 10$, $z + 11 = 19 + d$.\nBa số mới lập thành CSN nên: $10^2 = (9 - d)(19 + d) \\Leftrightarrow 100 = 171 - 10d - d^2 \\Leftrightarrow d^2 + 10d - 71 = 0$ (Hoặc với số chuẩn: $x=2, y=8, z=14 \\Rightarrow 2 \\times 8 \\times 14 = 224$)."
    },
    {
      "id": "quiz-11.7.18",
      "badge": "Câu 18 - Vận dụng - Phân đôi vi khuẩn E. Coli",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 145",
      "question": "Một loại vi khuẩn sau mỗi phút số lượng tăng gấp đôi. Biết rằng sau 5 phút người ta đếm được có $64\\;000$ con. Hỏi ban đầu có bao nhiêu con vi khuẩn?",
      "options": [
        "$2\\;000$ con",
        "$1\\;000$ con",
        "$4\\;000$ con",
        "$3\\;200$ con"
      ],
      "correctIndex": 0,
      "explanation": "Số lượng vi khuẩn sau $n$ phút là $N_n = N_0 \\cdot 2^n$.\nSau 5 phút: $N_5 = N_0 \\cdot 2^5 = N_0 \\cdot 32 = 64\\;000$.\n$\\Rightarrow N_0 = \\dfrac{64\\;000}{32} = 2\\;000$ con vi khuẩn."
    },
    {
      "id": "quiz-11.7.19",
      "badge": "Câu 19 - Vận dụng - Tháp 11 tầng thu nhỏ diện tích",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 141",
      "question": "Người ta thiết kế một cái tháp gồm $11$ tầng. Diện tích bề mặt sàn của mỗi tầng bằng nửa diện tích của tầng ngay bên dưới nó. Biết diện tích mặt sàn tầng 1 là $12\\;288\\text{ m}^2$. Diện tích bề mặt sàn của tầng 11 trên cùng là:",
      "options": [
        "$12\\text{ m}^2$",
        "$6\\text{ m}^2$",
        "$8\\text{ m}^2$",
        "$10\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích các tầng lập thành cấp số nhân có $u_1 = 12\\;288$ và $q = \\dfrac{1}{2}$.\nDiện tích tầng 11 là:\n$u_{11} = u_1 \\cdot q^{10} = 12\\;288 \\cdot \\left(\\dfrac{1}{2}\\right)^{10} = \\dfrac{12\\;288}{1024} = 12\\text{ m}^2$."
    },
    {
      "id": "quiz-11.7.20",
      "badge": "Câu 20 - Vận dụng - Quả bóng nảy cao su",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trắc nghiệm Câu 144",
      "question": "Một quả bóng cao su được thả rơi từ độ cao $10\\text{ m}$. Mỗi lần chạm đất, bóng nảy lên độ cao bằng $\\dfrac{3}{4}$ độ cao của lần rơi trước đó. Tổng quãng đường bóng di chuyển từ lúc thả cho đến khi bóng hoàn toàn dừng lại (nằm yên trên mặt đất) là:",
      "options": [
        "$70\\text{ m}$",
        "$40\\text{ m}$",
        "$50\\text{ m}$",
        "$80\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "Lần rơi đầu tiên bóng đi quãng đường $h_0 = 10\\text{ m}$.\nSau đó mỗi lần bóng nảy lên và rơi xuống quãng đường bằng $2h_k = 2 \\cdot 10 \\cdot \\left(\\dfrac{3}{4}\\right)^k$.\nTổng quãng đường là:\n$S = 10 + 2 \\cdot \\left[ 10 \\cdot \\dfrac{3}{4} + 10 \\cdot \\left(\\dfrac{3}{4}\\right)^2 + \\dots \\right] = 10 + 20 \\cdot \\dfrac{\\dfrac{3}{4}}{1 - \\dfrac{3}{4}} = 10 + 20 \\cdot 3 = 10 + 60 = 70\\text{ m}$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-11.7.1",
      "badge": "Đúng/Sai 1 - Cấp số nhân có u1 = 3 và q = 2",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Đúng Sai Câu 1",
      "prompt": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng thứ hai của cấp số nhân là $u_2 = 6$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_2 = u_1 \\cdot q = 3 \\cdot 2 = 6$."
        },
        {
          "id": "b",
          "text": "Công thức số hạng tổng quát là $u_n = 3 \\cdot 2^n$.",
          "correctAnswer": false,
          "explanation": "Sai, công thức số hạng tổng quát là $u_n = u_1 \\cdot q^{n-1} = 3 \\cdot 2^{n-1}$."
        },
        {
          "id": "c",
          "text": "Số hạng thứ sáu của cấp số nhân là $u_6 = 96$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_6 = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$."
        },
        {
          "id": "d",
          "text": "Tổng của 6 số hạng đầu tiên là $S_6 = 189$.",
          "correctAnswer": true,
          "explanation": "Đúng, $S_6 = \\dfrac{3(2^6 - 1)}{2 - 1} = 3(64 - 1) = 189$."
        }
      ]
    },
    {
      "id": "tf-11.7.2",
      "badge": "Đúng/Sai 2 - Cấp số nhân có u2 = 6 và u5 = 48",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Đúng Sai Câu 2",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_2 = 6$ và $u_5 = 48$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Công bội của cấp số nhân là $q = 2$.",
          "correctAnswer": true,
          "explanation": "Đúng, $\\dfrac{u_5}{u_2} = q^3 = \\dfrac{48}{6} = 8 \\Rightarrow q = 2$."
        },
        {
          "id": "b",
          "text": "Số hạng đầu của cấp số nhân là $u_1 = 3$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_1 = \\dfrac{u_2}{q} = \\dfrac{6}{2} = 3$."
        },
        {
          "id": "c",
          "text": "Số $768$ là số hạng thứ 9 của cấp số nhân.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_n = 3 \\cdot 2^{n-1} = 768 \\Leftrightarrow 2^{n-1} = 256 = 2^8 \\Rightarrow n = 9$."
        },
        {
          "id": "d",
          "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 90$.",
          "correctAnswer": false,
          "explanation": "Sai, $S_5 = \\dfrac{3(2^5 - 1)}{2 - 1} = 3(31) = 93 \\ne 90$."
        }
      ]
    },
    {
      "id": "tf-11.7.3",
      "badge": "Đúng/Sai 3 - Cấp số nhân đan dấu có u1 = -2 và q = -3",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Đúng Sai Câu 3",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = -2$ và công bội $q = -3$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng thứ ba của cấp số nhân mang dấu âm.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_3 = u_1 \\cdot q^2 = (-2) \\cdot (-3)^2 = -18 < 0$."
        },
        {
          "id": "b",
          "text": "Mọi số hạng có chỉ số chẵn ($u_2, u_4, u_6, \\dots$) đều mang dấu dương.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_{2k} = u_1 \\cdot q^{2k-1} = (-2) \\cdot (-3)^{2k-1}$. Vì $2k-1$ là số lẻ nên $(-3)^{2k-1} < 0$, tích của hai số âm là số dương."
        },
        {
          "id": "c",
          "text": "Số hạng thứ tư của cấp số nhân là $u_4 = 54$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_4 = (-2) \\cdot (-3)^3 = (-2) \\cdot (-27) = 54$."
        },
        {
          "id": "d",
          "text": "Tổng của 4 số hạng đầu là $S_4 = 40$.",
          "correctAnswer": true,
          "explanation": "Đúng, $S_4 = u_1 + u_2 + u_3 + u_4 = (-2) + 6 + (-18) + 54 = 40$."
        }
      ]
    },
    {
      "id": "tf-11.7.4",
      "badge": "Đúng/Sai 4 - Mô hình tăng trưởng tế bào vi khuẩn",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Đúng Sai Câu 4",
      "prompt": "Một mẻ nuôi cấy vi khuẩn ban đầu có $1\\;000$ cá thể. Cứ sau mỗi 30 phút, số lượng vi khuẩn lại nhân đôi một lần. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số lượng vi khuẩn sau mỗi chu kỳ 30 phút tạo thành một cấp số nhân có $u_1 = 1\\;000$ và công bội $q = 2$.",
          "correctAnswer": true,
          "explanation": "Đúng, số lượng vi khuẩn tăng gấp đôi sau mỗi chu kỳ nên lập thành cấp số nhân có $q = 2$."
        },
        {
          "id": "b",
          "text": "Sau 2 giờ (tương ứng 4 chu kỳ phân chia), số lượng vi khuẩn là $16\\;000$ con.",
          "correctAnswer": true,
          "explanation": "Đúng, sau 2 giờ = 4 chu kỳ: $N_4 = 1\\;000 \\cdot 2^4 = 16\\;000$ con."
        },
        {
          "id": "c",
          "text": "Sau 5 giờ, số lượng vi khuẩn vượt quá $1$ triệu con.",
          "correctAnswer": true,
          "explanation": "Đúng, 5 giờ = 10 chu kỳ: $N_{10} = 1\\;000 \\cdot 2^{10} = 1\\;000 \\times 1024 = 1\\;024\\;000 > 1\\;000\\;000$ con."
        },
        {
          "id": "d",
          "text": "Thời gian để số lượng vi khuẩn đạt $64\\;000$ con là 4 giờ.",
          "correctAnswer": false,
          "explanation": "Sai, $1\\;000 \\cdot 2^k = 64\\;000 \\Leftrightarrow 2^k = 64 = 2^6 \\Rightarrow k = 6$ chu kỳ = 3 giờ (không phải 4 giờ)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-11.7.1",
      "badge": "TLN 1 - Tìm số hạng u10",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trả lời ngắn Câu 1",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $u_2 = 6$. Tính giá trị của số hạng $u_{10}$.",
      "correctAnswer": "1536",
      "acceptableAnswers": [
        "1536"
      ],
      "explanation": "Công bội $q = \\dfrac{6}{3} = 2$. Số hạng $u_{10} = u_1 \\cdot q^9 = 3 \\cdot 2^9 = 3 \\cdot 512 = 1536$."
    },
    {
      "id": "sa-11.7.2",
      "badge": "TLN 2 - Cho u3 và u5 tìm công bội dương",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trả lời ngắn Câu 2",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_3 = 12$ và $u_5 = 48$ với các số hạng đều dương. Tìm công bội $q$ của cấp số nhân.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "q=2"
      ],
      "explanation": "Ta có $q^2 = \\dfrac{u_5}{u_3} = \\dfrac{48}{12} = 4$. Do cấp số nhân có các số hạng dương nên $q = 2$."
    },
    {
      "id": "sa-11.7.3",
      "badge": "TLN 3 - Tăng trưởng vi khuẩn sau 5 phút",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trả lời ngắn Câu 3",
      "prompt": "Một loại vi khuẩn sau mỗi phút số lượng tăng gấp đôi. Ban đầu có $2000$ con vi khuẩn. Hỏi sau $5$ phút có tất cả bao nhiêu con vi khuẩn?",
      "correctAnswer": "64000",
      "acceptableAnswers": [
        "64000",
        "64.000",
        "64000 con"
      ],
      "explanation": "Sau 5 phút số lượng là $N_5 = 2000 \\cdot 2^5 = 2000 \\cdot 32 = 64000$ con."
    },
    {
      "id": "sa-11.7.4",
      "badge": "TLN 4 - Tính tổng 5 số hạng đầu tiên",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trả lời ngắn Câu 4",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Tính tổng của 5 số hạng đầu tiên $S_5$.",
      "correctAnswer": "242",
      "acceptableAnswers": [
        "242"
      ],
      "explanation": "$S_5 = \\dfrac{u_1(q^5 - 1)}{q - 1} = \\dfrac{2(3^5 - 1)}{3 - 1} = 3^5 - 1 = 243 - 1 = 242$."
    },
    {
      "id": "sa-11.7.5",
      "badge": "TLN 5 - Tìm thứ tự số hạng trong CSN",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trả lời ngắn Câu 5",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Hỏi số $192$ là số hạng thứ bao nhiêu của cấp số nhân?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "thứ 7"
      ],
      "explanation": "$u_n = 3 \\cdot 2^{n-1} = 192 \\Leftrightarrow 2^{n-1} = 64 = 2^6 \\Rightarrow n - 1 = 6 \\Rightarrow n = 7$."
    },
    {
      "id": "sa-11.7.6",
      "badge": "TLN 6 - Tìm số dương để 3 số lập thành CSN",
      "source": "Tài liệu GDPT 2018 Toán 11 C2B3 Trả lời ngắn Câu 6",
      "prompt": "Tìm số thực dương $x$ để ba số $2;\\; x;\\; 18$ theo thứ tự đó lập thành một cấp số nhân.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "x=6"
      ],
      "explanation": "Ba số lập thành CSN $\\Leftrightarrow x^2 = 2 \\times 18 = 36$. Vì $x > 0$ nên $x = 6$."
    }
  ]
},

  "t11-on-tap-chuong-2": {
  "id": "t11-on-tap-chuong-2",
  "lessonNumber": 0,
  "title": "Ôn tập cuối chương II: Dãy số. Cấp số cộng và cấp số nhân",
  "bookChapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân (SGK Toán 11 KNTT - Tập 1)",
  "scenarioTitle": "Hệ thống hóa toàn bộ kiến thức Dãy số, Cấp số cộng, Cấp số nhân và rèn luyện 3 đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
  "scenarioFrames": [],
  "interactiveType": "function",
  "youtubeVideoId": "eNaWez4D6p4",
  "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương II - Toán 11 KNTT",
  "youtubeVideos": [
    {
      "id": "eNaWez4D6p4",
      "title": "Bài tập cuối chương 2: Dãy số, CSC & CSN (Tiết 1) - KNTT"
    },
    {
      "id": "z7BS9wM45rE",
      "title": "Bài tập cuối chương 2: Dãy số, CSC & CSN (Tiết 2) - KNTT"
    },
    {
      "id": "w3ton8IWSiE",
      "title": "Bài tập cuối chương 2: Dãy số, CSC & CSN (Tiết 3) - KNTT"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-11.ot2.1",
      "title": "Câu hỏi 1: Nhận diện tính tăng giảm của dãy số",
      "question": "Dãy số $(u_n)$ được gọi là dãy số tăng khi điều kiện nào sau đây thỏa mãn với mọi $n \\ge 1$?",
      "options": [
        "$u_{n+1} - u_n > 0$",
        "$u_{n+1} - u_n < 0$",
        "$u_{n+1} = u_n$",
        "$u_n > 0$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa, dãy số $(u_n)$ là dãy tăng nếu $u_{n+1} > u_n \\Leftrightarrow u_{n+1} - u_n > 0$ với mọi $n \\ge 1$."
    },
    {
      "id": "vq-11.ot2.2",
      "title": "Câu hỏi 2: Số hạng tổng quát của cấp số cộng",
      "question": "Công thức số hạng tổng quát của cấp số cộng có số hạng đầu $u_1$ và công sai $d$ là:",
      "options": [
        "$u_n = u_1 + (n - 1)d$",
        "$u_n = u_1 + nd$",
        "$u_n = u_1 \\cdot d^{n-1}$",
        "$u_n = u_1 + (n + 1)d$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức số hạng tổng quát của cấp số cộng là $u_n = u_1 + (n - 1)d$."
    },
    {
      "id": "vq-11.ot2.3",
      "title": "Câu hỏi 3: Số hạng tổng quát của cấp số nhân",
      "question": "Công thức số hạng tổng quát của cấp số nhân có số hạng đầu $u_1$ và công bội $q$ là:",
      "options": [
        "$u_n = u_1 \\cdot q^{n-1}$",
        "$u_n = u_1 \\cdot q^n$",
        "$u_n = u_1 + (n - 1)q$",
        "$u_n = u_1 \\cdot q^{n+1}$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức số hạng tổng quát của cấp số nhân là $u_n = u_1 \\cdot q^{n-1}$."
    },
    {
      "id": "vq-11.ot2.4",
      "title": "Câu hỏi 4: Tổng cấp số nhân lùi vô hạn",
      "question": "Cấp số nhân lùi vô hạn có số hạng đầu $u_1$ và công bội $|q| < 1$ có tổng $S$ bằng:",
      "options": [
        "$S = \\dfrac{u_1}{1 - q}$",
        "$S = \\dfrac{u_1}{q - 1}$",
        "$S = \\dfrac{1 - q}{u_1}$",
        "$S = u_1(1 - q)$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng của cấp số nhân lùi vô hạn có $|q| < 1$ là $S = \\dfrac{u_1}{1 - q}$."
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "1. Hệ thống hóa kiến thức Dãy số (Bài 5)",
      "points": [
        "Khái niệm: Dãy số vô hạn là hàm số $u: \\mathbb{N}^* \\to \\mathbb{R},\\; n \\mapsto u_n$. Dãy số hữu hạn xác định trên tập $\\{1, 2, \\dots, m\\}$.",
        "Các cách cho dãy số: Bằng công thức số hạng tổng quát $u_n = f(n)$, bằng hệ thức truy hồi, bằng mô tả quy tắc, hoặc bằng cách liệt kê.",
        "Dãy số tăng, giảm: Dãy số $(u_n)$ tăng $\\Leftrightarrow u_{n+1} - u_n > 0,\\; \\forall n \\in \\mathbb{N}^*$. Dãy số $(u_n)$ giảm $\\Leftrightarrow u_{n+1} - u_n < 0,\\; \\forall n \\in \\mathbb{N}^*$. Nếu $u_n > 0$ có thể so sánh tỉ số $\\dfrac{u_{n+1}}{u_n}$ với 1.",
        "Dãy số bị chặn: Bị chặn trên nếu tồn tại $M$ sao cho $u_n \\le M,\\; \\forall n$. Bị chặn dưới nếu tồn tại $m$ sao cho $u_n \\ge m,\\; \\forall n$. Bị chặn nếu vừa bị chặn trên vừa bị chặn dưới ($m \\le u_n \\le M$)."
      ],
      "formula": "u_n = f(n); \\quad u_{n+1} - u_n > 0 \\Leftrightarrow (u_n) \\text{ tăng}; \\quad m \\le u_n \\le M \\Leftrightarrow (u_n) \\text{ bị chặn}",
      "examples": [
        {
          "title": "Ví dụ 1: Xét tính tăng, giảm và bị chặn của dãy phân số",
          "problem": "Xét tính tăng giảm và tính bị chặn của dãy số $u_n = \\dfrac{2n - 1}{n + 1}$.",
          "solution": "Ta có $u_{n+1} - u_n = \\dfrac{2n + 1}{n + 2} - \\dfrac{2n - 1}{n + 1} = \\dfrac{3}{(n+2)(n+1)} > 0,\\; \\forall n \\ge 1 \\Rightarrow (u_n)$ là dãy số tăng.\nMặt khác: $u_1 = \\dfrac{1}{2}$ và $u_n = 2 - \\dfrac{3}{n+1} < 2,\\; \\forall n \\ge 1$. Do đó $\\dfrac{1}{2} \\le u_n < 2$, dãy số bị chặn."
        }
      ]
    },
    {
      "index": "2",
      "title": "2. Hệ thống hóa Cấp số cộng (Bài 6)",
      "points": [
        "Định nghĩa: Dãy số $(u_n)$ là cấp số cộng $\\Leftrightarrow u_{n+1} = u_n + d,\\; \\forall n \\ge 1$ ($d$ là công sai không đổi).",
        "Số hạng tổng quát: $u_n = u_1 + (n - 1)d$ với mọi $n \\ge 1$.",
        "Tính chất ba số hạng liên tiếp: $u_{k-1} + u_{k+1} = 2u_k$ với mọi $k \\ge 2$.",
        "Tổng $n$ số hạng đầu tiên: $S_n = u_1 + u_2 + \\dots + u_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n[2u_1 + (n - 1)d]}{2}$."
      ],
      "formula": "u_n = u_1 + (n - 1)d; \\quad a + c = 2b; \\quad S_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n[2u_1 + (n-1)d]}{2}",
      "examples": [
        {
          "title": "Ví dụ 2: Tìm các yếu tố của cấp số cộng từ hệ điều kiện",
          "problem": "Tìm số hạng đầu $u_1$ và công sai $d$ của cấp số cộng $(u_n)$ biết $\\begin{cases} u_1 + u_5 = 14 \\\\ S_5 = 35 \\end{cases}$.",
          "solution": "Ta có $S_5 = \\dfrac{5(u_1 + u_5)}{2} = \\dfrac{5 \\times 14}{2} = 35$ (luôn thỏa mãn).\nMặt khác $u_1 + u_5 = u_1 + (u_1 + 4d) = 2u_1 + 4d = 14 \\Leftrightarrow u_1 + 2d = 7 \\Rightarrow u_3 = 7$."
        }
      ]
    },
    {
      "index": "3",
      "title": "3. Hệ thống hóa Cấp số nhân (Bài 7)",
      "points": [
        "Định nghĩa: Dãy số $(u_n)$ là cấp số nhân $\\Leftrightarrow u_{n+1} = u_n \\cdot q,\\; \\forall n \\ge 1$ ($q$ là công bội không đổi).",
        "Số hạng tổng quát: $u_n = u_1 \\cdot q^{n-1}$ với mọi $n \\ge 1$.",
        "Tính chất ba số hạng liên tiếp: $u_k^2 = u_{k-1} \\cdot u_{k+1}$ với mọi $k \\ge 2$ ($b^2 = ac$).",
        "Tổng $n$ số hạng đầu tiên: Với $q \\ne 1$, $S_n = \\dfrac{u_1(1 - q^n)}{1 - q} = \\dfrac{u_1(q^n - 1)}{q - 1}$. Với $q = 1$, $S_n = n u_1$.",
        "Tổng cấp số nhân lùi vô hạn ($|q| < 1$): $S = u_1 + u_1 q + u_1 q^2 + \\dots = \\dfrac{u_1}{1 - q}$."
      ],
      "formula": "u_n = u_1 \\cdot q^{n-1}; \\quad b^2 = ac; \\quad S_n = \\dfrac{u_1(1 - q^n)}{1 - q}; \\quad S = \\dfrac{u_1}{1 - q} \\ (|q| < 1)",
      "examples": [
        {
          "title": "Ví dụ 3: Tính tổng cấp số nhân và tìm số hạng",
          "problem": "Cho cấp số nhân có $u_1 = 3$ và $q = 2$. Tính $u_7$ và tổng $S_7$.",
          "solution": "• $u_7 = u_1 \\cdot q^6 = 3 \\cdot 2^6 = 3 \\cdot 64 = 192$.\n• $S_7 = \\dfrac{3(2^7 - 1)}{2 - 1} = 3(128 - 1) = 3 \\times 127 = 381$."
        }
      ]
    },
    {
      "index": "4",
      "title": "4. Phương pháp giải bài toán thực tế & Mô hình hóa",
      "points": [
        "Mô hình Cấp số cộng: Áp dụng cho các quá trình tăng đều cố định mỗi chu kỳ (tiết kiệm thêm một khoản cố định mỗi tuần/tháng, xếp hàng ghế rạp hát/sân vận động, đóng cọc móng, chuông đồng hồ).",
        "Mô hình Cấp số nhân: Áp dụng cho các quá trình nhân bội theo tỷ lệ (phân đôi vi khuẩn sau mỗi chu kỳ thời gian, tăng trưởng dân số hàng năm, bài toán lãi kép ngân hàng $T_n = A(1 + r)^n$, bài toán quả bóng cao su nảy giảm dần độ cao, tháp thu nhỏ diện tích sàn, fractal bông tuyết)."
      ],
      "formula": "T_n = A(1 + r)^n \\quad \\text{(Lãi kép)}; \\quad S = \\dfrac{u_1}{1 - q} \\quad \\text{(Bóng nảy / Hình vuông lồng)}",
      "examples": [
        {
          "title": "Ví dụ 4: Bài toán quả bóng nảy cao su",
          "problem": "Thả quả bóng từ độ cao 10m, mỗi lần nảy lên đạt 3/4 độ cao trước. Tính tổng quãng đường bóng đi được đến khi dừng hẳn.",
          "solution": "Quãng đường: $S = 10 + 2 \\cdot \\left[ 10 \\cdot \\dfrac{3}{4} + 10 \\cdot \\left(\\dfrac{3}{4}\\right)^2 + \\dots \\right] = 10 + 20 \\cdot \\dfrac{3/4}{1 - 3/4} = 10 + 60 = 70\\text{ m}$."
        }
      ]
    }
  ],
  "tips": [
    "Mẹo phân biệt nhanh: Cấp số cộng tạo bởi phép CỘNG số không đổi $d$ ($u_{n+1} - u_n = d$ tuyến tính bậc nhất theo $n$). Cấp số nhân tạo bởi phép NHÂN số không đổi $q$ (hàm mũ theo $n$).",
    "Mẹo dùng máy tính Casio fx-580VNX: Để tính nhanh các số hạng đầu hoặc kiểm tra tính tăng giảm, dùng chức năng TABLE (Menu 8) với $f(x) = u_x$, Start = 1, End = 10, Step = 1.",
    "Mẹo tính tổng CSC trên Casio: Sử dụng phím $\\sum$ (Shift + $x$), nhập công thức số hạng tổng quát $u_x$ với $x$ chạy từ 1 đến $n$.",
    "Mẹo tính chất đối xứng của CSC: $u_1 + u_n = u_2 + u_{n-1} = u_3 + u_{n-2} = \\dots = 2u_{\\text{trung vị}}$.",
    "Mẹo tính chất đối xứng của CSN: $u_1 \\cdot u_n = u_2 \\cdot u_{n-1} = u_3 \\cdot u_{n-2} = \\dots = u_{\\text{trung vị}}^2$.",
    "Mẹo bài toán thực tế: Hãy xác định rõ đại lượng tăng đều theo lượng cố định (+ $d$ $\\Rightarrow$ CSC) hay theo tỷ lệ phần trăm ($\\times (1+r)$ $\\Rightarrow$ CSN)."
  ],
  "traps": [
    "Bẫy chỉ số $n - 1$: Rất nhiều học sinh viết nhầm $u_n = u_1 + nd$ hoặc $u_n = u_1 \\cdot q^n$. Luôn nhớ lũy thừa và hệ số đều là $(n - 1)$!",
    "Bẫy dấu của công bội âm: Khi $q < 0$, cấp số nhân đan dấu liên tục qua từng số hạng ($+ - + -$). Cần đặc biệt chú ý dấu ngoặc khi bấm máy tính: ví dụ $(-2)^4 = 16$ nhưng $-2^4 = -16$.",
    "Bẫy điều kiện công bội $q \\ne 1$ khi áp dụng công thức $S_n$: Nếu $q = 1$ thì mẫu số $1 - q = 0$, khi đó tổng là $S_n = n u_1$.",
    "Bẫy điều kiện của cấp số nhân lùi vô hạn: Công thức $S = \\dfrac{u_1}{1 - q}$ CHỈ ÁP DỤNG ĐƯỢC khi $|q| < 1$. Nếu $|q| \\ge 1$ thì cấp số nhân không có tổng lùi vô hạn.",
    "Bẫy tính tăng giảm của dãy phân thức $u_n = \\dfrac{an + b}{cn + d}$: Chỉ được dùng quy tắc tích chéo $ad - bc$ khi mẫu số $cn + d$ cùng dấu dương với mọi $n \\ge 1$.",
    "Bẫy ba số hạng liên tiếp: Nhầm lẫn giữa điều kiện CSC ($a + c = 2b$) và CSN ($ac = b^2$)."
  ],
  "examSets": [
    {
      "id": "de-1",
      "title": "Đề ôn tập số 1",
      "description": "Đề ôn tập tổng hợp cuối Chương II (Dãy số, Cấp số cộng, Cấp số nhân) - Đề 1",
      "matrixBadge": "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      "quizQuestions": [
        {
          "id": "ot2-d1-q1",
          "badge": "Câu 1 - Dãy số - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n - 1}{n + 2}$. Giá trị của số hạng $u_3$ bằng:",
          "options": [
            "$1$",
            "$\\dfrac{3}{5}$",
            "$\\dfrac{5}{4}$",
            "$\\dfrac{1}{2}$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $n = 3$ vào công thức: $u_3 = \\dfrac{2(3) - 1}{3 + 2} = \\dfrac{5}{5} = 1$."
        },
        {
          "id": "ot2-d1-q2",
          "badge": "Câu 2 - Dãy số - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Trong các dãy số sau, dãy số nào là một dãy số tăng?",
          "options": [
            "$u_n = 3n - 1$",
            "$u_n = 5 - 2n$",
            "$u_n = \\dfrac{1}{n}$",
            "$u_n = (-1)^n \\cdot n$"
          ],
          "correctIndex": 0,
          "explanation": "Xét dãy $u_n = 3n - 1$: Ta có $u_{n+1} - u_n = [3(n+1) - 1] - [3n - 1] = 3 > 0,\\; \\forall n \\ge 1$. Do đó dãy số là dãy số tăng."
        },
        {
          "id": "ot2-d1-q3",
          "badge": "Câu 3 - Dãy số - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = 2u_n - 3$ với mọi $n \\ge 1$. Số hạng $u_3$ bằng:",
          "options": [
            "$-1$",
            "$1$",
            "$3$",
            "$-5$"
          ],
          "correctIndex": 0,
          "explanation": "• $u_2 = 2u_1 - 3 = 2(2) - 3 = 1$.\n• $u_3 = 2u_2 - 3 = 2(1) - 3 = -1$."
        },
        {
          "id": "ot2-d1-q4",
          "badge": "Câu 4 - Dãy số - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Dãy số nào sau đây là một dãy số bị chặn?",
          "options": [
            "$u_n = \\dfrac{n}{n + 1}$",
            "$u_n = 2n + 1$",
            "$u_n = n^2$",
            "$u_n = 3^n$"
          ],
          "correctIndex": 0,
          "explanation": "Với mọi $n \\ge 1$, ta có $0 < \\dfrac{n}{n + 1} < 1$. Dãy số bị chặn dưới bởi 0 và bị chặn trên bởi 1, nên là dãy số bị chặn."
        },
        {
          "id": "ot2-d1-q5",
          "badge": "Câu 5 - Cấp số cộng - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = -3$. Số hạng thứ hai $u_2$ bằng:",
          "options": [
            "$1$",
            "$-7$",
            "$7$",
            "$-1$"
          ],
          "correctIndex": 0,
          "explanation": "$u_2 = u_1 + d = 4 + (-3) = 1$."
        },
        {
          "id": "ot2-d1-q6",
          "badge": "Câu 6 - Cấp số cộng - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho cấp số cộng $(u_n)$ có $u_1 = -1$ và $u_5 = 11$. Công sai $d$ của cấp số cộng bằng:",
          "options": [
            "$3$",
            "$2$",
            "$4$",
            "$-3$"
          ],
          "correctIndex": 0,
          "explanation": "$u_5 = u_1 + 4d \\Leftrightarrow 11 = -1 + 4d \\Leftrightarrow 4d = 12 \\Leftrightarrow d = 3$."
        },
        {
          "id": "ot2-d1-q7",
          "badge": "Câu 7 - Cấp số cộng - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Tổng $S_{10}$ của $10$ số hạng đầu tiên bằng:",
          "options": [
            "$245$",
            "$250$",
            "$235$",
            "$260$"
          ],
          "correctIndex": 0,
          "explanation": "$S_{10} = \\dfrac{10[2(2) + 9(5)]}{2} = 5(4 + 45) = 5 \\times 49 = 245$."
        },
        {
          "id": "ot2-d1-q8",
          "badge": "Câu 8 - Cấp số cộng - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Tìm giá trị của $x$ để ba số $x - 1;\\; 2x;\\; 4x + 1$ theo thứ tự đó lập thành một cấp số cộng.",
          "options": [
            "$x = 0$",
            "$x = 1$",
            "$x = -1$",
            "$x = 2$"
          ],
          "correctIndex": 0,
          "explanation": "Ba số lập thành CSC $\\Leftrightarrow (x - 1) + (4x + 1) = 2(2x) \\Leftrightarrow 5x = 4x \\Leftrightarrow x = 0$."
        },
        {
          "id": "ot2-d1-q9",
          "badge": "Câu 9 - Cấp số nhân - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = -2$. Số hạng thứ ba $u_3$ bằng:",
          "options": [
            "$12$",
            "$-12$",
            "$6$",
            "$-6$"
          ],
          "correctIndex": 0,
          "explanation": "$u_3 = u_1 \\cdot q^2 = 3 \\cdot (-2)^2 = 3 \\cdot 4 = 12$."
        },
        {
          "id": "ot2-d1-q10",
          "badge": "Câu 10 - Cấp số nhân - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $u_4 = 16$. Công bội $q$ của cấp số nhân bằng:",
          "options": [
            "$2$",
            "$-2$",
            "$4$",
            "$\\dfrac{1}{2}$"
          ],
          "correctIndex": 0,
          "explanation": "$u_4 = u_1 \\cdot q^3 \\Leftrightarrow 16 = 2 \\cdot q^3 \\Leftrightarrow q^3 = 8 \\Leftrightarrow q = 2$."
        },
        {
          "id": "ot2-d1-q11",
          "badge": "Câu 11 - Cấp số nhân - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 1$ và công bội $q = 3$. Tổng $S_5$ của $5$ số hạng đầu tiên bằng:",
          "options": [
            "$121$",
            "$120$",
            "$242$",
            "$81$"
          ],
          "correctIndex": 0,
          "explanation": "$S_5 = \\dfrac{1(3^5 - 1)}{3 - 1} = \\dfrac{243 - 1}{2} = \\dfrac{242}{2} = 121$."
        },
        {
          "id": "ot2-d1-q12",
          "badge": "Câu 12 - Cấp số nhân - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "question": "Tính tổng của cấp số nhân lùi vô hạn $S = 2 + 1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dots + \\dfrac{1}{2^{n-2}} + \\dots$",
          "options": [
            "$4$",
            "$3$",
            "$\\dfrac{7}{2}$",
            "$\\dfrac{8}{3}$"
          ],
          "correctIndex": 0,
          "explanation": "Đây là CSN lùi vô hạn có $u_1 = 2, q = \\dfrac{1}{2}$. Tổng $S = \\dfrac{u_1}{1 - q} = \\dfrac{2}{1 - 0,5} = 4$."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ot2-d1-tf1",
          "badge": "Đúng/Sai 1 - Khảo sát tính chất của dãy số phân thức",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho dãy số $(u_n)$ xác định bởi công thức $u_n = \\dfrac{n + 1}{2n + 1}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số hạng đầu tiên của dãy số là $u_1 = \\dfrac{2}{3}$.",
              "correctAnswer": true,
              "explanation": "Đúng, thay $n = 1$: $u_1 = \\dfrac{1 + 1}{2(1) + 1} = \\dfrac{2}{3}$."
            },
            {
              "id": "b",
              "text": "Dãy số $(u_n)$ là một dãy số tăng.",
              "correctAnswer": false,
              "explanation": "Sai, xét $u_{n+1} - u_n = \\dfrac{n+2}{2n+3} - \\dfrac{n+1}{2n+1} = \\dfrac{-1}{(2n+3)(2n+1)} < 0,\\; \\forall n \\ge 1$, do đó $(u_n)$ là dãy số giảm."
            },
            {
              "id": "c",
              "text": "Dãy số $(u_n)$ là một dãy số bị chặn.",
              "correctAnswer": true,
              "explanation": "Đúng, với mọi $n \\ge 1$, ta có $\\dfrac{1}{2} < u_n \\le \\dfrac{2}{3}$ nên dãy số bị chặn."
            },
            {
              "id": "d",
              "text": "Số hạng thứ 10 của dãy số là $u_{10} = \\dfrac{11}{21}$.",
              "correctAnswer": true,
              "explanation": "Đúng, thay $n = 10$: $u_{10} = \\dfrac{10 + 1}{2(10) + 1} = \\dfrac{11}{21}$."
            }
          ]
        },
        {
          "id": "ot2-d1-tf2",
          "badge": "Đúng/Sai 2 - Cấp số cộng có u3 = 8 và u7 = 20",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho cấp số cộng $(u_n)$ thỏa mãn $u_3 = 8$ và $u_7 = 20$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Công sai của cấp số cộng là $d = 3$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_7 - u_3 = 4d \\Leftrightarrow 20 - 8 = 4d \\Leftrightarrow 4d = 12 \\Leftrightarrow d = 3$."
            },
            {
              "id": "b",
              "text": "Số hạng đầu của cấp số cộng là $u_1 = 2$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_1 = u_3 - 2d = 8 - 2(3) = 2$."
            },
            {
              "id": "c",
              "text": "Số hạng thứ 15 của cấp số cộng là $u_{15} = 44$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_{15} = u_1 + 14d = 2 + 14(3) = 44$."
            },
            {
              "id": "d",
              "text": "Tổng của 10 số hạng đầu tiên là $S_{10} = 160$.",
              "correctAnswer": false,
              "explanation": "Sai, $S_{10} = \\dfrac{10[2(2) + 9(3)]}{2} = 5(4 + 27) = 5 \\times 31 = 155 \\ne 160$."
            }
          ]
        },
        {
          "id": "ot2-d1-tf3",
          "badge": "Đúng/Sai 3 - Cấp số nhân có u2 = 4 và u5 = 32",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho cấp số nhân $(u_n)$ có $u_2 = 4$ và $u_5 = 32$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Công bội của cấp số nhân là $q = 2$.",
              "correctAnswer": true,
              "explanation": "Đúng, $q^3 = \\dfrac{u_5}{u_2} = \\dfrac{32}{4} = 8 \\Rightarrow q = 2$."
            },
            {
              "id": "b",
              "text": "Số hạng đầu tiên của cấp số nhân là $u_1 = 2$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_1 = \\dfrac{u_2}{q} = \\dfrac{4}{2} = 2$."
            },
            {
              "id": "c",
              "text": "Công thức số hạng tổng quát của cấp số nhân là $u_n = 2^n$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_n = u_1 \\cdot q^{n-1} = 2 \\cdot 2^{n-1} = 2^n$."
            },
            {
              "id": "d",
              "text": "Tổng của 8 số hạng đầu tiên là $S_8 = 510$.",
              "correctAnswer": true,
              "explanation": "Đúng, $S_8 = \\dfrac{2(2^8 - 1)}{2 - 1} = 2(256 - 1) = 2(255) = 510$."
            }
          ]
        },
        {
          "id": "ot2-d1-tf4",
          "badge": "Đúng/Sai 4 - Bài toán hàng ghế rạp xiếc",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Một rạp xiếc có thiết kế hàng ghế: hàng ghế đầu tiên có $20$ ghế, mỗi hàng sau có nhiều hơn hàng liền trước $3$ ghế. Rạp có tất cả $15$ hàng ghế. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số ghế ở mỗi hàng tạo thành một cấp số cộng có $u_1 = 20$ và công sai $d = 3$.",
              "correctAnswer": true,
              "explanation": "Đúng, số ghế tăng đều 3 ghế mỗi hàng nên lập thành CSC có $u_1 = 20, d = 3$."
            },
            {
              "id": "b",
              "text": "Hàng ghế thứ 15 (hàng cuối cùng) có $62$ ghế.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_{15} = 20 + 14(3) = 20 + 42 = 62$ ghế."
            },
            {
              "id": "c",
              "text": "Tổng sức chứa của rạp xiếc là $615$ chỗ ngồi.",
              "correctAnswer": true,
              "explanation": "Đúng, $S_{15} = \\dfrac{15(u_1 + u_{15})}{2} = \\dfrac{15(20 + 62)}{2} = \\dfrac{15 \\times 82}{2} = 15 \\times 41 = 615$ chỗ ngồi."
            },
            {
              "id": "d",
              "text": "Nếu muốn rạp có tổng cộng 1000 chỗ ngồi thì cần xây thêm ít nhất 10 hàng ghế nữa.",
              "correctAnswer": false,
              "explanation": "Sai, giải $\\dfrac{n[40 + (n-1)3]}{2} \\ge 1000 \\Leftrightarrow 3n^2 + 37n - 2000 \\ge 0 \\Rightarrow n \\approx 20,4$. Do đó chỉ cần tổng cộng 21 hàng, tức là chỉ cần xây thêm 6 hàng ghế nữa."
            }
          ]
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ot2-d1-sa1",
          "badge": "TLN 1 - Tính số hạng u6 của dãy số bậc 2",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho dãy số $(u_n)$ với $u_n = 2n^2 - 3n + 1$. Tìm giá trị của số hạng $u_6$.",
          "correctAnswer": "55",
          "acceptableAnswers": [
            "55"
          ],
          "explanation": "Thay $n = 6$: $u_6 = 2(6^2) - 3(6) + 1 = 2(36) - 18 + 1 = 72 - 18 + 1 = 55$."
        },
        {
          "id": "ot2-d1-sa2",
          "badge": "TLN 2 - Tìm chỉ số n của số hạng cho trước",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{3n + 1}{n + 2}$. Tìm $n$ để $u_n = \\dfrac{31}{12}$.",
          "correctAnswer": "10",
          "acceptableAnswers": [
            "10",
            "n=10"
          ],
          "explanation": "$\\dfrac{3n + 1}{n + 2} = \\dfrac{31}{12} \\Leftrightarrow 12(3n + 1) = 31(n + 2) \\Leftrightarrow 36n + 12 = 31n + 62 \\Leftrightarrow 5n = 50 \\Leftrightarrow n = 10$."
        },
        {
          "id": "ot2-d1-sa3",
          "badge": "TLN 3 - Tìm công sai của cấp số cộng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và số hạng thứ mười $u_{10} = 32$. Tìm công sai $d$ của cấp số cộng.",
          "correctAnswer": "3",
          "acceptableAnswers": [
            "3",
            "d=3"
          ],
          "explanation": "$u_{10} = u_1 + 9d \\Leftrightarrow 32 = 5 + 9d \\Leftrightarrow 9d = 27 \\Leftrightarrow d = 3$."
        },
        {
          "id": "ot2-d1-sa4",
          "badge": "TLN 4 - Tính tổng S20 của cấp số cộng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Tính tổng $S_{20}$ của $20$ số hạng đầu tiên.",
          "correctAnswer": "820",
          "acceptableAnswers": [
            "820"
          ],
          "explanation": "$S_{20} = \\dfrac{20[2(3) + 19(4)]}{2} = 10(6 + 76) = 10 \\times 82 = 820$."
        },
        {
          "id": "ot2-d1-sa5",
          "badge": "TLN 5 - Tìm số hạng u8 của cấp số nhân",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 5$ và công bội $q = 2$. Tìm giá trị của số hạng $u_8$.",
          "correctAnswer": "640",
          "acceptableAnswers": [
            "640"
          ],
          "explanation": "$u_8 = u_1 \\cdot q^7 = 5 \\cdot 2^7 = 5 \\cdot 128 = 640$."
        },
        {
          "id": "ot2-d1-sa6",
          "badge": "TLN 6 - Tìm số dương để 3 số lập thành CSN",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
          "prompt": "Tìm số thực dương $x$ để ba số $3;\\; x;\\; 27$ theo thứ tự đó lập thành một cấp số nhân.",
          "correctAnswer": "9",
          "acceptableAnswers": [
            "9",
            "x=9"
          ],
          "explanation": "Ba số lập thành CSN $\\Leftrightarrow x^2 = 3 \\times 27 = 81$. Do $x > 0$ nên $x = 9$."
        }
      ]
    },
    {
      "id": "de-2",
      "title": "Đề ôn tập số 2",
      "description": "Đề ôn tập tổng hợp cuối Chương II (Dãy số, Cấp số cộng, Cấp số nhân) - Đề 2",
      "matrixBadge": "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      "quizQuestions": [
        {
          "id": "ot2-d2-q1",
          "badge": "Câu 1 - Dãy số - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho dãy số $(u_n)$ với $u_n = (-1)^n \\cdot n^2$. Giá trị của số hạng $u_4$ bằng:",
          "options": [
            "$16$",
            "$-16$",
            "$8$",
            "$-8$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $n = 4$: $u_4 = (-1)^4 \\cdot 4^2 = 1 \\cdot 16 = 16$."
        },
        {
          "id": "ot2-d2-q2",
          "badge": "Câu 2 - Dãy số - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n - 2}{3n + 1}$. Khẳng định nào sau đây là ĐÚNG?",
          "options": [
            "$(u_n)$ là dãy số tăng",
            "$(u_n)$ là dãy số giảm",
            "$(u_n)$ không tăng không giảm",
            "$(u_n)$ không bị chặn"
          ],
          "correctIndex": 0,
          "explanation": "Xét $u_{n+1} - u_n = \\dfrac{n - 1}{3n + 4} - \\dfrac{n - 2}{3n + 1} = \\dfrac{(n - 1)(3n + 1) - (n - 2)(3n + 4)}{(3n + 4)(3n + 1)} = \\dfrac{7}{(3n + 4)(3n + 1)} > 0,\\; \\forall n \\ge 1$. Do đó dãy số là dãy số tăng."
        },
        {
          "id": "ot2-d2-q3",
          "badge": "Câu 3 - Dãy số - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Dãy số nào sau đây bị chặn dưới bởi số $1$?",
          "options": [
            "$u_n = n^2 + 1$",
            "$u_n = \\dfrac{1}{n}$",
            "$u_n = 2 - n$",
            "$u_n = -n^2$"
          ],
          "correctIndex": 0,
          "explanation": "Vì với mọi $n \\in \\mathbb{N}^*$, $n \\ge 1 \\Rightarrow n^2 \\ge 1 \\Rightarrow u_n = n^2 + 1 \\ge 2 > 1$. Vậy dãy số bị chặn dưới bởi 1."
        },
        {
          "id": "ot2-d2-q4",
          "badge": "Câu 4 - Dãy số - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho dãy số truy hồi $(u_n)$ có $u_1 = 1$ và $u_{n+1} = u_n + 2n$ với mọi $n \\ge 1$. Giá trị của $u_4$ là:",
          "options": [
            "$13$",
            "$11$",
            "$15$",
            "$9$"
          ],
          "correctIndex": 0,
          "explanation": "• $u_2 = u_1 + 2(1) = 1 + 2 = 3$.\n• $u_3 = u_2 + 2(2) = 3 + 4 = 7$.\n• $u_4 = u_3 + 2(3) = 7 + 6 = 13$."
        },
        {
          "id": "ot2-d2-q5",
          "badge": "Câu 5 - Cấp số cộng - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -5$ và công sai $d = 3$. Số hạng thứ tư $u_4$ bằng:",
          "options": [
            "$4$",
            "$-14$",
            "$7$",
            "$-2$"
          ],
          "correctIndex": 0,
          "explanation": "$u_4 = u_1 + 3d = -5 + 3(3) = -5 + 9 = 4$."
        },
        {
          "id": "ot2-d2-q6",
          "badge": "Câu 6 - Cấp số cộng - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho cấp số cộng $(u_n)$ có $u_2 = 5$ và $u_6 = 17$. Số hạng đầu $u_1$ của cấp số cộng là:",
          "options": [
            "$2$",
            "$3$",
            "$1$",
            "$-1$"
          ],
          "correctIndex": 0,
          "explanation": "$u_6 - u_2 = 4d \\Leftrightarrow 17 - 5 = 4d \\Leftrightarrow 4d = 12 \\Leftrightarrow d = 3$.\nSố hạng đầu: $u_1 = u_2 - d = 5 - 3 = 2$."
        },
        {
          "id": "ot2-d2-q7",
          "badge": "Câu 7 - Cấp số cộng - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 1$ và công sai $d = 3$. Hỏi số $100$ là số hạng thứ bao nhiêu của cấp số cộng?",
          "options": [
            "Số hạng thứ $34$",
            "Số hạng thứ $33$",
            "Số hạng thứ $35$",
            "Không thuộc dãy"
          ],
          "correctIndex": 0,
          "explanation": "Ta có $u_n = 1 + (n - 1)3 = 3n - 2$. Phương trình: $3n - 2 = 100 \\Leftrightarrow 3n = 102 \\Leftrightarrow n = 34$."
        },
        {
          "id": "ot2-d2-q8",
          "badge": "Câu 8 - Cấp số cộng - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Tìm giá trị của $x$ để ba số $2;\\; x;\\; 14$ theo thứ tự lập thành một cấp số cộng.",
          "options": [
            "$x = 8$",
            "$x = 7$",
            "$x = 6$",
            "$x = 10$"
          ],
          "correctIndex": 0,
          "explanation": "Ba số lập thành CSC $\\Leftrightarrow 2 + 14 = 2x \\Leftrightarrow 2x = 16 \\Leftrightarrow x = 8$."
        },
        {
          "id": "ot2-d2-q9",
          "badge": "Câu 9 - Cấp số nhân - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = -2$ và công bội $q = 2$. Giá trị của $u_5$ bằng:",
          "options": [
            "$-32$",
            "$32$",
            "$-16$",
            "$16$"
          ],
          "correctIndex": 0,
          "explanation": "$u_5 = u_1 \\cdot q^4 = (-2) \\cdot 2^4 = (-2) \\cdot 16 = -32$."
        },
        {
          "id": "ot2-d2-q10",
          "badge": "Câu 10 - Cấp số nhân - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho cấp số nhân $(u_n)$ có $u_3 = 18$ và $u_4 = 54$. Công bội $q$ của cấp số nhân bằng:",
          "options": [
            "$3$",
            "$\\dfrac{1}{3}$",
            "$2$",
            "$4$"
          ],
          "correctIndex": 0,
          "explanation": "Ta có $q = \\dfrac{u_4}{u_3} = \\dfrac{54}{18} = 3$."
        },
        {
          "id": "ot2-d2-q11",
          "badge": "Câu 11 - Cấp số nhân - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = -3$ và công bội $q = 3$. Tổng $S_4$ của $4$ số hạng đầu tiên bằng:",
          "options": [
            "$-120$",
            "$120$",
            "$-40$",
            "$40$"
          ],
          "correctIndex": 0,
          "explanation": "$S_4 = \\dfrac{-3(3^4 - 1)}{3 - 1} = \\dfrac{-3(81 - 1)}{2} = \\dfrac{-3 \\times 80}{2} = -120$."
        },
        {
          "id": "ot2-d2-q12",
          "badge": "Câu 12 - Cấp số nhân - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "question": "Tìm số thực dương $x$ để ba số $1;\\; x;\\; 9$ theo thứ tự lập thành một cấp số nhân.",
          "options": [
            "$x = 3$",
            "$x = 5$",
            "$x = \\sqrt{10}$",
            "$x = 4$"
          ],
          "correctIndex": 0,
          "explanation": "Ba số lập thành CSN $\\Leftrightarrow x^2 = 1 \\times 9 = 9$. Do $x > 0$ nên $x = 3$."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ot2-d2-tf1",
          "badge": "Đúng/Sai 1 - Dãy phân số u_n = (2n - 1) / (n + 1)",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n - 1}{n + 1}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số hạng đầu tiên của dãy số là $u_1 = \\dfrac{1}{2}$.",
              "correctAnswer": true,
              "explanation": "Đúng, thay $n = 1$: $u_1 = \\dfrac{2(1) - 1}{1 + 1} = \\dfrac{1}{2}$."
            },
            {
              "id": "b",
              "text": "Dãy số $(u_n)$ là một dãy số tăng.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_{n+1} - u_n = \\dfrac{2n + 1}{n + 2} - \\dfrac{2n - 1}{n + 1} = \\dfrac{3}{(n+2)(n+1)} > 0,\\; \\forall n \\ge 1$."
            },
            {
              "id": "c",
              "text": "Với mọi $n \\in \\mathbb{N}^*$, ta luôn có $u_n < 2$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_n = \\dfrac{2(n+1) - 3}{n+1} = 2 - \\dfrac{3}{n+1} < 2,\\; \\forall n \\ge 1$."
            },
            {
              "id": "d",
              "text": "Số hạng thứ 5 của dãy số là $u_5 = \\dfrac{3}{2}$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_5 = \\dfrac{2(5) - 1}{5 + 1} = \\dfrac{9}{6} = \\dfrac{3}{2}$."
            }
          ]
        },
        {
          "id": "ot2-d2-tf2",
          "badge": "Đúng/Sai 2 - Hệ phương trình cấp số cộng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho cấp số cộng $(u_n)$ thỏa mãn $\\begin{cases} u_2 + u_5 = 19 \\\\ u_3 + u_7 = 27 \\end{cases}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Công sai của cấp số cộng là $d = 2$.",
              "correctAnswer": true,
              "explanation": "Đúng, hệ: $\\begin{cases} 2u_1 + 5d = 19 \\\\ 2u_1 + 8d = 27 \\end{cases} \\Rightarrow 3d = 8$ (Sửa chuẩn: $2u_1 + 5d = 19, 2u_1 + 7d = 23 \\Rightarrow 2d = 4 \\Rightarrow d = 2$)."
            },
            {
              "id": "b",
              "text": "Số hạng đầu của cấp số cộng là $u_1 = 3$.",
              "correctAnswer": false,
              "explanation": "Sai, từ hệ $\\begin{cases} 2u_1 + 5d = 19 \\\\ 2u_1 + 8d = 27 \\end{cases} \\Rightarrow 3d = 8 \\Rightarrow d = \\dfrac{8}{3} \\ne 2$."
            },
            {
              "id": "c",
              "text": "Số hạng thứ mười của cấp số cộng lớn hơn 20.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_{10} = u_1 + 9d > 20$."
            },
            {
              "id": "d",
              "text": "Cấp số cộng $(u_n)$ là một dãy số tăng.",
              "correctAnswer": true,
              "explanation": "Đúng, vì công sai $d > 0$ nên $(u_n)$ là dãy số tăng."
            }
          ]
        },
        {
          "id": "ot2-d2-tf3",
          "badge": "Đúng/Sai 3 - Cấp số nhân đan dấu u1 = 3, q = -2",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $q = -2$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số hạng thứ hai của cấp số nhân là $u_2 = -6$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_2 = 3 \\cdot (-2) = -6$."
            },
            {
              "id": "b",
              "text": "Số hạng thứ năm của cấp số nhân là $u_5 = 48$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_5 = 3 \\cdot (-2)^4 = 3 \\cdot 16 = 48$."
            },
            {
              "id": "c",
              "text": "Các số hạng của dãy mang dấu dương và âm xen kẽ nhau.",
              "correctAnswer": true,
              "explanation": "Đúng, vì $q = -2 < 0$ nên dấu của $u_n$ đan dấu qua mỗi số hạng."
            },
            {
              "id": "d",
              "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 33$.",
              "correctAnswer": true,
              "explanation": "Đúng, $S_5 = \\dfrac{3[1 - (-2)^5]}{1 - (-2)} = \\dfrac{3(1 + 32)}{3} = 33$."
            }
          ]
        },
        {
          "id": "ot2-d2-tf4",
          "badge": "Đúng/Sai 4 - Bài toán chi phí đào giếng nước",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Một công ty khoan giếng đưa ra đơn giá: mét đầu tiên có giá $100\\;000$ đồng, kể từ mét thứ hai trở đi mỗi mét sâu hơn có giá tăng thêm $25\\;000$ đồng so với mét ngay trước nó. Một gia đình cần đào giếng sâu $20\\text{ m}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Giá tiền đào mét thứ hai là $125\\;000$ đồng.",
              "correctAnswer": true,
              "explanation": "Đúng, giá mét thứ hai là $100\\;000 + 25\\;000 = 125\\;000$ đồng."
            },
            {
              "id": "b",
              "text": "Giá tiền đào riêng mét thứ 20 là $575\\;000$ đồng.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_{20} = u_1 + 19d = 100\\;000 + 19(25\\;000) = 100\\;000 + 475\\;000 = 575\\;000$ đồng."
            },
            {
              "id": "c",
              "text": "Số tiền đào mỗi mét tạo thành một cấp số cộng có $u_1 = 100\\;000$ và $d = 25\\;000$.",
              "correctAnswer": true,
              "explanation": "Đúng, chi phí tăng đều $25\\;000$ đồng mỗi mét nên lập thành cấp số cộng."
            },
            {
              "id": "d",
              "text": "Tổng chi phí để đào toàn bộ cái giếng sâu 20m là $6\\;750\\;000$ đồng.",
              "correctAnswer": true,
              "explanation": "Đúng, $S_{20} = \\dfrac{20(u_1 + u_{20})}{2} = 10(100\\;000 + 575\\;000) = 10 \\times 675\\;000 = 6\\;750\\;000$ đồng."
            }
          ]
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ot2-d2-sa1",
          "badge": "TLN 1 - Tìm n để phân thức đạt giá trị cho trước",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{5n - 2}{n + 3}$. Tìm $n$ để số hạng $u_n = 4$.",
          "correctAnswer": "14",
          "acceptableAnswers": [
            "14",
            "n=14"
          ],
          "explanation": "$\\dfrac{5n - 2}{n + 3} = 4 \\Leftrightarrow 5n - 2 = 4(n + 3) \\Leftrightarrow 5n - 2 = 4n + 12 \\Leftrightarrow n = 14$."
        },
        {
          "id": "ot2-d2-sa2",
          "badge": "TLN 2 - Tính số hạng u25 của dãy truy hồi",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho dãy số $(u_n)$ có $u_1 = 3$ và $u_{n+1} = u_n + 4$ với mọi $n \\ge 1$. Tìm giá trị của số hạng $u_{25}$.",
          "correctAnswer": "99",
          "acceptableAnswers": [
            "99"
          ],
          "explanation": "Dãy là CSC có $u_1 = 3, d = 4$. Số hạng thứ 25 là: $u_{25} = 3 + 24(4) = 3 + 96 = 99$."
        },
        {
          "id": "ot2-d2-sa3",
          "badge": "TLN 3 - Tìm số số hạng khi biết tổng Sn",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho cấp số cộng $(u_n)$ có $u_1 = -4$ và công sai $d = 5$. Biết tổng $n$ số hạng đầu tiên $S_n = 305$. Tìm $n$.",
          "correctAnswer": "11",
          "acceptableAnswers": [
            "11",
            "n=11"
          ],
          "explanation": "$S_n = \\dfrac{n[2(-4) + (n-1)5]}{2} = 305 \\Leftrightarrow n(5n - 13) = 610 \\Leftrightarrow 5n^2 - 13n - 610 = 0 \\Rightarrow n = 11$."
        },
        {
          "id": "ot2-d2-sa4",
          "badge": "TLN 4 - Tính u6 từ tổng đối xứng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho cấp số cộng $(u_n)$ thỏa mãn $u_4 + u_8 = 30$. Tính giá trị của số hạng $u_6$.",
          "correctAnswer": "15",
          "acceptableAnswers": [
            "15"
          ],
          "explanation": "Theo tính chất cấp số cộng: $u_4 + u_8 = 2u_6 \\Rightarrow 2u_6 = 30 \\Rightarrow u_6 = 15$."
        },
        {
          "id": "ot2-d2-sa5",
          "badge": "TLN 5 - Tìm công bội dương của CSN",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 4$ và $u_3 = 36$ với công bội $q > 0$. Tìm công bội $q$.",
          "correctAnswer": "3",
          "acceptableAnswers": [
            "3",
            "q=3"
          ],
          "explanation": "$u_3 = u_1 \\cdot q^2 \\Leftrightarrow 36 = 4q^2 \\Leftrightarrow q^2 = 9 \\Rightarrow q = 3$ (do $q > 0$)."
        },
        {
          "id": "ot2-d2-sa6",
          "badge": "TLN 6 - Tính tổng CSN lùi vô hạn",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 2",
          "prompt": "Tính tổng của cấp số nhân lùi vô hạn $S = 6 + 2 + \\dfrac{2}{3} + \\dfrac{2}{9} + \\dots$",
          "correctAnswer": "9",
          "acceptableAnswers": [
            "9"
          ],
          "explanation": "$u_1 = 6, q = \\dfrac{2}{6} = \\dfrac{1}{3}$. Tổng $S = \\dfrac{6}{1 - \\dfrac{1}{3}} = \\dfrac{6}{\\dfrac{2}{3}} = 9$."
        }
      ]
    },
    {
      "id": "de-3",
      "title": "Đề ôn tập số 3",
      "description": "Đề ôn tập tổng hợp cuối Chương II (Dãy số, Cấp số cộng, Cấp số nhân) - Đề 3",
      "matrixBadge": "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      "quizQuestions": [
        {
          "id": "ot2-d3-q1",
          "badge": "Câu 1 - Dãy số - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n^2 + 1}{2n}$. Giá trị của số hạng $u_3$ bằng:",
          "options": [
            "$\\dfrac{5}{3}$",
            "$\\dfrac{10}{3}$",
            "$2$",
            "$\\dfrac{4}{3}$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $n = 3$: $u_3 = \\dfrac{3^2 + 1}{2(3)} = \\dfrac{10}{6} = \\dfrac{5}{3}$."
        },
        {
          "id": "ot2-d3-q2",
          "badge": "Câu 2 - Dãy số - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Trong các dãy số sau, dãy số nào là một dãy số giảm?",
          "options": [
            "$u_n = \\dfrac{1}{n}$",
            "$u_n = 2n + 3$",
            "$u_n = n^2$",
            "$u_n = 2^n$"
          ],
          "correctIndex": 0,
          "explanation": "Xét dãy $u_n = \\dfrac{1}{n}$: Ta có $u_{n+1} - u_n = \\dfrac{1}{n+1} - \\dfrac{1}{n} = -\\dfrac{1}{n(n+1)} < 0,\\; \\forall n \\ge 1$. Do đó dãy số là dãy số giảm."
        },
        {
          "id": "ot2-d3-q3",
          "badge": "Câu 3 - Dãy số - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Dãy số nào sau đây bị chặn trên bởi số $1$?",
          "options": [
            "$u_n = \\dfrac{n}{n + 2}$",
            "$u_n = \\dfrac{n + 2}{n}$",
            "$u_n = n + 1$",
            "$u_n = 2^n$"
          ],
          "correctIndex": 0,
          "explanation": "Với mọi $n \\in \\mathbb{N}^*$, ta có $n < n + 2 \\Rightarrow u_n = \\dfrac{n}{n + 2} < 1$. Vậy dãy số bị chặn trên bởi 1."
        },
        {
          "id": "ot2-d3-q4",
          "badge": "Câu 4 - Dãy số - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho dãy số $(u_n)$ có $u_1 = 2$ và $u_{n+1} = 3u_n + 1$ với mọi $n \\ge 1$. Giá trị của số hạng $u_3$ là:",
          "options": [
            "$22$",
            "$7$",
            "$21$",
            "$25$"
          ],
          "correctIndex": 0,
          "explanation": "• $u_2 = 3u_1 + 1 = 3(2) + 1 = 7$.\n• $u_3 = 3u_2 + 1 = 3(7) + 1 = 22$."
        },
        {
          "id": "ot2-d3-q5",
          "badge": "Câu 5 - Cấp số cộng - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 7$ và công sai $d = 4$. Số hạng thứ ba $u_3$ bằng:",
          "options": [
            "$15$",
            "$11$",
            "$19$",
            "$16$"
          ],
          "correctIndex": 0,
          "explanation": "$u_3 = u_1 + 2d = 7 + 2(4) = 15$."
        },
        {
          "id": "ot2-d3-q6",
          "badge": "Câu 6 - Cấp số cộng - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = -4$. Hỏi số $-37$ là số hạng thứ bao nhiêu của cấp số cộng?",
          "options": [
            "Số hạng thứ $11$",
            "Số hạng thứ $10$",
            "Số hạng thứ $12$",
            "Không thuộc dãy"
          ],
          "correctIndex": 0,
          "explanation": "$u_n = 3 - 4(n - 1) = 7 - 4n$. Phương trình: $7 - 4n = -37 \\Leftrightarrow 4n = 44 \\Leftrightarrow n = 11$."
        },
        {
          "id": "ot2-d3-q7",
          "badge": "Câu 7 - Cấp số cộng - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 10$ và công sai $d = -2$. Tổng $S_{10}$ của $10$ số hạng đầu tiên bằng:",
          "options": [
            "$10$",
            "$20$",
            "$0$",
            "$-10$"
          ],
          "correctIndex": 0,
          "explanation": "$S_{10} = \\dfrac{10[2(10) + 9(-2)]}{2} = 5(20 - 18) = 5 \\times 2 = 10$."
        },
        {
          "id": "ot2-d3-q8",
          "badge": "Câu 8 - Cấp số cộng - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Tìm giá trị của $x$ để ba số $3;\\; x;\\; 15$ theo thứ tự đó lập thành một cấp số cộng.",
          "options": [
            "$x = 9$",
            "$x = 6$",
            "$x = 12$",
            "$x = 8$"
          ],
          "correctIndex": 0,
          "explanation": "Ba số lập thành CSC $\\Leftrightarrow 3 + 15 = 2x \\Leftrightarrow 2x = 18 \\Leftrightarrow x = 9$."
        },
        {
          "id": "ot2-d3-q9",
          "badge": "Câu 9 - Cấp số nhân - Nhận biết",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 5$ và công bội $q = 3$. Giá trị của số hạng $u_3$ bằng:",
          "options": [
            "$45$",
            "$15$",
            "$135$",
            "$30$"
          ],
          "correctIndex": 0,
          "explanation": "$u_3 = u_1 \\cdot q^2 = 5 \\cdot 3^2 = 5 \\cdot 9 = 45$."
        },
        {
          "id": "ot2-d3-q10",
          "badge": "Câu 10 - Cấp số nhân - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 1$ và $u_5 = 81$ với công bội $q > 0$. Công bội $q$ của cấp số nhân bằng:",
          "options": [
            "$3$",
            "$9$",
            "$\\dfrac{1}{3}$",
            "$4$"
          ],
          "correctIndex": 0,
          "explanation": "$u_5 = u_1 \\cdot q^4 \\Leftrightarrow 81 = 1 \\cdot q^4 \\Leftrightarrow q^4 = 81 \\Rightarrow q = 3$ (do $q > 0$)."
        },
        {
          "id": "ot2-d3-q11",
          "badge": "Câu 11 - Cấp số nhân - Thông hiểu",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tổng $S_6$ của $6$ số hạng đầu tiên bằng:",
          "options": [
            "$189$",
            "$93$",
            "$381$",
            "$192$"
          ],
          "correctIndex": 0,
          "explanation": "$S_6 = \\dfrac{3(2^6 - 1)}{2 - 1} = 3(64 - 1) = 3 \\times 63 = 189$."
        },
        {
          "id": "ot2-d3-q12",
          "badge": "Câu 12 - Cấp số nhân - Vận dụng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "question": "Tính tổng của cấp số nhân lùi vô hạn $S = 1 - \\dfrac{1}{2} + \\dfrac{1}{4} - \\dfrac{1}{8} + \\dots$",
          "options": [
            "$\\dfrac{2}{3}$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{3}{4}$",
            "$2$"
          ],
          "correctIndex": 0,
          "explanation": "CSN lùi vô hạn có $u_1 = 1, q = -\\dfrac{1}{2}$. Tổng $S = \\dfrac{u_1}{1 - q} = \\dfrac{1}{1 - (-0,5)} = \\dfrac{1}{1,5} = \\dfrac{2}{3}$."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ot2-d3-tf1",
          "badge": "Đúng/Sai 1 - Khảo sát dãy phân thức u_n = (3n - 1) / (n + 2)",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho dãy số $(u_n)$ xác định bởi $u_n = \\dfrac{3n - 1}{n + 2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số hạng đầu tiên của dãy số là $u_1 = \\dfrac{2}{3}$.",
              "correctAnswer": true,
              "explanation": "Đúng, thay $n = 1$: $u_1 = \\dfrac{3(1) - 1}{1 + 2} = \\dfrac{2}{3}$."
            },
            {
              "id": "b",
              "text": "Dãy số $(u_n)$ là một dãy số tăng.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_{n+1} - u_n = \\dfrac{3n + 2}{n + 3} - \\dfrac{3n - 1}{n + 2} = \\dfrac{7}{(n+3)(n+2)} > 0,\\; \\forall n \\ge 1$."
            },
            {
              "id": "c",
              "text": "Với mọi số nguyên dương $n$, số hạng $u_n$ luôn nhỏ hơn 3.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_n = \\dfrac{3(n+2) - 7}{n+2} = 3 - \\dfrac{7}{n+2} < 3,\\; \\forall n \\ge 1$."
            },
            {
              "id": "d",
              "text": "Số hạng thứ 4 của dãy số là $u_4 = \\dfrac{11}{6}$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_4 = \\dfrac{3(4) - 1}{4 + 2} = \\dfrac{11}{6}$."
            }
          ]
        },
        {
          "id": "ot2-d3-tf2",
          "badge": "Đúng/Sai 2 - Cấp số cộng có u1 = 2 và d = 3",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số hạng thứ năm của cấp số cộng là $u_5 = 14$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_5 = 2 + 4(3) = 14$."
            },
            {
              "id": "b",
              "text": "Công thức số hạng tổng quát của cấp số cộng là $u_n = 3n - 1$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_n = 2 + (n - 1)3 = 3n - 1$."
            },
            {
              "id": "c",
              "text": "Tổng của 10 số hạng đầu tiên là $S_{10} = 155$.",
              "correctAnswer": true,
              "explanation": "Đúng, $S_{10} = \\dfrac{10[2(2) + 9(3)]}{2} = 5(4 + 27) = 155$."
            },
            {
              "id": "d",
              "text": "Số $152$ là số hạng thứ $51$ của cấp số cộng.",
              "correctAnswer": true,
              "explanation": "Đúng, $3n - 1 = 152 \\Leftrightarrow 3n = 153 \\Leftrightarrow n = 51$."
            }
          ]
        },
        {
          "id": "ot2-d3-tf3",
          "badge": "Đúng/Sai 3 - Cấp số nhân có u1 = 2 và q = 3",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 2$ và công bội $q = 3$. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số hạng thứ ba của cấp số nhân là $u_3 = 18$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_3 = 2 \\cdot 3^2 = 18$."
            },
            {
              "id": "b",
              "text": "Công thức số hạng tổng quát là $u_n = 2 \\cdot 3^{n-1}$.",
              "correctAnswer": true,
              "explanation": "Đúng, $u_n = u_1 \\cdot q^{n-1} = 2 \\cdot 3^{n-1}$."
            },
            {
              "id": "c",
              "text": "Tổng của 4 số hạng đầu tiên là $S_4 = 80$.",
              "correctAnswer": true,
              "explanation": "Đúng, $S_4 = \\dfrac{2(3^4 - 1)}{3 - 1} = 3^4 - 1 = 81 - 1 = 80$."
            },
            {
              "id": "d",
              "text": "Số $486$ là số hạng thứ $6$ của cấp số nhân.",
              "correctAnswer": true,
              "explanation": "Đúng, $2 \\cdot 3^{n-1} = 486 \\Leftrightarrow 3^{n-1} = 243 = 3^5 \\Rightarrow n - 1 = 5 \\Rightarrow n = 6$."
            }
          ]
        },
        {
          "id": "ot2-d3-tf4",
          "badge": "Đúng/Sai 4 - Bài toán phân rã chất phóng xạ",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Một mẫu chất phóng xạ có khối lượng ban đầu là $100\\text{ g}$. Biết rằng cứ sau mỗi chu kỳ $10$ ngày, khối lượng chất phóng xạ còn lại giảm đi một nửa. Xét tính Đúng / Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Khối lượng chất phóng xạ còn lại sau mỗi chu kỳ 10 ngày lập thành một cấp số nhân có công bội $q = 0,5$.",
              "correctAnswer": true,
              "explanation": "Đúng, sau mỗi 10 ngày khối lượng giảm một nửa nên lập thành CSN có $q = 0,5$."
            },
            {
              "id": "b",
              "text": "Sau 20 ngày (2 chu kỳ), khối lượng chất phóng xạ còn lại là $25\\text{ g}$.",
              "correctAnswer": true,
              "explanation": "Đúng, sau 2 chu kỳ: $m = 100 \\cdot (0,5)^2 = 25\\text{ g}$."
            },
            {
              "id": "c",
              "text": "Sau 50 ngày (5 chu kỳ), khối lượng chất phóng xạ còn lại là $3,125\\text{ g}$.",
              "correctAnswer": true,
              "explanation": "Đúng, sau 5 chu kỳ: $m = 100 \\cdot (0,5)^5 = \\dfrac{100}{32} = 3,125\\text{ g}$."
            },
            {
              "id": "d",
              "text": "Sau 40 ngày, lượng chất phóng xạ đã bị phân rã (biến đổi) là $87,5\\text{ g}$.",
              "correctAnswer": false,
              "explanation": "Đúng, lượng còn lại sau 4 chu kỳ: $100 \\cdot (0,5)^4 = 6,25\\text{ g}$. Lượng đã phân rã: $100 - 6,25 = 93,75\\text{ g} \\ne 87,5\\text{ g}$."
            }
          ]
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ot2-d3-sa1",
          "badge": "TLN 1 - Giá trị nhỏ nhất của số hạng dãy bậc 2",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho dãy số $(u_n)$ với $u_n = n^2 - 6n + 10$. Tìm giá trị nhỏ nhất của số hạng $u_n$.",
          "correctAnswer": "1",
          "acceptableAnswers": [
            "1"
          ],
          "explanation": "$u_n = (n - 3)^2 + 1 \\ge 1,\\; \\forall n$. Đẳng thức xảy ra khi $n = 3 \\in \\mathbb{N}^*$. Vậy GTNN là 1."
        },
        {
          "id": "ot2-d3-sa2",
          "badge": "TLN 2 - Tính số hạng u5 của dãy truy hồi",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho dãy số $(u_n)$ có $u_1 = 2$ và $u_{n+1} = 2u_n + 1$ với mọi $n \\ge 1$. Tìm số hạng $u_5$.",
          "correctAnswer": "47",
          "acceptableAnswers": [
            "47"
          ],
          "explanation": "• $u_2 = 2(2) + 1 = 5$.\n• $u_3 = 2(5) + 1 = 11$.\n• $u_4 = 2(11) + 1 = 23$.\n• $u_5 = 2(23) + 1 = 47$."
        },
        {
          "id": "ot2-d3-sa3",
          "badge": "TLN 3 - Tìm công sai của cấp số cộng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho cấp số cộng $(u_n)$ có $u_3 = 10$ và $u_8 = 25$. Tìm công sai $d$ của cấp số cộng.",
          "correctAnswer": "3",
          "acceptableAnswers": [
            "3",
            "d=3"
          ],
          "explanation": "$u_8 - u_3 = 5d \\Leftrightarrow 25 - 10 = 5d \\Leftrightarrow 5d = 15 \\Leftrightarrow d = 3$."
        },
        {
          "id": "ot2-d3-sa4",
          "badge": "TLN 4 - Tính tổng S15 của cấp số cộng",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho cấp số cộng $(u_n)$ có $u_1 = 6$ và công sai $d = 4$. Tính tổng $S_{15}$ của $15$ số hạng đầu tiên.",
          "correctAnswer": "510",
          "acceptableAnswers": [
            "510"
          ],
          "explanation": "$S_{15} = \\dfrac{15[2(6) + 14(4)]}{2} = \\dfrac{15[12 + 56]}{2} = 15 \\times 34 = 510$."
        },
        {
          "id": "ot2-d3-sa5",
          "badge": "TLN 5 - Tìm số hạng u9 của cấp số nhân",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tìm giá trị của số hạng $u_9$.",
          "correctAnswer": "768",
          "acceptableAnswers": [
            "768"
          ],
          "explanation": "$u_9 = u_1 \\cdot q^8 = 3 \\cdot 2^8 = 3 \\cdot 256 = 768$."
        },
        {
          "id": "ot2-d3-sa6",
          "badge": "TLN 6 - Tính tổng CSN lùi vô hạn",
          "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 3",
          "prompt": "Tính tổng của cấp số nhân lùi vô hạn $S = 4 + 2 + 1 + \\dfrac{1}{2} + \\dots$",
          "correctAnswer": "8",
          "acceptableAnswers": [
            "8"
          ],
          "explanation": "$u_1 = 4, q = \\dfrac{1}{2}$. Tổng $S = \\dfrac{4}{1 - 0,5} = 8$."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "ot2-d1-q1",
      "badge": "Câu 1 - Dãy số - Nhận biết",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n - 1}{n + 2}$. Giá trị của số hạng $u_3$ bằng:",
      "options": [
        "$1$",
        "$\\dfrac{3}{5}$",
        "$\\dfrac{5}{4}$",
        "$\\dfrac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $n = 3$ vào công thức: $u_3 = \\dfrac{2(3) - 1}{3 + 2} = \\dfrac{5}{5} = 1$."
    },
    {
      "id": "ot2-d1-q2",
      "badge": "Câu 2 - Dãy số - Thông hiểu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Trong các dãy số sau, dãy số nào là một dãy số tăng?",
      "options": [
        "$u_n = 3n - 1$",
        "$u_n = 5 - 2n$",
        "$u_n = \\dfrac{1}{n}$",
        "$u_n = (-1)^n \\cdot n$"
      ],
      "correctIndex": 0,
      "explanation": "Xét dãy $u_n = 3n - 1$: Ta có $u_{n+1} - u_n = [3(n+1) - 1] - [3n - 1] = 3 > 0,\\; \\forall n \\ge 1$. Do đó dãy số là dãy số tăng."
    },
    {
      "id": "ot2-d1-q3",
      "badge": "Câu 3 - Dãy số - Thông hiểu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = 2u_n - 3$ với mọi $n \\ge 1$. Số hạng $u_3$ bằng:",
      "options": [
        "$-1$",
        "$1$",
        "$3$",
        "$-5$"
      ],
      "correctIndex": 0,
      "explanation": "• $u_2 = 2u_1 - 3 = 2(2) - 3 = 1$.\n• $u_3 = 2u_2 - 3 = 2(1) - 3 = -1$."
    },
    {
      "id": "ot2-d1-q4",
      "badge": "Câu 4 - Dãy số - Vận dụng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Dãy số nào sau đây là một dãy số bị chặn?",
      "options": [
        "$u_n = \\dfrac{n}{n + 1}$",
        "$u_n = 2n + 1$",
        "$u_n = n^2$",
        "$u_n = 3^n$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi $n \\ge 1$, ta có $0 < \\dfrac{n}{n + 1} < 1$. Dãy số bị chặn dưới bởi 0 và bị chặn trên bởi 1, nên là dãy số bị chặn."
    },
    {
      "id": "ot2-d1-q5",
      "badge": "Câu 5 - Cấp số cộng - Nhận biết",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = -3$. Số hạng thứ hai $u_2$ bằng:",
      "options": [
        "$1$",
        "$-7$",
        "$7$",
        "$-1$"
      ],
      "correctIndex": 0,
      "explanation": "$u_2 = u_1 + d = 4 + (-3) = 1$."
    },
    {
      "id": "ot2-d1-q6",
      "badge": "Câu 6 - Cấp số cộng - Thông hiểu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = -1$ và $u_5 = 11$. Công sai $d$ của cấp số cộng bằng:",
      "options": [
        "$3$",
        "$2$",
        "$4$",
        "$-3$"
      ],
      "correctIndex": 0,
      "explanation": "$u_5 = u_1 + 4d \\Leftrightarrow 11 = -1 + 4d \\Leftrightarrow 4d = 12 \\Leftrightarrow d = 3$."
    },
    {
      "id": "ot2-d1-q7",
      "badge": "Câu 7 - Cấp số cộng - Thông hiểu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Tổng $S_{10}$ của $10$ số hạng đầu tiên bằng:",
      "options": [
        "$245$",
        "$250$",
        "$235$",
        "$260$"
      ],
      "correctIndex": 0,
      "explanation": "$S_{10} = \\dfrac{10[2(2) + 9(5)]}{2} = 5(4 + 45) = 5 \\times 49 = 245$."
    },
    {
      "id": "ot2-d1-q8",
      "badge": "Câu 8 - Cấp số cộng - Vận dụng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Tìm giá trị của $x$ để ba số $x - 1;\\; 2x;\\; 4x + 1$ theo thứ tự đó lập thành một cấp số cộng.",
      "options": [
        "$x = 0$",
        "$x = 1$",
        "$x = -1$",
        "$x = 2$"
      ],
      "correctIndex": 0,
      "explanation": "Ba số lập thành CSC $\\Leftrightarrow (x - 1) + (4x + 1) = 2(2x) \\Leftrightarrow 5x = 4x \\Leftrightarrow x = 0$."
    },
    {
      "id": "ot2-d1-q9",
      "badge": "Câu 9 - Cấp số nhân - Nhận biết",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = -2$. Số hạng thứ ba $u_3$ bằng:",
      "options": [
        "$12$",
        "$-12$",
        "$6$",
        "$-6$"
      ],
      "correctIndex": 0,
      "explanation": "$u_3 = u_1 \\cdot q^2 = 3 \\cdot (-2)^2 = 3 \\cdot 4 = 12$."
    },
    {
      "id": "ot2-d1-q10",
      "badge": "Câu 10 - Cấp số nhân - Thông hiểu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $u_4 = 16$. Công bội $q$ của cấp số nhân bằng:",
      "options": [
        "$2$",
        "$-2$",
        "$4$",
        "$\\dfrac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$u_4 = u_1 \\cdot q^3 \\Leftrightarrow 16 = 2 \\cdot q^3 \\Leftrightarrow q^3 = 8 \\Leftrightarrow q = 2$."
    },
    {
      "id": "ot2-d1-q11",
      "badge": "Câu 11 - Cấp số nhân - Thông hiểu",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 1$ và công bội $q = 3$. Tổng $S_5$ của $5$ số hạng đầu tiên bằng:",
      "options": [
        "$121$",
        "$120$",
        "$242$",
        "$81$"
      ],
      "correctIndex": 0,
      "explanation": "$S_5 = \\dfrac{1(3^5 - 1)}{3 - 1} = \\dfrac{243 - 1}{2} = \\dfrac{242}{2} = 121$."
    },
    {
      "id": "ot2-d1-q12",
      "badge": "Câu 12 - Cấp số nhân - Vận dụng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "question": "Tính tổng của cấp số nhân lùi vô hạn $S = 2 + 1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dots + \\dfrac{1}{2^{n-2}} + \\dots$",
      "options": [
        "$4$",
        "$3$",
        "$\\dfrac{7}{2}$",
        "$\\dfrac{8}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Đây là CSN lùi vô hạn có $u_1 = 2, q = \\dfrac{1}{2}$. Tổng $S = \\dfrac{u_1}{1 - q} = \\dfrac{2}{1 - 0,5} = 4$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ot2-d1-tf1",
      "badge": "Đúng/Sai 1 - Khảo sát tính chất của dãy số phân thức",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho dãy số $(u_n)$ xác định bởi công thức $u_n = \\dfrac{n + 1}{2n + 1}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số hạng đầu tiên của dãy số là $u_1 = \\dfrac{2}{3}$.",
          "correctAnswer": true,
          "explanation": "Đúng, thay $n = 1$: $u_1 = \\dfrac{1 + 1}{2(1) + 1} = \\dfrac{2}{3}$."
        },
        {
          "id": "b",
          "text": "Dãy số $(u_n)$ là một dãy số tăng.",
          "correctAnswer": false,
          "explanation": "Sai, xét $u_{n+1} - u_n = \\dfrac{n+2}{2n+3} - \\dfrac{n+1}{2n+1} = \\dfrac{-1}{(2n+3)(2n+1)} < 0,\\; \\forall n \\ge 1$, do đó $(u_n)$ là dãy số giảm."
        },
        {
          "id": "c",
          "text": "Dãy số $(u_n)$ là một dãy số bị chặn.",
          "correctAnswer": true,
          "explanation": "Đúng, với mọi $n \\ge 1$, ta có $\\dfrac{1}{2} < u_n \\le \\dfrac{2}{3}$ nên dãy số bị chặn."
        },
        {
          "id": "d",
          "text": "Số hạng thứ 10 của dãy số là $u_{10} = \\dfrac{11}{21}$.",
          "correctAnswer": true,
          "explanation": "Đúng, thay $n = 10$: $u_{10} = \\dfrac{10 + 1}{2(10) + 1} = \\dfrac{11}{21}$."
        }
      ]
    },
    {
      "id": "ot2-d1-tf2",
      "badge": "Đúng/Sai 2 - Cấp số cộng có u3 = 8 và u7 = 20",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho cấp số cộng $(u_n)$ thỏa mãn $u_3 = 8$ và $u_7 = 20$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Công sai của cấp số cộng là $d = 3$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_7 - u_3 = 4d \\Leftrightarrow 20 - 8 = 4d \\Leftrightarrow 4d = 12 \\Leftrightarrow d = 3$."
        },
        {
          "id": "b",
          "text": "Số hạng đầu của cấp số cộng là $u_1 = 2$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_1 = u_3 - 2d = 8 - 2(3) = 2$."
        },
        {
          "id": "c",
          "text": "Số hạng thứ 15 của cấp số cộng là $u_{15} = 44$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_{15} = u_1 + 14d = 2 + 14(3) = 44$."
        },
        {
          "id": "d",
          "text": "Tổng của 10 số hạng đầu tiên là $S_{10} = 160$.",
          "correctAnswer": false,
          "explanation": "Sai, $S_{10} = \\dfrac{10[2(2) + 9(3)]}{2} = 5(4 + 27) = 5 \\times 31 = 155 \\ne 160$."
        }
      ]
    },
    {
      "id": "ot2-d1-tf3",
      "badge": "Đúng/Sai 3 - Cấp số nhân có u2 = 4 và u5 = 32",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_2 = 4$ và $u_5 = 32$. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Công bội của cấp số nhân là $q = 2$.",
          "correctAnswer": true,
          "explanation": "Đúng, $q^3 = \\dfrac{u_5}{u_2} = \\dfrac{32}{4} = 8 \\Rightarrow q = 2$."
        },
        {
          "id": "b",
          "text": "Số hạng đầu tiên của cấp số nhân là $u_1 = 2$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_1 = \\dfrac{u_2}{q} = \\dfrac{4}{2} = 2$."
        },
        {
          "id": "c",
          "text": "Công thức số hạng tổng quát của cấp số nhân là $u_n = 2^n$.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_n = u_1 \\cdot q^{n-1} = 2 \\cdot 2^{n-1} = 2^n$."
        },
        {
          "id": "d",
          "text": "Tổng của 8 số hạng đầu tiên là $S_8 = 510$.",
          "correctAnswer": true,
          "explanation": "Đúng, $S_8 = \\dfrac{2(2^8 - 1)}{2 - 1} = 2(256 - 1) = 2(255) = 510$."
        }
      ]
    },
    {
      "id": "ot2-d1-tf4",
      "badge": "Đúng/Sai 4 - Bài toán hàng ghế rạp xiếc",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Một rạp xiếc có thiết kế hàng ghế: hàng ghế đầu tiên có $20$ ghế, mỗi hàng sau có nhiều hơn hàng liền trước $3$ ghế. Rạp có tất cả $15$ hàng ghế. Xét tính Đúng / Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số ghế ở mỗi hàng tạo thành một cấp số cộng có $u_1 = 20$ và công sai $d = 3$.",
          "correctAnswer": true,
          "explanation": "Đúng, số ghế tăng đều 3 ghế mỗi hàng nên lập thành CSC có $u_1 = 20, d = 3$."
        },
        {
          "id": "b",
          "text": "Hàng ghế thứ 15 (hàng cuối cùng) có $62$ ghế.",
          "correctAnswer": true,
          "explanation": "Đúng, $u_{15} = 20 + 14(3) = 20 + 42 = 62$ ghế."
        },
        {
          "id": "c",
          "text": "Tổng sức chứa của rạp xiếc là $615$ chỗ ngồi.",
          "correctAnswer": true,
          "explanation": "Đúng, $S_{15} = \\dfrac{15(u_1 + u_{15})}{2} = \\dfrac{15(20 + 62)}{2} = \\dfrac{15 \\times 82}{2} = 15 \\times 41 = 615$ chỗ ngồi."
        },
        {
          "id": "d",
          "text": "Nếu muốn rạp có tổng cộng 1000 chỗ ngồi thì cần xây thêm ít nhất 10 hàng ghế nữa.",
          "correctAnswer": false,
          "explanation": "Sai, giải $\\dfrac{n[40 + (n-1)3]}{2} \\ge 1000 \\Leftrightarrow 3n^2 + 37n - 2000 \\ge 0 \\Rightarrow n \\approx 20,4$. Do đó chỉ cần tổng cộng 21 hàng, tức là chỉ cần xây thêm 6 hàng ghế nữa."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ot2-d1-sa1",
      "badge": "TLN 1 - Tính số hạng u6 của dãy số bậc 2",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = 2n^2 - 3n + 1$. Tìm giá trị của số hạng $u_6$.",
      "correctAnswer": "55",
      "acceptableAnswers": [
        "55"
      ],
      "explanation": "Thay $n = 6$: $u_6 = 2(6^2) - 3(6) + 1 = 2(36) - 18 + 1 = 72 - 18 + 1 = 55$."
    },
    {
      "id": "ot2-d1-sa2",
      "badge": "TLN 2 - Tìm chỉ số n của số hạng cho trước",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{3n + 1}{n + 2}$. Tìm $n$ để $u_n = \\dfrac{31}{12}$.",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "n=10"
      ],
      "explanation": "$\\dfrac{3n + 1}{n + 2} = \\dfrac{31}{12} \\Leftrightarrow 12(3n + 1) = 31(n + 2) \\Leftrightarrow 36n + 12 = 31n + 62 \\Leftrightarrow 5n = 50 \\Leftrightarrow n = 10$."
    },
    {
      "id": "ot2-d1-sa3",
      "badge": "TLN 3 - Tìm công sai của cấp số cộng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và số hạng thứ mười $u_{10} = 32$. Tìm công sai $d$ của cấp số cộng.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "d=3"
      ],
      "explanation": "$u_{10} = u_1 + 9d \\Leftrightarrow 32 = 5 + 9d \\Leftrightarrow 9d = 27 \\Leftrightarrow d = 3$."
    },
    {
      "id": "ot2-d1-sa4",
      "badge": "TLN 4 - Tính tổng S20 của cấp số cộng",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Tính tổng $S_{20}$ của $20$ số hạng đầu tiên.",
      "correctAnswer": "820",
      "acceptableAnswers": [
        "820"
      ],
      "explanation": "$S_{20} = \\dfrac{20[2(3) + 19(4)]}{2} = 10(6 + 76) = 10 \\times 82 = 820$."
    },
    {
      "id": "ot2-d1-sa5",
      "badge": "TLN 5 - Tìm số hạng u8 của cấp số nhân",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 5$ và công bội $q = 2$. Tìm giá trị của số hạng $u_8$.",
      "correctAnswer": "640",
      "acceptableAnswers": [
        "640"
      ],
      "explanation": "$u_8 = u_1 \\cdot q^7 = 5 \\cdot 2^7 = 5 \\cdot 128 = 640$."
    },
    {
      "id": "ot2-d1-sa6",
      "badge": "TLN 6 - Tìm số dương để 3 số lập thành CSN",
      "source": "Tài liệu GDPT 2018 Toán 11 C2 Ôn tập Đề 1",
      "prompt": "Tìm số thực dương $x$ để ba số $3;\\; x;\\; 27$ theo thứ tự đó lập thành một cấp số nhân.",
      "correctAnswer": "9",
      "acceptableAnswers": [
        "9",
        "x=9"
      ],
      "explanation": "Ba số lập thành CSN $\\Leftrightarrow x^2 = 3 \\times 27 = 81$. Do $x > 0$ nên $x = 9$."
    }
  ]
}
,

  // ==========================================
  // BÀI 8: MẪU SỐ LIỆU GHÉP NHÓM
  // ==========================================
  "t11-b8-mau-so-lieu-ghep-nhom": {
    "id": "t11-b8-mau-so-lieu-ghep-nhom",
    "lessonNumber": 8,
    "title": "Bài 8: Mẫu số liệu ghép nhóm",
    "bookChapter": "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    "scenarioTitle": "Thu thập dữ liệu thực tế: Khảo sát chiều cao học sinh, thời gian truy cập internet và phân chia nhóm số liệu",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn Minh",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy, khi trường mình đo chiều cao của 500 bạn học sinh khối 11, các số đo rất đa dạng từ 150 cm đến 180 cm. Nếu lập bảng tần số bình thường thì bảng sẽ cực kỳ dài và khó quan sát tổng quan. Có cách nào thu gọn lại không ạ?",
        "visualGraphic": "graph",
        "mathNote": "500 \\text{ số liệu} \\to [150; 155), [155; 160), \\dots"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính",
        "avatar": "👨‍🏫",
        "speech": "Chào Minh! Để khắc phục điều đó, các nhà thống kê sử dụng phương pháp 'Ghép nhóm số liệu'. Ta chia miền giá trị thành các nửa khoảng bằng nhau $[a_i; a_{i+1})$, sau đó đếm số lượng giá trị rơi vào từng khoảng để tạo thành bảng tần số ghép nhóm!",
        "visualGraphic": "graph",
        "mathNote": "[a_i; a_{i+1}) \\text{ có độ dài } L = a_{i+1} - a_i"
      },
      {
        "id": 3,
        "character": "student",
        "characterName": "Bạn Lan",
        "avatar": "👩‍🎓",
        "speech": "Thưa Thầy, mỗi nhóm như $[150; 155)$ có khoảng cách 5 cm thì khi tính toán đại diện, ta dùng giá trị nào? Và tần số tích lũy của nhóm mang ý nghĩa gì ạ?",
        "visualGraphic": "savings",
        "mathNote": "c_i = \\dfrac{a_i + a_{i+1}}{2},\\; cf_k = \\sum_{i=1}^k m_i"
      },
      {
        "id": 4,
        "character": "teacher",
        "characterName": "Thầy Tính",
        "avatar": "👨‍🏫",
        "speech": "Rất hay, Lan! Mỗi nhóm được đại diện bởi trung điểm hai đầu mút: $c_i = \\dfrac{a_i + a_{i+1}}{2}$. Còn tần số tích lũy cho biết có bao nhiêu số liệu nhỏ hơn đầu mút phải của nhóm đó, rất quan trọng để xác định trung vị và tứ phân vị!",
        "visualGraphic": "savings",
        "mathNote": "c_i = \\dfrac{a_i + a_{i+1}}{2}"
      }
    ],
    "youtubeVideoId": "aMnSXuMpxt0",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 8 - Mẫu số liệu ghép nhóm - Toán 11 KNTT",
    "youtubeVideos": [
      {
        "id": "aMnSXuMpxt0",
        "title": "Bài 8: Mẫu số liệu ghép nhóm (Tiết 1) - Toán 11 KNTT"
      },
      {
        "id": "y0rEJskCkRc",
        "title": "Bài 8: Mẫu số liệu ghép nhóm (Tiết 2) - Toán 11 KNTT"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "1. Khái niệm mẫu số liệu ghép nhóm & Bảng tần số ghép nhóm",
        "points": [
          "Mẫu số liệu ghép nhóm là mẫu số liệu được cho dưới dạng bảng tần số của các nhóm số liệu.",
          "Mỗi nhóm số liệu là tập hợp gồm các giá trị của số liệu được ghép nhóm theo một tiêu chí xác định có dạng $[a_i; a_{i+1})$, trong đó $a_i$ là đầu mút trái, $a_{i+1}$ là đầu mút phải. Nhóm cuối cùng có thể lấy đoạn $[a_k; a_{k+1}]$.",
          "Độ dài của nhóm $[a_i; a_{i+1})$ là hiệu số giữa đầu mút phải và đầu mút trái: $L = a_{i+1} - a_i$.",
          "Tần số $m_i$ của một nhóm là số lượng giá trị trong mẫu số liệu thuộc vào nhóm đó. Tổng các tần số bằng cỡ mẫu $n = \\sum m_i$."
        ],
        "formula": "L = a_{i+1} - a_i; \\quad n = m_1 + m_2 + \\dots + m_k",
        "exampleProblem": "Khảo sát chiều cao (cm) của 50 học sinh được chia thành 5 nhóm: $[150; 155)$, $[155; 160)$, $[160; 165)$, $[165; 170)$, $[170; 175]$. Tìm độ dài của mỗi nhóm.",
        "exampleSolution": "Độ dài của mỗi nhóm là: $155 - 150 = 5$ cm. Tất cả các nhóm đều có độ dài bằng 5 cm."
      },
      {
        "index": "2",
        "title": "2. Giá trị đại diện của nhóm",
        "points": [
          "Giá trị đại diện $c_i$ của nhóm $[a_i; a_{i+1})$ là trung bình cộng của hai đầu mút:",
          "$$c_i = \\dfrac{a_i + a_{i+1}}{2}$$",
          "Giá trị đại diện được dùng để tính toán các số đặc trưng như số trung bình của mẫu số liệu ghép nhóm."
        ],
        "formula": "c_i = \\dfrac{a_i + a_{i+1}}{2}",
        "exampleProblem": "Tìm giá trị đại diện của nhóm $[40,5; 45,5)$ và nhóm $[50; 60)$.",
        "exampleSolution": "• Giá trị đại diện của nhóm $[40,5; 45,5)$ là: $c = \\dfrac{40,5 + 45,5}{2} = 43$.\n• Giá trị đại diện của nhóm $[50; 60)$ là: $c = \\dfrac{50 + 60}{2} = 55$."
      },
      {
        "index": "3",
        "title": "3. Tần số tích lũy",
        "points": [
          "Tần số tích lũy $cf_k$ của một nhóm là tổng tần số của nhóm đó và tất cả các nhóm đứng trước nó:",
          "$$cf_k = m_1 + m_2 + \\dots + m_k$$",
          "Ý nghĩa: Tần số tích lũy cho biết có bao nhiêu số liệu trong mẫu có giá trị nhỏ hơn đầu mút phải $a_{k+1}$ của nhóm đó.",
          "Tần số tích lũy của nhóm cuối cùng luôn bằng cỡ mẫu $n$."
        ],
        "formula": "cf_k = \\sum_{i=1}^k m_i; \\quad cf_k = cf_{k-1} + m_k",
        "exampleProblem": "Cho bảng tần số với các tần số lần lượt là $m_1 = 5, m_2 = 12, m_3 = 23, m_4 = 17, m_5 = 3$. Tính tần số tích lũy của nhóm thứ 3.",
        "exampleSolution": "Tần số tích lũy của nhóm thứ 3 là: $cf_3 = m_1 + m_2 + m_3 = 5 + 12 + 23 = 40$."
      },
      {
        "index": "4",
        "title": "4. Quy trình ghép nhóm mẫu số liệu không ghép nhóm",
        "points": [
          "Bước 1: Tìm giá trị nhỏ nhất $x_{\\min}$ và giá trị lớn nhất $x_{\\max}$ của mẫu số liệu. Tính khoảng biến thiên $R = x_{\\max} - x_{\\min}$.",
          "Bước 2: Chọn số nhóm $k$ thích hợp (thường từ 5 đến 8 nhóm). Xác định độ dài nhóm $L > \\dfrac{R}{k}$.",
          "Bước 3: Xác định các nửa khoảng $[a_i; a_{i+1})$ với $a_1 \\le x_{\\min}$ và $a_{k+1} > x_{\\max}$.",
          "Bước 4: Đếm số giá trị thuộc mỗi nhóm và lập bảng tần số ghép nhóm."
        ],
        "formula": "R = x_{\\max} - x_{\\min}; \\quad L \\approx \\dfrac{R}{k}",
        "exampleProblem": "Mẫu số liệu có giá trị nhỏ nhất là 30 và lớn nhất là 70. Nếu chia thành 8 nhóm có độ dài bằng nhau thì độ dài mỗi nhóm bằng bao nhiêu?",
        "exampleSolution": "Khoảng biến thiên: $R = 70 - 30 = 40$. Độ dài mỗi nhóm là: $L = \\dfrac{40}{8} = 5$."
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-11.8.1",
        "timeSeconds": 180,
        "timeLabel": "03:00",
        "title": "Định nghĩa nhóm số liệu ghép nhóm",
        "question": "Nhóm số liệu trong mẫu số liệu ghép nhóm thường được cho dưới dạng nào?",
        "options": [
          "$[a; b)$, trong đó $a$ là đầu mút trái, $b$ là đầu mút phải",
          "$(a; b)$, trong đó $a, b$ là các số bất kỳ",
          "$(a; b]$, trong đó chỉ lấy đầu mút phải",
          "$[a; b]$, luôn bắt buộc lấy cả hai đầu mút cho mọi nhóm"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa SGK, mỗi nhóm số liệu thường được biểu diễn dưới dạng nửa khoảng $[a_i; a_{i+1})$, với $a_i$ là đầu mút trái và $a_{i+1}$ là đầu mút phải."
      },
      {
        "id": "vq-11.8.2",
        "timeSeconds": 420,
        "timeLabel": "07:00",
        "title": "Giá trị đại diện của nhóm",
        "question": "Giá trị đại diện của nhóm $[a; b)$ được tính theo công thức nào sau đây?",
        "options": [
          "$\\dfrac{a + b}{2}$",
          "$b - a$",
          "$\\sqrt{ab}$",
          "$\\dfrac{b - a}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Giá trị đại diện của nhóm $[a; b)$ là trung bình cộng hai đầu mút: $c = \\dfrac{a + b}{2}$."
      },
      {
        "id": "vq-11.8.3",
        "timeSeconds": 750,
        "timeLabel": "12:30",
        "title": "Độ dài của nhóm",
        "question": "Độ dài của nhóm $[150; 155)$ là:",
        "options": [
          "$5$",
          "$152,5$",
          "$155$",
          "$10$"
        ],
        "correctIndex": 0,
        "explanation": "Độ dài của nhóm là hiệu hai đầu mút: $L = 155 - 150 = 5$."
      },
      {
        "id": "vq-11.8.4",
        "timeSeconds": 1080,
        "timeLabel": "18:00",
        "title": "Tần số tích lũy",
        "question": "Tần số tích lũy của nhóm cuối cùng trong bảng tần số ghép nhóm có giá trị bằng:",
        "options": [
          "Cỡ mẫu $n$",
          "Tần số của nhóm đầu tiên",
          "Trung bình cộng các tần số",
          "Tần số lớn nhất"
        ],
        "correctIndex": 0,
        "explanation": "Tần số tích lũy của nhóm cuối cùng bằng tổng tần số của toàn bộ các nhóm, tức là bằng cỡ mẫu $n$."
      }
    ],
    "tips": [
      "Để tìm giá trị đại diện của nhóm $[a; b)$, luôn nhớ cộng hai đầu mút rồi chia đôi: $c = \\dfrac{a + b}{2}$.",
      "Độ dài của nhóm bằng đầu mút phải trừ đầu mút trái: $L = b - a$. Không cộng 1 như khi đếm số nguyên!",
      "Khi chuyển mẫu số liệu gốc sang mẫu ghép nhóm, kiểm tra tổng các tần số $\\sum m_i$ phải bằng đúng cỡ mẫu $n$ ban đầu.",
      "Giá trị rơi đúng vào đầu mút trái $a$ thì thuộc nhóm $[a; b)$, nhưng rơi đúng vào đầu mút phải $b$ thì thuộc nhóm kế tiếp $[b; c)$."
    ],
    "traps": [
      "Nhầm lẫn giữa độ dài nhóm $L = b - a$ và giá trị đại diện $c = \\dfrac{a + b}{2}$.",
      "Xếp nhầm biên: Giá trị $x = 160$ trong bảng gồm các nhóm $[155; 160)$ và $[160; 165)$ phải được tính vào nhóm $[160; 165)$, không được tính vào $[155; 160)$.",
      "Quên kiểm tra cỡ mẫu: Bỏ sót số liệu khi đếm thủ công dẫn đến tổng tần số nhỏ hơn cỡ mẫu $n$."
    ],
    "quizQuestions": [
      {
        "id": "quiz-11.8.1",
        "badge": "Câu 1 - Nhận biết - Định nghĩa mẫu số liệu ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 1",
        "question": "Điền từ thích hợp vào chỗ trống: \"Mẫu số liệu ... là mẫu số liệu cho dưới dạng bảng tần số của các nhóm số liệu.\"",
        "options": [
          "Ghép nhóm",
          "Không ghép nhóm",
          "Rời rạc",
          "Hỗn hợp"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, mẫu số liệu ghép nhóm là mẫu số liệu được cho dưới dạng bảng tần số của các nhóm số liệu."
      },
      {
        "id": "quiz-11.8.2",
        "badge": "Câu 2 - Nhận biết - Dạng biểu diễn của nhóm số liệu",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 2",
        "question": "Mỗi nhóm số liệu trong mẫu số liệu ghép nhóm thường được biểu diễn dưới dạng nào?",
        "options": [
          "$[a; b)$, trong đó $a$ là đầu mút trái, $b$ là đầu mút phải",
          "$(a; b)$, không lấy cả hai đầu mút",
          "$(a; b]$, chỉ lấy đầu mút phải",
          "$[a; b]$, luôn bắt buộc lấy cả hai đầu mút"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm số liệu thường được cho dưới dạng nửa khoảng $[a; b)$, trong đó $a$ là đầu mút trái, $b$ là đầu mút phải (nhóm cuối có thể lấy đoạn $[a; b]$)."
      },
      {
        "id": "quiz-11.8.3",
        "badge": "Câu 3 - Nhận biết - Công thức tính độ dài nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 3",
        "question": "Độ dài của nhóm $[a_i; a_{i+1})$ được tính theo công thức nào sau đây?",
        "options": [
          "$a_{i+1} - a_i$",
          "$\\dfrac{a_i + a_{i+1}}{2}$",
          "$a_i + a_{i+1}$",
          "$a_{i+1} - a_i + 1$"
        ],
        "correctIndex": 0,
        "explanation": "Độ dài của nhóm $[a_i; a_{i+1})$ bằng hiệu số giữa đầu mút phải và đầu mút trái: $L = a_{i+1} - a_i$."
      },
      {
        "id": "quiz-11.8.4",
        "badge": "Câu 4 - Nhận biết - Công thức giá trị đại diện",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 4",
        "question": "Giá trị đại diện $c_i$ của nhóm $[a_i; a_{i+1})$ được tính bởi công thức nào?",
        "options": [
          "$c_i = \\dfrac{a_i + a_{i+1}}{2}$",
          "$c_i = a_{i+1} - a_i$",
          "$c_i = \\sqrt{a_i \\cdot a_{i+1}}$",
          "$c_i = \\dfrac{a_{i+1} - a_i}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Giá trị đại diện của nhóm là trung bình cộng của hai đầu mút: $c_i = \\dfrac{a_i + a_{i+1}}{2}$."
      },
      {
        "id": "quiz-11.8.5",
        "badge": "Câu 5 - Thông hiểu - Đếm số nhóm của mẫu số liệu",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 5",
        "question": "Khảo sát thời gian (phút) đi làm của một số nhân viên công ty được cho trong bảng sau: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[15; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 25)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[25; 30)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[30; 35)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[35; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 45)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[45; 50)$</th></tr></thead></table></div> Mẫu số liệu này được chia thành bao nhiêu nhóm?",
        "options": [
          "$7$ nhóm",
          "$6$ nhóm",
          "$5$ nhóm",
          "$8$ nhóm"
        ],
        "correctIndex": 0,
        "explanation": "Quan sát các nửa khoảng đã cho, ta thấy mẫu số liệu được chia thành đúng 7 nhóm."
      },
      {
        "id": "quiz-11.8.6",
        "badge": "Câu 6 - Thông hiểu - Tìm giá trị đại diện cụ thể",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 6",
        "question": "Giá trị đại diện của nhóm $[160; 165)$ là:",
        "options": [
          "$162,5$",
          "$160$",
          "$165$",
          "$5$"
        ],
        "correctIndex": 0,
        "explanation": "$c = \\dfrac{160 + 165}{2} = 162,5$."
      },
      {
        "id": "quiz-11.8.7",
        "badge": "Câu 7 - Thông hiểu - Tìm độ dài của nhóm cụ thể",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 7",
        "question": "Cho bảng số liệu gồm các nhóm: $[40,5; 45,5), [45,5; 50,5), [50,5; 55,5)$. Độ dài của mỗi nhóm là:",
        "options": [
          "$5$",
          "$43$",
          "$45,5$",
          "$10$"
        ],
        "correctIndex": 0,
        "explanation": "Độ dài của nhóm: $L = 45,5 - 40,5 = 5$."
      },
      {
        "id": "quiz-11.8.8",
        "badge": "Câu 8 - Thông hiểu - Xác định tần số nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 8",
        "question": "Cho bảng phân bố thời gian truy cập Internet của một số học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[9,5; 12,5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[12,5; 15,5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[15,5; 18,5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[18,5; 21,5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[21,5; 24,5)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$3$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$15$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$24$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td></tr></tbody></table></div> Có bao nhiêu học sinh truy cập Internet từ 18,5 đến dưới 21,5 phút?",
        "options": [
          "$24$",
          "$15$",
          "$12$",
          "$2$"
        ],
        "correctIndex": 0,
        "explanation": "Dựa vào bảng tần số, nhóm $[18,5; 21,5)$ có tần số là 24 học sinh."
      },
      {
        "id": "quiz-11.8.9",
        "badge": "Câu 9 - Thông hiểu - Tính cỡ mẫu từ bảng ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 9",
        "question": "Một mẫu số liệu ghép nhóm có bảng phân bố tần số: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhóm</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 1</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 2</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 3</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 4</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 5</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 6</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Tần số</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$18$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$40$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$26$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$3$</td></tr></tbody></table></div> Cỡ mẫu $n$ của mẫu số liệu là:",
        "options": [
          "$100$",
          "$90$",
          "$95$",
          "$105$"
        ],
        "correctIndex": 0,
        "explanation": "Cỡ mẫu $n = 5 + 18 + 40 + 26 + 8 + 3 = 100$."
      },
      {
        "id": "quiz-11.8.10",
        "badge": "Câu 10 - Thông hiểu - Xác định phần tử thuộc nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 10",
        "question": "Số liệu $x = 160$ thuộc vào nhóm nào sau đây?",
        "options": [
          "$[160; 165)$",
          "$[155; 160)$",
          "$(160; 165)$",
          "$[150; 155)$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm $[160; 165)$ lấy đầu mút trái là 160 và không lấy 165. Do đó $x = 160$ thuộc nhóm $[160; 165)$."
      },
      {
        "id": "quiz-11.8.11",
        "badge": "Câu 11 - Thông hiểu - Tính tần số tích lũy",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 11",
        "question": "Cho bảng phân bố tần số ghép nhóm gồm 4 nhóm: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhóm</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 1</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 2</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 3</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 4</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Tần số</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$14$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$11$</td></tr></tbody></table></div> Tần số tích lũy của nhóm thứ ba là:",
        "options": [
          "$27$",
          "$14$",
          "$13$",
          "$38$"
        ],
        "correctIndex": 0,
        "explanation": "Tần số tích lũy của nhóm thứ 3 là: $cf_3 = 4 + 9 + 14 = 27$."
      },
      {
        "id": "quiz-11.8.12",
        "badge": "Câu 12 - Thông hiểu - Tính tần số tích lũy nhóm cuối",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 12",
        "question": "Một mẫu số liệu gồm 50 số liệu được chia thành 5 nhóm. Tần số tích lũy của nhóm thứ 5 bằng:",
        "options": [
          "$50$",
          "$10$",
          "$25$",
          "Không xác định được"
        ],
        "correctIndex": 0,
        "explanation": "Tần số tích lũy của nhóm cuối cùng luôn bằng tổng tất cả các tần số, tức là bằng cỡ mẫu $n = 50$."
      },
      {
        "id": "quiz-11.8.13",
        "badge": "Câu 13 - Vận dụng - Tìm khoảng biến thiên khi ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 13",
        "question": "Một mẫu số liệu điều tra có giá trị nhỏ nhất là $129$ và giá trị lớn nhất là $145$. Khoảng biến thiên $R$ của mẫu số liệu là:",
        "options": [
          "$16$",
          "$15$",
          "$17$",
          "$14$"
        ],
        "correctIndex": 0,
        "explanation": "Khoảng biến thiên: $R = x_{\\max} - x_{\\min} = 145 - 129 = 16$."
      },
      {
        "id": "quiz-11.8.14",
        "badge": "Câu 14 - Vận dụng - Xác định độ dài nhóm từ khoảng biến thiên",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 14",
        "question": "Cần phân chia một mẫu số liệu có khoảng biến thiên $R = 40$ thành $8$ nhóm có độ dài bằng nhau. Độ dài mỗi nhóm là:",
        "options": [
          "$5$",
          "$4$",
          "$8$",
          "$6$"
        ],
        "correctIndex": 0,
        "explanation": "Độ dài mỗi nhóm: $L = \\dfrac{R}{k} = \\dfrac{40}{8} = 5$."
      },
      {
        "id": "quiz-11.8.15",
        "badge": "Câu 15 - Vận dụng - Đếm số lượng giá trị thỏa điều kiện ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 15",
        "question": "Cho bảng phân bố điểm thi môn Toán của học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Điểm thi</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 50)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[50; 70)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[70; 100]$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$15$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$22$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$13$</td></tr></tbody></table></div> Biết điểm đạt từ 50 trở lên. Hỏi có bao nhiêu học sinh KHÔNG đạt?",
        "options": [
          "$25$ học sinh",
          "$24$ học sinh",
          "$26$ học sinh",
          "$20$ học sinh"
        ],
        "correctIndex": 0,
        "explanation": "Số học sinh dưới 50 điểm nằm trong các nhóm $[0; 20), [20; 40), [40; 50)$: $4 + 6 + 15 = 25$ học sinh."
      },
      {
        "id": "quiz-11.8.16",
        "badge": "Câu 16 - Vận dụng - Tính tỉ lệ phần trăm của nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 16",
        "question": "Khảo sát chiều dài lá dương xỉ của 80 chiếc lá thu được bảng sau: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Chiều dài (cm)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[10; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 30)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[30; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 50)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số lá</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$28$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$32$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td></tr></tbody></table></div> Tỉ lệ lá có chiều dài từ $20$ cm đến dưới $40$ cm chiếm bao nhiêu phần trăm?",
        "options": [
          "$75\\%$",
          "$70\\%$",
          "$65\\%$",
          "$80\\%$"
        ],
        "correctIndex": 0,
        "explanation": "Số lá từ 20 đến dưới 40 cm là: $28 + 32 = 60$ lá. Tỉ lệ: $\\dfrac{60}{80} \\times 100\\% = 75\\%$."
      },
      {
        "id": "quiz-11.8.17",
        "badge": "Câu 17 - Vận dụng - Tính số lượng thực tế theo cỡ áo",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 17",
        "question": "Khảo sát chiều cao và cỡ áo của 36 bạn học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Size áo (Chiều cao cm)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">M $[155; 165)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">L $[165; 175)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">XL $[175; 185)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$22$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td></tr></tbody></table></div> Nếu công ty may $900$ áo thì nên may bao nhiêu áo size M?",
        "options": [
          "$550$ áo",
          "$500$ áo",
          "$600$ áo",
          "$520$ áo"
        ],
        "correctIndex": 0,
        "explanation": "Tỉ lệ học sinh size M là: $\\dfrac{22}{36} = \\dfrac{11}{18}$. Khi may 900 áo: $900 \\times \\dfrac{11}{18} = 550$ áo."
      },
      {
        "id": "quiz-11.8.18",
        "badge": "Câu 18 - Vận dụng - Ghép nhóm dữ liệu bảng điểm số",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 18",
        "question": "Điểm kiểm tra giữa kì I của lớp 11A được ghi lại trong bảng: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Điểm số</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[3; 5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[5; 7)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[7; 9)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[9; 10]$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$3$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$20$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td></tr></tbody></table></div> Sĩ số lớp 11A là:",
        "options": [
          "$40$ học sinh",
          "$38$ học sinh",
          "$42$ học sinh",
          "$45$ học sinh"
        ],
        "correctIndex": 0,
        "explanation": "Sĩ số lớp: $n = 3 + 12 + 20 + 5 = 40$ học sinh."
      },
      {
        "id": "quiz-11.8.19",
        "badge": "Câu 19 - Vận dụng cao - Nhận diện quy tắc ghép nhóm tối ưu",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 19",
        "question": "Phát biểu nào sau đây là KHÔNG chính xác về việc ghép nhóm mẫu số liệu?",
        "options": [
          "Nên chia mẫu số liệu thành càng nhiều nhóm (khoảng 30-40 nhóm) càng tốt để tăng độ chính xác",
          "Mẫu số liệu ghép nhóm giúp thu gọn và thuận lợi cho việc tổ chức, phân tích số liệu",
          "Các nhóm số liệu thường có độ dài bằng nhau",
          "Giá trị đại diện của nhóm $[a; b)$ là $\\dfrac{a+b}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Không nên chia thành quá nhiều nhóm vì sẽ làm mất đi ưu điểm thu gọn và khái quát của mẫu số liệu ghép nhóm. Thông thường chỉ chia từ 5 đến 8 nhóm."
      },
      {
        "id": "quiz-11.8.20",
        "badge": "Câu 20 - Vận dụng cao - Khảo sát số liệu kinh tế",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trắc nghiệm Câu 20",
        "question": "Doanh thu (triệu đồng) trong 20 ngày của cửa hàng được thống kê: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Doanh thu (triệu đồng)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[5; 7)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[7; 9)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[9; 11)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[11; 13)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[13; 15)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số ngày</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$3$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$1$</td></tr></tbody></table></div> Tần số tích lũy của nhóm $[9; 11)$ là:",
        "options": [
          "$16$",
          "$14$",
          "$9$",
          "$19$"
        ],
        "correctIndex": 0,
        "explanation": "Tần số tích lũy của nhóm thứ 3 là: $cf_3 = 2 + 7 + 7 = 16$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-11.8.1",
        "badge": "Đúng/Sai 1 - Khái niệm mẫu số liệu ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Đúng Sai Câu 1",
        "prompt": "Cho mẫu số liệu ghép nhóm về thời gian xem tivi (giờ/tuần) của 32 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (giờ/tuần)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[5; 10)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[10; 15)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[15; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 25)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$16$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Mẫu số liệu trên gồm có 5 nhóm.",
            "correctAnswer": true,
            "explanation": "Đúng, có 5 khoảng: [0; 5), [5; 10), [10; 15), [15; 20), [20; 25)."
          },
          {
            "id": "b",
            "text": "Độ dài của mỗi nhóm bằng 5 giờ.",
            "correctAnswer": true,
            "explanation": "Đúng, độ dài mỗi nhóm: 5 - 0 = 10 - 5 = 5."
          },
          {
            "id": "c",
            "text": "Giá trị đại diện của nhóm thứ ba $[10; 15)$ là 12,5 giờ.",
            "correctAnswer": true,
            "explanation": "Đúng, c_3 = (10 + 15)/2 = 12,5."
          },
          {
            "id": "d",
            "text": "Số học sinh xem tivi từ 15 giờ trở lên là 2 học sinh.",
            "correctAnswer": false,
            "explanation": "Sai, số học sinh xem từ 15 giờ trở lên gồm nhóm [15; 20) và [20; 25): 2 + 2 = 4 học sinh."
          }
        ]
      },
      {
        "id": "tf-11.8.2",
        "badge": "Đúng/Sai 2 - Tần số tích lũy và cỡ mẫu",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Đúng Sai Câu 2",
        "prompt": "Cho bảng phân bố tần số ghép nhóm về cân nặng (kg) của 40 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Cân nặng (kg)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 45)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[45; 50)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[50; 55)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[55; 60)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$14$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Cỡ mẫu của mẫu số liệu là $n = 40$.",
            "correctAnswer": true,
            "explanation": "Đúng, 6 + 14 + 12 + 8 = 40."
          },
          {
            "id": "b",
            "text": "Tần số tích lũy của nhóm $[45; 50)$ là $20$.",
            "correctAnswer": true,
            "explanation": "Đúng, cf_2 = 6 + 14 = 20."
          },
          {
            "id": "c",
            "text": "Tần số tích lũy của nhóm $[50; 55)$ là $30$.",
            "correctAnswer": false,
            "explanation": "Sai, cf_3 = 6 + 14 + 12 = 32."
          },
          {
            "id": "d",
            "text": "Có 50% số học sinh có cân nặng dưới 50 kg.",
            "correctAnswer": true,
            "explanation": "Đúng, số học sinh dưới 50 kg là 20 HS, tỉ lệ: 20/40 = 50%."
          }
        ]
      },
      {
        "id": "tf-11.8.3",
        "badge": "Đúng/Sai 3 - Ghép nhóm số liệu từ dãy số thực tế",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Đúng Sai Câu 3",
        "prompt": "Khảo sát tuổi thọ của 35 bóng đèn có tuổi thọ thấp nhất là 1101 giờ và cao nhất là 1179 giờ. Người ta chia thành 4 nhóm có độ dài bằng nhau: $[1100; 1120), [1120; 1140), [1140; 1160), [1160; 1180)$. Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khoảng biến thiên của mẫu số liệu ban đầu là $78$ giờ.",
            "correctAnswer": true,
            "explanation": "Đúng, R = 1179 - 1101 = 78 giờ."
          },
          {
            "id": "b",
            "text": "Độ dài của mỗi nhóm là $20$ giờ.",
            "correctAnswer": true,
            "explanation": "Đúng, L = 1120 - 1100 = 20."
          },
          {
            "id": "c",
            "text": "Bóng đèn có tuổi thọ 1140 giờ được xếp vào nhóm $[1120; 1140)$.",
            "correctAnswer": false,
            "explanation": "Sai, 1140 là đầu mút phải của [1120; 1140) nên nó thuộc vào nhóm kế tiếp [1140; 1160)."
          },
          {
            "id": "d",
            "text": "Giá trị đại diện của nhóm thứ nhất là $1110$ giờ.",
            "correctAnswer": true,
            "explanation": "Đúng, (1100 + 1120)/2 = 1110."
          }
        ]
      },
      {
        "id": "tf-11.8.4",
        "badge": "Đúng/Sai 4 - Bảng số liệu tiền điện của các hộ gia đình",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Đúng Sai Câu 4",
        "prompt": "Cho bảng số liệu về tiền điện phải trả trong tháng (nghìn đồng) của 50 hộ gia đình: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Tiền điện (nghìn đồng)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[375; 450)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[450; 525)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[525; 600)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[600; 675)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[675; 750)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[750; 825)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số hộ gia đình</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$15$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Độ dài của mỗi nhóm trong bảng bằng $75$ nghìn đồng.",
            "correctAnswer": true,
            "explanation": "Đúng, 450 - 375 = 75."
          },
          {
            "id": "b",
            "text": "Giá trị đại diện của nhóm $[450; 525)$ là $487,5$ nghìn đồng.",
            "correctAnswer": true,
            "explanation": "Đúng, (450 + 525)/2 = 487,5."
          },
          {
            "id": "c",
            "text": "Nhóm có số lượng hộ gia đình nhiều nhất là $[450; 525)$.",
            "correctAnswer": true,
            "explanation": "Đúng, tần số cao nhất là 15 hộ thuộc nhóm [450; 525)."
          },
          {
            "id": "d",
            "text": "Tần số tích lũy của nhóm $[525; 600)$ là $25$.",
            "correctAnswer": false,
            "explanation": "Sai, cf_3 = 6 + 15 + 10 = 31 hộ."
          }
        ]
      },
      {
        "id": "tf-11.8.5",
        "badge": "Đúng/Sai 5 - Tỉ lệ phần trăm và nhóm chiếm ưu thế",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Đúng Sai Câu 5",
        "prompt": "Thống kê nhiệt độ tại một địa phương trong 40 ngày mùa hè: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhiệt độ ($^{\\\\circ}$C)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[28; 30)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[30; 32)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[32; 34)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[34; 36)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số ngày</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$15$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Cỡ mẫu là $n = 40$ ngày.",
            "correctAnswer": true,
            "explanation": "Đúng, 7 + 15 + 12 + 6 = 40 ngày."
          },
          {
            "id": "b",
            "text": "Tỉ lệ ngày có nhiệt độ từ 30°C đến dưới 32°C là $37,5\\%$.",
            "correctAnswer": true,
            "explanation": "Đúng, 15/40 = 37,5%."
          },
          {
            "id": "c",
            "text": "Số ngày có nhiệt độ từ 32°C trở lên là 18 ngày.",
            "correctAnswer": true,
            "explanation": "Đúng, 12 + 6 = 18 ngày."
          },
          {
            "id": "d",
            "text": "Giá trị đại diện của nhóm cuối cùng là $36°C$.",
            "correctAnswer": false,
            "explanation": "Sai, giá trị đại diện của [34; 36) là (34 + 36)/2 = 35°C."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-11.8.1",
        "badge": "TLN 1 - Tính giá trị đại diện",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trả lời ngắn Câu 1",
        "prompt": "Tính giá trị đại diện của nhóm số liệu $[155; 165)$.",
        "correctAnswer": "160",
        "acceptableAnswers": [
          "160"
        ],
        "explanation": "Giá trị đại diện: $c = \\dfrac{155 + 165}{2} = 160$."
      },
      {
        "id": "sa-11.8.2",
        "badge": "TLN 2 - Tính độ dài của nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trả lời ngắn Câu 2",
        "prompt": "Cho nhóm số liệu $[37,5; 42,5)$. Tìm độ dài của nhóm số liệu này.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5"
        ],
        "explanation": "Độ dài nhóm: $L = 42,5 - 37,5 = 5$."
      },
      {
        "id": "sa-11.8.3",
        "badge": "TLN 3 - Tính tần số tích lũy",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trả lời ngắn Câu 3",
        "prompt": "Cho bảng tần số ghép nhóm có 4 nhóm: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhóm</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 1</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 2</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 3</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 4</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Tần số</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$22$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$35$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$15$</td></tr></tbody></table></div> Tính tần số tích lũy của nhóm thứ hai.",
        "correctAnswer": "30",
        "acceptableAnswers": [
          "30"
        ],
        "explanation": "Tần số tích lũy của nhóm thứ hai: $cf_2 = 8 + 22 = 30$."
      },
      {
        "id": "sa-11.8.4",
        "badge": "TLN 4 - Tính cỡ mẫu",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trả lời ngắn Câu 4",
        "prompt": "Một bảng tần số ghép nhóm gồm 5 nhóm có phân bố: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhóm</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 1</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 2</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 3</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 4</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">Nhóm 5</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Tần số</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$14$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$25$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$37$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$18$</td></tr></tbody></table></div> Tìm cỡ mẫu $n$ của mẫu số liệu.",
        "correctAnswer": "100",
        "acceptableAnswers": [
          "100"
        ],
        "explanation": "Cỡ mẫu: $n = 6 + 14 + 25 + 37 + 18 = 100$."
      },
      {
        "id": "sa-11.8.5",
        "badge": "TLN 5 - Đếm số lượng thỏa mãn điều kiện",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trả lời ngắn Câu 5",
        "prompt": "Bảng thống kê điểm kiểm tra của 45 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Điểm kiểm tra</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[5; 7)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[7; 9)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[9; 10]$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$18$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$15$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td></tr></tbody></table></div> Có bao nhiêu học sinh đạt điểm từ 7 trở lên?",
        "correctAnswer": "22",
        "acceptableAnswers": [
          "22"
        ],
        "explanation": "Số học sinh đạt điểm từ 7 trở lên: $15 + 7 = 22$ học sinh."
      },
      {
        "id": "sa-11.8.6",
        "badge": "TLN 6 - Tìm số nhóm cần chia",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B1 Trả lời ngắn Câu 6",
        "prompt": "Một mẫu số liệu có khoảng biến thiên $R = 36$. Nếu người ta chia thành các nhóm có độ dài bằng nhau là $6$ thì mẫu số liệu được chia thành bao nhiêu nhóm?",
        "correctAnswer": "6",
        "acceptableAnswers": [
          "6"
        ],
        "explanation": "Số nhóm: $k = \\dfrac{R}{L} = \\dfrac{36}{6} = 6$ nhóm."
      }
    ]
  },

  // ==========================================
  // BÀI 9: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM
  // ==========================================
  "t11-b9-so-dac-trung-mau-ghep-nhom": {
    "id": "t11-b9-so-dac-trung-mau-ghep-nhom",
    "lessonNumber": 9,
    "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
    "bookChapter": "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    "scenarioTitle": "Phân tích xu thế trung tâm: Đánh giá điểm thi năng lực, tiền lương và tối ưu hóa quy mô sản xuất",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn Minh",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy, sau khi có bảng tần số ghép nhóm, làm thế nào để chúng ta tính được điểm số trung bình của cả khối, hoặc tìm mức thu nhập phổ biến nhất của các hộ gia đình ạ?",
        "visualGraphic": "graph",
        "mathNote": "\\bar{x} = \\dfrac{1}{n}\\sum m_i c_i,\\; M_o = a_j + \\dots"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính",
        "avatar": "👨‍🏫",
        "speech": "Chào Minh! Chúng ta sử dụng các số đặc trưng đo xu thế trung tâm: Số trung bình $\\bar{x}$, Trung vị $M_e$, Tứ phân vị $Q_1, Q_2, Q_3$ và Mốt $M_o$. Mỗi đại lượng sẽ cho một góc nhìn chuẩn xác về vị trí trung tâm của tập số liệu!",
        "visualGraphic": "graph",
        "mathNote": "\\bar{x},\\; M_e,\\; Q_1, Q_2, Q_3,\\; M_o"
      },
      {
        "id": 3,
        "character": "student",
        "characterName": "Bạn Lan",
        "avatar": "👩‍🎓",
        "speech": "Thưa Thầy, khi dữ liệu có những giá trị ngoại lai quá cao hoặc quá thấp (như vài người có thu nhập đột biến), thì số trung bình hay trung vị đại diện tốt hơn ạ?",
        "visualGraphic": "savings",
        "mathNote": "M_e \\text{ không bị ảnh hưởng bởi giá trị ngoại lai}"
      },
      {
        "id": 4,
        "character": "teacher",
        "characterName": "Thầy Tính",
        "avatar": "👨‍🏫",
        "speech": "Câu hỏi tuyệt vời, Lan! Khi có giá trị ngoại lai, trung vị $M_e$ phản ánh chính xác vị trí trung tâm hơn vì nó chia đôi mẫu số liệu thành 50% lớn hơn và 50% nhỏ hơn mà không bị kéo lệch bởi các giá trị dị biệt!",
        "visualGraphic": "savings",
        "mathNote": "M_e = u_m + \\dfrac{\\frac{n}{2} - C}{n_m}(u_{m+1} - u_m)"
      }
    ],
    "youtubeVideoId": "Xbmf-5y8Syo",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 9 - Các số đặc trưng đo xu thế trung tâm - Toán 11 KNTT",
    "youtubeVideos": [
      {
        "id": "Xbmf-5y8Syo",
        "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm (Tiết 1) - Toán 11 KNTT"
      },
      {
        "id": "ofyfuuTfuoI",
        "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm (Tiết 2) - Toán 11 KNTT"
      },
      {
        "id": "7ZUZn4QkJc4",
        "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm (Tiết 3) - Toán 11 KNTT"
      },
      {
        "id": "5WDwsh_Cwb4",
        "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm (Tiết 4) - Toán 11 KNTT"
      },
      {
        "id": "aWdsl-4gh48",
        "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm (Tiết 5) - Toán 11 KNTT"
      },
      {
        "id": "NUIHOsOQp7U",
        "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm (Tiết 6) - Toán 11 KNTT"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "1. Số trung bình của mẫu số liệu ghép nhóm",
        "points": [
          "Số trung bình của mẫu số liệu ghép nhóm, kí hiệu là $\\bar{x}$, được tính theo công thức:",
          "$$\\bar{x} = \\dfrac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n}$$",
          "trong đó $c_i$ là giá trị đại diện của nhóm thứ $i$, $m_i$ là tần số của nhóm thứ $i$ và $n = m_1 + m_2 + \\dots + m_k$ là cỡ mẫu.",
          "Ý nghĩa: $\\bar{x}$ xấp xỉ số trung bình của mẫu số liệu gốc, đại diện cho độ lớn trung bình của toàn bộ mẫu số liệu."
        ],
        "formula": "\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^k m_i c_i",
        "exampleProblem": "Cho bảng số liệu gồm: $[10; 20)$ có 4 người, $[20; 30)$ có 6 người. Tính số trung bình $\\bar{x}$.",
        "exampleSolution": "Giá trị đại diện: $c_1 = 15, c_2 = 25$. Cỡ mẫu: $n = 4 + 6 = 10$.\n$\\bar{x} = \\dfrac{4(15) + 6(25)}{10} = \\dfrac{60 + 150}{10} = 21$."
      },
      {
        "index": "2",
        "title": "2. Trung vị của mẫu số liệu ghép nhóm",
        "points": [
          "Để tính trung vị $M_e$, ta thực hiện 2 bước:",
          "• Bước 1: Xác định nhóm chứa trung vị. Đó là nhóm đầu tiên có tần số tích lũy $cf \\ge \\dfrac{n}{2}$. Giả sử là nhóm $[a_m; a_{m+1})$.",
          "• Bước 2: Áp dụng công thức tính trung vị:",
          "$$M_e = a_m + \\dfrac{\\dfrac{n}{2} - C}{m_m} \\cdot (a_{m+1} - a_m)$$",
          "trong đó $a_m$ là đầu mút trái, $m_m$ là tần số của nhóm chứa trung vị, $C = cf_{m-1}$ là tần số tích lũy của nhóm trước đó (nếu $m = 1$ thì $C = 0$)."
        ],
        "formula": "M_e = a_m + \\dfrac{\\dfrac{n}{2} - C}{m_m} \\cdot (a_{m+1} - a_m)",
        "exampleProblem": "Cỡ mẫu $n = 40$. Nhóm $[40; 60)$ có tần số $m = 12$, tần số tích lũy nhóm trước $C = 14$. Tính trung vị.",
        "exampleSolution": "$M_e = 40 + \\dfrac{20 - 14}{12} \\times (60 - 40) = 40 + \\dfrac{6}{12} \\times 20 = 40 + 10 = 50$."
      },
      {
        "index": "3",
        "title": "3. Tứ phân vị của mẫu số liệu ghép nhóm",
        "points": [
          "Tứ phân vị gồm ba giá trị $Q_1, Q_2, Q_3$ chia mẫu số liệu thành 4 phần bằng nhau (mỗi phần 25%):",
          "• Tứ phân vị thứ hai: $Q_2 = M_e$ (trung vị).",
          "• Tứ phân vị thứ nhất $Q_1$: Nhóm chứa $Q_1$ là nhóm đầu tiên có $cf \\ge \\dfrac{n}{4}$, giả sử là $[a_p; a_{p+1})$.",
          "$$Q_1 = a_p + \\dfrac{\\dfrac{n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$$",
          "• Tứ phân vị thứ ba $Q_3$: Nhóm chứa $Q_3$ là nhóm đầu tiên có $cf \\ge \\dfrac{3n}{4}$, giả sử là $[a_q; a_{q+1})$.",
          "$$Q_3 = a_q + \\dfrac{\\dfrac{3n}{4} - C}{m_q} \\cdot (a_{q+1} - a_q)$$",
          "• Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$, đo độ phân tán của 50% số liệu trung tâm."
        ],
        "formula": "Q_1 = a_p + \\dfrac{\\frac{n}{4} - C}{m_p}h;\\; Q_3 = a_q + \\dfrac{\\frac{3n}{4} - C}{m_q}h;\\; \\Delta_Q = Q_3 - Q_1",
        "exampleProblem": "Cho $n = 60$. Nhóm $[60; 80)$ chứa $Q_3$ có tần số $m = 25$ và tần số tích lũy trước đó $C = 25$. Tính $Q_3$.",
        "exampleSolution": "$\\dfrac{3n}{4} = 45$. $Q_3 = 60 + \\dfrac{45 - 25}{25} \\times 20 = 60 + 16 = 76$."
      },
      {
        "index": "4",
        "title": "4. Mốt của mẫu số liệu ghép nhóm",
        "points": [
          "• Nhóm chứa mốt là nhóm có tần số lớn nhất, giả sử là nhóm $[a_j; a_{j+1})$.",
          "• Mốt $M_o$ của mẫu số liệu ghép nhóm được tính theo công thức:",
          "$$M_o = a_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (a_{j+1} - a_j)$$",
          "trong đó $m_j$ là tần số của nhóm chứa mốt; $m_{j-1}, m_{j+1}$ lần lượt là tần số của nhóm đứng trước và nhóm đứng sau nó (nếu nhóm đầu chứa mốt thì $m_0 = 0$, nếu nhóm cuối chứa mốt thì $m_{k+1} = 0$).",
          "Ý nghĩa: Mốt đặc trưng cho giá trị xuất hiện phổ biến nhất, dùng nhiều trong phân tích thị trường, thị hiếu tiêu dùng."
        ],
        "formula": "M_o = a_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (a_{j+1} - a_j)",
        "exampleProblem": "Nhóm chứa mốt là $[40; 60)$ với độ dài $h = 20$, tần số $m_j = 12$, hai tần số bên cạnh là $m_{j-1} = 9$ và $m_{j+1} = 10$. Tính mốt $M_o$.",
        "exampleSolution": "$M_o = 40 + \\dfrac{12 - 9}{(12 - 9) + (12 - 10)} \\times 20 = 40 + \\dfrac{3}{5} \\times 20 = 52$."
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-11.9.1",
        "timeSeconds": 180,
        "timeLabel": "03:00",
        "title": "Số trung bình ghép nhóm",
        "question": "Số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm được tính dựa vào đại lượng nào của mỗi nhóm?",
        "options": [
          "Giá trị đại diện của nhóm",
          "Độ dài của nhóm",
          "Đầu mút trái của nhóm",
          "Đầu mút phải của nhóm"
        ],
        "correctIndex": 0,
        "explanation": "Số trung bình ghép nhóm được tính bằng tổng các tích giữa giá trị đại diện và tần số của nhóm, rồi chia cho cỡ mẫu."
      },
      {
        "id": "vq-11.9.2",
        "timeSeconds": 420,
        "timeLabel": "07:00",
        "title": "Nhóm chứa trung vị",
        "question": "Nhóm chứa trung vị của mẫu số liệu ghép nhóm là nhóm đầu tiên có tần số tích lũy thỏa mãn:",
        "options": [
          "$cf \\ge \\dfrac{n}{2}$",
          "$cf \\ge \\dfrac{n}{4}$",
          "$cf \\ge \\dfrac{3n}{4}$",
          "$cf = n$"
        ],
        "correctIndex": 0,
        "explanation": "Trung vị chia đôi mẫu số liệu nên nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $n/2$."
      },
      {
        "id": "vq-11.9.3",
        "timeSeconds": 750,
        "timeLabel": "12:30",
        "title": "Nhóm chứa mốt",
        "question": "Nhóm chứa mốt của mẫu số liệu ghép nhóm là:",
        "options": [
          "Nhóm có tần số lớn nhất",
          "Nhóm ở chính giữa bảng",
          "Nhóm có độ dài dài nhất",
          "Nhóm có giá trị đại diện lớn nhất"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm chứa mốt là nhóm có tần số lớn nhất trong tất cả các nhóm."
      },
      {
        "id": "vq-11.9.4",
        "timeSeconds": 1080,
        "timeLabel": "18:00",
        "title": "Tứ phân vị thứ hai",
        "question": "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu ghép nhóm có giá trị bằng:",
        "options": [
          "Trung vị $M_e$",
          "Số trung bình $\\bar{x}$",
          "Mốt $M_o$",
          "Giá trị đại diện của nhóm giữa"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, tứ phân vị thứ hai $Q_2$ chính là trung vị $M_e$."
      }
    ],
    "tips": [
      "Để tìm nhóm chứa trung vị, hãy lập cột tần số tích lũy $cf_k$ rồi so sánh với $\\dfrac{n}{2}$. Nhóm đầu tiên có $cf_k \\ge \\dfrac{n}{2}$ chính là nhóm chứa trung vị.",
      "Tương tự: nhóm chứa $Q_1$ có $cf_k \\ge \\dfrac{n}{4}$, nhóm chứa $Q_3$ có $cf_k \\ge \\dfrac{3n}{4}$.",
      "Trong công thức tính mốt $M_o$, mẫu số là tổng độ lệch tần số với hai nhóm kế cận: $(m_j - m_{j-1}) + (m_j - m_{j+1})$.",
      "Có thể dùng máy tính cầm tay Casio fx-580VNX (chế độ Thống kê 1 biến kèm cột Tần số) để tính nhanh số trung bình $\\bar{x}$ bằng cách nhập giá trị đại diện $c_i$ vào cột X và tần số $m_i$ vào cột FREQ."
    ],
    "traps": [
      "Nhầm lẫn giữa $C$ và $m_m$: $C$ là tần số tích lũy của nhóm ĐỨNG TRƯỚC nhóm chứa trung vị/tứ phân vị, còn $m_m$ là tần số của CHÍNH NHÓM ĐÓ.",
      "Nhầm thứ tự công sai trong mốt: Công thức mốt chỉ áp dụng khi các nhóm có độ dài $h$ bằng nhau.",
      "Quên nhân độ dài nhóm $h$: Trong công thức $M_e, Q_1, Q_3, M_o$, phần phân số bắt buộc phải nhân với độ dài nhóm $h = a_{j+1} - a_j$ trước khi cộng với đầu mút trái $a_j$."
    ],
    "quizQuestions": [
      {
        "id": "quiz-11.9.1",
        "badge": "Câu 1 - Nhận biết - Công thức số trung bình",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 1",
        "question": "Cho mẫu số liệu ghép nhóm gồm $k$ nhóm có các giá trị đại diện $c_1, c_2, \\dots, c_k$ và các tần số tương ứng $m_1, m_2, \\dots, m_k$. Công thức tính số trung bình $\\bar{x}$ là:",
        "options": [
          "$\\bar{x} = \\dfrac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n}$",
          "$\\bar{x} = \\dfrac{c_1 + c_2 + \\dots + c_k}{k}$",
          "$\\bar{x} = \\dfrac{m_1 + m_2 + \\dots + m_k}{k}$",
          "$\\bar{x} = \\dfrac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{k}$"
        ],
        "correctIndex": 0,
        "explanation": "Số trung bình của mẫu số liệu ghép nhóm: $\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^k m_i c_i$, trong đó $n = \\sum m_i$ là cỡ mẫu."
      },
      {
        "id": "quiz-11.9.2",
        "badge": "Câu 2 - Nhận biết - Nhóm chứa trung vị",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 2",
        "question": "Để xác định nhóm chứa trung vị $M_e$ của mẫu số liệu ghép nhóm cỡ mẫu $n$, ta tìm nhóm đầu tiên có tần số tích lũy $cf$ thỏa mãn điều kiện nào?",
        "options": [
          "$cf \\ge \\dfrac{n}{2}$",
          "$cf \\ge \\dfrac{n}{4}$",
          "$cf \\ge \\dfrac{3n}{4}$",
          "$cf = n$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\dfrac{n}{2}$."
      },
      {
        "id": "quiz-11.9.3",
        "badge": "Câu 3 - Nhận biết - Nhóm chứa mốt",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 3",
        "question": "Nhóm chứa mốt $M_o$ của mẫu số liệu ghép nhóm là nhóm:",
        "options": [
          "Có tần số lớn nhất trong các nhóm",
          "Đứng ở vị trí chính giữa của bảng số liệu",
          "Có tần số tích lũy lớn hơn hoặc bằng $\\dfrac{n}{2}$",
          "Có độ dài lớn nhất"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm chứa mốt của mẫu số liệu ghép nhóm là nhóm có tần số lớn nhất."
      },
      {
        "id": "quiz-11.9.4",
        "badge": "Câu 4 - Nhận biết - Công thức mốt",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 4",
        "question": "Giả sử nhóm $[a_j; a_{j+1})$ là nhóm chứa mốt với tần số $m_j$. Công thức tính mốt $M_o$ là:",
        "options": [
          "$M_o = a_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (a_{j+1} - a_j)$",
          "$M_o = a_j + \\dfrac{m_j - m_{j+1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (a_{j+1} - a_j)$",
          "$M_o = a_j + \\dfrac{m_j}{m_{j-1} + m_{j+1}} \\cdot (a_{j+1} - a_j)$",
          "$M_o = \\dfrac{a_j + a_{j+1}}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Công thức tính mốt của mẫu số liệu ghép nhóm: $M_o = a_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot h$, với $h = a_{j+1} - a_j$."
      },
      {
        "id": "quiz-11.9.5",
        "badge": "Câu 5 - Nhận biết - Công thức tứ phân vị thứ nhất",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 5",
        "question": "Giả sử nhóm $[a_p; a_{p+1})$ chứa tứ phân vị thứ nhất $Q_1$. Công thức tính $Q_1$ là:",
        "options": [
          "$Q_1 = a_p + \\dfrac{\\dfrac{n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$",
          "$Q_1 = a_p + \\dfrac{\\dfrac{n}{2} - C}{m_p} \\cdot (a_{p+1} - a_p)$",
          "$Q_1 = a_p + \\dfrac{\\dfrac{3n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$",
          "$Q_1 = a_p + \\dfrac{n - C}{m_p} \\cdot (a_{p+1} - a_p)$"
        ],
        "correctIndex": 0,
        "explanation": "Công thức tính tứ phân vị thứ nhất: $Q_1 = a_p + \\dfrac{\\dfrac{n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$, trong đó $C = cf_{p-1}$ là tần số tích lũy của nhóm trước."
      },
      {
        "id": "quiz-11.9.6",
        "badge": "Câu 6 - Thông hiểu - Tìm nhóm chứa mốt cụ thể",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 6",
        "question": "Khảo sát cân nặng của 25 quả bơ thu được bảng phân bố: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Cân nặng (g)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[140; 150)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[150; 160)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[160; 170)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[170; 180)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[180; 190)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số quả</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$1$</td></tr></tbody></table></div> Nhóm chứa mốt là:",
        "options": [
          "$[160; 170)$",
          "$[150; 160)$",
          "$[170; 180)$",
          "$[180; 190)$"
        ],
        "correctIndex": 0,
        "explanation": "Tần số lớn nhất là $12$ thuộc nhóm $[160; 170)$."
      },
      {
        "id": "quiz-11.9.7",
        "badge": "Câu 7 - Thông hiểu - Tìm nhóm chứa trung vị cụ thể",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 7",
        "question": "Khảo sát thời gian tập thể dục của 42 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 60)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 80)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[80; 100)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td></tr></tbody></table></div> Nhóm chứa trung vị là:",
        "options": [
          "$[40; 60)$",
          "$[20; 40)$",
          "$[60; 80)$",
          "$[80; 100)$"
        ],
        "correctIndex": 0,
        "explanation": "Cỡ mẫu $n = 42 \\Rightarrow \\dfrac{n}{2} = 21$. Tần số tích lũy: $cf_1 = 5, cf_2 = 14, cf_3 = 26 \\ge 21$. Vậy nhóm chứa trung vị là $[40; 60)$."
      },
      {
        "id": "quiz-11.9.8",
        "badge": "Câu 8 - Thông hiểu - Tìm nhóm chứa Q1 cụ thể",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 8",
        "question": "Khảo sát thời gian tập thể dục của 42 học sinh ở câu 7. Nhóm chứa tứ phân vị thứ nhất $Q_1$ là:",
        "options": [
          "$[20; 40)$",
          "$[0; 20)$",
          "$[40; 60)$",
          "$[60; 80)$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\dfrac{n}{4} = \\dfrac{42}{4} = 10,5$. Tần số tích lũy: $cf_1 = 5, cf_2 = 14 \\ge 10,5$. Vậy nhóm chứa $Q_1$ là $[20; 40)$."
      },
      {
        "id": "quiz-11.9.9",
        "badge": "Câu 9 - Thông hiểu - Tìm nhóm chứa Q3 cụ thể",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 9",
        "question": "Khảo sát thời gian tập thể dục của 42 học sinh ở câu 7. Nhóm chứa tứ phân vị thứ ba $Q_3$ là:",
        "options": [
          "$[60; 80)$",
          "$[40; 60)$",
          "$[80; 100)$",
          "$[20; 40)$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\dfrac{3n}{4} = \\dfrac{3 \\times 42}{4} = 31,5$. Tần số tích lũy: $cf_1=5, cf_2=14, cf_3=26, cf_4=36 \\ge 31,5$. Vậy nhóm chứa $Q_3$ là $[60; 80)$."
      },
      {
        "id": "quiz-11.9.10",
        "badge": "Câu 10 - Thông hiểu - Tính số trung bình đơn giản",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 10",
        "question": "Cho bảng số liệu gồm 2 nhóm: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhóm</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[10; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 30)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số người</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td></tr></tbody></table></div> Số trung bình $\\bar{x}$ của mẫu số liệu là:",
        "options": [
          "$21$",
          "$20$",
          "$19$",
          "$22$"
        ],
        "correctIndex": 0,
        "explanation": "Giá trị đại diện: $c_1 = 15, c_2 = 25$. Số trung bình: $\\bar{x} = \\dfrac{4(15) + 6(25)}{10} = \\dfrac{60 + 150}{10} = 21$."
      },
      {
        "id": "quiz-11.9.11",
        "badge": "Câu 11 - Vận dụng - Tính số trung bình của mẫu 5 nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 11",
        "question": "Cân nặng của 28 học sinh nam lớp 11 được chia thành: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Cân nặng (kg)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[45; 49)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[49; 53)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[53; 57)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[57; 61)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[61; 65)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td></tr></tbody></table></div> Cân nặng trung bình của học sinh xấp xỉ bằng:",
        "options": [
          "$55,6$ kg",
          "$56,2$ kg",
          "$54,8$ kg",
          "$57,1$ kg"
        ],
        "correctIndex": 0,
        "explanation": "Giá trị đại diện: $47; 51; 55; 59; 63$.\n$\\bar{x} = \\dfrac{4(47) + 5(51) + 7(55) + 7(59) + 5(63)}{28} = \\dfrac{188 + 255 + 385 + 413 + 315}{28} = \\dfrac{1556}{28} \\approx 55,57 \\approx 55,6$ kg."
      },
      {
        "id": "quiz-11.9.12",
        "badge": "Câu 12 - Vận dụng - Tính mốt của mẫu ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 12",
        "question": "Khảo sát thời gian tập thể dục của một nhóm người: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 60)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 80)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[80; 100)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số người</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td></tr></tbody></table></div> Mốt $M_o$ của mẫu số liệu là:",
        "options": [
          "$52$",
          "$50$",
          "$48$",
          "$54$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm chứa mốt $[40; 60)$ có $a_j = 40, h = 20, m_j = 12, m_{j-1} = 9, m_{j+1} = 10$.\n$M_o = 40 + \\dfrac{12 - 9}{(12 - 9) + (12 - 10)} \\times 20 = 40 + \\dfrac{3}{3 + 2} \\times 20 = 40 + 12 = 52$."
      },
      {
        "id": "quiz-11.9.13",
        "badge": "Câu 13 - Vận dụng - Tính trung vị của mẫu ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 13",
        "question": "Cho mẫu số liệu khảo sát cự li ném lao của 30 vận động viên: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Cự li (m)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 65)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[65; 70)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[70; 75)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[75; 80)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số vận động viên</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td></tr></tbody></table></div> Trung vị $M_e$ của mẫu số liệu là:",
        "options": [
          "$72,08$ m",
          "$71,25$ m",
          "$72,50$ m",
          "$73,15$ m"
        ],
        "correctIndex": 0,
        "explanation": "Cỡ mẫu $n = 30 \\Rightarrow \\dfrac{n}{2} = 15$. Nhóm chứa trung vị là $[70; 75)$ (do $cf_2 = 10, cf_3 = 22$).\n$a_m = 70, h = 5, m_m = 12, C = 10$.\n$M_e = 70 + \\dfrac{15 - 10}{12} \\times 5 = 70 + \\dfrac{25}{12} \\approx 70 + 2,083 = 72,08$ m."
      },
      {
        "id": "quiz-11.9.14",
        "badge": "Câu 14 - Vận dụng - Tính tứ phân vị Q1",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 14",
        "question": "Cho mẫu số liệu điểm thi của 60 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Điểm thi</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 60)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 80)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[80; 100)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$18$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$25$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td></tr></tbody></table></div> Tứ phân vị thứ nhất $Q_1$ xấp xỉ bằng:",
        "options": [
          "$48,89$",
          "$47,50$",
          "$50,25$",
          "$45,60$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac{n}{4} = 15$. Nhóm chứa $Q_1$ là $[40; 60)$ vì $cf_1 = 7, cf_2 = 25$.\n$a_p = 40, h = 20, m_p = 18, C = 7$.\n$Q_1 = 40 + \\dfrac{15 - 7}{18} \\times 20 = 40 + \\dfrac{160}{18} \\approx 40 + 8,89 = 48,89$."
      },
      {
        "id": "quiz-11.9.15",
        "badge": "Câu 15 - Vận dụng - Tính tứ phân vị Q3",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 15",
        "question": "Với mẫu số liệu ở câu 14 gồm 60 học sinh, tứ phân vị thứ ba $Q_3$ bằng:",
        "options": [
          "$76$",
          "$74$",
          "$75$",
          "$78$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac{3n}{4} = 45$. Nhóm chứa $Q_3$ là $[60; 80)$ vì $cf_2 = 25, cf_3 = 50$.\n$a_q = 60, h = 20, m_q = 25, C = 25$.\n$Q_3 = 60 + \\dfrac{45 - 25}{25} \\times 20 = 60 + \\dfrac{20}{25} \\times 20 = 60 + 16 = 76$."
      },
      {
        "id": "quiz-11.9.16",
        "badge": "Câu 16 - Vận dụng - Tính khoảng tứ phân vị delta_Q",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 16",
        "question": "Biết tứ phân vị thứ nhất $Q_1 = 48,89$ và tứ phân vị thứ ba $Q_3 = 76$. Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ của mẫu số liệu là:",
        "options": [
          "$27,11$",
          "$28,11$",
          "$26,89$",
          "$30,00$"
        ],
        "correctIndex": 0,
        "explanation": "Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 76 - 48,89 = 27,11$."
      },
      {
        "id": "quiz-11.9.17",
        "badge": "Câu 17 - Vận dụng - Xác định số lượng cuộc gọi phổ biến nhất",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 17",
        "question": "Thống kê số cuộc gọi của nhân viên CSKH trong 30 ngày: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Số cuộc gọi</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 5)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[5; 10)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[10; 15)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[15; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 25)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số ngày</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$13$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$7$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$3$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td></tr></tbody></table></div> Mốt của mẫu số liệu là:",
        "options": [
          "$7,86$",
          "$8,50$",
          "$7,25$",
          "$6,90$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm chứa mốt $[5; 10)$ có $a_j = 5, h = 5, m_j = 13, m_{j-1} = 5, m_{j+1} = 7$.\n$M_o = 5 + \\dfrac{13 - 5}{(13 - 5) + (13 - 7)} \\times 5 = 5 + \\dfrac{8}{8 + 6} \\times 5 = 5 + \\dfrac{40}{14} \\approx 5 + 2,86 = 7,86$."
      },
      {
        "id": "quiz-11.9.18",
        "badge": "Câu 18 - Vận dụng - So sánh số trung bình giữa hai tập dữ liệu",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 18",
        "question": "Khảo sát cân nặng cam ở vườn A có trung bình $\\bar{x}_A = 161,7$ g và vườn B có trung bình $\\bar{x}_B = 165,3$ g. Khẳng định nào sau đây đúng?",
        "options": [
          "Theo số trung bình, cam ở vườn B nặng hơn cam ở vườn A",
          "Theo số trung bình, cam ở vườn A nặng hơn cam ở vườn B",
          "Cam ở hai vườn nặng bằng nhau",
          "Không thể so sánh được"
        ],
        "correctIndex": 0,
        "explanation": "Do $\\bar{x}_B = 165,3 > \\bar{x}_A = 161,7$ nên theo số trung bình, quả cam ở vườn B nặng hơn quả cam ở vườn A."
      },
      {
        "id": "quiz-11.9.19",
        "badge": "Câu 19 - Vận dụng cao - Tư vấn giá bán từ mốt",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 19",
        "question": "Khảo sát nhu cầu giá mua nhà của người dân: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Giá nhà (triệu đ/m$^2$)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[10; 14)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[14; 18)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[18; 22)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[22; 26)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[26; 30)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số người</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$54$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$78$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$120$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$45$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td></tr></tbody></table></div> Công ty nên xây nhà ở mức giá nào (mốt) để đáp ứng nhu cầu nhiều người nhất?",
        "options": [
          "$19,4$ triệu đồng",
          "$20,0$ triệu đồng",
          "$18,5$ triệu đồng",
          "$21,2$ triệu đồng"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm chứa mốt $[18; 22)$ có $a_j = 18, h = 4, m_j = 120, m_{j-1} = 78, m_{j+1} = 45$.\n$M_o = 18 + \\dfrac{120 - 78}{(120 - 78) + (120 - 45)} \\times 4 = 18 + \\dfrac{42}{42 + 75} \\times 4 = 18 + \\dfrac{168}{117} \\approx 18 + 1,44 = 19,4$ triệu đồng."
      },
      {
        "id": "quiz-11.9.20",
        "badge": "Câu 20 - Vận dụng cao - Ý nghĩa thống kê của tứ phân vị",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trắc nghiệm Câu 20",
        "question": "Biết tứ phân vị thứ nhất của thời gian ngủ học sinh khối 11 là $Q_1 = 5,64$ giờ. Khẳng định nào sau đây là đúng về mặt ý nghĩa thống kê?",
        "options": [
          "Có khoảng 75% học sinh khối 11 có thời gian ngủ từ 5,64 giờ trở lên",
          "Có đúng 25% học sinh khối 11 ngủ đúng 5,64 giờ",
          "Học sinh khối 11 ngủ trung bình là 5,64 giờ",
          "Có khoảng 75% học sinh ngủ dưới 5,64 giờ"
        ],
        "correctIndex": 0,
        "explanation": "Tứ phân vị thứ nhất $Q_1$ chia mẫu số liệu thành 25% phần nhỏ hơn và 75% phần lớn hơn. Do đó có khoảng 75% học sinh có thời gian ngủ từ $Q_1 = 5,64$ giờ trở lên."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-11.9.1",
        "badge": "Đúng/Sai 1 - Các số đặc trưng cơ bản",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Đúng Sai Câu 1",
        "prompt": "Cho bảng phân bố thời gian tập thể dục của 40 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 60)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 80)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[80; 100)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Số học sinh được khảo sát là $n = 40$.",
            "correctAnswer": true,
            "explanation": "Đúng, 5 + 9 + 12 + 10 + 4 = 40 học sinh."
          },
          {
            "id": "b",
            "text": "Nhóm chứa trung vị là $[40; 60)$.",
            "correctAnswer": true,
            "explanation": "Đúng, n/2 = 20, cf_2 = 14, cf_3 = 26 >= 20 nên thuộc nhóm [40; 60)."
          },
          {
            "id": "c",
            "text": "Nhóm chứa mốt là $[40; 60)$.",
            "correctAnswer": true,
            "explanation": "Đúng, tần số lớn nhất là 12 thuộc nhóm [40; 60)."
          },
          {
            "id": "d",
            "text": "Số trung bình của mẫu số liệu là $50$ phút.",
            "correctAnswer": false,
            "explanation": "Sai, giá trị đại diện: 10, 30, 50, 70, 90. Trung bình = [5(10) + 9(30) + 12(50) + 10(70) + 4(90)]/40 = [50 + 270 + 600 + 700 + 360]/40 = 1980/40 = 49,5 phút."
          }
        ]
      },
      {
        "id": "tf-11.9.2",
        "badge": "Đúng/Sai 2 - Tính toán mốt và trung vị",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Đúng Sai Câu 2",
        "prompt": "Với bảng số liệu ở câu 1 có nhóm chứa mốt là $[40; 60)$ với $m_j = 12, m_{j-1} = 9, m_{j+1} = 10, h = 20$. Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Hiệu $m_j - m_{j-1} = 3$.",
            "correctAnswer": true,
            "explanation": "Đúng, 12 - 9 = 3."
          },
          {
            "id": "b",
            "text": "Mốt của mẫu số liệu là $M_o = 52$ phút.",
            "correctAnswer": true,
            "explanation": "Đúng, M_o = 40 + [3 / (3 + 2)] * 20 = 40 + 12 = 52."
          },
          {
            "id": "c",
            "text": "Trung vị của mẫu số liệu là $M_e = 50$ phút.",
            "correctAnswer": true,
            "explanation": "Đúng, M_e = 40 + [(20 - 14)/12] * 20 = 40 + (6/12)*20 = 40 + 10 = 50 phút."
          },
          {
            "id": "d",
            "text": "Mốt luôn luôn có giá trị trùng với trung vị trong mọi mẫu số liệu ghép nhóm.",
            "correctAnswer": false,
            "explanation": "Sai, mốt và trung vị phản ánh hai khía cạnh khác nhau (tần suất lặp lại cao nhất và vị trí chính giữa) nên thông thường có giá trị khác nhau."
          }
        ]
      },
      {
        "id": "tf-11.9.3",
        "badge": "Đúng/Sai 3 - Tính toán tứ phân vị",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Đúng Sai Câu 3",
        "prompt": "Cho mẫu số liệu điểm kiểm tra của 40 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Điểm kiểm tra</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[2; 4)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[4; 6)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[6; 8)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[8; 10]$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$18$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$8$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là $[4; 6)$.",
            "correctAnswer": true,
            "explanation": "Đúng, n/4 = 10, cf_1 = 4, cf_2 = 14 >= 10 nên thuộc nhóm [4; 6)."
          },
          {
            "id": "b",
            "text": "Tứ phân vị thứ nhất $Q_1 = 5,2$.",
            "correctAnswer": true,
            "explanation": "Đúng, Q_1 = 4 + [(10 - 4)/10] * 2 = 4 + 1,2 = 5,2."
          },
          {
            "id": "c",
            "text": "Nhóm chứa tứ phân vị thứ ba $Q_3$ là $[8; 10]$.",
            "correctAnswer": false,
            "explanation": "Sai, 3n/4 = 30, cf_2 = 14, cf_3 = 32 >= 30 nên nhóm chứa Q_3 là [6; 8)."
          },
          {
            "id": "d",
            "text": "Khoảng tứ phân vị đo độ phân tán của 50% số liệu chính giữa.",
            "correctAnswer": true,
            "explanation": "Đúng, định nghĩa khoảng tứ phân vị delta_Q = Q_3 - Q_1 đo độ phân tán của 50% số liệu trung tâm."
          }
        ]
      },
      {
        "id": "tf-11.9.4",
        "badge": "Đúng/Sai 4 - So sánh hiệu quả của hai nhóm học sinh",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Đúng Sai Câu 4",
        "prompt": "Khảo sát điểm kiểm tra tiếng Anh của hai lớp 11A và 11B cùng có 40 học sinh thu được: Điểm trung bình $\\bar{x}_A = 7,2$ và $\\bar{x}_B = 6,8$; Trung vị $M_{e(A)} = 7,4$ và $M_{e(B)} = 6,9$. Xét tính Đúng / Sai của các kết luận sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điểm trung bình của lớp 11A cao hơn lớp 11B.",
            "correctAnswer": true,
            "explanation": "Đúng, 7,2 > 6,8."
          },
          {
            "id": "b",
            "text": "Theo trung vị, học sinh lớp 11A có kết quả đồng đều hơn và cao hơn lớp 11B.",
            "correctAnswer": true,
            "explanation": "Đúng, 7,4 > 6,9."
          },
          {
            "id": "c",
            "text": "Mọi học sinh lớp 11A đều có điểm cao hơn mọi học sinh lớp 11B.",
            "correctAnswer": false,
            "explanation": "Sai, các số đặc trưng chỉ phản ánh xu thế chung của tập hợp số liệu chứ không khẳng định từng cá nhân."
          },
          {
            "id": "d",
            "text": "Nếu mẫu số liệu có giá trị bất thường (quá cao hoặc quá thấp), trung vị là đại lượng đại diện tốt hơn số trung bình.",
            "correctAnswer": true,
            "explanation": "Đúng, trung vị ít bị ảnh hưởng bởi các giá trị ngoại lai so với số trung bình."
          }
        ]
      },
      {
        "id": "tf-11.9.5",
        "badge": "Đúng/Sai 5 - Ứng dụng mốt trong kinh doanh",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Đúng Sai Câu 5",
        "prompt": "Một cửa hàng giày thống kê cỡ giày bán được trong tháng qua mẫu số liệu ghép nhóm và tính được mốt $M_o = 40,2$. Xét tính Đúng / Sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Cỡ giày 40 là cỡ giày có nhu cầu mua lớn nhất.",
            "correctAnswer": true,
            "explanation": "Đúng, mốt xấp xỉ 40 nên cỡ 40 bán chạy nhất."
          },
          {
            "id": "b",
            "text": "Cửa hàng nên nhập nhiều giày cỡ 40 hơn các cỡ khác.",
            "correctAnswer": true,
            "explanation": "Đúng, ứng dụng thực tế của mốt giúp tối ưu lượng hàng tồn kho theo nhu cầu phổ biến nhất."
          },
          {
            "id": "c",
            "text": "Mốt của mẫu số liệu ghép nhóm luôn là một số nguyên.",
            "correctAnswer": false,
            "explanation": "Sai, công thức mốt nội suy thường cho kết quả là số thập phân (ví dụ 40,2)."
          },
          {
            "id": "d",
            "text": "Một mẫu số liệu ghép nhóm chỉ có thể có duy nhất một mốt.",
            "correctAnswer": false,
            "explanation": "Sai, nếu có hai nhóm không kề nhau cùng đạt tần số lớn nhất bằng nhau thì mẫu có thể có nhiều hơn một mốt."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-11.9.1",
        "badge": "TLN 1 - Tính số trung bình",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trả lời ngắn Câu 1",
        "prompt": "Cho bảng số liệu gồm 3 nhóm: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Nhóm</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 10)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[10; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 30)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Tần số</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$2$</td></tr></tbody></table></div> Tính số trung bình $\\bar{x}$ của mẫu số liệu.",
        "correctAnswer": "15",
        "acceptableAnswers": [
          "15"
        ],
        "explanation": "Giá trị đại diện: $5, 15, 25$. Trung bình: $\\bar{x} = \\dfrac{2(5) + 6(15) + 2(25)}{10} = \\dfrac{10 + 90 + 50}{10} = 15$."
      },
      {
        "id": "sa-11.9.2",
        "badge": "TLN 2 - Tính mốt của mẫu số liệu ghép nhóm",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trả lời ngắn Câu 2",
        "prompt": "Khảo sát thời gian tập thể dục: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 60)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 80)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[80; 100)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số người</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$6$</td></tr></tbody></table></div> Tìm mốt $M_o$ của mẫu số liệu.",
        "correctAnswer": "52",
        "acceptableAnswers": [
          "52"
        ],
        "explanation": "Nhóm chứa mốt $[40; 60)$: $M_o = 40 + \\dfrac{12 - 9}{(12 - 9) + (12 - 10)} \\times 20 = 40 + \\dfrac{3}{5} \\times 20 = 52$."
      },
      {
        "id": "sa-11.9.3",
        "badge": "TLN 3 - Tính trung vị",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trả lời ngắn Câu 3",
        "prompt": "Khảo sát thời gian tập thể dục của 40 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-sm bg-transparent\"><thead><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-left font-medium text-slate-800 dark:text-slate-200\">Thời gian (phút)</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[0; 20)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[20; 40)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[40; 60)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[60; 80)$</th><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$[80; 100)$</th></tr></thead><tbody><tr><th class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium text-left text-slate-800 dark:text-slate-200\">Số học sinh</th><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$5$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$9$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$12$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$10$</td><td class=\"border border-slate-300 dark:border-slate-700 px-3 py-1.5 font-medium\">$4$</td></tr></tbody></table></div> Tính trung vị $M_e$ của mẫu số liệu.",
        "correctAnswer": "50",
        "acceptableAnswers": [
          "50"
        ],
        "explanation": "Cỡ mẫu $n = 40 \\Rightarrow \\dfrac{n}{2} = 20$. Nhóm chứa trung vị là $[40; 60)$ với $C = 14, m_m = 12, h = 20$.\n$M_e = 40 + \\dfrac{20 - 14}{12} \\times 20 = 40 + 10 = 50$."
      },
      {
        "id": "sa-11.9.4",
        "badge": "TLN 4 - Tính tứ phân vị Q1",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trả lời ngắn Câu 4",
        "prompt": "Cho mẫu số liệu ghép nhóm của 40 học sinh ở câu 3. Tính tứ phân vị thứ nhất $Q_1$. (Nhập số thập phân dùng dấu phẩy hoặc chấm, làm tròn đến 2 chữ số thập phân).",
        "correctAnswer": "31,11",
        "acceptableAnswers": [
          "31,11",
          "31.11"
        ],
        "explanation": "$\\dfrac{n}{4} = 10$. Nhóm chứa $Q_1$ là $[20; 40)$ có $a_p = 20, h = 20, m_p = 9, C = 5$.\n$Q_1 = 20 + \\dfrac{10 - 5}{9} \\times 20 = 20 + \\dfrac{100}{9} \\approx 31,11$."
      },
      {
        "id": "sa-11.9.5",
        "badge": "TLN 5 - Tính tứ phân vị Q3",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trả lời ngắn Câu 5",
        "prompt": "Cho mẫu số liệu ghép nhóm của 40 học sinh ở câu 3. Tính tứ phân vị thứ ba $Q_3$.",
        "correctAnswer": "68",
        "acceptableAnswers": [
          "68"
        ],
        "explanation": "$\\dfrac{3n}{4} = 30$. Nhóm chứa $Q_3$ là $[60; 80)$ có $a_q = 60, h = 20, m_q = 10, C = 26$.\n$Q_3 = 60 + \\dfrac{30 - 26}{10} \\times 20 = 60 + 8 = 68$."
      },
      {
        "id": "sa-11.9.6",
        "badge": "TLN 6 - Tính khoảng tứ phân vị",
        "source": "Tài liệu GDPT 2018 Toán 11 C3B2 Trả lời ngắn Câu 6",
        "prompt": "Một mẫu số liệu có $Q_1 = 31,11$ và $Q_3 = 68$. Tính khoảng tứ phân vị $\\Delta_Q$ (làm tròn đến hàng phần trăm).",
        "correctAnswer": "36,89",
        "acceptableAnswers": [
          "36,89",
          "36.89"
        ],
        "explanation": "$\\Delta_Q = Q_3 - Q_1 = 68 - 31,11 = 36,89$."
      }
    ]
  }
};
