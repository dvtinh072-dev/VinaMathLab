import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export const GRADE_11_LESSON_11: DetailedLessonData = {
  id: "t11-b11-hai-duong-thang-song-song",
  lessonNumber: 11,
  title: "Bài 11: Hai đường thẳng song song",
  bookChapter: "Chương IV: Quan hệ song song trong không gian (SGK Toán 11 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Đường ray xe lửa trên cầu vượt, dây cáp cầu văng và vị trí tương đối của hai đường thẳng",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, khi nhìn lên cầu vượt ngã tư, em thấy một đoàn tàu hỏa chạy trên cầu vượt còn phía dưới là dòng xe ô tô chạy cắt ngang. Hai con đường đó không bao giờ gặp nhau, nhưng chúng cũng không song song với nhau. Đó là mối quan hệ gì trong không gian ạ?",
      visualGraphic: "box",
      mathNote: "a \\text{ và } b \\text{ chéo nhau} \\iff \\text{không đồng phẳng}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Đó chính là vị trí **chéo nhau** của hai đường thẳng trong không gian! Khác với hình học phẳng (hai đường thẳng không cắt nhau thì song song), trong không gian 3 chiều, hai đường thẳng không có điểm chung có thể song song (nếu cùng nằm trong một mặt phẳng) hoặc chéo nhau (nếu không cùng nằm trong bất kỳ mặt phẳng nào).",
      visualGraphic: "box",
      mathNote: "a \\parallel b \\iff a, b \\subset (P) \\text{ và } a \\cap b = \\emptyset"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thật trực quan ạ! Vậy các định lý về hai đường thẳng cùng song song với đường thẳng thứ ba, và cách tìm giao tuyến song song của hai mặt phẳng được áp dụng như thế nào trong giải toán hình chóp và tứ diện ạ?",
      visualGraphic: "box",
      mathNote: "a \\parallel c, b \\parallel c \\implies a \\parallel b"
    }
  ],
  youtubeVideoId: "9oXWqEw1r9s",
  youtubeVideoTitle: "Bài 11: Hai đường thẳng song song - Toán 11 Kết nối tri thức (Tiết 1)",
  youtubeVideos: [
    {
      id: "9oXWqEw1r9s",
      title: "Bài 11: Hai đường thẳng song song - Toán 11 Kết nối tri thức (Tiết 1)"
    },
    {
      id: "7X1G8jV5l0U",
      title: "Bài 11: Hai đường thẳng song song và chéo nhau (Tiết 2) - KNTT"
    },
    {
      id: "k9xL2pQ5mYo",
      title: "Kỹ thuật xác định giao tuyến song song và thiết diện qua đường song song"
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Vị trí tương đối của hai đường thẳng trong không gian",
      points: [
        "Cho hai đường thẳng $a$ và $b$ trong không gian. Có hai trường hợp xảy ra:",
        "**Trường hợp 1: Có một mặt phẳng chứa $a$ và $b$ (đồng phẳng):**",
        "+ $a$ và $b$ cắt nhau: Có đúng một điểm chung duy nhất, ký hiệu $a \\cap b = \{I\}$.",
        "+ $a$ và $b$ song song: Không có điểm chung nào, ký hiệu $a \\parallel b$.",
        "+ $a$ và $b$ trùng nhau: Có vô số điểm chung, ký hiệu $a \\equiv b$.",
        "**Trường hợp 2: Không có mặt phẳng nào chứa cả $a$ và $b$ (không đồng phẳng):**",
        "+ Khi đó ta nói hai đường thẳng $a$ và $b$ **chéo nhau**.",
        "+ Nhận xét: Hai đường thẳng chéo nhau thì không có điểm chung và không đồng phẳng."
      ],
      examples: [
        {
          title: "Ví dụ 1",
          problem: "Cho tứ diện $ABCD$. Chỉ ra các cặp cạnh chéo nhau của tứ diện.",
          solution: "Tứ diện $ABCD$ có 4 đỉnh không đồng phẳng nên các cặp cạnh đối diện không cùng thuộc mặt phẳng nào. Do đó có 3 cặp cạnh chéo nhau là: $AB$ và $CD$; $AC$ và $BD$; $AD$ và $BC$."
        }
      ]
    },
    {
      index: "2",
      title: "2. Tính chất của hai đường thẳng song song",
      points: [
        "**Định lý 1 (Tiên đề Euclid trong không gian):**",
        "+ Trong không gian, qua một điểm không nằm trên một đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đó.",
        "**Định lý 2 (Tính chất bắc cầu):**",
        "+ Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau: $\\begin{cases} a \\parallel c \\ b \\parallel c \\end{cases} \\implies a \\parallel b$."
      ],
      examples: [
        {
          title: "Ví dụ 2",
          problem: "Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$. Chứng minh $MN \\parallel PQ$.",
          solution: "Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN \\parallel AC$. Trong tam giác $ADC$, $PQ$ là đường trung bình nên $PQ \\parallel AC$. Vì $MN \\parallel AC$ và $PQ \\parallel AC$ nên theo tính chất bắc cầu, ta có $MN \\parallel PQ$."
        }
      ]
    },
    {
      index: "3",
      title: "3. Định lý giao tuyến của ba mặt phẳng (Định lý ba giao tuyến)",
      points: [
        "**Định lý 3:**",
        "+ Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến ấy hoặc **đồng quy** hoặc **đôi một song song**.",
        "+ $\\begin{cases} (P) \\cap (Q) = a \\ (Q) \\cap (R) = b \\ (R) \\cap (P) = c \\end{cases} \\implies a, b, c \\text{ đồng quy hoặc } a \\parallel b \\parallel c$."
      ],
      examples: [
        {
          title: "Ví dụ 3",
          problem: "Cho ba mặt phẳng $(P), (Q), (R)$ cắt nhau theo 3 giao tuyến $a, b, c$. Biết $a \\parallel b$. Kết luận gì về vị trí của $c$ so với $a$ và $b$?",
          solution: "Theo định lý ba giao tuyến, nếu hai giao tuyến $a$ và $b$ song song nhau thì giao tuyến thứ ba $c$ không thể cắt chúng, do đó ba giao tuyến đôi một song song, tức là $c \\parallel a \\parallel b$."
        }
      ]
    },
    {
      index: "4",
      title: "4. Hệ quả tìm giao tuyến song song (Cực kỳ quan trọng)",
      points: [
        "**Hệ quả:** Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) cũng song song với hai đường thẳng đó (hoặc trùng với một trong hai đường thẳng đó).",
        "$$\\begin{cases} a \\subset (P), b \\subset (Q) \\ a \\parallel b \\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a \\parallel b$$",
        "**Quy tắc tìm giao tuyến khi có yếu tố song song:**",
        "+ Tìm 1 điểm chung $S$ của hai mặt phẳng $(P)$ và $(Q)$.",
        "+ Nhận thấy $(P)$ chứa đường thẳng $a$, $(Q)$ chứa đường thẳng $b$, mà $a \\parallel b$.",
        "+ Kết luận: Giao tuyến là đường thẳng $d$ đi qua $S$ và $d \\parallel a \\parallel b$."
      ],
      examples: [
        {
          title: "Ví dụ 4",
          problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD$). Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.",
          solution: "Ta có: Điểm $S$ là điểm chung của $(SAB)$ và $(SCD)$. Mặt khác, $AB \\subset (SAB)$, $CD \\subset (SCD)$ và $AB \\parallel CD$. Do đó, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và song song với $AB, CD$."
        }
      ]
    },
    {
      index: "5",
      title: "5. Các phương pháp giải toán trọng tâm",
      points: [
        "**Dạng 1: Chứng minh hai đường thẳng $a$ và $b$ song song trong không gian:**",
        "+ Cách 1: Sử dụng các tính chất hình học phẳng (đường trung bình của tam giác/hình thang, định lý Thales đảo, cặp cạnh đối của hình bình hành) trong một mặt phẳng chứa cả $a$ và $b$.",
        "+ Cách 2: Sử dụng tính chất bắc cầu: Chứng minh cùng song song với đường thẳng thứ ba ($a \\parallel c$ và $b \\parallel c$).",
        "+ Cách 3: Sử dụng định lý ba giao tuyến hoặc hệ quả giao tuyến của hai mặt phẳng.",
        "**Dạng 2: Tìm giao tuyến của hai mặt phẳng đi qua điểm chung và chứa hai đường thẳng song song:**",
        "+ Xác định điểm chung $M$, vẽ qua $M$ đường thẳng song song với hai đường thẳng đó.",
        "**Dạng 3: Xác định thiết diện của hình chóp cắt bởi mặt phẳng song song với một đường thẳng:**",
        "+ Sử dụng hệ quả giao tuyến: Mặt phẳng cắt các mặt chứa các đường thẳng song song theo các giao tuyến song song."
      ],
      examples: [
        {
          title: "Ví dụ 5",
          problem: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Mặt phẳng $(\\alpha)$ đi qua cạnh $AB$ và cắt cạnh $SC$ tại $M$. Tìm giao tuyến của $(\\alpha)$ với mặt phẳng $(SCD)$.",
          solution: "Mặt phẳng $(\\alpha)$ chứa $AB$, mặt phẳng $(SCD)$ chứa $CD$, mà $AB \\parallel CD$. Điểm $M$ là điểm chung của $(\\alpha)$ và $(SCD)$. Do đó giao tuyến của $(\\alpha)$ và $(SCD)$ là đường thẳng $Mx$ qua $M$ và $Mx \\parallel CD \\parallel AB$."
        }
      ]
    }
  ],
  videoQuestions: [
    {
      id: "vq-11.11.1",
      timeSeconds: 150,
      timeLabel: "02:30",
      title: "Khái niệm hai đường thẳng chéo nhau",
      question: "Hai đường thẳng được gọi là chéo nhau khi nào?",
      options: [
        "Khi chúng không cùng nằm trong bất kỳ mặt phẳng nào",
        "Khi chúng không có điểm chung và cùng nằm trong một mặt phẳng",
        "Khi chúng cắt nhau tạo thành góc $90^\\circ$",
        "Khi chúng cùng song song với một mặt phẳng"
      ],
      correctIndex: 0,
      explanation: "Định nghĩa: Hai đường thẳng chéo nhau là hai đường thẳng không cùng nằm trong bất kỳ mặt phẳng nào."
    },
    {
      id: "vq-11.11.2",
      timeSeconds: 340,
      timeLabel: "05:40",
      title: "Tính chất bắc cầu",
      question: "Trong không gian, cho ba đường thẳng phân biệt $a, b, c$. Nếu $a \\parallel c$ và $b \\parallel c$ thì:",
      options: [
        "$a \\parallel b$",
        "$a$ và $b$ chéo nhau",
        "$a$ cắt $b$",
        "$a$ vuông góc với $b$"
      ],
      correctIndex: 0,
      explanation: "Theo tính chất bắc cầu: Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau."
    },
    {
      id: "vq-11.11.3",
      timeSeconds: 560,
      timeLabel: "09:20",
      title: "Hệ quả giao tuyến song song",
      question: "Cho hai mặt phẳng phân biệt $(P)$ và $(Q)$ lần lượt chứa hai đường thẳng song song $a$ và $b$. Nếu $(P)$ cắt $(Q)$ theo giao tuyến $d$ thì:",
      options: [
        "$d$ song song với cả $a$ và $b$",
        "$d$ cắt cả $a$ và $b$",
        "$d$ chéo nhau với $a$",
        "$d$ vuông góc với $a$"
      ],
      correctIndex: 0,
      explanation: "Theo hệ quả: Giao tuyến của hai mặt phẳng lần lượt chứa hai đường thẳng song song thì song song với hai đường thẳng đó."
    }
  ],
  tips: [
    "Để chứng minh hai đường thẳng song song trong không gian, ưu tiên tìm một mặt phẳng chứa cả hai đường rồi vận dụng định lý đường trung bình hoặc định lý Thales phẳng.",
    "Khi bài toán cho hình chóp có đáy là hình thang ($AB \\parallel CD$) hoặc hình bình hành, giao tuyến của $(SAB)$ và $(SCD)$ luôn là đường thẳng qua $S$ và song song với $AB, CD$.",
    "Ghi nhớ: 'Không có điểm chung' trong không gian CHƯA ĐỦ để kết luận hai đường thẳng song song, vì chúng có thể chéo nhau!",
    "Trong tứ diện $ABCD$, đoạn nối trung điểm của hai cặp cạnh đối diện luôn tạo thành một hình bình hành có các cạnh song song với các cạnh của tứ diện."
  ],
  traps: [
    "Bẫy đồng phẳng: Khẳng định 'hai đường thẳng không có điểm chung thì song song' là SAI vì thiếu điều kiện đồng phẳng (chúng có thể chéo nhau).",
    "Nhầm lẫn giao tuyến: Khi tìm giao tuyến của $(SAB)$ và $(SCD)$ với $AB \\parallel CD$, nhiều bạn lầm tưởng giao tuyến cắt $AB, CD$. Thực tế giao tuyến song song với $AB$ và $CD$ nên không bao giờ cắt chúng.",
    "Bẫy đếm cặp cạnh chéo nhau: Tứ diện có 6 cạnh, tạo ra 3 cặp cạnh chéo nhau (các cặp cạnh đối diện), chứ không phải 6 cặp.",
    "Bẫy bắc cầu chéo nhau: Nếu $a$ chéo $c$ và $b$ chéo $c$ thì $a$ và $b$ KHÔNG nhất thiết chéo nhau (chúng có thể song song hoặc cắt nhau)."
  ],
  quizQuestions: [
    {
      id: "quiz-11.11.1",
      badge: "Câu 1 - Nhận biết - Định nghĩa hai đường thẳng song song",
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Trong không gian, hai đường thẳng được gọi là song song nếu:",
      options: [
        "Chúng cùng nằm trong một mặt phẳng và không có điểm chung.",
        "Chúng không có điểm chung nào.",
        "Chúng không cùng nằm trong bất kỳ mặt phẳng nào.",
        "Chúng cùng nằm trong một mặt phẳng và có vô số điểm chung."
      ],
      correctIndex: 0,
      explanation: "Hai đường thẳng song song là hai đường thẳng đồng phẳng (cùng thuộc một mặt phẳng) và không có điểm chung."
    },
    {
      id: "quiz-11.11.2",
      badge: "Câu 2 - Nhận biết - Hai đường thẳng chéo nhau",
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Khẳng định nào sau đây là ĐÚNG về hai đường thẳng chéo nhau?",
      options: [
        "Hai đường thẳng chéo nhau là hai đường thẳng không cùng thuộc một mặt phẳng.",
        "Hai đường thẳng chéo nhau là hai đường thẳng không có điểm chung.",
        "Hai đường thẳng phân biệt không cắt nhau thì chéo nhau.",
        "Hai đường thẳng chéo nhau có thể cùng nằm trên một mặt phẳng."
      ],
      correctIndex: 0,
      explanation: "Định nghĩa: Hai đường thẳng không cùng thuộc một mặt phẳng gọi là hai đường thẳng chéo nhau."
    },
    {
      id: "quiz-11.11.3",
      badge: "Câu 3 - Nhận biết - Số đường thẳng song song qua 1 điểm ngoài đường thẳng",
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Trong không gian, cho đường thẳng $d$ và điểm $M$ không thuộc $d$. Có bao nhiêu đường thẳng đi qua $M$ và song song với $d$?",
      options: [
        "Duy nhất $1$ đường thẳng.",
        "Có vô số đường thẳng.",
        "Có đúng $2$ đường thẳng.",
        "Không có đường thẳng nào."
      ],
      correctIndex: 0,
      explanation: "Theo định lý 1 (tiên đề Euclid trong không gian): Qua một điểm nằm ngoài đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đó."
    },
    {
      id: "quiz-11.11.4",
      badge: "Câu 4 - Nhận biết - Số cặp cạnh chéo nhau của hình tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Một hình tứ diện có tất cả bao nhiêu cặp cạnh đối diện chéo nhau?",
      options: [
        "$3$ cặp.",
        "$4$ cặp.",
        "$6$ cặp.",
        "$2$ cặp."
      ],
      correctIndex: 0,
      explanation: "Tứ diện $ABCD$ có 6 cạnh, gồm 3 cặp cạnh đối diện chéo nhau: $(AB, CD)$, $(AC, BD)$, $(AD, BC)$."
    },
    {
      id: "quiz-11.11.5",
      badge: "Câu 5 - Nhận biết - Định lý ba giao tuyến",
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó:",
      options: [
        "Hoặc đồng quy, hoặc đôi một song song.",
        "Luôn đồng quy tại một điểm.",
        "Luôn đôi một song song với nhau.",
        "Hoặc trùng nhau, hoặc cắt nhau tại ba điểm phân biệt."
      ],
      correctIndex: 0,
      explanation: "Định lý ba giao tuyến khẳng định: Ba giao tuyến phân biệt của ba mặt phẳng đôi một cắt nhau hoặc đồng quy hoặc đôi một song song."
    },
    {
      id: "quiz-11.11.6",
      badge: "Câu 6 - Thông hiểu - Vị trí tương đối của hai cạnh hình chóp",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Cặp đường thẳng nào sau đây CHÉO NHAU?",
      options: [
        "$SA$ và $BC$.",
        "$AB$ và $CD$.",
        "$SA$ và $SC$.",
        "$SB$ và $SD$."
      ],
      correctIndex: 0,
      explanation: "$SA$ và $BC$ không cùng nằm trong bất kỳ mặt phẳng nào nên chúng chéo nhau. Còn $AB \\parallel CD$, $SA$ cắt $SC$ tại $S$, $SB$ cắt $SD$ tại $S$."
    },
    {
      id: "quiz-11.11.7",
      badge: "Câu 7 - Thông hiểu - Đường trung bình trong tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Vị trí tương đối của đường thẳng $MN$ và đường thẳng $CD$ là:",
      options: [
        "Chéo nhau.",
        "Song song.",
        "Cắt nhau.",
        "Trùng nhau."
      ],
      correctIndex: 0,
      explanation: "Trong $\\triangle ABC$, $MN$ là đường trung bình nên $MN \\parallel BC$. Vì $BC$ và $CD$ cắt nhau tại $C$ và $MN$ không nằm trong $(BCD)$ nên $MN$ và $CD$ chéo nhau."
    },
    {
      id: "quiz-11.11.8",
      badge: "Câu 8 - Thông hiểu - Giao tuyến hình chóp đáy hình thang",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$, đáy nhỏ $CD$. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
      options: [
        "Đường thẳng đi qua $S$ và song song với $AB, CD$.",
        "Đường thẳng $SO$ với $O = AC \\cap BD$.",
        "Đường thẳng $SE$ với $E = AD \\cap BC$.",
        "Đường thẳng $SC$."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng $(SAB)$ chứa $AB$, mặt phẳng $(SCD)$ chứa $CD$, mà $AB \\parallel CD$. Điểm $S$ là điểm chung của hai mặt phẳng. Do đó giao tuyến là đường thẳng qua $S$ và song song với $AB, CD$."
    },
    {
      id: "quiz-11.11.9",
      badge: "Câu 9 - Thông hiểu - Tứ giác tạo bởi 4 trung điểm trong tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$. Gọi $I, J, K, L$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$. Tứ giác $IJKL$ là hình gì?",
      options: [
        "Hình bình hành.",
        "Hình thang vuông.",
        "Hình chữ nhật.",
        "Hình vuông."
      ],
      correctIndex: 0,
      explanation: "Ta có $IJ$ là đường trung bình của $\\triangle ABC \\implies IJ \\parallel AC, IJ = \\dfrac{AC}{2}$. $LK$ là đường trung bình của $\\triangle DAC \\implies LK \\parallel AC, LK = \\dfrac{AC}{2}$. Suy ra $IJ \\parallel LK$ và $IJ = LK$. Vậy $IJKL$ là hình bình hành."
    },
    {
      id: "quiz-11.11.10",
      badge: "Câu 10 - Thông hiểu - Quan hệ song song bắc cầu",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$. Khẳng định nào sau đây SAI?",
      options: [
        "$MN$ cắt $PQ$.",
        "$MN \\parallel AB$.",
        "$PQ \\parallel CD$.",
        "$MN \\parallel PQ$."
      ],
      correctIndex: 0,
      explanation: "$MN \\parallel AB$ và $PQ \\parallel CD$. Mà $AB \\parallel CD \\implies MN \\parallel PQ$. Do đó $MN$ không thể cắt $PQ$. Khẳng định $MN$ cắt $PQ$ là SAI."
    },
    {
      id: "quiz-11.11.11",
      badge: "Câu 11 - Thông hiểu - Giao tuyến của mặt phẳng qua trung điểm",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M$ là trung điểm cạnh $SC$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $BD, SA$. Giao tuyến của $(\\alpha)$ với mặt phẳng $(SBD)$ là:",
      options: [
        "Đường thẳng song song với $BD$.",
        "Đường thẳng cắt $BD$ tại $O$.",
        "Đường thẳng vuông góc với $SO$.",
        "Đường thẳng trùng với $SO$."
      ],
      correctIndex: 0,
      explanation: "Vì mặt phẳng $(\\alpha)$ song song với $BD$ mà $BD \\subset (SBD)$ nên giao tuyến của $(\\alpha)$ với $(SBD)$ phải song song với $BD$."
    },
    {
      id: "quiz-11.11.12",
      badge: "Câu 12 - Thông hiểu - Vị trí của hai đường thẳng không có điểm chung",
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Trong không gian, cho hai đường thẳng $a$ và $b$ không có điểm chung. Khi đó $a$ và $b$ có thể:",
      options: [
        "Song song hoặc chéo nhau.",
        "Chỉ có thể song song.",
        "Chỉ có thể chéo nhau.",
        "Cắt nhau hoặc trùng nhau."
      ],
      correctIndex: 0,
      explanation: "Hai đường thẳng không có điểm chung trong không gian có hai trường hợp: nếu đồng phẳng thì song song, nếu không đồng phẳng thì chéo nhau."
    },
    {
      id: "quiz-11.11.13",
      badge: "Câu 13 - Vận dụng - Thiết diện qua điểm và song song với hai cạnh",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(P)$ song song với cả $AB$ và $CD$. Thiết diện của tứ diện cắt bởi $(P)$ là hình gì?",
      options: [
        "Hình chữ nhật.",
        "Hình tam giác đều.",
        "Hình thang cân.",
        "Hình ngũ giác."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng $(P)$ song song với $AB$ và $CD$ nên cắt 4 mặt của tứ diện theo các đoạn giao tuyến lần lượt song song với $AB$ và $CD$. Do đó thiết diện là hình bình hành. Vì tứ diện đều nên $AB \\perp CD$, suy ra thiết diện là hình chữ nhật."
    },
    {
      id: "quiz-11.11.14",
      badge: "Câu 14 - Vận dụng - Tìm giao điểm bằng cách dùng đường song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ ($AB \\parallel CD, AB = 2CD$). Gọi $M$ là trung điểm $SA$. Giao tuyến của $(MBC)$ và $(SAD)$ đi qua điểm nào sau đây?",
      options: [
        "Điểm $M$ và giao điểm $E$ của $AD$ và $BC$.",
        "Đỉnh $S$ và trung điểm $CD$.",
        "Giao điểm của $AC$ và $BD$.",
        "Điểm $A$ và điểm $B$."
      ],
      correctIndex: 0,
      explanation: "Ta có $M \\in SA \\subset (SAD)$ và $M \\in (MBC)$ nên $M$ là điểm chung thứ nhất. Trong đáy $(ABCD)$, hai cạnh bên $AD$ và $BC$ không song song nên cắt nhau tại $E$. $E \\in AD \\subset (SAD)$ và $E \\in BC \\subset (MBC) \\implies E$ là điểm chung thứ hai. Vậy giao tuyến là $ME$."
    },
    {
      id: "quiz-11.11.15",
      badge: "Câu 15 - Vận dụng - Tỉ số đoạn thẳng giao tuyến",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Trong bài toán trên ($AB = 2CD$, $E = AD \\cap BC$, $M$ là trung điểm $SA$), đường thẳng $ME$ cắt cạnh $SD$ tại điểm $N$. Tỉ số $\\dfrac{SN}{SD}$ bằng:",
      options: [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{2}$",
        "$\\dfrac{3}{4}$",
        "$\\dfrac{1}{3}$"
      ],
      correctIndex: 0,
      explanation: "Vì $CD \\parallel AB$ và $AB = 2CD$ nên $D$ là trung điểm của $EA$ ($ED = DA$). Trong tam giác $SAE$, $SD$ và $EM$ là hai đường trung tuyến cắt nhau tại $N$. Do đó $N$ là trọng tâm của tam giác $SAE$. Suy ra $\\dfrac{SN}{SD} = \\dfrac{2}{3}$."
    },
    {
      id: "quiz-11.11.16",
      badge: "Câu 16 - Vận dụng - Chu vi thiết diện hình bình hành",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$ có $AB = 6, CD = 8$. Một mặt phẳng song song với $AB$ và $CD$ cắt các cạnh của tứ diện tạo thành thiết diện là hình bình hành. Nếu một cạnh của hình bình hành này bằng $2$ (song song với $AB$) thì chu vi của hình bình hành bằng:",
      options: [
        "$\\dfrac{44}{3}$",
        "$14$",
        "$16$",
        "$12$"
      ],
      correctIndex: 0,
      explanation: "Gọi cạnh song song với $AB$ là $x = 2$. Theo định lý Thales, tỉ số cắt là $\\dfrac{x}{AB} = \\dfrac{2}{6} = \\dfrac{1}{3}$. Khi đó cạnh song song với $CD$ sẽ có độ dài $y = \\left(1 - \\dfrac{1}{3}\\right) CD = \\dfrac{2}{3} \\times 8 = \\dfrac{16}{3}$. Chu vi hình bình hành là $2(x + y) = 2\\left(2 + \\dfrac{16}{3}\\right) = 2 \\times \\dfrac{22}{3} = \\dfrac{44}{3}$."
    },
    {
      id: "quiz-11.11.17",
      badge: "Câu 17 - Vận dụng - Ba đường thẳng đồng quy bằng ba giao tuyến",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$. Lấy các điểm $M \\in AB, N \\in AC, P \\in BD, Q \\in CD$ sao cho $MN$ cắt $PQ$ tại $I$, $MQ$ cắt $NP$ tại $J$. Khẳng định nào sau đây ĐÚNG?",
      options: [
        "Đường thẳng $IJ$ đi qua giao điểm của $AD$ và $BC$ (nếu có) hoặc $IJ \\parallel AD \\parallel BC$.",
        "$IJ$ luôn vuông góc với $AB$.",
        "$IJ$ cắt $CD$ tại trung điểm $CD$.",
        "Bốn điểm $M, N, P, Q$ không thể đồng phẳng."
      ],
      correctIndex: 0,
      explanation: "Xét hai mặt phẳng $(MNPQ)$ và các mặt của tứ diện: Giao tuyến của $(ABD), (ACD)$ và $(MNPQ)$ chứng minh theo định lý ba giao tuyến sẽ dẫn tới các đường thẳng đồng quy hoặc song song."
    },
    {
      id: "quiz-11.11.18",
      badge: "Câu 18 - Vận dụng cao - Thiết diện diện tích lớn nhất",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Một mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$ cắt tứ diện theo thiết diện là hình chữ nhật. Diện tích lớn nhất của thiết diện đó bằng:",
      options: [
        "$\\dfrac{a^2}{4}$",
        "$\\dfrac{a^2}{8}$",
        "$\\dfrac{a^2 \\sqrt{3}}{8}$",
        "$\\dfrac{a^2}{2}$"
      ],
      correctIndex: 0,
      explanation: "Gọi khoảng cách tỉ lệ trên cạnh là $t \\in (0; 1)$. Hai kích thước của hình chữ nhật là $x = t \\cdot a$ và $y = (1 - t) \\cdot a$. Diện tích hình chữ nhật là $S = x \\cdot y = a^2 \\cdot t(1 - t)$. Theo BĐT Cauchy: $t(1 - t) \\le \\left(\\dfrac{t + 1 - t}{2}\\right)^2 = \\dfrac{1}{4}$. Dấu '=' xảy ra khi $t = \\dfrac{1}{2}$ (mặt phẳng đi qua trung điểm các cạnh). Diện tích lớn nhất là $S_{\\max} = \\dfrac{a^2}{4}$."
    },
    {
      id: "quiz-11.11.19",
      badge: "Câu 19 - Vận dụng cao - Hình thang thiết diện",
      source: "Đề phát triển ĐGNL 2025",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình thang cân với $AB \\parallel CD, AB = 2a, CD = a$. Tam giác $SAB$ đều cạnh $2a$. Mặt phẳng $(\\alpha)$ qua điểm $M$ trên cạnh $SA$ ($AM = x, 0 < x < 2a$) và song song với $AB, SC$. Thiết diện của hình chóp cắt bởi $(\\alpha)$ là hình gì?",
      options: [
        "Hình thang cân.",
        "Hình bình hành.",
        "Hình thang vuông.",
        "Tam giác cân."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng $(\\alpha)$ song song với $AB$ (và $CD$) nên cắt các mặt $(SAB), (ABCD), (SCD)$ theo các đoạn giao tuyến song song với $AB$. Do tính đối xứng của hình chóp có đáy là hình thang cân và $\\triangle SAB$ đều, các cạnh bên của thiết diện bằng nhau. Do đó thiết diện là hình thang cân."
    },
    {
      id: "quiz-11.11.20",
      badge: "Câu 20 - Vận dụng cao - Đồng quy của các đường trung bình tứ diện",
      source: "Đề thi HSG Toán 11",
      question: "Cho tứ diện $ABCD$. Gọi $G_1, G_2, G_3, G_4$ lần lượt là trọng tâm của bốn mặt tam giác. Các đoạn thẳng nối mỗi đỉnh của tứ diện với trọng tâm mặt đối diện:",
      options: [
        "Đồng quy tại một điểm chia mỗi đoạn theo tỉ số $3:1$ tính từ đỉnh.",
        "Đôi một song song với nhau.",
        "Đôi một chéo nhau.",
        "Cắt nhau tại các trung điểm của chúng."
      ],
      correctIndex: 0,
      explanation: "Bốn đoạn thẳng nối đỉnh với trọng tâm mặt đối diện ($AG_1, BG_2, CG_3, DG_4$) đồng quy tại điểm $G$ gọi là trọng tâm của tứ diện $ABCD$. Điểm $G$ chia mỗi đoạn theo tỉ số $3:1$, tức là $AG = 3GG_1$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-11.11.1",
      badge: "Đúng/Sai 1 - Vị trí tương đối của hai đường thẳng",
      source: "SGK Toán 11 KNTT Bài 11",
      prompt: "Xét tính Đúng / Sai của các khẳng định sau về vị trí tương đối của hai đường thẳng trong không gian:",
      subItems: [
        {
          id: "a",
          text: "Hai đường thẳng không có điểm chung thì luôn song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, chúng có thể chéo nhau nếu không cùng thuộc một mặt phẳng."
        },
        {
          id: "b",
          text: "Hai đường thẳng chéo nhau thì không thể cùng nằm trong một mặt phẳng.",
          correctAnswer: true,
          explanation: "Đúng, đây chính là định nghĩa của hai đường thẳng chéo nhau."
        },
        {
          id: "c",
          text: "Nếu hai đường thẳng cùng song song với một đường thẳng thứ ba thì chúng song song với nhau (giả thiết các đường thẳng phân biệt).",
          correctAnswer: true,
          explanation: "Đúng, theo tính chất bắc cầu của quan hệ song song trong không gian."
        },
        {
          id: "d",
          text: "Hai đường thẳng phân biệt cùng nằm trong một mặt phẳng thì hoặc cắt nhau hoặc song song.",
          correctAnswer: true,
          explanation: "Đúng, trong hình học phẳng hai đường phân biệt chỉ có hai vị trí tương đối là cắt nhau hoặc song song."
        }
      ]
    },
    {
      id: "tf-11.11.2",
      badge: "Đúng/Sai 2 - Định lý ba giao tuyến",
      source: "SGK Toán 11 KNTT Bài 11",
      prompt: "Cho ba mặt phẳng $(P), (Q), (R)$ đôi một cắt nhau theo ba giao tuyến phân biệt $a, b, c$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Nếu $a$ cắt $b$ tại điểm $I$ thì $c$ cũng phải đi qua $I$.",
          correctAnswer: true,
          explanation: "Đúng, vì $I \\in a \\subset (R)$ và $I \\in b \\subset (R) \\implies I \\in (P) \\cap (Q) \\cap (R) \\implies I \\in c$. Do đó ba giao tuyến đồng quy tại $I$."
        },
        {
          id: "b",
          text: "Nếu $a \\parallel b$ thì đường thẳng $c$ có thể cắt $a$.",
          correctAnswer: false,
          explanation: "Sai, nếu $a \\parallel b$ thì theo định lý ba giao tuyến, $c$ bắt buộc phải song song với cả $a$ và $b$."
        },
        {
          id: "c",
          text: "Ba đường thẳng $a, b, c$ luôn cùng nằm trong một mặt phẳng.",
          correctAnswer: false,
          explanation: "Sai, ba giao tuyến này nằm trên ba mặt phẳng phân biệt cắt nhau, chúng không cùng nằm trong một mặt phẳng."
        },
        {
          id: "d",
          text: "Nếu hai mặt phẳng $(P)$ và $(Q)$ lần lượt chứa hai đường thẳng song song thì giao tuyến của $(P)$ và $(Q)$ (nếu có) song song với hai đường thẳng đó.",
          correctAnswer: true,
          explanation: "Đúng, đây là hệ quả cơ bản của định lý ba giao tuyến."
        }
      ]
    },
    {
      id: "tf-11.11.3",
      badge: "Đúng/Sai 3 - Hình chóp đáy hình bình hành",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SD$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $MN$ song song với đường thẳng $AD$.",
          correctAnswer: true,
          explanation: "Đúng, trong $\\triangle SAD$, $MN$ là đường trung bình nên $MN \\parallel AD$."
        },
        {
          id: "b",
          text: "Đường thẳng $MN$ song song với đường thẳng $BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel AD$ mà $AD \\parallel BC$ nên theo tính chất bắc cầu $MN \\parallel BC$."
        },
        {
          id: "c",
          text: "Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và song song với $AB$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AB \\subset (SAB), CD \\subset (SCD)$ và $AB \\parallel CD$, điểm chung là $S$ nên giao tuyến qua $S$ song song $AB$."
        },
        {
          id: "d",
          text: "Đường thẳng $MN$ cắt đường thẳng $BC$.",
          correctAnswer: false,
          explanation: "Sai, vì $MN \\parallel BC$ nên chúng không thể cắt nhau."
        }
      ]
    },
    {
      id: "tf-11.11.4",
      badge: "Đúng/Sai 4 - Tứ diện và đường trung bình",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$. Gọi $M, N, P, Q, R, S$ lần lượt là trung điểm của 6 cạnh $AB, CD, BC, AD, AC, BD$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Tứ giác $MPNQ$ là một hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, vì $MP$ và $QN$ cùng song song và bằng nửa $AC$ (đường trung bình)."
        },
        {
          id: "b",
          text: "Ba đoạn thẳng nối trung điểm các cạnh đối diện ($MN, PQ, RS$) đồng quy tại trung điểm của mỗi đoạn.",
          correctAnswer: true,
          explanation: "Đúng, vì các tứ giác $MPNQ$, $MRNS$ là hình bình hành nên các đường chéo cắt nhau tại trung điểm của mỗi đường."
        },
        {
          id: "c",
          text: "Đoạn thẳng $MN$ vuông góc với đoạn thẳng $PQ$ trong mọi tứ diện.",
          correctAnswer: false,
          explanation: "Sai, chúng chỉ vuông góc khi hình bình hành là hình thoi (tức hai cạnh đối của tứ diện có độ dài bằng nhau $AC = BD$)."
        },
        {
          id: "d",
          text: "Điểm đồng quy của $MN, PQ, RS$ chính là trọng tâm của tứ diện $ABCD$.",
          correctAnswer: true,
          explanation: "Đúng, điểm đồng quy này là trọng tâm $G$ của tứ diện."
        }
      ]
    },
    {
      id: "tf-11.11.5",
      badge: "Đúng/Sai 5 - Giao tuyến hình chóp đáy hình thang",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$, đáy nhỏ $CD$. Lấy điểm $M$ trên cạnh $SB$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và giao điểm $E$ của $AD$ và $BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì hai cạnh bên không song song nên cắt nhau tại $E$ trong đáy."
        },
        {
          id: "b",
          text: "Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và song song với $AB, CD$.",
          correctAnswer: true,
          explanation: "Đúng, vì hai mặt phẳng chứa hai đường song song $AB$ và $CD$."
        },
        {
          id: "c",
          text: "Mặt phẳng qua $M$ song song với $AB$ cắt mặt phẳng $(SCD)$ theo giao tuyến song song với $CD$.",
          correctAnswer: true,
          explanation: "Đúng, vì mặt phẳng đó song song với $AB$ nên cũng song song với $CD$, giao tuyến với $(SCD)$ phải song song với $CD$."
        },
        {
          id: "d",
          text: "Đường thẳng $AB$ và đường thẳng $SC$ là hai đường thẳng song song.",
          correctAnswer: false,
          explanation: "Sai, $AB$ nằm trong đáy còn $C$ thuộc đáy và $S$ ngoài đáy nên $AB$ và $SC$ chéo nhau."
        }
      ]
    },
    {
      id: "tf-11.11.6",
      badge: "Đúng/Sai 6 - Tính chất hai đường thẳng chéo nhau",
      source: "SGK Toán 11 KNTT Bài 11",
      prompt: "Cho hai đường thẳng chéo nhau $a$ và $b$. Xét tính Đúng / Sai của các phát biểu sau:",
      subItems: [
        {
          id: "a",
          text: "Có duy nhất một mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$.",
          correctAnswer: true,
          explanation: "Đúng, qua một điểm trên $a$ dựng đường thẳng $b' \\parallel b$, mặt phẳng tạo bởi $a$ và $b'$ chứa $a$ và song song với $b$."
        },
        {
          id: "b",
          text: "Không có bất kỳ mặt phẳng nào chứa cả hai đường thẳng $a$ và $b$.",
          correctAnswer: true,
          explanation: "Đúng, theo định nghĩa hai đường thẳng chéo nhau thì không đồng phẳng."
        },
        {
          id: "c",
          text: "Tồn tại một đường thẳng vừa cắt $a$ vừa cắt $b$.",
          correctAnswer: true,
          explanation: "Đúng, trên $a$ lấy một điểm $A$ và trên $b$ lấy một điểm $B$, đường thẳng nối $AB$ cắt cả $a$ và $b$."
        },
        {
          id: "d",
          text: "Nếu đường thẳng $c$ song song với $a$ thì $c$ bắt buộc phải song song với $b$.",
          correctAnswer: false,
          explanation: "Sai, vì $a$ và $b$ chéo nhau nên $c \\parallel a$ thì $c$ và $b$ sẽ chéo nhau hoặc cắt nhau chứ không thể song song với $b$."
        }
      ]
    },
    {
      id: "tf-11.11.7",
      badge: "Đúng/Sai 7 - Thiết diện qua đường thẳng song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $(\\alpha)$ là mặt phẳng đi qua trung điểm $M$ của $SA$ và song song với $BC$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Mặt phẳng $(\\alpha)$ song song với đường thẳng $AD$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AD \\parallel BC$ nên $(\\alpha)$ song song với $BC$ thì cũng song song với $AD$."
        },
        {
          id: "b",
          text: "Giao tuyến của $(\\alpha)$ với mặt phẳng $(SAD)$ đi qua $M$ và song song với $AD$.",
          correctAnswer: true,
          explanation: "Đúng, vì $(\\alpha) \\parallel AD$ mà $AD \\subset (SAD)$, điểm chung là $M$ nên giao tuyến qua $M$ song song $AD$."
        },
        {
          id: "c",
          text: "Mặt phẳng $(\\alpha)$ cắt cạnh $SD$ tại trung điểm $N$ của $SD$.",
          correctAnswer: true,
          explanation: "Đúng, đoạn giao tuyến $MN \\parallel AD$, mà $M$ là trung điểm $SA$ nên $N$ là trung điểm $SD$."
        },
        {
          id: "d",
          text: "Thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$ luôn là một tam giác.",
          correctAnswer: false,
          explanation: "Sai, thiết diện cắt các mặt bên tạo thành hình thang hoặc hình bình hành (tứ giác), không thể là tam giác."
        }
      ]
    },
    {
      id: "tf-11.11.8",
      badge: "Đúng/Sai 8 - Quan hệ hình học trong không gian",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Trong không gian, cho bốn điểm phân biệt $A, B, C, D$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Nếu $AB \\parallel CD$ thì bốn điểm $A, B, C, D$ luôn cùng thuộc một mặt phẳng.",
          correctAnswer: true,
          explanation: "Đúng, hai đường thẳng song song luôn xác định duy nhất một mặt phẳng, do đó các điểm trên chúng đồng phẳng."
        },
        {
          id: "b",
          text: "Nếu $AB$ và $CD$ chéo nhau thì bốn điểm $A, B, C, D$ không đồng phẳng.",
          correctAnswer: true,
          explanation: "Đúng, nếu đồng phẳng thì $AB$ và $CD$ phải cắt nhau, song song hoặc trùng nhau."
        },
        {
          id: "c",
          text: "Nếu $AB = CD$ thì $AB \\parallel CD$.",
          correctAnswer: false,
          explanation: "Sai, độ dài hai đoạn thẳng bằng nhau không suy ra được quan hệ song song."
        },
        {
          id: "d",
          text: "Nếu $M, N$ lần lượt là trung điểm của $AB, CD$ thì $MN$ luôn cắt cả $AB$ và $CD$.",
          correctAnswer: true,
          explanation: "Đúng, vì $M \\in AB$ nên $MN$ cắt $AB$ tại $M$, và $N \\in CD$ nên $MN$ cắt $CD$ tại $N$."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-11.11.1",
      badge: "TLN 1 - Số cặp cạnh chéo nhau của tứ diện",
      source: "SGK Toán 11 KNTT Bài 11",
      prompt: "Một hình tứ diện $ABCD$ có tất cả bao nhiêu cặp cạnh đối diện chéo nhau?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Có 3 cặp cạnh chéo nhau là $(AB, CD)$, $(AC, BD)$, và $(AD, BC)$."
    },
    {
      id: "sa-11.11.2",
      badge: "TLN 2 - Số cạnh của thiết diện hình chữ nhật",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho tứ diện đều $ABCD$ cạnh bằng 8. Mặt phẳng $(P)$ song song với $AB$ và $CD$ đi qua trung điểm các cạnh $BC, BD, AD, AC$. Tính chu vi của hình chữ nhật thiết diện tạo thành.",
      correctAnswer: "16",
      acceptableAnswers: ["16"],
      explanation: "Mỗi cạnh của thiết diện là đường trung bình tương ứng của tam giác nên có độ dài bằng $\\dfrac{8}{2} = 4$. Thiết diện là hình vuông (hình chữ nhật đặc biệt) cạnh 4, chu vi bằng $4 \\times 4 = 16$."
    },
    {
      id: "sa-11.11.3",
      badge: "TLN 3 - Tỉ số đoạn thẳng giao điểm",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ ($AB \\parallel CD, AB = 3CD$). Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ qua $S$. Gọi $E$ là giao điểm của $AD$ và $BC$. Tính tỉ số $\\dfrac{EA}{ED}$.",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Vì $AB \\parallel CD$, áp dụng định lý Thales trong $\\triangle EAB$: $\\dfrac{EA}{ED} = \\dfrac{AB}{CD} = 3$."
    },
    {
      id: "sa-11.11.4",
      badge: "TLN 4 - Số đường thẳng phân biệt song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho đường thẳng $d$ và 5 điểm phân biệt không nằm trên $d$. Qua mỗi điểm dựng một đường thẳng song song với $d$. Có tối đa bao nhiêu đường thẳng phân biệt được tạo thành?",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "Qua mỗi điểm có duy nhất 1 đường thẳng song song với $d$. Với 5 điểm phân biệt, số đường thẳng phân biệt tối đa là 5."
    },
    {
      id: "sa-11.11.5",
      badge: "TLN 5 - Độ dài đoạn giao tuyến thiết diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$ với $AB = 12$. Gọi $M$ là trung điểm của $SA$. Mặt phẳng qua $M$ song song với $AB$ cắt cạnh $SB$ tại $N$. Tính độ dài đoạn thẳng $MN$.",
      correctAnswer: "6",
      acceptableAnswers: ["6"],
      explanation: "Trong $\\triangle SAB$, $MN \\parallel AB$ và $M$ là trung điểm $SA$ nên $MN$ là đường trung bình $\\implies MN = \\dfrac{AB}{2} = \\dfrac{12}{2} = 6$."
    },
    {
      id: "sa-11.11.6",
      badge: "TLN 6 - Chu vi thiết diện hình bình hành",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$ có $AB = 10, CD = 14$. Một mặt phẳng song song với $AB$ và $CD$ cắt các cạnh của tứ diện theo một thiết diện là hình bình hành có một cạnh bằng 3 (song song với $AB$). Tính chu vi của hình bình hành đó.",
      correctAnswer: "25.6",
      acceptableAnswers: ["25.6", "25,6", "128/5"],
      explanation: "Tỉ số cắt cạnh song song với $AB$ là $k = \\dfrac{3}{10} = 0,3$. Do đó cạnh song song với $CD$ có độ dài là $(1 - k) \\times CD = 0,7 \\times 14 = 9,8$. Chu vi là $2 \\times (3 + 9,8) = 2 \\times 12,8 = 25,6$."
    },
    {
      id: "sa-11.11.7",
      badge: "TLN 7 - Tỉ số trọng tâm tứ diện",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$. Điểm $G$ là trọng tâm của tứ diện. Đoạn thẳng $AG$ cắt mặt phẳng đối diện $(BCD)$ tại trọng tâm $G_1$ của tam giác $BCD$. Tính tỉ số $\\dfrac{AG}{AG_1}$ (nhập dưới dạng phân số tối giản a/b).",
      correctAnswer: "3/4",
      acceptableAnswers: ["3/4", "0.75", "0,75"],
      explanation: "Trọng tâm tứ diện $G$ chia đoạn $AG_1$ theo tỉ số $AG = 3GG_1$, do đó $\\dfrac{AG}{AG_1} = \\dfrac{3}{4}$."
    },
    {
      id: "sa-11.11.8",
      badge: "TLN 8 - Số giao tuyến song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Có bao nhiêu cặp cạnh bên song song với nhau?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Lăng trụ tam giác có 3 cạnh bên $AA', BB', CC'$ đôi một song song với nhau. Số cặp cạnh bên song song là $C_3^2 = 3$ cặp: $(AA', BB')$, $(BB', CC')$, $(CC', AA')$."
    },
    {
      id: "sa-11.11.9",
      badge: "TLN 9 - Tỉ số diện tích thiết diện cực đại",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      prompt: "Cho tứ diện đều $ABCD$ có cạnh bằng 4. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$ cắt tứ diện theo thiết diện có diện tích lớn nhất. Giá trị diện tích lớn nhất đó bằng bao nhiêu?",
      correctAnswer: "4",
      acceptableAnswers: ["4"],
      explanation: "Diện tích thiết diện lớn nhất đạt được khi mặt phẳng đi qua trung điểm các cạnh, diện tích $S_{\\max} = \\dfrac{a^2}{4} = \\dfrac{4^2}{4} = 4$."
    },
    {
      id: "sa-11.11.10",
      badge: "TLN 10 - Số mặt phẳng xác định bởi 3 đường thẳng song song",
      source: "Tài liệu GDPT 2018 Toán 11 C4B2",
      prompt: "Cho ba đường thẳng phân biệt $a, b, c$ đôi một song song và không cùng nằm trên một mặt phẳng. Có bao nhiêu mặt phẳng phân biệt được xác định bởi từng cặp đường thẳng trong ba đường thẳng đó?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Mỗi cặp hai đường thẳng song song phân biệt xác định 1 mặt phẳng duy nhất. Có $C_3^2 = 3$ cặp: $(a, b)$, $(b, c)$, $(c, a)$."
    }
  ]
};

