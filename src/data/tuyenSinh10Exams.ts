import { ExamData } from "@/components/exam/ExamEngine";

export const tuyenSinh10Exams: { [key: string]: ExamData } = {
  // =========================================================================
  // ĐỀ 1: ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - TP. HÀ NỘI
  // NGUỒN CHÍNH THỨC: SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI
  // NĂM HỌC: 2026 – 2027 - NGÀY THI: 31/5/2026
  // MÔN THI: TOÁN - THỜI GIAN LÀM BÀI: 120 PHÚT
  // ĐỀ CHÍNH THỨC (GỒM 05 CÂU TỰ LUẬN - 10.0 ĐIỂM)
  // =========================================================================
  "ts10-hanoi-2026": {
    id: "ts10-hanoi-2026",
    title: "Đề Thi Tuyển Sinh Vào Lớp 10 THPT - TP. Hà Nội (Năm học 2026 – 2027)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "TUYEN_SINH_10",
    subtitle: "Nguồn chính thức: Sở GD&ĐT Hà Nội - Ngày thi 31/5/2026 - 100% Tự luận (5 câu - 10.0 điểm / 120 phút)",
    durationMinutes: 120,
    totalQuestions: 5,
    questions: [], // Đề thi Hà Nội là 100% Tự luận, không có phần trắc nghiệm
    essayPart: {
      title: "KỲ THI TUYỂN SINH VÀO LỚP 10 THPT HÀ NỘI - NĂM HỌC 2026 – 2027",
      totalPoints: 10.0,
      description: "SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI - ĐỀ THI CHÍNH THỨC (Ngày thi: 31/5/2026). Thời gian làm bài: 120 phút (Không kể thời gian phát đề). Thí sinh làm bài trực tiếp hoặc làm ra giấy thi rồi chụp ảnh nộp lên hệ thống.",
      questions: [
        {
          id: "hn-cau-1",
          index: 1,
          title: "Câu I (1,5 điểm)",
          stem: "1) Kết quả đo chiều cao của 50 học sinh lớp 6 (đơn vị: cm) được thống kê trong bảng tần số ghép nhóm sau đây:\n\n| Chiều cao (cm) | [140; 145) | [145; 150) | [150; 155) | [155; 160) | [160; 165) |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| Số học sinh | 10 | 18 | 14 | 6 | 2 |\n\nXác định tần số và tần số tương đối của nhóm [150; 155).\n\n2) Một hộp đựng 6 quả bóng cùng loại, mỗi quả bóng ghi một trong các số 1, 2, 3, 4, 5, 6; hai quả bóng khác nhau được ghi hai số khác nhau. Lấy ngẫu nhiên một quả bóng trong hộp. Tính xác suất của biến cố $A$: \"Số ghi trên quả bóng lấy được là số chẵn\".",
          points: 1.5,
          tableData: {
            headers: ["Chiều cao (cm)", "[140; 145)", "[145; 150)", "[150; 155)", "[155; 160)", "[160; 165)"],
            rows: [
              ["Số học sinh", "10", "18", "14", "6", "2"],
            ],
          },
          subItems: [
            { key: "1", text: "Xác định tần số và tần số tương đối của nhóm [150; 155)", points: 0.75 },
            { key: "2", text: "Tính xác suất của biến cố A: quả bóng lấy được ghi số chẵn", points: 0.75 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN CÂU I (SỞ GD&ĐT HÀ NỘI):

**1) Xác định tần số và tần số tương đối của nhóm [150; 155):**
- Dựa vào bảng tần số ghép nhóm ta có:
  - Tần số ghép nhóm của nhóm $[150; 155)$ là: **$14$**.
  - Tần số tương đối ghép nhóm của nhóm $[150; 155)$ là:
    $$f_3 = \\frac{14}{50} \\cdot 100\\% = 28\\%$$
- **Kết luận:** Nhóm $[150; 155)$ có tần số ghép nhóm là **$14$** và tần số tương đối ghép nhóm là **$28\\%$**. *(0,75đ)*

**2) Tính xác suất của biến cố $A$:**
- Tập hợp các kết quả có thể xảy ra khi lấy ngẫu nhiên một quả bóng là:
  $$\\Omega = \\{1; 2; 3; 4; 5; 6\\} \\Rightarrow n(\\Omega) = 6$$
- Vì các quả bóng cùng loại nên các kết quả là đồng khả năng.
- Các kết quả thuận lợi cho biến cố $A$ (\"Số ghi trên quả bóng lấy được là số chẵn\") là:
  $$A = \\{2; 4; 6\\} \\Rightarrow n(A) = 3$$
- Xác suất của biến cố $A$:
  $$P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{3}{6} = \\frac{1}{2} = 0,5$$ *(0,75đ)*`,
        },
        {
          id: "hn-cau-2",
          index: 2,
          title: "Câu II (1,5 điểm)",
          stem: "Cho hai biểu thức $A = \\frac{\\sqrt{x} - 4}{\\sqrt{x}}$ và $B = \\frac{4}{\\sqrt{x} - 3} + \\frac{x - 7\\sqrt{x} - 12}{x - 9}$ với $x > 0, x \\ne 9$.\n\n1) Tính giá trị của biểu thức $A$ khi $x = 25$.\n2) Chứng minh $B = \\frac{\\sqrt{x}}{\\sqrt{x} + 3}$.\n3) Tìm tất cả giá trị của $x$ để biểu thức $P = A \\cdot B$ có giá trị là số nguyên.",
          points: 1.5,
          subItems: [
            { key: "1", text: "Tính giá trị của biểu thức A khi x = 25", points: 0.5 },
            { key: "2", text: "Chứng minh B = sqrt(x)/(sqrt(x) + 3)", points: 0.5 },
            { key: "3", text: "Tìm x để biểu thức P = A.B có giá trị là số nguyên", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN CÂU II (SỞ GD&ĐT HÀ NỘI):

**1) (0,5 điểm) Tính giá trị của biểu thức $A$ khi $x = 25$:**
- Thay $x = 25$ (thỏa mãn điều kiện $x > 0, x \\ne 9$) vào biểu thức $A$:
  $$A = \\frac{\\sqrt{25} - 4}{\\sqrt{25}} = \\frac{5 - 4}{5} = \\frac{1}{5}$$ *(0,25đ)*
- Vậy khi $x = 25$ thì giá trị của biểu thức $A$ là **$\\frac{1}{5}$**. *(0,25đ)*

**2) (0,5 điểm) Chứng minh $B = \\frac{\\sqrt{x}}{\\sqrt{x} + 3}$:**
- Với $x > 0, x \\ne 9$, ta có $x - 9 = (\\sqrt{x} - 3)(\\sqrt{x} + 3)$:
  $$B = \\frac{4}{\\sqrt{x} - 3} + \\frac{x - 7\\sqrt{x} - 12}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}$$
  $$B = \\frac{4(\\sqrt{x} + 3) + x - 7\\sqrt{x} - 12}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}$$ *(0,25đ)*
  $$B = \\frac{4\\sqrt{x} + 12 + x - 7\\sqrt{x} - 12}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)} = \\frac{x - 3\\sqrt{x}}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}$$
  $$B = \\frac{\\sqrt{x}(\\sqrt{x} - 3)}{(\\sqrt{x} - 3)(\\sqrt{x} + 3)} = \\frac{\\sqrt{x}}{\\sqrt{x} + 3} \\quad (\\text{đpcm})$$ *(0,25đ)*

**3) (0,5 điểm) Tìm $x$ để biểu thức $P = A \\cdot B$ nhận giá trị là số nguyên:**
- Điều kiện: $x > 0, x \\ne 9$. Khi đó:
  $$P = A \\cdot B = \\frac{\\sqrt{x} - 4}{\\sqrt{x}} \\cdot \\frac{\\sqrt{x}}{\\sqrt{x} + 3} = \\frac{\\sqrt{x} - 4}{\\sqrt{x} + 3}$$
  $$P = \\frac{(\\sqrt{x} + 3) - 7}{\\sqrt{x} + 3} = 1 - \\frac{7}{\\sqrt{x} + 3}$$ *(0,25đ)*
- Vì $1 \\in \\mathbb{Z}$ nên $P \\in \\mathbb{Z} \\Leftrightarrow P_1 = \\frac{7}{\\sqrt{x} + 3} \\in \\mathbb{Z}$.
- Với $x > 0, x \\ne 9 \\Rightarrow \\sqrt{x} > 0 \\Rightarrow \\sqrt{x} + 3 > 3$.
- Do đó:
  $$0 < P_1 = \\frac{7}{\\sqrt{x} + 3} < \\frac{7}{3} = 2\\frac{1}{3}$$
- Mà $P_1 \\in \\mathbb{Z}$ nên $P_1 \\in \\{1; 2\\}$.
  - Trường hợp 1: $P_1 = 1 \\Leftrightarrow \\frac{7}{\\sqrt{x} + 3} = 1 \\Leftrightarrow \\sqrt{x} + 3 = 7 \\Leftrightarrow \\sqrt{x} = 4 \\Leftrightarrow x = 16$ (thỏa mãn $x > 0, x \\ne 9$).
  - Trường hợp 2: $P_1 = 2 \\Leftrightarrow \\frac{7}{\\sqrt{x} + 3} = 2 \\Leftrightarrow \\sqrt{x} + 3 = \\frac{7}{2} \\Leftrightarrow \\sqrt{x} = \\frac{1}{2} \\Leftrightarrow x = \\frac{1}{4}$ (thỏa mãn $x > 0, x \\ne 9$).
- **Kết luận:** Các giá trị cần tìm là **$x \\in \\left\\{\\frac{1}{4}; 16\\right\\}$**. *(0,25đ)*`,
        },
        {
          id: "hn-cau-3",
          index: 3,
          title: "Câu III (2,5 điểm)",
          stem: "1) Một tổ sản xuất lập kế hoạch may áo với số lượng áo mỗi ngày may được là như nhau. Trong 3 ngày đầu, mỗi ngày tổ đã may theo đúng kế hoạch. Trong 7 ngày tiếp theo, nhờ cải tiến kĩ thuật nên mỗi ngày tổ đã may được nhiều hơn 5 chiếc áo so với kế hoạch. Vì vậy sau 10 ngày, tổ đã may được tổng số 335 chiếc áo. Hỏi theo kế hoạch, mỗi ngày tổ sản xuất may bao nhiêu chiếc áo?\n\n2) Một người mua 25 bông hoa gồm hoa hồng và hoa cúc hết tổng số tiền là 180 nghìn đồng. Biết giá tiền mỗi bông hoa hồng là 8 nghìn đồng, giá tiền mỗi bông hoa cúc là 6 nghìn đồng. Hỏi người đó đã mua bao nhiêu bông hoa mỗi loại?\n\n3) Biết phương trình bậc hai $x^2 - 3x + 1 = 0$ có hai nghiệm phân biệt $x_1$ và $x_2$, tính giá trị của biểu thức $Q = \\frac{3x_2 - 1}{x_1} + \\frac{3x_1}{x_2} - x_1$.",
          points: 2.5,
          subItems: [
            { key: "1", text: "Giải bài toán may áo theo kế hoạch", points: 1.0 },
            { key: "2", text: "Giải bài toán lập hệ phương trình mua hoa", points: 1.0 },
            { key: "3", text: "Tính giá trị biểu thức Q bằng định lý Viète", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN CÂU III (SỞ GD&ĐT HÀ NỘI):

**1) (1,0 điểm) Bài toán may áo theo kế hoạch:**
- Gọi số áo mỗi ngày tổ sản xuất may theo kế hoạch là $x$ (chiếc, $x \\in \\mathbb{N}^*$). *(0,25đ)*
- Số áo may được trong $3$ ngày đầu là: $3x$ (chiếc).
- Thực tế trong $7$ ngày tiếp theo, mỗi ngày tổ may được nhiều hơn $5$ chiếc áo so với kế hoạch nên mỗi ngày may được: $x + 5$ (chiếc).
- Số áo may được trong $7$ ngày tiếp theo là: $7(x + 5)$ (chiếc). *(0,25đ)*
- Vì sau $10$ ngày, tổ may được tổng số $335$ chiếc áo nên ta có phương trình:
  $$3x + 7(x + 5) = 335$$ *(0,25đ)*
  $$\\Leftrightarrow 3x + 7x + 35 = 335$$
  $$\\Leftrightarrow 10x = 300 \\Leftrightarrow x = 30\\text{ (thỏa mãn } x \\in \\mathbb{N}^*)$$
- **Kết luận:** Theo kế hoạch, mỗi ngày tổ sản xuất may **$30$ chiếc áo**. *(0,25đ)*

**2) (1,0 điểm) Bài toán mua hoa hồng và hoa cúc:**
- Gọi số bông hoa hồng và số bông hoa cúc người đó đã mua lần lượt là $x$ và $y$ (bông; $x, y \\in \\mathbb{N}^*, x, y < 25$). *(0,25đ)*
- Vì người đó mua tổng cộng $25$ bông hoa nên ta có phương trình:
  $$x + y = 25 \\quad (1)$$
- Giá mỗi bông hoa hồng là $8$ nghìn đồng, hoa cúc là $6$ nghìn đồng, tổng số tiền là $180$ nghìn đồng nên ta có phương trình:
  $$8x + 6y = 180 \\Leftrightarrow 4x + 3y = 90 \\quad (2)$$ *(0,25đ)*
- Từ $(1)$ và $(2)$ ta có hệ phương trình:
  $$\\begin{cases} x + y = 25 \\\\ 4x + 3y = 90 \\end{cases} \\Leftrightarrow \\begin{cases} 3x + 3y = 75 \\\\ 4x + 3y = 90 \\end{cases} \\Leftrightarrow \\begin{cases} x = 15 \\\\ y = 10 \\end{cases}\\text{ (thỏa mãn điều kiện)}$$ *(0,25đ)*
- **Kết luận:** Người đó đã mua **$15$ bông hoa hồng** và **$10$ bông hoa cúc**. *(0,25đ)*

**3) (0,5 điểm) Tính giá trị biểu thức $Q$:**
- Phương trình bậc hai $x^2 - 3x + 1 = 0$ có $\\Delta = (-3)^2 - 4(1)(1) = 5 > 0$, có hai nghiệm phân biệt $x_1, x_2$.
- Theo hệ thức Vi-ét:
  $$\\begin{cases} x_1 + x_2 = 3 \\\\ x_1 x_2 = 1 \\end{cases}$$
- Vì $x_1$ là nghiệm của phương trình nên:
  $$x_1^2 - 3x_1 + 1 = 0 \\Leftrightarrow x_1^2 + 1 = 3x_1 \\Leftrightarrow 3x_1 - 1 = x_1^2$$
- Biến đổi biểu thức $Q$:
  $$Q = \\frac{3x_2 - 1}{x_1} + \\frac{3x_1}{x_2} - x_1 = \\frac{3x_2}{x_1} - \\frac{1}{x_1} + \\frac{3x_1}{x_2} - x_1$$
  $$Q = 3\\left(\\frac{x_2}{x_1} + \\frac{x_1}{x_2}\\right) - \\left(\\frac{1}{x_1} + x_1\\right) = 3 \\cdot \\frac{x_1^2 + x_2^2}{x_1 x_2} - \\frac{x_1^2 + 1}{x_1}$$ *(0,25đ)*
- Ta có:
  $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 3^2 - 2(1) = 7$$
  $$\\frac{x_1^2 + 1}{x_1} = \\frac{3x_1}{x_1} = 3$$
- Thay vào $Q$:
  $$Q = 3 \\cdot \\frac{7}{1} - 3 = 21 - 3 = 18$$
- **Kết luận:** Giá trị của biểu thức là **$Q = 18$**. *(0,25đ)*`,
        },
        {
          id: "hn-cau-4",
          index: 4,
          title: "Câu IV (4,0 điểm)",
          stem: "1) Một xô đựng nước dạng hình trụ có chiều cao bằng $25\\text{ cm}$ và bán kính đáy bằng $12\\text{ cm}$. (Lấy $\\pi \\approx 3,14$ và coi độ dày của xô đựng nước không đáng kể).\n\na) Tính diện tích xung quanh của xô đựng nước đó.\nb) Người ta dùng xô đựng nước trên để múc nước đổ vào một bể có thể tích $150\\text{ lít}$. Mỗi lần người ta chỉ múc lượng nước bằng $80\\%$ thể tích của xô. Lúc đầu bể không có nước, hỏi cần múc ít nhất bao nhiêu xô để đổ đầy bể? (Biết $1\\text{ lít} = 1000\\text{ cm}^3$).\n\n2) Cho tam giác $ABC$ vuông tại $A$ ($AB < AC$) nội tiếp đường tròn tâm $O$, đường kính $BC$. Lấy điểm $H$ thuộc đoạn thẳng $AB$ sao cho $HB > HA$ ($H$ khác $A$). Kẻ đường thẳng qua $H$ vuông góc với đường thẳng $BC$ tại điểm $D$ và cắt đường thẳng $AC$ tại điểm $E$.\n\na) Chứng minh bốn điểm $A, H, D, C$ cùng thuộc một đường tròn.\nb) Đường thẳng $CH$ cắt đường tròn $(O)$ tại điểm thứ hai $F$. Đường thẳng qua $A$ vuông góc với đường thẳng $ED$ cắt đường thẳng $DF$ tại điểm $M$. Chứng minh $AE \\cdot BC = EH \\cdot AB$ và $\\widehat{EMH} = 90^\\circ$.\nc) Đường thẳng $BM$ cắt đường tròn $(O)$ tại điểm thứ hai $K$. Chứng minh tam giác $HKM$ là tam giác cân.",
          points: 4.0,
          svgDrawing: `<svg viewBox="0 0 280 340" style="background-color: #ffffff; border-radius: 12px;" className="w-full max-w-xs mx-auto h-auto bg-white rounded-xl p-3 border border-slate-300 shadow-md">
  <rect width="100%" height="100%" fill="#ffffff" rx="12" />
  <defs>
    <!-- Mũi tên hai đầu đen đậm -->
    <marker id="arrowBucket" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
  </defs>

  <!-- Tiêu đề hình vẽ -->
  <text x="140" y="24" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
    XÔ ĐỰNG NƯỚC HÌNH TRỤ
  </text>

  <!-- Miệng xô hình trụ (Elip) -->
  <ellipse cx="130" cy="70" rx="75" ry="20" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2.5" />
  <line x1="130" y1="70" x2="205" y2="70" stroke="#0f172a" strokeWidth="2" strokeDasharray="3 3" />
  <text x="168" y="62" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">r = 12 cm</text>
  <circle cx="130" cy="70" r="3" fill="#0f172a" />

  <!-- Thân xô (hai đường thẳng đứng) -->
  <line x1="55" y1="70" x2="55" y2="265" stroke="#0f172a" strokeWidth="2.5" />
  <line x1="205" y1="70" x2="205" y2="265" stroke="#0f172a" strokeWidth="2.5" />

  <!-- Đáy xô (nửa dưới nét liền, nửa trên nét đứt) -->
  <path d="M 55 265 A 75 20 0 0 0 205 265" fill="none" stroke="#0f172a" strokeWidth="2.5" />
  <path d="M 55 265 A 75 20 0 0 1 205 265" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />

  <!-- Trục đối xứng nét đứt giữa -->
  <line x1="130" y1="70" x2="130" y2="265" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />

  <!-- Gióng kích thước chiều cao 25 cm ở bên phải -->
  <line x1="225" y1="70" x2="225" y2="265" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowBucket)" markerEnd="url(#arrowBucket)" />
  <line x1="205" y1="70" x2="238" y2="70" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
  <line x1="205" y1="265" x2="238" y2="265" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
  <text x="252" y="172" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold" transform="rotate(90, 252, 172)">
    h = 25 cm
  </text>
</svg>`,
          subItems: [
            { key: "1a", text: "Tính diện tích xung quanh của xô đựng nước hình trụ", points: 0.5 },
            { key: "1b", text: "Tính số xô nước ít nhất cần múc để đổ đầy bể 150 lít", points: 0.5 },
            { key: "2a", text: "Chứng minh bốn điểm A, H, D, C cùng thuộc một đường tròn", points: 1.0 },
            { key: "2b", text: "Chứng minh AE.BC = EH.AB và góc EMH = 90 độ", points: 1.0 },
            { key: "2c", text: "Chứng minh tam giác HKM là tam giác cân", points: 1.0 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN CÂU IV (SỞ GD&ĐT HÀ NỘI):

**1) Hình học không gian thực tế:**
- **a) (0,5 điểm) Diện tích xung quanh của xô đựng nước:**
  Bán kính đáy $r = 12\\text{ cm}$, chiều cao $h = 25\\text{ cm}$.
  $$S_{\\text{xq}} = 2\\pi r h \\approx 2 \\times 3,14 \\times 12 \\times 25 = 1884\\text{ cm}^2$$ *(0,5đ)*
  Vậy diện tích xung quanh của xô đựng nước là khoảng **$1884\\text{ cm}^2$**.

- **b) (0,5 điểm) Số xô nước ít nhất cần múc để đổ đầy bể:**
  - Thể tích của xô đựng nước là:
    $$V = \\pi r^2 h = \\pi \\times 12^2 \\times 25 = 3600\\pi\\text{ cm}^3$$
  - Lượng nước múc mỗi lần bằng $80\\%$ thể tích xô:
    $$V_1 = 80\\% \\times 3600\\pi = 2880\\pi\\text{ cm}^3$$ *(0,25đ)*
  - Thể tích của bể là: $150\\text{ lít} = 150.000\\text{ cm}^3$.
  - Số xô nước múc là:
    $$\\frac{150000}{2880\\pi} = \\frac{150000}{2880 \\times 3,14} \\approx 16,59\\text{ (lần)}$$
  - Vì số xô múc phải là số nguyên nên người đó cần múc ít nhất **$17$ xô** để đổ đầy bể. *(0,25đ)*

---

**2) Hình học đường tròn phẳng:**
*(Lưu ý: Thí sinh phải tự vẽ hình vào bài làm. Nếu không vẽ hình hoặc vẽ hình sai thì không chấm điểm).*

- **a) (1,0 điểm) Chứng minh bốn điểm $A, H, D, C$ cùng thuộc một đường tròn:**
  - Tam giác $ABC$ vuông tại $A$ nên $\\widehat{BAC} = 90^\\circ \\Rightarrow \\widehat{HAC} = 90^\\circ$.
    Suy ra tam giác $HAC$ vuông tại $A \\Rightarrow A, H, C$ cùng thuộc đường tròn đường kính $HC$. *(0,5đ)*
  - Đường thẳng qua $H$ vuông góc với $BC$ tại $D$ nên $\\widehat{HDC} = 90^\\circ$.
    Suy ra tam giác $HDC$ vuông tại $D \\Rightarrow H, D, C$ cùng thuộc đường tròn đường kính $HC$. *(0,25đ)*
  - Từ đó suy ra bốn điểm **$A, H, D, C$ cùng thuộc đường tròn đường kính $HC$** (đpcm). *(0,25đ)*

- **b) (1,0 điểm) Chứng minh $AE \\cdot BC = EH \\cdot AB$ và $\\widehat{EMH} = 90^\\circ$:**
  - Ta có: $\\widehat{EAH} = 180^\\circ - \\widehat{BAC} = 180^\\circ - 90^\\circ = 90^\\circ$ (kề bù).
    Trong tam giác vuông $EDC$ có $\\widehat{EDC} = 90^\\circ$, suy ra $\\widehat{AEH} = 90^\\circ - \\widehat{ECD} = \\widehat{ABC}$.
  - Xét $\\Delta EAH$ và $\\Delta BAC$ có:
    - $\\widehat{EAH} = \\widehat{BAC} = 90^\\circ$
    - $\\widehat{AEH} = \\widehat{ABC}$ (chứng minh trên)
    - Suy ra $\\Delta EAH \\sim \\Delta BAC$ (g-g).
    - Suy ra tỉ số: $\\frac{AE}{AB} = \\frac{EH}{BC} \\Rightarrow AE \\cdot BC = EH \\cdot AB$ (đpcm). *(0,5đ)*
  - Chứng minh $\\widehat{EMH} = 90^\\circ$:
    - Tứ giác $AHDC$ nội tiếp đường tròn đường kính $HC$ nên $\\widehat{HDA} = \\widehat{HCA}$ (cùng chắn cung $HA$).
    - Mặt khác $\\widehat{HFB} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn $(O)$ đường kính $BC$) và $\\widehat{HDB} = 90^\\circ$, suy ra tứ giác $HFBD$ nội tiếp đường tròn đường kính $HB$.
    - Do đó $\\widehat{HDF} = \\widehat{HBF}$ (cùng chắn cung $HF$).
    - Lại có $\\widehat{HCA} = \\widehat{HBF}$ (hai góc nội tiếp của $(O)$ cùng chắn cung $AF$).
    - Suy ra $\\widehat{HDA} = \\widehat{HDF}$, tức là $DH$ là tia phân giác của góc $\\widehat{ADF}$.
    - Kẻ $AM \\perp DE$ tại $I$. Khi đó trong tam giác $ADM$, $DI$ vừa là đường cao vừa là đường phân giác nên $\\Delta ADM$ cân tại $D$.
    - Suy ra $DE$ là đường trung trực của đoạn $AM \\Rightarrow EA = EM$ và $HA = HM$.
    - Suy ra $\\Delta EMH = \\Delta EAH$ (c-c-c) $\\Rightarrow \\widehat{EMH} = \\widehat{EAH} = 90^\\circ$ (đpcm). *(0,5đ)*

- **c) (1,0 điểm) Chứng minh tam giác $HKM$ cân:**
  - Tứ giác $AKBC$ nội tiếp đường tròn $(O)$ nên:
    $$\\widehat{AKM} = 180^\\circ - \\widehat{AKB} = \\widehat{ACB} = \\widehat{AHE} = \\frac{1}{2}\\widehat{MHA}$$
  - Để ý $HM = HA$ nên điểm $K$ thuộc đường tròn tâm $H$ bán kính $HA$, tức là:
    $$HK = HM = HA$$
  - Suy ra $HK = HM$, do đó **tam giác $HKM$ là tam giác cân tại $H$** (đpcm). *(1,0đ)*`,
        },
        {
          id: "hn-cau-5",
          index: 5,
          title: "Câu V (0,5 điểm)",
          stem: "Một công ty dự định thuê một kho xưởng và điều động một số công nhân để hoàn thành đơn hàng 1000 sản phẩm. Chi phí thuê kho xưởng được tính theo ngày với giá 3 triệu đồng một ngày. Biết một ngày mỗi công nhân làm được 5 sản phẩm và công ty dự định thưởng mỗi công nhân 1 triệu đồng sau khi đơn hàng được hoàn thành. Công ty muốn tổng chi phí thuê kho xưởng và thưởng công nhân khi hoàn thành đơn hàng là nhỏ nhất. Hỏi công ty nên điều động bao nhiêu công nhân và thuê kho xưởng trong bao nhiêu ngày?",
          points: 0.5,
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN CÂU V (SỞ GD&ĐT HÀ NỘI):

- Gọi số ngày thuê kho xưởng là $x$ ngày và số công nhân cần điều động là $y$ người ($x, y \\in \\mathbb{N}^*$).
- Mỗi ngày một công nhân làm được $5$ sản phẩm nên trong $x$ ngày, $y$ công nhân làm được số sản phẩm là: $5xy$ (sản phẩm).
- Theo đề bài, tổng số sản phẩm là $1000$ nên ta có:
  $$5xy = 1000 \\Rightarrow xy = 200 \\Rightarrow y = \\frac{200}{x}$$ *(0,25đ)*
- Tổng chi phí thuê kho xưởng và tiền thưởng công nhân là:
  $$T = 3x + 1 \\cdot y = 3x + \\frac{200}{x}\\text{ (triệu đồng)}$$
- Biến đổi biểu thức $T$:
  $$T = 3x + \\frac{200}{x} - 49 + 49 = \\frac{3x^2 - 49x + 200}{x} + 49 = \\frac{(x - 8)(3x - 25)}{x} + 49$$
- Xét các trường hợp:
  - Với $x = 8$: Ta có $T = 3(8) + \\frac{200}{8} = 24 + 25 = 49$.
  - Với $x > 8$: Do $x \\in \\mathbb{N}^*$ nên $x \\ge 9$, khi đó $x - 8 > 0$ và $3x - 25 \\ge 3(9) - 25 = 2 > 0$.
    Suy ra $\\frac{(x - 8)(3x - 25)}{x} > 0 \\Rightarrow T > 49$.
  - Với $x < 8$: Do $x \\in \\mathbb{N}^*$ nên $x \\le 7$, khi đó $x - 8 < 0$ và $3x - 25 \\le 3(7) - 25 = -4 < 0$.
    Suy ra $(x - 8)(3x - 25) > 0 \\Rightarrow \\frac{(x - 8)(3x - 25)}{x} > 0 \\Rightarrow T > 49$.
- Tóm lại, với mọi $x \\in \\mathbb{N}^*$ thì $T \\ge 49$, dấu đẳng thức xảy ra khi và chỉ khi $x = 8$.
- Khi đó số công nhân cần điều động là:
  $$y = \\frac{200}{8} = 25\\text{ (người)}$$ *(0,25đ)*
- **Kết luận:** Công ty nên điều động **$25$ công nhân** và thuê kho xưởng trong **$8$ ngày**.`,
        },
      ],
    },
  },


  // =========================================================================
  // ĐỀ 2: ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - TP. HỒ CHÍ MINH
  // NGUỒN CHÍNH THỨC: SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH
  // KHOÁ NGÀY: 01-02/6/2026 - NGÀY THI: 02/06/2026
  // MÔN THI: TOÁN - THỜI GIAN LÀM BÀI: 120 PHÚT
  // ĐỀ CHÍNH THỨC (GỒM 07 BÀI TỰ LUẬN - 10.0 ĐIỂM)
  // =========================================================================
  "ts10-tphcm-2026": {
    id: "ts10-tphcm-2026",
    title: "Đề Thi Tuyển Sinh Vào Lớp 10 THPT - TP. Hồ Chí Minh (Khóa ngày 01-02/6/2026)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "TUYEN_SINH_10",
    subtitle: "Nguồn chính thức: Sở GD&ĐT TP. Hồ Chí Minh - Ngày thi 02/06/2026 - 100% Tự luận (7 bài - 10.0 điểm / 120 phút)",
    durationMinutes: 120,
    totalQuestions: 7,
    questions: [], // Đề thi TP.HCM là 100% Tự luận
    essayPart: {
      title: "KÌ THI TUYỂN SINH LỚP 10 TRUNG HỌC PHỔ THÔNG - TP. HỒ CHÍ MINH (NĂM 2026)",
      totalPoints: 10.0,
      description: "SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH - ĐỀ THI CHÍNH THỨC (Khoá ngày 01-02/6/2026 - Ngày thi: 02/6/2026). Thời gian làm bài 120 phút. Thí sinh làm bài trực tiếp hoặc làm ra giấy thi rồi chụp ảnh nộp lên hệ thống.",
      questions: [
        {
          id: "hcm-bai-1",
          index: 1,
          title: "Bài 1. (1,5 điểm)",
          stem: "Cho hàm số $y = \\frac{1}{4}x^2$ có đồ thị $(P)$.\n\na) Vẽ $(P)$.\nb) Tìm toạ độ điểm $M$ thuộc $(P)$ có hoành độ bằng $6$.",
          points: 1.5,
          subItems: [
            { key: "a", text: "Vẽ đồ thị (P)", points: 1.0 },
            { key: "b", text: "Tìm toạ độ điểm M thuộc (P) có hoành độ bằng 6", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 1 (SỞ GD&ĐT TP.HCM):

**a) (1,0 điểm) Vẽ đồ thị $(P)$:**
- Lập bảng giá trị:
  | $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
  | :--- | :---: | :---: | :---: | :---: | :---: |
  | $y = \\frac{1}{4}x^2$ | $4$ | $1$ | $0$ | $1$ | $4$ | *(0,5đ)*
- Vẽ đồ thị $(P)$ parabol đi qua đỉnh $O(0;0)$, nhận trục $Oy$ làm trục đối xứng và đi qua các điểm $(-4; 4), (-2; 1), (0; 0), (2; 1), (4; 4)$ chính xác, đều đẹp. *(0,5đ)*

**b) (0,5 điểm) Tìm toạ độ điểm $M$ thuộc $(P)$ có hoành độ bằng $6$:**
- Thay $x = 6$ vào hàm số $y = \\frac{1}{4}x^2$, ta được:
  $$y = \\frac{1}{4} \\cdot 6^2 = \\frac{36}{4} = 9$$ *(0,25đ)*
- Vậy toạ độ điểm $M$ cần tìm là **$M(6; 9)$**. *(0,25đ)*`,
        },
        {
          id: "hcm-bai-2",
          index: 2,
          title: "Bài 2. (1,0 điểm)",
          stem: "Cho phương trình $2x^2 - 3x - 4 = 0$.\n\na) Chứng minh phương trình có hai nghiệm phân biệt $x_1, x_2$.\nb) Không giải phương trình, hãy tính giá trị của biểu thức $A = x_1^2 + x_2^2 + \\frac{1}{2}x_1 + \\frac{1}{2}x_2$.",
          points: 1.0,
          subItems: [
            { key: "a", text: "Chứng minh phương trình có hai nghiệm phân biệt", points: 0.25 },
            { key: "b", text: "Tính giá trị của biểu thức A", points: 0.75 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 2 (SỞ GD&ĐT TP.HCM):

**a) (0,25 điểm) Chứng minh phương trình có hai nghiệm phân biệt:**
- Ta có: $\\Delta = b^2 - 4ac = (-3)^2 - 4(2)(-4) = 9 + 32 = 41 > 0$.
- Vì $\\Delta > 0$ nên phương trình luôn có hai nghiệm phân biệt $x_1, x_2$. *(0,25đ)*

**b) (0,75 điểm) Tính giá trị của biểu thức $A$:**
- Theo định lý Viète, ta có:
  $$x_1 + x_2 = -\\frac{b}{a} = \\frac{3}{2}; \\quad x_1 x_2 = \\frac{c}{a} = \\frac{-4}{2} = -2$$ *(0,25đ)*
- Biến đổi biểu thức $A$:
  $$A = x_1^2 + x_2^2 + \\frac{1}{2}x_1 + \\frac{1}{2}x_2 = (x_1 + x_2)^2 - 2x_1 x_2 + \\frac{1}{2}(x_1 + x_2)$$ *(0,25đ)*
- Thay số vào:
  $$A = \\left(\\frac{3}{2}\\right)^2 - 2(-2) + \\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{9}{4} + 4 + \\frac{3}{4} = \\frac{12}{4} + 4 = 3 + 4 = 7$$
- Vậy **$A = 7$**. *(0,25đ)*`,
        },
        {
          id: "hcm-bai-3",
          index: 3,
          title: "Bài 3. (1,5 điểm)",
          stem: "Kết quả khảo sát đối với một số bạn học sinh khối 9 về số giờ sử dụng điện thoại trong một ngày được thể hiện qua biểu đồ dưới đây:\n\na) Tính số học sinh đã tham gia cuộc khảo sát.\nb) Chọn ngẫu nhiên một học sinh trong nhóm học sinh được khảo sát. Tính xác suất của biến cố $A$: \"Học sinh được chọn có thời gian sử dụng điện thoại $3$ giờ một ngày\".\nc) Nhà trường khuyến cáo học sinh không nên sử dụng điện thoại nhiều hơn $3$ giờ một ngày. Chọn ngẫu nhiên một học sinh trong nhóm học sinh được khảo sát. Tính xác suất của biến cố $B$: \"Học sinh được chọn đã thực hiện đúng khuyến cáo của nhà trường\".",
          points: 1.5,
          subItems: [
            { key: "a", text: "Tính số học sinh đã tham gia cuộc khảo sát", points: 0.5 },
            { key: "b", text: "Tính xác suất của biến cố A", points: 0.5 },
            { key: "c", text: "Tính xác suất của biến cố B", points: 0.5 },
          ],
          svgDrawing: `<svg viewBox="0 0 540 330" style="background-color: #ffffff; border-radius: 12px;" className="w-full max-w-xl mx-auto h-auto bg-white rounded-xl p-3 border border-slate-300 shadow-md">
  <rect width="100%" height="100%" fill="#ffffff" rx="12" />
  <defs>
    <!-- Pattern sọc chéo xanh lam sắc nét -->
    <pattern id="hatchHcm" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#0284c7" strokeWidth="2.5" />
    </pattern>
  </defs>

  <!-- Tiêu đề biểu đồ -->
  <text x="270" y="24" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
    KHẢO SÁT SỐ GIỜ SỬ DỤNG ĐIỆN THOẠI TRONG
  </text>
  <text x="270" y="42" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
    MỘT NGÀY CỦA HỌC SINH KHỐI 9
  </text>

  <!-- Đường gióng ngang hỗ trợ đọc số liệu -->
  <g stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3">
    <line x1="80" y1="234" x2="480" y2="234" />
    <line x1="80" y1="208" x2="480" y2="208" />
    <line x1="80" y1="182" x2="480" y2="182" />
    <line x1="80" y1="156" x2="480" y2="156" />
    <line x1="80" y1="130" x2="480" y2="130" />
    <line x1="80" y1="104" x2="480" y2="104" />
    <line x1="80" y1="78" x2="480" y2="78" />
  </g>

  <!-- Trục tung (Số học sinh) -->
  <line x1="80" y1="260" x2="80" y2="62" stroke="#0f172a" strokeWidth="2" />
  <polygon points="76,68 80,56 84,68" fill="#0f172a" />
  
  <!-- Trục hoành (Số giờ sử dụng điện thoại) -->
  <line x1="80" y1="260" x2="495" y2="260" stroke="#0f172a" strokeWidth="2" />
  <polygon points="490,256 502,260 490,264" fill="#0f172a" />

  <!-- Nhãn trục tung xoay dọc -->
  <text x="-165" y="32" transform="rotate(-90)" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
    Số học sinh
  </text>

  <!-- Vạch chia & số liệu trục tung -->
  <g fontSize="11" fill="#0f172a" fontWeight="bold" textAnchor="end">
    <text x="72" y="264">0</text>
    <line x1="74" y1="260" x2="80" y2="260" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="238">5</text>
    <line x1="74" y1="234" x2="80" y2="234" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="212">10</text>
    <line x1="74" y1="208" x2="80" y2="208" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="186">15</text>
    <line x1="74" y1="182" x2="80" y2="182" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="160">20</text>
    <line x1="74" y1="156" x2="80" y2="156" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="134">25</text>
    <line x1="74" y1="130" x2="80" y2="130" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="108">30</text>
    <line x1="74" y1="104" x2="80" y2="104" stroke="#0f172a" strokeWidth="1.5" />
    
    <text x="72" y="82">35</text>
    <line x1="74" y1="78" x2="80" y2="78" stroke="#0f172a" strokeWidth="1.5" />
  </g>

  <!-- CÁC CỘT BIỂU ĐỒ (chiều rộng cột: 36px) -->
  <!-- Cột 1: 1 giờ, số HS = 12 -->
  <rect x="120" y="197" width="36" height="63" fill="#e0f2fe" stroke="#0f172a" strokeWidth="2" />
  <rect x="120" y="197" width="36" height="63" fill="url(#hatchHcm)" stroke="none" />
  <text x="138" y="188" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">12</text>
  <text x="138" y="280" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">1</text>

  <!-- Cột 2: 2 giờ, số HS = 28 -->
  <rect x="195" y="114" width="36" height="146" fill="#e0f2fe" stroke="#0f172a" strokeWidth="2" />
  <rect x="195" y="114" width="36" height="146" fill="url(#hatchHcm)" stroke="none" />
  <text x="213" y="105" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">28</text>
  <text x="213" y="280" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">2</text>

  <!-- Cột 3: 3 giờ, số HS = 30 -->
  <rect x="270" y="104" width="36" height="156" fill="#e0f2fe" stroke="#0f172a" strokeWidth="2" />
  <rect x="270" y="104" width="36" height="156" fill="url(#hatchHcm)" stroke="none" />
  <text x="288" y="95" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">30</text>
  <text x="288" y="280" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">3</text>

  <!-- Cột 4: 4 giờ, số HS = 20 -->
  <rect x="345" y="156" width="36" height="104" fill="#e0f2fe" stroke="#0f172a" strokeWidth="2" />
  <rect x="345" y="156" width="36" height="104" fill="url(#hatchHcm)" stroke="none" />
  <text x="363" y="147" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">20</text>
  <text x="363" y="280" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">4</text>

  <!-- Cột 5: 5 giờ, số HS = 10 -->
  <rect x="420" y="208" width="36" height="52" fill="#e0f2fe" stroke="#0f172a" strokeWidth="2" />
  <rect x="420" y="208" width="36" height="52" fill="url(#hatchHcm)" stroke="none" />
  <text x="438" y="199" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">10</text>
  <text x="438" y="280" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">5</text>

  <!-- Nhãn trục hoành -->
  <text x="290" y="308" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold" fontStyle="italic">
    Số giờ sử dụng điện thoại
  </text>
</svg>`,
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 3 (SỞ GD&ĐT TP.HCM):

**a) (0,5 điểm) Tính số học sinh đã tham gia cuộc khảo sát:**
- Số học sinh tham gia khảo sát là:
  $$12 + 28 + 30 + 20 + 10 = 100\\text{ (học sinh)}$$ *(0,5đ)*

**b) (0,5 điểm) Tính xác suất của biến cố $A$:**
- Số học sinh có thời gian sử dụng điện thoại $3$ giờ một ngày là:
  $$n(A) = 30$$ *(0,25đ)*
- Xác suất của biến cố $A$:
  $$P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{30}{100} = \\frac{3}{10} = 0,3$$ *(0,25đ)*

**c) (0,5 điểm) Tính xác suất của biến cố $B$:**
- Nhà trường khuyến cáo học sinh không nên sử dụng điện thoại nhiều hơn $3$ giờ một ngày (nghĩa là sử dụng từ $3$ giờ trở xuống: $1$ giờ, $2$ giờ, $3$ giờ).
- Số học sinh thực hiện đúng khuyến cáo của nhà trường là:
  $$n(B) = 12 + 28 + 30 = 70\\text{ (học sinh)}$$ *(0,25đ)*
- Xác suất của biến cố $B$:
  $$P(B) = \\frac{n(B)}{n(\\Omega)} = \\frac{70}{100} = \\frac{7}{10} = 0,7$$ *(0,25đ)*`,
        },
        {
          id: "hcm-bai-4",
          index: 4,
          title: "Bài 4. (1,0 điểm)",
          stem: "Bác Năm có một mảnh đất hình chữ nhật với chiều rộng $x\\text{ (m)}, (x > 11)$ và chiều dài hơn chiều rộng $9\\text{ (m)}$. Bác Năm dùng một phần đất hình chữ nhật để làm nhà ở như hình vẽ.\n\na) Viết biểu thức thu gọn biểu diễn diện tích phần làm nhà ở theo $x$.\nb) Tìm chiều dài, chiều rộng của mảnh đất, biết diện tích mảnh đất gấp $8$ lần diện tích làm nhà ở.",
          points: 1.0,
          subItems: [
            { key: "a", text: "Viết biểu thức thu gọn biểu diễn diện tích phần làm nhà ở theo x", points: 0.5 },
            { key: "b", text: "Tìm chiều dài, chiều rộng của mảnh đất", points: 0.5 },
          ],
          svgDrawing: `<svg viewBox="0 0 520 290" style="background-color: #ffffff; border-radius: 12px;" className="w-full max-w-lg mx-auto h-auto bg-white rounded-xl p-3 border border-slate-300 shadow-md">
  <rect width="100%" height="100%" fill="#ffffff" rx="12" />
  <defs>
    <!-- Mũi tên hai đầu đen đậm -->
    <marker id="arrowHcmLand" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
  </defs>

  <!-- Tiêu đề hình vẽ -->
  <text x="260" y="20" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
    MẢNH ĐẤT VÀ KHU VỰC LÀM NHÀ Ở CỦA BÁC NĂM
  </text>

  <!-- Mảnh đất lớn hình chữ nhật ABCD -->
  <rect x="70" y="45" width="340" height="195" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.5" />

  <!-- Phần đất làm Nhà ở (hình chữ nhật thụt vào 15m bên trái và 11m bên dưới) -->
  <rect x="210" y="45" width="200" height="105" fill="#fed7aa" stroke="#0f172a" strokeWidth="2.5" />
  <text x="310" y="105" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="bold">Nhà ở</text>

  <!-- Kích thước chiều dài trên đỉnh: x + 9 (m) -->
  <line x1="70" y1="32" x2="410" y2="32" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowHcmLand)" markerEnd="url(#arrowHcmLand)" />
  <text x="240" y="27" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">x + 9 (m)</text>

  <!-- Kích thước chiều rộng bên phải: x (m) -->
  <line x1="428" y1="45" x2="428" y2="240" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowHcmLand)" markerEnd="url(#arrowHcmLand)" />
  <text x="448" y="145" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold" transform="rotate(90, 448, 145)">x (m)</text>

  <!-- Kích thước 15 (m) từ mép trái đến mép nhà -->
  <line x1="70" y1="70" x2="210" y2="70" stroke="#0f172a" strokeWidth="1.5" markerStart="url(#arrowHcmLand)" markerEnd="url(#arrowHcmLand)" />
  <text x="140" y="63" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">15 (m)</text>

  <!-- Kích thước 11 (m) từ mép dưới đến mép nhà -->
  <line x1="345" y1="150" x2="345" y2="240" stroke="#0f172a" strokeWidth="1.5" markerStart="url(#arrowHcmLand)" markerEnd="url(#arrowHcmLand)" />
  <text x="323" y="198" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">11 (m)</text>
</svg>`,
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 4 (SỞ GD&ĐT TP.HCM):

**a) (0,5 điểm) Viết biểu thức thu gọn biểu diễn diện tích nhà ở theo $x$:**
- Chiều dài phần đất làm nhà ở là:
  $$(x + 9) - 15 = x - 6\\text{ (m)}$$
- Chiều rộng phần đất làm nhà ở là:
  $$x - 11\\text{ (m)}$$
- Diện tích phần làm nhà ở theo $x$:
  $$S_{\\text{nhà}} = (x + 9 - 15)(x - 11) = (x - 6)(x - 11) = x^2 - 17x + 66\\text{ (m}^2\\text{)}$$ *(0,5đ)*

**b) (0,5 điểm) Tìm chiều dài, chiều rộng của mảnh đất:**
- Diện tích toàn bộ mảnh đất hình chữ nhật là:
  $$S_{\\text{đất}} = x(x + 9)\\text{ (m}^2\\text{)}$$
- Vì diện tích mảnh đất gấp $8$ lần diện tích làm nhà ở nên ta có phương trình:
  $$x(x + 9) = 8(x^2 - 17x + 66)$$ *(0,25đ)*
  $$\\Leftrightarrow x^2 + 9x = 8x^2 - 136x + 528$$
  $$\\Leftrightarrow 7x^2 - 145x + 528 = 0$$
- Giải phương trình bậc hai:
  $$\\Delta = (-145)^2 - 4(7)(528) = 21025 - 14784 = 6241 = 79^2 > 0$$
  $$x_1 = \\frac{145 + 79}{2 \\cdot 7} = \\frac{224}{14} = 16\\text{ (thỏa mãn điều kiện } x > 11)$$
  $$x_2 = \\frac{145 - 79}{2 \\cdot 7} = \\frac{66}{14} = \\frac{33}{7} \\approx 4,71 < 11\\text{ (loại)}$$
- Chiều rộng mảnh đất là: **$16\\text{ m}$**.
- Chiều dài mảnh đất là: **$16 + 9 = 25\\text{ m}$**. *(0,25đ)*`,
        },
        {
          id: "hcm-bai-5",
          index: 5,
          title: "Bài 5. (1,0 điểm)",
          stem: "Một bình inox có cấu tạo gồm hai phần: phần thân có dạng hình trụ có chiều cao $20\\text{ cm}$ và bán kính đáy là $4\\text{ cm}$, phần nắp có dạng nửa hình cầu có đường kính bằng với đường kính đáy của phần thân.\n\na) Tính thể tích không gian bên trong của cái bình trên nếu bỏ qua độ dày của vỏ bình (làm tròn kết quả đến hàng đơn vị của $\\text{cm}^3$).\nb) Nhà sản xuất muốn phủ một lớp sơn tĩnh điện lên mặt ngoài của vỏ bình (gồm phần thân, phần nắp và đáy bình), giả sử chi phí sơn là $210.000\\text{ đồng/m}^2$. Tính chi phí để sơn một cái bình inox (làm tròn kết quả đến nghìn đồng).\n\n*Biết công thức tính thể tích hình trụ là $V = \\pi R^2 h$, diện tích xung quanh hình trụ là $S = 2\\pi R h$ với $R$ là bán kính đáy và $h$ là chiều cao của hình trụ. Thể tích hình cầu là $V = \\frac{4}{3}\\pi R^3$, diện tích mặt cầu là $S = 4\\pi R^2$ với $R$ là bán kính. Lấy $\\pi = 3,14$.*",
          points: 1.0,
          subItems: [
            { key: "a", text: "Tính thể tích không gian bên trong bình", points: 0.5 },
            { key: "b", text: "Tính chi phí sơn một cái bình inox", points: 0.5 },
          ],
          svgDrawing: `<svg viewBox="0 0 300 360" style="background-color: #ffffff; border-radius: 12px;" className="w-full max-w-xs mx-auto h-auto bg-white rounded-xl p-3 border border-slate-300 shadow-md">
  <rect width="100%" height="100%" fill="#ffffff" rx="12" />
  <defs>
    <!-- Mũi tên hai đầu đen đậm -->
    <marker id="arrowBottle" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
  </defs>

  <!-- Tiêu đề hình vẽ -->
  <text x="150" y="24" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
    BÌNH INOX (NẮP CẦU + THÂN TRỤ)
  </text>

  <!-- Nắp bình: Nửa hình cầu bên trên (tâm 140, 100; R = 60) -->
  <path d="M 80 100 A 60 60 0 0 1 200 100 Z" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
  
  <!-- Bán kính nắp R = 4 cm -->
  <line x1="140" y1="100" x2="200" y2="100" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />
  <circle cx="140" cy="100" r="3" fill="#0f172a" />
  <text x="168" y="93" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">R = 4 cm</text>

  <!-- Thân hình trụ (màu kim loại inox sáng nhạt) -->
  <rect x="80" y="100" width="120" height="180" fill="#f1f5f9" stroke="none" />

  <!-- Elip phân cách giữa nắp và thân -->
  <ellipse cx="140" cy="100" rx="60" ry="14" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="4 3" />

  <!-- Hai đường sinh thẳng đứng của thân hình trụ -->
  <line x1="80" y1="100" x2="80" y2="280" stroke="#0f172a" strokeWidth="2.5" />
  <line x1="200" y1="100" x2="200" y2="280" stroke="#0f172a" strokeWidth="2.5" />

  <!-- Đáy hình trụ: Elip (nửa dưới nét liền, nửa trên nét đứt) -->
  <path d="M 80 280 A 60 14 0 0 0 200 280" fill="none" stroke="#0f172a" strokeWidth="2.5" />
  <path d="M 80 280 A 60 14 0 0 1 200 280" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />

  <!-- Gióng kích thước chiều cao thân trụ 20 cm -->
  <line x1="228" y1="100" x2="228" y2="280" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowBottle)" markerEnd="url(#arrowBottle)" />
  <line x1="200" y1="100" x2="240" y2="100" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
  <line x1="200" y1="280" x2="240" y2="280" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
  <text x="254" y="195" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold" transform="rotate(90, 254, 195)">
    h = 20 cm
  </text>
</svg>`,
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 5 (SỞ GD&ĐT TP.HCM):

**a) (0,5 điểm) Tính thể tích không gian bên trong bình:**
- Thể tích phần thân hình trụ (với $R = 4\\text{ cm}, h = 20\\text{ cm}$):
  $$V_{\\text{thân}} = \\pi R^2 h = \\pi \\cdot 4^2 \\cdot 20 = 320\\pi \\approx 1004,8\\text{ cm}^3$$ *(0,25đ)*
- Thể tích phần nắp (nửa hình cầu có bán kính $R = 4\\text{ cm}$):
  $$V_{\\text{nắp}} = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi R^3 = \\frac{1}{2} \\cdot \\frac{4}{3} \\cdot \\pi \\cdot 4^3 = \\frac{128}{3}\\pi \\approx \\frac{10048}{75}\\text{ cm}^3$$
- Thể tích không gian bên trong cái bình:
  $$V = V_{\\text{thân}} + V_{\\text{nắp}} = 320\\pi + \\frac{128}{3}\\pi = \\frac{1088}{3}\\pi = \\frac{1088}{3} \\times 3,14 \\approx 1138,8\\text{ cm}^3 \\approx 1139\\text{ cm}^3$$ *(0,25đ)*
- **Đáp số:** Thể tích của cái bình là khoảng **$1139\\text{ cm}^3$**.

**b) (0,5 điểm) Tính chi phí sơn một cái bình inox:**
- Diện tích bề mặt phần nắp (nửa diện tích mặt cầu):
  $$S_{\\text{nắp}} = \\frac{1}{2} \\cdot 4\\pi R^2 = \\frac{1}{2} \\cdot 4\\pi \\cdot 4^2 = 32\\pi = 100,48\\text{ cm}^2$$
- Diện tích xung quanh phần thân hình trụ:
  $$S_{\\text{xq}} = 2\\pi R h = 2\\pi \\cdot 4 \\cdot 20 = 160\\pi = 502,4\\text{ cm}^2$$
- Diện tích đáy bình (hình tròn bán kính $R = 4\\text{ cm}$):
  $$S_{\\text{đáy}} = \\pi R^2 = \\pi \\cdot 4^2 = 16\\pi = 50,24\\text{ cm}^2$$
- Tổng diện tích bề mặt cần sơn:
  $$S = S_{\\text{nắp}} + S_{\\text{xq}} + S_{\\text{đáy}} = 32\\pi + 160\\pi + 16\\pi = 208\\pi = 653,12\\text{ cm}^2$$ *(0,25đ)*
- Đổi đơn vị chi phí sơn:
  $$210.000\\text{ đồng/m}^2 = \\frac{210.000}{10.000} = 21\\text{ đồng/cm}^2$$
- Chi phí để sơn một cái bình inox là khoảng:
  $$208\\pi \\cdot 21 = 4368\\pi = 4368 \\times 3,14 = 13715,52\\text{ đồng} \\approx 14.000\\text{ đồng}$$ *(0,25đ)*
- **Đáp số:** Chi phí sơn một cái bình inox là khoảng **$14.000$ đồng**.`,
        },
        {
          id: "hcm-bai-6",
          index: 6,
          title: "Bài 6. (1,0 điểm)",
          stem: "Hai đội $A$ và $B$ dự kiến cùng làm chung và xong công việc trong một số ngày. Nếu đội $A$ làm $\\frac{1}{3}$ công việc rồi đội $B$ làm phần còn lại thì chậm hơn so với dự kiến $6$ ngày. Nếu đội $B$ làm $\\frac{1}{3}$ công việc rồi đội $A$ làm phần còn lại thì chậm hơn so với dự kiến $4$ ngày. Hỏi hai đội $A$ và $B$ dự kiến cùng làm chung và xong công việc này trong bao nhiêu ngày? (Giả sử năng suất của hai đội $A$ và $B$ là không đổi).",
          points: 1.0,
          subItems: [
            { key: "1", text: "Lập phương trình / hệ phương trình giải bài toán năng suất", points: 1.0 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 6 (SỞ GD&ĐT TP.HCM):

- Gọi $x, y$ lần lượt là số ngày làm một mình xong công việc của đội $A$ và đội $B$ ($x, y > 0$).
- Trong $1$ ngày, đội $A$ làm được $\\frac{1}{x}$ (công việc), đội $B$ làm được $\\frac{1}{y}$ (công việc).
- Cả hai đội cùng làm trong $1$ ngày được: $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy}$ (công việc).
- Số ngày dự kiến làm xong công việc nếu cả $2$ đội cùng làm là:
  $$\\frac{1}{\\frac{1}{x} + \\frac{1}{y}} = \\frac{xy}{x + y}\\text{ (ngày)}$$ *(0,25đ)*
- **Trường hợp 1:** Đội $A$ làm $\\frac{1}{3}$ công việc (hết $\\frac{x}{3}$ ngày), đội $B$ làm phần còn lại $\\frac{2}{3}$ công việc (hết $\\frac{2y}{3}$ ngày), thời gian chậm hơn dự kiến $6$ ngày:
  $$\\frac{x}{3} + \\frac{2}{3}y = \\frac{xy}{x + y} + 6 \\quad (1)$$
- **Trường hợp 2:** Đội $B$ làm $\\frac{1}{3}$ công việc (hết $\\frac{y}{3}$ ngày), đội $A$ làm phần còn lại $\\frac{2}{3}$ công việc (hết $\\frac{2x}{3}$ ngày), thời gian chậm hơn dự kiến $4$ ngày:
  $$\\frac{y}{3} + \\frac{2}{3}x = \\frac{xy}{x + y} + 4 \\quad (2)$$ *(0,25đ)*
- Lấy phương trình $(1)$ trừ phương trình $(2)$ vế theo vế:
  $$\\left(\\frac{x}{3} + \\frac{2y}{3}\\right) - \\left(\\frac{y}{3} + \\frac{2x}{3}\\right) = \\left(\\frac{xy}{x+y} + 6\\right) - \\left(\\frac{xy}{x+y} + 4\\right)$$
  $$\\Leftrightarrow \\frac{y - x}{3} = 2 \\Leftrightarrow y - x = 6 \\Leftrightarrow y = x + 6$$
- Thế $y = x + 6$ vào $(1)$:
  $$\\frac{x}{3} + \\frac{2(x + 6)}{3} = \\frac{x(x + 6)}{x + (x + 6)} + 6$$ *(0,25đ)*
  $$\\Leftrightarrow \\frac{3x + 12}{3} = \\frac{x(x + 6)}{2x + 6} + 6$$
  $$\\Leftrightarrow x + 4 = \\frac{x^2 + 6x + 6(2x + 6)}{2x + 6}$$
  $$\\Leftrightarrow x + 4 = \\frac{x^2 + 18x + 36}{2x + 6}$$
  $$\\Leftrightarrow (x + 4)(2x + 6) = x^2 + 18x + 36$$
  $$\\Leftrightarrow 2x^2 + 14x + 24 = x^2 + 18x + 36$$
  $$\\Leftrightarrow x^2 - 4x - 12 = 0$$
- Giải phương trình bậc hai:
  $$\\Delta' = (-2)^2 - 1(-12) = 4 + 12 = 16 > 0 \\Rightarrow \\sqrt{\\Delta'} = 4$$
  $$x_1 = 2 + 4 = 6\\text{ (thỏa mãn } x > 0)$$
  $$x_2 = 2 - 4 = -2\\text{ (loại vì } x > 0)$$
- Với $x = 6 \\Rightarrow y = 6 + 6 = 12$.
- Số ngày hai đội $A$ và $B$ dự kiến cùng làm chung và xong công việc:
  $$\\frac{xy}{x + y} = \\frac{6 \\cdot 12}{6 + 12} = \\frac{72}{18} = 4\\text{ (ngày)}$$ *(0,25đ)*
- **Kết luận:** Hai đội dự kiến cùng làm chung và xong công việc này trong **$4$ ngày**.`,
        },
        {
          id: "hcm-bai-7",
          index: 7,
          title: "Bài 7. (3,0 điểm)",
          stem: "Cho tam giác $ABC$ nhọn nội tiếp đường tròn $(O; R)$ ($AB < AC$) có các đường cao $AD, BE, CF$ cắt nhau tại $H$.\n\na) Chứng minh tứ giác $BFEC$ nội tiếp.\nb) Kẻ đường kính $AK$ của đường tròn $(O)$.\n   Chứng minh $\\Delta ABD$ đồng dạng $\\Delta AKC$ và $AF \\cdot AK = AH \\cdot AC$.\nc) Gọi $I$ là giao điểm của $EF$ và $AH$; $J$ là giao điểm của $AK$ và $BC$.\n   i) Chứng minh $HK \\parallel IJ$.\n   ii) Biết $\\widehat{BAC} = 60^\\circ, \\widehat{ACB} = 45^\\circ$, tính diện tích tam giác $IHJ$ theo $R$.",
          points: 3.0,
          subItems: [
            { key: "a", text: "Chứng minh tứ giác BFEC nội tiếp", points: 1.0 },
            { key: "b", text: "Chứng minh tam giác ABD đồng dạng tam giác AKC và AF.AK = AH.AC", points: 1.0 },
            { key: "ci", text: "Chứng minh HK // IJ", points: 0.5 },
            { key: "cii", text: "Tính diện tích tam giác IHJ theo R", points: 0.5 },
          ],
          solutionGuide: `### HƯỚNG DẪN CHẤM & ĐÁP ÁN BÀI 7 (SỞ GD&ĐT TP.HCM):

*Lưu ý theo quy chế chấm thi: Thí sinh phải tự vẽ hình vào bài làm. Nếu không vẽ hình hoặc vẽ hình sai thì không chấm điểm bài hình.*

**a) (1,0 điểm) Chứng minh tứ giác $BFEC$ nội tiếp:**
- Vì $BE$ là đường cao của $\\Delta ABC$ nên $BE \\perp AC \\Rightarrow \\widehat{BEC} = 90^\\circ$.
  Suy ra $\\Delta BEC$ vuông tại $E \\Rightarrow B, E, C$ cùng thuộc đường tròn đường kính $BC$. (1) *(0,5đ)*
- Vì $CF$ là đường cao của $\\Delta ABC$ nên $CF \\perp AB \\Rightarrow \\widehat{BFC} = 90^\\circ$.
  Suy ra $\\Delta BFC$ vuông tại $F \\Rightarrow B, F, C$ cùng thuộc đường tròn đường kính $BC$. (2)
- Từ (1) và (2) suy ra $B, F, E, C$ cùng thuộc một đường tròn hay **tứ giác $BFEC$ nội tiếp**. *(0,5đ)*

**b) (1,0 điểm) Chứng minh $\\Delta ABD \\sim \\Delta AKC$ và $AF \\cdot AK = AH \\cdot AC$:**
- Ta có: $\\widehat{ACK} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn đường kính $AK$). *(0,25đ)*
- Xét $\\Delta ABD$ và $\\Delta AKC$, ta có:
  - $\\widehat{ABD} = \\widehat{AKC}$ (hai góc nội tiếp cùng chắn cung nhỏ $\\overparen{AC}$).
  - $\\widehat{ADB} = \\widehat{ACK} = 90^\\circ$.
  - Suy ra $\\Delta ABD \\sim \\Delta AKC$ (g-g). *(0,25đ)*
  - Suy ra $\\widehat{BAD} = \\widehat{KAC}$.
