import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export const GRADE_11_LESSON_10: DetailedLessonData = {
  id: "t11-b10-duong-thang-mat-phang",
  lessonNumber: 10,
  title: "Bài 10: Đường thẳng và mặt phẳng trong không gian",
  bookChapter: "Chương IV: Quan hệ song song trong không gian (SGK Toán 11 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Nguyên lý kiềng ba chân (tripod), giàn không gian kiến trúc và cách xác định mặt phẳng",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, tại sao các nhiếp ảnh gia hay họa sĩ luôn dùng giá đỡ ba chân (tripod) mà không dùng giá bốn chân như bàn ghế ạ? Giá bốn chân trên nền đất không bằng phẳng rất hay bị khập khiễng!",
      visualGraphic: "box",
      mathNote: "3 \\text{ điểm không thẳng hàng xác định duy nhất 1 mặt phẳng}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Quan sát rất sắc bén. Trong hình học không gian, có một tính chất thừa nhận cốt lõi: 'Có một và chỉ một mặt phẳng đi qua ba điểm phân biệt không thẳng hàng'. Vì thế 3 đầu mút của chân tripod luôn đồng phẳng với bất kỳ mặt đất nào, giúp giá máy luôn đứng vững tuyệt đối!",
      visualGraphic: "box",
      mathNote: "(P) \\equiv (ABC) \\iff A, B, C \\text{ không thẳng hàng}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Ồ, thật kỳ diệu! Vậy còn 4 điểm thì chưa chắc cùng thuộc một mặt phẳng, giống như bốn chân ghế đặt trên sàn gồ ghề sẽ bị kênh. Em rất hào hứng muốn khám phá các tiên đề và phương pháp tìm giao tuyến, giao điểm trong không gian!",
      visualGraphic: "box",
      mathNote: "(P) \\cap (Q) = d"
    }
  ],
  youtubeVideoId: "N1r_d3g28Hk",
  youtubeVideoTitle: "Bài 10: Đường thẳng và mặt phẳng trong không gian (Tiết 1) - Toán 11 KNTT",
  youtubeVideos: [
    {
      id: "N1r_d3g28Hk",
      title: "Bài 10: Đường thẳng và mặt phẳng trong không gian (Tiết 1) - Toán 11 Kết nối tri thức"
    },
    {
      id: "5_24v17O-tU",
      title: "Bài 10: Đường thẳng và mặt phẳng trong không gian (Tiết 2) - Toán 11 Kết nối tri thức"
    },
    {
      id: "fT_j8iXfU5Y",
      title: "Phương pháp xác định giao tuyến và thiết diện hình học không gian 11"
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Khái niệm mở đầu về Mặt phẳng và Điểm",
      points: [
        "Mặt phẳng là một đối tượng cơ bản của hình học không gian không được định nghĩa, tựa như mặt bàn kéo dài vô tận về mọi phía.",
        "Ký hiệu mặt phẳng: Ta thường dùng chữ cái in hoa đặt trong dấu ngoặc đơn, ví dụ: $(P), (Q), (R), (\\alpha), (\\beta), \\dots$",
        "Quan hệ liên thuộc: Nếu điểm $A$ thuộc mặt phẳng $(P)$, ta viết $A \\in (P)$. Nếu điểm $B$ không thuộc mặt phẳng $(P)$, ta viết $B \\notin (P)$.",
        "Quy tắc biểu diễn hình không gian lên mặt phẳng phẳng (hình vẽ phẳng):",
        "+ Đường thẳng nhìn thấy được vẽ bằng nét liền (—).",
        "+ Đường thẳng bị che khuất vẽ bằng nét đứt khúc (---).",
        "+ Hình biểu diễn của đường thẳng là đường thẳng, đoạn thẳng là đoạn thẳng.",
        "+ Giữ nguyên tính song song và tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc trên hai đường thẳng song song."
      ],
      examples: [
        {
          problem: "Ví dụ 1: Điểm $M$ thuộc đường thẳng $a$, mà đường thẳng $a$ nằm trong mặt phẳng $(P)$. Hỏi điểm $M$ có thuộc mặt phẳng $(P)$ không?",
          solution: "Vì $M \\in a$ và $a \\subset (P)$ nên theo tính chất liên thuộc, ta có $M \\in (P)$."
        }
      ]
    },
    {
      index: "2",
      title: "2. Các tính chất thừa nhận (Tiên đề hình học không gian)",
      points: [
        "Tính chất 1: Có một và chỉ một mặt phẳng đi qua ba điểm phân biệt không thẳng hàng. Ký hiệu mặt phẳng đó là $(ABC)$.",
        "Tính chất 2: Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó. Khi đó ta nói đường thẳng nằm trong mặt phẳng, ký hiệu $d \\subset (P)$ hoặc $(P) \\supset d$.",
        "Tính chất 3: Tồn tại bốn điểm không cùng thuộc một mặt phẳng (không đồng phẳng).",
        "Tính chất 4: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất chứa tất cả các điểm chung của hai mặt phẳng đó. Đường thẳng chung này gọi là **giao tuyến** của hai mặt phẳng: $(P) \\cap (Q) = d$.",
        "Tính chất 5: Trên mỗi mặt phẳng, các kết quả đã biết của hình học phẳng đều đúng (định lý Thales, Pythagore, Menelaus, Ceva, công thức lượng giác...)."
      ],
      examples: [
        {
          problem: "Ví dụ 2: Hai mặt phẳng phân biệt $(P)$ và $(Q)$ có điểm chung $A$ và điểm chung $B$ ($A \\ne B$). Chứng minh giao tuyến của $(P)$ và $(Q)$ là đường thẳng $AB$.",
          solution: "Vì $A \\in (P) \\cap (Q)$ và $B \\in (P) \\cap (Q)$, mà qua 2 điểm phân biệt $A, B$ chỉ có duy nhất một đường thẳng $AB$. Do đó theo Tính chất 4, đường thẳng $AB$ chính là giao tuyến của $(P)$ và $(Q)$, tức $(P) \\cap (Q) = AB$."
        }
      ]
    },
    {
      index: "3",
      title: "3. Cách xác định một mặt phẳng",
      points: [
        "Một mặt phẳng hoàn toàn được xác định khi biết:",
        "1. Ba điểm không thẳng hàng: Mặt phẳng $(ABC)$.",
        "2. Một đường thẳng và một điểm không thuộc đường thẳng đó: Mặt phẳng $(A, d)$ với $A \\notin d$.",
        "3. Hai đường thẳng cắt nhau: Mặt phẳng $(a, b)$ với $a \\cap b = {I}$.",
        "4. (Mở rộng) Hai đường thẳng song song: Mặt phẳng $(a, b)$ với $a \\parallel b$."
      ],
      examples: [
        {
          problem: "Ví dụ 3: Cho hai đường thẳng cắt nhau $a$ và $b$ tại $O$. Điểm $M \\notin a, M \\notin b$. Hỏi có bao nhiêu mặt phẳng chứa cả hai đường thẳng $a$ và $b$?",
          solution: "Hai đường thẳng cắt nhau $a$ và $b$ xác định duy nhất một mặt phẳng, ký hiệu là mặt phẳng $(a, b)$. Do đó có đúng 1 mặt phẳng chứa cả $a$ và $b$."
        }
      ]
    },
    {
      index: "4",
      title: "4. Hình chóp và Hình tứ diện",
      points: [
        "**Hình chóp:**",
        "+ Cho đa giác $A_1A_2\\dots A_n$ nằm trong mặt phẳng $(\\alpha)$ và điểm $S \\notin (\\alpha)$. Nối $S$ với các đỉnh của đa giác, ta được hình chóp $S.A_1A_2\\dots A_n$.",
        "+ Điểm $S$ gọi là **đỉnh**; đa giác $A_1A_2\\dots A_n$ gọi là **mặt đáy**.",
        "+ Các tam giác $SA_1A_2, SA_2A_3, \\dots, SA_nA_1$ gọi là các **mặt bên**.",
        "+ Các đoạn thẳng $SA_1, SA_2, \\dots, SA_n$ là các **cạnh bên**; các cạnh của đa giác đáy là các **cạnh đáy**.",
        "**Hình tứ diện:**",
        "+ Cho 4 điểm $A, B, C, D$ không đồng phẳng. Hình gồm 4 mặt tam giác $ABC, BCD, CDA, DAB$ gọi là hình tứ diện $ABCD$.",
        "+ Tứ diện có 4 đỉnh, 4 mặt, 6 cạnh.",
        "+ Hai cạnh không có đỉnh chung gọi là **hai cạnh đối diện** (ví dụ $AB$ và $CD$, $AC$ và $BD$, $AD$ và $BC$).",
        "+ Một tứ diện có 4 mặt là các tam giác đều gọi là **tứ diện đều**."
      ],
      examples: [
        {
          problem: "Ví dụ 4: Hình chóp tứ giác $S.ABCD$ có bao nhiêu mặt, bao nhiêu cạnh?",
          solution: "Hình chóp tứ giác có 1 mặt đáy là tứ giác và 4 mặt bên là tam giác $\\Rightarrow$ Có 5 mặt. Có 4 cạnh đáy và 4 cạnh bên $\\Rightarrow$ Có 8 cạnh."
        }
      ]
    },
    {
      index: "5",
      title: "5. Các phương pháp giải toán hình học không gian cốt lõi",
      points: [
        "**Dạng 1: Tìm giao tuyến của hai mặt phẳng $(P)$ và $(Q)$:**",
        "+ Phương pháp: Tìm hai điểm chung phân biệt $A$ và $B$ của $(P)$ và $(Q)$. Khi đó giao tuyến là đường thẳng $AB = (P) \\cap (Q)$.",
        "+ Để tìm điểm chung, tìm giao điểm của hai đường thẳng cùng nằm trong một mặt phẳng thứ ba.",
        "**Dạng 2: Tìm giao điểm của đường thẳng $d$ và mặt phẳng $(\\alpha)$:**",
        "+ Bước 1: Tìm một mặt phẳng phụ $(\\beta)$ chứa $d$.",
        "+ Bước 2: Tìm giao tuyến $a = (\\alpha) \\cap (\\beta)$.",
        "+ Bước 3: Trong mặt phẳng $(\\beta)$, tìm giao điểm $M = d \\cap a$. Khi đó $M = d \\cap (\\alpha)$.",
        "**Dạng 3: Chứng minh ba điểm thẳng hàng, ba đường thẳng đồng quy:**",
        "+ Chứng minh 3 điểm cùng thuộc giao tuyến của hai mặt phẳng phân biệt.",
        "+ Chứng minh 3 đường thẳng là 3 giao tuyến của 3 mặt phẳng đôi một cắt nhau.",
        "**Dạng 4: Tìm thiết diện (mặt cắt) của hình chóp với mặt phẳng $(\\alpha)$:**",
        "+ Tìm lần lượt các đoạn giao tuyến của $(\\alpha)$ với các mặt của hình chóp.",
        "+ Nối các đoạn giao tuyến đó lại tạo thành một đa giác kín, đa giác này chính là thiết diện cần tìm."
      ],
      examples: [
        {
          problem: "Ví dụ 5: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang (đáy lớn $AB$, đáy nhỏ $CD$). Tìm giao tuyến của $(SAD)$ và $(SBC)$.",
          solution: "Điểm chung thứ nhất là đỉnh $S$. Trong mặt phẳng đáy $(ABCD)$, hai đường thẳng $AD$ và $BC$ không song song nên cắt nhau tại $E$. Vì $E \\in AD \\subset (SAD)$ và $E \\in BC \\subset (SBC)$ nên $E$ là điểm chung thứ hai. Vậy giao tuyến là đường thẳng $SE$."
        }
      ]
    }
  ],
  videoQuestions: [
    {
      id: "vq-11.10.1",
      timeSeconds: 120,
      timeLabel: "02:00",
      title: "Tiên đề xác định mặt phẳng",
      question: "Có bao nhiêu mặt phẳng đi qua ba điểm phân biệt không thẳng hàng?",
      options: [
        "Có duy nhất 1 mặt phẳng",
        "Có vô số mặt phẳng",
        "Có đúng 2 mặt phẳng",
        "Có 3 mặt phẳng"
      ],
      correctIndex: 0,
      explanation: "Theo Tính chất thừa nhận 1, qua 3 điểm phân biệt không thẳng hàng có một và chỉ một mặt phẳng."
    },
    {
      id: "vq-11.10.2",
      timeSeconds: 300,
      timeLabel: "05:00",
      title: "Giao tuyến của hai mặt phẳng",
      question: "Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có bao nhiêu điểm chung?",
      options: [
        "Vô số điểm chung nằm trên một đường thẳng duy nhất",
        "Chỉ có duy nhất 1 điểm chung đó",
        "Có đúng 2 điểm chung",
        "Có đúng 3 điểm chung"
      ],
      correctIndex: 0,
      explanation: "Nếu hai mặt phẳng phân biệt có 1 điểm chung thì chúng có một đường thẳng chung duy nhất chứa tất cả các điểm chung (giao tuyến)."
    },
    {
      id: "vq-11.10.3",
      timeSeconds: 520,
      timeLabel: "08:40",
      title: "Đặc điểm hình tứ diện",
      question: "Hình tứ diện có bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu mặt?",
      options: [
        "4 đỉnh, 6 cạnh, 4 mặt",
        "4 đỉnh, 4 cạnh, 4 mặt",
        "4 đỉnh, 6 cạnh, 6 mặt",
        "5 đỉnh, 8 cạnh, 5 mặt"
      ],
      correctIndex: 0,
      explanation: "Hình tứ diện được tạo bởi 4 điểm không đồng phẳng nên có 4 đỉnh, 6 cạnh và 4 mặt là các hình tam giác."
    }
  ],
  tips: [
    "Muốn hai đường thẳng cắt nhau trong không gian, điều kiện tiên quyết là chúng phải **cùng thuộc một mặt phẳng** (đồng phẳng) và không song song.",
    "Để tìm giao tuyến của $(P)$ và $(Q)$, thường có sẵn một điểm chung (như đỉnh chóp $S$). Điểm chung thứ hai thường là giao điểm của hai đường thẳng nằm trong mặt phẳng đáy.",
    "Khi tìm thiết diện, hãy mở rộng mặt phẳng cắt bằng cách kéo dài các đoạn thẳng cắt các cạnh tương ứng của hình chóp cho đến khi gặp mép các mặt bên hoặc mặt đáy.",
    "Ghi nhớ quy tắc nét vẽ: Nhìn thấy vẽ nét liền, bị che khuất bắt buộc vẽ nét đứt. Sai quy ước nét vẽ sẽ dẫn đến nhận định sai về tính liên thuộc."
  ],
  traps: [
    "Sai lầm ngộ nhận: Tưởng rằng hai đường thẳng kéo dài cắt nhau trên hình vẽ thì chúng cắt nhau trong không gian. Thực tế hai đường thẳng có thể chéo nhau nếu không cùng nằm trong một mặt phẳng!",
    "Nhầm lẫn số mặt phẳng xác định bởi 4 điểm: 4 điểm không đồng phẳng tạo ra $C_4^3 = 4$ mặt phẳng (tứ diện), chứ không phải vô số mặt phẳng.",
    "Nhầm lẫn hình tứ diện với hình chóp tứ giác: Hình tứ diện là hình chóp tam giác (4 đỉnh, 4 mặt, 6 cạnh), còn hình chóp tứ giác có 5 đỉnh, 5 mặt, 8 cạnh.",
    "Quên kiểm tra tính thẳng hàng của 3 điểm trước khi kết luận chúng xác định duy nhất 1 mặt phẳng. Nếu 3 điểm thẳng hàng thì có vô số mặt phẳng đi qua chúng."
  ],
  quizQuestions: [
    {
      id: "quiz-11.10.1",
      badge: "Câu 1 - Nhận biết - Tiên đề xác định mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 10",
      question: "Trong các khẳng định sau, khẳng định nào đúng?",
      options: [
        "Có một và chỉ một mặt phẳng đi qua ba điểm phân biệt không thẳng hàng.",
        "Có một và chỉ một mặt phẳng đi qua ba điểm phân biệt bất kì.",
        "Có vô số mặt phẳng đi qua ba điểm không thẳng hàng.",
        "Có một và chỉ một mặt phẳng đi qua bốn điểm phân biệt."
      ],
      correctIndex: 0,
      explanation: "Theo Tính chất thừa nhận 1: Có một và chỉ một mặt phẳng đi qua ba điểm phân biệt không thẳng hàng."
    },
    {
      id: "quiz-11.10.2",
      badge: "Câu 2 - Nhận biết - Đường thẳng nằm trong mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 10",
      question: "Nếu một đường thẳng $d$ có hai điểm phân biệt thuộc mặt phẳng $(P)$ thì:",
      options: [
        "Mọi điểm của $d$ đều thuộc $(P)$.",
        "Chỉ có hai điểm đó của $d$ thuộc $(P)$.",
        "Có vô số điểm của $d$ không thuộc $(P)$.",
        "Đường thẳng $d$ cắt mặt phẳng $(P)$ tại hai điểm."
      ],
      correctIndex: 0,
      explanation: "Theo Tính chất 2: Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó (tức $d \\subset (P)$)."
    },
    {
      id: "quiz-11.10.3",
      badge: "Câu 3 - Nhận biết - Số mặt và số cạnh của hình tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Một hình tứ diện có số đỉnh, số cạnh và số mặt lần lượt là:",
      options: [
        "$4$ đỉnh, $6$ cạnh, $4$ mặt.",
        "$4$ đỉnh, $4$ cạnh, $4$ mặt.",
        "$5$ đỉnh, $8$ cạnh, $5$ mặt.",
        "$4$ đỉnh, $6$ cạnh, $6$ mặt."
      ],
      correctIndex: 0,
      explanation: "Hình tứ diện được xác định bởi 4 điểm không đồng phẳng nên có 4 đỉnh, $C_4^2 = 6$ cạnh và $C_4^3 = 4$ mặt là các tam giác."
    },
    {
      id: "quiz-11.10.4",
      badge: "Câu 4 - Nhận biết - Các cách xác định mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 10",
      question: "Yếu tố nào sau đây KHÔNG xác định duy nhất một mặt phẳng?",
      options: [
        "Ba điểm thẳng hàng.",
        "Ba điểm phân biệt không thẳng hàng.",
        "Một đường thẳng và một điểm nằm ngoài đường thẳng đó.",
        "Hai đường thẳng cắt nhau."
      ],
      correctIndex: 0,
      explanation: "Qua ba điểm thẳng hàng có vô số mặt phẳng đi qua (chùm mặt phẳng có trục là đường thẳng đi qua ba điểm đó)."
    },
    {
      id: "quiz-11.10.5",
      badge: "Câu 5 - Nhận biết - Hình biểu diễn trong không gian",
      source: "SGK Toán 11 KNTT Bài 10",
      question: "Quy ước vẽ hình biểu diễn của hình không gian nào sau đây là ĐÚNG?",
      options: [
        "Đường nhìn thấy vẽ bằng nét liền, đường bị che khuất vẽ bằng nét đứt đoạn.",
        "Mọi đường thẳng đều vẽ bằng nét liền.",
        "Đường nhìn thấy vẽ bằng nét đứt đoạn, đường bị che khuất vẽ bằng nét liền.",
        "Hình biểu diễn của hai đường thẳng song song là hai đường thẳng cắt nhau."
      ],
      correctIndex: 0,
      explanation: "Quy tắc cơ bản khi vẽ hình không gian là đường nhìn thấy vẽ bằng nét liền, đường bị che khuất vẽ bằng nét đứt đoạn."
    },
    {
      id: "quiz-11.10.6",
      badge: "Câu 6 - Thông hiểu - Số mặt phẳng từ 4 điểm không đồng phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho 4 điểm $A, B, C, D$ không đồng phẳng. Có thể xác định được bao nhiêu mặt phẳng phân biệt từ 3 trong 4 điểm đã cho?",
      options: [
        "$4$",
        "$6$",
        "$3$",
        "Vô số"
      ],
      correctIndex: 0,
      explanation: "Vì 4 điểm không đồng phẳng nên không có 3 điểm nào thẳng hàng. Số mặt phẳng tạo bởi 3 trong 4 điểm là $C_4^3 = 4$ mặt phẳng: $(ABC), (ABD), (ACD), (BCD)$."
    },
    {
      id: "quiz-11.10.7",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="75" y1="155" x2="215" y2="205" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="35" y1="205" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="145" y1="30" x2="145" y2="180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 5" /> <circle cx="145" cy="180" r="3.5" fill="#f59e0b" /> <text x="142" y="196" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">O</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "Câu 7 - Thông hiểu - Giao tuyến cơ bản của hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là:",
      options: [
        "Đường thẳng $SO$.",
        "Đường thẳng $SA$.",
        "Đường thẳng $SC$.",
        "Đường thẳng $AB$."
      ],
      correctIndex: 0,
      explanation: "Ta có: $S \\in (SAC) \\cap (SBD)$. Mặt khác $O = AC \\cap BD$ nên $O \\in AC \\subset (SAC)$ và $O \\in BD \\subset (SBD) \\Rightarrow O \\in (SAC) \\cap (SBD)$. Vậy giao tuyến là $SO$."
    },
    {
      id: "quiz-11.10.8",
      badge: "Câu 8 - Thông hiểu - Số cạnh của hình chóp có đáy n giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Một hình chóp có đáy là ngũ giác thì có tất cả bao nhiêu cạnh và bao nhiêu mặt?",
      options: [
        "$10$ cạnh và $6$ mặt.",
        "$10$ cạnh và $5$ mặt.",
        "$8$ cạnh và $5$ mặt.",
        "$12$ cạnh và $7$ mặt."
      ],
      correctIndex: 0,
      explanation: "Hình chóp có đáy là đa giác $n$ cạnh thì có $n$ cạnh đáy và $n$ cạnh bên $\\Rightarrow$ tổng số cạnh là $2n = 2 \\times 5 = 10$ cạnh. Số mặt gồm 1 đáy và $n$ mặt bên $\\Rightarrow n + 1 = 6$ mặt."
    },
    {
      id: "quiz-11.10.9",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <circle cx="180" cy="117" r="3.5" fill="#f59e0b" /> <text x="188" y="118" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "Câu 9 - Thông hiểu - Điểm thuộc mặt phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ đáy $ABCD$. Điểm $M$ nằm trên cạnh $SC$ ($M \\ne S, M \\ne C$). Khẳng định nào sau đây là ĐÚNG?",
      options: [
        "$M \\in (SCD)$.",
        "$M \\in (ABCD)$.",
        "$M \\in (SAB)$.",
        "$SC \\not\\subset (SAC)$."
      ],
      correctIndex: 0,
      explanation: "Vì $M \\in SC$ và $SC \\subset (SCD)$ nên $M \\in (SCD)$."
    },
    {
      id: "quiz-11.10.10",
      badge: "Câu 10 - Thông hiểu - Giao tuyến của hai mặt bên kề nhau",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho hình chóp $S.ABC$. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SBC)$ là:",
      options: [
        "Đường thẳng $SB$.",
        "Đường thẳng $SA$.",
        "Đường thẳng $SC$.",
        "Đường thẳng $AC$."
      ],
      correctIndex: 0,
      explanation: "Hai mặt phẳng $(SAB)$ và $(SBC)$ có hai điểm chung phân biệt rõ ràng là $S$ và $B$. Do đó giao tuyến của chúng là đường thẳng $SB$."
    },
    {
      id: "quiz-11.10.11",
      badge: "Câu 11 - Thông hiểu - Số mặt phẳng từ 3 đường thẳng cắt nhau đôi một",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho ba đường thẳng $a, b, c$ cắt nhau từng đôi một tại ba giao điểm phân biệt $A, B, C$. Ba đường thẳng đó:",
      options: [
        "Cùng thuộc một mặt phẳng.",
        "Không thể cùng thuộc một mặt phẳng.",
        "Tạo thành ba mặt phẳng phân biệt.",
        "Đồng quy tại một điểm."
      ],
      correctIndex: 0,
      explanation: "Ba giao điểm phân biệt $A, B, C$ không thẳng hàng xác định duy nhất một mặt phẳng $(ABC)$. Vì $a$ đi qua $A, B$ nên $a \\subset (ABC)$; tương tự $b, c \\subset (ABC)$. Vậy ba đường thẳng cùng nằm trên mặt phẳng $(ABC)$."
    },
    {
      id: "quiz-11.10.12",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="92" y1="112" x2="255" y2="175" stroke="#f59e0b" stroke-width="2" /> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /> <text x="75" y="112" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "Câu 12 - Thông hiểu - Giao điểm đường thẳng và mặt phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $AB$. Giao điểm của đường thẳng $DM$ với mặt phẳng $(ABC)$ là:",
      options: [
        "Điểm $M$.",
        "Điểm $D$.",
        "Trọng tâm tam giác $ABC$.",
        "Trung điểm của $BC$."
      ],
      correctIndex: 0,
      explanation: "Vì $M$ nằm trên $AB$ mà $AB \\subset (ABC)$ nên $M \\in (ABC)$. Lại có $M \\in DM$, suy ra $DM \\cap (ABC) = M$."
    },
    {
      id: "quiz-11.10.13",
      svgDiagram: `<svg viewBox="0 0 340 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="150" x2="175" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="140" y1="30" x2="75" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="150" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="175" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="175" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <!-- Kéo dài AD và BC cắt nhau tại I --> <line x1="175" y1="150" x2="290" y2="205" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="215" y1="205" x2="290" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="290" y2="205" stroke="#f59e0b" stroke-width="2" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="150" r="3.5" fill="#38bdf8" /> <text x="58" y="152" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="210" y="222" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="175" cy="150" r="3.5" fill="#38bdf8" /> <text x="175" y="142" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="290" cy="205" r="3.5" fill="#f59e0b" /> <text x="298" y="210" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">I</text> </svg>`,
      badge: "Câu 13 - Vận dụng - Giao tuyến qua điểm kéo dài trong đáy",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$, đáy nhỏ $CD$ ($AB$ không song song $CD$). Gọi $I = AD \\cap BC$. Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng nào?",
      options: [
        "$SI$.",
        "$SO$ với $O = AC \\cap BD$.",
        "$AB$.",
        "$CD$."
      ],
      correctIndex: 0,
      explanation: "Ta có $S$ là điểm chung thứ nhất. Trong mặt phẳng đáy $(ABCD)$, hai cạnh bên $AD$ và $BC$ cắt nhau tại $I$. Do $I \\in AD \\subset (SAD)$ và $I \\in BC \\subset (SBC)$ nên $I$ là điểm chung thứ hai. Vậy giao tuyến là $SI$."
    },
    {
      id: "quiz-11.10.14",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="75" y1="155" x2="215" y2="205" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="35" y1="205" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="145" y1="30" x2="145" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="75" y1="155" x2="180" y2="117" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" /> <circle cx="180" cy="117" r="3.5" fill="#38bdf8" /> <text x="188" y="117" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="145" cy="180" r="3.5" fill="#38bdf8" /> <text x="142" y="196" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">O</text> <circle cx="145" cy="130" r="3.5" fill="#f59e0b" /> <text x="151" y="133" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">I</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "Câu 14 - Vận dụng - Tìm giao điểm của đường thẳng và mặt phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh $SC$. Giao điểm của đường thẳng $AM$ với mặt phẳng $(SBD)$ là điểm nào?",
      options: [
        "Giao điểm của $AM$ và $SO$.",
        "Giao điểm của $AM$ và $BD$.",
        "Giao điểm của $AM$ và $SB$.",
        "Giao điểm của $AM$ và $SD$."
      ],
      correctIndex: 0,
      explanation: "Chọn mặt phẳng phụ chứa $AM$ là $(SAC)$. Giao tuyến của $(SAC)$ và $(SBD)$ là $SO$. Trong mặt phẳng $(SAC)$, $AM$ cắt $SO$ tại $I$. Vì $I \\in SO \\subset (SBD)$ nên $I$ chính là giao điểm của $AM$ với $(SBD)$."
    },
    {
      id: "quiz-11.10.15",
      svgDiagram: `<svg viewBox="0 0 310 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="155" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="145" y1="30" x2="75" y2="155" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="155" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="30" x2="255" y2="155" stroke="#38bdf8" stroke-width="1.8" /> <line x1="75" y1="155" x2="215" y2="205" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="35" y1="205" x2="255" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="145" y1="30" x2="145" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="75" y1="155" x2="180" y2="117" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" /> <circle cx="180" cy="117" r="3.5" fill="#38bdf8" /> <text x="188" y="117" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="145" cy="180" r="3.5" fill="#38bdf8" /> <text x="142" y="196" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">O</text> <circle cx="145" cy="130" r="3.5" fill="#f59e0b" /> <text x="151" y="133" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">I</text> <circle cx="145" cy="30" r="3.5" fill="#38bdf8" /> <text x="141" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="155" r="3.5" fill="#38bdf8" /> <text x="58" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="222" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="155" r="3.5" fill="#38bdf8" /> <text x="262" y="158" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "Câu 15 - Vận dụng - Tỉ số giao điểm của đường thẳng với đường chéo",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Trong bài toán trên (hình bình hành $ABCD$ tâm $O$, $M$ là trung điểm $SC$, $I = AM \\cap SO$), tỉ số $\\dfrac{SI}{SO}$ bằng:",
      options: [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{2}$",
        "$\\dfrac{3}{4}$",
        "$\\dfrac{1}{3}$"
      ],
      correctIndex: 0,
      explanation: "Xét tam giác $SAC$: $SO$ là đường trung tuyến (vì $O$ là trung điểm $AC$), $AM$ cũng là đường trung tuyến (vì $M$ là trung điểm $SC$). Do đó giao điểm $I$ chính là trọng tâm của tam giác $SAC$. Theo tính chất trọng tâm, ta có $\\dfrac{SI}{SO} = \\dfrac{2}{3}$."
    },
    {
      id: "quiz-11.10.16",
      badge: "Câu 16 - Vận dụng - Thiết diện của hình tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Thiết diện của hình tứ diện cắt bởi một mặt phẳng có thể là hình gì sau đây?",
      options: [
        "Một hình tam giác hoặc một hình tứ giác.",
        "Chỉ có thể là hình tam giác.",
        "Chỉ có thể là hình tứ giác.",
        "Có thể là hình ngũ giác."
      ],
      correctIndex: 0,
      explanation: "Vì tứ diện chỉ có 4 mặt nên một mặt phẳng cắt các mặt của tứ diện nhiều nhất ở 4 mặt $\\Rightarrow$ thiết diện chỉ có thể là tam giác (cắt 3 mặt) hoặc tứ giác (cắt 4 mặt), không thể là ngũ giác."
    },
    {
      id: "quiz-11.10.17",
      badge: "Câu 17 - Vận dụng - Chứng minh ba điểm thẳng hàng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      question: "Cho tứ diện $ABCD$. Các đường thẳng $AB$ và $CD$ không song song. Điểm $M \\in AB, N \\in CD, P \\in BC$. Để chứng minh ba điểm nào đó thẳng hàng bằng phương pháp hình học không gian, ta thường chỉ ra:",
      options: [
        "Ba điểm đó là các điểm chung của hai mặt phẳng phân biệt.",
        "Ba điểm đó cùng cách đều một điểm thứ tư.",
        "Ba điểm đó tạo thành một tam giác có diện tích bằng $1$.",
        "Ba điểm đó cùng nằm trên các cạnh song song."
      ],
      correctIndex: 0,
      explanation: "Theo tính chất thừa nhận, tập hợp các điểm chung của hai mặt phẳng phân biệt là một đường thẳng duy nhất (giao tuyến). Do đó, nếu chứng minh được 3 điểm cùng thuộc hai mặt phẳng phân biệt thì 3 điểm đó thẳng hàng."
    },
    {
      id: "quiz-11.10.18",
      badge: "Câu 18 - Vận dụng cao - Thiết diện hình chóp tứ giác",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Thiết diện của hình chóp tứ giác $S.ABCD$ khi cắt bởi một mặt phẳng $(\\alpha)$ có thể có TỐI ĐA bao nhiêu cạnh?",
      options: [
        "$5$ cạnh.",
        "$4$ cạnh.",
        "$6$ cạnh.",
        "$8$ cạnh."
      ],
      correctIndex: 0,
      explanation: "Hình chóp tứ giác có 5 mặt (1 mặt đáy và 4 mặt bên). Mặt phẳng $(\\alpha)$ cắt mỗi mặt của hình chóp theo tối đa một đoạn giao tuyến. Do đó thiết diện có tối đa 5 cạnh (ngũ giác)."
    },
    {
      id: "quiz-11.10.19",
      badge: "Câu 19 - Vận dụng cao - Diện tích thiết diện tứ diện đều",
      source: "Đề phát triển ĐGNL 2025",
      question: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Mặt phẳng $(P)$ đi qua $MN$ và song song với $BC$. Thiết diện của tứ diện cắt bởi $(P)$ là hình gì?",
      options: [
        "Hình bình hành có diện tích $S = \\dfrac{a^2 \\sqrt{2}}{8}$.",
        "Hình tam giác đều có diện tích $S = \\dfrac{a^2 \\sqrt{3}}{4}$.",
        "Hình chữ nhật có diện tích $S = \\dfrac{a^2}{4}$.",
        "Hình thang vuông có diện tích $S = \\dfrac{a^2 \\sqrt{2}}{4}$."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng $(P)$ qua $M$ song song với $BC$ cắt $AC$ tại trung điểm $P$ của $AC$; qua $N$ song song với $BC$ cắt $BD$ tại trung điểm $Q$ của $BD$. Thiết diện là hình bình hành $MPNQ$. Vì $BC \\perp AD$ trong tứ diện đều nên thiết diện là hình vuông cạnh $\\dfrac{a}{2}$. Diện tích là $\\left(\\dfrac{a}{2}\\right)^2 \\times \\sin = \\dfrac{a^2 \\sqrt{2}}{8}$ theo phép chiếu."
    },
    {
      id: "quiz-11.10.20",
      badge: "Câu 20 - Vận dụng cao - Số giao tuyến tối đa của n mặt phẳng",
      source: "Đề thi HSG Toán 11",
      question: "Trong không gian, cho 5 mặt phẳng phân biệt đôi một cắt nhau và không có ba mặt phẳng nào cùng đi qua một đường thẳng. Số giao tuyến phân biệt tối đa tạo bởi từng cặp mặt phẳng là:",
      options: [
        "$10$",
        "$5$",
        "$15$",
        "$20$"
      ],
      correctIndex: 0,
      explanation: "Mỗi cặp hai mặt phẳng phân biệt cắt nhau tạo thành 1 giao tuyến. Với 5 mặt phẳng đôi một cắt nhau, số giao tuyến phân biệt tối đa là số tổ hợp chập 2 của 5: $C_5^2 = \\dfrac{5 \\times 4}{2} = 10$ giao tuyến."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-11.10.1",
      badge: "Đúng/Sai 1 - Các tiên đề hình học không gian",
      source: "SGK Toán 11 KNTT Bài 10",
      prompt: "Xét tính Đúng / Sai của các khẳng định sau về các tiên đề và tính chất cơ bản trong không gian:",
      subItems: [
        {
          id: "a",
          text: "Qua ba điểm phân biệt luôn xác định được một và chỉ một mặt phẳng.",
          correctAnswer: false,
          explanation: "Sai, ba điểm phải KHÔNG thẳng hàng thì mới xác định duy nhất một mặt phẳng. Nếu 3 điểm thẳng hàng thì có vô số mặt phẳng đi qua chúng."
        },
        {
          id: "b",
          text: "Nếu một đường thẳng có hai điểm phân biệt thuộc mặt phẳng $(P)$ thì đường thẳng đó nằm trong $(P)$.",
          correctAnswer: true,
          explanation: "Đúng, đây là nội dung của Tính chất thừa nhận 2."
        },
        {
          id: "c",
          text: "Tồn tại bốn điểm không cùng thuộc bất kỳ một mặt phẳng nào.",
          correctAnswer: true,
          explanation: "Đúng, đây là Tính chất thừa nhận 3 (sự tồn tại của không gian 3 chiều)."
        },
        {
          id: "d",
          text: "Hai mặt phẳng phân biệt có một điểm chung thì chúng có thể chỉ có duy nhất một điểm chung đó.",
          correctAnswer: false,
          explanation: "Sai, nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất chứa tất cả các điểm chung (vô số điểm chung)."
        }
      ]
    },
    {
      id: "tf-11.10.2",
      badge: "Đúng/Sai 2 - Các cách xác định mặt phẳng",
      source: "SGK Toán 11 KNTT Bài 10",
      prompt: "Cho đường thẳng $d$ và hai điểm $A, B$ không thuộc $d$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $d$ và điểm $A$ luôn xác định duy nhất một mặt phẳng kí hiệu là $(A, d)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $A \\notin d$ nên theo cách xác định mặt phẳng, có duy nhất một mặt phẳng chứa $A$ và $d$."
        },
        {
          id: "b",
          text: "Hai đường thẳng $AB$ và $d$ luôn xác định duy nhất một mặt phẳng.",
          correctAnswer: false,
          explanation: "Sai, hai đường thẳng chỉ xác định một mặt phẳng khi chúng cắt nhau hoặc song song. Trong không gian chúng có thể chéo nhau."
        },
        {
          id: "c",
          text: "Nếu đường thẳng $AB$ cắt đường thẳng $d$ thì chúng xác định duy nhất một mặt phẳng.",
          correctAnswer: true,
          explanation: "Đúng, hai đường thẳng cắt nhau luôn xác định duy nhất một mặt phẳng."
        },
        {
          id: "d",
          text: "Nếu bốn điểm gồm $A, B$ và hai điểm phân biệt thuộc $d$ cùng thuộc một mặt phẳng thì $A, B$ và $d$ đồng phẳng.",
          correctAnswer: true,
          explanation: "Đúng, vì hai điểm phân biệt của $d$ thuộc mặt phẳng nên cả đường thẳng $d$ nằm trong mặt phẳng đó, do đó $A, B$ và $d$ đồng phẳng."
        }
      ]
    },
    {
      id: "tf-11.10.3",
      svgDiagram: `<svg viewBox="0 0 340 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="75" y1="150" x2="175" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="140" y1="30" x2="75" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="75" y1="150" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="35" y1="205" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="215" y1="205" x2="175" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="35" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="215" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="175" y2="150" stroke="#38bdf8" stroke-width="1.8" /> <!-- Kéo dài AD và BC cắt nhau tại I --> <line x1="175" y1="150" x2="290" y2="205" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="215" y1="205" x2="290" y2="205" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="290" y2="205" stroke="#f59e0b" stroke-width="2" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="75" cy="150" r="3.5" fill="#38bdf8" /> <text x="58" y="152" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="35" cy="205" r="3.5" fill="#38bdf8" /> <text x="18" y="214" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="215" cy="205" r="3.5" fill="#38bdf8" /> <text x="210" y="222" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="175" cy="150" r="3.5" fill="#38bdf8" /> <text x="175" y="142" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> <circle cx="290" cy="205" r="3.5" fill="#f59e0b" /> <text x="298" y="210" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">E</text> </svg>`,
      badge: "Đúng/Sai 3 - Hình chóp tứ giác S.ABCD",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi, các cạnh đối diện không song song. Gọi $O = AC \\cap BD$ và $E = AB \\cap CD$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng $SO$.",
          correctAnswer: true,
          explanation: "Đúng, vì $S$ là điểm chung thứ nhất và $O = AC \\cap BD$ là điểm chung thứ hai."
        },
        {
          id: "b",
          text: "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng $SE$.",
          correctAnswer: true,
          explanation: "Đúng, vì $S$ là điểm chung thứ nhất và $E = AB \\cap CD$ là điểm chung thứ hai thuộc mặt đáy."
        },
        {
          id: "c",
          text: "Đường thẳng $SO$ nằm trong mặt phẳng $(SAB)$.",
          correctAnswer: false,
          explanation: "Sai, điểm $O$ thuộc miền trong của tứ giác đáy $ABCD$, $O \\notin AB$ nên $SO$ không nằm trong $(SAB)$."
        },
        {
          id: "d",
          text: "Giao điểm của đường thẳng $SO$ với mặt phẳng $(ABCD)$ chính là điểm $O$.",
          correctAnswer: true,
          explanation: "Đúng, vì $O \\in SO$ và $O = AC \\cap BD \\subset (ABCD)$ nên $SO \\cap (ABCD) = O$."
        }
      ]
    },
    {
      id: "tf-11.10.4",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="92" y1="112" x2="200" y2="195" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 5" /> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /> <text x="75" y="112" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="200" cy="195" r="3.5" fill="#f59e0b" /> <text x="204" y="210" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "Đúng/Sai 4 - Hình tứ diện ABCD",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Gọi $G$ là trung điểm của đoạn thẳng $MN$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Điểm $M$ thuộc cả hai mặt phẳng $(ABC)$ và $(ABD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $M \\in AB$ mà $AB = (ABC) \\cap (ABD)$."
        },
        {
          id: "b",
          text: "Bốn điểm $A, B, C, D$ có thể cùng nằm trên một mặt phẳng.",
          correctAnswer: false,
          explanation: "Sai, theo định nghĩa tứ diện thì 4 đỉnh $A, B, C, D$ không đồng phẳng."
        },
        {
          id: "c",
          text: "Mặt phẳng $(ABN)$ và mặt phẳng $(CDM)$ có chung đoạn thẳng $MN$.",
          correctAnswer: true,
          explanation: "Đúng, $M \\in AB \\subset (ABN)$ và $N \\in (ABN) \\Rightarrow MN \\subset (ABN)$. Tương tự $N \\in CD \\subset (CDM)$ và $M \\in (CDM) \\Rightarrow MN \\subset (CDM)$."
        },
        {
          id: "d",
          text: "Thiết diện của tứ diện $ABCD$ cắt bởi mặt phẳng $(ABN)$ là tam giác $ABN$.",
          correctAnswer: true,
          explanation: "Đúng, vì $(ABN)$ cắt mặt $(ABC)$ theo đoạn $AN$, cắt mặt $(ABD)$ theo đoạn $BN$, và chứa cạnh $AB$ $\\Rightarrow$ thiết diện là tam giác $ABN$."
        }
      ]
    },
    {
      id: "tf-11.10.5",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <!-- AA' và SG --> <line x1="45" y1="195" x2="200" y2="195" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <line x1="140" y1="30" x2="148" y2="195" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" /> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">S</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="200" cy="195" r="3.5" fill="#38bdf8" /> <text x="204" y="210" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A'</text> <circle cx="148" cy="195" r="3.5" fill="#f59e0b" /> <text x="153" y="208" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">G</text> <circle cx="145" cy="140" r="3.5" fill="#f59e0b" /> <text x="152" y="142" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> </svg>`,
      badge: "Đúng/Sai 5 - Giao điểm đường thẳng và mặt phẳng",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho tứ diện $SABC$. Gọi $G$ là trọng tâm của tam giác $ABC$. Trên đoạn thẳng $SG$ lấy điểm $M$ sao cho $SM = 2MG$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Giao điểm của đường thẳng $SG$ với mặt phẳng $(ABC)$ là điểm $G$.",
          correctAnswer: true,
          explanation: "Đúng, vì $G \\in (ABC)$ và $G \\in SG$."
        },
        {
          id: "b",
          text: "Đường thẳng $AM$ nằm trong mặt phẳng $(SBC)$.",
          correctAnswer: false,
          explanation: "Sai, $A \\notin (SBC)$ và $M$ không thuộc $(SBC)$ nên $AM$ không thể nằm trong $(SBC)$."
        },
        {
          id: "c",
          text: "Gọi $A'$ là trung điểm $BC$, khi đó đường thẳng $AM$ cắt đường thẳng $SA'$ tại một điểm.",
          correctAnswer: true,
          explanation: "Đúng, vì $G$ nằm trên đường trung tuyến $AA'$ nên 4 điểm $S, A, G, A'$ cùng thuộc mặt phẳng $(SAA')$. Trong mặt phẳng này, $AM$ và $SA'$ không song song nên cắt nhau."
        },
        {
          id: "d",
          text: "Giao điểm của đường thẳng $AM$ với mặt phẳng $(SBC)$ chính là giao điểm của $AM$ và $SA'$.",
          correctAnswer: true,
          explanation: "Đúng, vì $SA' \\subset (SBC)$ nên giao điểm của $AM$ với $SA'$ nằm trên mặt phẳng $(SBC)$."
        }
      ]
    },
    {
      id: "tf-11.10.6",
      badge: "Đúng/Sai 6 - Ba điểm thẳng hàng trong không gian",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang đáy lớn $AB$, đáy nhỏ $CD$. Gọi $I = AD \\cap BC$, $J = AC \\cap BD$. Mặt phẳng $(\\alpha)$ cắt các cạnh $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$. Gọi $I' = A'D' \\cap B'C'$, $J' = A'C' \\cap B'D'$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Ba điểm $S, I', I$ cùng thuộc một đường thẳng.",
          correctAnswer: true,
          explanation: "Đúng, $I$ là điểm chung của $(SAD)$ và $(SBC)$, $I'$ cũng là điểm chung của $(SAD)$ và $(SBC)$ nên cả $I$ và $I'$ đều nằm trên giao tuyến $SI$."
        },
        {
          id: "b",
          text: "Ba điểm $S, J', J$ thẳng hàng.",
          correctAnswer: true,
          explanation: "Đúng, tương tự $J$ và $J'$ đều thuộc giao tuyến $SO$ của $(SAC)$ và $(SBD)$ nên $S, J', J$ cùng nằm trên đường thẳng $SO$."
        },
        {
          id: "c",
          text: "Đường thẳng $I'J'$ cắt đường thẳng $IJ$.",
          correctAnswer: false,
          explanation: "Sai, $I'J'$ thuộc mặt phẳng $(\\alpha)$ còn $IJ$ thuộc mặt phẳng đáy $(ABCD)$. Chúng chỉ cắt nhau nếu hai mặt phẳng cắt nhau và giao tuyến chứa giao điểm này, không thể tùy tiện khẳng định luôn cắt nhau."
        },
        {
          id: "d",
          text: "Nếu $A'B' \\parallel CD$ thì $A'B' \\parallel AB$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AB \\parallel CD$, theo tính chất bắc cầu quan hệ song song của các đường thẳng cùng nằm trong các mặt cắt tương ứng."
        }
      ]
    },
    {
      id: "tf-11.10.7",
      badge: "Đúng/Sai 7 - Thiết diện của hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông. Lấy điểm $M$ thuộc cạnh bên $SB$ ($M$ không trùng với $S, B$). Mặt phẳng $(ADM)$ cắt hình chóp. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Mặt phẳng $(ADM)$ cắt mặt phẳng $(ABCD)$ theo giao tuyến là đoạn thẳng $AD$.",
          correctAnswer: true,
          explanation: "Đúng, vì $A, D$ cùng thuộc $(ADM)$ và $(ABCD)$ nên giao tuyến là $AD$."
        },
        {
          id: "b",
          text: "Mặt phẳng $(ADM)$ cắt mặt phẳng $(SAB)$ theo giao tuyến là đoạn thẳng $AM$.",
          correctAnswer: true,
          explanation: "Đúng, vì $A \\in (SAB)$ và $M \\in SB \\subset (SAB)$ nên giao tuyến là $AM$."
        },
        {
          id: "c",
          text: "Giao tuyến của $(ADM)$ với $(SCD)$ đi qua điểm $D$ và song song với $AB$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AD \\parallel BC$ trong đáy, theo định lý giao tuyến của hai mặt phẳng đi qua hai đường thẳng song song."
        },
        {
          id: "d",
          text: "Thiết diện của hình chóp cắt bởi mặt phẳng $(ADM)$ luôn là một hình tam giác.",
          correctAnswer: false,
          explanation: "Sai, thiết diện cắt các mặt bên và đáy tạo thành một hình thang $ADNM$ (với $N \\in SC$), tức là một tứ giác chứ không phải tam giác."
        }
      ]
    },
    {
      id: "tf-11.10.8",
      badge: "Đúng/Sai 8 - Số lượng hình học cơ bản trong không gian",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho $n$ điểm phân biệt trong không gian ($n \\ge 4$), trong đó không có 4 điểm nào đồng phẳng và không có 3 điểm nào thẳng hàng. Xét tính Đúng / Sai của các phát biểu sau:",
      subItems: [
        {
          id: "a",
          text: "Số đường thẳng phân biệt đi qua từng cặp điểm là $C_n^2$.",
          correctAnswer: true,
          explanation: "Đúng, vì không có 3 điểm nào thẳng hàng nên cứ 2 điểm phân biệt xác định 1 đường thẳng duy nhất, tổng số là $C_n^2$."
        },
        {
          id: "b",
          text: "Số mặt phẳng phân biệt xác định bởi 3 trong $n$ điểm là $C_n^3$.",
          correctAnswer: true,
          explanation: "Đúng, vì không có 4 điểm nào đồng phẳng nên cứ 3 điểm phân biệt xác định 1 mặt phẳng duy nhất, tổng số là $C_n^3$."
        },
        {
          id: "c",
          text: "Với $n = 5$, số mặt phẳng phân biệt tạo thành là $10$.",
          correctAnswer: true,
          explanation: "Đúng, $C_5^3 = \\dfrac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$ mặt phẳng."
        },
        {
          id: "d",
          text: "Với $n = 6$, số tứ diện phân biệt có các đỉnh lấy từ $n$ điểm là $20$.",
          correctAnswer: false,
          explanation: "Sai, số tứ diện là số cách chọn 4 điểm từ $n$ điểm: $C_6^4 = C_6^2 = \\dfrac{6 \\times 5}{2} = 15$ tứ diện, chứ không phải $20$."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-11.10.1",
      badge: "TLN 1 - Số mặt phẳng từ 4 điểm không đồng phẳng",
      source: "SGK Toán 11 KNTT Bài 10",
      prompt: "Cho 4 điểm phân biệt $A, B, C, D$ không cùng nằm trên một mặt phẳng. Có bao nhiêu mặt phẳng phân biệt được tạo thành từ 3 trong 4 điểm đó?",
      correctAnswer: "4",
      acceptableAnswers: ["4"],
      explanation: "Vì 4 điểm không đồng phẳng nên không có 3 điểm nào thẳng hàng. Số mặt phẳng tạo thành là $C_4^3 = 4$ mặt phẳng gồm: $(ABC), (ABD), (ACD), (BCD)$."
    },
    {
      id: "sa-11.10.2",
      badge: "TLN 2 - Số cạnh của hình chóp theo số mặt",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Một hình chóp có tất cả 9 mặt (gồm cả mặt đáy và các mặt bên). Hỏi hình chóp đó có bao nhiêu cạnh?",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "Hình chóp có đáy là đa giác $n$ cạnh thì có $n$ mặt bên và 1 mặt đáy, tổng số mặt là $n + 1 = 9 \\Rightarrow n = 8$. Số cạnh của hình chóp là $2n = 2 \\times 8 = 16$ cạnh."
    },
    {
      id: "sa-11.10.3",
      badge: "TLN 3 - Số mặt phẳng xác định bởi 5 điểm",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho 5 điểm phân biệt trong không gian sao cho không có 4 điểm nào đồng phẳng. Hỏi có thể lập được bao nhiêu mặt phẳng đi qua 3 trong 5 điểm đã cho?",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "Số mặt phẳng tạo thành từ 3 trong 5 điểm không đồng phẳng là $C_5^3 = \\dfrac{5!}{3! \\times 2!} = 10$ mặt phẳng."
    },
    {
      id: "sa-11.10.4",
      badge: "TLN 4 - Số mặt phẳng chứa đỉnh S của hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp tứ giác $S.ABCD$ có đáy là tứ giác lồi (không có cặp cạnh đối nào song song). Có bao nhiêu mặt phẳng phân biệt đi qua đỉnh $S$ và chứa ít nhất hai đỉnh của đáy $ABCD$?",
      correctAnswer: "6",
      acceptableAnswers: ["6"],
      explanation: "Mỗi mặt phẳng đi qua $S$ và chứa 2 đỉnh đáy được xác định bởi $S$ và một đường thẳng nối 2 đỉnh của đáy. Đáy có 4 đỉnh nên có $C_4^2 = 6$ đoạn thẳng nối từng cặp đỉnh (4 cạnh đáy $AB, BC, CD, DA$ và 2 đường chéo $AC, BD$). Mỗi đoạn thẳng cùng với $S$ tạo thành 1 mặt phẳng phân biệt. Do đó có 6 mặt phẳng: $(SAB), (SBC), (SCD), (SDA), (SAC), (SBD)$."
    },
    {
      id: "sa-11.10.5",
      badge: "TLN 5 - Số cạnh tối đa của thiết diện hình chóp tứ giác",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Khi cắt hình chóp tứ giác $S.ABCD$ bởi một mặt phẳng bất kì, thiết diện thu được có thể có số cạnh tối đa là bao nhiêu?",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "Hình chóp tứ giác có 5 mặt (4 mặt bên và 1 mặt đáy). Một mặt phẳng chỉ có thể cắt mỗi mặt theo nhiều nhất 1 đoạn giao tuyến, do đó đa giác thiết diện có số cạnh tối đa bằng số mặt của hình chóp, tức là 5 cạnh (ngũ giác)."
    },
    {
      id: "sa-11.10.6",
      badge: "TLN 6 - Số đỉnh của hình chóp có 24 cạnh",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Một hình chóp có tổng số cạnh bằng 24. Hỏi hình chóp đó có bao nhiêu đỉnh?",
      correctAnswer: "13",
      acceptableAnswers: ["13"],
      explanation: "Hình chóp đáy $n$ giác có $2n$ cạnh $\\Rightarrow 2n = 24 \\Rightarrow n = 12$. Đáy có 12 đỉnh, cộng thêm đỉnh chóp $S$ thì hình chóp có tất cả $n + 1 = 12 + 1 = 13$ đỉnh."
    },
    {
      id: "sa-11.10.7",
      svgDiagram: `<svg viewBox="0 0 300 230" class="w-full max-w-xs sm:max-w-sm mx-auto select-none" xmlns="http://www.w3.org/2000/svg"> <line x1="45" y1="195" x2="255" y2="175" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 5" /> <line x1="45" y1="195" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="145" y1="215" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="45" y2="195" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="145" y2="215" stroke="#38bdf8" stroke-width="1.8" /> <line x1="140" y1="30" x2="255" y2="175" stroke="#38bdf8" stroke-width="1.8" /> <polygon points="92,112 95,205 200,195 197,102" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2" /> <circle cx="92" cy="112" r="3.5" fill="#f59e0b" /> <text x="75" y="112" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">M</text> <circle cx="95" cy="205" r="3.5" fill="#f59e0b" /> <text x="82" y="222" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">N</text> <circle cx="200" cy="195" r="3.5" fill="#f59e0b" /> <text x="205" y="212" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">P</text> <circle cx="197" cy="102" r="3.5" fill="#f59e0b" /> <text x="205" y="102" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">Q</text> <circle cx="140" cy="30" r="3.5" fill="#38bdf8" /> <text x="136" y="20" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">A</text> <circle cx="45" cy="195" r="3.5" fill="#38bdf8" /> <text x="25" y="202" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">B</text> <circle cx="145" cy="215" r="3.5" fill="#38bdf8" /> <text x="142" y="230" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">C</text> <circle cx="255" cy="175" r="3.5" fill="#38bdf8" /> <text x="263" y="180" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif">D</text> </svg>`,
      badge: "TLN 7 - Chu vi thiết diện tứ diện đều",
      source: "Đề phát triển ĐGNL 2025",
      prompt: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng 8. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$. Tính chu vi của tứ giác $MNPQ$.",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "$MN$ là đường trung bình trong $\\triangle ABC \\Rightarrow MN = \\dfrac{AC}{2} = \\dfrac{8}{2} = 4$. Tương tự $PQ = \\dfrac{AC}{2} = 4$, $NP = \\dfrac{BD}{2} = 4$, $QM = \\dfrac{BD}{2} = 4$. Chu vi của hình bình hành (hình thoi) $MNPQ$ là $4 \\times 4 = 16$."
    },
    {
      id: "sa-11.10.8",
      badge: "TLN 8 - Tỉ số đoạn thẳng giao điểm",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SC$. Đường thẳng $AM$ cắt $SO$ tại $I$. Tính tỉ số $\\dfrac{AI}{AM}$ (nhập kết quả dưới dạng phân số tối giản a/b).",
      correctAnswer: "2/3",
      acceptableAnswers: ["2/3", "0.67", "0,67"],
      explanation: "Trong tam giác $SAC$, $SO$ và $AM$ là hai đường trung tuyến cắt nhau tại $I$. Do đó $I$ là trọng tâm của tam giác $SAC$. Theo tính chất trọng tâm, $\\dfrac{AI}{AM} = \\dfrac{2}{3}$."
    },
    {
      id: "sa-11.10.9",
      badge: "TLN 9 - Tỉ số Menelaus trong hình chóp hình thang",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ với hai đáy $AB$ và $CD$ thỏa mãn $AB = 2CD$. Hai cạnh bên $AD$ và $BC$ cắt nhau tại $E$. Tính tỉ số $\\dfrac{EA}{ED}$.",
      correctAnswer: "2",
      acceptableAnswers: ["2"],
      explanation: "Vì $AB \\parallel CD$, áp dụng định lý Thales trong tam giác $EAB$ có $CD \\parallel AB$: $\\dfrac{EA}{ED} = \\dfrac{AB}{CD} = 2$."
    },
    {
      id: "sa-11.10.10",
      badge: "TLN 10 - Số giao tuyến của 4 mặt bên hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B1",
      prompt: "Cho hình chóp tứ giác $S.ABCD$. Có bao nhiêu giao tuyến phân biệt đôi một của các cặp mặt phẳng trong số 4 mặt bên $(SAB), (SBC), (SCD), (SDA)$ cùng đi qua đỉnh $S$?",
      correctAnswer: "4",
      acceptableAnswers: ["4"],
      explanation: "Bốn mặt bên kề nhau cắt nhau theo 4 cạnh bên: $(SAB) \\cap (SBC) = SB$, $(SBC) \\cap (SCD) = SC$, $(SCD) \\cap (SDA) = SD$, $(SDA) \\cap (SAB) = SA$. Đó là 4 giao tuyến phân biệt."
    }
  ]
};

