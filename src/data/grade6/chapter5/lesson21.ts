import type { DetailedLessonData } from "@/data/allGradesLessonsData";

/**
 * BÀI 21: HÌNH CÓ TRỤC ĐỐI XỨNG - TOÁN 6
 * BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (TẬP 1)
 * ID: t6-b21-hinh-co-truc-doi-xung
 * Nguồn dữ liệu:
 * - Trắc nghiệm: E:\Anti\Tài Liệu Lớp 6\TRẮC NGHIỆM TOÁN 6 BA BỘ SÁCH WORD\CHUONG 4\TN6 CIV V Bai 21.docx
 * - Lý thuyết: E:\Anti\Tài Liệu Lớp 6\DẠY THÊM TOÁN 6 KẾT NỐI TRI THỨC WORD\MỚI_HH6-CHƯƠNG 5. HÌNH HỌC TRỰC QUAN-TÍNH ĐỐI XỨNG\HH6-CD 5.1 HINH CO TRỤC ĐỐI XỨNG.docx
 * Bao gồm:
 * - Lý thuyết chuẩn mực SGK/SBT kèm SVG trực quan toán học
 * - 4 Video Checkpoint Questions
 * - 10 câu Trắc nghiệm Bài tập cốt lõi (quizQuestions)
 * - 10 câu Trắc nghiệm Luyện thêm (practiceQuestions)
 */