export const GRADE_11_LESSON_11_AI_PRACTICE = {
  quizQuestions: [
    {
      id: "ai-11.11.1",
      badge: "Luyện thêm 1 - Khái niệm chéo nhau",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hai đường thẳng $a$ và $b$ chéo nhau. Có thể tìm được một mặt phẳng chứa cả $a$ và $b$ không?",
      options: [
        "Không thể tìm được bất kỳ mặt phẳng nào",
        "Có duy nhất 1 mặt phẳng",
        "Có vô số mặt phẳng",
        "Có 2 mặt phẳng"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa hai đường thẳng chéo nhau là hai đường thẳng không đồng phẳng, tức không có mặt phẳng nào chứa cả hai đường thẳng đó."
    },
    {
      id: "ai-11.11.2",
      badge: "Luyện thêm 2 - Đường trung bình tam giác trong chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABC$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Đường thẳng $MN$ song song với đường thẳng nào?",
      options: [
        "$AB$",
        "$BC$",
        "$AC$",
        "$SC$"
      ],
      correctIndex: 0,
      explanation: "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB$."
    },
    {
      id: "ai-11.11.3",
      badge: "Luyện thêm 3 - Giao tuyến song song hình chóp đáy bình hành",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Giao tuyến của $(SAD)$ và $(SBC)$ là:",
      options: [
        "Đường thẳng qua $S$ song song với $AD$ và $BC$.",
        "Đường thẳng $SO$ với $O = AC \\cap BD$.",
        "Đường thẳng $AB$.",
        "Đường thẳng qua $S$ vuông góc với $AD$."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng $(SAD)$ chứa $AD$, mặt phẳng $(SBC)$ chứa $BC$, mà $AD \\parallel BC$. Điểm chung là $S$. Vậy giao tuyến qua $S$ song song với $AD, BC$."
    },
    {
      id: "ai-11.11.4",
      badge: "Luyện thêm 4 - Số vị trí tương đối giữa hai đường thẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Trong không gian, giữa hai đường thẳng phân biệt có bao nhiêu vị trí tương đối?",
      options: [
        "$3$ vị trí (cắt nhau, song song, chéo nhau).",
        "$2$ vị trí (cắt nhau, song song).",
        "$4$ vị trí.",
        "$1$ vị trí."
      ],
      correctIndex: 0,
      explanation: "Hai đường thẳng phân biệt trong không gian có đúng 3 vị trí tương đối: cắt nhau, song song, hoặc chéo nhau."
    },
    {
      id: "ai-11.11.5",
      badge: "Luyện thêm 5 - Cặp cạnh chéo nhau trong hình chóp tứ giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình thang ($AB \\parallel CD$). Cặp đường thẳng nào sau đây CHÉO NHAU?",
      options: [
        "$SD$ và $AB$.",
        "$AB$ và $CD$.",
        "$SA$ và $SD$.",
        "$AD$ và $BC$."
      ],
      correctIndex: 0,
      explanation: "$SD$ và $AB$ không cùng nằm trong bất kỳ mặt phẳng nào nên chúng chéo nhau. Còn $AB \\parallel CD$, $SA$ cắt $SD$ tại $S$, $AD$ cắt $BC$ kéo dài."
    },
    {
      id: "ai-11.11.6",
      badge: "Luyện thêm 6 - Đường trung bình tứ diện đều",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho tứ diện đều $ABCD$ cạnh $a$. Đoạn thẳng nối trung điểm của hai cạnh đối diện $AB$ và $CD$ có độ dài bằng:",
      options: [
        "$\\dfrac{a\\sqrt{2}}{2}$",
        "$\\dfrac{a\\sqrt{3}}{2}$",
        "$\\dfrac{a}{2}$",
        "$a\\sqrt{2}$"
      ],
      correctIndex: 0,
      explanation: "Gọi $M, N$ là trung điểm $AB, CD$. Tam giác $MCD$ cân tại $M$ có $MC = MD = \\dfrac{a\\sqrt{3}}{2}$ (đường cao tam giác đều). $MN = \\sqrt{MC^2 - NC^2} = \\sqrt{\\dfrac{3a^2}{4} - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt{2}}{2}$."
    },
    {
      id: "ai-11.11.7",
      badge: "Luyện thêm 7 - Thiết diện qua trung điểm và song song với cạnh",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm $SC$. Mặt phẳng $(ABM)$ cắt cạnh $SD$ tại điểm $N$. Tứ giác $ABMN$ là hình gì?",
      options: [
        "Hình thang.",
        "Hình bình hành.",
        "Hình chữ nhật.",
        "Hình thoi."
      ],
      correctIndex: 0,
      explanation: "Giao tuyến của $(ABM)$ và $(SCD)$ qua $M$ song song với $CD \\parallel AB$, cắt $SD$ tại $N$ là trung điểm $SD$. $MN \\parallel AB$ và $MN = \\dfrac{1}{2}AB$, do đó $ABMN$ là hình thang."
    },
    {
      id: "ai-11.11.8",
      badge: "Luyện thêm 8 - Điều kiện đồng quy của ba đường thẳng",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho ba đường thẳng $a, b, c$ không cùng nằm trong một mặt phẳng. Nếu chúng cắt nhau từng đôi một thì chúng:",
      options: [
        "Đồng quy tại một điểm.",
        "Đôi một song song.",
        "Tạo thành một tam giác.",
        "Chéo nhau từng đôi một."
      ],
      correctIndex: 0,
      explanation: "Nếu 3 đường thẳng cắt nhau từng đôi một mà không đồng phẳng thì theo định lý ba giao tuyến, chúng bắt buộc phải đồng quy tại một điểm."
    },
    {
      id: "ai-11.11.9",
      badge: "Luyện thêm 9 - Tỉ số Thales trong hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình thang ($AB \\parallel CD, AB = 2CD$). Lấy điểm $P$ trên $SA$ sao cho $SP = 2PA$. Mặt phẳng qua $P$ song song với đáy cắt $SB, SC, SD$ lần lượt tại $Q, R, T$. Tỉ số $\\dfrac{QR}{CD}$ bằng:",
      options: [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{3}{4}$",
        "$1$"
      ],
      correctIndex: 0,
      explanation: "Theo định lý Thales, mặt phẳng song song với đáy tạo ra các tam giác đồng dạng với tỉ số $\\dfrac{SP}{SA} = \\dfrac{2}{3}$. Do đó $\\dfrac{QR}{CD} = \\dfrac{2}{3}$."
    },
    {
      id: "ai-11.11.10",
      badge: "Luyện thêm 10 - Quan hệ giữa hai đường thẳng cùng vuông góc",
      isAiGenerated: true,
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Trong không gian, hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì:",
      options: [
        "Có thể cắt nhau, song song hoặc chéo nhau.",
        "Luôn luôn song song với nhau.",
        "Luôn luôn chéo nhau.",
        "Luôn cùng nằm trên một mặt phẳng."
      ],
      correctIndex: 0,
      explanation: "Khác với hình học phẳng, trong không gian hai đường thẳng cùng vuông góc với một đường thẳng thứ ba có thể song song, cắt nhau hoặc chéo nhau (ví dụ ba trục tọa độ $Ox, Oy, Oz$)."
    },
    {
      id: "ai-11.11.11",
      badge: "Luyện thêm 11 - Vị trí của hai đường chéo đối diện tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$. Cặp đường thẳng nào sau đây luôn chéo nhau?",
      options: [
        "$AC$ và $BD$.",
        "$AB$ và $AC$.",
        "$BC$ và $CD$.",
        "$AD$ và $CD$."
      ],
      correctIndex: 0,
      explanation: "$AC$ và $BD$ là hai cạnh đối diện của tứ diện, không có điểm chung và không đồng phẳng nên luôn chéo nhau."
    },
    {
      id: "ai-11.11.12",
      badge: "Luyện thêm 12 - Đoạn nối trung điểm trong hình chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Gọi $I, K$ lần lượt là trung điểm của $SB$ và $SC$. Đường thẳng $IK$ song song với:",
      options: [
        "Đường thẳng $AD$.",
        "Đường thẳng $AB$.",
        "Đường thẳng $SA$.",
        "Đường thẳng $SO$."
      ],
      correctIndex: 0,
      explanation: "$IK$ là đường trung bình của $\\triangle SBC \\implies IK \\parallel BC$. Mà $BC \\parallel AD \\implies IK \\parallel AD$."
    },
    {
      id: "ai-11.11.13",
      badge: "Luyện thêm 13 - Giao tuyến của hai mặt phẳng qua trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm của $AB$ và $AC$; $P, Q$ là trung điểm của $DB$ và $DC$. Giao tuyến của $(MNP)$ và $(BCD)$ là:",
      options: [
        "Đường thẳng $PQ$.",
        "Đường thẳng $BC$.",
        "Đường thẳng $CD$.",
        "Đường thẳng qua $D$ song song với $BC$."
      ],
      correctIndex: 0,
      explanation: "Vì $P, Q$ cùng thuộc cả hai mặt phẳng $(MNP)$ và $(BCD)$ nên giao tuyến chính là đường thẳng $PQ$."
    },
    {
      id: "ai-11.11.14",
      badge: "Luyện thêm 14 - Tìm số mặt phẳng qua 4 đường thẳng song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho 4 đường thẳng phân biệt đôi một song song và không có ba đường thẳng nào đồng phẳng. Số mặt phẳng xác định bởi từng cặp đường thẳng là:",
      options: [
        "$6$",
        "$4$",
        "$8$",
        "$12$"
      ],
      correctIndex: 0,
      explanation: "Mỗi cặp hai đường thẳng song song phân biệt xác định 1 mặt phẳng. Có $C_4^2 = 6$ mặt phẳng."
    },
    {
      id: "ai-11.11.15",
      badge: "Luyện thêm 15 - Hình biểu diễn của hình bình hành",
      isAiGenerated: true,
      source: "SGK Toán 11 KNTT Bài 11",
      question: "Hình biểu diễn của hình bình hành trong không gian là:",
      options: [
        "Một hình bình hành.",
        "Một hình chữ nhật.",
        "Một hình thang.",
        "Một tứ giác bất kì."
      ],
      correctIndex: 0,
      explanation: "Phép chiếu song song bảo toàn tính song song của hai đường thẳng, do đó hình biểu diễn của hình bình hành luôn là một hình bình hành."
    },
    {
      id: "ai-11.11.16",
      badge: "Luyện thêm 16 - Thiết diện hình chóp tam giác qua đường song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp tam giác $S.ABC$. Một mặt phẳng $(\\alpha)$ song song với $BC$ cắt các cạnh $AB, AC, SB, SC$. Thiết diện thu được là:",
      options: [
        "Một hình thang.",
        "Một hình tam giác.",
        "Một hình ngũ giác.",
        "Một đoạn thẳng."
      ],
      correctIndex: 0,
      explanation: "Mặt phẳng cắt đáy và mặt bên $(SBC)$ theo hai đoạn giao tuyến cùng song song với $BC$, do đó thiết diện là một hình thang."
    },
    {
      id: "ai-11.11.17",
      badge: "Luyện thêm 17 - Cạnh đối diện trong tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Trong tứ diện $ABCD$, cạnh đối diện của cạnh $AD$ là:",
      options: [
        "$BC$",
        "$AB$",
        "$AC$",
        "$CD$"
      ],
      correctIndex: 0,
      explanation: "Hai cạnh đối diện trong tứ diện là hai cạnh không có đỉnh chung. Đối diện với cạnh $AD$ là cạnh $BC$."
    },
    {
      id: "ai-11.11.18",
      badge: "Luyện thêm 18 - Chu vi hình bình hành trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho tứ diện $ABCD$ có $AC = 12$ và $BD = 16$. Tứ giác có các đỉnh là trung điểm của $AB, BC, CD, DA$ có chu vi bằng:",
      options: [
        "$28$",
        "$14$",
        "$56$",
        "$24$"
      ],
      correctIndex: 0,
      explanation: "Tứ giác này là hình bình hành có các cạnh bằng $\\dfrac{AC}{2} = 6$ và $\\dfrac{BD}{2} = 8$. Chu vi là $2(6 + 8) = 28$."
    },
    {
      id: "ai-11.11.19",
      badge: "Luyện thêm 19 - Giao tuyến của mặt phẳng chéo",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành $ABCD$. Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $SO$ với $O$ là:",
      options: [
        "Giao điểm của $AC$ và $BD$.",
        "Giao điểm của $AB$ và $CD$.",
        "Trung điểm của $SA$.",
        "Trung điểm của $SB$."
      ],
      correctIndex: 0,
      explanation: "$O$ là giao điểm của hai đường chéo $AC$ và $BD$, là điểm chung thứ hai của hai mặt chéo $(SAC)$ và $(SBD)$."
    },
    {
      id: "ai-11.11.20",
      badge: "Luyện thêm 20 - Thiết diện hình chóp đều",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      question: "Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông cạnh $a$. Mặt phẳng đi qua trung điểm của 4 cạnh bên cắt hình chóp theo một thiết diện có diện tích bằng:",
      options: [
        "$\\dfrac{a^2}{4}$",
        "$\\dfrac{a^2}{2}$",
        "$\\dfrac{a^2}{8}$",
        "$a^2$"
      ],
      correctIndex: 0,
      explanation: "Thiết diện là hình vuông có cạnh bằng một nửa cạnh đáy, tức là $\\dfrac{a}{2}$. Diện tích thiết diện là $\\left(\\dfrac{a}{2}\\right)^2 = \\dfrac{a^2}{4}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-11.11.1",
      badge: "Đúng/Sai LT 1 - Vị trí tương đối",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Xét tính Đúng / Sai của các phát biểu sau về hai đường thẳng trong không gian:",
      subItems: [
        {
          id: "a",
          text: "Hai đường thẳng không có điểm chung thì chéo nhau hoặc song song.",
          correctAnswer: true,
          explanation: "Đúng, nếu đồng phẳng thì song song, không đồng phẳng thì chéo nhau."
        },
        {
          id: "b",
          text: "Hai đường thẳng chéo nhau có thể cắt nhau nếu kéo dài vô hạn.",
          correctAnswer: false,
          explanation: "Sai, đường thẳng vốn đã vô hạn về hai phía và hai đường chéo nhau thì không bao giờ có điểm chung."
        },
        {
          id: "c",
          text: "Nếu $a \\parallel b$ thì $a$ và $b$ cùng nằm trên ít nhất một mặt phẳng.",
          correctAnswer: true,
          explanation: "Đúng, hai đường thẳng song song xác định duy nhất một mặt phẳng chứa chúng."
        },
        {
          id: "d",
          text: "Nếu $a$ và $b$ cùng chéo với $c$ thì $a$ phải chéo với $b$.",
          correctAnswer: false,
          explanation: "Sai, $a$ và $b$ có thể song song hoặc cắt nhau."
        }
      ]
    },
    {
      id: "ai-tf-11.11.2",
      badge: "Đúng/Sai LT 2 - Tứ diện và đường trung bình",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm của $AB$ và $AC$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Đường thẳng $MN$ song song với đường thẳng $BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN$ là đường trung bình của tam giác $ABC$."
        },
        {
          id: "b",
          text: "Đường thẳng $MN$ cắt đường thẳng $CD$.",
          correctAnswer: false,
          explanation: "Sai, $MN \\subset (ABC)$ mà $D \\notin (ABC)$ nên $MN$ và $CD$ chéo nhau."
        },
        {
          id: "c",
          text: "Độ dài đoạn $MN$ bằng một nửa độ dài đoạn $BC$.",
          correctAnswer: true,
          explanation: "Đúng, tính chất đường trung bình tam giác."
        },
        {
          id: "d",
          text: "Mặt phẳng $(DMN)$ cắt mặt phẳng $(BCD)$ theo giao tuyến là đường thẳng đi qua $D$ và song song với $BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì $(DMN)$ chứa $MN$, $(BCD)$ chứa $BC$, mà $MN \\parallel BC$ và có điểm chung là $D$."
        }
      ]
    },
    {
      id: "ai-tf-11.11.3",
      badge: "Đúng/Sai LT 3 - Hình chóp hình bình hành",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Giao tuyến của $(SAB)$ và $(SCD)$ song song với cạnh $AB$.",
          correctAnswer: true,
          explanation: "Đúng, vì hai mặt phẳng chứa hai đường song song $AB$ và $CD$."
        },
        {
          id: "b",
          text: "Giao tuyến của $(SAD)$ và $(SBC)$ song song với cạnh $BC$.",
          correctAnswer: true,
          explanation: "Đúng, vì $AD \\parallel BC$."
        },
        {
          id: "c",
          text: "Giao tuyến của $(SAB)$ và $(SCD)$ cắt mặt đáy $(ABCD)$.",
          correctAnswer: false,
          explanation: "Sai, giao tuyến song song với $AB \\subset (ABCD)$ và đi qua $S \\notin (ABCD)$ nên không cắt mặt đáy."
        },
        {
          id: "d",
          text: "Hai giao tuyến nói trên cùng đi qua đỉnh $S$.",
          correctAnswer: true,
          explanation: "Đúng, cả hai giao tuyến đều xuất phát từ đỉnh chung $S$."
        }
      ]
    },
    {
      id: "ai-tf-11.11.4",
      badge: "Đúng/Sai LT 4 - Định lý ba giao tuyến",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho ba mặt phẳng $(P), (Q), (R)$ cắt nhau theo ba giao tuyến phân biệt $a, b, c$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Nếu $a \\parallel b$ thì $c \\parallel a$ và $c \\parallel b$.",
          correctAnswer: true,
          explanation: "Đúng, theo định lý ba giao tuyến nếu có hai giao tuyến song song thì giao tuyến thứ ba cũng song song với chúng."
        },
        {
          id: "b",
          text: "Nếu $a$ cắt $b$ tại điểm $M$ thì $c$ cũng phải đi qua điểm $M$.",
          correctAnswer: true,
          explanation: "Đúng, ba giao tuyến khi đó đồng quy tại $M$."
        },
        {
          id: "c",
          text: "Có trường hợp hai giao tuyến cắt nhau và giao tuyến thứ ba song song với một trong hai đường đó.",
          correctAnswer: false,
          explanation: "Sai, định lý chỉ ra chỉ có hai trường hợp: hoặc đồng quy hoặc đôi một song song."
        },
        {
          id: "d",
          text: "Ba giao tuyến $a, b, c$ không thể chéo nhau từng đôi một.",
          correctAnswer: true,
          explanation: "Đúng, vì mỗi cặp giao tuyến đều cùng thuộc một mặt phẳng trong ba mặt phẳng nên chúng luôn đồng phẳng (cắt nhau hoặc song song), không thể chéo nhau."
        }
      ]
    },
    {
      id: "ai-tf-11.11.5",
      badge: "Đúng/Sai LT 5 - Thiết diện tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$ cắt các cạnh của tứ diện. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Thiết diện của tứ diện cắt bởi $(\\alpha)$ luôn là một hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, các cạnh đối diện của thiết diện lần lượt song song với $AB$ và $CD$."
        },
        {
          id: "b",
          text: "Thiết diện có thể là một hình chữ nhật nếu $AB \\perp CD$.",
          correctAnswer: true,
          explanation: "Đúng, khi hai cạnh đối diện vuông góc thì các góc của hình bình hành bằng $90^\\circ$."
        },
        {
          id: "c",
          text: "Thiết diện có thể là một hình tam giác.",
          correctAnswer: false,
          explanation: "Sai, vì $(\\alpha)$ song song với cả $AB$ và $CD$ nên nó cắt cả 4 mặt của tứ diện tạo thành tứ giác."
        },
        {
          id: "d",
          text: "Thiết diện có thể là một hình thoi nếu các cạnh cắt ở vị trí thích hợp.",
          correctAnswer: true,
          explanation: "Đúng, khi hai cạnh liên tiếp của hình bình hành có độ dài bằng nhau."
        }
      ]
    },
    {
      id: "ai-tf-11.11.6",
      badge: "Đúng/Sai LT 6 - Hình chóp đáy hình thang",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ ($AB \\parallel CD, AB > CD$). Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Giao tuyến của $(SAB)$ và $(SCD)$ song song với đáy $AB$.",
          correctAnswer: true,
          explanation: "Đúng, giao tuyến qua $S$ song song với $AB, CD$."
        },
        {
          id: "b",
          text: "Giao tuyến của $(SAD)$ và $(SBC)$ song song với $AB$.",
          correctAnswer: false,
          explanation: "Sai, vì $AD$ và $BC$ không song song nên chúng cắt nhau tại điểm $E$, giao tuyến là $SE$ cắt đáy."
        },
        {
          id: "c",
          text: "Đường thẳng $CD$ song song với mặt phẳng $(SAB)$.",
          correctAnswer: true,
          explanation: "Đúng, vì $CD \\parallel AB$ và $CD \\not\\subset (SAB)$."
        },
        {
          id: "d",
          text: "Hai cạnh bên $AD$ và $BC$ chéo nhau.",
          correctAnswer: false,
          explanation: "Sai, $AD$ và $BC$ cùng thuộc mặt phẳng đáy $(ABCD)$ nên chúng đồng phẳng (cắt nhau)."
        }
      ]
    },
    {
      id: "ai-tf-11.11.7",
      badge: "Đúng/Sai LT 7 - Tiên đề Euclid trong không gian",
      isAiGenerated: true,
      source: "SGK Toán 11 KNTT Bài 11",
      prompt: "Xét tính Đúng / Sai của các khẳng định sau liên quan đến tiên đề Euclid:",
      subItems: [
        {
          id: "a",
          text: "Qua một điểm nằm ngoài đường thẳng cho trước, có duy nhất một đường thẳng song song với đường thẳng đó.",
          correctAnswer: true,
          explanation: "Đúng, đây là tiên đề Euclid trong không gian."
        },
        {
          id: "b",
          text: "Qua một điểm nằm ngoài đường thẳng cho trước, có vô số đường thẳng chéo nhau với đường thẳng đó.",
          correctAnswer: true,
          explanation: "Đúng, có vô số đường thẳng đi qua điểm đó và không đồng phẳng với đường thẳng cho trước."
        },
        {
          id: "c",
          text: "Hai đường thẳng cùng song song với một đường thẳng thứ ba thì trùng nhau.",
          correctAnswer: false,
          explanation: "Sai, chúng có thể phân biệt và song song với nhau."
        },
        {
          id: "d",
          text: "Nếu đường thẳng $a$ song song với $b$ thì mọi mặt phẳng chứa $a$ đều chứa $b$.",
          correctAnswer: false,
          explanation: "Sai, chỉ có duy nhất một mặt phẳng chứa cả $a$ và $b$."
        }
      ]
    },
    {
      id: "ai-tf-11.11.8",
      badge: "Đúng/Sai LT 8 - Đoạn thẳng nối trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh bên $SA, SB, SC, SD$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Tứ giác $MNPQ$ là một hình bình hành.",
          correctAnswer: true,
          explanation: "Đúng, vì $MN \\parallel PQ \\parallel AB$ và $MN = PQ = \\dfrac{AB}{2}$."
        },
        {
          id: "b",
          text: "Mặt phẳng $(MNPQ)$ song song với mặt đáy $(ABCD)$.",
          correctAnswer: true,
          explanation: "Đúng, mặt phẳng chứa hai đường cắt nhau $MN, MQ$ lần lượt song song với $AB, AD$."
        },
        {
          id: "c",
          text: "Diện tích tứ giác $MNPQ$ bằng một nửa diện tích hình bình hành đáy $ABCD$.",
          correctAnswer: false,
          explanation: "Sai, mỗi cạnh của $MNPQ$ bằng một nửa cạnh tương ứng của đáy nên diện tích bằng $\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$ diện tích đáy."
        },
        {
          id: "d",
          text: "Đường thẳng $MP$ cắt đường thẳng $NQ$ tại trung điểm của mỗi đường.",
          correctAnswer: true,
          explanation: "Đúng, vì $MNPQ$ là hình bình hành nên hai đường chéo cắt nhau tại trung điểm của mỗi đường."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-11.11.1",
      badge: "Luyện thêm TLN 1 - Cặp cạnh chéo nhau hình chóp tam giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Hình chóp tam giác $S.ABC$ (tứ diện) có bao nhiêu cặp cạnh đối diện chéo nhau?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Có 3 cặp cạnh chéo nhau là $(SA, BC)$, $(SB, AC)$, và $(SC, AB)$."
    },
    {
      id: "ai-sa-11.11.2",
      badge: "Luyện thêm TLN 2 - Chu vi hình bình hành trung điểm",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$ có $AC = 14$ và $BD = 18$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$. Tính chu vi của hình bình hành $MNPQ$.",
      correctAnswer: "32",
      acceptableAnswers: ["32"],
      explanation: "Các cạnh của hình bình hành có độ dài bằng $\\dfrac{AC}{2} = 7$ và $\\dfrac{BD}{2} = 9$. Chu vi là $2 \\times (7 + 9) = 32$."
    },
    {
      id: "ai-sa-11.11.3",
      badge: "Luyện thêm TLN 3 - Độ dài đường trung bình trong chóp",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$ với $CD = 16$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SD$. Tính độ dài đoạn thẳng $MN$.",
      correctAnswer: "8",
      acceptableAnswers: ["8"],
      explanation: "Trong $\\triangle SAD$, $MN$ là đường trung bình nên $MN = \\dfrac{AD}{2}$. Vì đáy là hình bình hành nên $AD = BC$. Nếu bài cho $AD = 16$ thì $MN = 8$."
    },
    {
      id: "ai-sa-11.11.4",
      badge: "Luyện thêm TLN 4 - Số mặt phẳng từ 5 đường thẳng song song",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho 5 đường thẳng phân biệt đôi một song song và không có ba đường thẳng nào đồng phẳng. Có bao nhiêu mặt phẳng phân biệt được tạo bởi từng cặp đường thẳng?",
      correctAnswer: "10",
      acceptableAnswers: ["10"],
      explanation: "Số mặt phẳng là $C_5^2 = \\dfrac{5 \\times 4}{2} = 10$ mặt phẳng."
    },
    {
      id: "ai-sa-11.11.5",
      badge: "Luyện thêm TLN 5 - Tỉ số Thales hình thang",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ ($AB \\parallel CD, AB = 4CD$). Hai cạnh bên $AD$ và $BC$ cắt nhau tại $E$. Tính tỉ số $\\dfrac{EA}{ED}$.",
      correctAnswer: "4",
      acceptableAnswers: ["4"],
      explanation: "Áp dụng định lý Thales trong $\\triangle EAB$ có $CD \\parallel AB$: $\\dfrac{EA}{ED} = \\dfrac{AB}{CD} = 4$."
    },
    {
      id: "ai-sa-11.11.6",
      badge: "Luyện thêm TLN 6 - Chu vi thiết diện cực đại",
      isAiGenerated: true,
      source: "Đề phát triển ĐGNL 2025",
      prompt: "Cho tứ diện đều $ABCD$ có cạnh bằng 6. Thiết diện của tứ diện cắt bởi mặt phẳng song song với $AB$ và $CD$ đi qua trung điểm các cạnh có chu vi bằng bao nhiêu?",
      correctAnswer: "12",
      acceptableAnswers: ["12"],
      explanation: "Thiết diện là hình vuông có cạnh bằng $\\dfrac{a}{2} = \\dfrac{6}{2} = 3$. Chu vi là $4 \\times 3 = 12$."
    },
    {
      id: "ai-sa-11.11.7",
      badge: "Luyện thêm TLN 7 - Tỉ số trọng tâm tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho tứ diện $ABCD$ có trọng tâm $G$. Đoạn thẳng $AG$ cắt mặt phẳng đối diện $(BCD)$ tại $G_1$. Tính tỉ số $\\dfrac{GG_1}{AG_1}$ (nhập dưới dạng phân số tối giản a/b).",
      correctAnswer: "1/4",
      acceptableAnswers: ["1/4", "0.25", "0,25"],
      explanation: "Trọng tâm $G$ chia đoạn $AG_1$ theo tỉ số $AG = 3GG_1 \\implies GG_1 = \\dfrac{1}{4}AG_1$."
    },
    {
      id: "ai-sa-11.11.8",
      badge: "Luyện thêm TLN 8 - Số cạnh bên của hình chóp ngũ giác",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Hình chóp ngũ giác có bao nhiêu cạnh bên?",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "Đáy là ngũ giác có 5 đỉnh nên có đúng 5 cạnh bên nối từ đỉnh chóp đến 5 đỉnh đáy."
    },
    {
      id: "ai-sa-11.11.9",
      badge: "Luyện thêm TLN 9 - Tỉ số diện tích thiết diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh 6. Mặt phẳng đi qua trung điểm các cạnh bên $SA, SB, SC, SD$ cắt hình chóp theo một thiết diện hình vuông. Tính diện tích của thiết diện đó.",
      correctAnswer: "9",
      acceptableAnswers: ["9"],
      explanation: "Cạnh của thiết diện bằng một nửa cạnh đáy: $\\dfrac{6}{2} = 3$. Diện tích thiết diện là $3^2 = 9$."
    },
    {
      id: "ai-sa-11.11.10",
      badge: "Luyện thêm TLN 10 - Số đường thẳng chéo nhau với 1 cạnh tứ diện",
      isAiGenerated: true,
      source: "Tài liệu Luyện tập Toán 11 C4B2",
      prompt: "Trong tứ diện $ABCD$, có bao nhiêu cạnh của tứ diện chéo nhau với cạnh $AB$?",
      correctAnswer: "1",
      acceptableAnswers: ["1"],
      explanation: "Trong 5 cạnh còn lại của tứ diện, có 4 cạnh cắt $AB$ (gồm $AC, AD$ cắt tại $A$ và $BC, BD$ cắt tại $B$). Duy nhất chỉ có 1 cạnh đối diện $CD$ là chéo nhau với $AB$."
    }
  ]
};
