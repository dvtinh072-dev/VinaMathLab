/**
 * CƠ SỞ DỮ LIỆU TƯ LIỆU TOÁN HỌC CHUẨN MỰC CHO TRỢ LÝ AI VINA
 * Nguồn tư liệu: 
 * - Bộ Giáo dục và Đào tạo (Chương trình GDPT 2018)
 * - Sách giáo khoa "Kết nối tri thức với cuộc sống" (Toán 6, 7, 8, 9, 10, 11, 12)
 * - Cổng thông tin điện tử Bộ GD&ĐT (moet.gov.vn)
 * - Viện Nghiên cứu Cao cấp về Toán (VIASM - viasm.edu.vn)
 * - Thư viện học liệu số quốc gia VinaMath
 */

import { CURRICULUM_DATA } from "@/data/curriculumData";

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
    keywords: ["tap hop", "phan tu", "thuoc", "khong thuoc", "tap hop con", "tap rong", "liet ke", "tinh chat dac trung"],
    topic: "Tập hợp & Phần tử của tập hợp",
    grade: 6,
    questionVariants: [
      "tập hợp là gì",
      "thế nào là một tập hợp",
      "cách viết tập hợp",
      "kí hiệu thuộc và không thuộc",
      "tập rỗng là gì",
      "tập hợp"
    ],
    summary: "Tập hợp là khái niệm cơ bản của toán học gồm các đối tượng được xác định rõ ràng.",
    officialContent: `1. **Khái niệm:** Tập hợp (thường đặt tên bằng chữ in hoa $A, B, C, X...$) gồm các đối tượng được xác định rõ ràng, mỗi đối tượng gọi là một phần tử của tập hợp.
2. **Cách cho một tập hợp:**
- **Cách 1: Liệt kê các phần tử** trong dấu ngoặc nhọn $\\{\\}$, mỗi phần tử chỉ viết 1 lần, các phần tử cách nhau bởi dấu chấm phẩy (;). Ví dụ: $A = \\{0; 1; 2; 3\\}$.
- **Cách 2: Chỉ ra tính chất đặc trưng** cho các phần tử của tập hợp. Ví dụ: $A = \\{x \\in \\mathbb{N} \\mid x < 4\\}$.
3. **Kí hiệu toán học:**
- $x \\in A$: Phần tử $x$ thuộc tập hợp $A$.
- $y \\notin A$: Phần tử $y$ không thuộc tập hợp $A$.
- $\\emptyset$: Tập hợp không chứa phần tử nào gọi là **tập rỗng**.`,
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
      "dấu hiệu chia hết",
      "dấu hiệu chia hết cho 2 3 5 9",
      "thế nào là số nguyên tố",
      "số nguyên tố là gì",
      "cách tìm ucln",
      "cách tìm bcnn",
      "hợp số là gì"
    ],
    summary: "Dấu hiệu chia hết, phân biệt số nguyên tố - hợp số, phương pháp phân tích ra thừa số nguyên tố để tìm ƯCLN và BCNN.",
    officialContent: `1. **Dấu hiệu chia hết:**
- **Chia hết cho 2:** Chữ số tận cùng là chữ số chẵn: $0, 2, 4, 6, 8$.
- **Chia hết cho 5:** Chữ số tận cùng là $0$ hoặc $5$.
- **Chia hết cho 3:** Tổng các chữ số chia hết cho $3$.
- **Chia hết cho 9:** Tổng các chữ số chia hết cho $9$.
2. **Số nguyên tố & Hợp số:**
- **Số nguyên tố:** Là số tự nhiên lớn hơn 1, chỉ có đúng hai ước là 1 và chính nó ($2, 3, 5, 7, 11, 13...$). Số 2 là số nguyên tố chẵn duy nhất.
- **Hợp số:** Là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.
- *Lưu ý:* Số 0 và số 1 không phải là số nguyên tố, cũng không phải là hợp số.
3. **Quy tắc tìm ƯCLN và BCNN:**
- **Ước chung lớn nhất (ƯCLN):** Lập tích các thừa số nguyên tố **chung** với số mũ **nhỏ nhất**.
- **Bội chung nhỏ nhất (BCNN):** Lập tích các thừa số nguyên tố **chung và riêng** với số mũ **lớn nhất**.`,
    formulaLatex: "\\text{ƯCLN}(a, b) \\cdot \\text{BCNN}(a, b) = a \\cdot b",
    standardSteps: [
      "Bước 1: Phân tích mỗi số ra thừa số nguyên tố.",
      "Bước 2: Chọn các thừa số nguyên tố chung (cho ƯCLN) hoặc chung và riêng (cho BCNN).",
      "Bước 3: Lập tích các thừa số với số mũ nhỏ nhất (cho ƯCLN) hoặc lớn nhất (cho BCNN)."
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
      "nhân hai số nguyên âm",
      "số nguyên là gì"
    ],
    summary: "Tập hợp $\\mathbb{Z}$, quy tắc cộng, trừ, nhân, chia số nguyên và quy tắc bỏ dấu ngoặc.",
    officialContent: `1. **Tập hợp số nguyên:** $\\mathbb{Z} = \\{...; -3; -2; -1; 0; 1; 2; 3; ...\\}$. Bao gồm các số nguyên âm, số 0 và các số nguyên dương.
2. **Quy tắc cộng trừ số nguyên:**
- **Cộng hai số nguyên cùng dấu:** Cộng phần số tự nhiên của chúng, đặt dấu chung trước kết quả. Ví dụ: $(-3) + (-5) = -(3 + 5) = -8$.
- **Cộng hai số nguyên khác dấu:** Lấy số lớn hơn trừ số bé hơn (về giá trị tuyệt đối), đặt dấu của số có giá trị tuyệt đối lớn hơn trước kết quả. Ví dụ: $(-8) + 5 = -(8 - 5) = -3$.
3. **Quy tắc nhân chia dấu:**
- Cùng dấu ra **dương (+)**: $(+) \\cdot (+) = (+); \\ (-) \\cdot (-) = (+)$.
- Khác dấu ra **âm (-)**: $(+) \\cdot (-) = (-); \\ (-) \\cdot (+) = (-)$.
4. **Quy tắc dấu ngoặc:**
- Đằng trước dấu ngoặc có dấu '+': Giữ nguyên dấu các số hạng trong ngoặc.
- Đằng trước dấu ngoặc có dấu '-': Đổi dấu toàn bộ các số hạng bên trong ngoặc: '+' đổi thành '-', '-' đổi thành '+'.`,
    formulaLatex: "-(a + b - c) = -a - b + c",
    standardSteps: [
      "Bước 1: Xác định dấu của từng số hạng và dấu trước dấu ngoặc.",
      "Bước 2: Thực hiện bỏ ngoặc hoặc áp dụng quy tắc cộng cùng dấu/khác dấu.",
      "Bước 3: Nhóm các số đối nhau hoặc số tròn chục, tròn trăm để tính nhanh hợp lý."
    ],
    sourceName: "SGK Toán 6 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 6 (Tập 1), Chương III: Số nguyên, NXB Giáo Dục Việt Nam."
  },

  {
    id: "kb-t6-chu-vi-dien-tich-hinh-phang",
    keywords: [
      "dien tich hinh chu nhat",
      "chu vi hinh chu nhat",
      "hinh chu nhat",
      "dien tich hinh vuong",
      "chu vi hinh vuong",
      "hinh vuong",
      "dien tich hinh thang",
      "chu vi hinh thang",
      "hinh thang",
      "dien tich hinh thoi",
      "hinh thoi",
      "dien tich hinh binh hanh",
      "hinh binh hanh",
      "dien tich hinh tron",
      "chu vi hinh tron",
      "chu vi va dien tich",
      "dien tich",
      "chu vi",
      "hinh hoc truc quan"
    ],
    topic: "Chu vi và Diện tích các hình phẳng cơ bản (Hình chữ nhật, hình vuông, hình thang, hình thoi, hình bình hành)",
    grade: 6,
    questionVariants: [
      "công thức tính diện tích hình chữ nhật",
      "tính diện tích hình chữ nhật",
      "công tính diện tích hình chữ nhật",
      "diện tích hình chữ nhật",
      "chu vi hình chữ nhật",
      "công thức tính chu vi hình chữ nhật",
      "công thức tính diện tích hình vuông",
      "tính diện tích hình vuông",
      "diện tích hình vuông",
      "công thức tính diện tích hình thang",
      "tính diện tích hình thang",
      "công thức tính diện tích hình thoi",
      "công thức tính diện tích hình bình hành"
    ],
    summary: "Công thức tính chu vi và diện tích các hình phẳng: hình chữ nhật, hình vuông, hình thang, hình thoi, hình bình hành theo SGK Toán 6.",
    officialContent: `1. **Hình chữ nhật (chiều dài $a$, chiều rộng $b$ cùng đơn vị đo):**
- **Chu vi:** $C = (a + b) \\cdot 2$
- **Diện tích:** $S = a \\cdot b$ (Chiều dài nhân chiều rộng)

2. **Hình vuông (cạnh $a$):**
- **Chu vi:** $C = 4a$
- **Diện tích:** $S = a^2$ (Cạnh nhân cạnh)

3. **Hình thang (đáy lớn $a$, đáy bé $b$, chiều cao $h$):**
- **Diện tích:** $S = \\frac{(a + b) \\cdot h}{2}$ (Tổng hai đáy nhân chiều cao rồi chia 2)

4. **Hình thoi (hai đường chéo $d_1, d_2$):**
- **Diện tích:** $S = \\frac{1}{2} d_1 \\cdot d_2$ (Tích hai đường chéo chia 2)

5. **Hình bình hành (đáy $a$, chiều cao $h$):**
- **Diện tích:** $S = a \\cdot h$ (Độ dài đáy nhân chiều cao)`,
    formulaLatex: "S_{\\text{HCN}} = a \\cdot b, \\ S_{\\text{HV}} = a^2, \\ S_{\\text{Hình thang}} = \\frac{(a+b)h}{2}",
    standardSteps: [
      "Bước 1: Xác định đúng hình phẳng và các kích thước bài toán đã cho.",
      "Bước 2: Đổi các kích thước về cùng một đơn vị đo (ví dụ: cùng là cm hoặc m).",
      "Bước 3: Thay số vào công thức diện tích tương ứng và ghi rõ đơn vị đo diện tích (cm², m²...)."
    ],
    sourceName: "SGK Toán 6 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 6 (Tập 1), Chương III: Hình học trực quan, Bài 11: Chu vi và diện tích của một số hình phẳng trong thực tiễn (Trang 89 - 94), NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 7 ===================
  {
    id: "kb-t7-so-huu-ti",
    keywords: ["so huu ti", "tap hop q", "so vo ti", "tap hop r", "gia tri tuyet doi", "luy thua"],
    topic: "Tập hợp số hữu tỉ $\\mathbb{Q}$ & Số thực $\\mathbb{R}$",
    grade: 7,
    questionVariants: [
      "số hữu tỉ là gì",
      "số vô tỉ là gì",
      "tập hợp q là gì",
      "giá trị tuyệt đối của một số thực",
      "công thức lũy thừa"
    ],
    summary: "Định nghĩa số hữu tỉ $\\frac{a}{b}$, số vô tỉ, số thực và các công thức luỹ thừa cơ bản.",
    officialContent: `1. **Số hữu tỉ:** Là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$. Kí hiệu tập hợp số hữu tỉ là $\\mathbb{Q}$.
2. **Số vô tỉ & Số thực:**
- **Số vô tỉ:** Là số viết được dưới dạng số thập phân vô hạn không tuần hoàn (ví dụ: $\\pi = 3,14159...; \\sqrt{2} = 1,4142...$). Kí hiệu là $\\mathbb{I}$.
- **Số thực:** Gồm số hữu tỉ và số vô tỉ, kí hiệu tập hợp là $\\mathbb{R}$. Ta có: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.
3. **Các công thức lũy thừa với số mũ tự nhiên:**
- $x^m \\cdot x^n = x^{m+n}$
- $x^m : x^n = x^{m-n} \\ (x \\neq 0, m \\ge n)$
- $(x^m)^n = x^{m \\cdot n}$
- $(x \\cdot y)^n = x^n \\cdot y^n$
- $\\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n} \\ (y \\neq 0)$`,
    formulaLatex: "\\mathbb{Q} = \\left\\{\\frac{a}{b} \\ \\Big|\\ a, b \\in \\mathbb{Z}, b \\neq 0\\right\\}, \\ x^m \\cdot x^n = x^{m+n}",
    sourceName: "SGK Toán 7 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 7 (Tập 1), Chương I: Số hữu tỉ & Chương II: Số thực, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t7-tam-giac-bang-nhau",
    keywords: ["tam giac bang nhau", "canh canh canh", "canh goc canh", "goc canh goc", "tam giac can", "duong trung truc"],
    topic: "Các trường hợp bằng nhau của tam giác & Tam giác cân",
    grade: 7,
    questionVariants: [
      "ba trường hợp bằng nhau của tam giác",
      "trường hợp bằng nhau cạnh cạnh cạnh ccc",
      "trường hợp cạnh góc cạnh cgc",
      "trường hợp góc cạnh góc gcg",
      "định nghĩa và tính chất tam giác cân"
    ],
    summary: "3 trường hợp bằng nhau của tam giác thường (c-c-c, c-g-c, g-c-g), các trường hợp của tam giác vuông và tính chất tam giác cân.",
    officialContent: `1. **Ba trường hợp bằng nhau của tam giác:**
- **Trường hợp 1 (c.c.c):** Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.
- **Trường hợp 2 (c.g.c):** Nếu hai cạnh và **góc xen giữa** của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.
- **Trường hợp 3 (g.c.g):** Nếu một cạnh và **hai góc kề** của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.
2. **Các trường hợp bằng nhau của tam giác vuông:**
- Cạnh huyền - góc nhọn.
- Cạnh huyền - cạnh góc vuông.
3. **Tam giác cân:**
- **Định nghĩa:** Tam giác có hai cạnh bằng nhau.
- **Tính chất:** Trong tam giác cân, hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.`,
    formulaLatex: "\\Delta ABC = \\Delta A'B'C' \\implies AB = A'B', \\ \\widehat{A} = \\widehat{A'}",
    sourceName: "SGK Toán 7 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 7 (Tập 1), Chương IV: Tam giác bằng nhau, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 8 ===================
  {
    id: "kb-t8-hang-dang-thuc",
    keywords: ["hang dang thuc", "7 hang dang thuc", "binh phuong mot tong", "binh phuong mot hieu", "hieu hai binh phuong", "lap phuong"],
    topic: "7 hằng đẳng thức đáng nhớ",
    grade: 8,
    questionVariants: [
      "7 hằng đẳng thức đáng nhớ là gì",
      "công thức hằng đẳng thức đáng nhớ",
      "bình phương của một tổng",
      "hiệu hai bình phương",
      "lập phương của một hiệu",
      "hằng đẳng thức"
    ],
    summary: "Hệ thống chuẩn 7 hằng đẳng thức đại số lớp 8 áp dụng trong phân tích đa thức và tính nhanh.",
    officialContent: `Hệ thống 7 hằng đẳng thức đáng nhớ (với $A, B$ là các biểu thức đại số tuỳ ý):
1. **Bình phương của một tổng:**
$$(A + B)^2 = A^2 + 2AB + B^2$$
2. **Bình phương của một hiệu:**
$$(A - B)^2 = A^2 - 2AB + B^2$$
3. **Hiệu hai bình phương:**
$$A^2 - B^2 = (A - B)(A + B)$$
4. **Lập phương của một tổng:**
$$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$$
5. **Lập phương của một hiệu:**
$$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$$
6. **Tổng hai lập phương:**
$$A^3 + B^3 = (A + B)(A^2 - AB + B^2)$$
7. **Hiệu hai lập phương:**
$$A^3 - B^3 = (A - B)(A^2 + AB + B^2)$$`,
    formulaLatex: "A^2 - B^2 = (A - B)(A + B), \\ A^3 \\pm B^3 = (A \\pm B)(A^2 \\mp AB + B^2)",
    standardSteps: [
      "Bước 1: Nhận diện dạng hằng đẳng thức từ biểu thức bài toán.",
      "Bước 2: Xác định chính xác hai số hạng đại diện $A$ và $B$.",
      "Bước 3: Khai triển hoặc thu gọn theo đúng chiều công thức."
    ],
    sourceName: "SGK Toán 8 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 8 (Tập 1), Chương II: Hằng đẳng thức đáng nhớ và ứng dụng, Bài 6 & Bài 7, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t8-dinh-ly-thales",
    keywords: ["dinh ly thales", "thales", "dinh ly ta let", "tam giac dong dang", "ti so dong dang"],
    topic: "Định lý Thalès & Tam giác đồng dạng",
    grade: 8,
    questionVariants: [
      "định lý thales phát biểu thế nào",
      "định lý thales đảo",
      "hệ quả định lý thales",
      "các trường hợp đồng dạng của tam giác",
      "định lý talet"
    ],
    summary: "Định lý Thalès trong tam giác, định lý đảo, hệ quả và 3 trường hợp đồng dạng của tam giác.",
    officialContent: `1. **Định lý Thalès thuận:** Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.
- Trong $\\Delta ABC$, nếu $MN \\parallel BC$ ($M \\in AB, N \\in AC$) thì:
$$\\frac{AM}{AB} = \\frac{AN}{AC} \\quad \\text{hoặc} \\quad \\frac{AM}{MB} = \\frac{AN}{NC}$$
2. **Hệ quả của định lý Thalès:** Nếu một đường thẳng cắt hai cạnh của một tam giác và song song với cạnh còn lại thì nó tạo thành một tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh của tam giác đã cho:
$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$
3. **Các trường hợp đồng dạng của tam giác:**
- **Trường hợp 1 (c.c.c):** Ba cặp cạnh tương ứng tỉ lệ.
- **Trường hợp 2 (c.g.c):** Hai cặp cạnh tương ứng tỉ lệ và góc xen giữa bằng nhau.
- **Trường hợp 3 (g.g):** Hai cặp góc tương ứng bằng nhau.`,
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
      "cách trục căn thức ở mẫu",
      "căn bậc hai là gì"
    ],
    summary: "Điều kiện xác định của $\\sqrt{A}$, hằng đẳng thức $\\sqrt{A^2} = |A|$ và các phép biến đổi căn thức.",
    officialContent: `1. **Điều kiện xác định:** Căn thức bậc hai $\\sqrt{A}$ có nghĩa (xác định) khi và chỉ khi $A \\ge 0$.
2. **Hằng đẳng thức căn bậc hai:**
$$\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{khi } A \\ge 0 \\\\ -A & \\text{khi } A < 0 \\end{cases}$$
3. **Khai phương một tích và một thương:**
- Khai phương một tích: $\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}$ ($A \\ge 0, B \\ge 0$).
- Khai phương một thương: $\\sqrt{\\frac{A}{B}} = \\frac{\\sqrt{A}}{\\sqrt{B}}$ ($A \\ge 0, B > 0$).
4. **Trục căn thức ở mẫu số:**
- $\\frac{C}{\\sqrt{A}} = \\frac{C\\sqrt{A}}{A}$ ($A > 0$).
- $\\frac{C}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{C(\\sqrt{A} \\mp \\sqrt{B})}{A - B}$ ($A \\ge 0, B \\ge 0, A \\neq B$).`,
    formulaLatex: "\\sqrt{A^2} = |A|, \\ \\sqrt{A} \\text{ có nghĩa } \\iff A \\ge 0",
    sourceName: "SGK Toán 9 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
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
      "tính delta phương trình bậc hai",
      "định lý viet",
      "hệ thức viet",
      "dấu của nghiệm phương trình bậc hai"
    ],
    summary: "Công thức nghiệm tổng quát qua biệt thức $\\Delta = b^2 - 4ac$ và hệ thức Viète $S, P$.",
    officialContent: `1. **Phương trình bậc hai:** $ax^2 + bx + c = 0$ ($a \\neq 0$).
Biệt thức: $\\Delta = b^2 - 4ac$.
- Nếu $\\Delta > 0$: Phương trình có hai nghiệm phân biệt:
$$x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$
- Nếu $\\Delta = 0$: Phương trình có nghiệm kép:
$$x_1 = x_2 = -\\frac{b}{2a}$$
- Nếu $\\Delta < 0$: Phương trình vô nghiệm trong $\\mathbb{R}$.
2. **Hệ thức Viète:** Nếu phương trình bậc hai có hai nghiệm $x_1, x_2$ thì:
- Tổng hai nghiệm: $S = x_1 + x_2 = -\\frac{b}{a}$
- Tích hai nghiệm: $P = x_1 x_2 = \\frac{c}{a}$
3. **Ứng dụng tìm hai số:** Nếu hai số có tổng bằng $S$ và tích bằng $P$ thì hai số đó là nghiệm của phương trình: $X^2 - SX + P = 0$ (điều kiện $S^2 - 4P \\ge 0$).`,
    formulaLatex: "\\Delta = b^2 - 4ac, \\ x_1 + x_2 = -\\frac{b}{a}, \\ x_1 x_2 = \\frac{c}{a}",
    sourceName: "SGK Toán 9 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 9 (Tập 2), Chương VI: Phương trình bậc hai một ẩn và định lý Viète, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 10 ===================
  {
    id: "kb-t10-dinh-ly-cosin",
    keywords: [
      "dinh ly cosin",
      "dinh ly cos",
      "dinh ly cosin trong tam giac",
      "dinh ly cosin la gi",
      "cong thuc dinh ly cosin",
      "he qua dinh ly cosin",
      "dinh ly cosin toan 10",
      "tinh canh theo dinh ly cosin",
      "tinh goc theo dinh ly cosin",
      "he thuc luong trong tam giac"
    ],
    topic: "Định lý Côsin (Cosin) trong tam giác",
    grade: 10,
    questionVariants: [
      "định lý cosin",
      "định lý cosin là gì",
      "phát biểu định lý cosin",
      "định lý cosin trong tam giác",
      "công thức định lý cosin",
      "hệ quả định lý cosin",
      "tính cạnh bằng định lý cosin",
      "tính góc tam giác bằng định lý cosin",
      "định lí cosin",
      "định lý côsin"
    ],
    summary: "Phát biểu định lý côsin, 3 công thức tính cạnh, hệ quả tính cosin các góc, liên hệ với định lý Pythagore và ví dụ áp dụng cụ thể.",
    officialContent: `1. **Phát biểu định lý Côsin:**
Trong một tam giác bất kì, bình phương độ dài một cạnh bằng tổng bình phương độ dài của hai cạnh còn lại trừ đi hai lần tích của hai cạnh đó với côsin của góc xen giữa chúng.

2. **Công thức định lý Côsin (trong tam giác $ABC$ có độ dài các cạnh đối diện là $a = BC, b = CA, c = AB$):**
$$a^2 = b^2 + c^2 - 2bc \\cos A$$
$$b^2 = a^2 + c^2 - 2ac \\cos B$$
$$c^2 = a^2 + b^2 - 2ab \\cos C$$

3. **Hệ quả (Công thức tính góc khi biết 3 cạnh của tam giác):**
Từ định lý côsin, ta suy ra công thức tính côsin của từng góc:
$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$
$$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$$
$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

4. **Trường hợp đặc biệt & Phán đoán tính chất tam giác:**
- **Liên hệ Định lý Pythagore:** Khi góc $\\widehat{A} = 90^\\circ$, ta có $\\cos 90^\\circ = 0$. Khi đó công thức trở thành:
$$a^2 = b^2 + c^2$$
*(Như vậy, định lý Pythagore chính là trường hợp đặc biệt của định lý côsin khi tam giác vuông).*
- **Xét tính chất góc:**
  + Nếu $b^2 + c^2 - a^2 > 0 \\iff \\cos A > 0 \\implies$ Góc $A$ là **góc nhọn** ($A < 90^\\circ$).
  + Nếu $b^2 + c^2 - a^2 = 0 \\iff \\cos A = 0 \\implies$ Góc $A$ là **góc vuông** ($A = 90^\\circ$).
  + Nếu $b^2 + c^2 - a^2 < 0 \\iff \\cos A < 0 \\implies$ Góc $A$ là **góc tù** ($90^\\circ < A < 180^\\circ$).

5. **Ý nghĩa áp dụng:**
- Dùng để **tính cạnh thứ ba** khi biết 2 cạnh và góc xen giữa (bài toán c-g-c).
- Dùng để **tính số đo các góc** khi biết độ dài 3 cạnh (bài toán c-c-c).

6. **Ví dụ minh họa cụ thể:**
- *Bài toán 1 (Tính cạnh):* Cho tam giác $ABC$ có $b = 5$, $c = 8$ và góc $\\widehat{A} = 60^\\circ$. Tính cạnh $a$.
  *Giải:* Áp dụng định lý côsin:
  $$a^2 = b^2 + c^2 - 2bc \\cos A = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ$$
  $$a^2 = 25 + 64 - 80 \\cdot \\frac{1}{2} = 89 - 40 = 49 \\implies a = \\sqrt{49} = 7.$$
- *Bài toán 2 (Tính góc):* Cho tam giác $ABC$ có $a = 7, b = 5, c = 3$. Tính góc $\\widehat{A}$.
  *Giải:* Áp dụng hệ quả định lý côsin:
  $$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{5^2 + 3^2 - 7^2}{2 \\cdot 5 \\cdot 3} = \\frac{25 + 9 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2}$$
  Vì $\\cos A = -\\frac{1}{2} \\implies \\widehat{A} = 120^\\circ$.`,
    formulaLatex: "a^2 = b^2 + c^2 - 2bc \\cos A, \\ \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}",
    standardSteps: [
      "Bước 1: Xác định giả thiết bài toán cho: (2 cạnh và góc xen giữa) hoặc (3 cạnh).",
      "Bước 2: Viết đúng công thức định lý côsin tương ứng với cạnh/góc cần tính.",
      "Bước 3: Thay số cẩn thận, chú ý giá trị lượng giác của góc và căn bậc hai để tìm độ dài cạnh."
    ],
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương III: Hệ thức lượng trong tam giác, Bài 6: Hệ thức lượng trong tam giác (Mục 1: Định lí côsin, Trang 38 - 39), NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t10-dinh-ly-sin",
    keywords: [
      "dinh ly sin",
      "dinh ly sin trong tam giac",
      "dinh ly sin la gi",
      "cong thuc dinh ly sin",
      "ban kinh duong tron ngoai tiep",
      "ti so sin",
      "he thuc luong trong tam giac"
    ],
    topic: "Định lý Sin trong tam giác",
    grade: 10,
    questionVariants: [
      "định lý sin",
      "định lý sin là gì",
      "phát biểu định lý sin",
      "định lý sin trong tam giác",
      "công thức định lý sin",
      "tính bán kính đường tròn ngoại tiếp",
      "định lí sin"
    ],
    summary: "Định lý Sin trong tam giác: tỉ số giữa cạnh và sin góc đối diện bằng $2R$, công thức tính bán kính đường tròn ngoại tiếp và ứng dụng.",
    officialContent: `1. **Phát biểu định lý Sin:**
Trong một tam giác bất kì, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp tam giác đó.

2. **Công thức định lý Sin (trong tam giác $ABC$ có các cạnh $a, b, c$ và bán kính đường tròn ngoại tiếp $R$):**
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$

3. **Các công thức hệ quả thường dùng:**
- **Tính cạnh:**
  $$a = 2R \\sin A, \\quad b = 2R \\sin B, \\quad c = 2R \\sin C$$
- **Tính bán kính đường tròn ngoại tiếp $R$:**
  $$R = \\frac{a}{2\\sin A} = \\frac{b}{2\\sin B} = \\frac{c}{2\\sin C}$$
- **Tính sin của các góc:**
  $$\\sin A = \\frac{a}{2R}, \\quad \\sin B = \\frac{b}{2R}, \\quad \\sin C = \\frac{c}{2R}$$

4. **Ứng dụng giải tam giác:**
- Giải tam giác khi biết **1 cạnh và 2 góc** (tìm 2 cạnh còn lại).
- Giải tam giác khi biết **2 cạnh và 1 góc đối diện** (tìm các góc và cạnh còn lại).
- Tính bán kính đường tròn ngoại tiếp $R$.`,
    formulaLatex: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R, \\ R = \\frac{a}{2\\sin A}",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương III: Hệ thức lượng trong tam giác, Bài 6: Hệ thức lượng trong tam giác (Mục 2: Định lí sin, Trang 40), NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t10-dien-tich-tam-giac",
    keywords: [
      "cong thuc dien tich tam giac",
      "tinh dien tich tam giac",
      "cong thuc heron",
      "heron",
      "ban kinh duong tron noi tiep",
      "nua chu vi p"
    ],
    topic: "Các công thức tính diện tích tam giác & Công thức Heron",
    grade: 10,
    questionVariants: [
      "công thức tính diện tích tam giác",
      "công thức heron",
      "công thức heron tính diện tích tam giác",
      "tính diện tích tam giác khi biết 3 cạnh",
      "tính bán kính đường tròn nội tiếp tam giác"
    ],
    summary: "Hệ thống 5 công thức tính diện tích tam giác chuẩn: đường cao, lượng giác, bán kính ngoại tiếp R, nội tiếp r và công thức Heron.",
    officialContent: `Trong tam giác $ABC$ có độ dài các cạnh $a, b, c$, nửa chu vi $p = \\frac{a+b+c}{2}$, đường cao tương ứng $h_a, h_b, h_c$, bán kính đường tròn ngoại tiếp $R$, bán kính đường tròn nội tiếp $r$:

1. **Công thức theo cạnh đáy và chiều cao:**
$$S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$$

2. **Công thức theo hai cạnh và sin góc xen giữa:**
$$S = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ca \\sin B = \\frac{1}{2} ab \\sin C$$

3. **Công thức theo bán kính đường tròn ngoại tiếp $R$:**
$$S = \\frac{abc}{4R} \\implies R = \\frac{abc}{4S}$$

4. **Công thức theo bán kính đường tròn nội tiếp $r$:**
$$S = p \\cdot r \\implies r = \\frac{S}{p}$$

5. **Công thức Heron (tính diện tích khi biết độ dài 3 cạnh):**
$$S = \\sqrt{p(p - a)(p - b)(p - c)}$$`,
    formulaLatex: "S = \\frac{1}{2}ab \\sin C = \\frac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương III: Hệ thức lượng trong tam giác, Bài 6 (Mục 3: Giải tam giác và các công thức tính diện tích tam giác, Trang 41), NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t10-so-trung-binh-thong-ke",
    keywords: [
      "so trung binh",
      "so trung binh cong",
      "tinh so trung binh",
      "tinh so trung binh cong",
      "trung vi",
      "tu phan vi",
      "mot",
      "phuong sai",
      "do lech chuan",
      "cac so dac trung do xu the trung tam",
      "mau so lieu khong ghep nhom",
      "thong ke toan 10",
      "thong ke lop 10"
    ],
    topic: "Số trung bình cộng & Các số đặc trưng mẫu số liệu không ghép nhóm (Toán 10)",
    grade: 10,
    questionVariants: [
      "tính số trung bình cộng lớp 10",
      "công thức tính số trung bình lớp 10",
      "tính trung vị lớp 10",
      "tứ phân vị lớp 10",
      "phương sai và độ lệch chuẩn lớp 10"
    ],
    summary: "Số trung bình cộng, trung vị, tứ phân vị, mốt, phương sai và độ lệch chuẩn của mẫu số liệu không ghép nhóm.",
    officialContent: `1. **Số trung bình cộng (kí hiệu $\\overline{x}$):**
Cho mẫu số liệu gồm $n$ giá trị $x_1, x_2, ..., x_n$:
$$\\overline{x} = \\frac{x_1 + x_2 + ... + x_n}{n} = \\frac{1}{n} \\sum_{i=1}^n x_i$$
- Nếu số liệu cho dưới dạng bảng tần số ($x_k$ xuất hiện $n_k$ lần, với cỡ mẫu $n = \\sum n_k$):
$$\\overline{x} = \\frac{n_1 x_1 + n_2 x_2 + ... + n_k x_k}{n}$$

2. **Trung vị ($M_e$):**
Sắp xếp mẫu số liệu theo thứ tự không giảm: $x_1 \\le x_2 \\le ... \\le x_n$.
- Nếu $n$ lẻ: $M_e = x_{\\frac{n+1}{2}}$.
- Nếu $n$ chẵn: $M_e = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}$.

3. **Mốt ($M_o$):** Giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu.

4. **Phương sai ($s^2$) & Độ lệch chuẩn ($s$):**
$$s^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\overline{x})^2 = \\frac{1}{n} \\sum_{i=1}^n x_i^2 - (\\overline{x})^2$$
Độ lệch chuẩn: $s = \\sqrt{s^2}$.`,
    formulaLatex: "\\overline{x} = \\frac{\\sum x_i}{n}, \\ s^2 = \\frac{1}{n}\\sum (x_i - \\overline{x})^2, \\ s = \\sqrt{s^2}",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm, Bài 12 & Bài 13, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t10-menh-de-tap-hop",
    keywords: ["menh de", "menh de chua bien", "menh de phu dinh", "menh de keo theo", "tuong duong", "khoang", "doan"],
    topic: "Mệnh đề logic, Kí hiệu $\\forall, \\exists$ & Các tập hợp số",
    grade: 10,
    questionVariants: [
      "mệnh đề là gì",
      "phủ định của mệnh đề với mọi tồn tại",
      "mệnh đề kéo theo p suy ra q",
      "các tập con của tập số thực"
    ],
    summary: "Khái niệm mệnh đề logic toán học, quy tắc phủ định với $\\forall, \\exists$ và các khoảng, đoạn, nửa khoảng trên $\\mathbb{R}$.",
    officialContent: `1. **Mệnh đề:** Một câu khẳng định có tính đúng hoặc sai rõ ràng. Một mệnh đề không thể vừa đúng vừa sai.
2. **Mệnh đề phủ định $\\overline{P}$:** Nếu $P$ đúng thì $\\overline{P}$ sai; nếu $P$ sai thì $\\overline{P}$ đúng.
- Phủ định của $\\forall x \\in X, P(x)$ là: $\\exists x \\in X, \\overline{P(x)}$.
- Phủ định của $\\exists x \\in X, P(x)$ là: $\\forall x \\in X, \\overline{P(x)}$.
3. **Mệnh đề kéo theo $P \\Rightarrow Q$:** Chỉ sai khi $P$ đúng mà $Q$ sai.
4. **Các tập con thường dùng của $\\mathbb{R}$:**
- Khoảng: $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$.
- Đoạn: $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.
- Nửa khoảng: $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$; $(a; b] = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$.`,
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
    officialContent: `1. **Vectơ:** Đoạn thẳng có hướng (có điểm đầu và điểm cuối). Vectơ không $\\vec{0}$ có độ dài bằng 0 và hướng tuỳ ý.
2. **Các quy tắc hình học:**
- **Quy tắc 3 điểm (quy tắc tam giác):** Với ba điểm $A, B, C$ bất kì ta luôn có: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.
- **Quy tắc hiệu:** $\\vec{AB} - \\vec{AC} = \\vec{CB}$.
- **Quy tắc hình bình hành:** Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.
3. **Tích vô hướng của hai vectơ:**
$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$
- **Hệ quả quan trọng:** Hai vectơ khác $\\vec{0}$ vuông góc khi và chỉ khi tích vô hướng bằng 0:
$$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$$`,
    formulaLatex: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b}), \\ \\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0",
    sourceName: "SGK Toán 10 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 10 (Tập 1), Chương IV: Vectơ, Bài 8 & Bài 11, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 11 ===================
  {
    id: "kb-t11-so-trung-binh-ghep-nhom",
    keywords: [
      "so trung binh",
      "so trung binh cong",
      "tinh so trung binh",
      "tinh so trung binh cong",
      "tinh so trung binh cong lop 11",
      "mau so lieu ghep nhom",
      "gia tri dai dien",
      "trung vi ghep nhom",
      "tu phan vi ghep nhom",
      "mot ghep nhom",
      "thong ke lop 11",
      "cac so dac trung do xu the trung tam"
    ],
    topic: "Số trung bình cộng & Các số đặc trưng của mẫu số liệu ghép nhóm (Toán 11)",
    grade: 11,
    questionVariants: [
      "tính số trung bình cộng lớp 11",
      "tính số trung bình lớp 11",
      "số trung bình cộng của mẫu số liệu ghép nhóm",
      "công thức tính số trung bình cộng lớp 11",
      "công thức tính số trung bình của mẫu số liệu ghép nhóm",
      "các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
      "tính trung vị của mẫu số liệu ghép nhóm",
      "tính mốt của mẫu số liệu ghép nhóm",
      "tứ phân vị của mẫu số liệu ghép nhóm"
    ],
    summary: "Công thức tính số trung bình cộng, giá trị đại diện nhóm, trung vị, tứ phân vị và mốt của mẫu số liệu ghép nhóm lớp 11 chuẩn SGK.",
    officialContent: `1. **Khái niệm mẫu số liệu ghép nhóm:**
Mẫu số liệu ghép nhóm là mẫu số liệu được cho dưới dạng các khoảng/nửa khoảng rời nhau: $[a_1; a_2), [a_2; a_3), ..., [a_k; a_{k+1})$ cùng với tần số tương ứng $m_1, m_2, ..., m_k$.
Cỡ mẫu: $n = m_1 + m_2 + ... + m_k$.

2. **Công thức tính số trung bình cộng của mẫu số liệu ghép nhóm:**
- **Bước 1: Xác định giá trị đại diện $c_i$ của từng nhóm:**
  $$c_i = \\frac{a_i + a_{i+1}}{2} \\quad (i = 1, 2, ..., k)$$
- **Bước 2: Áp dụng công thức số trung bình cộng:**
  $$\\overline{x} = \\frac{m_1 c_1 + m_2 c_2 + ... + m_k c_k}{n} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i$$

3. **Trung vị ($M_e$) của mẫu số liệu ghép nhóm:**
Giả sử nhóm $[a_p; a_{p+1})$ là nhóm đầu tiên có tần số tích luỹ $\\ge \\frac{n}{2}$ (gọi là nhóm chứa trung vị):
$$M_e = a_p + \\frac{\\frac{n}{2} - C}{m_p} \\cdot (a_{p+1} - a_p)$$
*(với $C = m_1 + m_2 + ... + m_{p-1}$ là tổng tần số của các nhóm đứng trước nhóm chứa trung vị).*

4. **Tứ phân vị ($Q_1, Q_2, Q_3$):**
- $Q_2 = M_e$.
- $Q_1$ tính theo nhóm chứa $\\frac{n}{4}$: $Q_1 = a_p + \\frac{\\frac{n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$.
- $Q_3$ tính theo nhóm chứa $\\frac{3n}{4}$: $Q_3 = a_r + \\frac{\\frac{3n}{4} - C}{m_r} \\cdot (a_{r+1} - a_r)$.

5. **Mốt ($M_o$) của mẫu số liệu ghép nhóm:**
Giả sử nhóm $[a_j; a_{j+1})$ có tần số lớn nhất $m_j$:
$$M_o = a_j + \\frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (a_{j+1} - a_j)$$

6. **Ví dụ áp dụng minh họa cụ thể:**
Cho mẫu số liệu ghép nhóm về thời gian truy cập Internet (giờ/ngày) của 40 học sinh:
- Nhóm $[0; 1)$: tần số $m_1 = 5 \\implies$ Giá trị đại diện $c_1 = \\frac{0+1}{2} = 0,5$.
- Nhóm $[1; 2)$: tần số $m_2 = 15 \\implies$ Giá trị đại diện $c_2 = \\frac{1+2}{2} = 1,5$.
- Nhóm $[2; 3)$: tần số $m_3 = 12 \\implies$ Giá trị đại diện $c_3 = \\frac{2+3}{2} = 2,5$.
- Nhóm $[3; 4)$: tần số $m_4 = 8 \\implies$ Giá trị đại diện $c_4 = \\frac{3+4}{2} = 3,5$.
Cỡ mẫu: $n = 5 + 15 + 12 + 8 = 40$.
*Số trung bình cộng:*
$$\\overline{x} = \\frac{5 \\cdot 0,5 + 15 \\cdot 1,5 + 12 \\cdot 2,5 + 8 \\cdot 3,5}{40} = \\frac{2,5 + 22,5 + 30 + 28}{40} = \\frac{83}{40} = 2,075\\text{ (giờ)}.$$`,
    formulaLatex: "\\overline{x} = \\frac{\\sum m_i c_i}{n} = \\frac{m_1 c_1 + m_2 c_2 + ... + m_k c_k}{n}, \\ c_i = \\frac{a_i + a_{i+1}}{2}",
    standardSteps: [
      "Bước 1: Tính giá trị đại diện c_i = (a_i + a_{i+1})/2 của từng nhóm dữ liệu.",
      "Bước 2: Nhân từng giá trị đại diện c_i với tần số m_i tương ứng.",
      "Bước 3: Cộng tổng các tích vừa tìm được rồi chia cho cỡ mẫu n = tổng các tần số."
    ],
    sourceName: "SGK Toán 11 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 1), Chương V: Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu ghép nhóm, Bài 13: Số gần đúng và sai số - Các số đặc trưng đo xu thế trung tâm (Trang 128 - 134), NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t11-luong-giac",
    keywords: [
      "cong thuc luong giac",
      "ham so luong giac",
      "duong tron luong giac",
      "radian",
      "cong thuc cong",
      "nhan doi",
      "bien doi tich thanh tong",
      "bien doi tong thanh tich",
      "luong giac 11"
    ],
    topic: "Hàm số lượng giác & Công thức lượng giác đại số",
    grade: 11,
    questionVariants: [
      "công thức lượng giác",
      "công thức lượng giác cơ bản",
      "công thức cộng lượng giác",
      "công thức nhân đôi sin2x cos2x",
      "đổi từ độ sang radian",
      "tập giá trị của sin và cos",
      "hàm số lượng giác"
    ],
    summary: "Đường tròn lượng giác, các hệ thức cơ bản, công thức cộng, công thức góc nhân đôi và hạ bậc.",
    officialContent: `1. **Đổi đơn vị đo góc:**
$$180^\\circ = \\pi \\text{ rad} \\implies 1^\\circ = \\frac{\\pi}{180} \\text{ rad}, \\quad 1 \\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ$$
2. **Các hệ thức lượng giác cơ bản:**
- $\\sin^2 x + \\cos^2 x = 1$
- $\\tan x = \\frac{\\sin x}{\\cos x} \\ (x \\neq \\frac{\\pi}{2} + k\\pi); \\quad \\cot x = \\frac{\\cos x}{\\sin x} \\ (x \\neq k\\pi)$
- $1 + \\tan^2 x = \\frac{1}{\\cos^2 x}; \\quad 1 + \\cot^2 x = \\frac{1}{\\sin^2 x}$
3. **Công thức cộng:**
- $\\cos(a \\mp b) = \\cos a \\cos b \\pm \\sin a \\sin b$
- $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$
- $\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}$
4. **Công thức nhân đôi:**
- $\\sin 2x = 2\\sin x \\cos x$
- $\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$
- $\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$
5. **Công thức hạ bậc:**
$$\\cos^2 x = \\frac{1 + \\cos 2x}{2}; \\quad \\sin^2 x = \\frac{1 - \\cos 2x}{2}$$`,
    formulaLatex: "\\sin^2 x + \\cos^2 x = 1, \\ \\sin 2x = 2\\sin x \\cos x, \\ \\cos 2x = 2\\cos^2 x - 1",
    sourceName: "SGK Toán 11 (Tập 1) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 1), Chương I: Hàm số lượng giác và phương trình lượng giác, Bài 1 & Bài 2, NXB Giáo Dục Việt Nam."
  },
  {
    id: "kb-t11-cap-so-cong-nhan",
    keywords: ["cap so cong", "cap so nhan", "cong sai d", "cong boi q", "so hang tong quat", "tong n so hang"],
    topic: "Cấp số cộng và Cấp số nhân",
    grade: 11,
    questionVariants: [
      "công thức cấp số cộng",
      "công thức số hạng tổng quát cấp số cộng",
      "tính tổng n số hạng cấp số cộng",
      "công thức cấp số nhân",
      "tổng cấp số nhân lùi vô hạn"
    ],
    summary: "Định nghĩa, số hạng tổng quát và công thức tổng $n$ số hạng đầu của cấp số cộng, cấp số nhân.",
    officialContent: `1. **Cấp số cộng $(u_n)$:**
- **Định nghĩa:** $u_{n+1} = u_n + d$ ($d$ là công sai).
- **Số hạng tổng quát:** $u_n = u_1 + (n - 1)d \\ (n \\ge 2)$.
- **Tính chất ba số hạng liên tiếp:** $u_k = \\frac{u_{k-1} + u_{k+1}}{2}$.
- **Tổng $n$ số hạng đầu:** $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$.
2. **Cấp số nhân $(u_n)$:**
- **Định nghĩa:** $u_{n+1} = u_n \\cdot q$ ($q$ là công bội).
- **Số hạng tổng quát:** $u_n = u_1 \\cdot q^{n-1} \\ (n \\ge 2)$.
- **Tổng $n$ số hạng đầu:** $S_n = \\frac{u_1(1 - q^n)}{1 - q} \\ (q \\neq 1)$.
- **Tổng cấp số nhân lùi vô hạn ($|q| < 1$):** $S = \\frac{u_1}{1 - q}$.`,
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
      "quy tắc tính đạo hàm u nhân v",
      "bảng đạo hàm cơ bản"
    ],
    summary: "Bảng đạo hàm các hàm số cơ bản, quy tắc tính đạo hàm và phương trình tiếp tuyến.",
    officialContent: `1. **Bảng đạo hàm cơ bản:**
- $(c)' = 0$ ($c$ là hằng số)
- $(x^n)' = n x^{n-1}$
- $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}} \\ (x > 0)$
- $(\\sin x)' = \\cos x; \\quad (\\cos x)' = -\\sin x$
- $(\\tan x)' = 1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$
- $(\\cot x)' = -(1 + \\cot^2 x) = -\\frac{1}{\\sin^2 x}$
2. **Các quy tắc tính đạo hàm:**
- $(u \\pm v)' = u' \\pm v'$
- $(u \\cdot v)' = u' v + u v'$
- $\\left(\\frac{u}{v}\\right)' = \\frac{u' v - u v'}{v^2} \\ (v \\neq 0)$
- Đạo hàm hàm hợp: $[f(u)]' = f'(u) \\cdot u'$.
3. **Ý nghĩa hình học của đạo hàm:**
- Hệ số góc của tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ là: $k = f'(x_0)$.
- **Phương trình tiếp tuyến:**
$$y - y_0 = f'(x_0)(x - x_0) \\iff y = f'(x_0)(x - x_0) + y_0$$`,
    formulaLatex: "y = f'(x_0)(x - x_0) + y_0, \\ (uv)' = u'v + uv'",
    sourceName: "SGK Toán 11 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 2), Chương IX: Đạo hàm, NXB Giáo Dục Việt Nam."
  },

  {
    id: "kb-t11-khoang-cach",
    keywords: [
      "khoang cach",
      "khoang cach tu diem den mat phang",
      "khoang cach giua hai duong thang cheo nhau",
      "khoang cach giua duong thang va mat phang song song",
      "khoang cach giua hai mat phang song song",
      "khoang cach trong khong gian",
      "hinh hoc khong gian lop 11"
    ],
    topic: "Khoảng cách trong không gian (Toán 11)",
    grade: 11,
    questionVariants: [
      "tính khoảng cách lớp 11",
      "tính khoảng cách từ điểm đến mặt phẳng",
      "tính khoảng cách giữa hai đường thẳng chéo nhau",
      "công thức tính khoảng cách trong hình không gian lớp 11",
      "khoảng cách giữa hai mặt phẳng song song"
    ],
    summary: "Phương pháp tính khoảng cách từ điểm đến đường thẳng, điểm đến mặt phẳng và khoảng cách giữa hai đường thẳng chéo nhau hình học không gian 11.",
    officialContent: `1. **Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$:**
- Kẻ $MH \\perp (P)$ tại $H$. Khi đó $d(M, (P)) = MH$.
- **Phương pháp đổi điểm:** Nếu đường thẳng $AB$ cắt $(P)$ tại $I$ ($I \\notin (P)$) thì:
  $\\frac{d(A, (P))}{d(B, (P))} = \\frac{IA}{IB}$
- **Phương pháp thể tích (khối chóp):** $d(A, (SBC)) = \\frac{3 V_{S.ABC}}{S_{\\Delta SBC}}$.
2. **Khoảng cách giữa đường thẳng $a$ và mặt phẳng $(P)$ song song với $a$:**
$d(a, (P)) = d(M, (P)) \\quad (\\text{với } M \\text{ là điểm bất kì thuộc } a)$
3. **Khoảng cách giữa hai mặt phẳng song song $(P)$ và $(Q)$:**
$d((P), (Q)) = d(M, (Q)) \\quad (\\text{với } M \\in (P))$
4. **Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$:**
- Dựng mặt phẳng $(P)$ chứa $b$ và song song với $a$: Khi đó $d(a, b) = d(a, (P)) = d(M, (P))$ với $M \\in a$.
- Dựng đoạn vuông góc chung $HK$ ($H \\in a, K \\in b, HK \\perp a, HK \\perp b$): $d(a, b) = HK$.`,
    formulaLatex: "d(M, (P)) = MH \\ (MH \\perp (P)), \\ d(a, b) = d(a, (P)) \\ (b \\subset (P), a \\parallel (P))",
    standardSteps: [
      "Bước 1: Xác định chân đường vuông góc hạ từ đỉnh xuống đáy hình chóp/lăng trụ.",
      "Bước 2: Sử dụng phương pháp dời điểm về chân đường cao để tính khoảng cách.",
      "Bước 3: Dựng tam giác vuông chứa đoạn vuông góc và dùng hệ thức lượng (ví dụ: 1/h^2 = 1/a^2 + 1/b^2)."
    ],
    sourceName: "SGK Toán 11 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 11 (Tập 2), Chương VII: Quan hệ vuông góc trong không gian, Bài 24: Khoảng cách trong không gian, NXB Giáo Dục Việt Nam."
  },

  // =================== TOÁN 12 ===================
  {
    id: "kb-t12-khao-sat-ham-so",
    keywords: ["don dieu", "dong bien", "nghich bien", "cuc tri", "gia tri lon nhat", "gia tri nho nhat", "tiem can", "khao sat ham so"],
    topic: "Ứng dụng đạo hàm khảo sát và vẽ đồ thị hàm số",
    grade: 12,
    questionVariants: [
      "điều kiện hàm số đồng biến nghịch biến",
      "cách tìm cực trị hàm số",
      "tìm tiệm cận đứng và tiệm cận ngang",
      "tìm giá trị lớn nhất nhỏ nhất trên đoạn",
      "khảo sát hàm số"
    ],
    summary: "Xét tính đơn điệu, cực trị, đường tiệm cận đứng, ngang, xiên và bài toán GTLN - GTNN theo chuẩn 2026.",
    officialContent: `1. **Tính đơn điệu:** Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$.
- Nếu $f'(x) > 0, \\forall x \\in K$ thì hàm số **đồng biến** trên $K$.
- Nếu $f'(x) < 0, \\forall x \\in K$ thì hàm số **nghịch biến** trên $K$.
2. **Cực trị của hàm số (Dấu hiệu I):** Nếu $f'(x_0) = 0$ (hoặc $f'$ không xác định tại $x_0$) và $f'(x)$ đổi dấu khi qua $x_0$:
- Đổi dấu từ '+' sang '-': $x_0$ là **điểm cực đại**.
- Đổi dấu từ '-' sang '+': $x_0$ là **điểm cực tiểu**.
3. **Đường tiệm cận của đồ thị hàm số:**
- **Tiệm cận ngang:** $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0 \\implies y = y_0$.
- **Tiệm cận đứng:** $\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty \\implies x = x_0$.
- **Tiệm cận xiên $y = ax + b$ ($a \\neq 0$):** Khi $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.`,
    formulaLatex: "f'(x) > 0 \\implies \\text{Đồng biến}, \\ \\lim_{x \\to \\infty} f(x) = y_0 \\implies \\text{TCN: } y = y_0",
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
      "thể tích khối tròn xoay",
      "tích phân"
    ],
    summary: "Định nghĩa nguyên hàm, định lý Newton - Leibniz, phương pháp đổi biến, từng phần và tính diện tích, thể tích.",
    officialContent: `1. **Định lý Newton - Leibniz:**
$$\\int_a^b f(x) \\, dx = F(b) - F(a) = F(x) \\Big|_a^b \\quad (\\text{với } F'(x) = f(x))$$
2. **Phương pháp tích phân từng phần:**
$$\\int_a^b u \\, dv = (u v) \\Big|_a^b - \\int_a^b v \\, du$$
3. **Ứng dụng tính diện tích hình phẳng:**
- Giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ ($y = 0$) và hai đường thẳng $x = a, x = b$:
$$S = \\int_a^b |f(x)| \\, dx$$
- Giới hạn bởi hai đồ thị $y = f(x)$ và $y = g(x)$ từ $x = a$ đến $x = b$:
$$S = \\int_a^b |f(x) - g(x)| \\, dx$$
4. **Ứng dụng tính thể tích khối tròn xoay (quay quanh trục $Ox$):**
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
      "phương trình mặt cầu tâm i bán kính r",
      "hệ tọa độ oxyz"
    ],
    summary: "Hệ toạ độ $Oxyz$, vectơ pháp tuyến, vectơ chỉ phương, phương trình mặt phẳng, đường thẳng và mặt cầu.",
    officialContent: `1. **Phương trình mặt phẳng $(P)$:** Đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec{n} = (A; B; C) \\neq \\vec{0}$ làm vectơ pháp tuyến:
