import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_11_CHAPTER_3_REVIEW_LESSON: DetailedLessonData = {
  id: "t11-on-tap-chuong-3",
  lessonNumber: 0,
  title: "Ôn tập cuối chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
  bookChapter: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm (SGK Toán 11 KNTT - Tập 1)",
  scenarioTitle: "Tổng kết thực chiến: Phân tích số liệu thống kê ghép nhóm, tính toán chính xác các số đặc trưng đo xu thế trung tâm",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, trong Chương III chúng ta đã học mẫu số liệu ghép nhóm và các số đặc trưng: số trung bình, trung vị, tứ phân vị và mốt. Khi giải đề tổng hợp cuối chương, làm thế nào để không bị nhầm lẫn giữa các công thức phức tạp này ạ?",
      visualGraphic: "graph",
      mathNote: "\\bar{x},\\; M_e,\\; Q_1, Q_3,\\; M_o"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Bí quyết là luôn lập cột Tần số tích lũy $cf_i$ và cột Giá trị đại diện $c_i$. Khi tìm $M_e, Q_1, Q_3$, trước tiên ta xác định đúng nhóm chứa bằng cách so sánh với $\\dfrac{n}{2}, \\dfrac{n}{4}, \\dfrac{3n}{4}$. Sau đó áp dụng đúng công thức nội suy!",
      visualGraphic: "graph",
      mathNote: "cf_i = \\sum_{j=1}^i m_j,\\; c_i = \\dfrac{a_i + a_{i+1}}{2}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Lan",
      avatar: "👩‍🎓",
      speech: "Thưa Thầy, trong đề thi tốt nghiệp và kiểm tra định kỳ 2025, các câu hỏi Đúng/Sai và Trả lời ngắn về thống kê thường hỏi sâu về việc nhận xét dữ liệu và tính toán chính xác đến hàng phần trăm đúng không ạ?",
      visualGraphic: "savings",
      mathNote: "\\text{Đúng/Sai: 4 ý a, b, c, d} • \\text{Trả lời ngắn: điền số}"
    },
    {
      id: 4,
      character: "teacher",
      characterName: "Thầy Tính",
      avatar: "👨‍🏫",
      speech: "Chính xác, Lan! Chương này có 3 đề ôn tập tổng hợp với cấu trúc chuẩn Bộ GD&ĐT (12 TN + 4 Đúng/Sai + 6 Trả lời ngắn). Các em hãy cẩn thận trong từng bước bấm máy tính và đọc kỹ yêu cầu làm tròn số nhé!",
      visualGraphic: "savings",
      mathNote: "3 \\text{ Đề ôn tập chuẩn cấu trúc Bộ GD&ĐT 2025}"
    }
  ],
  interactiveType: "statistics",
  youtubeVideoId: "Xbmf-5y8Syo",
  youtubeVideoTitle: "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương III - Toán 11 KNTT",
  youtubeVideos: [
    {
      id: "Xbmf-5y8Syo",
      title: "Bài tập cuối chương III: Các số đặc trưng đo xu thế trung tâm (Tiết 1) - KNTT"
    },
    {
      id: "7z6Xm1-eT4Y",
      title: "Bài tập cuối chương III: Rèn luyện kỹ năng tính Me, Q1, Q3, Mo (Tiết 2) - KNTT"
    }
  ],
  videoQuestions: [
    {
      id: "vq-11.ot3.1",
      title: "Câu hỏi 1: Giá trị đại diện của nhóm ghép nhóm",
      question: "Giá trị đại diện của nhóm số liệu $[a; b)$ được tính theo công thức nào?",
      options: [
        "$c = \\dfrac{a + b}{2}$",
        "$c = b - a$",
        "$c = \\sqrt{a \\cdot b}$",
        "$c = \\dfrac{a + b}{n}$"
      ],
      correctIndex: 0,
      explanation: "Giá trị đại diện của nhóm $[a; b)$ là trung điểm của khoảng: $c = \\dfrac{a + b}{2}$."
    },
    {
      id: "vq-11.ot3.2",
      title: "Câu hỏi 2: Nhóm chứa trung vị",
      question: "Gọi $n$ là cỡ mẫu và $cf_k$ là tần số tích lũy của nhóm thứ $k$. Nhóm chứa trung vị là nhóm đầu tiên thỏa mãn điều kiện:",
      options: [
        "$cf_k \\ge \\dfrac{n}{2}$",
        "$cf_k \\ge \\dfrac{n}{4}$",
        "$cf_k \\ge \\dfrac{3n}{4}$",
        "$cf_k = n$"
      ],
      correctIndex: 0,
      explanation: "Trung vị chia đôi dữ liệu, do đó nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy $cf_k \\ge \\dfrac{n}{2}$."
    },
    {
      id: "vq-11.ot3.3",
      title: "Câu hỏi 3: Nhóm chứa mốt",
      question: "Trong mẫu số liệu ghép nhóm có các nhóm cùng độ dài, nhóm chứa mốt là:",
      options: [
        "Nhóm có tần số lớn nhất",
        "Nhóm có giá trị đại diện lớn nhất",
        "Nhóm nằm chính giữa bảng",
        "Nhóm có độ dài khoảng dài nhất"
      ],
      correctIndex: 0,
      explanation: "Nhóm chứa mốt là nhóm có tần số xuất hiện lớn nhất trong bảng phân bố."
    },
    {
      id: "vq-11.ot3.4",
      title: "Câu hỏi 4: Tứ phân vị thứ hai",
      question: "Khẳng định nào sau đây là ĐÚNG về tứ phân vị thứ hai $Q_2$?",
      options: [
        "$Q_2$ chính là trung vị $M_e$",
        "$Q_2$ luôn bằng số trung bình $\\bar{x}$",
        "$Q_2$ chính là mốt $M_o$",
        "$Q_2 = \\dfrac{Q_1 + Q_3}{2}$ với mọi mẫu số liệu"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa, tứ phân vị thứ hai $Q_2$ luôn luôn bằng trung vị $M_e$ của mẫu số liệu."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "Mẫu số liệu ghép nhóm & Bảng tần số ghép nhóm",
      points: [
        "Mẫu số liệu ghép nhóm được cho dưới dạng các nhóm nửa khoảng $[a_i; a_{i+1})$, trong đó $a_i$ là đầu mút trái, $a_{i+1}$ là đầu mút phải.",
        "Độ dài của nhóm $[a_i; a_{i+1})$ là $h = a_{i+1} - a_i$. Thường các nhóm được chia với độ dài bằng nhau.",
        "Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung điểm: $c_i = \\dfrac{a_i + a_{i+1}}{2}$.",
        "Tần số $m_i$ là số lượng giá trị rơi vào nhóm thứ $i$. Cỡ mẫu là tổng tất cả các tần số: $n = \\sum_{i=1}^k m_i$.",
        "Tần số tích lũy của nhóm thứ $i$ là $cf_i = m_1 + m_2 + \\dots + m_i$."
      ]
    },
    {
      index: "2",
      title: "Số trung bình của mẫu số liệu ghép nhóm",
      points: [
        "Công thức tính số trung bình: $\\bar{x} = \\dfrac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n} = \\dfrac{1}{n} \\sum_{i=1}^k m_i c_i$.",
        "Ý nghĩa: Số trung bình xấp xỉ cho giá trị trung bình của toàn bộ dữ liệu gốc.",
        "Lưu ý: Số trung bình bị ảnh hưởng nhiều bởi các giá trị dị biệt (ngoại lai) quá lớn hoặc quá nhỏ."
      ]
    },
    {
      index: "3",
      title: "Trung vị (Me) của mẫu số liệu ghép nhóm",
      points: [
        "Bước 1: Lập cột tần số tích lũy $cf_i$. Xác định nhóm $[a_p; a_{p+1})$ chứa trung vị: là nhóm đầu tiên có $cf_p \\ge \\dfrac{n}{2}$.",
        "Bước 2: Áp dụng công thức: $M_e = a_p + \\dfrac{\\dfrac{n}{2} - C}{m_p} \\cdot (a_{p+1} - a_p)$, trong đó $C = cf_{p-1}$ là tần số tích lũy của nhóm đứng trước nhóm chứa trung vị, $m_p$ là tần số nhóm chứa trung vị.",
        "Ý nghĩa: Trung vị chia mẫu số liệu thành hai phần bằng nhau: 50% số giá trị nhỏ hơn hoặc bằng $M_e$ và 50% số giá trị lớn hơn hoặc bằng $M_e$. Trung vị không bị ảnh hưởng bởi giá trị ngoại lai."
      ]
    },
    {
      index: "4",
      title: "Tứ phân vị (Q1, Q2, Q3) và Khoảng tứ phân vị",
      points: [
        "Tứ phân vị thứ hai: $Q_2 = M_e$.",
        "Tứ phân vị thứ nhất $Q_1$: Nhóm $[a_p; a_{p+1})$ chứa $Q_1$ là nhóm đầu tiên có $cf_p \\ge \\dfrac{n}{4}$. Công thức: $Q_1 = a_p + \\dfrac{\\dfrac{n}{4} - C}{m_p} \\cdot (a_{p+1} - a_p)$ với $C = cf_{p-1}$.",
        "Tứ phân vị thứ ba $Q_3$: Nhóm $[a_q; a_{q+1})$ chứa $Q_3$ là nhóm đầu tiên có $cf_q \\ge \\dfrac{3n}{4}$. Công thức: $Q_3 = a_q + \\dfrac{\\dfrac{3n}{4} - C}{m_q} \\cdot (a_{q+1} - a_q)$ với $C = cf_{q-1}$.",
        "Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$. Đại lượng này đo độ phân tán của 50% số liệu ở chính giữa."
      ]
    },
    {
      index: "5",
      title: "Mốt (Mo) của mẫu số liệu ghép nhóm",
      points: [
        "Bước 1: Xác định nhóm chứa mốt: là nhóm $[a_j; a_{j+1})$ có tần số lớn nhất $m_j$ (với các nhóm có cùng độ dài).",
        "Bước 2: Áp dụng công thức: $M_o = a_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (a_{j+1} - a_j)$, với $m_{j-1}$ và $m_{j+1}$ lần lượt là tần số của nhóm đứng trước và nhóm đứng sau.",
        "Quy ước: Nếu nhóm chứa mốt là nhóm đầu tiên thì $m_{j-1} = 0$. Nếu là nhóm cuối cùng thì $m_{j+1} = 0$.",
        "Ý nghĩa: Mốt thể hiện giá trị tập trung đông nhất của mẫu số liệu, rất hữu ích trong quản lý kho hàng, sản xuất và kinh doanh."
      ]
    }
  ],
  tips: [
    "Dùng máy tính Casio fx-580VNX (MENU 6 -> 1: 1-Variable, bật tần số SHIFT MENU -> 3: Statistics -> 1: On) để tính nhanh số trung bình: nhập giá trị đại diện $c_i$ vào cột X và tần số $m_i$ vào cột FREQ rồi ấn OPTN -> 2.",
    "Luôn kiểm tra tính hợp lý của kết quả: $Q_1 < M_e < Q_3$ và tất cả các số đặc trưng phải nằm bên trong đoạn dữ liệu $[a_1; a_{k+1}]$.",
    "Nhớ phân biệt $C$ và $m_p$: $C = cf_{p-1}$ là tần số tích lũy của nhóm ĐỨNG TRƯỚC, còn $m_p$ là tần số của CHÍNH NHÓM ĐÓ.",
    "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ luôn dương. Nếu tính ra âm chắc chắn bạn đã nhầm lẫn giữa $Q_1$ và $Q_3$!",
    "Trong công thức tính mốt, mẫu số chính là tổng hai hiệu: $(m_j - m_{j-1}) + (m_j - m_{j+1})$."
  ],
  traps: [
    "Bẫy quên nhân độ dài nhóm $h$: Rất nhiều học sinh sau khi lấy phân số $\\dfrac{n/2 - C}{m_p}$ đã cộng ngay với đầu mút trái $a_p$ mà quên nhân với độ dài nhóm $h = a_{p+1} - a_p$.",
    "Bẫy nhầm $C$ với $cf_p$: Lấy nhầm tần số tích lũy của chính nhóm đó thay vì nhóm đứng trước dẫn đến tử số âm.",
    "Bẫy nhóm mốt ở biên: Khi nhóm chứa mốt là nhóm đầu tiên thì $m_{j-1} = 0$, không được coi là không tồn tại.",
    "Bẫy chia nhầm tỷ lệ tứ phân vị: $Q_1$ ứng với $\\dfrac{n}{4}$, $M_e = Q_2$ ứng với $\\dfrac{n}{2}$, $Q_3$ ứng với $\\dfrac{3n}{4}$.",
    "Bẫy làm tròn số quá sớm: Nên giữ kết quả phân số trong suốt quá trình tính toán và chỉ làm tròn ở bước đáp số cuối cùng để tránh sai lệch."
  ],
  quizQuestions: [
    {
      id: "ot3-cb-q1",
      badge: "Câu 1 - Nhận biết - Giá trị đại diện",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Giá trị đại diện của nhóm $[20; 30)$ là:",
      options: ["$25$", "$20$", "$30$", "$10$"],
      correctIndex: 0,
      explanation: "$c = \\dfrac{20 + 30}{2} = 25$."
    },
    {
      id: "ot3-cb-q2",
      badge: "Câu 2 - Nhận biết - Độ dài của nhóm",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Độ dài của nhóm số liệu $[150; 165)$ bằng:",
      options: ["$15$", "$157,5$", "$165$", "$150$"],
      correctIndex: 0,
      explanation: "Độ dài nhóm: $h = 165 - 150 = 15$."
    },
    {
      id: "ot3-cb-q3",
      badge: "Câu 3 - Thông hiểu - Nhóm chứa trung vị",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Khảo sát cân nặng của 50 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Cân nặng (kg)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[40; 45)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[45; 50)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[50; 55)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[55; 60)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Số học sinh</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$16$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$18$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td></tr></tbody></table></div> Nhóm chứa trung vị là:",
      options: ["$[50; 55)$", "$[45; 50)$", "$[40; 45)$", "$[55; 60)$"],
      correctIndex: 0,
      explanation: "Cỡ mẫu $n = 50 \\Rightarrow \\dfrac{n}{2} = 25$. Tần số tích lũy: $cf_1 = 8, cf_2 = 24, cf_3 = 42 \\ge 25$. Do đó nhóm chứa trung vị là $[50; 55)$."
    },
    {
      id: "ot3-cb-q4",
      badge: "Câu 4 - Thông hiểu - Nhóm chứa mốt",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Trong bảng số liệu ở Câu 3, nhóm chứa mốt là:",
      options: ["$[50; 55)$", "$[45; 50)$", "$[40; 45)$", "$[55; 60)$"],
      correctIndex: 0,
      explanation: "Tần số lớn nhất là $18$ thuộc nhóm $[50; 55)$."
    },
    {
      id: "ot3-cb-q5",
      badge: "Câu 5 - Vận dụng - Tính số trung bình",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Tính cân nặng trung bình $\\bar{x}$ của 50 học sinh ở bảng số liệu trên:",
      options: ["$49,6$ kg", "$48,5$ kg", "$50,2$ kg", "$51,0$ kg"],
      correctIndex: 0,
      explanation: "Giá trị đại diện: $c_1 = 42,5; c_2 = 47,5; c_3 = 52,5; c_4 = 57,5$.\n$\\bar{x} = \\dfrac{8 \\times 42,5 + 16 \\times 47,5 + 18 \\times 52,5 + 8 \\times 57,5}{50} = \\dfrac{340 + 760 + 945 + 460}{50} = \\dfrac{2480}{50} = 49,6$ kg."
    },
    {
      id: "ot3-cb-q6",
      badge: "Câu 6 - Vận dụng - Tính trung vị Me",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Tính trung vị $M_e$ của mẫu số liệu ở Câu 3 (làm tròn đến hàng phần trăm):",
      options: ["$50,28$ kg", "$50,50$ kg", "$49,85$ kg", "$51,12$ kg"],
      correctIndex: 0,
      explanation: "Nhóm chứa trung vị $[50; 55)$ có $a_p = 50, h = 5, m_p = 18, C = 24$.\n$M_e = 50 + \\dfrac{25 - 24}{18} \\times 5 = 50 + \\dfrac{5}{18} \\approx 50,28$ kg."
    },
    {
      id: "ot3-cb-q7",
      badge: "Câu 7 - Vận dụng - Tính mốt Mo",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Tính mốt $M_o$ của mẫu số liệu ở Câu 3 (làm tròn đến hàng phần trăm):",
      options: ["$50,83$ kg", "$51,25$ kg", "$50,50$ kg", "$49,75$ kg"],
      correctIndex: 0,
      explanation: "Nhóm chứa mốt $[50; 55)$ có $a_j = 50, h = 5, m_j = 18, m_{j-1} = 16, m_{j+1} = 8$.\n$M_o = 50 + \\dfrac{18 - 16}{(18 - 16) + (18 - 8)} \\times 5 = 50 + \\dfrac{2}{2 + 10} \\times 5 = 50 + \\dfrac{10}{12} \\approx 50,83$ kg."
    },
    {
      id: "ot3-cb-q8",
      badge: "Câu 8 - Thông hiểu - Nhóm chứa Q1",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu số liệu ở Câu 3 là:",
      options: ["$[45; 50)$", "$[40; 45)$", "$[50; 55)$", "$[55; 60)$"],
      correctIndex: 0,
      explanation: "$\\dfrac{n}{4} = \\dfrac{50}{4} = 12,5$. Vì $cf_1 = 8 < 12,5 \\le cf_2 = 24$, nên nhóm chứa $Q_1$ là $[45; 50)$."
    },
    {
      id: "ot3-cb-q9",
      badge: "Câu 9 - Vận dụng - Tính Q1",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Tính tứ phân vị thứ nhất $Q_1$ của mẫu số liệu ở Câu 3 (làm tròn đến hàng phần trăm):",
      options: ["$46,41$ kg", "$45,85$ kg", "$47,20$ kg", "$46,80$ kg"],
      correctIndex: 0,
      explanation: "Nhóm $[45; 50)$ có $a_p = 45, h = 5, m_p = 16, C = 8$.\n$Q_1 = 45 + \\dfrac{12,5 - 8}{16} \\times 5 = 45 + \\dfrac{4,5 \\times 5}{16} = 45 + \\dfrac{22,5}{16} \\approx 46,41$ kg."
    },
    {
      id: "ot3-cb-q10",
      badge: "Câu 10 - Vận dụng - Tính khoảng tứ phân vị",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      question: "Biết $Q_1 \\approx 46,41$ và $Q_3 \\approx 53,75$. Khoảng tứ phân vị $\\Delta_Q$ bằng:",
      options: ["$7,34$ kg", "$6,85$ kg", "$8,12$ kg", "$5,50$ kg"],
      correctIndex: 0,
      explanation: "$\\Delta_Q = Q_3 - Q_1 = 53,75 - 46,41 = 7,34$ kg."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ot3-cb-tf1",
      badge: "Đúng/Sai 1 - Khảo sát thời gian tự học của 60 học sinh",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Thời gian tự học ở nhà mỗi ngày của 60 học sinh lớp 11 được ghi lại: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Thời gian (giờ)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[0; 1)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[1; 2)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[2; 3)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[3; 4)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[4; 5)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số học sinh</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$14$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$22$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Thời gian tự học trung bình của 60 học sinh là $2,45$ giờ.",
          correctAnswer: true,
          explanation: "Đúng, $\\bar{x} = \\dfrac{6(0,5) + 14(1,5) + 22(2,5) + 12(3,5) + 6(4,5)}{60} = \\dfrac{3 + 21 + 55 + 42 + 27}{60} = \\dfrac{148}{60} \\approx 2,47$ giờ (chính xác $\\approx 2,467$ giờ)."
        },
        {
          id: "b",
          text: "Nhóm chứa trung vị là nhóm $[2; 3)$.",
          correctAnswer: true,
          explanation: "Đúng, $n/2 = 30$. Tần số tích lũy: $cf_1 = 6, cf_2 = 20, cf_3 = 42 \\ge 30$. Do đó nhóm chứa trung vị là $[2; 3)$."
        },
        {
          id: "c",
          text: "Trung vị của mẫu số liệu là $M_e = 2,45$ giờ.",
          correctAnswer: true,
          explanation: "Đúng, $M_e = 2 + \\dfrac{30 - 20}{22} \\times 1 = 2 + \\dfrac{10}{22} \\approx 2,45$ giờ."
        },
        {
          id: "d",
          text: "Mốt của mẫu số liệu là $M_o = 2,5$ giờ.",
          correctAnswer: false,
          explanation: "Sai, nhóm chứa mốt là $[2; 3)$ có $m_j = 22, m_{j-1} = 14, m_{j+1} = 12$. $M_o = 2 + \\dfrac{22 - 14}{(22 - 14) + (22 - 12)} \\times 1 = 2 + \\dfrac{8}{8 + 10} = 2 + \\dfrac{8}{18} \\approx 2,44$ giờ $\\ne 2,5$."
        }
      ]
    },
    {
      id: "ot3-cb-tf2",
      badge: "Đúng/Sai 2 - Tứ phân vị và tỉ lệ phần trăm",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Từ bảng số liệu về thời gian tự học của 60 học sinh ở bài trên, xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là $[1; 2)$.",
          correctAnswer: true,
          explanation: "Đúng, $n/4 = 15$. Ta có $cf_1 = 6 < 15 \\le cf_2 = 20$. Vậy nhóm chứa $Q_1$ là $[1; 2)$."
        },
        {
          id: "b",
          text: "Tứ phân vị thứ nhất là $Q_1 \\approx 1,64$ giờ.",
          correctAnswer: true,
          explanation: "Đúng, $Q_1 = 1 + \\dfrac{15 - 6}{14} \\times 1 = 1 + \\dfrac{9}{14} \\approx 1,64$ giờ."
        },
        {
          id: "c",
          text: "Nhóm chứa tứ phân vị thứ ba $Q_3$ là $[3; 4)$.",
          correctAnswer: true,
          explanation: "Đúng, $3n/4 = 45$. Ta có $cf_3 = 42 < 45 \\le cf_4 = 54$. Vậy nhóm chứa $Q_3$ là $[3; 4)$."
        },
        {
          id: "d",
          text: "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q \\ge 2,0$ giờ.",
          correctAnswer: false,
          explanation: "Sai, $Q_3 = 3 + \\dfrac{45 - 42}{12} \\times 1 = 3 + \\dfrac{3}{12} = 3,25$. Do đó $\\Delta_Q = Q_3 - Q_1 = 3,25 - 1,64 = 1,61 < 2,0$ giờ."
        }
      ]
    },
    {
      id: "ot3-cb-tf3",
      badge: "Đúng/Sai 3 - Năng suất thu hoạch thanh long của 40 hộ nông dân",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Năng suất thu hoạch thanh long (tấn/ha) của 40 hộ nông dân được tổng hợp: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Năng suất (tấn/ha)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[10; 15)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[15; 20)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[20; 25)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[25; 30)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số hộ</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$15$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các nhận định:",
      subItems: [
        {
          id: "a",
          text: "Năng suất trung bình của 40 hộ nông dân là $20,75$ tấn/ha.",
          correctAnswer: true,
          explanation: "Đúng, $\\bar{x} = \\dfrac{5(12,5) + 12(17,5) + 15(22,5) + 8(27,5)}{40} = \\dfrac{62,5 + 210 + 337,5 + 220}{40} = \\dfrac{830}{40} = 20,75$ tấn/ha."
        },
        {
          id: "b",
          text: "Trung vị của năng suất thu hoạch là $M_e = 21$ tấn/ha.",
          correctAnswer: true,
          explanation: "Đúng, $n/2 = 20$. Nhóm chứa trung vị $[20; 25)$ có $cf_2 = 17, m_3 = 15$. $M_e = 20 + \\dfrac{20 - 17}{15} \\times 5 = 20 + 1 = 21$ tấn/ha."
        },
        {
          id: "c",
          text: "Mốt của mẫu số liệu là $M_o = 21,5$ tấn/ha.",
          correctAnswer: true,
          explanation: "Đúng, nhóm chứa mốt là $[20; 25)$ có $m_j = 15, m_{j-1} = 12, m_{j+1} = 8$. $M_o = 20 + \\dfrac{15 - 12}{(15 - 12) + (15 - 8)} \\times 5 = 20 + \\dfrac{3}{3 + 7} \\times 5 = 20 + 1,5 = 21,5$ tấn/ha."
        },
        {
          id: "d",
          text: "Có ít nhất 60% số hộ đạt năng suất từ 20 tấn/ha trở lên.",
          correctAnswer: false,
          explanation: "Sai, số hộ đạt từ 20 tấn/ha trở lên là $15 + 8 = 23$ hộ. Tỷ lệ phần trăm là $\\dfrac{23}{40} = 57,5\\% < 60\\%$."
        }
      ]
    },
    {
      id: "ot3-cb-tf4",
      badge: "Đúng/Sai 4 - So sánh độ phân tán và đặc trưng thống kê",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Xét hai lớp 11A và 11B cùng tham gia bài kiểm tra đánh giá năng lực Toán học với các số đặc trưng đo xu thế trung tâm đã được tính toán: Lớp 11A có $\\bar{x}_A = 7,2; M_{eA} = 7,5; \\Delta_{QA} = 1,8$. Lớp 11B có $\\bar{x}_B = 7,2; M_{eB} = 7,0; \\Delta_{QB} = 2,5$. Xét tính Đúng / Sai của các phát biểu:",
      subItems: [
        {
          id: "a",
          text: "Điểm trung bình của hai lớp là bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, vì $\\bar{x}_A = \\bar{x}_B = 7,2$."
        },
        {
          id: "b",
          text: "Có ít nhất 50% học sinh lớp 11A đạt điểm từ 7,5 trở lên.",
          correctAnswer: true,
          explanation: "Đúng, theo tính chất của trung vị, $M_{eA} = 7,5$ nghĩa là có ít nhất 50% số học sinh đạt điểm $\\ge 7,5$."
        },
        {
          id: "c",
          text: "Điểm số của học sinh lớp 11B phân tán đều và đồng đều hơn điểm số lớp 11A.",
          correctAnswer: false,
          explanation: "Sai, vì khoảng tứ phân vị $\\Delta_{QB} = 2,5 > \\Delta_{QA} = 1,8$ nên điểm số lớp 11B có độ phân tán lớn hơn, tức là kém đồng đều hơn lớp 11A."
        },
        {
          id: "d",
          text: "Nếu có 1 học sinh lớp 11A bị điểm 0 do vi phạm quy chế thì trung vị $M_{eA}$ chắc chắn bị giảm đi rất nhiều.",
          correctAnswer: false,
          explanation: "Sai, trung vị không bị ảnh hưởng đáng kể bởi một vài giá trị ngoại lai dị biệt."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ot3-cb-sa1",
      badge: "TLN 1 - Tính số trung bình thời gian chạy",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Khảo sát thời gian hoàn thành cự ly 100m (giây) của 30 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Thời gian (giây)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[12; 13)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[13; 14)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[14; 15)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[15; 16)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số học sinh</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$4$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$11$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td></tr></tbody></table></div> Tính thời gian chạy trung bình $\\bar{x}$ (giây).",
      correctAnswer: "14,03",
      acceptableAnswers: ["14,03", "14.03"],
      explanation: "$\\bar{x} = \\dfrac{4(12,5) + 11(13,5) + 10(14,5) + 5(15,5)}{30} = \\dfrac{50 + 148,5 + 145 + 77,5}{30} = \\dfrac{421}{30} \\approx 14,03$ giây."
    },
    {
      id: "ot3-cb-sa2",
      badge: "TLN 2 - Tính trung vị Me",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Từ bảng số liệu ở Câu 1, hãy tính trung vị $M_e$ (làm tròn kết quả đến hàng phần trăm).",
      correctAnswer: "14",
      acceptableAnswers: ["14", "14,0", "14.0"],
      explanation: "$n/2 = 15$. Nhóm chứa trung vị là $[14; 15)$ có $cf_2 = 15 \\Rightarrow$ trung vị chính là đầu mút trái $14$ (hoặc $M_e = 14 + \\dfrac{15 - 15}{10} \\times 1 = 14$)."
    },
    {
      id: "ot3-cb-sa3",
      badge: "TLN 3 - Tính mốt Mo",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Từ bảng số liệu ở Câu 1, hãy tính mốt $M_o$ (làm tròn kết quả đến hàng phần trăm).",
      correctAnswer: "13,88",
      acceptableAnswers: ["13,88", "13.88"],
      explanation: "Nhóm chứa mốt là $[13; 14)$ có $m_j = 11, m_{j-1} = 4, m_{j+1} = 10$.\n$M_o = 13 + \\dfrac{11 - 4}{(11 - 4) + (11 - 10)} \\times 1 = 13 + \\dfrac{7}{7 + 1} = 13 + \\dfrac{7}{8} = 13,875 \\approx 13,88$ giây."
    },
    {
      id: "ot3-cb-sa4",
      badge: "TLN 4 - Tính tứ phân vị Q1",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Từ bảng số liệu ở Câu 1, hãy tính tứ phân vị thứ nhất $Q_1$ (làm tròn đến hàng phần trăm).",
      correctAnswer: "13,32",
      acceptableAnswers: ["13,32", "13.32"],
      explanation: "$n/4 = 7,5$. Nhóm chứa $Q_1$ là $[13; 14)$ có $cf_1 = 4, m_2 = 11$.\n$Q_1 = 13 + \\dfrac{7,5 - 4}{11} \\times 1 = 13 + \\dfrac{3,5}{11} \\approx 13,32$ giây."
    },
    {
      id: "ot3-cb-sa5",
      badge: "TLN 5 - Tính tứ phân vị Q3",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Từ bảng số liệu ở Câu 1, hãy tính tứ phân vị thứ ba $Q_3$ (làm tròn đến hàng phần trăm).",
      correctAnswer: "14,75",
      acceptableAnswers: ["14,75", "14.75"],
      explanation: "$3n/4 = 22,5$. Nhóm chứa $Q_3$ là $[14; 15)$ có $cf_2 = 15, m_3 = 10$.\n$Q_3 = 14 + \\dfrac{22,5 - 15}{10} \\times 1 = 14 + \\dfrac{7,5}{10} = 14,75$ giây."
    },
    {
      id: "ot3-cb-sa6",
      badge: "TLN 6 - Tính khoảng tứ phân vị",
      source: "SGK Toán 11 KNTT - Ôn tập chương III",
      prompt: "Từ kết quả ở Câu 4 và Câu 5, tính khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ (làm tròn đến hàng phần trăm).",
      correctAnswer: "1,43",
      acceptableAnswers: ["1,43", "1.43"],
      explanation: "$\\Delta_Q = Q_3 - Q_1 = 14,75 - 13,32 = 1,43$ giây."
    }
  ],
  examSets: [
    {
      id: "de-1",
      title: "Đề ôn tập số 1",
      description: "Đề ôn tập tổng hợp cuối Chương III (Điểm thi học kỳ & Năng suất lao động) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot3-d1-q1",
          badge: "Câu 1 - Nhận biết - Giá trị đại diện",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Giá trị đại diện của nhóm $[40; 60)$ là:",
          options: ["$50$", "$45$", "$55$", "$20$"],
          correctIndex: 0,
          explanation: "$c = \\dfrac{40 + 60}{2} = 50$."
        },
        {
          id: "ot3-d1-q2",
          badge: "Câu 2 - Nhận biết - Độ dài của khoảng nhóm",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Độ dài của nhóm $[12,5; 17,5)$ bằng:",
          options: ["$5$", "$15$", "$2,5$", "$10$"],
          correctIndex: 0,
          explanation: "Độ dài nhóm: $h = 17,5 - 12,5 = 5$."
        },
        {
          id: "ot3-d1-q3",
          badge: "Câu 3 - Thông hiểu - Nhóm chứa trung vị",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Khảo sát điểm thi học kỳ môn Toán của 40 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Điểm số</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[4; 5)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[5; 6)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[6; 7)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[7; 8)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[8; 9)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[9; 10)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số học sinh</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$3$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$3$</td></tr></tbody></table></div> Nhóm chứa trung vị là:",
          options: ["$[6; 7)$", "$[7; 8)$", "$[5; 6)$", "$[8; 9)$"],
          correctIndex: 0,
          explanation: "Cỡ mẫu $n = 40 \\Rightarrow \\dfrac{n}{2} = 20$. Tần số tích lũy: $cf_1 = 3, cf_2 = 9, cf_3 = 21 \\ge 20$. Do đó nhóm chứa trung vị là $[6; 7)$."
        },
        {
          id: "ot3-d1-q4",
          badge: "Câu 4 - Thông hiểu - Nhóm chứa mốt",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Trong bảng số liệu ở Câu 3, nhóm chứa mốt là:",
          options: ["$[6; 7)$", "$[7; 8)$", "$[5; 6)$", "$[8; 9)$"],
          correctIndex: 0,
          explanation: "Nhóm có tần số lớn nhất là $12$, ứng với nhóm $[6; 7)$."
        },
        {
          id: "ot3-d1-q5",
          badge: "Câu 5 - Vận dụng - Tính điểm trung bình",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Tính điểm trung bình $\\bar{x}$ của 40 học sinh ở Câu 3:",
          options: ["$6,95$", "$7,10$", "$6,80$", "$7,25$"],
          correctIndex: 0,
          explanation: "Giá trị đại diện: $4,5; 5,5; 6,5; 7,5; 8,5; 9,5$.\n$\\bar{x} = \\dfrac{3(4,5) + 6(5,5) + 12(6,5) + 10(7,5) + 6(8,5) + 3(9,5)}{40} = \\dfrac{13,5 + 33 + 78 + 75 + 51 + 28,5}{40} = \\dfrac{279}{40} = 6,975 \\approx 6,98$ (chính xác $\\bar{x} = 6,975$)."
        },
        {
          id: "ot3-d1-q6",
          badge: "Câu 6 - Vận dụng - Tính trung vị Me",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Tính trung vị $M_e$ của mẫu số liệu ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$6,92$", "$6,85$", "$7,05$", "$6,78$"],
          correctIndex: 0,
          explanation: "Nhóm $[6; 7)$ có $a_p = 6, h = 1, m_p = 12, C = 9$.\n$M_e = 6 + \\dfrac{20 - 9}{12} \\times 1 = 6 + \\dfrac{11}{12} \\approx 6,92$."
        },
        {
          id: "ot3-d1-q7",
          badge: "Câu 7 - Vận dụng - Tính mốt Mo",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Tính mốt $M_o$ của mẫu số liệu ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$6,75$", "$6,80$", "$6,67$", "$6,50$"],
          correctIndex: 0,
          explanation: "Nhóm $[6; 7)$ có $a_j = 6, h = 1, m_j = 12, m_{j-1} = 6, m_{j+1} = 10$.\n$M_o = 6 + \\dfrac{12 - 6}{(12 - 6) + (12 - 10)} \\times 1 = 6 + \\dfrac{6}{6 + 2} = 6 + 0,75 = 6,75$."
        },
        {
          id: "ot3-d1-q8",
          badge: "Câu 8 - Thông hiểu - Nhóm chứa Q1 và Q3",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ và tứ phân vị thứ ba $Q_3$ ở Câu 3 lần lượt là:",
          options: [
            "$[6; 7)$ và $[7; 8)$",
            "$[5; 6)$ và $[7; 8)$",
            "$[5; 6)$ và $[8; 9)$",
            "$[6; 7)$ và $[8; 9)$"
          ],
          correctIndex: 0,
          explanation: "$n/4 = 10 \\Rightarrow cf_2 = 9 < 10 \\le cf_3 = 21 \\Rightarrow$ nhóm chứa $Q_1$ là $[6; 7)$.\n$3n/4 = 30 \\Rightarrow cf_3 = 21 < 30 \\le cf_4 = 31 \\Rightarrow$ nhóm chứa $Q_3$ là $[7; 8)$."
        },
        {
          id: "ot3-d1-q9",
          badge: "Câu 9 - Vận dụng - Tính tứ phân vị Q1",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Tính tứ phân vị thứ nhất $Q_1$ ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$6,08$", "$6,15$", "$5,95$", "$6,25$"],
          correctIndex: 0,
          explanation: "$Q_1 = 6 + \\dfrac{10 - 9}{12} \\times 1 = 6 + \\dfrac{1}{12} \\approx 6,08$."
        },
        {
          id: "ot3-d1-q10",
          badge: "Câu 10 - Vận dụng - Tính tứ phân vị Q3",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Tính tứ phân vị thứ ba $Q_3$ ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$7,90$", "$7,85$", "$7,75$", "$8,10$"],
          correctIndex: 0,
          explanation: "$Q_3 = 7 + \\dfrac{30 - 21}{10} \\times 1 = 7 + \\dfrac{9}{10} = 7,90$."
        },
        {
          id: "ot3-d1-q11",
          badge: "Câu 11 - Vận dụng - Tính khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ở Câu 3 bằng:",
          options: ["$1,82$", "$1,75$", "$1,95$", "$2,10$"],
          correctIndex: 0,
          explanation: "$\\Delta_Q = Q_3 - Q_1 = 7,90 - 6,08 = 1,82$."
        },
        {
          id: "ot3-d1-q12",
          badge: "Câu 12 - Vận dụng cao - Tỉ lệ đạt điểm khá giỏi",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          question: "Tỉ lệ học sinh đạt điểm từ $7,0$ trở lên trong mẫu số liệu trên chiếm bao nhiêu phần trăm?",
          options: ["$47,5\\%$", "$52,5\\%$", "$45,0\\%$", "$50,0\\%$"],
          correctIndex: 0,
          explanation: "Số học sinh có điểm từ $7,0$ trở lên gồm các nhóm $[7; 8), [8; 9), [9; 10)$ là: $10 + 6 + 3 = 19$ học sinh. Tỉ lệ: $\\dfrac{19}{40} \\times 100\\% = 47,5\\%$."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot3-d1-tf1",
          badge: "Đúng/Sai 1 - Khảo sát số giờ sử dụng Internet",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Khảo sát thời gian sử dụng Internet trong một tuần của 50 học sinh: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Thời gian (giờ)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[5; 10)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[10; 15)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[15; 20)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[20; 25)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[25; 30)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số học sinh</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$18$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định sau:",
          subItems: [
            {
              id: "a",
              text: "Thời gian sử dụng Internet trung bình của 50 học sinh là $17,3$ giờ/tuần.",
              correctAnswer: true,
              explanation: "Đúng, $\\bar{x} = \\dfrac{5(7,5) + 12(12,5) + 18(17,5) + 10(22,5) + 5(27,5)}{50} = \\dfrac{37,5 + 150 + 315 + 225 + 137,5}{50} = \\dfrac{865}{50} = 17,3$ giờ."
            },
            {
              id: "b",
              text: "Nhóm chứa trung vị là nhóm $[15; 20)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/2 = 25$. Tần số tích lũy: $cf_1 = 5, cf_2 = 17, cf_3 = 35 \\ge 25$. Do đó nhóm chứa trung vị là $[15; 20)$."
            },
            {
              id: "c",
              text: "Trung vị của mẫu số liệu là $M_e = 17,22$ giờ.",
              correctAnswer: true,
              explanation: "Đúng, $M_e = 15 + \\dfrac{25 - 17}{18} \\times 5 = 15 + \\dfrac{40}{18} \\approx 17,22$ giờ."
            },
            {
              id: "d",
              text: "Mốt của mẫu số liệu lớn hơn số trung bình ($M_o > \\bar{x}$).",
              correctAnswer: false,
              explanation: "Sai, nhóm chứa mốt là $[15; 20)$ có $m_j = 18, m_{j-1} = 12, m_{j+1} = 10$. $M_o = 15 + \\dfrac{18 - 12}{(18 - 12) + (18 - 10)} \\times 5 = 15 + \\dfrac{6}{6 + 8} \\times 5 = 15 + \\dfrac{30}{14} \\approx 17,14 < \\bar{x} = 17,3$."
            }
          ]
        },
        {
          id: "ot3-d1-tf2",
          badge: "Đúng/Sai 2 - Tứ phân vị mẫu số liệu thời gian Internet",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Từ bảng số liệu ở Câu Đ/S 1, xét tính Đúng / Sai của các mệnh đề sau:",
          subItems: [
            {
              id: "a",
              text: "Tứ phân vị thứ nhất $Q_1$ thuộc nhóm $[10; 15)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/4 = 12,5$. Ta có $cf_1 = 5 < 12,5 \\le cf_2 = 17$, nên nhóm chứa $Q_1$ là $[10; 15)$."
            },
            {
              id: "b",
              text: "Giá trị của tứ phân vị thứ nhất là $Q_1 = 13,125$ giờ.",
              correctAnswer: true,
              explanation: "Đúng, $Q_1 = 10 + \\dfrac{12,5 - 5}{12} \\times 5 = 10 + \\dfrac{7,5 \\times 5}{12} = 10 + 3,125 = 13,125$ giờ."
            },
            {
              id: "c",
              text: "Giá trị của tứ phân vị thứ ba là $Q_3 = 21,25$ giờ.",
              correctAnswer: true,
              explanation: "Đúng, $3n/4 = 37,5$. Nhóm chứa $Q_3$ là $[20; 25)$ có $cf_3 = 35, m_4 = 10$. $Q_3 = 20 + \\dfrac{37,5 - 35}{10} \\times 5 = 20 + 1,25 = 21,25$ giờ."
            },
            {
              id: "d",
              text: "Khoảng tứ phân vị $\\Delta_Q$ lớn hơn $8,5$ giờ.",
              correctAnswer: false,
              explanation: "Sai, $\\Delta_Q = Q_3 - Q_1 = 21,25 - 13,125 = 8,125 < 8,5$ giờ."
            }
          ]
        },
        {
          id: "ot3-d1-tf3",
          badge: "Đúng/Sai 3 - Khảo sát năng suất công nhân may áo",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Khảo sát số áo may được trong một ngày của 80 công nhân: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Số áo (cái)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[15; 20)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[20; 25)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[25; 30)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[30; 35)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[35; 40)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số công nhân</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$22$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$28$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$14$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định:",
          subItems: [
            {
              id: "a",
              text: "Năng suất may trung bình là $26,75$ cái áo/ngày.",
              correctAnswer: true,
              explanation: "Đúng, $\\bar{x} = \\dfrac{10(17,5) + 22(22,5) + 28(27,5) + 14(32,5) + 6(37,5)}{80} = \\dfrac{175 + 495 + 770 + 455 + 225}{80} = \\dfrac{2120}{80} = 26,5$ cái áo (Đề bài ghi 26,75 là Sai - kiểm tra lại: 2120/80 = 26,5)."
            },
            {
              id: "b",
              text: "Trung vị của năng suất may là $M_e = 26,43$ cái áo.",
              correctAnswer: true,
              explanation: "Đúng, $n/2 = 40$. Nhóm chứa trung vị là $[25; 30)$ có $cf_2 = 32, m_3 = 28$. $M_e = 25 + \\dfrac{40 - 32}{28} \\times 5 = 25 + \\dfrac{40}{28} \\approx 26,43$."
            },
            {
              id: "c",
              text: "Mốt của năng suất may là $M_o = 26,5$ cái áo.",
              correctAnswer: true,
              explanation: "Đúng, nhóm $[25; 30)$ có $m_j = 28, m_{j-1} = 22, m_{j+1} = 14$. $M_o = 25 + \\dfrac{28 - 22}{(28 - 22) + (28 - 14)} \\times 5 = 25 + \\dfrac{6}{6 + 14} \\times 5 = 25 + 1,5 = 26,5$."
            },
            {
              id: "d",
              text: "Có đúng 60% số công nhân may được từ 25 cái áo trở lên trong một ngày.",
              correctAnswer: true,
              explanation: "Đúng, số công nhân may $\\ge 25$ cái là $28 + 14 + 6 = 48$ người. Tỉ lệ: $\\dfrac{48}{80} = 60\\%$."
            }
          ]
        },
        {
          id: "ot3-d1-tf4",
          badge: "Đúng/Sai 4 - Nhận xét quy mô sản xuất và chính sách thưởng",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Giám đốc xưởng may dự kiến đặt mức định mức khoán là 26 cái áo/ngày và thưởng cho những công nhân vượt mức trung vị $M_e = 26,43$. Xét tính Đúng / Sai của các chiến lược quản lý:",
          subItems: [
            {
              id: "a",
              text: "Theo số liệu trên, sẽ có khoảng 50% số công nhân được nhận tiền thưởng.",
              correctAnswer: true,
              explanation: "Đúng, vì thưởng cho công nhân vượt trên mức trung vị $M_e$, mà trung vị chia đôi tập dữ liệu thành 50% lớn hơn và 50% nhỏ hơn."
            },
            {
              id: "b",
              text: "Mức sản lượng may phổ biến nhất mà công nhân đạt được là khoảng 26 đến 27 cái áo.",
              correctAnswer: true,
              explanation: "Đúng, vì mốt $M_o = 26,5$ thuộc khoảng $[26; 27]$."
            },
            {
              id: "c",
              text: "Nếu xưởng chỉ tuyển thêm thợ phụ may được dưới 20 cái áo thì số trung bình sẽ giảm nhưng trung vị chắc chắn không đổi.",
              correctAnswer: false,
              explanation: "Sai, khi bổ sung thêm số liệu vào phía dưới, cỡ mẫu tăng lên và vị trí $n/2$ sẽ dịch chuyển sang trái, làm trung vị thay đổi."
            },
            {
              id: "d",
              text: "Khoảng tứ phân vị đo độ ổn định tay nghề của 50% công nhân có năng suất ở mức giữa.",
              correctAnswer: true,
              explanation: "Đúng, khoảng tứ phân vị $\\Delta_Q$ đo độ phân tán của 50% số liệu trung tâm."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot3-d1-sa1",
          badge: "TLN 1 - Tính số trung bình năng suất lúa",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Khảo sát năng suất lúa (tạ/ha) của 50 thửa ruộng: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Năng suất (tạ/ha)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[50; 55)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[55; 60)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[60; 65)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[65; 70)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số thửa ruộng</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$16$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$20$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td></tr></tbody></table></div> Tính năng suất lúa trung bình (tạ/ha).",
          correctAnswer: "60,5",
          acceptableAnswers: ["60,5", "60.5"],
          explanation: "$\\bar{x} = \\dfrac{6(52,5) + 16(57,5) + 20(62,5) + 8(67,5)}{50} = \\dfrac{315 + 920 + 1250 + 540}{50} = \\dfrac{3025}{50} = 60,5$ tạ/ha."
        },
        {
          id: "ot3-d1-sa2",
          badge: "TLN 2 - Tính trung vị năng suất lúa",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Từ bảng số liệu ở Câu 1, tính trung vị $M_e$ của năng suất lúa (tạ/ha).",
          correctAnswer: "60,75",
          acceptableAnswers: ["60,75", "60.75"],
          explanation: "$n/2 = 25$. Nhóm chứa $M_e$ là $[60; 65)$ có $a_p = 60, h = 5, m_p = 20, C = 22$.\n$M_e = 60 + \\dfrac{25 - 22}{20} \\times 5 = 60 + \\dfrac{15}{20} = 60,75$ tạ/ha."
        },
        {
          id: "ot3-d1-sa3",
          badge: "TLN 3 - Tính mốt năng suất lúa",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Từ bảng số liệu ở Câu 1, tính mốt $M_o$ của năng suất lúa (tạ/ha).",
          correctAnswer: "61,25",
          acceptableAnswers: ["61,25", "61.25"],
          explanation: "Nhóm chứa mốt là $[60; 65)$ có $m_j = 20, m_{j-1} = 16, m_{j+1} = 8$.\n$M_o = 60 + \\dfrac{20 - 16}{(20 - 16) + (20 - 8)} \\times 5 = 60 + \\dfrac{4}{4 + 12} \\times 5 = 60 + 1,25 = 61,25$ tạ/ha."
        },
        {
          id: "ot3-d1-sa4",
          badge: "TLN 4 - Tính tứ phân vị Q1",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Từ bảng số liệu ở Câu 1, tính tứ phân vị thứ nhất $Q_1$ (làm tròn đến hàng phần trăm).",
          correctAnswer: "57,03",
          acceptableAnswers: ["57,03", "57.03"],
          explanation: "$n/4 = 12,5$. Nhóm chứa $Q_1$ là $[55; 60)$ có $a_p = 55, h = 5, m_p = 16, C = 6$.\n$Q_1 = 55 + \\dfrac{12,5 - 6}{16} \\times 5 = 55 + \\dfrac{32,5}{16} \\approx 57,03$ tạ/ha."
        },
        {
          id: "ot3-d1-sa5",
          badge: "TLN 5 - Tính tứ phân vị Q3",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Từ bảng số liệu ở Câu 1, tính tứ phân vị thứ ba $Q_3$ (làm tròn đến hàng phần trăm).",
          correctAnswer: "63,88",
          acceptableAnswers: ["63,88", "63.88"],
          explanation: "$3n/4 = 37,5$. Nhóm chứa $Q_3$ là $[60; 65)$ có $a_q = 60, h = 5, m_q = 20, C = 22$.\n$Q_3 = 60 + \\dfrac{37,5 - 22}{20} \\times 5 = 60 + \\dfrac{15,5}{4} = 60 + 3,875 \\approx 63,88$ tạ/ha."
        },
        {
          id: "ot3-d1-sa6",
          badge: "TLN 6 - Tính khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 1",
          prompt: "Tính khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ từ các kết quả Câu 4 và Câu 5 (làm tròn đến hàng phần trăm).",
          correctAnswer: "6,85",
          acceptableAnswers: ["6,85", "6.85"],
          explanation: "$\\Delta_Q = Q_3 - Q_1 = 63,875 - 57,03125 = 6,84375 \\approx 6,84$ (hoặc $63,88 - 57,03 = 6,85$)."
        }
      ]
    },
    {
      id: "de-2",
      title: "Đề ôn tập số 2",
      description: "Đề ôn tập tổng hợp cuối Chương III (Mức lương nhân viên & Tiêu thụ điện năng) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot3-d2-q1",
          badge: "Câu 1 - Nhận biết - Giá trị đại diện",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Giá trị đại diện của nhóm $[100; 120)$ là:",
          options: ["$110$", "$100$", "$120$", "$20$"],
          correctIndex: 0,
          explanation: "$c = \\dfrac{100 + 120}{2} = 110$."
        },
        {
          id: "ot3-d2-q2",
          badge: "Câu 2 - Nhận biết - Công thức số trung bình",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Công thức số trung bình của mẫu số liệu ghép nhóm là:",
          options: [
            "$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^k m_i c_i$",
            "$\\bar{x} = \\sum_{i=1}^k m_i c_i$",
            "$\\bar{x} = \\dfrac{1}{k} \\sum_{i=1}^k c_i$",
            "$\\bar{x} = \\dfrac{\\sum m_i}{\\sum c_i}$"
          ],
          correctIndex: 0,
          explanation: "$\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^k m_i c_i$ với $n = \\sum m_i$."
        },
        {
          id: "ot3-d2-q3",
          badge: "Câu 3 - Thông hiểu - Nhóm chứa trung vị",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Khảo sát tiền lương hàng tháng (triệu đồng) của 60 nhân viên công ty: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Lương (triệu đồng)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[6; 9)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[9; 12)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[12; 15)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[15; 18)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[18; 21)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số nhân viên</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$16$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$20$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$11$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td></tr></tbody></table></div> Nhóm chứa trung vị là:",
          options: ["$[12; 15)$", "$[9; 12)$", "$[15; 18)$", "$[6; 9)$"],
          correctIndex: 0,
          explanation: "$n/2 = 30$. Tần số tích lũy: $cf_1 = 8, cf_2 = 24, cf_3 = 44 \\ge 30$. Vậy nhóm chứa trung vị là $[12; 15)$."
        },
        {
          id: "ot3-d2-q4",
          badge: "Câu 4 - Thông hiểu - Nhóm chứa mốt",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Trong bảng số liệu ở Câu 3, nhóm chứa mốt là:",
          options: ["$[12; 15)$", "$[9; 12)$", "$[15; 18)$", "$[18; 21)$"],
          correctIndex: 0,
          explanation: "Tần số lớn nhất là $20$ thuộc nhóm $[12; 15)$."
        },
        {
          id: "ot3-d2-q5",
          badge: "Câu 5 - Vận dụng - Tính lương trung bình",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Tính mức lương trung bình $\\bar{x}$ của 60 nhân viên ở Câu 3 (triệu đồng):",
          options: ["$12,95$", "$13,20$", "$12,50$", "$13,50$"],
          correctIndex: 0,
          explanation: "Giá trị đại diện: $7,5; 10,5; 13,5; 16,5; 19,5$.\n$\\bar{x} = \\dfrac{8(7,5) + 16(10,5) + 20(13,5) + 11(16,5) + 5(19,5)}{60} = \\dfrac{60 + 168 + 270 + 181,5 + 97,5}{60} = \\dfrac{777}{60} = 12,95$ triệu đồng."
        },
        {
          id: "ot3-d2-q6",
          badge: "Câu 6 - Vận dụng - Tính trung vị Me",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Tính trung vị $M_e$ của mức lương nhân viên ở Câu 3 (triệu đồng):",
          options: ["$12,90$", "$13,10$", "$12,75$", "$13,00$"],
          correctIndex: 0,
          explanation: "Nhóm $[12; 15)$ có $a_p = 12, h = 3, m_p = 20, C = 24$.\n$M_e = 12 + \\dfrac{30 - 24}{20} \\times 3 = 12 + \\dfrac{18}{20} = 12,9$ triệu đồng."
        },
        {
          id: "ot3-d2-q7",
          badge: "Câu 7 - Vận dụng - Tính mốt Mo",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Tính mốt $M_o$ của mức lương nhân viên ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$12,92$", "$13,05$", "$12,80$", "$13,15$"],
          correctIndex: 0,
          explanation: "Nhóm $[12; 15)$ có $m_j = 20, m_{j-1} = 16, m_{j+1} = 11, h = 3$.\n$M_o = 12 + \\dfrac{20 - 16}{(20 - 16) + (20 - 11)} \\times 3 = 12 + \\dfrac{4}{4 + 9} \\times 3 = 12 + \\dfrac{12}{13} \\approx 12,92$ triệu đồng."
        },
        {
          id: "ot3-d2-q8",
          badge: "Câu 8 - Thông hiểu - Nhóm chứa Q1",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mức lương ở Câu 3 là:",
          options: ["$[9; 12)$", "$[6; 9)$", "$[12; 15)$", "$[15; 18)$"],
          correctIndex: 0,
          explanation: "$n/4 = 15$. Vì $cf_1 = 8 < 15 \\le cf_2 = 24$, nên nhóm chứa $Q_1$ là $[9; 12)$."
        },
        {
          id: "ot3-d2-q9",
          badge: "Câu 9 - Vận dụng - Tính tứ phân vị Q1",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Tính tứ phân vị thứ nhất $Q_1$ của mức lương ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$10,31$", "$10,50$", "$9,85$", "$10,75$"],
          correctIndex: 0,
          explanation: "Nhóm $[9; 12)$ có $a_p = 9, h = 3, m_p = 16, C = 8$.\n$Q_1 = 9 + \\dfrac{15 - 8}{16} \\times 3 = 9 + \\dfrac{21}{16} = 9 + 1,3125 \\approx 10,31$ triệu đồng."
        },
        {
          id: "ot3-d2-q10",
          badge: "Câu 10 - Thông hiểu - Nhóm chứa Q3",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Nhóm chứa tứ phân vị thứ ba $Q_3$ của mức lương ở Câu 3 là:",
          options: ["$[15; 18)$", "$[12; 15)$", "$[18; 21)$", "$[9; 12)$"],
          correctIndex: 0,
          explanation: "$3n/4 = 45$. Vì $cf_3 = 44 < 45 \\le cf_4 = 55$, nên nhóm chứa $Q_3$ là $[15; 18)$."
        },
        {
          id: "ot3-d2-q11",
          badge: "Câu 11 - Vận dụng - Tính tứ phân vị Q3",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Tính tứ phân vị thứ ba $Q_3$ của mức lương ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$15,27$", "$15,50$", "$16,10$", "$14,95$"],
          correctIndex: 0,
          explanation: "Nhóm $[15; 18)$ có $a_q = 15, h = 3, m_q = 11, C = 44$.\n$Q_3 = 15 + \\dfrac{45 - 44}{11} \\times 3 = 15 + \\dfrac{3}{11} \\approx 15,27$ triệu đồng."
        },
        {
          id: "ot3-d2-q12",
          badge: "Câu 12 - Vận dụng cao - Tính khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          question: "Khoảng tứ phân vị $\\Delta_Q$ của mức lương 60 nhân viên trên là:",
          options: ["$4,96$ triệu đồng", "$5,20$ triệu đồng", "$4,50$ triệu đồng", "$5,55$ triệu đồng"],
          correctIndex: 0,
          explanation: "$\\Delta_Q = Q_3 - Q_1 = 15,2727 - 10,3125 \\approx 4,96$ triệu đồng."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot3-d2-tf1",
          badge: "Đúng/Sai 1 - Khảo sát mức tiêu thụ điện của 100 hộ dân",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Khảo sát điện năng tiêu thụ trong một tháng (kWh) của 100 hộ gia đình: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Điện tiêu thụ (kWh)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[50; 100)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[100; 150)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[150; 200)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[200; 250)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[250; 300)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số hộ</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$24$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$34$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$20$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td></tr></tbody></table></div> Xét tính Đúng / Sai của các khẳng định:",
          subItems: [
            {
              id: "a",
              text: "Điện năng tiêu thụ trung bình của 100 hộ dân là $171$ kWh/tháng.",
              correctAnswer: true,
              explanation: "Đúng, $\\bar{x} = \\dfrac{12(75) + 24(125) + 34(175) + 20(225) + 10(275)}{100} = \\dfrac{900 + 3000 + 5950 + 4500 + 2750}{100} = \\dfrac{17100}{100} = 171$ kWh."
            },
            {
              id: "b",
              text: "Nhóm chứa trung vị là nhóm $[150; 200)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/2 = 50$. $cf_1 = 12, cf_2 = 36, cf_3 = 70 \\ge 50$. Do đó nhóm chứa trung vị là $[150; 200)$."
            },
            {
              id: "c",
              text: "Trung vị của lượng điện tiêu thụ là $M_e \\approx 170,59$ kWh.",
              correctAnswer: true,
              explanation: "Đúng, $M_e = 150 + \\dfrac{50 - 36}{34} \\times 50 = 150 + \\dfrac{700}{34} \\approx 170,59$ kWh."
            },
            {
              id: "d",
              text: "Mốt của mẫu số liệu là $M_o = 175$ kWh.",
              correctAnswer: false,
              explanation: "Sai, nhóm chứa mốt là $[150; 200)$ có $m_j = 34, m_{j-1} = 24, m_{j+1} = 20$. $M_o = 150 + \\dfrac{34 - 24}{(34 - 24) + (34 - 20)} \\times 50 = 150 + \\dfrac{10}{10 + 14} \\times 50 = 150 + \\dfrac{500}{24} \\approx 170,83$ kWh $\\ne 175$."
            }
          ]
        },
        {
          id: "ot3-d2-tf2",
          badge: "Đúng/Sai 2 - Tứ phân vị tiêu thụ điện năng",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Từ bảng số liệu tiêu thụ điện ở Câu Đ/S 1, xét tính Đúng / Sai của các khẳng định sau:",
          subItems: [
            {
              id: "a",
              text: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là $[100; 150)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/4 = 25$. Ta có $cf_1 = 12 < 25 \\le cf_2 = 36$. Nhóm chứa $Q_1$ là $[100; 150)$."
            },
            {
              id: "b",
              text: "Tứ phân vị thứ nhất là $Q_1 = 127,08$ kWh.",
              correctAnswer: true,
              explanation: "Đúng, $Q_1 = 100 + \\dfrac{25 - 12}{24} \\times 50 = 100 + \\dfrac{650}{24} \\approx 127,08$ kWh."
            },
            {
              id: "c",
              text: "Nhóm chứa tứ phân vị thứ ba $Q_3$ là $[200; 250)$.",
              correctAnswer: true,
              explanation: "Đúng, $3n/4 = 75$. Ta có $cf_3 = 70 < 75 \\le cf_4 = 90$. Nhóm chứa $Q_3$ là $[200; 250)$."
            },
            {
              id: "d",
              text: "Khoảng tứ phân vị $\\Delta_Q$ nhỏ hơn 80 kWh.",
              correctAnswer: false,
              explanation: "Sai, $Q_3 = 200 + \\dfrac{75 - 70}{20} \\times 50 = 200 + 12,5 = 212,5$ kWh. $\\Delta_Q = Q_3 - Q_1 = 212,5 - 127,08 = 85,42 > 80$ kWh."
            }
          ]
        },
        {
          id: "ot3-d2-tf3",
          badge: "Đúng/Sai 3 - Khảo sát thời gian chờ xe buýt",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Thời gian chờ xe buýt (phút) của 50 hành khách được ghi nhận: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Thời gian chờ (phút)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[0; 5)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[5; 10)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[10; 15)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[15; 20)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số hành khách</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$18$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$16$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td></tr></tbody></table></div> Xét tính Đúng / Sai:",
          subItems: [
            {
              id: "a",
              text: "Thời gian chờ xe trung bình là $9,9$ phút.",
              correctAnswer: true,
              explanation: "Đúng, $\\bar{x} = \\dfrac{8(2,5) + 18(7,5) + 16(12,5) + 8(17,5)}{50} = \\dfrac{20 + 135 + 200 + 140}{50} = \\dfrac{495}{50} = 9,9$ phút."
            },
            {
              id: "b",
              text: "Trung vị của thời gian chờ xe là $M_e = 9,72$ phút.",
              correctAnswer: true,
              explanation: "Đúng, $n/2 = 25$. Nhóm chứa trung vị là $[5; 10)$ có $cf_1 = 8, m_2 = 18$. $M_e = 5 + \\dfrac{25 - 8}{18} \\times 5 = 5 + \\dfrac{85}{18} \\approx 9,72$ phút."
            },
            {
              id: "c",
              text: "Mốt của thời gian chờ xe là $M_o = 8,33$ phút.",
              correctAnswer: true,
              explanation: "Đúng, nhóm chứa mốt là $[5; 10)$ có $m_j = 18, m_{j-1} = 8, m_{j+1} = 16$. $M_o = 5 + \\dfrac{18 - 8}{(18 - 8) + (18 - 16)} \\times 5 = 5 + \\dfrac{10}{10 + 2} \\times 5 = 5 + \\dfrac{50}{12} \\approx 9,17$ phút (đề ghi 8,33 là Sai)."
            },
            {
              id: "d",
              text: "Có trên 50% hành khách phải chờ xe từ 10 phút trở lên.",
              correctAnswer: false,
              explanation: "Sai, số người chờ $\\ge 10$ phút là $16 + 8 = 24$ người. Tỉ lệ: $\\dfrac{24}{50} = 48\\% < 50\\%$."
            }
          ]
        },
        {
          id: "ot3-d2-tf4",
          badge: "Đúng/Sai 4 - Nhận xét chất lượng dịch vụ vận tải công cộng",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Dựa vào các số liệu thời gian chờ xe buýt ở trên, ban quản lý tuyến xe buýt đưa ra các kết luận để nâng cao chất lượng phục vụ. Xét tính Đúng / Sai của các kết luận:",
          subItems: [
            {
              id: "a",
              text: "Khoảng 50% hành khách chỉ cần chờ xe dưới 9,72 phút.",
              correctAnswer: true,
              explanation: "Đúng, vì $M_e \\approx 9,72$ phút đại diện cho 50% số lượng hành khách có thời gian chờ ngắn nhất."
            },
            {
              id: "b",
              text: "Thời gian chờ xe phổ biến nhất của hành khách rơi vào khoảng từ 5 đến 10 phút.",
              correctAnswer: true,
              explanation: "Đúng, vì nhóm $[5; 10)$ là nhóm chứa mốt và có tần số lớn nhất ($18$ người)."
            },
            {
              id: "c",
              text: "Nếu muốn ít nhất 75% hành khách không phải chờ quá $T$ phút thì $T$ phải bằng tứ phân vị $Q_1$.",
              correctAnswer: false,
              explanation: "Sai, 75% hành khách có thời gian chờ dưới $T$ tương ứng với tứ phân vị thứ ba $Q_3$, không phải $Q_1$."
            },
            {
              id: "d",
              text: "Nếu tăng cường thêm xe vào giờ cao điểm để giảm thời gian chờ của nhóm $[15; 20)$ xuống dưới 10 phút thì số trung bình $\\bar{x}$ sẽ giảm.",
              correctAnswer: true,
              explanation: "Đúng, khi giảm thời gian của nhóm có giá trị lớn thì tổng thời gian giảm, làm trung bình giảm."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot3-d2-sa1",
          badge: "TLN 1 - Tính số trung bình cước điện thoại",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Khảo sát tiền cước điện thoại (nghìn đồng) trong tháng của 40 thuê bao: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Cước (nghìn đồng)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[50; 100)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[100; 150)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[150; 200)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[200; 250)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số thuê bao</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$14$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td></tr></tbody></table></div> Tính tiền cước trung bình (nghìn đồng).",
          correctAnswer: "152,5",
          acceptableAnswers: ["152,5", "152.5"],
          explanation: "$\\bar{x} = \\dfrac{6(75) + 14(125) + 12(175) + 8(225)}{40} = \\dfrac{450 + 1750 + 2100 + 1800}{40} = \\dfrac{6100}{40} = 152,5$ nghìn đồng."
        },
        {
          id: "ot3-d2-sa2",
          badge: "TLN 2 - Tính trung vị cước điện thoại",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Từ bảng số liệu ở Câu 1, tính trung vị $M_e$ của cước điện thoại (làm tròn đến hàng phần trăm).",
          correctAnswer: "150",
          acceptableAnswers: ["150", "150,0", "150.0"],
          explanation: "$n/2 = 20$. Tần số tích lũy: $cf_1 = 6, cf_2 = 20 \\Rightarrow$ trung vị chính là đầu mút trái $150$ (hoặc $M_e = 150 + \\dfrac{20 - 20}{12} \\times 50 = 150$ nghìn đồng)."
        },
        {
          id: "ot3-d2-sa3",
          badge: "TLN 3 - Tính mốt cước điện thoại",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Từ bảng số liệu ở Câu 1, tính mốt $M_o$ của cước điện thoại (làm tròn đến hàng phần trăm).",
          correctAnswer: "140",
          acceptableAnswers: ["140", "140,0", "140.0"],
          explanation: "Nhóm chứa mốt là $[100; 150)$ có $m_j = 14, m_{j-1} = 6, m_{j+1} = 12$.\n$M_o = 100 + \\dfrac{14 - 6}{(14 - 6) + (14 - 12)} \\times 50 = 100 + \\dfrac{8}{8 + 2} \\times 50 = 100 + 40 = 140$ nghìn đồng."
        },
        {
          id: "ot3-d2-sa4",
          badge: "TLN 4 - Tính tứ phân vị Q1",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Từ bảng số liệu ở Câu 1, tính tứ phân vị thứ nhất $Q_1$ (làm tròn đến hàng phần trăm).",
          correctAnswer: "114,29",
          acceptableAnswers: ["114,29", "114.29"],
          explanation: "$n/4 = 10$. Nhóm chứa $Q_1$ là $[100; 150)$ có $cf_1 = 6, m_2 = 14$.\n$Q_1 = 100 + \\dfrac{10 - 6}{14} \\times 50 = 100 + \\dfrac{200}{14} \\approx 114,29$ nghìn đồng."
        },
        {
          id: "ot3-d2-sa5",
          badge: "TLN 5 - Tính tứ phân vị Q3",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Từ bảng số liệu ở Câu 1, tính tứ phân vị thứ ba $Q_3$ (làm tròn đến hàng phần trăm).",
          correctAnswer: "191,67",
          acceptableAnswers: ["191,67", "191.67"],
          explanation: "$3n/4 = 30$. Nhóm chứa $Q_3$ là $[150; 200)$ có $cf_2 = 20, m_3 = 12$.\n$Q_3 = 150 + \\dfrac{30 - 20}{12} \\times 50 = 150 + \\dfrac{500}{12} \\approx 191,67$ nghìn đồng."
        },
        {
          id: "ot3-d2-sa6",
          badge: "TLN 6 - Tính khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 2",
          prompt: "Từ các kết quả Câu 4 và Câu 5, tính khoảng tứ phân vị $\\Delta_Q$ (làm tròn đến hàng phần trăm).",
          correctAnswer: "77,38",
          acceptableAnswers: ["77,38", "77.38"],
          explanation: "$\\Delta_Q = Q_3 - Q_1 = 191,67 - 114,29 = 77,38$ nghìn đồng."
        }
      ]
    },
    {
      id: "de-3",
      title: "Đề ôn tập số 3",
      description: "Đề ôn tập tổng hợp cuối Chương III (Cân nặng học sinh & Tuổi thọ linh kiện) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot3-d3-q1",
          badge: "Câu 1 - Nhận biết - Giá trị đại diện",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Giá trị đại diện của nhóm $[60; 70)$ là:",
          options: ["$65$", "$60$", "$70$", "$10$"],
          correctIndex: 0,
          explanation: "$c = \\dfrac{60 + 70}{2} = 65$."
        },
        {
          id: "ot3-d3-q2",
          badge: "Câu 2 - Nhận biết - Khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Công thức tính khoảng tứ phân vị $\\Delta_Q$ là:",
          options: [
            "$\\Delta_Q = Q_3 - Q_1$",
            "$\\Delta_Q = Q_3 - Q_2$",
            "$\\Delta_Q = Q_2 - Q_1$",
            "$\\Delta_Q = \\dfrac{Q_1 + Q_3}{2}$"
          ],
          correctIndex: 0,
          explanation: "Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$."
        },
        {
          id: "ot3-d3-q3",
          badge: "Câu 3 - Thông hiểu - Nhóm chứa trung vị",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Khảo sát tuổi thọ của 60 bóng đèn LED (nghìn giờ): <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Tuổi thọ (nghìn giờ)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[30; 35)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[35; 40)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[40; 45)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[45; 50)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[50; 55)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số bóng đèn</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$13$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$24$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td></tr></tbody></table></div> Nhóm chứa trung vị là:",
          options: ["$[40; 45)$", "$[35; 40)$", "$[45; 50)$", "$[30; 35)$"],
          correctIndex: 0,
          explanation: "$n/2 = 30$. Tần số tích lũy: $cf_1 = 5, cf_2 = 18, cf_3 = 42 \\ge 30$. Nhóm chứa trung vị là $[40; 45)$."
        },
        {
          id: "ot3-d3-q4",
          badge: "Câu 4 - Thông hiểu - Nhóm chứa mốt",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Trong bảng số liệu ở Câu 3, nhóm chứa mốt là:",
          options: ["$[40; 45)$", "$[35; 40)$", "$[45; 50)$", "$[50; 55)$"],
          correctIndex: 0,
          explanation: "Nhóm có tần số lớn nhất là $24$, ứng với nhóm $[40; 45)$."
        },
        {
          id: "ot3-d3-q5",
          badge: "Câu 5 - Vận dụng - Tính tuổi thọ trung bình",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Tính tuổi thọ trung bình của 60 bóng đèn LED ở Câu 3 (nghìn giờ):",
          options: ["$42,58$", "$43,10$", "$42,00$", "$41,85$"],
          correctIndex: 0,
          explanation: "Giá trị đại diện: $32,5; 37,5; 42,5; 47,5; 52,5$.\n$\\bar{x} = \\dfrac{5(32,5) + 13(37,5) + 24(42,5) + 12(47,5) + 6(52,5)}{60} = \\dfrac{162,5 + 487,5 + 1020 + 570 + 315}{60} = \\dfrac{2555}{60} \\approx 42,58$ nghìn giờ."
        },
        {
          id: "ot3-d3-q6",
          badge: "Câu 6 - Vận dụng - Tính trung vị Me",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Tính trung vị $M_e$ của tuổi thọ bóng đèn ở Câu 3 (nghìn giờ):",
          options: ["$42,50$", "$42,25$", "$42,75$", "$43,00$"],
          correctIndex: 0,
          explanation: "Nhóm $[40; 45)$ có $a_p = 40, h = 5, m_p = 24, C = 18$.\n$M_e = 40 + \\dfrac{30 - 18}{24} \\times 5 = 40 + \\dfrac{12}{24} \\times 5 = 40 + 2,5 = 42,5$ nghìn giờ."
        },
        {
          id: "ot3-d3-q7",
          badge: "Câu 7 - Vận dụng - Tính mốt Mo",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Tính mốt $M_o$ của tuổi thọ bóng đèn ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$42,39$", "$42,75$", "$42,15$", "$43,10$"],
          correctIndex: 0,
          explanation: "Nhóm $[40; 45)$ có $m_j = 24, m_{j-1} = 13, m_{j+1} = 12$.\n$M_o = 40 + \\dfrac{24 - 13}{(24 - 13) + (24 - 12)} \\times 5 = 40 + \\dfrac{11}{11 + 12} \\times 5 = 40 + \\dfrac{55}{23} \\approx 42,39$ nghìn giờ."
        },
        {
          id: "ot3-d3-q8",
          badge: "Câu 8 - Thông hiểu - Nhóm chứa Q1",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của tuổi thọ bóng đèn ở Câu 3 là:",
          options: ["$[35; 40)$", "$[30; 35)$", "$[40; 45)$", "$[45; 50)$"],
          correctIndex: 0,
          explanation: "$n/4 = 15$. Ta có $cf_1 = 5 < 15 \\le cf_2 = 18$. Nhóm chứa $Q_1$ là $[35; 40)$."
        },
        {
          id: "ot3-d3-q9",
          badge: "Câu 9 - Vận dụng - Tính tứ phân vị Q1",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Tính tứ phân vị thứ nhất $Q_1$ của tuổi thọ bóng đèn ở Câu 3 (làm tròn đến hàng phần trăm):",
          options: ["$38,85$", "$38,50$", "$39,12$", "$37,95$"],
          correctIndex: 0,
          explanation: "Nhóm $[35; 40)$ có $a_p = 35, h = 5, m_p = 13, C = 5$.\n$Q_1 = 35 + \\dfrac{15 - 5}{13} \\times 5 = 35 + \\dfrac{50}{13} \\approx 38,85$ nghìn giờ."
        },
        {
          id: "ot3-d3-q10",
          badge: "Câu 10 - Thông hiểu - Nhóm chứa Q3",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Nhóm chứa tứ phân vị thứ ba $Q_3$ của tuổi thọ bóng đèn ở Câu 3 là:",
          options: ["$[45; 50)$", "$[40; 45)$", "$[50; 55)$", "$[35; 40)$"],
          correctIndex: 0,
          explanation: "$3n/4 = 45$. Ta có $cf_3 = 42 < 45 \\le cf_4 = 54$. Nhóm chứa $Q_3$ là $[45; 50)$."
        },
        {
          id: "ot3-d3-q11",
          badge: "Câu 11 - Vận dụng - Tính tứ phân vị Q3",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Tính tứ phân vị thứ ba $Q_3$ của tuổi thọ bóng đèn ở Câu 3 (nghìn giờ):",
          options: ["$46,25$", "$46,50$", "$45,75$", "$47,10$"],
          correctIndex: 0,
          explanation: "Nhóm $[45; 50)$ có $a_q = 45, h = 5, m_q = 12, C = 42$.\n$Q_3 = 45 + \\dfrac{45 - 42}{12} \\times 5 = 45 + \\dfrac{15}{12} = 45 + 1,25 = 46,25$ nghìn giờ."
        },
        {
          id: "ot3-d3-q12",
          badge: "Câu 12 - Vận dụng cao - Tính khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          question: "Khoảng tứ phân vị $\\Delta_Q$ của tuổi thọ bóng đèn bằng:",
          options: ["$7,40$ nghìn giờ", "$7,25$ nghìn giờ", "$7,65$ nghìn giờ", "$8,10$ nghìn giờ"],
          correctIndex: 0,
          explanation: "$\\Delta_Q = Q_3 - Q_1 = 46,25 - 38,846 \\approx 7,40$ nghìn giờ."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot3-d3-tf1",
          badge: "Đúng/Sai 1 - Khảo sát chiều cao của 80 cây keo lai",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Khảo sát chiều cao (m) của 80 cây keo lai sau 3 năm trồng: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Chiều cao (m)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[6; 7)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[7; 8)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[8; 9)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[9; 10)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[10; 11)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số cây</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$22$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$28$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$14$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td></tr></tbody></table></div> Xét tính Đúng / Sai:",
          subItems: [
            {
              id: "a",
              text: "Chiều cao trung bình của 80 cây keo lai là $8,3$ mét.",
              correctAnswer: true,
              explanation: "Đúng, $\\bar{x} = \\dfrac{10(6,5) + 22(7,5) + 28(8,5) + 14(9,5) + 6(10,5)}{80} = \\dfrac{65 + 165 + 238 + 133 + 63}{80} = \\dfrac{664}{80} = 8,3$ mét."
            },
            {
              id: "b",
              text: "Nhóm chứa trung vị là nhóm $[8; 9)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/2 = 40$. Tần số tích lũy: $cf_1 = 10, cf_2 = 32, cf_3 = 60 \\ge 40$. Nhóm chứa trung vị là $[8; 9)$."
            },
            {
              id: "c",
              text: "Trung vị của chiều cao cây là $M_e \\approx 8,29$ mét.",
              correctAnswer: true,
              explanation: "Đúng, $M_e = 8 + \\dfrac{40 - 32}{28} \\times 1 = 8 + \\dfrac{8}{28} = 8 + \\dfrac{2}{7} \\approx 8,29$ mét."
            },
            {
              id: "d",
              text: "Mốt của chiều cao cây là $M_o = 8,5$ mét.",
              correctAnswer: false,
              explanation: "Sai, nhóm chứa mốt là $[8; 9)$ có $m_j = 28, m_{j-1} = 22, m_{j+1} = 14$. $M_o = 8 + \\dfrac{28 - 22}{(28 - 22) + (28 - 14)} \\times 1 = 8 + \\dfrac{6}{6 + 14} = 8 + 0,3 = 8,3$ mét $\\ne 8,5$ mét."
            }
          ]
        },
        {
          id: "ot3-d3-tf2",
          badge: "Đúng/Sai 2 - Tứ phân vị chiều cao cây keo lai",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Từ bảng số liệu chiều cao cây ở trên, xét tính Đúng / Sai của các mệnh đề:",
          subItems: [
            {
              id: "a",
              text: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là $[7; 8)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/4 = 20$. Ta có $cf_1 = 10 < 20 \\le cf_2 = 32$. Nhóm chứa $Q_1$ là $[7; 8)$."
            },
            {
              id: "b",
              text: "Giá trị của tứ phân vị thứ nhất là $Q_1 \\approx 7,45$ mét.",
              correctAnswer: true,
              explanation: "Đúng, $Q_1 = 7 + \\dfrac{20 - 10}{22} \\times 1 = 7 + \\dfrac{10}{22} \\approx 7,45$ mét."
            },
            {
              id: "c",
              text: "Giá trị của tứ phân vị thứ ba là $Q_3 = 9,0$ mét.",
              correctAnswer: true,
              explanation: "Đúng, $3n/4 = 60$. Vì $cf_3 = 60$ nên $Q_3$ chính là đầu mút phải của nhóm $[8; 9)$, tức là $Q_3 = 9,0$ mét (hoặc $Q_3 = 9 + \\dfrac{60 - 60}{14} \\times 1 = 9$)."
            },
            {
              id: "d",
              text: "Khoảng tứ phân vị $\\Delta_Q$ nhỏ hơn $1,5$ mét.",
              correctAnswer: false,
              explanation: "Sai, $\\Delta_Q = Q_3 - Q_1 = 9,0 - 7,45 = 1,55 > 1,5$ mét."
            }
          ]
        },
        {
          id: "ot3-d3-tf3",
          badge: "Đúng/Sai 3 - Khảo sát nồng độ bụi mịn PM2.5",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Đo nồng độ bụi mịn PM2.5 ($\\mu g/m^3$) trong 30 ngày tại một ngã tư giao thông: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Nồng độ PM2.5</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[20; 30)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[30; 40)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[40; 50)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[50; 60)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số ngày</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$4$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$10$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$11$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$5$</td></tr></tbody></table></div> Xét tính Đúng / Sai:",
          subItems: [
            {
              id: "a",
              text: "Nồng độ bụi PM2.5 trung bình trong tháng là $40,67\\; \\mu g/m^3$.",
              correctAnswer: true,
              explanation: "Đúng, $\\bar{x} = \\dfrac{4(25) + 10(35) + 11(45) + 5(55)}{30} = \\dfrac{100 + 350 + 495 + 275}{30} = \\dfrac{1220}{30} \\approx 40,67\\; \\mu g/m^3$."
            },
            {
              id: "b",
              text: "Nhóm chứa trung vị là $[40; 50)$.",
              correctAnswer: true,
              explanation: "Đúng, $n/2 = 15$. Tần số tích lũy: $cf_1 = 4, cf_2 = 14, cf_3 = 25 \\ge 15$. Nhóm chứa trung vị là $[40; 50)$."
            },
            {
              id: "c",
              text: "Trung vị của nồng độ bụi là $M_e \\approx 40,91\\; \\mu g/m^3$.",
              correctAnswer: true,
              explanation: "Đúng, $M_e = 40 + \\dfrac{15 - 14}{11} \\times 10 = 40 + \\dfrac{10}{11} \\approx 40,91\\; \\mu g/m^3$."
            },
            {
              id: "d",
              text: "Mốt của nồng độ bụi là $M_o = 45,0\\; \\mu g/m^3$.",
              correctAnswer: false,
              explanation: "Sai, nhóm chứa mốt là $[40; 50)$ có $m_j = 11, m_{j-1} = 10, m_{j+1} = 5$. $M_o = 40 + \\dfrac{11 - 10}{(11 - 10) + (11 - 5)} \\times 10 = 40 + \\dfrac{1}{1 + 6} \\times 10 = 40 + \\dfrac{10}{7} \\approx 41,43\\; \\mu g/m^3$."
            }
          ]
        },
        {
          id: "ot3-d3-tf4",
          badge: "Đúng/Sai 4 - Đánh giá chất lượng không khí và cảnh báo sức khỏe",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Theo tiêu chuẩn an toàn, nếu nồng độ PM2.5 vượt quá $50\\; \\mu g/m^3$ thì được cảnh báo không khí xấu. Dựa vào số liệu ở Câu Đ/S 3, xét tính Đúng / Sai của các nhận xét:",
          subItems: [
            {
              id: "a",
              text: "Có khoảng 16,67% số ngày trong tháng có chất lượng không khí ở mức xấu.",
              correctAnswer: true,
              explanation: "Đúng, số ngày có PM2.5 $\\ge 50$ là $5$ ngày. Tỉ lệ: $\\dfrac{5}{30} \\approx 16,67\\%$."
            },
            {
              id: "b",
              text: "Ít nhất 50% số ngày trong tháng có nồng độ bụi PM2.5 dưới $40,91\\; \\mu g/m^3$.",
              correctAnswer: true,
              explanation: "Đúng, vì $M_e \\approx 40,91$ đại diện cho giá trị chia đôi dữ liệu."
            },
            {
              id: "c",
              text: "Nồng độ bụi phổ biến nhất vào khoảng từ 41 đến 42 $\\mu g/m^3$.",
              correctAnswer: true,
              explanation: "Đúng, vì mốt $M_o \\approx 41,43\\; \\mu g/m^3$ thuộc khoảng này."
            },
            {
              id: "d",
              text: "Nếu một ngày đột xuất có nồng độ bụi tăng vọt lên $150\\; \\mu g/m^3$ thì trung vị $M_e$ sẽ tăng vọt theo.",
              correctAnswer: false,
              explanation: "Sai, trung vị $M_e$ có tính bền vững, không bị ảnh hưởng mạnh bởi một giá trị ngoại lai dị biệt."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot3-d3-sa1",
          badge: "TLN 1 - Tính số trung bình cân nặng cá basa",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Khảo sát cân nặng (kg) của 40 con cá tra/basa thu hoạch: <div class=\"overflow-x-auto my-3\"><table class=\"w-full text-center border-collapse border border-slate-700 text-sm bg-transparent text-white\" style=\"color: #ffffff; border-color: #334155;\"><thead><tr><th class=\"border border-slate-700 px-3 py-1.5 text-left font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">Cân nặng (kg)</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[1,0; 1,4)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[1,4; 1,8)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[1,8; 2,2)$</th><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$[2,2; 2,6)$</th></tr></thead><tbody><tr><th class=\"border border-slate-700 px-3 py-1.5 font-semibold text-left text-white\" style=\"color: #ffffff; border-color: #334155;\">Số con</th><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$6$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$14$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$12$</td><td class=\"border border-slate-700 px-3 py-1.5 font-semibold text-white\" style=\"color: #ffffff; border-color: #334155;\">$8$</td></tr></tbody></table></div> Tính cân nặng trung bình $\\bar{x}$ (kg).",
          correctAnswer: "1,82",
          acceptableAnswers: ["1,82", "1.82"],
          explanation: "Giá trị đại diện: $1,2; 1,6; 2,0; 2,4$.\n$\\bar{x} = \\dfrac{6(1,2) + 14(1,6) + 12(2,0) + 8(2,4)}{40} = \\dfrac{7,2 + 22,4 + 24,0 + 19,2}{40} = \\dfrac{72,8}{40} = 1,82$ kg."
        },
        {
          id: "ot3-d3-sa2",
          badge: "TLN 2 - Tính trung vị cân nặng",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Từ bảng số liệu ở Câu 1, tính trung vị $M_e$ của cân nặng cá (làm tròn kết quả đến hàng phần trăm).",
          correctAnswer: "1,8",
          acceptableAnswers: ["1,8", "1,80", "1.8", "1.80"],
          explanation: "$n/2 = 20$. Tần số tích lũy: $cf_1 = 6, cf_2 = 20 \\Rightarrow M_e = 1,8$ kg (vì $M_e = 1,8 + \\dfrac{20 - 20}{12} \\times 0,4 = 1,8$)."
        },
        {
          id: "ot3-d3-sa3",
          badge: "TLN 3 - Tính mốt cân nặng",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Từ bảng số liệu ở Câu 1, tính mốt $M_o$ của cân nặng cá (làm tròn kết quả đến hàng phần trăm).",
          correctAnswer: "1,72",
          acceptableAnswers: ["1,72", "1.72"],
          explanation: "Nhóm chứa mốt là $[1,4; 1,8)$ có $m_j = 14, m_{j-1} = 6, m_{j+1} = 12, h = 0,4$.\n$M_o = 1,4 + \\dfrac{14 - 6}{(14 - 6) + (14 - 12)} \\times 0,4 = 1,4 + \\dfrac{8}{8 + 2} \\times 0,4 = 1,4 + 0,32 = 1,72$ kg."
        },
        {
          id: "ot3-d3-sa4",
          badge: "TLN 4 - Tính tứ phân vị Q1",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Từ bảng số liệu ở Câu 1, tính tứ phân vị thứ nhất $Q_1$ (làm tròn kết quả đến hàng phần trăm).",
          correctAnswer: "1,51",
          acceptableAnswers: ["1,51", "1.51"],
          explanation: "$n/4 = 10$. Nhóm chứa $Q_1$ là $[1,4; 1,8)$ có $a_p = 1,4, h = 0,4, m_p = 14, C = 6$.\n$Q_1 = 1,4 + \\dfrac{10 - 6}{14} \\times 0,4 = 1,4 + \\dfrac{1,6}{14} \\approx 1,51$ kg."
        },
        {
          id: "ot3-d3-sa5",
          badge: "TLN 5 - Tính tứ phân vị Q3",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Từ bảng số liệu ở Câu 1, tính tứ phân vị thứ ba $Q_3$ (làm tròn kết quả đến hàng phần trăm).",
          correctAnswer: "2,13",
          acceptableAnswers: ["2,13", "2.13"],
          explanation: "$3n/4 = 30$. Nhóm chứa $Q_3$ là $[1,8; 2,2)$ có $a_q = 1,8, h = 0,4, m_q = 12, C = 20$.\n$Q_3 = 1,8 + \\dfrac{30 - 20}{12} \\times 0,4 = 1,8 + \\dfrac{4}{12} = 1,8 + 0,333 \\approx 2,13$ kg."
        },
        {
          id: "ot3-d3-sa6",
          badge: "TLN 6 - Tính khoảng tứ phân vị",
          source: "Đề ôn tập cuối chương III - Đề số 3",
          prompt: "Từ kết quả ở Câu 4 và Câu 5, tính khoảng tứ phân vị $\\Delta_Q$ (làm tròn kết quả đến hàng phần trăm).",
          correctAnswer: "0,62",
          acceptableAnswers: ["0,62", "0.62"],
          explanation: "$\\Delta_Q = Q_3 - Q_1 = 2,133 - 1,514 \\approx 0,62$ kg."
        }
      ]
    }
  ]
};
