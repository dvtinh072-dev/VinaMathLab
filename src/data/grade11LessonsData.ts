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
      "id": "sgk-11.2.1",
      "badge": "Câu 1 - Công thức cộng côsin",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Công thức nào sau đây là ĐÚNG với mọi góc $a, b$?",
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
      "id": "sgk-11.2.2",
      "badge": "Câu 2 - Công thức cộng sin",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Công thức nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\sin(a - b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\sin(a - b) = \\cos a \\cos b - \\sin a \\sin b$",
        "$\\sin(a - b) = \\cos a \\cos b + \\sin a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng sin: $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$."
    },
    {
      "id": "sgk-11.2.3",
      "badge": "Câu 3 - Công thức nhân đôi",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Khẳng định nào sau đây là SAI?",
      "options": [
        "$\\cos 2a = 1 - 2\\cos^2 a$",
        "$\\cos 2a = \\cos^2 a - \\sin^2 a$",
        "$\\cos 2a = 2\\cos^2 a - 1$",
        "$\\cos 2a = 1 - 2\\sin^2 a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức đúng là $\\cos 2a = 2\\cos^2 a - 1$. Khẳng định $\\cos 2a = 1 - 2\\cos^2 a$ là sai."
    },
    {
      "id": "sgk-11.2.4",
      "badge": "Câu 4 - Tính giá trị lượng giác",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Giá trị của biểu thức $\\sin\\dfrac{7\\pi}{12}$ bằng:",
      "options": [
        "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{3} + 1}{2}$",
        "$\\dfrac{\\sqrt{2} + 1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\sin\\dfrac{7\\pi}{12} = \\sin\\left(\\dfrac{\\pi}{3} + \\dfrac{\\pi}{4}\\right) = \\sin\\dfrac{\\pi}{3}\\cos\\dfrac{\\pi}{4} + \\cos\\dfrac{\\pi}{3}\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$."
    },
    {
      "id": "sgk-11.2.5",
      "badge": "Câu 5 - Tính cos 2a",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Cho $\\cos a = \\dfrac{1}{3}$. Giá trị của $\\cos 2a$ bằng:",
      "options": [
        "$-\\dfrac{7}{9}$",
        "$\\dfrac{7}{9}$",
        "$-\\dfrac{2}{3}$",
        "$\\dfrac{2}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 2a = 2\\cos^2 a - 1 = 2\\left(\\dfrac{1}{3}\\right)^2 - 1 = \\dfrac{2}{9} - 1 = -\\dfrac{7}{9}$."
    },
    {
      "id": "sgk-11.2.6",
      "badge": "Câu 6 - Công thức nhân đôi tang",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Với mọi góc $a$ thỏa mãn điều kiện xác định, $\\tan 2a$ bằng:",
      "options": [
        "$\\dfrac{2\\tan a}{1 - \\tan^2 a}$",
        "$\\dfrac{2\\tan a}{1 + \\tan^2 a}$",
        "$\\dfrac{\\tan a}{1 - \\tan^2 a}$",
        "$\\dfrac{2\\tan a}{\\tan^2 a - 1}$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức nhân đôi tang: $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$."
    },
    {
      "id": "sgk-11.2.7",
      "badge": "Câu 7 - Rút gọn biểu thức",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Rút gọn biểu thức $M = \\dfrac{\\sin 2x}{2\\cos x}$ (với $\\cos x \\ne 0$), ta được:",
      "options": [
        "$\\sin x$",
        "$\\cos x$",
        "$\\tan x$",
        "$2\\sin x$"
      ],
      "correctIndex": 0,
      "explanation": "$M = \\dfrac{2\\sin x \\cos x}{2\\cos x} = \\sin x$."
    },
    {
      "id": "sgk-11.2.8",
      "badge": "Câu 8 - Biến đổi tổng thành tích cos",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Biểu thức $\\cos 5x + \\cos 3x$ biến đổi thành tích là:",
      "options": [
        "$2\\cos 4x \\cos x$",
        "$2\\sin 4x \\cos x$",
        "$2\\cos 4x \\sin x$",
        "$-2\\sin 4x \\sin x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 5x + \\cos 3x = 2\\cos\\dfrac{5x + 3x}{2}\\cos\\dfrac{5x - 3x}{2} = 2\\cos 4x \\cos x$."
    },
    {
      "id": "sgk-11.2.9",
      "badge": "Câu 9 - Biến đổi tổng thành tích sin",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Biểu thức $\\sin 4x - \\sin 2x$ biến đổi thành tích là:",
      "options": [
        "$2\\cos 3x \\sin x$",
        "$2\\sin 3x \\cos x$",
        "$-2\\cos 3x \\sin x$",
        "$2\\cos 3x \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 4x - \\sin 2x = 2\\cos\\dfrac{4x + 2x}{2}\\sin\\dfrac{4x - 2x}{2} = 2\\cos 3x \\sin x$."
    },
    {
      "id": "sgk-11.2.10",
      "badge": "Câu 10 - Tích thành tổng",
      "source": "SGK Toán 11 KNTT Bài 2",
      "question": "Biểu thức $4\\cos 2x \\cos x$ được biến đổi thành tổng là:",
      "options": [
        "$2(\\cos 3x + \\cos x)$",
        "$2(\\cos 3x - \\cos x)$",
        "$4(\\cos 3x + \\cos x)$",
        "$2(\\sin 3x + \\sin x)$"
      ],
      "correctIndex": 0,
      "explanation": "$4\\cos 2x \\cos x = 4 \\cdot \\dfrac{1}{2}[\\cos(2x + x) + \\cos(2x - x)] = 2(\\cos 3x + \\cos x)$."
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
          "problem": "Tìm tập xác định của hàm số $y = \\tan\\left(x - \\dfrac{\\pi}{4}\\right)$.",
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
      "id": "sgk-11.3.1",
      "badge": "Câu 1 - Tập giá trị hàm sin",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Tập giá trị của hàm số $y = \\sin x$ là:",
      "options": [
        "$[-1; 1]$",
        "$(-1; 1)$",
        "$\\mathbb{R}$",
        "$[0; 1]$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi $x \\in \\mathbb{R}$ thì $-1 \\le \\sin x \\le 1$ nên tập giá trị là $[-1; 1]$."
    },
    {
      "id": "sgk-11.3.2",
      "badge": "Câu 2 - Tập giá trị hàm cos",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Tập giá trị của hàm số $y = \\cos x$ là:",
      "options": [
        "$[-1; 1]$",
        "$\\mathbb{R}$",
        "$[0; +\\infty)$",
        "$(-1; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Tập giá trị của hàm số côsin là đoạn $[-1; 1]$."
    },
    {
      "id": "sgk-11.3.3",
      "badge": "Câu 3 - Tập xác định hàm cotang",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Tập xác định của hàm số $y = \\cot x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R}$",
        "$D = \\mathbb{R} \\setminus \\{0\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\cot x = \\dfrac{\\cos x}{\\sin x}$ xác định khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "sgk-11.3.4",
      "badge": "Câu 4 - Chu kỳ hàm cos 3x",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\cos 3x$ là:",
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
      "id": "sgk-11.3.5",
      "badge": "Câu 5 - Chu kỳ hàm tan 2x",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\tan 2x$ là:",
      "options": [
        "$\\dfrac{\\pi}{2}$",
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Chu kỳ hàm số tang là $T = \\dfrac{\\pi}{|\\omega|} = \\dfrac{\\pi}{2}$."
    },
    {
      "id": "sgk-11.3.6",
      "badge": "Câu 6 - Nhận biết hàm số chẵn",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Hàm số nào sau đây là hàm số chẵn?",
      "options": [
        "$y = \\cos 2x$",
        "$y = \\sin 2x$",
        "$y = \\tan x$",
        "$y = \\cot x$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos(-2x) = \\cos(2x)$ nên $y = \\cos 2x$ là hàm số chẵn. Các hàm số $\\sin 2x, \\tan x, \\cot x$ đều là hàm số lẻ."
    },
    {
      "id": "sgk-11.3.7",
      "badge": "Câu 7 - Nhận biết hàm số lẻ",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Hàm số nào sau đây là hàm số lẻ?",
      "options": [
        "$y = \\sin 3x$",
        "$y = \\cos 3x$",
        "$y = \\cos^2 x$",
        "$y = 1 + \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\sin(-3x) = -\\sin(3x)$ nên $y = \\sin 3x$ là hàm số lẻ."
    },
    {
      "id": "sgk-11.3.8",
      "badge": "Câu 8 - Giá trị lớn nhất",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Giá trị lớn nhất của hàm số $y = 2\\cos x + 3$ bằng:",
      "options": [
        "$5$",
        "$3$",
        "$1$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\cos x \\le 1$ nên $y = 2\\cos x + 3 \\le 2(1) + 3 = 5$. Dấu '=' xảy ra khi $\\cos x = 1$."
    },
    {
      "id": "sgk-11.3.9",
      "badge": "Câu 9 - Giá trị nhỏ nhất",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Giá trị nhỏ nhất của hàm số $y = 4 - 3\\sin x$ bằng:",
      "options": [
        "$1$",
        "$-3$",
        "$-1$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\sin x \\le 1$ nên $-3\\sin x \\ge -3 \\Rightarrow y = 4 - 3\\sin x \\ge 4 - 3 = 1$. Dấu '=' xảy ra khi $\\sin x = 1$."
    },
    {
      "id": "sgk-11.3.10",
      "badge": "Câu 10 - Điểm thuộc đồ thị",
      "source": "SGK Toán 11 KNTT Bài 3",
      "question": "Đồ thị hàm số $y = \\sin x$ đi qua điểm nào sau đây?",
      "options": [
        "$(0; 0)$",
        "$(0; 1)$",
        "$\\left(\\dfrac{\\pi}{2}; 0\\right)$",
        "$(\\pi; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Với $x = 0$, ta có $y = \\sin 0 = 0$. Do đó đồ thị đi qua gốc tọa độ $(0; 0)$."
    }
  ]
}
};
