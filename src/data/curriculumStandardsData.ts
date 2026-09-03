/**
 * HỆ THỐNG YÊU CẦU CẦN ĐẠT (YCCĐ) MÔN TOÁN 6
 * THEO CHƯƠNG TRÌNH GIÁO DỤC PHỔ THÔNG 2018 (BỘ GIÁO DỤC VÀ ĐÀO TẠO)
 */

export interface CurriculumObjective {
  id: string;
  code: string;
  title: string;
  description: string;
  level: "nhan_biet" | "thong_hieu" | "van_dung" | "van_dung_cao";
}

export interface LessonCurriculum {
  lessonId: string;
  lessonTitle: string;
  chapter: string;
  objectives: CurriculumObjective[];
}

export const COGNITIVE_LEVELS = [
  {
    id: "nhan_biet",
    name: "Nhận biết",
    color: "text-emerald-300 bg-emerald-500/20 border-emerald-500/40",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    desc: "Nhận diện khái niệm, thuật ngữ, kí hiệu, công thức toán học cơ bản chuẩn SGK.",
    icon: "Search",
  },
  {
    id: "thong_hieu",
    name: "Thông hiểu",
    color: "text-amber-300 bg-amber-500/20 border-amber-500/40",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    desc: "Hiểu bản chất, giải thích, so sánh, phân loại, biến đổi và tính toán trực tiếp.",
    icon: "Lightbulb",
  },
  {
    id: "van_dung",
    name: "Vận dụng",
    color: "text-rose-300 bg-rose-500/20 border-rose-500/40",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    desc: "Áp dụng kiến thức giải quyết vấn đề toán học và các tình huống thực tiễn đời sống.",
    icon: "Target",
  },
  {
    id: "van_dung_cao",
    name: "Vận dụng cao",
    color: "text-purple-300 bg-purple-500/20 border-purple-500/40",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    desc: "Tư duy sáng tạo, giải bài toán nâng cao, chứng minh, tìm giá trị đặc biệt.",
    icon: "Flame",
  },
] as const;

