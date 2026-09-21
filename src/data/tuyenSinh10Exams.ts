import { ExamData } from "@/components/exam/ExamEngine";

export const tuyenSinh10Exams: { [key: string]: ExamData } = {
  // =========================================================================
  // ĐỀ 1: ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - TP. HÀ NỘI
  // NGUỒN CHÍNH THỨC: SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI
  // NĂM HỌC: 2024 - 2025 (Khóa thi ngày 09/06/2024 & Định hướng GDPT 2018)
  // HÌNH THỨC THI: 100% TỰ LUẬN (5 BÀI - TỔNG ĐIỂM: 10.0 ĐIỂM - THỜI GIAN: 120 PHÚT)
  // =========================================================================
  "ts10-hanoi-2026": {
    id: "ts10-hanoi-2026",
    title: "Đề Thi Tuyển Sinh Vào Lớp 10 THPT - TP. Hà Nội (Năm học 2024 - 2025)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "TUYEN_SINH_10",
    subtitle: "Nguồn chính thức: Sở GD&ĐT Hà Nội (Khóa thi 2024-2025 & Chuẩn GDPT 2018) - 100% Tự luận (10.0 điểm / 120 phút)",
    durationMinutes: 120,
    totalQuestions: 5,
    questions: [], // Đề thi Hà Nội là 100% Tự luận, không có phần trắc nghiệm
    essayPart: {
      title: "ĐỀ THI TUYỂN SINH LỚP 10 THPT TP. HÀ NỘI (10.0 ĐIỂM TỰ LUẬN)",
      totalPoints: 10.0,
      description: "Nguồn chính thức: Sở GD&ĐT Hà Nội - Thời gian làm bài 120 phút. Thí sinh làm bài trực tiếp vào ô soạn thảo hoặc làm ra giấy thi rồi nộp ảnh chụp toàn bộ bài làm.",
      questions: [
        {
          id: "hn-bai-1",
          index: 1,
          title: "Bài I (2.0 điểm): Căn thức bậc hai và biểu thức đại số",
          stem: "Cho hai biểu thức:\n$$A = \\frac{\\sqrt{x}}{\\sqrt{x} + 3} \\quad \\text{và} \\quad B = \\frac{2\\sqrt{x}}{\\sqrt{x} - 3} - \\frac{3x + 9}{x - 9} \\quad \\text{với } x \\ge 0, x \\ne 9$$\n1) Tính giá trị của biểu thức $A$ khi $x = 16$.\n2) Rút gọn biểu thức $B$.\n3) Cho biểu thức $P = A + B$. Tìm tất cả các giá trị nguyên của $x$ để biểu thức $P$ nhận giá trị là số nguyên.",
          points: 2.0,
          subItems: [
            { key: "1", text: "Tính giá trị của biểu thức A khi x = 16", points: 0.5 },
            { key: "2", text: "Rút gọn biểu thức B chứng minh B = -sqrt(x)/(sqrt(x)+3) hoặc dạng tối giản", points: 1.0 },
            { key: "3", text: "Tìm x nguyên để P nhận giá trị nguyên", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI I (SỞ GD&ĐT HÀ NỘI):

**1) (0.5 điểm) Tính giá trị của biểu thức $A$ khi $x = 16$:**
- Thay $x = 16$ (thỏa mãn điều kiện $x \\ge 0, x \\ne 9$) vào biểu thức $A$:
  $$A = \\frac{\\sqrt{16}}{\\sqrt{16} + 3} = \\frac{4}{4 + 3} = \\frac{4}{7}$$ *(0.25đ)*
- Kết luận: Khi $x = 16$ thì giá trị của biểu thức $A$ là $\\frac{4}{7}$. *(0.25đ)*

**2) (1.0 điểm) Rút gọn biểu thức $B$:**
- Với điều kiện $x \\ge 0, x \\ne 9$, ta có $x - 9 = (\\sqrt{x} - 3)(\\sqrt{x} + 3)$:
  $$B = \\frac{2\\sqrt{x}(\\sqrt{x} + 3)}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)} - \\frac{3x + 9}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}$$ *(0.25đ)*
  $$B = \\frac{2x + 6\\sqrt{x} - (3x + 9)}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}$$ *(0.25đ)*
  $$B = \\frac{-x + 6\\sqrt{x} - 9}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)} = \\frac{-(\\sqrt{x} - 3)^2}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}$$ *(0.25đ)*
  $$B = \\frac{-(\\sqrt{x} - 3)}{\\sqrt{x} + 3} = \\frac{3 - \\sqrt{x}}{\\sqrt{x} + 3}$$ *(0.25đ)*

**3) (0.5 điểm) Tìm các giá trị nguyên của $x$ để biểu thức $P$ nguyên:**
- Ta có:
  $$P = A + B = \\frac{\\sqrt{x}}{\\sqrt{x} + 3} + \\frac{3 - \\sqrt{x}}{\\sqrt{x} + 3} = \\frac{\\sqrt{x} + 3 - \\sqrt{x}}{\\sqrt{x} + 3} = \\frac{3}{\\sqrt{x} + 3}$$ *(0.25đ)*
- Vì $x \\ge 0$ nên $\\sqrt{x} \\ge 0 \\Rightarrow \\sqrt{x} + 3 \\ge 3$.
- Do đó $0 < P = \\frac{3}{\\sqrt{x} + 3} \\le \\frac{3}{3} = 1$.
- Vì $P \\in \\mathbb{Z}$ nên $P = 1$.
  $$P = 1 \\Leftrightarrow \\frac{3}{\\sqrt{x} + 3} = 1 \\Leftrightarrow \\sqrt{x} + 3 = 3 \\Leftrightarrow \\sqrt{x} = 0 \\Leftrightarrow x = 0$$