$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0$$
- **Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(P)$:**
$$d(M_0, (P)) = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$
2. **Phương trình đường thẳng $(d)$:** Đi qua điểm $M_0(x_0; y_0; z_0)$ và có vectơ chỉ phương $\\vec{u} = (a; b; c) \\neq \\vec{0}$:
- **Phương trình tham số:**
$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$
3. **Phương trình mặt cầu $(S)$:** Tâm $I(a; b; c)$, bán kính $R$:
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
      "hai biến cố độc lập khi nào",
      "xác suất có điều kiện"
    ],
    summary: "Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes chuẩn cấu trúc thi tốt nghiệp THPT từ năm 2025.",
    officialContent: `1. **Xác suất có điều kiện:**
$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)$$
- Hệ quả quy tắc nhân: $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$.
2. **Biến cố độc lập:** Hai biến cố $A$ và $B$ độc lập khi và chỉ khi:
$$P(A \\cap B) = P(A) \\cdot P(B)$$
3. **Công thức xác suất toàn phần:** Cho $B_1, B_2, ..., B_n$ là một hệ biến cố đầy đủ:
$$P(A) = \\sum_{i=1}^n P(B_i) \\cdot P(A \\mid B_i)$$
4. **Công thức Bayes:**
$$P(B_k \\mid A) = \\frac{P(B_k) \\cdot P(A \\mid B_k)}{P(A)} = \\frac{P(B_k) \\cdot P(A \\mid B_k)}{\\sum_{i=1}^n P(B_i) \\cdot P(A \\mid B_i)}$$`,
    formulaLatex: "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\ P(A) = \\sum P(B_i) P(A \\mid B_i), \\ P(B_k \\mid A) = \\frac{P(B_k) P(A \\mid B_k)}{P(A)}",
    sourceName: "SGK Toán 12 (Tập 2) - Bộ sách Kết nối tri thức với cuộc sống (Chuẩn thi Bộ GD&ĐT 2025 - 2026)",
    sourceUrl: "https://hanhtrangso.nxbgd.vn",
    sourceCitation: "Sách giáo khoa Toán 12 (Tập 2), Chương VI: Xác suất có điều kiện, NXB Giáo Dục Việt Nam."
  }
];