export const GRADE_6_CURRICULUM_STANDARDS: Record<string, LessonCurriculum> = {
  "t6-b1-tap-hop": {
    lessonId: "t6-b1-tap-hop",
    lessonTitle: "Bài 1: Tập hợp",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b1-nb-1",
        code: "YCCĐ 1.1",
        title: "Nhận biết khái niệm tập hợp và các phần tử",
        description: "Nhận biết được một đối tượng cụ thể có phải là phần tử của tập hợp cho trước hay không.",
        level: "nhan_biet",
      },
      {
        id: "b1-nb-2",
        code: "YCCĐ 1.2",
        title: "Sử dụng đúng các kí hiệu ∈ và ∉",
        description: "Viết và đọc thành thạo kí hiệu thuộc (∈) và không thuộc (∉) giữa phần tử và tập hợp.",
        level: "nhan_biet",
      },
      {
        id: "b1-th-1",
        code: "YCCĐ 1.3",
        title: "Mô tả tập hợp bằng cách liệt kê các phần tử",
        description: "Biết viết tập hợp bằng cách liệt kê trong dấu ngoặc nhọn { }, mỗi phần tử viết đúng một lần.",
        level: "thong_hieu",
      },
      {
        id: "b1-th-2",
        code: "YCCĐ 1.4",
        title: "Mô tả tập hợp bằng cách chỉ ra tính chất đặc trưng",
        description: "Xác định và viết được tính chất đặc trưng chung của các phần tử trong tập hợp.",
        level: "thong_hieu",
      },
      {
        id: "b1-vd-1",
        code: "YCCĐ 1.5",
        title: "Vận dụng tập hợp vào phân loại dữ liệu thực tế",
        description: "Viết tập hợp các tháng trong một quý, các ngày trong tuần, các chữ cái trong một từ ngữ cụ thể.",
        level: "van_dung",
      },
    ],
  },
  "t6-b2-cach-ghi-so-tu-nhien": {
    lessonId: "t6-b2-cach-ghi-so-tu-nhien",
    lessonTitle: "Bài 2: Cách ghi số tự nhiên",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b2-nb-1",
        code: "YCCĐ 2.1",
        title: "Nhận biết cấu tạo hệ thập phân và giá trị chữ số",
        description: "Nhận biết mười chữ số cơ bản và xác định đúng giá trị của từng chữ số theo vị trí hàng.",
        level: "nhan_biet",
      },
      {
        id: "b2-nb-2",
        code: "YCCĐ 2.2",
        title: "Đọc và nhận biết các chữ số La Mã từ 1 đến 30",
        description: "Nhận biết các kí hiệu I, V, X và đọc đúng số La Mã thông dụng.",
        level: "nhan_biet",
      },
      {
        id: "b2-th-1",
        code: "YCCĐ 2.3",
        title: "Biểu diễn số tự nhiên thành tổng giá trị các hàng",
        description: "Viết số tự nhiên dưới dạng tổng lũy thừa của 10 hoặc tổng giá trị các chữ số (ab = 10a + b).",
        level: "thong_hieu",
      },
      {
        id: "b2-vd-1",
        code: "YCCĐ 2.4",
        title: "Ứng dụng viết số La Mã và số tự nhiên trong đời sống",
        description: "Đọc số La Mã trên mặt đồng hồ, thế kỉ, đánh số chương mục sách giáo khoa.",
        level: "van_dung",
      },
    ],
  },
  "t6-b3-thu-tu-so-tu-nhien": {
    lessonId: "t6-b3-thu-tu-so-tu-nhien",
    lessonTitle: "Bài 3: Thứ tự trong tập hợp các số tự nhiên",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b3-nb-1",
        code: "YCCĐ 3.1",
        title: "Nhận biết số liền trước, số liền sau của số tự nhiên",
        description: "Xác định số liền trước (a - 1) và số liền sau (a + 1) của một số tự nhiên (hoặc biểu thức chữ).",
        level: "nhan_biet",
      },
      {
        id: "b3-nb-2",
        code: "YCCĐ 3.2",
        title: "Biểu diễn số tự nhiên trên tia số nằm ngang",
        description: "Nhận biết chiều tăng dần trên tia số gốc 0; điểm nằm bên trái biểu diễn số nhỏ hơn điểm nằm bên phải.",
        level: "nhan_biet",
      },
      {
        id: "b3-th-1",
        code: "YCCĐ 3.3",
        title: "So sánh hai số tự nhiên và dùng kí hiệu <, >, ≤, ≥",
        description: "So sánh hai số tự nhiên có nhiều chữ số theo từng hàng; viết tập hợp số thỏa mãn điều kiện a ≤ x < b.",
        level: "thong_hieu",
      },
      {
        id: "b3-th-2",
        code: "YCCĐ 3.4",
        title: "Sắp xếp các số tự nhiên theo thứ tự tăng dần / giảm dần",
        description: "Sắp xếp chính xác một dãy gồm 4 đến 5 số tự nhiên có nhiều chữ số theo thứ tự yêu cầu.",
        level: "thong_hieu",
      },
      {
        id: "b3-vd-1",
        code: "YCCĐ 3.5",
        title: "Vận dụng so sánh số tự nhiên vào dữ liệu thực tế",
        description: "So sánh độ cao các đỉnh núi ở Việt Nam, so sánh dân số, giá cả hoặc lập số lớn nhất/nhỏ nhất.",
        level: "van_dung",
      },
    ],
  },
  "t6-b3-thu-tu-trong-tap-hop-cac-so-tu-nhien": {
    lessonId: "t6-b3-thu-tu-trong-tap-hop-cac-so-tu-nhien",
    lessonTitle: "Bài 3: Thứ tự trong tập hợp các số tự nhiên",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b3-nb-1",
        code: "YCCĐ 3.1",
        title: "Nhận biết số liền trước, số liền sau của số tự nhiên",
        description: "Xác định số liền trước (a - 1) và số liền sau (a + 1) của một số tự nhiên (hoặc biểu thức chữ).",
        level: "nhan_biet",
      },
      {
        id: "b3-nb-2",
        code: "YCCĐ 3.2",
        title: "Biểu diễn số tự nhiên trên tia số nằm ngang",
        description: "Nhận biết chiều tăng dần trên tia số gốc 0; điểm nằm bên trái biểu diễn số nhỏ hơn điểm nằm bên phải.",
        level: "nhan_biet",
      },
      {
        id: "b3-th-1",
        code: "YCCĐ 3.3",
        title: "So sánh hai số tự nhiên và dùng kí hiệu <, >, ≤, ≥",
        description: "So sánh hai số tự nhiên có nhiều chữ số theo từng hàng; viết tập hợp số thỏa mãn điều kiện a ≤ x < b.",
        level: "thong_hieu",
      },
      {
        id: "b3-th-2",
        code: "YCCĐ 3.4",
        title: "Sắp xếp các số tự nhiên theo thứ tự tăng dần / giảm dần",
        description: "Sắp xếp chính xác một dãy gồm 4 đến 5 số tự nhiên có nhiều chữ số theo thứ tự yêu cầu.",
        level: "thong_hieu",
      },
      {
        id: "b3-vd-1",
        code: "YCCĐ 3.5",
        title: "Vận dụng so sánh số tự nhiên vào dữ liệu thực tế",
        description: "So sánh độ cao các đỉnh núi ở Việt Nam, so sánh dân số, giá cả hoặc lập số lớn nhất/nhỏ nhất.",
        level: "van_dung",
      },
    ],
  },
  "t6-b4-phep-cong-va-phep-tru-so-tu-nhien": {
    lessonId: "t6-b4-phep-cong-va-phep-tru-so-tu-nhien",
    lessonTitle: "Bài 4: Phép cộng và phép trừ số tự nhiên",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b4-nb-1",
        code: "YCCĐ 4.1",
        title: "Nhận biết các tính chất của phép cộng",
        description: "Nhận biết tính chất giao hoán, kết hợp, cộng với số 0 của phép cộng số tự nhiên.",
        level: "nhan_biet",
      },
      {
        id: "b4-th-1",
        code: "YCCĐ 4.2",
        title: "Tính toán hợp lí và vận dụng tính chất",
        description: "Vận dụng tính chất giao hoán, kết hợp để nhóm các số tròn chục, tròn trăm, tính nhanh.",
        level: "thong_hieu",
      },
      {
        id: "b4-vd-1",
        code: "YCCĐ 4.3",
        title: "Giải bài toán thực tế có phép cộng và phép trừ",
        description: "Tính toán chi phí mua sắm, quản lí thu chi, quãng đường và thời gian trong thực tiễn.",
        level: "van_dung",
      },
    ],
  },
  "t6-b5-phep-nhan-va-phep-chia-so-tu-nhien": {
    lessonId: "t6-b5-phep-nhan-va-phep-chia-so-tu-nhien",
    lessonTitle: "Bài 5: Phép nhân và phép chia số tự nhiên",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b5-nb-1",
        code: "YCCĐ 5.1",
        title: "Nhận biết phép chia hết và phép chia có dư",
        description: "Nhận biết quan hệ a = b . q + r với điều kiện của số dư (0 ≤ r < b).",
        level: "nhan_biet",
      },
      {
        id: "b5-th-1",
        code: "YCCĐ 5.2",
        title: "Vận dụng tính chất phân phối để tính nhanh",
        description: "Áp dụng công thức a(b + c) = ab + ac hoặc đặt thừa số chung để tính nhẩm hợp lí.",
        level: "thong_hieu",
      },
      {
        id: "b5-vd-1",
        code: "YCCĐ 5.3",
        title: "Giải toán thực tế phân chia số lượng",
        description: "Tính số lượng xe cần chở người, chia phòng học, chia quà tặng có dư.",
        level: "van_dung",
      },
    ],
  },
  "t6-b6-luy-thua-so-mu-tu-nhien": {
    lessonId: "t6-b6-luy-thua-so-mu-tu-nhien",
    lessonTitle: "Bài 6: Lũy thừa với số mũ tự nhiên",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b6-nb-1",
        code: "YCCĐ 6.1",
        title: "Nhận biết định nghĩa lũy thừa, cơ số và số mũ",
        description: "Hiểu a^n là tích của n thừa số a; gọi đúng tên cơ số và số mũ.",
        level: "nhan_biet",
      },
      {
        id: "b6-th-1",
        code: "YCCĐ 6.2",
        title: "Thực hiện phép nhân, chia hai lũy thừa cùng cơ số",
        description: "Áp dụng công thức a^m . a^n = a^(m+n) và a^m : a^n = a^(m-n) (a ≠ 0, m ≥ n).",
        level: "thong_hieu",
      },
      {
        id: "b6-vd-1",
        code: "YCCĐ 6.3",
        title: "So sánh lũy thừa và ứng dụng ước lượng",
        description: "So sánh các lũy thừa bằng cách đưa về cùng cơ số hoặc cùng số mũ.",
        level: "van_dung",
      },
      {
        id: "b6-vdc-1",
        code: "YCCĐ 6.4",
        title: "Tính tổng dãy lũy thừa liên tiếp",
        description: "Thu gọn và tính tổng dãy dạng S = 1 + a + a^2 + ... + a^n.",
        level: "van_dung_cao",
      },
    ],
  },
  "t6-b7-thu-tu-thuc-hien-cac-phep-tinh": {
    lessonId: "t6-b7-thu-tu-thuc-hien-cac-phep-tinh",
    lessonTitle: "Bài 7: Thứ tự thực hiện các phép tính",
    chapter: "Chương I: Tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b7-nb-1",
        code: "YCCĐ 7.1",
        title: "Nhận biết quy tắc ưu tiên thực hiện phép tính",
        description: "Thứ tự: Lũy thừa -> Nhân/Chia -> Cộng/Trừ; Ngoặc tròn ( ) -> Ngoặc vuông [ ] -> Ngoặc nhọn { }.",
        level: "nhan_biet",
      },
      {
        id: "b7-th-1",
        code: "YCCĐ 7.2",
        title: "Tính giá trị biểu thức số nhiều tầng",
        description: "Thực hiện từng bước chính xác các biểu thức có đầy đủ các dấu ngoặc và phép tính.",
        level: "thong_hieu",
      },
      {
        id: "b7-vd-1",
        code: "YCCĐ 7.3",
        title: "Tìm x trong đẳng thức phức hợp",
        description: "Vận dụng thứ tự phép tính ngược để giải bài toán tìm x.",
        level: "van_dung",
      },
    ],
  },
  "t6-b8-quan-he-chia-het-va-tinh-chat": {
    lessonId: "t6-b8-quan-he-chia-het-va-tinh-chat",
    lessonTitle: "Bài 8: Quan hệ chia hết và tính chất",
    chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b8-nb-1",
        code: "YCCĐ 8.1",
        title: "Nhận biết khái niệm ước và bội của một số tự nhiên",
        description: "Kí hiệu Ư(a) và B(a); nhận biết cách tìm các ước và các bội của một số tự nhiên.",
        level: "nhan_biet",
      },
      {
        id: "b8-th-1",
        code: "YCCĐ 8.2",
        title: "Hiểu và vận dụng tính chất chia hết của một tổng/hiệu",
        description: "Nếu a ⋮ m và b ⋮ m thì (a + b) ⋮ m; nếu một số không chia hết thì tổng không chia hết.",
        level: "thong_hieu",
      },
      {
        id: "b8-vd-1",
        code: "YCCĐ 8.3",
        title: "Xét tính chia hết không qua tính toán trực tiếp",
        description: "Vận dụng tính chất chia hết để suy luận nhanh tính chia hết của biểu thức chữ hoặc số lớn.",
        level: "van_dung",
      },
    ],
  },
  "t6-b9-dau-hieu-chia-het-cho-2-cho-5": {
    lessonId: "t6-b9-dau-hieu-chia-het-cho-2-cho-5",
    lessonTitle: "Bài 9: Dấu hiệu chia hết cho 2, cho 5",
    chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b9-nb-1",
        code: "YCCĐ 9.1",
        title: "Nhận biết dấu hiệu chia hết cho 2 và cho 5",
        description: "Các số có chữ số tận cùng là 0, 2, 4, 6, 8 thì chia hết cho 2; tận cùng là 0, 5 thì chia hết cho 5.",
        level: "nhan_biet",
      },
      {
        id: "b9-th-1",
        code: "YCCĐ 9.2",
        title: "Phân loại và tìm chữ số thích hợp",
        description: "Điền chữ số vào dấu * để số tạo thành chia hết cho 2, cho 5 hoặc cho cả hai số.",
        level: "thong_hieu",
      },
      {
        id: "b9-vd-1",
        code: "YCCĐ 9.3",
        title: "Giải bài toán lập số theo điều kiện chia hết",
        description: "Từ các chữ số cho trước lập các số có 3 hoặc 4 chữ số thỏa mãn điều kiện chia hết.",
        level: "van_dung",
      },
    ],
  },
  "t6-b10-dau-hieu-chia-het-cho-3-cho-9": {
    lessonId: "t6-b10-dau-hieu-chia-het-cho-3-cho-9",
    lessonTitle: "Bài 10: Dấu hiệu chia hết cho 3, cho 9",
    chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b10-nb-1",
        code: "YCCĐ 10.1",
        title: "Nhận biết dấu hiệu chia hết cho 3 và cho 9",
        description: "Dựa vào tổng các chữ số của số đó để nhận biết tính chia hết cho 3 và cho 9.",
        level: "nhan_biet",
      },
      {
        id: "b10-th-1",
        code: "YCCĐ 10.2",
        title: "Tìm chữ số chưa biết trong số nhiều chữ số",
        description: "Tìm chữ số x để số a*b chia hết cho 3 nhưng không chia hết cho 9.",
        level: "thong_hieu",
      },
      {
        id: "b10-vd-1",
        code: "YCCĐ 10.3",
        title: "Vận dụng phối hợp dấu hiệu chia hết 2, 3, 5, 9",
        description: "Giải bài toán thực tiễn tìm số học sinh, xếp hàng hoặc chia nhóm thỏa mãn nhiều điều kiện.",
        level: "van_dung",
      },
    ],
  },
  "t6-b11-so-nguyen-to": {
    lessonId: "t6-b11-so-nguyen-to",
    lessonTitle: "Bài 11: Số nguyên tố",
    chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b11-nb-1",
        code: "YCCĐ 11.1",
        title: "Phân biệt số nguyên tố và hợp số",
        description: "Nắm vững định nghĩa số nguyên tố (chỉ có 2 ước là 1 và chính nó); số 0 và 1 không là số nguyên tố.",
        level: "nhan_biet",
      },
      {
        id: "b11-th-1",
        code: "YCCĐ 11.2",
        title: "Phân tích một số tự nhiên ra thừa số nguyên tố",
        description: "Phân tích theo sơ đồ cột hoặc sơ đồ cây, viết kết quả dưới dạng tích các lũy thừa.",
        level: "thong_hieu",
      },
      {
        id: "b11-vd-1",
        code: "YCCĐ 11.3",
        title: "Ứng dụng số nguyên tố tìm ước số",
        description: "Dựa vào phân tích thừa số nguyên tố để tìm tất cả các ước của một số tự nhiên.",
        level: "van_dung",
      },
    ],
  },
  "t6-b12-uoc-chung-va-uoc-chung-lon-nhat": {
    lessonId: "t6-b12-uoc-chung-va-uoc-chung-lon-nhat",
    lessonTitle: "Bài 12: Ước chung và ước chung lớn nhất",
    chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b12-nb-1",
        code: "YCCĐ 12.1",
        title: "Nhận biết ước chung và ước chung lớn nhất (ƯCLN)",
        description: "Kí hiệu ƯC(a, b) và ƯCLN(a, b); nhận biết hai số nguyên tố cùng nhau.",
        level: "nhan_biet",
      },
      {
        id: "b12-th-1",
        code: "YCCĐ 12.2",
        title: "Quy tắc tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố",
        description: "Chọn thừa số nguyên tố chung với số mũ nhỏ nhất và lập tích.",
        level: "thong_hieu",
      },
      {
        id: "b12-vd-1",
        code: "YCCĐ 12.3",
        title: "Ứng dụng ƯCLN giải bài toán chia đều và rút gọn phân số",
        description: "Tìm số phần thưởng nhiều nhất có thể chia đều; rút gọn phân số về tối giản.",
        level: "van_dung",
      },
    ],
  },
  "t6-b13-boi-chung-va-boi-chung-nho-nhat": {
    lessonId: "t6-b13-boi-chung-va-boi-chung-nho-nhat",
    lessonTitle: "Bài 13: Bội chung và bội chung nhỏ nhất",
    chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    objectives: [
      {
        id: "b13-nb-1",
        code: "YCCĐ 13.1",
        title: "Nhận biết bội chung và bội chung nhỏ nhất (BCNN)",
        description: "Kí hiệu BC(a, b) và BCNN(a, b); nắm định nghĩa BCNN khác 0 nhỏ nhất.",
        level: "nhan_biet",
      },
      {
        id: "b13-th-1",
        code: "YCCĐ 13.2",
        title: "Quy tắc tìm BCNN bằng phân tích thừa số nguyên tố",
        description: "Chọn thừa số nguyên tố chung và riêng với số mũ lớn nhất.",
        level: "thong_hieu",
      },
      {
        id: "b13-vd-1",
        code: "YCCĐ 13.3",
        title: "Ứng dụng BCNN giải bài toán chu kì và quy đồng mẫu",
        description: "Giải bài toán hai xe cùng xuất phát, đèn báo hiệu cùng chớp nháy lặp lại.",
        level: "van_dung",
      },
    ],
  },
  "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu": {
    lessonId: "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu",
    lessonTitle: "Bài 18: Tam giác đều. Hình vuông. Lục giác đều",
    chapter: "Chương IV: Một số hình phẳng trong thực tiễn",
    objectives: [
      {
        id: "b18-nb-1",
        code: "YCCĐ 18.1",
        title: "Nhận dạng tam giác đều, hình vuông, lục giác đều",
        description: "Nhận biết các yếu tố: đỉnh, cạnh, góc của tam giác đều, hình vuông, lục giác đều.",
        level: "nhan_biet",
      },
      {
        id: "b18-th-1",
        code: "YCCĐ 18.2",
        title: "Mô tả tính chất bằng nhau về cạnh và góc",
        description: "Hiểu tam giác đều có 3 cạnh bằng nhau, 3 góc bằng nhau; hình vuông có 4 cạnh bằng nhau, 4 góc vuông.",
        level: "thong_hieu",
      },
      {
        id: "b18-vd-1",
        code: "YCCĐ 18.3",
        title: "Vẽ và ghép hình trang trí, tính chu vi",
        description: "Vận dụng tính chu vi, ghép 6 tam giác đều thành lục giác đều, tạo hoa văn lát nền.",
        level: "van_dung",
      },
    ],
  },
  "t6-b19-hinh-chu-nhat-hinh-thoi-hinh-binh-hanh-hinh-thang-can": {
    lessonId: "t6-b19-hinh-chu-nhat-hinh-thoi-hinh-binh-hanh-hinh-thang-can",
    lessonTitle: "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân",
    chapter: "Chương IV: Một số hình phẳng trong thực tiễn",
    objectives: [
      {
        id: "b19-nb-1",
        code: "YCCĐ 19.1",
        title: "Nhận biết các hình tứ giác đặc biệt trong thực tế",
        description: "Chỉ ra hình ảnh hình chữ nhật, hình thoi, hình bình hành, hình thang cân trong đời sống.",
        level: "nhan_biet",
      },
      {
        id: "b19-th-1",
        code: "YCCĐ 19.2",
        title: "Mô tả đặc điểm về cạnh, góc và đường chéo",
        description: "Đường chéo hình thoi vuông góc nhau; đường chéo hình chữ nhật, hình thang cân bằng nhau.",
        level: "thong_hieu",
      },
      {
        id: "b19-vd-1",
        code: "YCCĐ 19.3",
        title: "Tính chu vi và giải bài toán ghép khung",
        description: "Tính chu vi khu đất, khung cửa sổ, hàng rào bao quanh các hình.",
        level: "van_dung",
      },
    ],
  },
  "t6-b20-chu-vi-va-dien-tich-cua-mot-so-tu-giac": {
    lessonId: "t6-b20-chu-vi-va-dien-tich-cua-mot-so-tu-giac",
    lessonTitle: "Bài 20: Chu vi và diện tích của một số tứ giác đã học",
    chapter: "Chương IV: Một số hình phẳng trong thực tiễn",
    objectives: [
      {
        id: "b20-nb-1",
        code: "YCCĐ 20.1",
        title: "Nhận biết công thức tính chu vi và diện tích",
        description: "Ghi nhớ công thức S = a.b (hình chữ nhật), S = 1/2 d1.d2 (hình thoi), S = 1/2 (a+b)h (hình thang).",
        level: "nhan_biet",
      },
      {
        id: "b20-th-1",
        code: "YCCĐ 20.2",
        title: "Tính toán trực tiếp chu vi và diện tích các hình",
        description: "Thay số đo thích hợp vào công thức và đổi đúng đơn vị đo độ dài, diện tích (m², cm²).",
        level: "thong_hieu",
      },
      {
        id: "b20-vd-1",
        code: "YCCĐ 20.3",
        title: "Tính chi phí lát gạch, trồng cỏ sân vườn",
        description: "Giải bài toán thực tế kết hợp diện tích và giá thành vật liệu hoàn thiện công trình.",
        level: "van_dung",
      },
    ],
  },
  "t6-b23-mo-rong-phan-so": {
    lessonId: "t6-b23-mo-rong-phan-so",
    lessonTitle: "Bài 23: Mở rộng phân số. Phân số bằng nhau",
    chapter: "Chương VI: Phân số",
    objectives: [
      {
        id: "b23-nb-1",
        code: "YCCĐ 23.1",
        title: "Nhận biết phân số với tử và mẫu là các số nguyên",
        description: "Dạng a/b với a, b ∈ Z, b ≠ 0; nhận biết tử số và mẫu số có thể nhận giá trị âm.",
        level: "nhan_biet",
      },
      {
        id: "b23-th-1",
        code: "YCCĐ 23.2",
        title: "Quy tắc hai phân số bằng nhau",
        description: "Hai phân số a/b = c/d khi và chỉ khi a.d = b.c.",
        level: "thong_hieu",
      },
      {
        id: "b23-vd-1",
        code: "YCCĐ 23.3",
        title: "Tìm số nguyên x thỏa mãn đẳng thức phân số",
        description: "Áp dụng tích chéo a.d = b.c để tìm ẩn số nguyên x.",
        level: "van_dung",
      },
    ],
  },
};

