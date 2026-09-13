export interface LessonItem {
  id: string;
  lessonNumber: number;
  title: string;
  strand: "daiso" | "hinhhoc" | "thongke";
  description: string;
  keyFormulas: string[];
  hasInteractive?: "geometry" | "function" | "circle" | "vector";
}

export interface ChapterItem {
  id: string;
  volume: "tap-1" | "tap-2" | "chuyen-de";
  chapterNumber: number;
  title: string;
  description: string;
  lessons: LessonItem[];
}

export interface GradeData {
  grade: string;
  gradeNumber: number;
  title: string;
  subtitle: string;
  description: string;
  bookSeries: string;
  badge: string;
  gradient: string;
  icon: string;
  hasSpecializedTopic?: boolean; // Lớp 10, 11, 12 có sách chuyên đề
  chapters: ChapterItem[];
  topics: LessonItem[];
}

export const CURRICULUM_DATA: { [key: string]: GradeData } = {
  // ==========================================
  // TOÁN 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-6": {
    grade: "lop-6",
    gradeNumber: 6,
    title: "Toán 6",
    subtitle: "Khởi đầu tư duy logic và số học thực tiễn",
    description: "Sách giáo khoa Toán 6 - Kết nối tri thức với cuộc sống (Tập 1 & Tập 2)",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 6",
    gradient: "from-amber-400 via-orange-500 to-amber-600",
    icon: "🌱",
    hasSpecializedTopic: false,
    chapters: [
      // TẬP 1
      {
        id: "t6-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Tập hợp các số tự nhiên",
        description: "Tập hợp, cách ghi số tự nhiên, các phép tính cộng trừ nhân chia, phép nâng lên lũy thừa và thứ tự thực hiện phép tính.",
        lessons: [
          { id: "t6-b1-tap-hop", lessonNumber: 1, title: "Bài 1: Tập hợp", strand: "daiso", description: "Khái niệm tập hợp, phần tử thuộc/không thuộc tập hợp, các cách viết tập hợp.", keyFormulas: ["a \\in A, \\ b \\notin A", "A = \\{x \\in \\mathbb{N} \\mid x < 10\\}"] },
          { id: "t6-b2-cach-ghi-so-tu-nhien", lessonNumber: 2, title: "Bài 2: Cách ghi số tự nhiên", strand: "daiso", description: "Hệ thập phân, các hàng trong hệ thập phân và chữ số La Mã.", keyFormulas: ["\\overline{ab} = 10a + b", "\\overline{abc} = 100a + 10b + c"] },
          { id: "t6-b3-thu-tu-so-tu-nhien", lessonNumber: 3, title: "Bài 3: Thứ tự trong tập hợp các số tự nhiên", strand: "daiso", description: "So sánh hai số tự nhiên, biểu diễn trên tia số.", keyFormulas: ["a < b \\text{ khi điểm } a \\text{ nằm bên trái điểm } b \\text{ trên tia số}"] },
          { id: "t6-b4-phep-cong-tru-so-tu-nhien", lessonNumber: 4, title: "Bài 4: Phép cộng và phép trừ số tự nhiên", strand: "daiso", description: "Tính chất giao hoán, kết hợp của phép cộng và điều kiện phép trừ.", keyFormulas: ["a + b = b + a", "(a + b) + c = a + (b + c)"] },
          { id: "t6-b5-phep-nhan-chia-so-tu-nhien", lessonNumber: 5, title: "Bài 5: Phép nhân và phép chia số tự nhiên", strand: "daiso", description: "Tính chất phân phối của phép nhân đối với phép cộng, phép chia hết và chia có dư.", keyFormulas: ["a(b + c) = ab + ac", "a = b \\cdot q + r \\ (0 \\le r < b)"] },
          { id: "t6-b6-luy-thua-so-mu-tu-nhien", lessonNumber: 6, title: "Bài 6: Lũy thừa với số mũ tự nhiên", strand: "daiso", description: "Nhân và chia hai lũy thừa cùng cơ số.", keyFormulas: ["a^m \\cdot a^n = a^{m+n}", "a^m : a^n = a^{m-n} \\ (a \\neq 0, m \\ge n)"] },
          { id: "t6-b7-thu-tu-thuc-hien-phep-tinh", lessonNumber: 7, title: "Bài 7: Thứ tự thực hiện các phép tính", strand: "daiso", description: "Quy tắc ngoặc tròn, vuông, nhọn và thứ tự lũy thừa, nhân chia, cộng trừ.", keyFormulas: ["( ) \\to [ ] \\to \\{ \\}"] },
        ],
      },
      {
        id: "t6-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
        description: "Quan hệ chia hết, dấu hiệu chia hết cho 2, 3, 5, 9, số nguyên tố, ƯCLN và BCNN.",
        lessons: [
          { id: "t6-b8-quan-he-chia-het", lessonNumber: 8, title: "Bài 8: Quan hệ chia hết và tính chất", strand: "daiso", description: "Khái niệm ước và bội, tính chất chia hết của một tổng.", keyFormulas: ["a \\ \\vdots \\ m \\text{ và } b \\ \\vdots \\ m \\Rightarrow (a + b) \\ \\vdots \\ m"] },
          { id: "t6-b9-dau-hieu-chia-het-2-5", lessonNumber: 9, title: "Bài 9: Dấu hiệu chia hết cho 2, cho 5", strand: "daiso", description: "Xét chữ số tận cùng.", keyFormulas: ["a \\ \\vdots \\ 2 \\Leftrightarrow \\text{chữ số tận cùng } \\in \\{0, 2, 4, 6, 8\\}"] },
          { id: "t6-b10-dau-hieu-chia-het-3-9", lessonNumber: 10, title: "Bài 10: Dấu hiệu chia hết cho 3, cho 9", strand: "daiso", description: "Xét tổng các chữ số.", keyFormulas: ["a \\ \\vdots \\ 9 \\Leftrightarrow \\text{Tổng các chữ số } \\vdots \\ 9"] },
          { id: "t6-b11-so-nguyen-to", lessonNumber: 11, title: "Bài 11: Số nguyên tố", strand: "daiso", description: "Số nguyên tố, hợp số và phân tích một số ra thừa số nguyên tố.", keyFormulas: ["p > 1, \\ p \\text{ chỉ có 2 ước là 1 và chính nó}"] },
          { id: "t6-b12-uoc-chung-ucln", lessonNumber: 12, title: "Bài 12: Ước chung và ước chung lớn nhất", strand: "daiso", description: "Tìm ƯCLN và rút gọn phân số.", keyFormulas: ["\\text{ƯCLN}(a, b) = \\text{tích thừa số nguyên tố chung với số mũ nhỏ nhất}"] },
          { id: "t6-b13-boi-chung-bcnn", lessonNumber: 13, title: "Bài 13: Bội chung và bội chung nhỏ nhất", strand: "daiso", description: "Tìm BCNN và quy đồng mẫu số các phân số.", keyFormulas: ["\\text{BCNN}(a, b) = \\text{tích thừa số chung và riêng với số mũ lớn nhất}"] },
        ],
      },
      {
        id: "t6-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Số nguyên",
        description: "Tập hợp Z, các phép tính cộng trừ nhân chia số nguyên và quy tắc dấu.",
        lessons: [
          { id: "t6-b14-tap-hop-so-nguyen", lessonNumber: 14, title: "Bài 14: Tập hợp các số nguyên", strand: "daiso", description: "Số nguyên âm, số nguyên dương và biểu diễn trên trục số.", keyFormulas: ["\\mathbb{Z} = \\{...; -2; -1; 0; 1; 2; ...\\}"] },
          { id: "t6-b15-phep-cong-tru-so-nguyen", lessonNumber: 15, title: "Bài 15: Phép cộng và phép trừ số nguyên", strand: "daiso", description: "Cộng hai số nguyên cùng dấu, khác dấu và quy tắc trừ.", keyFormulas: ["a - b = a + (-b)"] },
          { id: "t6-b16-phep-nhan-so-nguyen", lessonNumber: 16, title: "Bài 16: Phép nhân số nguyên", strand: "daiso", description: "Quy tắc dấu khi nhân hai số nguyên.", keyFormulas: ["(-a) \\cdot (-b) = a \\cdot b", "(-a) \\cdot b = -(ab)"] },
          { id: "t6-b17-phep-chia-het-so-nguyen", lessonNumber: 17, title: "Bài 17: Phép chia hết. Ước và bội của một số nguyên", strand: "daiso", description: "Bội và ước trong tập hợp Z.", keyFormulas: ["a = b \\cdot q \\Rightarrow a \\ \\vdots \\ b"] },
        ],
      },
      {
        id: "t6-t1-c4",
        volume: "tap-1",
        chapterNumber: 4,
        title: "Chương IV: Một số hình phẳng trong thực tiễn",
        description: "Tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân và diện tích.",
        lessons: [
          { id: "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu", lessonNumber: 18, title: "Bài 18: Tam giác đều. Hình vuông. Lục giác đều", strand: "hinhhoc", description: "Khám phá các hình đều qua cạnh, góc và đường chéo.", keyFormulas: ["C = 4a, \\ S = a^2"], hasInteractive: "geometry" },
          { id: "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can", lessonNumber: 19, title: "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân", strand: "hinhhoc", description: "Đặc điểm các tứ giác trong thực tế.", keyFormulas: ["S_{\\text{HCN}} = ab, \\ S_{\\text{HBH}} = ah"], hasInteractive: "geometry" },
          { id: "t6-b20-chu-vi-dien-tich-tu-giac", lessonNumber: 20, title: "Bài 20: Chu vi và diện tích của một số tứ giác đã học", strand: "hinhhoc", description: "Tính chu vi, diện tích hình thoi, hình thang.", keyFormulas: ["S_{\\text{thoi}} = \\frac{1}{2} d_1 d_2", "S_{\\text{thang}} = \\frac{(a+b)h}{2}"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t6-t1-c5",
        volume: "tap-1",
        chapterNumber: 5,
        title: "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
        description: "Trục đối xứng và tâm đối xứng của hình phẳng.",
        lessons: [
          { id: "t6-b21-hinh-co-truc-doi-xung", lessonNumber: 21, title: "Bài 21: Hình có trục đối xứng", strand: "hinhhoc", description: "Nhận biết hình có trục đối xứng trong thực tiễn.", keyFormulas: ["\\text{Trục đối xứng chia hình thành hai phần bằng nhau}"] },
          { id: "t6-b22-hinh-co-tam-doi-xung", lessonNumber: 22, title: "Bài 22: Hình có tâm đối xứng", strand: "hinhhoc", description: "Nhận biết tâm đối xứng qua phép quay 180 độ.", keyFormulas: ["\\text{Tâm đối xứng là trung điểm của mọi đoạn thẳng qua nó}"] },
        ],
      },

      // TẬP 2
      {
        id: "t6-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Phân số",
        description: "Mở rộng phân số, phân số bằng nhau, so sánh phân số, cộng trừ nhân chia phân số và hai bài toán về phân số.",
        lessons: [
          { id: "t6-b23-mo-rong-phan-so", lessonNumber: 23, title: "Bài 23: Mở rộng phân số. Phân số bằng nhau", strand: "daiso", description: "Khái niệm phân số và tính chất cơ bản.", keyFormulas: ["\\frac{a}{b} = \\frac{c}{d} \\Leftrightarrow ad = bc"] },
          { id: "t6-b24-so-sanh-phan-so", lessonNumber: 24, title: "Bài 24: So sánh phân số. Hỗn số dương", strand: "daiso", description: "Quy đồng mẫu và so sánh phân số.", keyFormulas: ["\\frac{a}{m} < \\frac{b}{m} \\ (m > 0, a < b)"] },
          { id: "t6-b25-phep-cong-tru-phan-so", lessonNumber: 25, title: "Bài 25: Phép cộng và phép trừ phân số", strand: "daiso", description: "Cộng trừ phân số cùng mẫu và khác mẫu.", keyFormulas: ["\\frac{a}{m} + \\frac{b}{m} = \\frac{a+b}{m}"] },
          { id: "t6-b26-phep-nhan-chia-phan-so", lessonNumber: 26, title: "Bài 26: Phép nhân và phép chia phân số", strand: "daiso", description: "Quy tắc nhân phân số và nhân nghịch đảo.", keyFormulas: ["\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}"] },
          { id: "t6-b27-hai-bai-toan-ve-phan-so", lessonNumber: 27, title: "Bài 27: Hai bài toán về phân số", strand: "daiso", description: "Tìm giá trị phân số của một số và tìm một số biết giá trị phân số của nó.", keyFormulas: ["b = a \\cdot \\frac{m}{n}, \\ a = b : \\frac{m}{n}"] },
        ],
      },
      {
        id: "t6-t2-c7",
        volume: "tap-2",
        chapterNumber: 7,
        title: "Chương VII: Số thập phân",
        description: "Số thập phân, các phép tính với số thập phân, làm tròn số và bài toán tỉ số phần trăm.",
        lessons: [
          { id: "t6-b28-so-thap-phan", lessonNumber: 28, title: "Bài 28: Số thập phân", strand: "daiso", description: "Khái niệm số thập phân âm, dương và số đối.", keyFormulas: ["-0,5 = -\\frac{5}{10}"] },
          { id: "t6-b29-tinh-toan-so-thap-phan", lessonNumber: 29, title: "Bài 29: Tính toán với số thập phân", strand: "daiso", description: "Cộng, trừ, nhân, chia số thập phân.", keyFormulas: ["a \\cdot (-b) = -(ab)"] },
          { id: "t6-b30-lam-tron-uoc-luong", lessonNumber: 30, title: "Bài 30: Làm tròn và ước lượng", strand: "daiso", description: "Quy tắc làm tròn số thập phân đến hàng quy định.", keyFormulas: ["\\text{Xét chữ số ngay sau hàng làm tròn}"] },
          { id: "t6-b31-ti-so-ti-so-phan-tram", lessonNumber: 31, title: "Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm", strand: "daiso", description: "Tính tỉ số phần trăm của hai số và giá trị phần trăm.", keyFormulas: ["\\frac{a}{b} \\cdot 100\\%"] },
        ],
      },
      {
        id: "t6-t2-c8",
        volume: "tap-2",
        chapterNumber: 8,
        title: "Chương VIII: Những hình hình học cơ bản",
        description: "Điểm, đường thẳng, tia, đoạn thẳng, trung điểm, góc và số đo góc.",
        lessons: [
          { id: "t6-b32-diem-duong-thang", lessonNumber: 32, title: "Bài 32: Điểm và đường thẳng", strand: "hinhhoc", description: "Điểm thuộc/không thuộc đường thẳng, ba điểm thẳng hàng.", keyFormulas: ["A \\in d, \\ B \\notin d"], hasInteractive: "geometry" },
          { id: "t6-b33-diem-nam-giua-tia", lessonNumber: 33, title: "Bài 33: Điểm nằm giữa hai điểm. Tia", strand: "hinhhoc", description: "Khái niệm tia gốc O và điểm nằm giữa.", keyFormulas: ["Ox, \\ Oy \\text{ là hai tia đối nhau}"], hasInteractive: "geometry" },
          { id: "t6-b34-doan-thang", lessonNumber: 34, title: "Bài 34: Đoạn thẳng. Độ dài đoạn thẳng", strand: "hinhhoc", description: "Khái niệm đoạn thẳng và so sánh độ dài.", keyFormulas: ["AM + MB = AB \\Leftrightarrow M \\text{ nằm giữa } A, B"], hasInteractive: "geometry" },
          { id: "t6-b35-trung-diem-doan-thang", lessonNumber: 35, title: "Bài 35: Trung điểm của đoạn thẳng", strand: "hinhhoc", description: "Điểm chính giữa chia đôi đoạn thẳng.", keyFormulas: ["MA = MB = \\frac{AB}{2}"], hasInteractive: "geometry" },
          { id: "t6-b36-goc", lessonNumber: 36, title: "Bài 36: Góc", strand: "hinhhoc", description: "Góc là hình gồm hai tia chung gốc.", keyFormulas: ["\\widehat{xOy}"], hasInteractive: "geometry" },
          { id: "t6-b37-so-do-goc", lessonNumber: 37, title: "Bài 37: Số đo góc", strand: "hinhhoc", description: "Góc nhọn, góc vuông, góc tù, góc bẹt.", keyFormulas: ["0^\\circ < \\widehat{\\text{nhọn}} < 90^\\circ", "\\widehat{\\text{vuông}} = 90^\\circ"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t6-t2-c9",
        volume: "tap-2",
        chapterNumber: 9,
        title: "Chương IX: Dữ liệu và xác suất thực nghiệm",
        description: "Thu thập dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột, cột kép và xác suất thực nghiệm.",
        lessons: [
          { id: "t6-b38-du-lieu-thu-thap", lessonNumber: 38, title: "Bài 38: Dữ liệu và thu thập dữ liệu", strand: "thongke", description: "Thu thập, phân loại và lập bảng số liệu ban đầu.", keyFormulas: ["\\text{Bảng số liệu thống kê}"] },
          { id: "t6-b39-bang-thong-ke-bieu-do-tranh", lessonNumber: 39, title: "Bài 39: Bảng thống kê và biểu đồ tranh", strand: "thongke", description: "Đọc và biểu diễn dữ liệu bằng biểu đồ tranh.", keyFormulas: ["\\text{Mỗi biểu tượng đại diện cho một số lượng}"] },
          { id: "t6-b40-bieu-do-cot", lessonNumber: 40, title: "Bài 40: Biểu đồ cột", strand: "thongke", description: "Vẽ và đọc biểu đồ cột.", keyFormulas: ["\\text{Biểu đồ cột đơn}"] },
          { id: "t6-b41-bieu-do-cot-kep", lessonNumber: 41, title: "Bài 41: Biểu đồ cột kép", strand: "thongke", description: "So sánh hai tập dữ liệu cùng loại bằng cột kép.", keyFormulas: ["\\text{Biểu đồ cột kép so sánh}"] },
          { id: "t6-b42-ket-qua-su-kien", lessonNumber: 42, title: "Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm", strand: "thongke", description: "Khái niệm kết quả có thể và biến cố chắc chắn, không thể.", keyFormulas: ["\\text{Tập các kết quả có thể}"] },
          { id: "t6-b43-xac-suat-thuc-nghiem", lessonNumber: 43, title: "Bài 43: Xác suất thực nghiệm", strand: "thongke", description: "Tỉ số giữa số lần xảy ra sự kiện và tổng số lần thực hiện.", keyFormulas: ["P_{\\text{thực nghiệm}} = \\frac{k}{n}"] },
        ],
      },
    ],
    topics: [],
  },

  // ==========================================
  // TOÁN 7 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-7": {
    grade: "lop-7",
    gradeNumber: 7,
    title: "Toán 7",
    subtitle: "Số hữu tỉ, Tỉ lệ thức, Thống kê & Hình học chứng minh",
    description: "Sách giáo khoa Toán 7 - Kết nối tri thức với cuộc sống (Tập 1 & Tập 2)",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 7",
    gradient: "from-orange-500 via-rose-500 to-pink-500",
    icon: "🔺",
    hasSpecializedTopic: false,
    chapters: [
      // TẬP 1
      {
        id: "t7-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Số hữu tỉ",
        description: "Tập hợp số hữu tỉ, các phép tính cộng trừ nhân chia, lũy thừa số hữu tỉ và quy tắc dấu ngoặc.",
        lessons: [
          { id: "t7-b1-tap-hop-so-huu-ti", lessonNumber: 1, title: "Bài 1: Tập hợp các số hữu tỉ", strand: "daiso", description: "Định nghĩa số hữu tỉ a/b và biểu diễn trên trục số.", keyFormulas: ["\\mathbb{Q} = \\left\\{\\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\neq 0\\right\\}"] },
          { id: "t7-b2-cong-tru-nhan-chia-so-huu-ti", lessonNumber: 2, title: "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ", strand: "daiso", description: "Thứ tự thực hiện phép tính và quy tắc chuyển vế.", keyFormulas: ["x + y = z \\Leftrightarrow x = z - y"] },
          { id: "t7-b3-luy-thua-so-huu-ti", lessonNumber: 3, title: "Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ", strand: "daiso", description: "Lũy thừa của một tích, lũy thừa của một thương.", keyFormulas: ["\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}", "(x^m)^n = x^{m \\cdot n}"] },
          { id: "t7-b4-thu-tu-phep-tinh-dau-ngoac", lessonNumber: 4, title: "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc dấu ngoặc", strand: "daiso", description: "Quy tắc bỏ ngoặc có dấu cộng hoặc dấu trừ đằng trước.", keyFormulas: ["-(a - b + c) = -a + b - c"] },
        ],
      },
      {
        id: "t7-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Số thực",
        description: "Số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học và tập hợp số thực R.",
        lessons: [
          { id: "t7-b5-so-thap-phan-vo-han-tuan-hoan", lessonNumber: 5, title: "Bài 5: Làm quen với số thập phân vô hạn tuần hoàn", strand: "daiso", description: "Chu kỳ của số thập phân vô hạn tuần hoàn.", keyFormulas: ["\\frac{1}{3} = 0,(3)"] },
          { id: "t7-b6-so-vo-ti-can-bac-hai", lessonNumber: 6, title: "Bài 6: Số vô tỉ. Căn bậc hai số học", strand: "daiso", description: "Căn bậc hai số học của một số không âm.", keyFormulas: ["\\sqrt{a} = x \\Leftrightarrow x \\ge 0 \\text{ và } x^2 = a"] },
          { id: "t7-b7-tap-hop-so-thuc", lessonNumber: 7, title: "Bài 7: Tập hợp các số thực", strand: "daiso", description: "Trục số thực và giá trị tuyệt đối của số thực.", keyFormulas: ["|x| = x \\ (x \\ge 0), \\ |x| = -x \\ (x < 0)"] },
        ],
      },
      {
        id: "t7-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Góc và đường thẳng song song",
        description: "Góc đối đỉnh, kề bù, phân giác, hai đường thẳng song song và tiên đề Euclid.",
        lessons: [
          { id: "t7-b8-goc-vi-tri-dac-biet-tia-phan-giac", lessonNumber: 8, title: "Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc", strand: "hinhhoc", description: "Hai góc đối đỉnh, kề bù và tính chất tia phân giác.", keyFormulas: ["\\widehat{O_1} = \\widehat{O_2} \\text{ (hai góc đối đỉnh)}"], hasInteractive: "geometry" },
          { id: "t7-b9-hai-duong-thang-song-song", lessonNumber: 9, title: "Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết", strand: "hinhhoc", description: "Góc so le trong bằng nhau, góc đồng vị bằng nhau.", keyFormulas: ["a \\parallel b \\Leftrightarrow \\widehat{A_1} = \\widehat{B_1} \\text{ (so le trong)}"], hasInteractive: "geometry" },
          { id: "t7-b10-tien-de-euclid", lessonNumber: 10, title: "Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song", strand: "hinhhoc", description: "Qua một điểm ngoài đường thẳng chỉ có duy nhất một đường thẳng song song.", keyFormulas: ["c \\perp a \\text{ và } a \\parallel b \\Rightarrow c \\perp b"], hasInteractive: "geometry" },
          { id: "t7-b11-dinh-li-chung-minh-dinh-li", lessonNumber: 11, title: "Bài 11: Định lí và chứng minh định lí", strand: "hinhhoc", description: "Giả thiết và kết luận của một định lí toán học.", keyFormulas: ["\\text{Giả thiết (GT)} \\Rightarrow \\text{Kết luận (KL)}"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t7-t1-c4",
        volume: "tap-1",
        chapterNumber: 4,
        title: "Chương IV: Tam giác bằng nhau",
        description: "Tổng ba góc tam giác, các trường hợp c.c.c, c.g.c, g.c.g, tam giác vuông và tam giác cân.",
        lessons: [
          { id: "t7-b12-tong-goc-tam-giac", lessonNumber: 12, title: "Bài 12: Tổng các góc trong một tam giác", strand: "hinhhoc", description: "Định lý tổng 3 góc bằng 180 độ.", keyFormulas: ["\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ"], hasInteractive: "geometry" },
          { id: "t7-b13-tam-giac-bang-nhau-ccc", lessonNumber: 13, title: "Bài 13: Hai tam giác bằng nhau. Trường hợp thứ nhất (c.c.c)", strand: "hinhhoc", description: "Trường hợp cạnh - cạnh - cạnh.", keyFormulas: ["\\Delta ABC = \\Delta A'B'C' \\text{ (c.c.c)}"], hasInteractive: "geometry" },
          { id: "t7-b14-truong-hop-cgc-gcg", lessonNumber: 14, title: "Bài 14: Trường hợp bằng nhau thứ hai và thứ ba (c.g.c, g.c.g)", strand: "hinhhoc", description: "Cạnh - góc - cạnh và góc - cạnh - góc.", keyFormulas: ["\\Delta ABC = \\Delta A'B'C' \\text{ (c.g.c, g.c.g)}"], hasInteractive: "geometry" },
          { id: "t7-b15-tam-giac-vuong-bang-nhau", lessonNumber: 15, title: "Bài 15: Các trường hợp bằng nhau của tam giác vuông", strand: "hinhhoc", description: "Cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông.", keyFormulas: ["\\Delta \\text{ vuông bằng nhau}"], hasInteractive: "geometry" },
          { id: "t7-b16-tam-giac-can-trung-truc", lessonNumber: 16, title: "Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng", strand: "hinhhoc", description: "Hai cạnh bên bằng nhau, hai góc ở đáy bằng nhau.", keyFormulas: ["AB = AC \\Leftrightarrow \\widehat{B} = \\widehat{C}"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t7-t1-c5",
        volume: "tap-1",
        chapterNumber: 5,
        title: "Chương V: Thu thập và biểu diễn dữ liệu",
        description: "Thu thập, phân loại dữ liệu, biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.",
        lessons: [
          { id: "t7-b17-thu-thap-phan-loai-du-lieu", lessonNumber: 17, title: "Bài 17: Thu thập và phân loại dữ liệu", strand: "thongke", description: "Dữ liệu định tính, dữ liệu định lượng và tính hợp lý của dữ liệu.", keyFormulas: ["\\text{Dữ liệu định tính / định lượng}"] },
          { id: "t7-b18-bieu-do-hinh-quat-tron", lessonNumber: 18, title: "Bài 18: Biểu đồ hình quạt tròn", strand: "thongke", description: "Đọc và biểu diễn tỉ lệ phần trăm trên biểu đồ quạt tròn.", keyFormulas: ["\\text{Tổng các cung tròn} = 360^\\circ \\ (100\\%)"] },
          { id: "t7-b19-bieu-do-doan-thang", lessonNumber: 19, title: "Bài 19: Biểu đồ đoạn thẳng", strand: "thongke", description: "Biểu diễn sự thay đổi của một đại lượng theo thời gian.", keyFormulas: ["\\text{Trục ngang: Thời gian, Trục đứng: Đại lượng}"] },
        ],
      },

      // TẬP 2
      {
        id: "t7-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
        description: "Tỉ lệ thức, tính chất dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận và tỉ lệ nghịch.",
        lessons: [
          { id: "t7-b20-ti-le-thuc", lessonNumber: 20, title: "Bài 20: Tỉ lệ thức", strand: "daiso", description: "Đẳng thức của hai tỉ số a/b = c/d.", keyFormulas: ["\\frac{a}{b} = \\frac{c}{d} \\Leftrightarrow ad = bc"] },
          { id: "t7-b21-day-ti-so-bang-nhau", lessonNumber: 21, title: "Bài 21: Tính chất của dãy tỉ số bằng nhau", strand: "daiso", description: "Cộng trừ tử số và mẫu số tương ứng.", keyFormulas: ["\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a+c+e}{b+d+f}"] },
          { id: "t7-b22-dai-luong-ti-le-thuan", lessonNumber: 22, title: "Bài 22: Đại lượng tỉ lệ thuận", strand: "daiso", description: "Công thức y = kx và bài toán chia tỉ lệ thuận.", keyFormulas: ["y = kx \\ (k \\neq 0)"] },
          { id: "t7-b23-dai-luong-ti-le-nghich", lessonNumber: 23, title: "Bài 23: Đại lượng tỉ lệ nghịch", strand: "daiso", description: "Công thức y = a/x và bài toán chia tỉ lệ nghịch.", keyFormulas: ["y = \\frac{a}{x} \\ (a \\neq 0)"] },
        ],
      },
      {
        id: "t7-t2-c7",
        volume: "tap-2",
        chapterNumber: 7,
        title: "Chương VII: Biểu thức đại số và đa thức một biến",
        description: "Biểu thức đại số, đa thức một biến, cộng trừ nhân chia đa thức một biến.",
        lessons: [
          { id: "t7-b24-bieu-thuc-dai-so", lessonNumber: 24, title: "Bài 24: Biểu thức đại số", strand: "daiso", description: "Biểu thức chứa chữ và số, tính giá trị biểu thức.", keyFormulas: ["A = 2x^2 + 3x - 1"] },
          { id: "t7-b25-da-thuc-mot-bien", lessonNumber: 25, title: "Bài 25: Đa thức một biến", strand: "daiso", description: "Bậc của đa thức, hệ số cao nhất, hệ số tự do và nghiệm.", keyFormulas: ["P(x_0) = 0 \\Rightarrow x_0 \\text{ là nghiệm}"] },
          { id: "t7-b26-cong-tru-da-thuc", lessonNumber: 26, title: "Bài 26: Phép cộng và phép trừ đa thức một biến", strand: "daiso", description: "Cộng trừ theo hàng ngang hoặc cột dọc.", keyFormulas: ["P(x) \\pm Q(x)"] },
          { id: "t7-b27-nhan-da-thuc", lessonNumber: 27, title: "Bài 27: Phép nhân đa thức một biến", strand: "daiso", description: "Nhân đơn thức với đa thức, nhân đa thức với đa thức.", keyFormulas: ["A(B + C) = AB + AC"] },
          { id: "t7-b28-chia-da-thuc", lessonNumber: 28, title: "Bài 28: Phép chia đa thức một biến", strand: "daiso", description: "Chia đa thức cho đơn thức và phép chia có dư.", keyFormulas: ["A(x) = B(x) \\cdot Q(x) + R(x)"] },
        ],
      },
      {
        id: "t7-t2-c8",
        volume: "tap-2",
        chapterNumber: 8,
        title: "Chương VIII: Làm quen với biến cố và xác suất của biến cố",
        description: "Khái niệm biến cố ngẫu nhiên, biến cố chắc chắn, không thể và xác suất biến cố.",
        lessons: [
          { id: "t7-b29-lam-quen-voi-bien-co", lessonNumber: 29, title: "Bài 29: Làm quen với biến cố", strand: "thongke", description: "Biến cố ngẫu nhiên, biến cố chắc chắn, biến cố không thể.", keyFormulas: ["\\text{Biến cố } A \\text{ xảy ra / không xảy ra}"] },
          { id: "t7-b30-lam-quen-xac-suat-bien-co", lessonNumber: 30, title: "Bài 30: Làm quen với xác suất của biến cố", strand: "thongke", description: "Xác suất của biến cố trong trò chơi tung đồng xu, xúc xắc.", keyFormulas: ["P(A) = \\frac{1}{2}, \\ P(B) = \\frac{1}{6}"] },
        ],
      },
      {
        id: "t7-t2-c9",
        volume: "tap-2",
        chapterNumber: 9,
        title: "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
        description: "Quan hệ cạnh và góc đối diện, đường vuông góc và đường xiên, bất đẳng thức tam giác và các đường đồng quy.",
        lessons: [
          { id: "t7-b31-quan-he-canh-goc-doi-dien", lessonNumber: 31, title: "Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác", strand: "hinhhoc", description: "Góc đối diện với cạnh lớn hơn thì lớn hơn.", keyFormulas: ["AB < AC \\Leftrightarrow \\widehat{C} < \\widehat{B}"], hasInteractive: "geometry" },
          { id: "t7-b32-duong-vuong-goc-duong-xien", lessonNumber: 32, title: "Bài 32: Quan hệ giữa đường vuông góc và đường xiên", strand: "hinhhoc", description: "Đoạn vuông góc là đoạn ngắn nhất từ điểm đến đường thẳng.", keyFormulas: ["AH \\le AM \\ (AH \\perp d)"], hasInteractive: "geometry" },
          { id: "t7-b33-bat-dang-thuc-tam-giac", lessonNumber: 33, title: "Bài 33: Quan hệ giữa ba cạnh của tam giác. Bất đẳng thức tam giác", strand: "hinhhoc", description: "Tổng hai cạnh luôn lớn hơn cạnh thứ ba.", keyFormulas: ["|b - c| < a < b + c"], hasInteractive: "geometry" },
          { id: "t7-b34-dong-quy-trung-tuyen-phan-giac", lessonNumber: 34, title: "Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong tam giác", strand: "hinhhoc", description: "Trọng tâm G (tỉ lệ 2/3) và tâm đường tròn nội tiếp I.", keyFormulas: ["AG = \\frac{2}{3} AM"], hasInteractive: "geometry" },
          { id: "t7-b35-dong-quy-trung-truc-duong-cao", lessonNumber: 35, title: "Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong tam giác", strand: "hinhhoc", description: "Tâm đường tròn ngoại tiếp O và trực tâm H.", keyFormulas: ["OA = OB = OC = R"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t7-t2-c10",
        volume: "tap-2",
        chapterNumber: 10,
        title: "Chương X: Một số hình khối trong thực tiễn",
        description: "Hình hộp chữ nhật, hình lập phương, hình lăng trụ đứng tam giác và tứ giác.",
        lessons: [
          { id: "t7-b36-hinh-hop-chu-nhat-lap-phuong", lessonNumber: 36, title: "Bài 36: Hình hộp chữ nhật và hình lập phương", strand: "hinhhoc", description: "Diện tích xung quanh và thể tích hình hộp, lập phương.", keyFormulas: ["S_{xq} = 2(a+b)h, \\ V = abh, \\ V_{\\text{lập phương}} = a^3"], hasInteractive: "geometry" },
          { id: "t7-b37-hinh-lang-tru-dung", lessonNumber: 37, title: "Bài 37: Hình lăng trụ đứng tam giác và tứ giác", strand: "hinhhoc", description: "Công thức diện tích xung quanh và thể tích hình lăng trụ đứng.", keyFormulas: ["S_{xq} = C_{\\text{đáy}} \\cdot h, \\ V = S_{\\text{đáy}} \\cdot h"], hasInteractive: "geometry" },
        ],
      },
    ],
    topics: [],
  },

  // ==========================================
  // TOÁN 8 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-8": {
    grade: "lop-8",
    gradeNumber: 8,
    title: "Toán 8",
    subtitle: "Hằng đẳng thức đáng nhớ & Định lý Thalès",
    description: "Sách giáo khoa Toán 8 - Kết nối tri thức với cuộc sống (Tập 1 & Tập 2)",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 8",
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
    icon: "⚡",
    hasSpecializedTopic: false,
    chapters: [
      // TẬP 1
      {
        id: "t8-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Đa thức",
        description: "Đơn thức nhiều biến, đa thức nhiều biến, cộng trừ nhân chia đa thức.",
        lessons: [
          { id: "t8-b1-don-thuc", lessonNumber: 1, title: "Bài 1: Đơn thức", strand: "daiso", description: "Đơn thức thu gọn, bậc của đơn thức và đơn thức đồng dạng.", keyFormulas: ["2x^2y, \\ -5x^2y \\text{ là đơn thức đồng dạng}"] },
          { id: "t8-b2-da-thuc", lessonNumber: 2, title: "Bài 2: Đa thức", strand: "daiso", description: "Thu gọn đa thức và bậc của đa thức.", keyFormulas: ["A = x^2y + 3xy^2 - 5"] },
          { id: "t8-b3-phep-cong-tru-da-thuc", lessonNumber: 3, title: "Bài 3: Phép cộng và phép trừ đa thức", strand: "daiso", description: "Cộng trừ các đa thức nhiều biến.", keyFormulas: ["A + B, \\ A - B"] },
          { id: "t8-b4-phep-nhan-da-thuc", lessonNumber: 4, title: "Bài 4: Phép nhân đa thức", strand: "daiso", description: "Nhân đơn thức với đa thức, nhân đa thức với đa thức.", keyFormulas: ["A(B + C) = AB + AC", "(A+B)(C+D) = AC + AD + BC + BD"] },
          { id: "t8-b5-phep-chia-da-thuc-don-thuc", lessonNumber: 5, title: "Bài 5: Phép chia đa thức cho đơn thức", strand: "daiso", description: "Chia từng hạng tử của đa thức cho đơn thức.", keyFormulas: ["(A + B) : C = A : C + B : C"] },
        ],
      },
      {
        id: "t8-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
        description: "7 hằng đẳng thức đáng nhớ, phân tích đa thức thành nhân tử.",
        lessons: [
          { id: "t8-b6-binh-phuong-tong-hieu", lessonNumber: 6, title: "Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu", strand: "daiso", description: "3 hằng đẳng thức bậc 2.", keyFormulas: ["(A+B)^2 = A^2 + 2AB + B^2", "(A-B)^2 = A^2 - 2AB + B^2", "A^2 - B^2 = (A-B)(A+B)"] },
          { id: "t8-b7-lap-phuong-tong-hieu", lessonNumber: 7, title: "Bài 7: Lập phương của một tổng. Lập phương của một hiệu", strand: "daiso", description: "Hằng đẳng thức bậc 3 tổng và hiệu.", keyFormulas: ["(A+B)^3 = A^3 + 3A^2B + 3AB^2 + B^3", "(A-B)^3 = A^3 - 3A^2B + 3AB^2 - B^3"] },
          { id: "t8-b8-tong-hieu-hai-lap-phuong", lessonNumber: 8, title: "Bài 8: Tổng và hiệu hai lập phương", strand: "daiso", description: "Hằng đẳng thức tổng và hiệu hai lập phương.", keyFormulas: ["A^3 + B^3 = (A+B)(A^2 - AB + B^2)", "A^3 - B^3 = (A-B)(A^2 + AB + B^2)"] },
          { id: "t8-b9-phan-tich-da-thuc-nhan-tu", lessonNumber: 9, title: "Bài 9: Phân tích đa thức thành nhân tử", strand: "daiso", description: "Phương pháp nhân tử chung, hằng đẳng thức, nhóm hạng tử.", keyFormulas: ["AB + AC = A(B + C)"] },
        ],
      },
      {
        id: "t8-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Tứ giác",
        description: "Tứ giác, hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông.",
        lessons: [
          { id: "t8-b10-tu-giac", lessonNumber: 10, title: "Bài 10: Tứ giác", strand: "hinhhoc", description: "Tổng các góc trong tứ giác bằng 360 độ.", keyFormulas: ["\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ"], hasInteractive: "geometry" },
          { id: "t8-b11-hinh-thang-can", lessonNumber: 11, title: "Bài 11: Hình thang cân", strand: "hinhhoc", description: "Hình thang có hai góc kề một đáy bằng nhau hoặc hai đường chéo bằng nhau.", keyFormulas: ["\\widehat{D} = \\widehat{C}, \\ AC = BD"], hasInteractive: "geometry" },
          { id: "t8-b12-hinh-binh-hanh", lessonNumber: 12, title: "Bài 12: Hình bình hành", strand: "hinhhoc", description: "Các cạnh đối song song và bằng nhau, hai đường chéo cắt nhau tại trung điểm.", keyFormulas: ["AB \\parallel CD, \\ AB = CD"], hasInteractive: "geometry" },
          { id: "t8-b13-hinh-chu-nhat", lessonNumber: 13, title: "Bài 13: Hình chữ nhật", strand: "hinhhoc", description: "Tứ giác có 4 góc vuông, hai đường chéo bằng nhau.", keyFormulas: ["AC = BD, \\ S = ab"], hasInteractive: "geometry" },
          { id: "t8-b14-hinh-thoi-vuong", lessonNumber: 14, title: "Bài 14: Hình thoi và hình vuông", strand: "hinhhoc", description: "Đường chéo vuông góc và là phân giác các góc.", keyFormulas: ["d_1 \\perp d_2, \\ S = \\frac{1}{2} d_1 d_2"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t8-t1-c4",
        volume: "tap-1",
        chapterNumber: 4,
        title: "Chương IV: Định lí Thalès",
        description: "Định lí Thalès thuận/đảo, đường trung bình tam giác, tính chất phân giác.",
        lessons: [
          { id: "t8-b15-dinh-li-thales-tam-giac", lessonNumber: 15, title: "Bài 15: Định lí Thalès trong tam giác", strand: "hinhhoc", description: "Đường thẳng song song định ra trên hai cạnh những đoạn thẳng tỉ lệ.", keyFormulas: ["\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}"], hasInteractive: "geometry" },
          { id: "t8-b16-duong-trung-binh-tam-giac", lessonNumber: 16, title: "Bài 16: Đường trung bình của tam giác", strand: "hinhhoc", description: "Song song với cạnh thứ ba và bằng nửa cạnh đó.", keyFormulas: ["MN \\parallel BC, \\ MN = \\frac{1}{2} BC"], hasInteractive: "geometry" },
          { id: "t8-b17-tinh-chat-duong-phan-giac", lessonNumber: 17, title: "Bài 17: Tính chất đường phân giác của tam giác", strand: "hinhhoc", description: "Đường phân giác chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề.", keyFormulas: ["\\frac{DB}{DC} = \\frac{AB}{AC}"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t8-t1-c5",
        volume: "tap-1",
        chapterNumber: 5,
        title: "Chương V: Dữ liệu và biểu đồ",
        description: "Thu thập và phân loại dữ liệu, biểu diễn dữ liệu bằng bảng, biểu đồ và phân tích số liệu.",
        lessons: [
          { id: "t8-b18-thu-thap-phan-loai-du-lieu-8", lessonNumber: 18, title: "Bài 18: Thu thập và phân loại dữ liệu", strand: "thongke", description: "Dữ liệu định tính và định lượng rời rạc, liên tục.", keyFormulas: ["\\text{Phân loại dữ liệu}"] },
          { id: "t8-b19-bieu-dien-du-lieu-bang-bieu-do", lessonNumber: 19, title: "Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ", strand: "thongke", description: "Lựa chọn biểu đồ phù hợp (cột, quạt, đoạn thẳng).", keyFormulas: ["\\text{Biểu diễn dữ liệu thống kê}"] },
          { id: "t8-b20-phan-tich-so-lieu-thong-ke", lessonNumber: 20, title: "Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ", strand: "thongke", description: "Rút ra nhận xét, xu hướng và kết luận từ biểu đồ.", keyFormulas: ["\\text{Phân tích số liệu}"] },
        ],
      },

      // TẬP 2
      {
        id: "t8-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Phân thức đại số",
        description: "Phân thức đại số, tính chất cơ bản, cộng trừ nhân chia phân thức đại số.",
        lessons: [
          { id: "t8-b21-phan-thuc-dai-so", lessonNumber: 21, title: "Bài 21: Phân thức đại số", strand: "daiso", description: "Khái niệm biểu thức dạng A/B với A, B là đa thức (B khác 0).", keyFormulas: ["\\frac{A}{B} = \\frac{C}{D} \\Leftrightarrow A \\cdot D = B \\cdot C"] },
          { id: "t8-b22-tinh-chat-co-ban-phan-thuc", lessonNumber: 22, title: "Bài 22: Tính chất cơ bản của phân thức đại số", strand: "daiso", description: "Nhân hoặc chia cả tử và mẫu với cùng một đa thức khác 0.", keyFormulas: ["\\frac{A}{B} = \\frac{A \\cdot M}{B \\cdot M}"] },
          { id: "t8-b23-cong-tru-phan-thuc", lessonNumber: 23, title: "Bài 23: Phép cộng và phép trừ phân thức đại số", strand: "daiso", description: "Quy đồng mẫu thức và rút gọn.", keyFormulas: ["\\frac{A}{M} + \\frac{B}{M} = \\frac{A+B}{M}"] },
          { id: "t8-b24-nhan-chia-phan-thuc", lessonNumber: 24, title: "Bài 24: Phép nhân và phép chia phân thức đại số", strand: "daiso", description: "Quy tắc nhân và nhân với phân thức nghịch đảo.", keyFormulas: ["\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}, \\ \\frac{A}{B} : \\frac{C}{D} = \\frac{A \\cdot D}{B \\cdot C}"] },
        ],
      },
      {
        id: "t8-t2-c7",
        volume: "tap-2",
        chapterNumber: 7,
        title: "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
        description: "Phương trình ax + b = 0, giải toán bằng cách lập phương trình, hàm số y = ax + b.",
        lessons: [
          { id: "t8-b25-phuong-trinh-bac-nhat-mot-an", lessonNumber: 25, title: "Bài 25: Phương trình bậc nhất một ẩn", strand: "daiso", description: "Phương trình ax + b = 0 (a khác 0) và nghiệm x = -b/a.", keyFormulas: ["ax + b = 0 \\Leftrightarrow x = -\\frac{b}{a}"] },
          { id: "t8-b26-giai-toan-lap-pt-8", lessonNumber: 26, title: "Bài 26: Giải bài toán bằng cách lập phương trình", strand: "daiso", description: "Mô hình hóa bài toán thực tế đưa về phương trình bậc nhất.", keyFormulas: ["s = v \\cdot t"] },
          { id: "t8-b27-khai-niem-ham-so-do-thi", lessonNumber: 27, title: "Bài 27: Khái niệm hàm số và đồ thị của hàm số", strand: "daiso", description: "Bảng giá trị và biểu diễn điểm trên mặt phẳng tọa độ.", keyFormulas: ["y = f(x)"] },
          { id: "t8-b28-ham-so-bac-nhat-do-thi", lessonNumber: 28, title: "Bài 28: Hàm số bậc nhất y = ax + b và đồ thị", strand: "daiso", description: "Đồ thị đường thẳng cắt hai trục tọa độ.", keyFormulas: ["y = ax + b \\ (a \\neq 0)"], hasInteractive: "function" },
          { id: "t8-b29-he-so-goc-duong-thang", lessonNumber: 29, title: "Bài 29: Hệ số góc của đường thẳng", strand: "daiso", description: "Ý nghĩa hệ số a và vị trí tương đối hai đường thẳng song song, cắt nhau.", keyFormulas: ["d_1 \\parallel d_2 \\Leftrightarrow a_1 = a_2, \\ b_1 \\neq b_2"] },
        ],
      },
      {
        id: "t8-t2-c8",
        volume: "tap-2",
        chapterNumber: 8,
        title: "Chương VIII: Mở đầu về tính xác suất của biến cố",
        description: "Kết quả thuận lợi, cách tính xác suất của biến cố bằng tỉ số và mối liên hệ thực nghiệm.",
        lessons: [
          { id: "t8-b30-ket-qua-thuan-loi", lessonNumber: 30, title: "Bài 30: Kết quả có thể và kết quả thuận lợi", strand: "thongke", description: "Xác định các kết quả thuận lợi cho một biến cố.", keyFormulas: ["n(A) \\text{ là số kết quả thuận lợi}"] },
          { id: "t8-b31-cach-tinh-xac-suat-ti-so", lessonNumber: 31, title: "Bài 31: Cách tính xác suất của biến cố bằng tỉ số", strand: "thongke", description: "Công thức P(A) = n(A) / n(Omega).", keyFormulas: ["P(A) = \\frac{n(A)}{n(\\Omega)}"] },
          { id: "t8-b32-xac-suat-thuc-nghiem-va-li-thuyet", lessonNumber: 32, title: "Bài 32: Mối liên hệ giữa xác suất thực nghiệm với xác suất lí thuyết", strand: "thongke", description: "Khi số phép thử đủ lớn, xác suất thực nghiệm xấp xỉ xác suất lí thuyết.", keyFormulas: ["\\frac{k}{n} \\approx P(A)"] },
        ],
      },
      {
        id: "t8-t2-c9",
        volume: "tap-2",
        chapterNumber: 9,
        title: "Chương IX: Tam giác đồng dạng",
        description: "Hai tam giác đồng dạng, ba trường hợp c.c.c, c.g.c, g.g, định lí Pythagore.",
        lessons: [
          { id: "t8-b33-hai-tam-giac-dong-dang", lessonNumber: 33, title: "Bài 33: Hai tam giác đồng dạng", strand: "hinhhoc", description: "Tỉ số đồng dạng k và các góc tương ứng bằng nhau.", keyFormulas: ["\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{CA}{C'A'} = k"], hasInteractive: "geometry" },
          { id: "t8-b34-ba-truong-hop-dong-dang", lessonNumber: 34, title: "Bài 34: Ba trường hợp đồng dạng của hai tam giác", strand: "hinhhoc", description: "Các trường hợp đồng dạng c.c.c, c.g.c, g.g.", keyFormulas: ["\\Delta ABC \\sim \\Delta A'B'C' \\text{ (c.c.c, c.g.c, g.g)}"], hasInteractive: "geometry" },
          { id: "t8-b35-dinh-li-pythagore", lessonNumber: 35, title: "Bài 35: Định lí Pythagore và ứng dụng", strand: "hinhhoc", description: "Bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.", keyFormulas: ["BC^2 = AB^2 + AC^2"], hasInteractive: "geometry" },
          { id: "t8-b36-dong-dang-tam-giac-vuong", lessonNumber: 36, title: "Bài 36: Các trường hợp đồng dạng của hai tam giác vuông", strand: "hinhhoc", description: "Trường hợp góc nhọn và trường hợp hai cạnh góc vuông, cạnh huyền - cạnh góc vuông.", keyFormulas: ["\\Delta \\text{ vuông đồng dạng}"], hasInteractive: "geometry" },
          { id: "t8-b37-hinh-dong-dang", lessonNumber: 37, title: "Bài 37: Hình đồng dạng", strand: "hinhhoc", description: "Khái niệm hình đồng dạng trong tự nhiên và nghệ thuật.", keyFormulas: ["\\text{Hình đồng dạng tỉ lệ}"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t8-t2-c10",
        volume: "tap-2",
        chapterNumber: 10,
        title: "Chương X: Một số hình khối trong thực tiễn",
        description: "Hình chóp tam giác đều và hình chóp tứ giác đều.",
        lessons: [
          { id: "t8-b38-hinh-chop-tam-giac-deu", lessonNumber: 38, title: "Bài 38: Hình chóp tam giác đều", strand: "hinhhoc", description: "Diện tích xung quanh và thể tích hình chóp tam giác đều.", keyFormulas: ["S_{xq} = p \\cdot d, \\ V = \\frac{1}{3} S_{\\text{đáy}} \\cdot h"], hasInteractive: "geometry" },
          { id: "t8-b39-hinh-chop-tu-giac-deu", lessonNumber: 39, title: "Bài 39: Hình chóp tứ giác đều", strand: "hinhhoc", description: "Diện tích xung quanh và thể tích hình chóp tứ giác đều.", keyFormulas: ["V = \\frac{1}{3} a^2 \\cdot h"], hasInteractive: "geometry" },
        ],
      },
    ],
    topics: [],
  },

  // ==========================================
  // TOÁN 9 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-9": {
    grade: "lop-9",
    gradeNumber: 9,
    title: "Toán 9",
    subtitle: "Chinh phục kỳ thi Tuyển sinh vào Lớp 10 THPT",
    description: "Sách giáo khoa Toán 9 - Kết nối tri thức với cuộc sống (Tập 1 & Tập 2)",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 9",
    gradient: "from-emerald-400 via-teal-500 to-green-600",
    icon: "🎯",
    hasSpecializedTopic: false,
    chapters: [
      // TẬP 1
      {
        id: "t9-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
        description: "Phương trình bậc nhất hai ẩn, giải hệ bằng phương pháp thế, cộng đại số và giải bài toán bằng cách lập hệ.",
        lessons: [
          { id: "t9-b1-khai-niem-he-phuong-trinh", lessonNumber: 1, title: "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn", strand: "daiso", description: "Dạng tổng quát ax + by = c và nghiệm của hệ.", keyFormulas: ["\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}"] },
          { id: "t9-b2-giai-he-phuong-trinh", lessonNumber: 2, title: "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn", strand: "daiso", description: "Phương pháp thế và phương pháp cộng đại số.", keyFormulas: ["\\text{Thế } y = \\frac{c-ax}{b} \\text{ vào PT còn lại}"] },
          { id: "t9-b3-giai-toan-lap-he", lessonNumber: 3, title: "Bài 3: Giải bài toán bằng cách lập hệ phương trình", strand: "daiso", description: "Bài toán chuyển động, năng suất, phần trăm và hình học.", keyFormulas: ["s = v \\cdot t, \\ A = N \\cdot t"] },
        ],
      },
      {
        id: "t9-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
        description: "Phương trình tích, phương trình chứa ẩn ở mẫu, bất đẳng thức và bất phương trình bậc nhất một ẩn.",
        lessons: [
          { id: "t9-b4-pt-quy-ve-bac-nhat", lessonNumber: 4, title: "Bài 4: Phương trình quy về phương trình bậc nhất một ẩn", strand: "daiso", description: "Phương trình tích A(x).B(x) = 0 và phương trình chứa ẩn ở mẫu.", keyFormulas: ["A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x)=0 \\lor B(x)=0"] },
          { id: "t9-b5-bat-dang-thuc", lessonNumber: 5, title: "Bài 5: Bất đẳng thức và tính chất", strand: "daiso", description: "Tính chất liên hệ giữa thứ tự với phép cộng và phép nhân.", keyFormulas: ["a < b \\Rightarrow a + c < b + c, \\ a < b \\wedge c > 0 \\Rightarrow ac < bc"] },
          { id: "t9-b6-bat-phuong-trinh-bac-nhat", lessonNumber: 6, title: "Bài 6: Bất phương trình bậc nhất một ẩn", strand: "daiso", description: "Giải ax + b > 0 và biểu diễn tập nghiệm trên trục số.", keyFormulas: ["ax + b > 0 \\Leftrightarrow ax > -b"] },
        ],
      },
      {
        id: "t9-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Căn bậc hai và căn bậc ba",
        description: "Căn bậc hai số học, hằng đẳng thức căn A^2 = |A|, khai căn phép nhân chia và rút gọn biểu thức chứa căn.",
        lessons: [
          { id: "t9-b7-can-bac-hai-can-thuc", lessonNumber: 7, title: "Bài 7: Căn bậc hai và căn thức bậc hai", strand: "daiso", description: "Căn bậc hai số học và điều kiện xác định.", keyFormulas: ["\\sqrt{A^2} = |A|", "\\sqrt{A} \\text{ xác định } \\Leftrightarrow A \\ge 0"] },
          { id: "t9-b8-khai-can-nhan-chia", lessonNumber: 8, title: "Bài 8: Khai căn bậc hai với phép nhân và phép chia", strand: "daiso", description: "Khai phương một tích, khai phương một thương.", keyFormulas: ["\\sqrt{AB} = \\sqrt{A}\\sqrt{B}, \\ \\sqrt{\\frac{A}{B}} = \\frac{\\sqrt{A}}{\\sqrt{B}}"] },
          { id: "t9-b9-bien-doi-rut-gon-can-thuc", lessonNumber: 9, title: "Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai", strand: "daiso", description: "Đưa thừa số ra ngoài/vào trong dấu căn, khử mẫu, trục căn thức.", keyFormulas: ["\\sqrt{A^2B} = |A|\\sqrt{B}, \\ \\frac{1}{\\sqrt{A}+\\sqrt{B}} = \\frac{\\sqrt{A}-\\sqrt{B}}{A-B}"] },
          { id: "t9-b10-can-bac-ba", lessonNumber: 10, title: "Bài 10: Căn bậc ba và căn thức bậc ba", strand: "daiso", description: "Khái niệm căn bậc ba và các phép tính căn bậc ba.", keyFormulas: ["\\sqrt[3]{a} = x \\Leftrightarrow x^3 = a, \\ \\sqrt[3]{a^3} = a"] },
        ],
      },
      {
        id: "t9-t1-c4",
        volume: "tap-1",
        chapterNumber: 4,
        title: "Chương IV: Hệ thức lượng trong tam giác vuông",
        description: "Tỉ số lượng giác góc nhọn, hệ thức cạnh và góc trong tam giác vuông.",
        lessons: [
          { id: "t9-b11-ti-so-luong-giac-goc-nhon", lessonNumber: 11, title: "Bài 11: Tỉ số lượng giác của góc nhọn", strand: "hinhhoc", description: "Định nghĩa sin, cos, tan, cot trong tam giác vuông.", keyFormulas: ["\\sin \\alpha = \\frac{\\text{đối}}{\\text{huyền}}", "\\cos \\alpha = \\frac{\\text{kề}}{\\text{huyền}}"], hasInteractive: "geometry" },
          { id: "t9-b12-he-thuc-canh-goc-tam-giac-vuong", lessonNumber: 12, title: "Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng", strand: "hinhhoc", description: "Tính cạnh góc vuông theo cạnh huyền hoặc cạnh kề.", keyFormulas: ["b = a \\sin B = a \\cos C = c \\tan B"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t9-t1-c5",
        volume: "tap-1",
        chapterNumber: 5,
        title: "Chương V: Đường tròn",
        description: "Đường kính và dây cung, tiếp tuyến của đường tròn và vị trí tương đối giữa hai đường tròn.",
        lessons: [
          { id: "t9-b13-mo-dau-ve-duong-tron", lessonNumber: 13, title: "Bài 13: Mở đầu về đường tròn", strand: "hinhhoc", description: "Tâm, bán kính, sự xác định đường tròn qua 3 điểm không thẳng hàng.", keyFormulas: ["R = OA = OB = OC"], hasInteractive: "circle" },
          { id: "t9-b14-cung-va-day-duong-tron", lessonNumber: 14, title: "Bài 14: Cung và dây của một đường tròn", strand: "hinhhoc", description: "Đường kính vuông góc với dây thì đi qua trung điểm của dây.", keyFormulas: ["AB \\perp CD \\Rightarrow HC = HD"], hasInteractive: "circle" },
          { id: "t9-b15-do-dai-cung-dien-tich-quat", lessonNumber: 15, title: "Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên", strand: "hinhhoc", description: "Công thức l = pi R n / 180 và S quạt = pi R^2 n / 360.", keyFormulas: ["l = \\frac{\\pi R n}{180}, \\ S_{\\text{quạt}} = \\frac{\\pi R^2 n}{360}"], hasInteractive: "circle" },
          { id: "t9-b16-vi-tri-tuong-doi-duong-thang-duong-tron", lessonNumber: 16, title: "Bài 16: Vị trí tương đối của đường thẳng và đường tròn", strand: "hinhhoc", description: "Cắt nhau, tiếp xúc (tiếp tuyến) và không giao nhau.", keyFormulas: ["d < R \\Leftrightarrow 2 \\text{ điểm chung}, \\ d = R \\Leftrightarrow \\text{tiếp tuyến}"], hasInteractive: "circle" },
          { id: "t9-b17-vi-tri-tuong-doi-hai-duong-tron", lessonNumber: 17, title: "Bài 17: Vị trí tương đối của hai đường tròn", strand: "hinhhoc", description: "Tiếp xúc ngoài, tiếp xúc trong, cắt nhau và ngoài nhau.", keyFormulas: ["d = R + r \\text{ (tiếp xúc ngoài)}, \\ d = |R - r| \\text{ (tiếp xúc trong)}"], hasInteractive: "circle" },
        ],
      },

      // TẬP 2
      {
        id: "t9-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
        description: "Khảo sát parabol, phương trình bậc hai, hệ thức Vi-ét và ứng dụng giải toán tuyển sinh 10.",
        lessons: [
          { id: "t9-b18-ham-so-y-ax2", lessonNumber: 18, title: "Bài 18: Hàm số y = ax² (a ≠ 0)", strand: "daiso", description: "Tính chất biến thiên và đồ thị Parabol đỉnh O(0;0).", keyFormulas: ["y = ax^2 \\ (a > 0 \\text{ lõm lên, } a < 0 \\text{ úp xuống})"], hasInteractive: "function" },
          { id: "t9-b19-phuong-trinh-bac-hai", lessonNumber: 19, title: "Bài 19: Phương trình bậc hai một ẩn", strand: "daiso", description: "Công thức nghiệm chuẩn theo Delta và nghiệm thu gọn.", keyFormulas: ["\\Delta = b^2 - 4ac", "x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}"], hasInteractive: "function" },
          { id: "t9-b20-dinh-li-vi-et", lessonNumber: 20, title: "Bài 20: Định lí Vi-ét và ứng dụng", strand: "daiso", description: "Tính tổng S và tích P của hai nghiệm, nhẩm nghiệm và tìm hai số.", keyFormulas: ["x_1 + x_2 = -\\frac{b}{a}, \\ x_1 x_2 = \\frac{c}{a}"] },
          { id: "t9-b21-giai-toan-lap-pt-9", lessonNumber: 21, title: "Bài 21: Giải bài toán bằng cách lập phương trình", strand: "daiso", description: "Phương trình bậc hai mô hình hóa toán thực tế.", keyFormulas: ["\\text{Lập phương trình } ax^2 + bx + c = 0"] },
        ],
      },
      {
        id: "t9-t2-c7",
        volume: "tap-2",
        chapterNumber: 7,
        title: "Chương VII: Tần số và tần số tương đối",
        description: "Bảng tần số, bảng tần số tương đối, biểu đồ tần số và số liệu ghép nhóm.",
        lessons: [
          { id: "t9-b22-bang-bieu-do-tan-so", lessonNumber: 22, title: "Bài 22: Bảng tần số và biểu đồ tần số", strand: "thongke", description: "Lập bảng tần số và vẽ biểu đồ đoạn thẳng/cột tần số.", keyFormulas: ["n_i \\text{ là tần số}"] },
          { id: "t9-b23-tan-so-tuong-doi", lessonNumber: 23, title: "Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối", strand: "thongke", description: "Tỉ số phần trăm f_i = (n_i / N) * 100%.", keyFormulas: ["f_i = \\frac{n_i}{N} \\cdot 100\\%"] },
          { id: "t9-b24-tan-so-ghep-nhom", lessonNumber: 24, title: "Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ", strand: "thongke", description: "Ghép nhóm các giá trị liên tục thành các khoảng [a; b).", keyFormulas: ["\\text{Biểu đồ tần số ghép nhóm}"] },
        ],
      },
      {
        id: "t9-t2-c8",
        volume: "tap-2",
        chapterNumber: 8,
        title: "Chương VIII: Xác suất của biến cố trong một số mô hình xác suất đơn giản",
        description: "Phép thử ngẫu nhiên, không gian mẫu và tính xác suất biến cố liên quan.",
        lessons: [
          { id: "t9-b25-phep-thu-khong-gian-mau", lessonNumber: 25, title: "Bài 25: Phép thử ngẫu nhiên và không gian mẫu", strand: "thongke", description: "Xác định tập hợp tất cả các kết quả có thể Omega.", keyFormulas: ["\\Omega = \\{\\omega_1, \\omega_2, ..., \\omega_n\\}"] },
          { id: "t9-b26-xac-suat-bien-co-phep-thu", lessonNumber: 26, title: "Bài 26: Xác suất của biến cố liên quan tới phép thử", strand: "thongke", description: "Tính xác suất theo mô hình đồng khả năng.", keyFormulas: ["P(A) = \\frac{n(A)}{n(\\Omega)}"] },
        ],
      },
      {
        id: "t9-t2-c9",
        volume: "tap-2",
        chapterNumber: 9,
        title: "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
        description: "Góc nội tiếp, đường tròn ngoại tiếp/nội tiếp tam giác, tứ giác nội tiếp và đa giác đều.",
        lessons: [
          { id: "t9-b27-goc-noi-tiep", lessonNumber: 27, title: "Bài 27: Góc nội tiếp", strand: "hinhhoc", description: "Góc có đỉnh trên đường tròn, số đo bằng nửa góc ở tâm cùng chắn một cung.", keyFormulas: ["\\widehat{AMB} = \\frac{1}{2} \\widehat{AOB}"], hasInteractive: "circle" },
          { id: "t9-b28-duong-tron-ngoai-noi-tiep-tam-giac", lessonNumber: 28, title: "Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác", strand: "hinhhoc", description: "Tâm là giao 3 đường trung trực (ngoại tiếp) và 3 đường phân giác (nội tiếp).", keyFormulas: ["R = \\frac{abc}{4S}, \\ r = \\frac{S}{p}"], hasInteractive: "circle" },
          { id: "t9-b29-tu-giac-noi-tiep", lessonNumber: 29, title: "Bài 29: Tứ giác nội tiếp", strand: "hinhhoc", description: "Dấu hiệu nhận biết: tổng hai góc đối diện bằng 180 độ hoặc hai đỉnh kề nhìn cạnh đối diện cùng một góc.", keyFormulas: ["\\widehat{A} + \\widehat{C} = 180^\\circ, \\ \\widehat{B} + \\widehat{D} = 180^\\circ"], hasInteractive: "circle" },
          { id: "t9-b30-da-giac-deu", lessonNumber: 30, title: "Bài 30: Đa giác đều", strand: "hinhhoc", description: "Đa giác có tất cả các cạnh bằng nhau và các góc bằng nhau.", keyFormulas: ["\\alpha = \\frac{(n-2) \\cdot 180^\\circ}{n}"], hasInteractive: "circle" },
        ],
      },
      {
        id: "t9-t2-c10",
        volume: "tap-2",
        chapterNumber: 10,
        title: "Chương X: Một số hình khối trong thực tiễn",
        description: "Hình trụ, hình nón và hình cầu.",
        lessons: [
          { id: "t9-b31-hinh-tru-hinh-non", lessonNumber: 31, title: "Bài 31: Hình trụ và hình nón", strand: "hinhhoc", description: "Diện tích xung quanh và thể tích hình trụ, hình nón.", keyFormulas: ["S_{xq\\text{ trụ}} = 2\\pi R h, \\ V_{\\text{trụ}} = \\pi R^2 h, \\ V_{\\text{nón}} = \\frac{1}{3}\\pi R^2 h"], hasInteractive: "geometry" },
          { id: "t9-b32-hinh-cau", lessonNumber: 32, title: "Bài 32: Hình cầu", strand: "hinhhoc", description: "Diện tích mặt cầu và thể tích khối cầu.", keyFormulas: ["S = 4\\pi R^2, \\ V = \\frac{4}{3}\\pi R^3"], hasInteractive: "geometry" },
        ],
      },
    ],
    topics: [],
  },

  // ==========================================
  // TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-10": {
    grade: "lop-10",
    gradeNumber: 10,
    title: "Toán 10",
    subtitle: "Nền tảng Toán học THPT theo CT GDPT 2018",
    description: "Sách giáo khoa Toán 10 (Tập 1, Tập 2) & Chuyên đề học tập Toán 10",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 10",
    gradient: "from-blue-500 via-indigo-600 to-violet-600",
    icon: "🚀",
    hasSpecializedTopic: true,
    chapters: [
      // TẬP 1
      {
        id: "t10-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Mệnh đề và tập hợp",
        description: "Mệnh đề, mệnh đề chứa biến, tập hợp và các phép toán giao, hợp, hiệu trên tập hợp.",
        lessons: [
          { id: "t10-b1-menh-de", lessonNumber: 1, title: "Bài 1: Mệnh đề", strand: "daiso", description: "Mệnh đề đúng/sai, phủ định, mệnh đề kéo theo và ký hiệu với mọi, tồn tại.", keyFormulas: ["\\forall x \\in X, P(x)", "\\exists x \\in X, P(x)"] },
          { id: "t10-b2-tap-hop-cac-phep-toan", lessonNumber: 2, title: "Bài 2: Tập hợp và các phép toán trên tập hợp", strand: "daiso", description: "Giao, hợp, hiệu, phần bù và các khoảng, đoạn trên trục số thực.", keyFormulas: ["A \\cap B, \\ A \\cup B, \\ A \\setminus B"] },
          { id: "t10-on-tap-chuong-1", lessonNumber: 0, title: "Ôn tập cuối chương I", strand: "daiso", description: "Hệ thống hóa kiến thức Mệnh đề & Tập hợp với 3 đề ôn tập tổng hợp chuẩn Bộ GD&ĐT.", keyFormulas: ["P \\Rightarrow Q", "A \\cap B, \\ A \\cup B, \\ A \\setminus B, \\ C_E A"] },
        ],
      },
      {
        id: "t10-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
        description: "Miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn.",
        lessons: [
          { id: "t10-b3-bat-phuong-trinh-bac-nhat-hai-an", lessonNumber: 3, title: "Bài 3: Bất phương trình bậc nhất hai ẩn", strand: "daiso", description: "Biểu diễn miền nghiệm trên mặt phẳng tọa độ Oxy.", keyFormulas: ["ax + by \\le c"] },
          { id: "t10-b4-he-bat-phuong-trinh-bac-nhat-hai-an", lessonNumber: 4, title: "Bài 4: Hệ bất phương trình bậc nhất hai ẩn", strand: "daiso", description: "Miền nghiệm đa giác và bài toán tìm giá trị lớn nhất, nhỏ nhất thực tế.", keyFormulas: ["F(x, y) = ax + by \\text{ đạt GTLN tại một trong các đỉnh của miền nghiệm}"] },
          { id: "t10-on-tap-chuong-2", lessonNumber: 0, title: "Ôn tập cuối chương II", strand: "daiso", description: "Hệ thống hóa kiến thức Bất phương trình & Hệ bất phương trình bậc nhất hai ẩn với 3 đề ôn tập tổng hợp chuẩn Bộ GD&ĐT.", keyFormulas: ["ax + by \\le c", "\\begin{cases} a_1 x + b_1 y \\le c_1 \\\\ a_2 x + b_2 y \\le c_2 \\end{cases}", "F(x, y) = ax + by \\text{ đạt max/min tại đỉnh đa giác}"] },
        ],
      },
      {
        id: "t10-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Hệ thức lượng trong tam giác",
        description: "Giá trị lượng giác từ 0° đến 180°, Định lý Cosin, Định lý Sin và các công thức diện tích tam giác.",
        lessons: [
          { id: "t10-b5-gia-tri-luong-giac-0-180", lessonNumber: 5, title: "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°", strand: "hinhhoc", description: "Góc tù, góc nhọn, mối liên hệ góc phụ, góc bù.", keyFormulas: ["\\sin(180^\\circ - \\alpha) = \\sin \\alpha", "\\cos(180^\\circ - \\alpha) = -\\cos \\alpha"], hasInteractive: "geometry" },
          { id: "t10-b6-he-thuc-luong-tam-giac", lessonNumber: 6, title: "Bài 6: Hệ thức lượng trong tam giác", strand: "hinhhoc", description: "Định lý Cosin, Sin, công thức Heron và giải tam giác.", keyFormulas: ["a^2 = b^2 + c^2 - 2bc \\cos A", "\\frac{a}{\\sin A} = 2R", "S = \\sqrt{p(p-a)(p-b)(p-c)}"], hasInteractive: "geometry" },
        ],
      },
      {
        id: "t10-t1-c4",
        volume: "tap-1",
        chapterNumber: 4,
        title: "Chương IV: Vector",
        description: "Khái niệm vector, tổng hiệu hai vector, tích vector với một số, tọa độ và tích vô hướng.",
        lessons: [
          { id: "t10-b7-khai-niem-mo-dau-vector", lessonNumber: 7, title: "Bài 7: Các khái niệm mở đầu", strand: "hinhhoc", description: "Độ dài vector, hai vector cùng phương, cùng hướng, bằng nhau.", keyFormulas: ["|\\vec{a}|, \\ \\vec{a} = \\vec{b}"], hasInteractive: "vector" },
          { id: "t10-b8-tong-va-hieu-vector", lessonNumber: 8, title: "Bài 8: Tổng và hiệu của hai vector", strand: "hinhhoc", description: "Quy tắc ba điểm, quy tắc hình bình hành, vector đối.", keyFormulas: ["\\vec{AB} + \\vec{BC} = \\vec{AC}, \\ \\vec{AB} - \\vec{AC} = \\vec{CB}"], hasInteractive: "vector" },
          { id: "t10-b9-tich-vector-voi-mot-so", lessonNumber: 9, title: "Bài 9: Tích của một vector với một số", strand: "hinhhoc", description: "Điều kiện hai vector cùng phương và ba điểm thẳng hàng.", keyFormulas: ["\\vec{a} = k \\vec{b} \\Leftrightarrow \\vec{a} \\parallel \\vec{b}"], hasInteractive: "vector" },
          { id: "t10-b10-vector-trong-mat-phang-toa-do", lessonNumber: 10, title: "Bài 10: Vector trong mặt phẳng tọa độ", strand: "hinhhoc", description: "Tọa độ điểm và tọa độ vector trên hệ trục Oxy.", keyFormulas: ["\\vec{u} = (x; y) \\Leftrightarrow \\vec{u} = x\\vec{i} + y\\vec{j}"], hasInteractive: "vector" },
          { id: "t10-b11-tich-vo-huong-hai-vector", lessonNumber: 11, title: "Bài 11: Tích vô hướng của hai vector", strand: "hinhhoc", description: "Định nghĩa góc giữa hai vector và biểu thức tọa độ của tích vô hướng.", keyFormulas: ["\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\vec{u}, \\vec{v}) = u_1 v_1 + u_2 v_2"], hasInteractive: "vector" },
        ],
      },
      {
        id: "t10-t1-c5",
        volume: "tap-1",
        chapterNumber: 5,
        title: "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
        description: "Số gần đúng, sai số, số trung bình, trung vị, tứ phân vị, mốt, khoảng biến thiên và độ lệch chuẩn.",
        lessons: [
          { id: "t10-b12-so-gan-dung-sai-so", lessonNumber: 12, title: "Bài 12: Số gần đúng và sai số", strand: "thongke", description: "Sai số tuyệt đối, sai số tương đối và độ chính xác.", keyFormulas: ["\\Delta_a = |\\bar{a} - a| \\le d"] },
          { id: "t10-b13-so-dac-trung-do-xu-the-trung-tam", lessonNumber: 13, title: "Bài 13: Các số đặc trưng đo xu thế trung tâm", strand: "thongke", description: "Số trung bình cộng, trung vị Me, tứ phân vị Q1, Q2, Q3 và mốt Mo.", keyFormulas: ["\\bar{x} = \\frac{\\sum x_i}{n}, \\ Q_2 = M_e"] },
          { id: "t10-b14-so-dac-trung-do-do-phan-tan", lessonNumber: 14, title: "Bài 14: Các số đặc trưng đo độ phân tán", strand: "thongke", description: "Khoảng biến thiên R, khoảng tứ phân vị Delta Q, phương sai s^2 và độ lệch chuẩn s.", keyFormulas: ["R = x_{\\max} - x_{\\min}, \\ \\Delta_Q = Q_3 - Q_1, \\ s = \\sqrt{s^2}"] },
        ],
      },

      // TẬP 2
      {
        id: "t10-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Hàm số, đồ thị và ứng dụng",
        description: "Hàm số bậc hai, dấu của tam thức bậc hai và phương trình quy về bậc hai.",
        lessons: [
          { id: "t10-b15-ham-so", lessonNumber: 15, title: "Bài 15: Hàm số", strand: "daiso", description: "Tập xác định, tập giá trị và sự biến thiên của hàm số.", keyFormulas: ["D = \\{x \\in \\mathbb{R} \\mid f(x) \\text{ xác định}\\}"] },
          { id: "t10-b16-ham-so-bac-hai", lessonNumber: 16, title: "Bài 16: Hàm số bậc hai", strand: "daiso", description: "Khảo sát và vẽ parabol: Đỉnh I(-b/2a; -Delta/4a), trục đối xứng x = -b/2a.", keyFormulas: ["I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)"], hasInteractive: "function" },
          { id: "t10-b17-dau-tam-thuc-bac-hai", lessonNumber: 17, title: "Bài 17: Dấu của tam thức bậc hai", strand: "daiso", description: "Quy tắc trong trái ngoài cùng khi Delta > 0 và cùng dấu khi Delta < 0.", keyFormulas: ["\\Delta < 0 \\Rightarrow a \\cdot f(x) > 0 \\ \\forall x \\in \\mathbb{R}"] },
          { id: "t10-b18-pt-quy-ve-bac-hai", lessonNumber: 18, title: "Bài 18: Phương trình quy về phương trình bậc hai", strand: "daiso", description: "Phương trình căn f(x) = căn g(x) và căn f(x) = g(x).", keyFormulas: ["\\sqrt{f(x)} = g(x) \\Leftrightarrow \\begin{cases} g(x) \\ge 0 \\\\ f(x) = [g(x)]^2 \\end{cases}"] },
        ],
      },
      {
        id: "t10-t2-c7",
        volume: "tap-2",
        chapterNumber: 7,
        title: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
        description: "Phương trình đường thẳng, góc và khoảng cách, đường tròn và 3 đường conic.",
        lessons: [
          { id: "t10-b19-phuong-trinh-duong-thang", lessonNumber: 19, title: "Bài 19: Phương trình đường thẳng", strand: "hinhhoc", description: "VTCP, VTPT, phương trình tham số và phương trình tổng quát.", keyFormulas: ["ax + by + c = 0, \\ \\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases}"] },
          { id: "t10-b20-goc-va-khoang-cach", lessonNumber: 20, title: "Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách", strand: "hinhhoc", description: "Công thức tính khoảng cách từ một điểm đến một đường thẳng.", keyFormulas: ["d(M_0, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}"] },
          { id: "t10-b21-duong-tron-oxy", lessonNumber: 21, title: "Bài 21: Đường tròn trong mặt phẳng tọa độ", strand: "hinhhoc", description: "Phương trình đường tròn tâm I(a; b) bán kính R và phương trình tiếp tuyến.", keyFormulas: ["(x-a)^2 + (y-b)^2 = R^2"] },
          { id: "t10-b22-ba-duong-conic", lessonNumber: 22, title: "Bài 22: Ba đường conic", strand: "hinhhoc", description: "Định nghĩa và phương trình chính tắc của Elip, Hypebol, Parabol.", keyFormulas: ["\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\ \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, \\ y^2 = 2px"] },
        ],
      },
      {
        id: "t10-t2-c8",
        volume: "tap-2",
        chapterNumber: 8,
        title: "Chương VIII: Đại số tổ hợp",
        description: "Quy tắc cộng, quy tắc nhân, hoán vị, chỉnh hợp, tổ hợp và nhị thức Newton.",
        lessons: [
          { id: "t10-b23-quy-tac-dem", lessonNumber: 23, title: "Bài 23: Quy tắc đếm", strand: "daiso", description: "Quy tắc cộng và quy tắc nhân trong các bài toán đếm thực tế.", keyFormulas: ["n(A \\cup B) = n(A) + n(B), \\ n(A \\times B) = n(A) \\cdot n(B)"] },
          { id: "t10-b24-hoan-vi-chinh-hop-to-hop", lessonNumber: 24, title: "Bài 24: Hoán vị, chỉnh hợp và tổ hợp", strand: "daiso", description: "Công thức tính P_n, A_n^k, C_n^k.", keyFormulas: ["P_n = n!, \\ A_n^k = \\frac{n!}{(n-k)!}, \\ C_n^k = \\frac{n!}{k!(n-k)!}"] },
          { id: "t10-b25-nhi-thuc-newton", lessonNumber: 25, title: "Bài 25: Nhị thức Newton", strand: "daiso", description: "Khai triển (a + b)^4 và (a + b)^5.", keyFormulas: ["(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4"] },
        ],
      },
      {
        id: "t10-t2-c9",
        volume: "tap-2",
        chapterNumber: 9,
        title: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
        description: "Biến cố, định nghĩa cổ điển của xác suất và các quy tắc tính xác suất.",
        lessons: [
          { id: "t10-b26-bien-co-dinh-nghia-co-dien", lessonNumber: 26, title: "Bài 26: Biến cố và định nghĩa cổ điển của xác suất", strand: "thongke", description: "Không gian mẫu Omega và công thức P(A) = n(A)/n(Omega).", keyFormulas: ["P(A) = \\frac{n(A)}{n(\\Omega)}"] },
          { id: "t10-b27-thuc-hanh-tinh-xac-suat", lessonNumber: 27, title: "Bài 27: Thực hành tính xác suất theo định nghĩa cổ điển", strand: "thongke", description: "Sử dụng tổ hợp, quy tắc nhân đếm số phần tử không gian mẫu.", keyFormulas: ["P(\\bar{A}) = 1 - P(A)"] },
        ],
      },

      // CHUYÊN ĐỀ HỌC TẬP TOÁN 10
      {
        id: "t10-cd-c1",
        volume: "chuyen-de",
        chapterNumber: 1,
        title: "Chuyên đề 1: Hệ phương trình bậc nhất ba ẩn",
        description: "Hệ phương trình bậc nhất ba ẩn, phương pháp Gauss và ứng dụng thực tiễn.",
        lessons: [
          { id: "t10-cd1-he-pt-ba-an", lessonNumber: 1, title: "Bài 1: Hệ phương trình bậc nhất ba ẩn", strand: "daiso", description: "Khái niệm và giải hệ bằng phương pháp khử ẩn Gauss.", keyFormulas: ["\\begin{cases} a_1x + b_1y + c_1z = d_1 \\\\ a_2x + b_2y + c_2z = d_2 \\\\ a_3x + b_3y + c_3z = d_3 \\end{cases}"] },
          { id: "t10-cd2-ung-dung-he-ba-an", lessonNumber: 2, title: "Bài 2: Ứng dụng hệ phương trình bậc nhất ba ẩn", strand: "daiso", description: "Giải các bài toán cân bằng phản ứng hóa học, mạch điện Kirchhoff và kinh tế.", keyFormulas: ["\\text{Mô hình hóa bài toán thực tế}"] },
        ],
      },
      {
        id: "t10-cd-c2",
        volume: "chuyen-de",
        chapterNumber: 2,
        title: "Chuyên đề 2: Phương pháp quy nạp toán học và Nhị thức Newton",
        description: "Nguyên lý quy nạp toán học và khai triển nhị thức Newton tổng quát.",
        lessons: [
          { id: "t10-cd3-quy-nap-toan-hoc", lessonNumber: 3, title: "Bài 3: Phương pháp quy nạp toán học", strand: "daiso", description: "Bước cơ sở n = 1 và bước quy nạp giả sử đúng với n = k chứng minh đúng với n = k + 1.", keyFormulas: ["P(1) \\text{ đúng} \\wedge (P(k) \\Rightarrow P(k+1)) \\Rightarrow P(n) \\text{ đúng } \\forall n"] },
          { id: "t10-cd4-nhi-thuc-newton-tong-quat", lessonNumber: 4, title: "Bài 4: Nhị thức Newton", strand: "daiso", description: "Công thức số hạng tổng quát C_n^k a^{n-k} b^k.", keyFormulas: ["(a+b)^n = \\sum_{k=0}^n C_n^k a^{n-k} b^k"] },
        ],
      },
      {
        id: "t10-cd-c3",
        volume: "chuyen-de",
        chapterNumber: 3,
        title: "Chuyên đề 3: Ba đường conic và ứng dụng",
        description: "Tính chất quang học của Elip, Hypebol, Parabol, đường chuẩn và tâm sai.",
        lessons: [
          { id: "t10-cd5-elip-ung-dung", lessonNumber: 5, title: "Bài 5: Elip và ứng dụng", strand: "hinhhoc", description: "Phương trình chính tắc, bán kính qua tiêu và tính chất quang học.", keyFormulas: ["\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\ c^2 = a^2 - b^2"], hasInteractive: "geometry" },
          { id: "t10-cd6-hypebol-parabol-ung-dung", lessonNumber: 6, title: "Bài 6, 7 & 8: Hypebol, Parabol và Sự thống nhất của ba đường conic", strand: "hinhhoc", description: "Tâm sai e = c/a, đường chuẩn và ứng dụng quỹ đạo vệ tinh, kính thiên văn.", keyFormulas: ["e = \\frac{c}{a} < 1 \\text{ (Elip)}, \\ e > 1 \\text{ (Hypebol)}, \\ e = 1 \\text{ (Parabol)}"], hasInteractive: "geometry" },
        ],
      },
    ],
    topics: [],
  },

  // ==========================================
  // TOÁN 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-11": {
    grade: "lop-11",
    gradeNumber: 11,
    title: "Toán 11",
    subtitle: "Lượng giác, Dãy số, Giới hạn & Đạo hàm",
    description: "Sách giáo khoa Toán 11 (Tập 1, Tập 2) & Chuyên đề học tập Toán 11",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 11",
    gradient: "from-indigo-500 via-purple-600 to-pink-500",
    icon: "💎",
    hasSpecializedTopic: true,
    chapters: [
      // TẬP 1
      {
        id: "t11-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Hàm số lượng giác và phương trình lượng giác",
        description: "Góc lượng giác, công thức lượng giác, hàm số sin, cos, tan và giải phương trình lượng giác cơ bản.",
        lessons: [
          { id: "t11-b1-gia-tri-luong-giac-goc", lessonNumber: 1, title: "Bài 1: Giá trị lượng giác của góc lượng giác", strand: "daiso", description: "Đơn vị radian, đường tròn lượng giác và các cung liên kết.", keyFormulas: ["1\\text{ rad} = \\frac{180^\\circ}{\\pi}, \\ \\sin^2 \\alpha + \\cos^2 \\alpha = 1"] },
          { id: "t11-b2-cong-thuc-luong-giac", lessonNumber: 2, title: "Bài 2: Công thức lượng giác", strand: "daiso", description: "Công thức cộng, nhân đôi, biến đổi tích thành tổng và tổng thành tích.", keyFormulas: ["\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b", "\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1"] },
          { id: "t11-b3-ham-so-luong-giac", lessonNumber: 3, title: "Bài 3: Hàm số lượng giác", strand: "daiso", description: "Tập xác định, chu kỳ và đồ thị các hàm số y = sin x, y = cos x, y = tan x.", keyFormulas: ["T = 2\\pi \\text{ (với sin, cos)}, \\ T = \\pi \\text{ (với tan)}"] },
          { id: "t11-b4-phuong-trinh-luong-giac-co-ban", lessonNumber: 4, title: "Bài 4: Phương trình lượng giác cơ bản", strand: "daiso", description: "Phương trình sin x = m, cos x = m, tan x = m.", keyFormulas: ["\\sin x = \\sin \\alpha \\Leftrightarrow x = \\alpha + k2\\pi \\lor x = \\pi - \\alpha + k2\\pi"] },
          { id: "t11-on-tap-chuong-1", lessonNumber: 0, title: "Ôn tập cuối chương I", strand: "daiso", description: "Hệ thống hóa toàn bộ kiến thức Hàm số & Phương trình lượng giác với 3 đề ôn tập tổng hợp chuẩn Bộ GD&ĐT.", keyFormulas: ["\\sin^2 x + \\cos^2 x = 1", "\\cos(a \\pm b), \\ \\sin(a \\pm b)", "\\sin 2a, \\ \\cos 2a", "\\sin x = m, \\ \\cos x = m"] },
        ],
      },
      {
        id: "t11-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
        description: "Khái niệm dãy số, cấp số cộng (công sai d) và cấp số nhân (công bội q).",
        lessons: [
          { id: "t11-b5-day-so", lessonNumber: 5, title: "Bài 5: Dãy số", strand: "daiso", description: "Dãy số tăng, giảm, bị chặn và cho bằng công thức truy hồi.", keyFormulas: ["u_n = f(n)"] },
          { id: "t11-b6-cap-so-cong", lessonNumber: 6, title: "Bài 6: Cấp số cộng", strand: "daiso", description: "Số hạng tổng quát và tính tổng n số hạng đầu.", keyFormulas: ["u_n = u_1 + (n-1)d", "S_n = \\frac{n(u_1 + u_n)}{2}"] },
          { id: "t11-b7-cap-so-nhan", lessonNumber: 7, title: "Bài 7: Cấp số nhân", strand: "daiso", description: "Số hạng tổng quát u_n = u_1 q^{n-1} và tổng S_n.", keyFormulas: ["u_n = u_1 \\cdot q^{n-1}", "S_n = u_1 \\frac{1 - q^n}{1 - q}"] },
          { id: "t11-on-tap-chuong-2", lessonNumber: 0, title: "Ôn tập cuối chương II", strand: "daiso", description: "Hệ thống hóa toàn bộ kiến thức Dãy số, Cấp số cộng và Cấp số nhân với 3 đề ôn tập tổng hợp chuẩn Bộ GD&ĐT.", keyFormulas: ["u_n = f(n)", "u_n = u_1 + (n-1)d", "S_n = \\frac{n(u_1 + u_n)}{2}", "u_n = u_1 \\cdot q^{n-1}", "S_n = u_1 \\frac{1 - q^n}{1 - q}"] },
        ],
      },
      {
        id: "t11-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
        description: "Mẫu số liệu ghép nhóm, số trung bình, trung vị, tứ phân vị và mốt cho mẫu ghép nhóm.",
        lessons: [
          { id: "t11-b8-mau-so-lieu-ghep-nhom", lessonNumber: 8, title: "Bài 8: Mẫu số liệu ghép nhóm", strand: "thongke", description: "Bảng tần số ghép nhóm và giá trị đại diện của nhóm.", keyFormulas: ["c_i = \\frac{a_i + a_{i+1}}{2}"] },
          { id: "t11-b9-so-dac-trung-mau-ghep-nhom", lessonNumber: 9, title: "Bài 9: Các số đặc trưng đo xu thế trung tâm", strand: "thongke", description: "Công thức tính số trung bình, trung vị Me, mốt Mo cho mẫu số liệu ghép nhóm.", keyFormulas: ["\\bar{x} = \\frac{1}{n}\\sum m_i c_i, \\ M_e = u_m + \\frac{\\frac{n}{2} - C}{n_m}(u_{m+1} - u_m)"] },
        ],
      },
      {
        id: "t11-t1-c4",
        volume: "tap-1",
        chapterNumber: 4,
        title: "Chương IV: Quan hệ song song trong không gian",
        description: "Đường thẳng và mặt phẳng trong không gian, hai đường thẳng song song, đường thẳng song song mặt phẳng, hai mặt phẳng song song, phép chiếu song song.",
        lessons: [
          { id: "t11-b10-duong-thang-mat-phang", lessonNumber: 10, title: "Bài 10: Đường thẳng và mặt phẳng trong không gian", strand: "hinhhoc", description: "Các tiên đề hình học không gian, giao tuyến của hai mặt phẳng.", keyFormulas: ["(P) \\cap (Q) = d"] },
          { id: "t11-b11-hai-duong-thang-song-song", lessonNumber: 11, title: "Bài 11: Hai đường thẳng song song", strand: "hinhhoc", description: "Hai đường thẳng chéo nhau và hai đường thẳng song song.", keyFormulas: ["a \\parallel b"] },
          { id: "t11-b12-duong-thang-song-song-mat-phang", lessonNumber: 12, title: "Bài 12: Đường thẳng và mặt phẳng song song", strand: "hinhhoc", description: "Dấu hiệu nhận biết: đường thẳng song song với một đường trong mặt phẳng.", keyFormulas: ["d \\parallel a \\ (a \\subset (P)) \\Rightarrow d \\parallel (P)"] },
          { id: "t11-b13-hai-mat-phang-song-song", lessonNumber: 13, title: "Bài 13: Hai mặt phẳng song song", strand: "hinhhoc", description: "Mặt phẳng chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia.", keyFormulas: ["(P) \\parallel (Q)"] },
          { id: "t11-b14-phep-chieu-song-song", lessonNumber: 14, title: "Bài 14: Phép chiếu song song", strand: "hinhhoc", description: "Phương chiếu và hình biểu diễn của các hình phẳng trong không gian.", keyFormulas: ["\\text{Bảo toàn tính song song và tỉ số đoạn thẳng}"] },
        ],
      },
      {
        id: "t11-t1-c5",
        volume: "tap-1",
        chapterNumber: 5,
        title: "Chương V: Giới hạn. Hàm số liên tục",
        description: "Giới hạn dãy số, giới hạn hàm số tại một điểm, vô cực và tính liên tục của hàm số.",
        lessons: [
          { id: "t11-b15-gioi-han-day-so", lessonNumber: 15, title: "Bài 15: Giới hạn của dãy số", strand: "daiso", description: "Giới hạn hữu hạn, vô cực và tổng cấp số nhân lùi vô hạn.", keyFormulas: ["\\lim_{n \\to \\infty} \\frac{1}{n^k} = 0, \\ S = \\frac{u_1}{1-q} \\ (|q| < 1)"] },
          { id: "t11-b16-gioi-han-ham-so", lessonNumber: 16, title: "Bài 16: Giới hạn của hàm số", strand: "daiso", description: "Khử các dạng vô định 0/0, vô cùng / vô cùng.", keyFormulas: ["\\lim_{x \\to x_0} \\frac{f(x)}{g(x)}"] },
          { id: "t11-b17-ham-so-lien-tuc", lessonNumber: 17, title: "Bài 17: Hàm số liên tục", strand: "daiso", description: "Hàm số liên tục tại một điểm và trên một khoảng.", keyFormulas: ["\\lim_{x \\to x_0} f(x) = f(x_0) \\Leftrightarrow f(x) \\text{ liên tục tại } x_0"] },
        ],
      },

      // TẬP 2
      {
        id: "t11-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Hàm số mũ và hàm số lôgarit",
        description: "Lũy thừa số mũ thực, lôgarit, hàm số mũ, hàm số lôgarit và phương trình mũ, lôgarit.",
        lessons: [
          { id: "t11-b18-luy-thua-so-mu-thuc", lessonNumber: 18, title: "Bài 18: Lũy thừa với số mũ thực", strand: "daiso", description: "Căn bậc n và các tính chất của lũy thừa số mũ thực.", keyFormulas: ["a^{\\alpha} \\cdot a^{\\beta} = a^{\\alpha + \\beta}, \\ a^{\\frac{m}{n}} = \\sqrt[n]{a^m}"] },
          { id: "t11-b19-logarit", lessonNumber: 19, title: "Bài 19: Lôgarit", strand: "daiso", description: "Định nghĩa log_a b và các công thức đổi cơ số.", keyFormulas: ["\\log_a(xy) = \\log_a x + \\log_a y, \\ \\log_a b = \\frac{\\log_c b}{\\log_c a}"] },
          { id: "t11-b20-ham-so-mu-logarit", lessonNumber: 20, title: "Bài 20: Hàm số mũ và hàm số lôgarit", strand: "daiso", description: "Tập xác định, tập giá trị, đạo hàm và đồ thị.", keyFormulas: ["(a^x)' = a^x \\ln a, \\ (\\log_a x)' = \\frac{1}{x \\ln a}"] },
          { id: "t11-b21-phuong-trinh-mu-logarit", lessonNumber: 21, title: "Bài 21: Phương trình, bất phương trình mũ và lôgarit", strand: "daiso", description: "Đưa về cùng cơ số, đặt ẩn phụ và logarit hóa.", keyFormulas: ["a^x = b \\Leftrightarrow x = \\log_a b \\ (b > 0)"] },
        ],
      },
      {
        id: "t11-t2-c7",
        volume: "tap-2",
        chapterNumber: 7,
        title: "Chương VII: Đạo hàm",
        description: "Khái niệm đạo hàm, ý nghĩa hình học (tiếp tuyến), các quy tắc tính đạo hàm và đạo hàm cấp hai.",
        lessons: [
          { id: "t11-b22-khai-niem-dao-ham-tiep-tuyen", lessonNumber: 22, title: "Bài 22: Khái niệm đạo hàm và ý nghĩa hình học", strand: "daiso", description: "Hệ số góc của tiếp tuyến: k = f'(x_0) và phương trình tiếp tuyến.", keyFormulas: ["y = f'(x_0)(x - x_0) + f(x_0)"], hasInteractive: "function" },
          { id: "t11-b23-quy-tac-tinh-dao-ham", lessonNumber: 23, title: "Bài 23: Các quy tắc tính đạo hàm", strand: "daiso", description: "Đạo hàm tổng, hiệu, tích, thương và đạo hàm hàm hợp.", keyFormulas: ["(uv)' = u'v + uv', \\ (f(u))' = f'(u) \\cdot u'"] },
          { id: "t11-b24-dao-ham-cap-hai", lessonNumber: 24, title: "Bài 24: Đạo hàm cấp hai", strand: "daiso", description: "Đạo hàm cấp hai và ý nghĩa gia tốc chuyển động.", keyFormulas: ["f''(x) = (f'(x))', \\ a(t) = v'(t) = s''(t)"] },
        ],
      },
      {
        id: "t11-t2-c8",
        volume: "tap-2",
        chapterNumber: 8,
        title: "Chương VIII: Quan hệ vuông góc trong không gian",
        description: "Đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc, góc phẳng nhị diện, khoảng cách và thể tích khối chóp, lăng trụ.",
        lessons: [
          { id: "t11-b25-hai-duong-thang-vuong-goc", lessonNumber: 25, title: "Bài 25: Hai đường thẳng vuông góc", strand: "hinhhoc", description: "Góc giữa hai đường thẳng trong không gian.", keyFormulas: ["\\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\Leftrightarrow d_1 \\perp d_2"] },
          { id: "t11-b26-duong-thang-vuong-goc-mat-phang", lessonNumber: 26, title: "Bài 26: Đường thẳng vuông góc với mặt phẳng", strand: "hinhhoc", description: "Vuông góc với hai đường thẳng cắt nhau trong mặt phẳng.", keyFormulas: ["d \\perp a, \\ d \\perp b \\Rightarrow d \\perp (P)"] },
          { id: "t11-b27-goc-nhi-dien", lessonNumber: 27, title: "Bài 27: Góc giữa đường thẳng và mặt phẳng. Góc nhị diện", strand: "hinhhoc", description: "Góc giữa đường thẳng và hình chiếu vuông góc của nó.", keyFormulas: ["(d, (P)) = (d, d')"] },
          { id: "t11-b28-hai-mat-phang-vuong-goc", lessonNumber: 28, title: "Bài 28: Hai mặt phẳng vuông góc", strand: "hinhhoc", description: "Mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia.", keyFormulas: ["a \\subset (P), \\ a \\perp (Q) \\Rightarrow (P) \\perp (Q)"] },
          { id: "t11-b29-khoang-cach-khong-gian", lessonNumber: 29, title: "Bài 29: Khoảng cách trong không gian", strand: "hinhhoc", description: "Khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa hai đường chéo nhau.", keyFormulas: ["d(M, (P)) = MH \\ (MH \\perp (P))"] },
          { id: "t11-b30-the-tich-khoi-da-dien", lessonNumber: 30, title: "Bài 30: Thể tích của một số khối đa diện", strand: "hinhhoc", description: "Thể tích khối chóp, khối lăng trụ và khối hộp chữ nhật.", keyFormulas: ["V_{\\text{chóp}} = \\frac{1}{3} B h, \\ V_{\\text{lăng trụ}} = B h"] },
        ],
      },
      {
        id: "t11-t2-c9",
        volume: "tap-2",
        chapterNumber: 9,
        title: "Chương IX: Xác suất",
        description: "Biến cố giao, quy tắc nhân xác suất, biến cố hợp và quy tắc cộng xác suất.",
        lessons: [
          { id: "t11-b31-bien-co-giao-quy-tac-nhan", lessonNumber: 31, title: "Bài 31: Biến cố giao và quy tắc nhân xác suất", strand: "thongke", description: "Hai biến cố độc lập và công thức nhân P(AB) = P(A)P(B).", keyFormulas: ["P(A \\cap B) = P(A) \\cdot P(B) \\text{ (độc lập)}"] },
          { id: "t11-b32-bien-co-hop-quy-tac-cong", lessonNumber: 32, title: "Bài 32: Biến cố hợp và quy tắc cộng xác suất", strand: "thongke", description: "Hai biến cố xung khắc và công thức cộng xác suất tổng quát.", keyFormulas: ["P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"] },
        ],
      },

      // CHUYÊN ĐỀ HỌC TẬP TOÁN 11
      {
        id: "t11-cd-c1",
        volume: "chuyen-de",
        chapterNumber: 1,
        title: "Chuyên đề 1: Phép biến hình trong mặt phẳng",
        description: "Phép tịnh tiến, đối xứng trục, đối xứng tâm, phép quay, phép vị tự và phép đồng dạng.",
        lessons: [
          { id: "t11-cd1-phep-tinh-tien-doi-xung-truc", lessonNumber: 1, title: "Bài 1: Phép tịnh tiến và phép đối xứng trục", strand: "hinhhoc", description: "Bảo toàn khoảng cách giữa hai điểm bất kỳ.", keyFormulas: ["T_{\\vec{v}}(M) = M' \\Leftrightarrow \\vec{MM'} = \\vec{v}"] },
          { id: "t11-cd2-phep-doi-xung-tam-quay", lessonNumber: 2, title: "Bài 2: Phép đối xứng tâm và phép quay", strand: "hinhhoc", description: "Phép quay tâm O góc lượng giác alpha.", keyFormulas: ["Q_{(O, \\alpha)}(M) = M'"] },
          { id: "t11-cd3-phep-vi-tu-dong-dang", lessonNumber: 3, title: "Bài 3: Phép vị tự và phép đồng dạng", strand: "hinhhoc", description: "Biến đoạn thẳng thành đoạn thẳng có độ dài nhân với |k|.", keyFormulas: ["V_{(I, k)}(M) = M' \\Leftrightarrow \\vec{IM'} = k \\vec{IM}"] },
        ],
      },
      {
        id: "t11-cd-c2",
        volume: "chuyen-de",
        chapterNumber: 2,
        title: "Chuyên đề 2: Phương pháp quy nạp toán học và Dãy số",
        description: "Quy nạp toán học, dãy số Fibonacci, tháp Hà Nội và giới hạn dãy số.",
        lessons: [
          { id: "t11-cd4-quy-nap-toan-hoc-11", lessonNumber: 4, title: "Bài 4: Phương pháp quy nạp toán học", strand: "daiso", description: "Chứng minh đẳng thức, bất đẳng thức bằng quy nạp.", keyFormulas: ["P(n) \\text{ đúng } \\forall n \\ge n_0"] },
          { id: "t11-cd5-day-so-gioi-han", lessonNumber: 5, title: "Bài 5: Dãy số và giới hạn của dãy số", strand: "daiso", description: "Các bài toán dãy số truy hồi và tìm công thức số hạng tổng quát.", keyFormulas: ["u_{n+1} = a u_n + b"] },
        ],
      },
      {
        id: "t11-cd-c3",
        volume: "chuyen-de",
        chapterNumber: 3,
        title: "Chuyên đề 3: Hình học họa hình & Toán tài chính",
        description: "Hình chiếu trục đo, bản vẽ kỹ thuật và các bài toán lãi kép, niên kim thực tế.",
        lessons: [
          { id: "t11-cd6-hinh-chieu-ban-ve", lessonNumber: 6, title: "Bài 6 & 7: Hình chiếu trục đo và Bản vẽ kỹ thuật", strand: "hinhhoc", description: "Vẽ kỹ thuật các khối vật thể không gian trong thực tế.", keyFormulas: ["\\text{Hệ trục đo vuông góc đều}"] },
          { id: "t11-cd8-toan-tai-chinh", lessonNumber: 8, title: "Bài 8: Một số bài toán tài chính thực tế", strand: "daiso", description: "Lãi đơn, lãi kép, gửi góp định kỳ và bài toán trả góp ngân hàng.", keyFormulas: ["A = P(1 + r)^n, \\ A = M \\frac{(1+r)^n - 1}{r}"] },
        ],
      },
    ],
    topics: [],
  },

  // ==========================================
  // TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  "lop-12": {
    grade: "lop-12",
    gradeNumber: 12,
    title: "Toán 12",
    subtitle: "Luyện thi Tốt nghiệp THPT & Đánh giá năng lực Quốc gia",
    description: "Sách giáo khoa Toán 12 (Tập 1, Tập 2) & Chuyên đề học tập Toán 12",
    bookSeries: "SGK Kết Nối Tri Thức (2026)",
    badge: "Toán 12",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    icon: "🏆",
    hasSpecializedTopic: true,
    chapters: [
      // TẬP 1
      {
        id: "t12-t1-c1",
        volume: "tap-1",
        chapterNumber: 1,
        title: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
        description: "Tính đơn điệu, cực trị, GTLN - GTNN, đường tiệm cận, khảo sát sự biến thiên và bài toán thực tế tối ưu.",
        lessons: [
          { id: "t12-b1-don-dieu-cuc-tri", lessonNumber: 1, title: "Bài 1: Tính đơn điệu và cực trị của hàm số", strand: "daiso", description: "Dấu của f'(x), cực đại, cực tiểu và bảng biến thiên.", keyFormulas: ["f'(x) > 0 \\Rightarrow f(x) \\text{ đồng biến}", "f'(x_0) = 0 \\text{ và đổi dấu qua } x_0"], hasInteractive: "function" },
          { id: "t12-b2-gtln-gtnn", lessonNumber: 2, title: "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", strand: "daiso", description: "Tìm max, min trên đoạn [a; b] và khoảng mở.", keyFormulas: ["\\max_{[a; b]} f(x), \\quad \\min_{[a; b]} f(x)"] },
          { id: "t12-b3-duong-tiem-can", lessonNumber: 3, title: "Bài 3: Đường tiệm cận của đồ thị hàm số", strand: "daiso", description: "Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của hàm phân thức bậc 2/bậc 1.", keyFormulas: ["\\lim_{x \\to x_0^+} f(x) = \\pm\\infty \\Rightarrow x = x_0 \\text{ (TCĐ)}", "y = ax + b \\text{ (TCX)}"] },
          { id: "t12-b4-khao-sat-do-thi", lessonNumber: 4, title: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số", strand: "daiso", description: "Khảo sát hàm bậc 3, hàm phân thức bậc 1/bậc 1 và bậc 2/bậc 1.", keyFormulas: ["y = \\frac{ax+b}{cx+d} \\Rightarrow y' = \\frac{ad-bc}{(cx+d)^2}"], hasInteractive: "function" },
          { id: "t12-b5-ung-dung-thuc-tien-dao-ham", lessonNumber: 5, title: "Bài 5: Ứng dụng đạo hàm để giải quyết một số vấn đề thực tiễn", strand: "daiso", description: "Bài toán chi phí tối thiểu, lợi nhuận tối đa, dung tích lớn nhất.", keyFormulas: ["\\text{Lập hàm số mục tiêu } f(x) \\to f'(x) = 0"] },
        ],
      },
      {
        id: "t12-t1-c2",
        volume: "tap-1",
        chapterNumber: 2,
        title: "Chương II: Vector và hệ tọa độ trong không gian",
        description: "Vector trong không gian, hệ trục tọa độ Oxyz và biểu thức tọa độ của các phép toán vector.",
        lessons: [
          { id: "t12-b6-vector-trong-khong-gian", lessonNumber: 6, title: "Bài 6: Vector trong không gian", strand: "hinhhoc", description: "Quy tắc hình hộp, ba vector đồng phẳng.", keyFormulas: ["\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'} \\text{ (Quy tắc hình hộp)}"] },
          { id: "t12-b7-he-truc-toa-do-oxyz", lessonNumber: 7, title: "Bài 7: Hệ trục tọa độ trong không gian", strand: "hinhhoc", description: "Gốc O và ba vector đơn vị i, j, k vuông góc từng đôi một.", keyFormulas: ["\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Rightarrow M(x; y; z)"] },
          { id: "t12-b8-bieu-thuc-toa-do-vector", lessonNumber: 8, title: "Bài 8: Biểu thức tọa độ của các phép toán vector", strand: "hinhhoc", description: "Tổng, hiệu, tích với số, tích vô hướng, độ dài và góc trong Oxyz.", keyFormulas: ["\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3, \\ |\\vec{u}| = \\sqrt{u_1^2 + u_2^2 + u_3^2}"] },
        ],
      },
      {
        id: "t12-t1-c3",
        volume: "tap-1",
        chapterNumber: 3,
        title: "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
        description: "Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn của số liệu ghép nhóm.",
        lessons: [
          { id: "t12-b9-khoang-bien-thien-tu-phan-vi", lessonNumber: 9, title: "Bài 9: Khoảng biến thiên và khoảng tứ phân vị", strand: "thongke", description: "Khoảng biến thiên R và khoảng tứ phân vị Delta Q = Q3 - Q1.", keyFormulas: ["\\Delta_Q = Q_3 - Q_1"] },
          { id: "t12-b10-phuong-sai-do-lech-chuan", lessonNumber: 10, title: "Bài 10: Phương sai và độ lệch chuẩn", strand: "thongke", description: "Công thức tính s^2 và s cho mẫu ghép nhóm.", keyFormulas: ["s^2 = \\frac{1}{n} \\sum m_i c_i^2 - \\bar{x}^2, \\ s = \\sqrt{s^2}"] },
        ],
      },

      // TẬP 2
      {
        id: "t12-t2-c4",
        volume: "tap-2",
        chapterNumber: 4,
        title: "Chương IV: Nguyên hàm và tích phân",
        description: "Nguyên hàm, bảng nguyên hàm cơ bản, tích phân Newton-Leibniz và ứng dụng hình học tính diện tích, thể tích.",
        lessons: [
          { id: "t12-b11-nguyen-ham", lessonNumber: 11, title: "Bài 11: Nguyên hàm", strand: "daiso", description: "Định nghĩa F'(x) = f(x), các tính chất và phương pháp đổi biến, từng phần.", keyFormulas: ["\\int f(x)\\,dx = F(x) + C, \\ \\int u\\,dv = uv - \\int v\\,du"] },
          { id: "t12-b12-tich-phan", lessonNumber: 12, title: "Bài 12: Tích phân", strand: "daiso", description: "Công thức Newton-Leibniz và các tính chất cơ bản.", keyFormulas: ["\\int_a^b f(x)\\,dx = F(b) - F(a)"] },
          { id: "t12-b13-ung-dung-hinh-hoc-tich-phan", lessonNumber: 13, title: "Bài 13: Ứng dụng hình học của tích phân", strand: "daiso", description: "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số và thể tích khối tròn xoay.", keyFormulas: ["S = \\int_a^b |f(x) - g(x)|\\,dx, \\ V = \\pi \\int_a^b [f(x)]^2\\,dx"] },
        ],
      },
      {
        id: "t12-t2-c5",
        volume: "tap-2",
        chapterNumber: 5,
        title: "Chương V: Phương pháp tọa độ trong không gian",
        description: "Phương trình mặt phẳng, phương trình đường thẳng, góc và khoảng cách, phương trình mặt cầu.",
        lessons: [
          { id: "t12-b14-phuong-trinh-mat-phang", lessonNumber: 14, title: "Bài 14: Phương trình mặt phẳng", strand: "hinhhoc", description: "Vector pháp tuyến và phương trình tổng quát Ax + By + Cz + D = 0.", keyFormulas: ["A(x-x_0) + B(y-y_0) + C(z-z_0) = 0"] },
          { id: "t12-b15-phuong-trinh-duong-thang", lessonNumber: 15, title: "Bài 15: Phương trình đường thẳng trong không gian", strand: "hinhhoc", description: "Phương trình tham số và chính tắc qua M0 có VTCP u.", keyFormulas: ["\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases}"] },
          { id: "t12-b16-goc-khoang-cach-oxyz", lessonNumber: 16, title: "Bài 16: Công thức tính góc và khoảng cách trong không gian", strand: "hinhhoc", description: "Khoảng cách từ điểm đến mặt phẳng, góc giữa hai mặt phẳng, góc giữa đường thẳng và mặt phẳng.", keyFormulas: ["d(M, (P)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}"] },
          { id: "t12-b17-phuong-trinh-mat-cau", lessonNumber: 17, title: "Bài 17: Phương trình mặt cầu", strand: "hinhhoc", description: "Mặt cầu tâm I(a; b; c) bán kính R.", keyFormulas: ["(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2"] },
        ],
      },
      {
        id: "t12-t2-c6",
        volume: "tap-2",
        chapterNumber: 6,
        title: "Chương VI: Xác suất có điều kiện",
        description: "Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes chuẩn cấu trúc đề thi 2026.",
        lessons: [
          { id: "t12-b18-xac-suat-co-dieu-kien", lessonNumber: 18, title: "Bài 18: Xác suất có điều kiện", strand: "thongke", description: "Xác suất của biến cố A khi biết biến cố B đã xảy ra.", keyFormulas: ["P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\ (P(B) > 0)"] },
          { id: "t12-b19-xac-suat-toan-phan-bayes", lessonNumber: 19, title: "Bài 19: Công thức xác suất toàn phần và công thức Bayes", strand: "thongke", description: "Tính xác suất tiên nghiệm và hậu nghiệm trong thực tế.", keyFormulas: ["P(B_k \\mid A) = \\frac{P(B_k) P(A \\mid B_k)}{\\sum_{i=1}^n P(B_i) P(A \\mid B_i)}"] },
        ],
      },

      // CHUYÊN ĐỀ HỌC TẬP TOÁN 12
      {
        id: "t12-cd-c1",
        volume: "chuyen-de",
        chapterNumber: 1,
        title: "Chuyên đề 1: Biến ngẫu nhiên rời rạc và các số đặc trưng",
        description: "Biến ngẫu nhiên rời rạc, bảng phân bố xác suất, kỳ vọng E(X), phương sai V(X) và phân bố nhị thức B(n, p).",
        lessons: [
          { id: "t12-cd1-bang-phan-bo-xac-suat", lessonNumber: 1, title: "Bài 1: Biến ngẫu nhiên rời rạc và bảng phân bố xác suất", strand: "thongke", description: "Bảng phân bố xác suất của biến ngẫu nhiên X nhận các giá trị x_1, x_2, ..., x_n.", keyFormulas: ["\\sum_{i=1}^n p_i = 1"] },
          { id: "t12-cd2-ky-vong-phuong-sai", lessonNumber: 2, title: "Bài 2: Các số đặc trưng của biến ngẫu nhiên rời rạc", strand: "thongke", description: "Kỳ vọng E(X) và phương sai V(X).", keyFormulas: ["E(X) = \\sum x_i p_i, \\ V(X) = E(X^2) - [E(X)]^2"] },
          { id: "t12-cd3-phan-bo-nhi-thuc", lessonNumber: 3, title: "Bài 3: Phân bố nhị thức", strand: "thongke", description: "Dãy phép thử Bernoulli và phân bố B(n, p).", keyFormulas: ["P(X = k) = C_n^k p^k (1-p)^{n-k}, \\ E(X) = np, \\ V(X) = np(1-p)"] },
        ],
      },
      {
        id: "t12-cd-c2",
        volume: "chuyen-de",
        chapterNumber: 2,
        title: "Chuyên đề 2: Ứng dụng toán học để giải quyết một số bài toán tối ưu",
        description: "Bài toán quy hoạch tuyến tính và vận dụng đạo hàm giải bài toán tối ưu kinh tế, kỹ thuật.",
        lessons: [
          { id: "t12-cd4-quy-hoach-tuyen-tinh", lessonNumber: 4, title: "Bài 4: Bài toán quy hoạch tuyến tính", strand: "daiso", description: "Hàm mục tiêu tuyến tính và các điều kiện ràng buộc.", keyFormulas: ["\\max/\\min F = ax + by \\text{ trên miền đa giác lồi}"] },
          { id: "t12-cd5-toi-uu-thuc-tien-dao-ham", lessonNumber: 5, title: "Bài 5: Vận dụng đạo hàm giải bài toán tối ưu", strand: "daiso", description: "Mô hình hóa và tìm cực trị hàm nhiều biến hoặc hàm tham số.", keyFormulas: ["f'(x) = 0 \\Rightarrow x_{\\text{tối ưu}}"] },
        ],
      },
      {
        id: "t12-cd-c3",
        volume: "chuyen-de",
        chapterNumber: 3,
        title: "Chuyên đề 3: Ứng dụng toán học trong tài chính",
        description: "Lãi suất, chuỗi tiền tệ, lập kế hoạch tài chính cá nhân và phân tích dự án đầu tư NPV, IRR.",
        lessons: [
          { id: "t12-cd6-chuoi-tien-te-lai-suat", lessonNumber: 6, title: "Bài 6: Lãi suất, tiền tệ và các chuỗi tiền tệ", strand: "daiso", description: "Giá trị hiện tại PV và giá trị tương lai FV của dòng tiền.", keyFormulas: ["PV = \\frac{FV}{(1+r)^n}"] },
          { id: "t12-cd7-ke-hoach-tai-chinh-dau-tu", lessonNumber: 7, title: "Bài 7: Lập kế hoạch tài chính và phân tích dự án đầu tư", strand: "daiso", description: "Tính toán chỉ số hiện giá thuần NPV và tỷ suất hoàn vốn nội bộ IRR.", keyFormulas: ["NPV = \\sum_{t=0}^n \\frac{CF_t}{(1+r)^t}"] },
        ],
      },
    ],
    topics: [],
  },
};

// Tự động gộp danh sách phẳng `topics` cho mỗi khối lớp
Object.keys(CURRICULUM_DATA).forEach((gradeKey) => {
  const g = CURRICULUM_DATA[gradeKey];
  const allLessons: LessonItem[] = [];
  g.chapters.forEach((ch) => {
    ch.lessons.forEach((l) => allLessons.push(l));
  });
  g.topics = allLessons;
});
