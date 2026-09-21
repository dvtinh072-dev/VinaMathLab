import { DetailedLessonData } from '@/data/allGradesLessonsData';

export const LESSON_11_DATA: DetailedLessonData = {
  id: 't6-b11-so-nguyen-to',
  lessonNumber: 11,
  title: 'Bài 11: Số nguyên tố',
  bookChapter: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
  scenarioTitle: 'Tình huống: Bí mật mã hóa thông tin và các số nguyên tố',
  scenarioFrames: [
    {
      id: 1,
      character: 'student',
      characterName: 'Bạn An',
      avatar: '🧑‍🎓',
      speech: 'Thưa Thầy Tính, em nghe nói số nguyên tố đóng vai trò vô cùng quan trọng trong việc bảo mật tài khoản ngân hàng và mã hóa mật khẩu trên Internet. Điều đó có đúng không ạ?',
      visualGraphic: 'box',
      mathNote: 'p \\in \\mathbb{P}',
    },
    {
      id: 2,
      character: 'teacher',
      characterName: 'Thầy Tính (VinaMath)',
      avatar: '👨‍🏫',
      speech: 'Hoàn toàn chính xác! Số nguyên tố giống như những "viên gạch nguyên tử" xây dựng nên toàn bộ thế giới số tự nhiên. Hệ thống bảo mật RSA hiện đại sử dụng tích của hai số nguyên tố cực lớn để tạo khóa bí mật mà ngay cả siêu máy tính mạnh nhất cũng mất hàng nghìn năm mới giải mã được!',
      visualGraphic: 'graph',
      mathNote: 'n = p \\cdot q \\quad (p, q \\text{ là số nguyên tố})',
    },
  ],
  theorySections: [
    {
      index: '1',
      title: 'Số nguyên tố và hợp số',
      points: [
        '**Số nguyên tố** là số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó.',
        '**Hợp số** là số tự nhiên lớn hơn $1$, có nhiều hơn hai ước (tức là ngoài $1$ và chính nó, còn có ít nhất một ước khác).',
        '**Chú ý đặc biệt:** Số $0$ và số $1$ không là số nguyên tố cũng không là hợp số.',
        'Số $2$ là số nguyên tố chẵn duy nhất và là số nguyên tố nhỏ nhất. Tất cả các số nguyên tố khác $2$ đều là số lẻ.',
        'Không phải mọi số lẻ đều là số nguyên tố (ví dụ: các số lẻ $9;\\ 15;\\ 21;\\ 25;\\ 27;\\ 33$ là hợp số).',
      ],
      formula: 'p > 1, \\quad Ư(p) = \\{1;\\ p\\}',
      exampleTitle: 'Ví dụ 1 (SGK Kết nối tri thức)',
      exampleProblem: 'Trong các số sau: $11;\\ 12;\\ 17;\\ 25;\\ 0;\\ 1$, số nào là số nguyên tố, số nào là hợp số, số nào không là số nguyên tố cũng không là hợp số? Giải thích.',
      exampleSolution: '• Số $11$ và $17$ là các số nguyên tố vì chúng lớn hơn $1$ và chỉ có đúng hai ước là $1$ và chính nó.\n• Số $12$ là hợp số vì $12 > 1$ và có các ước là $1;\\ 2;\\ 3;\\ 4;\\ 6;\\ 12$ (có nhiều hơn hai ước).\n• Số $25$ là hợp số vì ngoài $1$ và $25$, số $25$ còn có thêm ước là $5$.\n• Số $0$ và số $1$ không là số nguyên tố cũng không là hợp số theo định nghĩa.',
    },
    {
      index: '2',
      title: 'Bảng các số nguyên tố nhỏ hơn 100',
      points: [
        '**Sàng Ê-ra-tô-xten (Eratosthenes):** Để tìm các số nguyên tố nhỏ hơn $100$, ta viết các số từ $2$ đến $99$. Giữ lại số $2$ và gạch bỏ các bội của $2$ lớn hơn $2$. Tiếp tục giữ lại số $3$ và gạch bỏ các bội của $3$ lớn hơn $3$. Lặp lại tương tự với các số $5$ và $7$. Các số còn lại không bị gạch chính là các số nguyên tố nhỏ hơn $100$.',
        'Có tất cả **$25$ số nguyên tố nhỏ hơn $100$** phân bố theo các hàng chục như sau:',
        '  - Nhỏ hơn $10$: $2;\\ 3;\\ 5;\\ 7$ ($4$ số).',
        '  - Từ $10$ đến $19$: $11;\\ 13;\\ 17;\\ 19$ ($4$ số).',
        '  - Từ $20$ đến $29$: $23;\\ 29$ ($2$ số).',
        '  - Từ $30$ đến $39$: $31;\\ 37$ ($2$ số).',
        '  - Từ $40$ đến $49$: $41;\\ 43;\\ 47$ ($3$ số).',
        '  - Từ $50$ đến $59$: $53;\\ 59$ ($2$ số).',
        '  - Từ $60$ đến $69$: $61;\\ 67$ ($2$ số).',
        '  - Từ $70$ đến $79$: $71;\\ 73;\\ 79$ ($3$ số).',
        '  - Từ $80$ đến $89$: $83;\\ 89$ ($2$ số).',
        '  - Từ $90$ đến $99$: $97$ ($1$ số).',
      ],
      formula: '\\{2;\\ 3;\\ 5;\\ 7;\\ 11;\\ 13;\\ 17;\\ 19;\\ 23;\\ 29;\\ 31;\\ 37;\\ 41;\\ 43;\\ 47;\\ 53;\\ 59;\\ 61;\\ 67;\\ 71;\\ 73;\\ 79;\\ 83;\\ 89;\\ 97\\}',
      exampleTitle: 'Ví dụ 2 (SGK Kết nối tri thức)',
      exampleProblem: 'Dựa vào bảng số nguyên tố, hãy xét xem các số sau là số nguyên tố hay hợp số: $47;\\ 57;\\ 67;\\ 87$.',
      exampleSolution: '• Số $47$ và $67$ là các số nguyên tố vì có mặt trong bảng các số nguyên tố nhỏ hơn $100$.\n• Số $57$ là hợp số vì tổng các chữ số $5 + 7 = 12$ chia hết cho $3$, do đó $57$ chia hết cho $3$ (có các ước $1;\\ 3;\\ 19;\\ 57$).\n• Số $87$ là hợp số vì tổng các chữ số $8 + 7 = 15$ chia hết cho $3$, do đó $87$ chia hết cho $3$ (có các ước $1;\\ 3;\\ 29;\\ 87$).',
    },
    {
      index: '3',
      title: 'Phân tích một số ra thừa số nguyên tố',
      points: [
        '**Định nghĩa:** Phân tích một số tự nhiên lớn hơn $1$ ra thừa số nguyên tố là viết số đó dưới dạng một tích các thừa số nguyên tố.',
        '**Dạng phân tích:** Mọi hợp số đều phân tích được ra thừa số nguyên tố. Dạng phân tích ra thừa số nguyên tố của một số nguyên tố chính là số đó.',
        '**Hai cách phân tích thường dùng:**',
        '  - **Phân tích theo sơ đồ cột (chia dọc):** Chia số đó lần lượt cho các ước nguyên tố từ nhỏ đến lớn ($2;\\ 3;\\ 5;\\ 7;\\dots$) cho đến khi được thương bằng $1$.',
        '  - **Phân tích theo sơ đồ cây:** Viết số đó thành tích của hai thừa số bất kì, rồi tiếp tục phân tích mỗi thừa số đó cho đến khi tất cả các nhánh tận cùng đều là số nguyên tố.',
        '**Quy ước viết kết quả:** Viết các thừa số nguyên tố theo thứ tự từ nhỏ đến lớn và viết gọn bằng lũy thừa.',
        '**Công thức tính số ước:** Nếu $n = p_1^{a} \\cdot p_2^{b} \\cdot p_3^{c}$ (với $p_1, p_2, p_3$ là các số nguyên tố) thì số lượng ước tự nhiên của $n$ bằng $(a + 1)(b + 1)(c + 1)$.',
      ],
      formula: 'n = p_1^{a} \\cdot p_2^{b} \\dots p_k^{m}',
      exampleTitle: 'Ví dụ 3 (SGK Kết nối tri thức)',
      exampleProblem: 'Phân tích số $120$ ra thừa số nguyên tố bằng sơ đồ cột và sơ đồ cây. Tìm tập hợp tất cả các ước nguyên tố của $120$.',
      exampleSolution: '• Phân tích theo sơ đồ cột:\n  $120 : 2 = 60$\n  $60 : 2 = 30$\n  $30 : 2 = 15$\n  $15 : 3 = 5$\n  $5 : 5 = 1$\n  Do đó: $120 = 2^3 \\cdot 3 \\cdot 5$.\n• Phân tích theo sơ đồ cây: $120 = 12 \\cdot 10 = (3 \\cdot 4) \\cdot (2 \\cdot 5) = 3 \\cdot 2^2 \\cdot 2 \\cdot 5 = 2^3 \\cdot 3 \\cdot 5$.\n• Các ước nguyên tố của $120$ là $2;\\ 3;\\ 5$. Tập hợp các ước nguyên tố của $120$ là $\\{2;\\ 3;\\ 5\\}$.',
    },
  ],
  videoQuestions: [
    {
      id: 'vq-6.11.1',
      title: 'Video Checkpoint 1: Khái niệm số nguyên tố và hợp số',
      question: 'Trong các phát biểu sau về số nguyên tố và hợp số, phát biểu nào là ĐÚNG?',
      options: [
        'Số nguyên tố là số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó',
        'Hợp số là số tự nhiên chỉ có nhiều hơn $1$ ước',
        'Số $1$ là số nguyên tố nhỏ nhất trong tập hợp số tự nhiên',
        'Mọi số tự nhiên lẻ đều là số nguyên tố'
      ],
      correctIndex: 0,
      explanation: 'Theo định nghĩa chuẩn SGK Toán 6: Số nguyên tố là số tự nhiên lớn hơn $1$, chỉ có đúng hai ước là $1$ và chính nó. Hợp số là số tự nhiên lớn hơn $1$ có nhiều hơn hai ước. Số $1$ không là số nguyên tố cũng không là hợp số.',
    },
    {
      id: 'vq-6.11.2',
      title: 'Video Checkpoint 2: Số nguyên tố chẵn duy nhất',
      question: 'Số nguyên tố chẵn duy nhất trong tập hợp các số tự nhiên là số nào?',
      options: [
        '$2$',
        '$0$',
        '$4$',
        '$6$'
      ],
      correctIndex: 0,
      explanation: 'Số $2$ là số nguyên tố chẵn duy nhất (và là số nguyên tố nhỏ nhất). Mọi số tự nhiên chẵn lớn hơn $2$ đều chia hết cho $2$ nên có ít nhất ba ước ($1;\\ 2$ và chính nó), do đó đều là hợp số.',
    },
    {
      id: 'vq-6.11.3',
      title: 'Video Checkpoint 3: Phân tích một số ra thừa số nguyên tố',
      question: 'Kết quả phân tích số $60$ ra thừa số nguyên tố viết gọn dưới dạng lũy thừa là:',
      options: [
        '$60 = 2^2 \\cdot 3 \\cdot 5$',
        '$60 = 4 \\cdot 3 \\cdot 5$',
        '$60 = 2 \\cdot 30$',
        '$60 = 6 \\cdot 10$'
      ],
      correctIndex: 0,
      explanation: 'Ta có $60 = 4 \\cdot 15 = 2^2 \\cdot 3 \\cdot 5$. Các thừa số $2;\\ 3;\\ 5$ đều là số nguyên tố. Các cách viết $4 \\cdot 3 \\cdot 5$ hay $6 \\cdot 10$ chưa đúng vì $4;\\ 6;\\ 10$ là hợp số chứ không phải thừa số nguyên tố.',
    },
  ],
  quizQuestions: [
    {
      id: 't6-b11-q1',
      badge: 'Câu 1 (Nhận biết)',
      question: 'Trong các số sau đây, số nào là số nguyên tố?',
      options: [
        '$17$',
        '$1$',
        '$9$',
        '$21$'
      ],
      correctIndex: 0,
      explanation: 'Số $17$ là số nguyên tố vì $17 > 1$ và chỉ có đúng hai ước là $1$ và $17$. Số $1$ không là số nguyên tố. Số $9$ chia hết cho $3$ và số $21$ chia hết cho $3;\\ 7$ nên là các hợp số.',
    },
    {
      id: 't6-b11-q2',
      badge: 'Câu 2 (Nhận biết)',
      question: 'Khẳng định nào sau đây là ĐÚNG về số nguyên tố nhỏ nhất?',
      options: [
        'Số nguyên tố nhỏ nhất là số $2$',
        'Số nguyên tố nhỏ nhất là số $0$',
        'Số nguyên tố nhỏ nhất là số $1$',
        'Số nguyên tố nhỏ nhất là số $3$'
      ],
      correctIndex: 0,
      explanation: 'Theo định nghĩa, số nguyên tố là số tự nhiên lớn hơn $1$. Số $0$ và số $1$ không là số nguyên tố. Do đó số nguyên tố nhỏ nhất là số $2$.',
    },
    {
      id: 't6-b11-q3',
      badge: 'Câu 3 (Nhận biết)',
      question: 'Trong các số sau, số nào là hợp số?',
      options: [
        '$15$',
        '$2$',
        '$5$',
        '$13$'
      ],
      correctIndex: 0,
      explanation: 'Số $15$ là hợp số vì $15 > 1$ và có các ước là $1;\\ 3;\\ 5;\\ 15$ (có nhiều hơn hai ước). Các số $2;\\ 5;\\ 13$ đều là số nguyên tố.',
    },
    {
      id: 't6-b11-q4',
      badge: 'Câu 4 (Nhận biết)',
      question: 'Khẳng định nào sau đây là ĐÚNG khi nói về số $0$ và số $1$?',
      options: [
        'Số $0$ và số $1$ không là số nguyên tố cũng không là hợp số',
        'Số $0$ và số $1$ đều là số nguyên tố',
        'Số $0$ và số $1$ đều là hợp số',
        'Số $0$ là hợp số còn số $1$ là số nguyên tố'
      ],
      correctIndex: 0,
      explanation: 'Quy ước toán học chuẩn SGK: Số $0$ và số $1$ không là số nguyên tố, cũng không là hợp số.',
    },
    {
      id: 't6-b11-q5',
      badge: 'Câu 5 (Thông hiểu)',
      question: 'Tập hợp tất cả các số nguyên tố có một chữ số là:',
      options: [
        '\\{2;\\ 3;\\ 5;\\ 7\\}',
        '\\{1;\\ 2;\\ 3;\\ 5;\\ 7\\}',
        '\\{3;\\ 5;\\ 7;\\ 9\\}',
        '\\{2;\\ 3;\\ 5;\\ 7;\\ 9\\}'
      ],
      correctIndex: 0,
      explanation: 'Các số nguyên tố có một chữ số là $2;\\ 3;\\ 5;\\ 7$. Số $1$ không là số nguyên tố, số $9$ là hợp số vì chia hết cho $3$. Do đó tập hợp cần tìm là $\\{2;\\ 3;\\ 5;\\ 7\\}$.',
    },
    {
      id: 't6-b11-q6',
      badge: 'Câu 6 (Thông hiểu)',
      question: 'Phân tích số $70$ ra thừa số nguyên tố được kết quả là:',
      options: [
        '$70 = 2 \\cdot 5 \\cdot 7$',
        '$70 = 7 \\cdot 10$',
        '$70 = 2 \\cdot 35$',
        '$70 = 1 \\cdot 2 \\cdot 5 \\cdot 7$'
      ],
      correctIndex: 0,
      explanation: 'Ta có $70 = 2 \\cdot 35 = 2 \\cdot 5 \\cdot 7$, trong đó $2;\\ 5;\\ 7$ đều là các số nguyên tố. Các cách viết $7 \\cdot 10$ hay $2 \\cdot 35$ chưa phân tích hết vì $10$ và $35$ là hợp số.',
    },
    {
      id: 't6-b11-q7',
      badge: 'Câu 7 (Thông hiểu)',
      question: 'Tìm tập hợp tất cả các ước nguyên tố của số $30$:',
      options: [
        '\\{2;\\ 3;\\ 5\\}',
        '\\{1;\\ 2;\\ 3;\\ 5\\}',
        '\\{2;\\ 3;\\ 5;\\ 6\\}',
        '\\{3;\\ 5\\}'
      ],
      correctIndex: 0,
      explanation: 'Phân tích $30 = 2 \\cdot 3 \\cdot 5$. Các ước nguyên tố của số $30$ là $2;\\ 3;\\ 5$. Số $1$ không phải số nguyên tố, số $6$ là hợp số.',
    },
    {
      id: 't6-b11-q8',
      badge: 'Câu 8 (Thông hiểu)',
      question: 'Phân tích số $180$ ra thừa số nguyên tố được kết quả là:',
      options: [
        '$180 = 2^2 \\cdot 3^2 \\cdot 5$',
        '$180 = 4 \\cdot 9 \\cdot 5$',
        '$180 = 2 \\cdot 3^2 \\cdot 10$',
        '$180 = 2^3 \\cdot 3 \\cdot 5$'
      ],
      correctIndex: 0,
      explanation: 'Chia theo sơ đồ cột: $180 : 2 = 90;\\ 90 : 2 = 45;\\ 45 : 3 = 15;\\ 15 : 3 = 5;\\ 5 : 5 = 1$. Ta được $180 = 2^2 \\cdot 3^2 \\cdot 5$.',
    },
    {
      id: 't6-b11-q9',
      badge: 'Câu 9 (Vận dụng)',
      question: 'Cho tổng $A = 15 + 25 + 35 + 40$. Hỏi $A$ là số nguyên tố hay hợp số?',
      options: [
        'Hợp số',
        'Số nguyên tố',
        'Không là số nguyên tố cũng không là hợp số',
        'Số nguyên tố chẵn'
      ],
      correctIndex: 0,
      explanation: 'Ta thấy mỗi số hạng của tổng $A$ đều chia hết cho $5$ (vì $15, 25, 35, 40$ đều chia hết cho $5$). Do đó tổng $A$ chia hết cho $5$. Mặt khác $A > 5$ nên $A$ có ít nhất ba ước là $1;\\ 5$ và chính nó. Vậy $A$ là hợp số.',
    },
    {
      id: 't6-b11-q10',
      badge: 'Câu 10 (Vận dụng)',
      question: 'Tìm số tự nhiên $k$ để tích $5 \\cdot k$ là một số nguyên tố.',
      options: [
        '$k = 1$',
        '$k = 0$',
        '$k = 2$',
        '$k = 5$'
      ],
      correctIndex: 0,
      explanation: 'Nếu $k = 0$ thì $5 \\cdot 0 = 0$ (không là số nguyên tố). Nếu $k = 1$ thì $5 \\cdot 1 = 5$ (là số nguyên tố). Nếu $k > 1$ thì $5 \\cdot k$ có ít nhất ba ước là $1;\\ 5$ và $5 \\cdot k$ nên là hợp số. Do đó chỉ có $k = 1$ thỏa mãn.',
    },
  ],
  practiceQuestions: [
    {
      id: 't6-b11-pq1',
      badge: 'Luyện tập 1',
      question: 'Trong các số sau: $31;\\ 41;\\ 51;\\ 71$, số nào là hợp số?',
      options: [
        '$51$',
        '$31$',
        '$41$',
        '$71$'
      ],
      correctIndex: 0,
      explanation: 'Số $51$ có tổng các chữ số $5 + 1 = 6$ chia hết cho $3$ nên $51$ chia hết cho $3$. Do đó $51$ có các ước $1;\\ 3;\\ 17;\\ 51$ nên là hợp số. Các số $31;\\ 41;\\ 71$ đều là số nguyên tố.',
    },
    {
      id: 't6-b11-pq2',
      badge: 'Luyện tập 2',
      question: 'Số nguyên tố nhỏ nhất có hai chữ số là số nào?',
      options: [
        '$11$',
        '$10$',
        '$13$',
        '$17$'
      ],
      correctIndex: 0,
      explanation: 'Các số tự nhiên có hai chữ số bắt đầu từ $10$. Số $10$ là hợp số (chia hết cho $2$ và $5$). Số tiếp theo là $11$, số $11$ chỉ có hai ước là $1$ và $11$ nên là số nguyên tố nhỏ nhất có hai chữ số.',
    },
    {
      id: 't6-b11-pq3',
      badge: 'Luyện tập 3',
      question: 'Có bao nhiêu số nguyên tố nhỏ hơn $20$?',
      options: [
        '$8$',
        '$6$',
        '$7$',
        '$9$'
      ],
      correctIndex: 0,
      explanation: 'Các số nguyên tố nhỏ hơn $20$ gồm: $2;\\ 3;\\ 5;\\ 7;\\ 11;\\ 13;\\ 17;\\ 19$. Có tất cả $8$ số.',
    },
    {
      id: 't6-b11-pq4',
      badge: 'Luyện tập 4',
      question: 'Dạng phân tích ra thừa số nguyên tố của số $12$ là:',
      options: [
        '$12 = 2^2 \\cdot 3$',
        '$12 = 3 \\cdot 4$',
        '$12 = 2 \\cdot 6$',
        '$12 = 1 \\cdot 2^2 \\cdot 3$'
      ],
      correctIndex: 0,
      explanation: 'Ta có $12 = 4 \\cdot 3 = 2^2 \\cdot 3$. Số $2$ và số $3$ đều là số nguyên tố. Các cách viết $3 \\cdot 4$ hay $2 \\cdot 6$ chứa các hợp số $4$ hoặc $6$.',
    },
    {
      id: 't6-b11-pq5',
      badge: 'Luyện tập 5',
      question: 'Cho số tự nhiên $a = 2^3 \\cdot 3 \\cdot 5$. Số các ước nguyên tố của $a$ là:',
      options: [
        '$3$',
        '$4$',
        '$5$',
        '$15$'
      ],
      correctIndex: 0,
      explanation: 'Các thừa số nguyên tố có mặt trong phân tích của $a$ là $2;\\ 3;\\ 5$. Do đó $a$ có đúng $3$ ước nguyên tố.',
    },
    {
      id: 't6-b11-pq6',
      badge: 'Luyện tập 6',
      question: 'Số các ước tự nhiên của số $72$ là bao nhiêu?',
      options: [
        '$12$',
        '$6$',
        '$8$',
        '$10$'
      ],
      correctIndex: 0,
      explanation: 'Phân tích ra thừa số nguyên tố: $72 = 8 \\cdot 9 = 2^3 \\cdot 3^2$. Áp dụng công thức tính số ước, số các ước của $72$ là $(3 + 1)(2 + 1) = 4 \\cdot 3 = 12$ ước.',
    },
    {
      id: 't6-b11-pq7',
      badge: 'Luyện tập 7',
      question: 'Tổng của hai số nguyên tố bằng $2023$. Số nguyên tố nhỏ hơn trong hai số đó là:',
      options: [
        '$2$',
        '$1$',
        '$3$',
        '$5$'
      ],
      correctIndex: 0,
      explanation: 'Vì tổng của hai số nguyên tố bằng $2023$ là một số lẻ, nên trong hai số đó bắt buộc phải có một số chẵn và một số lẻ. Số nguyên tố chẵn duy nhất là $2$. Do đó số nguyên tố nhỏ hơn là $2$.',
    },
    {
      id: 't6-b11-pq8',
      badge: 'Luyện tập 8',
      question: 'Thay chữ số vào dấu $*$ để số $\\overline{1*}$ là một số nguyên tố. Tập hợp tất cả các chữ số $*$ thỏa mãn là:',
      options: [
        '\\{1;\\ 3;\\ 7;\\ 9\\}',
        '\\{1;\\ 3;\\ 7\\}',
        '\\{3;\\ 7;\\ 9\\}',
        '\\{1;\\ 7;\\ 9\\}'
      ],
      correctIndex: 0,
      explanation: 'Các số có hai chữ số bắt đầu bằng $1$ là $10;\\ 11;\\ 12;\\ 13;\\ 14;\\ 15;\\ 16;\\ 17;\\ 18;\\ 19$. Trong đó các số nguyên tố là $11;\\ 13;\\ 17;\\ 19$. Vậy $* \\in \\{1;\\ 3;\\ 7;\\ 9\\}$.',
    },
    {
      id: 't6-b11-pq9',
      badge: 'Luyện tập 9',
      question: 'Kết quả của phép tính $B = 3 \\cdot 5 \\cdot 7 + 11 \\cdot 13 \\cdot 17$ là số nguyên tố hay hợp số?',
      options: [
        'Hợp số',
        'Số nguyên tố',
        'Không là số nguyên tố cũng không là hợp số',
        'Số nguyên tố chẵn'
      ],
      correctIndex: 0,
      explanation: 'Tích $3 \\cdot 5 \\cdot 7$ là tích các số lẻ nên là số lẻ. Tích $11 \\cdot 13 \\cdot 17$ cũng là tích các số lẻ nên là số lẻ. Tổng của hai số lẻ là một số chẵn. Vì $B > 2$ và $B$ chia hết cho $2$ nên $B$ có ít nhất ba ước là $1;\\ 2$ và chính nó. Vậy $B$ là hợp số.',
    },
    {
      id: 't6-b11-pq10',
      badge: 'Luyện tập 10',
      question: 'Tìm số nguyên tố $p$ sao cho $p + 2$ và $p + 4$ cũng là các số nguyên tố.',
      options: [
        '$p = 3$',
        '$p = 2$',
        '$p = 5$',
        '$p = 7$'
      ],
      correctIndex: 0,
      explanation: '• Với $p = 2$ thì $p + 2 = 4$ là hợp số (loại).\n• Với $p = 3$ thì $p + 2 = 5$ và $p + 4 = 7$ đều là số nguyên tố (thỏa mãn).\n• Với $p > 3$, vì $p$ là số nguyên tố nên $p$ không chia hết cho $3$, do đó $p = 3k + 1$ hoặc $p = 3k + 2$ ($k \\in \\mathbb{N}^*$).\n  - Nếu $p = 3k + 1$ thì $p + 2 = 3k + 3$ chia hết cho $3$ và lớn hơn $3$ nên là hợp số.\n  - Nếu $p = 3k + 2$ thì $p + 4 = 3k + 6$ chia hết cho $3$ và lớn hơn $3$ nên là hợp số.\nVậy số nguyên tố duy nhất thỏa mãn đề bài là $p = 3$.',
    },
  ],
  trueFalseQuestions: [
    {
      id: 't6-b11-tf1',
      badge: 'Câu 1 (Đúng/Sai)',
      prompt: 'Xét tính Đúng hay Sai của mỗi khẳng định sau về khái niệm số nguyên tố và hợp số:',
      subItems: [
        {
          id: 'a',
          text: 'Mọi số nguyên tố trong tập hợp số tự nhiên đều là số lẻ.',
          correctAnswer: false,
          explanation: 'Khẳng định SAI vì số $2$ là số nguyên tố nhưng là số chẵn.',
        },
        {
          id: 'b',
          text: 'Số $0$ và số $1$ không là số nguyên tố cũng không là hợp số.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG theo định nghĩa chuẩn SGK Toán 6.',
        },
        {
          id: 'c',
          text: 'Số nguyên tố nhỏ nhất là số $2$.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì số nguyên tố phải lớn hơn $1$, và $2$ là số nguyên tố đầu tiên.',
        },
        {
          id: 'd',
          text: 'Một số tự nhiên lớn hơn $1$ nếu có từ ba ước trở lên thì chắc chắn là hợp số.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG theo định nghĩa về hợp số.',
        },
      ],
    },
    {
      id: 't6-b11-tf2',
      badge: 'Câu 2 (Đúng/Sai)',
      prompt: 'Cho các số tự nhiên: $17;\\ 27;\\ 37;\\ 47;\\ 57;\\ 67;\\ 77;\\ 87;\\ 97$. Xét tính Đúng hay Sai của mỗi khẳng định sau:',
      subItems: [
        {
          id: 'a',
          text: 'Hai số $17$ và $37$ đều là các số nguyên tố.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì $17$ và $37$ chỉ chia hết cho $1$ và chính nó.',
        },
        {
          id: 'b',
          text: 'Hai số $27$ và $57$ đều là các số nguyên tố.',
          correctAnswer: false,
          explanation: 'Khẳng định SAI vì $27$ chia hết cho $3;\\ 9$ và $57$ chia hết cho $3;\\ 19$ nên cả hai số đều là hợp số.',
        },
        {
          id: 'c',
          text: 'Hai số $77$ và $87$ đều là hợp số.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì $77 = 7 \\cdot 11$ chia hết cho $7;\\ 11$ và $87 = 3 \\cdot 29$ chia hết cho $3;\\ 29$.',
        },
        {
          id: 'd',
          text: 'Trong dãy số đã cho, có đúng $4$ số là số nguyên tố.',
          correctAnswer: false,
          explanation: 'Khẳng định SAI vì trong dãy có đúng $5$ số nguyên tố là: $17;\\ 37;\\ 47;\\ 67;\\ 97$.',
        },
      ],
    },
    {
      id: 't6-b11-tf3',
      badge: 'Câu 3 (Đúng/Sai)',
      prompt: 'Cho số tự nhiên $M = 360$. Xét tính Đúng hay Sai của mỗi khẳng định sau:',
      subItems: [
        {
          id: 'a',
          text: 'Dạng phân tích ra thừa số nguyên tố của $M$ là $360 = 2^3 \\cdot 3^2 \\cdot 5$.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì $2^3 \\cdot 3^2 \\cdot 5 = 8 \\cdot 9 \\cdot 5 = 360$ và $2;\\ 3;\\ 5$ đều là số nguyên tố.',
        },
        {
          id: 'b',
          text: 'Tập hợp tất cả các ước nguyên tố của số $M$ là $\\{2;\\ 3;\\ 5\\}$.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì các thừa số nguyên tố trong phân tích của $360$ là $2;\\ 3;\\ 5$.',
        },
        {
          id: 'c',
          text: 'Số các ước tự nhiên của $M$ là $24$ ước.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì số ước là $(3 + 1)(2 + 1)(1 + 1) = 4 \\cdot 3 \\cdot 2 = 24$ ước.',
        },
        {
          id: 'd',
          text: 'Tích $2 \\cdot 3 \\cdot 5 = 30$ là ước lớn nhất của số $M$.',
          correctAnswer: false,
          explanation: 'Khẳng định SAI vì ước lớn nhất của bất kì số tự nhiên $M$ nào (khác $0$) chính là chính số đó, tức là $360$.',
        },
      ],
    },
    {
      id: 't6-b11-tf4',
      badge: 'Câu 4 (Đúng/Sai)',
      prompt: 'Cho $p$ là một số nguyên tố. Xét tính Đúng hay Sai của mỗi khẳng định sau:',
      subItems: [
        {
          id: 'a',
          text: 'Nếu $p > 2$ thì $p$ bắt buộc phải là một số tự nhiên lẻ.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG vì nếu $p > 2$ mà chẵn thì $p$ chia hết cho $2$ nên là hợp số.',
        },
        {
          id: 'b',
          text: 'Nếu $p$ chia hết cho một số tự nhiên $a$ thì $a$ chỉ có thể nhận giá trị là $1$ hoặc $p$.',
          correctAnswer: true,
          explanation: 'Khẳng định ĐÚNG theo định nghĩa số nguyên tố chỉ có đúng hai ước là $1$ và chính nó.',
        },
        {
          id: 'c',
          text: 'Tích của hai số nguyên tố bất kì luôn luôn là một số lẻ.',
          correctAnswer: false,
          explanation: 'Khẳng định SAI vì ví dụ $2 \\cdot 3 = 6$ là một số chẵn (khi có thừa số $2$).',
        },
        {
          id: 'd',
          text: 'Tổng của hai số nguyên tố bất kì luôn luôn là một hợp số.',
          correctAnswer: false,
          explanation: 'Khẳng định SAI vì phản ví dụ $2 + 3 = 5$ hoặc $2 + 5 = 7$, các tổng này đều là số nguyên tố.',
        },
      ],
    },
  ],
  shortAnswerQuestions: [
    {
      id: 't6-b11-sa1',
      badge: 'Câu 1 (Điền số)',
      prompt: 'Có tất cả bao nhiêu số nguyên tố nhỏ hơn $30$?',
      correctAnswer: '10',
      acceptableAnswers: ['10'],
      explanation: 'Các số nguyên tố nhỏ hơn $30$ là: $2;\\ 3;\\ 5;\\ 7;\\ 11;\\ 13;\\ 17;\\ 19;\\ 23;\\ 29$. Có tất cả $10$ số.',
    },
    {
      id: 't6-b11-sa2',
      badge: 'Câu 2 (Điền số)',
      prompt: 'Phân tích số $140$ ra thừa số nguyên tố được dạng $140 = 2^a \\cdot 5^b \\cdot 7^c$. Hãy tính giá trị của tổng $T = a + b + c$.',
      correctAnswer: '4',
      acceptableAnswers: ['4'],
      explanation: 'Ta có $140 = 4 \\cdot 35 = 2^2 \\cdot 5^1 \\cdot 7^1$. Suy ra $a = 2;\\ b = 1;\\ c = 1$. Do đó $T = 2 + 1 + 1 = 4$.',
    },
    {
      id: 't6-b11-sa3',
      badge: 'Câu 3 (Điền số)',
      prompt: 'Số tự nhiên $A = 2^4 \\cdot 3^2$ có tất cả bao nhiêu ước tự nhiên?',
      correctAnswer: '15',
      acceptableAnswers: ['15'],
      explanation: 'Áp dụng công thức tính số ước: Với $A = 2^4 \\cdot 3^2$, số lượng các ước tự nhiên của $A$ bằng $(4 + 1) \\cdot (2 + 1) = 5 \\cdot 3 = 15$ ước.',
    },
    {
      id: 't6-b11-sa4',
      badge: 'Câu 4 (Điền số)',
      prompt: 'Tìm số nguyên tố $p$ duy nhất sao cho cả $p + 10$ và $p + 14$ đều là các số nguyên tố.',
      correctAnswer: '3',
      acceptableAnswers: ['3', 'p = 3'],
      explanation: '• Với $p = 2$ thì $p + 10 = 12$ là hợp số (loại).\n• Với $p = 3$ thì $p + 10 = 13$ và $p + 14 = 17$ đều là số nguyên tố (thỏa mãn).\n• Với $p > 3$, số nguyên tố $p$ không chia hết cho $3$ nên $p = 3k + 1$ hoặc $p = 3k + 2$ ($k \\ge 1$).\n  - Nếu $p = 3k + 1$ thì $p + 14 = 3k + 15$ chia hết cho $3$ và lớn hơn $3$ nên là hợp số.\n  - Nếu $p = 3k + 2$ thì $p + 10 = 3k + 12$ chia hết cho $3$ và lớn hơn $3$ nên là hợp số.\nVậy số nguyên tố duy nhất thỏa mãn là $p = 3$.',
    },
    {
      id: 't6-b11-sa5',
      badge: 'Câu 5 (Điền số)',
      prompt: 'Tìm chữ số $*$ thích hợp để số tự nhiên $\\overline{3*}$ là một số nguyên tố lớn hơn $35$.',
      correctAnswer: '7',
      acceptableAnswers: ['7', '* = 7'],
      explanation: 'Các số có dạng $\\overline{3*}$ lớn hơn $35$ là $36;\\ 37;\\ 38;\\ 39$. Trong các số này:\n• $36$ và $38$ là số chẵn nên là hợp số.\n• $39$ chia hết cho $3$ ($3 + 9 = 12$) nên là hợp số.\n• $37$ là số nguyên tố.\nDo đó $* = 7$.',
    },
    {
      id: 't6-b11-sa6',
      badge: 'Câu 6 (Điền số)',
      prompt: 'Tổng của hai số nguyên tố bằng $99$. Tìm số nguyên tố nhỏ hơn trong hai số đó.',
      correctAnswer: '2',
      acceptableAnswers: ['2'],
      explanation: 'Vì tổng của hai số nguyên tố bằng $99$ (là một số lẻ), nên trong hai số đó bắt buộc phải có một số chẵn và một số lẻ. Số nguyên tố chẵn duy nhất là $2$. Khi đó số nguyên tố còn lại là $99 - 2 = 97$ (là số nguyên tố). Vậy số nguyên tố nhỏ hơn là $2$.',
    },
  ],
  tips: [
    'Nhớ ngay cặp số đặc biệt: Số $2$ là số nguyên tố chẵn duy nhất và là số nguyên tố nhỏ nhất. Không có số nguyên tố chẵn nào khác ngoài số $2$.',
    'Mẹo kiểm tra số nguyên tố nhỏ hơn 100: Nếu một số tự nhiên lớn hơn $1$ và không chia hết cho bất kì số nguyên tố nào trong các số $2;\\ 3;\\ 5;\\ 7$ thì số đó chắc chắn là số nguyên tố.',
    'Công thức tính nhanh số lượng ước: Nếu số $n = p_1^{a} \\cdot p_2^{b} \\cdot p_3^{c}$ (với $p_1, p_2, p_3$ là các thừa số nguyên tố), thì số các ước tự nhiên của $n$ là $(a + 1)(b + 1)(c + 1)$.',
  ],
  traps: [
    'Nhầm lẫn số 0 và số 1: Rất nhiều bạn lầm tưởng số 1 là số nguyên tố hoặc số 0 là hợp số. Hãy luôn ghi nhớ: Cả số $0$ và số $1$ đều KHÔNG là số nguyên tố, cũng KHÔNG là hợp số!',
    'Nhầm lẫn giữa số lẻ và số nguyên tố: Không phải mọi số lẻ đều là số nguyên tố. Rất nhiều số lẻ là hợp số (ví dụ: $9;\\ 15;\\ 21;\\ 25;\\ 27;\\ 33;\\ 35;\\dots$).',
    'Chưa phân tích triệt để ra thừa số nguyên tố: Viết $60 = 4 \\cdot 15$ hay $60 = 6 \\cdot 10$ là sai quy chuẩn vì $4;\\ 6;\\ 10;\\ 15$ vẫn là hợp số. Cần phân tích triệt để đến các thừa số nguyên tố: $60 = 2^2 \\cdot 3 \\cdot 5$.',
  ],
};
