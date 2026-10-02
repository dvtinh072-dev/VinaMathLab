import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion, ExamSetItem } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

// ============================================================================
// BÀI TẬP CUỐI CHƯƠNG II: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN
// TOÁN 12 - BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// CẤU TRÚC ĐỀ THI TỐT NGHIỆP THPT & ĐÁNH GIÁ NĂNG LỰC TỪ NĂM 2025
// ============================================================================

export const GRADE_12_CHAPTER_2_REVIEW_LESSON: DetailedLessonData = {
  id: "t12-on-tap-chuong-2",
  lessonNumber: 0,
  title: "Bài tập cuối chương II",
  bookChapter: "Chương II: Vectơ và hệ tọa độ trong không gian (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tổng kết thực chiến: Làm chủ Vectơ không gian, Tọa độ hóa Oxyz và Tối ưu hóa các bài toán đa chiều thực tế",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, trong Chương II chúng ta đã nghiên cứu về vectơ không gian, quy tắc hình hộp, hệ trục Oxyz và biểu thức tọa độ các phép toán. Khi làm đề tổng hợp cuối chương, làm sao để chuyển đổi linh hoạt giữa hình học thuần túy và phương pháp tọa độ ạ?",
      visualGraphic: "vector",
      mathNote: "\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}, \\quad \\vec{u} = (x; y; z)"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Điểm mấu chốt của Chương II là: nếu bài toán cho hình lập phương, hình hộp chữ nhật hoặc tứ diện có 3 cạnh đôi một vuông góc, ta nên chọn một đỉnh thích hợp làm gốc O và các cạnh làm các trục Ox, Oy, Oz để tọa độ hóa! Mọi tính chất vuông góc, góc, khoảng cách sẽ chuyển về phép tính tích vô hướng rất nhẹ nhàng!",
      visualGraphic: "box",
      mathNote: "\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0, \\quad \\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Lan",
      avatar: "👩‍🎓",
      speech: "Dạ thưa Thầy, trong phần bài tập cuối chương II này cũng có đầy đủ 3 Đề thi thử chuẩn cấu trúc Bộ GD&ĐT từ năm 2025 đúng không ạ?",
      visualGraphic: "graph",
      mathNote: "3 \\text{ Đề ôn tập chuẩn cấu trúc (12 câu TN + 4 câu Đ/S + 6 câu Trả lời ngắn)}"
    }
  ],
  interactiveType: "vector",
  youtubeVideoId: "bO1f1M9zR08",
  youtubeVideoTitle: "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương II - Toán 12 KNTT",
  youtubeVideos: [
    {
      id: "bO1f1M9zR08",
      title: "Tiết 1: Hệ thống hóa kiến thức Vectơ & Tọa độ trong không gian Oxyz"
    },
    {
      id: "kN3v8Pq2W54",
      title: "Tiết 2: Chữa bài tập Đúng/Sai, Trả lời ngắn & Bài toán thực tế liên môn"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.ot2.1",
      title: "Ví dụ 1: Quy tắc hình hộp",
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng vectơ nào sau đây?",
      options: [
        "$\\overrightarrow{AC'}$",
        "$\\overrightarrow{A'C}$",
        "$\\overrightarrow{CA'}$",
        "$\\overrightarrow{BD'}$"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc hình hộp trong không gian: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$ (vectơ đường chéo xuất phát từ đỉnh chung $A$)."
    },
    {
      id: "vq-12.ot2.2",
      title: "Ví dụ 2: Hai vectơ vuông góc trong Oxyz",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; m; -1)$. Tìm $m$ để hai vectơ vuông góc.",
      options: [
        "$m = -1$",
        "$m = 1$",
        "$m = 5$",
        "$m = -5$"
      ],
      correctIndex: 0,
      explanation: "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng $0$: $\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(m) + 3(-1) = 2 - m - 3 = -1 - m = 0 \\Leftrightarrow m = -1$."
    },
    {
      id: "vq-12.ot2.3",
      title: "Ví dụ 3: Cân bằng lực không gian",
      question: "Ba lực $\\vec{F}_1 = (10; 20; 30)\\text{ N}$, $\\vec{F}_2 = (30; -10; 10)\\text{ N}$ và $\\vec{F}_3 = (x; y; z)\\text{ N}$ cùng tác dụng vào một chất điểm làm chất điểm cân bằng. Tọa độ của lực $\\vec{F}_3$ là:",
      options: [
        "$(-40; -10; -40)$",
        "$(40; 10; 40)$",
        "$(-20; -30; -20)$",
        "$(20; 10; 20)$"
      ],
      correctIndex: 0,
      explanation: "Chất điểm cân bằng khi $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -(40; 10; 40) = (-40; -10; -40)$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Vectơ trong không gian & Các quy tắc tính toán",
      points: [
        "Vectơ trong không gian là một đoạn thẳng có hướng. Các khái niệm phương, hướng, độ dài, vectơ bằng nhau, vectơ đối và vectơ không được định nghĩa tương tự trong mặt phẳng.",
        "Quy tắc ba điểm: Với ba điểm $A, B, C$ bất kì: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ và $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$.",
        "Quy tắc hình bình hành: Nếu $ABCD$ là hình bình hành thì $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.",
        "Quy tắc hình hộp: Cho hình hộp $ABCD.A'B'C'D'$, ta có: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$.",
        "Hệ thức trung điểm & Trọng tâm:\n- $M$ là trung điểm đoạn thẳng $AB \\iff \\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0} \\iff \\overrightarrow{OM} = \\frac{1}{2}(\\overrightarrow{OA} + \\overrightarrow{OB})$ với mọi điểm $O$.\n- $G$ là trọng tâm tam giác $ABC \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{OG} = \\frac{1}{3}(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC})$.\n- $G$ là trọng tâm tứ diện $ABCD \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0} \\iff \\overrightarrow{OG} = \\frac{1}{4}(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD})$.",
        "Điều kiện ba vectơ đồng phẳng: Cho hai vectơ không cùng phương $\\vec{a}$ và $\\vec{b}$. Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng khi và chỉ khi tồn tại duy nhất cặp số $(m; n)$ sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$."
      ],
      exampleProblem: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh rằng: $\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.",
      exampleSolution: "Ta có:\n$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$.\n$\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$.\nCộng vế với vế hai đẳng thức trên:\n$2\\overrightarrow{MN} = (\\overrightarrow{MA} + \\overrightarrow{MB}) + (\\overrightarrow{AD} + \\overrightarrow{BC}) + (\\overrightarrow{DN} + \\overrightarrow{CN})$.\nVì $M$ là trung điểm của $AB$ nên $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$.\nVì $N$ là trung điểm của $CD$ nên $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$.\nDo đó: $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC} \\implies \\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$ (đpcm)."
    },
    {
      index: "2",
      title: "2. Hệ trục tọa độ Oxyz & Tọa độ điểm",
      points: [
        "Hệ trục tọa độ $Oxyz$ gồm ba trục $Ox, Oy, Oz$ đôi một vuông góc tại gốc $O$, với ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ thỏa mãn: $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$ và $\\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$.",
        "Tọa độ của điểm: $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff M(x; y; z)$. Khi đó $x$ là hoành độ, $y$ là tung độ, $z$ là cao độ.",
        "Hình chiếu vuông góc của điểm $M(x; y; z)$:\n- Lên các trục tọa độ: Lên $Ox$ là $M_1(x; 0; 0)$; lên $Oy$ là $M_2(0; y; 0)$; lên $Oz$ là $M_3(0; 0; z)$.\n- Lên các mặt phẳng tọa độ: Lên $(Oxy)$ là $M_{xy}(x; y; 0)$; lên $(Oyz)$ là $M_{yz}(0; y; z)$; lên $(Ozx)$ là $M_{zx}(x; 0; z)$.",
        "Điểm đối xứng của $M(x; y; z)$:\n- Qua gốc $O$ là $M'(-x; -y; -z)$.\n- Qua trục $Ox$ là $M'(x; -y; -z)$; qua trục $Oy$ là $M'(-x; y; -z)$; qua trục $Oz$ là $M'(-x; -y; z)$.\n- Qua mặt phẳng $(Oxy)$ là $M'(x; y; -z)$; qua $(Oyz)$ là $M'(-x; y; z)$; qua $(Ozx)$ là $M'(x; -y; z)$."
      ],
      exampleProblem: "Trong không gian $Oxyz$, cho điểm $A(3; -2; 5)$. Tìm tọa độ hình chiếu vuông góc của $A$ lên mặt phẳng $(Oxy)$ và tọa độ điểm $A'$ đối xứng với $A$ qua trục $Oy$.",
      exampleSolution: "- Hình chiếu vuông góc của $A(3; -2; 5)$ lên mặt phẳng $(Oxy)$ có cao độ $z = 0$, giữ nguyên hoành độ và tung độ, do đó có tọa độ là $H(3; -2; 0)$.\n- Điểm $A'$ đối xứng với $A$ qua trục $Oy$ giữ nguyên tung độ $y = -2$, đổi dấu hoành độ và cao độ: $x_{A'} = -3, z_{A'} = -5$. Vậy $A'(-3; -2; -5)$."
    },
    {
      index: "3",
      title: "3. Biểu thức tọa độ của các phép toán vectơ",
      points: [
        "Cho $\\vec{u} = (x_1; y_1; z_1)$, $\\vec{v} = (x_2; y_2; z_2)$ và số thực $k \\in \\mathbb{R}$:\n- Tổng: $\\vec{u} + \\vec{v} = (x_1 + x_2; y_1 + y_2; z_1 + z_2)$.\n- Hiệu: $\\vec{u} - \\vec{v} = (x_1 - x_2; y_1 - y_2; z_1 - z_2)$.\n- Tích với một số: $k\\vec{u} = (kx_1; ky_1; kz_1)$.",
        "Tọa độ vectơ nối hai điểm: Cho $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ thì $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.",
        "Tọa độ trung điểm và trọng tâm:\n- Trung điểm $M$ của $AB$: $x_M = \\frac{x_A+x_B}{2}, y_M = \\frac{y_A+y_B}{2}, z_M = \\frac{z_A+z_B}{2}$.\n- Trọng tâm $G$ của tam giác $ABC$: $x_G = \\frac{x_A+x_B+x_C}{3}, y_G = \\frac{y_A+y_B+y_C}{3}, z_G = \\frac{z_A+z_B+z_C}{3}$.\n- Trọng tâm $G$ của tứ diện $ABCD$: $x_G = \\frac{x_A+x_B+x_C+x_D}{4}, y_G = \\frac{y_A+y_B+y_C+y_D}{4}, z_G = \\frac{z_A+z_B+z_C+z_D}{4}$.",
        "Điều kiện cùng phương: $\\vec{u}$ cùng phương $\\vec{v} \\ne \\vec{0} \\iff \\vec{u} = k\\vec{v} \\iff \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2} = k$ (khi mẫu khác 0). Ba điểm $A, B, C$ thẳng hàng khi $\\overrightarrow{AB}$ cùng phương $\\overrightarrow{AC}$."
      ],
      exampleProblem: "Cho $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Tìm tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.",
      exampleSolution: "Tứ giác $ABCD$ là hình bình hành $\\iff \\overrightarrow{AB} = \\overrightarrow{DC}$.\nTa có $\\overrightarrow{AB} = (2 - 1; -1 - 2; 3 - (-1)) = (1; -3; 4)$.\nGọi $D(x; y; z)$, ta có $\\overrightarrow{DC} = (-4 - x; 7 - y; 5 - z)$.\n$\\overrightarrow{AB} = \\overrightarrow{DC} \\iff \\begin{cases} -4 - x = 1 \\\\ 7 - y = -3 \\\\ 5 - z = 4 \\end{cases} \\iff \\begin{cases} x = -5 \\\\ y = 10 \\\\ z = 1 \\end{cases}$. Vậy $D(-5; 10; 1)$."
    },
    {
      index: "4",
      title: "4. Tích vô hướng, Độ dài và Góc giữa hai vectơ",
      points: [
        "Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.",
        "Độ dài của vectơ: $|\\vec{u}| = \\sqrt{\\vec{u}^2} = \\sqrt{x_1^2 + y_1^2 + z_1^2}$.",
        "Khoảng cách giữa hai điểm: $AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.",
        "Hai vectơ vuông góc: $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.",
        "Cosin góc giữa hai vectơ: $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$."
      ],
      exampleProblem: "Cho tam giác $ABC$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Tính chu vi tam giác $ABC$ và số đo góc $\\widehat{BAC}$.",
      exampleSolution: "Ta có: $\\overrightarrow{AB} = (-1; 2; 0) \\implies AB = \\sqrt{1 + 4 + 0} = \\sqrt{5}$.\n$\\overrightarrow{AC} = (-1; 0; 3) \\implies AC = \\sqrt{1 + 0 + 9} = \\sqrt{10}$.\n$\\overrightarrow{BC} = (0; -2; 3) \\implies BC = \\sqrt{0 + 4 + 9} = \\sqrt{13}$.\nChu vi: $P = AB + BC + AC = \\sqrt{5} + \\sqrt{10} + \\sqrt{13}$.\nTích vô hướng: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-1)(-1) + 2(0) + 0(3) = 1$.\n$\\cos \\widehat{BAC} = \\frac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{AB \\cdot AC} = \\frac{1}{\\sqrt{5} \\cdot \\sqrt{10}} = \\frac{1}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{10} \\approx 0.1414 \\implies \\widehat{BAC} \\approx 81.87^{\\circ}$."
    },
    {
      index: "5",
      title: "5. Phương pháp tọa độ hóa & Ứng dụng thực tiễn",
      points: [
        "Phương pháp tọa độ hóa hình không gian:\n- Bước 1: Chọn hệ trục $Oxyz$ thích hợp gắn vào hình (gốc $O$ thường là đỉnh tam diện vuông, giao điểm các đường vuông góc; các trục $Ox, Oy, Oz$ trùng với các cạnh đôi một vuông góc).\n- Bước 2: Xác định tọa độ các đỉnh và điểm liên quan.\n- Bước 3: Dùng công thức vectơ để tính khoảng cách, góc giữa hai đường thẳng, diện tích, thể tích.",
        "Ứng dụng thực tế:\n- Cân bằng lực trong không gian: Vật đứng yên khi hợp lực triệt tiêu: $\\sum \\vec{F}_i = \\vec{0}$.\n- Công của lực: $A = \\vec{F} \\cdot \\vec{s} = |\\vec{F}| |\\vec{s}| \\cos(\\vec{F}, \\vec{s})$.\n- Định vị vệ tinh GPS và trạm phát sóng: Khoảng cách từ trạm $S(x_0; y_0; z_0)$ đến thiết bị $M(x; y; z)$ là $d = SM = \\sqrt{(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2}$."
      ],
      exampleProblem: "Một chiếc đèn chùm nặng $120\\text{ N}$ được treo vào trần nhà nhờ ba sợi dây cáp không giãn gắn vào ba điểm cố định $A(1; 0; 3), B(-1; \\sqrt{3}; 3), C(-1; -\\sqrt{3}; 3)$ (mét). Đèn nằm tại điểm $S(0; 0; 1)$. Biết lực căng trong ba sợi dây có độ lớn bằng nhau. Tính độ lớn lực căng của mỗi sợi dây cáp.",
      exampleSolution: "Trọng lực tác dụng lên đèn hướng thẳng đứng xuống dưới: $\\vec{P} = (0; 0; -120)\\text{ N}$.\nCác vectơ từ $S$ đến các điểm treo:\n$\\overrightarrow{SA} = (1; 0; 2) \\implies |\\overrightarrow{SA}| = \\sqrt{1 + 0 + 4} = \\sqrt{5}$.\nCả 3 dây đối xứng dài bằng nhau $L = \\sqrt{1 + 4} = \\sqrt{5}$.\nGọi độ lớn lực căng mỗi dây là $T$, vectơ lực căng cùng hướng với vectơ chỉ phương của dây.\nThành phần thẳng đứng của mỗi lực căng là $T_z = T \\cdot \\frac{2}{\\sqrt{5}}$.\nĐiều kiện cân bằng theo phương thẳng đứng: $3 \\cdot T_z = P \\iff 3 \\cdot T \\cdot \\frac{2}{\\sqrt{5}} = 120 \\iff T = \\frac{120 \\sqrt{5}}{6} = 20\\sqrt{5} \\approx 44.72\\text{ N}$."
    }
  ],
  quizQuestions: [
    {
      id: "ot2-q1",
      badge: "NB 1 - Quy tắc cộng vectơ không gian",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{B'C'} + \\overrightarrow{C'A}$ bằng vectơ nào dưới đây?",
      options: [
        "$\\vec{0}$",
        "$\\overrightarrow{AA'}$",
        "$\\overrightarrow{CC'}$",
        "$\\overrightarrow{BB'}$"
      ],
      correctIndex: 0,
      explanation: "Vì $B'C' // BC$ và $B'C' = BC$ nên $\\overrightarrow{B'C'} = \\overrightarrow{BC}$. Khi đó $\\overrightarrow{AB} + \\overrightarrow{B'C'} + \\overrightarrow{C'A} = \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\overrightarrow{AC} + \\overrightarrow{CA} = \\vec{0}$."
    },
    {
      id: "ot2-q2",
      badge: "NB 2 - Đọc tọa độ vectơ từ vectơ cơ sở",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 2\\vec{i} - 5\\vec{k} + 3\\vec{j}$. Tọa độ của vectơ $\\vec{u}$ là:",
      options: [
        "$(2; 3; -5)$",
        "$(2; -5; 3)$",
        "$(-5; 2; 3)$",
        "$(3; 2; -5)$"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa tọa độ: $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$. Ta sắp xếp lại: $\\vec{u} = 2\\vec{i} + 3\\vec{j} - 5\\vec{k}$, do đó tọa độ là $(2; 3; -5)$."
    },
    {
      id: "ot2-q3",
      badge: "NB 3 - Tọa độ trung điểm đoạn thẳng",
      source: "Đề thi Tốt nghiệp THPT",
      question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(5; -1; 4)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
      options: [
        "$(3; 1; 1)$",
        "$(6; 2; 2)$",
        "$(2; -2; 3)$",
        "$(4; 2; 2)$"
      ],
      correctIndex: 0,
      explanation: "$x_M = \\frac{1+5}{2} = 3; y_M = \\frac{3-1}{2} = 1; z_M = \\frac{-2+4}{2} = 1 \\implies M(3; 1; 1)$."
    },
    {
      id: "ot2-q4",
      badge: "NB 4 - Hình chiếu lên mặt phẳng tọa độ",
      source: "Đề thi Tốt nghiệp THPT",
      question: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(2; -3; 4)$ lên mặt phẳng $(Oyz)$ có tọa độ là:",
      options: [
        "$(0; -3; 4)$",
        "$(2; 0; 4)$",
        "$(2; -3; 0)$",
        "$(0; 3; -4)$"
      ],
      correctIndex: 0,
      explanation: "Điểm chiếu lên $(Oyz)$ thì hoành độ bằng $0$, tung độ và cao độ giữ nguyên: $H(0; -3; 4)$."
    },
    {
      id: "ot2-q5",
      badge: "TH 5 - Biểu thức tọa độ tích vô hướng",
      source: "Đề tham khảo Tốt nghiệp THPT",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 2; -3)$ và $\\vec{b} = (-2; 1; 4)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: [
        "$-12$",
        "$12$",
        "$-10$",
        "$8$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} \\cdot \\vec{b} = 1(-2) + 2(1) + (-3)(4) = -2 + 2 - 12 = -12$."
    },
    {
      id: "ot2-q6",
      badge: "TH 6 - Độ dài vectơ không gian",
      source: "Đề tham khảo Tốt nghiệp THPT",
      question: "Trong không gian $Oxyz$, độ dài của vectơ $\\vec{u} = (-2; 3; -6)$ bằng:",
      options: [
        "$7$",
        "$\\sqrt{49}$",
        "$49$",
        "$\\sqrt{11}$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{u}| = \\sqrt{(-2)^2 + 3^2 + (-6)^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
    },
    {
      id: "ot2-q7",
      badge: "TH 7 - Tìm tọa độ đỉnh thứ tư của hình bình hành",
      source: "Đề minh họa Bộ GD&ĐT",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 1; 1), B(2; 3; 4), C(6; 5; 2)$. Tìm tọa độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành.",
      options: [
        "$D(5; 3; -1)$",
        "$D(7; 7; 5)$",
        "$D(-3; -1; 3)$",
        "$D(5; 7; 5)$"
      ],
      correctIndex: 0,
      explanation: "$ABCD$ là hình bình hành $\\iff \\overrightarrow{AD} = \\overrightarrow{BC} \\iff (x_D - 1; y_D - 1; z_D - 1) = (4; 2; -2) \\iff D(5; 3; -1)$."
    },
    {
      id: "ot2-q8",
      badge: "TH 8 - Hai vectơ vuông góc",
      source: "Đề kiểm tra định kỳ Toán 12",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (m; 1; -2)$ và $\\vec{v} = (2; -4; 3)$. Tìm giá trị của tham số $m$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.",
      options: [
        "$m = 5$",
        "$m = -5$",
        "$m = 1$",
        "$m = -1$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff 2m + 1(-4) + (-2)(3) = 0 \\iff 2m - 10 = 0 \\iff m = 5$."
    },
    {
      id: "ot2-q9",
      badge: "TH 9 - Cosin góc giữa hai vectơ",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$. Cosin của góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng:",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "$\\cos(\\vec{a}, \\vec{b}) = \\frac{1(0) + 0(1) + 1(1)}{\\sqrt{1^2 + 1^2} \\cdot \\sqrt{1^2 + 1^2}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$."
    },
    {
      id: "ot2-q10",
      badge: "TH 10 - Ba điểm thẳng hàng",
      source: "Đề kiểm tra định kỳ Toán 12",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(2; 4; 5)$ và $C(4; m; n)$. Biết ba điểm $A, B, C$ thẳng hàng, giá trị của biểu thức $T = m + n$ là:",
      options: [
        "$17$",
        "$15$",
        "$13$",
        "$19$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (1; 2; 2), \\overrightarrow{AC} = (3; m - 2; n - 3)$. Ba điểm thẳng hàng khi $\\frac{3}{1} = \\frac{m - 2}{2} = \\frac{n - 3}{2} = 3 \\implies m - 2 = 6 \\implies m = 8; n - 3 = 6 \\implies n = 9$. Vậy $T = 8 + 9 = 17$."
    },
    {
      id: "ot2-q11",
      badge: "VD 11 - Điểm cách đều hai điểm trên trục tung",
      source: "Đề thi thử THPT Quốc gia",
      question: "Trong không gian $Oxyz$, cho hai điểm $A(3; 1; 2)$ và $B(1; 5; 4)$. Tìm tọa độ điểm $M$ thuộc trục $Oy$ sao cho $MA = MB$.",
      options: [
        "$M(0; 2; 0)$",
        "$M(0; 3; 0)$",
        "$M(0; -2; 0)$",
        "$M(0; 4; 0)$"
      ],
      correctIndex: 0,
      explanation: "$M \\in Oy \\implies M(0; y; 0)$.\n$MA^2 = MB^2 \\iff 3^2 + (1 - y)^2 + 2^2 = 1^2 + (5 - y)^2 + 4^2 \\iff 13 + y^2 - 2y + 1 = 42 + y^2 - 10y + 25 \\iff 8y = 16 \\iff y = 2$. Vậy $M(0; 2; 0)$."
    },
    {
      id: "ot2-q12",
      badge: "VD 12 - Công của lực kéo trong không gian",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Một lực $\\vec{F} = (30; -20; 50)\\text{ N}$ tác dụng làm một vật dịch chuyển thẳng từ điểm $A(1; 2; 3)$ đến điểm $B(5; 6; 5)$ (đơn vị đo là mét). Công cơ học thực hiện bởi lực $\\vec{F}$ bằng bao nhiêu Jun?",
      options: [
        "$140\\text{ J}$",
        "$120\\text{ J}$",
        "$160\\text{ J}$",
        "$100\\text{ J}$"
      ],
      correctIndex: 0,
      explanation: "Vectơ dịch chuyển $\\vec{s} = \\overrightarrow{AB} = (4; 4; 2)\\text{ m}$.\nCông của lực: $A = \\vec{F} \\cdot \\vec{s} = 30(4) + (-20)(4) + 50(2) = 120 - 80 + 100 = 140\\text{ J}$."
    },
    {
      id: "ot2-q13",
      badge: "VD 13 - Trọng tâm tứ diện",
      source: "Đề thi Học sinh giỏi Toán 12",
      question: "Trong không gian $Oxyz$, cho tứ diện $ABCD$ với $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$. Tọa độ điểm $M$ sao cho $|\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD}|$ đạt giá trị nhỏ nhất là:",
      options: [
        "$\\left(\\frac{1}{2}; \\frac{1}{2}; \\frac{1}{2}\\right)$",
        "$(1; 1; 1)$",
        "$\\left(\\frac{1}{4}; \\frac{1}{4}; \\frac{1}{4}\\right)$",
        "$(0; 0; 0)$"
      ],
      correctIndex: 0,
      explanation: "Gọi $G$ là trọng tâm tứ diện $ABCD$, ta có $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}$. Khi đó $|\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD}| = |4\\overrightarrow{MG}| = 4MG$. Giá trị này nhỏ nhất bằng $0$ khi $M \\equiv G$. Tọa độ trọng tâm $G$: $x_G = \\frac{1+0+0+1}{4} = \\frac{1}{2}, y_G = \\frac{1}{2}, z_G = \\frac{1}{2}$."
    },
    {
      id: "ot2-q14",
      badge: "VD 14 - Tọa độ hóa hình lập phương tính góc",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{DA'}$ bằng:",
      options: [
        "$120^{\\circ}$",
        "$60^{\\circ}$",
        "$90^{\\circ}$",
        "$45^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Đặt hệ trục tọa độ với $D(0; 0; 0)$, các trục $Dx, Dy, Dz$ lần lượt dọc theo $DA, DC, DD'$.\nKhi đó $D(0; 0; 0), A(a; 0; 0), C(0; a; 0), A'(a; 0; a)$.\n$\\overrightarrow{AC} = (-a; a; 0), \\overrightarrow{DA'} = (a; 0; a)$.\n$\\overrightarrow{AC} \\cdot \\overrightarrow{DA'} = (-a)(a) + a(0) + 0(a) = -a^2$.\n$|\\overrightarrow{AC}| = a\\sqrt{2}, |\\overrightarrow{DA'}| = a\\sqrt{2}$.\n$\\cos(\\overrightarrow{AC}, \\overrightarrow{DA'}) = \\frac{-a^2}{a\\sqrt{2} \\cdot a\\sqrt{2}} = -\\frac{1}{2} \\implies (\\overrightarrow{AC}, \\overrightarrow{DA'}) = 120^{\\circ}$."
    },
    {
      id: "ot2-q15",
      badge: "VDC 15 - Giá trị nhỏ nhất tổng bình phương khoảng cách",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; -1), B(2; -1; 3), C(0; 2; 1)$. Điểm $M$ thuộc mặt phẳng $(Oxy)$ sao cho biểu thức $T = MA^2 + MB^2 + MC^2$ đạt giá trị nhỏ nhất có tọa độ là:",
      options: [
        "$(1; 1; 0)$",
        "$(1; 1; 1)$",
        "$(0; 1; 0)$",
        "$(3; 3; 0)$"
      ],
      correctIndex: 0,
      explanation: "Gọi $G$ là trọng tâm tam giác $ABC$: $x_G = \\frac{1+2+0}{3} = 1; y_G = \\frac{2-1+2}{3} = 1; z_G = \\frac{-1+3+1}{3} = 1 \\implies G(1; 1; 1)$.\nTa có: $MA^2 + MB^2 + MC^2 = 3MG^2 + GA^2 + GB^2 + GC^2$.\nTổng nhỏ nhất khi $MG$ nhỏ nhất $\\iff M$ là hình chiếu vuông góc của $G(1; 1; 1)$ lên mặt phẳng $(Oxy)$, tức là $M(1; 1; 0)$."
    },
    {
      id: "ot2-q16",
      badge: "VDC 16 - Cân bằng ba lực không gian",
      source: "Đề thi Đánh giá Tư duy ĐHBK Hà Nội",
      question: "Ba lực $\\vec{F}_1 = (30; 0; 40)\\text{ N}, \\vec{F}_2 = (-10; 20; 10)\\text{ N}, \\vec{F}_3 = (x; y; z)\\text{ N}$ cùng tác dụng vào một vật làm vật cân bằng. Độ lớn của lực $\\vec{F}_3$ bằng:",
      options: [
        "$\\sqrt{3300}\\text{ N}$",
        "$50\\text{ N}$",
        "$60\\text{ N}$",
        "$10\\sqrt{30}\\text{ N}$"
      ],
      correctIndex: 0,
      explanation: "Vật cân bằng khi $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -(20; 20; 50) = (-20; -20; -50)\\text{ N}$.\nĐộ lớn $|\\vec{F}_3| = \\sqrt{(-20)^2 + (-20)^2 + (-50)^2} = \\sqrt{400 + 400 + 2500} = \\sqrt{3300}\\text{ N}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ot2-tf1",
      badge: "TF 1 - Tọa độ điểm và trung điểm trong Oxyz",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -3), B(4; 3; 1)$ và $C(-2; 5; 7)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Tọa độ vectơ $\\overrightarrow{AB} = (2; 2; 4)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} = (4 - 2; 3 - 1; 1 - (-3)) = (2; 2; 4)$. ĐÚNG."
        },
        {
          id: "b",
          text: "Trung điểm của đoạn thẳng $AC$ có tọa độ là $(0; 3; 2)$.",
          correctAnswer: true,
          explanation: "$M\\left(\\frac{2+(-2)}{2}; \\frac{1+5}{2}; \\frac{-3+7}{2}\\right) = (0; 3; 2)$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đoạn thẳng $AB$ bằng $2\\sqrt{6}$.",
          correctAnswer: true,
          explanation: "$AB = \\sqrt{2^2 + 2^2 + 4^2} = \\sqrt{4 + 4 + 16} = \\sqrt{24} = 2\\sqrt{6}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Ba điểm $A, B, C$ thẳng hàng.",
          correctAnswer: false,
          explanation: "$\\overrightarrow{AC} = (-4; 4; 10)$. Xét tỉ số: $\\frac{-4}{2} \\ne \\frac{4}{2}$ ($-2 \\ne 2$) nên hai vectơ không cùng phương, ba điểm không thẳng hàng. SAI."
        }
      ]
    },
    {
      id: "ot2-tf2",
      badge: "TF 2 - Tích vô hướng và góc giữa hai vectơ",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 2)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Độ dài $|\\vec{u}| = 3$ và $|\\vec{v}| = 3$.",
          correctAnswer: true,
          explanation: "$|\\vec{u}| = \\sqrt{1 + 4 + 4} = 3$ và $|\\vec{v}| = \\sqrt{4 + 1 + 4} = 3$. ĐÚNG."
        },
        {
          id: "b",
          text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = -4$.",
          correctAnswer: true,
          explanation: "$\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + (-2)(2) = 2 - 2 - 4 = -4$. ĐÚNG."
        },
        {
          id: "c",
          text: "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ là một góc nhọn.",
          correctAnswer: false,
          explanation: "Vì $\\cos(\\vec{u}, \\vec{v}) = \\frac{-4}{3 \\times 3} = -\\frac{4}{9} < 0$ nên góc giữa hai vectơ là góc tù. SAI."
        },
        {
          id: "d",
          text: "Vectơ $\\vec{w} = \\vec{u} + \\vec{v}$ có tọa độ là $(3; 1; 0)$ và vuông góc với trục $Oz$.",
          correctAnswer: true,
          explanation: "$\\vec{w} = (1+2; 2-1; -2+2) = (3; 1; 0)$. Cao độ bằng $0$ nên $\\vec{w} \\cdot \\vec{k} = 0$, vuông góc với trục $Oz$. ĐÚNG."
        }
      ]
    },
    {
      id: "ot2-tf3",
      badge: "TF 3 - Tọa độ hóa hình hộp chữ nhật",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 2, AD = 4, AA' = 3$. Chọn hệ trục tọa độ $Oxyz$ sao cho gốc $O$ trùng với đỉnh $A$, các trục $Ox, Oy, Oz$ lần lượt chứa các cạnh $AB, AD, AA'$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Tọa độ đỉnh $C'$ là $(2; 4; 3)$.",
          correctAnswer: true,
          explanation: "$x_{C'} = AB = 2, y_{C'} = AD = 4, z_{C'} = AA' = 3 \\implies C'(2; 4; 3)$. ĐÚNG."
        },
        {
          id: "b",
          text: "Tọa độ tâm $I$ của hình hộp là $(1; 2; 1.5)$.",
          correctAnswer: true,
          explanation: "$I$ là trung điểm đường chéo $AC'$, $A(0; 0; 0), C'(2; 4; 3) \\implies I(1; 2; 1.5)$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đường chéo $AC'$ bằng $\\sqrt{29}$.",
          correctAnswer: true,
          explanation: "$AC' = \\sqrt{2^2 + 4^2 + 3^2} = \\sqrt{4 + 16 + 9} = \\sqrt{29}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Hai vectơ $\\overrightarrow{BD}$ và $\\overrightarrow{AC'}$ vuông góc với nhau.",
          correctAnswer: false,
          explanation: "$B(2; 0; 0), D(0; 4; 0) \\implies \\overrightarrow{BD} = (-2; 4; 0)$. $\\overrightarrow{AC'} = (2; 4; 3)$. Tích vô hướng: $\\overrightarrow{BD} \\cdot \\overrightarrow{AC'} = -2(2) + 4(4) + 0(3) = -4 + 16 = 12 \\ne 0$. SAI."
        }
      ]
    },
    {
      id: "ot2-tf4",
      badge: "TF 4 - Chuyển động máy bay trong không gian",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Một trạm kiểm soát không lưu radar đặt tại gốc $O(0; 0; 0)$. Một máy bay cất cánh từ vị trí $A(2; 3; 0)$ bay theo đường thẳng với vận tốc không đổi đến vị trí $B(14; 18; 5)$ sau $10$ phút (đơn vị đo trên các trục là km). Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Vectơ dịch chuyển của máy bay là $\\overrightarrow{AB} = (12; 15; 5)\\text{ km}$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} = (14 - 2; 18 - 3; 5 - 0) = (12; 15; 5)$. ĐÚNG."
        },
        {
          id: "b",
          text: "Quãng đường máy bay đã bay được trong $10$ phút là $\\sqrt{418}\\text{ km}$.",
          correctAnswer: false,
          explanation: "$AB = \\sqrt{12^2 + 15^2 + 5^2} = \\sqrt{144 + 225 + 25} = \\sqrt{394} \\approx 19.85\\text{ km} \\ne \\sqrt{418}$. SAI."
        },
        {
          id: "c",
          text: "Vị trí máy bay sau $5$ phút cất cánh là $M(8; 10.5; 2.5)$.",
          correctAnswer: true,
          explanation: "Sau 5 phút là nửa thời gian, máy bay ở trung điểm $M$ của $AB$: $M\\left(\\frac{2+14}{2}; \\frac{3+18}{2}; \\frac{0+5}{2}\\right) = (8; 10.5; 2.5)$. ĐÚNG."
        },
        {
          id: "d",
          text: "Độ cao của máy bay tại thời điểm $5$ phút là $2.5\\text{ km}$.",
          correctAnswer: true,
          explanation: "Độ cao là cao độ $z$ của điểm $M$, bằng $2.5\\text{ km}$. ĐÚNG."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ot2-sa1",
      badge: "SA 1 - Tích vô hướng của hai vectơ",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (4; 1; -2)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "$\\vec{u} \\cdot \\vec{v} = 2(4) + (-3)(1) + 1(-2) = 8 - 3 - 2 = 3$."
    },
    {
      id: "ot2-sa2",
      badge: "SA 2 - Khoảng cách giữa hai điểm",
      source: "Đề thi Tốt nghiệp THPT",
      prompt: "Trong không gian $Oxyz$, tính khoảng cách giữa hai điểm $A(1; 2; 3)$ và $B(4; 2; 7)$.",
      correctAnswer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "$AB = \\sqrt{(4-1)^2 + (2-2)^2 + (7-3)^2} = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{9 + 16} = 5$."
    },
    {
      id: "ot2-sa3",
      badge: "SA 3 - Tìm m để hai vectơ vuông góc",
      source: "Đề minh họa Bộ GD&ĐT",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (m; 3; -1)$ và $\\vec{b} = (2; -2; 4)$. Tìm giá trị của $m$ để hai vectơ vuông góc với nhau.",
      correctAnswer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "$\\vec{a} \\cdot \\vec{b} = 2m + 3(-2) + (-1)(4) = 2m - 6 - 4 = 2m - 10 = 0 \\iff m = 5$."
    },
    {
      id: "ot2-sa4",
      badge: "SA 4 - Cao độ trọng tâm tam giác",
      source: "Đề kiểm tra định kỳ Toán 12",
      prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ với $A(2; 1; 3), B(1; 4; -2), C(3; -2; 8)$. Tìm cao độ $z_G$ của trọng tâm $G$ tam giác $ABC$.",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "$z_G = \\frac{z_A + z_B + z_C}{3} = \\frac{3 + (-2) + 8}{3} = \\frac{9}{3} = 3$."
    },
    {
      id: "ot2-sa5",
      badge: "SA 5 - Góc giữa hai vectơ theo độ",
      source: "Đề thi thử Tốt nghiệp THPT",
      prompt: "Trong không gian $Oxyz$, tính góc giữa hai vectơ $\\vec{u} = (1; 1; 0)$ và $\\vec{v} = (0; 1; 1)$ theo đơn vị độ.",
      correctAnswer: "60",
      acceptableAnswers: ["60", "60.0"],
      explanation: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{1(0) + 1(1) + 0(1)}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{u}, \\vec{v}) = 60^{\\circ}$."
    },
    {
      id: "ot2-sa6",
      badge: "SA 6 - Công của lực dịch chuyển",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Một lực $\\vec{F} = (50; 20; -30)\\text{ N}$ làm vật dịch chuyển từ gốc tọa độ $O(0; 0; 0)$ đến điểm $M(2; 4; 1)$ (đơn vị mét). Tính công của lực sinh ra theo đơn vị Jun (J).",
      correctAnswer: "150",
      acceptableAnswers: ["150", "150.0"],
      explanation: "$A = \\vec{F} \\cdot \\overrightarrow{OM} = 50(2) + 20(4) + (-30)(1) = 100 + 80 - 30 = 150\\text{ J}$."
    },
    {
      id: "ot2-sa7",
      badge: "SA 7 - Bình phương hợp lực hai vectơ",
      source: "Đề thi thử THPT Quốc gia",
      prompt: "Cho hai lực $\\vec{F}_1 = (10; 20; 30)\\text{ N}$ và $\\vec{F}_2 = (30; 20; 10)\\text{ N}$. Tính bình phương độ lớn của hợp lực $|\\vec{F}_1 + \\vec{F}_2|^2$.",
      correctAnswer: "4800",
      acceptableAnswers: ["4800", "4800.0"],
      explanation: "$\\vec{F} = \\vec{F}_1 + \\vec{F}_2 = (40; 40; 40)\\text{ N}$. Bình phương độ lớn: $40^2 + 40^2 + 40^2 = 1600 \\times 3 = 4800$."
    },
    {
      id: "ot2-sa8",
      badge: "SA 8 - Tọa độ điểm chia đoạn thẳng",
      source: "Đề thi Học sinh giỏi Toán 12",
      prompt: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(7; 8; 9)$. Điểm $M$ thuộc đoạn thẳng $AB$ thỏa mãn $MA = 2MB$. Tìm hoành độ $x_M$ của điểm $M$.",
      correctAnswer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "Vì $M$ thuộc đoạn thẳng $AB$ và $MA = 2MB$ nên $\\overrightarrow{AM} = 2\\overrightarrow{MB} \\implies x_M - 1 = 2(7 - x_M) \\implies 3x_M = 15 \\implies x_M = 5$."
    }
  ],
  examSets: [
    {
      id: "ot2-de-1",
      title: "Đề ôn tập số 1",
      description: "Đề ôn tập tổng hợp cuối Chương II (Mức độ Nhận biết - Thông hiểu) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot2-d1-q1",
          badge: "Câu 1 - Nhận biết - Vectơ đối trong không gian",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho hình bình hành $ABCD$. Vectơ đối của vectơ $\\overrightarrow{AB}$ là:",
          options: ["$\\overrightarrow{BA}$", "$\\overrightarrow{CD}$", "$\\overrightarrow{DC}$", "$\\overrightarrow{AD}$"],
          correctIndex: 0,
          explanation: "Vectơ đối của $\\overrightarrow{AB}$ là $-\\overrightarrow{AB} = \\overrightarrow{BA}$."
        },
        {
          id: "ot2-d1-q2",
          badge: "Câu 2 - Nhận biết - Tọa độ điểm cơ sở",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Trong không gian $Oxyz$, tọa độ của gốc tọa độ $O$ là:",
          options: ["$(0; 0; 0)$", "$(1; 1; 1)$", "$(0; 1; 0)$", "$(0; 0; 1)$"],
          correctIndex: 0,
          explanation: "Gốc tọa độ $O$ có tọa độ là $(0; 0; 0)$."
        },
        {
          id: "ot2-d1-q3",
          badge: "Câu 3 - Nhận biết - Tọa độ vectơ đơn vị k",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Trong không gian $Oxyz$, vectơ đơn vị $\\vec{k}$ trên trục $Oz$ có tọa độ là:",
          options: ["$(0; 0; 1)$", "$(1; 0; 0)$", "$(0; 1; 0)$", "$(1; 1; 1)$"],
          correctIndex: 0,
          explanation: "Vectơ đơn vị $\\vec{k}$ của trục $Oz$ là $(0; 0; 1)$."
        },
        {
          id: "ot2-d1-q4",
          badge: "Câu 4 - Nhận biết - Điểm thuộc mặt phẳng Oxy",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Điểm nào sau đây thuộc mặt phẳng tọa độ $(Oxy)$?",
          options: ["$M(3; -2; 0)$", "$N(0; 2; 5)$", "$P(1; 0; 4)$", "$Q(1; 2; 3)$"],
          correctIndex: 0,
          explanation: "Mặt phẳng $(Oxy)$ có phương trình $z = 0$, điểm $M(3; -2; 0)$ có cao độ $z = 0$ nên thuộc $(Oxy)$."
        },
        {
          id: "ot2-d1-q5",
          badge: "Câu 5 - Thông hiểu - Độ dài vectơ cơ bản",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Độ dài của vectơ $\\vec{a} = (1; -2; 2)$ bằng:",
          options: ["$3$", "$9$", "$\\sqrt{5}$", "$5$"],
          correctIndex: 0,
          explanation: "$|\\vec{a}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$."
        },
        {
          id: "ot2-d1-q6",
          badge: "Câu 6 - Thông hiểu - Tọa độ hiệu hai vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho $\\vec{u} = (3; 1; -2)$ và $\\vec{v} = (1; -2; 1)$. Tọa độ của vectơ $\\vec{u} - \\vec{v}$ là:",
          options: ["$(2; 3; -3)$", "$(4; -1; -1)$", "$(2; -1; -3)$", "$(3; -2; -2)$"],
          correctIndex: 0,
          explanation: "$\\vec{u} - \\vec{v} = (3 - 1; 1 - (-2); -2 - 1) = (2; 3; -3)$."
        },
        {
          id: "ot2-d1-q7",
          badge: "Câu 7 - Thông hiểu - Tích vô hướng đơn giản",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho hai vectơ $\\vec{a} = (2; 0; -1)$ và $\\vec{b} = (1; 3; 4)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
          options: ["$-2$", "$2$", "$6$", "$-6$"],
          correctIndex: 0,
          explanation: "$\\vec{a} \\cdot \\vec{b} = 2(1) + 0(3) + (-1)(4) = 2 - 4 = -2$."
        },
        {
          id: "ot2-d1-q8",
          badge: "Câu 8 - Thông hiểu - Tọa độ vectơ nối hai điểm",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho hai điểm $A(2; -1; 4)$ và $B(3; 2; -1)$. Tọa độ của vectơ $\\overrightarrow{AB}$ là:",
          options: ["$(1; 3; -5)$", "$(-1; -3; 5)$", "$(5; 1; 3)$", "$(1; 1; 3)$"],
          correctIndex: 0,
          explanation: "$\\overrightarrow{AB} = (3 - 2; 2 - (-1); -1 - 4) = (1; 3; -5)$."
        },
        {
          id: "ot2-d1-q9",
          badge: "Câu 9 - Thông hiểu - Hai vectơ cùng phương",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho vectơ $\\vec{u} = (2; -4; 6)$. Vectơ nào dưới đây cùng phương với $\\vec{u}$?",
          options: ["$\\vec{v} = (-1; 2; -3)$", "$\\vec{w} = (1; 2; 3)$", "$\\vec{x} = (2; 4; 6)$", "$\\vec{y} = (-2; -4; -6)$"],
          correctIndex: 0,
          explanation: "$\\vec{v} = -\\frac{1}{2}\\vec{u} = (-1; 2; -3)$ cùng phương với $\\vec{u}$."
        },
        {
          id: "ot2-d1-q10",
          badge: "Câu 10 - Thông hiểu - Trung điểm đoạn thẳng",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho $A(-1; 3; 2)$ và $B(3; 1; 0)$. Tọa độ trung điểm $I$ của $AB$ là:",
          options: ["$(1; 2; 1)$", "$(2; 4; 2)$", "$(4; -2; -2)$", "$(2; 2; 1)$"],
          correctIndex: 0,
          explanation: "$x_I = \\frac{-1+3}{2} = 1, y_I = \\frac{3+1}{2} = 2, z_I = \\frac{2+0}{2} = 1 \\implies I(1; 2; 1)$."
        },
        {
          id: "ot2-d1-q11",
          badge: "Câu 11 - Vận dụng - Tìm k để hai vectơ vuông góc",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho $\\vec{u} = (1; k; -3)$ và $\\vec{v} = (2; -1; 1)$. Tìm $k$ để $\\vec{u} \\perp \\vec{v}$.",
          options: ["$k = -1$", "$k = 1$", "$k = 5$", "$k = -5$"],
          correctIndex: 0,
          explanation: "$\\vec{u} \\cdot \\vec{v} = 1(2) + k(-1) + (-3)(1) = 2 - k - 3 = -1 - k = 0 \\iff k = -1$."
        },
        {
          id: "ot2-d1-q12",
          badge: "Câu 12 - Vận dụng - Độ dài đoạn thẳng",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          question: "Cho hai điểm $A(1; 0; 0)$ và $B(0; 0; 1)$. Độ dài đoạn thẳng $AB$ bằng:",
          options: ["$\\sqrt{2}$", "$1$", "$2$", "$\\sqrt{3}$"],
          correctIndex: 0,
          explanation: "$AB = \\sqrt{(0-1)^2 + 0^2 + (1-0)^2} = \\sqrt{1 + 1} = \\sqrt{2}$."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot2-d1-tf1",
          badge: "TF 1 - Tọa độ vectơ và điểm cơ bản",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và vectơ $\\vec{u} = (2; -1; 1)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Điểm $B$ thỏa mãn $\\overrightarrow{AB} = \\vec{u}$ có tọa độ là $(3; 1; 4)$.",
              correctAnswer: true,
              explanation: "$B(1+2; 2-1; 3+1) = (3; 1; 4)$. ĐÚNG."
            },
            {
              id: "b",
              text: "Độ dài của vectơ $\\vec{u}$ bằng $\\sqrt{6}$.",
              correctAnswer: true,
              explanation: "$|\\vec{u}| = \\sqrt{4 + 1 + 1} = \\sqrt{6}$. ĐÚNG."
            },
            {
              id: "c",
              text: "Vectơ $2\\vec{u}$ có tọa độ là $(4; -2; 2)$.",
              correctAnswer: true,
              explanation: "$2\\vec{u} = (4; -2; 2)$. ĐÚNG."
            },
            {
              id: "d",
              text: "Vectơ $\\vec{u}$ cùng phương với vectơ $\\vec{v} = (-4; 2; 2)$.",
              correctAnswer: false,
              explanation: "$\\frac{-4}{2} = -2$, nhưng $\\frac{2}{1} = 2 \\ne -2$. Không cùng phương. SAI."
            }
          ]
        },
        {
          id: "ot2-d1-tf2",
          badge: "TF 2 - Trọng tâm tam giác trong Oxyz",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Trong không gian $Oxyz$, cho ba điểm $A(3; 0; 0), B(0; 3; 0), C(0; 0; 3)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Trọng tâm tam giác $ABC$ là điểm $G(1; 1; 1)$.",
              correctAnswer: true,
              explanation: "$x_G = \\frac{3+0+0}{3} = 1, y_G = 1, z_G = 1$. ĐÚNG."
            },
            {
              id: "b",
              text: "Tam giác $ABC$ là tam giác đều.",
              correctAnswer: true,
              explanation: "$AB = BC = CA = \\sqrt{3^2 + 3^2} = 3\\sqrt{2}$. ĐÚNG."
            },
            {
              id: "c",
              text: "Độ dài đoạn thẳng $OG$ bằng $\\sqrt{3}$.",
              correctAnswer: true,
              explanation: "$OG = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Đường thẳng $OG$ không vuông góc với mặt phẳng $(ABC)$.",
              correctAnswer: false,
              explanation: "$\\overrightarrow{OG} = (1; 1; 1), \\overrightarrow{AB} = (-3; 3; 0) \\implies \\overrightarrow{OG} \\cdot \\overrightarrow{AB} = -3 + 3 = 0$. Tương tự vuông góc với $AC$. Vậy $OG \\perp (ABC)$. Khẳng định không vuông góc là SAI."
            }
          ]
        },
        {
          id: "ot2-d1-tf3",
          badge: "TF 3 - Hình chiếu và điểm đối xứng",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Trong không gian $Oxyz$, cho điểm $P(2; -4; 6)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Hình chiếu của $P$ lên trục $Ox$ là $P_1(2; 0; 0)$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "b",
              text: "Hình chiếu của $P$ lên mặt phẳng $(Oxy)$ là $P_2(2; -4; 0)$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "c",
              text: "Điểm đối xứng của $P$ qua gốc $O$ là $P'(-2; 4; -6)$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "d",
              text: "Khoảng cách từ $P$ đến mặt phẳng $(Oxy)$ bằng $4$.",
              correctAnswer: false,
              explanation: "Khoảng cách từ $P$ đến $(Oxy)$ bằng $|z_P| = |6| = 6 \\ne 4$. SAI."
            }
          ]
        },
        {
          id: "ot2-d1-tf4",
          badge: "TF 4 - Phép toán vectơ và trực giao",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Cho hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (3; 0; -1)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Tích vô hướng $\\vec{a} \\cdot \\vec{b} = 0$.",
              correctAnswer: true,
              explanation: "$\\vec{a} \\cdot \\vec{b} = 1(3) + 2(0) + 3(-1) = 3 - 3 = 0$. ĐÚNG."
            },
            {
              id: "b",
              text: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau.",
              correctAnswer: true,
              explanation: "Vì tích vô hướng bằng $0$ nên hai vectơ vuông góc. ĐÚNG."
            },
            {
              id: "c",
              text: "Độ dài $|\\vec{a}| = \\sqrt{14}$ và $|\\vec{b}| = \\sqrt{10}$.",
              correctAnswer: true,
              explanation: "$|\\vec{a}| = \\sqrt{1+4+9} = \\sqrt{14}$, $|\\vec{b}| = \\sqrt{9+0+1} = \\sqrt{10}$. ĐÚNG."
            },
            {
              id: "d",
              text: "$|\\vec{a} + \\vec{b}| = \\sqrt{14} + \\sqrt{10}$.",
              correctAnswer: false,
              explanation: "Vì hai vectơ vuông góc nên $|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 = 14 + 10 = 24 \\implies |\\vec{a} + \\vec{b}| = \\sqrt{24} \\ne \\sqrt{14} + \\sqrt{10}$. SAI."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot2-d1-sa1",
          badge: "SA 1 - Tích vô hướng",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Cho $\\vec{u} = (1; 3; -2)$ và $\\vec{v} = (4; -1; 2)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
          correctAnswer: "-3",
          acceptableAnswers: ["-3", "-3.0"],
          explanation: "$1(4) + 3(-1) + (-2)(2) = 4 - 3 - 4 = -3$."
        },
        {
          id: "ot2-d1-sa2",
          badge: "SA 2 - Khoảng cách hai điểm",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Tính khoảng cách giữa hai điểm $A(0; 1; 2)$ và $B(2; 3; 3)$.",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "$AB = \\sqrt{(2-0)^2 + (3-1)^2 + (3-2)^2} = \\sqrt{4 + 4 + 1} = 3$."
        },
        {
          id: "ot2-d1-sa3",
          badge: "SA 3 - Hoành độ điểm đối xứng",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Cho điểm $M(5; -2; 7)$. Tìm hoành độ của điểm $M'$ đối xứng với $M$ qua gốc tọa độ $O$.",
          correctAnswer: "-5",
          acceptableAnswers: ["-5", "-5.0"],
          explanation: "$M'(-5; 2; -7) \\implies x_{M'} = -5$."
        },
        {
          id: "ot2-d1-sa4",
          badge: "SA 4 - Tìm m để cùng phương",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Cho hai vectơ $\\vec{a} = (2; -3; 4)$ và $\\vec{b} = (4; m; 8)$. Tìm $m$ để hai vectơ cùng phương.",
          correctAnswer: "-6",
          acceptableAnswers: ["-6", "-6.0"],
          explanation: "$\\frac{4}{2} = 2 \\implies \\frac{m}{-3} = 2 \\implies m = -6$."
        },
        {
          id: "ot2-d1-sa5",
          badge: "SA 5 - Tung độ trọng tâm tam giác",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Cho tam giác $ABC$ với $A(1; 4; 2), B(2; 5; -1), C(0; 3; 5)$. Tìm tung độ $y_G$ của trọng tâm $G$.",
          correctAnswer: "4",
          acceptableAnswers: ["4", "4.0"],
          explanation: "$y_G = \\frac{4 + 5 + 3}{3} = \\frac{12}{3} = 4$."
        },
        {
          id: "ot2-d1-sa6",
          badge: "SA 6 - Bình phương độ dài vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 1",
          prompt: "Cho vectơ $\\vec{u} = (2; -1; 2)$. Tính bình phương độ dài $|\\vec{u}|^2$.",
          correctAnswer: "9",
          acceptableAnswers: ["9", "9.0"],
          explanation: "$|\\vec{u}|^2 = 2^2 + (-1)^2 + 2^2 = 4 + 1 + 4 = 9$."
        }
      ]
    },
    {
      id: "ot2-de-2",
      title: "Đề ôn tập số 2",
      description: "Đề ôn tập tổng hợp cuối Chương II (Mức độ Thông hiểu - Vận dụng) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot2-d2-q1",
          badge: "Câu 1 - Thông hiểu - Tọa độ vectơ biểu diễn qua đơn vị",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Trong không gian $Oxyz$, cho $\\vec{u} = 3\\vec{i} - 2\\vec{k}$. Tọa độ của $\\vec{u}$ là:",
          options: ["$(3; 0; -2)$", "$(3; -2; 0)$", "$(-2; 0; 3)$", "$(0; 3; -2)$"],
          correctIndex: 0,
          explanation: "Thiếu $\\vec{j}$ nghĩa là tung độ $y = 0$, do đó $\\vec{u} = (3; 0; -2)$."
        },
        {
          id: "ot2-d2-q2",
          badge: "Câu 2 - Thông hiểu - Trọng tâm tứ diện",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3), D(3; 2; 1)$. Tọa độ trọng tâm $G$ của tứ diện là:",
          options: ["$(1; 1; 1)$", "$(4; 4; 4)$", "$\\left(\\frac{4}{3}; \\frac{4}{3}; \\frac{4}{3}\\right)$", "$(2; 2; 2)$"],
          correctIndex: 0,
          explanation: "$x_G = \\frac{1+0+0+3}{4} = 1, y_G = \\frac{0+2+0+2}{4} = 1, z_G = \\frac{0+0+3+1}{4} = 1 \\implies G(1; 1; 1)$."
        },
        {
          id: "ot2-d2-q3",
          badge: "Câu 3 - Thông hiểu - Độ dài vectơ tổng",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho $\\vec{a} = (1; 1; 0)$ và $\\vec{b} = (0; 1; 1)$. Độ dài của vectơ $\\vec{a} + \\vec{b}$ bằng:",
          options: ["$\\sqrt{6}$", "$2$", "$\\sqrt{2}$", "$\\sqrt{3}$"],
          correctIndex: 0,
          explanation: "$\\vec{a} + \\vec{b} = (1; 2; 1) \\implies |\\vec{a} + \\vec{b}| = \\sqrt{1 + 4 + 1} = \\sqrt{6}$."
        },
        {
          id: "ot2-d2-q4",
          badge: "Câu 4 - Thông hiểu - Hình chiếu lên trục",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Hình chiếu vuông góc của điểm $A(3; -1; 4)$ lên trục $Oz$ là điểm nào?",
          options: ["$(0; 0; 4)$", "$(3; 0; 0)$", "$(0; -1; 0)$", "$(3; -1; 0)$"],
          correctIndex: 0,
          explanation: "Chiếu lên $Oz$ thì chỉ giữ lại cao độ $z = 4$, hoành độ và tung độ bằng $0$: $(0; 0; 4)$."
        },
        {
          id: "ot2-d2-q5",
          badge: "Câu 5 - Vận dụng - Cosin góc giữa hai vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho $\\vec{u} = (2; 1; 0)$ và $\\vec{v} = (1; 2; 0)$. Góc giữa hai vectơ này bằng:",
          options: ["$\\arccos\\left(\\frac{4}{5}\\right)$", "$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$"],
          correctIndex: 0,
          explanation: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{2(1) + 1(2)}{\\sqrt{5} \\cdot \\sqrt{5}} = \\frac{4}{5} \\implies (\\vec{u}, \\vec{v}) = \\arccos\\left(\\frac{4}{5}\\right)$."
        },
        {
          id: "ot2-d2-q6",
          badge: "Câu 6 - Vận dụng - Tìm điểm thỏa mãn hệ thức vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho $A(1; 2; 3)$ và $B(3; 0; 1)$. Tìm tọa độ điểm $M$ sao cho $\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$.",
          options: ["$\\left(\\frac{7}{3}; \\frac{2}{3}; \\frac{5}{3}\\right)$", "$(2; 1; 2)$", "$\\left(\\frac{5}{3}; \\frac{4}{3}; \\frac{7}{3}\\right)$", "$(5; 2; 5)$"],
          correctIndex: 0,
          explanation: "$\\overrightarrow{OM} = \\frac{\\overrightarrow{OA} + 2\\overrightarrow{OB}}{3} = \\frac{(1+6; 2+0; 3+2)}{3} = \\left(\\frac{7}{3}; \\frac{2}{3}; \\frac{5}{3}\\right)$."
        },
        {
          id: "ot2-d2-q7",
          badge: "Câu 7 - Vận dụng - Tam giác vuông tại A",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho $A(1; 0; 1), B(2; 2; 2), C(2; y; 0)$. Tìm $y$ để tam giác $ABC$ vuông tại $A$.",
          options: ["$y = 0$", "$y = 1$", "$y = 2$", "$y = -1$"],
          correctIndex: 0,
          explanation: "$\\overrightarrow{AB} = (1; 2; 1), \\overrightarrow{AC} = (1; y; -1)$. Vuông tại $A \\iff \\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0 \\iff 1(1) + 2y + 1(-1) = 0 \\iff 2y = 0 \\iff y = 0$."
        },
        {
          id: "ot2-d2-q8",
          badge: "Câu 8 - Vận dụng - Công thực hiện bởi lực",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Một lực $\\vec{F} = (20; 30; 40)\\text{ N}$ làm vật dịch chuyển $\\vec{s} = (2; 1; 3)\\text{ m}$. Công cơ học thực hiện bằng:",
          options: ["$190\\text{ J}$", "$180\\text{ J}$", "$200\\text{ J}$", "$150\\text{ J}$"],
          correctIndex: 0,
          explanation: "$A = 20(2) + 30(1) + 40(3) = 40 + 30 + 120 = 190\\text{ J}$."
        },
        {
          id: "ot2-d2-q9",
          badge: "Câu 9 - Vận dụng - Điểm trên mặt phẳng Oyz cách đều",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Tọa độ điểm $M$ thuộc mặt phẳng $(Oyz)$ cách đều hai điểm $A(1; 2; 3)$ và $B(3; 0; 1)$ có dạng $M(0; y; z)$. Hệ thức liên hệ giữa $y$ và $z$ là:",
          options: ["$y + z - 1 = 0$", "$2y + 2z - 2 = 0$", "$2y - 2z + 1 = 0$", "$y - z = 0$"],
          correctIndex: 0,
          explanation: "$MA^2 = MB^2 \\iff 1 + (y-2)^2 + (z-3)^2 = 9 + y^2 + (z-1)^2 \\iff 1 + y^2 - 4y + 4 + z^2 - 6z + 9 = 9 + y^2 + z^2 - 2z + 1 \\iff -4y - 4z + 4 = 0 \\iff y + z - 1 = 0$."
        },
        {
          id: "ot2-d2-q10",
          badge: "Câu 10 - Vận dụng - Chu vi tam giác",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 0)$. Chu vi tam giác $ABC$ bằng:",
          options: ["$3 + \\sqrt{5}$", "$3$", "$2 + \\sqrt{5}$", "$5$"],
          correctIndex: 0,
          explanation: "$CA = 1, CB = 2, AB = \\sqrt{1^2 + 2^2} = \\sqrt{5} \\implies P = 1 + 2 + \\sqrt{5} = 3 + \\sqrt{5}$."
        },
        {
          id: "ot2-d2-q11",
          badge: "Câu 11 - Vận dụng cao - Tọa độ đỉnh lăng trụ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$ có $A(1; 1; 1), B(2; 3; 1), C(1; 2; 3)$ và $A'(3; 2; 4)$. Tọa độ điểm $C'$ là:",
          options: ["$(3; 3; 6)$", "$(4; 4; 5)$", "$(2; 3; 5)$", "$(3; 4; 6)$"],
          correctIndex: 0,
          explanation: "$\\overrightarrow{AA'} = (2; 1; 3)$. Vì $\\overrightarrow{CC'} = \\overrightarrow{AA'}$ nên $C'(1+2; 2+1; 3+3) = (3; 3; 6)$."
        },
        {
          id: "ot2-d2-q12",
          badge: "Câu 12 - Vận dụng cao - Độ lớn hợp lực không gian",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          question: "Ba lực $\\vec{F}_1 = (10; 0; 0)\\text{ N}, \\vec{F}_2 = (0; 20; 0)\\text{ N}, \\vec{F}_3 = (0; 0; 20)\\text{ N}$ cùng tác dụng vào một điểm. Độ lớn của hợp lực bằng:",
          options: ["$30\\text{ N}$", "$50\\text{ N}$", "$25\\text{ N}$", "$10\\sqrt{5}\\text{ N}$"],
          correctIndex: 0,
          explanation: "$\\vec{F} = (10; 20; 20) \\implies |\\vec{F}| = \\sqrt{100 + 400 + 400} = \\sqrt{900} = 30\\text{ N}$."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot2-d2-tf1",
          badge: "TF 1 - Tam giác trong không gian Oxyz",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 0), B(3; 0; 2), C(1; 4; 2)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "$\\overrightarrow{AB} = (2; -2; 2)$ và $\\overrightarrow{AC} = (0; 2; 2)$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "b",
              text: "Tam giác $ABC$ là tam giác vuông tại $A$.",
              correctAnswer: true,
              explanation: "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2(0) + (-2)(2) + 2(2) = -4 + 4 = 0 \\implies AB \\perp AC$. ĐÚNG."
            },
            {
              id: "c",
              text: "Diện tích tam giác $ABC$ bằng $2\\sqrt{6}$.",
              correctAnswer: true,
              explanation: "$AB = \\sqrt{4+4+4} = 2\\sqrt{3}, AC = \\sqrt{0+4+4} = 2\\sqrt{2} \\implies S = \\frac{1}{2}(2\\sqrt{3})(2\\sqrt{2}) = 2\\sqrt{6}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Tâm đường tròn ngoại tiếp tam giác $ABC$ là điểm $I(2; 1; 2)$.",
              correctAnswer: false,
              explanation: "Tam giác vuông tại $A$ nên tâm đường tròn ngoại tiếp là trung điểm $BC$: $M\\left(\\frac{3+1}{2}; \\frac{0+4}{2}; \\frac{2+2}{2}\\right) = (2; 2; 2) \\ne (2; 1; 2)$. SAI."
            }
          ]
        },
        {
          id: "ot2-d2-tf2",
          badge: "TF 2 - Hình hộp và hệ thức vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Xét tính đúng hoặc sai của các hệ thức vectơ sau:",
          subItems: [
            {
              id: "a",
              text: "$\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$.",
              correctAnswer: true,
              explanation: "Quy tắc hình hộp. ĐÚNG."
            },
            {
              id: "b",
              text: "$\\overrightarrow{BD'} = \\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'}$.",
              correctAnswer: true,
              explanation: "Đúng theo quy tắc hình hộp xuất phát từ đỉnh $B$. ĐÚNG."
            },
            {
              id: "c",
              text: "$\\overrightarrow{AC'} + \\overrightarrow{CA'} = \\vec{0}$.",
              correctAnswer: true,
              explanation: "$\\overrightarrow{CA'} = -\\overrightarrow{AC'} \\implies \\overrightarrow{AC'} + \\overrightarrow{CA'} = \\vec{0}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Ba vectơ $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AA'}$ đồng phẳng.",
              correctAnswer: false,
              explanation: "Ba vectơ này xuất phát từ 1 đỉnh của hình hộp không cùng nằm trên một mặt phẳng nên không đồng phẳng. SAI."
            }
          ]
        },
        {
          id: "ot2-d2-tf3",
          badge: "TF 3 - Khoảng cách và trực giao",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Trong không gian $Oxyz$, cho hai điểm $A(2; 0; 0)$ và $B(0; 2; 0)$. Điểm $C(0; 0; c)$ với $c > 0$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Độ dài đoạn thẳng $AB = 2\\sqrt{2}$.",
              correctAnswer: true,
              explanation: "$AB = \\sqrt{4 + 4 + 0} = 2\\sqrt{2}$. ĐÚNG."
            },
            {
              id: "b",
              text: "Tam giác $ABC$ luôn cân tại $C$ với mọi $c > 0$.",
              correctAnswer: true,
              explanation: "$CA = \\sqrt{4 + c^2}, CB = \\sqrt{4 + c^2} \\implies CA = CB$. ĐÚNG."
            },
            {
              id: "c",
              text: "Để tam giác $ABC$ là tam giác đều thì $c = 2$.",
              correctAnswer: true,
              explanation: "$CA = AB \\iff \\sqrt{4 + c^2} = 2\\sqrt{2} \\iff 4 + c^2 = 8 \\iff c^2 = 4 \\iff c = 2$ (do $c > 0$). ĐÚNG."
            },
            {
              id: "d",
              text: "Khi $c = 2$, trọng tâm tam giác $ABC$ là $G\\left(\\frac{2}{3}; \\frac{2}{3}; 1\\right)$.",
              correctAnswer: false,
              explanation: "$z_G = \\frac{0 + 0 + 2}{3} = \\frac{2}{3} \\ne 1$. SAI."
            }
          ]
        },
        {
          id: "ot2-d2-tf4",
          badge: "TF 4 - Chuyển động ca nô vượt sông",
          source: "Đề thi ĐGNL ĐHQG TP.HCM",
          prompt: "Một chiếc ca nô di chuyển trên sông rộng với vận tốc riêng $\\vec{v}_1 = (15; 0; 0)\\text{ km/h}$ hướng sang bờ đối diện (hướng trục $Ox$). Dòng nước chảy xuôi dòng với vận tốc $\\vec{v}_2 = (0; 5; 0)\\text{ km/h}$ (hướng trục $Oy$). Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Vận tốc thực tế của ca nô đối với bờ là $\\vec{v} = (15; 5; 0)\\text{ km/h}$.",
              correctAnswer: true,
              explanation: "$\\vec{v} = \\vec{v}_1 + \\vec{v}_2 = (15; 5; 0)$. ĐÚNG."
            },
            {
              id: "b",
              text: "Tốc độ thực tế của ca nô bằng $\\sqrt{250} \\approx 15.81\\text{ km/h}$.",
              correctAnswer: true,
              explanation: "$|\\vec{v}| = \\sqrt{15^2 + 5^2} = \\sqrt{225 + 25} = \\sqrt{250}$. ĐÚNG."
            },
            {
              id: "c",
              text: "Sau $2$ giờ, ca nô dịch chuyển được quãng đường $30\\text{ km}$ theo phương trục $Ox$.",
              correctAnswer: true,
              explanation: "$x = 15 \\times 2 = 30\\text{ km}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Góc lệch của hướng chuyển động so với phương thẳng góc với bờ sông là $45^{\\circ}$.",
              correctAnswer: false,
              explanation: "$\\tan \\alpha = \\frac{v_y}{v_x} = \\frac{5}{15} = \\frac{1}{3} \\implies \\alpha \\approx 18.43^{\\circ} \\ne 45^{\\circ}$. SAI."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot2-d2-sa1",
          badge: "SA 1 - Độ dài vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Trong không gian $Oxyz$, cho $\\vec{u} = (2; -6; 3)$. Tính độ dài $|\\vec{u}|$.",
          correctAnswer: "7",
          acceptableAnswers: ["7", "7.0"],
          explanation: "$|\\vec{u}| = \\sqrt{4 + 36 + 9} = \\sqrt{49} = 7$."
        },
        {
          id: "ot2-d2-sa2",
          badge: "SA 2 - Khoảng cách hai điểm",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Tính khoảng cách từ điểm $A(1; 2; 2)$ đến gốc tọa độ $O(0; 0; 0)$.",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "$OA = \\sqrt{1 + 4 + 4} = 3$."
        },
        {
          id: "ot2-d2-sa3",
          badge: "SA 3 - Góc giữa hai vectơ theo độ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Cho $\\vec{u} = (1; 0; 0)$ và $\\vec{v} = (1; 1; 0)$. Tính số đo góc $(\\vec{u}, \\vec{v})$ theo đơn vị độ.",
          correctAnswer: "45",
          acceptableAnswers: ["45", "45.0"],
          explanation: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies 45^{\\circ}$."
        },
        {
          id: "ot2-d2-sa4",
          badge: "SA 4 - Cao độ điểm đối xứng",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Cho điểm $A(2; 3; -4)$. Điểm $A'$ đối xứng với $A$ qua mặt phẳng $(Oxy)$. Tìm cao độ $z_{A'}$ của $A'$.",
          correctAnswer: "4",
          acceptableAnswers: ["4", "4.0"],
          explanation: "Đối xứng qua $(Oxy)$ thì đổi dấu cao độ: $z_{A'} = -(-4) = 4$."
        },
        {
          id: "ot2-d2-sa5",
          badge: "SA 5 - Công của lực dịch chuyển",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Lực $\\vec{F} = (10; 20; 30)\\text{ N}$ làm vật dịch chuyển $\\vec{s} = (3; 1; 2)\\text{ m}$. Tính công $A$ (J).",
          correctAnswer: "110",
          acceptableAnswers: ["110", "110.0"],
          explanation: "$A = 10(3) + 20(1) + 30(2) = 30 + 20 + 60 = 110\\text{ J}$."
        },
        {
          id: "ot2-d2-sa6",
          badge: "SA 6 - Hoành độ điểm thỏa mãn hệ thức vectơ",
          source: "Đề ôn tập cuối chương II - Đề số 2",
          prompt: "Cho $A(2; 1; 0)$ và $B(8; 4; 6)$. Điểm $M$ thỏa mãn $\\overrightarrow{AM} = \\frac{1}{3}\\overrightarrow{AB}$. Tìm hoành độ $x_M$.",
          correctAnswer: "4",
          acceptableAnswers: ["4", "4.0"],
          explanation: "$x_M = x_A + \\frac{1}{3}(x_B - x_A) = 2 + \\frac{1}{3}(6) = 4$."
        }
      ]
    },
    {
      id: "ot2-de-3",
      title: "Đề ôn tập số 3",
      description: "Đề ôn tập tổng hợp cuối Chương II (Mức độ Vận dụng - Vận dụng cao & ĐGNL) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot2-d3-q1",
          badge: "Câu 1 - Thông hiểu - Tọa độ trọng tâm",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Cho tam giác $ABC$ có $A(1; 1; 2), B(2; 0; 1), C(0; 2; 3)$. Trọng tâm $G$ của tam giác có tọa độ là:",
          options: ["$(1; 1; 2)$", "$(3; 3; 6)$", "$(1; 1; 3)$", "$(0; 1; 2)$"],
          correctIndex: 0,
          explanation: "$x_G = \\frac{1+2+0}{3} = 1, y_G = 1, z_G = 2 \\implies G(1; 1; 2)$."
        },
        {
          id: "ot2-d3-q2",
          badge: "Câu 2 - Thông hiểu - Điều kiện thẳng hàng",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Cho $A(1; 2; 3), B(2; 3; 4), C(0; 1; z)$. Giá trị của $z$ để ba điểm $A, B, C$ thẳng hàng là:",
          options: ["$z = 2$", "$z = 1$", "$z = 3$", "$z = 0$"],
          correctIndex: 0,
          explanation: "$\\overrightarrow{AB} = (1; 1; 1), \\overrightarrow{AC} = (-1; -1; z - 3)$. Thẳng hàng khi $\\frac{-1}{1} = \\frac{-1}{1} = \\frac{z-3}{1} \\implies z - 3 = -1 \\implies z = 2$."
        },
        {
          id: "ot2-d3-q3",
          badge: "Câu 3 - Vận dụng - Điểm trên Ox cách đều",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Tìm điểm $M$ trên trục $Ox$ cách đều hai điểm $A(1; 2; 3)$ và $B(-1; 4; 1)$.",
          options: ["$M(-1; 0; 0)$", "$M(1; 0; 0)$", "$M(2; 0; 0)$", "$M(0; 0; 0)$"],
          correctIndex: 0,
          explanation: "$M(x; 0; 0) \\implies (x-1)^2 + 4 + 9 = (x+1)^2 + 16 + 1 \\iff x^2 - 2x + 14 = x^2 + 2x + 18 \\iff 4x = -4 \\iff x = -1$."
        },
        {
          id: "ot2-d3-q4",
          badge: "Câu 4 - Vận dụng - Tọa độ trực tâm tam giác",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Cho tam giác $OAB$ với $O(0; 0; 0), A(2; 0; 0), B(0; 4; 0)$. Trực tâm $H$ của tam giác $OAB$ là:",
          options: ["$O(0; 0; 0)$", "$A(2; 0; 0)$", "$B(0; 4; 0)$", "$(1; 2; 0)$"],
          correctIndex: 0,
          explanation: "Tam giác $OAB$ vuông tại $O$ nên trực tâm trùng với đỉnh góc vuông $O(0; 0; 0)$."
        },
        {
          id: "ot2-d3-q5",
          badge: "Câu 5 - Vận dụng - Góc giữa hai đường chéo hình hộp",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Cosin của góc giữa hai đường chéo $AC'$ và $BD'$ bằng:",
          options: ["$\\frac{1}{3}$", "$0$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{3}$"],
          correctIndex: 0,
          explanation: "Tọa độ hóa: $A(0; 0; 0), C'(1; 1; 1) \\implies \\overrightarrow{AC'} = (1; 1; 1)$. $B(1; 0; 0), D'(0; 1; 1) \\implies \\overrightarrow{BD'} = (-1; 1; 1)$. $\\cos = \\frac{-1 + 1 + 1}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{1}{3}$."
        },
        {
          id: "ot2-d3-q6",
          badge: "Câu 6 - Vận dụng - Cân bằng ba lực",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Ba lực $\\vec{F}_1 = (10; 20; 30)\\text{ N}, \\vec{F}_2 = (20; -10; 10)\\text{ N}$ và $\\vec{F}_3$ tác dụng vào một chất điểm làm chất điểm cân bằng. Độ lớn lực $\\vec{F}_3$ bằng:",
          options: ["$10\\sqrt{26}\\text{ N}$", "$50\\text{ N}$", "$10\\sqrt{14}\\text{ N}$", "$40\\text{ N}$"],
          correctIndex: 0,
          explanation: "$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -(30; 10; 40) = (-30; -10; -40)$. Độ lớn: $\\sqrt{900 + 100 + 1600} = \\sqrt{2600} = 10\\sqrt{26}\\text{ N}$."
        },
        {
          id: "ot2-d3-q7",
          badge: "Câu 7 - Vận dụng cao - Tối ưu hóa tổng khoảng cách",
          source: "Đề thi ĐGNL ĐHQG TP.HCM",
          question: "Cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 5)$. Điểm $M$ thuộc mặt phẳng $(Oxy)$ sao cho $MA^2 + MB^2$ đạt giá trị nhỏ nhất có tọa độ là:",
          options: ["$(2; 3; 0)$", "$(1; 2; 0)$", "$(3; 4; 0)$", "$(2; 3; 4)$"],
          correctIndex: 0,
          explanation: "Trung điểm $I$ của $AB$ là $I(2; 3; 4)$. Ta có $MA^2 + MB^2 = 2MI^2 + \\frac{AB^2}{2}$. Tổng nhỏ nhất khi $MI$ ngắn nhất $\\iff M$ là hình chiếu của $I$ lên $(Oxy)$, tức $M(2; 3; 0)$."
        },
        {
          id: "ot2-d3-q8",
          badge: "Câu 8 - Vận dụng cao - Thể tích khối tứ diện",
          source: "Đề thi Học sinh giỏi Toán 12",
          question: "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = 3, OB = 4, OC = 5$. Thể tích khối tứ diện $OABC$ bằng:",
          options: ["$10$", "$20$", "$60$", "$30$"],
          correctIndex: 0,
          explanation: "$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} (3 \\times 4 \\times 5) = 10$."
        },
        {
          id: "ot2-d3-q9",
          badge: "Câu 9 - Vận dụng cao - Bán kính mặt cầu ngoại tiếp tứ diện vuông",
          source: "Đề thi thử Tốt nghiệp THPT 2025",
          question: "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc với $OA = 2, OB = 4, OC = 4$. Bán kính mặt cầu ngoại tiếp tứ diện $OABC$ bằng:",
          options: ["$3$", "$6$", "$\\sqrt{6}$", "$\\frac{9}{2}$"],
          correctIndex: 0,
          explanation: "$R = \\frac{\\sqrt{OA^2 + OB^2 + OC^2}}{2} = \\frac{\\sqrt{4 + 16 + 16}}{2} = \\frac{\\sqrt{36}}{2} = 3$."
        },
        {
          id: "ot2-d3-q10",
          badge: "Câu 10 - Vận dụng cao - Bài toán tên lửa không gian",
          source: "Đề thi Đánh giá Tư duy ĐHBK",
          question: "Một tên lửa vũ trụ được phóng từ bệ phóng $O(0; 0; 0)$ với vận tốc không đổi $\\vec{v} = (3; 4; 12)\\text{ km/s}$. Sau $10$ giây, khoảng cách từ tên lửa đến bệ phóng bằng:",
          options: ["$130\\text{ km}$", "$120\\text{ km}$", "$150\\text{ km}$", "$100\\text{ km}$"],
          correctIndex: 0,
          explanation: "Tốc độ: $|\\vec{v}| = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13\\text{ km/s}$. Quãng đường sau 10s: $d = 13 \\times 10 = 130\\text{ km}$."
        },
        {
          id: "ot2-d3-q11",
          badge: "Câu 11 - Vận dụng cao - Tọa độ tâm đối xứng",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Cho hình bình hành $ABCD$ có $A(1; 0; 2), B(2; 3; -1), C(4; 5; 0)$. Tọa độ tâm đối xứng $I$ của hình bình hành là:",
          options: ["$\\left(\\frac{5}{2}; \\frac{5}{2}; 1\\right)$", "$(3; 4; 1)$", "$\\left(2; \\frac{3}{2}; \\frac{1}{2}\\right)$", "$(5; 5; 2)$"],
          correctIndex: 0,
          explanation: "Tâm $I$ là trung điểm đường chéo $AC$: $x_I = \\frac{1+4}{2} = \\frac{5}{2}, y_I = \\frac{5}{2}, z_I = \\frac{2+0}{2} = 1$."
        },
        {
          id: "ot2-d3-q12",
          badge: "Câu 12 - Vận dụng cao - Điểm thuộc Oz tạo tam giác đều",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          question: "Cho $A(1; 0; 0)$ và $B(-1; 0; 0)$. Điểm $M$ thuộc tia $Oz$ sao cho tam giác $MAB$ đều có tọa độ là:",
          options: ["$M(0; 0; \\sqrt{3})$", "$M(0; 0; 1)$", "$M(0; 0; 2)$", "$M(0; 0; \\sqrt{2})$"],
          correctIndex: 0,
          explanation: "$AB = 2$. $M(0; 0; z)$ với $z > 0 \\implies MA = \\sqrt{1 + z^2} = 2 \\iff z^2 = 3 \\implies z = \\sqrt{3}$. Vậy $M(0; 0; \\sqrt{3})$."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot2-d3-tf1",
          badge: "TF 1 - Tọa độ hóa tứ diện đều",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Cho tứ diện $OABC$ có $OA = OB = OC = a$ và ba góc tại đỉnh $O$ đều bằng $90^{\\circ}$. Chọn gốc tọa độ tại $O$, các điểm $A(a; 0; 0), B(0; a; 0), C(0; 0; a)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Độ dài ba cạnh đáy $AB = BC = CA = a\\sqrt{2}$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "b",
              text: "Tọa độ trọng tâm tam giác đáy $ABC$ là $G\\left(\\frac{a}{3}; \\frac{a}{3}; \\frac{a}{3}\\right)$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "c",
              text: "Vectơ $\\overrightarrow{OG}$ vuông góc với mặt phẳng $(ABC)$.",
              correctAnswer: true,
              explanation: "$\\overrightarrow{OG} = \\frac{a}{3}(1; 1; 1), \\overrightarrow{AB} = (-a; a; 0) \\implies \\overrightarrow{OG} \\cdot \\overrightarrow{AB} = 0$. Tương tự với $\\overrightarrow{AC}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Khoảng cách từ $O$ đến mặt phẳng $(ABC)$ bằng $\\frac{a}{\\sqrt{3}}$.",
              correctAnswer: true,
              explanation: "$OG = \\sqrt{\\frac{a^2}{9} + \\frac{a^2}{9} + \\frac{a^2}{9}} = \\sqrt{\\frac{3a^2}{9}} = \\frac{a}{\\sqrt{3}}$. ĐÚNG."
            }
          ]
        },
        {
          id: "ot2-d3-tf2",
          badge: "TF 2 - Khối đa diện và điểm đối xứng",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Trong không gian $Oxyz$, cho hình hộp chữ nhật có ba kích thước $2, 3, 6$ đặt tại gốc $O$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Độ dài đường chéo của hình hộp bằng $7$.",
              correctAnswer: true,
              explanation: "$d = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$. ĐÚNG."
            },
            {
              id: "b",
              text: "Bán kính mặt cầu ngoại tiếp hình hộp chữ nhật bằng $3.5$.",
              correctAnswer: true,
              explanation: "$R = \\frac{d}{2} = \\frac{7}{2} = 3.5$. ĐÚNG."
            },
            {
              id: "c",
              text: "Thể tích của hình hộp chữ nhật bằng $36$.",
              correctAnswer: true,
              explanation: "$V = 2 \\times 3 \\times 6 = 36$. ĐÚNG."
            },
            {
              id: "d",
              text: "Tâm đối xứng của hình hộp có tọa độ là $(1; 1.5; 3)$.",
              correctAnswer: true,
              explanation: "$I\\left(\\frac{2}{2}; \\frac{3}{2}; \\frac{6}{2}\\right) = (1; 1.5; 3)$. ĐÚNG."
            }
          ]
        },
        {
          id: "ot2-d3-tf3",
          badge: "TF 3 - Hợp lực và chuyển động không gian",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Một chiếc máy bay không người lái (drone) khối lượng $2\\text{ kg}$ bay trong không gian với lực nâng $\\vec{F}_1 = (0; 0; 30)\\text{ N}$, lực đẩy động cơ $\\vec{F}_2 = (20; 10; 0)\\text{ N}$ và chịu trọng lực $\\vec{P} = (0; 0; -20)\\text{ N}$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Hợp lực tác dụng lên drone là $\\vec{F} = (20; 10; 10)\\text{ N}$.",
              correctAnswer: true,
              explanation: "$\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{P} = (20; 10; 30 - 20) = (20; 10; 10)\\text{ N}$. ĐÚNG."
            },
            {
              id: "b",
              text: "Độ lớn của hợp lực bằng $\\sqrt{600} = 10\\sqrt{6}\\text{ N}$.",
              correctAnswer: true,
              explanation: "$|\\vec{F}| = \\sqrt{400 + 100 + 100} = \\sqrt{600} = 10\\sqrt{6}\\text{ N}$. ĐÚNG."
            },
            {
              id: "c",
              text: "Gia tốc của drone có độ lớn là $5\\sqrt{6}\\text{ m/s}^2$.",
              correctAnswer: true,
              explanation: "$a = \\frac{|\\vec{F}|}{m} = \\frac{10\\sqrt{6}}{2} = 5\\sqrt{6}\\text{ m/s}^2$. ĐÚNG."
            },
            {
              id: "d",
              text: "Drone chuyển động đi xuống vì trọng lực kéo xuống.",
              correctAnswer: false,
              explanation: "Thành phần lực theo phương thẳng đứng $F_z = 30 - 20 = 10\\text{ N} > 0$ nên drone chuyển động bay lên. SAI."
            }
          ]
        },
        {
          id: "ot2-d3-tf4",
          badge: "TF 4 - Tọa độ hóa công trình mái nhà",
          source: "Đề thi ĐGNL ĐHQG Hà Nội",
          prompt: "Mái nhà hình chóp có bốn góc chân cột đặt tại $A(0; 0; 0), B(6; 0; 0), C(6; 8; 0), D(0; 8; 0)$ và đỉnh nóc $S(3; 4; 4)$ (mét). Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Đáy nhà $ABCD$ là hình chữ nhật có diện tích $48\\text{ m}^2$.",
              correctAnswer: true,
              explanation: "$S = 6 \\times 8 = 48\\text{ m}^2$. ĐÚNG."
            },
            {
              id: "b",
              text: "Hình chiếu của đỉnh nóc $S$ lên mặt phẳng sàn $(ABCD)$ là tâm đối xứng của hình chữ nhật.",
              correctAnswer: true,
              explanation: "Tâm đối xứng sàn là $I(3; 4; 0)$, trùng với hình chiếu của $S(3; 4; 4)$ lên $(Oxy)$. ĐÚNG."
            },
            {
              id: "c",
              text: "Độ dài xà gồ từ $S$ đến góc $A$ là $\\sqrt{41}\\text{ m}$.",
              correctAnswer: true,
              explanation: "$SA = \\sqrt{3^2 + 4^2 + 4^2} = \\sqrt{9 + 16 + 16} = \\sqrt{41}\\text{ m}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Bốn thanh xà gồ $SA, SB, SC, SD$ có độ dài không bằng nhau.",
              correctAnswer: false,
              explanation: "Vì hình chiếu của $S$ là tâm hình chữ nhật nên $SA = SB = SC = SD = \\sqrt{41}\\text{ m}$. SAI."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot2-d3-sa1",
          badge: "SA 1 - Bình phương độ lớn hợp lực",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Cho ba lực vuông góc đôi một $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ có độ lớn lần lượt là $20\\text{ N}, 30\\text{ N}, 60\\text{ N}$. Tính độ lớn của hợp lực (N).",
          correctAnswer: "70",
          acceptableAnswers: ["70", "70.0"],
          explanation: "$F = \\sqrt{20^2 + 30^2 + 60^2} = \\sqrt{400 + 900 + 3600} = \\sqrt{4900} = 70\\text{ N}$."
        },
        {
          id: "ot2-d3-sa2",
          badge: "SA 2 - Khoảng cách từ điểm đến gốc tọa độ",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(6; 8; 24)$ đến gốc tọa độ $O$.",
          correctAnswer: "26",
          acceptableAnswers: ["26", "26.0"],
          explanation: "$OM = \\sqrt{6^2 + 8^2 + 24^2} = \\sqrt{36 + 64 + 576} = \\sqrt{676} = 26$."
        },
        {
          id: "ot2-d3-sa3",
          badge: "SA 3 - Tìm tung độ của điểm",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Cho ba điểm $A(1; 2; -1), B(2; -1; 3), C(0; y; 1)$. Biết ba điểm $A, B, C$ tạo thành tam giác có trọng tâm nằm trên trục $Oz$. Tìm tung độ $y$ của điểm $C$.",
          correctAnswer: "-1",
          acceptableAnswers: ["-1", "-1.0"],
          explanation: "Trọng tâm nằm trên trục $Oz \\implies y_G = 0 \\iff \\frac{2 + (-1) + y}{3} = 0 \\iff 1 + y = 0 \\iff y = -1$."
        },
        {
          id: "ot2-d3-sa4",
          badge: "SA 4 - Góc giữa hai đường thẳng theo độ",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Trong không gian $Oxyz$, cho hai vectơ chỉ phương $\\vec{u}_1 = (1; 1; 0)$ và $\\vec{u}_2 = (0; 1; 0)$. Tính số đo góc giữa hai vectơ này theo đơn vị độ.",
          correctAnswer: "45",
          acceptableAnswers: ["45", "45.0"],
          explanation: "$\\cos = \\frac{1}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}} \\implies 45^{\\circ}$."
        },
        {
          id: "ot2-d3-sa5",
          badge: "SA 5 - Công sinh bởi trọng lực",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Một vật nặng $10\\text{ kg}$ rơi tự do từ độ cao $15\\text{ m}$ xuống mặt đất (lấy $g = 9.8\\text{ m/s}^2$). Tính công do trọng lực sinh ra theo đơn vị Jun (J).",
          correctAnswer: "1470",
          acceptableAnswers: ["1470", "1470.0"],
          explanation: "$A = mgh = 10 \\times 9.8 \\times 15 = 1470\\text{ J}$."
        },
        {
          id: "ot2-d3-sa6",
          badge: "SA 6 - Hoành độ điểm cực trị khoảng cách",
          source: "Đề ôn tập cuối chương II - Đề số 3",
          prompt: "Cho hai điểm $A(1; 3; 4)$ và $B(5; 1; 2)$. Tìm hoành độ của điểm $M$ trên trục $Ox$ sao cho $MA^2 + MB^2$ nhỏ nhất.",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "Trung điểm $I$ của $AB$ có hoành độ $x_I = \\frac{1+5}{2} = 3$. Để $MA^2 + MB^2 = 2MI^2 + \\frac{AB^2}{2}$ nhỏ nhất thì $M$ là hình chiếu của $I$ lên trục $Ox$, tức là $x_M = x_I = 3$."
        }
      ]
    }
  ]
};