/**
 * Danh sách các từ dừng (stopwords) trong câu hỏi toán học tiếng Việt.
 * Các từ này KHÔNG được dùng để tính điểm đơn lẻ, tránh việc "tính số..." match nhầm sang bài khác.
 */
const STOP_WORDS = new Set([
  "so", "tinh", "cac", "la", "gi", "cua", "trong", "va", "cho", "mot", 
  "nhung", "bang", "de", "theo", "the", "nao", "hay", "co", "khi", "nhu", 
  "bai", "hoc", "ra", "sao", "giup", "em", "thay", "co", "cong", "thuc",
  "phuong", "phap", "cach", "quy", "tac", "tim"
]);

/**
 * Hàm chuẩn hóa văn bản tiếng Việt để tìm kiếm
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Kiểm tra xem từ đơn có xuất hiện dưới dạng một từ độc lập (whole word) hay không.
 */
function containsWholeWord(text: string, word: string): boolean {
  const normT = " " + normalizeText(text) + " ";
  const normW = normalizeText(word);
  if (!normW) return false;
  return normT.includes(" " + normW + " ");
}

let _cachedAllKnowledgeItems: KnowledgeItem[] | null = null;

/**
 * TẬP HỢP TOÀN BỘ TRI THỨC TOÁN HỌC TỪ LỚP 6 ĐẾN LỚP 12:
 * Kết hợp tri thức thủ công chi tiết (EDUCATIONAL_KNOWLEDGE_BASE)
 * với tất cả 252+ bài học trong CURRICULUM_DATA (Toán 6, 7, 8, 9, 10, 11, 12).
 * Tự động cập nhật ngay khi dự án thêm bài học mới hoặc cập nhật công thức!
 */