- Xét $\\Delta AFH$ và $\\Delta ACK$, ta có:
  - $\\widehat{FAH} = \\widehat{CAK}$ (chứng minh trên, vì $H \\in AD$ và $F \\in AB$).
  - $\\widehat{AFH} = \\widehat{ACK} = 90^\\circ$.
  - Suy ra $\\Delta AFH \\sim \\Delta ACK$ (g-g). *(0,25đ)*
  - Suy ra $\\frac{AF}{AC} = \\frac{AH}{AK} \\quad (3)$
  - Do đó: **$AF \\cdot AK = AH \\cdot AC$**. *(0,25đ)*

**c) (1,0 điểm)**
**i) (0,5 điểm) Chứng minh $HK \\parallel IJ$:**
- Vì tứ giác $BFEC$ nội tiếp nên $\\widehat{AFI} = \\widehat{ACJ}$ (cùng bù với $\\widehat{BFE}$).
- Xét $\\Delta AFI$ và $\\Delta ACJ$, ta có:
  - $\\widehat{AFI} = \\widehat{ACJ}$ (chứng minh trên).
  - $\\widehat{FAI} = \\widehat{CAJ}$ (chứng minh ở câu b: $\\widehat{BAD} = \\widehat{KAC}$).
  - Suy ra $\\Delta AFI \\sim \\Delta ACJ$ (g-g).
  - Suy ra tỉ số đồng dạng: $\\frac{AF}{AC} = \\frac{AI}{AJ} \\quad (4)$ *(0,25đ)*
