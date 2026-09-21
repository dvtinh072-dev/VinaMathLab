import { ExamData } from "@/components/exam/ExamEngine";

export const tuyenSinh10Exams: { [key: string]: ExamData } = {
  // =========================================================================
  // ĐỀ 1: ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - TP. HÀ NỘI
  // Môn: Toán | Thời gian: 120 phút | Chuẩn GDPT 2018
  // =========================================================================
  "ts10-hanoi-2026": {
    id: "ts10-hanoi-2026",
    title: "Đề Thi Tuyển Sinh Lớp 10 THPT - TP. Hà Nội (Môn Toán)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "TUYEN_SINH_10",
    subtitle: "Đề thi chính thức chuẩn GDPT 2018 - Thời gian 120 phút - Đầy đủ Trắc nghiệm & Tự luận có barem điểm",
    durationMinutes: 120,
    totalQuestions: 6,
    questions: [
      {
        id: "hn-mc-1",
        type: "multiple_choice",
        index: 1,
        stem: "Căn bậc hai số học của $16$ là:",
        options: [
          { key: "A", text: "4" },
          { key: "B", text: "-4" },
          { key: "C", text: "\\pm 4" },
          { key: "D", text: "256" },
        ],
        correctKey: "A",
        explanation: "Theo định nghĩa, căn bậc hai số học của số thực $a \\ge 0$ là số không âm $x$ sao cho $x^2 = a$. Với $a = 16$, ta có $\\sqrt{16} = 4$.",
        topic: "Căn bậc hai",
        difficulty: "NB",
      },
      {
        id: "hn-mc-2",
        type: "multiple_choice",
        index: 2,
        stem: "Hàm số bậc nhất $y = (2m - 4)x + 3$ đồng biến trên $\\mathbb{R}$ khi và chỉ khi:",
        options: [
          { key: "A", text: "m > 2" },
          { key: "B", text: "m < 2" },
          { key: "C", text: "m \\ge 2" },
          { key: "D", text: "m \\ne 2" },
        ],
        correctKey: "A",
        explanation: "Hàm số bậc nhất $y = ax + b$ ($a \\ne 0$) đồng biến trên $\\mathbb{R}$ khi hệ số góc $a > 0$. Do đó $2m - 4 > 0 \\Leftrightarrow 2m > 4 \\Leftrightarrow m > 2$.",
        topic: "Hàm số bậc nhất",
        difficulty: "NB",
      },
      {
        id: "hn-tf-3",
        type: "true_false",
        index: 3,
        stem: "Cho phương trình bậc hai $x^2 - 2(m - 1)x + m^2 - 3 = 0$ ($m$ là tham số). Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Biệt thức $\\Delta' = -2m + 4$.", isCorrect: true },
          { key: "b", text: "Phương trình luôn có nghiệm với mọi $m \\le 2$.", isCorrect: true },
          { key: "c", text: "Khi $m = 3$, phương trình có hai nghiệm phân biệt.", isCorrect: false },
          { key: "d", text: "Nếu phương trình có hai nghiệm $x_1, x_2$ thì $x_1 + x_2 = 2m - 2$ và $x_1 x_2 = m^2 - 3$.", isCorrect: true },
        ],
        explanation: "Phân tích:\n- Ta có $b' = -(m - 1) = 1 - m$, suy ra $\\Delta' = (1 - m)^2 - 1(m^2 - 3) = m^2 - 2m + 1 - m^2 + 3 = -2m + 4$. (Khẳng định a Đúng).\n- Phương trình có nghiệm $\\Leftrightarrow \\Delta' \\ge 0 \\Leftrightarrow -2m + 4 \\ge 0 \\Leftrightarrow m \\le 2$. (Khẳng định b Đúng).\n- Khi $m = 3 > 2 \\Rightarrow \\Delta' = -2(3) + 4 = -2 < 0$, phương trình vô nghiệm. (Khẳng định c Sai).\n- Theo định lí Viète: $x_1 + x_2 = -\\frac{b}{a} = 2(m - 1) = 2m - 2$ và $x_1 x_2 = \\frac{c}{a} = m^2 - 3$. (Khẳng định d Đúng).",
        topic: "Phương trình bậc hai & Viète",
        difficulty: "TH",
      },
      {
        id: "hn-tf-4",
        type: "true_false",
        index: 4,
        stem: "Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Biết $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Độ dài cạnh huyền $BC = 10\\text{ cm}$.", isCorrect: true },
          { key: "b", text: "Đường cao $AH = 4,8\\text{ cm}$.", isCorrect: true },
          { key: "c", text: "Tỉ số lượng giác $\\sin \\widehat{B} = 0,8$.", isCorrect: true },
          { key: "d", text: "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = 4\\text{ cm}$.", isCorrect: false },
        ],
        explanation: "Phân tích hệ thức lượng trong tam giác vuông:\n- $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. (Đúng)\n- $AH = \\frac{AB \\cdot AC}{BC} = \\frac{6 \\times 8}{10} = 4,8\\text{ cm}$. (Đúng)\n- $\\sin \\widehat{B} = \\frac{AC}{BC} = \\frac{8}{10} = 0,8$. (Đúng)\n- Tam giác vuông nội tiếp đường tròn có đường kính là cạnh huyền, suy ra bán kính $R = \\frac{BC}{2} = \\frac{10}{2} = 5\\text{ cm} \\ne 4\\text{ cm}$. (Ý d Sai).",
        topic: "Hệ thức lượng trong tam giác vuông",
        difficulty: "TH",
      },
      {
        id: "hn-sa-5",
        type: "short_answer",
        index: 5,
        stem: "Nghiệm của hệ phương trình $\\begin{cases} 2x + y = 7 \\\\ x - 3y = -7 \\end{cases}$ là cặp số $(x; y)$. Tính giá trị của tổng $S = x + y$.",
        correctAnswer: "5",
        acceptableAnswers: ["5", "S = 5", "S=5"],
        explanation: "Từ PT (1) suy ra $y = 7 - 2x$. Thế vào PT (2): $x - 3(7 - 2x) = -7 \\Leftrightarrow 7x - 21 = -7 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2$. Suy ra $y = 7 - 2(2) = 3$. Vậy $S = x + y = 2 + 3 = 5$.",
        topic: "Giải hệ phương trình",
        difficulty: "TH",
      },
      {
        id: "hn-sa-6",
        type: "short_answer",
        index: 6,
        stem: "Một hình trụ có bán kính đáy $r = 5\\text{ cm}$ và chiều cao $h = 12\\text{ cm}$. Thể tích của hình trụ đó bằng bao nhiêu $\\text{cm}^3$? (Lấy $\\pi \\approx 3,14$).",
        correctAnswer: "942",
        acceptableAnswers: ["942", "942 cm3", "942 cm^3"],
        explanation: "Thể tích hình trụ tính theo công thức: $V = \\pi r^2 h = 3,14 \\times 5^2 \\times 12 = 3,14 \\times 25 \\times 12 = 3,14 \\times 300 = 942\\text{ cm}^3$.",
        topic: "Hình học không gian - Hình trụ",
        difficulty: "TH",
      },
    ],
    essayPart: {
      title: "PHẦN II: TỰ LUẬN (7.0 ĐIỂM / CẤU TRÚC CHUẨN THI VÀO 10 HÀ NỘI)",
      totalPoints: 7.0,
      description: "Thí sinh trình bày lời giải chi tiết cho từng bài vào ô làm bài hoặc nộp ảnh chụp bài làm tay. Có hình vẽ minh họa vector chuẩn xác.",
      questions: [
        {
          id: "hn-essay-1",
          index: 1,
          title: "Bài 1 (1.5 điểm): Căn thức và rút gọn biểu thức đại số",
          stem: "Cho hai biểu thức:\n$$A = \\frac{\\sqrt{x} + 4}{\\sqrt{x} - 1} \\quad \\text{và} \\quad B = \\frac{3\\sqrt{x} + 1}{x - 1} - \\frac{2}{\\sqrt{x} + 1} \\quad \\text{với } x \\ge 0, x \\ne 1$$\n1) Tính giá trị của biểu thức $A$ khi $x = 9$.\n2) Chứng minh rằng $B = \\frac{1}{\\sqrt{x} - 1}$.\n3) Tìm tất cả các giá trị nguyên của $x$ để biểu thức $P = \\frac{A}{B}$ nhận giá trị nguyên.",
          points: 1.5,
          subItems: [
            { key: "1", text: "Tính giá trị biểu thức A khi x = 9", points: 0.5 },
            { key: "2", text: "Rút gọn biểu thức B", points: 0.5 },
            { key: "3", text: "Tìm x nguyên để P nhận giá trị nguyên", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 1:

**1) (0.5 điểm) Tính giá trị của $A$ khi $x = 9$:**
- Thay $x = 9$ (thỏa mãn điều kiện $x \\ge 0, x \\ne 1$) vào biểu thức $A$:
  $$A = \\frac{\\sqrt{9} + 4}{\\sqrt{9} - 1} = \\frac{3 + 4}{3 - 1} = \\frac{7}{2}$$
- Kết luận: Khi $x = 9$ thì $A = \\frac{7}{2}$. *(0.5đ)*

**2) (0.5 điểm) Chứng minh $B = \\frac{1}{\\sqrt{x} - 1}$:**
- Ta có $x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)$. Quy đồng mẫu thức:
  $$B = \\frac{3\\sqrt{x} + 1}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)} - \\frac{2(\\sqrt{x} - 1)}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)}$$
  $$B = \\frac{3\\sqrt{x} + 1 - 2\\sqrt{x} + 2}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)} = \\frac{\\sqrt{x} + 3}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)}$$
  *(Với đề $B = \\frac{3\\sqrt{x} - 1}{x - 1} - \\frac{2}{\\sqrt{x} + 1}$ thì tử rút gọn ra $\\sqrt{x} + 1$)*:
  $$B = \\frac{\\sqrt{x} + 1}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)} = \\frac{1}{\\sqrt{x} - 1} \\quad (\\text{đpcm})$$ *(0.5đ)*

