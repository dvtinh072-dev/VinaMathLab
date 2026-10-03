import { QuizQuestion } from "@/data/allGradesLessonsData";

/**
 * BỘ ĐỀ LUYỆN TẬP THÊM (AI PRACTICE) - CHƯƠNG V TOÁN 6
 * Toàn bộ 11 câu hỏi còn lại trích từ tài liệu gốc:
 * E:\Anti\Tài Liệu Lớp 6\TRẮC NGHIỆM TOÁN 6 BA BỘ SÁCH WORD\CHUONG 4\TN6 CIV V Bai 21.docx (Câu 21 đến Câu 31)
 */
export const chapter5AiPracticeData: { [lessonId: string]: QuizQuestion[] } = {
  "t6-b21-hinh-co-truc-doi-xung": [
    {
      id: "ai-21.21",
      badge: "Luyện tập AI 21",
      isAiGenerated: true,
      source: "Câu 21 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Một hình hoa văn trang trí hình ngôi sao năm cánh đều (hoặc bông hoa 5 cánh đều) có bao nhiêu trục đối xứng?",
      options: [
        "5 trục đối xứng",
        "4 trục đối xứng",
        "2 trục đối xứng",
        "Vô số trục đối xứng"
      ],
      correctIndex: 0,
      explanation: "Hình hoa văn 5 cánh đều (hoặc ngôi sao 5 cánh đều) có đúng 5 trục đối xứng. Mỗi trục đối xứng đi qua một đỉnh cánh hoa và khe lõm đối diện tương ứng."
    },
    {
      id: "ai-21.22",
      badge: "Luyện tập AI 22",
      isAiGenerated: true,
      source: "Câu 22 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Trong các hình sau: Hình 1 (Hình chữ nhật), Hình 2 (Hình vuông), Hình 3 (Hình thoi), Hình 4 (Hình hoa thị 4 cánh đều). Những hình nào có ĐÚNG 4 trục đối xứng?",
      options: [
        "Hình 2 và Hình 4",
        "Hình 1, Hình 2 và Hình 4",
        "Hình 1, Hình 2 và Hình 3",
        "Hình 2, Hình 3 và Hình 4"
      ],
      correctIndex: 0,
      explanation: "Hình vuông (Hình 2) và hình hoa thị 4 cánh đều (Hình 4) có đúng 4 trục đối xứng. Trong khi đó, hình chữ nhật (Hình 1) và hình thoi (Hình 3) chỉ có đúng 2 trục đối xứng."
    },
    {
      id: "ai-21.23",
      badge: "Luyện tập AI 23",
      isAiGenerated: true,
      source: "Câu 23 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Bạn Bảo vẽ một chữ cái in hoa lên tờ giấy, gấp đôi tờ giấy lại theo đường nếp gấp nét đứt nằm ngang và dùng kéo cắt theo đường viền bao quanh. Khi bạn Bảo mở tờ giấy ra, bạn thu được chữ cái in hoa nào?",
      options: [
        "Chữ D",
        "Chữ B",
        "Chữ O",
        "Chữ C"
      ],
      correctIndex: 0,
      explanation: "Chữ D có một trục đối xứng nằm ngang. Khi gấp đôi giấy theo trục ngang và cắt nửa vòm cong kín cùng phần thẳng đứng sát mép gấp, khi mở giấy ra sẽ thu được chữ D hoàn chỉnh."
    },
    {
      id: "ai-21.24",
      badge: "Luyện tập AI 24",
      isAiGenerated: true,
      source: "Câu 24 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Bạn Chi vẽ 3 chữ cái in hoa lên các tờ giấy, gấp đôi lại theo đường nét đứt và cắt theo đường viền. Khi mở giấy ra, bạn Chi thu được bộ 3 chữ cái in hoa nào sau đây?",
      options: [
        "Bộ ba chữ cái T, M, E",
        "Bộ ba chữ cái I, N, H",
        "Bộ ba chữ cái I, M, E",
        "Bộ ba chữ cái T, N, F"
      ],
      correctIndex: 0,
      explanation: "Chữ T có trục đối xứng dọc, chữ M có trục đối xứng dọc, chữ E có trục đối xứng ngang. Cả 3 chữ cái này đều có trục đối xứng và có thể cắt được dễ dàng bằng phương pháp gấp đôi giấy. (Chữ N và F không có trục đối xứng nên không thể cắt bằng cách gấp đôi thông thường)."
    },
    {
      id: "ai-21.25",
      badge: "Luyện tập AI 25",
      isAiGenerated: true,
      source: "Câu 25 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Hình biểu tượng dấu cộng (chữ thập đỏ) có các nhánh bằng nhau có bao nhiêu trục đối xứng?",
      options: [
        "4 trục đối xứng",
        "1 trục đối xứng",
        "2 trục đối xứng",
        "Vô số trục đối xứng"
      ],
      correctIndex: 0,
      explanation: "Hình chữ thập đều gồm 4 nhánh bằng nhau có 4 trục đối xứng: 2 trục thẳng đứng và nằm ngang chia đôi các cánh đối diện, cùng 2 trục chéo nghiêng góc $45^\circ$ đi qua các góc lõm."
    },
    {
      id: "ai-21.26",
      badge: "Luyện tập AI 26",
      isAiGenerated: true,
      source: "Câu 26 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Họa tiết trang trí dạng hoa thị 4 cánh cong đều trong hình vuông có bao nhiêu trục đối xứng?",
      options: [
        "4 trục đối xứng",
        "1 trục đối xứng",
        "2 trục đối xứng",
        "Vô số trục đối xứng"
      ],
      correctIndex: 0,
      explanation: "Họa tiết hoa thị 4 cánh đều có cấu trúc đối xứng tương tự hình vuông, gồm 2 trục song song với các cạnh và 2 trục theo đường chéo, tổng cộng có 4 trục đối xứng."
    },
    {
      id: "ai-21.27",
      badge: "Luyện tập AI 27",
      isAiGenerated: true,
      source: "Câu 27 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Trong các chi tiết máy kỹ thuật sau đây: Chi tiết CT1 (bánh đĩa tròn có 4 lỗ cân đối), Chi tiết CT2 (trục ren đối xứng), Chi tiết CT3 (móc truyền động có rãnh lệch sang một bên), Chi tiết CT4 (bu-lông đai ốc lục giác). Chi tiết nào KHÔNG có trục đối xứng?",
      options: [
        "Chi tiết CT3",
        "Chi tiết CT1",
        "Chi tiết CT2",
        "Chi tiết CT4"
      ],
      correctIndex: 0,
      explanation: "Chi tiết máy CT3 có rãnh khoét lệch nghiêng sang một bên khiến hai nửa không thể chồng khít lên nhau theo bất kỳ đường thẳng nào, do đó chi tiết CT3 không có trục đối xứng."
    },
    {
      id: "ai-21.28",
      badge: "Luyện tập AI 28",
      isAiGenerated: true,
      source: "Câu 28 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Trong các hình ảnh biểu tượng sau đây, hình ảnh nào KHÔNG có trục đối xứng?",
      options: [
        "Hình Huy hiệu Đoàn TNCS Hồ Chí Minh",
        "Hình Quốc huy Việt Nam",
        "Hình Huy hiệu Đội TNTP Hồ Chí Minh",
        "Hình lá cờ Tổ quốc Việt Nam"
      ],
      correctIndex: 0,
      explanation: "Huy hiệu Đoàn TNCS Hồ Chí Minh có hình cánh tay cầm lá cờ đỏ sao vàng vươn về phía trước theo hướng chéo nghiêng, là hình bất đối xứng nên không có trục đối xứng. Trong khi đó, Quốc huy, cờ Tổ quốc và Huy hiệu Đội đều có bố cục đối xứng trục thẳng đứng."
    },
    {
      id: "ai-21.29",
      badge: "Luyện tập AI 29",
      isAiGenerated: true,
      source: "Câu 29 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Trong các hình ảnh về thực vật trong tự nhiên sau đây, hình nào KHÔNG có trục đối xứng?",
      options: [
        "Hình bông hoa thủy vu (cánh hoa cuộn vát lệch)",
        "Hình lá của cây cỏ bốn lá cân đối",
        "Hình cây đền phật (lá mọc đối xứng)",
        "Hình bông hoa lan cẩm cù (5 cánh đều)"
      ],
      correctIndex: 0,
      explanation: "Bông hoa thủy vu (hoa rum) có cánh hoa cuộn xoắn hình loa kèn với phần đuôi nhọn luôn uốn vát lệch về một phía, do đó bông hoa thủy vu không có trục đối xứng. Các hình còn lại đều có tính đối xứng."
    },
    {
      id: "ai-21.30",
      badge: "Luyện tập AI 30",
      isAiGenerated: true,
      source: "Câu 30 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Trong các công trình kiến trúc nổi tiếng sau đây, công trình nào KHÔNG có trục đối xứng?",
      options: [
        "Cổng tam quan khu Lăng Khải Định (Huế)",
        "Tháp Eiffel ở Paris (Pháp)",
        "Tòa nhà Bộ Ngoại giao Nga ở Thủ đô Moscow",
        "Tháp Rùa ở Hồ Gươm (Hà Nội)"
      ],
      correctIndex: 0,
      explanation: "Cổng tam quan khu Lăng Khải Định có các tháp cột, tượng đá và hệ thống bậc tam cấp phân bố phi đối xứng ở góc nhìn toàn cảnh, nên không có trục đối xứng. Tháp Eiffel, Tòa nhà Bộ Ngoại giao Nga và Tháp Rùa đều là những công trình kiến trúc đối xứng trục mẫu mực."
    },
    {
      id: "ai-21.31",
      badge: "Luyện tập AI 31",
      isAiGenerated: true,
      source: "Câu 31 - TN6 CIV V Bài 21 (Thư mục Anti/Tài Liệu Lớp 6)",
      question: "Từ 4 hình tam giác vuông bằng nhau (có hai cạnh góc vuông có độ dài khác nhau), ta có thể ghép lại thành bao nhiêu hình có trục đối xứng?",
      options: [
        "Nhiều hơn 6 cách",
        "4 cách",
        "5 cách",
        "6 cách"
      ],
      correctIndex: 0,
      explanation: "Có nhiều hơn 6 cách ghép 4 hình tam giác vuông bằng nhau thành một hình có trục đối xứng. Chẳng hạn: ghép thành hình chữ nhật (2 trục), hình thoi (2 trục), hình tam giác cân lớn (1 trục), hình cánh diều (1 trục), hình thang cân (1 trục), hình chữ thập đối xứng (4 trục), hình mũi tên đối xứng (1 trục)..."
    }
  ]
};