- Từ (3) và (4), ta có:
  $$\\frac{AH}{AK} = \\frac{AI}{AJ} \\Leftrightarrow \\frac{AI}{AH} = \\frac{AJ}{AK}$$
- Xét $\\Delta AHK$ có $\\frac{AI}{AH} = \\frac{AJ}{AK}$ (với $I \\in AH, J \\in AK$).
  Theo định lý Ta-lét đảo trong $\\Delta AHK$, suy ra: **$HK \\parallel IJ$** (đpcm). *(0,25đ)*

**ii) (0,5 điểm) Biết $\\widehat{BAC} = 60^\\circ, \\widehat{ACB} = 45^\\circ$, tính diện tích tam giác $IHJ$ theo $R$:**
- Do $\\widehat{ACB} = 45^\\circ$ là góc nội tiếp chắn cung $\\overparen{AB}$, suy ra góc ở tâm:
  $$\\widehat{AOB} = 2\\widehat{ACB} = 2 \\times 45^\\circ = 90^\\circ$$
  Suy ra $\\Delta AOB$ vuông cân tại $O \\Rightarrow AB = R\\sqrt{2}$.
- Trong tam giác vuông $ABE$ vuông tại $E$ có $\\widehat{BAC} = 60^\\circ$:
  $$BE = AB \\cdot \\sin 60^\\circ = R\\sqrt{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{R\\sqrt{6}}{2}$$
  Tam giác $BEC$ vuông tại $E$ có $\\widehat{ACB} = 45^\\circ$ nên $\\Delta BEC$ vuông cân tại $E$:
  $$EC = BE = \\frac{R\\sqrt{6}}{2}$$
- Ta có: $AE = AB \\cdot \\cos 60^\\circ = R\\sqrt{2} \\cdot \\frac{1}{2} = \\frac{R\\sqrt{2}}{2}$.
  Suy ra độ dài cạnh $AC$:
  $$AC = AE + EC = \\frac{R\\sqrt{2}}{2} + \\frac{R\\sqrt{6}}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{2}R$$ *(0,25đ)*
- Tam giác $ADC$ vuông tại $D$ có $\\widehat{C} = 45^\\circ$ nên $\\Delta ADC$ vuông cân tại $D$:
  $$AD = DC = AC \\cdot \\cos 45^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{2}R \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{3} + 1}{2}R$$