- Thử lại: $x = 0$ thỏa mãn điều kiện $x \\ge 0, x \\ne 9$ và $x \\in \\mathbb{Z}$.
- **Kết luận:** Giá trị nguyên duy nhất cần tìm là **$x = 0$**. *(0.25đ)*`,
        },
        {
          id: "hn-bai-2",
          index: 2,
          title: "Bài II (2.5 điểm): Giải toán bằng lập phương trình & Hình học không gian thực tế",
          stem: "**1) (2.0 điểm)** Một xe ô tô và một xe máy cùng khởi hành từ địa điểm $A$ để đi đến địa điểm $B$ với quãng đường dài $120\\text{ km}$. Vận tốc của xe ô tô lớn hơn vận tốc của xe máy là $20\\text{ km/h}$, do đó xe ô tô đến địa điểm $B$ sớm hơn xe máy $1$ giờ. Biết trên suốt quãng đường đi, vận tốc của mỗi xe không thay đổi. Tính vận tốc của xe ô tô và vận tốc của xe máy.\n\n**2) (0.5 điểm)** Một chiếc thùng rác inox công cộng có dạng hình trụ tròn xoay với đường kính đáy $d = 30\\text{ cm}$ (bán kính đáy $r = 15\\text{ cm}$) và chiều cao $h = 60\\text{ cm}$. Hãy tính thể tích không gian bên trong của chiếc thùng rác đó theo đơn vị lít (lấy $\\pi \\approx 3,14$; biết $1\\text{ lít} = 1000\\text{ cm}^3$ và kết quả làm tròn đến chữ số thập phân thứ nhất).",
          points: 2.5,
          subItems: [
            { key: "1", text: "Giải bài toán lập phương trình chuyển động", points: 2.0 },
            { key: "2", text: "Tính thể tích thùng rác hình trụ", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI II (SỞ GD&ĐT HÀ NỘI):

**1) (2.0 điểm) Giải bài toán bằng cách lập phương trình hoặc hệ phương trình:**
- Gọi vận tốc của xe máy là $x$ (km/h, điều kiện $x > 0$). *(0.25đ)*
- Vì vận tốc của ô tô lớn hơn vận tốc của xe máy là $20\\text{ km/h}$ nên vận tốc của ô tô là:
  $$x + 20\\text{ (km/h)}$$ *(0.25đ)*
- Thời gian xe máy đi hết quãng đường $120\\text{ km}$ là: $\\frac{120}{x}$ (giờ). *(0.25đ)*
- Thời gian ô tô đi hết quãng đường $120\\text{ km}$ là: $\\frac{120}{x + 20}$ (giờ). *(0.25đ)*
- Vì ô tô đến $B$ sớm hơn xe máy $1$ giờ nên ta có phương trình:
  $$\\frac{120}{x} - \\frac{120}{x + 20} = 1$$ *(0.5đ)*
- Quy đồng và khử mẫu:
  $$120(x + 20) - 120x = x(x + 20)$$
  $$\\Leftrightarrow 120x + 2400 - 120x = x^2 + 20x$$
  $$\\Leftrightarrow x^2 + 20x - 2400 = 0$$ *(0.25đ)*
- Giải phương trình bậc hai:
  $$\\Delta' = 10^2 - 1(-2400) = 100 + 2400 = 2500 > 0 \\Rightarrow \\sqrt{\\Delta'} = 50$$
  $$x_1 = -10 + 50 = 40\\text{ (thỏa mãn } x > 0)$$
  $$x_2 = -10 - 50 = -60\\text{ (loại vì } x > 0)$$
- Vận tốc của xe máy là $40\\text{ km/h}$.
- Vận tốc của ô tô là: $40 + 20 = 60\\text{ (km/h)}$. *(0.25đ)*
- **Kết luận:** Vận tốc xe máy là **$40\\text{ km/h}$**, vận tốc ô tô là **$60\\text{ km/h}$**.

**2) (0.5 điểm) Tính thể tích thùng rác hình trụ:**
- Bán kính đáy hình trụ: $r = 15\\text{ cm}$. Chiều cao hình trụ: $h = 60\\text{ cm}$.
- Thể tích của hình trụ:
  $$V = \\pi r^2 h = 3,14 \\times 15^2 \\times 60 = 3,14 \\times 225 \\times 60 = 42390\\text{ cm}^3$$ *(0.25đ)*
- Đổi sang đơn vị lít:
  $$42390\\text{ cm}^3 = 42,39\\text{ lít} \\approx 42,4\\text{ lít}$$ *(0.25đ)*
- **Đáp số:** Thể tích của thùng rác là khoảng **$42,4$ lít**.`,
        },
        {
          id: "hn-bai-3",
          index: 3,
          title: "Bài III (2.0 điểm): Hệ phương trình & Phương trình bậc hai Viète",
          stem: "**1) (1.0 điểm)** Giải hệ phương trình:\n$$\\begin{cases} \\dfrac{3}{x + 1} - 2y = -1 \\\\[8pt] \\dfrac{2}{x + 1} + 3y = 8 \\end{cases}$$\n\n**2) (1.0 điểm)** Trong mặt phẳng tọa độ $Oxy$, cho parabol $(P): y = x^2$ và đường thẳng $(d): y = 2x + m - 1$ ($m$ là tham số).\n\na) Tìm $m$ để đường thẳng $(d)$ đi qua điểm $M(1; 3)$.\nb) Tìm tất cả các giá trị của $m$ để $(d)$ cắt $(P)$ tại hai điểm phân biệt có hoành độ $x_1, x_2$ thỏa mãn hệ thức:\n$$x_1^2 + x_2^2 - x_1 x_2 = 7$$",
          points: 2.0,
          subItems: [
            { key: "1", text: "Giải hệ phương trình bằng ẩn phụ", points: 1.0 },
            { key: "2a", text: "Tìm m để đường thẳng đi qua điểm M(1; 3)", points: 0.25 },
            { key: "2b", text: "Tìm m để hai nghiệm phân biệt thỏa mãn hệ thức Viète", points: 0.75 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI III (SỞ GD&ĐT HÀ NỘI):

**1) (1.0 điểm) Giải hệ phương trình:**
- Điều kiện xác định: $x \\ne -1$. *(0.25đ)*
- Đặt $u = \\frac{1}{x + 1}$ ($u \\ne 0$). Hệ phương trình trở thành:
  $$\\begin{cases} 3u - 2y = -1 \\\\ 2u + 3y = 8 \\end{cases} \\Leftrightarrow \\begin{cases} 9u - 6y = -3 \\\\ 4u + 6y = 16 \\end{cases} \\Leftrightarrow \\begin{cases} 13u = 13 \\\\ 2u + 3y = 8 \\end{cases} \\Leftrightarrow \\begin{cases} u = 1 \\\\ y = 2 \\end{cases}$$ *(0.5đ)*
- Với $u = 1 \\Rightarrow \\frac{1}{x + 1} = 1 \\Rightarrow x + 1 = 1 \\Rightarrow x = 0$ (thỏa mãn điều kiện $x \\ne -1$). *(0.25đ)*
- Kết luận: Hệ phương trình có nghiệm duy nhất là $(x; y) = (0; 2)$.

**2) (1.0 điểm) Parabol và đường thẳng:**
- a) Đường thẳng $(d)$ đi qua điểm $M(1; 3)$:
  Thay $x = 1, y = 3$ vào phương trình $(d)$:
  $$3 = 2(1) + m - 1 \\Leftrightarrow 3 = 1 + m \\Leftrightarrow m = 2$$
  Vậy $m = 2$. *(0.25đ)*