export function getAllVinaKnowledgeItems(): KnowledgeItem[] {
  if (_cachedAllKnowledgeItems) {
    return _cachedAllKnowledgeItems;
  }

  const items: KnowledgeItem[] = [...EDUCATIONAL_KNOWLEDGE_BASE];
  const existingIds = new Set(items.map((i) => i.id));

  // Quét toàn bộ CURRICULUM_DATA từ Lớp 6 đến Lớp 12
  for (const [, gradeData] of Object.entries(CURRICULUM_DATA)) {
    const gradeNum = gradeData.gradeNumber;
    for (const chapter of gradeData.chapters) {
      for (const lesson of chapter.lessons) {
        const synthId = `curriculum-${lesson.id}`;
        if (existingIds.has(synthId) || existingIds.has(lesson.id)) continue;

        const rawTitle = lesson.title.replace(/^Bài\s+\d+[:.]\s*/i, "").trim();
        const normTitle = normalizeText(rawTitle);
        const normChapter = normalizeText(chapter.title.replace(/^Chương\s+[IVXLCDM\d]+[:.]\s*/i, ""));

        // Tạo bigrams từ tiêu đề bài học và tiêu đề chương để tăng độ nhạy
        const words = normTitle.split(" ").filter(Boolean);
        const bigrams: string[] = [];
        for (let i = 0; i < words.length - 1; i++) {
          const bg = `${words[i]} ${words[i + 1]}`;
          if (!STOP_WORDS.has(words[i]) || !STOP_WORDS.has(words[i + 1])) {
            bigrams.push(bg);
          }
        }

        const chapterWords = normChapter.split(" ").filter(Boolean);
        for (let i = 0; i < chapterWords.length - 1; i++) {
          bigrams.push(`${chapterWords[i]} ${chapterWords[i + 1]}`);
        }

        const keywords = [
          normTitle,
          normChapter,
          ...bigrams,
          ...words.filter((w) => w.length >= 3 && !STOP_WORDS.has(w)),
          lesson.strand,
        ];

        const questionVariants = [
          rawTitle.toLowerCase(),
          `công thức ${rawTitle.toLowerCase()}`,
          `phương pháp ${rawTitle.toLowerCase()}`,
          `cách giải ${rawTitle.toLowerCase()}`,
          `toán ${gradeNum} ${rawTitle.toLowerCase()}`,
          `lý thuyết ${rawTitle.toLowerCase()}`,
          `định lý ${rawTitle.toLowerCase()}`,
        ];

        const formulasFormatted =
          lesson.keyFormulas && lesson.keyFormulas.length > 0
            ? lesson.keyFormulas.map((f) => `$$${f}$$`).join("\n")
            : "";

        const officialContent = [
          `**1. Khái niệm & Trọng tâm kiến thức (${lesson.title}):**\n${lesson.description}`,
          formulasFormatted ? `**2. Công thức cốt lõi chuẩn SGK:**\n${formulasFormatted}` : "",
          `**3. Định hướng phương pháp giải:**\n- Bước 1: Nhận diện dạng toán và tóm tắt các giả thiết liên quan đến ${rawTitle}.\n- Bước 2: Áp dụng chuẩn xác hệ thức, công thức liên quan.\n- Bước 3: Kiểm tra điều kiện xác định và kết luận nghiệm/đáp số.`,
        ]
          .filter(Boolean)
          .join("\n\n");

        items.push({
          id: synthId,
          keywords,
          topic: `${lesson.title} (${gradeData.title})`,
          grade: gradeNum,
          questionVariants,
          summary: lesson.description,
          officialContent,
          formulaLatex: lesson.keyFormulas ? lesson.keyFormulas.join("; ") : "",
          standardSteps: [
            `Bước 1: Đọc kỹ đề bài, xác định các giả thiết và đại lượng liên quan đến ${rawTitle}.`,
            `Bước 2: Áp dụng công thức và tính chất chuẩn SGK: ${lesson.keyFormulas[0] || rawTitle}`,
            "Bước 3: Thực hiện tính toán và kiểm tra điều kiện xác định để đưa ra đáp số chính xác.",
          ],
          sourceName: `SGK ${gradeData.title} - ${gradeData.bookSeries || "Bộ sách Kết Nối Tri Thức"}`,
          sourceUrl: "https://hanhtrangso.nxbgd.vn",
          sourceCitation: `Sách giáo khoa ${gradeData.title}, ${chapter.title}, ${lesson.title}.`,
        });
      }
    }
  }

  _cachedAllKnowledgeItems = items;
  return _cachedAllKnowledgeItems;
}