// ============================================================================
// KHO BÀI TẬP LUYỆN THÊM AI (AI PRACTICE PACKAGE)
// CẤU TRÚC ĐỐI ỨNG 1-1 (16 MCQ + 4 TF + 8 SA)
// ============================================================================

export const GRADE_12_CHAPTER_2_REVIEW_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-ot2-q1",
      badge: "Luyện thêm 1 - Vectơ tổng đối ứng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Vectơ tổng $\\overrightarrow{A'B'} + \\overrightarrow{B'C} + \\overrightarrow{CA}$ bằng vectơ nào sau đây?",
      options: [
        "$\\overrightarrow{A'A}$",
        "$\\vec{0}$",
        "$\\overrightarrow{AA'}$",
        "$\\overrightarrow{B'B}$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{A'B'} + \\overrightarrow{B'C} + \\overrightarrow{CA} = \\overrightarrow{A'C} + \\overrightarrow{CA} = \\overrightarrow{A'A}$."
    },
    {
      id: "ai-ot2-q2",
      badge: "Luyện thêm 2 - Đọc tọa độ từ biểu thức vectơ đơn vị",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho vectơ $\\vec{v} = -3\\vec{j} + 4\\vec{k} + 2\\vec{i}$. Tọa độ của vectơ $\\vec{v}$ là:",
      options: [
        "$(2; -3; 4)$",
        "$(-3; 4; 2)$",
        "$(2; 4; -3)$",
        "$(4; -3; 2)$"
      ],
      correctIndex: 0,
      explanation: "Sắp xếp theo thứ tự $\\vec{i}, \\vec{j}, \\vec{k}$: $\\vec{v} = 2\\vec{i} - 3\\vec{j} + 4\\vec{k} \\implies (2; -3; 4)$."
    },
    {
      id: "ai-ot2-q3",
      badge: "Luyện thêm 3 - Tọa độ trung điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho hai điểm $P(-3; 2; 5)$ và $Q(7; -4; 1)$. Tọa độ trung điểm $M$ của $PQ$ là:",
      options: [
        "$(2; -1; 3)$",
        "$(4; -2; 6)$",
        "$(5; -3; 3)$",
        "$(2; 1; 3)$"
      ],
      correctIndex: 0,
      explanation: "$M\\left(\\frac{-3+7}{2}; \\frac{2-4}{2}; \\frac{5+1}{2}\\right) = (2; -1; 3)$."
    },
    {
      id: "ai-ot2-q4",
      badge: "Luyện thêm 4 - Hình chiếu lên mặt phẳng Oxz",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Hình chiếu vuông góc của điểm $K(-4; 7; 2)$ lên mặt phẳng $(Oxz)$ có tọa độ là:",
      options: [
        "$(-4; 0; 2)$",
        "$(0; 7; 0)$",
        "$(-4; 7; 0)$",
        "$(0; 7; 2)$"
      ],
      correctIndex: 0,
      explanation: "Chiếu lên $(Oxz)$ thì tung độ bằng $0$, hoành độ và cao độ giữ nguyên: $(-4; 0; 2)$."
    },
    {
      id: "ai-ot2-q5",
      badge: "Luyện thêm 5 - Tích vô hướng hai vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hai vectơ $\\vec{a} = (3; -1; 2)$ và $\\vec{b} = (2; 4; -1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: [
        "$0$",
        "$2$",
        "$-2$",
        "$4$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} \\cdot \\vec{b} = 3(2) + (-1)(4) + 2(-1) = 6 - 4 - 2 = 0$."
    },
    {
      id: "ai-ot2-q6",
      badge: "Luyện thêm 6 - Độ dài vectơ không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, độ dài của vectơ $\\vec{u} = (1; -4; 8)$ bằng:",
      options: [
        "$9$",
        "$\\sqrt{81}$",
        "$\\sqrt{65}$",
        "$7$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{u}| = \\sqrt{1 + 16 + 64} = \\sqrt{81} = 9$."
    },
    {
      id: "ai-ot2-q7",
      badge: "Luyện thêm 7 - Đỉnh thứ tư hình bình hành",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho ba điểm $M(0; 1; 2), N(2; 3; 1), P(4; 1; 5)$. Tìm tọa độ điểm $Q$ để $MNPQ$ là hình bình hành.",
      options: [
        "$Q(2; -1; 6)$",
        "$Q(6; 3; 4)$",
        "$Q(2; 3; 6)$",
        "$Q(-2; 1; -2)$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{MQ} = \\overrightarrow{NP} \\iff (x_Q; y_Q - 1; z_Q - 2) = (2; -2; 4) \\implies Q(2; -1; 6)$."
    },
    {
      id: "ai-ot2-q8",
      badge: "Luyện thêm 8 - Tìm tham số để hai vectơ trực giao",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho $\\vec{u} = (x; -2; 3)$ và $\\vec{v} = (3; 1; -2)$. Tìm $x$ để hai vectơ vuông góc.",
      options: [
        "$\\frac{8}{3}$",
        "$8$",
        "$-8$",
        "$-\\frac{8}{3}$"
      ],
      correctIndex: 0,
      explanation: "$3x + (-2)(1) + 3(-2) = 0 \\iff 3x - 8 = 0 \\iff x = \\frac{8}{3}$."
    },
    {
      id: "ai-ot2-q9",
      badge: "Luyện thêm 9 - Cosin góc giữa hai vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Tính cosin của góc giữa $\\vec{a} = (2; 1; 2)$ và $\\vec{b} = (0; 3; 4)$.",
      options: [
        "$\\frac{11}{15}$",
        "$\\frac{1}{2}$",
        "$\\frac{7}{15}$",
        "$\\frac{3}{5}$"
      ],
      correctIndex: 0,
      explanation: "$\\cos = \\frac{2(0) + 1(3) + 2(4)}{\\sqrt{4+1+4} \\cdot \\sqrt{0+9+16}} = \\frac{11}{3 \\times 5} = \\frac{11}{15}$."
    },
    {
      id: "ai-ot2-q10",
      badge: "Luyện thêm 10 - Điều kiện ba điểm thẳng hàng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho ba điểm $A(2; 1; -1), B(4; 3; 1), C(6; 5; z)$. Tìm $z$ để ba điểm thẳng hàng.",
      options: [
        "$z = 3$",
        "$z = 2$",
        "$z = -3$",
        "$z = 5$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (2; 2; 2), \\overrightarrow{AC} = (4; 4; z + 1)$. Để cùng phương thì $\\frac{4}{2} = 2 \\implies \\frac{z+1}{2} = 2 \\implies z = 3$."
    },
    {
      id: "ai-ot2-q11",
      badge: "Luyện thêm 11 - Điểm cách đều trên trục hoành",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Tìm tọa độ điểm $N$ trên trục $Ox$ cách đều hai điểm $A(1; 2; 3)$ và $B(3; 0; 1)$.",
      options: [
        "$N(-1; 0; 0)$",
        "$N(1; 0; 0)$",
        "$N(2; 0; 0)$",
        "$N(0; 0; 0)$"
      ],
      correctIndex: 0,
      explanation: "$N(x; 0; 0) \\implies (x-1)^2 + 13 = (x-3)^2 + 1 \\iff -2x + 14 = -6x + 10 \\iff 4x = -4 \\iff x = -1$."
    },
    {
      id: "ai-ot2-q12",
      badge: "Luyện thêm 12 - Công của lực trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Lực $\\vec{F} = (40; 10; -20)\\text{ N}$ làm vật dịch chuyển từ $A(0; 1; 2)$ đến $B(3; 5; 4)$ (mét). Công cơ học thực hiện bằng:",
      options: [
        "$120\\text{ J}$",
        "$160\\text{ J}$",
        "$100\\text{ J}$",
        "$140\\text{ J}$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (3; 4; 2) \\implies A = 40(3) + 10(4) + (-20)(2) = 120 + 40 - 40 = 120\\text{ J}$."
    },
    {
      id: "ai-ot2-q13",
      badge: "Luyện thêm 13 - Trọng tâm tứ diện",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Tọa độ trọng tâm $G$ của tứ diện $ABCD$ với $A(2; 1; 0), B(1; 3; 2), C(3; 2; 4), D(2; 2; 2)$ là:",
      options: [
        "$(2; 2; 2)$",
        "$(8; 8; 8)$",
        "$(1; 1; 1)$",
        "$\\left(\\frac{4}{3}; \\frac{4}{3}; \\frac{4}{3}\\right)$"
      ],
      correctIndex: 0,
      explanation: "$x_G = \\frac{2+1+3+2}{4} = 2, y_G = 2, z_G = 2 \\implies G(2; 2; 2)$."
    },
    {
      id: "ai-ot2-q14",
      badge: "Luyện thêm 14 - Tọa độ hóa hình lập phương",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tích vô hướng $\\overrightarrow{AC} \\cdot \\overrightarrow{BD}$ bằng:",
      options: [
        "$0$",
        "$1$",
        "$-1$",
        "$2$"
      ],
      correctIndex: 0,
      explanation: "Đáy $ABCD$ là hình vuông nên hai đường chéo vuông góc: $AC \\perp BD \\implies \\overrightarrow{AC} \\cdot \\overrightarrow{BD} = 0$."
    },
    {
      id: "ai-ot2-q15",
      badge: "Luyện thêm 15 - Giá trị nhỏ nhất tổng khoảng cách",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho $A(2; 3; 4), B(4; 1; 2)$. Điểm $M$ thuộc $(Oxz)$ sao cho $MA^2 + MB^2$ nhỏ nhất có tọa độ là:",
      options: [
        "$(3; 0; 3)$",
        "$(3; 2; 3)$",
        "$(0; 2; 0)$",
        "$(2; 0; 4)$"
      ],
      correctIndex: 0,
      explanation: "Trung điểm $I$ của $AB$ là $I(3; 2; 3)$. Chiếu $I$ lên $(Oxz)$ được $M(3; 0; 3)$."
    },
    {
      id: "ai-ot2-q16",
      badge: "Luyện thêm 16 - Cân bằng ba lực góc bằng nhau",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một chất điểm làm chất điểm cân bằng. Biết $|\\vec{F}_1| = 30\\text{ N}, |\\vec{F}_2| = 40\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Độ lớn của lực $\\vec{F}_3$ bằng:",
      options: [
        "$50\\text{ N}$",
        "$70\\text{ N}$",
        "$10\\text{ N}$",
        "$25\\text{ N}$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) \\implies |\\vec{F}_3| = |\\vec{F}_1 + \\vec{F}_2| = \\sqrt{30^2 + 40^2} = 50\\text{ N}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-ot2-tf1",
      badge: "Luyện thêm TF 1 - Tọa độ vectơ và điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho ba điểm $M(1; 3; -2), N(3; 1; 4)$ và $P(-1; 5; 0)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{MN} = (2; -2; 6)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{MN} = (3 - 1; 1 - 3; 4 - (-2)) = (2; -2; 6)$. ĐÚNG."
        },
        {
          id: "b",
          text: "Trung điểm của $MP$ có tọa độ là $(0; 4; -1)$.",
          correctAnswer: true,
          explanation: "$I\\left(\\frac{1-1}{2}; \\frac{3+5}{2}; \\frac{-2+0}{2}\\right) = (0; 4; -1)$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đoạn thẳng $MN$ bằng $2\\sqrt{11}$.",
          correctAnswer: true,
          explanation: "$MN = \\sqrt{4 + 4 + 36} = \\sqrt{44} = 2\\sqrt{11}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Ba điểm $M, N, P$ thẳng hàng.",
          correctAnswer: false,
          explanation: "$\\overrightarrow{MP} = (-2; 2; 2)$. $\\frac{-2}{2} = \\frac{2}{-2} = -1 \\ne \\frac{2}{6}$. Không thẳng hàng. SAI."
        }
      ]
    },
    {
      id: "ai-ot2-tf2",
      badge: "Luyện thêm TF 2 - Phép toán vectơ và trực giao",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho $\\vec{u} = (2; -1; 2)$ và $\\vec{v} = (1; 2; 0)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.",
          correctAnswer: true,
          explanation: "$2(1) + (-1)(2) + 2(0) = 2 - 2 + 0 = 0$. ĐÚNG."
        },
        {
          id: "b",
          text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài $|\\vec{u}| = 3$ và $|\\vec{v}| = \\sqrt{5}$.",
          correctAnswer: true,
          explanation: "$|\\vec{u}| = \\sqrt{4+1+4} = 3$, $|\\vec{v}| = \\sqrt{1+4+0} = \\sqrt{5}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Độ dài vectơ tổng $|\\vec{u} + \\vec{v}| = 3 + \\sqrt{5}$.",
          correctAnswer: false,
          explanation: "Vì hai vectơ vuông góc nên $|\\vec{u} + \\vec{v}| = \\sqrt{3^2 + (\\sqrt{5})^2} = \\sqrt{9 + 5} = \\sqrt{14} \\ne 3 + \\sqrt{5}$. SAI."
        }
      ]
    },
    {
      id: "ai-ot2-tf3",
      badge: "Luyện thêm TF 3 - Tọa độ hóa hình hộp chữ nhật",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có kích thước $AB = 3, AD = 4, AA' = 5$. Đặt hệ tọa độ $Oxyz$ tại $A$ với các tia $Ax, Ay, Az$ lần lượt trùng với $AB, AD, AA'$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Tọa độ đỉnh $C'$ là $(3; 4; 5)$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "b",
          text: "Tâm của hình hộp chữ nhật là $I(1.5; 2; 2.5)$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đường chéo $AC' = 5\\sqrt{2}$.",
          correctAnswer: true,
          explanation: "$AC' = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Vectơ $\\overrightarrow{AC'}$ vuông góc với vectơ $\\overrightarrow{BD}$.",
          correctAnswer: false,
          explanation: "$\\overrightarrow{BD} = (-3; 4; 0) \\implies \\overrightarrow{AC'} \\cdot \\overrightarrow{BD} = 3(-3) + 4(4) + 5(0) = -9 + 16 = 7 \\ne 0$. SAI."
        }
      ]
    },
    {
      id: "ai-ot2-tf4",
      badge: "Luyện thêm TF 4 - Chuyển động trực thăng cứu hộ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một trực thăng cứu hộ cất cánh từ sân bay $A(0; 0; 0)$ bay theo hướng thẳng đều đến điểm gặp nạn $B(30; 40; 2)$ sau $15$ phút (đơn vị tọa độ là km). Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Vectơ dịch chuyển của trực thăng là $\\overrightarrow{AB} = (30; 40; 2)\\text{ km}$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "b",
          text: "Quãng đường trực thăng đã bay xấp xỉ $50.04\\text{ km}$.",
          correctAnswer: true,
          explanation: "$d = \\sqrt{30^2 + 40^2 + 2^2} = \\sqrt{900 + 1600 + 4} = \\sqrt{2504} \\approx 50.04\\text{ km}$. ĐÚNG."
        },
        {
          id: "c",
          text: "Vận tốc trung bình của trực thăng lớn hơn $200\\text{ km/h}$.",
          correctAnswer: true,
          explanation: "Thời gian $t = 0.25$ giờ $\\implies v = \\frac{50.04}{0.25} \\approx 200.16 > 200\\text{ km/h}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Độ cao của điểm gặp nạn là $200\\text{ m}$.",
          correctAnswer: false,
          explanation: "Cao độ $z = 2\\text{ km} = 2000\\text{ m} \\ne 200\\text{ m}$. SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-ot2-sa1",
      badge: "Luyện thêm SA 1 - Tích vô hướng",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho $\\vec{a} = (3; 1; -2)$ và $\\vec{b} = (2; -4; 1)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
      correctAnswer: "0",
      acceptableAnswers: ["0", "0.0"],
      explanation: "$3(2) + 1(-4) + (-2)(1) = 6 - 4 - 2 = 0$."
    },
    {
      id: "ai-ot2-sa2",
      badge: "Luyện thêm SA 2 - Khoảng cách hai điểm",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tính khoảng cách giữa hai điểm $M(1; -1; 2)$ và $N(4; 3; 2)$.",
      correctAnswer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "$MN = \\sqrt{(4-1)^2 + (3-(-1))^2 + 0} = \\sqrt{9 + 16} = 5$."
    },
    {
      id: "ai-ot2-sa3",
      badge: "Luyện thêm SA 3 - Tìm m để trực giao",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho $\\vec{u} = (m; 2; -4)$ và $\\vec{v} = (3; -1; 1)$. Tìm $m$ để hai vectơ vuông góc với nhau.",
      correctAnswer: "2",
      acceptableAnswers: ["2", "2.0"],
      explanation: "$3m + 2(-1) + (-4)(1) = 0 \\iff 3m - 6 = 0 \\iff m = 2$."
    },
    {
      id: "ai-ot2-sa4",
      badge: "Luyện thêm SA 4 - Cao độ trọng tâm",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho tam giác $ABC$ có $A(1; 0; 5), B(2; 3; -1), C(0; 0; 8)$. Tìm cao độ $z_G$ của trọng tâm $G$.",
      correctAnswer: "4",
      acceptableAnswers: ["4", "4.0"],
      explanation: "$z_G = \\frac{5 - 1 + 8}{3} = \\frac{12}{3} = 4$."
    },
    {
      id: "ai-ot2-sa5",
      badge: "Luyện thêm SA 5 - Góc giữa hai vectơ theo độ",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tính góc giữa hai vectơ $\\vec{u} = (0; 1; 1)$ và $\\vec{v} = (0; 0; 1)$ theo đơn vị độ.",
      correctAnswer: "45",
      acceptableAnswers: ["45", "45.0"],
      explanation: "$\\cos = \\frac{1}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}} \\implies 45^{\\circ}$."
    },
    {
      id: "ai-ot2-sa6",
      badge: "Luyện thêm SA 6 - Công sinh bởi lực",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một lực $\\vec{F} = (20; 40; 10)\\text{ N}$ làm vật dịch chuyển $\\vec{s} = (5; 2; 2)\\text{ m}$. Tính công $A$ (J).",
      correctAnswer: "200",
      acceptableAnswers: ["200", "200.0"],
      explanation: "$A = 20(5) + 40(2) + 10(2) = 100 + 80 + 20 = 200\\text{ J}$."
    },
    {
      id: "ai-ot2-sa7",
      badge: "Luyện thêm SA 7 - Bình phương độ dài vectơ",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho $\\vec{u} = (4; 3; 12)$. Tính bình phương độ dài $|\\vec{u}|^2$.",
      correctAnswer: "169",
      acceptableAnswers: ["169", "169.0"],
      explanation: "$|\\vec{u}|^2 = 16 + 9 + 144 = 169$."
    },
    {
      id: "ai-ot2-sa8",
      badge: "Luyện thêm SA 8 - Điểm chia đoạn thẳng",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho $A(1; 1; 1)$ và $B(5; 9; 13)$. Điểm $M$ thuộc đoạn thẳng $AB$ thỏa mãn $MA = 3MB$. Tìm tung độ $y_M$.",
      correctAnswer: "7",
      acceptableAnswers: ["7", "7.0"],
      explanation: "$\\overrightarrow{AM} = 3\\overrightarrow{MB} \\implies y_M - 1 = 3(9 - y_M) \\iff 4y_M = 28 \\iff y_M = 7$."
    }
  ]
};
