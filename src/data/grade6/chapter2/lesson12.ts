import { DetailedLessonData } from '@/data/allGradesLessonsData';

export const LESSON_12_DATA: DetailedLessonData = {
  id: 't6-b12-uoc-chung-ucln',
  lessonNumber: 12,
  title: 'Bài 12: Ước chung và ước chung lớn nhất',
  bookChapter: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
  scenarioTitle: 'Tình huống: Chia đều phần thưởng học tập và xếp đội hình biểu diễn',
  scenarioFrames: [],
  theorySections: [
    {
      index: '1',
      title: 'Ước chung và Ước chung lớn nhất (ƯCLN)',
      points: [
        'Một số tự nhiên được gọi là **ước chung** của hai hay nhiều số nếu nó là ước của tất cả các số đó.',
        'Ký hiệu tập hợp các ước chung của hai số $a$ và $b$ là $\\text{ƯC}(a, b)$. Ta có: $x \\in \\text{ƯC}(a, b)$ nếu $a \\ \\vdots \\ x$ và $b \\ \\vdots \\ x$.',
        '**Ước chung lớn nhất (ƯCLN)** của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó. Ký hiệu là $\\text{ƯCLN}(a, b)$ hoặc $\\text{ƯCLN}(a, b, c)$.',
        'Nhận xét quan trọng:\n• Tất cả các ước chung của hai hay nhiều số đều là ước của ƯCLN của các số đó.\n• Với mọi số tự nhiên $a \\neq 0$: $\\text{ƯCLN}(a, 1) = 1$ và $\\text{ƯCLN}(a, b, 1) = 1$.\n• Nếu số lớn chia hết cho số bé, chẳng hạn $a \\ \\vdots \\ b$ ($b \\neq 0$), thì $\\text{ƯCLN}(a, b) = b$.'
      ],
      formula: 'x \\in \\text{ƯC}(a, b) \\ \\text{nếu} \\ a \\ \\vdots \\ x \\ \\text{và} \\ b \\ \\vdots \\ x',
      exampleTitle: 'Ví dụ 1 (SGK Kết nối tri thức)',
      exampleProblem: 'Tìm tập hợp các ước chung của $18$ và $24$, từ đó chỉ ra $\\text{ƯCLN}(18, 24)$.',
      exampleSolution: 'Ta tìm tập hợp các ước của từng số:\n$\\text{Ư}(18) = \\{1; 2; 3; 6; 9; 18\\}$;\n$\\text{Ư}(24) = \\{1; 2; 3; 4; 6; 8; 12; 24\\}$.\nCác phần tử chung của hai tập hợp trên là $1; 2; 3; 6$.\nSuy ra tập hợp các ước chung của $18$ và $24$ là:\n$\\text{ƯC}(18, 24) = \\{1; 2; 3; 6\\}$.\nSố lớn nhất trong tập hợp $\\text{ƯC}(18, 24)$ là $6$.\nVậy $\\text{ƯCLN}(18, 24) = 6$.'
    },
    {
      index: '2',
      title: 'Cách tìm ƯCLN bằng cách phân tích các số ra thừa số nguyên tố',
      points: [
        'Muốn tìm ƯCLN của hai hay nhiều số lớn hơn $1$, ta thực hiện theo ba bước sau:\n• **Bước 1:** Phân tích mỗi số ra thừa số nguyên tố.\n• **Bước 2:** Chọn ra các thừa số nguyên tố chung.\n• **Bước 3:** Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ nhỏ nhất của nó. Tích đó là ƯCLN phải tìm.',
        '**Cách tìm ước chung thông qua ƯCLN:**\nĐể tìm ước chung của các số đã cho, ta tìm các ước của ƯCLN của các số đó:\n$\\text{ƯC}(a, b) = \\text{Ư}(\\text{ƯCLN}(a, b))$.\nCách làm này giúp tìm nhanh tập hợp các ước chung mà không cần liệt kê toàn bộ các ước của từng số ban đầu.'
      ],
      formula: '\\text{ƯCLN}(a, b) = \\text{Tích các thừa số nguyên tố chung với số mũ nhỏ nhất}',
      exampleTitle: 'Ví dụ 2 (SBT Toán 6 Kết nối tri thức)',
      exampleProblem: 'a) Tìm $\\text{ƯCLN}(36, 60)$ bằng cách phân tích ra thừa số nguyên tố.\nb) Tìm tập hợp $\\text{ƯC}(36, 60)$.',
      exampleSolution: 'a) Thực hiện theo ba bước:\n• Bước 1: Phân tích mỗi số ra thừa số nguyên tố:\n$36 = 2^2 \\cdot 3^2$;\n$60 = 2^2 \\cdot 3 \\cdot 5$.\n• Bước 2: Thừa số nguyên tố chung là $2$ và $3$.\n• Bước 3: Lập tích với số mũ nhỏ nhất:\nSố mũ nhỏ nhất của $2$ là $2$, số mũ nhỏ nhất của $3$ là $1$.\nDo đó: $\\text{ƯCLN}(36, 60) = 2^2 \\cdot 3 = 12$.\n\nb) Tìm tập hợp $\\text{ƯC}(36, 60)$ thông qua ƯCLN:\nCác ước chung của $36$ và $60$ là các ước của $12$.\nTa có: $\\text{Ư}(12) = \\{1; 2; 3; 4; 6; 12\\}$.\nVậy $\\text{ƯC}(36, 60) = \\{1; 2; 3; 4; 6; 12\\}$.'
    },
    {
      index: '3',
      title: 'Hai số nguyên tố cùng nhau',
      points: [
        'Hai số tự nhiên được gọi là **hai số nguyên tố cùng nhau** nếu ước chung lớn nhất của chúng bằng $1$.\nKý hiệu điều kiện: $\\text{ƯCLN}(a, b) = 1$.',
        'Các tính chất cần ghi nhớ:\n• Hai số tự nhiên liên tiếp luôn là hai số nguyên tố cùng nhau (ví dụ: $8$ và $9$; $14$ và $15$).\n• Hai số nguyên tố phân biệt luôn là hai số nguyên tố cùng nhau (ví dụ: $3$ và $7$; $11$ và $13$).\n• Số $1$ là số nguyên tố cùng nhau với mọi số tự nhiên $a \\neq 0$: $\\text{ƯCLN}(a, 1) = 1$.'
      ],
      formula: '\\text{ƯCLN}(a, b) = 1 \\ \\text{thì} \\ a \\ \\text{và} \\ b \\ \\text{nguyên tố cùng nhau}',
      exampleTitle: 'Ví dụ 3',
      exampleProblem: 'Chứng tỏ rằng hai số $8$ và $15$ là hai số nguyên tố cùng nhau.',
      exampleSolution: 'Phân tích mỗi số ra thừa số nguyên tố:\n$8 = 2^3$;\n$15 = 3 \\cdot 5$.\nTa thấy $8$ và $15$ không có thừa số nguyên tố chung nào.\nSuy ra $\\text{ƯCLN}(8, 15) = 1$.\nVậy $8$ và $15$ là hai số nguyên tố cùng nhau.'
    },
    {
      index: '4',
      title: 'Rút gọn phân số về phân số tối giản và ứng dụng thực tế',
      points: [
        '**Phân số tối giản:** Phân số $\\frac{a}{b}$ ($a, b \\in \\mathbb{N}^*$) được gọi là phân số tối giản nếu tử và mẫu là hai số nguyên tố cùng nhau, tức là $\\text{ƯCLN}(a, b) = 1$.',
        '**Rút gọn về phân số tối giản trong một bước:**\nMuốn rút gọn một phân số về phân số tối giản, ta chia cả tử và mẫu của phân số đó cho $\\text{ƯCLN}$ của tử và mẫu.',
        '**Ứng dụng thực tế của ƯCLN:**\n• Bài toán chia đều: Chia một số đồ vật (sách, vở, bút, kẹo,...) hoặc chia số người vào các tổ, các nhóm sao cho số phần tử ở mỗi tổ là bằng nhau và số tổ là nhiều nhất.\n• Bài toán hình học: Cắt một mảnh đất hoặc tấm bìa hình chữ nhật thành các hình vuông nhỏ bằng nhau sao cho tấm bìa được cắt hết và độ dài cạnh hình vuông là lớn nhất.'
      ],
      formula: '\\frac{a}{b} = \\frac{a : \\text{ƯCLN}(a, b)}{b : \\text{ƯCLN}(a, b)}',
      exampleTitle: 'Ví dụ 4 (Toán thực tế)',
      exampleProblem: 'Một lớp học có $24$ bạn nam và $18$ bạn nữ. Cô giáo chủ nhiệm dự kiến chia lớp thành các tổ sao cho số nam và số nữ ở mỗi tổ đều như nhau. Hỏi có thể chia thành nhiều nhất bao nhiêu tổ?',
      exampleSolution: 'Gọi số tổ nhiều nhất có thể chia được là $x$ ($x \\in \\mathbb{N}^*$).\nVì số bạn nam và số bạn nữ được chia đều vào các tổ nên $24 \\ \\vdots \\ x$ và $18 \\ \\vdots \\ x$.\nDo đó $x$ là một ước chung của $24$ và $18$.\nMặt khác, $x$ là số tổ nhiều nhất nên $x = \\text{ƯCLN}(24, 18)$.\nTa phân tích ra thừa số nguyên tố:\n$24 = 2^3 \\cdot 3$;\n$18 = 2 \\cdot 3^2$.\nSuy ra $\\text{ƯCLN}(24, 18) = 2 \\cdot 3 = 6$.\nVậy có thể chia thành nhiều nhất $6$ tổ (mỗi tổ có $24 : 6 = 4$ bạn nam và $18 : 6 = 3$ bạn nữ).'
    }
  ],
  tips: [
    'Nếu số lớn chia hết cho số bé ($a \\ \\vdots \\ b$ với $b \\neq 0$) thì $\\text{ƯCLN}(a, b) = b$. Ví dụ: $48 \\ \\vdots \\ 16$ suy ra ngay $\\text{ƯCLN}(48, 16) = 16$ mà không cần phân tích thừa số nguyên tố.',
    'Hai số tự nhiên liên tiếp luôn là hai số nguyên tố cùng nhau: $\\text{ƯCLN}(n, n + 1) = 1$. Do đó phân số có dạng $\\frac{n}{n + 1}$ luôn là phân số tối giản với mọi $n \\in \\mathbb{N}^*$.',
    'Để tìm nhanh tất cả các ước chung của các số, hãy tìm $\\text{ƯCLN}$ của chúng trước, sau đó tìm các ước của $\\text{ƯCLN}$ đó: $\\text{ƯC}(a, b) = \\text{Ư}(\\text{ƯCLN}(a, b))$.'
  ],
  traps: [
    'BẪY CHỌN THỪA SỐ RIÊNG HOẶC LẤY SỐ MŨ LỚN NHẤT: Khi tìm ƯCLN bằng thừa số nguyên tố, chỉ được chọn thừa số nguyên tố CHUNG với số mũ NHỎ NHẤT (lấy thừa số riêng hoặc số mũ lớn nhất là quy tắc tìm BCNN, không phải ƯCLN).',
    'BẪY QUAN HỆ TẬP HỢP TRONG TOÁN 6: Học sinh lớp 6 chưa học ký hiệu tập con. Mọi ước chung của $a$ và $b$ đều là ước của $\\text{ƯCLN}(a, b)$, nhưng diễn đạt bằng lời là "tập hợp con", tuyệt đối không dùng ký hiệu tập con.',
    'BẪY SỐ DƯ TRONG BÀI TOÁN CHIA CÓ DƯ: Khi tìm số chia $x$ trong bài toán chia có dư, điều kiện tiên quyết là số chia $x$ phải lớn hơn số dư. Nếu chia còn dư $8$ thì bắt buộc $x > 8$.'
  ],
  videoQuestions: [
    {
      id: 'vq-12.1',
      title: 'Checkpoint 1: Khái niệm ước chung',
      question: 'Ước chung của hai hay nhiều số là gì?',
      options: [
        'Số là ước của tất cả các số đó',
        'Số là bội của tất cả các số đó',
        'Số chỉ là ước của số nhỏ nhất',
        'Số là ước của ít nhất một trong các số đó'
      ],
      correctIndex: 0,
      explanation: 'Theo định nghĩa, một số tự nhiên được gọi là ước chung của hai hay nhiều số nếu nó là ước của tất cả các số đó.'
    },
    {
      id: 'vq-12.2',
      title: 'Checkpoint 2: Quy tắc tìm ƯCLN bằng thừa số nguyên tố',
      question: 'Khi tìm $\\text{ƯCLN}$ của hai hay nhiều số lớn hơn $1$ bằng cách phân tích ra thừa số nguyên tố, ta chọn các thừa số nguyên tố chung và lấy với số mũ như thế nào?',
      options: [
        'Mỗi thừa số lấy với số mũ nhỏ nhất của nó',
        'Mỗi thừa số lấy với số mũ lớn nhất của nó',
        'Mỗi thừa số lấy với số mũ trung bình',
        'Lấy tích cả thừa số chung và thừa số riêng với số mũ nhỏ nhất'
      ],
      correctIndex: 0,
      explanation: 'Quy tắc tìm ƯCLN: Lập tích các thừa số nguyên tố chung, mỗi thừa số lấy với số mũ nhỏ nhất của nó.'
    },
    {
      id: 'vq-12.3',
      title: 'Checkpoint 3: Rút gọn về phân số tối giản',
      question: 'Để rút gọn phân số $\\frac{a}{b}$ về phân số tối giản trong đúng một bước, ta nên chia cả tử và mẫu cho:',
      options: [
        '$\\text{ƯCLN}(a, b)$',
        'Một ước chung bất kì của $a$ và $b$',
        'Số nhỏ hơn giữa $a$ và $b$',
        'Hiệu của $a$ và $b$'
      ],
      correctIndex: 0,
      explanation: 'Khi chia cả tử và mẫu của một phân số cho ước chung lớn nhất của chúng, tử số và mẫu số mới sẽ là hai số nguyên tố cùng nhau, tạo thành phân số tối giản.'
    }
  ],
  quizQuestions: [
    {
      id: 'quiz-12.1',
      badge: 'Câu 1 - Nhận biết khái niệm ƯC',
      source: 'Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1',
      question: 'Cho hai số tự nhiên $a$ và $b$. Số tự nhiên $x$ được gọi là ước chung của $a$ và $b$ khi và chỉ khi:',
      options: [
        '$a \\ \\vdots \\ x$ và $b \\ \\vdots \\ x$',
        '$x \\ \\vdots \\ a$ và $x \\ \\vdots \\ b$',
        '$a \\ \\vdots \\ x$ hoặc $b \\ \\vdots \\ x$',
        '$x = a + b$'
      ],
      correctIndex: 0,
      explanation: 'Theo định nghĩa, số $x$ là ước chung của $a$ và $b$ nếu $x$ là ước của cả $a$ và $b$, tức là $a \\ \\vdots \\ x$ và $b \\ \\vdots \\ x$.'
    },
    {
      id: 'quiz-12.2',
      badge: 'Câu 2 - Tập hợp các ước chung',
      source: 'SGK Toán 6 Kết nối tri thức Tập 1 & SH6-CĐ 2',
      question: 'Tập hợp các ước chung của $12$ và $18$ là:',
      options: [
        '\\{1; 2; 3; 6\\}',
        '\\{1; 2; 3; 4\\}',
        '\\{1; 2; 6; 12\\}',
        '\\{1; 3; 6; 9\\}'
      ],
      correctIndex: 0,
      explanation: 'Ta có $\\text{Ư}(12) = \\{1; 2; 3; 4; 6; 12\\}$ và $\\text{Ư}(18) = \\{1; 2; 3; 6; 9; 18\\}$. Các phần tử chung là $1; 2; 3; 6$. Do đó $\\text{ƯC}(12, 18) = \\{1; 2; 3; 6\\}$.'
    },
    {
      id: 'quiz-12.3',
      badge: 'Câu 3 - Tính chất đặc biệt của ƯCLN',
      source: 'Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách',
      question: 'Cho hai số tự nhiên $a$ và $b$ ($b \\neq 0$). Nếu $a \\ \\vdots \\ b$ thì $\\text{ƯCLN}(a, b)$ bằng:',
      options: [
        '$b$',
        '$a$',
        '$1$',
        '$a \\cdot b$'
      ],
      correctIndex: 0,
      explanation: 'Vì $a \\ \\vdots \\ b$ nên $b$ là ước của $a$. Mặt khác $b$ là ước lớn nhất của chính nó, do đó số lớn nhất vừa là ước của $a$ vừa là ước của $b$ chính là $b$. Vậy $\\text{ƯCLN}(a, b) = b$.'
    },
    {
      id: 'quiz-12.4',
      badge: 'Câu 4 - Tìm ƯCLN từ phân tích thừa số nguyên tố',
      source: 'SGK Toán 6 Tập 1 & SH6-CĐ 2',
      question: 'Biết $a = 2^3 \\cdot 3^2$ và $b = 2^2 \\cdot 3^3 \\cdot 5$. Giá trị của $\\text{ƯCLN}(a, b)$ là:',
      options: [
        '$36$',
        '$72$',
        '$18$',
        '$1080$'
      ],
      correctIndex: 0,
      explanation: 'Thừa số nguyên tố chung của $a$ và $b$ là $2$ và $3$. Số mũ nhỏ nhất của $2$ là $2$, số mũ nhỏ nhất của $3$ là $2$. Suy ra $\\text{ƯCLN}(a, b) = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$.'
    },
    {
      id: 'quiz-12.5',
      badge: 'Câu 5 - Tìm ƯCLN của ba số',
      source: 'Chuyên đề Dạy thêm Toán 6 Kết nối tri thức',
      question: 'Ước chung lớn nhất của ba số $16, 32, 48$ là:',
      options: [
        '$16$',
        '$8$',
        '$4$',
        '$32$'
      ],
      correctIndex: 0,
      explanation: 'Nhận thấy $32 \\ \\vdots \\ 16$ và $48 \\ \\vdots \\ 16$, do đó $16$ là ước của cả $32$ và $48$. Vì $16$ cũng là ước lớn nhất của chính nó nên $\\text{ƯCLN}(16, 32, 48) = 16$.'
    },
    {
      id: 'quiz-12.6',
      badge: 'Câu 6 - Tìm ƯC thông qua ƯCLN',
      source: 'SGK Toán 6 Tập 1, Trang 48',
      question: 'Biết $\\text{ƯCLN}(a, b) = 18$. Tập hợp các ước chung $\\text{ƯC}(a, b)$ có bao nhiêu phần tử?',
      options: [
        '$6$',
        '$5$',
        '$4$',
        '$8$'
      ],
      correctIndex: 0,
      explanation: 'Vì các ước chung của $a$ và $b$ đều là ước của $\\text{ƯCLN}(a, b) = 18$. Ta có $\\text{Ư}(18) = \\{1; 2; 3; 6; 9; 18\\}$, gồm đúng $6$ phần tử. Do đó $\\text{ƯC}(a, b)$ có $6$ phần tử.'
    },
    {
      id: 'quiz-12.7',
      badge: 'Câu 7 - Hai số nguyên tố cùng nhau',
      source: 'Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách',
      question: 'Cặp số nào sau đây là hai số nguyên tố cùng nhau?',
      options: [
        '$14$ và $25$',
        '$12$ và $15$',
        '$16$ và $24$',
        '$21$ và $35$'
      ],
      correctIndex: 0,
      explanation: 'Phân tích ra thừa số nguyên tố: $14 = 2 \\cdot 7$ và $25 = 5^2$. Hai số này không có thừa số nguyên tố chung, nên $\\text{ƯCLN}(14, 25) = 1$. Do đó $14$ và $25$ là hai số nguyên tố cùng nhau. Các cặp còn lại đều có ước chung lớn hơn $1$ (lần lượt là $3, 8, 7$).'
    },
    {
      id: 'quiz-12.8',
      badge: 'Câu 8 - Rút gọn về phân số tối giản',
      source: 'SGK Toán 6 Tập 1 & Chuyên đề Dạy thêm',
      question: 'Rút gọn phân số $\\frac{42}{70}$ về phân số tối giản ta được:',
      options: [
        '\\frac{3}{5}',
        '\\frac{6}{10}',
        '\\frac{7}{10}',
        '\\frac{21}{35}'
      ],
      correctIndex: 0,
      explanation: 'Ta có $42 = 2 \\cdot 3 \\cdot 7$ và $70 = 2 \\cdot 5 \\cdot 7$, suy ra $\\text{ƯCLN}(42, 70) = 2 \\cdot 7 = 14$. Chia cả tử và mẫu cho $14$: $\\frac{42 : 14}{70 : 14} = \\frac{3}{5}$.'
    },
    {
      id: 'quiz-12.9',
      badge: 'Câu 9 - Tìm x thỏa mãn quan hệ chia hết',
      source: 'Chuyên đề Dạy thêm Toán 6 Kết nối tri thức',
      question: 'Tìm số tự nhiên $x$ lớn nhất biết rằng $70 \\ \\vdots \\ x$ và $84 \\ \\vdots \\ x$:',
      options: [
        '$14$',
        '$7$',
        '$28$',
        '$2$'
      ],
      correctIndex: 0,
      explanation: 'Vì $70 \\ \\vdots \\ x$, $84 \\ \\vdots \\ x$ và $x$ lớn nhất nên $x = \\text{ƯCLN}(70, 84)$. Ta có $70 = 2 \\cdot 5 \\cdot 7$ và $84 = 2^2 \\cdot 3 \\cdot 7$. Suy ra $x = 2 \\cdot 7 = 14$.'
    },
    {
      id: 'quiz-12.10',
      badge: 'Câu 10 - Toán thực tế chia tổ',
      source: 'SGK Toán 6 Tập 1 & TN6 CII Bài 11',
      question: 'Lớp 6A có $18$ bạn nữ và $24$ bạn nam. Cô giáo chủ nhiệm muốn chia đều học sinh vào các tổ sao cho số bạn nữ và số bạn nam ở mỗi tổ là như nhau. Số tổ nhiều nhất có thể chia được là:',
      options: [
        '$6$',
        '$8$',
        '$4$',
        '$3$'
      ],
      correctIndex: 0,
      explanation: 'Số tổ nhiều nhất có thể chia được là ước chung lớn nhất của $18$ và $24$. Ta có $18 = 2 \\cdot 3^2$ và $24 = 2^3 \\cdot 3$. Suy ra $\\text{ƯCLN}(18, 24) = 2 \\cdot 3 = 6$. Vậy có thể chia nhiều nhất thành $6$ tổ.'
    }
  ],
  practiceQuestions: [
    {
      id: 'prac-12.1',
      badge: 'Luyện tập 1 - Tìm ƯCLN bằng thừa số nguyên tố',
      source: 'Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách',
      question: 'Cho $m = 2^3 \\cdot 3 \\cdot 5^2$ và $n = 2^2 \\cdot 3^2 \\cdot 7$. Ước chung lớn nhất của $m$ và $n$ viết dưới dạng tích thừa số nguyên tố là:',
      options: [
        '2^2 \\cdot 3',
        '2^3 \\cdot 3^2',
        '2^2 \\cdot 3 \\cdot 5',
        '2^3 \\cdot 3^2 \\cdot 5^2 \\cdot 7'
      ],
      correctIndex: 0,
      explanation: 'Các thừa số nguyên tố chung của $m$ và $n$ là $2$ và $3$. Số mũ nhỏ nhất của $2$ là $2$, số mũ nhỏ nhất của $3$ là $1$. Do đó $\\text{ƯCLN}(m, n) = 2^2 \\cdot 3$.'
    },
    {
      id: 'prac-12.2',
      badge: 'Luyện tập 2 - Hai số tự nhiên liên tiếp',
      source: 'Chuyên đề Nâng cao Toán 6',
      question: 'Với mọi số tự nhiên $n \\ge 1$, ước chung lớn nhất của hai số tự nhiên liên tiếp $n$ và $n + 1$ là:',
      options: [
        '$1$',
        '$2$',
        '$n$',
        '$n + 1$'
      ],
      correctIndex: 0,
      explanation: 'Gọi $d$ là một ước chung của $n$ và $n + 1$. Khi đó $(n + 1) \\ \\vdots \\ d$ và $n \\ \\vdots \\ d$. Suy ra $[(n + 1) - n] \\ \\vdots \\ d$, tức là $1 \\ \\vdots \\ d$, do đó $d = 1$. Vậy $\\text{ƯCLN}(n, n + 1) = 1$.'
    },
    {
      id: 'prac-12.3',
      badge: 'Luyện tập 3 - Tìm ƯCLN của ba số',
      source: 'SGK Toán 6 Tập 1 & SH6-CĐ 2',
      question: 'Ước chung lớn nhất của ba số $24, 36, 60$ là:',
      options: [
        '$12$',
        '$6$',
        '$24$',
        '$4$'
      ],
      correctIndex: 0,
      explanation: 'Phân tích ra thừa số nguyên tố: $24 = 2^3 \\cdot 3$; $36 = 2^2 \\cdot 3^2$; $60 = 2^2 \\cdot 3 \\cdot 5$. Thừa số nguyên tố chung là $2$ và $3$ với số mũ nhỏ nhất lần lượt là $2$ và $1$. Suy ra $\\text{ƯCLN}(24, 36, 60) = 2^2 \\cdot 3 = 12$.'
    },
    {
      id: 'prac-12.4',
      badge: 'Luyện tập 4 - Tìm các ước chung trong khoảng',
      source: 'Chuyên đề Dạy thêm Toán 6 Kết nối tri thức',
      question: 'Tập hợp các ước chung lớn hơn $4$ của hai số $36$ và $90$ là:',
      options: [
        '\\{6; 9; 18\\}',
        '\\{6; 12; 18\\}',
        '\\{9; 18\\}',
        '\\{6; 9; 18; 36\\}'
      ],
      correctIndex: 0,
      explanation: 'Ta có $36 = 2^2 \\cdot 3^2$ và $90 = 2 \\cdot 3^2 \\cdot 5$, suy ra $\\text{ƯCLN}(36, 90) = 2 \\cdot 3^2 = 18$. Các ước chung của $36$ và $90$ là ước của $18$: $\\text{Ư}(18) = \\{1; 2; 3; 6; 9; 18\\}$. Các ước lớn hơn $4$ là $6; 9; 18$. Vậy tập hợp cần tìm là $\\{6; 9; 18\\}$.'
    },
    {
      id: 'prac-12.5',
      badge: 'Luyện tập 5 - Nhận biết phân số tối giản',
      source: 'Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách',
      question: 'Trong các phân số sau, phân số nào là phân số tối giản?',
      options: [
        '\\frac{15}{28}',
        '\\frac{14}{21}',
        '\\frac{18}{27}',
        '\\frac{20}{35}'
      ],
      correctIndex: 0,
      explanation: 'Ta có $15 = 3 \\cdot 5$ và $28 = 2^2 \\cdot 7$, suy ra $\\text{ƯCLN}(15, 28) = 1$. Do đó $\\frac{15}{28}$ là phân số tối giản. Các phân số còn lại đều chưa tối giản vì tử và mẫu có ước chung lớn hơn $1$ (lần lượt chia hết cho $7, 9, 5$).'
    },
    {
      id: 'prac-12.6',
      badge: 'Luyện tập 6 - Rút gọn phân số',
      source: 'SGK Toán 6 Tập 1, Trang 50',
      question: 'Rút gọn phân số $\\frac{48}{108}$ về phân số tối giản ta được:',
      options: [
        '\\frac{4}{9}',
        '\\frac{2}{5}',
        '\\frac{8}{18}',
        '\\frac{12}{27}'
      ],
      correctIndex: 0,
      explanation: 'Ta phân tích: $48 = 2^4 \\cdot 3$ và $108 = 2^2 \\cdot 3^3$. Suy ra $\\text{ƯCLN}(48, 108) = 2^2 \\cdot 3 = 12$. Chia cả tử và mẫu cho $12$ ta được: $\\frac{48 : 12}{108 : 12} = \\frac{4}{9}$.'
    },
    {
      id: 'prac-12.7',
      badge: 'Luyện tập 7 - Tìm x có điều kiện',
      source: 'Chuyên đề Dạy thêm Toán 6',
      question: 'Tìm số tự nhiên $x$ thỏa mãn $45 \\ \\vdots \\ x$, $60 \\ \\vdots \\ x$ và $x > 5$:',
      options: [
        '$15$',
        '$10$',
        '$5$',
        '$30$'
      ],
      correctIndex: 0,
      explanation: 'Vì $45 \\ \\vdots \\ x$ và $60 \\ \\vdots \\ x$ nên $x \\in \\text{ƯC}(45, 60)$. Ta có $\\text{ƯCLN}(45, 60) = 15$. Các ước của $15$ là $\\{1; 3; 5; 15\\}$. Kết hợp điều kiện $x > 5$, ta được $x = 15$.'
    },
    {
      id: 'prac-12.8',
      badge: 'Luyện tập 8 - Toán thực tế xếp hàng',
      source: 'SGK Toán 6 Tập 1 & TN6 CII Bài 11',
      question: 'Học sinh khối 6 của một trường có ba lớp: lớp 6A có $40$ học sinh, lớp 6B có $44$ học sinh, lớp 6C có $48$ học sinh. Trong buổi chào cờ, ba lớp xếp thành các hàng dọc có số người bằng nhau mà không lớp nào có người lẻ hàng. Số hàng dọc nhiều nhất có thể xếp được là:',
      options: [
        '$4$',
        '$2$',
        '$8$',
        '$6$'
      ],
      correctIndex: 0,
      explanation: 'Số hàng dọc nhiều nhất là ước chung lớn nhất của $40, 44, 48$. Ta có $40 = 2^3 \\cdot 5$; $44 = 2^2 \\cdot 11$; $48 = 2^4 \\cdot 3$. Thừa số nguyên tố chung duy nhất là $2$ với số mũ nhỏ nhất là $2$. Do đó $\\text{ƯCLN}(40, 44, 48) = 2^2 = 4$. Vậy số hàng dọc nhiều nhất có thể xếp được là $4$ hàng.'
    },
    {
      id: 'prac-12.9',
      badge: 'Luyện tập 9 - Cắt hình chữ nhật thành hình vuông',
      source: 'Chuyên đề Dạy thêm Toán 6 Kết nối tri thức',
      question: 'Một tấm bìa hình chữ nhật có chiều dài $60\\text{ cm}$ và chiều rộng $48\\text{ cm}$. Bạn Nam muốn cắt tấm bìa đó thành các mảnh hình vuông bằng nhau sao cho tấm bìa được cắt hết. Độ dài cạnh hình vuông lớn nhất có thể cắt được là:',
      options: [
        '12\\text{ cm}',
        '6\\text{ cm}',
        '24\\text{ cm}',
        '4\\text{ cm}'
      ],
      correctIndex: 0,
      explanation: 'Gọi độ dài cạnh hình vuông lớn nhất là $a\\text{ (cm)}$. Vì tấm bìa được cắt hết thành các hình vuông bằng nhau nên $60 \\ \\vdots \\ a$ và $48 \\ \\vdots \\ a$. Do đó $a = \\text{ƯCLN}(60, 48)$. Ta có $60 = 2^2 \\cdot 3 \\cdot 5$ và $48 = 2^4 \\cdot 3$. Suy ra $a = 2^2 \\cdot 3 = 12\\text{ cm}$.'
    },
    {
      id: 'prac-12.10',
      badge: 'Luyện tập 10 - Chia quà có điều kiện khoảng',
      source: 'Chuyên đề Dạy thêm Toán 6 Bộ 2',
      question: 'Một người chia $75$ quyển vở và $60$ chiếc bút chì vào các túi quà đều nhau thì vừa hết. Biết số túi quà là một số tự nhiên lớn hơn $5$ và nhỏ hơn $20$. Số túi quà người đó chia được là:',
      options: [
        '$15$',
        '$10$',
        '$12$',
        '$6$'
      ],
      correctIndex: 0,
      explanation: 'Gọi số túi quà là $x$ ($x \\in \\mathbb{N}^*$). Vì chia đều thì vừa hết nên $75 \\ \\vdots \\ x$ và $60 \\ \\vdots \\ x$. Suy ra $x \\in \\text{ƯC}(75, 60)$. Ta có $\\text{ƯCLN}(75, 60) = 15$, các ước của $15$ là $\\{1; 3; 5; 15\\}$. Vì $5 < x < 20$ nên $x = 15$.'
    }
  ],
  trueFalseQuestions: [
    {
      id: 'tf-12.1',
      badge: 'Câu 1 - Khẳng định lý thuyết về ƯC và ƯCLN',
      source: 'SGK Toán 6 Tập 1 & Chuyên đề Ba Bộ Sách',
      prompt: 'Xét tính Đúng/Sai của các khẳng định sau về ước chung và ước chung lớn nhất:',
      subItems: [
        {
          id: 'a',
          text: 'Nếu một số tự nhiên chia hết cho cả $a$ và $b$ thì số đó là ước chung của $a$ và $b$.',
          correctAnswer: false,
          explanation: 'Sai, vì số chia hết cho cả $a$ và $b$ là bội chung của $a$ và $b$, không phải ước chung.'
        },
        {
          id: 'b',
          text: 'Mọi ước chung của hai số tự nhiên $a$ và $b$ đều là ước của $\\text{ƯCLN}(a, b)$.',
          correctAnswer: true,
          explanation: 'Đúng, đây là tính chất cơ bản: tất cả các ước chung của $a$ và $b$ đều là ước của $\\text{ƯCLN}(a, b)$.'
        },
        {
          id: 'c',
          text: 'Nếu $\\text{ƯCLN}(a, b) = 1$ thì hai số tự nhiên $a$ và $b$ được gọi là hai số nguyên tố cùng nhau.',
          correctAnswer: true,
          explanation: 'Đúng, đây chính là định nghĩa hai số nguyên tố cùng nhau.'
        },
        {
          id: 'd',
          text: 'Nếu số tự nhiên $a$ chia hết cho số tự nhiên $b$ ($b \\neq 0$) thì $\\text{ƯCLN}(a, b) = a$.',
          correctAnswer: false,
          explanation: 'Sai, vì nếu $a \\ \\vdots \\ b$ thì $\\text{ƯCLN}(a, b) = b$, không phải bằng $a$.'
        }
      ]
    },
    {
      id: 'tf-12.2',
      badge: 'Câu 2 - Phân tích thừa số nguyên tố của ba số',
      source: 'Chuyên đề Dạy thêm Toán 6 Kết nối tri thức',
      prompt: 'Cho ba số tự nhiên dưới dạng phân tích ra thừa số nguyên tố: $a = 2^3 \\cdot 3^2 \\cdot 5$, $b = 2^2 \\cdot 3^3 \\cdot 7$, $c = 2^4 \\cdot 3 \\cdot 5^2$. Xét tính Đúng/Sai của các mệnh đề sau:',
      subItems: [
        {
          id: 'a',
          text: 'Các thừa số nguyên tố chung của cả ba số $a, b, c$ là $2$ và $3$.',
          correctAnswer: true,
          explanation: 'Đúng, chỉ có hai thừa số nguyên tố $2$ và $3$ xuất hiện đồng thời trong cả ba phân tích của $a, b, c$.'
        },
        {
          id: 'b',
          text: 'Ước chung lớn nhất của $a$ và $b$ là $\\text{ƯCLN}(a, b) = 36$.',
          correctAnswer: true,
          explanation: 'Đúng, vì $\\text{ƯCLN}(a, b) = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$.'
        },
        {
          id: 'c',
          text: 'Ước chung lớn nhất của cả ba số là $\\text{ƯCLN}(a, b, c) = 12$.',
          correctAnswer: true,
          explanation: 'Đúng, vì thừa số nguyên tố chung là $2$ và $3$ với số mũ nhỏ nhất lần lượt là $2$ và $1$, do đó $\\text{ƯCLN}(a, b, c) = 2^2 \\cdot 3 = 12$.'
        },
        {
          id: 'd',
          text: 'Số $18$ là một ước chung của cả ba số $a, b, c$.',
          correctAnswer: false,
          explanation: 'Sai, vì $\\text{ƯCLN}(a, b, c) = 12$ mà $18$ không phải là ước của $12$ (cụ thể số $c = 2^4 \\cdot 3 \\cdot 5^2$ chỉ có thừa số $3^1$ nên không chia hết cho $18 = 2 \\cdot 3^2$).'
        }
      ]
    },
    {
      id: 'tf-12.3',
      badge: 'Câu 3 - Phân số tối giản và rút gọn phân số',
      source: 'SGK Toán 6 Tập 1 & Chuyên đề Dạy thêm',
      prompt: 'Xét tính Đúng/Sai của các phát biểu sau về phân số tối giản và rút gọn phân số:',
      subItems: [
        {
          id: 'a',
          text: 'Phân số $\\frac{21}{39}$ là phân số tối giản.',
          correctAnswer: false,
          explanation: 'Sai, vì cả tử số $21$ và mẫu số $39$ đều chia hết cho $3$ nên phân số chưa tối giản.'
        },
        {
          id: 'b',
          text: 'Phân số $\\frac{16}{25}$ là phân số tối giản vì $\\text{ƯCLN}(16, 25) = 1$.',
          correctAnswer: true,
          explanation: 'Đúng, vì $16 = 2^4$ và $25 = 5^2$ không có thừa số nguyên tố chung, $\\text{ƯCLN}(16, 25) = 1$.'
        },
        {
          id: 'c',
          text: 'Để rút gọn phân số $\\frac{36}{48}$ về phân số tối giản trong một bước, ta chia cả tử và mẫu cho $12$.',
          correctAnswer: true,
          explanation: 'Đúng, vì $\\text{ƯCLN}(36, 48) = 12$. Khi chia cả tử và mẫu cho $12$ ta được phân số tối giản $\\frac{3}{4}$.'
        },
        {
          id: 'd',
          text: 'Với mọi số tự nhiên $n \\ge 1$, phân số $\\frac{n}{n + 1}$ luôn là phân số tối giản.',
          correctAnswer: true,
          explanation: 'Đúng, vì $n$ và $n + 1$ là hai số tự nhiên liên tiếp nên $\\text{ƯCLN}(n, n + 1) = 1$, do đó phân số $\\frac{n}{n + 1}$ luôn tối giản.'
        }
      ]
    },
    {
      id: 'tf-12.4',
      badge: 'Câu 4 - Ứng dụng thực tế chia quà tặng',
      source: 'TN6 CII Bài 11 & SH6-CĐ 2',
      prompt: 'Đoàn thanh niên chuẩn bị $72$ quyển vở, $48$ chiếc bút bi và $36$ hộp bút chì màu để chia thành các phần quà tặng các bạn học sinh sao cho số vở, số bút bi và số hộp chì màu ở mỗi phần quà đều như nhau. Xét tính Đúng/Sai của các nhận định sau:',
      subItems: [
        {
          id: 'a',
          text: 'Có thể chia được nhiều nhất thành $12$ phần quà.',
          correctAnswer: true,
          explanation: 'Đúng, vì số phần quà nhiều nhất là $\\text{ƯCLN}(72, 48, 36) = 12$.'
        },
        {
          id: 'b',
          text: 'Khi chia thành số phần quà nhiều nhất, mỗi phần quà có $6$ quyển vở.',
          correctAnswer: true,
          explanation: 'Đúng, vì mỗi phần quà có $72 : 12 = 6$ quyển vở.'
        },
        {
          id: 'c',
          text: 'Khi chia thành số phần quà nhiều nhất, mỗi phần quà có $3$ chiếc bút bi.',
          correctAnswer: false,
          explanation: 'Sai, vì mỗi phần quà có $48 : 12 = 4$ chiếc bút bi, không phải $3$ chiếc.'
        },
        {
          id: 'd',
          text: 'Tập hợp các số lượng phần quà có thể chia được (kể cả trường hợp chia $1$ phần quà) có tất cả $6$ phần tử.',
          correctAnswer: true,
          explanation: 'Đúng, vì số phần quà là ước của $12$: $\\text{Ư}(12) = \\{1; 2; 3; 4; 6; 12\\}$, tập hợp này có đúng $6$ phần tử.'
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: 'sa-12.1',
      badge: 'Điền đáp số 1 - Tìm ƯCLN của hai số',
      source: 'SGK Toán 6 Tập 1, Trang 49',
      prompt: 'Tìm ước chung lớn nhất của hai số $84$ và $120$.',
      correctAnswer: '12',
      acceptableAnswers: ['12'],
      explanation: 'Ta phân tích ra thừa số nguyên tố:\n$84 = 2^2 \\cdot 3 \\cdot 7$;\n$120 = 2^3 \\cdot 3 \\cdot 5$.\nCác thừa số nguyên tố chung là $2$ và $3$.\nSuy ra $\\text{ƯCLN}(84, 120) = 2^2 \\cdot 3 = 12$.'
    },
    {
      id: 'sa-12.2',
      badge: 'Điền đáp số 2 - Tìm ƯCLN của ba số',
      source: 'Chuyên đề Dạy thêm Toán 6 Kết nối tri thức',
      prompt: 'Tìm ước chung lớn nhất của ba số $56, 140$ và $168$.',
      correctAnswer: '28',
      acceptableAnswers: ['28'],
      explanation: 'Phân tích mỗi số ra thừa số nguyên tố:\n$56 = 2^3 \\cdot 7$;\n$140 = 2^2 \\cdot 5 \\cdot 7$;\n$168 = 2^3 \\cdot 3 \\cdot 7$.\nCác thừa số nguyên tố chung là $2$ và $7$.\nSuy ra $\\text{ƯCLN}(56, 140, 168) = 2^2 \\cdot 7 = 28$.'
    },
    {
      id: 'sa-12.3',
      badge: 'Điền đáp số 3 - Tìm số tự nhiên x lớn nhất',
      source: 'Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách',
      prompt: 'Tìm số tự nhiên $x$ lớn nhất thỏa mãn $126 \\ \\vdots \\ x$ và $198 \\ \\vdots \\ x$.',
      correctAnswer: '18',
      acceptableAnswers: ['18'],
      explanation: 'Vì $126 \\ \\vdots \\ x$, $198 \\ \\vdots \\ x$ và $x$ lớn nhất nên $x = \\text{ƯCLN}(126, 198)$.\nPhân tích ra thừa số nguyên tố:\n$126 = 2 \\cdot 3^2 \\cdot 7$;\n$198 = 2 \\cdot 3^2 \\cdot 11$.\nSuy ra $x = 2 \\cdot 3^2 = 18$.'
    },
    {
      id: 'sa-12.4',
      badge: 'Điền đáp số 4 - Đếm số lượng ước chung',
      source: 'Chuyên đề Nâng cao Toán 6',
      prompt: 'Tập hợp các ước chung của hai số $72$ và $108$ có bao nhiêu phần tử?',
      correctAnswer: '9',
      acceptableAnswers: ['9'],
      explanation: 'Ta tìm $\\text{ƯCLN}(72, 108)$:\n$72 = 2^3 \\cdot 3^2$;\n$108 = 2^2 \\cdot 3^3$.\nSuy ra $\\text{ƯCLN}(72, 108) = 2^2 \\cdot 3^2 = 36$.\nTập hợp các ước chung của $72$ và $108$ chính là tập hợp các ước của $36$.\nTa có: $\\text{Ư}(36) = \\{1; 2; 3; 4; 6; 9; 12; 18; 36\\}$, gồm đúng $9$ phần tử.'
    },
    {
      id: 'sa-12.5',
      badge: 'Điền đáp số 5 - Bài toán chia tổ nhiều nhất',
      source: 'SGK Toán 6 Tập 1 & SH6-CĐ 2',
      prompt: 'Đội tình nguyện viên của một trường có $48$ bạn nam và $72$ bạn nữ. Đội trưởng muốn chia các bạn thành các nhóm đều nhau về cả số nam và số nữ. Hỏi có thể chia thành nhiều nhất bao nhiêu nhóm?',
      correctAnswer: '24',
      acceptableAnswers: ['24'],
      explanation: 'Số nhóm nhiều nhất có thể chia được là $\\text{ƯCLN}(48, 72)$.\nTa có:\n$48 = 2^4 \\cdot 3$;\n$72 = 2^3 \\cdot 3^2$.\nSuy ra $\\text{ƯCLN}(48, 72) = 2^3 \\cdot 3 = 24$.\nVậy có thể chia thành nhiều nhất $24$ nhóm.'
    },
    {
      id: 'sa-12.6',
      badge: 'Điền đáp số 6 - Bài toán chia quà có dư',
      source: 'Chuyên đề Học sinh giỏi Toán 6',
      prompt: 'Cô giáo có $80$ quyển vở và $65$ cái bút bi đem chia đều cho các bạn học sinh trong lớp. Sau khi chia đều cho $x$ bạn thì còn thừa $8$ quyển vở và $5$ cái bút bi. Biết $x > 8$, hỏi có bao nhiêu bạn học sinh được nhận quà?',
      correctAnswer: '12',
      acceptableAnswers: ['12'],
      explanation: 'Vì chia $80$ quyển vở còn thừa $8$ quyển nên số vở đã chia là $80 - 8 = 72$ quyển, do đó $72 \\ \\vdots \\ x$.\nVì chia $65$ cái bút còn thừa $5$ cái nên số bút đã chia là $65 - 5 = 60$ cái, do đó $60 \\ \\vdots \\ x$.\nSuy ra $x$ là ước chung của $72$ và $60$.\nTa tìm $\\text{ƯCLN}(72, 60)$:\n$72 = 2^3 \\cdot 3^2$;\n$60 = 2^2 \\cdot 3 \\cdot 5$.\nSuy ra $\\text{ƯCLN}(72, 60) = 2^2 \\cdot 3 = 12$.\nCác ước chung của $72$ và $60$ là ước của $12$: $\\text{Ư}(12) = \\{1; 2; 3; 4; 6; 12\\}$.\nVì số dư là $8$ nên số chia phải lớn hơn $8$ ($x > 8$).\nTrong các ước trên, chỉ có số $12$ lớn hơn $8$.\nVậy có $12$ bạn học sinh được nhận quà.'
    }
  ]
};