/**
 * Hàm tìm kiếm kiến thức chuẩn xác từ toàn bộ kho học liệu Toán 6 - 12
 */
export function queryEducationalKnowledgeBase(userQuestion: string): {
  match: KnowledgeItem | null;
  confidence: number;
  allCandidates: { item: KnowledgeItem; score: number }[];
} {
  const normQ = normalizeText(userQuestion);

  if (!normQ) {
    return { match: null, confidence: 0, allCandidates: [] };
  }

  // Nhận diện rõ ràng lớp học trong câu hỏi (Ví dụ: "lớp 11", "toán 11", "k11", "lớp 10"...)
  let queryGrade: number | null = null;
  const gradeRegex = /(?:lop|toan|k)\s*(6|7|8|9|10|11|12)\b/;
  const matchGrade = normQ.match(gradeRegex);
  if (matchGrade) {
    queryGrade = parseInt(matchGrade[1], 10);
  }

  const allItems = getAllVinaKnowledgeItems();

  const scored = allItems.map((item) => {
    let coreScore = 0;

    // 1. So khớp biến thể câu hỏi (Question Variants) - Trọng số cao nhất
    for (const v of item.questionVariants) {
      const normV = normalizeText(v);
      if (normQ === normV) {
        coreScore += 200; // Trùng khớp hoàn toàn câu hỏi
      } else if (normQ.includes(normV) && normV.length >= 6) {
        coreScore += 100; // Câu hỏi người dùng chứa trọn vẹn biến thể mẫu
      } else if (normV.includes(normQ) && normQ.length >= 6) {
        coreScore += 70; // Biến thể mẫu chứa câu hỏi người dùng
      }
    }

    // 2. So khớp từ khóa chuyên môn (Keywords)
    const matchedKeywords = new Set<string>();
    for (const kw of item.keywords) {
      const normKw = normalizeText(kw);
      if (!normKw || STOP_WORDS.has(normKw) || matchedKeywords.has(normKw)) continue;

      if (normKw.includes(" ")) {
        // Cụm từ khóa nhiều chữ (ví dụ: "dao ham", "so trung binh", "phuong trinh mat phang")
        if (normQ.includes(normKw)) {
          matchedKeywords.add(normKw);
          coreScore += 120;
        }
      } else {
        // Từ khóa đơn
        if (containsWholeWord(normQ, normKw)) {
          matchedKeywords.add(normKw);
          coreScore += 25;
        }
      }
    }

    // 3. So khớp tiêu đề chủ đề (Topic)
    const normTopic = normalizeText(item.topic);
    if (normQ.includes(normTopic) && normTopic.length >= 8) {
      coreScore += 80;
    }

    // 4. KIỂM SOÁT LỚP HỌC CHẶT CHẼ:
    let gradeBonus = 0;
    if (queryGrade !== null && item.grade > 0) {
      if (item.grade === queryGrade) {
        if (coreScore >= 20) {
          gradeBonus += 100;
        }
      } else {
        gradeBonus -= 150;
      }
    }

    const totalScore = coreScore + gradeBonus;
    return { item, score: totalScore, coreScore };
  });

  scored.sort((a, b) => b.score - a.score);

  const best = scored[0];
  // BẮT BUỘC coreScore >= 30 và totalScore >= 30
  if (best && best.coreScore >= 30 && best.score >= 30) {
    return {
      match: best.item,
      confidence: best.score,
      allCandidates: scored.filter((s) => s.coreScore >= 30 && s.score >= 30),
    };
  }

  return {
    match: null,
    confidence: 0,
    allCandidates: [],
  };
}

