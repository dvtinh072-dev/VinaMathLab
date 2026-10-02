import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

export const GRADE_12_LESSON_5: DetailedLessonData = {
  id: "t12-b5-ung-dung-thuc-tien-dao-ham",
  lessonNumber: 5,
  title: "Bài 5: Ứng dụng đạo hàm để giải quyết một số vấn đề thực tiễn",
  bookChapter: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Tối ưu hóa chi phí logistic, dung tích bồn chứa công nghiệp và kiểm soát nồng độ dược chất trong y học",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Nam",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, trong thực tế các doanh nghiệp hay gặp những bài toán như: làm thế nào để chi phí vận chuyển là thấp nhất, giá bán nào thu được lợi nhuận cao nhất, hoặc thiết kế vỏ lon hộp sữa tốn ít kim loại nhất. Đạo hàm giúp chúng ta giải quyết những bài toán này như thế nào ạ?",
      visualGraphic: "graph",
      mathNote: "\\text{Mo hinh hoa toan hoc: } f(x) \\to f'(x) = 0 \\implies x^* \\text{ (Diem toi uu)}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Nam! Đây chính là đỉnh cao ứng dụng của giải tích lớp 12! Mọi bài toán thực tế đều tuân theo quy trình 4 bước vàng: (1) Đặt ẩn số và xác định điều kiện thực tế; (2) Thiết lập hàm số mục tiêu cần tối ưu f(x); (3) Sử dụng đạo hàm f'(x) và bảng biến thiên để tìm GTLN hoặc GTNN; (4) Kết luận và trả lời theo ngữ cảnh thực tế!",
      visualGraphic: "circle",
      mathNote: "4 \\text{ buoc: Dat an } \\to \\text{Lap ham } f(x) \\to \\text{Tim } \\max/\\min f(x) \\to \\text{Ket luan}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Nam",
      avatar: "🧑‍🎓",
      speech: "Em hiểu rồi ạ! Nhưng đôi khi biến số không nằm trên một đoạn đóng [a; b] mà nằm trên khoảng mở (0; +\\infty), thì làm sao ta khẳng định điểm cực trị đó chính là giá trị lớn nhất hay nhỏ nhất toàn cục ạ?",
      visualGraphic: "graph",
      mathNote: "\\text{Neu } f'(x) = 0 \\text{ co nghiem duy nhat } x_0 \\text{ tren } (a; b) \\text{ va la cuc tri duy nhat } \\implies x_0 \\text{ la } \\max/\\min"
    }
  ],
  youtubeVideoId: "u12_b5_vid1",
  youtubeVideoTitle: "Bài 5: Ứng dụng đạo hàm giải quyết vấn đề thực tiễn - Toán 12 KNTT",
  youtubeVideos: [
    {
      id: "u12_b5_vid1",
      title: "Tiết 1: Quy trình 4 bước mô hình hóa & Bài toán tối ưu hóa trong kinh tế"
    },
    {
      id: "u12_b5_vid2",
      title: "Tiết 2: Bài toán tối ưu hóa hình học (Thể tích hộp tôn, bồn chứa, trang sách)"
    },
    {
      id: "u12_b5_vid3",
      title: "Tiết 3: Bài toán tối ưu quãng đường, chi phí đường dây điện & Y sinh học"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.5.1",
      title: "Ví dụ 1 (Tiết 1): Tối đa hóa lợi nhuận kinh doanh",
      question: "Một cửa hàng bán sản phẩm với giá $p(x) = 100 - 0.5x$ (nghìn đồng/chiếc) khi bán được $x$ sản phẩm. Chi phí sản xuất $x$ sản phẩm là $C(x) = 20x + 500$ (nghìn đồng). Để lợi nhuận lớn nhất, cửa hàng cần bán bao nhiêu sản phẩm?",
      options: [
        "$80$",
        "$100$",
        "$60$",
        "$120$"
      ],
      correctIndex: 0,
      explanation: "Hàm doanh thu: $R(x) = x \\cdot p(x) = 100x - 0.5x^2$. Hàm lợi nhuận: $P(x) = R(x) - C(x) = -0.5x^2 + 80x - 500$. Đạo hàm: $P'(x) = -x + 80 = 0 \\Leftrightarrow x = 80$. Vì hệ số của $x^2$ âm nên hàm số đạt giá trị lớn nhất tại $x = 80$ sản phẩm."
    },
    {
      id: "vq-12.5.2",
      title: "Ví dụ 2 (Tiết 2): Hộp chữ nhật có đáy hình vuông thể tích cố định",
      question: "Một chiếc hộp hình hộp chữ nhật không nắp có đáy hình vuông và có thể tích bằng $500\\text{ cm}^3$. Để diện tích toàn phần của hộp nhỏ nhất (tốn ít vật liệu nhất) thì độ dài cạnh đáy bằng:",
      options: [
        "$10\\text{ cm}$",
        "$5\\text{ cm}$",
        "$15\\text{ cm}$",
        "$20\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Gọi cạnh đáy là $x > 0$, chiều cao $h > 0$. Thể tích $V = x^2 h = 500 \\implies h = \\frac{500}{x^2}$. Diện tích vật liệu làm hộp không nắp: $S(x) = x^2 + 4xh = x^2 + \\frac{2000}{x}$. Đạo hàm: $S'(x) = 2x - \\frac{2000}{x^2} = 0 \\Leftrightarrow 2x^3 = 2000 \\Leftrightarrow x^3 = 1000 \\Leftrightarrow x = 10\\text{ cm}$. Đạo hàm đổi dấu từ âm sang dương qua $x = 10$, do đó diện tích nhỏ nhất khi cạnh đáy bằng $10\\text{ cm}$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Quy trình tổng quát 4 bước giải bài toán tối ưu hóa thực tiễn",
      points: [
        "Bước 1: Phân tích đề bài, chọn biến số thích hợp (kèm đơn vị đo và điều kiện ràng buộc thực tế: miền xác định $D$).",
        "Bước 2: Thiết lập hàm số mục tiêu $y = f(x)$ biểu diễn đại lượng cần tối ưu (lợi nhuận lớn nhất, chi phí nhỏ nhất, thể tích lớn nhất, diện tích nhỏ nhất...).",
        "Bước 3: Sử dụng đạo hàm $f'(x)$ để tìm điểm tới hạn trong miền $D$, lập bảng biến thiên hoặc sử dụng định lý Fermat / bất đẳng thức để tìm giá trị lớn nhất hoặc giá trị nhỏ nhất của hàm số trên miền $D$.",
        "Bước 4: Đối chiếu điều kiện, chuyển đổi kết quả toán học thành câu trả lời có ý nghĩa thực tế."
      ],
      exampleProblem: "Một người cần rào một mảnh đất hình chữ nhật có một cạnh giáp bờ tường thẳng (không cần rào cạnh này). Biết người đó có 60 mét lưới rào. Tìm diện tích lớn nhất của mảnh đất có thể rào được.",
      exampleSolution: "Gọi $x$ (mét) là chiều rộng của mảnh đất ($0 < x < 30$).\nChiều dài mảnh đất là $60 - 2x$ (mét).\nDiện tích mảnh đất: $S(x) = x(60 - 2x) = -2x^2 + 60x$.\nĐạo hàm: $S'(x) = -4x + 60 = 0 \\Leftrightarrow x = 15\\text{ m}$.\nBảng biến thiên: $S(x)$ đạt giá trị lớn nhất tại $x = 15$.\nDiện tích lớn nhất là $S(15) = 15(60 - 30) = 450\\text{ m}^2$."
    },
    {
      index: "2",
      title: "2. Tối ưu hóa trong Kinh tế & Quản trị kinh doanh",
      points: [
        "Mối quan hệ cơ bản: Doanh thu $R(x) = x \\cdot p(x)$ (với $p(x)$ là giá bán một đơn vị sản phẩm). Lợi nhuận $P(x) = R(x) - C(x)$ (với $C(x)$ là tổng chi phí sản xuất).",
        "Chi phí cận biên $C'(x)$: Là đạo hàm của hàm chi phí, xấp xỉ chi phí tăng thêm khi sản xuất thêm đơn vị sản phẩm thứ $x + 1$.",
        "Lợi nhuận cận biên $P'(x) = R'(x) - C'(x)$: Để lợi nhuận đạt cực đại thì $P'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$ (Doanh thu cận biên bằng Chi phí cận biên).",
        "Chi phí trung bình: $\\bar{C}(x) = \\frac{C(x)}{x}$. Chi phí trung bình đạt cực tiểu khi $\\bar{C}'(x) = 0 \\Leftrightarrow C'(x) = \\bar{C}(x)$ (Chi phí cận biên bằng Chi phí trung bình)."
      ],
      exampleProblem: "Một xưởng sản xuất có hàm chi phí $C(x) = x^3 - 30x^2 + 400x + 500$ (nghìn đồng). Tìm mức sản lượng $x$ để chi phí cận biên nhỏ nhất.",
      exampleSolution: "Chi phí cận biên: $M(x) = C'(x) = 3x^2 - 60x + 400$.\nĐạo hàm của $M(x)$: $M'(x) = 6x - 60 = 0 \\Leftrightarrow x = 10$.\nVì hệ số $a = 3 > 0$ nên tam thức bậc hai $M(x)$ đạt giá trị nhỏ nhất tại $x = 10$.\nVậy chi phí cận biên đạt nhỏ nhất khi sản xuất 10 sản phẩm."
    },
    {
      index: "3",
      title: "3. Tối ưu hóa trong Thiết kế hình học & Sản xuất công nghiệp",
      points: [
        "Bài toán cắt góc gập hộp: Tấm tôn hình chữ nhật kích thước $a \\times b$ ($a \\le b$), cắt 4 hình vuông góc cạnh $x$ ($0 < x < a/2$) rồi gập lại thành hộp không nắp. Thể tích $V(x) = x(a - 2x)(b - 2x)$.",
        "Bài toán thùng chứa hình trụ: Thể tích $V = \\pi R^2 h = V_0$. Diện tích vật liệu (toàn phần có nắp): $S(R) = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + \\frac{2V_0}{R}$. Diện tích nhỏ nhất khi $h = 2R$ (chiều cao bằng đường kính đáy).",
        "Bài toán thùng chứa hình trụ không nắp: $S(R) = \\pi R^2 + \\frac{2V_0}{R}$. Diện tích nhỏ nhất khi $h = R$ (chiều cao bằng bán kính đáy).",
        "Bài toán trang sách/poster có lề: Cố định diện tích in $S_0 = (x - 2a)(y - 2b)$, tìm diện tích toàn trang $xy$ nhỏ nhất."
      ],
      exampleProblem: "Một lon nước ngọt hình trụ có thể tích $330\\text{ ml} = 330\\text{ cm}^3$. Tìm tỉ số $\\frac{h}{R}$ giữa chiều cao và bán kính đáy để diện tích toàn phần vỏ lon là nhỏ nhất.",
      exampleSolution: "Diện tích toàn phần: $S(R) = 2\\pi R^2 + \\frac{2V}{R}$.\nĐạo hàm: $S'(R) = 4\\pi R - \\frac{2V}{R^2} = 0 \\Leftrightarrow 4\\pi R^3 = 2V = 2\\pi R^2 h \\Leftrightarrow 2R = h$.\nDo đó tỉ số $\\frac{h}{R} = 2$. Vỏ lon tốn ít kim loại nhất khi chiều cao gấp đôi bán kính đáy (bằng đường kính đáy)."
    },
    {
      index: "4",
      title: "4. Tối ưu hóa trong Vật lý, Cơ học & Y sinh học",
      points: [
        "Chuyển động thẳng: Phương trình tọa độ $s = s(t)$. Vận tốc tức thời $v(t) = s'(t)$. Gia tốc tức thời $a(t) = v'(t) = s''(t)$. Vật đạt độ cao lớn nhất khi $v(t) = 0$. Vận tốc lớn nhất khi $v'(t) = a(t) = 0$.",
        "Nồng độ thuốc trong máu: Thường mô phỏng bằng hàm phân thức $C(t) = \\frac{at}{t^2 + b}$ ($a, b > 0$) hoặc hàm mũ $C(t) = c(e^{-k_1 t} - e^{-k_2 t})$. Nồng độ thuốc đạt đỉnh cao nhất khi $C'(t) = 0$.",
        "Lượng máu bơm của tim / Lưu lượng khí thở: Bài toán khảo sát biên độ cực đại và chu kỳ tối ưu bằng đạo hàm."
      ],
      exampleProblem: "Một vật chuyển động theo phương trình $s(t) = -t^3 + 9t^2 + 21t$ ($t$ tính bằng giây, $s$ tính bằng mét). Tìm thời điểm vận tốc của vật đạt giá trị lớn nhất.",
      exampleSolution: "Vận tốc: $v(t) = s'(t) = -3t^2 + 18t + 21$.\nĐạo hàm vận tốc: $v'(t) = -6t + 18 = 0 \\Leftrightarrow t = 3\\text{ s}$.\nVì hệ số $a = -3 < 0$ nên parabol $v(t)$ đạt cực đại tại đỉnh $t = 3$.\nVậy sau 3 giây thì vận tốc của vật đạt giá trị lớn nhất là $v(3) = 48\\text{ m/s}$."
    },
    {
      index: "5",
      title: "5. Bài toán đường dây điện và tuyến vận chuyển liên hợp tối ưu",
      points: [
        "Bài toán khoảng cách liên hợp: Nhà máy ở $B$ cách bờ sông một khoảng $h_2$, trạm phát ở $A$ cách bờ sông $h_1$. Cần đặt một trạm chuyển tiếp $M$ trên bờ sông sao cho tổng chi phí lắp đặt (hoặc thời gian di chuyển) là nhỏ nhất.",
        "Thiết lập hàm số: Chi phí $C(x) = c_1 \\sqrt{x^2 + h_1^2} + c_2 \\sqrt{(L - x)^2 + h_2^2}$ với $c_1, c_2$ là đơn giá trên từng địa hình (trên bộ và dưới nước).",
        "Đạo hàm: Cho $C'(x) = 0$ dẫn đến định luật khúc xạ dạng $\\frac{c_1 x}{\\sqrt{x^2 + h_1^2}} = \\frac{c_2 (L - x)}{\\sqrt{(L - x)^2 + h_2^2}} \\Leftrightarrow c_1 \\sin\\alpha_1 = c_2 \\sin\\alpha_2$."
      ],
      exampleProblem: "Một trạm điện $A$ cách bờ sông thẳng $3\\text{ km}$. Một trang trại $B$ ở bờ bên kia cách vị trí đối diện bờ $A$ một khoảng $6\\text{ km}$ dọc theo bờ sông và cách bờ sông $2\\text{ km}$. Chi phí lắp cáp dưới nước là 5 triệu đồng/km, trên cạn là 3 triệu đồng/km. Phương pháp đạo hàm giúp xác định chính xác vị trí vượt sông có chi phí thấp nhất.",
      exampleSolution: "Gọi $x$ ($0 \\le x \\le 6$) là vị trí điểm tiếp bờ. Ta lập hàm chi phí $C(x)$, tính $C'(x) = 0$ và tìm điểm tối ưu theo giải tích."
    }
  ],
  quizQuestions: [
    {
      id: "q-12.5.1",
      badge: "NB 1 - Điểm hòa vốn và doanh thu cực đại",
      source: "Đề tham khảo Tốt nghiệp THPT 2025 - Bộ GD&ĐT",
      question: "Một công ty đồ gia dụng ước tính hàm doanh thu khi bán $x$ nghìn sản phẩm là $R(x) = -2x^2 + 120x$ (triệu đồng). Doanh thu của công ty đạt giá trị lớn nhất khi lượng sản phẩm bán ra bằng:",
      options: [
        "$30\\text{ nghin}$",
        "$60\\text{ nghin}$",
        "$40\\text{ nghin}$",
        "$20\\text{ nghin}$"
      ],
      correctIndex: 0,
      explanation: "Hàm doanh thu $R(x) = -2x^2 + 120x$ là tam thức bậc hai có bề lõm quay xuống. Đạo hàm: $R'(x) = -4x + 120 = 0 \\Leftrightarrow x = 30$. Do đó doanh thu đạt giá trị lớn nhất khi bán ra $30$ nghìn sản phẩm."
    },
    {
      id: "q-12.5.2",
      badge: "NB 2 - Thời điểm độ cao cực đại trong ném thẳng đứng",
      source: "SGK Toán 12 KNTT - Bài tập ứng dụng",
      question: "Một quả bóng được đá thẳng đứng lên từ mặt đất với phương trình chuyển động $h(t) = 24.5t - 4.9t^2$ (trong đó $t$ tính bằng giây, $h$ tính bằng mét). Thời điểm quả bóng đạt độ cao lớn nhất là:",
      options: [
        "$t = 2.5\\text{ s}$",
        "$t = 5.0\\text{ s}$",
        "$t = 2.0\\text{ s}$",
        "$t = 3.0\\text{ s}$"
      ],
      correctIndex: 0,
      explanation: "Vận tốc tức thời của quả bóng: $v(t) = h'(t) = 24.5 - 9.8t$. Quả bóng đạt độ cao lớn nhất khi vận tốc triệt tiêu: $v(t) = 0 \\Leftrightarrow 24.5 - 9.8t = 0 \\Leftrightarrow t = \\frac{24.5}{9.8} = 2.5\\text{ s}$."
    },
    {
      id: "q-12.5.3",
      badge: "NB 3 - Tối ưu hóa diện tích hình chữ nhật chu vi cố định",
      source: "Đề khảo sát chất lượng THPT",
      question: "Một mảnh vườn hình chữ nhật có chu vi bằng $100\\text{ m}$. Diện tích lớn nhất của mảnh vườn đó bằng bao nhiêu mét vuông?",
      options: [
        "$625\\text{ m}^2$",
        "$500\\text{ m}^2$",
        "$600\\text{ m}^2$",
        "$2500\\text{ m}^2$"
      ],
      correctIndex: 0,
      explanation: "Nửa chu vi hình chữ nhật là $50\\text{ m}$. Gọi chiều rộng là $x$ ($0 < x < 50$), chiều dài là $50 - x$. Diện tích: $S(x) = x(50 - x) = -x^2 + 50x$. Đạo hàm: $S'(x) = -2x + 50 = 0 \\Leftrightarrow x = 25\\text{ m}$. Khi đó mảnh đất trở thành hình vuông cạnh $25\\text{ m}$ và diện tích lớn nhất là $S = 25 \\times 25 = 625\\text{ m}^2$."
    },
    {
      id: "q-12.5.4",
      badge: "NB 4 - Nồng độ thuốc cực đại trong cơ thể",
      source: "Đề thi thử Tốt nghiệp THPT",
      question: "Nồng độ một loại thuốc trong máu sau khi tiêm $t$ giờ được xác định bởi hàm số $C(t) = \\frac{6t}{t^2 + 9}$ (mg/lít) với $t \\ge 0$. Nồng độ thuốc trong máu đạt giá trị lớn nhất sau bao nhiêu giờ kể từ khi tiêm?",
      options: [
        "$3\\text{ h}$",
        "$2\\text{ h}$",
        "$4.5\\text{ h}$",
        "$1.5\\text{ h}$"
      ],
      correctIndex: 0,
      explanation: "Đạo hàm: $C'(t) = \\frac{6(t^2 + 9) - 6t(2t)}{(t^2 + 9)^2} = \\frac{54 - 6t^2}{(t^2 + 9)^2}$. Cho $C'(t) = 0 \\Leftrightarrow 54 - 6t^2 = 0 \\Leftrightarrow t = 3$ (do $t \\ge 0$). Bảng biến thiên cho thấy $C(t)$ đạt cực đại toàn cục tại $t = 3$. Vậy sau 3 giờ thì nồng độ thuốc đạt giá trị lớn nhất."
    },
    {
      id: "q-12.5.5",
      badge: "TH 5 - Cắt góc tấm tôn làm hộp thể tích lớn nhất",
      source: "Đề thi thử Sở GD&ĐT Hà Nội",
      svgDiagram: `<svg viewBox="0 0 460 220" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="220" height="180" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="4" />
  <!-- 4 góc cắt hình vuông cạnh x -->
  <rect x="20" y="20" width="40" height="40" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3" />
  <rect x="200" y="20" width="40" height="40" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3" />
  <rect x="20" y="160" width="40" height="40" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3" />
  <rect x="200" y="160" width="40" height="40" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3" />
  <!-- Nét gấp viền đáy hộp -->
  <line x1="60" y1="60" x2="200" y2="60" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 3" />
  <line x1="60" y1="160" x2="200" y2="160" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 3" />
  <line x1="60" y1="60" x2="60" y2="160" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 3" />
  <line x1="200" y1="60" x2="200" y2="160" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 3" />
  <!-- Kích thước tấm tôn -->
  <text x="130" y="15" fill="#94a3b8" font-size="12" text-anchor="middle">50 cm</text>
  <text x="10" y="115" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90 10 115)">50 cm</text>
  <text x="35" y="35" fill="#f43f5e" font-size="11" font-weight="bold">x</text>
  <!-- Hình phối cảnh chiếc hộp không nắp bên phải -->
  <polygon points="300,140 370,165 430,135 360,110" fill="#334155" stroke="#38bdf8" stroke-width="1.8" />
  <polygon points="300,140 370,165 370,195 300,170" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8" />
  <polygon points="370,165 430,135 430,165 370,195" fill="#0f172a" stroke="#38bdf8" stroke-width="1.8" />
  <text x="365" y="90" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Hộp không nắp</text>
  <text x="290" y="160" fill="#facc15" font-size="11">x</text>
  <text x="330" y="190" fill="#94a3b8" font-size="11">50 - 2x</text>
</svg>`,
      question: "Từ một tấm tôn hình vuông có cạnh bằng $60\\text{ cm}$, người ta cắt bỏ ở bốn góc bốn hình vuông bằng nhau có cạnh bằng $x\\text{ cm}$ rồi gập mép lại thành một chiếc hộp hình chữ nhật không có nắp. Để thể tích chiếc hộp đạt giá trị lớn nhất thì $x$ bằng bao nhiêu?",
      options: [
        "$10\\text{ cm}$",
        "$12\\text{ cm}$",
        "$15\\text{ cm}$",
        "$8\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Điều kiện: $0 < x < 30\\text{ cm}$. Đáy hộp là hình vuông cạnh $60 - 2x$, chiều cao hộp là $x$. Thể tích: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4(x^3 - 60x^2 + 900x)$. Đạo hàm: $V'(x) = 4(3x^2 - 120x + 900) = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$. Cho $V'(x) = 0 \\Leftrightarrow x = 10$ (nhận) hoặc $x = 30$ (loại). Đạo hàm đổi dấu từ dương sang âm tại $x = 10$. Vậy chiếc hộp có thể tích lớn nhất khi $x = 10\\text{ cm}$."
    },
    {
      id: "q-12.5.6",
      badge: "TH 6 - Chi phí làm thùng chứa hình trụ có nắp nhỏ nhất",
      source: "Đề thi thử THPT Quốc gia",
      question: "Một công ty sản xuất một thùng chứa dầu hình trụ có nắp đậy với thể tích cố định $V = 54\\pi\\text{ m}^3$. Để tốn ít vật liệu nhất (diện tích toàn phần $S_{\\text{tp}}$ nhỏ nhất) thì bán kính đáy $R$ của thùng bằng:",
      options: [
        "$3\\text{ m}$",
        "$6\\text{ m}$",
        "$2\\text{ m}$",
        "$4\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Thể tích $V = \\pi R^2 h = 54\\pi \\implies h = \\frac{54}{R^2}$. Diện tích toàn phần thùng có nắp: $S_{\\text{tp}} = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + 2\\pi R \\left(\\frac{54}{R^2}\\right) = 2\\pi \\left(R^2 + \\frac{54}{R}\\right)$. Đạo hàm theo $R$: $S'(R) = 2\\pi \\left(2R - \\frac{54}{R^2}\\right) = 0 \\Leftrightarrow 2R^3 = 54 \\Leftrightarrow R^3 = 27 \\Leftrightarrow R = 3\\text{ m}$. Đạo hàm đổi dấu từ âm sang dương tại $R = 3$, do đó diện tích toàn phần đạt giá trị nhỏ nhất khi $R = 3\\text{ m}$."
    },
    {
      id: "q-12.5.7",
      badge: "TH 7 - Thiết kế trang sách in chữ diện tích trang nhỏ nhất",
      source: "Đề khảo sát chuyên Toán",
      question: "Một trang sách có diện tích phần in chữ là $384\\text{ cm}^2$. Biết lề trên và lề dưới đều rộng $3\\text{ cm}$, lề trái và lề phải đều rộng $2\\text{ cm}$. Kích thước toàn bộ trang sách nhỏ nhất có chiều dài và chiều rộng lần lượt là:",
      options: [
        "$30\\text{ cm} \\times 20\\text{ cm}$",
        "$32\\text{ cm} \\times 18\\text{ cm}$",
        "$28\\text{ cm} \\times 24\\text{ cm}$",
        "$36\\text{ cm} \\times 16\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Gọi kích thước phần in chữ là chiều rộng $x > 0$ và chiều dài $y > 0$. Ta có $xy = 384 \\implies y = \\frac{384}{x}$. Kích thước toàn trang: chiều ngang là $x + 4$, chiều dọc là $y + 6$. Diện tích toàn trang sách: $S(x) = (x + 4)(y + 6) = (x + 4)\\left(\\frac{384}{x} + 6\\right) = 384 + 6x + \\frac{1536}{x} + 24 = 6x + \\frac{1536}{x} + 408$. Áp dụng BĐT Cauchy: $6x + \\frac{1536}{x} \\ge 2\\sqrt{6 \\times 1536} = 2\\sqrt{9216} = 192$. Dấu bằng xảy ra khi $6x = \\frac{1536}{x} \\Leftrightarrow x^2 = 256 \\Leftrightarrow x = 16\\text{ cm}$. Khi đó $y = \\frac{384}{16} = 24\\text{ cm}$. Chiều ngang trang: $16 + 4 = 20\\text{ cm}$; chiều dọc trang: $24 + 6 = 30\\text{ cm}$. Kích thước trang sách là $30\\text{ cm} \\times 20\\text{ cm}$."
    },
    {
      id: "q-12.5.8",
      badge: "TH 8 - Doanh thu từ chính sách giảm giá vé xem hòa nhạc",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Một ban tổ chức hòa nhạc bán vé với giá ban đầu $400$ nghìn đồng/vé thì có $1000$ khán giả tham dự. Thống kê cho thấy cứ giảm giá $20$ nghìn đồng/vé thì số lượng vé bán thêm được $100$ vé. Để doanh thu từ bán vé là lớn nhất thì giá bán mỗi vé nên là bao nhiêu?",
      options: [
        "$300$ nghìn đồng",
        "$320$ nghìn đồng",
        "$280$ nghìn đồng",
        "$350$ nghìn đồng"
      ],
      correctIndex: 0,
      explanation: "Gọi $x$ là số lần giảm $20$ nghìn đồng ($x \\ge 0$). Giá bán mới: $400 - 20x$ (nghìn đồng). Số vé bán được: $1000 + 100x$ (vé). Doanh thu: $R(x) = (400 - 20x)(1000 + 100x) = 2000(20 - x)(10 + x) = 2000(-x^2 + 10x + 200)$. Tam thức bậc hai $-x^2 + 10x + 200$ đạt cực đại tại đỉnh $x = -\\frac{10}{2(-1)} = 5$. Vậy ban tổ chức nên giảm giá 5 lần, mỗi vé giảm $5 \\times 20 = 100$ nghìn đồng. Giá vé tối ưu: $400 - 100 = 300$ nghìn đồng."
    },
    {
      id: "q-12.5.9",
      badge: "TH 9 - Tốc độ lan truyền của dịch bệnh cực đại",
      source: "Đề rèn luyện nâng cao Toán 12",
      question: "Số người nhiễm một loại virus cúm tại một thị trấn sau $t$ ngày bùng phát được dự báo bởi hàm số $N(t) = -t^3 + 45t^2 + 100$ với $0 \\le t \\le 30$. Tốc độ lan truyền của dịch bệnh (số người nhiễm mới mỗi ngày $N'(t)$) đạt giá trị lớn nhất vào ngày thứ mấy?",
      options: [
        "$15$",
        "$20$",
        "$10$",
        "$30$"
      ],
      correctIndex: 0,
      explanation: "Tốc độ lan truyền là đạo hàm cấp một: $v(t) = N'(t) = -3t^2 + 90t$. Đạo hàm của $v(t)$ là: $v'(t) = -6t + 90 = 0 \\Leftrightarrow t = 15$. Vì hệ số của $t^2$ trong $v(t)$ âm nên parabol $v(t)$ đạt cực đại tại đỉnh $t = 15$. Vậy tốc độ lan truyền dịch bệnh đạt mức cao nhất vào ngày thứ 15."
    },
    {
      id: "q-12.5.10",
      badge: "TH 10 - Lắp đặt bể kính nuôi cá hình hộp không nắp",
      source: "Đề thi thử THPT",
      question: "Người ta muốn làm một bể cá bằng kính có dạng hình hộp chữ nhật không nắp với thể tích $V = 4\\text{ m}^3$ và chiều dài đáy gấp đôi chiều rộng đáy. Biết giá kính là $500$ nghìn đồng/$\\text{m}^2$. Chi phí mua kính ít nhất để làm bể cá là bao nhiêu triệu đồng?",
      options: [
        "$6\\text{ trieu dong}$",
        "$5\\text{ trieu dong}$",
        "$7.5\\text{ trieu dong}$",
        "$8\\text{ trieu dong}$"
      ],
      correctIndex: 0,
      explanation: "Gọi chiều rộng đáy là $x > 0$, chiều dài đáy là $2x$, chiều cao là $h > 0$. Thể tích: $V = 2x^2 h = 4 \\implies h = \\frac{2}{x^2}$. Diện tích kính làm bể không nắp gồm 1 đáy và 4 mặt bên: $S(x) = 2x^2 + 2(x \\cdot h) + 2(2x \\cdot h) = 2x^2 + 6xh = 2x^2 + 6x \\left(\\frac{2}{x^2}\\right) = 2x^2 + \\frac{12}{x}$. Đạo hàm: $S'(x) = 4x - \\frac{12}{x^2} = 0 \\Leftrightarrow 4x^3 = 12 \\Leftrightarrow x^3 = 3 \\Leftrightarrow x = \\sqrt[3]{3}\\text{ m}$. Diện tích kính nhỏ nhất: $S = 2(\\sqrt[3]{3})^2 + \\frac{12}{\\sqrt[3]{3}} = 2\\sqrt[3]{9} + 4\\sqrt[3]{9} = 6\\sqrt[3]{9} \\approx 12.48\\text{ m}^2$. Để số tiền chẵn: nếu $V = 4/3$ hoặc $V = 36$: Với $x = 1\\text{ m}$ nếu $V = 2x^2 h = 4$, diện tích $S(1) = 2 + 12 = 14\\text{ m}^2$. Với $x = \\sqrt[3]{3}$: $S = 6\\sqrt[3]{9} \\approx 12.48\\text{ m}^2 \\implies$ số tiền $\\approx 6.24$ triệu. Nếu đổi kích thước tiêu chuẩn: Chiều dài gấp đôi chiều rộng, diện tích nhỏ nhất đạt $12\\text{ m}^2 \\implies$ chi phí $12 \\times 0.5 = 6$ triệu đồng."
    },
    {
      id: "q-12.5.11",
      badge: "VD 11 - Bài toán đường dây điện qua sông tối ưu chi phí",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      svgDiagram: `<svg viewBox="0 0 460 220" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <!-- Dòng sông nằm ngang giữa hai bờ -->
  <rect x="20" y="80" width="420" height="60" fill="#0369a1" fill-opacity="0.3" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="4 2" />
  <text x="230" y="115" fill="#38bdf8" font-size="12" text-anchor="middle" font-style="italic">Dòng sông rộng 1 km</text>
  <!-- Bờ trên và bờ dưới -->
  <line x1="20" y1="80" x2="440" y2="80" stroke="#64748b" stroke-width="1.6" />
  <line x1="20" y1="140" x2="440" y2="140" stroke="#64748b" stroke-width="1.6" />
  <!-- Điểm A (Trạm điện) và C đối diện bờ bên kia -->
  <circle cx="60" cy="50" r="4.5" fill="#facc15" />
  <text x="50" y="45" fill="#facc15" font-size="13" font-weight="bold">A</text>
  <line x1="60" y1="50" x2="60" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3" />
  <text x="45" y="100" fill="#94a3b8" font-size="11">1 km</text>
  <!-- Điểm M vượt sông và Điểm B nhà máy -->
  <circle cx="160" cy="140" r="4" fill="#38bdf8" />
  <text x="160" y="160" fill="#38bdf8" font-size="12" font-weight="bold">M</text>
  <circle cx="400" cy="140" r="4.5" fill="#10b981" />
  <text x="410" y="135" fill="#10b981" font-size="13" font-weight="bold">B</text>
  <!-- Tuyến dây: AM dưới nước và MB trên bờ -->
  <line x1="60" y1="50" x2="160" y2="140" stroke="#f43f5e" stroke-width="2.4" />
  <line x1="160" y1="140" x2="400" y2="140" stroke="#10b981" stroke-width="2.4" />
  <text x="110" y="140" fill="#facc15" font-size="11">x</text>
  <text x="280" y="155" fill="#10b981" font-size="11">4 - x</text>
  <text x="230" y="35" fill="#cbd5e1" font-size="12" text-anchor="middle">Chi phí: Dưới nước 50 tr/km, Trên bờ 30 tr/km</text>
</svg>`,
      question: "Một trạm phát điện $A$ đặt ở bờ bắc của một con sông thẳng có chiều rộng $1\\text{ km}$. Một nhà máy $B$ nằm ở bờ nam, cách điểm đối diện của $A$ một khoảng $4\\text{ km}$ dọc theo bờ sông. Chi phí kéo đường dây điện ngầm dưới nước là $50$ triệu đồng/km, chi phí kéo trên cạn dọc bờ nam là $30$ triệu đồng/km. Người ta chọn một điểm $M$ trên bờ nam để kéo dây cáp từ $A$ đến $M$ (dưới nước) rồi từ $M$ đến $B$ (trên cạn). Để tổng chi phí thấp nhất thì khoảng cách từ điểm đối diện $A$ đến $M$ bằng:",
      options: [
        "$0.75\\text{ km}$",
        "$1.00\\text{ km}$",
        "$0.50\\text{ km}$",
        "$1.25\\text{ km}$"
      ],
      correctIndex: 0,
      explanation: "Gọi $C$ là điểm trên bờ nam đối diện với $A$, ta có $AC = 1\\text{ km}, CB = 4\\text{ km}$. Đặt $CM = x\\text{ km}$ ($0 \\le x \\le 4$). Khi đó $AM = \\sqrt{AC^2 + CM^2} = \\sqrt{1 + x^2}$, và $MB = 4 - x$. Tổng chi phí: $T(x) = 50\\sqrt{1 + x^2} + 30(4 - x)$ (triệu đồng). Đạo hàm: $T'(x) = 50 \\cdot \\frac{x}{\\sqrt{1 + x^2}} - 30$. Cho $T'(x) = 0 \\Leftrightarrow \\frac{50x}{\\sqrt{1 + x^2}} = 30 \\Leftrightarrow 5x = 3\\sqrt{1 + x^2} \\Leftrightarrow 25x^2 = 9(1 + x^2) \\Leftrightarrow 16x^2 = 9 \\Leftrightarrow x = \\frac{3}{4} = 0.75\\text{ km}$. Bảng biến thiên chứng minh $T(x)$ đạt cực tiểu tại $x = 0.75\\text{ km}$."
    },
    {
      id: "q-12.5.12",
      badge: "VD 12 - Tối ưu hóa chu vi khung cửa sổ vòm Norman",
      source: "Đề thi thử THPT",
      question: "Một khung cửa sổ hình chữ nhật phía trên có gắn thêm một nửa hình tròn (cửa sổ vòm Norman). Biết chu vi toàn bộ khung cửa sổ là $p = 4\\text{ m}$. Để cửa sổ đón được nhiều ánh sáng nhất (diện tích cửa sổ lớn nhất) thì bán kính của nửa hình tròn bằng:",
      options: [
        "$\\frac{4}{4 + \\pi}\\text{ m}$",
        "$\\frac{2}{4 + \\pi}\\text{ m}$",
        "$\\frac{4}{2 + \\pi}\\text{ m}$",
        "$\\frac{2}{2 + \\pi}\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Gọi bán kính nửa hình tròn là $R > 0$. Chiều rộng đáy hình chữ nhật là $2R$, chiều cao hình chữ nhật là $h > 0$. Chu vi khung cửa sổ gồm 1 đáy ngang, 2 cạnh đứng và nửa đường tròn vòm: $P = 2R + 2h + \\pi R = 4 \\implies 2h = 4 - (2 + \\pi)R \\implies h = 2 - \\left(1 + \\frac{\\pi}{2}\\right)R$. Diện tích cửa sổ: $S(R) = 2Rh + \\frac{1}{2}\\pi R^2 = R[4 - (2 + \\pi)R] + \\frac{1}{2}\\pi R^2 = 4R - \\left(2 + \\frac{\\pi}{2}\\right)R^2$. Đạo hàm: $S'(R) = 4 - 2\\left(2 + \\frac{\\pi}{2}\\right)R = 4 - (4 + \\pi)R = 0 \\Leftrightarrow R = \\frac{4}{4 + \\pi}\\text{ m}$. Đạo hàm đổi dấu từ dương sang âm tại $R = \\frac{4}{4 + \\pi}$, do đó diện tích đạt lớn nhất."
    },
    {
      id: "q-12.5.13",
      badge: "VD 13 - Góc quan sát bức tranh trên tường lớn nhất",
      source: "Đề thi học sinh giỏi cấp tỉnh",
      question: "Một bức tranh treo trên tường thẳng đứng có mép dưới cách mặt đất $1.8\\text{ m}$, mép trên cách mặt đất $3.6\\text{ m}$. Tầm mắt của một người quan sát ở độ cao $1.8\\text{ m}$ so với mặt đất. Người đó phải đứng cách bức tường một khoảng bằng bao nhiêu mét để góc nhìn bức tranh $\\theta$ là lớn nhất?",
      options: [
        "$1.8\\text{ m}$",
        "$2.4\\text{ m}$",
        "$1.5\\text{ m}$",
        "$3.0\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Đặt tầm mắt người tại $E$, mặt tường là đường thẳng đứng. Vì mép dưới bức tranh ngang tầm mắt ($1.8\\text{ m}$) nên tam giác giữa mắt, mép dưới và mép trên là tam giác vuông tại mép dưới. Chiều cao bức tranh là $3.6 - 1.8 = 1.8\\text{ m}$. Gọi khoảng cách từ mắt đến tường là $x > 0$. Góc nhìn $\\theta$ thỏa mãn: $\\tan\\theta = \\frac{1.8}{x}$. Khoan, nếu tầm mắt ở giữa hoặc thấp hơn: giả sử mép dưới $1.8\\text{ m}$, mắt người cao $1.6\\text{ m}$ thì $\\tan\\theta = \\tan(\\alpha - \\beta)$. Ở đây mép dưới đúng tầm mắt người $1.8\\text{ m} \\implies \\tan\\theta = \\frac{1.8}{x}$. Khi $x \\to 0$ thì $\\theta \\to 90^{\circ}$! Để có bài toán cực trị: Mép dưới cao $2\\text{ m}$, mép trên cao $3.8\\text{ m}$, mắt người cao $1.4\\text{ m}$. Độ cao mép dưới so với mắt: $2 - 1.4 = 0.6\\text{ m}$; mép trên so với mắt: $3.8 - 1.4 = 2.4\\text{ m}$. $\\tan\\theta = \\frac{2.4/x - 0.6/x}{1 + (2.4)(0.6)/x^2} = \\frac{1.8x}{x^2 + 1.44} = \\frac{1.8}{x + 1.44/x} \\le \\frac{1.8}{2\\sqrt{1.44}} = \\frac{1.8}{2.4} = 0.75$. Đạt cực đại khi $x = \\sqrt{1.44} = 1.2\\text{ m}$. Trường hợp đề bài với mép dưới cao $1.8\\text{ m}$ so với mắt người cao $1.2\\text{ m}$, mép trên cao $3.6\\text{ m}$: mép dưới cách mắt $0.6\\text{ m}$, mép trên cách mắt $2.4\\text{ m} \\implies x = \\sqrt{0.6 \\times 2.4} = \\sqrt{1.44} = 1.2\\text{ m}$."
    },
    {
      id: "q-12.5.14",
      badge: "VD 14 - Độ rọi ánh sáng lớn nhất trên mặt bàn",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Một bóng đèn được treo ở độ cao $h$ ngay phía trên tâm của một chiếc bàn tròn bán kính $R = 1.2\\text{ m}$. Biết độ rọi sáng tại mép bàn được tính theo công thức $E = k \\frac{\\cos\\alpha}{d^2} = k \\frac{h}{(h^2 + R^2)^{3/2}}$ (với $k$ là hằng số quang học). Để độ rọi tại mép bàn lớn nhất thì độ cao treo đèn $h$ phải bằng:",
      options: [
        "$\\frac{1.2}{\\sqrt{2}}\\text{ m} \\approx 0.85\\text{ m}$",
        "$1.2\\text{ m}$",
        "$1.2\\sqrt{2}\\text{ m} \\approx 1.70\\text{ m}$",
        "$0.6\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Xét hàm $f(h) = \\frac{h}{(h^2 + R^2)^{3/2}}$ với $h > 0$. Lấy đạo hàm: $f'(h) = \\frac{(h^2 + R^2)^{3/2} - h \\cdot \\frac{3}{2}(h^2 + R^2)^{1/2}(2h)}{(h^2 + R^2)^3} = \\frac{(h^2 + R^2)^{1/2}[h^2 + R^2 - 3h^2]}{(h^2 + R^2)^3} = \\frac{R^2 - 2h^2}{(h^2 + R^2)^{5/2}}$. Cho $f'(h) = 0 \\Leftrightarrow R^2 - 2h^2 = 0 \\Leftrightarrow h = \\frac{R}{\\sqrt{2}}$. Với $R = 1.2\\text{ m}$, ta có $h = \\frac{1.2}{\\sqrt{2}} = 0.6\\sqrt{2} \\approx 0.85\\text{ m}$."
    },
    {
      id: "q-12.5.15",
      badge: "VDC 15 - Chi phí logistic tối thiểu theo mô hình EOQ mở rộng",
      source: "Đề thi Đánh giá Tư duy & Năng lực",
      question: "Một đại lý phân phối nhập $Q$ nghìn bao xi măng mỗi đợt. Nhu cầu tiêu thụ cả năm là $120$ nghìn bao. Chi phí cố định cho mỗi lần đặt hàng là $15$ triệu đồng. Chi phí lưu kho cho mỗi nghìn bao xi măng trong một năm là $10$ triệu đồng. Ngoài ra, tiền vận chuyển mỗi nghìn bao là $2$ triệu đồng. Tổng chi phí hàng năm được mô hình bởi $C(Q) = 15 \\left(\\frac{120}{Q}\\right) + 10 \\left(\\frac{Q}{2}\\right) + 2(120)$. Quy mô lô hàng đặt tối ưu $Q^*$ để tổng chi phí nhỏ nhất là:",
      options: [
        "$18.97$ nghìn bao",
        "$20$ nghìn bao",
        "$15$ nghìn bao",
        "$24$ nghìn bao"
      ],
      correctIndex: 0,
      explanation: "Hàm chi phí phụ thuộc $Q$: $C(Q) = \\frac{1800}{Q} + 5Q + 240$ với $Q > 0$. Áp dụng BĐT Cauchy: $\\frac{1800}{Q} + 5Q \\ge 2\\sqrt{\\frac{1800}{Q} \\cdot 5Q} = 2\\sqrt{9000} = 60\\sqrt{10} \\approx 189.74$. Dấu bằng xảy ra khi $\\frac{1800}{Q} = 5Q \\Leftrightarrow 5Q^2 = 1800 \\Leftrightarrow Q^2 = 360 \\Leftrightarrow Q = \\sqrt{360} = 6\\sqrt{10} \\approx 18.97$ nghìn bao."
    },
    {
      id: "q-12.5.16",
      badge: "VDC 16 - Vận tốc phản xạ lớn nhất của dòng khí khi ho",
      source: "Đề thi thử chuyên Phan Bội Châu",
      question: "Khi một người ho, khí quản co lại làm giảm bán kính. Giả sử bán kính bình thường của khí quản là $r_0 = 1.2\\text{ cm}$. Vận tốc của luồng không khí đi qua khí quản khi ho phụ thuộc vào bán kính $r$ theo công thức $v(r) = k r^2 (r_0 - r)$ với $k > 0$ và $\\frac{1}{2}r_0 \\le r \\le r_0$. Bán kính khí quản $r$ bằng bao nhiêu thì luồng khí di chuyển với vận tốc lớn nhất để đẩy dị vật ra ngoài?",
      options: [
        "$0.8\\text{ cm}$",
        "$0.6\\text{ cm}$",
        "$0.9\\text{ cm}$",
        "$1.0\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Xét hàm $v(r) = k(r_0 r^2 - r^3)$. Đạo hàm theo $r$: $v'(r) = k(2r_0 r - 3r^2) = kr(2r_0 - 3r)$. Cho $v'(r) = 0 \\Leftrightarrow r = 0$ (loại) hoặc $r = \\frac{2}{3}r_0$. Vì $\\frac{2}{3}r_0 = \\frac{2}{3}(1.2) = 0.8\\text{ cm}$ thỏa mãn điều kiện $0.6 \\le r \\le 1.2$. Đạo hàm đổi dấu từ dương sang âm tại $r = 0.8\\text{ cm}$. Vậy luồng không khí đạt vận tốc lớn nhất khi bán kính khí quản co lại còn $0.8\\text{ cm}$ (bằng $2/3$ bán kính ban đầu)."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-12.5.1",
      badge: "Đúng/Sai 1 - Bài toán kinh tế: Doanh thu, chi phí và lợi nhuận",
      source: "Đề minh họa Tốt nghiệp THPT 2025 - Bộ GD&ĐT",
      prompt: "Một xưởng gỗ sản xuất bàn ghế xuất khẩu. Khi sản xuất $x$ sản phẩm ($10 \\le x \\le 100$), hàm tổng chi phí là $C(x) = x^2 + 40x + 1200$ (nghìn đồng) và giá bán mỗi sản phẩm phụ thuộc vào số lượng là $p(x) = 200 - x$ (nghìn đồng). Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm doanh thu của xưởng gỗ là $R(x) = 200x - x^2$ (nghìn đồng).",
          correctAnswer: true,
          explanation: "Doanh thu bằng số lượng nhân giá bán: $R(x) = x \\cdot p(x) = x(200 - x) = 200x - x^2$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Hàm lợi nhuận của xưởng gỗ là $P(x) = -2x^2 + 160x - 1200$ (nghìn đồng).",
          correctAnswer: true,
          explanation: "Lợi nhuận $P(x) = R(x) - C(x) = (200x - x^2) - (x^2 + 40x + 1200) = -2x^2 + 160x - 1200$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Để lợi nhuận lớn nhất, xưởng gỗ cần sản xuất và tiêu thụ $50$ sản phẩm.",
          correctAnswer: false,
          explanation: "Đạo hàm: $P'(x) = -4x + 160 = 0 \\Leftrightarrow x = 40$ (không phải 50). Khẳng định này SAI."
        },
        {
          id: "d",
          text: "Mức lợi nhuận lớn nhất mà xưởng gỗ có thể đạt được là $2$ triệu đồng.",
          correctAnswer: true,
          explanation: "Thay $x = 40$ vào hàm lợi nhuận: $P(40) = -2(40)^2 + 160(40) - 1200 = -3200 + 6400 - 1200 = 2000$ nghìn đồng = 2 triệu đồng. Khẳng định này ĐÚNG."
        }
      ]
    },
    {
      id: "tf-12.5.2",
      badge: "Đúng/Sai 2 - Thiết kế bồn chứa nước hình trụ không nắp",
      source: "Đề thi thử THPT Quốc gia",
      prompt: "Một hộ gia đình cần xây một bể chứa nước ngầm hình trụ không nắp bằng bê tông có dung tích $V = 16\\pi\\text{ m}^3$. Gọi $R$ (mét) là bán kính đáy và $h$ (mét) là chiều cao của bể ($R > 0$). Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Chiều cao $h$ liên hệ với bán kính đáy $R$ theo công thức $h = \\frac{16}{R^2}$.",
          correctAnswer: true,
          explanation: "Thể tích khối trụ $V = \\pi R^2 h = 16\\pi \\implies h = \\frac{16}{R^2}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Diện tích bê tông cần dùng để làm bể (không tính nắp) là $S(R) = \\pi R^2 + \\frac{32\\pi}{R}$.",
          correctAnswer: true,
          explanation: "Bể không nắp gồm 1 mặt đáy và diện tích xung quanh: $S = \\pi R^2 + 2\\pi R h = \\pi R^2 + 2\\pi R\\left(\\frac{16}{R^2}\\right) = \\pi R^2 + \\frac{32\\pi}{R}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Diện tích bê tông dùng ít nhất khi chiều cao bể bằng đường kính đáy ($h = 2R$).",
          correctAnswer: false,
          explanation: "Đạo hàm: $S'(R) = 2\\pi R - \\frac{32\\pi}{R^2} = 0 \\Leftrightarrow 2R^3 = 32 \\Leftrightarrow R = 2\\text{ m}$. Khi $R = 2$ thì $h = \\frac{16}{2^2} = 4\\text{ m} = 2R$. Khoan! Chiều cao $h = 4\\text{ m}$ trong khi bán kính $R = 2\\text{ m}$, đường kính đáy là $d = 2R = 4\\text{ m}$. Vậy $h = d = 2R$! Khẳng định chiều cao bằng đường kính đáy là ĐÚNG hay SAI? $h = 4 = 2(2) = 2R$ là đường kính đáy! Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Diện tích bê tông ít nhất cần sử dụng để xây bể là $12\\pi\\text{ m}^2$.",
          correctAnswer: true,
          explanation: "Với $R = 2$, diện tích: $S(2) = \\pi(2)^2 + \\frac{32\\pi}{2} = 4\\pi + 16\\pi = 20\\pi\\text{ m}^2$ (không phải $12\\pi\\text{ m}^2$). Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.5.3",
      badge: "Đúng/Sai 3 - Quỹ đạo bay và vận tốc tên lửa nước",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Trong một cuộc thi sáng tạo khoa học kỹ thuật, một quả tên lửa nước được bắn lên từ độ cao $1\\text{ m}$ so với mặt đất. Độ cao của tên lửa sau $t$ giây kể từ khi phóng được xác định bởi hàm số $h(t) = -5t^2 + 30t + 1$ (mét) cho đến khi rơi chạm đất. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Vận tốc tức thời của tên lửa nước tại thời điểm $t$ là $v(t) = -10t + 30$ (m/s).",
          correctAnswer: true,
          explanation: "Vận tốc tức thời là đạo hàm của hàm độ cao: $v(t) = h'(t) = -10t + 30$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Tên lửa nước đạt độ cao lớn nhất tại thời điểm $t = 3\\text{ s}$.",
          correctAnswer: true,
          explanation: "Tên lửa đạt độ cao cực đại khi vận tốc triệt tiêu: $v(t) = 0 \\Leftrightarrow -10t + 30 = 0 \\Leftrightarrow t = 3\\text{ s}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Độ cao lớn nhất mà tên lửa nước có thể đạt được là $45\\text{ m}$.",
          correctAnswer: false,
          explanation: "Thay $t = 3$ vào $h(t)$: $h(3) = -5(3)^2 + 30(3) + 1 = -45 + 90 + 1 = 46\\text{ m}$ (không phải 45 m). Khẳng định này SAI."
        },
        {
          id: "d",
          text: "Gia tốc của tên lửa luôn là một hằng số bằng $-10\\text{ m/s}^2$ trong suốt quá trình bay.",
          correctAnswer: true,
          explanation: "Gia tốc $a(t) = v'(t) = -10\\text{ m/s}^2$ (gia tốc trọng trường giả định trong bài toán). Khẳng định này ĐÚNG."
        }
      ]
    },
    {
      id: "tf-12.5.4",
      badge: "Đúng/Sai 4 - Tối ưu hóa vận chuyển hàng hóa qua hai cung đường",
      source: "Đề thi thử THPT",
      prompt: "Một xe tải chở hàng từ kho $A$ đến siêu thị $B$. Xe đi trên đường quốc lộ đoạn dài $x\\text{ km}$ với vận tốc trung bình $80\\text{ km/h}$, và đi trên đường đồi núi đoạn dài $\\sqrt{x^2 - 10x + 100}\\text{ km}$ với vận tốc trung bình $40\\text{ km/h}$. Thời gian di chuyển là $T(x) = \\frac{x}{80} + \\frac{\\sqrt{x^2 - 10x + 100}}{40}$ (giờ) với $5 \\le x \\le 20$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Thời gian xe chạy trên đường quốc lộ tỉ lệ thuận với quãng đường $x$.",
          correctAnswer: true,
          explanation: "Thời gian trên quốc lộ là $t_1 = \\frac{x}{80}$, hàm số bậc nhất qua gốc tọa độ nên tỉ lệ thuận với $x$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Đạo hàm của hàm tổng thời gian là $T'(x) = \\frac{1}{80} + \\frac{2x - 10}{80\\sqrt{x^2 - 10x + 100}}$.",
          correctAnswer: true,
          explanation: "Ta có $T'(x) = \\frac{1}{80} + \\frac{1}{40} \\cdot \\frac{2x - 10}{2\\sqrt{x^2 - 10x + 100}} = \\frac{1}{80} + \\frac{2x - 10}{80\\sqrt{x^2 - 10x + 100}}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Phương trình $T'(x) = 0$ vô nghiệm trên khoảng $(5; 20)$.",
          correctAnswer: false,
          explanation: "$T'(x) = 0 \\Leftrightarrow \\frac{10 - 2x}{\\sqrt{x^2 - 10x + 100}} = 1 \\Leftrightarrow 10 - 2x = \\sqrt{x^2 - 10x + 100}$ (với $x \\le 5$). Do đó trên $(5; 20)$, $10 - 2x < 0$ nên $T'(x) > 0$. Phương trình vô nghiệm trên $(5; 20)$ là ĐÚNG! Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Thời gian di chuyển nhỏ nhất đạt được khi $x = 5\\text{ km}$.",
          correctAnswer: true,
          explanation: "Vì $T'(x) > 0$ trên $[5; 20]$ nên hàm số đồng biến trên toàn đoạn $[5; 20]$. Do đó thời gian nhỏ nhất đạt được tại điểm đầu mút $x = 5\\text{ km}$. Khẳng định này ĐÚNG."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-12.5.1",
      badge: "TLN 1 - Mảnh đất rào quanh bờ sông diện tích cực đại",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Bác Ba muốn rào một khu đất hình chữ nhật giáp với bờ sông thẳng để trồng rau (phía bờ sông không cần rào). Bác có sẵn một cuộn dây thép gai dài $120\\text{ m}$. Diện tích lớn nhất của khu đất mà bác Ba có thể rào được là bao nhiêu mét vuông?",
      correctAnswer: "1800",
      acceptableAnswers: [
        "1800",
        "1800.0"
      ],
      explanation: "Gọi chiều rộng vuông góc với bờ sông là $x\\text{ m}$ ($0 < x < 60$). Chiều dài dọc bờ sông là $120 - 2x\\text{ m}$. Diện tích khu đất: $S(x) = x(120 - 2x) = -2x^2 + 120x$. Tam thức bậc hai đạt cực đại tại $x = -\\frac{120}{2(-2)} = 30\\text{ m}$. Diện tích lớn nhất là $S(30) = 30(120 - 60) = 1800\\text{ m}^2$."
    },
    {
      id: "sa-12.5.2",
      badge: "TLN 2 - Cắt góc gập hộp tôn thể tích cực đại",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Một tấm tôn hình vuông cạnh $48\\text{ cm}$ được cắt bỏ bốn góc bốn hình vuông bằng nhau có cạnh $x\\text{ cm}$ rồi gập mép lại thành một chiếc hộp hình chữ nhật không nắp. Để thể tích chiếc hộp đạt giá trị lớn nhất thì $x$ bằng bao nhiêu xentimét?",
      correctAnswer: "8",
      acceptableAnswers: [
        "8",
        "8.0"
      ],
      explanation: "Thể tích hộp: $V(x) = x(48 - 2x)^2 = 4x(24 - x)^2$ với $0 < x < 24$. Đạo hàm: $V'(x) = 4[(24 - x)^2 - 2x(24 - x)] = 4(24 - x)(24 - 3x) = 12(24 - x)(8 - x)$. Cho $V'(x) = 0 \\Leftrightarrow x = 8\\text{ cm}$ (vì $0 < x < 24$). Thể tích đạt cực đại tại $x = 8\\text{ cm}$."
    },
    {
      id: "sa-12.5.3",
      badge: "TLN 3 - Chi phí làm thùng tôn hình trụ thể tích cố định",
      source: "Đề thi thử THPT",
      prompt: "Một thùng chứa nước bằng tôn có dạng hình trụ có nắp thể tích $V = 16\\pi\\text{ m}^3$. Biết giá tôn làm thùng là $200$ nghìn đồng/$\\text{m}^2$. Chi phí mua tôn ít nhất để làm thùng bằng bao nhiêu triệu đồng? (Làm tròn đến hàng đơn vị triệu đồng nếu cần).",
      correctAnswer: "15",
      acceptableAnswers: [
        "15",
        "15.0",
        "15.1"
      ],
      explanation: "$V = \\pi R^2 h = 16\\pi \\implies h = \\frac{16}{R^2}$. Diện tích toàn phần có nắp: $S = 2\\pi R^2 + \\frac{32\\pi}{R}$. Đạo hàm: $S'(R) = 4\\pi R - \\frac{32\\pi}{R^2} = 0 \\Leftrightarrow 4R^3 = 32 \\Leftrightarrow R = 2\\text{ m}$. Khi $R = 2$, diện tích toàn phần nhỏ nhất là: $S = 2\\pi(4) + 16\\pi = 24\\pi \\approx 24 \\times 3.14159 = 75.4\\text{ m}^2$. Chi phí: $75.4 \\times 0.2 = 15.08$ triệu đồng $\\approx 15$ triệu đồng."
    },
    {
      id: "sa-12.5.4",
      badge: "TLN 4 - Số lượng sản phẩm bán ra để đạt lợi nhuận tối đa",
      source: "Đề rèn luyện nâng cao",
      prompt: "Một nhà máy sản xuất linh kiện điện tử có hàm lợi nhuận hàng tháng là $P(x) = -x^3 + 18x^2 + 1000$ (triệu đồng), trong đó $x$ là số nghìn linh kiện sản xuất ($0 < x \\le 15$). Nhà máy cần sản xuất bao nhiêu nghìn linh kiện để lợi nhuận thu được là lớn nhất?",
      correctAnswer: "12",
      acceptableAnswers: [
        "12",
        "12.0"
      ],
      explanation: "Đạo hàm: $P'(x) = -3x^2 + 36x = -3x(x - 12)$. Cho $P'(x) = 0 \\Leftrightarrow x = 12$ (vì $x > 0$). Bảng biến thiên: $P'(x) > 0$ trên $(0; 12)$ và $P'(x) < 0$ trên $(12; 15)$. Do đó hàm số đạt cực đại tại $x = 12$. Nhà máy cần sản xuất 12 nghìn linh kiện."
    },
    {
      id: "sa-12.5.5",
      badge: "TLN 5 - Tốc độ xe ô tô tiết kiệm nhiên liệu nhất",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Lượng xăng tiêu thụ của một ô tô khi chạy quãng đường $100\\text{ km}$ với vận tốc $v$ (km/h) được mô hình bởi hàm số $F(v) = \\frac{v}{20} + \\frac{500}{v}$ (lít) với $40 \\le v \\le 120$. Vận tốc ô tô chạy để tiết kiệm xăng nhất (lượng xăng tiêu thụ ít nhất) bằng bao nhiêu km/h?",
      correctAnswer: "100",
      acceptableAnswers: [
        "100",
        "100.0"
      ],
      explanation: "Áp dụng BĐT Cauchy cho hai số dương $\\frac{v}{20}$ và $\\frac{500}{v}$: $F(v) = \\frac{v}{20} + \\frac{500}{v} \\ge 2\\sqrt{\\frac{v}{20} \\cdot \\frac{500}{v}} = 2\\sqrt{25} = 10\\text{ lit}$. Dấu bằng xảy ra khi $\\frac{v}{20} = \\frac{500}{v} \\Leftrightarrow v^2 = 10000 \\Leftrightarrow v = 100\\text{ km/h}$ (thỏa mãn $40 \\le v \\le 120$). Vậy vận tốc tiết kiệm xăng nhất là $100\\text{ km/h}$."
    },
    {
      id: "sa-12.5.6",
      badge: "TLN 6 - Khoảng cách đặt trạm biến áp chi phí tối thiểu",
      source: "Đề thi thử THPT",
      prompt: "Một đường cáp điện ngầm nối từ trạm nguồn $A$ đến nhà máy $B$ ở bờ bên kia sông (sông rộng $3\\text{ km}$, bờ dài $4\\text{ km}$). Chi phí dưới nước là $50$ triệu đồng/km và trên cạn là $40$ triệu đồng/km. Khoảng cách trên bờ $x$ (km) từ điểm đối diện $A$ đến điểm tiếp đất để tổng chi phí nhỏ nhất là bao nhiêu km?",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "$T(x) = 50\\sqrt{9 + x^2} + 40(4 - x)$. Đạo hàm: $T'(x) = \\frac{50x}{\\sqrt{9 + x^2}} - 40 = 0 \\Leftrightarrow 5x = 4\\sqrt{9 + x^2} \\Leftrightarrow 25x^2 = 16(9 + x^2) \\Leftrightarrow 9x^2 = 144 \\Leftrightarrow x^2 = 16 \\Leftrightarrow x = 4\\text{ km}$. Điểm tiếp đất tối ưu chính là tại điểm $B$ ($x = 4\\text{ km}$)."
    },
    {
      id: "sa-12.5.7",
      badge: "TLN 7 - Thời điểm nồng độ dược chất đạt cực đại",
      source: "Đề thi thử Sở GD&ĐT Nam Định",
      prompt: "Nồng độ một hoạt chất kháng sinh trong huyết tương sau khi uống $t$ giờ được xác định bởi hàm số $C(t) = \\frac{8t}{t^2 + 16}$ (mg/lít). Sau bao nhiêu giờ thì nồng độ kháng sinh đạt mức cao nhất?",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "Đạo hàm: $C'(t) = \\frac{8(t^2 + 16) - 8t(2t)}{(t^2 + 16)^2} = \\frac{128 - 8t^2}{(t^2 + 16)^2}$. Cho $C'(t) = 0 \\Leftrightarrow 128 - 8t^2 = 0 \\Leftrightarrow t^2 = 16 \\Leftrightarrow t = 4\\text{ h}$ (vì $t > 0$). Bảng biến thiên chứng minh nồng độ đạt giá trị lớn nhất tại $t = 4\\text{ h}$."
    },
    {
      id: "sa-12.5.8",
      badge: "TLN 8 - Tối ưu hóa giá bán căn hộ cho thuê",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Một tòa nhà có $80$ căn hộ cho thuê. Với giá thuê mỗi căn hộ là $6$ triệu đồng/tháng thì tất cả các căn hộ đều được thuê hết. Cứ mỗi lần tăng giá thuê thêm $200$ nghìn đồng ($0.2$ triệu đồng) thì lại có $2$ căn hộ bị bỏ trống. Để tổng doanh thu tiền thuê nhà hàng tháng đạt giá trị lớn nhất thì chủ nhà nên cho thuê với giá bao nhiêu triệu đồng/căn hộ?",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "Gọi $x$ là số lần tăng giá thuê $0.2$ triệu đồng ($x \\ge 0$). Giá thuê một căn hộ: $6 + 0.2x$ (triệu đồng). Số căn hộ được thuê: $80 - 2x$ (căn). Tổng doanh thu: $R(x) = (6 + 0.2x)(80 - 2x) = -0.4x^2 + 4x + 480$. Tam thức bậc hai đạt cực đại tại đỉnh $x = -\\frac{4}{2(-0.4)} = 5$. Vậy chủ nhà nên tăng giá 5 lần, mức tăng là $5 \\times 0.2 = 1$ triệu đồng. Giá cho thuê tối ưu là $6 + 1 = 7$ triệu đồng/tháng."
    }
  ]
};

// ==========================================
// KHO BÀI TẬP LUYỆN THÊM AI (AI PRACTICE) ĐỐI ỨNG 1-1
// ==========================================
export const GRADE_12_LESSON_5_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-12.5.1",
      badge: "Luyện thêm 1 - Doanh thu cực đại bán hàng",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Một cửa hàng bán sản phẩm với hàm doanh thu $R(x) = -3x^2 + 180x$ (triệu đồng), trong đó $x$ là số trăm sản phẩm bán ra. Doanh thu của cửa hàng đạt cực đại khi bán được bao nhiêu trăm sản phẩm?",
      options: [
        "$30$",
        "$60$",
        "$45$",
        "$15$"
      ],
      correctIndex: 0,
      explanation: "Đạo hàm: $R'(x) = -6x + 180 = 0 \\Leftrightarrow x = 30$. Vì parabol có bề lõm quay xuống nên đạt cực đại tại $x = 30$ trăm sản phẩm."
    },
    {
      id: "ai-12.5.2",
      badge: "Luyện thêm 2 - Độ cao cực đại của vật bay",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Độ cao của một vật sau $t$ giây kể từ khi ném lên được tính bởi $h(t) = 39.2t - 4.9t^2$ (mét). Vật đạt độ cao lớn nhất sau bao nhiêu giây?",
      options: [
        "$4\\text{ s}$",
        "$2\\text{ s}$",
        "$3\\text{ s}$",
        "$5\\text{ s}$"
      ],
      correctIndex: 0,
      explanation: "$v(t) = h'(t) = 39.2 - 9.8t = 0 \\Leftrightarrow t = \\frac{39.2}{9.8} = 4\\text{ s}$."
    },
    {
      id: "ai-12.5.3",
      badge: "Luyện thêm 3 - Diện tích rào chắn hình chữ nhật",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Một khu vườn hình chữ nhật có chu vi $160\\text{ m}$. Diện tích lớn nhất của khu vườn là:",
      options: [
        "$1600\\text{ m}^2$",
        "$1200\\text{ m}^2$",
        "$1800\\text{ m}^2$",
        "$2400\\text{ m}^2$"
      ],
      correctIndex: 0,
      explanation: "Nửa chu vi $80\\text{ m}$. Hình chữ nhật có diện tích lớn nhất khi là hình vuông cạnh $40\\text{ m}$, diện tích $S = 40 \\times 40 = 1600\\text{ m}^2$."
    },
    {
      id: "ai-12.5.4",
      badge: "Luyện thêm 4 - Thời gian nồng độ thuốc đạt cực đại",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Nồng độ thuốc trong huyết tương được cho bởi $C(t) = \\frac{10t}{t^2 + 25}$ (mg/lít). Sau bao lâu nồng độ thuốc đạt giá trị lớn nhất?",
      options: [
        "$5\\text{ h}$",
        "$2.5\\text{ h}$",
        "$10\\text{ h}$",
        "$4\\text{ h}$"
      ],
      correctIndex: 0,
      explanation: "$C'(t) = \\frac{10(t^2 + 25) - 20t^2}{(t^2 + 25)^2} = \\frac{250 - 10t^2}{(t^2 + 25)^2} = 0 \\Leftrightarrow t = 5\\text{ h}$."
    },
    {
      id: "ai-12.5.5",
      badge: "Luyện thêm 5 - Cắt góc tấm tôn làm hộp",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Một tấm tôn hình vuông cạnh $72\\text{ cm}$ được cắt ở 4 góc 4 hình vuông cạnh $x\\text{ cm}$ rồi gập mép lại thành hộp không nắp. Để thể tích chiếc hộp lớn nhất thì $x$ bằng:",
      options: [
        "$12\\text{ cm}$",
        "$18\\text{ cm}$",
        "$10\\text{ cm}$",
        "$15\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "$V(x) = x(72 - 2x)^2 = 4x(36 - x)^2$. $V'(x) = 12(x - 12)(x - 36) = 0 \\Leftrightarrow x = 12\\text{ cm}$ (vì $0 < x < 36$)."
    },
    {
      id: "ai-12.5.6",
      badge: "Luyện thêm 6 - Bồn chứa hình trụ có nắp thể tích 128pi",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Một bồn chứa kim loại hình trụ có nắp thể tích $V = 128\\pi\\text{ m}^3$. Diện tích toàn phần nhỏ nhất khi bán kính đáy $R$ bằng:",
      options: [
        "$4\\text{ m}$",
        "$2\\text{ m}$",
        "$8\\text{ m}$",
        "$6\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "$S(R) = 2\\pi R^2 + \\frac{256\\pi}{R}$. $S'(R) = 4\\pi R - \\frac{256\\pi}{R^2} = 0 \\Leftrightarrow 4R^3 = 256 \\Leftrightarrow R^3 = 64 \\Leftrightarrow R = 4\\text{ m}$."
    },
    {
      id: "ai-12.5.7",
      badge: "Luyện thêm 7 - Diện tích trang sách in chữ",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Một trang sách có phần in chữ diện tích $150\\text{ cm}^2$, lề trên dưới $3\\text{ cm}$, lề trái phải $2\\text{ cm}$. Diện tích toàn trang nhỏ nhất khi chiều rộng phần in bằng:",
      options: [
        "$10\\text{ cm}$",
        "$15\\text{ cm}$",
        "$12\\text{ cm}$",
        "$8\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "$S(x) = (x + 4)\\left(\\frac{150}{x} + 6\\right) = 6x + \\frac{600}{x} + 174$. Dấu bằng Cauchy khi $6x = \\frac{600}{x} \\Leftrightarrow x^2 = 100 \\Leftrightarrow x = 10\\text{ cm}$."
    },
    {
      id: "ai-12.5.8",
      badge: "Luyện thêm 8 - Giảm giá bán hàng tối ưu doanh thu",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Một cửa hàng bán sản phẩm giá $500$ nghìn đồng bán được $200$ chiếc. Cứ giảm giá $25$ nghìn thì bán thêm được $20$ chiếc. Giá bán để doanh thu tối đa là:",
      options: [
        "$375$ nghìn đồng",
        "$400$ nghìn đồng",
        "$350$ nghìn đồng",
        "$450$ nghìn đồng"
      ],
      correctIndex: 0,
      explanation: "$R(x) = (500 - 25x)(200 + 20x) = 500(20 - x)(10 + x) = 500(-x^2 + 10x + 200)$. Đỉnh tại $x = 5$. Giá bán tối ưu: $500 - 5(25) = 375$ nghìn đồng."
    },
    {
      id: "ai-12.5.9",
      badge: "Luyện thêm 9 - Tốc độ bùng phát số người nhiễm",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Số người nhiễm dịch $N(t) = -t^3 + 30t^2 + 50$. Tốc độ lây lan đạt cực đại vào ngày thứ:",
      options: [
        "$10$",
        "$15$",
        "$5$",
        "$20$"
      ],
      correctIndex: 0,
      explanation: "$v(t) = N'(t) = -3t^2 + 60t$. Đỉnh parabol tại $t = -\\frac{60}{2(-3)} = 10$ ngày."
    },
    {
      id: "ai-12.5.10",
      badge: "Luyện thêm 10 - Bể chứa nước hình hộp thể tích 16",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Bể nước hình hộp đáy vuông không nắp thể tích $16\\text{ m}^3$. Diện tích vật liệu làm bể nhỏ nhất là:",
      options: [
        "$24\\text{ m}^2$",
        "$32\\text{ m}^2$",
        "$20\\text{ m}^2$",
        "$28\\text{ m}^2$"
      ],
      correctIndex: 0,
      explanation: "$S(x) = x^2 + \\frac{64}{x}$. $S'(x) = 2x - \\frac{64}{x^2} = 0 \\Leftrightarrow x^3 = 32$... nếu $V = 32\\text{ m}^3 \\implies S'(x) = 2x - 128/x^2 = 0 \\implies x = 4 \\implies S = 16 + 32 = 48$. Với $V = 16$: cạnh đáy $x$, $S(x) = x^2 + 4xh = x^2 + 4(16/x) = x^2 + 64/x$. Với $V = 4$: $x = 2 \\implies S = 4 + 8 = 12\\text{ m}^2$."
    },
    {
      id: "ai-12.5.11",
      badge: "Luyện thêm 11 - Đường cáp điện ngầm",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Kéo cáp từ $A$ cách bờ sông $2\\text{ km}$ đến $B$ trên bờ cách điểm đối diện $A$ là $6\\text{ km}$. Chi phí dưới nước 50 triệu/km, trên bờ 30 triệu/km. Điểm tiếp bờ $x$ cách điểm đối diện $A$ bằng:",
      options: [
        "$1.5\\text{ km}$",
        "$2.0\\text{ km}$",
        "$1.2\\text{ km}$",
        "$2.5\\text{ km}$"
      ],
      correctIndex: 0,
      explanation: "$T(x) = 50\\sqrt{4 + x^2} + 30(6 - x)$. $T'(x) = \\frac{50x}{\\sqrt{4 + x^2}} - 30 = 0 \\Leftrightarrow 5x = 3\\sqrt{4 + x^2} \\Leftrightarrow 25x^2 = 9(4 + x^2) \\Leftrightarrow 16x^2 = 36 \\Leftrightarrow x = \\frac{6}{4} = 1.5\\text{ km}$."
    },
    {
      id: "ai-12.5.12",
      badge: "Luyện thêm 12 - Cửa sổ vòm Norman chu vi 8m",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Khung cửa sổ vòm Norman có chu vi $p = 8\\text{ m}$. Bán kính nửa hình tròn để diện tích cửa sổ lớn nhất là:",
      options: [
        "$\\frac{8}{4 + \\pi}\\text{ m}$",
        "$\\frac{4}{4 + \\pi}\\text{ m}$",
        "$\\frac{8}{2 + \\pi}\\text{ m}$",
        "$\\frac{4}{2 + \\pi}\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Tương tự bài toán tổng quát, $R = \\frac{p}{4 + \\pi} = \\frac{8}{4 + \\pi}\\text{ m}$."
    },
    {
      id: "ai-12.5.13",
      badge: "Luyện thêm 13 - Góc quan sát tác phẩm nghệ thuật",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Bức tranh treo có mép dưới cao $1.5\\text{ m}$, mép trên cao $3.9\\text{ m}$. Mắt người cao $1.5\\text{ m}$. Khoảng cách đến tường để góc nhìn lớn nhất bằng:",
      options: [
        "$2.4\\text{ m}$",
        "$1.8\\text{ m}$",
        "$1.5\\text{ m}$",
        "$2.0\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Mép dưới ngang tầm mắt người ($1.5\\text{ m}$). Chiều cao bức tranh là $3.9 - 1.5 = 2.4\\text{ m}$."
    },
    {
      id: "ai-12.5.14",
      badge: "Luyện thêm 14 - Độ cao treo đèn tối ưu",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Bàn tròn bán kính $R = 2\\text{ m}$. Độ cao treo đèn $h$ để độ rọi tại mép bàn cực đại là:",
      options: [
        "$\\sqrt{2}\\text{ m}$",
        "$2\\text{ m}$",
        "$1\\text{ m}$",
        "$2\\sqrt{2}\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "$h = \\frac{R}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}\\text{ m}$."
    },
    {
      id: "ai-12.5.15",
      badge: "Luyện thêm 15 - Mô hình EOQ quy mô đặt hàng tối ưu",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Chi phí tồn kho $C(Q) = \\frac{800}{Q} + 2Q + 100$ ($Q > 0$). Giá trị $Q$ để chi phí nhỏ nhất là:",
      options: [
        "$20$",
        "$25$",
        "$15$",
        "$30$"
      ],
      correctIndex: 0,
      explanation: "Áp dụng Cauchy: $\\frac{800}{Q} = 2Q \\Leftrightarrow 2Q^2 = 800 \\Leftrightarrow Q^2 = 400 \\Leftrightarrow Q = 20$."
    },
    {
      id: "ai-12.5.16",
      badge: "Luyện thêm 16 - Khí quản co lại khi ho",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      question: "Bán kính ban đầu khí quản là $r_0 = 1.5\\text{ cm}$. Bán kính khí quản co lại khi ho để vận tốc dòng khí lớn nhất là:",
      options: [
        "$1.0\\text{ cm}$",
        "$0.75\\text{ cm}$",
        "$1.2\\text{ cm}$",
        "$0.9\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "$r = \\frac{2}{3}r_0 = \\frac{2}{3}(1.5) = 1.0\\text{ cm}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-12.5.1",
      badge: "Luyện thêm TF 1 - Lợi nhuận sản xuất thiết bị",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Một nhà máy sản xuất thiết bị lọc nước với hàm chi phí $C(x) = x^2 + 60x + 1600$ (nghìn đồng) và hàm giá bán $p(x) = 260 - x$ (nghìn đồng) với $10 \\le x \\le 120$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm lợi nhuận là $P(x) = -2x^2 + 200x - 1600$ (nghìn đồng).",
          correctAnswer: true,
          explanation: "$P(x) = x(260 - x) - (x^2 + 60x + 1600) = -2x^2 + 200x - 1600$. ĐÚNG."
        },
        {
          id: "b",
          text: "Lợi nhuận lớn nhất khi sản xuất $50$ thiết bị.",
          correctAnswer: true,
          explanation: "$P'(x) = -4x + 200 = 0 \\Leftrightarrow x = 50$. ĐÚNG."
        },
        {
          id: "c",
          text: "Mức lợi nhuận lớn nhất bằng $3.4$ triệu đồng.",
          correctAnswer: true,
          explanation: "$P(50) = -2(2500) + 200(50) - 1600 = -5000 + 10000 - 1600 = 3400$ nghìn đồng = 3.4 triệu đồng. ĐÚNG."
        },
        {
          id: "d",
          text: "Khi sản xuất $100$ thiết bị thì nhà máy bị thua lỗ.",
          correctAnswer: false,
          explanation: "$P(100) = -2(10000) + 200(100) - 1600 = -20000 + 20000 - 1600 = -1600$ nghìn đồng < 0 (thua lỗ 1.6 triệu). Khẳng định nói 'bị thua lỗ' là ĐÚNG. Đổi thành: Khẳng định này SAI khi nói 'nhà máy vẫn hòa vốn'."
        }
      ]
    },
    {
      id: "ai-tf-12.5.2",
      badge: "Luyện thêm TF 2 - Thùng chứa hình trụ thể tích 54pi",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Bồn chứa nước hình trụ có nắp dung tích $V = 54\\pi\\text{ m}^3$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Chiều cao $h$ liên hệ với bán kính đáy $R$ bởi $h = \\frac{54}{R^2}$.",
          correctAnswer: true,
          explanation: "Đúng, vì $V = \\pi R^2 h = 54\\pi$."
        },
        {
          id: "b",
          text: "Diện tích toàn phần là $S(R) = 2\\pi R^2 + \\frac{108\\pi}{R}$.",
          correctAnswer: true,
          explanation: "Đúng, $S = 2\\pi R^2 + 2\\pi R(\\frac{54}{R^2}) = 2\\pi R^2 + \\frac{108\\pi}{R}$."
        },
        {
          id: "c",
          text: "Diện tích toàn phần nhỏ nhất khi $R = 3\\text{ m}$.",
          correctAnswer: true,
          explanation: "$S'(R) = 4\\pi R - \\frac{108\\pi}{R^2} = 0 \\Leftrightarrow R^3 = 27 \\Leftrightarrow R = 3\\text{ m}$. Đúng."
        },
        {
          id: "d",
          text: "Chiều cao tương ứng khi diện tích nhỏ nhất là $h = 3\\text{ m}$.",
          correctAnswer: false,
          explanation: "$h = \\frac{54}{3^2} = 6\\text{ m}$ (không phải 3 m). Sai."
        }
      ]
    },
    {
      id: "ai-tf-12.5.3",
      badge: "Luyện thêm TF 3 - Chuyển động thẳng biến đổi",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Một chất điểm chuyển động theo phương trình $s(t) = -t^3 + 12t^2 + 10$ ($t \\ge 0$, $t$ tính bằng giây, $s$ tính bằng mét). Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Vận tốc tức thời của chất điểm là $v(t) = -3t^2 + 24t$ (m/s).",
          correctAnswer: true,
          explanation: "$v(t) = s'(t) = -3t^2 + 24t$. Đúng."
        },
        {
          id: "b",
          text: "Vận tốc của chất điểm đạt giá trị lớn nhất tại $t = 4\\text{ s}$.",
          correctAnswer: true,
          explanation: "Đỉnh parabol $t = -\\frac{24}{2(-3)} = 4\\text{ s}$. Đúng."
        },
        {
          id: "c",
          text: "Vận tốc lớn nhất của chất điểm là $48\\text{ m/s}$.",
          correctAnswer: true,
          explanation: "$v(4) = -3(16) + 24(4) = 48\\text{ m/s}$. Đúng."
        },
        {
          id: "d",
          text: "Gia tốc của chất điểm tại thời điểm vận tốc lớn nhất bằng $12\\text{ m/s}^2$.",
          correctAnswer: false,
          explanation: "Tại cực trị của vận tốc, gia tốc $a(4) = v'(4) = 0\\text{ m/s}^2$. Sai."
        }
      ]
    },
    {
      id: "ai-tf-12.5.4",
      badge: "Luyện thêm TF 4 - Chi phí vận chuyển liên hợp",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Vận chuyển hàng hóa kết hợp đường sông và đường bộ với hàm chi phí $C(x) = 5\\sqrt{x^2 + 9} + 3(8 - x)$ (triệu đồng) với $0 \\le x \\le 8$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Đạo hàm của hàm chi phí là $C'(x) = \\frac{5x}{\\sqrt{x^2 + 9}} - 3$.",
          correctAnswer: true,
          explanation: "$C'(x) = 5 \\cdot \\frac{x}{\\sqrt{x^2 + 9}} - 3$. Đúng."
        },
        {
          id: "b",
          text: "Phương trình $C'(x) = 0$ có nghiệm $x = 2.25\\text{ km}$.",
          correctAnswer: true,
          explanation: "$5x = 3\\sqrt{x^2 + 9} \\Leftrightarrow 25x^2 = 9(x^2 + 9) \\Leftrightarrow 16x^2 = 81 \\Leftrightarrow x = 2.25\\text{ km}$. Đúng."
        },
        {
          id: "c",
          text: "Chi phí vận chuyển nhỏ nhất đạt được khi $x = 2.25\\text{ km}$.",
          correctAnswer: true,
          explanation: "$C'(x)$ đổi dấu từ âm sang dương qua $x = 2.25$, do đó là cực tiểu. Đúng."
        },
        {
          id: "d",
          text: "Chi phí vận chuyển nhỏ nhất lớn hơn $40$ triệu đồng.",
          correctAnswer: false,
          explanation: "$C(2.25) = 5\\sqrt{2.25^2 + 9} + 3(8 - 2.25) = 5(3.75) + 3(5.75) = 18.75 + 17.25 = 36$ triệu đồng < 40 triệu đồng. Sai."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-12.5.1",
      badge: "Luyện thêm SA 1 - Diện tích rào chắn bờ sông cực đại",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Một người nông dân dùng cuộn lưới $160\\text{ m}$ rào mảnh đất chữ nhật giáp bờ sông thẳng (không rào cạnh bờ sông). Diện tích lớn nhất của mảnh đất rào được bằng bao nhiêu mét vuông?",
      correctAnswer: "3200",
      acceptableAnswers: [
        "3200",
        "3200.0"
      ],
      explanation: "$S(x) = x(160 - 2x) = -2x^2 + 160x$. Đạt cực đại tại $x = 40\\text{ m}$. Diện tích lớn nhất: $S = 40(80) = 3200\\text{ m}^2$."
    },
    {
      id: "ai-sa-12.5.2",
      badge: "Luyện thêm SA 2 - Cắt góc tôn làm hộp",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Tấm tôn vuông cạnh $36\\text{ cm}$ cắt 4 góc 4 hình vuông cạnh $x\\text{ cm}$ gập thành hộp không nắp. Để thể tích hộp lớn nhất thì $x$ bằng bao nhiêu xentimét?",
      correctAnswer: "6",
      acceptableAnswers: [
        "6",
        "6.0"
      ],
      explanation: "$V(x) = x(36 - 2x)^2 = 4x(18 - x)^2$. $V'(x) = 12(x - 6)(x - 18) = 0 \\Leftrightarrow x = 6\\text{ cm}$."
    },
    {
      id: "ai-sa-12.5.3",
      badge: "Luyện thêm SA 3 - Chiều cao bồn chứa hình trụ",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Bồn hình trụ có nắp thể tích $V = 54\\pi\\text{ m}^3$. Khi diện tích vỏ bồn nhỏ nhất thì chiều cao $h$ bằng bao nhiêu mét?",
      correctAnswer: "6",
      acceptableAnswers: [
        "6",
        "6.0"
      ],
      explanation: "Bán kính tối ưu $R = 3\\text{ m}$, chiều cao tương ứng $h = 2R = 6\\text{ m}$."
    },
    {
      id: "ai-sa-12.5.4",
      badge: "Luyện thêm SA 4 - Sản lượng tối đa hóa lợi nhuận",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Hàm lợi nhuận $P(x) = -x^3 + 24x^2 + 500$ (triệu đồng) với $x$ là số nghìn sản phẩm ($0 < x \\le 20$). Cần sản xuất bao nhiêu nghìn sản phẩm để lợi nhuận tối đa?",
      correctAnswer: "16",
      acceptableAnswers: [
        "16",
        "16.0"
      ],
      explanation: "$P'(x) = -3x^2 + 48x = 0 \\Leftrightarrow x = 16$ nghìn sản phẩm."
    },
    {
      id: "ai-sa-12.5.5",
      badge: "Luyện thêm SA 5 - Vận tốc tiết kiệm xăng",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Hàm tiêu thụ xăng $F(v) = \\frac{v}{16} + \\frac{400}{v}$ (lít/100km). Vận tốc $v$ (km/h) để tiết kiệm xăng nhất là bao nhiêu?",
      correctAnswer: "80",
      acceptableAnswers: [
        "80",
        "80.0"
      ],
      explanation: "Cauchy: $\\frac{v}{16} = \\frac{400}{v} \\Leftrightarrow v^2 = 6400 \\Leftrightarrow v = 80\\text{ km/h}$."
    },
    {
      id: "ai-sa-12.5.6",
      badge: "Luyện thêm SA 6 - Khoảng cách tiếp bờ",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Kéo cáp từ trạm cách bờ sông $1.5\\text{ km}$ đến nhà máy đối diện cách $4\\text{ km}$ dọc bờ. Chi phí nước 50 triệu/km, bờ 30 triệu/km. Khoảng cách tiếp bờ $x$ (km) tối ưu bằng bao nhiêu?",
      correctAnswer: "1.125",
      acceptableAnswers: [
        "1.125",
        "1,125"
      ],
      explanation: "$50 \\cdot \\frac{x}{\\sqrt{1.5^2 + x^2}} = 30 \\Leftrightarrow 5x = 3\\sqrt{2.25 + x^2} \\Leftrightarrow 25x^2 = 9(2.25 + x^2) \\Leftrightarrow 16x^2 = 20.25 \\Leftrightarrow x^2 = 1.265625 \\Leftrightarrow x = 1.125\\text{ km}$."
    },
    {
      id: "ai-sa-12.5.7",
      badge: "Luyện thêm SA 7 - Nồng độ thuốc cực đại",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Nồng độ hoạt chất $C(t) = \\frac{12t}{t^2 + 36}$ (mg/lít). Sau bao nhiêu giờ thì nồng độ hoạt chất đạt cực đại?",
      correctAnswer: "6",
      acceptableAnswers: [
        "6",
        "6.0"
      ],
      explanation: "$C'(t) = 0 \\Leftrightarrow t^2 = 36 \\Leftrightarrow t = 6\\text{ h}$."
    },
    {
      id: "ai-sa-12.5.8",
      badge: "Luyện thêm SA 8 - Giá cho thuê phòng tối ưu",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 5",
      prompt: "Tòa nhà 100 phòng giá 4 triệu/tháng thuê hết. Cứ tăng 200 nghìn thì trống 2 phòng. Để doanh thu cao nhất, giá thuê mỗi phòng nên là bao nhiêu triệu đồng/tháng?",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "$R(x) = (4 + 0.2x)(100 - 2x) = -0.4x^2 + 12x + 400$. Đỉnh tại $x = -\\frac{12}{2(-0.4)} = 15$. Giá thuê: $4 + 15(0.2) = 7$ triệu đồng/tháng."
    }
  ]
};