export const LESSON_21_DATA: DetailedLessonData = {
  id: "t6-b21-hinh-co-truc-doi-xung",
  lessonNumber: 21,
  title: "Bài 21: Hình có trục đối xứng",
  bookChapter: "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
  scenarioTitle: "Tình huống: Vẻ đẹp đối xứng của cánh bướm và tự nhiên",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn An",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, khi quan sát cánh bướm, chiếc lá phong hay tháp Eiffel, em thấy hai nửa của chúng trông giống hệt nhau như soi qua một tấm gương. Trong hình học, tính chất đặc biệt đó được gọi là gì ạ?",
      visualGraphic: "box",
      mathNote: "d \\text{ chia hình thành hai nửa chồng khít}",
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào An! Đó chính là tính đối xứng trục. Đường thẳng chia đôi hình vẽ sao cho khi gấp đôi theo đường đó, hai nửa chồng khít lên nhau được gọi là trục đối xứng. Hôm nay thầy trò mình cùng tìm hiểu về hình có trục đối xứng và ứng dụng thú vị của nó nhé!",
      visualGraphic: "graph",
      mathNote: "\\text{Trục đối xứng } d",
    },
  ],
  videoQuestions: [
    {
      id: "vq-6.21.1",
      title: "Khởi động 1: Nhận biết hình có trục đối xứng",
      question: "Một hình phẳng $(H)$ được gọi là có trục đối xứng khi nào?",
      options: [
        "Có một đường thẳng $d$ chia hình thành hai phần mà khi gấp hình theo $d$ thì hai phần chồng khít lên nhau",
        "Có một điểm $O$ chia hình thành hai phần có diện tích bằng nhau",
        "Có bốn cạnh và bốn góc bằng nhau",
        "Có thể đặt vừa khít vào bên trong một hình vuông"
      ],
      correctIndex: 0,
      explanation: "Định nghĩa SGK: Nếu có một đường thẳng $d$ chia hình $(H)$ thành hai phần bằng nhau mà khi gấp hình theo đường thẳng $d$ thấy hai phần đó chồng khít lên nhau thì hình $(H)$ được gọi là hình có trục đối xứng, và đường thẳng $d$ là trục đối xứng của hình đó."
    },
    {
      id: "vq-6.21.2",
      title: "Khởi động 2: Trục đối xứng của hình tròn",
      question: "Hình tròn có bao nhiêu trục đối xứng?",
      options: [
        "Vô số trục đối xứng (mọi đường thẳng đi qua tâm đều là trục đối xứng)",
        "Chỉ có 1 trục đối xứng",
        "Chỉ có 2 trục đối xứng",
        "Chỉ có 4 trục đối xứng"
      ],
      correctIndex: 0,
      explanation: "Mọi đường thẳng đi qua tâm của hình tròn đều chia hình tròn thành hai nửa bằng nhau chồng khít lên nhau, do đó hình tròn có vô số trục đối xứng."
    },
    {
      id: "vq-6.21.3",
      title: "Khởi động 3: Trục đối xứng của hình chữ nhật",
      question: "Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?",
      options: [
        "2 trục đối xứng (là 2 đường thẳng đi qua trung điểm của các cặp cạnh đối diện)",
        "4 trục đối xứng (gồm 2 đường chéo và 2 đường nối trung điểm)",
        "1 trục đối xứng",
        "Không có trục đối xứng nào"
      ],
      correctIndex: 0,
      explanation: "Hình chữ nhật có đúng 2 trục đối xứng là hai đường thẳng nối trung điểm các cạnh đối diện. Chú ý: Hai đường chéo của hình chữ nhật thông thường KHÔNG phải là trục đối xứng (khi gấp theo đường chéo, hai nửa không chồng khít lên nhau)."
    },
    {
      id: "vq-6.21.4",
      title: "Khởi động 4: Chữ cái in hoa có trục đối xứng",
      question: "Chữ cái in hoa nào sau đây có trục đối xứng thẳng đứng?",
      options: [
        "Chữ A",
        "Chữ B",
        "Chữ E",
        "Chữ S"
      ],
      correctIndex: 0,
      explanation: "Chữ A có một trục đối xứng thẳng đứng đi qua đỉnh nhọn và trung điểm nét ngang. Chữ B và chữ E có trục đối xứng nằm ngang, còn chữ S không có trục đối xứng."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "Khái niệm hình có trục đối xứng và trục đối xứng",
      points: [
        "**Định nghĩa:** Cho hình $(H)$. Nếu có một đường thẳng $d$ chia hình $(H)$ thành hai phần mà khi “gấp” hình theo đường thẳng $d$ thấy hai phần đó “chồng khít” lên nhau thì hình $(H)$ được gọi là **hình có trục đối xứng**.",
        "**Trục đối xứng:** Đường thẳng $d$ nói trên được gọi là **trục đối xứng** của hình $(H)$.",
        "**Tên gọi khác:** Hình có trục đối xứng còn được gọi là *hình đối xứng trục*.",
        "**Lưu ý quan trọng:**\n- Không phải hình nào cũng có trục đối xứng (ví dụ: tam giác thường, hình bình hành không phải hình thoi, hình thang thường không có trục đối xứng).\n- Một hình có thể có $1$ trục, $2$ trục, $3$ trục,... hoặc có vô số trục đối xứng.",
      ],
      formula: "d \\text{ là trục đối xứng của hình } (H) \\iff \\text{Gấp theo } d \\text{ thì hai nửa chồng khít lên nhau}",
      exampleTitle: "Ví dụ 1 (Nhận biết hình có trục đối xứng bằng thao tác gấp giấy)",
      exampleProblem: "Cho một mảnh giấy hình trái tim cân đối. Nêu cách xác định trục đối xứng của hình trái tim đó.",
      exampleSolution: "Ta gấp đôi mảnh giấy sao cho hai nửa của hình trái tim trùng khít hoàn toàn lên nhau. Nếp gấp thẳng xuất hiện trên mảnh giấy chính là trục đối xứng của hình trái tim (trục đối xứng thẳng đứng đi qua điểm lõm trên và chóp nhọn dưới).",
      examples: [
        {
          title: "Minh họa trực quan: Trục đối xứng của hình trái tim",
          problem: "Hình vẽ minh họa đường thẳng nét đứt $d$ chia đôi hình trái tim thành hai nửa chồng khít:",
          solution: "Đường nét đứt màu vàng $d$ đi qua trục chính giữa là trục đối xứng của hình trái tim.",
          svgDiagram: `<svg viewBox="0 0 320 220" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình trái tim cân đối -->
  <path d="M 160,190 C 70,120 70,50 115,50 C 140,50 155,70 160,85 C 165,70 180,50 205,50 C 250,50 250,120 160,190 Z" fill="#ec4899" fill-opacity="0.25" stroke="#f43f5e" stroke-width="2.5" />
  
  <!-- Trục đối xứng thẳng đứng d (nét đứt) -->
  <line x1="160" y1="25" x2="160" y2="205" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6,4" />
  
  <!-- Nhãn trục d -->
  <text x="170" y="35" fill="#fbbf24" font-size="14" font-weight="bold">d</text>
  <text x="160" y="215" fill="#94a3b8" font-size="12" text-anchor="middle">Trục đối xứng d chia hình thành hai phần chồng khít</text>
</svg>`
        }
      ]
    },
    {
      index: "2",
      title: "Trục đối xứng của một số hình học cơ bản",
      points: [
        "**Đoạn thẳng:** Có $1$ trục đối xứng chính là đường trung trực của đoạn thẳng đó (đường thẳng vuông góc với đoạn thẳng tại trung điểm).",
        "**Tam giác cân:** Có $1$ trục đối xứng là đường thẳng đi qua đỉnh đối diện với đáy và trung điểm của cạnh đáy.",
        "**Tam giác đều:** Có $3$ trục đối xứng là 3 đường thẳng đi qua mỗi đỉnh và trung điểm của cạnh đối diện.",
        "**Hình thang cân:** Có $1$ trục đối xứng là đường thẳng đi qua trung điểm của hai cạnh đáy.",
        "**Hình chữ nhật:** Có $2$ trục đối xứng là 2 đường thẳng đi qua trung điểm của các cặp cạnh đối diện.",
        "**Hình thoi:** Có $2$ trục đối xứng là 2 đường thẳng chứa 2 đường chéo của nó.",
        "**Hình vuông:** Có $4$ trục đối xứng gồm 2 đường thẳng chứa 2 đường chéo và 2 đường thẳng đi qua trung điểm của các cặp cạnh đối diện.",
        "**Lục giác đều:** Có $6$ trục đối xứng gồm 3 đường thẳng nối các cặp đỉnh đối diện và 3 đường thẳng nối trung điểm các cặp cạnh đối diện.",
        "**Hình tròn:** Có vô số trục đối xứng là mọi đường thẳng đi qua tâm của hình tròn.",
      ],
      formula: "\\text{Đoạn thẳng: 1} \\quad | \\quad \\text{Tam giác đều: 3} \\quad | \\quad \\text{Hình chữ nhật: 2} \\quad | \\quad \\text{Hình thoi: 2} \\quad | \\quad \\text{Hình vuông: 4} \\quad | \\quad \\text{Hình tròn: Vô số}",
      exampleTitle: "Ví dụ 2 (Xác định số trục đối xứng)",
      exampleProblem: "Trong các hình: Hình bình hành (không là hình thoi), hình thang cân, hình thoi, hình vuông:\na) Hình nào không có trục đối xứng?\nb) Hình nào có nhiều trục đối xứng nhất?",
      exampleSolution: "a) Hình bình hành (không phải hình thoi) không có trục đối xứng.\nb) Hình vuông có 4 trục đối xứng, là hình có nhiều trục đối xứng nhất trong các hình trên.",
      examples: [
        {
          title: "Minh họa trực quan: Trục đối xứng của Hình chữ nhật, Hình thoi và Hình vuông",
          problem: "Biểu diễn các trục đối xứng (nét đứt) của hình chữ nhật, hình thoi và hình vuông:",
          solution: "Hình chữ nhật có 2 trục đối xứng nối trung điểm các cạnh đối. Hình thoi có 2 trục đối xứng là 2 đường chéo. Hình vuông có 4 trục đối xứng.",
          svgDiagram: `<svg viewBox="0 0 420 180" class="w-full max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình chữ nhật (2 trục) -->
  <g transform="translate(20, 25)">
    <rect x="10" y="20" width="100" height="70" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2" />
    <line x1="60" y1="5" x2="60" y2="105" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <line x1="-5" y1="55" x2="125" y2="55" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <text x="60" y="130" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="bold">Hình chữ nhật (2 trục)</text>
  </g>

  <!-- Hình thoi (2 trục) -->
  <g transform="translate(160, 25)">
    <polygon points="60,10 110,55 60,100 10,55" fill="#10b981" fill-opacity="0.15" stroke="#34d399" stroke-width="2" />
    <line x1="60" y1="-5" x2="60" y2="115" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <line x1="-5" y1="55" x2="125" y2="55" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <text x="60" y="130" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="bold">Hình thoi (2 trục)</text>
  </g>

  <!-- Hình vuông (4 trục) -->
  <g transform="translate(295, 25)">
    <rect x="15" y="15" width="80" height="80" fill="#8b5cf6" fill-opacity="0.15" stroke="#a78bfa" stroke-width="2" />
    <line x1="55" y1="0" x2="55" y2="110" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <line x1="0" y1="55" x2="110" y2="55" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <line x1="5" y1="5" x2="105" y2="105" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="4,3" />
    <line x1="105" y1="5" x2="5" y2="105" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="4,3" />
    <text x="55" y="130" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="bold">Hình vuông (4 trục)</text>
  </g>
</svg>`
        }
      ]
    },
    {
      index: "3",
      title: "Trục đối xứng trong chữ cái in hoa, tự nhiên và đời sống",
      points: [
        "**Chữ cái in hoa có trục đối xứng:**\n- Trục đối xứng thẳng đứng: $\\text{A, M, T, U, V, W, Y}$.\n- Trục đối xứng nằm ngang: $\\text{B, C, D, E, K}$.\n- Có cả trục thẳng đứng và trục nằm ngang ($2$ trục): $\\text{H, I, X}$.\n- Chữ $\\text{O}$ có vô số trục đối xứng (nếu viết tròn đều).\n- Không có trục đối xứng: $\\text{F, G, J, L, N, P, Q, R, S, Z}$.",
        "**Trong tự nhiên và động thực vật:**\n- Động vật có hình thể đối xứng hai bên: Cánh bướm, con chuồn chuồn, con cua, chim bồ câu...\n- Thực vật: Chiếc lá bàng, hoa sen, hoa mai 5 cánh, bông hoa lan...\n- Con sao biển có 5 trục đối xứng, bông hoa tuyết có 6 trục đối xứng.",
        "**Trong kiến trúc, công trình và biểu tượng:**\n- Tháp Eiffel (Paris, Pháp), Đền Taj Mahal (Ấn Độ), Tháp Rùa (Hà Nội), Chùa Một Cột, Cung điện Mùa Đông...\n- Biển báo giao thông: Biển cấm đi ngược chiều (Biển 102), biển đường hẹp cả 2 bên (Biển 203a), biển nguy hiểm khác (Biển 233)...",
      ],
      formula: "\\text{Chữ đối xứng trục đứng: A, M, T, U, V, W, Y} \\quad | \\quad \\text{Chữ đối xứng trục ngang: B, C, D, E, K}",
      exampleTitle: "Ví dụ 3 (Tìm chữ cái có trục đối xứng)",
      exampleProblem: "Tìm các chữ cái có trục đối xứng trong từ \"TOAN HOC\":",
      exampleSolution: "Xét các chữ cái in hoa trong từ \"TOAN HOC\":\n- Chữ T: có 1 trục đối xứng thẳng đứng.\n- Chữ O: có trục đối xứng.\n- Chữ A: có 1 trục đối xứng thẳng đứng.\n- Chữ N: không có trục đối xứng (chữ N chỉ có tâm đối xứng).\n- Chữ H: có 2 trục đối xứng (1 trục dọc, 1 trục ngang).\n- Chữ C: có 1 trục đối xứng nằm ngang.\nVậy trong từ \"TOAN HOC\", các chữ cái có trục đối xứng là: T, O, A, H, C. Chỉ có chữ N là không có trục đối xứng.",
      examples: [
        {
          title: "Minh họa trực quan: Trục đối xứng của các chữ cái in hoa A, E, H",
          problem: "Biểu diễn trục đối xứng (nét đứt màu vàng) trên các chữ cái in hoa tiêu biểu:",
          solution: "Chữ A có trục đối xứng thẳng đứng; chữ E có trục đối xứng nằm ngang; chữ H có cả 2 trục đối xứng dọc và ngang.",
          svgDiagram: `<svg viewBox="0 0 360 160" class="w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Chữ A (trục dọc) -->
  <g transform="translate(30, 20)">
    <text x="40" y="85" fill="#38bdf8" font-size="70" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">A</text>
    <line x1="40" y1="10" x2="40" y2="105" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" />
    <text x="40" y="125" fill="#94a3b8" font-size="11" text-anchor="middle">1 trục dọc</text>
  </g>

  <!-- Chữ E (trục ngang) -->
  <g transform="translate(145, 20)">
    <text x="40" y="85" fill="#34d399" font-size="70" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">E</text>
    <line x1="5" y1="58" x2="75" y2="58" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" />
    <text x="40" y="125" fill="#94a3b8" font-size="11" text-anchor="middle">1 trục ngang</text>
  </g>

  <!-- Chữ H (2 trục) -->
  <g transform="translate(255, 20)">
    <text x="40" y="85" fill="#f43f5e" font-size="70" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">H</text>
    <line x1="40" y1="10" x2="40" y2="105" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" />
    <line x1="10" y1="58" x2="70" y2="58" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" />
    <text x="40" y="125" fill="#94a3b8" font-size="11" text-anchor="middle">2 trục (dọc & ngang)</text>
  </g>
</svg>`
        }
      ]
    },
    {
      index: "4",
      title: "Ứng dụng của trục đối xứng trong cắt chữ và gấp giấy thủ công",
      points: [
        "**Nguyên lý gấp giấy đối xứng:** Để cắt một hình hoặc chữ cái có trục đối xứng, ta chỉ cần gấp đôi tờ giấy theo trục đối xứng ấy để cắt. Khi đó, ta chỉ phải vẽ và cắt theo một nửa viền của hình. Khi mở tờ giấy ra, hai nửa sẽ trùng khít và ghép lại thành một hình hoàn chỉnh.",
        "**Các bước thực hiện:**\n- Bước 1: Gấp đôi tờ giấy hình chữ nhật theo chiều dọc hoặc chiều ngang (đường nếp gấp là trục đối xứng).\n- Bước 2: Vẽ một nửa của chữ cái hoặc hình vẽ sát mép nếp gấp.\n- Bước 3: Cắt theo đường nét vẽ rồi mở tờ giấy ra, ta sẽ nhận được chữ cái hoặc hình vẽ hoàn chỉnh.",
        "**Ví dụ các hình thường cắt bằng cách gấp giấy:** Hình trái tim, chiếc lá, bông hoa tuyết, chữ cái in hoa $\\text{A, M, T, D, H, E...}$",
      ],
      formula: "\\text{Gấp giấy theo trục } d \\rightarrow \\text{Vẽ một nửa hình} \\rightarrow \\text{Cắt viền} \\rightarrow \\text{Mở ra thu được hình hoàn chỉnh}",
      exampleTitle: "Ví dụ 4 (Gấp giấy cắt chữ cái in hoa)",
      exampleProblem: "Một bạn học sinh gấp đôi tờ giấy theo nếp gấp thẳng đứng, vẽ nửa chữ cái bên phải rồi dùng kéo cắt theo đường viền nét vẽ. Sau khi mở tờ giấy ra, bạn thu được chữ cái in hoa nào nếu hình vẽ có dạng nửa vòm nhọn phía trên?",
      exampleSolution: "Vì bạn gấp giấy theo trục thẳng đứng và vẽ nửa bên phải của chữ có đỉnh nhọn phía trên, khi mở giấy ra sẽ thu được chữ A (hoặc chữ M nếu có hai đỉnh nhọn). Nếu vẽ nửa vòm tròn thì khi mở ra sẽ thu được chữ O.",
      examples: [
        {
          title: "Minh họa trực quan: Gấp đôi giấy cắt chữ cái và hình trái tim",
          problem: "Minh họa thao tác gấp đôi giấy theo nếp gấp nét đứt và cắt hình đối xứng:",
          solution: "Khi cắt một nửa bên mép gấp và mở giấy theo chiều mũi tên, ta thu được hình trái tim hoặc chữ cái đối xứng hoàn hảo.",
          svgDiagram: `<svg viewBox="0 0 340 160" class="w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Tờ giấy gấp đôi -->
  <g transform="translate(40, 20)">
    <rect x="0" y="10" width="80" height="100" fill="#334155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2" rx="4" />
    <path d="M 0,20 C 50,15 65,45 40,70 L 0,105" fill="#f43f5e" fill-opacity="0.3" stroke="#f43f5e" stroke-width="2" />
    <line x1="0" y1="5" x2="0" y2="115" stroke="#fbbf24" stroke-width="2.5" />
    <text x="0" y="130" fill="#fbbf24" font-size="11" text-anchor="middle">Mép gấp</text>
  </g>

  <!-- Mũi tên mở giấy -->
  <g transform="translate(150, 65)">
    <path d="M 0,10 L 30,10 M 20,2 L 30,10 L 20,18" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <text x="15" y="32" fill="#38bdf8" font-size="11" text-anchor="middle">Mở giấy</text>
  </g>

  <!-- Hình hoàn chỉnh sau khi mở -->
  <g transform="translate(210, 20)">
    <path d="M 60,105 C 10,65 10,25 35,25 C 50,25 58,40 60,50 C 62,40 70,25 85,25 C 110,25 110,65 60,105 Z" fill="#ec4899" fill-opacity="0.25" stroke="#f43f5e" stroke-width="2" />
    <line x1="60" y1="15" x2="60" y2="115" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3" />
    <text x="60" y="130" fill="#94a3b8" font-size="11" text-anchor="middle">Hình hoàn chỉnh</text>
  </g>
</svg>`
        }
      ]
    }
  ],
  tips: [
    "Để kiểm tra xem một hình có trục đối xứng hay không, hãy tưởng tượng đặt một chiếc gương thẳng đứng ở chính giữa hình hoặc gấp đôi hình theo đường đó xem hai nửa có trùng khít hoàn toàn lên nhau hay không.",
    "Hình tròn có vô số trục đối xứng (mọi đường thẳng đi qua tâm). Hình vuông có 4 trục đối xứng. Hình chữ nhật và hình thoi có đúng 2 trục đối xứng.",
    "Các chữ cái in hoa có 2 trục đối xứng (vừa dọc vừa ngang) thường gặp trong bài thi là: H, I, X."
  ],
  traps: [
    "Cạm bẫy hình bình hành: Hình bình hành tổng quát KHÔNG có trục đối xứng (khi gấp theo bất kỳ đường nào thì hai nửa cũng không chồng khít lên nhau, trừ trường hợp đặc biệt là hình thoi hoặc hình chữ nhật).",
    "Cạm bẫy đường chéo hình chữ nhật: Hai đường chéo của hình chữ nhật KHÔNG phải là trục đối xứng của hình chữ nhật. Chỉ có hai đường thẳng nối trung điểm các cạnh đối diện mới là trục đối xứng.",
    "Cạm bẫy chữ cái N và S: Chữ N và chữ S có tâm đối xứng nhưng KHÔNG có trục đối xứng."
  ],
  interactiveType: "default",
  quizQuestions: [
    {
      id: "sgk-21.1",
      badge: "Câu 1 (Cốt lõi)",
      question: "Trong các hình phẳng sau đây, hình nào có trục đối xứng?",
      options: [
        "Hình thoi",
        "Hình bình hành (không là hình thoi)",
        "Hình tam giác vuông (không cân)",
        "Hình thang (thường)"
      ],
      correctIndex: 0,
      explanation: "Hình thoi có 2 trục đối xứng chính là hai đường thẳng chứa hai đường chéo của nó. Hình bình hành thường, hình tam giác vuông không cân và hình thang thường không có trục đối xứng."
    },
    {
      id: "sgk-21.2",
      badge: "Câu 2 (Cốt lõi)",
      question: "Trong các hình sau, hình nào KHÔNG có trục đối xứng?",
      options: [
        "Kí hiệu khác ($\\ne$)",
        "Tam giác cân",
        "Tam giác vuông cân",
        "Hình trái tim cân đối"
      ],
      correctIndex: 0,
      explanation: "Kí hiệu khác ($\\ne$) có dấu gạch chéo làm mất tính đối xứng nên không có trục đối xứng. Tam giác cân và tam giác vuông cân có 1 trục đối xứng. Hình trái tim cân đối có 1 trục đối xứng thẳng đứng."
    },
    {
      id: "sgk-21.3",
      badge: "Câu 3 (Cốt lõi)",
      question: "Trong các từ tiếng Anh in hoa sau đây, từ nào có trục đối xứng?",
      options: [
        "CHEO",
        "SHE",
        "DAD",
        "IT"
      ],
      correctIndex: 0,
      explanation: "Trong từ CHEO, cả 4 chữ cái C, H, E, O đều có trục đối xứng nằm ngang đi qua chính giữa, do đó toàn bộ từ CHEO có một trục đối xứng nằm ngang. Từ SHE có chữ S không đối xứng; từ DAD và IT không có trục đối xứng chung cho cả từ."
    },
    {
      id: "sgk-21.4",
      badge: "Câu 4 (Cốt lõi)",
      question: "Trong các từ viết hoa sau đây, từ nào KHÔNG có trục đối xứng?",
      options: [
        "SOS",
        "MOM",
        "VTV",
        "BOB"
      ],
      correctIndex: 0,
      explanation: "Từ SOS không có trục đối xứng (chữ S không có trục đối xứng, từ SOS có tâm đối xứng). Trong khi đó: từ MOM có trục đối xứng dọc, từ VTV có trục đối xứng dọc, từ BOB có trục đối xứng ngang."
    },
    {
      id: "sgk-21.5",
      badge: "Câu 5 (Cốt lõi)",
      question: "Trong cụm từ \"THE SUN\", có bao nhiêu chữ cái in hoa có trục đối xứng?",
      options: [
        "4 chữ cái (T, H, E, U)",
        "2 chữ cái",
        "3 chữ cái",
        "5 chữ cái"
      ],
      correctIndex: 0,
      explanation: "Xét từng chữ cái trong cụm từ \"THE SUN\":\n- Chữ T: có 1 trục đối xứng thẳng đứng.\n- Chữ H: có 2 trục đối xứng (dọc và ngang).\n- Chữ E: có 1 trục đối xứng nằm ngang.\n- Chữ S: không có trục đối xứng.\n- Chữ U: có 1 trục đối xứng thẳng đứng.\n- Chữ N: không có trục đối xứng.\nVậy có 4 chữ cái có trục đối xứng là: T, H, E, U."
    },
    {
      id: "sgk-21.6",
      badge: "Câu 6 (Cốt lõi)",
      question: "Trong cụm từ \"HO CHI MINH\", có bao nhiêu chữ cái in hoa KHÔNG có trục đối xứng?",
      options: [
        "1 chữ cái (chữ N)",
        "2 chữ cái",
        "3 chữ cái",
        "4 chữ cái"
      ],
      correctIndex: 0,
      explanation: "Xét các chữ cái xuất hiện trong cụm từ \"HO CHI MINH\":\n- Chữ H: có 2 trục đối xứng.\n- Chữ O: có vô số trục đối xứng.\n- Chữ C: có 1 trục đối xứng nằm ngang.\n- Chữ I: có 2 trục đối xứng.\n- Chữ M: có 1 trục đối xứng thẳng đứng.\n- Chữ N: không có trục đối xứng (chữ N chỉ có tâm đối xứng).\nVậy chữ cái duy nhất không có trục đối xứng là chữ N (số lượng là 1 chữ cái)."
    },
    {
      id: "sgk-21.7",
      badge: "Câu 7 (Cốt lõi)",
      question: "Trong từ \"STUDENT\", có bao nhiêu chữ cái in hoa có trục đối xứng?",
      options: [
        "5 chữ cái (gồm T, U, D, E và T)",
        "3 chữ cái",
        "4 chữ cái",
        "6 chữ cái"
      ],
      correctIndex: 0,
      explanation: "Xét 7 chữ cái trong từ \"STUDENT\":\n- Chữ S: không có trục đối xứng.\n- Chữ T: có 1 trục đối xứng.\n- Chữ U: có 1 trục đối xứng.\n- Chữ D: có 1 trục đối xứng nằm ngang.\n- Chữ E: có 1 trục đối xứng nằm ngang.\n- Chữ N: không có trục đối xứng.\n- Chữ T: có 1 trục đối xứng.\nTổng cộng có 5 chữ cái có trục đối xứng (gồm 2 chữ T, 1 chữ U, 1 chữ D và 1 chữ E)."
    },
    {
      id: "sgk-21.8",
      badge: "Câu 8 (Cốt lõi)",
      question: "Tập hợp các chữ cái có trục đối xứng trong từ \"THE EARTH\" có bao nhiêu phần tử?",
      options: [
        "4 phần tử (gồm {T; H; E; A})",
        "6 phần tử",
        "5 phần tử",
        "3 phần tử"
      ],
      correctIndex: 0,
      explanation: "Các chữ cái xuất hiện trong từ \"THE EARTH\" là: T, H, E, A, R. Trong đó:\n- Chữ T, H, E, A đều có trục đối xứng.\n- Chữ R không có trục đối xứng.\nVì trong một tập hợp, mỗi phần tử chỉ được liệt kê một lần, nên tập hợp các chữ cái có trục đối xứng là $\\{T; H; E; A\\}$, gồm đúng 4 phần tử."
    },
    {
      id: "sgk-21.9",
      badge: "Câu 9 (Cốt lõi)",
      question: "Trong các hình phẳng sau: Mặt trăng lưỡi liềm cân đối, hình ngôi sao 4 cánh đều, hình chiếc lá có gân cuống lệch nghiêng, hình trái tim cân đối. Hình nào KHÔNG có trục đối xứng?",
      options: [
        "Hình chiếc lá có gân cuống lệch nghiêng",
        "Hình mặt trăng lưỡi liềm cân đối",
        "Hình ngôi sao 4 cánh đều",
        "Hình trái tim cân đối"
      ],
      correctIndex: 0,
      explanation: "Hình chiếc lá có gân cuống bị vẹo hoặc lệch nghiêng sang một bên thì không có trục đối xứng (không thể chia đôi thành hai nửa chồng khít). Mặt trăng lưỡi liềm cân đối có 1 trục đối xứng ngang, ngôi sao 4 cánh đều có 4 trục đối xứng, trái tim cân đối có 1 trục đối xứng dọc."
    },
    {
      id: "sgk-21.10",
      badge: "Câu 10 (Cốt lõi)",
      question: "Trong các hình sau đây, hình nào có ĐÚNG 2 trục đối xứng?",
      options: [
        "Hình elip",
        "Hình vuông",
        "Hình tròn",
        "Hình ngũ giác đều"
      ],
      correctIndex: 0,
      explanation: "Hình elip có đúng 2 trục đối xứng (là trục lớn và trục nhỏ). Trong khi đó: hình vuông có 4 trục đối xứng, hình tròn có vô số trục đối xứng, hình ngũ giác đều có 5 trục đối xứng."
    }
  ],
  practiceQuestions: [
    {
      id: "sgk-21.11",
      badge: "Luyện thêm 11",
      question: "Trong các hình hình học sau, hình nào có VÔ SỐ trục đối xứng?",
      options: [
        "Hình tròn",
        "Hình lục giác đều",
        "Hình bát giác đều",
        "Hình vuông"
      ],
      correctIndex: 0,
      explanation: "Mọi đường thẳng đi qua tâm của hình tròn đều là trục đối xứng của hình tròn, do đó hình tròn có vô số trục đối xứng. Hình lục giác đều có 6 trục, hình bát giác đều có 8 trục, hình vuông có 4 trục."
    },
    {
      id: "sgk-21.12",
      badge: "Luyện thêm 12",
      question: "Trong các biển báo giao thông sau, biển báo nào có trục đối xứng?",
      options: [
        "Biển 102 – Cấm đi ngược chiều (hình tròn đỏ, vạch ngang trắng ở giữa)",
        "Biển 110a – Cấm xe đạp (hình vẽ xe đạp nhìn nghiêng)",
        "Biển 112 – Cấm người đi bộ (hình người bước đi)",
        "Biển 123 – Cấm rẽ trái (mũi tên vòng sang trái)"
      ],
      correctIndex: 0,
      explanation: "Biển báo 102 (Cấm đi ngược chiều) gồm hình tròn đỏ và vạch chữ nhật trắng nằm chính giữa, có 2 trục đối xứng (1 trục dọc và 1 trục ngang). Các biển vẽ xe đạp, người đi bộ, mũi tên rẽ đều có hình bất đối xứng nên không có trục đối xứng."
    },
    {
      id: "sgk-21.13",
      badge: "Luyện thêm 13",
      question: "Trong các biển báo cấm sau đây, biển báo nào KHÔNG có trục đối xứng?",
      options: [
        "Biển 131b – Cấm đỗ xe ngày chẵn (có 2 vạch trắng không cân đối)",
        "Biển 135 – Hết tất cả các lệnh cấm",
        "Biển 130 – Cấm dừng xe và đỗ xe (dấu chéo X màu đỏ cân đối)",
        "Biển 131a – Cấm đỗ xe (1 vạch gạch chéo qua tâm)"
      ],
      correctIndex: 0,
      explanation: "Biển 131b cấm đỗ xe các ngày chẵn có hai vạch trắng đặt song song lệch một bên, không đối xứng qua tâm hay trục, do đó không có trục đối xứng. Biển 130 có 2 trục đối xứng, biển 131a có 1 trục đối xứng dọc theo đường phân giác vạch chéo."
    },
    {
      id: "sgk-21.14",
      badge: "Luyện thêm 14",
      question: "Trong các biển báo giao thông sau, biển báo nào có trục đối xứng?",
      options: [
        "Biển 127 – Biển hạn chế tốc độ tối đa (hình tròn viền đỏ nền trắng)",
        "Biển 103a – Cấm ô tô (hình ô tô nhìn nghiêng)",
        "Biển 104 – Cấm xe mô tô",
        "Biển 106a – Cấm xe tải"
      ],
      correctIndex: 0,
      explanation: "Biển báo 127 có hình dạng hình tròn viền đỏ nền trắng cân xứng. Các biển cấm ô tô, mô tô, xe tải vẽ hình phương tiện nhìn từ một góc nghiêng nên không có trục đối xứng."
    },
    {
      id: "sgk-21.15",
      badge: "Luyện thêm 15",
      question: "Trong các biển báo nguy hiểm tam giác đều sau đây, biển báo nào KHÔNG có trục đối xứng?",
      options: [
        "Biển 203b – Đường bị hẹp bên trái (hình vẽ vát lệch một bên)",
        "Biển 245 – Cảnh báo có chướng ngại vật ở giữa",
        "Biển 221b – Cảnh báo đường mấp mô (gờ lượn sóng cân đối)",
        "Biển 233 – Nguy hiểm khác (dấu chấm than ở chính giữa)"
      ],
      correctIndex: 0,
      explanation: "Biển 203b cảnh báo đường bị hẹp bên trái có vạch đường bên trái bóp thắt vào còn bên phải thẳng đứng, hình vẽ bị lệch nên không có trục đối xứng. Các biển 245, 221b, 233 đều có họa tiết đối xứng qua đường cao thẳng đứng của tam giác."
    },
    {
      id: "sgk-21.16",
      badge: "Luyện thêm 16",
      question: "Trong các biển báo nguy hiểm sau, biển báo nào có trục đối xứng?",
      options: [
        "Biển 203a – Đường bị hẹp cả hai bên",
        "Biển 206 – Giao nhau theo vòng xuyến (các mũi tên quay vòng)",
        "Biển 242 – Nơi đường sắt giao vuông góc với đường bộ (đặt lệch)",
        "Biển 234 – Giao nhau với đường hai chiều"
      ],
      correctIndex: 0,
      explanation: "Biển 203a (Đường bị hẹp cả hai bên) có hình vẽ hai mép đường cùng thắt lại đối xứng qua trục thẳng đứng chính giữa của tam giác, do đó có 1 trục đối xứng thẳng đứng."
    },
    {
      id: "sgk-21.17",
      badge: "Luyện thêm 17",
      question: "Trong các biển báo giao thông sau, biển báo nào có trục đối xứng?",
      options: [
        "Biển 403a – Đường dành cho ô tô (hình ô tô nhìn trực diện chính diện)",
        "Biển 204 – Đường hai chiều (hai mũi tên ngược chiều lệch nhau)",
        "Biển 301f – Các xe chỉ được đi thẳng và rẽ phải",
        "Biển 405a – Đường cụt rẽ sang bên phải"
      ],
      correctIndex: 0,
      explanation: "Biển 403a vẽ đầu xe ô tô nhìn trực diện chính giữa biển chữ nhật xanh, có tính đối xứng trục thẳng đứng. Biển 204 có 2 mũi tên ngược chiều đặt song song lệch tâm nên có tâm đối xứng chứ không có trục đối xứng."
    },
    {
      id: "sgk-21.18",
      badge: "Luyện thêm 18",
      question: "Trong các biển báo sau, biển báo nào KHÔNG có trục đối xứng?",
      options: [
        "Biển 405a – Đường cụt bên phải",
        "Biển 306 – Tốc độ tối thiểu cho phép (hình tròn cân đối)",
        "Biển 401 – Đường ưu tiên (hình thoi viền trắng nền vàng)",
        "Biển 102 – Cấm đi ngược chiều"
      ],
      correctIndex: 0,
      explanation: "Biển 405a (Đường cụt bên phải) có nhánh đường rẽ sang bên phải, tạo nên hình ảnh bất đối xứng. Biển 401 hình thoi có 2 trục đối xứng, biển 102 có 2 trục đối xứng."
    },
    {
      id: "sgk-21.19",
      badge: "Luyện thêm 19",
      question: "Một hình hoa văn trang trí hình cỏ bốn lá cân đối (hoặc hoa tuyết 4 cánh) có bao nhiêu trục đối xứng?",
      options: [
        "2 trục đối xứng (hoặc 4 trục tùy mức độ quay)",
        "1 trục đối xứng",
        "3 trục đối xứng",
        "0 trục đối xứng"
      ],
      correctIndex: 0,
      explanation: "Hình hoa văn cỏ 4 lá cân đối có 2 trục đối xứng thẳng góc (1 trục dọc và 1 trục ngang), nếu 4 cánh hoàn toàn giống nhau và xếp đều quanh tâm vuông góc thì có tới 4 trục đối xứng."
    },
    {
      id: "sgk-21.20",
      badge: "Luyện thêm 20",
      question: "Hình ngôi sao năm cánh đều có bao nhiêu trục đối xứng?",
      options: [
        "5 trục đối xứng",
        "3 trục đối xứng",
        "2 trục đối xứng",
        "10 trục đối xứng"
      ],
      correctIndex: 0,
      explanation: "Hình ngôi sao năm cánh đều có đúng 5 trục đối xứng. Mỗi trục đối xứng là đường thẳng đi qua một đỉnh của ngôi sao và đi qua góc lõm đối diện tương ứng."
    }
  ]
};