/**
 * Trích xuất ngữ cảnh kiến thức GDPT 2018 Toán 6 - 12 để huấn luyện / tiêm vào prompt của Trợ Lý AI Vina
 */
export function getVinaCurriculumGroundingContext(userQuestion: string): {
  groundingText: string;
  matchedItem: KnowledgeItem | null;
} {
  const result = queryEducationalKnowledgeBase(userQuestion);
  const match = result.match;

  if (!match) {
    return {
      groundingText: "",
      matchedItem: null,
    };
  }

  const stepsFormatted =
    match.standardSteps && match.standardSteps.length > 0
      ? match.standardSteps.map((s, idx) => `  ${idx + 1}. ${s}`).join("\n")
      : "";

  const formulasFormatted = match.formulaLatex ? `  ${match.formulaLatex}` : "";

  const groundingText = `
📚 TRI THỨC TOÁN HỌC TRÍCH XUẤT TỪ DỰ ÁN VINAMATH (GDPT 2018 - TOÁN 6 ĐẾN 12):
- **Chủ đề:** ${match.topic} (Khối ${match.grade})
- **Tóm tắt lý thuyết:** ${match.summary}
${formulasFormatted ? `- **Công thức trọng tâm:**\n${formulasFormatted}` : ""}
${stepsFormatted ? `- **Phương pháp & Các bước giải chuẩn SGK:**\n${stepsFormatted}` : ""}
- **Nguồn trích dẫn:** ${match.sourceName} (${match.sourceCitation})
`.trim();

  return {
    groundingText,
    matchedItem: match,
  };
}