export const GRADE_11_LESSON_10_AI_PRACTICE = {
  quizQuestions: [
    {
      id: "ai-11.10.1",
      badge: "Luyện thêm 1 - Tiên đề điểm và mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho ba điểm $M, N, P$ phân biệt cùng nằm trên một đường thẳng $d$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        "Có vô số mặt phẳng đi qua cả ba điểm $M, N, P$.",
        "Có duy nhất một mặt phẳng đi qua ba điểm $M, N, P$.",
        "Không có mặt phẳng nào đi qua ba điểm $M, N, P$.",
        "Có đúng ba mặt phẳng phân biệt đi qua ba điểm $M, N, P$."
      ],
      correctIndex: 0,
      explanation: "Vì ba điểm $M, N, P$ thẳng hàng nên chúng cùng nằm trên đường thẳng $d$. Bất kỳ mặt phẳng nào chứa đường thẳng $d$ đều đi qua ba điểm này, mà có vô số mặt phẳng chứa một đường thẳng (chùm mặt phẳng)."
    },
    {
      id: "ai-11.10.2",
      badge: "Luyện thêm 2 - Đường thẳng cắt mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Nếu một đường thẳng $a$ không nằm trong mặt phẳng $(P)$ và có điểm chung với $(P)$ thì số điểm chung nhiều nhất của $a$ và $(P)$ là:",
      options: [
        "Chỉ có đúng $1$ điểm chung.",
        "Có đúng $2$ điểm chung.",
        "Có vô số điểm chung.",
        "Không có điểm chung nào."
      ],
      correctIndex: 0,
      explanation: "Nếu $a$ có từ 2 điểm phân biệt chung với $(P)$ thì theo tiên đề 2, toàn bộ $a$ phải nằm trong $(P)$ (mâu thuẫn với giả thiết $a$ không nằm trong $(P)$). Do đó $a$ chỉ có duy nhất 1 điểm chung với $(P)$."
    },
    {
      id: "ai-11.10.3",
      badge: "Luyện thêm 3 - Số mặt và số cạnh hình chóp tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Một hình chóp tam giác có tổng số đỉnh và số mặt bằng:",
      options: [
        "$8$",
        "$6$",
        "$10$",
        "$12$"
      ],
      correctIndex: 0,
      explanation: "Hình chóp tam giác có 4 đỉnh và 4 mặt $\\Rightarrow$ tổng số đỉnh và số mặt là $4 + 4 = 8$."
    },
    {
      id: "ai-11.10.4",
      badge: "Luyện thêm 4 - Xác định mặt phẳng từ điểm và đường thẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho điểm $A$ nằm ngoài đường thẳng $d$. Có bao nhiêu mặt phẳng đi qua $A$ và chứa đường thẳng $d$?",
      options: [
        "Duy nhất $1$ mặt phẳng.",
        "Có $2$ mặt phẳng.",
        "Có vô số mặt phẳng.",
        "Không có mặt phẳng nào."
      ],
      correctIndex: 0,
      explanation: "Một điểm không thuộc một đường thẳng cùng với đường thẳng đó xác định duy nhất một mặt phẳng, ký hiệu $(A, d)$."
    },
    {
      id: "ai-11.10.5",
      badge: "Luyện thêm 5 - Giao tuyến của hai mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho tứ diện $ABCD$. Giao tuyến của hai mặt phẳng $(ABC)$ và $(ACD)$ là đường thẳng:",
      options: [
        "$AC$",
        "$AB$",
        "$AD$",
        "$CD$"
      ],
      correctIndex: 0,
      explanation: "Hai mặt phẳng $(ABC)$ và $(ACD)$ có hai điểm chung phân biệt là $A$ và $C$, do đó giao tuyến là đường thẳng $AC$."
    },
    {
      id: "ai-11.10.6",
      badge: "Luyện thêm 6 - Số đường thẳng từ 4 điểm không đồng phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho 4 điểm $A, B, C, D$ không đồng phẳng. Có bao nhiêu đường thẳng phân biệt đi qua từng cặp điểm trong 4 điểm đó?",
      options: [
        "$6$",
        "$4$",
        "$8$",
        "$12$"
      ],
      correctIndex: 0,
      explanation: "Vì 4 điểm không đồng phẳng nên không có 3 điểm nào thẳng hàng. Số đường thẳng nối từng cặp điểm là $C_4^2 = 6$ đường thẳng."
    },
    {
      id: "ai-11.10.7",
      badge: "Luyện thêm 7 - Giao điểm đường chéo hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình thang với đáy lớn $AB$, đáy nhỏ $CD$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng nối đỉnh $S$ với:",
      options: [
        "Giao điểm của hai đường chéo $AC$ và $BD$.",
        "Giao điểm của hai cạnh bên $AD$ và $BC$.",
        "Trung điểm của cạnh $AB$.",
        "Trung điểm của cạnh $CD$."
      ],
      correctIndex: 0,
      explanation: "Hai mặt phẳng $(SAC)$ và $(SBD)$ cùng đi qua đỉnh $S$ và điểm chung thứ hai là giao điểm của hai đường chéo đáy $AC$ và $BD$."
    },
    {
      id: "ai-11.10.8",
      badge: "Luyện thêm 8 - Số mặt của hình chóp lục giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Hình chóp lục giác có bao nhiêu mặt bên và bao nhiêu mặt đáy?",
      options: [
        "$6$ mặt bên và $1$ mặt đáy.",
        "$6$ mặt bên và $2$ mặt đáy.",
        "$5$ mặt bên và $1$ mặt đáy.",
        "$8$ mặt bên và $1$ mặt đáy."
      ],
      correctIndex: 0,
      explanation: "Hình chóp lục giác có 1 mặt đáy là lục giác và 6 mặt bên là các tam giác."
    },
    {
      id: "ai-11.10.9",
      badge: "Luyện thêm 9 - Tính liên thuộc điểm và mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$. Điểm $P$ nằm trên cạnh bên $SA$. Hỏi điểm $P$ thuộc những mặt phẳng nào sau đây của hình chóp?",
      options: [
        "$(SAB), (SAD)$ và $(SAC)$.",
        "$(SBC)$ và $(SCD)$.",
        "Chỉ thuộc duy nhất $(SAB)$.",
        "$(ABCD)$ và $(SBC)$."
      ],
      correctIndex: 0,
      explanation: "Cạnh bên $SA$ nằm trong các mặt phẳng chứa $S$ và $A$, gồm $(SAB), (SAD)$ và mặt chéo $(SAC)$. Do đó $P$ thuộc cả ba mặt phẳng này."
    },
    {
      id: "ai-11.10.10",
      badge: "Luyện thêm 10 - Vị trí của hai đường thẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho tứ diện $ABCD$. Hai cạnh $AB$ và $CD$ là hai đường thẳng:",
      options: [
        "Chéo nhau (không cùng nằm trong bất kỳ mặt phẳng nào).",
        "Cắt nhau tại một điểm.",
        "Song song với nhau.",
        "Trùng nhau."
      ],
      correctIndex: 0,
      explanation: "Nếu $AB$ và $CD$ cắt nhau hoặc song song thì 4 điểm $A, B, C, D$ đồng phẳng (mâu thuẫn với định nghĩa tứ diện). Do đó $AB$ và $CD$ là hai cạnh đối diện chéo nhau."
    },
    {
      id: "ai-11.10.11",
      badge: "Luyện thêm 11 - Giao điểm cạnh bên và mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho tứ diện $ABCD$. Lấy điểm $K$ trên cạnh $AC$ ($K \\ne A, K \\ne C$). Giao điểm của đường thẳng $DK$ với mặt phẳng $(ABC)$ là:",
      options: [
        "Điểm $K$.",
        "Điểm $D$.",
        "Điểm $A$.",
        "Điểm $C$."
      ],
      correctIndex: 0,
      explanation: "Vì $K \\in AC \\subset (ABC)$ nên $K \\in (ABC)$. Mặt khác $K \\in DK$, do đó $DK \\cap (ABC) = K$."
    },
    {
      id: "ai-11.10.12",
      badge: "Luyện thêm 12 - Mặt phẳng chứa hai đường chéo",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $O$ là giao điểm của $AC$ và $BD$. Mặt phẳng nào sau đây chứa cả đường thẳng $SO$ và đường thẳng $AC$?",
      options: [
        "$(SAC)$",
        "$(SBD)$",
        "$(SAB)$",
        "$(SCD)$"
      ],
      correctIndex: 0,
      explanation: "Ta có $AC \\subset (SAC)$ và $S \\in (SAC), O \\in AC \\subset (SAC) \\Rightarrow SO \\subset (SAC)$. Vậy mặt phẳng đó là $(SAC)$."
    },
    {
      id: "ai-11.10.13",
      badge: "Luyện thêm 13 - Giao tuyến qua điểm chung kéo dài",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình thang ($AB \\parallel CD, AB > CD$). Giao tuyến của $(SAD)$ và $(SBC)$ là:",
      options: [
        "Đường thẳng $SE$ với $E = AD \\cap BC$.",
        "Đường thẳng qua $S$ song song với $AB$.",
        "Đường thẳng $SO$ với $O = AC \\cap BD$.",
        "Đường thẳng $SC$."
      ],
      correctIndex: 0,
      explanation: "Trong hình thang đáy $AB \\parallel CD$, hai cạnh bên $AD$ và $BC$ không song song nên cắt nhau tại $E$. $E$ là điểm chung thứ hai của $(SAD)$ và $(SBC)$. Giao tuyến là $SE$."
    },
    {
      id: "ai-11.10.14",
      badge: "Luyện thêm 14 - Tìm giao điểm đường thẳng và mặt chéo",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ có các đường chéo cắt nhau tại $O$. Điểm $N$ nằm trên cạnh $SD$. Để tìm giao điểm của $AN$ với $(SBD)$, ta tìm giao điểm của $AN$ với:",
      options: [
        "Đường thẳng $SO$.",
        "Đường thẳng $BD$.",
        "Đường thẳng $SB$.",
        "Đường thẳng $SC$."
      ],
      correctIndex: 0,
      explanation: "Chọn mặt phẳng phụ $(SBD)$ không chứa $AN$. Chọn mặt phẳng chứa $AN$ là $(SAD)$. Giao tuyến của $(SAD)$ và $(SBD)$ là $SD$, trên đó có sẵn $N$. Mặt phẳng phụ hợp lý hơn là $(ABCD)$ hoặc xét mặt phẳng $(SAC)$, nhưng $AN$ nằm trong mặt phẳng $(SAD)$. Giao tuyến của $(SAD)$ và $(SBD)$ là $SD$. $AN$ cắt $SD$ tại $N$. Do đó nếu tìm giao điểm của $BN$ với $(SAC)$ thì là giao điểm của $BN$ với $SO$."
    },
    {
      id: "ai-11.10.15",
      badge: "Luyện thêm 15 - Tỉ số trọng tâm trong thiết diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $BCD$, $M$ là trung điểm $AB$. Mặt phẳng $(ABG)$ cắt cạnh $CD$ tại điểm nào?",
      options: [
        "Trung điểm $N$ của $CD$.",
        "Điểm $C$.",
        "Điểm $D$.",
        "Điểm chia $CD$ theo tỉ số $1:3$."
      ],
      correctIndex: 0,
      explanation: "Đường thẳng $BG$ cắt $CD$ tại trung điểm $N$ của $CD$ (vì $BG$ là đường trung tuyến của tam giác $BCD$). Vì $B, G \\in (ABG)$ nên $N \\in (ABG)$. Vậy giao điểm là trung điểm $N$ của $CD$."
    },
    {
      id: "ai-11.10.16",
      badge: "Luyện thêm 16 - Thiết diện hình chóp tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Mặt phẳng đi qua một điểm nằm trong một tam giác mặt bên và cắt tất cả các mặt bên của hình chóp tam giác thì thiết diện tạo thành là:",
      options: [
        "Hình tam giác hoặc tứ giác.",
        "Chỉ có thể là hình ngũ giác.",
        "Hình lục giác.",
        "Đoạn thẳng."
      ],
      correctIndex: 0,
      explanation: "Hình chóp tam giác có 4 mặt (3 mặt bên và 1 mặt đáy), thiết diện tạo thành khi cắt các mặt của nó chỉ có thể là tam giác (cắt 3 mặt) hoặc tứ giác (cắt cả 4 mặt)."
    },
    {
      id: "ai-11.10.17",
      badge: "Luyện thêm 17 - Điều kiện ba điểm thẳng hàng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Để chứng minh ba điểm $P, Q, R$ phân biệt thẳng hàng trong không gian, khẳng định nào sau đây là phương pháp CHÍNH XÁC?",
      options: [
        "Chứng minh $P, Q, R$ cùng thuộc hai mặt phẳng phân biệt $(\\alpha)$ và $(\\beta)$.",
        "Chứng minh độ dài $PQ = QR$.",
        "Chứng minh chúng cùng thuộc một mặt phẳng bất kỳ.",
        "Chứng minh ba đường thẳng nối chúng đôi một song song."
      ],
      correctIndex: 0,
      explanation: "Giao tuyến của hai mặt phẳng phân biệt là một đường thẳng duy nhất. Nếu $P, Q, R$ cùng thuộc cả hai mặt phẳng phân biệt thì chúng phải cùng nằm trên giao tuyến, tức là thẳng hàng."
    },
    {
      id: "ai-11.10.18",
      badge: "Luyện thêm 18 - Số cạnh tối đa thiết diện hình chóp đáy n giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Thiết diện của hình chóp có đáy là đa giác $n$ cạnh khi cắt bởi một mặt phẳng có tối đa bao nhiêu cạnh?",
      options: [
        "$n + 1$ cạnh.",
        "$n$ cạnh.",
        "$2n$ cạnh.",
        "$n + 2$ cạnh."
      ],
      correctIndex: 0,
      explanation: "Hình chóp đáy $n$ giác có $n$ mặt bên và 1 mặt đáy, tổng cộng có $n + 1$ mặt. Một mặt phẳng cắt mỗi mặt nhiều nhất theo 1 đoạn giao tuyến, do đó thiết diện có tối đa $n + 1$ cạnh."
    },
    {
      id: "ai-11.10.19",
      badge: "Luyện thêm 19 - Chu vi thiết diện hình chóp đều",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Mặt phẳng $(\\alpha)$ đi qua trung điểm của các cạnh $SA, SB, SC, SD$. Thiết diện của hình chóp cắt bởi $(\\alpha)$ là hình vuông có chu vi bằng:",
      options: [
        "$2a$",
        "$4a$",
        "$a$",
        "$\\dfrac{a}{2}$"
      ],
      correctIndex: 0,
      explanation: "Các đoạn giao tuyến là các đường trung bình của các tam giác mặt bên, mỗi cạnh thiết diện có độ dài bằng $\\dfrac{a}{2}$. Do đó thiết diện là hình vuông cạnh $\\dfrac{a}{2}$, chu vi bằng $4 \\times \\dfrac{a}{2} = 2a$."
    },
    {
      id: "ai-11.10.20",
      badge: "Luyện thêm 20 - Số giao tuyến tối đa của 6 mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      question: "Trong không gian, cho 6 mặt phẳng phân biệt đôi một cắt nhau và không có ba mặt phẳng nào cùng đi qua một đường thẳng. Số giao tuyến phân biệt tối đa là:",
      options: [
        "$15$",
        "$12$",
        "$20$",
        "$30$"
      ],
      correctIndex: 0,
      explanation: "Số giao tuyến tối đa là số cách chọn 2 mặt phẳng trong 6 mặt phẳng: $C_6^2 = \\dfrac{6 \\times 5}{2} = 15$ giao tuyến."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-11.10.1",
      badge: "Đúng/Sai LT 1 - Tiên đề hình học không gian",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Xét tính Đúng / Sai của các khẳng định sau về hình học không gian:",
      subItems: [
        {
          id: "a",
          text: "Ba điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng.",
          correctAnswer: true,
          explanation: "Đúng, theo tiên đề 1 của hình học không gian."
        },
        {
          id: "b",
          text: "Một đường thẳng và một điểm nằm trên đường thẳng đó xác định duy nhất một mặt phẳng.",
          correctAnswer: false,
          explanation: "Sai, điểm phải nằm ngoài đường thẳng thì mới xác định duy nhất một mặt phẳng. Nếu điểm nằm trên đường thẳng thì có vô số mặt phẳng đi qua."
        },
        {
          id: "c",
          text: "Nếu hai mặt phẳng phân biệt có điểm chung thì tập hợp tất cả các điểm chung là một đường thẳng duy nhất.",
          correctAnswer: true,
          explanation: "Đúng, đây là tính chất về giao tuyến của hai mặt phẳng."
        },
        {
          id: "d",
          text: "Hình biểu diễn của tam giác vuông luôn là một tam giác vuông.",
          correctAnswer: false,
          explanation: "Sai, phép chiếu song song không bảo toàn độ lớn góc, nên hình biểu diễn của tam giác vuông thường là một tam giác thường."
        }
      ]
    },
    {
      id: "ai-tf-11.10.2",
      badge: "Đúng/Sai LT 2 - Tứ diện và hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho tứ diện $S.ABC$. Lấy $M \\in SA, N \\in SB$ sao cho $MN$ không song song với $AB$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Hai đường thẳng $MN$ và $AB$ cắt nhau tại một điểm duy nhất.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN$ và $AB$ cùng nằm trong mặt phẳng $(SAB)$ và không song song nên cắt nhau."
        },
        {
          id: "b",
          text: "Giao điểm của $MN$ và $AB$ thuộc mặt phẳng $(ABC)$.",
          correctAnswer: true,
          explanation: "Đúng, vì giao điểm thuộc $AB$ mà $AB \\subset (ABC)$."
        },
        {
          id: "c",
          text: "Đường thẳng $MN$ cắt đường thẳng $SC$.",
          correctAnswer: false,
          explanation: "Sai, $MN$ nằm trong mặt phẳng $(SAB)$ mà $C \\notin (SAB)$ nên $SC$ và $MN$ chéo nhau."
        },
        {
          id: "d",
          text: "Giao tuyến của mặt phẳng $(CMN)$ với mặt phẳng $(ABC)$ là đường thẳng nối $C$ với giao điểm của $MN$ và $AB$.",
          correctAnswer: true,
          explanation: "Đúng, vì điểm $C$ là điểm chung thứ nhất và $E = MN \\cap AB$ là điểm chung thứ hai."
        }
      ]
    },
    {
      id: "ai-tf-11.10.3",
      badge: "Đúng/Sai LT 3 - Hình chóp hình bình hành",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SD$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $BM$ nằm trong mặt phẳng $(SBD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $B \\in (SBD)$ và $M \\in SD \\subset (SBD)$."
        },
        {
          id: "b",
          text: "Đoạn thẳng $BM$ cắt đoạn thẳng $SO$ tại trọng tâm tam giác $SBD$.",
          correctAnswer: true,
          explanation: "Đúng, trong $\\triangle SBD$, $SO$ và $BM$ là hai đường trung tuyến nên cắt nhau tại trọng tâm."
        },
        {
          id: "c",
          text: "Giao điểm của $BM$ với mặt phẳng $(SAC)$ là giao điểm của $BM$ và $SO$.",
          correctAnswer: true,
          explanation: "Đúng, vì $SO = (SAC) \\cap (SBD)$."
        },
        {
          id: "d",
          text: "Mặt phẳng $(ABM)$ cắt cạnh $SC$ tại trung điểm của $SC$.",
          correctAnswer: false,
          explanation: "Sai, mặt phẳng $(ABM)$ đi qua $AB \\parallel CD$ nên giao tuyến với $(SCD)$ qua $M$ song song với $CD$, cắt $SC$ tại trung điểm $N$ của $SC$. Tuy nhiên mệnh đề cần kiểm tra chính xác: $N$ là trung điểm của $SC$ (đúng, vì $M$ là trung điểm $SD$ và $MN \\parallel CD$). Nhưng ở đây phát biểu là: thiết diện luôn là hình bình hành (nếu là hình thang)."
        }
      ]
    },
    {
      id: "ai-tf-11.10.4",
      badge: "Đúng/Sai LT 4 - Điểm và đường thẳng trong không gian",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho ba đường thẳng $a, b, c$ phân biệt không cùng nằm trong một mặt phẳng và đôi một cắt nhau. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Ba đường thẳng $a, b, c$ phải cùng đi qua một điểm (đồng quy).",
          correctAnswer: true,
          explanation: "Đúng, nếu 3 đường thẳng đôi một cắt nhau mà không đồng quy thì 3 giao điểm tạo thành một tam giác, do đó 3 đường thẳng phải cùng nằm trong một mặt phẳng (mâu thuẫn giả thiết). Vậy chúng phải đồng quy."
        },
        {
          id: "b",
          text: "Có ba mặt phẳng phân biệt được tạo bởi từng cặp đường thẳng trong $a, b, c$.",
          correctAnswer: true,
          explanation: "Đúng, mỗi cặp 2 đường thẳng cắt nhau tạo thành 1 mặt phẳng, có $C_3^2 = 3$ mặt phẳng: $(a, b), (b, c), (c, a)$."
        },
        {
          id: "c",
          text: "Điểm đồng quy của $a, b, c$ thuộc cả ba mặt phẳng nói trên.",
          correctAnswer: true,
          explanation: "Đúng, vì điểm đồng quy là điểm chung của cả 3 đường thẳng."
        },
        {
          id: "d",
          text: "Giao tuyến của hai mặt phẳng $(a, b)$ và $(b, c)$ chính là đường thẳng $a$.",
          correctAnswer: false,
          explanation: "Sai, giao tuyến của $(a, b)$ và $(b, c)$ là đường thẳng chung $b$, chứ không phải $a$."
        }
      ]
    },
    {
      id: "ai-tf-11.10.5",
      badge: "Đúng/Sai LT 5 - Thiết diện tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho tứ diện đều $ABCD$ cạnh $a$. Gọi $I, J$ lần lượt là trung điểm của $AB$ và $CD$. Mặt phẳng $(\\alpha)$ chứa $IJ$ và vuông góc hoặc cắt các mặt. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Điểm $I$ thuộc mặt phẳng $(ABC)$ và $(ABD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $I$ thuộc cạnh $AB$ là giao tuyến của hai mặt phẳng này."
        },
        {
          id: "b",
          text: "Thiết diện của tứ diện cắt bởi mặt phẳng $(ACD)$ chính là tam giác $ACD$.",
          correctAnswer: true,
          explanation: "Đúng, mặt phẳng cắt trùng với một mặt của tứ diện thì thiết diện chính là mặt đó."
        },
        {
          id: "c",
          text: "Độ dài đoạn nối trung điểm $IJ$ bằng $\\dfrac{a\\sqrt{2}}{2}$.",
          correctAnswer: true,
          explanation: "Đúng, trong tứ diện đều cạnh $a$, đoạn nối trung điểm hai cạnh đối diện có độ dài $IJ = \\sqrt{a^2 - (a/2)^2 - (a/2)^2} = \\dfrac{a\\sqrt{2}}{2}$."
        },
        {
          id: "d",
          text: "Mọi thiết diện của tứ diện đều luôn là các tam giác đều.",
          correctAnswer: false,
          explanation: "Sai, thiết diện có thể là tam giác cân, hình bình hành, hình thoi hoặc hình chữ nhật tùy thuộc vào mặt phẳng cắt."
        }
      ]
    },
    {
      id: "ai-tf-11.10.6",
      badge: "Đúng/Sai LT 6 - Hình chóp và đa giác đáy",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho hình chóp $S.A_1A_2\\dots A_n$ có đáy là đa giác lồi $n$ cạnh ($n \\ge 3$). Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Số mặt của hình chóp bằng $n + 1$.",
          correctAnswer: true,
          explanation: "Đúng, gồm $n$ mặt bên và 1 mặt đáy."
        },
        {
          id: "b",
          text: "Số cạnh của hình chóp bằng $2n$.",
          correctAnswer: true,
          explanation: "Đúng, gồm $n$ cạnh đáy và $n$ cạnh bên."
        },
        {
          id: "c",
          text: "Số đỉnh của hình chóp bằng $n + 1$.",
          correctAnswer: true,
          explanation: "Đúng, gồm $n$ đỉnh đáy và 1 đỉnh chóp $S$."
        },
        {
          id: "d",
          text: "Số đường chéo của hình chóp xuất phát từ đỉnh $S$ bằng $n(n - 3) / 2$.",
          correctAnswer: false,
          explanation: "Sai, đoạn thẳng nối $S$ với các đỉnh đáy đều là các cạnh bên của hình chóp, không gọi là đường chéo xuất phát từ $S$."
        }
      ]
    },
    {
      id: "ai-tf-11.10.7",
      badge: "Đúng/Sai LT 7 - Quan hệ liên thuộc và mặt phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AC$, điểm $N$ trên cạnh $AD$ sao cho $MN$ cắt $CD$ tại $I$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Ba điểm $M, N, I$ thẳng hàng.",
          correctAnswer: true,
          explanation: "Đúng, theo giả thiết $I$ là giao điểm của đường thẳng $MN$ và $CD$ nên $I \\in MN$."
        },
        {
          id: "b",
          text: "Điểm $I$ thuộc mặt phẳng $(BCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $I \\in CD$ mà $CD \\subset (BCD)$."
        },
        {
          id: "c",
          text: "Điểm $I$ là điểm chung của mặt phẳng $(BMN)$ và mặt phẳng $(BCD)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $I \\in MN \\subset (BMN)$ và $I \\in CD \\subset (BCD)$."
        },
        {
          id: "d",
          text: "Giao tuyến của mặt phẳng $(BMN)$ và mặt phẳng $(BCD)$ là đường thẳng $BI$.",
          correctAnswer: true,
          explanation: "Đúng, vì $B$ và $I$ là hai điểm chung phân biệt của hai mặt phẳng."
        }
      ]
    },
    {
      id: "ai-tf-11.10.8",
      badge: "Đúng/Sai LT 8 - Thiết diện hình chóp tứ giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ ($AB \\parallel CD$). Gọi $(\\alpha)$ là mặt phẳng qua $C$ và cắt các cạnh $SA, SB$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Thiết diện của hình chóp cắt bởi $(\\alpha)$ không thể là tam giác.",
          correctAnswer: false,
          explanation: "Sai, nếu $(\\alpha)$ chỉ cắt cạnh $SA, SB$ và đi qua đỉnh $C$ mà không cắt cạnh $SD$ thì thiết diện có thể là tam giác hoặc tứ giác tùy thuộc vị trí."
        },
        {
          id: "b",
          text: "Thiết diện có thể là một tứ giác.",
          correctAnswer: true,
          explanation: "Đúng, khi $(\\alpha)$ cắt 4 mặt của hình chóp."
        },
        {
          id: "c",
          text: "Thiết diện có thể là một ngũ giác.",
          correctAnswer: true,
          explanation: "Đúng, khi $(\\alpha)$ cắt cả 4 mặt bên và 1 mặt đáy."
        },
        {
          id: "d",
          text: "Thiết diện có thể là một lục giác.",
          correctAnswer: false,
          explanation: "Sai, vì hình chóp tứ giác chỉ có 5 mặt nên thiết diện có tối đa 5 cạnh (ngũ giác), không thể có 6 cạnh."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-11.10.1",
      badge: "Luyện thêm TLN 1 - Số cạnh tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Một hình tứ diện có bao nhiêu cạnh?",
      correctAnswer: "6",
      acceptableAnswers: ["6"],
      explanation: "Hình tứ diện có 4 đỉnh, số cạnh bằng $C_4^2 = 6$ cạnh."
    },
    {
      id: "ai-sa-11.10.2",
      badge: "Luyện thêm TLN 2 - Số mặt hình chóp đáy bát giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Một hình chóp có đáy là bát giác (8 cạnh). Hỏi hình chóp đó có tất cả bao nhiêu mặt?",
      correctAnswer: "9",
      acceptableAnswers: ["9"],
      explanation: "Hình chóp có 8 mặt bên và 1 mặt đáy, tổng số mặt là $8 + 1 = 9$ mặt."
    },
    {
      id: "ai-sa-11.10.3",
      badge: "Luyện thêm TLN 3 - Số cạnh hình chóp có 10 đỉnh",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Một hình chóp có tất cả 10 đỉnh. Hỏi hình chóp đó có bao nhiêu cạnh?",
      correctAnswer: "18",
      acceptableAnswers: ["18"],
      explanation: "Đáy có $10 - 1 = 9$ đỉnh $\\Rightarrow$ đáy là đa giác 9 cạnh. Số cạnh của hình chóp là $2n = 2 \\times 9 = 18$ cạnh."
    },
    {
      id: "ai-sa-11.10.4",
      badge: "Luyện thêm TLN 4 - Số mặt phẳng từ 6 điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho 6 điểm phân biệt trong không gian, không có 4 điểm nào đồng phẳng. Có bao nhiêu mặt phẳng phân biệt xác định từ 3 trong 6 điểm đó?",
      correctAnswer: "20",
      acceptableAnswers: ["20"],
      explanation: "Số mặt phẳng là $C_6^3 = \\dfrac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$ mặt phẳng."
    },
    {
      id: "ai-sa-11.10.5",
      badge: "Luyện thêm TLN 5 - Tỉ số trọng tâm hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho hình chóp $S.ABC$. Gọi $M$ là trung điểm của $BC$, $G$ là trọng tâm của tam giác $ABC$. Tính tỉ số $\\dfrac{AG}{AM}$ (dưới dạng phân số tối giản a/b).",
      correctAnswer: "2/3",
      acceptableAnswers: ["2/3", "0.67", "0,67"],
      explanation: "Theo tính chất trọng tâm tam giác, trọng tâm chia đường trung tuyến theo tỉ số $\\dfrac{AG}{AM} = \\dfrac{2}{3}$."
    },
    {
      id: "ai-sa-11.10.6",
      badge: "Luyện thêm TLN 6 - Số đường thẳng từ 5 điểm không đồng phẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho 5 điểm phân biệt trong không gian không có 3 điểm nào thẳng hàng. Có bao nhiêu đường thẳng phân biệt đi qua từng cặp điểm?",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "Số đường thẳng là $C_5^2 = \\dfrac{5 \\times 4}{2} = 10$ đường thẳng."
    },
    {
      id: "ai-sa-11.10.7",
      badge: "Luyện thêm TLN 7 - Chu vi thiết diện tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho tứ diện đều $ABCD$ có cạnh bằng 10. Mặt phẳng $(P)$ song song với $BC$ và $AD$ cắt các cạnh $AB, AC, CD, BD$ lần lượt tại 4 điểm tạo thành hình thoi thiết diện. Chu vi của hình thoi thiết diện bằng bao nhiêu?",
      correctAnswer: "20",
      acceptableAnswers: ["20"],
      explanation: "Thiết diện là hình thoi có các cạnh bằng $\\dfrac{1}{2}$ cạnh tứ diện khi mặt phẳng đi qua trung điểm, tức cạnh bằng 5. Chu vi là $4 \\times 5 = 20$."
    },
    {
      id: "ai-sa-11.10.8",
      badge: "Luyện thêm TLN 8 - Số đỉnh của hình chóp 30 cạnh",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Một hình chóp có đúng 30 cạnh. Hỏi hình chóp đó có bao nhiêu đỉnh?",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "Số cạnh $2n = 30 \\Rightarrow n = 15$. Số đỉnh của hình chóp là $n + 1 = 15 + 1 = 16$ đỉnh."
    },
    {
      id: "ai-sa-11.10.9",
      badge: "Luyện thêm TLN 9 - Số cặp cạnh đối diện trong tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Một hình tứ diện $ABCD$ có bao nhiêu cặp cạnh đối diện nhau?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Có 3 cặp cạnh đối diện: $(AB, CD)$, $(AC, BD)$, và $(AD, BC)$."
    },
    {
      id: "ai-sa-11.10.10",
      badge: "Luyện thêm TLN 10 - Số mặt phẳng tối đa từ 4 đường thẳng cắt nhau",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B1",
      prompt: "Cho 4 đường thẳng phân biệt cùng đi qua một điểm $O$, trong đó không có 3 đường thẳng nào cùng nằm trên một mặt phẳng. Có bao nhiêu mặt phẳng phân biệt được tạo bởi từng cặp đường thẳng?",
      correctAnswer: "6",
      acceptableAnswers: ["6"],
      explanation: "Cứ mỗi cặp hai đường thẳng cắt nhau tại $O$ xác định 1 mặt phẳng. Số mặt phẳng tạo thành là $C_4^2 = 6$ mặt phẳng."
    }
  ]
};
