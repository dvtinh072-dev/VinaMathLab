/**
 * CƠ SỞ DỮ LIỆU TƯ LIỆU TOÁN HỌC CHUẨN MỰC CHO TRỢ LÝ AI VINA
 * Nguồn tư liệu: 
 * - Bộ Giáo dục và Đào tạo (Chương trình GDPT 2018)
 * - Sách giáo khoa "Kết nối tri thức với cuộc sống" (Toán 6, 7, 8, 9, 10, 11, 12)
 * - Cổng thông tin điện tử Bộ GD&ĐT (moet.gov.vn)
 * - Viện Nghiên cứu Cao cấp về Toán (VIASM - viasm.edu.vn)
 * - Tạp chí Toán học & Tuổi trẻ (NXB Giáo Dục Việt Nam)
 * - Thư viện học liệu số quốc gia VinaMath
 */

export interface KnowledgeItem {
  id: string;
  keywords: string[];
  topic: string;
  grade: number; // 6, 7, 8, 9, 10, 11, 12 hoặc 0 (chung)
  questionVariants: string[];
  summary: string;
  officialContent: string;
  formulaLatex?: string;
  standardSteps?: string[];
  sourceName: string;
  sourceUrl?: string;
  sourceCitation: string;
}

export const EDUCATIONAL_KNOWLEDGE_BASE: KnowledgeItem[] = [
  // =================== TOÁN 6 ===================
  {
    id: "kb-t6-tap-hop",
    keywords: ["tập hợp", "phan tu", "thuoc", "khong thuoc", "tap hop con", "tap rong", "liet ke", "tinh chat dac trung"],
    topic: "Tập hợp & Phần tử của tập hợp",
    grade: 6,
    questionVariants: [
      "tập hợp là gì",
      "thế nào là một tập hợp",
      "cách viết tập hợp",
      "kí hiệu thuộc và không thuộc",
      "tập rỗng là gì"
    ],
    summary: "Tập hợp là khái niệm cơ bản của toán học gồm các đối tượng được xác định rõ ràng.",
    officialContent: `1. Khái niệm: Tập hợp (thường đặt tên bằng chữ in hoa $A, B, C, X...$) gồm các phần tử xác định rõ ràng.
2. Cách cho một tập hợp:
- Cách 1: Liệt kê các phần tử trong dấu ngoặc nhọn $\\{\\}$, mỗi phần tử chỉ viết 1 lần, cách nhau bởi dấu chấm phẩy (;). Ví dụ: $A = \\{0; 1; 2; 3\\}$.
- Cách 2: Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp. Ví dụ: $A = \\{x \\in \\mathbb{N} \\mid x < 4\\}$.
3. Kí hiệu:
- $x \\in A$: Phần tử $x$ thuộc tập hợp $A$.
- $y \\notin A$: Phần tử $y$ không thuộc tập hợp $A$.
- $\\emptyset$: Tập hợp không chứa phần tử nào gọi là tập rỗng.`,
    formulaLatex: "x \\in A, \\ y \\notin A, \\ A = \\{x \\in \\mathbb{N} \\mid P(x)\\}",
    standardSteps: [
      "Bước 1: Xác định rõ tính chất hoặc danh sách đối tượng cần đưa vào tập hợp.",
      "Bước 2: Đặt tên tập hợp bằng chữ cái in hoa (ví dụ: $A$).",
      "Bước 3: Viết các phần tử vào giữa cặp dấu ngoặc nhọn $\\{\\}$, ngăn cách bởi dấu chấm phẩy (;)."
    ],
    sourceName: "SGK Toán 6 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 6 (Tập 1), Chương I: Tập hợp các số tự nhiên, Bài 1 (Trang 6 - 8), NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t6-chia-het",
    keywords: ["chia het", "dau hieu chia het", "uoc", "boi", "ucln", "bcnn", "so nguyen to", "hop so"],
    topic: "Tính chất chia hết, Số nguyên tố, ƯCLN & BCNN",
    grade: 6,
    questionVariants: [
      "dấu hiệu chia hết cho 2 3 5 9",
      "thế nào là số nguyên tố",
      "cách tìm ucln",
      "cách tìm bcnn",
      "hợp số là gì"
    ],
    summary: "Dấu hiệu chia hết, phân biệt số nguyên tố - hợp số, phương pháp phân tích ra thừa số nguyên tố để tìm ƯCLN và BCNN.",
    officialContent: `1. Dấu hiệu chia hết:
- Chia hết cho 2: Chữ số tận cùng là chữ số chẵn: 0, 2, 4, 6, 8.
- Chia hết cho 5: Chữ số tận cùng là 0 hoặc 5.
- Chia hết cho 3 (hoặc 9): Tổng các chữ số chia hết cho 3 (hoặc 9).
2. Số nguyên tố & Hợp số:
- Số nguyên tố: Số tự nhiên lớn hơn 1, chỉ có đúng 2 ước là 1 và chính nó ($2, 3, 5, 7, 11, 13...$). Số 2 là số nguyên tố chẵn duy nhất.
- Hợp số: Số tự nhiên lớn hơn 1, có nhiều hơn 2 ước.
- Số 0 và số 1 không phải là số nguyên tố, cũng không phải là hợp số.
3. Quy tắc tìm ƯCLN và BCNN:
- ƯCLN: Lập tích các thừa số nguyên tố CHUNG với số mũ NHỎ NHẤT.
- BCNN: Lập tích các thừa số nguyên tố CHUNG VÀ RIÊNG với số mũ LỚN NHẤT.`,
    formulaLatex: "\\text{ƯCLN}(a, b) \\cdot \\text{BCNN}(a, b) = a \\cdot b",
    standardSteps: [
      "Bước 1: Phân tích mỗi số $a, b$ ra thừa số nguyên tố.",
      "Bước 2: Chọn ra các thừa số nguyên tố chung (cho ƯCLN) hoặc chung và riêng (cho BCNN).",
      "Bước 3: Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ nhỏ nhất (cho ƯCLN) hoặc lớn nhất (cho BCNN)."
    ],
    sourceName: "SGK Toán 6 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 6 (Tập 1), Chương II: Tính chia hết trong tập hợp các số tự nhiên, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t6-so-nguyen",
    keywords: ["so nguyen", "tap hop z", "so nguyen am", "so nguyen duong", "cong tru so nguyen", "nhan chia so nguyen", "quy tac dau ngoac"],
    topic: "Tập hợp các số nguyên $\\mathbb{Z}$ & Quy tắc tính",
    grade: 6,
    questionVariants: [
      "tập hợp số nguyên gồm những gì",
      "cách cộng hai số nguyên khác dấu",
      "quy tắc dấu ngoặc",
      "nhân hai số nguyên âm"
    ],
    summary: "Tập hợp $\\mathbb{Z}$, quy tắc cộng, trừ, nhân, chia số nguyên và quy tắc bỏ dấu ngoặc.",
    officialContent: `1. Tập hợp số nguyên: $\\mathbb{Z} = \\{...; -3; -2; -1; 0; 1; 2; 3; ...\\}$. Gồm các số nguyên âm, số 0 và các số nguyên dương.
2. Quy tắc cộng trừ:
- Cộng hai số nguyên cùng dấu: Cộng phần số tự nhiên, đặt dấu chung trước kết quả. Ví dụ: $(-3) + (-5) = -(3 + 5) = -8$.
- Cộng hai số nguyên khác dấu: Lấy số lớn hơn trừ số bé hơn, đặt dấu của số có giá trị tuyệt đối lớn hơn. Ví dụ: $(-8) + 5 = -(8 - 5) = -3$.
3. Quy tắc nhân chia dấu:
- Cùng dấu ra DƯƠNG (+): $(+) \\cdot (+) = (+); \\ (-) \\cdot (-) = (+)$.
- Khác dấu ra ÂM (-): $(+) \\cdot (-) = (-); \\ (-) \\cdot (+) = (-)$.
4. Quy tắc dấu ngoặc:
- Đằng trước ngoặc có dấu '+': Giữ nguyên dấu các số hạng trong ngoặc.
- Đằng trước ngoặc có dấu '-': Đổi dấu toàn bộ các số hạng bên trong ngoặc: '+' thành '-', '-' thành '+'.`,
    formulaLatex: "-(a + b - c) = -a - b + c",
    standardSteps: [
      "Bước 1: Xác định dấu của các số hạng hoặc dấu trước ngoặc.",
      "Bước 2: Áp dụng quy tắc cộng cùng dấu/khác dấu hoặc quy tắc phá ngoặc đổi dấu.",
      "Bước 3: Nhóm các số hạng đối nhau hoặc số tròn chục để tính nhanh hợp lý."
    ],
    sourceName: "SGK Toán 6 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 6 (Tập 1), Chương III: Số nguyên, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 7 ===================
  {
    id: "kb-t7-so-huu-ti",
    keywords: ["so huu ti", "tap hop q", "so vo ti", "so thuc", "tap hop r", "gia tri tuyet doi", "luy thua"],
    topic: "Số hữu tỉ, Số vô tỉ & Số thực $\\mathbb{R}$",
    grade: 7,
    questionVariants: [
      "số hữu tỉ là gì",
      "phân biệt số hữu tỉ và vô tỉ",
      "số thực là gì",
      "căn bậc hai số học"
    ],
    summary: "Định nghĩa số hữu tỉ $\\mathbb{Q}$, số vô tỉ $\\mathbb{I}$ và tập hợp số thực $\\mathbb{R}$, căn bậc hai số học.",
    officialContent: `1. Số hữu tỉ: Là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$. Tập hợp các số hữu tỉ kí hiệu là $\\mathbb{Q}$.
2. Số vô tỉ: Là số viết được dưới dạng số thập phân vô hạn không tuần hoàn (ví dụ: $\\sqrt{2} \\approx 1.414..., \\pi \\approx 3.14159...$).
3. Số thực: Tập hợp số thực $\\mathbb{R}$ bao gồm cả số hữu tỉ và số vô tỉ ($\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$).
4. Căn bậc hai số học: Căn bậc hai số học của số $a$ không âm ($a \\ge 0$) là số $x \\ge 0$ sao cho $x^2 = a$, kí hiệu $\\sqrt{a}$.`,
    formulaLatex: "x = \\frac{a}{b} \\ (a, b \\in \\mathbb{Z}, b \\neq 0), \\ \\sqrt{a} = x \\iff x \\ge 0 \\text{ và } x^2 = a",
    sourceName: "SGK Toán 7 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 7 (Tập 1), Chương I: Số hữu tỉ & Chương II: Số thực, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t7-tam-giac-bang-nhau",
    keywords: ["tam giac bang nhau", "c-c-c", "c-g-c", "g-c-g", "tam giac can", "tam giac deu", "duong trung truc"],
    topic: "Các trường hợp bằng nhau của tam giác & Tam giác cân",
    grade: 7,
    questionVariants: [
      "ba trường hợp bằng nhau của tam giác",
      "tam giác cân là gì",
      "tính chất tam giác đều",
      "đường trung trực của đoạn thẳng"
    ],
    summary: "Ba trường hợp bằng nhau của tam giác thường (c.c.c, c.g.c, g.c.g), các trường hợp của tam giác vuông và tính chất tam giác cân.",
    officialContent: `1. Ba trường hợp bằng nhau của hai tam giác:
- Cạnh - Cạnh - Cạnh (c.c.c): Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.
- Cạnh - Góc - Cạnh (c.g.c): Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia.
- Góc - Cạnh - Góc (g.c.g): Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia.
2. Tam giác cân:
- Định nghĩa: Tam giác có hai cạnh bằng nhau.
- Tính chất: Trong tam giác cân, hai góc ở đáy bằng nhau. $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.
- Dấu hiệu nhận biết: Tam giác có 2 cạnh bằng nhau HOẶC có 2 góc bằng nhau là tam giác cân.`,
    formulaLatex: "\\Delta ABC = \\Delta A'B'C' \\iff AB = A'B', BC = B'C', CA = C'A'",
    sourceName: "SGK Toán 7 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 7 (Tập 2), Chương IV: Tam giác bằng nhau, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 8 ===================
  {
    id: "kb-t8-hang-dang-thuc",
    keywords: ["hang dang thuc", "7 hang dang thuc dang nho", "binh phuong mot tong", "binh phuong mot hieu", "hieu hai binh phuong", "lap phuong"],
    topic: "7 Hằng đẳng thức đáng nhớ",
    grade: 8,
    questionVariants: [
      "7 hằng đẳng thức đáng nhớ là gì",
      "công thức bình phương một tổng",
      "hiệu hai bình phương",
      "tổng hai lập phương"
    ],
    summary: "Trọn bộ 7 hằng đẳng thức đáng nhớ trong đại số lớp 8 và các hệ quả biến đổi quan trọng.",
    officialContent: `1. $(A + B)^2 = A^2 + 2AB + B^2$ (Bình phương của một tổng)
2. $(A - B)^2 = A^2 - 2AB + B^2$ (Bình phương của một hiệu)
3. $A^2 - B^2 = (A - B)(A + B)$ (Hiệu hai bình phương)
4. $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$ (Lập phương của một tổng)
5. $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$ (Lập phương của một hiệu)
6. $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ (Tổng hai lập phương)
7. $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$ (Hiệu hai lập phương)`,
    formulaLatex: "A^2 - B^2 = (A - B)(A + B), \\ A^3 \\pm B^3 = (A \\pm B)(A^2 \\mp AB + B^2)",
    sourceName: "SGK Toán 8 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 8 (Tập 1), Chương II: Hằng đẳng thức đáng nhớ và ứng dụng, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t8-dinh-ly-thales",
    keywords: ["dinh ly thales", "thales", "dinh ly ta let", "tam giac dong dang", "ti so dong dang"],
    topic: "Định lý Thalès & Tam giác đồng dạng",
    grade: 8,
    questionVariants: [
      "định lý thales phát biểu thế nào",
      "định lý thales đảo",
      "các trường hợp đồng dạng của tam giác"
    ],
    summary: "Định lý Thalès trong tam giác, định lý đảo, hệ quả và 3 trường hợp đồng dạng của tam giác.",
    officialContent: `1. Định lý Thalès thuận: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.
- Nếu $MN \\parallel BC$ ($M \\in AB, N \\in AC$) thì $\\frac{AM}{AB} = \\frac{AN}{AC}$ hoặc $\\frac{AM}{MB} = \\frac{AN}{NC}$.
2. Hệ quả định lý Thalès: Nếu một đường thẳng cắt hai cạnh của một tam giác và song song với cạnh còn lại thì nó tạo thành một tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh của tam giác đã cho: $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$.
3. Tam giác đồng dạng: $\\Delta A'B'C' \\sim \\Delta ABC$ nếu các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ.`,
    formulaLatex: "\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC} \\ (MN \\parallel BC)",
    sourceName: "SGK Toán 8 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 8 (Tập 2), Chương IV: Định lý Thalès, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 9 ===================
  {
    id: "kb-t9-can-thuc",
    keywords: ["can bac hai", "can thuc bac hai", "dieu kien xac dinh", "hang dang thuc can", "truc can thuc o mau"],
    topic: "Căn bậc hai & Căn thức bậc hai",
    grade: 9,
    questionVariants: [
      "điều kiện xác định của căn bậc hai",
      "căn a bình phương bằng gì",
      "cách trục căn thức ở mẫu"
    ],
    summary: "Điều kiện xác định của $\\sqrt{A}$, hằng đẳng thức $\\sqrt{A^2} = |A|$ và các phép biến đổi căn thức.",
    officialContent: `1. Điều kiện xác định: Căn thức $\\sqrt{A}$ có nghĩa (xác định) khi và chỉ khi $A \\ge 0$.
2. Hằng đẳng thức: $\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{khi } A \\ge 0 \\\\ -A & \\text{khi } A < 0 \\end{cases}$.
3. Khai phương một tích và một thương:
- $\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}$ ($A, B \\ge 0$).
- $\\sqrt{\\frac{A}{B}} = \\frac{\\sqrt{A}}{\\sqrt{B}}$ ($A \\ge 0, B > 0$).
4. Trục căn thức ở mẫu:
- $\\frac{C}{\\sqrt{A}} = \\frac{C\\sqrt{A}}{A}$ ($A > 0$).
- $\\frac{C}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{C(\\sqrt{A} \\mp \\sqrt{B})}{A - B}$ ($A, B \\ge 0, A \\neq B$).`,
    formulaLatex: "\\sqrt{A^2} = |A|, \\ \\sqrt{A} \\text{ có nghĩa } \\iff A \\ge 0",
    sourceName: "SGK Toán 9 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống (Chương trình mới)",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 9 (Tập 1), Chương III: Căn bậc hai và căn bậc ba, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t9-phuong-trinh-bac-hai-viet",
    keywords: ["phuong trinh bac hai", "delta", "dinh ly viet", "nghiem kep", "hai nghiem phan biet"],
    topic: "Phương trình bậc hai một ẩn & Hệ thức Viète",
    grade: 9,
    questionVariants: [
      "công thức nghiệm phương trình bậc hai",
      "tính delta",
      "định lý viet",
      "dấu của nghiệm phương trình bậc hai"
    ],
    summary: "Công thức nghiệm tổng quát qua biệt thức $\\Delta = b^2 - 4ac$ và hệ thức Viète $S, P$.",
    officialContent: `1. Phương trình bậc hai: $ax^2 + bx + c = 0$ ($a \\neq 0$).
Biệt thức: $\\Delta = b^2 - 4ac$.
- Nếu $\\Delta > 0$: Phương trình có 2 nghiệm phân biệt: $x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.
- Nếu $\\Delta = 0$: Phương trình có nghiệm kép: $x_1 = x_2 = -\\frac{b}{2a}$.
- Nếu $\\Delta < 0$: Phương trình vô nghiệm.
2. Hệ thức Viète: Nếu phương trình có hai nghiệm $x_1, x_2$ thì:
- Tổng hai nghiệm: $S = x_1 + x_2 = -\\frac{b}{a}$.
- Tích hai nghiệm: $P = x_1 x_2 = \\frac{c}{a}$.`,
    formulaLatex: "\\Delta = b^2 - 4ac, \\ x_1 + x_2 = -\\frac{b}{a}, \\ x_1 x_2 = \\frac{c}{a}",
    sourceName: "SGK Toán 9 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống (Chương trình mới)",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 9 (Tập 2), Chương VI: Phương trình bậc hai một ẩn và định lý Viète, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 10 ===================
  {
    id: "kb-t10-menh-de-tap-hop",
    keywords: ["menh de", "menh de chua bien", "menh de phu dinh", "menh de keo theo", "tuong duong", "moi", "ton tai", "khoang", "doan"],
    topic: "Mệnh đề logic, Kí hiệu $\\forall, \\exists$ & Các tập hợp số",
    grade: 10,
    questionVariants: [
      "mệnh đề là gì",
      "phủ định của mệnh đề với mọi tồn tại",
      "mệnh đề kéo theo p suy ra q",
      "các tập con của tập số thực"
    ],
    summary: "Khái niệm mệnh đề logic toán học, quy tắc phủ định với $\\forall, \\exists$ và các khoảng, đoạn, nửa khoảng trên $\\mathbb{R}$.",
    officialContent: `1. Mệnh đề: Một câu khẳng định có tính đúng hoặc sai rõ ràng. Một mệnh đề không thể vừa đúng vừa sai.
2. Mệnh đề phủ định $\\overline{P}$: Nếu $P$ đúng thì $\\overline{P}$ sai; nếu $P$ sai thì $\\overline{P}$ đúng.
- Phủ định của $\\forall x \\in X, P(x)$ là: $\\exists x \\in X, \\overline{P(x)}$.
- Phủ định của $\\exists x \\in X, P(x)$ là: $\\forall x \\in X, \\overline{P(x)}$.
3. Mệnh đề kéo theo $P \\Rightarrow Q$: Chỉ sai khi $P$ đúng mà $Q$ sai.
4. Các tập con của $\\mathbb{R}$:
- Khoảng $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$.
- Đoạn $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.
- Nửa khoảng $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$; $(a; b] = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$.`,
    formulaLatex: "\\overline{\\forall x \\in X, P(x)} \\iff \\exists x \\in X, \\overline{P(x)}",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương I: Mệnh đề và tập hợp, Bài 1 & Bài 2, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t10-vecto-tich-vo-huong",
    keywords: ["vecto", "hai vecto cung phuong", "hai vecto bang nhau", "tong hai vecto", "hieu hai vecto", "tich vo huong", "goc giua hai vecto"],
    topic: "Vectơ & Tích vô hướng của hai vectơ",
    grade: 10,
    questionVariants: [
      "vecto là gì",
      "quy tắc ba điểm quy tắc hình bình hành",
      "công thức tích vô hướng",
      "hai vecto vuông góc khi nào"
    ],
    summary: "Định nghĩa vectơ, quy tắc cộng trừ hình học và công thức tính tích vô hướng của 2 vectơ.",
    officialContent: `1. Vectơ: Đoạn thẳng có hướng (có điểm đầu và điểm cuối). Vectơ không $\\vec{0}$ có độ dài bằng 0 và phương tùy ý.
2. Quy tắc hình học:
- Quy tắc 3 điểm: Với ba điểm $A, B, C$ bất kì ta luôn có $\\vec{AB} + \\vec{BC} = \\vec{AC}$.
- Quy tắc hiệu: $\\vec{AB} - \\vec{AC} = \\vec{CB}$.
- Quy tắc hình bình hành: Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.
3. Tích vô hướng của hai vectơ:
$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$
- Hệ quả quan trọng: Hai vectơ khác $\\vec{0}$ vuông góc với nhau khi và chỉ khi tích vô hướng bằng 0: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$.`,
    formulaLatex: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b}), \\ \\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương IV: Vectơ, Bài 8 & Bài 11, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t10-he-thuc-luong",
    keywords: ["dinh ly cosin", "dinh ly sin", "cong thuc dien tich tam giac", "heron", "ban kinh duong tron ngoai tiep", "ban kinh duong tron noi tiep"],
    topic: "Hệ thức lượng trong tam giác (Định lý Cosin, Sin & Diện tích)",
    grade: 10,
    questionVariants: [
      "định lý cosin phát biểu thế nào",
      "định lý sin",
      "công thức heron tính diện tích tam giác",
      "tính bán kính đường tròn ngoại tiếp tam giác"
    ],
    summary: "Định lý côsin, định lý sin và 5 công thức tính diện tích tam giác chuẩn chương trình mới 2026.",
    officialContent: `1. Định lý Cosin: Trong tam giác $ABC$ với các cạnh đối diện $a, b, c$:
$$a^2 = b^2 + c^2 - 2bc \\cos A$$
$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$
2. Định lý Sin:
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$
(với $R$ là bán kính đường tròn ngoại tiếp tam giác).
3. Các công thức tính diện tích tam giác $S$:
- $S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$
- $S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ca \\sin B$
- $S = \\frac{abc}{4R}$
- $S = p \\cdot r$ (với $p = \\frac{a+b+c}{2}$ là nửa chu vi, $r$ là bán kính đường tròn nội tiếp)
- Công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)}$`,
    formulaLatex: "a^2 = b^2 + c^2 - 2bc \\cos A, \\ \\frac{a}{\\sin A} = 2R, \\ S = \\sqrt{p(p-a)(p-b)(p-c)}",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương III: Hệ thức lượng trong tam giác, Bài 6, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 11 ===================
  {
    id: "kb-t11-luong-giac",
    keywords: ["luong giac", "duong tron luong giac", "radian", "sin", "cos", "tan", "cot", "cong thuc cong", "nhan doi", "bien doi tich thanh tong"],
    topic: "Hàm số lượng giác & Công thức lượng giác",
    grade: 11,
    questionVariants: [
      "công thức cộng lượng giác",
      "công thức nhân đôi sin2x cos2x",
      "đổi từ độ sang radian",
      "tập giá trị của sin và cos"
    ],
    summary: "Đường tròn lượng giác, các hệ thức cơ bản, công thức cộng, công thức góc nhân đôi và hạ bậc.",
    officialContent: `1. Đổi đơn vị: $180^\\circ = \\pi \\text{ rad} \\Rightarrow 1^\\circ = \\frac{\\pi}{180} \\text{ rad}, \\ 1 \\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ$.
2. Các hệ thức cơ bản:
- $\\sin^2 x + \\cos^2 x = 1$
- $\\tan x = \\frac{\\sin x}{\\cos x} \\ (x \\neq \\frac{\\pi}{2} + k\\pi); \\ \\cot x = \\frac{\\cos x}{\\sin x} \\ (x \\neq k\\pi)$
- $1 + \\tan^2 x = \\frac{1}{\\cos^2 x}; \\ 1 + \\cot^2 x = \\frac{1}{\\sin^2 x}$
3. Công thức cộng:
- $\\cos(a \\mp b) = \\cos a \\cos b \\pm \\sin a \\sin b$
- $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$
- $\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}$
4. Công thức nhân đôi:
- $\\sin 2x = 2\\sin x \\cos x$
- $\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$
- $\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$`,
    formulaLatex: "\\sin^2 x + \\cos^2 x = 1, \\ \\sin 2x = 2\\sin x \\cos x, \\ \\cos 2x = 2\\cos^2 x - 1",
    sourceName: "SGK Toán 11 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 1), Chương I: Hàm số lượng giác và phương trình lượng giác, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t11-cap-so-cong-nhan",
    keywords: ["cap so cong", "cap so nhan", "cong sai d", "cong boi q", "so hang tong quat", "tong n so hang"],
    topic: "Cấp số cộng và Cấp số nhân",
    grade: 11,
    questionVariants: [
      "công thức số hạng tổng quát cấp số cộng",
      "tính tổng n số hạng cấp số cộng",
      "công thức cấp số nhân",
      "tổng cấp số nhân lùi vô hạn"
    ],
    summary: "Định nghĩa, số hạng tổng quát và công thức tổng $n$ số hạng đầu của cấp số cộng, cấp số nhân.",
    officialContent: `1. Cấp số cộng $(u_n)$:
- Định nghĩa: $u_{n+1} = u_n + d$ (với $d$ là công sai).
- Số hạng tổng quát: $u_n = u_1 + (n - 1)d \\ (n \\ge 2)$.
- Tính chất: $u_k = \\frac{u_{k-1} + u_{k+1}}{2}$.
- Tổng $n$ số hạng đầu tiên: $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$.
2. Cấp số nhân $(u_n)$:
- Định nghĩa: $u_{n+1} = u_n \\cdot q$ (với $q$ là công bội).
- Số hạng tổng quát: $u_n = u_1 \\cdot q^{n-1} \\ (n \\ge 2)$.
- Tổng $n$ số hạng đầu tiên: $S_n = \\frac{u_1(1 - q^n)}{1 - q} \\ (q \\neq 1)$.
- Tổng cấp số nhân lùi vô hạn ($|q| < 1$): $S = \\frac{u_1}{1 - q}$.`,
    formulaLatex: "u_n = u_1 + (n-1)d, \\ S_n = \\frac{n(u_1+u_n)}{2}, \\ u_n = u_1 q^{n-1}, \\ S_n = \\frac{u_1(1-q^n)}{1-q}",
    sourceName: "SGK Toán 11 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 1), Chương II: Dãy số, cấp số cộng và cấp số nhân, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t11-dao-ham",
    keywords: ["dao ham", "y nghia hinh hoc dao ham", "phuong trinh tiep tuyen", "quy tac tinh dao ham", "bang dao ham"],
    topic: "Đạo hàm & Ý nghĩa hình học của đạo hàm",
    grade: 11,
    questionVariants: [
      "định nghĩa đạo hàm",
      "viết phương trình tiếp tuyến của đồ thị hàm số",
      "đạo hàm của sin cos tan",
      "quy tắc tính đạo hàm u nhân v"
    ],
    summary: "Bảng đạo hàm các hàm số cơ bản, quy tắc tính đạo hàm và phương trình tiếp tuyến.",
    officialContent: `1. Bảng đạo hàm cơ bản:
- $(x^n)' = n x^{n-1}$
- $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}} \\ (x > 0)$
- $(\\sin x)' = \\cos x; \\ (\\cos x)' = -\\sin x$
- $(\\tan x)' = 1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$
2. Quy tắc tính:
- $(u \\pm v)' = u' \\pm v'$
- $(u \\cdot v)' = u' v + u v'$
- $\\left(\\frac{u}{v}\\right)' = \\frac{u' v - u v'}{v^2} \\ (v \\neq 0)$
- Đạo hàm hàm hợp: $[f(u)]' = f'(u) \\cdot u'$.
3. Ý nghĩa hình học: Hệ số góc của tiếp tuyến tại điểm $M_0(x_0; y_0)$ là $k = f'(x_0)$.
Phương trình tiếp tuyến:
$$y - y_0 = f'(x_0)(x - x_0)$$`,
    formulaLatex: "y = f'(x_0)(x - x_0) + y_0, \\ (uv)' = u'v + uv'",
    sourceName: "SGK Toán 11 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 2), Chương IX: Đạo hàm, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 12 ===================
  {
    id: "kb-t12-khao-sat-ham-so",
    keywords: ["don dieu", "dong bien", "nghich bien", "cuc tri", "gia tri lon nhat", "gia tri nho nhat", "tiem can", "khao sat ham so"],
    topic: "Ứng dụng đạo hàm khảo sát hàm số",
    grade: 12,
    questionVariants: [
      "điều kiện hàm số đồng biến nghịch biến",
      "cách tìm cực trị hàm số",
      "tìm tiệm cận đứng và tiệm cận ngang",
      "tìm giá trị lớn nhất nhỏ nhất trên đoạn"
    ],
    summary: "Xét tính đơn điệu, cực trị, đường tiệm cận đứng, ngang, xiên và bài toán GTLN - GTNN theo chuẩn 2026.",
    officialContent: `1. Tính đơn điệu: Cho hàm số $y = f(x)$ có đạo hàm trên $K$.
- Nếu $f'(x) > 0, \\forall x \\in K$ thì hàm số đồng biến trên $K$.
- Nếu $f'(x) < 0, \\forall x \\in K$ thì hàm số nghịch biến trên $K$.
2. Cực trị (Dấu hiệu I): Nếu $f'(x_0) = 0$ (hoặc $f'$ không xác định tại $x_0$) và $f'(x)$ đổi dấu khi qua $x_0$:
- Đổi dấu từ '+' sang '-': $x_0$ là điểm cực đại.
- Đổi dấu từ '-' sang '+': $x_0$ là điểm cực tiểu.
3. Tiệm cận của đồ thị hàm số:
- Tiệm cận ngang: $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0 \\Rightarrow y = y_0$.
- Tiệm cận đứng: $\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty \\Rightarrow x = x_0$.
- Tiệm cận xiên $y = ax + b$: Khi $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.`,
    formulaLatex: "f'(x) > 0 \\Rightarrow \\text{Đồng biến}, \\ \\lim_{x \\to \\infty} f(x) = y_0 \\Rightarrow \\text{TCN: } y = y_0",
    sourceName: "SGK Toán 12 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 12 (Tập 1), Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t12-nguyen-ham-tich-phan",
    keywords: ["nguyen ham", "tich phan", "dien tich hinh phang", "the tich khoi tron xoay", "nguyen ham tung phan"],
    topic: "Nguyên hàm, Tích phân & Ứng dụng hình học",
    grade: 12,
    questionVariants: [
      "nguyên hàm là gì",
      "công thức tích phân từng phần",
      "tính diện tích hình phẳng giới hạn bởi đồ thị",
      "thể tích khối tròn xoay"
    ],
    summary: "Định nghĩa nguyên hàm, định lý Newton - Leibniz, phương pháp đổi biến, từng phần và tính diện tích, thể tích.",
    officialContent: `1. Định lý Newton - Leibniz: $\\int_a^b f(x) \\, dx = F(b) - F(a) = F(x) \\Big|_a^b$ (với $F'(x) = f(x)$).
2. Tích phân từng phần:
$$\\int_a^b u \\, dv = (u v) \\Big|_a^b - \\int_a^b v \\, du$$
3. Ứng dụng diện tích hình phẳng:
- Giới hạn bởi đồ thị $y = f(x)$, trục hoành $y = 0$, đường thẳng $x = a, x = b$:
$$S = \\int_a^b |f(x)| \\, dx$$
- Giới hạn bởi hai đường $y = f(x)$ và $y = g(x)$: $S = \\int_a^b |f(x) - g(x)| \\, dx$.
4. Ứng dụng thể tích khối tròn xoay (quay quanh trục $Ox$):
$$V = \\pi \\int_a^b [f(x)]^2 \\, dx$$`,
    formulaLatex: "\\int_a^b f(x) dx = F(b) - F(a), \\ S = \\int_a^b |f(x)| dx, \\ V = \\pi \\int_a^b f^2(x) dx",
    sourceName: "SGK Toán 12 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 12 (Tập 2), Chương IV: Nguyên hàm và tích phân, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t12-hinh-khong-gian-oxyz",
    keywords: ["oxyz", "toa do trong khong gian", "phuong trinh mat phang", "phuong trinh duong thang", "mat cau", "khoang cach"],
    topic: "Phương pháp toạ độ trong không gian $Oxyz$",
    grade: 12,
    questionVariants: [
      "phương trình mặt phẳng đi qua một điểm có vecto pháp tuyến",
      "phương trình chính tắc và tham số của đường thẳng",
      "công thức tính khoảng cách từ điểm đến mặt phẳng",
      "phương trình mặt cầu tâm i bán kính r"
    ],
    summary: "Hệ toạ độ $Oxyz$, vectơ pháp tuyến, vectơ chỉ phương, phương trình mặt phẳng, đường thẳng và mặt cầu.",
    officialContent: `1. Phương trình mặt phẳng $(P)$ qua $M(x_0; y_0; z_0)$ nhận $\\vec{n} = (A; B; C) \\neq \\vec{0}$ làm vectơ pháp tuyến:
$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0$$
Khoảng cách từ $M_0(x_0; y_0; z_0)$ đến $(P)$:
$$d(M_0, (P)) = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$
2. Phương trình đường thẳng $(d)$ qua $M_0$ nhận $\\vec{u} = (a; b; c)$ làm vectơ chỉ phương:
$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\ (t \\in \\mathbb{R})$$
3. Phương trình mặt cầu $(S)$ tâm $I(a; b; c)$, bán kính $R$:
$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$`,
    formulaLatex: "Ax + By + Cz + D = 0, \\ d(M, (P)) = \\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}",
    sourceName: "SGK Toán 12 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 12 (Tập 2), Chương V: Phương pháp tọa độ trong không gian Oxyz, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t12-xac-suat-co-dieu-kien",
    keywords: ["xac suat co dieu kien", "xac suat toan phan", "cong thuc bayes", "bien co doc lap", "nhan xac suat"],
    topic: "Xác suất có điều kiện, Công thức xác suất toàn phần & Bayes",
    grade: 12,
    questionVariants: [
      "công thức xác suất có điều kiện p(a|b)",
      "công thức xác suất toàn phần",
      "công thức bayes",
      "hai biến cố độc lập khi nào"
    ],
    summary: "Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes chuẩn cấu trúc thi tốt nghiệp THPT từ năm 2025.",
    officialContent: `1. Xác suất có điều kiện:
$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)$$
Hệ quả: $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$.
2. Biến cố độc lập: Hai biến cố $A$ và $B$ độc lập khi và chỉ khi:
$$P(A \\cap B) = P(A) \\cdot P(B)$$
3. Công thức xác suất toàn phần: Cho hệ biến cố đầy đủ $B_1, B_2, ..., B_n$:
$$P(A) = \\sum_{i=1}^n P(B_i) \\cdot P(A \\mid B_i)$$
4. Công thức Bayes:
$$P(B_k \\mid A) = \\frac{P(B_k) \\cdot P(A \\mid B_k)}{P(A)} = \\frac{P(B_k) \\cdot P(A \\mid B_k)}{\\sum_{i=1}^n P(B_i) \\cdot P(A \\mid B_i)}$$`,
    formulaLatex: "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\ P(A) = \\sum P(B_i) P(A \\mid B_i), \\ P(B_k \\mid A) = \\frac{P(B_k) P(A \\mid B_k)}{P(A)}",
    sourceName: "SGK Toán 12 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống (Chuẩn thi Bộ GD&ĐT 2025 - 2026)",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 12 (Tập 2), Chương VI: Xác suất có điều kiện, NXB Giáo Dục Việt Nam."
  }
];

/**
 * Hàm tìm kiếm kiến thức chuẩn xác từ kho tri thức giáo dục uy tín
 */
export function queryEducationalKnowledgeBase(userQuestion: string): {
  match: KnowledgeItem | null;
  confidence: number;
  allCandidates: { item: KnowledgeItem; score: number }[];
} {
  const normQ = userQuestion.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").trim();
  const rawQ = userQuestion.toLowerCase().trim();

  const scored = EDUCATIONAL_KNOWLEDGE_BASE.map((item) => {
    let score = 0;

    // Check variants
    for (const v of item.questionVariants) {
      const normV = v.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").trim();
      if (normQ.includes(normV) || normV.includes(normQ)) {
        score += 15;
      }
    }

    // Check keywords
    for (const kw of item.keywords) {
      const normKw = kw.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").trim();
      if (normQ.includes(normKw)) {
        score += 5;
      }
      if (rawQ.includes(kw)) {
        score += 3;
      }
    }

    // Check topic match
    const normTopic = item.topic.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").trim();
    const topicWords = normTopic.split(/\\s+/);
    for (const w of topicWords) {
      if (w.length > 2 && normQ.includes(w)) {
        score += 3;
      }
    }

    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const best = scored[0];
  if (best && best.score >= 5) {
    return {
      match: best.item,
      confidence: best.score,
      allCandidates: scored.filter((s) => s.score >= 5)
    };
  }

  return {
    match: null,
    confidence: 0,
    allCandidates: []
  };
}
