import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export const GRADE_11_LESSON_13: DetailedLessonData = {
  id: "t11-b13-hai-mat-phang-song-song",
  lessonNumber: 13,
  title: "Bài 13: Hai mặt phẳng song song",
  bookChapter: "Chương IV: Quan hệ song song trong không gian (SGK Toán 11 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Các tầng nhà cao ốc, bậc thang cuốn và định lý nhận biết hai mặt phẳng song song",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, trong các tòa nhà cao ốc hiện đại, mặt sàn của tầng 1 và sàn tầng 2 luôn song song với nhau. Để đảm bảo hai mặt sàn phẳng tuyệt đối song song, các kỹ sư xây dựng kiểm tra điều kiện gì ạ?",
      visualGraphic: "box",
      mathNote: "(\\alpha) \\parallel (\\beta) \\iff (\\alpha) \\cap (\\beta) = \\emptyset"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Các kỹ sư chỉ cần xác định trên sàn tầng trên hai phương dầm cắt nhau (ví dụ dầm dọc và dầm ngang) cùng song song với mặt sàn tầng dưới. Theo Định lý nhận biết: 'Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha)$ song song với $(\\beta)$'!",
      visualGraphic: "box",
      mathNote: "\\begin{cases} a, b \\subset (\\alpha), a \\cap b = \{I\} \\ a \\parallel (\\beta), b \\parallel (\\beta) \\end{cases} \\implies (\\alpha) \\parallel (\\beta)"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thật rõ ràng và chặt chẽ ạ! Như vậy chỉ cần 2 đường thẳng cắt nhau là đủ để 'khóa' phương của mặt phẳng, giúp hai mặt phẳng song song tuyệt đối!",
      visualGraphic: "box",
      mathNote: "(\\alpha) \\parallel (\\beta), (\\gamma) \\cap (\\alpha) = a, (\\gamma) \\cap (\\beta) = b \\implies a \\parallel b"
    }
  ],
  youtubeVideoId: "D8e7r4k2q0M",
  youtubeVideoTitle: "Bài 13: Hai mặt phẳng song song (Tiết 1) - Toán 11 Kết nối tri thức",
  youtubeVideos: [
    {
      id: "D8e7r4k2q0M",
      title: "Bài 13: Hai mặt phẳng song song (Tiết 1) - Toán 11 Kết nối tri thức"
    },
    {
      id: "M9v8L3tZ1Xk",
      title: "Bài 13: Định lý Thales không gian, Hình lăng trụ và Hình chóp cụt (Tiết 2)"
    },
    {
      id: "K2p5W8mY7Lo",
      title: "Phương pháp chứng minh hai mặt phẳng song song và xác định thiết diện"
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Khái niệm hai mặt phẳng song song",
      points: [
        "Hai mặt phẳng $(\\alpha)$ và $(\\beta)$ được gọi là song song với nhau nếu chúng không có điểm chung nào.",
        "Ký hiệu: $(\\alpha) \\parallel (\\beta)$ hoặc $(\\beta) \\parallel (\\alpha)$.",
        "$$(\\alpha) \\parallel (\\beta) \\iff (\\alpha) \\cap (\\beta) = \\emptyset$$",
        "Vị trí tương đối của hai mặt phẳng phân biệt trong không gian gồm 2 trường hợp: cắt nhau (theo 1 giao tuyến) hoặc song song (không có điểm chung)."
      ],
      examples: [
        {
          title: "Ví dụ 1",
          problem: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Chỉ ra các cặp mặt phẳng đối diện song song với nhau.",
          solution: "Hình hộp có 3 cặp mặt đối diện song song với nhau từng đôi một là: $(ABCD) \\parallel (A'B'C'D')$; $(ABB'A') \\parallel (CDD'C')$; $(ADD'A') \\parallel (BCC'B')$."
        }
      ]
    },
    {
      index: "2",
      title: "2. Dấu hiệu nhận biết hai mặt phẳng song song (Định lý 1)",
      points: [
        "**Định lý 1:** Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau $a$ và $b$ cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha)$ song song với $(\\beta)$.",
        "$$\\begin{cases} a \\subset (\\alpha), b \\subset (\\alpha) \\ a \\cap b = \{I\} \\ a \\parallel (\\beta) \\ b \\parallel (\\beta) \\end{cases} \\implies (\\alpha) \\parallel (\\beta)$$",
        "**LƯU Ý CỐT LÕI:** Hai đường thẳng $a$ và $b$ bắt buộc phải **cắt nhau**. Nếu $a \\parallel b$ thì $(\\alpha)$ có thể cắt $(\\beta)$."
      ],
      examples: [
        {
          title: "Ví dụ 2",
          problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$. Chứng minh $(MNPQ) \\parallel (ABCD)$.",
          solution: "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB \\implies MN \\parallel (ABCD)$. Trong tam giác $SBC$, $NP$ là đường trung bình nên $NP \\parallel BC \\implies NP \\parallel (ABCD)$. Mà $MN$ và $NP$ cắt nhau tại $N$ và cùng nằm trong $(MNPQ)$. Do đó $(MNPQ) \\parallel (ABCD)$."
        }
      ]
    },
    {
      index: "3",
      title: "3. Tính chất của hai mặt phẳng song song",
      points: [
        "**Tính chất 1:** Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đó.",
        "**Tính chất 2 (Giao tuyến song song):** Nếu hai mặt phẳng song song cùng bị cắt bởi một mặt phẳng thứ ba thì hai giao tuyến đó song song với nhau.",
        "$$\\begin{cases} (\\alpha) \\parallel (\\beta) \\ (\\gamma) \\cap (\\alpha) = a \\ (\\gamma) \\cap (\\beta) = b \\end{cases} \\implies a \\parallel b$$",
        "**Định lý Thales trong không gian:** Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ:",
        "$$\\dfrac{A_1B_1}{A_2B_2} = \\dfrac{B_1C_1}{B_2C_2} = \\dfrac{A_1C_1}{A_2C_2}$$"
      ],
      examples: [
        {
          title: "Ví dụ 3",
          problem: "Cho hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$. Hai đường thẳng phân biệt $d_1$ và $d_2$ cắt $(\\alpha)$ lần lượt tại $A, B$ và cắt $(\\beta)$ lần lượt tại $A', B'$. Nếu $AB \\parallel A'B'$ thì kết luận gì về tứ giác $ABB'A'$?",
          solution: "Vì $AB \\parallel A'B'$ nên 4 điểm $A, B, B', A'$ đồng phẳng. Mặt phẳng $(ABB'A')$ cắt hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ theo hai giao tuyến $AB$ và $A'B'$. Lại có $AA'$ và $BB'$ nối các điểm tương ứng. Tứ giác $ABB'A'$ là hình bình hành hoặc hình thang. Nếu $d_1 \\parallel d_2$ thì $ABB'A'$ là hình bình hành."
        }
      ]
    },
    {
      index: "4",
      title: "4. Hình lăng trụ và Hình chóp cụt",
      points: [
        "**Hình lăng trụ:**",
        "+ Hai mặt đáy là hai đa giác bằng nhau và nằm trên hai mặt phẳng song song.",
        "+ Các mặt bên là các hình bình hành.",
        "+ Các cạnh bên song song và bằng nhau.",
        "**Hình hộp:** Là hình lăng trụ có đáy là hình bình hành (tất cả 6 mặt đều là hình bình hành).",
        "**Hình chóp cụt:**",
        "+ Cắt hình chóp bởi mặt phẳng song song với đáy, phần nằm giữa đáy và thiết diện gọi là hình chóp cụt.",
        "+ Hai đáy là hai đa giác đồng dạng.",
        "+ Các mặt bên là các hình thang; các cạnh bên kéo dài đồng quy tại đỉnh chóp ban đầu."
      ],
      examples: [
        {
          title: "Ví dụ 4",
          problem: "Một hình lăng trụ ngũ giác có bao nhiêu mặt, bao nhiêu cạnh và bao nhiêu đỉnh?",
          solution: "Lăng trụ ngũ giác có 2 mặt đáy và 5 mặt bên $\\implies$ có $2 + 5 = 7$ mặt. Đáy có 5 cạnh, có 5 cạnh bên $\\implies$ có $3 \\times 5 = 15$ cạnh. Có $2 \\times 5 = 10$ đỉnh."
        }
      ]
    },
    {
      index: "5",
      title: "5. Các phương pháp giải toán trọng tâm",
      points: [
        "**Dạng 1: Chứng minh $(\\alpha) \\parallel (\\beta)$:**",
        "+ Tìm hai đường thẳng cắt nhau $a, b \\subset (\\alpha)$ sao cho $a \\parallel (\\beta)$ và $b \\parallel (\\beta)$.",
        "**Dạng 2: Tìm thiết diện của hình chóp/lăng trụ cắt bởi mặt phẳng $(\\alpha)$:**",
        "+ Sử dụng tính chất: Mặt phẳng $(\\alpha)$ song song với mặt phẳng $(\\beta)$ thì cắt các mặt phẳng khác theo các giao tuyến song song.",
        "**Dạng 3: Ứng dụng định lý Thales để tính tỉ số độ dài:**",
        "+ Dùng tỉ số các đoạn thẳng chắn bởi các mặt phẳng song song."
      ],
      examples: [
        {
          title: "Ví dụ 5",
          problem: "Cho hình chóp $S.ABC$. Mặt phẳng $(\\alpha)$ song song với $(ABC)$ cắt các cạnh $SA, SB, SC$ lần lượt tại $A', B', C'$ sao cho $\\dfrac{SA'}{SA} = \\dfrac{1}{3}$. Biết diện tích tam giác $ABC$ bằng $45$. Tính diện tích tam giác $A'B'C'$.",
          solution: "Vì $(\\alpha) \\parallel (ABC)$ nên $\\triangle A'B'C'$ đồng dạng với $\\triangle ABC$ theo tỉ số $k = \\dfrac{1}{3}$. Tỉ số diện tích là $k^2 = \\dfrac{1}{9}$. Vậy $S_{\\triangle A'B'C'} = \\dfrac{1}{9} \\times 45 = 5$."
        }
      ]
    }
  ],
  videoQuestions: [
    {
      id: "vq-11.13.1",
      timeSeconds: 150,
      timeLabel: "02:30",
      title: "Định nghĩa hai mặt phẳng song song",
      question: "Hai mặt phẳng được gọi là song song với nhau khi nào?",
      options: [
        "Khi chúng không có bất kì điểm chung nào",
        "Khi chúng có chung một đường thẳng",
        "Khi chúng cùng vuông góc với một đường thẳng",
        "Khi chúng có ít nhất một điểm chung"
      ],
      correctIndex: 0,
      explanation: "Hai mặt phẳng song song nếu chúng không có điểm chung nào ($(\\alpha) \\cap (\\beta) = \\emptyset$)."
    },
    {
      id: "vq-11.13.2",
      timeSeconds: 370,
      timeLabel: "06:10",
      title: "Dấu hiệu nhận biết",
      question: "Để chứng minh $(\\alpha) \\parallel (\\beta)$, ta cần chứng minh $(\\alpha)$ chứa hai đường thẳng $a, b$ thỏa mãn:",
      options: [
        "$a$ cắt $b$, đồng thời $a \\parallel (\\beta)$ và $b \\parallel (\\beta)$",
        "$a \\parallel b$ và cùng song song với $(\\beta)$",
        "$a$ chéo $b$ trong không gian",
        "$a$ vuông góc với $b$"
      ],
      correctIndex: 0,
      explanation: "Định lý 1: Hai đường thẳng phải cắt nhau và cùng song song với mặt phẳng kia."
    },
    {
      id: "vq-11.13.3",
      timeSeconds: 590,
      timeLabel: "09:50",
      title: "Hình lăng trụ",
      question: "Trong hình lăng trụ, các mặt bên luôn là hình gì?",
      options: [
        "Hình bình hành",
        "Hình chữ nhật",
        "Hình thang",
        "Tam giác"
      ],
      correctIndex: 0,
      explanation: "Định nghĩa hình lăng trụ: Các mặt bên luôn là các hình bình hành."
    }
  ],
  tips: [
    "Để chứng minh $(\\alpha) \\parallel (\\beta)$, chỉ cần chỉ ra 2 đường thẳng CẮT NHAU trong $(\\alpha)$ cùng song song với $(\\beta)$.",
    "Ghi nhớ: Nếu $a \\parallel b$ (song song thay vì cắt nhau) thì KHÔNG THỂ kết luận hai mặt phẳng song song!",
    "Thiết diện cắt bởi mặt phẳng song song đáy: Đa giác thiết diện luôn ĐỒNG DẠNG với đa giác đáy, với tỉ số diện tích bằng bình phương tỉ số đồng dạng $k^2$.",
    "Trong hình lăng trụ, các cạnh bên luôn song song và bằng nhau từng đôi một."
  ],
  traps: [
    "Bẫy thiếu điều kiện cắt nhau: 'Mặt phẳng $(\\alpha)$ chứa 2 đường thẳng song song với $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$' là SAI vì hai đường thẳng đó có thể song song nhau!",
    "Bẫy bắc cầu: $(\\alpha) \\parallel d$ và $(\\beta) \\parallel d$ thì $(\\alpha)$ và $(\\beta)$ CHƯA CHẮC song song nhau (chúng có thể cắt nhau theo giao tuyến song song với $d$).",
    "Bẫy hình chóp cụt: Các mặt bên của hình chóp cụt là hình thang chứ không phải hình bình hành.",
    "Bẫy số mặt hình lăng trụ: Lăng trụ $n$-giác có $n + 2$ mặt (2 mặt đáy và $n$ mặt bên), chứ không phải $n$ mặt."
  ],
  quizQuestions: [
    {
      id: "quiz-11.13.1",
      badge: "Câu 1 - Nhận biết - Định nghĩa hai mặt phẳng song song",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Trong không gian, hai mặt phẳng được gọi là song song với nhau nếu:",
      options: [
        "Chúng không có điểm chung nào.",
        "Chúng có đúng một điểm chung duy nhất.",
        "Chúng có vô số điểm chung.",
        "Chúng cùng song song với một đường thẳng."
      ],
      correctIndex: 0,
      explanation: "Định nghĩa: Hai mặt phẳng song song nếu chúng không có điểm chung nào ($(\\alpha) \\cap (\\beta) = \\emptyset$)."
    },
    {
      id: "quiz-11.13.2",
      badge: "Câu 2 - Nhận biết - Dấu hiệu nhận biết hai mặt phẳng song song",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Khẳng định nào sau đây là ĐÚNG về điều kiện để hai mặt phẳng song song?",
      options: [
        "Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.",
        "Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng phân biệt cùng song song với $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.",
        "Nếu $(\\alpha)$ và $(\\beta)$ cùng song song với một đường thẳng $d$ thì $(\\alpha) \\parallel (\\beta)$.",
        "Nếu $(\\alpha)$ song song với một đường thẳng $a \\subset (\\beta)$ thì $(\\alpha) \\parallel (\\beta)$."
      ],
      correctIndex: 0,
      explanation: "Định lý 1 (Dấu hiệu nhận biết): Phải chứa hai đường thẳng CẮT NHAU cùng song song với mặt phẳng kia."
    },
    {
      id: "quiz-11.13.3",
      badge: "Câu 3 - Nhận biết - Số mặt phẳng song song qua 1 điểm ngoài mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Qua một điểm nằm ngoài một mặt phẳng cho trước, có bao nhiêu mặt phẳng song song với mặt phẳng đó?",
      options: [
        "Duy nhất $1$ mặt phẳng.",
        "Có vô số mặt phẳng.",
        "Có đúng $2$ mặt phẳng.",
        "Không có mặt phẳng nào."
      ],
      correctIndex: 0,
      explanation: "Tính chất 1: Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đó."
    },
    {
      id: "quiz-11.13.4",
      badge: "Câu 4 - Nhận biết - Đặc điểm các mặt bên của hình lăng trụ",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Trong một hình lăng trụ bất kì, các mặt bên luôn là:",
      options: [
        "Các hình bình hành.",
        "Các hình chữ nhật.",
        "Các hình thang cân.",
        "Các hình thoi."
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa hình lăng trụ: Các mặt bên là các hình bình hành vì các cạnh bên đôi một song song và các cạnh đáy tương ứng song song."
    },
    {
      id: "quiz-11.13.5",
      badge: "Câu 5 - Nhận biết - Định lý giao tuyến của hai mặt phẳng song song",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Nếu hai mặt phẳng song song cùng bị cắt bởi một mặt phẳng thứ ba thì hai giao tuyến tạo thành:",
      options: [
        "Song song với nhau.",
        "Cắt nhau tại một điểm.",
        "Chéo nhau trong không gian.",
        "Trùng nhau."
      ],
      correctIndex: 0,
      explanation: "Tính chất 2: Hai giao tuyến của hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba luôn song song với nhau."
    },
    {
      id: "quiz-11.13.6",
      badge: "Câu 6 - Thông hiểu - Mặt phẳng nối trung điểm trong hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh đáy khuất AD, SA --> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="25" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Cạnh đáy thấy --> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy --> <line x1="145" y1="25" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNPQ) song song (ABCD) --> <polygon points="110,90 90,115 180,115 200,90" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <line x1="110" y1="90" x2="200" y2="90" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <!-- Điểm & Nhãn --> <circle cx="145" cy="25" r="3.5" fill="#38bdf8" /><text x="141" y="16" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /><text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /><text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /><text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /><text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="110" cy="90" r="3" fill="#f59e0b" /><text x="96" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="115" r="3" fill="#f59e0b" /><text x="74" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="180" cy="115" r="3" fill="#f59e0b" /><text x="187" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="200" cy="90" r="3" fill="#f59e0b" /><text x="207" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh bên $SA, SB, SC, SD$. Mặt phẳng $(MNPQ)$ song song với mặt phẳng nào?",
      options: [
        "$(ABCD)$",
        "$(SAB)$",
        "$(SCD)$",
        "$(SAD)$"
      ],
      correctIndex: 0,
      explanation: "$MN \\parallel AB \\subset (ABCD)$ và $NP \\parallel BC \\subset (ABCD)$. Vì $MN$ và $NP$ cắt nhau tại $N$ nên $(MNPQ) \\parallel (ABCD)$."
    },
    {
      id: "quiz-11.13.7",
      badge: "Câu 7 - Thông hiểu - Cặp mặt phẳng song song trong hình hộp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AD, CD, AA' --> <line x1="50" y1="150" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="160" y1="150" x2="220" y2="195" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="50" y1="50" x2="50" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="50" y1="150" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="195" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'D', D'A' --> <polygon points="50,50 110,95 220,95 160,50" fill="none" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC', DD' --> <line x1="110" y1="95" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="220" y1="95" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="160" y1="50" x2="160" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="50" cy="50" r="3.5" fill="#38bdf8" /><text x="34" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="110" cy="95" r="3.5" fill="#38bdf8" /><text x="114" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="220" cy="95" r="3.5" fill="#38bdf8" /><text x="226" y="95" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="160" cy="50" r="3.5" fill="#38bdf8" /><text x="164" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D'</text> <circle cx="50" cy="150" r="3.5" fill="#38bdf8" /><text x="34" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="110" cy="195" r="3.5" fill="#38bdf8" /><text x="106" y="212" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="220" cy="195" r="3.5" fill="#38bdf8" /><text x="228" y="200" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> <circle cx="160" cy="150" r="3.5" fill="#38bdf8" /><text x="166" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(BDA')$ song song với mặt phẳng nào sau đây?",
      options: [
        "$(B'D'C)$",
        "$(ABCD)$",
        "$(A'B'C'D')$",
        "$(ACC'A')$"
      ],
      correctIndex: 0,
      explanation: "Ta có $BD \\parallel B'D' \\subset (B'D'C)$ và $BA' \\parallel CD' \\subset (B'D'C)$. Hai đường $BD$ và $BA'$ cắt nhau tại $B$. Do đó $(BDA') \\parallel (B'D'C)$."
    },
    {
      id: "quiz-11.13.8",
      badge: "Câu 8 - Thông hiểu - Số cạnh của hình lăng trụ lục giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      question: "Một hình lăng trụ có đáy là lục giác (6 cạnh) thì có tất cả bao nhiêu cạnh và bao nhiêu mặt?",
      options: [
        "$18$ cạnh và $8$ mặt.",
        "$12$ cạnh và $8$ mặt.",
        "$18$ cạnh và $6$ mặt.",
        "$15$ cạnh và $7$ mặt."
      ],
      correctIndex: 0,
      explanation: "Lăng trụ đáy $n$-giác có $3n$ cạnh và $n + 2$ mặt. Với $n = 6$: số cạnh là $3 \\times 6 = 18$ cạnh; số mặt là $6 + 2 = 8$ mặt (2 mặt đáy + 6 mặt bên)."
    },
    {
      id: "quiz-11.13.9",
      badge: "Câu 9 - Thông hiểu - Tứ diện và mặt phẳng song song đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNP) song song (BCD) --> <polygon points="92,112 142,122 197,102" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" stroke-width="2" /> <!-- Cạnh MP ở mặt sau bị khuất --> <line x1="92" y1="112" x2="197" y2="102" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /><text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /><text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /><text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /><text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /><text x="75" y="112" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="142" cy="122" r="3.5" fill="#f59e0b" /><text x="148" y="122" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="197" cy="102" r="3.5" fill="#f59e0b" /><text x="205" y="102" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> </svg>`,
      question: "Cho tứ diện $ABCD$. Lấy các điểm $M, N, P$ lần lượt trên các cạnh $AB, AC, AD$ sao cho $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{AP}{AD} = \\dfrac{1}{2}$. Mặt phẳng $(MNP)$ song song với mặt phẳng nào?",
      options: [
        "$(BCD)$",
        "$(ABC)$",
        "$(ABD)$",
        "$(ACD)$"
      ],
      correctIndex: 0,
      explanation: "Theo định lý Thales đảo: $MN \\parallel BC$ và $MP \\parallel BD$. Vì $MN$ và $MP$ cắt nhau tại $M$ nên $(MNP) \\parallel (BCD)$."
    },
    {
      id: "quiz-11.13.10",
      badge: "Câu 10 - Thông hiểu - Tính chất đường thẳng vuông góc",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Cho hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$. Nếu đường thẳng $a$ nằm trong $(\\alpha)$ thì:",
      options: [
        "$a$ song song với $(\\beta)$.",
        "$a$ cắt $(\\beta)$.",
        "$a$ nằm trong $(\\beta)$.",
        "$a$ vuông góc với $(\\beta)$."
      ],
      correctIndex: 0,
      explanation: "Vì $(\\alpha) \\parallel (\\beta)$ nên chúng không có điểm chung. Do $a \\subset (\\alpha)$ nên $a$ không có điểm chung với $(\\beta)$, suy ra $a \\parallel (\\beta)$."
    },
    {
      id: "quiz-11.13.11",
      badge: "Câu 11 - Thông hiểu - Mặt bên của hình chóp cụt",
      source: "SGK Toán 11 KNTT Bài 13",
      question: "Trong một hình chóp cụt bất kì, các mặt bên luôn là:",
      options: [
        "Các hình thang.",
        "Các hình bình hành.",
        "Các hình tam giác.",
        "Các hình chữ nhật."
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa hình chóp cụt: Các mặt bên là các hình thang có hai đáy song song với nhau."
    },
    {
      id: "quiz-11.13.12",
      badge: "Câu 12 - Thông hiểu - Các cạnh bên của hình lăng trụ",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AC và AA' --> <line x1="60" y1="160" x2="210" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="60" y1="50" x2="60" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="60" y1="160" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="205" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'A' --> <line x1="60" y1="50" x2="120" y2="95" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="95" x2="210" y2="65" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="60" y2="50" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC' --> <line x1="120" y1="95" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="60" cy="50" r="3.5" fill="#38bdf8" /><text x="44" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="120" cy="95" r="3.5" fill="#38bdf8" /><text x="124" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="210" cy="65" r="3.5" fill="#38bdf8" /><text x="216" y="65" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="60" cy="160" r="3.5" fill="#38bdf8" /><text x="44" y="165" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="120" cy="205" r="3.5" fill="#38bdf8" /><text x="116" y="222" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="210" cy="175" r="3.5" fill="#38bdf8" /><text x="218" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> </svg>`,
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Khẳng định nào sau đây SAI?",
      options: [
        "$AA'$ cắt $BB'$.",
        "$AA' \\parallel BB'$.",
        "$AA' = BB'$.",
        "$(ABC) \\parallel (A'B'C')$."
      ],
      correctIndex: 0,
      explanation: "Trong hình lăng trụ, các cạnh bên đôi một song song và bằng nhau, do đó $AA' \\parallel BB'$ và không bao giờ cắt nhau. Khẳng định $AA'$ cắt $BB'$ là SAI."
    },
    {
      id: "quiz-11.13.13",
      badge: "Câu 13 - Vận dụng - Tỉ số diện tích thiết diện song song đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh đáy khuất AD, SA --> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="25" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Cạnh đáy thấy --> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy --> <line x1="145" y1="25" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNPQ) song song (ABCD) --> <polygon points="110,90 90,115 180,115 200,90" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <line x1="110" y1="90" x2="200" y2="90" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <!-- Điểm & Nhãn --> <circle cx="145" cy="25" r="3.5" fill="#38bdf8" /><text x="141" y="16" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /><text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /><text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /><text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /><text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="110" cy="90" r="3" fill="#f59e0b" /><text x="96" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="115" r="3" fill="#f59e0b" /><text x="74" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="180" cy="115" r="3" fill="#f59e0b" /><text x="187" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="200" cy="90" r="3" fill="#f59e0b" /><text x="207" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành diện tích $72$. Mặt phẳng $(\\alpha)$ song song với đáy cắt cạnh $SA$ tại $M$ sao cho $SM = \\dfrac{2}{3} SA$. Diện tích thiết diện tạo bởi $(\\alpha)$ và hình chóp bằng:",
      options: [
        "$32$",
        "$48$",
        "$24$",
        "$16$"
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng song song đáy cắt hình chóp theo thiết diện đồng dạng với đáy theo tỉ số $k = \\dfrac{SM}{SA} = \\dfrac{2}{3}$. Tỉ số diện tích là $k^2 = \\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{4}{9}$. Diện tích thiết diện là $S = \\dfrac{4}{9} \\times 72 = 32$."
    },
    {
      id: "quiz-11.13.14",
      badge: "Câu 14 - Vận dụng - Thiết diện của hình lăng trụ",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AC và AA' --> <line x1="60" y1="160" x2="210" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="60" y1="50" x2="60" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="60" y1="160" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="205" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'A' --> <line x1="60" y1="50" x2="120" y2="95" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="95" x2="210" y2="65" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="60" y2="50" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC' --> <line x1="120" y1="95" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="60" cy="50" r="3.5" fill="#38bdf8" /><text x="44" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="120" cy="95" r="3.5" fill="#38bdf8" /><text x="124" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="210" cy="65" r="3.5" fill="#38bdf8" /><text x="216" y="65" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="60" cy="160" r="3.5" fill="#38bdf8" /><text x="44" y="165" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="120" cy="205" r="3.5" fill="#38bdf8" /><text x="116" y="222" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="210" cy="175" r="3.5" fill="#38bdf8" /><text x="218" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> </svg>`,
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Mặt phẳng qua $MN$ song song với $AA'$ cắt hình lăng trụ theo thiết diện là hình gì?",
      options: [
        "Hình chữ nhật hoặc hình bình hành.",
        "Hình tam giác.",
        "Hình thang vuông.",
        "Hình ngũ giác."
      ],
      correctIndex: 0,
      explanation: "Giao tuyến với các mặt bên $(ABB'A')$ và $(ACC'A')$ lần lượt song song với $AA'$. Thiết diện là một hình bình hành (hoặc hình chữ nhật nếu lăng trụ đứng)."
    },
    {
      id: "quiz-11.13.15",
      badge: "Câu 15 - Vận dụng - Định lý Thales không gian tính đoạn thẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      question: "Cho ba mặt phẳng song song $(\\alpha), (\\beta), (\\gamma)$. Đường thẳng $d_1$ cắt ba mặt phẳng lần lượt tại $A_1, B_1, C_1$ sao cho $A_1B_1 = 4, B_1C_1 = 6$. Đường thẳng $d_2$ cắt ba mặt phẳng tại $A_2, B_2, C_2$ với $A_2C_2 = 15$. Độ dài đoạn thẳng $A_2B_2$ bằng:",
      options: [
        "$6$",
        "$9$",
        "$5$",
        "$7.5$"
      ],
      correctIndex: 0,
      explanation: "Theo định lý Thales trong không gian: $\\dfrac{A_2B_2}{A_1B_1} = \\dfrac{A_2C_2}{A_1C_1}$. Ta có $A_1C_1 = A_1B_1 + B_1C_1 = 4 + 6 = 10$. Suy ra $\\dfrac{A_2B_2}{4} = \\dfrac{15}{10} \\implies A_2B_2 = 4 \\times 1.5 = 6$."
    },
    {
      id: "quiz-11.13.16",
      badge: "Câu 16 - Vận dụng - Giao tuyến của mặt phẳng cắt hai mặt song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AD, CD, AA' --> <line x1="50" y1="150" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="160" y1="150" x2="220" y2="195" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="50" y1="50" x2="50" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="50" y1="150" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="195" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'D', D'A' --> <polygon points="50,50 110,95 220,95 160,50" fill="none" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC', DD' --> <line x1="110" y1="95" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="220" y1="95" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="160" y1="50" x2="160" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="50" cy="50" r="3.5" fill="#38bdf8" /><text x="34" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="110" cy="95" r="3.5" fill="#38bdf8" /><text x="114" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="220" cy="95" r="3.5" fill="#38bdf8" /><text x="226" y="95" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="160" cy="50" r="3.5" fill="#38bdf8" /><text x="164" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D'</text> <circle cx="50" cy="150" r="3.5" fill="#38bdf8" /><text x="34" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="110" cy="195" r="3.5" fill="#38bdf8" /><text x="106" y="212" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="220" cy="195" r="3.5" fill="#38bdf8" /><text x="228" y="200" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> <circle cx="160" cy="150" r="3.5" fill="#38bdf8" /><text x="166" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(\\alpha)$ đi qua $AB$ cắt mặt phẳng $(A'B'C'D')$ theo giao tuyến $d$. Khẳng định nào sau đây ĐÚNG?",
      options: [
        "$d$ đi qua điểm $A'$ và song song với $AB$.",
        "$d$ cắt đường thẳng $A'B'$.",
        "$d$ chéo nhau với $AB$.",
        "$d$ vuông góc với $A'B'$."
      ],
      correctIndex: 0,
      explanation: "Vì $(ABCD) \\parallel (A'B'C'D')$ và $(\\alpha)$ cắt $(ABCD)$ theo $AB$ nên giao tuyến $d$ với $(A'B'C'D')$ phải song song với $AB$."
    },
    {
      id: "quiz-11.13.17",
      badge: "Câu 17 - Vận dụng - Thể tích hình chóp cụt tỉ số",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh đáy khuất AD, SA --> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="25" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Cạnh đáy thấy --> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy --> <line x1="145" y1="25" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNPQ) song song (ABCD) --> <polygon points="110,90 90,115 180,115 200,90" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <line x1="110" y1="90" x2="200" y2="90" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <!-- Điểm & Nhãn --> <circle cx="145" cy="25" r="3.5" fill="#38bdf8" /><text x="141" y="16" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /><text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /><text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /><text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /><text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="110" cy="90" r="3" fill="#f59e0b" /><text x="96" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="115" r="3" fill="#f59e0b" /><text x="74" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="180" cy="115" r="3" fill="#f59e0b" /><text x="187" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="200" cy="90" r="3" fill="#f59e0b" /><text x="207" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> </svg>`,
      question: "Cắt hình chóp $S.ABCD$ có thể tích $V = 54$ bởi một mặt phẳng song song với đáy tại trung điểm của cạnh bên $SA$. Thể tích của khối chóp nhỏ phía trên đỉnh $S$ bằng:",
      options: [
        "$6.75$",
        "$13.5$",
        "$27$",
        "$18$"
      ],
      correctIndex: 0,
      explanation: "Tỉ số đồng dạng chiều dài là $k = \\dfrac{1}{2}$. Tỉ số thể tích của khối chóp nhỏ phía trên so với khối chóp ban đầu là $k^3 = \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$. Thể tích khối chóp nhỏ là $\\dfrac{54}{8} = 6.75$."
    },
    {
      id: "quiz-11.13.18",
      badge: "Câu 18 - Vận dụng cao - Thiết diện diện tích lớn nhất lăng trụ",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $a$, cạnh bên bằng $2a$. Mặt phẳng $(\\alpha)$ đi qua trung điểm $A'B'$ và song song với mặt phẳng $(ACC'A')$ cắt lăng trụ theo thiết diện là hình chữ nhật có diện tích bằng:",
      options: [
        "$a^2$",
        "$\\dfrac{a^2}{2}$",
        "$2a^2$",
        "$\\dfrac{a^2\\sqrt{3}}{2}$"
      ],
      correctIndex: 0,
      explanation: "Giao tuyến của thiết diện với đáy là đường trung bình của tam giác đáy song song với $AC$, có độ dài $\\dfrac{a}{2}$. Chiều cao của thiết diện bằng cạnh bên $2a$. Thiết diện là hình chữ nhật có kích thước $\\dfrac{a}{2}$ và $2a$, diện tích bằng $\\dfrac{a}{2} \\times 2a = a^2$."
    },
    {
      id: "quiz-11.13.19",
      badge: "Câu 19 - Vận dụng cao - Tỉ số phân chia thể tích khối chóp cụt",
      source: "Đề phát triển ĐGNL 2025",
      question: "Một khối chóp bị cắt bởi mặt phẳng song song với đáy chia chiều cao của chóp thành 2 phần bằng nhau. Tỉ số thể tích giữa khối chóp cụt bên dưới và khối chóp nhỏ bên trên bằng:",
      options: [
        "$7$",
        "$8$",
        "$3$",
        "$4$"
      ],
      correctIndex: 0,
      explanation: "Khối chóp nhỏ có $V_1 = \\left(\\dfrac{1}{2}\\right)^3 V = \\dfrac{1}{8} V$. Khối chóp cụt bên dưới có $V_2 = V - V_1 = \\dfrac{7}{8} V$. Tỉ số thể tích giữa khối chóp cụt bên dưới và khối chóp nhỏ là $\\dfrac{V_2}{V_1} = \\dfrac{7/8}{1/8} = 7$."
    },
    {
      id: "quiz-11.13.20",
      badge: "Câu 20 - Vận dụng cao - Trọng tâm thiết diện song song di động",
      source: "Đề thi HSG Toán 11",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh đáy khuất AD, SA --> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="25" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Cạnh đáy thấy --> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy --> <line x1="145" y1="25" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNPQ) song song (ABCD) --> <polygon points="110,90 90,115 180,115 200,90" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <line x1="110" y1="90" x2="200" y2="90" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <!-- Điểm & Nhãn --> <circle cx="145" cy="25" r="3.5" fill="#38bdf8" /><text x="141" y="16" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /><text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /><text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /><text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /><text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="110" cy="90" r="3" fill="#f59e0b" /><text x="96" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="115" r="3" fill="#f59e0b" /><text x="74" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="180" cy="115" r="3" fill="#f59e0b" /><text x="187" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="200" cy="90" r="3" fill="#f59e0b" /><text x="207" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Mặt phẳng $(\\alpha)$ thay đổi luôn song song với $(ABCD)$ cắt các cạnh $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$. Tâm $O'$ của hình bình hành $A'B'C'D'$ luôn chuyển động trên đường thẳng nào sau đây?",
      options: [
        "Đường thẳng $SO$.",
        "Đường thẳng $SA$.",
        "Đường thẳng $SC$.",
        "Đường thẳng qua $S$ song song với $AB$."
      ],
      correctIndex: 0,
      explanation: "Do $(\\alpha) \\parallel (ABCD)$ nên theo phép vị tự tâm $S$, tâm đáy $O'$ của thiết diện chính là ảnh vị tự của tâm đáy $O$. Do đó $O'$ luôn nằm trên đoạn thẳng nối đỉnh $S$ với tâm đáy $O$, tức là đường thẳng $SO$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-11.13.1",
      badge: "Đúng/Sai 1 - Các định lý về hai mặt phẳng song song",
      source: "SGK Toán 11 KNTT Bài 13",
      prompt: "Xét tính Đúng / Sai của các khẳng định sau về hai mặt phẳng song song trong không gian:",
      subItems: [
        {
          id: "a",
          text: "Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì song song với nhau.",
          correctAnswer: true,
          explanation: "Đúng, theo tính chất bắc cầu của quan hệ song song giữa các mặt phẳng."
        },
        {
          id: "b",
          text: "Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cùng song song với $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.",
          correctAnswer: false,
          explanation: "Sai, hai đường thẳng đó phải CẮT NHAU. Nếu hai đường thẳng đó song song nhau thì $(\\alpha)$ có thể cắt $(\\beta)$."
        },
        {
          id: "c",
          text: "Qua một điểm nằm ngoài mặt phẳng cho trước, có duy nhất một mặt phẳng song song với mặt phẳng đó.",
          correctAnswer: true,
          explanation: "Đúng, theo Tính chất 1 (tiên đề Euclid mở rộng)."
        },
        {
          id: "d",
          text: "Nếu $(\\alpha) \\parallel (\\beta)$ thì mọi đường thẳng nằm trong $(\\alpha)$ đều song song với $(\\beta)$.",
          correctAnswer: true,
          explanation: "Đúng, vì chúng không có điểm chung nào nên đường thẳng nằm trong $(\\alpha)$ không có điểm chung với $(\\beta)$."
        }
      ]
    },
    {
      id: "tf-11.13.2",
      badge: "Đúng/Sai 2 - Định lý giao tuyến",
      source: "SGK Toán 11 KNTT Bài 13",
      prompt: "Cho hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$. Mặt phẳng $(\\gamma)$ cắt $(\\alpha)$ và $(\\beta)$ lần lượt theo hai giao tuyến $a$ và $b$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Hai giao tuyến $a$ và $b$ luôn song song với nhau.",
          correctAnswer: true,
          explanation: "Đúng, theo Tính chất 2 của hai mặt phẳng song song."
        },
        {
          id: "b",
          text: "Hai giao tuyến $a$ và $b$ có thể cắt nhau nếu kéo dài vô hạn.",
          correctAnswer: false,
          explanation: "Sai, vì $a \\subset (\\alpha)$ và $b \\subset (\\beta)$ mà $(\\alpha) \\parallel (\\beta)$ nên $a$ và $b$ không có điểm chung."
        },
        {
          id: "c",
          text: "Mọi mặt phẳng cắt $(\\alpha)$ thì bắt buộc phải cắt $(\\beta)$.",
          correctAnswer: true,
          explanation: "Đúng, nếu không cắt $(\\beta)$ thì mặt phẳng đó song song với $(\\beta)$, dẫn tới song song với $(\\alpha)$ (mâu thuẫn)."
        },
        {
          id: "d",
          text: "Khoảng cách giữa hai giao tuyến $a$ và $b$ luôn không đổi trên toàn bộ mặt phẳng $(\\gamma)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $a \\parallel b$ trên mặt phẳng $(\\gamma)$ nên khoảng cách giữa chúng là hằng số."
        }
      ]
    },
    {
      id: "tf-11.13.3",
      badge: "Đúng/Sai 3 - Hình chóp đáy hình bình hành và mặt song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh đáy khuất AD, SA --> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="25" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Cạnh đáy thấy --> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy --> <line x1="145" y1="25" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNPQ) song song (ABCD) --> <polygon points="110,90 90,115 180,115 200,90" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <line x1="110" y1="90" x2="200" y2="90" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <!-- Điểm & Nhãn --> <circle cx="145" cy="25" r="3.5" fill="#38bdf8" /><text x="141" y="16" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /><text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /><text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /><text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /><text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="110" cy="90" r="3" fill="#f59e0b" /><text x="96" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="115" r="3" fill="#f59e0b" /><text x="74" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="180" cy="115" r="3" fill="#f59e0b" /><text x="187" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="200" cy="90" r="3" fill="#f59e0b" /><text x="207" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Mặt phẳng $(MNPQ)$ song song với mặt phẳng đáy $(ABCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel AB$ và $NP \\parallel BC$, hai đường cắt nhau tại $N$ cùng song song với đáy."
        },
        {
          id: "b",
          text: "Tứ giác $MNPQ$ là một hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, các cạnh đối diện song song và bằng một nửa các cạnh đáy tương ứng."
        },
        {
          id: "c",
          text: "Mặt phẳng $(MNPQ)$ cắt đoạn thẳng nối $S$ và tâm đáy $O$ tại trung điểm của $SO$.",
          correctAnswer: true,
          explanation: "Đúng, theo định lý Thales trong tam giác $SAC$ với đường trung bình."
        },
        {
          id: "d",
          text: "Hình chóp cụt $ABCD.MNPQ$ có các cạnh bên song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, các cạnh bên của hình chóp cụt kéo dài đồng quy tại đỉnh $S$ chứ không song song."
        }
      ]
    },
    {
      id: "tf-11.13.4",
      badge: "Đúng/Sai 4 - Hình hộp ABCD.A'B'C'D'",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AD, CD, AA' --> <line x1="50" y1="150" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="160" y1="150" x2="220" y2="195" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="50" y1="50" x2="50" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="50" y1="150" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="195" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'D', D'A' --> <polygon points="50,50 110,95 220,95 160,50" fill="none" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC', DD' --> <line x1="110" y1="95" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="220" y1="95" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="160" y1="50" x2="160" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="50" cy="50" r="3.5" fill="#38bdf8" /><text x="34" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="110" cy="95" r="3.5" fill="#38bdf8" /><text x="114" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="220" cy="95" r="3.5" fill="#38bdf8" /><text x="226" y="95" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="160" cy="50" r="3.5" fill="#38bdf8" /><text x="164" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D'</text> <circle cx="50" cy="150" r="3.5" fill="#38bdf8" /><text x="34" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="110" cy="195" r="3.5" fill="#38bdf8" /><text x="106" y="212" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="220" cy="195" r="3.5" fill="#38bdf8" /><text x="228" y="200" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> <circle cx="160" cy="150" r="3.5" fill="#38bdf8" /><text x="166" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Mặt phẳng $(ABCD)$ song song với mặt phẳng $(A'B'C'D')$.",
          correctAnswer: true,
          explanation: "Đúng, hai mặt đáy của hình hộp luôn song song với nhau."
        },
        {
          id: "b",
          text: "Mặt phẳng $(BA'D')$ song song với mặt phẳng $(B'DC)$.",
          correctAnswer: false,
          explanation: "Sai, cặp mặt phẳng song song chuẩn là $(BDA') \\parallel (B'D'C)$."
        },
        {
          id: "c",
          text: "Mặt phẳng $(AA'C'C)$ song song với mặt phẳng $(BB'D'D)$.",
          correctAnswer: false,
          explanation: "Sai, hai mặt chéo này cắt nhau theo đường thẳng nối tâm hai đáy."
        },
        {
          id: "d",
          text: "Đoạn thẳng nối tâm hai đáy của hình hộp song song với các cạnh bên.",
          correctAnswer: true,
          explanation: "Đúng, đường nối tâm hai đáy song song và bằng các cạnh bên $AA', BB', CC', DD'$."
        }
      ]
    },
    {
      id: "tf-11.13.5",
      badge: "Đúng/Sai 5 - Hình lăng trụ tam giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AC và AA' --> <line x1="60" y1="160" x2="210" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="60" y1="50" x2="60" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="60" y1="160" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="205" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'A' --> <line x1="60" y1="50" x2="120" y2="95" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="95" x2="210" y2="65" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="60" y2="50" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC' --> <line x1="120" y1="95" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="60" cy="50" r="3.5" fill="#38bdf8" /><text x="44" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="120" cy="95" r="3.5" fill="#38bdf8" /><text x="124" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="210" cy="65" r="3.5" fill="#38bdf8" /><text x="216" y="65" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="60" cy="160" r="3.5" fill="#38bdf8" /><text x="44" y="165" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="120" cy="205" r="3.5" fill="#38bdf8" /><text x="116" y="222" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="210" cy="175" r="3.5" fill="#38bdf8" /><text x="218" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> </svg>`,
      prompt: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ song song với nhau.",
          correctAnswer: true,
          explanation: "Đúng, theo định nghĩa hình lăng trụ."
        },
        {
          id: "b",
          text: "Các cạnh bên $AA', BB', CC'$ đôi một song song và có độ dài bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, tính chất cơ bản của hình lăng trụ."
        },
        {
          id: "c",
          text: "Mặt bên $(ABB'A')$ có thể là một hình thang.",
          correctAnswer: false,
          explanation: "Sai, các mặt bên của hình lăng trụ luôn là hình bình hành."
        },
        {
          id: "d",
          text: "Hình lăng trụ tam giác có tổng cộng 5 mặt và 9 cạnh.",
          correctAnswer: true,
          explanation: "Đúng, 2 mặt đáy + 3 mặt bên = 5 mặt; 6 cạnh đáy + 3 cạnh bên = 9 cạnh."
        }
      ]
    },
    {
      id: "tf-11.13.6",
      badge: "Đúng/Sai 6 - Định lý Thales trong không gian",
      source: "SGK Toán 11 KNTT Bài 13",
      prompt: "Cho ba mặt phẳng song song $(\\alpha), (\\beta), (\\gamma)$. Đường thẳng $d$ cắt ba mặt phẳng theo thứ tự tại $A, B, C$. Đường thẳng $d'$ cắt ba mặt phẳng tại $A', B', C'$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Tỉ số $\\dfrac{AB}{BC} = \\dfrac{A'B'}{B'C'}$.",
          correctAnswer: true,
          explanation: "Đúng, theo định lý Thales trong không gian."
        },
        {
          id: "b",
          text: "Nếu $AB = BC$ thì $A'B' = B'C'$.",
          correctAnswer: true,
          explanation: "Đúng, vì tỉ số bằng nhau nên khi $AB = BC \\implies A'B' = B'C'$."
        },
        {
          id: "c",
          text: "Độ dài đoạn $AB$ luôn bằng độ dài đoạn $A'B'$.",
          correctAnswer: false,
          explanation: "Sai, hai đường thẳng $d$ và $d'$ có thể nghiêng khác nhau nên độ dài thực tế của $AB$ và $A'B'$ có thể khác nhau."
        },
        {
          id: "d",
          text: "Tỉ số $\\dfrac{AB}{AC} = \\dfrac{A'B'}{A'C'}$.",
          correctAnswer: true,
          explanation: "Đúng, tính chất tỉ lệ thức suy ra từ định lý Thales."
        }
      ]
    },
    {
      id: "tf-11.13.7",
      badge: "Đúng/Sai 7 - Tứ diện và mặt phẳng song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNP) song song (BCD) --> <polygon points="92,112 142,122 197,102" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" stroke-width="2" /> <!-- Cạnh MP ở mặt sau bị khuất --> <line x1="92" y1="112" x2="197" y2="102" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /><text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /><text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /><text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /><text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /><text x="75" y="112" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="142" cy="122" r="3.5" fill="#f59e0b" /><text x="148" y="122" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="197" cy="102" r="3.5" fill="#f59e0b" /><text x="205" y="102" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> </svg>`,
      prompt: "Cho tứ diện $ABCD$. Điểm $M$ nằm trên cạnh $AB$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với mặt phẳng $(BCD)$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Mặt phẳng $(\\alpha)$ cắt cạnh $AC$ tại $N$ sao cho $MN \\parallel BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì $(\\alpha) \\parallel (BCD)$ nên giao tuyến của $(\\alpha)$ với $(ABC)$ song song với $BC$."
        },
        {
          id: "b",
          text: "Mặt phẳng $(\\alpha)$ cắt cạnh $AD$ tại $P$ sao cho $MP \\parallel BD$.",
          correctAnswer: true,
          explanation: "Đúng, tương tự giao tuyến với $(ABD)$ song song với $BD$."
        },
        {
          id: "c",
          text: "Thiết diện của tứ diện cắt bởi $(\\alpha)$ là tam giác $MNP$ đồng dạng với tam giác $BCD$.",
          correctAnswer: true,
          explanation: "Đúng, ba cạnh của $\\triangle MNP$ lần lượt song song với ba cạnh của $\\triangle BCD$ nên hai tam giác đồng dạng."
        },
        {
          id: "d",
          text: "Nếu $M$ là trung điểm của $AB$ thì diện tích tam giác $MNP$ bằng một nửa diện tích tam giác $BCD$.",
          correctAnswer: false,
          explanation: "Sai, tỉ số đồng dạng $k = 1/2 \\implies$ tỉ số diện tích là $k^2 = (1/2)^2 = 1/4$, tức bằng một phần tư diện tích tam giác $BCD$."
        }
      ]
    },
    {
      id: "tf-11.13.8",
      badge: "Đúng/Sai 8 - Hình chóp cụt và tính chất",
      source: "SGK Toán 11 KNTT Bài 13",
      prompt: "Cho một hình chóp cụt tứ giác. Xét tính Đúng / Sai của các phát biểu sau:",
      subItems: [
        {
          id: "a",
          text: "Hai đáy của hình chóp cụt là hai tứ giác đồng dạng.",
          correctAnswer: true,
          explanation: "Đúng, theo tính chất của hình chóp cụt."
        },
        {
          id: "b",
          text: "Các cạnh bên của hình chóp cụt đôi một song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, các đường thẳng chứa các cạnh bên đồng quy tại đỉnh của hình chóp ban đầu."
        },
        {
          id: "c",
          text: "Các mặt bên của hình chóp cụt luôn là các hình thang.",
          correctAnswer: true,
          explanation: "Đúng, có hai cạnh đáy song song."
        },
        {
          id: "d",
          text: "Nếu hai đáy là hai hình vuông thì các mặt bên luôn là các hình thang cân (đối với chóp cụt đều).",
          correctAnswer: true,
          explanation: "Đúng, đối với hình chóp cụt đều thì các mặt bên là các hình thang cân bằng nhau."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-11.13.1",
      badge: "TLN 1 - Số điểm chung của hai mặt phẳng song song",
      source: "SGK Toán 11 KNTT Bài 13",
      prompt: "Hai mặt phẳng phân biệt $(\\alpha)$ và $(\\beta)$ song song với nhau. Hỏi chúng có tất cả bao nhiêu điểm chung?",
      correctAnswer: "0",
      acceptableAnswers: ["0", "không", "không có"],
      explanation: "Hai mặt phẳng song song thì không có điểm chung nào."
    },
    {
      id: "sa-11.13.2",
      badge: "TLN 2 - Số mặt của hình lăng trụ ngũ giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      prompt: "Một hình lăng trụ ngũ giác có tất cả bao nhiêu mặt?",
      correctAnswer: "7",
      acceptableAnswers: ["7"],
      explanation: "Lăng trụ ngũ giác có 2 mặt đáy và 5 mặt bên $\\implies$ tổng số mặt là $2 + 5 = 7$ mặt."
    },
    {
      id: "sa-11.13.3",
      badge: "TLN 3 - Số cạnh của hình lăng trụ tam giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AC và AA' --> <line x1="60" y1="160" x2="210" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="60" y1="50" x2="60" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="60" y1="160" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="205" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'A' --> <line x1="60" y1="50" x2="120" y2="95" stroke="#38bdf8" stroke-width="1.8" /> <line x1="120" y1="95" x2="210" y2="65" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="60" y2="50" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC' --> <line x1="120" y1="95" x2="120" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="210" y1="65" x2="210" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="60" cy="50" r="3.5" fill="#38bdf8" /><text x="44" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="120" cy="95" r="3.5" fill="#38bdf8" /><text x="124" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="210" cy="65" r="3.5" fill="#38bdf8" /><text x="216" y="65" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="60" cy="160" r="3.5" fill="#38bdf8" /><text x="44" y="165" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="120" cy="205" r="3.5" fill="#38bdf8" /><text x="116" y="222" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="210" cy="175" r="3.5" fill="#38bdf8" /><text x="218" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> </svg>`,
      prompt: "Hình lăng trụ tam giác có bao nhiêu cạnh?",
      correctAnswer: "9",
      acceptableAnswers: ["9"],
      explanation: "Có 3 cạnh bên và $2 \\times 3 = 6$ cạnh đáy $\\implies$ tổng số cạnh là $9$."
    },
    {
      id: "sa-11.13.4",
      badge: "TLN 4 - Tỉ số diện tích thiết diện song song đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh đáy khuất AD, SA --> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="25" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Cạnh đáy thấy --> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy --> <line x1="145" y1="25" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="25" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNPQ) song song (ABCD) --> <polygon points="110,90 90,115 180,115 200,90" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <line x1="110" y1="90" x2="200" y2="90" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <!-- Điểm & Nhãn --> <circle cx="145" cy="25" r="3.5" fill="#38bdf8" /><text x="141" y="16" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /><text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /><text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /><text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /><text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="110" cy="90" r="3" fill="#f59e0b" /><text x="96" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="115" r="3" fill="#f59e0b" /><text x="74" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="180" cy="115" r="3" fill="#f59e0b" /><text x="187" y="120" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="200" cy="90" r="3" fill="#f59e0b" /><text x="207" y="88" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành với diện tích bằng 90. Mặt phẳng $(\\alpha)$ song song với đáy cắt cạnh $SA$ tại $M$ sao cho $\\dfrac{SM}{SA} = \\dfrac{1}{3}$. Tính diện tích của thiết diện tạo bởi $(\\alpha)$ và hình chóp.",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "Tỉ số diện tích bằng $k^2 = (1/3)^2 = 1/9$. Diện tích thiết diện là $90 \\times \\dfrac{1}{9} = 10$."
    },
    {
      id: "sa-11.13.5",
      badge: "TLN 5 - Định lý Thales không gian tính cạnh",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      prompt: "Ba mặt phẳng song song chắn trên đường thẳng $d_1$ hai đoạn thẳng có độ dài 3 và 6. Chúng chắn trên đường thẳng $d_2$ hai đoạn thẳng có độ dài 4 và $x$. Tìm giá trị của $x$.",
      correctAnswer: "8",
      acceptableAnswers: ["8"],
      explanation: "Theo định lý Thales trong không gian: $\\dfrac{3}{6} = \\dfrac{4}{x} \\implies x = \\dfrac{6 \\times 4}{3} = 8$."
    },
    {
      id: "sa-11.13.6",
      badge: "TLN 6 - Số cặp mặt phẳng đối diện song song của hình hộp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 280 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <!-- Cạnh khuất: AD, CD, AA' --> <line x1="50" y1="150" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="160" y1="150" x2="220" y2="195" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="50" y1="50" x2="50" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <!-- Đáy dưới thấy: AB, BC --> <line x1="50" y1="150" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="195" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <!-- Đáy trên thấy: A'B', B'C', C'D', D'A' --> <polygon points="50,50 110,95 220,95 160,50" fill="none" stroke="#38bdf8" stroke-width="1.8" /> <!-- Cạnh bên thấy: BB', CC', DD' --> <line x1="110" y1="95" x2="110" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="220" y1="95" x2="220" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="160" y1="50" x2="160" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <!-- Điểm & Nhãn --> <circle cx="50" cy="50" r="3.5" fill="#38bdf8" /><text x="34" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="110" cy="95" r="3.5" fill="#38bdf8" /><text x="114" y="93" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B'</text> <circle cx="220" cy="95" r="3.5" fill="#38bdf8" /><text x="226" y="95" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C'</text> <circle cx="160" cy="50" r="3.5" fill="#38bdf8" /><text x="164" y="46" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D'</text> <circle cx="50" cy="150" r="3.5" fill="#38bdf8" /><text x="34" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">A</text> <circle cx="110" cy="195" r="3.5" fill="#38bdf8" /><text x="106" y="212" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">B</text> <circle cx="220" cy="195" r="3.5" fill="#38bdf8" /><text x="228" y="200" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">C</text> <circle cx="160" cy="150" r="3.5" fill="#38bdf8" /><text x="166" y="155" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Một hình hộp $ABCD.A'B'C'D'$ có tất cả bao nhiêu cặp mặt phẳng đối diện song song với nhau?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Hình hộp có 6 mặt tạo thành 3 cặp mặt đối diện song song: $(ABCD) \\parallel (A'B'C'D')$, $(ABB'A') \\parallel (CDD'C')$, và $(ADD'A') \\parallel (BCC'B')$."
    },
    {
      id: "sa-11.13.7",
      badge: "TLN 7 - Tỉ số thể tích hình chóp nhỏ",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      prompt: "Một hình chóp có thể tích $V = 80$. Mặt phẳng song song với đáy cắt chiều cao tại trung điểm. Tính thể tích của phần hình chóp nhỏ ở đỉnh phía trên.",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "Tỉ số thể tích là $k^3 = (1/2)^3 = 1/8$. Thể tích khối chóp nhỏ là $\\dfrac{80}{8} = 10$."
    },
    {
      id: "sa-11.13.8",
      badge: "TLN 8 - Số đỉnh của hình lăng trụ tứ giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      prompt: "Một hình lăng trụ có đáy là tứ giác thì có bao nhiêu đỉnh?",
      correctAnswer: "8",
      acceptableAnswers: ["8"],
      explanation: "Mỗi đáy có 4 đỉnh $\\implies$ có $2 \\times 4 = 8$ đỉnh."
    },
    {
      id: "sa-11.13.9",
      badge: "TLN 9 - Tỉ số phân chia cạnh hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- Mặt phẳng (MNP) song song (BCD) --> <polygon points="92,112 142,122 197,102" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" stroke-width="2" /> <!-- Cạnh MP ở mặt sau bị khuất --> <line x1="92" y1="112" x2="197" y2="102" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /><text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /><text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /><text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /><text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /><text x="75" y="112" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="142" cy="122" r="3.5" fill="#f59e0b" /><text x="148" y="122" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="197" cy="102" r="3.5" fill="#f59e0b" /><text x="205" y="102" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> </svg>`,
      prompt: "Cho tứ diện $ABCD$ có diện tích mặt $(BCD)$ bằng 36. Mặt phẳng $(\\alpha)$ song song với $(BCD)$ cắt tam giác theo thiết diện có diện tích bằng 9. Tính tỉ số khoảng cách từ đỉnh $A$ đến mặt phẳng $(\\alpha)$ so với chiều cao từ $A$ đến $(BCD)$ (nhập phân số tối giản a/b).",
      correctAnswer: "1/2",
      acceptableAnswers: ["1/2", "0.5", "0,5"],
      explanation: "Tỉ số diện tích là $\\dfrac{9}{36} = \\dfrac{1}{4} = k^2 \\implies k = \\dfrac{1}{2}$."
    },
    {
      id: "sa-11.13.10",
      badge: "TLN 10 - Số mặt của hình chóp cụt lục giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B4",
      prompt: "Một hình chóp cụt có hai đáy là lục giác thì có tất cả bao nhiêu mặt?",
      correctAnswer: "8",
      acceptableAnswers: ["8"],
      explanation: "Gồm 2 mặt đáy lục giác và 6 mặt bên hình thang $\\implies$ tổng số mặt là $2 + 6 = 8$ mặt."
    }
  ]
};

export const GRADE_11_LESSON_13_AI_PRACTICE = {
  quizQuestions: [
    {
      id: "ai-11.13.1",
      badge: "Luyện thêm 1 - Điều kiện hai mặt phẳng song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Để chứng minh $(\\alpha) \\parallel (\\beta)$, ta cần chứng minh mặt phẳng $(\\alpha)$ chứa:",
      options: [
        "Hai đường thẳng cắt nhau cùng song song với $(\\beta)$",
        "Hai đường thẳng song song cùng song song với $(\\beta)$",
        "Một đường thẳng song song với $(\\beta)$",
        "Ba điểm phân biệt cùng thuộc $(\\beta)$"
      ],
      correctIndex: 0,
      explanation: "Định lý nhận biết yêu cầu mặt phẳng phải chứa hai đường thẳng CẮT NHAU cùng song song với mặt phẳng kia."
    },
    {
      id: "ai-11.13.2",
      badge: "Luyện thêm 2 - Mặt bên của hình lăng trụ",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Các mặt bên của hình lăng trụ luôn là các hình:",
      options: [
        "Hình bình hành",
        "Hình thang",
        "Tam giác",
        "Hình chữ nhật"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa hình lăng trụ, các mặt bên luôn là các hình bình hành."
    },
    {
      id: "ai-11.13.3",
      badge: "Luyện thêm 3 - Mặt phẳng trung điểm hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Cho hình chóp $S.ABC$. Gọi $M, N, P$ là trung điểm các cạnh bên $SA, SB, SC$. Mặt phẳng $(MNP)$ song song với:",
      options: [
        "Mặt phẳng $(ABC)$",
        "Mặt phẳng $(SAB)$",
        "Mặt phẳng $(SBC)$",
        "Mặt phẳng $(SAC)$"
      ],
      correctIndex: 0,
      explanation: "$MN \\parallel AB$ và $NP \\parallel BC$, do đó $(MNP) \\parallel (ABC)$."
    },
    {
      id: "ai-11.13.4",
      badge: "Luyện thêm 4 - Số cạnh hình lăng trụ tứ giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Một hình lăng trụ có đáy là tứ giác thì có bao nhiêu cạnh?",
      options: [
        "$12$",
        "$8$",
        "$16$",
        "$10$"
      ],
      correctIndex: 0,
      explanation: "Lăng trụ đáy $n$-giác có $3n$ cạnh. Với đáy tứ giác $n = 4 \\implies 3 \\times 4 = 12$ cạnh."
    },
    {
      id: "ai-11.13.5",
      badge: "Luyện thêm 5 - Giao tuyến song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Nếu $(\\alpha) \\parallel (\\beta)$ và mặt phẳng $(\\gamma)$ cắt cả $(\\alpha), (\\beta)$ theo các giao tuyến $a, b$ thì:",
      options: [
        "$a \\parallel b$",
        "$a$ cắt $b$",
        "$a$ chéo $b$",
        "$a \\perp b$"
      ],
      correctIndex: 0,
      explanation: "Hai giao tuyến của hai mặt phẳng song song với mặt phẳng thứ ba luôn song song với nhau."
    },
    {
      id: "ai-11.13.6",
      badge: "Luyện thêm 6 - Tỉ số Thales không gian",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Ba mặt phẳng song song chắn trên cát tuyến $d$ hai đoạn $2$ và $4$. Trên cát tuyến $d'$, đoạn thứ nhất có độ dài bằng $3$ thì đoạn thứ hai có độ dài bằng:",
      options: [
        "$6$",
        "$8$",
        "$5$",
        "$4$"
      ],
      correctIndex: 0,
      explanation: "$\\dfrac{2}{4} = \\dfrac{3}{x} \\implies x = 6$."
    },
    {
      id: "ai-11.13.7",
      badge: "Luyện thêm 7 - Thiết diện song song đáy",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Mặt phẳng song song đáy cắt hình chóp theo thiết diện là một đa giác:",
      options: [
        "Đồng dạng với đa giác đáy",
        "Bằng với đa giác đáy",
        "Có diện tích bằng một nửa đáy",
        "Là hình chữ nhật"
      ],
      correctIndex: 0,
      explanation: "Thiết diện song song với đáy luôn là một đa giác đồng dạng với đa giác đáy."
    },
    {
      id: "ai-11.13.8",
      badge: "Luyện thêm 8 - Cặp mặt đối diện hình hộp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Hình hộp có bao nhiêu cặp mặt phẳng đối diện song song?",
      options: [
        "$3$ cặp",
        "$6$ cặp",
        "$4$ cặp",
        "$2$ cặp"
      ],
      correctIndex: 0,
      explanation: "Hình hộp có đúng 3 cặp mặt phẳng đối diện song song."
    },
    {
      id: "ai-11.13.9",
      badge: "Luyện thêm 9 - Tỉ số diện tích hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Cắt hình chóp bởi mặt phẳng song song đáy qua trung điểm cạnh bên. Tỉ số diện tích thiết diện so với đáy là:",
      options: [
        "$\\dfrac{1}{4}$",
        "$\\dfrac{1}{2}$",
        "$\\dfrac{1}{8}$",
        "$\\dfrac{2}{3}$"
      ],
      correctIndex: 0,
      explanation: "Tỉ số diện tích là $k^2 = (1/2)^2 = 1/4$."
    },
    {
      id: "ai-11.13.10",
      badge: "Luyện thêm 10 - Mặt bên hình chóp cụt",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Các mặt bên của hình chóp cụt là hình gì?",
      options: [
        "Hình thang",
        "Hình bình hành",
        "Tam giác",
        "Hình chữ nhật"
      ],
      correctIndex: 0,
      explanation: "Các mặt bên của hình chóp cụt là các hình thang."
    },
    {
      id: "ai-11.13.11",
      badge: "Luyện thêm 11 - Số mặt lăng trụ tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Hình lăng trụ tam giác có bao nhiêu mặt?",
      options: [
        "$5$ mặt",
        "$6$ mặt",
        "$4$ mặt",
        "$8$ mặt"
      ],
      correctIndex: 0,
      explanation: "2 mặt đáy + 3 mặt bên = 5 mặt."
    },
    {
      id: "ai-11.13.12",
      badge: "Luyện thêm 12 - Quan hệ song song bắc cầu",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Nếu $(\\alpha) \\parallel (\\beta)$ và $(\\beta) \\parallel (\\gamma)$ thì:",
      options: [
        "$(\\alpha) \\parallel (\\gamma)$",
        "$(\\alpha)$ cắt $(\\gamma)$",
        "$(\\alpha) \\perp (\\gamma)$",
        "$(\\alpha)$ chéo $(\\gamma)$"
      ],
      correctIndex: 0,
      explanation: "Quan hệ song song giữa các mặt phẳng có tính chất bắc cầu."
    },
    {
      id: "ai-11.13.13",
      badge: "Luyện thêm 13 - Tỉ số thể tích khối chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Mặt phẳng song song đáy cắt hình chóp theo tỉ số chiều cao $\\dfrac{1}{3}$. Tỉ số thể tích hình chóp nhỏ so với khối chóp ban đầu là:",
      options: [
        "$\\dfrac{1}{27}$",
        "$\\dfrac{1}{9}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{1}{8}$"
      ],
      correctIndex: 0,
      explanation: "Tỉ số thể tích là $k^3 = (1/3)^3 = 1/27$."
    },
    {
      id: "ai-11.13.14",
      badge: "Luyện thêm 14 - Đường thẳng song song với 1 trong 2 mặt song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Cho $(\\alpha) \\parallel (\\beta)$. Nếu đường thẳng $a \\subset (\\alpha)$ thì:",
      options: [
        "$a \\parallel (\\beta)$",
        "$a$ cắt $(\\beta)$",
        "$a \\subset (\\beta)$",
        "$a \\perp (\\beta)$"
      ],
      correctIndex: 0,
      explanation: "Vì $a$ không có điểm chung với $(\\beta)$ nên $a \\parallel (\\beta)$."
    },
    {
      id: "ai-11.13.15",
      badge: "Luyện thêm 15 - Hình hộp có bao nhiêu đỉnh",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Một hình hộp chữ nhật có tất cả bao nhiêu đỉnh?",
      options: [
        "$8$",
        "$6$",
        "$12$",
        "$10$"
      ],
      correctIndex: 0,
      explanation: "Hình hộp có 8 đỉnh (4 đỉnh đáy trên và 4 đỉnh đáy dưới)."
    },
    {
      id: "ai-11.13.16",
      badge: "Luyện thêm 16 - Cạnh bên lăng trụ",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Trong hình lăng trụ, các cạnh bên:",
      options: [
        "Song song và bằng nhau",
        "Cắt nhau tại đỉnh",
        "Vuông góc với nhau",
        "Chéo nhau"
      ],
      correctIndex: 0,
      explanation: "Các cạnh bên của hình lăng trụ luôn song song và có độ dài bằng nhau."
    },
    {
      id: "ai-11.13.17",
      badge: "Luyện thêm 17 - Số đường chéo của hình hộp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Một hình hộp có bao nhiêu đường chéo chính (nối 2 đỉnh đối diện không cùng mặt)?",
      options: [
        "$4$",
        "$6$",
        "$8$",
        "$2$"
      ],
      correctIndex: 0,
      explanation: "Hình hộp có 4 đường chéo chính: $AC', BD', CA', DB'$ đồng quy tại tâm hình hộp."
    },
    {
      id: "ai-11.13.18",
      badge: "Luyện thêm 18 - Diện tích thiết diện tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Cho tứ diện $ABCD$ có diện tích đáy $(BCD) = 48$. Thiết diện song song đáy qua trọng tâm cạnh $AB$ ($AM = \\dfrac{2}{3} AB$) có diện tích bằng:",
      options: [
        "$\\dfrac{64}{3}$",
        "$24$",
        "$32$",
        "$16$"
      ],
      correctIndex: 0,
      explanation: "Tỉ số diện tích là $k^2 = (2/3)^2 = 4/9$. Diện tích thiết diện là $48 \\times \\dfrac{4}{9} = \\dfrac{64}{3}$."
    },
    {
      id: "ai-11.13.19",
      badge: "Luyện thêm 19 - Các cạnh bên hình chóp cụt",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Các đường thẳng chứa các cạnh bên của hình chóp cụt:",
      options: [
        "Đồng quy tại một điểm",
        "Đôi một song song",
        "Chéo nhau từng đôi một",
        "Trùng nhau"
      ],
      correctIndex: 0,
      explanation: "Các cạnh bên kéo dài của hình chóp cụt đồng quy tại đỉnh của hình chóp xuất phát."
    },
    {
      id: "ai-11.13.20",
      badge: "Luyện thêm 20 - Số mặt phẳng đối diện lăng trụ tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      question: "Hình lăng trụ tam giác có bao nhiêu cặp mặt phẳng song song?",
      options: [
        "Duy nhất $1$ cặp (hai mặt đáy)",
        "$2$ cặp",
        "$3$ cặp",
        "Không có cặp nào"
      ],
      correctIndex: 0,
      explanation: "Chỉ có duy nhất 1 cặp mặt phẳng song song là hai mặt đáy $(ABC) \\parallel (A'B'C')$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-11.13.1",
      badge: "Đúng/Sai LT 1 - Khái niệm cơ bản",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Xét tính Đúng / Sai của các phát biểu sau về hai mặt phẳng song song:",
      subItems: [
        {
          id: "a",
          text: "Hai mặt phẳng không có điểm chung thì song song.",
          correctAnswer: true,
          explanation: "Đúng, định nghĩa hai mặt phẳng song song."
        },
        {
          id: "b",
          text: "Nếu hai mặt phẳng song song thì mọi đường thẳng trong mặt này song song với mặt kia.",
          correctAnswer: true,
          explanation: "Đúng, vì chúng không có điểm chung."
        },
        {
          id: "c",
          text: "Hai mặt phẳng cùng song song với một đường thẳng thì song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, chúng có thể cắt nhau theo giao tuyến song song với đường thẳng đó."
        },
        {
          id: "d",
          text: "Qua một điểm ngoài mặt phẳng có vô số mặt phẳng song song với nó.",
          correctAnswer: false,
          explanation: "Sai, chỉ có duy nhất 1 mặt phẳng."
        }
      ]
    },
    {
      id: "ai-tf-11.13.2",
      badge: "Đúng/Sai LT 2 - Hình hộp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Sáu mặt của hình hộp đều là hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, theo định nghĩa hình hộp."
        },
        {
          id: "b",
          text: "Mặt phẳng $(ABB'A')$ song song với mặt phẳng $(CDD'C')$.",
          correctAnswer: true,
          explanation: "Đúng, hai mặt đối diện của hình hộp."
        },
        {
          id: "c",
          text: "Bốn đường chéo chính của hình hộp cắt nhau tại trung điểm mỗi đường.",
          correctAnswer: true,
          explanation: "Đúng, các đường chéo cắt nhau tại tâm hình hộp."
        },
        {
          id: "d",
          text: "Tất cả các cạnh của hình hộp đều có độ dài bằng nhau.",
          correctAnswer: false,
          explanation: "Sai, chỉ có các cạnh bên bằng nhau và các cạnh đối đáy bằng nhau, các kích thước có thể khác nhau."
        }
      ]
    },
    {
      id: "ai-tf-11.13.3",
      badge: "Đúng/Sai LT 3 - Hình chóp và thiết diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Mặt phẳng $(\\alpha)$ song song đáy cắt $SA, SB, SC, SD$ tại $M, N, P, Q$. Xét tính Đúng / Sai:",
      subItems: [
        {
          id: "a",
          text: "Tứ giác $MNPQ$ là hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, các cạnh đối diện song song."
        },
        {
          id: "b",
          text: "Đoạn thẳng $MN$ song song với $CD$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel AB \\parallel CD$."
        },
        {
          id: "c",
          text: "Các đoạn $SM, SN, SP, SQ$ tỉ lệ với các cạnh bên tương ứng.",
          correctAnswer: true,
          explanation: "Đúng, theo định lý Thales trong không gian."
        },
        {
          id: "d",
          text: "Khối đa diện $ABCD.MNPQ$ là hình lăng trụ.",
          correctAnswer: false,
          explanation: "Sai, đó là hình chóp cụt."
        }
      ]
    },
    {
      id: "ai-tf-11.13.4",
      badge: "Đúng/Sai LT 4 - Định lý Thales không gian",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Cho ba mặt phẳng đôi một song song cắt hai đường thẳng $a$ và $b$ theo các đoạn thẳng. Xét tính Đúng / Sai:",
      subItems: [
        {
          id: "a",
          text: "Các đoạn thẳng chắn trên hai đường thẳng tỉ lệ với nhau.",
          correctAnswer: true,
          explanation: "Đúng, định lý Thales trong không gian."
        },
        {
          id: "b",
          text: "Các đoạn thẳng chắn trên hai đường thẳng luôn bằng nhau.",
          correctAnswer: false,
          explanation: "Sai, độ dài có thể khác nhau do góc nghiêng."
        },
        {
          id: "c",
          text: "Nếu các đoạn chắn trên $a$ bằng nhau thì các đoạn chắn trên $b$ cũng bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, do tỉ lệ thức."
        },
        {
          id: "d",
          text: "Hai đường thẳng $a$ và $b$ bắt buộc phải đồng phẳng.",
          correctAnswer: false,
          explanation: "Sai, $a$ và $b$ có thể chéo nhau."
        }
      ]
    },
    {
      id: "ai-tf-11.13.5",
      badge: "Đúng/Sai LT 5 - Hình lăng trụ",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Cho hình lăng trụ $ABC.A'B'C'$. Xét tính Đúng / Sai:",
      subItems: [
        {
          id: "a",
          text: "Hai mặt đáy là hai tam giác bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, tính chất hình lăng trụ."
        },
        {
          id: "b",
          text: "Cạnh bên $AA'$ song song với mặt phẳng $(BCC'B')$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AA' \\parallel BB' \\subset (BCC'B')$."
        },
        {
          id: "c",
          text: "Các mặt bên có diện tích luôn bằng nhau.",
          correctAnswer: false,
          explanation: "Sai, các cạnh đáy tam giác có thể khác nhau."
        },
        {
          id: "d",
          text: "Đường thẳng nối trung điểm $AB$ và $A'B'$ song song với $CC'$.",
          correctAnswer: true,
          explanation: "Đúng, song song với các cạnh bên."
        }
      ]
    },
    {
      id: "ai-tf-11.13.6",
      badge: "Đúng/Sai LT 6 - Nhận biết hai mặt phẳng song song",
      isAiGenerated: true,
      source: "SGK Toán 11 KNTT Bài 13",
      prompt: "Xét tính Đúng / Sai của các điều kiện để $(\\alpha) \\parallel (\\beta)$:",
      subItems: [
        {
          id: "a",
          text: "Chỉ cần 1 đường thẳng trong $(\\alpha)$ song song với $(\\beta)$.",
          correctAnswer: false,
          explanation: "Sai, phải cần 2 đường thẳng cắt nhau."
        },
        {
          id: "b",
          text: "Cần 2 đường thẳng cắt nhau trong $(\\alpha)$ cùng song song với $(\\beta)$.",
          correctAnswer: true,
          explanation: "Đúng, đây là dấu hiệu nhận biết chuẩn."
        },
        {
          id: "c",
          text: "Nếu 2 đường thẳng trong $(\\alpha)$ song song với nhau và cùng song song $(\\beta)$ thì đủ kết luận.",
          correctAnswer: false,
          explanation: "Sai, 2 đường thẳng song song không đủ khóa mặt phẳng."
        },
        {
          id: "d",
          text: "Nếu $(\\alpha)$ và $(\\beta)$ cùng không cắt một mặt phẳng $(\\gamma)$ thì $(\\alpha) \\parallel (\\beta)$.",
          correctAnswer: true,
          explanation: "Đúng, vì cùng song song với $(\\gamma)$."
        }
      ]
    },
    {
      id: "ai-tf-11.13.7",
      badge: "Đúng/Sai LT 7 - Tứ diện và trọng tâm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Cho tứ diện $ABCD$. Gọi $G_1, G_2, G_3$ lần lượt là trọng tâm tam giác $ABC, ACD, ADB$. Xét tính Đúng / Sai:",
      subItems: [
        {
          id: "a",
          text: "Mặt phẳng $(G_1G_2G_3)$ song song với mặt phẳng $(BCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì các đoạn $G_1G_2, G_2G_3$ đều song song với $CD, DB$ theo tỉ số $1/3$."
        },
        {
          id: "b",
          text: "Tam giác $G_1G_2G_3$ đồng dạng với tam giác $BCD$.",
          correctAnswer: true,
          explanation: "Đúng, theo tỉ số đồng dạng $k = 1/3$."
        },
        {
          id: "c",
          text: "Diện tích tam giác $G_1G_2G_3$ bằng $\\dfrac{1}{9}$ diện tích tam giác $BCD$.",
          correctAnswer: true,
          explanation: "Đúng, tỉ số diện tích là $k^2 = (1/3)^2 = 1/9$."
        },
        {
          id: "d",
          text: "Đường thẳng $AG_1$ vuông góc với mặt phẳng $(BCD)$.",
          correctAnswer: false,
          explanation: "Sai, trong tứ diện bất kì thì $AG_1$ chưa chắc vuông góc."
        }
      ]
    },
    {
      id: "ai-tf-11.13.8",
      badge: "Đúng/Sai LT 8 - Giao tuyến song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Cho $(\\alpha) \\parallel (\\beta)$. Một đường thẳng $d$ cắt $(\\alpha)$ tại $A$. Xét tính Đúng / Sai:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $d$ bắt buộc phải cắt $(\\beta)$.",
          correctAnswer: true,
          explanation: "Đúng, nếu không cắt $(\\beta)$ thì $d \\parallel (\\beta)$, khi đó mặt phẳng chứa $d$ dẫn tới cắt vô lý."
        },
        {
          id: "b",
          text: "Giao điểm của $d$ với $(\\beta)$ là duy nhất.",
          correctAnswer: true,
          explanation: "Đúng, đường thẳng cắt mặt phẳng tại 1 điểm duy nhất."
        },
        {
          id: "c",
          text: "Đoạn thẳng $AB$ (với $B = d \\cap (\\beta)$) nằm giữa hai mặt phẳng song song.",
          correctAnswer: true,
          explanation: "Đúng, đoạn nối 2 giao điểm."
        },
        {
          id: "d",
          text: "Nếu $d'$ song song với $d$ và cắt $(\\alpha), (\\beta)$ tại $A', B'$ thì $AA' = BB'$.",
          correctAnswer: false,
          explanation: "Sai, $ABB'A'$ là hình bình hành nên $AB = A'B'$ và $AA' = BB'$ (Đúng, vì $AB \\parallel A'B'$ và $AA' \\parallel BB'$ nên là hình bình hành, các cạnh đối diện bằng nhau)."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-11.13.1",
      badge: "Luyện thêm TLN 1 - Số mặt lăng trụ tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Hình lăng trụ tam giác có bao nhiêu mặt?",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "2 đáy + 3 mặt bên = 5 mặt."
    },
    {
      id: "ai-sa-11.13.2",
      badge: "Luyện thêm TLN 2 - Số cạnh hình hộp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Một hình hộp có tất cả bao nhiêu cạnh?",
      correctAnswer: "12",
      acceptableAnswers: ["12"],
      explanation: "4 cạnh đáy trên + 4 cạnh đáy dưới + 4 cạnh bên = 12 cạnh."
    },
    {
      id: "ai-sa-11.13.3",
      badge: "Luyện thêm TLN 3 - Tỉ số Thales",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Ba mặt phẳng song song cắt cát tuyến $d_1$ theo hai đoạn 4 và 8, cắt cát tuyến $d_2$ theo hai đoạn 5 và $y$. Tìm $y$.",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "$\\dfrac{4}{8} = \\dfrac{5}{y} \\implies y = 10$."
    },
    {
      id: "ai-sa-11.13.4",
      badge: "Luyện thêm TLN 4 - Tỉ số diện tích chóp cụt",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Hình chóp có diện tích đáy 64, mặt phẳng song song đáy qua trung điểm cạnh bên cắt chóp theo thiết diện có diện tích bằng bao nhiêu?",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "Diện tích là $64 \\times (1/2)^2 = 16$."
    },
    {
      id: "ai-sa-11.13.5",
      badge: "Luyện thêm TLN 5 - Số đỉnh lăng trụ ngũ giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Hình lăng trụ ngũ giác có bao nhiêu đỉnh?",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "$2 \\times 5 = 10$ đỉnh."
    },
    {
      id: "ai-sa-11.13.6",
      badge: "Luyện thêm TLN 6 - Cặp mặt đối diện song song hình hộp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Hình hộp có bao nhiêu cặp mặt phẳng song song?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Có 3 cặp mặt đối diện song song."
    },
    {
      id: "ai-sa-11.13.7",
      badge: "Luyện thêm TLN 7 - Tỉ số thể tích hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Khối chóp có $V = 135$. Mặt phẳng song song đáy cắt chiều cao theo tỉ số $1/3$ từ đỉnh. Tính thể tích phần chóp nhỏ phía trên.",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "$V_1 = 135 \\times (1/3)^3 = 135 / 27 = 5$."
    },
    {
      id: "ai-sa-11.13.8",
      badge: "Luyện thêm TLN 8 - Số mặt chóp cụt tứ giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Hình chóp cụt tứ giác có bao nhiêu mặt?",
      correctAnswer: "6",
      acceptableAnswers: ["6"],
      explanation: "2 mặt đáy + 4 mặt bên = 6 mặt."
    },
    {
      id: "ai-sa-11.13.9",
      badge: "Luyện thêm TLN 9 - Chu vi thiết diện lăng trụ tam giác đều",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Lăng trụ tam giác đều có cạnh đáy 6, mặt phẳng song song với đáy cắt lăng trụ theo thiết diện có chu vi bằng bao nhiêu?",
      correctAnswer: "18",
      acceptableAnswers: ["18"],
      explanation: "Thiết diện là tam giác đều bằng tam giác đáy, chu vi bằng $3 \\times 6 = 18$."
    },
    {
      id: "ai-sa-11.13.10",
      badge: "Luyện thêm TLN 10 - Tỉ số diện tích tứ diện trọng tâm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B4",
      prompt: "Mặt phẳng đi qua 3 trọng tâm của 3 mặt bên chung đỉnh của tứ diện cắt tứ diện theo thiết diện có diện tích $S_1$. Biết diện tích đáy đối diện là $S = 81$. Tính $S_1$.",
      correctAnswer: "9",
      acceptableAnswers: ["9"],
      explanation: "Tỉ số diện tích $k^2 = (1/3)^2 = 1/9 \\implies S_1 = 81 / 9 = 9$."
    }
  ]
};
