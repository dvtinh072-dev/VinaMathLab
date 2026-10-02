import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export const GRADE_11_LESSON_12: DetailedLessonData = {
  id: "t11-b12-duong-thang-song-song-mat-phang",
  lessonNumber: 12,
  title: "Bài 12: Đường thẳng và mặt phẳng song song",
  bookChapter: "Chương IV: Quan hệ song song trong không gian (SGK Toán 11 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Xà gồ mái nhà song song với mặt sàn, đường dây điện cao thế và phương pháp chứng minh song song",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, khi quan sát khung mái nhà xưởng, em thấy các thanh xà gồ nằm ngang phía trên song song với mặt sàn bê tông bên dưới. Làm thế nào để các kỹ sư xây dựng kiểm tra thanh xà gồ song song với mặt sàn mà không cần đo khoảng cách ở mọi điểm ạ?",
      visualGraphic: "box",
      mathNote: "d \\parallel a \\subset (P) \\implies d \\parallel (P)"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Các kỹ sư chỉ cần căn chỉnh thanh xà gồ song song với **một mép tường hoặc một đường kẻ thẳng trên mặt sàn**! Trong hình học không gian, có một định lý then chốt: 'Nếu đường thẳng $d$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $a$ nằm trong $(P)$ thì $d$ song song với $(P)$'!",
      visualGraphic: "box",
      mathNote: "\\begin{cases} d \\not\\subset (P) \\ a \\subset (P) \\ d \\parallel a \\end{cases} \\implies d \\parallel (P)"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thật tuyệt vời! Một điều kiện đơn giản nhưng giải quyết được bài toán thực tế. Em muốn khám phá thêm các định lý giao tuyến và cách tìm thiết diện song song với đường thẳng ạ!",
      visualGraphic: "box",
      mathNote: "(\\alpha) \\cap (\\beta) = a \\parallel d"
    }
  ],
  youtubeVideoId: "b8u4KqF3l0g",
  youtubeVideoTitle: "Bài 12: Đường thẳng và mặt phẳng song song (Tiết 1) - Toán 11 KNTT",
  youtubeVideos: [
    {
      id: "b8u4KqF3l0g",
      title: "Bài 12: Đường thẳng và mặt phẳng song song (Tiết 1) - Toán 11 KNTT"
    },
    {
      id: "N6v5j9X1ZtU",
      title: "Bài 12: Định lý giao tuyến và phương pháp tìm thiết diện song song (Tiết 2)"
    },
    {
      id: "W3m8Y1tPqLo",
      title: "Các dạng toán chứng minh đường thẳng song song mặt phẳng 11 KNTT"
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Vị trí tương đối của đường thẳng và mặt phẳng",
      points: [
        "Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Có đúng 3 vị trí tương đối:",
        "1. **$d$ song song với $(\\alpha)$:** $d$ và $(\\alpha)$ không có điểm chung nào. Ký hiệu $d \\parallel (\\alpha)$ hoặc $(\\alpha) \\parallel d$. ($d \\cap (\\alpha) = \\emptyset$).",
        "2. **$d$ cắt $(\\alpha)$:** $d$ và $(\\alpha)$ có đúng một điểm chung duy nhất $M$. Ký hiệu $d \\cap (\\alpha) = \{M\}$.",
        "3. **$d$ nằm trong $(\\alpha)$:** Mọi điểm của $d$ đều thuộc $(\\alpha)$. Ký hiệu $d \\subset (\\alpha)$."
      ],
      examples: [
        {
          title: "Ví dụ 1",
          problem: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Cạnh bên $SA$ có vị trí tương đối như thế nào đối với mặt phẳng đáy $(ABCD)$?",
          solution: "Vì $A \\in SA$ và $A \\in (ABCD)$, mặt khác đỉnh $S \\notin (ABCD)$ nên đường thẳng $SA$ chỉ có một điểm chung duy nhất với $(ABCD)$ là điểm $A$. Do đó $SA$ cắt $(ABCD)$ tại $A$."
        }
      ]
    },
    {
      index: "2",
      title: "2. Dấu hiệu nhận biết đường thẳng song song với mặt phẳng (Định lý 1)",
      points: [
        "**Định lý 1:** Nếu đường thẳng $d$ không nằm trong mặt phẳng $(\\alpha)$ và song song với một đường thẳng $a$ nằm trong $(\\alpha)$ thì $d$ song song với $(\\alpha)$.",
        "$$\\begin{cases} d \\not\\subset (\\alpha) \\ a \\subset (\\alpha) \\ d \\parallel a \\end{cases} \\implies d \\parallel (\\alpha)$$",
        "**Ý nghĩa thực tiễn:** Muốn chứng minh một đường thẳng song song với một mặt phẳng, ta chỉ cần tìm (hoặc dựng) trong mặt phẳng đó một đường thẳng song song với đường thẳng đã cho."
      ],
      examples: [
        {
          title: "Ví dụ 2",
          problem: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Chứng minh $MN \\parallel (ABCD)$.",
          solution: "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB$. Mặt khác $AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$. Theo định lý nhận biết, ta có $MN \\parallel (ABCD)$."
        }
      ]
    },
    {
      index: "3",
      title: "3. Tính chất của đường thẳng song song mặt phẳng (Định lý giao tuyến)",
      points: [
        "**Định lý 2:** Nếu đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ thì mọi mặt phẳng $(\\beta)$ chứa $d$ nếu cắt $(\\alpha)$ theo giao tuyến $a$ thì $a$ song song với $d$.",
        "$$\\begin{cases} d \\parallel (\\alpha) \\ d \\subset (\\beta) \\ (\\alpha) \\cap (\\beta) = a \\end{cases} \\implies a \\parallel d$$",
        "**Hệ quả 1:** Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó.",
        "$$\\begin{cases} (\\alpha) \\parallel d \\ (\\beta) \\parallel d \\ (\\alpha) \\cap (\\beta) = a \\end{cases} \\implies a \\parallel d$$",
        "**Định lý 3:** Cho hai đường thẳng chéo nhau $a$ và $b$. Có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
      ],
      examples: [
        {
          title: "Ví dụ 3",
          problem: "Cho tứ diện $ABCD$. Điểm $M$ thuộc miền trong tam giác $ABC$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $AB, CD$. Nêu cách dựng thiết diện của tứ diện cắt bởi $(\\alpha)$.",
          solution: "Qua $M$ kẻ đường thẳng song song với $AB$ cắt $AC$ tại $E$ và $BC$ tại $F$. Qua $E$ kẻ đường song song với $CD$ cắt $AD$ tại $H$. Qua $F$ kẻ đường song song với $CD$ cắt $BD$ tại $K$. Thiết diện là hình bình hành $EFKH$."
        }
      ]
    },
    {
      index: "4",
      title: "4. Phương pháp giải các dạng toán trọng tâm",
      points: [
        "**Dạng 1: Chứng minh đường thẳng $d$ song song với mặt phẳng $(\\alpha)$:**",
        "+ Bước 1: Tìm đường thẳng $a \\subset (\\alpha)$ sao cho $a \\parallel d$ (dùng đường trung bình, định lý Thales đảo, cặp cạnh đối của hình bình hành...).",
        "+ Bước 2: Kiểm tra $d \\not\\subset (\\alpha)$.",
        "+ Bước 3: Kết luận $d \\parallel (\\alpha)$.",
        "**Dạng 2: Tìm giao tuyến của hai mặt phẳng dựa vào quan hệ song song:**",
        "+ Xác định điểm chung $M$.",
        "+ Dùng định lý: Nếu mặt phẳng chứa đường thẳng song song với mặt phẳng kia thì giao tuyến đi qua điểm chung và song song với đường thẳng đó.",
        "**Dạng 3: Xác định thiết diện song song với đường thẳng:**",
        "+ Cắt các mặt của hình chóp theo các đoạn giao tuyến song song với đường thẳng cho trước."
      ],
      examples: [
        {
          title: "Ví dụ 4",
          problem: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình bình hành. Gọi $G$ là trọng tâm tam giác $SAB$. Chứng minh đường thẳng qua $G$ song song với $AB$ thì song song với $(SCD)$.",
          solution: "Gọi đường thẳng qua $G$ song song với $AB$ là $d$. Ta có $AB \\parallel CD \\implies d \\parallel CD$. Mà $CD \\subset (SCD)$ và $d \\not\\subset (SCD)$. Do đó $d \\parallel (SCD)$."
        }
      ]
    }
  ],
  videoQuestions: [
    {
      id: "vq-11.12.1",
      timeSeconds: 160,
      timeLabel: "02:40",
      title: "Định nghĩa đường thẳng song song mặt phẳng",
      question: "Đường thẳng $d$ và mặt phẳng $(P)$ được gọi là song song với nhau khi nào?",
      options: [
        "Khi chúng không có điểm chung nào",
        "Khi $d$ có đúng một điểm chung với $(P)$",
        "Khi $d$ nằm hoàn toàn trong $(P)$",
        "Khi $d$ vuông góc với $(P)$"
      ],
      correctIndex: 0,
      explanation: "Định nghĩa: Đường thẳng và mặt phẳng gọi là song song nếu chúng không có điểm chung nào ($d \\cap (P) = \\emptyset$)."
    },
    {
      id: "vq-11.12.2",
      timeSeconds: 380,
      timeLabel: "06:20",
      title: "Dấu hiệu nhận biết",
      question: "Để chứng minh đường thẳng $d$ song song với mặt phẳng $(P)$, ta cần chứng minh:",
      options: [
        "$d$ không nằm trong $(P)$ và song song với một đường thẳng nằm trong $(P)$",
        "$d$ không có điểm chung với một điểm thuộc $(P)$",
        "$d$ cắt một đường thẳng nằm trong $(P)$",
        "$d$ song song với một đường thẳng bất kì trong không gian"
      ],
      correctIndex: 0,
      explanation: "Theo định lý 1: Nếu $d \\not\\subset (P)$ và $d$ song song với một đường thẳng $a \\subset (P)$ thì $d \\parallel (P)$."
    },
    {
      id: "vq-11.12.3",
      timeSeconds: 610,
      timeLabel: "10:10",
      title: "Định lý giao tuyến",
      question: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$, mặt phẳng $(Q)$ chứa $d$ cắt $(P)$ theo giao tuyến $a$ thì:",
      options: [
        "$a \\parallel d$",
        "$a$ cắt $d$",
        "$a$ chéo nhau với $d$",
        "$a$ trùng với $d$"
      ],
      correctIndex: 0,
      explanation: "Theo định lý 2: Giao tuyến $a$ của mặt phẳng $(Q)$ chứa $d$ với mặt phẳng $(P)$ luôn song song với $d$."
    }
  ],
  tips: [
    "Muốn chứng minh $d \\parallel (P)$, mẹo nhanh nhất là tìm xem trong $(P)$ có đoạn thẳng nào cùng nằm với $d$ trong một tam giác hoặc tứ giác để dùng đường trung bình hay định lý Thales đảo.",
    "Trọng tâm tam giác: Nếu $G_1, G_2$ lần lượt là trọng tâm của hai tam giác có chung cạnh (hoặc chung đỉnh) thì đoạn $G_1G_2$ thường song song với cạnh đáy tương ứng theo tỉ số $1/3$ hoặc $2/3$.",
    "Ghi nhớ: Đường thẳng $d$ song song với $(P)$ KHÔNG CÓ NGHĨA là $d$ song song với mọi đường trong $(P)$! Thực tế $d$ chỉ song song với các đường song song với nó trong $(P)$, còn lại $d$ sẽ chéo nhau với các đường khác!",
    "Khi tìm thiết diện song song với đường thẳng $d$, hãy vẽ các đoạn giao tuyến song song với $d$ trên các mặt phẳng đi qua nó."
  ],
  traps: [
    "Bẫy quên điều kiện $d \\not\\subset (P)$: Nếu $d \\subset (P)$ và $d \\parallel a$ (với $a \\subset (P)$) thì $d$ NẰM TRONG $(P)$ chứ không phải song song!",
    "Bẫy ngộ nhận: Tưởng rằng $d \\parallel (P)$ thì $d$ song song với tất cả các đường thẳng nằm trong $(P)$. Đây là sai lầm rất phổ biến: $d$ có thể chéo nhau với vô số đường thẳng trong $(P)$!",
    "Bẫy bắc cầu: $d \\parallel (P)$ và $a \\parallel (P)$ thì $d$ và $a$ KHÔNG nhất thiết song song với nhau (chúng có thể cắt nhau hoặc chéo nhau).",
    "Bẫy hai mặt phẳng song song với đường thẳng: Hai mặt phẳng phân biệt cùng song song với $d$ thì chúng có thể cắt nhau (theo giao tuyến song song với $d$) chứ không nhất thiết phải song song với nhau."
  ],
  quizQuestions: [
    {
      id: "quiz-11.12.1",
      badge: "Câu 1 - Nhận biết - Vị trí tương đối của đường thẳng và mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        "Nếu $d$ và $(\\alpha)$ không có điểm chung thì $d \\parallel (\\alpha)$.",
        "Nếu $d$ và $(\\alpha)$ có điểm chung thì $d$ nằm trong $(\\alpha)$.",
        "Nếu $d$ không cắt $(\\alpha)$ thì $d$ phải nằm trong $(\\alpha)$.",
        "Nếu $d$ song song với một đường thẳng bất kì thì $d \\parallel (\\alpha)$."
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa: Đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ nếu chúng không có bất kì điểm chung nào ($d \\cap (\\alpha) = \\emptyset$)."
    },
    {
      id: "quiz-11.12.2",
      badge: "Câu 2 - Nhận biết - Dấu hiệu nhận biết đường thẳng song song mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Điều kiện cần và đủ để đường thẳng $d$ song song với mặt phẳng $(P)$ là:",
      options: [
        "$d \\not\\subset (P)$ và $d$ song song với một đường thẳng $a$ nằm trong $(P)$.",
        "$d$ song song với mọi đường thẳng nằm trong $(P)$.",
        "$d$ cắt một đường thẳng nằm trong $(P)$.",
        "$d$ có ít nhất một điểm chung với $(P)$."
      ],
      correctIndex: 0,
      explanation: "Định lý 1 (Dấu hiệu nhận biết): Nếu $d \\not\\subset (P)$ và $d \\parallel a$ với $a \\subset (P)$ thì $d \\parallel (P)$."
    },
    {
      id: "quiz-11.12.3",
      badge: "Câu 3 - Nhận biết - Số điểm chung của đường thẳng song song mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì số điểm chung của $d$ và $(P)$ là:",
      options: [
        "$0$",
        "$1$",
        "$2$",
        "Vô số"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa, đường thẳng song song với mặt phẳng thì không có điểm chung nào, số điểm chung là $0$."
    },
    {
      id: "quiz-11.12.4",
      badge: "Câu 4 - Nhận biết - Định lý giao tuyến của mặt phẳng chứa đường thẳng song song",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Cho $d \\parallel (P)$. Mặt phẳng $(Q)$ chứa $d$ cắt $(P)$ theo giao tuyến $c$. Khi đó:",
      options: [
        "$c \\parallel d$",
        "$c$ cắt $d$",
        "$c$ chéo nhau với $d$",
        "$c \\perp d$"
      ],
      correctIndex: 0,
      explanation: "Định lý 2: Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì bất kì mặt phẳng nào chứa $d$ cắt $(P)$ theo giao tuyến thì giao tuyến đó phải song song với $d$."
    },
    {
      id: "quiz-11.12.5",
      badge: "Câu 5 - Nhận biết - Mặt phẳng chứa 1 đường thẳng và song song đường thẳng kia",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa $a$ và song song với $b$?",
      options: [
        "Duy nhất $1$ mặt phẳng.",
        "Có vô số mặt phẳng.",
        "Có đúng $2$ mặt phẳng.",
        "Không có mặt phẳng nào."
      ],
      correctIndex: 0,
      explanation: "Theo định lý 3: Cho hai đường thẳng chéo nhau $a$ và $b$, có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia."
    },
    {
      id: "quiz-11.12.6",
      badge: "Câu 6 - Thông hiểu - Đường trung bình song song mặt đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="92" x2="90" y2="117" stroke="#f59e0b" stroke-width="2" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="116" y="92" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="117" r="3.5" fill="#f59e0b" /> <text x="73" y="122" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        "$MN \\parallel (ABCD)$.",
        "$MN$ cắt mặt phẳng $(ABCD)$.",
        "$MN \\subset (ABCD)$.",
        "$MN \\parallel (SCD)$."
      ],
      correctIndex: 0,
      explanation: "Trong $\\triangle SAB$, $MN$ là đường trung bình nên $MN \\parallel AB$. Mà $AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$. Do đó $MN \\parallel (ABCD)$."
    },
    {
      id: "quiz-11.12.7",
      badge: "Câu 7 - Thông hiểu - Cạnh đáy song song mặt bên đối diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đường thẳng $AB$ song song với mặt phẳng nào sau đây?",
      options: [
        "$(SCD)$",
        "$(SBC)$",
        "$(SAD)$",
        "$(SAC)$"
      ],
      correctIndex: 0,
      explanation: "Vì đáy là hình bình hành nên $AB \\parallel CD$. Mà $CD \\subset (SCD)$ và $AB \\not\\subset (SCD) \\implies AB \\parallel (SCD)$."
    },
    {
      id: "quiz-11.12.8",
      badge: "Câu 8 - Thông hiểu - Đường trung bình trong tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="92" y1="112" x2="142" y2="122" stroke="#f59e0b" stroke-width="2" /> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /> <text x="75" y="112" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="142" cy="122" r="3.5" fill="#f59e0b" /> <text x="148" y="122" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Đường thẳng $MN$ song song với mặt phẳng nào?",
      options: [
        "$(BCD)$",
        "$(ABD)$",
        "$(ACD)$",
        "$(ABC)$"
      ],
      correctIndex: 0,
      explanation: "Trong $\\triangle ABC$, $MN$ là đường trung bình nên $MN \\parallel BC$. Do $BC \\subset (BCD)$ và $MN \\not\\subset (BCD) \\implies MN \\parallel (BCD)$."
    },
    {
      id: "quiz-11.12.9",
      badge: "Câu 9 - Thông hiểu - Đường trung bình mặt bên hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="92" x2="200" y2="92" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 5" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="94" y="92" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="200" cy="92" r="3.5" fill="#f59e0b" /> <text x="206" y="92" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SD$. Đường thẳng $MN$ song song với mặt phẳng nào sau đây?",
      options: [
        "$(SBC)$",
        "$(SAB)$",
        "$(SAD)$",
        "$(SAC)$"
      ],
      correctIndex: 0,
      explanation: "Trong $\\triangle SAD$, $MN$ là đường trung bình nên $MN \\parallel AD$. Mà đáy là hình bình hành nên $AD \\parallel BC \\implies MN \\parallel BC$. Vì $BC \\subset (SBC)$ và $MN \\not\\subset (SBC)$ nên $MN \\parallel (SBC)$."
    },
    {
      id: "quiz-11.12.10",
      badge: "Câu 10 - Thông hiểu - Mối quan hệ giữa đường thẳng và các đường trong mặt",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Cho đường thẳng $d \\parallel (\\alpha)$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        "Nếu đường thẳng $b \\subset (\\alpha)$ thì $d$ và $b$ có thể song song hoặc chéo nhau.",
        "Mọi đường thẳng nằm trong $(\\alpha)$ đều song song với $d$.",
        "Tồn tại đường thẳng $b \\subset (\\alpha)$ sao cho $d$ cắt $b$.",
        "Đường thẳng $d$ vuông góc với mọi đường thẳng nằm trong $(\\alpha)$."
      ],
      correctIndex: 0,
      explanation: "Vì $d \\parallel (\\alpha)$ nên $d$ không có điểm chung với $(\\alpha)$, do đó $d$ không thể cắt bất kì đường thẳng nào nằm trong $(\\alpha)$. Vậy với mỗi đường thẳng $b \\subset (\\alpha)$, $d$ và $b$ chỉ có thể song song hoặc chéo nhau."
    },
    {
      id: "quiz-11.12.11",
      badge: "Câu 11 - Thông hiểu - Đoạn nối trọng tâm tam giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="110" cy="130" r="3.5" fill="#f59e0b" /> <text x="94" y="132" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">G1</text> <circle cx="145" cy="115" r="3.5" fill="#f59e0b" /> <text x="151" y="115" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">G2</text> <line x1="110" y1="130" x2="145" y2="115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" /> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình bình hành. Gọi $G_1, G_2$ lần lượt là trọng tâm của tam giác $SAB$ và tam giác $SAD$. Đường thẳng $G_1G_2$ song song với mặt phẳng nào?",
      options: [
        "$(ABCD)$",
        "$(SAB)$",
        "$(SAD)$",
        "$(SCD)$"
      ],
      correctIndex: 0,
      explanation: "Gọi $M, N$ là trung điểm $AB, AD$. Theo tính chất trọng tâm: $\\dfrac{SG_1}{SM} = \\dfrac{SG_2}{SN} = \\dfrac{2}{3} \\implies G_1G_2 \\parallel MN$. Mà $MN \\subset (ABCD) \\implies G_1G_2 \\parallel (ABCD)$."
    },
    {
      id: "quiz-11.12.12",
      badge: "Câu 12 - Thông hiểu - Vị trí tương đối của hai mặt phẳng cùng song song đường thẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ cùng song song với một đường thẳng $d$ thì:",
      options: [
        "Giao tuyến của chúng (nếu có) song song với $d$.",
        "Chúng bắt buộc phải song song với nhau.",
        "Giao tuyến của chúng bắt buộc phải cắt $d$.",
        "Giao tuyến của chúng chéo nhau với $d$."
      ],
      correctIndex: 0,
      explanation: "Hệ quả 1 của định lý giao tuyến: Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó."
    },
    {
      id: "quiz-11.12.13",
      badge: "Câu 13 - Vận dụng - Thiết diện qua điểm và song song với cạnh đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- M on SA(110, 92), N on SD(200, 92), P on CD(235, 180), Q on AB(55, 180) --> <polygon points="110,92 200,92 235,180 55,180" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="94" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="200" cy="92" r="3.5" fill="#f59e0b" /> <text x="206" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="235" cy="180" r="3.5" fill="#f59e0b" /> <text x="242" y="184" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="55" cy="180" r="3.5" fill="#f59e0b" /> <text x="38" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Lấy điểm $M$ trên cạnh $SA$ ($M$ không trùng $S, A$). Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $AB, BC$. Thiết diện của hình chóp cắt bởi $(\\alpha)$ là hình gì?",
      options: [
        "Hình bình hành.",
        "Hình thang vuông.",
        "Tam giác.",
        "Hình ngũ giác."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng $(\\alpha)$ song song với $AB$ và $BC$ nên cắt các mặt của hình chóp theo các đoạn giao tuyến lần lượt song song với $AB, BC, CD, DA$. Do đó thiết diện là hình bình hành."
    },
    {
      id: "quiz-11.12.14",
      badge: "Câu 14 - Vận dụng - Tỉ số đoạn thẳng thiết diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- M on SA(110, 92), N on SD(200, 92), P on CD(235, 180), Q on AB(55, 180) --> <polygon points="110,92 200,92 235,180 55,180" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="94" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="200" cy="92" r="3.5" fill="#f59e0b" /> <text x="206" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="235" cy="180" r="3.5" fill="#f59e0b" /> <text x="242" y="184" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="55" cy="180" r="3.5" fill="#f59e0b" /> <text x="38" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Trong bài toán trên, nếu lấy $M$ trên $SA$ sao cho $SM = 2MA$. Gọi thiết diện là hình bình hành $MNPQ$. Tỉ số diện tích của thiết diện $MNPQ$ so với diện tích hình bình hành đáy $ABCD$ bằng:",
      options: [
        "$\\dfrac{4}{9}$",
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{1}{4}$"
      ],
      correctIndex: 0,
      explanation: "Vì $SM = 2MA \\implies \\dfrac{SM}{SA} = \\dfrac{2}{3}$. Mỗi cạnh của thiết diện $MNPQ$ đồng dạng với cạnh đáy tương ứng theo tỉ số $k = \\dfrac{2}{3}$. Do đó tỉ số diện tích là $k^2 = \\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{4}{9}$."
    },
    {
      id: "quiz-11.12.15",
      badge: "Câu 15 - Vận dụng - Điểm di động trên đường thẳng song song mặt phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SC$. Mặt phẳng $(P)$ qua $M$ và song song với $BD, SA$. Mặt phẳng $(P)$ cắt $SO$ tại $I$. Tính tỉ số $\\dfrac{SI}{SO}$.",
      options: [
        "$\\dfrac{1}{2}$",
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{3}{4}$"
      ],
      correctIndex: 0,
      explanation: "Trong mặt phẳng $(SAC)$, $M$ là trung điểm $SC$, đường thẳng qua $M$ song song với $SA$ cắt $AC$ tại trung điểm $K$ của $OC$. Đường này cắt $SO$ tại $I$. Xét $\\triangle SOC$, đường qua $M$ song song với $SA$ cắt $SO$ tại trung điểm $I$ của $SO$. Vậy $\\dfrac{SI}{SO} = \\dfrac{1}{2}$."
    },
    {
      id: "quiz-11.12.16",
      badge: "Câu 16 - Vận dụng - Thiết diện tứ diện qua đường thẳng song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      question: "Cho tứ diện đều $ABCD$ cạnh $a$. Lấy điểm $M$ trên cạnh $AB$ với $AM = x$ ($0 < x < a$). Mặt phẳng $(\\alpha)$ qua $M$ song song với $BC$ và $AD$. Chu vi của thiết diện cắt bởi $(\\alpha)$ là:",
      options: [
        "$2a$",
        "$3a$",
        "$a\\sqrt{2}$",
        "$4x$"
      ],
      correctIndex: 0,
      explanation: "Thiết diện là hình chữ nhật có kích thước $x$ (song song $AD$) và $a - x$ (song song $BC$). Chu vi hình chữ nhật là $2[x + (a - x)] = 2a$ không đổi, không phụ thuộc vào vị trí của $x$."
    },
    {
      id: "quiz-11.12.17",
      badge: "Câu 17 - Vận dụng - Chứng minh đường thẳng song song giao tuyến",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      question: "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Gọi $O, O'$ lần lượt là tâm của $ABCD$ và $ABEF$. Đường thẳng $OO'$ song song với mặt phẳng nào sau đây?",
      options: [
        "$(ADF)$ và $(BCE)$",
        "$(SAB)$",
        "$(ABCD)$",
        "$(ABEF)$"
      ],
      correctIndex: 0,
      explanation: "Trong $\\triangle ACE$, $O$ là trung điểm $AC$ và $O'$ là trung điểm $AE \\implies OO'$ là đường trung bình của $\\triangle ACE \\implies OO' \\parallel CE$. Mà $CE \\subset (BCE) \\implies OO' \\parallel (BCE)$. Tương tự $OO' \\parallel DF \\subset (ADF) \\implies OO' \\parallel (ADF)$."
    },
    {
      id: "quiz-11.12.18",
      badge: "Câu 18 - Vận dụng cao - Thiết diện diện tích lớn nhất",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Cho tứ diện $ABCD$ có $AB \\perp CD$, $AB = 6, CD = 8$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$ cắt tứ diện theo thiết diện là hình chữ nhật. Diện tích lớn nhất của thiết diện đó bằng:",
      options: [
        "$12$",
        "$24$",
        "$16$",
        "$8$"
      ],
      correctIndex: 0,
      explanation: "Gọi tỉ số cắt trên cạnh là $t \\in (0; 1)$. Kích thước hai cạnh của hình chữ nhật là $x = 6t$ và $y = 8(1 - t)$. Diện tích $S = x \\cdot y = 48 t(1 - t)$. Vì $t(1 - t) \\le \\dfrac{1}{4}$ (dấu '=' khi $t = \\dfrac{1}{2}$), nên $S_{\\max} = 48 \\times \\dfrac{1}{4} = 12$."
    },
    {
      id: "quiz-11.12.19",
      badge: "Câu 19 - Vận dụng cao - Thiết diện hình thang có diện tích cho trước",
      source: "Đề phát triển ĐGNL 2025",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ ($AB \\parallel CD, AB = 2CD$). Điểm $M$ trên cạnh $SA$ sao cho $\\dfrac{SM}{SA} = \\dfrac{1}{3}$. Mặt phẳng qua $M$ song song với $(ABCD)$ cắt hình chóp theo một thiết diện có diện tích là $S_0$. Tỉ số $\\dfrac{S_0}{S_{ABCD}}$ bằng:",
      options: [
        "$\\dfrac{1}{9}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{2}{9}$",
        "$\\dfrac{4}{9}$"
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng song song với đáy cắt các mặt bên theo đa giác thiết diện đồng dạng với đáy $ABCD$ theo tỉ số $k = \\dfrac{SM}{SA} = \\dfrac{1}{3}$. Tỉ số diện tích bằng $k^2 = \\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$."
    },
    {
      id: "quiz-11.12.20",
      badge: "Câu 20 - Vận dụng cao - Giao điểm đường chéo thiết diện",
      source: "Đề thi HSG Toán 11",
      question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Mặt phẳng $(\\alpha)$ di động luôn song song với $AB$ và $SC$. Khi $(\\alpha)$ cắt hình chóp theo thiết diện là tứ giác, giao điểm hai đường chéo của thiết diện luôn chạy trên đường thẳng cố định nào?",
      options: [
        "Đường thẳng nối trung điểm của $SA$ và $BC$.",
        "Đường thẳng $SO$ với $O = AC \\cap BD$.",
        "Đường thẳng $AB$.",
        "Đường thẳng $SC$."
      ],
      correctIndex: 0,
      explanation: "Giao điểm hai đường chéo của hình thang thiết diện luôn nằm trên đoạn thẳng nối trung điểm hai cạnh cố định $SA$ và $BC$ theo tính chất tâm vị tự."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-11.12.1",
      badge: "Đúng/Sai 1 - Các mệnh đề về đường thẳng song song mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Xét tính Đúng / Sai của các khẳng định sau về quan hệ song song giữa đường thẳng và mặt phẳng:",
      subItems: [
        {
          id: "a",
          text: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì $d$ không có điểm chung với $(P)$.",
          correctAnswer: true,
          explanation: "Đúng, đây là định nghĩa của đường thẳng song song với mặt phẳng."
        },
        {
          id: "b",
          text: "Nếu $d \\parallel (P)$ thì $d$ song song với mọi đường thẳng nằm trong $(P)$.",
          correctAnswer: false,
          explanation: "Sai, trong $(P)$ chỉ có các đường thẳng song song với $d$, còn lại có vô số đường thẳng chéo nhau với $d$."
        },
        {
          id: "c",
          text: "Nếu $d$ không nằm trong $(P)$ và $d$ song song với một đường thẳng $a \\subset (P)$ thì $d \\parallel (P)$.",
          correctAnswer: true,
          explanation: "Đúng, đây là dấu hiệu nhận biết đường thẳng song song mặt phẳng (Định lý 1)."
        },
        {
          id: "d",
          text: "Nếu $d$ song song với $(P)$ thì qua $d$ có duy nhất một mặt phẳng song song với $(P)$.",
          correctAnswer: false,
          explanation: "Sai, có duy nhất một mặt phẳng song song với $(P)$ chứa $d$ chỉ khi bài toán đã xác định, nhưng câu hỏi khẳng định 'qua $d$ có duy nhất 1 mặt phẳng song song $(P)$' là đúng nếu xét quan hệ hai mặt phẳng song song, tuy nhiên trong bài này xét đường và mặt thì qua $d$ có vô số mặt phẳng cắt $(P)$."
        }
      ]
    },
    {
      id: "tf-11.12.2",
      badge: "Đúng/Sai 2 - Định lý giao tuyến",
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Cho đường thẳng $d$ song song với mặt phẳng $(P)$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Mọi mặt phẳng $(Q)$ chứa $d$ nếu cắt $(P)$ theo giao tuyến $a$ thì $a \\parallel d$.",
          correctAnswer: true,
          explanation: "Đúng, theo Định lý 2 về giao tuyến."
        },
        {
          id: "b",
          text: "Nếu mặt phẳng $(Q)$ chứa $d$ thì $(Q)$ luôn cắt $(P)$.",
          correctAnswer: false,
          explanation: "Sai, $(Q)$ có thể song song với $(P)$ (khi đó không có giao tuyến)."
        },
        {
          id: "c",
          text: "Nếu hai mặt phẳng phân biệt cùng song song với $d$ thì giao tuyến của chúng (nếu có) cũng song song với $d$.",
          correctAnswer: true,
          explanation: "Đúng, đây là Hệ quả 1 của định lý giao tuyến."
        },
        {
          id: "d",
          text: "Đường thẳng $d$ có thể cắt một đường thẳng $b$ nằm trong mặt phẳng $(P)$.",
          correctAnswer: false,
          explanation: "Sai, vì $d \\parallel (P)$ nên $d$ không có điểm chung với $(P)$, do đó không thể cắt bất kì đường nào nằm trong $(P)$."
        }
      ]
    },
    {
      id: "tf-11.12.3",
      badge: "Đúng/Sai 3 - Hình chóp đáy hình bình hành",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="92" x2="90" y2="117" stroke="#f59e0b" stroke-width="2" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="116" y="92" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="117" r="3.5" fill="#f59e0b" /> <text x="73" y="122" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $MN$ song song với mặt phẳng $(ABCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel AB$ và $AB \\subset (ABCD)$."
        },
        {
          id: "b",
          text: "Đường thẳng $MN$ song song với mặt phẳng $(SCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel AB \\parallel CD$ mà $CD \\subset (SCD)$ nên $MN \\parallel (SCD)$."
        },
        {
          id: "c",
          text: "Đường thẳng $MN$ cắt mặt phẳng $(SBC)$.",
          correctAnswer: false,
          explanation: "Sai, vì $N \\in SB \\subset (SBC)$ nên $MN$ cắt $(SBC)$ tại điểm $N$ (chứ không song song, nhưng mệnh đề phát biểu 'MN cắt (SBC)' là ĐÚNG vì cắt tại N)."
        },
        {
          id: "d",
          text: "Mặt phẳng $(MNC)$ cắt cạnh $SD$ tại trung điểm của $SD$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel CD$ nên giao tuyến của $(MNC)$ với $(SAD)$ qua $M$ song song với $AD$ cắt $SD$ tại trung điểm của $SD$."
        }
      ]
    },
    {
      id: "tf-11.12.4",
      badge: "Đúng/Sai 4 - Tứ diện và đường trung bình",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="92" y1="112" x2="142" y2="122" stroke="#f59e0b" stroke-width="2" /> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /> <text x="75" y="112" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="142" cy="122" r="3.5" fill="#f59e0b" /> <text x="148" y="122" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm của $AB, AC$. Gọi $P, Q$ là trung điểm của $BD, CD$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $MN$ song song với mặt phẳng $(BCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel BC$ mà $BC \\subset (BCD)$."
        },
        {
          id: "b",
          text: "Đường thẳng $PQ$ song song với mặt phẳng $(ABC)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $PQ \\parallel BC$ mà $BC \\subset (ABC)$."
        },
        {
          id: "c",
          text: "Bốn điểm $M, N, P, Q$ cùng thuộc một mặt phẳng.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel PQ$ (cùng song song $BC$) nên xác định một mặt phẳng $(MNPQ)$."
        },
        {
          id: "d",
          text: "Đường thẳng $MQ$ cắt mặt phẳng $(BCD)$.",
          correctAnswer: false,
          explanation: "Sai, $Q \\in (BCD)$ nên $MQ$ cắt $(BCD)$ tại điểm $Q$ (cắt tại $Q$)."
        }
      ]
    },
    {
      id: "tf-11.12.5",
      badge: "Đúng/Sai 5 - Trọng tâm tam giác trong hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="110" cy="130" r="3.5" fill="#f59e0b" /> <text x="94" y="132" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">G1</text> <circle cx="145" cy="115" r="3.5" fill="#f59e0b" /> <text x="151" y="115" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">G2</text> <line x1="110" y1="130" x2="145" y2="115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" /> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Gọi $G_1, G_2$ lần lượt là trọng tâm của tam giác $SAB$ và tam giác $SCD$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $G_1G_2$ song song với mặt phẳng đáy $(ABCD)$.",
          correctAnswer: true,
          explanation: "Đúng, gọi $M, N$ là trung điểm $AB, CD \\implies \\dfrac{SG_1}{SM} = \\dfrac{SG_2}{SN} = \\dfrac{2}{3} \\implies G_1G_2 \\parallel MN \\subset (ABCD)$."
        },
        {
          id: "b",
          text: "Đường thẳng $G_1G_2$ song song với mặt phẳng $(SBC)$.",
          correctAnswer: false,
          explanation: "Sai, $G_1G_2$ song song với $MN \\parallel BC$, mà $MN \\parallel AD$ nên $G_1G_2$ song song với cả $(SBC)$ và $(SAD)$."
        },
        {
          id: "c",
          text: "Đoạn thẳng $G_1G_2$ có độ dài bằng $\\dfrac{2}{3} AD$.",
          correctAnswer: true,
          explanation: "Đúng, $MN = AD$ và theo định lý Thales $G_1G_2 = \\dfrac{2}{3} MN = \\dfrac{2}{3} AD$."
        },
        {
          id: "d",
          text: "Đường thẳng $G_1G_2$ cắt đường thẳng $SO$ (với $O = AC \\cap BD$).",
          correctAnswer: true,
          explanation: "Đúng, vì $G_1G_2$ và $SO$ cùng nằm trong mặt phẳng $(SMN)$ và cắt nhau."
        }
      ]
    },
    {
      id: "tf-11.12.6",
      badge: "Đúng/Sai 6 - Hai đường thẳng chéo nhau và mặt phẳng song song",
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Cho hai đường thẳng chéo nhau $a$ và $b$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Có duy nhất một mặt phẳng chứa $a$ và song song với $b$.",
          correctAnswer: true,
          explanation: "Đúng, đây là nội dung của Định lý 3."
        },
        {
          id: "b",
          text: "Có duy nhất một mặt phẳng chứa cả $a$ và $b$.",
          correctAnswer: false,
          explanation: "Sai, vì $a$ và $b$ chéo nhau nên không có mặt phẳng nào chứa cả hai đường."
        },
        {
          id: "c",
          text: "Có vô số mặt phẳng song song với cả $a$ và $b$.",
          correctAnswer: true,
          explanation: "Đúng, chọn một điểm $M$ bất kì ngoài $a, b$, qua $M$ kẻ hai đường thẳng lần lượt song song với $a$ và $b$ thì xác định một mặt phẳng song song với cả $a$ và $b$."
        },
        {
          id: "d",
          text: "Mọi mặt phẳng cắt đường thẳng $a$ thì đều phải cắt đường thẳng $b$.",
          correctAnswer: false,
          explanation: "Sai, mặt phẳng chứa $a$ và song song với $b$ thì cắt $a$ nhưng không cắt $b$."
        }
      ]
    },
    {
      id: "tf-11.12.7",
      badge: "Đúng/Sai 7 - Thiết diện song song với cạnh bên",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- M on SA(110, 92), N on SD(200, 92), P on CD(235, 180), Q on AB(55, 180) --> <polygon points="110,92 200,92 235,180 55,180" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="94" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="200" cy="92" r="3.5" fill="#f59e0b" /> <text x="206" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="235" cy="180" r="3.5" fill="#f59e0b" /> <text x="242" y="184" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="55" cy="180" r="3.5" fill="#f59e0b" /> <text x="38" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $(\\alpha)$ là mặt phẳng qua điểm $M$ trên cạnh $AB$ và song song với $SA, BC$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Giao tuyến của $(\\alpha)$ với $(SAB)$ là đường thẳng qua $M$ song song với $SA$.",
          correctAnswer: true,
          explanation: "Đúng, vì $(\\alpha) \\parallel SA$ mà $SA \\subset (SAB)$ nên giao tuyến qua $M$ song song $SA$."
        },
        {
          id: "b",
          text: "Giao tuyến của $(\\alpha)$ với $(ABCD)$ là đường thẳng qua $M$ song song với $BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì $(\\alpha) \\parallel BC$ và $M \\in (ABCD)$."
        },
        {
          id: "c",
          text: "Thiết diện của hình chóp cắt bởi $(\\alpha)$ là một hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, các cặp cạnh đối diện lần lượt song song với $SA$ và $BC$."
        },
        {
          id: "d",
          text: "Thiết diện luôn là hình vuông nếu đáy $ABCD$ là hình vuông.",
          correctAnswer: false,
          explanation: "Sai, thiết diện chỉ là hình bình hành hoặc hình chữ nhật (nếu $SA \\perp BC$), không nhất thiết là hình vuông."
        }
      ]
    },
    {
      id: "tf-11.12.8",
      badge: "Đúng/Sai 8 - Quan hệ song song và mặt phẳng phụ",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      prompt: "Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Điểm $M$ thuộc $(P)$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Qua $M$ có duy nhất một đường thẳng song song với $a$.",
          correctAnswer: true,
          explanation: "Đúng, theo tiên đề Euclid trong không gian."
        },
        {
          id: "b",
          text: "Đường thẳng qua $M$ song song với $a$ bắt buộc phải nằm trong mặt phẳng $(P)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $a \\parallel (P)$ nên đường thẳng qua $M$ song song với $a$ phải thuộc $(P)$."
        },
        {
          id: "c",
          text: "Mọi mặt phẳng đi qua $M$ đều cắt đường thẳng $a$.",
          correctAnswer: false,
          explanation: "Sai, mặt phẳng $(P)$ đi qua $M$ nhưng song song với $a$."
        },
        {
          id: "d",
          text: "Khoảng cách từ mọi điểm trên đường thẳng $a$ đến mặt phẳng $(P)$ là bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, vì đường thẳng song song với mặt phẳng nên khoảng cách từ các điểm trên đường đến mặt phẳng là hằng số."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-11.12.1",
      badge: "TLN 1 - Số điểm chung của đường thẳng song song mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Một đường thẳng $d$ song song với mặt phẳng $(P)$. Hỏi đường thẳng $d$ và mặt phẳng $(P)$ có bao nhiêu điểm chung?",
      correctAnswer: "0",
      acceptableAnswers: ["0", "không", "không có"],
      explanation: "Đường thẳng song song với mặt phẳng thì không có điểm chung nào."
    },
    {
      id: "sa-11.12.2",
      badge: "TLN 2 - Số mặt của hình chóp song song với cạnh đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Cạnh đáy $AB$ song song với bao nhiêu mặt phẳng trong số các mặt bên và mặt đáy của hình chóp?",
      correctAnswer: "1",
      acceptableAnswers: ["1"],
      explanation: "Cạnh $AB$ nằm trong đáy $(ABCD)$ và mặt bên $(SAB)$, cắt các mặt bên $(SAD)$ tại $A$ và $(SBC)$ tại $B$. $AB$ chỉ song song với duy nhất 1 mặt phẳng là $(SCD)$."
    },
    {
      id: "sa-11.12.3",
      badge: "TLN 3 - Độ dài đoạn trung bình song song mặt đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="110" y1="92" x2="90" y2="117" stroke="#f59e0b" stroke-width="2" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="116" y="92" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="90" cy="117" r="3.5" fill="#f59e0b" /> <text x="73" y="122" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$ với $AB = 10$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Tính độ dài đoạn thẳng $MN$.",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "$MN$ là đường trung bình của tam giác $SAB \\implies MN = \\dfrac{AB}{2} = \\dfrac{10}{2} = 5$."
    },
    {
      id: "sa-11.12.4",
      badge: "TLN 4 - Tỉ số trọng tâm song song mặt phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="110" cy="130" r="3.5" fill="#f59e0b" /> <text x="94" y="132" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">G1</text> <circle cx="145" cy="115" r="3.5" fill="#f59e0b" /> <text x="151" y="115" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">G2</text> <line x1="110" y1="130" x2="145" y2="115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" /> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$ với $AD = 12$. Gọi $G_1, G_2$ lần lượt là trọng tâm của tam giác $SAB$ và tam giác $SAD$. Tính độ dài đoạn thẳng $G_1G_2$.",
      correctAnswer: "8",
      acceptableAnswers: ["8"],
      explanation: "Gọi $M, N$ là trung điểm $AB, AD \\implies MN = \\dfrac{BD}{2}$ hoặc xét theo $G_1, G_2$: $\\dfrac{SG_1}{SM} = \\dfrac{SG_2}{SN} = \\dfrac{2}{3} \\implies G_1G_2 = \\dfrac{2}{3} MN$. Trong $\\triangle ABD$, $MN$ nối trung điểm $AB$ và $AD \\implies MN = \\dfrac{BD}{2}$... Nếu xét $G_1, G_2$ là trọng tâm của $SAB$ và $SCD$ thì $G_1G_2 = \\dfrac{2}{3} AD = \\dfrac{2}{3} \\times 12 = 8$."
    },
    {
      id: "sa-11.12.5",
      badge: "TLN 5 - Chu vi thiết diện hình chữ nhật",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng 7. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$ cắt tứ diện theo một thiết diện hình chữ nhật. Tính chu vi của thiết diện đó.",
      correctAnswer: "14",
      acceptableAnswers: ["14"],
      explanation: "Kích thước của hình chữ nhật thiết diện là $x$ và $7 - x$. Chu vi là $2[x + (7 - x)] = 2 \\times 7 = 14$."
    },
    {
      id: "sa-11.12.6",
      badge: "TLN 6 - Số mặt phẳng qua đường thẳng song song mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Có bao nhiêu mặt phẳng đi qua $a$ và song song với mặt phẳng $(P)$?",
      correctAnswer: "1",
      acceptableAnswers: ["1"],
      explanation: "Có duy nhất 1 mặt phẳng chứa đường thẳng $a$ và song song với mặt phẳng $(P)$."
    },
    {
      id: "sa-11.12.7",
      badge: "TLN 7 - Tỉ số diện tích thiết diện song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <!-- M on SA(110, 92), N on SD(200, 92), P on CD(235, 180), Q on AB(55, 180) --> <polygon points="110,92 200,92 235,180 55,180" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.8" /> <circle cx="110" cy="92" r="3.5" fill="#f59e0b" /> <text x="94" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">M</text> <circle cx="200" cy="92" r="3.5" fill="#f59e0b" /> <text x="206" y="92" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">N</text> <circle cx="235" cy="180" r="3.5" fill="#f59e0b" /> <text x="242" y="184" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">P</text> <circle cx="55" cy="180" r="3.5" fill="#f59e0b" /> <text x="38" y="180" fill="#f8fafc" font-size="12" font-weight="bold" font-family="sans-serif">Q</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng $(\\alpha)$ song song với đáy cắt cạnh bên $SA$ tại $M$ sao cho $SM = \\dfrac{1}{2} SA$. Tỉ số diện tích của thiết diện so với diện tích đáy bằng bao nhiêu (nhập phân số tối giản a/b)?",
      correctAnswer: "1/4",
      acceptableAnswers: ["1/4", "0.25", "0,25"],
      explanation: "Tỉ số đồng dạng $k = \\dfrac{SM}{SA} = \\dfrac{1}{2} \\implies$ tỉ số diện tích là $k^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$."
    },
    {
      id: "sa-11.12.8",
      badge: "TLN 8 - Tỉ số đoạn thẳng giao điểm",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      prompt: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Gọi $M$ là trung điểm $SC$. Mặt phẳng qua $M$ song song với $SA$ cắt $SO$ tại $I$. Tính tỉ số $\\dfrac{SI}{SO}$ (nhập phân số tối giản a/b).",
      correctAnswer: "1/2",
      acceptableAnswers: ["1/2", "0.5", "0,5"],
      explanation: "Đường thẳng qua $M$ song song với $SA$ là đường trung bình trong $\\triangle SAC$ của tam giác con nên cắt trung tuyến $SO$ tại trung điểm $I$. Tỉ số $\\dfrac{SI}{SO} = \\dfrac{1}{2}$."
    },
    {
      id: "sa-11.12.9",
      badge: "TLN 9 - Chu vi thiết diện hình thoi",
      source: "Tài liệu GDPT 2018 Toán 11 C4B3",
      prompt: "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng 8. Mặt phẳng song song với mặt đáy cắt các cạnh bên tại các trung điểm tạo thành thiết diện hình vuông. Tính chu vi của thiết diện đó.",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "Cạnh của thiết diện là đường trung bình nên bằng $\\dfrac{8}{2} = 4$. Chu vi là $4 \\times 4 = 16$."
    },
    {
      id: "sa-11.12.10",
      badge: "TLN 10 - Số đường thẳng trong mặt phẳng song song với d",
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Cho đường thẳng $d$ song song với mặt phẳng $(P)$. Trong mặt phẳng $(P)$ có bao nhiêu đường thẳng song song với $d$?",
      correctAnswer: "vô số",
      acceptableAnswers: ["vô số", "vo so", "Vô số", "infinite"],
      explanation: "Trong mặt phẳng $(P)$ có một đường thẳng $a \\parallel d$, và mọi đường thẳng trong $(P)$ song song với $a$ đều song song với $d$, do đó có vô số đường thẳng."
    }
  ]
};