- b) Phương trình hoành độ giao điểm của $(P)$ và $(d)$:
  $$x^2 = 2x + m - 1 \\Leftrightarrow x^2 - 2x - m + 1 = 0 \\quad (*)$$
  Đường thẳng $(d)$ cắt $(P)$ tại hai điểm phân biệt khi và chỉ khi phương trình $(*)$ có hai nghiệm phân biệt:
  $$\\Delta' = (-1)^2 - 1(-m + 1) = 1 + m - 1 = m > 0$$ *(0.25đ)*
- Theo định lí Viète: $\\begin{cases} x_1 + x_2 = 2 \\\\ x_1 x_2 = 1 - m \\end{cases}$.
- Biến đổi hệ thức:
  $$x_1^2 + x_2^2 - x_1 x_2 = 7 \\Leftrightarrow (x_1 + x_2)^2 - 3x_1 x_2 = 7$$
  $$2^2 - 3(1 - m) = 7 \\Leftrightarrow 4 - 3 + 3m = 7 \\Leftrightarrow 3m = 6 \\Leftrightarrow m = 2$$ *(0.25đ)*
- Đối chiếu điều kiện: $m = 2 > 0$ (thỏa mãn).
- **Kết luận:** Giá trị cần tìm của $m$ là **$m = 2$**.`,
        },
        {
          id: "hn-bai-4",
          index: 4,
          title: "Bài IV (3.0 điểm): Hình học đường tròn (Hình vẽ vector trực quan)",
          stem: "Cho đường tròn $(O; R)$ và điểm $M$ nằm ngoài đường tròn. Từ điểm $M$ kẻ hai tiếp tuyến $MA, MB$ với đường tròn $(O)$ ($A, B$ là các tiếp điểm). Gọi $H$ là giao điểm của đoạn thẳng $MO$ và đoạn thẳng $AB$.\n\n1) Chứng minh bốn điểm $M, A, O, B$ cùng thuộc một đường tròn và $MO \\perp AB$ tại $H$.\n2) Kẻ cát tuyến $MCD$ không đi qua tâm $O$ của đường tròn $(O)$ ($C$ nằm giữa $M$ và $D$, tia $MC$ nằm giữa hai tia $MO$ và $MA$). Chứng minh $MA^2 = MC \\cdot MD$ và $MH \\cdot MO = MC \\cdot MD$.\n3) Kẻ đường kính $AK$ của đường tròn $(O)$. Tia phân giác của góc $\\widehat{CAD}$ cắt dây $CD$ tại $I$. Chứng minh rằng:\n$$\\frac{MC}{MD} = \\frac{IC^2}{ID^2}$$",
          points: 3.0,
          subItems: [
            { key: "1", text: "Chứng minh tứ giác MAOB nội tiếp và MO vuông góc AB tại H", points: 1.0 },
            { key: "2", text: "Chứng minh MA^2 = MC.MD = MH.MO", points: 1.0 },
            { key: "3", text: "Chứng minh tỉ số lượng giác và tính chất phân giác MC/MD = IC^2/ID^2", points: 1.0 },
          ],
          svgDrawing: `<svg viewBox="0 0 520 340" className="w-full h-auto bg-slate-900/90 rounded-2xl p-2 border border-slate-700 shadow-inner">
  <defs>
    <radialGradient id="hnGlowCircle" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
    </radialGradient>
  </defs>

  <!-- Đường tròn tâm O bán kính R -->
  <circle cx="340" cy="170" r="110" fill="url(#hnGlowCircle)" stroke="#38bdf8" strokeWidth="2.5" />
  
  <!-- Tiếp tuyến MA, MB -->
  <line x1="60" y1="170" x2="270" y2="78" stroke="#f59e0b" strokeWidth="2" />
  <line x1="60" y1="170" x2="270" y2="262" stroke="#f59e0b" strokeWidth="2" />

  <!-- Dây cung tiếp điểm AB -->
  <line x1="270" y1="78" x2="270" y2="262" stroke="#a855f7" strokeWidth="2" />

  <!-- Đoạn nối MO -->
  <line x1="60" y1="170" x2="340" y2="170" stroke="#ec4899" strokeWidth="2" strokeDasharray="5 3" />

  <!-- Bán kính OA, OB -->
  <line x1="340" y1="170" x2="270" y2="78" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
  <line x1="340" y1="170" x2="270" y2="262" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

  <!-- Cát tuyến MCD -->
  <line x1="60" y1="170" x2="435" y2="115" stroke="#10b981" strokeWidth="2" />

  <!-- Dây AC, AD -->
  <line x1="270" y1="78" x2="236" y2="136" stroke="#06b6d4" strokeWidth="1.5" />
  <line x1="270" y1="78" x2="435" y2="115" stroke="#06b6d4" strokeWidth="1.5" />

  <!-- Tia phân giác AI của góc CAD -->
  <line x1="270" y1="78" x2="305" y2="126" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 2" />

  <!-- Đường kính AK và đoạn DK -->
  <line x1="270" y1="78" x2="410" y2="262" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />

  <!-- Ký hiệu góc vuông tại A, B, H -->
  <polyline points="260,82 265,92 275,88" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
  <polyline points="260,258 265,248 275,252" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
  <polyline points="260,170 260,160 270,160" fill="none" stroke="#ec4899" strokeWidth="1.5" />

  <!-- Các điểm tròn -->
  <circle cx="60" cy="170" r="4.5" fill="#ef4444" />
  <circle cx="340" cy="170" r="4.5" fill="#38bdf8" />
  <circle cx="270" cy="78" r="4.5" fill="#f59e0b" />
  <circle cx="270" cy="262" r="4.5" fill="#f59e0b" />
  <circle cx="270" cy="170" r="4" fill="#a855f7" />
  <circle cx="236" cy="136" r="4" fill="#10b981" />
  <circle cx="435" cy="115" r="4" fill="#10b981" />
  <circle cx="305" cy="126" r="4" fill="#f43f5e" />
  <circle cx="410" cy="262" r="4" fill="#6366f1" />

  <!-- Nhãn chữ cái -->
  <text x="40" y="175" fill="#ef4444" fontWeight="bold" fontSize="14">M</text>
  <text x="350" y="185" fill="#38bdf8" fontWeight="bold" fontSize="14">O</text>
  <text x="265" y="65" fill="#f59e0b" fontWeight="bold" fontSize="14">A</text>
  <text x="265" y="285" fill="#f59e0b" fontWeight="bold" fontSize="14">B</text>
  <text x="275" y="165" fill="#a855f7" fontWeight="bold" fontSize="13">H</text>
  <text x="228" y="128" fill="#10b981" fontWeight="bold" fontSize="13">C</text>
  <text x="445" y="118" fill="#10b981" fontWeight="bold" fontSize="13">D</text>
  <text x="305" y="145" fill="#f43f5e" fontWeight="bold" fontSize="13">I</text>
  <text x="415" y="280" fill="#6366f1" fontWeight="bold" fontSize="13">K</text>