/**
 * Hàm lấy danh sách Yêu Cầu Cần Đạt cho một bài học bất kì
 * Nếu bài học chưa được định nghĩa chi tiết, tự động sinh bộ YCCĐ chuẩn theo cấu trúc CT GDPT 2018
 */
export function getCurriculumObjectivesForLesson(lessonId: string, lessonTitle: string): LessonCurriculum {
  if (GRADE_6_CURRICULUM_STANDARDS[lessonId]) {
    return GRADE_6_CURRICULUM_STANDARDS[lessonId];
  }

  // 1. So khớp thông minh theo số bài (Ví dụ: t6-b3-..., b3, Bài 3)
  const numMatch = lessonId.match(/(?:t\d+-)?b(\d+)/i) || (lessonTitle && lessonTitle.match(/bài\s*(\d+)/i));
  if (numMatch) {
    const bNum = numMatch[1];
    const foundKey = Object.keys(GRADE_6_CURRICULUM_STANDARDS).find((k) =>
      k.includes(`-b${bNum}-`) || k.startsWith(`b${bNum}-`)
    );
    if (foundKey) {
      return {
        ...GRADE_6_CURRICULUM_STANDARDS[foundKey],
        lessonId,
        lessonTitle: lessonTitle || GRADE_6_CURRICULUM_STANDARDS[foundKey].lessonTitle,
      };
    }
  }

  // 2. So khớp theo từ khóa đặc trưng trong tên bài học
  const titleLower = (lessonTitle || "").toLowerCase();
  for (const key of Object.keys(GRADE_6_CURRICULUM_STANDARDS)) {
    const item = GRADE_6_CURRICULUM_STANDARDS[key];
    const itemTitle = item.lessonTitle.toLowerCase();
    if (
      (titleLower.includes("thứ tự") && itemTitle.includes("thứ tự")) ||
      (titleLower.includes("cộng") && itemTitle.includes("cộng")) ||
      (titleLower.includes("nhân") && itemTitle.includes("nhân")) ||
      (titleLower.includes("lũy thừa") && itemTitle.includes("lũy thừa")) ||
      (titleLower.includes("chia hết") && itemTitle.includes("chia hết")) ||
      (titleLower.includes("số nguyên tố") && itemTitle.includes("số nguyên tố")) ||
      (titleLower.includes("ước chung") && itemTitle.includes("ước chung")) ||
      (titleLower.includes("bội chung") && itemTitle.includes("bội chung")) ||
      (titleLower.includes("hình vuông") && itemTitle.includes("hình vuông")) ||
      (titleLower.includes("phân số") && itemTitle.includes("phân số"))
    ) {
      return {
        ...item,
        lessonId,
        lessonTitle,
      };
    }
  }

  // Tự động sinh chuẩn mực cho bài học chưa nằm trong bảng mẫu
  return {
    lessonId,
    lessonTitle,
    chapter: "Chương trình Toán 6 - GDPT 2018",
    objectives: [
      {
        id: `${lessonId}-nb-1`,
        code: "YCCĐ 1 (NB)",
        title: `Nhận biết định nghĩa và khái niệm trọng tâm của ${lessonTitle}`,
        description: "Nhận diện đúng các thuật ngữ, kí hiệu, dạng toán cơ bản theo chuẩn SGK.",
        level: "nhan_biet",
      },
      {
        id: `${lessonId}-th-1`,
        code: "YCCĐ 2 (TH)",
        title: `Hiểu bản chất và vận dụng tính chất biến đổi trong ${lessonTitle}`,
        description: "Thực hiện tính toán trực tiếp, so sánh, phân tích các đối tượng toán học.",
        level: "thong_hieu",
      },
      {
        id: `${lessonId}-vd-1`,
        code: "YCCĐ 3 (VD)",
        title: `Vận dụng kiến thức ${lessonTitle} vào giải toán thực tế đời sống`,
        description: "Áp dụng quy tắc và công thức toán học để giải quyết tình huống thực tế.",
        level: "van_dung",
      },
      {
        id: `${lessonId}-vdc-1`,
        code: "YCCĐ 4 (VDC)",
        title: `Phát triển tư duy nâng cao và mở rộng cho ${lessonTitle}`,
        description: "Giải các bài toán biến đổi nâng cao, phân loại học sinh khá giỏi.",
        level: "van_dung_cao",
      },
    ],
  };
}