- Ta có:
  $$\\widehat{BAD} = \\widehat{BAC} - \\widehat{DAC} = 60^\\circ - 45^\\circ = 15^\\circ$$
  $$\\Rightarrow \\widehat{CAK} = \\widehat{BAD} = 15^\\circ$$
  $$\\Rightarrow \\widehat{DAJ} = \\widehat{BAC} - \\widehat{BAD} - \\widehat{CAK} = 60^\\circ - 15^\\circ - 15^\\circ = 30^\\circ$$
- Trong $\\Delta ADJ$ vuông tại $D$:
  $$DJ = AD \\cdot \\tan 30^\\circ = \\frac{\\sqrt{3} + 1}{2}R \\cdot \\frac{\\sqrt{3}}{3} = \\frac{3 + \\sqrt{3}}{6}R$$
  $$AJ = \\frac{AD}{\\cos 30^\\circ} = \\frac{\\frac{\\sqrt{3} + 1}{2}R}{\\frac{\\sqrt{3}}{2}} = \\frac{3 + \\sqrt{3}}{3}R$$
- Tam giác $AHE$ vuông tại $E$ có $\\widehat{AHE} = 45^\\circ$ (vì $\\widehat{AHE} = \\widehat{C} = 45^\\circ$ do cùng phụ $\\widehat{DAC}$):
  $$AH = \\frac{AE}{\\cos 45^\\circ} = \\frac{\\frac{R\\sqrt{2}}{2}}{\\frac{\\sqrt{2}}{2}} = R$$