export const GRADE_11_LESSON_12_AI_PRACTICE = {
  quizQuestions: [
    {
      id: "ai-11.12.1",
      badge: "Luyện thêm 1 - Điều kiện song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì:",
      options: [
        "$d$ và $(P)$ không có điểm chung nào",
        "$d$ có duy nhất 1 điểm chung với $(P)$",
        "$d$ nằm trong $(P)$",
        "$d$ vuông góc với $(P)$"
      ],
      correctIndex: 0,
      explanation: "Định nghĩa đường thẳng song song với mặt phẳng là không có bất kì điểm chung nào."
    },
    {
      id: "ai-11.12.2",
      badge: "Luyện thêm 2 - Đường trung bình song song mặt đáy",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình chóp $S.ABC$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Đường thẳng $MN$ song song với mặt phẳng nào sau đây?",
      options: [
        "$(ABC)$",
        "$(SAB)$",
        "$(SBC)$",
        "$(SAC)$"
      ],
      correctIndex: 0,
      explanation: "Vì $MN \\parallel AB$ và $AB \\subset (ABC)$ nên $MN \\parallel (ABC)$."
    },
    {
      id: "ai-11.12.3",
      badge: "Luyện thêm 3 - Cạnh đáy hình bình hành",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Cạnh $CD$ song song với mặt phẳng nào?",
      options: [
        "$(SAB)$",
        "$(SBC)$",
        "$(SAD)$",
        "$(SAC)$"
      ],
      correctIndex: 0,
      explanation: "$CD \\parallel AB$ mà $AB \\subset (SAB)$ và $CD \\not\\subset (SAB) \\implies CD \\parallel (SAB)$."
    },
    {
      id: "ai-11.12.4",
      badge: "Luyện thêm 4 - Số vị trí tương đối",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Trong không gian, có bao nhiêu vị trí tương đối giữa một đường thẳng và một mặt phẳng?",
      options: [
        "$3$ vị trí (song song, cắt nhau, nằm trong)",
        "$2$ vị trí (song song, cắt nhau)",
        "$4$ vị trí",
        "$1$ vị trí"
      ],
      correctIndex: 0,
      explanation: "Có đúng 3 vị trí tương đối: song song (0 điểm chung), cắt nhau (1 điểm chung), nằm trong (vô số điểm chung)."
    },
    {
      id: "ai-11.12.5",
      badge: "Luyện thêm 5 - Đường thẳng chéo nhau với đường trong mặt",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho $d \\parallel (P)$ và đường thẳng $a \\subset (P)$. Khi đó $d$ và $a$:",
      options: [
        "Hoặc song song hoặc chéo nhau",
        "Luôn luôn song song",
        "Luôn luôn chéo nhau",
        "Có thể cắt nhau"
      ],
      correctIndex: 0,
      explanation: "Vì $d$ không có điểm chung với $(P)$ nên $d$ không thể cắt $a$. Do đó $d$ và $a$ chỉ có thể song song hoặc chéo nhau."
    },
    {
      id: "ai-11.12.6",
      badge: "Luyện thêm 6 - Đường trung bình tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho tứ diện $ABCD$. Gọi $P, Q$ là trung điểm của $AD, BD$. Đường thẳng $PQ$ song song với mặt phẳng nào?",
      options: [
        "$(ABC)$",
        "$(ABD)$",
        "$(ACD)$",
        "$(BCD)$"
      ],
      correctIndex: 0,
      explanation: "Trong $\\triangle ABD$, $PQ$ là đường trung bình nên $PQ \\parallel AB$. Do đó $PQ \\parallel (ABC)$."
    },
    {
      id: "ai-11.12.7",
      badge: "Luyện thêm 7 - Giao tuyến của mặt phẳng chứa đường song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Nếu $a \\parallel (P)$, mặt phẳng $(Q)$ chứa $a$ cắt $(P)$ theo giao tuyến $b$ thì:",
      options: [
        "$b \\parallel a$",
        "$b$ cắt $a$",
        "$b$ chéo $a$",
        "$b \\perp a$"
      ],
      correctIndex: 0,
      explanation: "Theo định lý 2, giao tuyến của mặt phẳng chứa đường thẳng song song với mặt phẳng kia thì song song với đường thẳng đó."
    },
    {
      id: "ai-11.12.8",
      badge: "Luyện thêm 8 - Thiết diện qua trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Mặt phẳng đi qua trung điểm 4 cạnh bên cắt hình chóp theo một thiết diện là:",
      options: [
        "Hình bình hành",
        "Tam giác",
        "Ngũ giác",
        "Hình thang vuông"
      ],
      correctIndex: 0,
      explanation: "Các đoạn giao tuyến là các đường trung bình của các mặt bên nên lần lượt song song với các cạnh đáy, do đó thiết diện là hình bình hành."
    },
    {
      id: "ai-11.12.9",
      badge: "Luyện thêm 9 - Tỉ số diện tích thiết diện đồng dạng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Mặt phẳng song song với đáy của hình chóp cắt các cạnh bên theo tỉ số $k = \\dfrac{1}{3}$ tính từ đỉnh. Tỉ số diện tích thiết diện so với đáy là:",
      options: [
        "$\\dfrac{1}{9}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{1}{6}$",
        "$\\dfrac{2}{3}$"
      ],
      correctIndex: 0,
      explanation: "Tỉ số diện tích bằng bình phương tỉ số đồng dạng: $k^2 = \\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$."
    },
    {
      id: "ai-11.12.10",
      badge: "Luyện thêm 10 - Quan hệ bắc cầu",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho đường thẳng $a \\parallel b$ và $b \\subset (P)$ ($a \\not\\subset (P)$). Khẳng định nào ĐÚNG?",
      options: [
        "$a \\parallel (P)$",
        "$a$ cắt $(P)$",
        "$a \\subset (P)$",
        "$a \\perp (P)$"
      ],
      correctIndex: 0,
      explanation: "Theo định lý nhận biết, $a \\parallel b$ và $b \\subset (P) \\implies a \\parallel (P)$."
    },
    {
      id: "ai-11.12.11",
      badge: "Luyện thêm 11 - Vị trí của đường thẳng trong hình lăng trụ",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Cạnh bên $AA'$ song song với mặt phẳng nào?",
      options: [
        "$(BCC'B')$",
        "$(ABB'A')$",
        "$(ACC'A')$",
        "$(ABC)$"
      ],
      correctIndex: 0,
      explanation: "$AA' \\parallel BB'$ mà $BB' \\subset (BCC'B') \\implies AA' \\parallel (BCC'B')$."
    },
    {
      id: "ai-11.12.12",
      badge: "Luyện thêm 12 - Mặt phẳng song song đáy",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình chóp $S.ABC$. Lấy điểm $M$ trên $SA$ sao cho $SM = 2MA$. Mặt phẳng qua $M$ song song với $(ABC)$ cắt $SB, SC$ tại $N, P$. Tỉ số $\\dfrac{NP}{BC}$ bằng:",
      options: [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{1}{2}$",
        "$1$"
      ],
      correctIndex: 0,
      explanation: "$\\dfrac{SM}{SA} = \\dfrac{2}{3} \\implies \\dfrac{NP}{BC} = \\dfrac{2}{3}$ theo định lý Thales."
    },
    {
      id: "ai-11.12.13",
      badge: "Luyện thêm 13 - Thiết diện tứ diện qua đường thẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho tứ diện $ABCD$. Mặt phẳng song song với $BC$ cắt 4 mặt của tứ diện theo thiết diện là hình gì?",
      options: [
        "Hình thang hoặc tam giác",
        "Chỉ có thể là tam giác",
        "Chỉ có thể là hình chữ nhật",
        "Hình ngũ giác"
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng song song với $BC$ có thể cắt 3 mặt tạo thành tam giác hoặc cắt 4 mặt tạo thành hình thang có hai đáy song song với $BC$."
    },
    {
      id: "ai-11.12.14",
      badge: "Luyện thêm 14 - Số mặt phẳng chứa 1 đường thẳng song song mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho đường thẳng $d \\parallel (P)$. Có bao nhiêu mặt phẳng chứa $d$ và cắt $(P)$?",
      options: [
        "Vô số mặt phẳng",
        "Duy nhất 1 mặt phẳng",
        "Không có mặt phẳng nào",
        "Có đúng 2 mặt phẳng"
      ],
      correctIndex: 0,
      explanation: "Có vô số mặt phẳng chứa $d$ và cắt $(P)$ theo các giao tuyến đôi một song song với $d$."
    },
    {
      id: "ai-11.12.15",
      badge: "Luyện thêm 15 - Chu vi thiết diện tứ diện đều",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho tứ diện đều cạnh 10. Mặt phẳng song song với hai cạnh đối diện cắt tứ diện theo thiết diện có chu vi bằng:",
      options: [
        "$20$",
        "$10$",
        "$30$",
        "$40$"
      ],
      correctIndex: 0,
      explanation: "Chu vi thiết diện hình chữ nhật là $2[x + (10 - x)] = 20$."
    },
    {
      id: "ai-11.12.16",
      badge: "Luyện thêm 16 - Điểm chung của đường thẳng cắt mặt phẳng",
      isAiGenerated: true,
      source: "SGK Toán 11 KNTT Bài 12",
      question: "Nếu đường thẳng $d$ không song song với $(P)$ và không nằm trong $(P)$ thì số điểm chung của $d$ và $(P)$ là:",
      options: [
        "Đúng $1$ điểm",
        "$0$ điểm",
        "$2$ điểm",
        "Vô số điểm"
      ],
      correctIndex: 0,
      explanation: "Khi đó $d$ cắt $(P)$ tại đúng một điểm duy nhất."
    },
    {
      id: "ai-11.12.17",
      badge: "Luyện thêm 17 - Đoạn nối trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $I, J$ là trung điểm của $AB, CD$. Đường thẳng $IJ$ song song với mặt phẳng nào?",
      options: [
        "$(SAD)$ và $(SBC)$",
        "$(SAB)$",
        "$(SCD)$",
        "$(SAC)$"
      ],
      correctIndex: 0,
      explanation: "$IJ$ là đường trung bình hình bình hành $ABCD \\implies IJ \\parallel AD \\parallel BC \\implies IJ \\parallel (SAD)$ và $IJ \\parallel (SBC)$."
    },
    {
      id: "ai-11.12.18",
      badge: "Luyện thêm 18 - Thiết diện qua trọng tâm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho hình chóp $S.ABC$. Gọi $G$ là trọng tâm tam giác $ABC$. Mặt phẳng qua $G$ song song với $(SBC)$ cắt $AB, AC$ lần lượt tại $M, N$. Tỉ số $\\dfrac{MN}{BC}$ bằng:",
      options: [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{1}{2}$",
        "$1$"
      ],
      correctIndex: 0,
      explanation: "Đường thẳng qua $G$ song song với $BC$ chia các cạnh theo tỉ số $\\dfrac{AM}{AB} = \\dfrac{2}{3} \\implies \\dfrac{MN}{BC} = \\dfrac{2}{3}$."
    },
    {
      id: "ai-11.12.19",
      badge: "Luyện thêm 19 - Đường thẳng đi qua đỉnh song song đáy",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Đường thẳng $d$ đi qua đỉnh $S$ của hình chóp $S.ABCD$ và song song với cạnh đáy $AB$. Khi đó $d$:",
      options: [
        "Song song với $(ABCD)$",
        "Nằm trong $(ABCD)$",
        "Cắt $(ABCD)$ tại $S$",
        "Vuông góc với $(ABCD)$"
      ],
      correctIndex: 0,
      explanation: "$d \\parallel AB \\subset (ABCD)$ và $d \\not\\subset (ABCD)$ (vì $S \\notin (ABCD)$) $\\implies d \\parallel (ABCD)$."
    },
    {
      id: "ai-11.12.20",
      badge: "Luyện thêm 20 - Số giao tuyến song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      question: "Cho 3 mặt phẳng phân biệt cùng song song với một đường thẳng $d$. Nếu chúng cắt nhau từng đôi một thì 3 giao tuyến đó:",
      options: [
        "Đôi một song song với nhau và song song với $d$",
        "Đồng quy tại một điểm",
        "Trùng nhau",
        "Chéo nhau"
      ],
      correctIndex: 0,
      explanation: "Theo hệ quả định lý giao tuyến, các giao tuyến đều song song với $d$ nên đôi một song song với nhau."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-11.12.1",
      badge: "Đúng/Sai LT 1 - Khái niệm song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Xét tính Đúng / Sai của các phát biểu sau về đường thẳng và mặt phẳng:",
      subItems: [
        {
          id: "a",
          text: "Nếu $d \\parallel (P)$ thì $d$ không bao giờ cắt $(P)$.",
          correctAnswer: true,
          explanation: "Đúng, đường thẳng song song mặt phẳng thì không có điểm chung."
        },
        {
          id: "b",
          text: "Nếu $d$ không cắt $(P)$ thì $d$ luôn song song với $(P)$.",
          correctAnswer: false,
          explanation: "Sai, $d$ có thể nằm trong $(P)$."
        },
        {
          id: "c",
          text: "Nếu $d \\parallel a$ và $a \\subset (P)$ thì $d \\parallel (P)$ (với $d \\not\\subset (P)$).",
          correctAnswer: true,
          explanation: "Đúng, đây là định lý nhận biết."
        },
        {
          id: "d",
          text: "Hai đường thẳng phân biệt cùng song song với một mặt phẳng thì luôn song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, chúng có thể cắt nhau hoặc chéo nhau."
        }
      ]
    },
    {
      id: "ai-tf-11.12.2",
      badge: "Đúng/Sai LT 2 - Hình chóp đáy hình bình hành",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp $S.ABCD$ đáy hình bình hành $ABCD$. Gọi $M$ là trung điểm $SC$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $AB$ song song với mặt phẳng $(SCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AB \\parallel CD$ mà $CD \\subset (SCD)$."
        },
        {
          id: "b",
          text: "Đường thẳng $AD$ song song với mặt phẳng $(SBC)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AD \\parallel BC$ mà $BC \\subset (SBC)$."
        },
        {
          id: "c",
          text: "Gọi $O = AC \\cap BD$, khi đó $OM \\parallel (SAD)$ và $OM \\parallel (SAB)$.",
          correctAnswer: true,
          explanation: "Đúng, trong $\\triangle SAC$, $OM$ là đường trung bình nên $OM \\parallel SA \\implies OM \\parallel (SAD)$ và $OM \\parallel (SAB)$."
        },
        {
          id: "d",
          text: "Đường thẳng $SC$ song song với mặt phẳng $(SAB)$.",
          correctAnswer: false,
          explanation: "Sai, vì $S \\in SC$ và $S \\in (SAB)$ nên $SC$ cắt $(SAB)$ tại $S$."
        }
      ]
    },
    {
      id: "ai-tf-11.12.3",
      badge: "Đúng/Sai LT 3 - Tứ diện và trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm $AB, CD$. Lấy điểm $P$ trên $AC$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Nếu $P$ là trung điểm $AC$ thì $MP \\parallel (BCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MP$ là đường trung bình của tam giác $ABC \\implies MP \\parallel BC \\implies MP \\parallel (BCD)$."
        },
        {
          id: "b",
          text: "Nếu $P$ là trung điểm $AC$ thì $NP \\parallel (ABD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $NP$ là đường trung bình của tam giác $ACD \\implies NP \\parallel AD \\implies NP \\parallel (ABD)$."
        },
        {
          id: "c",
          text: "Đường thẳng $MN$ song song với mặt phẳng $(BCD)$.",
          correctAnswer: false,
          explanation: "Sai, vì $N \\in CD \\subset (BCD)$ nên $MN$ cắt $(BCD)$ tại $N$."
        },
        {
          id: "d",
          text: "Mặt phẳng $(MNP)$ cắt mặt phẳng $(BCD)$ theo giao tuyến đi qua $N$.",
          correctAnswer: true,
          explanation: "Đúng, vì $N$ là điểm chung của hai mặt phẳng."
        }
      ]
    },
    {
      id: "ai-tf-11.12.4",
      badge: "Đúng/Sai LT 4 - Định lý giao tuyến",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho đường thẳng $d$ song song với mặt phẳng $(P)$. Mặt phẳng $(Q)$ cắt $(P)$ theo giao tuyến $a$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Nếu $(Q)$ chứa $d$ thì $a \\parallel d$.",
          correctAnswer: true,
          explanation: "Đúng, theo Định lý 2."
        },
        {
          id: "b",
          text: "Nếu $a \\parallel d$ thì $(Q)$ phải chứa $d$.",
          correctAnswer: false,
          explanation: "Sai, $(Q)$ có thể không chứa $d$ mà chỉ song song với $d$."
        },
        {
          id: "c",
          text: "Nếu $(Q) \\parallel d$ thì $a \\parallel d$.",
          correctAnswer: true,
          explanation: "Đúng, theo hệ quả hai mặt phẳng cùng song song với một đường thẳng."
        },
        {
          id: "d",
          text: "Giao tuyến $a$ có thể cắt đường thẳng $d$.",
          correctAnswer: false,
          explanation: "Sai, $a \\subset (P)$ mà $d \\parallel (P)$ nên $a$ không thể cắt $d$."
        }
      ]
    },
    {
      id: "ai-tf-11.12.5",
      badge: "Đúng/Sai LT 5 - Thiết diện hình chóp song song đáy",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Mặt phẳng $(\\alpha)$ song song với đáy cắt các cạnh bên $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Tứ giác $A'B'C'D'$ luôn là một hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, các cạnh đối diện song song với các cạnh đáy tương ứng."
        },
        {
          id: "b",
          text: "Đường thẳng $A'B'$ song song với mặt phẳng $(SCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $A'B' \\parallel CD \\subset (SCD)$."
        },
        {
          id: "c",
          text: "Đường thẳng $B'C'$ song song với mặt phẳng $(SAD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $B'C' \\parallel AD \\subset (SAD)$."
        },
        {
          id: "d",
          text: "Nếu $A'$ là trung điểm $SA$ thì chu vi $A'B'C'D'$ bằng một nửa chu vi $ABCD$.",
          correctAnswer: true,
          explanation: "Đúng, mỗi cạnh giảm đi một nửa nên chu vi giảm đi một nửa."
        }
      ]
    },
    {
      id: "ai-tf-11.12.6",
      badge: "Đúng/Sai LT 6 - Vị trí của hai mặt phẳng",
      isAiGenerated: true,
      source: "SGK Toán 11 KNTT Bài 12",
      prompt: "Xét tính Đúng / Sai của các mệnh đề sau trong không gian:",
      subItems: [
        {
          id: "a",
          text: "Hai mặt phẳng cùng song song với một đường thẳng thì song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, hai mặt phẳng có thể cắt nhau theo giao tuyến song song với đường thẳng đó."
        },
        {
          id: "b",
          text: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì có duy nhất một mặt phẳng đi qua $d$ và song song với $(P)$.",
          correctAnswer: true,
          explanation: "Đúng, qua $d$ kẻ các đường song song với các đường trong $(P)$ thì xác định duy nhất 1 mặt phẳng song song với $(P)$."
        },
        {
          id: "c",
          text: "Một đường thẳng song song với một trong hai mặt phẳng song song thì song song với mặt phẳng còn lại.",
          correctAnswer: false,
          explanation: "Sai, đường thẳng đó có thể nằm trong mặt phẳng còn lại."
        },
        {
          id: "d",
          text: "Nếu $d \\parallel (P)$ thì hình chiếu song song của $d$ lên $(P)$ là một đường thẳng song song với $d$.",
          correctAnswer: true,
          explanation: "Đúng, theo tính chất của phép chiếu song song."
        }
      ]
    },
    {
      id: "ai-tf-11.12.7",
      badge: "Đúng/Sai LT 7 - Trọng tâm tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho tứ diện $ABCD$. Gọi $G_1, G_2$ lần lượt là trọng tâm tam giác $ABC$ và $ABD$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $G_1G_2$ song song với đường thẳng $CD$.",
          correctAnswer: true,
          explanation: "Đúng, gọi $M$ là trung điểm $AB$, trong tam giác $MCD$ có $\\dfrac{MG_1}{MC} = \\dfrac{MG_2}{MD} = \\dfrac{1}{3} \\implies G_1G_2 \\parallel CD$."
        },
        {
          id: "b",
          text: "Đường thẳng $G_1G_2$ song song với mặt phẳng $(ACD)$.",
          correctAnswer: false,
          explanation: "Sai, $G_1G_2 \\parallel CD \\subset (ACD)$ và $G_1 \\notin (ACD) \\implies G_1G_2 \\parallel (ACD)$ (Đúng, vì $G_1G_2$ song song với $CD$ nằm trong mặt phẳng đó)."
        },
        {
          id: "c",
          text: "Đường thẳng $G_1G_2$ song song với mặt phẳng $(BCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $G_1G_2 \\parallel CD \\subset (BCD)$."
        },
        {
          id: "d",
          text: "Độ dài đoạn $G_1G_2$ bằng $\\dfrac{1}{3} CD$.",
          correctAnswer: true,
          explanation: "Đúng, theo định lý Thales trong $\\triangle MCD$: $\\dfrac{G_1G_2}{CD} = \\dfrac{1}{3}$."
        }
      ]
    },
    {
      id: "ai-tf-11.12.8",
      badge: "Đúng/Sai LT 8 - Đoạn thẳng song song trong hình chóp hình thang",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp $S.ABCD$ đáy hình thang $ABCD$ ($AB \\parallel CD, AB = 2CD$). Gọi $M$ là trung điểm $SA$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $CD$ song song với mặt phẳng $(SAB)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $CD \\parallel AB$ và $AB \\subset (SAB)$."
        },
        {
          id: "b",
          text: "Mặt phẳng qua $M$ song song với $AB$ và $CD$ cắt $SB$ tại trung điểm của $SB$.",
          correctAnswer: true,
          explanation: "Đúng, đoạn giao tuyến là đường trung bình của tam giác $SAB$."
        },
        {
          id: "c",
          text: "Đường thẳng $AD$ song song với mặt phẳng $(SBC)$.",
          correctAnswer: false,
          explanation: "Sai, vì $AD$ và $BC$ cắt nhau nên $AD$ không song song với $(SBC)$."
        },
        {
          id: "d",
          text: "Đường thẳng $SC$ cắt mặt phẳng $(SAB)$ tại đỉnh $S$.",
          correctAnswer: true,
          explanation: "Đúng, điểm chung duy nhất là $S$."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-11.12.1",
      badge: "Luyện thêm TLN 1 - Số điểm chung",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì số điểm chung của $d$ và $(P)$ là bao nhiêu?",
      correctAnswer: "0",
      acceptableAnswers: ["0", "không"],
      explanation: "Không có điểm chung nào."
    },
    {
      id: "ai-sa-11.12.2",
      badge: "Luyện thêm TLN 2 - Độ dài đường trung bình",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp $S.ABC$. Gọi $M, N$ là trung điểm $SA, SB$. Biết $AB = 14$. Tính độ dài đoạn thẳng $MN$.",
      correctAnswer: "7",
      acceptableAnswers: ["7"],
      explanation: "$MN = \\dfrac{AB}{2} = \\dfrac{14}{2} = 7$."
    },
    {
      id: "ai-sa-11.12.3",
      badge: "Luyện thêm TLN 3 - Chu vi thiết diện tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho tứ diện đều cạnh 8. Chu vi thiết diện hình chữ nhật song song với 2 cạnh đối diện bằng bao nhiêu?",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "Chu vi là $2[x + (8 - x)] = 16$."
    },
    {
      id: "ai-sa-11.12.4",
      badge: "Luyện thêm TLN 4 - Tỉ số trọng tâm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho tứ diện $ABCD$. Gọi $G_1, G_2$ lần lượt là trọng tâm tam giác $ABC$ và $ABD$. Biết $CD = 15$. Tính độ dài đoạn thẳng $G_1G_2$.",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "$G_1G_2 = \\dfrac{1}{3} CD = \\dfrac{15}{3} = 5$."
    },
    {
      id: "ai-sa-11.12.5",
      badge: "Luyện thêm TLN 5 - Tỉ số diện tích thiết diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Mặt phẳng song song với đáy hình chóp cắt các cạnh bên tại trung điểm. Tỉ số diện tích thiết diện so với đáy bằng bao nhiêu (nhập phân số tối giản a/b)?",
      correctAnswer: "1/4",
      acceptableAnswers: ["1/4", "0.25", "0,25"],
      explanation: "Tỉ số diện tích là $k^2 = (1/2)^2 = 1/4$."
    },
    {
      id: "ai-sa-11.12.6",
      badge: "Luyện thêm TLN 6 - Số mặt bên hình chóp lục giác song song với cạnh đáy đối diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp lục giác đều $S.ABCDEF$ có đáy là lục giác đều. Có bao nhiêu mặt bên của hình chóp song song với cạnh đáy $AB$?",
      correctAnswer: "1",
      acceptableAnswers: ["1"],
      explanation: "Trong lục giác đều, chỉ có duy nhất cạnh $DE$ song song với $AB$. Do đó chỉ có duy nhất 1 mặt bên $(SDE)$ song song với $AB$."
    },
    {
      id: "ai-sa-11.12.7",
      badge: "Luyện thêm TLN 7 - Chu vi thiết diện hình thoi",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp tứ giác đều có cạnh đáy bằng 12. Thiết diện song song với mặt đáy cắt các cạnh bên tại trung điểm có chu vi bằng bao nhiêu?",
      correctAnswer: "24",
      acceptableAnswers: ["24"],
      explanation: "Mỗi cạnh của thiết diện bằng một nửa cạnh đáy là 6. Chu vi hình vuông là $4 \\times 6 = 24$."
    },
    {
      id: "ai-sa-11.12.8",
      badge: "Luyện thêm TLN 8 - Tỉ số Thales tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp $S.ABC$. Lấy điểm $M$ trên $SA$ sao cho $SM = 3MA$. Mặt phẳng qua $M$ song song với $(ABC)$ cắt $SC$ tại $P$. Tính tỉ số $\\dfrac{SP}{SC}$ (nhập phân số tối giản a/b).",
      correctAnswer: "3/4",
      acceptableAnswers: ["3/4", "0.75", "0,75"],
      explanation: "$SM = 3MA \\implies \\dfrac{SM}{SA} = \\dfrac{3}{4} \\implies \\dfrac{SP}{SC} = \\dfrac{3}{4}$."
    },
    {
      id: "ai-sa-11.12.9",
      badge: "Luyện thêm TLN 9 - Số mặt phẳng chứa đường thẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa $a$ và song song với $b$?",
      correctAnswer: "1",
      acceptableAnswers: ["1"],
      explanation: "Có duy nhất 1 mặt phẳng."
    },
    {
      id: "ai-sa-11.12.10",
      badge: "Luyện thêm TLN 10 - Tỉ số diện tích tam giác thiết diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B3",
      prompt: "Cho hình chóp tam giác $S.ABC$. Mặt phẳng $(\\alpha)$ song song với $(ABC)$ cắt các cạnh $SA, SB, SC$ tại $A', B', C'$ sao cho $\\dfrac{SA'}{SA} = \\dfrac{2}{3}$. Tính tỉ số diện tích $\\dfrac{S_{\\triangle A'B'C'}}{S_{\\triangle ABC}}$ (dưới dạng phân số tối giản a/b).",
      correctAnswer: "4/9",
      acceptableAnswers: ["4/9", "0.44", "0,44"],
      explanation: "Tỉ số diện tích là $k^2 = (2/3)^2 = 4/9$."
    }
  ]
};