</svg>`,
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI IV (SỞ GD&ĐT HÀ NỘI):

**1) (1.0 điểm) Chứng minh tứ giác $MAOB$ nội tiếp và $MO \\perp AB$ tại $H$:**
- Vì $MA, MB$ là hai tiếp tuyến của $(O)$ nên $MA \\perp OA$ và $MB \\perp OB$.
  Suy ra $\\widehat{MAO} = 90^\\circ$ và $\\widehat{MBO} = 90^\\circ$. *(0.25đ)*
- Tứ giác $MAOB$ có tổng hai góc đối: $\\widehat{MAO} + \\widehat{MBO} = 90^\\circ + 90^\\circ = 180^\\circ$.
  Do đó tứ giác $MAOB$ nội tiếp đường tròn đường kính $MO$. *(0.25đ)*
- Ta có: $MA = MB$ (tính chất hai tiếp tuyến cắt nhau) và $OA = OB = R$.
  Suy ra $MO$ là đường trung trực của đoạn thẳng $AB$. *(0.25đ)*
- Do đó $MO \\perp AB$ tại trung điểm $H$ của $AB$. *(0.25đ)*

**2) (1.0 điểm) Chứng minh $MA^2 = MC \\cdot MD$ và $MH \\cdot MO = MC \\cdot MD$:**
- Xét hai tam giác $\\triangle MAC$ và $\\triangle MDA$:
  - Có góc $\\widehat{M}$ chung.
  - $\\widehat{MAC} = \\widehat{MDA}$ (góc tạo bởi tiếp tuyến và dây cung cùng chắn cung nhỏ $\\overparen{AC}$). *(0.25đ)*
  - Do đó $\\triangle MAC \\sim \\triangle MDA$ (g-g).
  - Suy ra $\\frac{MA}{MD} = \\frac{MC}{MA} \\Rightarrow MA^2 = MC \\cdot MD$. *(0.25đ)*
- Xét tam giác vuông $MAO$ vuông tại $A$ có đường cao $AH$:
  Theo hệ thức lượng trong tam giác vuông: $MA^2 = MH \\cdot MO$. *(0.25đ)*
- Từ đó suy ra đẳng thức cần chứng minh: $MH \\cdot MO = MC \\cdot MD$ ($= MA^2$). *(0.25đ)*

**3) (1.0 điểm) Chứng minh $\\frac{MC}{MD} = \\frac{IC^2}{ID^2}$:**
- Trong tam giác $ACD$, đoạn thẳng $AI$ là phân giác trong của góc $\\widehat{CAD}$ ($I \\in CD$).
  Theo tính chất đường phân giác trong tam giác:
  $$\\frac{IC}{ID} = \\frac{AC}{AD} \\Rightarrow \\frac{IC^2}{ID^2} = \\frac{AC^2}{AD^2}$$ *(0.5đ)*
- Từ $\\triangle MAC \\sim \\triangle MDA$ (chứng minh ở câu 2), ta có tỉ số các cạnh tương ứng:
  $$\\frac{AC}{AD} = \\frac{MA}{MD} = \\frac{MC}{MA}$$
- Nhân hai tỉ số này với nhau:
  $$\\left(\\frac{AC}{AD}\\right)^2 = \\frac{MA}{MD} \\cdot \\frac{MC}{MA} = \\frac{MC}{MD}$$ *(0.25đ)*
- Kết hợp lại, ta được:
  $$\\frac{MC}{MD} = \\frac{IC^2}{ID^2} \\quad (\\text{đpcm})$$ *(0.25đ)*`,
        },
        {
          id: "hn-bai-5",
          index: 5,
          title: "Bài V (0.5 điểm): Bất đẳng thức & Giá trị nhỏ nhất",
          stem: "Cho các số thực dương $a, b, c$ thỏa mãn điều kiện $a + b + c = 3$.\nTìm giá trị nhỏ nhất của biểu thức:\n$$P = \\frac{a^2}{b + 1} + \\frac{b^2}{c + 1} + \\frac{c^2}{a + 1}$$",
          points: 0.5,
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI V (SỞ GD&ĐT HÀ NỘI):

**Cách 1: Áp dụng Bất đẳng thức Cô-si (AM-GM) phương pháp điểm rơi:**
- Dự đoán đẳng thức xảy ra khi $a = b = c = 1$. Khi đó $\\frac{a^2}{b + 1} = \\frac{1}{2}$ và $\\frac{b + 1}{4} = \\frac{1}{2}$.
- Áp dụng BĐT AM-GM cho hai số thực dương:
  $$\\frac{a^2}{b + 1} + \\frac{b + 1}{4} \\ge 2 \\sqrt{\\frac{a^2}{b + 1} \\cdot \\frac{b + 1}{4}} = 2 \\cdot \\frac{a}{2} = a$$
  Tương tự:
  $$\\frac{b^2}{c + 1} + \\frac{c + 1}{4} \\ge b$$
  $$\\frac{c^2}{a + 1} + \\frac{a + 1}{4} \\ge c$$ *(0.25đ)*
- Cộng vế với vế của ba bất đẳng thức trên:
  $$P + \\frac{(b + 1) + (c + 1) + (a + 1)}{4} \\ge a + b + c$$
  $$P + \\frac{a + b + c + 3}{4} \\ge a + b + c$$
- Thay $a + b + c = 3$ vào:
  $$P + \\frac{3 + 3}{4} \\ge 3 \\Leftrightarrow P + \\frac{6}{4} \\ge 3 \\Leftrightarrow P + \\frac{3}{2} \\ge 3 \\Leftrightarrow P \\ge 3 - \\frac{3}{2} = \\frac{3}{2}$$
- Dấu bằng xảy ra khi và chỉ khi:
  $$\\begin{cases} \\frac{a^2}{b + 1} = \\frac{b + 1}{4} \\\\ \\frac{b^2}{c + 1} = \\frac{c + 1}{4} \\\\ \\frac{c^2}{a + 1} = \\frac{a + 1}{4} \\\\ a + b + c = 3 \\end{cases} \\Leftrightarrow a = b = c = 1$$
- **Kết luận:** Giá trị nhỏ nhất của biểu thức $P$ là **$\\frac{3}{2}$**, đạt được khi $a = b = c = 1$. *(0.25đ)*`,
        },
      ],
    },
  },

  // =========================================================================
  // ĐỀ 2: ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - TP. HỒ CHÍ MINH
  // NGUỒN CHÍNH THỨC: SỞ GIÁO DỤC VÀ ĐÀO TẠO TP. HỒ CHÍ MINH
  // NĂM HỌC: 2024 - 2025 (Khóa thi ngày 07/06/2024 & Định hướng GDPT 2018)
  // HÌNH THỨC THI: 100% TỰ LUẬN (ĐẶC TRƯNG TOÁN THỰC TẾ TP.HCM - 10.0 ĐIỂM - 120 PHÚT)
  // =========================================================================
  "ts10-tphcm-2026": {
    id: "ts10-tphcm-2026",
    title: "Đề Thi Tuyển Sinh Vào Lớp 10 THPT - TP. Hồ Chí Minh (Năm học 2024 - 2025)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "TUYEN_SINH_10",
    subtitle: "Nguồn chính thức: Sở GD&ĐT TP.HCM (Khóa thi 2024-2025) - Đặc trưng Toán ứng dụng thực tế - 100% Tự luận (10.0 điểm / 120 phút)",
    durationMinutes: 120,
    totalQuestions: 6,
    questions: [], // Đề thi TP.HCM là 100% Tự luận
    essayPart: {
      title: "ĐỀ THI TUYỂN SINH LỚP 10 THPT TP. HỒ CHÍ MINH (10.0 ĐIỂM TỰ LUẬN)",
      totalPoints: 10.0,
      description: "Nguồn chính thức: Sở GD&ĐT TP.HCM - Thời gian làm bài 120 phút. Đề thi gồm các bài toán ứng dụng thực tế đời sống đặc trưng cấu trúc thi vào 10 TP.HCM.",
      questions: [
        {
          id: "hcm-bai-1",
          index: 1,
          title: "Bài 1 (1.5 điểm): Đồ thị Parabol và đường thẳng tương giao",
          stem: "Cho parabol $(P): y = \\frac{1}{2} x^2$ và đường thẳng $(d): y = x + 4$.\n1) Vẽ đồ thị $(P)$ và $(d)$ trên cùng một mặt phẳng tọa độ $Oxy$.\n2) Tìm tọa độ các giao điểm của $(P)$ và $(d)$ bằng phép tính.",
          points: 1.5,
          subItems: [
            { key: "1", text: "Lập bảng giá trị và vẽ đồ thị (P) và (d)", points: 1.0 },
            { key: "2", text: "Tìm tọa độ giao điểm bằng phép tính", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI 1 (SỞ GD&ĐT TP.HCM):

**1) (1.0 điểm) Lập bảng giá trị và vẽ đồ thị:**
- Bảng giá trị của parabol $(P): y = \\frac{1}{2} x^2$:
  | $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
  | :--- | :---: | :---: | :---: | :---: | :---: |
  | $y$ | $8$ | $2$ | $0$ | $2$ | $8$ |
- Bảng giá trị của đường thẳng $(d): y = x + 4$:
  Cho $x = 0 \\Rightarrow y = 4$; cho $y = 0 \\Rightarrow x = -4$. Đường thẳng $(d)$ đi qua hai điểm $(0; 4)$ và $(-4; 0)$. *(0.5đ)*
- Vẽ hệ trục tọa độ $Oxy$, parabol $(P)$ nhận trục $Oy$ làm trục đối xứng, đỉnh $O(0;0)$ và đường thẳng $(d)$ đi qua hai điểm xác định rõ ràng, chính xác. *(0.5đ)*

**2) (0.5 điểm) Tìm tọa độ giao điểm bằng phép tính:**
- Phương trình hoành độ giao điểm của $(P)$ và $(d)$:
  $$\\frac{1}{2} x^2 = x + 4 \\Leftrightarrow x^2 - 2x - 8 = 0$$ *(0.25đ)*
- Giải phương trình: $\\Delta' = (-1)^2 - 1(-8) = 9 > 0 \\Rightarrow \\sqrt{\\Delta'} = 3$.
  $$x_1 = 1 + 3 = 4 \\Rightarrow y_1 = 4 + 4 = 8 \\Rightarrow A(4; 8)$$
  $$x_2 = 1 - 3 = -2 \\Rightarrow y_2 = -2 + 4 = 2 \\Rightarrow B(-2; 2)$$
- Vậy $(P)$ cắt $(d)$ tại hai giao điểm là $A(4; 8)$ và $B(-2; 2)$. *(0.25đ)*`,
        },
        {
          id: "hcm-bai-2",
          index: 2,
          title: "Bài 2 (1.0 điểm): Phương trình bậc hai & Định lí Viète",
          stem: "Cho phương trình bậc hai: $x^2 - 2(m + 1)x + 2m = 0$ ($x$ là ẩn số, $m$ là tham số).\n1) Chứng minh phương trình luôn có hai nghiệm phân biệt $x_1, x_2$ với mọi giá trị của $m$.\n2) Tìm tất cả các giá trị của $m$ để biểu thức sau đạt giá trị nhỏ nhất:\n$$K = x_1^2 + x_2^2 - 3x_1 x_2$$",
          points: 1.0,
          subItems: [
            { key: "1", text: "Chứng minh Delta' > 0 với mọi m", points: 0.5 },
            { key: "2", text: "Tìm m để K đạt GTNN", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI 2 (SỞ GD&ĐT TP.HCM):

**1) (0.5 điểm) Chứng minh phương trình luôn có hai nghiệm phân biệt:**
- Ta có $b' = -(m + 1)$, biệt thức thu gọn:
  $$\\Delta' = [-(m + 1)]^2 - 1(2m) = m^2 + 2m + 1 - 2m = m^2 + 1$$ *(0.25đ)*
- Vì $m^2 \\ge 0$ với mọi $m \\in \\mathbb{R}$ nên $\\Delta' = m^2 + 1 \\ge 1 > 0$ với mọi $m$.
  Do đó phương trình luôn có hai nghiệm phân biệt $x_1, x_2$ với mọi giá trị của $m$. *(0.25đ)*

**2) (0.5 điểm) Tìm $m$ để $K$ đạt giá trị nhỏ nhất:**
- Theo định lí Viète:
  $$\\begin{cases} x_1 + x_2 = 2(m + 1) = 2m + 2 \\\\ x_1 x_2 = 2m \\end{cases}$$
- Biến đổi biểu thức $K$:
  $$K = (x_1 + x_2)^2 - 5x_1 x_2$$
  $$K = (2m + 2)^2 - 5(2m) = 4m^2 + 8m + 4 - 10m = 4m^2 - 2m + 4$$
  $$K = \\left(2m - \\frac{1}{2}\\right)^2 + 4 - \\frac{1}{4} = \\left(2m - \\frac{1}{2}\\right)^2 + \\frac{15}{4}$$ *(0.25đ)*
- Vì $\\left(2m - \\frac{1}{2}\\right)^2 \\ge 0$ với mọi $m$ nên $K \\ge \\frac{15}{4}$.
- Dấu đẳng thức xảy ra khi $2m - \\frac{1}{2} = 0 \\Leftrightarrow m = \\frac{1}{4}$.
- **Kết luận:** Giá trị nhỏ nhất của $K$ là **$\\frac{15}{4}$**, đạt được khi $m = \\frac{1}{4}$. *(0.25đ)*`,
        },
        {
          id: "hcm-bai-3",
          index: 3,
          title: "Bài 3 (1.0 điểm): Bài toán thực tế về Kinh tế - Thương mại khuyến mãi liên tiếp",
          stem: "Nhân dịp đầu năm học mới, một nhà sách tại Quận 1 thực hiện chương trình khuyến mãi: Giảm giá $10\\%$ trên giá niêm yết cho tất cả các loại sách tham khảo và dụng cụ học tập. Đặc biệt, nếu khách hàng có thẻ học sinh - sinh viên thì được giảm tiếp thêm $5\\%$ trên số tiền đã giảm ở lần một.\n\nBạn Minh (có thẻ học sinh) đến nhà sách mua một bộ sách nâng cao và một chiếc máy tính cầm tay Casio fx-880BTG. Tổng giá tiền niêm yết của hai món hàng này là $900.000$ đồng.\n1) Hỏi bạn Minh phải thanh toán thực tế cho nhà sách là bao nhiêu tiền?\n2) Số tiền bạn Minh tiết kiệm được so với giá niêm yết ban đầu chiếm bao nhiêu phần trăm?",
          points: 1.0,
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI 3 (SỞ GD&ĐT TP.HCM):

**1) (0.5 điểm) Số tiền Minh phải trả thực tế:**
- Giá tiền của hai món hàng sau đợt giảm giá thứ nhất ($10\\%$):
  $$900.000 \\times (100\\% - 10\\%) = 900.000 \\times 0,9 = 810.000\\text{ (đồng)}$$ *(0.25đ)*
- Vì bạn Minh có thẻ học sinh nên được giảm tiếp $5\\%$ trên số tiền $810.000$ đồng:
  $$810.000 \\times (100\\% - 5\\%) = 810.000 \\times 0,95 = 769.500\\text{ (đồng)}$$ *(0.25đ)*
- Vậy bạn Minh phải thanh toán thực tế cho nhà sách là **$769.500$ đồng**.

**2) (0.5 điểm) Tỉ lệ phần trăm tiết kiệm:**
- Số tiền bạn Minh tiết kiệm được so với giá niêm yết ban đầu là:
  $$900.000 - 769.500 = 130.500\\text{ (đồng)}$$ *(0.25đ)*
- Tỉ lệ phần trăm tiết kiệm được là:
  $$\\frac{130.500}{900.000} \\times 100\\% = 14,5\\%$$ *(0.25đ)*`,
        },
        {
          id: "hcm-bai-4",
          index: 4,
          title: "Bài 4 (1.0 điểm): Bài toán đo đạc chiều cao thực tế bằng tỉ số lượng giác",
          stem: "Để đo chiều cao của tòa tháp Bitexco Financial Tower tại TP. Hồ Chí Minh mà không cần trèo lên đỉnh tháp, một nhóm học sinh sử dụng giác kế đặt tại hai vị trí quan sát $A$ và $B$ trên mặt đất bằng phẳng (chân tòa tháp $C$ cùng với $A, B$ thẳng hàng theo thứ tự $B - A - C$):\n- Tại vị trí $A$, góc nâng nhìn lên đỉnh tháp $D$ là $\\widehat{DAC} = 42^\\circ$.\n- Tại vị trí $B$ lùi xa thêm một khoảng $AB = 85\\text{ m}$, góc nâng nhìn lên đỉnh tháp $D$ là $\\widehat{DBC} = 31^\\circ$.\n\nBiết chiều cao của giác kế tính từ mặt đất đến ống ngắm là $1,3\\text{ m}$. Hãy tính chiều cao của tòa tháp Bitexco (kết quả làm tròn đến mét).",
          points: 1.0,
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI 4 (SỞ GD&ĐT TP.HCM):

- Gọi $D$ là đỉnh tháp, $C$ là chân tháp. Chiều cao tính từ tầm mắt của giác kế đến đỉnh tháp là $h = D C'$ với $C'$ là hình chiếu vuông góc của tầm mắt lên thân tháp.
- Chiều cao thực tế của tháp là $H = h + 1,3\\text{ m}$. *(0.25đ)*
- Trong tam giác vuông $D A C'$: $A C' = \\frac{h}{\\tan 42^\\circ}$.
- Trong tam giác vuông $D B C'$: $B C' = \\frac{h}{\\tan 31^\\circ}$. *(0.25đ)*
- Vì $B C' - A C' = A B = 85\\text{ m}$ nên ta có:
  $$h \\left( \\frac{1}{\\tan 31^\\circ} - \\frac{1}{\\tan 42^\\circ} \\right) = 85$$
- Tính toán:
  $$\\frac{1}{\\tan 31^\\circ} \\approx 1,6643; \\quad \\frac{1}{\\tan 42^\\circ} \\approx 1,1106$$
  $$h \\times (1,6643 - 1,1106) = 85 \\Rightarrow h \\times 0,5537 = 85 \\Rightarrow h \\approx 153,5\\text{ m}$$ *(0.25đ)*
- Chiều cao tổng thể của tòa tháp:
  $$H = 153,5 + 1,3 = 154,8 \\approx 155\\text{ m}$$ *(0.25đ)*
- **Kết luận:** Chiều cao của tòa nhà là khoảng **$155\\text{ m}$**.`,
        },
        {
          id: "hcm-bai-5",
          index: 5,
          title: "Bài 5 (1.5 điểm): Bài toán thực tế về biểu giá điện sinh hoạt lũy tiến EVN HCMC",
          stem: "Bảng đơn giá điện sinh hoạt bậc thang của Tổng công ty Điện lực TP. Hồ Chí Minh (EVN HCMC) quy định như bảng sau (chưa bao gồm thuế GTGT $8\\%$):\n\n| Bậc | Mức tiêu thụ trong tháng (kWh) | Đơn giá (đồng/kWh) |\n| :---: | :--- | :---: |\n| Bậc 1 | Cho kWh từ 0 - 50 | 1.806 |\n| Bậc 2 | Cho kWh từ 51 - 100 | 1.866 |\n| Bậc 3 | Cho kWh từ 101 - 200 | 2.167 |\n| Bậc 4 | Cho kWh từ 201 - 300 | 2.729 |\n\n1) Trong tháng 6, gia đình bạn An tiêu thụ hết $180\\text{ kWh}$ điện. Hãy tính số tiền điện gia đình bạn An phải trả (bao gồm cả thuế VAT $8\\%$).\n2) Tháng 7, gia đình bạn An thanh toán tổng cộng tiền điện (đã gồm $8\\%$ VAT) là $616.788$ đồng. Hỏi trong tháng 7 gia đình bạn An đã tiêu thụ bao nhiêu kWh điện?",
          points: 1.5,
          tableData: {
            headers: ["Bậc thang", "Mức tiêu thụ điện (kWh)", "Đơn giá (đồng/kWh)"],
            rows: [
              ["Bậc 1", "Từ 0 đến 50 kWh đầu tiên", "1.806"],
              ["Bậc 2", "Từ 51 đến 100 kWh", "1.866"],
              ["Bậc 3", "Từ 101 đến 200 kWh", "2.167"],
              ["Bậc 4", "Từ 201 đến 300 kWh", "2.729"],
            ],
          },
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI 5 (SỞ GD&ĐT TP.HCM):

**1) (0.75 điểm) Tính tiền điện tháng 6 (180 kWh):**
- Mức $180\\text{ kWh}$ phân bổ qua 3 bậc:
  - Bậc 1: $50\\text{ kWh} \\times 1.806 = 90.300$ đồng.
  - Bậc 2: $50\\text{ kWh} \\times 1.866 = 93.300$ đồng.
  - Bậc 3: $(180 - 100)\\text{ kWh} = 80\\text{ kWh} \\times 2.167 = 173.360$ đồng. *(0.5đ)*
- Tiền điện chưa thuế: $90.300 + 93.300 + 173.360 = 356.960$ đồng.
- Tổng tiền điện có thuế VAT $8\\%$:
  $$356.960 \\times 1,08 = 385.516,8 \\approx 385.517\\text{ (đồng)}$$ *(0.25đ)*

**2) (0.75 điểm) Tìm mức tiêu thụ tháng 7 khi biết số tiền trả:**
- Tiền điện trước thuế VAT:
  $$616.788 : 1,08 = 571.100\\text{ (đồng)}$$ *(0.25đ)*
- Tiền điện tối đa cho 200 kWh đầu tiên (bậc 1 + 2 + 3):
  $$50 \\times 1.806 + 50 \\times 1.866 + 100 \\times 2.167 = 90.300 + 93.300 + 216.700 = 400.300\\text{ đồng}$$
- Số tiền điện ở Bậc 4:
  $$571.100 - 400.300 = 170.800\\text{ đồng}$$
- Lượng điện tiêu thụ ở Bậc 4:
  $$\\frac{170.800}{2.729} \\approx 62,6\\text{ kWh}$$ *(0.25đ)*
- Tổng lượng điện gia đình đã tiêu thụ trong tháng 7:
  $$200 + 62,6 = 262,6 \\approx 263\\text{ kWh}$$ *(0.25đ)*
- **Kết luận:** Gia đình đã tiêu thụ khoảng **$263\\text{ kWh}$** điện.`,
        },
        {
          id: "hcm-bai-6",
          index: 6,
          title: "Bài 6 (4.0 điểm): Hình học phẳng đường tròn & Tâm đường tròn nội tiếp (Hình vẽ SVG vector)",
          stem: "Từ điểm $S$ nằm bên ngoài đường tròn $(O; R)$, vẽ hai tiếp tuyến $SA, SB$ với đường tròn $(O)$ ($A, B$ là các tiếp điểm). Gọi $H$ là giao điểm của đoạn thẳng $SO$ và đoạn thẳng $AB$. Kẻ cát tuyến $SCD$ của đường tròn $(O)$ sao cho $C$ nằm giữa $S$ và $D$ ($D$ thuộc $(O)$ và tia $SC$ nằm trong góc $\\widehat{ASO}$).\n\n1) Chứng minh tứ giác $SAOB$ nội tiếp và $SO \\perp AB$ tại $H$.\n2) Chứng minh: $SA^2 = SC \\cdot SD$ và $\\triangle SCH \\sim \\triangle SOD$.\n3) Gọi $K$ là giao điểm của đoạn thẳng $SO$ với cung nhỏ $AB$ của $(O)$. Chứng minh điểm $K$ là tâm đường tròn nội tiếp của tam giác $SAB$.",
          points: 4.0,
          subItems: [
            { key: "1", text: "Chứng minh tứ giác SAOB nội tiếp và SO vuông góc AB", points: 1.5 },
            { key: "2", text: "Chứng minh SA^2 = SC.SD và tam giác SCH đồng dạng SOD", points: 1.5 },
            { key: "3", text: "Chứng minh K là tâm đường tròn nội tiếp tam giác SAB", points: 1.0 },
          ],
          svgDrawing: `<svg viewBox="0 0 520 340" className="w-full h-auto bg-slate-900/90 rounded-2xl p-2 border border-slate-700 shadow-inner">
  <defs>
    <radialGradient id="hcmGlowCircle" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#be185d" stopOpacity="0.02" />
    </radialGradient>
  </defs>

  <!-- Đường tròn tâm O -->
  <circle cx="340" cy="170" r="110" fill="url(#hcmGlowCircle)" stroke="#ec4899" strokeWidth="2.5" />

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
          solutionGuide: `### HƯỚNG DẪN CHẤM & BIỂU ĐIỂM CHI TIẾT BÀI 6 (SỞ GD&ĐT TP.HCM):

**1) (1.5 điểm) Chứng minh tứ giác $SAOB$ nội tiếp và $SO \\perp AB$:**
- Vì $SA, SB$ là các tiếp tuyến của $(O)$ nên $\\widehat{SAO} = 90^\\circ$ và $\\widehat{SBO} = 90^\\circ$.
- Tứ giác $SAOB$ có $\\widehat{SAO} + \\widehat{SBO} = 90^\\circ + 90^\\circ = 180^\\circ$, suy ra tứ giác $SAOB$ nội tiếp. *(0.75đ)*
- Ta có $SA = SB$ (tính chất 2 tiếp tuyến cắt nhau) và $OA = OB = R$.
  Do đó $SO$ là đường trung trực của đoạn $AB \\Rightarrow SO \\perp AB$ tại $H$. *(0.75đ)*