- Do $HK \\parallel IJ \\Rightarrow \\frac{AI}{AH} = \\frac{AJ}{AK} \\Rightarrow AI = \\frac{AH \\cdot AJ}{AK}$ (với $AK = 2R$ là đường kính):
  $$AI = \\frac{R \\cdot \\frac{3 + \\sqrt{3}}{3}R}{2R} = \\frac{3 + \\sqrt{3}}{6}R$$
- Suy ra đoạn $IH$:
  $$IH = AH - AI = R - \\frac{3 + \\sqrt{3}}{6}R = \\frac{6 - (3 + \\sqrt{3})}{6}R = \\frac{3 - \\sqrt{3}}{6}R$$
- Vì $AD \\perp BC$ tại $D$ và $J \\in BC$ nên đường cao hạ từ $J$ xuống đường thẳng $AH$ (chính là đường thẳng $AD$) chính là độ dài đoạn $DJ$.
- Do đó diện tích tam giác $IHJ$ là:
  $$S_{\\Delta IHJ} = \\frac{1}{2} \\cdot DJ \\cdot IH = \\frac{1}{2} \\cdot \\left(\\frac{3 + \\sqrt{3}}{6}R\\right) \\cdot \\left(\\frac{3 - \\sqrt{3}}{6}R\\right)$$
  $$S_{\\Delta IHJ} = \\frac{1}{2} \\cdot \\frac{3^2 - (\\sqrt{3})^2}{36}R^2 = \\frac{1}{2} \\cdot \\frac{9 - 3}{36}R^2 = \\frac{1}{2} \\cdot \\frac{6}{36}R^2 = \\frac{1}{2} \\cdot \\frac{1}{6}R^2 = \\frac{R^2}{12}$$ *(0,25đ)*
- **Kết luận:** Diện tích tam giác $IHJ$ bằng **$\\frac{R^2}{12}$**.`,
        },
      ],
    },
  },
};

