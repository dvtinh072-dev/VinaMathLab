import type { QuizQuestion } from "@/data/allGradesLessonsData";

/**
 * NGÂN HÀNG CÂU HỎI THÊM TỪ AI (AI PRACTICE) CHO CHƯƠNG IV - TOÁN 6
 * Bám sát 100% tài liệu chuyên đề và ngân hàng trắc nghiệm chuẩn Bộ GD&ĐT
 */
export const chapter4AiPracticeData: { [lessonId: string]: QuizQuestion[] } = {
  "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu": [
    {
      id: "ai-18.1",
      badge: "Luyện tập AI 1",
      isAiGenerated: true,
      source: "Bài tập 2 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một hình tam giác đều lớn được ghép bởi $9$ hình tam giác đều nhỏ bằng nhau như hình vẽ. Hỏi trong hình có tất cả bao nhiêu hình tam giác đều?",
      options: [
        "$13$ hình tam giác đều",
        "$9$ hình tam giác đều",
        "$10$ hình tam giác đều",
        "$12$ hình tam giác đều"
      ],
      correctIndex: 0,
      explanation: "Đếm theo kích cỡ các tam giác đều trong hình:\n- Có $9$ tam giác đều nhỏ nhất (mỗi tam giác gồm $1$ ô tam giác nhỏ).\n- Có $3$ tam giác đều cỡ vừa (mỗi tam giác gồm $4$ tam giác nhỏ ghép lại).\n- Có $1$ tam giác đều lớn nhất ngoài cùng (gồm cả $9$ tam giác nhỏ).\nTổng cộng có tất cả: $9 + 3 + 1 = 13$ hình tam giác đều.",
      svgDiagram: `<svg viewBox="0 0 320 260" class="w-full max-w-xs sm:max-w-sm mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Tam giác đều lớn 3 tầng: Đỉnh (160, 20), Đáy trái (40, 228), Đáy phải (280, 228) -->
  <polygon points="160,20 40,228 280,228" fill="#0284c7" fill-opacity="0.12" stroke="#38bdf8" stroke-width="2.5" />

  <!-- Tầng 1 -> 2: Đường ngang 1 tại y = 89.33 (120, 89) đến (200, 89) -->
  <line x1="120" y1="89" x2="200" y2="89" stroke="#38bdf8" stroke-width="1.8" />
  <!-- Tầng 2 -> 3: Đường ngang 2 tại y = 158.67 (80, 159) đến (240, 159) -->
  <line x1="80" y1="159" x2="240" y2="159" stroke="#38bdf8" stroke-width="1.8" />

  <!-- Các đường chéo xuôi và ngược chia 9 tam giác nhỏ -->
  <line x1="120" y1="89" x2="200" y2="228" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="200" y1="89" x2="120" y2="228" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="80" y1="159" x2="120" y2="228" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="240" y1="159" x2="200" y2="228" stroke="#38bdf8" stroke-width="1.8" />

  <!-- Nhãn đếm -->
  <text x="160" y="68" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">1</text>
  <text x="135" y="138" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">2</text>
  <text x="160" y="115" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3</text>
  <text x="185" y="138" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">4</text>
  <text x="95" y="208" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">5</text>
  <text x="120" y="185" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">6</text>
  <text x="160" y="208" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">7</text>
  <text x="200" y="185" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">8</text>
  <text x="225" y="208" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">9</text>
</svg>`
    },
    {
      id: "ai-18.2",
      badge: "Luyện tập AI 2",
      isAiGenerated: true,
      source: "Bài tập 5 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Trong hình vẽ tam giác đều lớn gồm $9$ tam giác đều nhỏ, biết mỗi cạnh của tam giác đều nhỏ dài $2\\text{ cm}$. Tổng chu vi của tất cả $13$ hình tam giác đều có trong hình vẽ là:",
      options: [
        "$108\\text{ cm}$",
        "$54\\text{ cm}$",
        "$72\\text{ cm}$",
        "$90\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Tính chu vi từng nhóm tam giác đều:\n- Nhóm 1: Có $9$ tam giác đều nhỏ cạnh $2\\text{ cm}$, mỗi hình có chu vi là $3 \\cdot 2 = 6\\text{ cm}$. Tổng chu vi là $9 \\cdot 6 = 54\\text{ cm}$.\n- Nhóm 2: Có $3$ tam giác đều cỡ vừa cạnh $4\\text{ cm}$, mỗi hình có chu vi là $3 \\cdot 4 = 12\\text{ cm}$. Tổng chu vi là $3 \\cdot 12 = 36\\text{ cm}$.\n- Nhóm 3: Có $1$ tam giác đều lớn nhất cạnh $6\\text{ cm}$, có chu vi là $3 \\cdot 6 = 18\\text{ cm}$.\nTổng chu vi tất cả $13$ tam giác đều là: $54 + 36 + 18 = 108\\text{ cm}$."
    },
    {
      id: "ai-18.3",
      badge: "Luyện tập AI 3",
      isAiGenerated: true,
      source: "Bài tập 8 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Khi dùng lạt buộc để cắt một chiếc bánh chưng hình vuông thành $4$ phần hình vuông nhỏ bằng nhau, ta cần đặt hai sợi lạt theo đường nào sau đây?",
      options: [
        "Đường nối trung điểm của hai cặp cạnh đối diện",
        "Hai đường chéo của mặt chiếc bánh chưng",
        "Hai đường thẳng song song với một cạnh",
        "Hai đường viền mép ngoài của chiếc bánh chưng"
      ],
      correctIndex: 0,
      explanation: "Đoạn thẳng nối trung điểm hai cạnh đối diện của hình vuông chia hình vuông thành hai hình chữ nhật bằng nhau. Đặt 2 sợi lạt theo đường nối trung điểm cả 2 cặp cạnh đối diện sẽ chia chiếc bánh chưng thành đúng 4 hình vuông nhỏ đều nhau."
    },
    {
      id: "ai-18.4",
      badge: "Luyện tập AI 4",
      isAiGenerated: true,
      source: "Bài tập 10 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Nền phòng khách nhà bạn An là một hình vuông có chu vi $21,6\\text{ m}$ (tức $2\\ 160\\text{ cm}$). Bố An muốn chọn loại gạch lát hình vuông cạnh $50\\text{ cm}$ hoặc cạnh $60\\text{ cm}$ để lát kín nền mà không phải cắt gạch. Hỏi An nên khuyên bố chọn loại gạch nào?",
      options: [
        "Chọn gạch cạnh $60\\text{ cm}$ vì $540\\text{ cm}$ chia hết cho $60\\text{ cm}$",
        "Chọn gạch cạnh $50\\text{ cm}$ vì $540\\text{ cm}$ chia hết cho $50\\text{ cm}$",
        "Chọn gạch nào cũng được vì cả hai số đều chia hết",
        "Cả hai loại gạch đều phải cắt vì cạnh nền phòng không chia hết"
      ],
      correctIndex: 0,
      explanation: "Độ dài cạnh nền phòng khách hình vuông là: $2\\ 160 : 4 = 540\\text{ cm}$.\nTa thấy $540$ chia hết cho $60$ ($540 : 60 = 9$) nhưng không chia hết cho $50$ ($540 : 50 = 10$ dư $40$).\nDo đó để không phải cắt gạch thì cần chọn loại gạch lát hình vuông cạnh $60\\text{ cm}$."
    },
    {
      id: "ai-18.5",
      badge: "Luyện tập AI 5",
      isAiGenerated: true,
      source: "Câu 7 - TN6 CIV V Bài 18 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một hình lục giác đều có chu vi bằng $48\\text{ cm}$. Độ dài mỗi cạnh và độ dài mỗi đường chéo chính của hình lục giác đều đó lần lượt là:",
      options: [
        "Cạnh bằng $8\\text{ cm}$ và đường chéo chính bằng $16\\text{ cm}$",
        "Cạnh bằng $8\\text{ cm}$ và đường chéo chính bằng $8\\text{ cm}$",
        "Cạnh bằng $6\\text{ cm}$ và đường chéo chính bằng $12\\text{ cm}$",
        "Cạnh bằng $12\\text{ cm}$ và đường chéo chính bằng $24\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài một cạnh của hình lục giác đều là: $a = 48 : 6 = 8\\text{ cm}$.\nĐộ dài mỗi đường chéo chính gấp đôi độ dài cạnh: $d = 2a = 2 \\cdot 8 = 16\\text{ cm}$."
    },
    {
      id: "ai-18.6",
      badge: "Luyện tập AI 6",
      isAiGenerated: true,
      source: "Bài tập 9 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một mặt bàn cờ vua hình vuông gồm $64$ ô vuông nhỏ bằng nhau có tổng diện tích là $1\\ 024\\text{ cm}^2$. Diện tích của mỗi ô vuông nhỏ và chu vi của toàn bộ bàn cờ vua lần lượt là:",
      options: [
        "$16\\text{ cm}^2$ và $128\\text{ cm}$",
        "$16\\text{ cm}^2$ và $64\\text{ cm}$",
        "$32\\text{ cm}^2$ và $128\\text{ cm}$",
        "$64\\text{ cm}^2$ và $256\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Diện tích mỗi ô vuông nhỏ là: $1\\ 024 : 64 = 16\\text{ cm}^2$.\nVì diện tích toàn bàn cờ vua hình vuông là $1\\ 024\\text{ cm}^2$ mà $32^2 = 1\\ 024$ nên cạnh bàn cờ vua là $32\\text{ cm}$.\nChu vi của bàn cờ vua là: $C = 4 \\cdot 32 = 128\\text{ cm}$."
    },
    {
      id: "ai-18.7",
      badge: "Luyện tập AI 7",
      isAiGenerated: true,
      source: "Bài tập 12 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một mảnh bìa hình lục giác đều có diện tích bằng $60\\text{ cm}^2$. Ba đường chéo chính cắt nhau tại tâm $O$ chia mảnh bìa thành $6$ tam giác đều. Diện tích của mỗi tam giác đều đó là:",
      options: [
        "$10\\text{ cm}^2$",
        "$6\\text{ cm}^2$",
        "$12\\text{ cm}^2$",
        "$15\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Ba đường chéo chính chia hình lục giác đều thành đúng $6$ tam giác đều bằng nhau. Do đó diện tích của mỗi tam giác đều là: $60 : 6 = 10\\text{ cm}^2$."
    },
    {
      id: "ai-18.8",
      badge: "Luyện tập AI 8",
      isAiGenerated: true,
      source: "Bài tập 7 Phiếu bài tập - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Bác An có một thanh gỗ dài $180\\text{ cm}$ dùng để đóng một chiếc khung gương hình vuông. Diện tích mặt gương hình vuông lớn nhất có thể lắp vừa khung gỗ đó là:",
      options: [
        "$2\\ 025\\text{ cm}^2$",
        "$1\\ 600\\text{ cm}^2$",
        "$2\\ 500\\text{ cm}^2$",
        "$8\\ 100\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Chiều dài thanh gỗ $180\\text{ cm}$ chính là chu vi của khung hình vuông. Độ dài cạnh khung gương hình vuông là: $a = 180 : 4 = 45\\text{ cm}$. Diện tích mặt gương hình vuông là: $S = a^2 = 45^2 = 2\\ 025\\text{ cm}^2$."
    },
    {
      id: "ai-18.9",
      badge: "Luyện tập AI 9",
      isAiGenerated: true,
      source: "Bài tập 15 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một đĩa xôi hình lục giác đều gồm $3$ lớp tầng. Để chia đĩa xôi thành đúng $12$ phần bằng nhau chỉ bằng $4$ nhát cắt dao thẳng, người ta thực hiện như thế nào?",
      options: [
        "Cắt $1$ nhát ngang chính giữa tầng thứ hai và $3$ nhát dọc theo $3$ đường chéo chính",
        "Cắt $4$ nhát dọc từ trên xuống qua các đỉnh đối diện",
        "Cắt $2$ nhát ngang chia $3$ tầng và $2$ nhát dọc theo đường chéo chính",
        "Cắt $4$ nhát ngang song song với mặt đáy của đĩa xôi"
      ],
      correctIndex: 0,
      explanation: "Thực hiện 4 nhát cắt:\n- Nhát cắt 1: Cắt ngang chia đôi tầng giữa thành 2 nửa trên và dưới.\n- Nhát cắt 2, 3, 4: Cắt dọc từ trên xuống theo 3 đường chéo chính của bề mặt lục giác đều (chia mỗi nửa tầng thành 6 phần hình tam giác đều).\nTổng cộng ta được: $2 \\cdot 6 = 12$ phần bằng nhau."
    },
    {
      id: "ai-18.10",
      badge: "Luyện tập AI 10",
      isAiGenerated: true,
      source: "Bài tập 1 Phiếu bài tập - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một hình tam giác đều, một hình vuông và một hình lục giác đều có cùng chu vi bằng $36\\text{ cm}$. Khẳng định nào sau đây là ĐÚNG về độ dài cạnh của ba hình?",
      options: [
        "Cạnh tam giác đều là $12\\text{ cm}$, cạnh hình vuông là $9\\text{ cm}$, cạnh lục giác đều là $6\\text{ cm}$",
        "Cạnh tam giác đều là $9\\text{ cm}$, cạnh hình vuông là $12\\text{ cm}$, cạnh lục giác đều là $6\\text{ cm}$",
        "Cả ba hình đều có cạnh bằng nhau và bằng $6\\text{ cm}$",
        "Cạnh tam giác đều là $6\\text{ cm}$, cạnh hình vuông là $9\\text{ cm}$, cạnh lục giác đều là $12\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài cạnh của từng hình khi cùng có chu vi $36\\text{ cm}$ là:\n- Cạnh tam giác đều: $a_{\\text{tam giác}} = 36 : 3 = 12\\text{ cm}$.\n- Cạnh hình vuông: $a_{\\text{vuông}} = 36 : 4 = 9\\text{ cm}$.\n- Cạnh lục giác đều: $a_{\\text{lục giác}} = 36 : 6 = 6\\text{ cm}$."
    }
  ],
  "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can": [
    {
      id: "ai-19.1",
      badge: "Luyện tập AI 1",
      isAiGenerated: true,
      source: "Câu 19 - TN6 CIV V Bài 19 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một mảnh vườn hình chữ nhật có chiều dài $24\\text{ m}$ và chiều rộng $16\\text{ m}$. Người ta làm một lối đi xung quanh vườn rộng $1\\text{ m}$, phần đất còn lại bên trong dùng để trồng hoa. Chiều dài và chiều rộng của phần đất trồng hoa lần lượt là:",
      options: [
        "Chiều dài $22\\text{ m}$ và chiều rộng $14\\text{ m}$",
        "Chiều dài $23\\text{ m}$ và chiều rộng $15\\text{ m}$",
        "Chiều dài $22\\text{ m}$ và chiều rộng $15\\text{ m}$",
        "Chiều dài $23\\text{ m}$ và chiều rộng $14\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Lối đi xung quanh vườn rộng $1\\text{ m}$ nên cả chiều dài và chiều rộng của phần đất còn lại đều bị bớt đi ở cả hai phía (mỗi phía bớt $1\\text{ m}$).\n- Chiều dài phần đất trồng hoa là: $24 - 1 - 1 = 22\\text{ m}$.\n- Chiều rộng phần đất trồng hoa là: $16 - 1 - 1 = 14\\text{ m}$."
    },
    {
      id: "ai-19.2",
      badge: "Luyện tập AI 2",
      isAiGenerated: true,
      source: "Câu 20 - TN6 CIV V Bài 19 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Cho một hình chữ nhật có độ dài đường chéo bằng $15\\text{ cm}$. Người ta vẽ một hình thoi có cạnh đúng bằng đường chéo của hình chữ nhật đó. Tổng độ dài tất cả các cạnh của hình thoi là:",
      options: [
        "$60\\text{ cm}$",
        "$30\\text{ cm}$",
        "$45\\text{ cm}$",
        "$75\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Hình thoi có $4$ cạnh bằng nhau, mỗi cạnh dài bằng đường chéo hình chữ nhật ($a = 15\\text{ cm}$). Do đó tổng độ dài các cạnh của hình thoi là: $4 \\cdot 15 = 60\\text{ cm}$."
    },
    {
      id: "ai-19.3",
      badge: "Luyện tập AI 3",
      isAiGenerated: true,
      source: "Bài tập 19 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Bác Thắng có một thanh sắt dài $160\\text{ cm}$ uốn thành khung một chiếc cửa sổ hình bình hành có một cạnh dài $50\\text{ cm}$. Hỏi cạnh kề còn lại của khung cửa sổ đó dài bao nhiêu cm?",
      options: [
        "$30\\text{ cm}$",
        "$60\\text{ cm}$",
        "$55\\text{ cm}$",
        "$40\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài thanh sắt chính là chu vi khung cửa sổ hình bình hành. Nửa chu vi hình bình hành là: $160 : 2 = 80\\text{ cm}$. Độ dài cạnh kề còn lại là: $80 - 50 = 30\\text{ cm}$."
    },
    {
      id: "ai-19.4",
      badge: "Luyện tập AI 4",
      isAiGenerated: true,
      source: "Bài tập 18 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một hình thang cân có độ dài hai đáy lần lượt là $8\\text{ cm}$ và $14\\text{ cm}$, cạnh bên dài $5\\text{ cm}$. Chu vi của hình thang cân đó là:",
      options: [
        "$32\\text{ cm}$",
        "$27\\text{ cm}$",
        "$37\\text{ cm}$",
        "$22\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Hình thang cân có hai cạnh bên bằng nhau ($5\\text{ cm}$). Chu vi của hình thang cân là: $C = 8 + 14 + 5 + 5 = 32\\text{ cm}$."
    },
    {
      id: "ai-19.5",
      badge: "Luyện tập AI 5",
      isAiGenerated: true,
      source: "Bài tập 17 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một chiếc diều hình thoi có độ dài hai đường chéo lần lượt là $50\\text{ cm}$ và $40\\text{ cm}$. Diện tích của chiếc diều đó là:",
      options: [
        "$1\\ 000\\text{ cm}^2$",
        "$2\\ 000\\text{ cm}^2$",
        "$500\\text{ cm}^2$",
        "$90\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích hình thoi bằng nửa tích độ dài hai đường chéo: $S = \\frac{1}{2} \\cdot 50 \\cdot 40 = 1\\ 000\\text{ cm}^2$."
    },
    {
      id: "ai-19.6",
      badge: "Luyện tập AI 6",
      isAiGenerated: true,
      source: "Bài tập 13 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Cho hình bình hành $ABCD$ có hai đường chéo $AC = 14\\text{ cm}$ và $BD = 10\\text{ cm}$ cắt nhau tại $O$. Giá trị của tổng $OA + OB$ bằng:",
      options: [
        "$12\\text{ cm}$",
        "$24\\text{ cm}$",
        "$7\\text{ cm}$",
        "$15\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Vì hai đường chéo của hình bình hành cắt nhau tại trung điểm của mỗi đường nên: $OA = AC : 2 = 14 : 2 = 7\\text{ cm}$ và $OB = BD : 2 = 10 : 2 = 5\\text{ cm}$. Do đó $OA + OB = 7 + 5 = 12\\text{ cm}$."
    },
    {
      id: "ai-19.7",
      badge: "Luyện tập AI 7",
      isAiGenerated: true,
      source: "Bài tập 14 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một hình thang cân có chu vi bằng $42\\text{ cm}$. Biết tổng độ dài hai cạnh đáy là $26\\text{ cm}$. Độ dài mỗi cạnh bên của hình thang cân đó là:",
      options: [
        "$8\\text{ cm}$",
        "$16\\text{ cm}$",
        "$6\\text{ cm}$",
        "$10\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Tổng độ dài hai cạnh bên của hình thang cân là: $42 - 26 = 16\\text{ cm}$. Vì hai cạnh bên bằng nhau nên độ dài mỗi cạnh bên là: $16 : 2 = 8\\text{ cm}$."
    },
    {
      id: "ai-19.8",
      badge: "Luyện tập AI 8",
      isAiGenerated: true,
      source: "Bài tập 16 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một mảnh đất hình chữ nhật có chu vi bằng $40\\text{ m}$, biết chiều dài hơn chiều rộng $4\\text{ m}$. Chiều dài và chiều rộng của mảnh đất đó lần lượt là:",
      options: [
        "Chiều dài $12\\text{ m}$ và chiều rộng $8\\text{ m}$",
        "Chiều dài $14\\text{ m}$ và chiều rộng $10\\text{ m}$",
        "Chiều dài $11\\text{ m}$ và chiều rộng $7\\text{ m}$",
        "Chiều dài $13\\text{ m}$ và chiều rộng $9\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Nửa chu vi mảnh đất là: $40 : 2 = 20\\text{ m}$.\nChiều dài mảnh đất là: $(20 + 4) : 2 = 12\\text{ m}$.\nChiều rộng mảnh đất là: $20 - 12 = 8\\text{ m}$."
    },
    {
      id: "ai-19.9",
      badge: "Luyện tập AI 9",
      isAiGenerated: true,
      source: "Bài tập 7 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một tấm bìa hình thoi có chu vi bằng $76\\text{ cm}$. Độ dài mỗi cạnh của tấm bìa hình thoi đó là:",
      options: [
        "$19\\text{ cm}$",
        "$38\\text{ cm}$",
        "$18\\text{ cm}$",
        "$24\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Hình thoi có $4$ cạnh bằng nhau nên độ dài mỗi cạnh là: $a = 76 : 4 = 19\\text{ cm}$."
    },
    {
      id: "ai-19.10",
      badge: "Luyện tập AI 10",
      isAiGenerated: true,
      source: "Bài tập 8 - Chuyên đề Dạy thêm Hình 6 C4 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một mảnh đất hình bình hành có độ dài cạnh đáy bằng $25\\text{ m}$ và chiều cao tương ứng với cạnh đáy đó là $12\\text{ m}$. Diện tích của mảnh đất hình bình hành đó là:",
      options: [
        "$300\\text{ m}^2$",
        "$150\\text{ m}^2$",
        "$600\\text{ m}^2$",
        "$74\\text{ m}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích hình bình hành bằng tích cạnh đáy nhân với chiều cao tương ứng: $S = a \\cdot h = 25 \\cdot 12 = 300\\text{ m}^2$."
    }
  ]
};