**2) (1.5 điểm) Chứng minh $SA^2 = SC \\cdot SD$ và $\\triangle SCH \\sim \\triangle SOD$:**
- Xét $\\triangle SAC$ và $\\triangle SDA$: Có $\\widehat{S}$ chung và $\\widehat{SAC} = \\widehat{SDA}$ (góc tạo bởi tiếp tuyến và dây cung chắn $\\overparen{AC}$).
  Suy ra $\\triangle SAC \\sim \\triangle SDA$ (g-g) $\\Rightarrow \\frac{SA}{SD} = \\frac{SC}{SA} \\Rightarrow SA^2 = SC \\cdot SD$. *(0.75đ)*
- Trong tam giác vuông $SAO$ có đường cao $AH$: $SA^2 = SH \\cdot SO$.
  Suy ra $SC \\cdot SD = SH \\cdot SO \\Rightarrow \\frac{SC}{SO} = \\frac{SH}{SD}$.
- Xét $\\triangle SCH$ và $\\triangle SOD$: Có $\\widehat{S}$ chung và $\\frac{SC}{SO} = \\frac{SH}{SD}$.
  Suy ra $\\triangle SCH \\sim \\triangle SOD$ (c-g-c). *(0.75đ)*

**3) (1.0 điểm) Chứng minh $K$ là tâm đường tròn nội tiếp $\\triangle SAB$:**
- Vì $SO$ là tia phân giác của góc $\\widehat{ASB}$ (tính chất tiếp tuyến) và $K \\in SO$ nên $SK$ là phân giác của $\\widehat{ASB}$. *(0.4đ)*
- Ta chứng minh $AK$ là phân giác của góc $\\widehat{SAB}$:
  - Góc $\\widehat{SAK}$ là góc tạo bởi tiếp tuyến $SA$ và dây cung $AK$, chắn cung nhỏ $\\overparen{AK}$. Do đó số đo $\\widehat{SAK} = \\frac{1}{2} \\text{sđ}\\overparen{AK}$.
  - Góc $\\widehat{BAK}$ là góc nội tiếp chắn cung nhỏ $\\overparen{BK}$. Do đó số đo $\\widehat{BAK} = \\frac{1}{2} \\text{sđ}\\overparen{BK}$.
  - Vì $SO$ là đường trung trực của dây $AB$ nên $SO$ đi qua điểm chính giữa của cung nhỏ $AB$, suy ra $\\overparen{AK} = \\overparen{BK}$.
  - Do đó $\\widehat{SAK} = \\widehat{BAK}$, chứng tỏ $AK$ là tia phân giác của góc $\\widehat{SAB}$. *(0.4đ)*
- Trong tam giác $SAB$, điểm $K$ là giao điểm của hai đường phân giác trong $SK$ và $AK$, do đó $K$ chính là **tâm của đường tròn nội tiếp tam giác $SAB$** (đpcm). *(0.2đ)*`,
        },
      ],
    },
  },
};