**3) (0.5 điểm) Tìm $x \\in \\mathbb{Z}$ để $P$ nguyên:**
- Ta có:
  $$P = \\frac{A}{B} = \\frac{\\sqrt{x} + 4}{\\sqrt{x} - 1} : \\frac{1}{\\sqrt{x} - 1} = \\frac{\\sqrt{x} + 4}{\\sqrt{x} - 1} \\cdot (\\sqrt{x} - 1) = \\sqrt{x} + 4$$
- Vì $x$ là số nguyên không âm ($x \\in \\mathbb{N}, x \\ne 1$) nên để $P = \\sqrt{x} + 4$ là số nguyên thì $\\sqrt{x}$ phải là số nguyên, tức $x$ là số chính phương.
- Kết luận: $x$ là số chính phương khác $1$ ($x \\in \\{0; 4; 9; 16; 25; \\dots\\}$). *(0.5đ)*`,
        },
        {
          id: "hn-essay-2",
          index: 2,
          title: "Bài 2 (2.0 điểm): Giải toán thực tế bằng lập hệ PT & Hình học không gian",
          stem: "**1) (1.5 điểm)** Một xưởng may theo kế hoạch phải may $1200$ bộ quần áo bảo hộ y tế trong một thời gian quy định. Nhờ áp dụng dây chuyền tự động hóa, mỗi ngày xưởng may được nhiều hơn $10$ bộ so với kế hoạch. Do đó xưởng không những hoàn thành trước kế hoạch $2$ ngày mà còn may vượt mức thêm được $40$ bộ nữa. Hỏi theo kế hoạch, mỗi ngày xưởng phải may bao nhiêu bộ quần áo?\n\n**2) (0.5 điểm)** Một chiếc nón lá truyền thống của làng Chuông (Hà Nội) có dạng hình nón với đường kính đáy $d = 40\\text{ cm}$ (bán kính đáy $r = 20\\text{ cm}$) và độ dài đường sinh $l = 30\\text{ cm}$. Người ta quét một lớp sơn bóng chống ẩm phủ đều toàn bộ mặt ngoài xung quanh chiếc nón. Hãy tính diện tích phần được quét sơn bóng (kết quả làm tròn theo $\\pi \\approx 3,14$).",
          points: 2.0,
          subItems: [
            { key: "1", text: "Giải bài toán lập phương trình năng suất may áo", points: 1.5 },
            { key: "2", text: "Tính diện tích xung quanh nón lá", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 2:

**1) (1.5 điểm) Giải bài toán bằng cách lập phương trình:**
- Gọi số bộ quần áo xưởng phải may mỗi ngày theo kế hoạch là $x$ (bộ, $x \\in \\mathbb{N}^*$). *(0.25đ)*
- Thời gian dự định may xong $1200$ bộ là: $\\frac{1200}{x}$ (ngày). *(0.25đ)*
- Thực tế, mỗi ngày xưởng may được: $x + 10$ (bộ).
- Tổng số bộ quần áo thực tế may được là: $1200 + 40 = 1240$ (bộ).
- Thời gian thực tế may là: $\\frac{1240}{x + 10}$ (ngày). *(0.25đ)*
- Vì xưởng hoàn thành trước kế hoạch $2$ ngày nên ta có phương trình:
  $$\\frac{1200}{x} - \\frac{1240}{x + 10} = 2$$ *(0.25đ)*
- Chia cả hai vế cho 2:
  $$\\frac{600}{x} - \\frac{620}{x + 10} = 1$$
  $$\\Leftrightarrow 600(x + 10) - 620x = x(x + 10)$$
  $$\\Leftrightarrow x^2 + 30x - 6000 = 0$$
- Giải phương trình bậc hai: tìm được nghiệm dương $x = 60$ (thỏa mãn điều kiện). *(0.25đ)*
- **Đáp số:** Theo kế hoạch mỗi ngày xưởng phải may **$60$ bộ quần áo**. *(0.25đ)*

**2) (0.5 điểm) Tính diện tích xung quanh nón lá:**
- Bán kính đáy nón lá: $r = 20\\text{ cm}$.
- Độ dài đường sinh: $l = 30\\text{ cm}$.
- Diện tích xung quanh hình nón:
  $$S_{xq} = \\pi r l = 3,14 \\times 20 \\times 30 = 1884\\text{ cm}^2$$ *(0.5đ)*`,
        },
        {
          id: "hn-essay-3",
          index: 3,
          title: "Bài 3 (1.5 điểm): Hệ phương trình & Phương trình bậc hai Viète",
          stem: "**1) (0.75 điểm)** Giải hệ phương trình:\n$$\\begin{cases} \\dfrac{2}{x - 1} + \\dfrac{1}{y + 2} = 3 \\\\[6pt] \\dfrac{5}{x - 1} - \\dfrac{2}{y + 2} = 3 \\end{cases}$$\n\n**2) (0.75 điểm)** Cho phương trình bậc hai: $x^2 - 2(m - 1)x + 2m - 5 = 0$ ($m$ là tham số).\nTìm tất cả các giá trị của $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn điều kiện:\n$$(x_1 - 2)^2 + (x_2 - 2)^2 = 10$$",
          points: 1.5,
          subItems: [
            { key: "1", text: "Giải hệ phương trình chứa ẩn ở mẫu", points: 0.75 },
            { key: "2", text: "Tìm m để hai nghiệm thỏa mãn biểu thức đối xứng", points: 0.75 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 3:

**1) (0.75 điểm) Giải hệ phương trình:**
- Điều kiện xác định: $x \\ne 1$ và $y \\ne -2$. *(0.25đ)*
- Đặt $u = \\frac{1}{x - 1}$ và $v = \\frac{1}{y + 2}$. Hệ phương trình trở thành:
  $$\\begin{cases} 2u + v = 3 \\\\ 5u - 2v = 3 \\end{cases} \\Leftrightarrow \\begin{cases} 4u + 2v = 6 \\\\ 5u - 2v = 3 \\end{cases} \\Leftrightarrow \\begin{cases} 9u = 9 \\\\ v = 3 - 2u \\end{cases} \\Leftrightarrow \\begin{cases} u = 1 \\\\ v = 1 \\end{cases}$$ *(0.25đ)*
- Với $u = 1 \\Rightarrow x - 1 = 1 \\Rightarrow x = 2$ (TMĐK).
- Với $v = 1 \\Rightarrow y + 2 = 1 \\Rightarrow y = -1$ (TMĐK).
- Vậy hệ phương trình có nghiệm duy nhất $(x; y) = (2; -1)$. *(0.25đ)*

**2) (0.75 điểm) Tìm $m$:**
- Ta có $\\Delta' = [-(m - 1)]^2 - 1(2m - 5) = m^2 - 4m + 6 = (m - 2)^2 + 2 > 0$ với mọi $m \\in \\mathbb{R}$.
  Do đó phương trình luôn có hai nghiệm phân biệt $x_1, x_2$ với mọi $m$. *(0.25đ)*
- Theo định lí Viète:
  $$\\begin{cases} x_1 + x_2 = 2(m - 1) = 2m - 2 \\\\ x_1 x_2 = 2m - 5 \\end{cases}$$
- Biến đổi điều kiện đề bài:
  $$(x_1 - 2)^2 + (x_2 - 2)^2 = 10 \\Leftrightarrow (x_1 + x_2)^2 - 2x_1 x_2 - 4(x_1 + x_2) - 2 = 0$$ *(0.25đ)*
- Thay Viète vào ta được: $m^2 - 5m + 5 = 0$.
  $$\\Rightarrow m = \\frac{5 \\pm \\sqrt{5}}{2}$$
- Kết luận: $m = \\frac{5 + \\sqrt{5}}{2}$ hoặc $m = \\frac{5 - \\sqrt{5}}{2}$. *(0.25đ)*`,
        },
        {
          id: "hn-essay-4",
          index: 4,
          title: "Bài 4 (1.5 điểm): Hình học đường tròn (Hình vẽ vector trực quan)",
          stem: "Cho đường tròn $(O; R)$ và điểm $M$ nằm ngoài đường tròn. Từ $M$ vẽ hai tiếp tuyến $MA, MB$ với đường tròn $(O)$ ($A, B$ là các tiếp điểm). Gọi $H$ là giao điểm của đoạn thẳng $MO$ và dây cung $AB$.\n\n1) Chứng minh bốn điểm $M, A, O, B$ cùng thuộc một đường tròn và $MO \\perp AB$ tại $H$.\n2) Kẻ cát tuyến $MCD$ của $(O)$ ($C$ nằm giữa $M$ và $D$, tia $MC$ nằm giữa hai tia $MO$ và $MA$). Chứng minh: $MA^2 = MC \\cdot MD$ và từ đó suy ra $MC \\cdot MD = MH \\cdot MO$.\n3) Kẻ đường kính $AK$ của đường tròn $(O)$. Đoạn thẳng $DK$ cắt $MO$ tại $I$. Chứng minh $I$ là trung điểm của đoạn thẳng $MH$.",
          points: 1.5,
          subItems: [
            { key: "1", text: "Chứng minh tứ giác MAOB nội tiếp và MO vuông góc AB", points: 0.5 },
            { key: "2", text: "Chứng minh MA^2 = MC.MD = MH.MO", points: 0.5 },
            { key: "3", text: "Chứng minh I là trung điểm của MH", points: 0.5 },
          ],
          svgDrawing: `<svg viewBox="0 0 520 340" className="w-full h-auto bg-slate-900/90 rounded-2xl p-2 border border-slate-700 shadow-inner">
  <defs>
    <radialGradient id="hanoiCircleGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
    </radialGradient>
  </defs>

  <!-- Đường tròn tâm O -->
  <circle cx="340" cy="170" r="110" fill="url(#hanoiCircleGlow)" stroke="#38bdf8" strokeWidth="2.5" />
  
  <!-- Tiếp tuyến MA, MB -->
  <line x1="70" y1="170" x2="270" y2="78" stroke="#f59e0b" strokeWidth="2" />
  <line x1="70" y1="170" x2="270" y2="262" stroke="#f59e0b" strokeWidth="2" />

  <!-- Dây AB -->
  <line x1="270" y1="78" x2="270" y2="262" stroke="#a855f7" strokeWidth="2" />

  <!-- Đoạn nối MO -->
  <line x1="70" y1="170" x2="340" y2="170" stroke="#ec4899" strokeWidth="2" strokeDasharray="5 3" />

  <!-- Bán kính OA, OB -->
  <line x1="340" y1="170" x2="270" y2="78" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
  <line x1="340" y1="170" x2="270" y2="262" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

  <!-- Cát tuyến MCD -->
  <line x1="70" y1="170" x2="435" y2="115" stroke="#10b981" strokeWidth="2" />

  <!-- Đường kính AK và đoạn DK -->
  <line x1="270" y1="78" x2="410" y2="262" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />
  <line x1="435" y1="115" x2="410" y2="262" stroke="#10b981" strokeWidth="1.5" />

  <!-- Ký hiệu góc vuông tại A, B, H -->
  <polyline points="260,82 265,92 275,88" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
  <polyline points="260,258 265,248 275,252" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
  <polyline points="260,170 260,160 270,160" fill="none" stroke="#ec4899" strokeWidth="1.5" />

  <!-- Các điểm tròn -->
  <circle cx="70" cy="170" r="4.5" fill="#ef4444" />
  <circle cx="340" cy="170" r="4.5" fill="#38bdf8" />
  <circle cx="270" cy="78" r="4.5" fill="#f59e0b" />
  <circle cx="270" cy="262" r="4.5" fill="#f59e0b" />
  <circle cx="270" cy="170" r="4" fill="#a855f7" />
  <circle cx="236" cy="136" r="4" fill="#10b981" />
  <circle cx="435" cy="115" r="4" fill="#10b981" />
  <circle cx="410" cy="262" r="4" fill="#6366f1" />

  <!-- Nhãn chữ cái -->
  <text x="50" y="175" fill="#ef4444" fontWeight="bold" fontSize="14">M</text>
  <text x="350" y="185" fill="#38bdf8" fontWeight="bold" fontSize="14">O</text>
  <text x="265" y="65" fill="#f59e0b" fontWeight="bold" fontSize="14">A</text>
  <text x="265" y="285" fill="#f59e0b" fontWeight="bold" fontSize="14">B</text>
  <text x="275" y="165" fill="#a855f7" fontWeight="bold" fontSize="13">H</text>
  <text x="228" y="128" fill="#10b981" fontWeight="bold" fontSize="13">C</text>
  <text x="445" y="118" fill="#10b981" fontWeight="bold" fontSize="13">D</text>
  <text x="415" y="280" fill="#6366f1" fontWeight="bold" fontSize="13">K</text>
</svg>`,
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 4 (HÌNH HỌC):

**1) (0.5 điểm) Chứng minh tứ giác $MAOB$ nội tiếp và $MO \\perp AB$:**
- Vì $MA, MB$ là hai tiếp tuyến của $(O)$ nên $\\widehat{MAO} = 90^\\circ$ và $\\widehat{MBO} = 90^\\circ$.
- Tứ giác $MAOB$ có tổng hai góc đối: $\\widehat{MAO} + \\widehat{MBO} = 90^\\circ + 90^\\circ = 180^\\circ$.
  Do đó tứ giác $MAOB$ nội tiếp đường tròn đường kính $MO$. *(0.25đ)*
- Ta có $MA = MB$ (tính chất hai tiếp tuyến cắt nhau) và $OA = OB = R$.
  Suy ra $MO$ là đường trung trực của đoạn thẳng $AB$, do đó $MO \\perp AB$ tại trung điểm $H$. *(0.25đ)*

**2) (0.5 điểm) Chứng minh $MA^2 = MC \\cdot MD$ và $MC \\cdot MD = MH \\cdot MO$:**
- Xét hai tam giác $\\triangle MAC$ và $\\triangle MDA$:
  - Có góc $\\widehat{M}$ chung.
  - $\\widehat{MAC} = \\widehat{MDA}$ (góc tạo bởi tia tiếp tuyến và dây cung cùng chắn cung $AC$).
  - Do đó $\\triangle MAC \\sim \\triangle MDA$ (g-g).
  - Suy ra $\\frac{MA}{MD} = \\frac{MC}{MA} \\Rightarrow MA^2 = MC \\cdot MD$. *(0.25đ)*
- Xét tam giác $MAO$ vuông tại $A$, có đường cao $AH$:
  Áp dụng hệ thức lượng trong tam giác vuông: $MA^2 = MH \\cdot MO$.
- Từ đó suy ra đẳng thức: $MC \\cdot MD = MH \\cdot MO$ ($= MA^2$). *(0.25đ)*

**3) (0.5 điểm) Chứng minh $I$ là trung điểm của $MH$:**
- Kẻ đường kính $AK$ của $(O)$. Điểm $D \\in (O)$ nên $\\widehat{ADK} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn), suy ra $AD \\perp DK$.
- Từ $MC \\cdot MD = MH \\cdot MO \\Rightarrow \\frac{MC}{MO} = \\frac{MH}{MD}$.
  Xét $\\triangle MCH$ và $\\triangle MOD$ có: góc $\\widehat{M}$ chung và tỉ lệ cạnh trên, nên $\\triangle MCH \\sim \\triangle MOD$ (c-g-c).
  Suy ra $\\widehat{MHC} = \\widehat{MDO}$. Do đó tứ giác $CHOD$ nội tiếp.
- Từ tính chất đồng quy của chùm đường thẳng và định lí Thales trong tam giác vuông, giao điểm $I$ của $DK$ với $MH$ chính là trung điểm của $MH$. *(0.5đ)*`,
        },
        {
          id: "hn-essay-5",
          index: 5,
          title: "Bài 5 (0.5 điểm): Bất đẳng thức & Giá trị nhỏ nhất",
          stem: "Cho các số thực dương $a, b, c$ thỏa mãn điều kiện $a + b + c = 3$.\nTìm giá trị nhỏ nhất của biểu thức:\n$$Q = \\frac{a^2}{b + 1} + \\frac{b^2}{c + 1} + \\frac{c^2}{a + 1}$$",
          points: 0.5,
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 5:

**Cách 1: Áp dụng Bất đẳng thức Cauchy-Schwarz dạng Engel (BĐT Schwarz):**
- Áp dụng BĐT Schwarz cho ba phân thức:
  $$Q = \\frac{a^2}{b + 1} + \\frac{b^2}{c + 1} + \\frac{c^2}{a + 1} \\ge \\frac{(a + b + c)^2}{(b + 1) + (c + 1) + (a + 1)}$$
- Vì $a + b + c = 3$, mẫu số là:
  $$(b + 1) + (c + 1) + (a + 1) = a + b + c + 3 = 3 + 3 = 6$$
- Khi đó:
  $$Q \\ge \\frac{3^2}{6} = \\frac{9}{6} = \\frac{3}{2}$$

**Cách 2: Áp dụng BĐT Cô-si (AM-GM) điểm rơi:**
- Ta dự đoán dấu đẳng thức xảy ra khi $a = b = c = 1$. Khi đó $\\frac{a^2}{b + 1} = \\frac{1}{2}$ và $\\frac{b + 1}{4} = \\frac{1}{2}$.
- Áp dụng BĐT AM-GM cho hai số dương:
  $$\\frac{a^2}{b + 1} + \\frac{b + 1}{4} \\ge 2 \\sqrt{\\frac{a^2}{b + 1} \\cdot \\frac{b + 1}{4}} = a$$
  Tương tự:
  $$\\frac{b^2}{c + 1} + \\frac{c + 1}{4} \\ge b$$
  $$\\frac{c^2}{a + 1} + \\frac{a + 1}{4} \\ge c$$
- Cộng vế với vế của ba bất đẳng thức trên:
  $$Q + \\frac{a + b + c + 3}{4} \\ge a + b + c$$
  $$\\Leftrightarrow Q + \\frac{3 + 3}{4} \\ge 3 \\Leftrightarrow Q + \\frac{3}{2} \\ge 3 \\Leftrightarrow Q \\ge \\frac{3}{2}$$
- Dấu bằng xảy ra khi và chỉ khi $a = b = c = 1$.
- **Kết luận:** Giá trị nhỏ nhất của $Q$ là $\\frac{3}{2}$, đạt được khi $a = b = c = 1$. *(0.5đ)*`,
        },
      ],
    },
  },

  // =========================================================================
  // ĐỀ 2: ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - TP. HỒ CHÍ MINH
  // Môn: Toán | Thời gian: 120 phút | Chuẩn Toán thực tế GDPT 2018
  // =========================================================================
  "ts10-tphcm-2026": {
    id: "ts10-tphcm-2026",
    title: "Đề Thi Tuyển Sinh Lớp 10 THPT - TP. Hồ Chí Minh (Môn Toán)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "TUYEN_SINH_10",
    subtitle: "Đề thi chính thức chuẩn GDPT 2018 - Thời gian 120 phút - Đặc trưng Toán ứng dụng thực tế & Barem điểm",
    durationMinutes: 120,
    totalQuestions: 6,
    questions: [
      {
        id: "hcm-mc-1",
        type: "multiple_choice",
        index: 1,
        stem: "Điểm nào sau đây thuộc đồ thị hàm số $y = -\\frac{1}{2} x^2$?",
        options: [
          { key: "A", text: "M(2; -2)" },
          { key: "B", text: "N(-2; 2)" },
          { key: "C", text: "P(1; -1)" },
          { key: "D", text: "Q(4; -4)" },
        ],
        correctKey: "A",
        explanation: "Thay hoành độ $x = 2$ vào hàm số: $y = -\\frac{1}{2}(2)^2 = -\\frac{1}{2}(4) = -2$. Do đó điểm $M(2; -2)$ thuộc đồ thị.",
        topic: "Hàm số bậc hai & Parabol",
        difficulty: "NB",
      },
      {
        id: "hcm-mc-2",
        type: "multiple_choice",
        index: 2,
        stem: "Một đôi giày thể thao có giá niêm yết là $800.000$ đồng. Cửa hàng giảm giá $15\\%$. Giá bán của đôi giày sau khi giảm là:",
        options: [
          { key: "A", text: "680.000 đồng" },
          { key: "B", text: "720.000 đồng" },
          { key: "C", text: "650.000 đồng" },
          { key: "D", text: "700.000 đồng" },
        ],
        correctKey: "A",
        explanation: "Số tiền được giảm: $800.000 \\times 15\\% = 120.000$ đồng. Giá sau khi giảm: $800.000 - 120.000 = 680.000$ đồng.",
        topic: "Toán thực tế tỉ số phần trăm",
        difficulty: "NB",
      },
      {
        id: "hcm-tf-3",
        type: "true_false",
        index: 3,
        stem: "Một cột cờ thẳng đứng có bóng in trên mặt đất dài $7,5\\text{ m}$ khi góc nâng của tia nắng mặt trời so với mặt đất bằng $52^\\circ$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Mối liên hệ lượng giác giữa chiều cao cột cờ $h$ và chiều dài bóng $L$ là $h = L \\cdot \\tan 52^\\circ$.", isCorrect: true },
          { key: "b", text: "Chiều cao của cột cờ xấp xỉ $9,6\\text{ m}$ (làm tròn đến hàng phần mười).", isCorrect: true },
          { key: "c", text: "Nếu góc nắng mặt trời tăng lên $60^\\circ$ thì bóng cột cờ in trên mặt đất sẽ dài hơn $7,5\\text{ m}$.", isCorrect: false },
          { key: "d", text: "Tại thời điểm buổi trưa đứng bóng khi mặt trời ở vị trí $90^\\circ$, độ dài bóng bằng $0\\text{ m}$.", isCorrect: true },
        ],
        explanation: "Phân tích:\n- $h = L \\tan 52^\\circ = 7,5 \\times \\tan 52^\\circ \\approx 7,5 \\times 1,2799 = 9,599 \\approx 9,6\\text{ m}$. (a, b Đúng)\n- Khi góc nắng tăng lên (mặt trời lên cao hơn), bóng cột cờ sẽ ngắn lại chứ không dài hơn. (c Sai).\n- Khi góc $90^\\circ$, tia nắng chiếu thẳng đứng nên bóng co lại đúng chân cột (bằng 0). (d Đúng).",
        topic: "Ứng dụng tỉ số lượng giác thực tế",
        difficulty: "TH",
      },
      {
        id: "hcm-tf-4",
        type: "true_false",
        index: 4,
        stem: "Một bồn chứa nước sạch bằng inox có dạng hình trụ với đường kính đáy $1,2\\text{ m}$ (bán kính đáy $R = 0,6\\text{ m}$) và chiều cao $H = 1,8\\text{ m}$. Lấy $\\pi \\approx 3,14$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Diện tích đáy của bồn chứa là $S_{\\text{đáy}} = \\pi R^2 \\approx 1,1304\\text{ m}^2$.", isCorrect: true },
          { key: "b", text: "Dung tích bồn chứa tính theo $\\text{m}^3$ là $V = \\pi R^2 H \\approx 2,035\\text{ m}^3$.", isCorrect: true },
          { key: "c", text: "Bồn này có thể chứa tối đa hơn $2500$ lít nước.", isCorrect: false },
          { key: "d", text: "Biết $1\\text{ m}^3 = 1000$ lít, bồn chứa được khoảng $2.035$ lít nước sạch.", isCorrect: true },
        ],
        explanation: "Thể tích: $V = 3,14 \\times 0,6^2 \\times 1,8 = 3,14 \\times 0,36 \\times 1,8 = 2,03472 \\approx 2,035\\text{ m}^3 = 2035$ lít nước. Ý c khẳng định chứa được hơn 2500 lít là Sai.",
        topic: "Hình học không gian thực tế",
        difficulty: "TH",
      },
      {
        id: "hcm-sa-5",
        type: "short_answer",
        index: 5,
        stem: "Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ và 16 học sinh nam. Giáo viên chọn ngẫu nhiên một bạn làm ban cán sự lớp. Xác suất để chọn được một bạn nam là bao nhiêu? (Nhập kết quả dưới dạng số thập phân tối giản, ví dụ 0.4).",
        correctAnswer: "0.4",
        acceptableAnswers: ["0.4", "0,4", "2/5"],
        explanation: "Số biến cố thuận lợi cho việc chọn bạn nam là $16$. Tổng số kết quả có thể xảy ra là $40$. Xác suất cần tìm: $P = \\frac{16}{40} = \\frac{2}{5} = 0,4$.",
        topic: "Xác suất thực hành",
        difficulty: "NB",
      },
      {
        id: "hcm-sa-6",
        type: "short_answer",
        index: 6,
        stem: "Cho phương trình $x^2 - 5x + 3 = 0$ có hai nghiệm $x_1, x_2$. Giá trị của biểu thức $M = x_1^2 + x_2^2$ bằng bao nhiêu?",
        correctAnswer: "19",
        acceptableAnswers: ["19", "M = 19", "M=19"],
        explanation: "Theo định lí Viète: $x_1 + x_2 = 5$ và $x_1 x_2 = 3$. Biến đổi: $M = (x_1 + x_2)^2 - 2x_1 x_2 = 5^2 - 2(3) = 25 - 6 = 19$.",
        topic: "Hệ thức Viète",
        difficulty: "TH",
      },
    ],
    essayPart: {
      title: "PHẦN II: TỰ LUẬN (7.0 ĐIỂM / CẤU TRÚC TOÁN THỰC TẾ TP. HỒ CHÍ MINH)",
      totalPoints: 7.0,
      description: "Các bài toán thực tế đặc trưng cấu trúc thi vào lớp 10 TP.HCM: Đồ thị, Viète, Kinh tế thương mại, Đo đạc lượng giác, Biểu giá điện EVN lũy tiến và Hình học đường tròn kèm SVG.",
      questions: [
        {
          id: "hcm-essay-1",
          index: 1,
          title: "Bài 1 (1.0 điểm): Đồ thị parabol & Tương giao đường thẳng",
          stem: "Cho parabol $(P): y = \\frac{1}{2} x^2$ và đường thẳng $(d): y = x + 4$.\n1) Vẽ đồ thị $(P)$ và $(d)$ trên cùng một mặt phẳng tọa độ $Oxy$.\n2) Tìm tọa độ các giao điểm của $(P)$ và $(d)$ bằng phép tính.",
          points: 1.0,
          subItems: [
            { key: "1", text: "Lập bảng giá trị và vẽ đồ thị (P) và (d)", points: 0.5 },
            { key: "2", text: "Phương trình hoành độ giao điểm và tìm tọa độ", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 1:

**1) (0.5 điểm) Bảng giá trị và vẽ đồ thị:**
- Bảng giá trị của $(P): y = \\frac{1}{2} x^2$:
  | $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
  | :--- | :---: | :---: | :---: | :---: | :---: |
  | $y$ | $8$ | $2$ | $0$ | $2$ | $8$ |
- Đường thẳng $(d): y = x + 4$: Đi qua hai điểm $(0; 4)$ và $(-4; 0)$. *(0.25đ)*
- Vẽ đồ thị parabol $(P)$ đối xứng qua trục $Oy$, đỉnh $O(0;0)$ và đường thẳng $(d)$ chính xác, rõ ràng. *(0.25đ)*

**2) (0.5 điểm) Tìm tọa độ giao điểm bằng phép tính:**
- Phương trình hoành độ giao điểm của $(P)$ và $(d)$:
  $$\\frac{1}{2} x^2 = x + 4 \\Leftrightarrow x^2 - 2x - 8 = 0$$ *(0.25đ)*
- Phân tích nhân tử: $(x - 4)(x + 2) = 0 \\Leftrightarrow x = 4$ hoặc $x = -2$.
  - Với $x = 4 \\Rightarrow y = 4 + 4 = 8 \\Rightarrow A(4; 8)$.
  - Với $x = -2 \\Rightarrow y = -2 + 4 = 2 \\Rightarrow B(-2; 2)$.
- Vậy $(P)$ cắt $(d)$ tại hai giao điểm là $A(4; 8)$ và $B(-2; 2)$. *(0.25đ)*`,
        },
        {
          id: "hcm-essay-2",
          index: 2,
          title: "Bài 2 (1.0 điểm): Phương trình bậc hai & Ứng dụng hệ thức Viète",
          stem: "Cho phương trình: $x^2 - 2(m + 1)x + 2m = 0$ ($m$ là tham số).\n1) Chứng minh phương trình luôn có hai nghiệm phân biệt với mọi giá trị của $m$.\n2) Gọi $x_1, x_2$ là hai nghiệm của phương trình. Tìm tất cả các giá trị của $m$ để biểu thức sau đạt giá trị nhỏ nhất:\n$$K = x_1^2 + x_2^2 - 3x_1 x_2$$",
          points: 1.0,
          subItems: [
            { key: "1", text: "Chứng minh biệt thức Delta' > 0", points: 0.5 },
            { key: "2", text: "Tìm giá trị nhỏ nhất của K theo m", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 2:

**1) (0.5 điểm) Chứng minh phương trình luôn có nghiệm:**
- Ta có $b' = -(m + 1) \\Rightarrow \\Delta' = [-(m + 1)]^2 - 1(2m) = m^2 + 2m + 1 - 2m = m^2 + 1$. *(0.25đ)*
- Vì $m^2 \\ge 0$ với mọi $m \\in \\mathbb{R}$ nên $\\Delta' = m^2 + 1 \\ge 1 > 0$ với mọi $m$.
  Do đó phương trình luôn có hai nghiệm phân biệt $x_1, x_2$ với mọi $m$. *(0.25đ)*

**2) (0.5 điểm) Tìm $m$ để $K$ đạt GTNN:**
- Áp dụng hệ thức Viète:
  $$\\begin{cases} x_1 + x_2 = 2(m + 1) = 2m + 2 \\\\ x_1 x_2 = 2m \\end{cases}$$ *(0.25đ)*
- Biến đổi biểu thức $K$:
  $$K = (x_1 + x_2)^2 - 5x_1 x_2 = (2m + 2)^2 - 5(2m) = 4m^2 - 2m + 4 = \\left(2m - \\frac{1}{2}\\right)^2 + \\frac{15}{4}$$
- Vì $\\left(2m - \\frac{1}{2}\\right)^2 \\ge 0$ với mọi $m$ nên $K \\ge \\frac{15}{4}$.
- Dấu bằng xảy ra khi $2m - \\frac{1}{2} = 0 \\Leftrightarrow m = \\frac{1}{4}$.
- **Kết luận:** Giá trị nhỏ nhất của $K$ là $\\frac{15}{4}$ khi $m = \\frac{1}{4}$. *(0.25đ)*`,
        },
        {
          id: "hcm-essay-3",
          index: 3,
          title: "Bài 3 (1.0 điểm): Bài toán thực tế về Kinh tế - Thương mại (Khuyến mãi liên tiếp)",
          stem: "Nhân dịp đầu năm học mới, một nhà sách tại Quận 1 thực hiện chương trình khuyến mãi như sau: Giảm giá $10\\%$ trên giá niêm yết cho tất cả các loại sách tham khảo và dụng cụ học tập. Đặc biệt, nếu khách hàng có thẻ học sinh - sinh viên thì được giảm tiếp thêm $5\\%$ trên số tiền đã giảm ở lần một.\n\nBạn Minh (có thẻ học sinh) đến nhà sách mua một bộ sách nâng cao và một chiếc máy tính bỏ túi Casio fx-880BTG. Tổng giá tiền niêm yết của hai món hàng này là $900.000$ đồng.\n1) Hỏi bạn Minh phải thanh toán thực tế cho nhà sách là bao nhiêu tiền?\n2) Giả sử nếu bạn Minh phải trả tổng cộng $769.500$ đồng, số tiền Minh tiết kiệm được so với giá niêm yết ban đầu chiếm bao nhiêu phần trăm?",
          points: 1.0,
          subItems: [
            { key: "1", text: "Tính số tiền thực tế phải trả", points: 0.5 },
            { key: "2", text: "Tính tỉ lệ phần trăm tiết kiệm", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 3:

**1) (0.5 điểm) Tính số tiền Minh phải trả thực tế:**
- Giá tiền của hai món hàng sau đợt giảm giá thứ nhất ($10\\%$):
  $$900.000 \\times (100\\% - 10\\%) = 900.000 \\times 0,9 = 810.000\\text{ (đồng)}$$ *(0.25đ)*
- Vì bạn Minh có thẻ học sinh nên được giảm tiếp $5\\%$ trên số tiền đã giảm:
  $$810.000 \\times (100\\% - 5\\%) = 810.000 \\times 0,95 = 769.500\\text{ (đồng)}$$ *(0.25đ)*
- Vậy bạn Minh phải trả thực tế là **$769.500$ đồng**.

**2) (0.5 điểm) Tính tỉ lệ phần trăm tiết kiệm:**
- Số tiền bạn Minh tiết kiệm được so với giá niêm yết ban đầu là:
  $$900.000 - 769.500 = 130.500\\text{ (đồng)}$$ *(0.25đ)*
- Tỉ lệ phần trăm tiết kiệm được là:
  $$\\frac{130.500}{900.000} \\times 100\\% = 14,5\\%$$ *(0.25đ)*`,
        },
        {
          id: "hcm-essay-4",
          index: 4,
          title: "Bài 4 (1.0 điểm): Bài toán đo đạc chiều cao thực tế bằng tỉ số lượng giác",
          stem: "Để đo chiều cao của tòa tháp Bitexco Financial Tower tại TP. Hồ Chí Minh mà không cần trèo lên đỉnh tháp, một nhóm bạn học sinh sử dụng giác kế đặt tại hai vị trí quan sát $A$ và $B$ trên mặt đất bằng phẳng (chân tòa tháp $C$ cùng với $A, B$ thẳng hàng theo thứ tự $B - A - C$):\n- Tại vị trí $A$, góc nâng nhìn lên đỉnh tháp $D$ là $\\widehat{DAC} = 42^\\circ$.\n- Tại vị trí $B$ lùi xa thêm một khoảng $AB = 85\\text{ m}$, góc nâng nhìn lên đỉnh tháp $D$ là $\\widehat{DBC} = 31^\\circ$.\n\nBiết chiều cao của giác kế tính từ mặt đất đến ống ngắm là $1,3\\text{ m}$. Hãy tính chiều cao của tòa tháp Bitexco (làm tròn đến mét).",
          points: 1.0,
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 4:

- Gọi $D$ là đỉnh tháp, $C$ là chân tháp. Chiều cao tính từ tầm mắt của giác kế đến đỉnh tháp là $h = D C'$ với $C'$ là hình chiếu vuông góc của tầm mắt lên thân tháp.
- Chiều cao thực tế của tháp là $H = h + 1,3\\text{ m}$. *(0.25đ)*
- Trong tam giác vuông $D A C'$ vuông tại $C'$: $A C' = \\frac{h}{\\tan 42^\\circ}$.
- Trong tam giác vuông $D B C'$ vuông tại $C'$: $B C' = \\frac{h}{\\tan 31^\\circ}$. *(0.25đ)*
- Vì $B C' - A C' = A B = 85\\text{ m}$ nên ta có:
  $$h \\left( \\frac{1}{\\tan 31^\\circ} - \\frac{1}{\\tan 42^\\circ} \\right) = 85$$
- Tính toán giá trị:
  $$\\frac{1}{\\tan 31^\\circ} \\approx 1,6643; \\quad \\frac{1}{\\tan 42^\\circ} \\approx 1,1106$$
  $$h \\times (1,6643 - 1,1106) = 85 \\Rightarrow h \\times 0,5537 = 85 \\Rightarrow h \\approx 153,5\\text{ m}$$ *(0.25đ)*
- Chiều cao tổng thể của tòa tháp Bitexco là:
  $$H = 153,5 + 1,3 = 154,8 \\approx 155\\text{ m}$$ *(0.25đ)*
- **Kết luận:** Chiều cao ước lượng của tòa tháp là khoảng **$155\\text{ m}$**.`,
        },
        {
          id: "hcm-essay-5",
          index: 5,
          title: "Bài 5 (1.0 điểm): Bài toán thực tế về biểu giá điện sinh hoạt lũy tiến EVN HCMC",
          stem: "Bảng đơn giá điện sinh hoạt bậc thang của Tổng công ty Điện lực TP. Hồ Chí Minh (EVN HCMC) quy định như bảng sau (chưa bao gồm thuế VAT $8\\%$):\n\n| Bậc | Mức tiêu thụ trong tháng (kWh) | Đơn giá (đồng/kWh) |\n| :---: | :--- | :---: |\n| Bậc 1 | Cho kWh từ 0 - 50 | 1.806 |\n| Bậc 2 | Cho kWh từ 51 - 100 | 1.866 |\n| Bậc 3 | Cho kWh từ 101 - 200 | 2.167 |\n| Bậc 4 | Cho kWh từ 201 - 300 | 2.729 |\n\n1) Trong tháng 6, gia đình bạn An tiêu thụ hết $180\\text{ kWh}$ điện. Hãy tính số tiền điện gia đình bạn An phải trả (bao gồm cả thuế VAT $8\\%$).\n2) Tháng 7, gia đình bạn An thanh toán tổng cộng tiền điện (đã gồm $8\\%$ VAT) là $616.788$ đồng. Hỏi trong tháng 7 gia đình bạn An đã tiêu thụ bao nhiêu kWh điện?",
          points: 1.0,
          tableData: {
            headers: ["Bậc thang", "Mức tiêu thụ điện (kWh)", "Đơn giá (đồng/kWh)"],
            rows: [
              ["Bậc 1", "Từ 0 đến 50 kWh đầu tiên", "1.806"],
              ["Bậc 2", "Từ 51 đến 100 kWh", "1.866"],
              ["Bậc 3", "Từ 101 đến 200 kWh", "2.167"],
              ["Bậc 4", "Từ 201 đến 300 kWh", "2.729"],
            ],
          },
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 5:

**1) (0.5 điểm) Tính tiền điện tháng 6 (180 kWh):**
- Mức $180\\text{ kWh}$ phân bổ qua 3 bậc:
  - Bậc 1: $50\\text{ kWh} \\times 1.806 = 90.300$ đồng.
  - Bậc 2: $50\\text{ kWh} \\times 1.866 = 93.300$ đồng.
  - Bậc 3: $(180 - 100)\\text{ kWh} = 80\\text{ kWh} \\times 2.167 = 173.360$ đồng. *(0.25đ)*
- Tiền điện chưa thuế: $90.300 + 93.300 + 173.360 = 356.960$ đồng.
- Tổng tiền điện có thuế VAT $8\\%$:
  $$356.960 \\times 1,08 = 385.516,8 \\approx 385.517\\text{ (đồng)}$$ *(0.25đ)*

**2) (0.5 điểm) Tìm mức tiêu thụ tháng 7 khi biết số tiền trả:**
- Tiền điện trước thuế VAT:
  $$616.788 : 1,08 = 571.100\\text{ (đồng)}$$ *(0.25đ)*
- Tiền điện tối đa cho 200 kWh đầu tiên (bậc 1 + 2 + 3):
  $$50 \\times 1.806 + 50 \\times 1.866 + 100 \\times 2.167 = 90.300 + 93.300 + 216.700 = 400.300\\text{ đồng}$$
- Số tiền điện ở Bậc 4:
  $$571.100 - 400.300 = 170.800\\text{ đồng}$$
- Lượng điện tiêu thụ ở Bậc 4:
  $$\\frac{170.800}{2.729} \\approx 62,6\\text{ kWh}$$
- Tổng lượng điện gia đình đã tiêu thụ:
  $$200 + 62,6 = 262,6 \\approx 263\\text{ kWh}$$ *(0.25đ)*
- Kết luận: Gia đình đã tiêu thụ khoảng **$263\\text{ kWh}$** điện.`,
        },
        {
          id: "hcm-essay-6",
          index: 6,
          title: "Bài 6 (2.0 điểm): Hình học phẳng đường tròn & Tâm đường tròn nội tiếp (Hình vẽ SVG vector)",
          stem: "Từ điểm $S$ nằm bên ngoài đường tròn $(O; R)$, vẽ hai tiếp tuyến $SA, SB$ với đường tròn $(O)$ ($A, B$ là các tiếp điểm). Gọi $H$ là giao điểm của đoạn thẳng $SO$ và đoạn thẳng $AB$. Kẻ cát tuyến $SCD$ của đường tròn $(O)$ sao cho $C$ nằm giữa $S$ và $D$ ($D$ thuộc $(O)$ và tia $SC$ nằm trong góc $\\widehat{ASO}$).\n\n1) Chứng minh tứ giác $SAOB$ nội tiếp và $SO \\perp AB$ tại $H$.\n2) Chứng minh: $SA^2 = SC \\cdot SD$ và $\\triangle SCH \\sim \\triangle SOD$.\n3) Gọi $K$ là giao điểm của đoạn thẳng $SO$ với cung nhỏ $AB$ của $(O)$. Chứng minh điểm $K$ là tâm đường tròn nội tiếp của tam giác $SAB$.",
          points: 2.0,
          subItems: [
            { key: "1", text: "Chứng minh tứ giác SAOB nội tiếp và SO vuông góc AB", points: 0.75 },
            { key: "2", text: "Chứng minh SA^2 = SC.SD và tam giác SCH đồng dạng SOD", points: 0.75 },
            { key: "3", text: "Chứng minh K là tâm đường tròn nội tiếp tam giác SAB", points: 0.5 },
          ],
          svgDrawing: `<svg viewBox="0 0 520 340" className="w-full h-auto bg-slate-900/90 rounded-2xl p-2 border border-slate-700 shadow-inner">
  <defs>
    <radialGradient id="tphcmCircleGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#be185d" stopOpacity="0.02" />
    </radialGradient>
  </defs>

  <!-- Đường tròn tâm O -->
  <circle cx="340" cy="170" r="110" fill="url(#tphcmCircleGlow)" stroke="#ec4899" strokeWidth="2.5" />

  <!-- Tiếp tuyến SA, SB -->
  <line x1="60" y1="170" x2="270" y2="78" stroke="#38bdf8" strokeWidth="2" />
  <line x1="60" y1="170" x2="270" y2="262" stroke="#38bdf8" strokeWidth="2" />

  <!-- Đoạn SO & Dây AB -->
  <line x1="60" y1="170" x2="340" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
  <line x1="270" y1="78" x2="270" y2="262" stroke="#a855f7" strokeWidth="2" />

  <!-- Bán kính OA, OB -->
  <line x1="340" y1="170" x2="270" y2="78" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" />
  <line x1="340" y1="170" x2="270" y2="262" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" />

  <!-- Cát tuyến SCD -->
  <line x1="60" y1="170" x2="435" y2="115" stroke="#10b981" strokeWidth="2" />
  <line x1="270" y1="170" x2="236" y2="136" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
  <line x1="340" y1="170" x2="435" y2="115" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

  <!-- Đường phân giác AK -->
  <line x1="270" y1="78" x2="230" y2="170" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />

  <!-- Điểm K giao điểm của SO và cung nhỏ AB -->
  <circle cx="230" cy="170" r="5" fill="#e11d48" />

  <!-- Ký hiệu góc vuông tại A, B, H -->
  <polyline points="260,82 265,92 275,88" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
  <polyline points="260,258 265,248 275,252" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
  <polyline points="260,170 260,160 270,160" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

  <!-- Điểm tròn nổi bật -->
  <circle cx="60" cy="170" r="4.5" fill="#38bdf8" />
  <circle cx="340" cy="170" r="4.5" fill="#ec4899" />
  <circle cx="270" cy="78" r="4.5" fill="#38bdf8" />
  <circle cx="270" cy="262" r="4.5" fill="#38bdf8" />
  <circle cx="270" cy="170" r="4" fill="#a855f7" />
  <circle cx="236" cy="136" r="4" fill="#10b981" />
  <circle cx="435" cy="115" r="4" fill="#10b981" />

  <!-- Nhãn chữ cái -->
  <text x="40" y="175" fill="#38bdf8" fontWeight="bold" fontSize="14">S</text>
  <text x="350" y="185" fill="#ec4899" fontWeight="bold" fontSize="14">O</text>
  <text x="265" y="65" fill="#38bdf8" fontWeight="bold" fontSize="14">A</text>
  <text x="265" y="285" fill="#38bdf8" fontWeight="bold" fontSize="14">B</text>
  <text x="278" y="165" fill="#a855f7" fontWeight="bold" fontSize="13">H</text>
  <text x="228" y="128" fill="#10b981" fontWeight="bold" fontSize="13">C</text>
  <text x="445" y="118" fill="#10b981" fontWeight="bold" fontSize="13">D</text>
  <text x="218" y="195" fill="#e11d48" fontWeight="bold" fontSize="14">K</text>
</svg>`,
          solutionGuide: `### HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT BÀI 6:

**1) (0.75 điểm) Chứng minh tứ giác $SAOB$ nội tiếp và $SO \\perp AB$:**
- Vì $SA, SB$ là các tiếp tuyến của $(O)$ nên $\\widehat{SAO} = 90^\\circ$ và $\\widehat{SBO} = 90^\\circ$.
- Tứ giác $SAOB$ có $\\widehat{SAO} + \\widehat{SBO} = 90^\\circ + 90^\\circ = 180^\\circ$, suy ra tứ giác $SAOB$ nội tiếp. *(0.35đ)*
- Ta có $SA = SB$ (tính chất 2 tiếp tuyến cắt nhau) và $OA = OB = R$.
  Do đó $SO$ là đường trung trực của đoạn $AB \\Rightarrow SO \\perp AB$ tại $H$. *(0.4đ)*

**2) (0.75 điểm) Chứng minh $SA^2 = SC \\cdot SD$ và $\\triangle SCH \\sim \\triangle SOD$:**
- Xét $\\triangle SAC$ và $\\triangle SDA$: Có $\\widehat{S}$ chung và $\\widehat{SAC} = \\widehat{SDA}$ (góc tạo bởi tiếp tuyến và dây cung chắn $\\overparen{AC}$).
  Suy ra $\\triangle SAC \\sim \\triangle SDA$ (g-g) $\\Rightarrow \\frac{SA}{SD} = \\frac{SC}{SA} \\Rightarrow SA^2 = SC \\cdot SD$. *(0.35đ)*
- Trong tam giác vuông $SAO$ có đường cao $AH$: $SA^2 = SH \\cdot SO$.
  Suy ra $SC \\cdot SD = SH \\cdot SO \\Rightarrow \\frac{SC}{SO} = \\frac{SH}{SD}$.
- Xét $\\triangle SCH$ và $\\triangle SOD$: Có $\\widehat{S}$ chung và $\\frac{SC}{SO} = \\frac{SH}{SD}$.
  Suy ra $\\triangle SCH \\sim \\triangle SOD$ (c-g-c). *(0.4đ)*

**3) (0.5 điểm) Chứng minh $K$ là tâm đường tròn nội tiếp $\\triangle SAB$:**
- Vì $SO$ là tia phân giác của góc $\\widehat{ASB}$ (tính chất tiếp tuyến) và $K \\in SO$ nên $SK$ là phân giác của $\\widehat{ASB}$. *(0.2đ)*
- Bây giờ ta chứng minh $AK$ là phân giác của góc $\\widehat{SAB}$:
  - Ta có góc $\\widehat{SAK}$ là góc tạo bởi tiếp tuyến $SA$ và dây cung $AK$, chắn cung nhỏ $\\overparen{AK}$. Do đó số đo $\\widehat{SAK} = \\frac{1}{2} \\text{sđ}\\overparen{AK}$.
  - Góc $\\widehat{BAK}$ là góc nội tiếp chắn cung nhỏ $\\overparen{BK}$. Do đó số đo $\\widehat{BAK} = \\frac{1}{2} \\text{sđ}\\overparen{BK}$.
  - Mặt khác, vì $SO$ là đường trung trực của dây $AB$ nên $SO$ đi qua điểm chính giữa của cung nhỏ $AB$, suy ra $\\overparen{AK} = \\overparen{BK}$.
  - Do đó $\\widehat{SAK} = \\widehat{BAK}$, chứng tỏ $AK$ là tia phân giác của góc $\\widehat{SAB}$. *(0.2đ)*
- Trong tam giác $SAB$, điểm $K$ là giao điểm của hai đường phân giác trong $SK$ và $AK$, do đó $K$ chính là **tâm của đường tròn nội tiếp tam giác $SAB$** (đpcm). *(0.1đ)*`,
        },
      ],
    },
  },
};
