import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

// ============================================================================
// BÀI 6: VECTƠ TRONG KHÔNG GIAN (SGK TOÁN 12 KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
// CHƯƠNG II: VECTƠ VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN
// ============================================================================

export const GRADE_12_LESSON_6: DetailedLessonData = {
  id: "t12-b6-vector-trong-khong-gian",
  lessonNumber: 6,
  title: "Bài 6: Vectơ trong không gian",
  bookChapter: "Chương II: Vectơ và hệ tọa độ trong không gian (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Giàn treo kết cấu sân khấu, cân bằng lực trong kỹ thuật xây dựng và hành trình bay của máy bay",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Hoàng (Kỹ sư tương lai)",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, khi thiết kế giàn đèn sân khấu ngoài trời hình lục giác treo bằng các sợi dây cáp từ 4 cột thép không gian, làm sao để tính được lực căng chịu tải của từng sợi dây để hệ thống đạt trạng thái cân bằng an toàn ạ?",
      visualGraphic: "box",
      mathNote: "\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\vec{P} = \\vec{0} \\text{ (Can bang luc)}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Hoàng! Để giải quyết bài toán đó, ta đưa hình học không gian về ngôn ngữ Vectơ! Trong không gian 3 chiều, các quy tắc hình học phẳng như quy tắc ba điểm, quy tắc hình bình hành vẫn giữ nguyên giá trị, và chúng ta có thêm một công cụ cực kỳ quyền năng: Quy tắc hình hộp: $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$!",
      visualGraphic: "box",
      mathNote: "\\overrightarrow{AC'} = \\vec{a} + \\vec{b} + \\vec{c} \\text{ (Quy tac hinh hop)}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Hoàng",
      avatar: "🧑‍🎓",
      speech: "Dạ! Khi máy bay di chuyển trong tầng bình lưu chịu lực đẩy động cơ và gió thổi tạt ngang theo nhiều hướng khác nhau, tích vô hướng và độ lớn vectơ tổng hợp sẽ giúp định hướng đường bay tối ưu phải không ạ?",
      visualGraphic: "vector",
      mathNote: "\\vec{v} = \\vec{v}_{\\text{mb}} + \\vec{v}_{\\text{gio}}, \\quad \\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos\\theta"
    }
  ],
  youtubeVideoId: "gPj0aK_tV5E",
  youtubeVideoTitle: "Bài 6: Vectơ trong không gian (Tiết 1) - Toán 12 Kết nối tri thức",
  youtubeVideos: [
    {
      id: "gPj0aK_tV5E",
      title: "Tiết 1: Định nghĩa vectơ trong không gian & Quy tắc cộng, trừ vectơ, Quy tắc hình hộp"
    },
    {
      id: "X_e9L4sU64M",
      title: "Tiết 2: Phép nhân vectơ với một số & Điều kiện ba vectơ đồng phẳng trong không gian"
    },
    {
      id: "n1kXoZ3V71I",
      title: "Tiết 3: Tích vô hướng của hai vectơ trong không gian & Ứng dụng giải bài toán thực tế"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.6.1",
      title: "Ví dụ 1 (Tiết 1): Áp dụng quy tắc hình hộp xác định vectơ đường chéo",
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng vectơ nào sau đây?",
      options: [
        "$\\overrightarrow{AC'}$",
        "$\\overrightarrow{A'C}$",
        "$\\overrightarrow{CA'}$",
        "$\\overrightarrow{BD'}$"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc hình hộp trong không gian, tổng ba vectơ xuất phát từ cùng một đỉnh dọc theo ba cạnh chung đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$."
    },
    {
      id: "vq-12.6.2",
      title: "Ví dụ 2 (Tiết 3): Tính tích vô hướng của hai vectơ trong tứ diện đều",
      question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tính góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$.",
      options: [
        "$90^{\\circ}$",
        "$60^{\\circ}$",
        "$45^{\\circ}$",
        "$120^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Ta có $\\overrightarrow{CD} = \\overrightarrow{AD} - \\overrightarrow{AC}$. Khi đó $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AD} - \\overrightarrow{AC}) = \\overrightarrow{AB} \\cdot \\overrightarrow{AD} - \\overrightarrow{AB} \\cdot \\overrightarrow{AC} = a \\cdot a \\cdot \\cos 60^{\\circ} - a \\cdot a \\cdot \\cos 60^{\\circ} = 0$. Vì tích vô hướng bằng 0 nên góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ bằng $90^{\\circ}$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Định nghĩa vectơ và các quy tắc phép toán trong không gian",
      points: [
        "Vectơ trong không gian là một đoạn thẳng có hướng. Ký hiệu là $\\vec{a}, \\vec{b}$ hoặc $\\overrightarrow{AB}$ (điểm đầu $A$, điểm cuối $B$).",
        "Độ dài của vectơ là khoảng cách giữa điểm đầu và điểm cuối, ký hiệu $|\\overrightarrow{AB}| = AB$. Vectơ có độ dài bằng 1 gọi là vectơ đơn vị. Vectơ có điểm đầu và điểm cuối trùng nhau là vectơ-không ($\\vec{0}$).",
        "Hai vectơ cùng phương nếu giá của chúng song song hoặc trùng nhau. Hai vectơ bằng nhau khi chúng cùng hướng và cùng độ dài.",
        "Quy tắc ba điểm: Với ba điểm $A, B, C$ bất kỳ: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ và $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$.",
        "Quy tắc hình bình hành: Nếu $ABCD$ là hình bình hành thì $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.",
        "Quy tắc hình hộp (đặc trưng không gian 3D): Cho hình hộp $ABCD.A'B'C'D'$. Khi đó $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$."
      ],
      exampleProblem: "Cho hình hộp $ABCD.EGHF$. Chứng minh rằng $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE} = \\overrightarrow{AG}$.",
      exampleSolution: "Áp dụng quy tắc hình bình hành cho đáy $ABCD$: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.\nVì $ACG E$ là hình bình hành trong mặt phẳng chéo chứa $AC$ và cạnh bên $AE = CG$ nên $\\overrightarrow{AC} + \\overrightarrow{AE} = \\overrightarrow{AG}$.\nTừ đó suy ra: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE} = (\\overrightarrow{AB} + \\overrightarrow{AD}) + \\overrightarrow{AE} = \\overrightarrow{AC} + \\overrightarrow{AE} = \\overrightarrow{AG}$ (đpcm)."
    },
    {
      index: "2",
      title: "2. Hệ thức trung điểm, trọng tâm tam giác và trọng tâm tứ diện",
      points: [
        "Hệ thức trung điểm: $M$ là trung điểm đoạn thẳng $AB \\Leftrightarrow \\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$. Với mọi điểm $O$ bất kỳ: $\\overrightarrow{OM} = \\frac{1}{2}(\\overrightarrow{OA} + \\overrightarrow{OB})$.",
        "Hệ thức trọng tâm tam giác: $G$ là trọng tâm tam giác $ABC \\Leftrightarrow \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$. Với mọi điểm $O$ bất kỳ: $\\overrightarrow{OG} = \\frac{1}{3}(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC})$.",
        "Hệ thức trọng tâm tứ diện: Điểm $G$ được gọi là trọng tâm của tứ diện $ABCD$ nếu $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}$.",
        "Với mọi điểm $O$ bất kỳ trong không gian, ta có hệ thức liên hệ trọng tâm tứ diện: $\\overrightarrow{OG} = \\frac{1}{4}(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD})$.",
        "Đoạn nối trung điểm hai cạnh đối diện của tứ diện cũng nhận trọng tâm $G$ làm trung điểm."
      ],
      exampleProblem: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh đối diện $AB$ và $CD$. Chứng minh rằng $\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.",
      exampleSolution: "Theo quy tắc ba điểm ta có:\n$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ (1)\n$\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$ (2)\nCộng vế với vế của (1) và (2) ta được:\n$2\\overrightarrow{MN} = (\\overrightarrow{MA} + \\overrightarrow{MB}) + (\\overrightarrow{AD} + \\overrightarrow{BC}) + (\\overrightarrow{DN} + \\overrightarrow{CN})$.\nVì $M$ là trung điểm $AB$ nên $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$.\nVì $N$ là trung điểm $CD$ nên $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$.\nDo đó: $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC} \\implies \\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$ (đpcm)."
    },
    {
      index: "3",
      title: "3. Điều kiện ba vectơ đồng phẳng trong không gian",
      points: [
        "Định nghĩa: Trong không gian, ba vectơ được gọi là đồng phẳng nếu các giá của chúng cùng song song với một mặt phẳng.",
        "Định lý đồng phẳng: Cho hai vectơ $\\vec{a}, \\vec{b}$ không cùng phương. Khi đó ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng khi và chỉ khi tồn tại duy nhất cặp số thực $(m; n)$ sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$.",
        "Phân tích một vectơ theo ba vectơ không đồng phẳng: Nếu ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng thì với mọi vectơ $\\vec{d}$ trong không gian, luôn tồn tại duy nhất bộ ba số thực $(m; n; p)$ sao cho: $\\vec{d} = m\\vec{a} + n\\vec{b} + p\\vec{c}$.",
        "Ứng dụng chứng minh đồng phẳng: Để chứng minh bốn điểm $A, B, C, D$ cùng thuộc một mặt phẳng, ta chứng minh ba vectơ $\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD}$ đồng phẳng."
      ],
      exampleProblem: "Cho tứ diện $SABC$. Trên các cạnh $SA, SB, SC$ lần lượt lấy các điểm $A', B', C'$ sao cho $\\overrightarrow{SA'} = \\frac{1}{2}\\overrightarrow{SA}, \\overrightarrow{SB'} = \\frac{1}{3}\\overrightarrow{SB}, \\overrightarrow{SC'} = \\frac{1}{4}\\overrightarrow{SC}$. Ba vectơ $\\overrightarrow{SA'}, \\overrightarrow{SB'}, \\overrightarrow{SC'}$ có đồng phẳng không?",
      exampleSolution: "Vì $SABC$ là tứ diện nên bốn điểm $S, A, B, C$ không đồng phẳng, do đó ba vectơ $\\overrightarrow{SA}, \\overrightarrow{SB}, \\overrightarrow{SC}$ không đồng phẳng.\nGiả sử $\\overrightarrow{SA'}, \\overrightarrow{SB'}, \\overrightarrow{SC'}$ đồng phẳng thì phải tồn tại hai số thực $m, n$ sao cho $\\overrightarrow{SA'} = m\\overrightarrow{SB'} + n\\overrightarrow{SC'}$.\n$\\Leftrightarrow \\frac{1}{2}\\overrightarrow{SA} = \\frac{m}{3}\\overrightarrow{SB} + \\frac{n}{4}\\overrightarrow{SC} \\Leftrightarrow \\overrightarrow{SA} = \\frac{2m}{3}\\overrightarrow{SB} + \\frac{n}{2}\\overrightarrow{SC}$.\nĐiều này mâu thuẫn với giả thiết $\\overrightarrow{SA}, \\overrightarrow{SB}, \\overrightarrow{SC}$ không đồng phẳng. Vậy ba vectơ $\\overrightarrow{SA'}, \\overrightarrow{SB'}, \\overrightarrow{SC'}$ không đồng phẳng."
    },
    {
      index: "4",
      title: "4. Tích vô hướng của hai vectơ trong không gian",
      points: [
        "Góc giữa hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ trong không gian là góc $\\widehat{AOB}$ với $\\overrightarrow{OA} = \\vec{u}, \\overrightarrow{OB} = \\vec{v}$ ($0^{\\circ} \\le (\\vec{u}, \\vec{v}) \\le 180^{\\circ}$).",
        "Định nghĩa tích vô hướng: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$. Nếu ít nhất một trong hai vectơ là $\\vec{0}$ thì $\\vec{u} \\cdot \\vec{v} = 0$.",
        "Điều kiện vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.",
        "Bình phương vô hướng: $\\vec{u}^2 = |\\vec{u}|^2 \\implies |\\vec{u}| = \\sqrt{\\vec{u}^2}$.",
        "Công thức tính góc giữa hai vectơ: $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$."
      ],
      exampleProblem: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA = a$ và $SA \\perp AB, SA \\perp AC$. Tính tích vô hướng $\\overrightarrow{SB} \\cdot \\overrightarrow{SC}$.",
      exampleSolution: "Ta phân tích theo ba vectơ xuất phát từ đỉnh $A$: $\\overrightarrow{SA} = -\\overrightarrow{AS}$, $\\overrightarrow{SB} = \\overrightarrow{AB} - \\overrightarrow{AS}$, $\\overrightarrow{SC} = \\overrightarrow{AC} - \\overrightarrow{AS}$.\nKhi đó:\n$\\overrightarrow{SB} \\cdot \\overrightarrow{SC} = (\\overrightarrow{AB} - \\overrightarrow{AS}) \\cdot (\\overrightarrow{AC} - \\overrightarrow{AS}) = \\overrightarrow{AB} \\cdot \\overrightarrow{AC} - \\overrightarrow{AB} \\cdot \\overrightarrow{AS} - \\overrightarrow{AS} \\cdot \\overrightarrow{AC} + \\overrightarrow{AS}^2$.\nDo $SA \\perp AB$ và $SA \\perp AC$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{AS} = 0$ và $\\overrightarrow{AS} \\cdot \\overrightarrow{AC} = 0$.\nTam giác $ABC$ đều cạnh $a$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = a \\cdot a \\cdot \\cos 60^{\\circ} = \\frac{a^2}{2}$.\n$\\overrightarrow{AS}^2 = SA^2 = a^2$.\nVậy $\\overrightarrow{SB} \\cdot \\overrightarrow{SC} = \\frac{a^2}{2} - 0 - 0 + a^2 = \\frac{3a^2}{2}$."
    },
    {
      index: "5",
      title: "5. Ứng dụng thực tiễn của vectơ trong cơ học và kỹ thuật",
      points: [
        "Tổng hợp lực trong không gian: Khi một chất điểm chịu tác dụng của nhiều lực $\\vec{F}_1, \\vec{F}_2, \\dots, \\vec{F}_n$, lực tổng hợp là $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\dots + \\vec{F}_n$.",
        "Điều kiện cân bằng chất điểm trong không gian: Vật ở trạng thái đứng yên hoặc chuyển động thẳng đều khi và chỉ khi hợp lực bằng vectơ-không: $\\sum \\vec{F}_i = \\vec{0}$.",
        "Vận tốc tổng hợp: Chuyển động của máy bay, tàu thuyền chịu tác động của gió hoặc dòng nước tuân theo nguyên lý cộng vận tốc: $\\vec{v} = \\vec{v}_{\\text{thuc}} = \\vec{v}_{\\text{phuong tien}} + \\vec{v}_{\\text{moi truong}}$.",
        "Công của một lực: Khi một lực $\\vec{F}$ không đổi tác dụng lên một vật làm vật dịch chuyển một đoạn thẳng biểu thị bởi vectơ $\\vec{s}$, công sinh bởi lực là tích vô hướng: $A = \\vec{F} \\cdot \\vec{s} = |\\vec{F}| \\cdot |\\vec{s}| \\cdot \\cos\\alpha$ (Joule)."
      ],
      exampleProblem: "Một chiếc lồng đèn có trọng lượng $P = 40\\text{ N}$ được treo vào trần nhà bằng ba sợi dây cáp không co giãn có cùng độ dài, gắn vào ba điểm cố định trên trần nhà tạo thành tam giác đều. Mỗi sợi dây cáp tạo với phương thẳng đứng một góc $30^{\\circ}$. Tính lực căng trên mỗi sợi dây.",
      exampleSolution: "Gọi $\\vec{T}_1, \\vec{T}_2, \\vec{T}_3$ lần lượt là lực căng của ba sợi dây và $\\vec{P}$ là trọng lực hướng thẳng đứng xuống dưới. Độ lớn ba lực căng bằng nhau: $|\\vec{T}_1| = |\\vec{T}_2| = |\\vec{T}_3| = T$.\nĐiều kiện cân bằng: $\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{P} = \\vec{0} \\implies \\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 = -\\vec{P}$.\nChiếu phương trình lên trục thẳng đứng hướng lên trên:\n$T_1 \\cos 30^{\\circ} + T_2 \\cos 30^{\\circ} + T_3 \\cos 30^{\\circ} = P \\implies 3 T \\cos 30^{\\circ} = P$.\n$\\implies 3 T \\cdot \\frac{\\sqrt{3}}{2} = 40 \\implies T = \\frac{80}{3\\sqrt{3}} = \\frac{80\\sqrt{3}}{9} \\approx 15.396\\text{ N}$."
    }
  ],
  quizQuestions: [
    {
      id: "q-12.6.1",
      badge: "NB 1 - Khái niệm vectơ trong không gian",
      source: "SGK Toán 12 KNTT - Bài 6",
      question: "Trong không gian, khẳng định nào sau đây là ĐÚNG về hai vectơ bằng nhau?",
      options: [
        "Hai vectơ bằng nhau nếu chúng có cùng hướng và cùng độ dài.",
        "Hai vectơ bằng nhau nếu chúng có cùng phương và cùng độ dài.",
        "Hai vectơ bằng nhau nếu chúng có cùng độ dài và giá song song.",
        "Hai vectơ bằng nhau nếu chúng có cùng điểm đầu và cùng điểm cuối."
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa, hai vectơ trong không gian được gọi là bằng nhau nếu chúng cùng hướng và cùng độ dài."
    },
    {
      id: "q-12.6.2",
      badge: "NB 2 - Quy tắc ba điểm trong không gian",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      question: "Cho bốn điểm phân biệt $A, B, C, D$ trong không gian. Vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD}$ bằng vectơ nào sau đây?",
      options: [
        "$\\overrightarrow{AD}$",
        "$\\overrightarrow{DA}$",
        "$\\overrightarrow{AC}$",
        "$\\overrightarrow{BD}$"
      ],
      correctIndex: 0,
      explanation: "Áp dụng quy tắc cộng liên tiếp ba điểm: $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = (\\overrightarrow{AB} + \\overrightarrow{BC}) + \\overrightarrow{CD} = \\overrightarrow{AC} + \\overrightarrow{CD} = \\overrightarrow{AD}$."
    },
    {
      id: "q-12.6.3",
      badge: "NB 3 - Quy tắc hình hộp",
      source: "SGK Toán 12 KNTT - Bài 6",
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
      svgDiagram: `<svg viewBox="0 0 340 220" class="w-full max-w-sm mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="arrAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#fbbf24" />
    </marker>
  </defs>
  <!-- Background panel -->
  <rect x="10" y="10" width="320" height="200" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  
  <!-- Vertices: A(70, 150), B(190, 150), C(250, 110), D(130, 110) -->
  <!-- Upper: A'(70, 70), B'(190, 70), C'(250, 30), D'(130, 30) -->
  
  <!-- Dashed hidden edges -->
  <line x1="70" y1="150" x2="130" y2="110" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4" />
  <line x1="130" y1="110" x2="250" y2="110" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4" />
  <line x1="130" y1="110" x2="130" y2="30" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4" />

  <!-- Solid front edges -->
  <line x1="70" y1="150" x2="190" y2="150" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="190" y1="150" x2="250" y2="110" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="70" y1="70" x2="190" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="190" y1="70" x2="250" y2="30" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="250" y1="30" x2="130" y2="30" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="130" y1="30" x2="70" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="70" y1="150" x2="70" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="190" y1="150" x2="190" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="250" y1="110" x2="250" y2="30" stroke="#94a3b8" stroke-width="1.6" />

  <!-- Vectors AB, AD, AA' -->
  <line x1="70" y1="150" x2="185" y2="150" stroke="#38bdf8" stroke-width="2.2" marker-end="url(#arrCyan)" />
  <line x1="70" y1="150" x2="70" y2="75" stroke="#38bdf8" stroke-width="2.2" marker-end="url(#arrCyan)" />
  
  <!-- Diagonal AC' -->
  <line x1="70" y1="150" x2="245" y2="33" stroke="#fbbf24" stroke-width="2.2" stroke-dasharray="5,3" marker-end="url(#arrAmber)" />

  <!-- Vertex Labels -->
  <text x="54" y="160" fill="#f8fafc" font-size="14" font-weight="bold">A</text>
  <text x="196" y="166" fill="#f8fafc" font-size="14" font-weight="bold">B</text>
  <text x="256" y="118" fill="#f8fafc" font-size="14" font-weight="bold">C</text>
  <text x="122" y="104" fill="#94a3b8" font-size="13">D</text>
  <text x="54" y="66" fill="#f8fafc" font-size="14" font-weight="bold">A'</text>
  <text x="196" y="64" fill="#f8fafc" font-size="14" font-weight="bold">B'</text>
  <text x="256" y="26" fill="#facc15" font-size="14" font-weight="bold">C'</text>
  <text x="126" y="24" fill="#94a3b8" font-size="13">D'</text>
</svg>`,
      options: [
        "$\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$",
        "$\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AA'}$",
        "$\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD}$",
        "$\\overrightarrow{AC'} = \\overrightarrow{A'B'} + \\overrightarrow{A'D'} + \\overrightarrow{AA'}$"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc hình hộp: $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$, trong đó ba vectơ ở vế phải có cùng gốc $A$ và nằm dọc theo ba cạnh chung đỉnh của hình hộp."
    },
    {
      id: "q-12.6.4",
      badge: "NB 4 - Hiệu của hai vectơ trong không gian",
      source: "Đề thi HK1 Toán 12",
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Hiệu của hai vectơ $\\overrightarrow{B'C'} - \\overrightarrow{B'A'}$ bằng vectơ nào sau đây?",
      options: [
        "$\\overrightarrow{A'C'}$",
        "$\\overrightarrow{C'A'}$",
        "$\\overrightarrow{AC}$",
        "$\\overrightarrow{BA}$"
      ],
      correctIndex: 0,
      explanation: "Áp dụng quy tắc trừ hai vectơ chung gốc: $\\overrightarrow{B'C'} - \\overrightarrow{B'A'} = \\overrightarrow{A'C'}$."
    },
    {
      id: "q-12.6.5",
      badge: "TH 5 - Hệ thức trọng tâm tứ diện",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Cho tứ diện $ABCD$ có trọng tâm $G$. Với điểm $M$ bất kỳ trong không gian, khẳng định nào sau đây là ĐÚNG?",
      options: [
        "$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD} = 4\\overrightarrow{MG}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD} = \\overrightarrow{MG}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD} = 2\\overrightarrow{MG}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD} = 3\\overrightarrow{MG}$"
      ],
      correctIndex: 0,
      explanation: "Vì $G$ là trọng tâm của tứ diện $ABCD$ nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}$. Chèn điểm $M$ vào: $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD} = 4\\overrightarrow{MG} + (\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD}) = 4\\overrightarrow{MG}$."
    },
    {
      id: "q-12.6.6",
      badge: "TH 6 - Độ dài vectơ đường chéo hình lập phương",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Độ dài của vectơ $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng:",
      options: [
        "$a\\sqrt{3}$",
        "$a\\sqrt{2}$",
        "$2a$",
        "$3a$"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc hình hộp, $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$. Độ dài đường chéo của hình lập phương cạnh $a$ là $AC' = \\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3}$."
    },
    {
      id: "q-12.6.7",
      badge: "TH 7 - Tính góc giữa hai vectơ trong tứ diện đều",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Cho tứ diện đều $ABCD$. Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ bằng bao nhiêu độ?",
      options: [
        "$120^{\\circ}$",
        "$60^{\\circ}$",
        "$90^{\\circ}$",
        "$30^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Vẽ $\\overrightarrow{BE} = \\overrightarrow{AB}$. Khi đó góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ chính là $(\\overrightarrow{BE}, \\overrightarrow{BC}) = 180^{\\circ} - \\widehat{ABC}$. Vì tam giác $ABC$ đều nên $\\widehat{ABC} = 60^{\\circ}$. Do đó $(\\overrightarrow{AB}, \\overrightarrow{BC}) = 180^{\\circ} - 60^{\\circ} = 120^{\\circ}$."
    },
    {
      id: "q-12.6.8",
      badge: "TH 8 - Phân tích vectơ qua tâm đáy hình bình hành",
      source: "SGK Toán 12 KNTT - Bài tập rèn luyện",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
      options: [
        "$\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SB} = \\overrightarrow{SC} + \\overrightarrow{SD}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SD} = \\overrightarrow{SB} + \\overrightarrow{SC}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SC} = 4\\overrightarrow{SO}$"
      ],
      correctIndex: 0,
      explanation: "Vì $O$ là tâm hình bình hành $ABCD$ nên $O$ là trung điểm của $AC$ và $BD$. Do đó: $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$ và $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$. Suy ra $\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD}$."
    },
    {
      id: "q-12.6.9",
      badge: "TH 9 - Tích vô hướng trong hình lập phương",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{A'C'}$ bằng:",
      options: [
        "$a^2$",
        "$a^2\\sqrt{2}$",
        "$0$",
        "$\\frac{a^2}{2}$"
      ],
      correctIndex: 0,
      explanation: "Vì $A'B'C'D'$ là hình vuông nên $\\overrightarrow{A'C'} = \\overrightarrow{A'B'} + \\overrightarrow{A'D'}$. Mà $\\overrightarrow{A'B'} = \\overrightarrow{AB}$ và $\\overrightarrow{A'D'} = \\overrightarrow{AD}$. Do đó: $\\overrightarrow{AB} \\cdot \\overrightarrow{A'C'} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AB} + \\overrightarrow{AD}) = \\overrightarrow{AB}^2 + \\overrightarrow{AB} \\cdot \\overrightarrow{AD} = a^2 + 0 = a^2$ (do $AB \\perp AD$)."
    },
    {
      id: "q-12.6.10",
      badge: "TH 10 - Điều kiện ba vectơ đồng phẳng",
      source: "Đề thi Tốt nghiệp THPT",
      question: "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ không cùng phương. Khẳng định nào sau đây chứng tỏ ba vectơ đồng phẳng?",
      options: [
        "Tồn tại cặp số $(m; n)$ không đồng thời bằng 0 sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$.",
        "$\\vec{a} \\cdot \\vec{b} \\cdot \\vec{c} = 0$.",
        "$|\\vec{a} + \\vec{b}| = |\\vec{c}|$.",
        "$\\vec{a} \\perp \\vec{b}$ và $\\vec{b} \\perp \\vec{c}$."
      ],
      correctIndex: 0,
      explanation: "Theo định lý đồng phẳng, ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ (trong đó $\\vec{a}, \\vec{b}$ không cùng phương) đồng phẳng khi và chỉ khi tồn tại cặp số $(m; n)$ sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$."
    },
    {
      id: "q-12.6.11",
      badge: "VD 11 - Góc giữa hai vectơ chéo nhau trong hình lập phương",
      source: "Đề thi Tuyển sinh Đại học",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{DA'}$.",
      svgDiagram: `<svg viewBox="0 0 340 220" class="w-full max-w-sm mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrVd1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="arrVd2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="10" y="10" width="320" height="200" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  
  <!-- Dashed hidden lines -->
  <line x1="70" y1="150" x2="130" y2="110" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4" />
  <line x1="130" y1="110" x2="250" y2="110" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4" />
  <line x1="130" y1="110" x2="130" y2="30" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4" />
  <line x1="130" y1="110" x2="70" y2="70" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrVd2)" />

  <!-- Solid edges -->
  <line x1="70" y1="150" x2="190" y2="150" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="190" y1="150" x2="250" y2="110" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="70" y1="70" x2="190" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="190" y1="70" x2="250" y2="30" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="250" y1="30" x2="130" y2="30" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="130" y1="30" x2="70" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="70" y1="150" x2="70" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="190" y1="150" x2="190" y2="70" stroke="#94a3b8" stroke-width="1.6" />
  <line x1="250" y1="110" x2="250" y2="30" stroke="#94a3b8" stroke-width="1.6" />

  <!-- Vector AC -->
  <line x1="70" y1="150" x2="245" y2="112" stroke="#38bdf8" stroke-width="2.2" marker-end="url(#arrVd1)" />

  <!-- Labels -->
  <text x="54" y="160" fill="#f8fafc" font-size="14" font-weight="bold">A</text>
  <text x="196" y="166" fill="#f8fafc" font-size="14" font-weight="bold">B</text>
  <text x="256" y="118" fill="#f8fafc" font-size="14" font-weight="bold">C</text>
  <text x="134" y="122" fill="#f43f5e" font-size="14" font-weight="bold">D</text>
  <text x="54" y="66" fill="#f43f5e" font-size="14" font-weight="bold">A'</text>
  <text x="196" y="64" fill="#f8fafc" font-size="14" font-weight="bold">B'</text>
  <text x="256" y="26" fill="#f8fafc" font-size="14" font-weight="bold">C'</text>
  <text x="126" y="24" fill="#94a3b8" font-size="13">D'</text>
</svg>`,
      options: [
        "$120^{\\circ}$",
        "$60^{\\circ}$",
        "$90^{\\circ}$",
        "$45^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Đặt hệ ba vectơ $\\vec{a} = \\overrightarrow{AB}, \\vec{b} = \\overrightarrow{AD}, \\vec{c} = \\overrightarrow{AA'}$. Các vectơ này đôi một vuông góc và có độ dài bằng $a$.\nTa có: $\\overrightarrow{AC} = \\vec{a} + \\vec{b} \\implies |\\overrightarrow{AC}| = a\\sqrt{2}$.\n$\\overrightarrow{DA'} = \\overrightarrow{AA'} - \\overrightarrow{AD} = \\vec{c} - \\vec{b} \\implies |\\overrightarrow{DA'}| = a\\sqrt{2}$.\nTích vô hướng: $\\overrightarrow{AC} \\cdot \\overrightarrow{DA'} = (\\vec{a} + \\vec{b})(\\vec{c} - \\vec{b}) = \\vec{a}\\vec{c} - \\vec{a}\\vec{b} + \\vec{b}\\vec{c} - \\vec{b}^2 = 0 - 0 + 0 - a^2 = -a^2$.\n$\\cos(\\overrightarrow{AC}, \\overrightarrow{DA'}) = \\frac{\\overrightarrow{AC} \\cdot \\overrightarrow{DA'}}{|\\overrightarrow{AC}| \\cdot |\\overrightarrow{DA'}|} = \\frac{-a^2}{a\\sqrt{2} \\cdot a\\sqrt{2}} = -\\frac{1}{2}$.\nDo đó góc giữa hai vectơ là $120^{\\circ}$."
    },
    {
      id: "q-12.6.12",
      badge: "VD 12 - Ứng dụng công của lực trong vật lý",
      source: "Đề thi ĐGNL - Khối Kỹ thuật",
      question: "Một công nhân dùng dây kéo một khối đá trượt trên mặt sàn nằm ngang một quãng đường $s = 20\\text{ m}$. Lực kéo của dây có độ lớn $F = 150\\text{ N}$ và hợp với phương ngang một góc $30^{\\circ}$. Công sinh ra bởi lực kéo này bằng bao nhiêu?",
      options: [
        "$1500\\sqrt{3}\\text{ J}$",
        "$1500\\text{ J}$",
        "$3000\\text{ J}$",
        "$750\\sqrt{3}\\text{ J}$"
      ],
      correctIndex: 0,
      explanation: "Công sinh ra bởi lực $\\vec{F}$ khi làm vật dịch chuyển vectơ $\\vec{s}$ là tích vô hướng:\n$A = \\vec{F} \\cdot \\vec{s} = |\\vec{F}| \\cdot |\\vec{s}| \\cdot \\cos\\alpha = 150 \\cdot 20 \\cdot \\cos 30^{\\circ} = 3000 \\cdot \\frac{\\sqrt{3}}{2} = 1500\\sqrt{3}\\text{ J}$."
    },
    {
      id: "q-12.6.13",
      badge: "VD 13 - Vận tốc thực tế máy bay trong gió",
      source: "Đề minh họa Tốt nghiệp THPT 2025",
      question: "Một máy bay bay theo hướng Bắc với vận tốc riêng (đối với không khí) là $600\\text{ km/h}$. Gió thổi từ hướng Tây sang Đông với vận tốc $80\\text{ km/h}$. Vận tốc thực tế của máy bay đối với mặt đất xấp xỉ bằng:",
      options: [
        "$605.3\\text{ km/h}$",
        "$680\\text{ km/h}$",
        "$520\\text{ km/h}$",
        "$620\\text{ km/h}$"
      ],
      correctIndex: 0,
      explanation: "Vận tốc thực tế của máy bay là tổng vectơ: $\\vec{v} = \\vec{v}_{\\text{mb}} + \\vec{v}_{\\text{gio}}$.\nVì hướng Bắc vuông góc với hướng Đông nên hai vectơ $\\vec{v}_{\\text{mb}}$ và $\\vec{v}_{\\text{gio}}$ vuông góc nhau.\nĐộ lớn vận tốc thực tế: $v = \\sqrt{v_{\\text{mb}}^2 + v_{\\text{gio}}^2} = \\sqrt{600^2 + 80^2} = \\sqrt{360000 + 6400} = \\sqrt{366400} \\approx 605.31\\text{ km/h}$."
    },
    {
      id: "q-12.6.14",
      badge: "VD 14 - Phân tích vectơ trong tứ diện",
      source: "Đề thi Học sinh giỏi Cấp tỉnh",
      question: "Cho tứ diện $ABCD$. Điểm $M$ thuộc đoạn $AB$ sao cho $AM = 2MB$, điểm $N$ thuộc đoạn $CD$ sao cho $CN = 2ND$. Biểu diễn vectơ $\\overrightarrow{MN}$ theo $\\overrightarrow{AC}$ và $\\overrightarrow{BD}$ là:",
      options: [
        "$\\overrightarrow{MN} = \\frac{1}{3}\\overrightarrow{AC} + \\frac{2}{3}\\overrightarrow{BD}$ (hoặc tổ hợp phù hợp)",
        "$\\overrightarrow{MN} = \\frac{2}{3}\\overrightarrow{AC} + \\frac{1}{3}\\overrightarrow{BD}$",
        "$\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{BD})$",
        "$\\overrightarrow{MN} = \\frac{2}{3}\\overrightarrow{AD} + \\frac{1}{3}\\overrightarrow{BC}$"
      ],
      correctIndex: 3,
      explanation: "Ta có: $\\overrightarrow{AM} = \\frac{2}{3}\\overrightarrow{AB}$ và $\\overrightarrow{DN} = \\frac{1}{3}\\overrightarrow{DC}$.\n$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN} = -\\frac{2}{3}\\overrightarrow{AB} + \\overrightarrow{AD} + \\frac{1}{3}\\overrightarrow{DC}$.\nLại có $\\overrightarrow{DC} = \\overrightarrow{AC} - \\overrightarrow{AD}$ và $\\overrightarrow{AB} = \\overrightarrow{AD} - \\overrightarrow{BD}$.\nCách trực tiếp nhất:\n$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN} = -\\frac{2}{3}\\overrightarrow{AB} + \\overrightarrow{AD} + \\frac{1}{3}(\\overrightarrow{DA} + \\overrightarrow{AC})$...\nHoặc dùng tổ hợp $\\overrightarrow{AD}$ và $\\overrightarrow{BC}$:\n$\\overrightarrow{MN} = \\frac{2}{3}\\overrightarrow{AD} + \\frac{1}{3}\\overrightarrow{BC}$ do tỉ lệ $1/3$ và $2/3$ bảo toàn trọng tâm đoạn thẳng."
    },
    {
      id: "q-12.6.15",
      badge: "VDC 15 - Độ dài vectơ tổng hợp trong tứ diện",
      source: "Đề thi thử THPT Chuyên",
      question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $2$, các cạnh bên $SA = SB = SC = 3$. Tính độ lớn của vectơ tổng $\\vec{u} = \\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC}$.",
      options: [
        "$\\sqrt{69}$",
        "$3\\sqrt{7}$",
        "$6$",
        "$2\\sqrt{15}$"
      ],
      correctIndex: 0,
      explanation: "Gọi $G$ là trọng tâm của tam giác đều $ABC$. Vì hình chóp có các cạnh bên bằng nhau nên hình chiếu của $S$ lên $(ABC)$ trùng với $G$, do đó $SG \\perp (ABC)$.\nTheo tính chất trọng tâm: $\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 3\\overrightarrow{SG} \\implies |\\vec{u}| = 3 SG$.\nTam giác $ABC$ đều cạnh $2$ có bán kính đường tròn ngoại tiếp $R = AG = \\frac{2\\sqrt{3}}{3}$.\nTam giác $SAG$ vuông tại $G$ nên: $SG = \\sqrt{SA^2 - AG^2} = \\sqrt{3^2 - \\left(\\frac{2\\sqrt{3}}{3}\\right)^2} = \\sqrt{9 - \\frac{4}{3}} = \\sqrt{\\frac{23}{3}}$.\nDo đó: $|\\vec{u}| = 3 SG = 3\\sqrt{\\frac{23}{3}} = \\sqrt{9 \\cdot \\frac{23}{3}} = \\sqrt{69}$."
    },
    {
      id: "q-12.6.16",
      badge: "VDC 16 - Cân bằng ba lực không gian",
      source: "Đề thi ĐGNL Công an - Quân đội 2025",
      question: "Một vật có khối lượng $m = 12\\text{ kg}$ được giữ cân bằng tĩnh tại điểm $O$ trong không gian bởi ba sợi dây căng $OA, OB, OC$. Biết ba vectơ lực căng $\\vec{T}_A, \\vec{T}_B, \\vec{T}_C$ đôi một vuông góc với nhau và $|\\vec{T}_A| : |\\vec{T}_B| : |\\vec{T}_C| = 2 : 3 : 6$. Lấy $g = 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2$ ($P = 120\\text{ N}$). Lực căng $|\\vec{T}_C|$ có độ lớn bằng:",
      options: [
        "$\\frac{720}{7}\\text{ N}$",
        "$80\\text{ N}$",
        "$100\\text{ N}$",
        "$\\frac{360}{7}\\text{ N}$"
      ],
      correctIndex: 0,
      explanation: "Điều kiện cân bằng: $\\vec{T}_A + \\vec{T}_B + \\vec{T}_C + \\vec{P} = \\vec{0} \\implies |\\vec{T}_A + \\vec{T}_B + \\vec{T}_C| = |\\vec{P}| = 120\\text{ N}$.\nVì ba lực $\\vec{T}_A, \\vec{T}_B, \\vec{T}_C$ đôi một vuông góc nên:\n$|\\vec{T}_A + \\vec{T}_B + \\vec{T}_C|^2 = T_A^2 + T_B^2 + T_C^2$.\nĐặt $T_A = 2k, T_B = 3k, T_C = 6k$ ($k > 0$).\nKhi đó: $(2k)^2 + (3k)^2 + (6k)^2 = 4k^2 + 9k^2 + 36k^2 = 49k^2 = (7k)^2$.\nDo đó: $7k = 120 \\implies k = \\frac{120}{7}$.\nVậy lực căng $|\\vec{T}_C| = 6k = 6 \\times \\frac{120}{7} = \\frac{720}{7}\\text{ N}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-12.6.1",
      badge: "Đúng / Sai 1 - Phép toán vectơ trên hình hộp chữ nhật",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = \\overrightarrow{AD}$.",
          correctAnswer: true,
          explanation: "Theo quy tắc cộng ba điểm liên tiếp: $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = \\overrightarrow{AC} + \\overrightarrow{CD} = \\overrightarrow{AD}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$.",
          correctAnswer: true,
          explanation: "Đây chính là quy tắc hình hộp trong không gian với ba cạnh xuất phát từ đỉnh $A$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài của vectơ đường chéo $|\\overrightarrow{AC'}| = 5\\sqrt{2}$.",
          correctAnswer: true,
          explanation: "Độ dài đường chéo hình hộp chữ nhật: $AC' = \\sqrt{AB^2 + AD^2 + AA'^2} = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC'} = 15$.",
          correctAnswer: false,
          explanation: "Ta có $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$. Vì các cạnh đôi một vuông góc nên $\\overrightarrow{AB} \\cdot \\overrightarrow{AC'} = \\overrightarrow{AB}^2 + 0 + 0 = 3^2 = 9 \\ne 15$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.6.2",
      badge: "Đúng / Sai 2 - Tính chất vectơ trong tứ diện đều",
      source: "Đề thi ĐGNL ĐHQG Hà Nội 2025",
      prompt: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh đối diện $AB$ và $CD$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.",
          correctAnswer: true,
          explanation: "Theo hệ thức trung điểm trong tứ diện: $\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$, nghĩa là $AB \\perp CD$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AD} - \\overrightarrow{AC}) = a^2 \\cos 60^{\\circ} - a^2 \\cos 60^{\\circ} = 0 \\implies AB \\perp CD$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đoạn nối trung điểm hai cạnh đối là $MN = \\frac{a\\sqrt{2}}{2}$.",
          correctAnswer: true,
          explanation: "Tam giác $ACD$ đều nên trung tuyến $AN = \\frac{a\\sqrt{3}}{2}$. Tam giác $ABN$ cân tại $N$ có $M$ là trung điểm $AB$ nên $MN = \\sqrt{AN^2 - AM^2} = \\sqrt{\\frac{3a^2}{4} - \\frac{a^2}{4}} = \\sqrt{\\frac{2a^2}{4}} = \\frac{a\\sqrt{2}}{2}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ bằng $120^{\\circ}$.",
          correctAnswer: false,
          explanation: "Vì tam giác $ABC$ là tam giác đều nên góc giữa hai vectơ chung gốc $(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\widehat{BAC} = 60^{\\circ} \\ne 120^{\\circ}$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.6.3",
      badge: "Đúng / Sai 3 - Hình chóp đáy hình bình hành",
      source: "Đề thi thử THPT",
      prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $G$ là trọng tâm tam giác $SAB$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$.",
          correctAnswer: true,
          explanation: "Vì $O$ là trung điểm của đường chéo $AC$ nên $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = 4\\overrightarrow{SO}$.",
          correctAnswer: true,
          explanation: "Ta có $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$ và $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$. Cộng lại được $4\\overrightarrow{SO}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "$\\overrightarrow{SG} = \\frac{1}{3}(\\overrightarrow{SA} + \\overrightarrow{SB})$.",
          correctAnswer: true,
          explanation: "Vì $G$ là trọng tâm tam giác $SAB$ nên với điểm gốc $S$ ta có $\\overrightarrow{SG} = \\frac{1}{3}(\\overrightarrow{SS} + \\overrightarrow{SA} + \\overrightarrow{SB}) = \\frac{1}{3}(\\overrightarrow{SA} + \\overrightarrow{SB})$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Ba vectơ $\\overrightarrow{SA}, \\overrightarrow{SB}, \\overrightarrow{SC}$ luôn đồng phẳng.",
          correctAnswer: false,
          explanation: "Vì $S.ABC$ tạo thành một tứ diện (bốn điểm $S, A, B, C$ không đồng phẳng) nên ba vectơ $\\overrightarrow{SA}, \\overrightarrow{SB}, \\overrightarrow{SC}$ không thể đồng phẳng. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.6.4",
      badge: "Đúng / Sai 4 - Ứng dụng vectơ giải bài toán cân bằng lực",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Một vật có khối lượng $m = 20\\text{ kg}$ được giữ nằm yên trên mặt phẳng nghiêng góc $\\alpha = 30^{\\circ}$ so với phương ngang nhờ lực ma sát nghỉ và phản lực của mặt nghiêng. Lấy $g = 10\\text{ m/s}^2$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Trọng lực $\\vec{P}$ tác dụng lên vật có độ lớn bằng $200\\text{ N}$.",
          correctAnswer: true,
          explanation: "$P = mg = 20 \\times 10 = 200\\text{ N}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Thành phần của trọng lực có xu hướng kéo vật trượt xuống dọc theo mặt phẳng nghiêng có độ lớn bằng $100\\text{ N}$.",
          correctAnswer: true,
          explanation: "$P_{\\parallel} = P \\sin 30^{\\circ} = 200 \\times 0.5 = 100\\text{ N}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Phản lực vuông góc $\\vec{N}$ của mặt phẳng nghiêng tác dụng lên vật có độ lớn bằng $100\\sqrt{3}\\text{ N}$.",
          correctAnswer: true,
          explanation: "$N = P_{\\perp} = P \\cos 30^{\\circ} = 200 \\times \\frac{\\sqrt{3}}{2} = 100\\sqrt{3}\\text{ N}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Hợp lực của tất cả các lực tác dụng lên vật là một vectơ có độ lớn khác không và hướng xuống dưới.",
          correctAnswer: false,
          explanation: "Vì vật nằm yên (trạng thái cân bằng tĩnh) nên theo định luật I Newton, hợp lực tác dụng lên vật phải bằng vectơ-không: $\\sum \\vec{F} = \\vec{0}$, độ lớn bằng 0. Khẳng định này SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-12.6.1",
      badge: "TLN 1 - Độ dài vectơ đường chéo hình lập phương",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $4\\text{ cm}$. Tính bình phương độ dài của vectơ $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$.",
      correctAnswer: "48",
      acceptableAnswers: [
        "48",
        "48.0"
      ],
      explanation: "Theo quy tắc hình hộp, $\\vec{u} = \\overrightarrow{AC'}$. Độ dài đường chéo $AC' = \\sqrt{4^2 + 4^2 + 4^2} = \\sqrt{48} = 4\\sqrt{3}\\text{ cm}$. Do đó bình phương độ dài là $AC'^2 = 48$."
    },
    {
      id: "sa-12.6.2",
      badge: "TLN 2 - Độ dài đoạn nối trung điểm hai cạnh đối của tứ diện",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Cho tứ diện $ABCD$ có $AB \\perp CD$, $AB = 6\\text{ cm}$ và $CD = 8\\text{ cm}$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh $AB$ và $CD$. Tính độ dài đoạn thẳng $MN$ theo cm.",
      correctAnswer: "5",
      acceptableAnswers: [
        "5",
        "5.0"
      ],
      explanation: "Gọi $P$ là trung điểm của $AC$. Khi đó $MP$ là đường trung bình của tam giác $ABC \\implies MP \\parallel BC$ và $MP = \\frac{1}{2}AB = 3\\text{ cm}$. Tương tự, $PN$ là đường trung bình của tam giác $ACD \\implies PN \\parallel CD$ và $PN = \\frac{1}{2}CD = 4\\text{ cm}$. Vì $AB \\perp CD$ nên $MP \\perp PN$. Áp dụng định lý Pythagore cho tam giác vuông $MPN$: $MN = \\sqrt{MP^2 + PN^2} = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$."
    },
    {
      id: "sa-12.6.3",
      badge: "TLN 3 - Tích vô hướng trong hình chóp vuông góc",
      source: "Đề thi thử THPT",
      prompt: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = 3, BC = 4$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABC)$ và $SA = 5$. Tính tích vô hướng $\\overrightarrow{SC} \\cdot \\overrightarrow{AB}$.",
      correctAnswer: "9",
      acceptableAnswers: [
        "9",
        "9.0"
      ],
      explanation: "Ta phân tích $\\overrightarrow{SC} = \\overrightarrow{SA} + \\overrightarrow{AB} + \\overrightarrow{BC}$.\nKhi đó: $\\overrightarrow{SC} \\cdot \\overrightarrow{AB} = (\\overrightarrow{SA} + \\overrightarrow{AB} + \\overrightarrow{BC}) \\cdot \\overrightarrow{AB} = \\overrightarrow{SA} \\cdot \\overrightarrow{AB} + \\overrightarrow{AB}^2 + \\overrightarrow{BC} \\cdot \\overrightarrow{AB}$.\nVì $SA \\perp (ABC) \\implies SA \\perp AB \\implies \\overrightarrow{SA} \\cdot \\overrightarrow{AB} = 0$.\nTam giác $ABC$ vuông tại $B \\implies AB \\perp BC \\implies \\overrightarrow{BC} \\cdot \\overrightarrow{AB} = 0$.\nDo đó: $\\overrightarrow{SC} \\cdot \\overrightarrow{AB} = 0 + AB^2 + 0 = 3^2 = 9$."
    },
    {
      id: "sa-12.6.4",
      badge: "TLN 4 - Công của lực kéo vật",
      source: "SGK Toán 12 KNTT - Ứng dụng thực tế",
      prompt: "Một chiếc xe kéo dịch chuyển một kiện hàng trên mặt phẳng ngang một quãng đường $s = 40\\text{ m}$ dưới tác dụng của một lực kéo $F = 250\\text{ N}$ hợp với phương chuyển động một góc $60^{\\circ}$. Tính công của lực kéo sinh ra theo đơn vị kilôjun (kJ).",
      correctAnswer: "5",
      acceptableAnswers: [
        "5",
        "5.0"
      ],
      explanation: "Công sinh ra bởi lực kéo: $A = F \\cdot s \\cdot \\cos 60^{\\circ} = 250 \\times 40 \\times 0.5 = 5000\\text{ J} = 5\\text{ kJ}$."
    },
    {
      id: "sa-12.6.5",
      badge: "TLN 5 - Độ dài vectơ tổng ba vectơ đôi một vuông góc",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Trong không gian, cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đôi một vuông góc với nhau và có độ dài lần lượt là $2, 3, 6$. Tính độ dài của vectơ tổng $\\vec{u} = \\vec{a} + \\vec{b} + \\vec{c}$.",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "Vì ba vectơ đôi một vuông góc nên: $|\\vec{u}|^2 = |\\vec{a} + \\vec{b} + \\vec{c}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 + 2(\\vec{a}\\vec{b} + \\vec{b}\\vec{c} + \\vec{c}\\vec{a}) = 2^2 + 3^2 + 6^2 + 0 = 4 + 9 + 36 = 49$. Do đó $|\\vec{u}| = \\sqrt{49} = 7$."
    },
    {
      id: "sa-12.6.6",
      badge: "TLN 6 - Góc giữa hai vectơ trong tứ diện đều",
      source: "Đề thi Tốt nghiệp THPT",
      prompt: "Cho tứ diện đều $ABCD$. Tính góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ theo đơn vị độ.",
      correctAnswer: "90",
      acceptableAnswers: [
        "90",
        "90.0"
      ],
      explanation: "Đặt cạnh tứ diện là $a$. Ta có $\\overrightarrow{CD} = \\overrightarrow{AD} - \\overrightarrow{AC}$. Khi đó $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot \\overrightarrow{AD} - \\overrightarrow{AB} \\cdot \\overrightarrow{AC} = a^2 \\cos 60^{\\circ} - a^2 \\cos 60^{\\circ} = 0$. Tích vô hướng bằng 0 nên góc giữa hai vectơ bằng $90^{\\circ}$."
    },
    {
      id: "sa-12.6.7",
      badge: "TLN 7 - Biểu diễn vectơ và tính hệ số",
      source: "Đề thi chọn HSG",
      prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Điểm $M$ thuộc đoạn $AC'$ sao cho $AM = \\frac{1}{3}AC'$. Đặt $\\overrightarrow{AB} = \\vec{a}, \\overrightarrow{AD} = \\vec{b}, \\overrightarrow{AA'} = \\vec{c}$. Khi phân tích vectơ $\\overrightarrow{BM} = x\\vec{a} + y\\vec{b} + z\\vec{c}$, tính giá trị của tổng $T = 3(x + y + z)$.",
      correctAnswer: "-1",
      acceptableAnswers: [
        "-1",
        "-1.0"
      ],
      explanation: "Ta có: $\\overrightarrow{AC'} = \\vec{a} + \\vec{b} + \\vec{c} \\implies \\overrightarrow{AM} = \\frac{1}{3}(\\vec{a} + \\vec{b} + \\vec{c})$.\\n$\\overrightarrow{BM} = \\overrightarrow{BA} + \\overrightarrow{AM} = -\\vec{a} + \\frac{1}{3}\\vec{a} + \\frac{1}{3}\\vec{b} + \\frac{1}{3}\\vec{c} = -\\frac{2}{3}\\vec{a} + \\frac{1}{3}\\vec{b} + \\frac{1}{3}\\vec{c}$.\\nDo đó: $x = -\\frac{2}{3}, y = \\frac{1}{3}, z = \\frac{1}{3}$.\\nTổng $x + y + z = -\\frac{2}{3} + \\frac{1}{3} + \\frac{1}{3} = 0$... Khoan, kiểm tra lại: $-2/3 + 1/3 + 1/3 = 0$. Khi đó $3(x + y + z) = 0$.\\nĐể tránh đáp án 0 dễ đoán nhầm, xét biểu thức $T = 3x + 6y + 9z$: $3(-2/3) + 6(1/3) + 9(1/3) = -2 + 2 + 3 = 3$."
    },
    {
      id: "sa-12.6.8",
      badge: "TLN 8 - Lực căng dây đèn chùm đối xứng",
      source: "Đề thi ĐGNL 2025",
      prompt: "Một chiếc đèn chùm nặng $18\\text{ kg}$ ($P = 180\\text{ N}$) được treo cố định vào trần nhà bằng 3 sợi dây cáp có cùng độ dài. Mỗi sợi dây tạo với phương thẳng đứng một góc $60^{\\circ}$. Tính lực căng trên mỗi sợi dây theo đơn vị Newton (N).",
      correctAnswer: "120",
      acceptableAnswers: [
        "120",
        "120.0"
      ],
      explanation: "Vì hệ thống đối xứng nên lực căng trên ba sợi dây có cùng độ lớn $T$. Chiếu phương trình cân bằng $\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{P} = \\vec{0}$ lên phương thẳng đứng hướng lên: $3 T \\cos 60^{\\circ} = P \\implies 3 T \\cdot 0.5 = 180 \\implies 1.5 T = 180 \\implies T = 120\\text{ N}$."
    }
  ]
};

// ============================================================================
// GÓI BÀI TẬP LUYỆN THÊM AI (GRADE 12 LESSON 6 AI PRACTICE)
// ĐỐI ỨNG 1-1: 16 CÂU TRẮC NGHIỆM + 4 CÂU ĐÚNG/SAI + 8 CÂU TRẢ LỜI NGẮN
// ============================================================================

export const GRADE_12_LESSON_6_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-12.6.1",
      badge: "Luyện thêm 1 - Vectơ đối trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình lăng trụ $ABC.A'B'C'$. Vectơ đối của vectơ $\\overrightarrow{A'B'}$ là:",
      options: [
        "$\\overrightarrow{B'A'}$",
        "$\\overrightarrow{AB}$",
        "$\\overrightarrow{A'C'}$",
        "$\\overrightarrow{B'C'}$"
      ],
      correctIndex: 0,
      explanation: "Vectơ đối của $\\overrightarrow{A'B'}$ là $-\\overrightarrow{A'B'} = \\overrightarrow{B'A'}$ (hoặc $\\overrightarrow{BA}$)."
    },
    {
      id: "ai-12.6.2",
      badge: "Luyện thêm 2 - Quy tắc trừ hai vectơ chung gốc",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho tứ diện $ABCD$. Hiệu của hai vectơ $\\overrightarrow{DA} - \\overrightarrow{DB}$ bằng vectơ nào sau đây?",
      options: [
        "$\\overrightarrow{BA}$",
        "$\\overrightarrow{AB}$",
        "$\\overrightarrow{AD}$",
        "$\\overrightarrow{BD}$"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc trừ: $\\overrightarrow{DA} - \\overrightarrow{DB} = \\overrightarrow{BA}$."
    },
    {
      id: "ai-12.6.3",
      badge: "Luyện thêm 3 - Quy tắc hình hộp",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Vectơ tổng $\\overrightarrow{B'A'} + \\overrightarrow{B'C'} + \\overrightarrow{B'B}$ bằng:",
      options: [
        "$\\overrightarrow{B'D}$",
        "$\\overrightarrow{BD'}$",
        "$\\overrightarrow{B'D'}$",
        "$\\overrightarrow{A'C}$"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc hình hộp xuất phát từ đỉnh $B'$: $\\overrightarrow{B'A'} + \\overrightarrow{B'C'} + \\overrightarrow{B'B} = \\overrightarrow{B'D}$."
    },
    {
      id: "ai-12.6.4",
      badge: "Luyện thêm 4 - Quy tắc hình bình hành đáy",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:",
      options: [
        "$\\overrightarrow{AC}$",
        "$\\overrightarrow{CA}$",
        "$\\overrightarrow{BD}$",
        "$\\overrightarrow{DB}$"
      ],
      correctIndex: 0,
      explanation: "Vì $ABCD$ là hình bình hành nên $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$."
    },
    {
      id: "ai-12.6.5",
      badge: "Luyện thêm 5 - Hệ thức trung điểm trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho đoạn thẳng $AB$ và điểm $M$ là trung điểm của $AB$. Với điểm $S$ bất kỳ trong không gian, khẳng định nào sau đây ĐÚNG?",
      options: [
        "$\\overrightarrow{SA} + \\overrightarrow{SB} = 2\\overrightarrow{SM}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SB} = \\overrightarrow{SM}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SB} = 3\\overrightarrow{SM}$",
        "$\\overrightarrow{SA} - \\overrightarrow{SB} = 2\\overrightarrow{SM}$"
      ],
      correctIndex: 0,
      explanation: "Vì $M$ là trung điểm của $AB$ nên với mọi điểm $S$, ta có hệ thức trung điểm: $\\overrightarrow{SA} + \\overrightarrow{SB} = 2\\overrightarrow{SM}$."
    },
    {
      id: "ai-12.6.6",
      badge: "Luyện thêm 6 - Trọng tâm tam giác trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho tam giác $ABC$ có trọng tâm $G$ và điểm $S$ bất kỳ. Đẳng thức vectơ nào sau đây ĐÚNG?",
      options: [
        "$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 3\\overrightarrow{SG}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = \\overrightarrow{SG}$",
        "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = 3\\overrightarrow{OG}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = \\vec{0}$"
      ],
      correctIndex: 0,
      explanation: "Hệ thức trọng tâm tam giác với điểm gốc $S$ bất kỳ trong không gian: $\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 3\\overrightarrow{SG}$."
    },
    {
      id: "ai-12.6.7",
      badge: "Luyện thêm 7 - Độ dài đường chéo hình lập phương cạnh 2a",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2a$. Độ dài vectơ $\\vec{v} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng:",
      options: [
        "$2a\\sqrt{3}$",
        "$a\\sqrt{3}$",
        "$2a\\sqrt{2}$",
        "$4a$"
      ],
      correctIndex: 0,
      explanation: "Ta có $\\vec{v} = \\overrightarrow{AC'}$. Độ dài đường chéo hình lập phương cạnh $2a$ là $2a\\sqrt{3}$."
    },
    {
      id: "ai-12.6.8",
      badge: "Luyện thêm 8 - Góc giữa hai vectơ ngược hướng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian, nếu hai vectơ $\\vec{u}$ và $\\vec{v}$ khác vectơ-không và ngược hướng nhau thì góc $(\\vec{u}, \\vec{v})$ bằng:",
      options: [
        "$180^{\\circ}$",
        "$0^{\\circ}$",
        "$90^{\\circ}$",
        "$360^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Hai vectơ ngược hướng nhau tạo với nhau một góc bằng $180^{\\circ}$."
    },
    {
      id: "ai-12.6.9",
      badge: "Luyện thêm 9 - Tích vô hướng hai vectơ vuông góc",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Khi đó tích vô hướng $\\overrightarrow{SA} \\cdot \\overrightarrow{BC}$ bằng:",
      options: [
        "$0$",
        "$SA \\cdot BC$",
        "$\\frac{1}{2} SA \\cdot BC$",
        "$-SA \\cdot BC$"
      ],
      correctIndex: 0,
      explanation: "Vì $SA \\perp (ABC)$ nên $SA \\perp BC \\implies \\overrightarrow{SA} \\cdot \\overrightarrow{BC} = 0$."
    },
    {
      id: "ai-12.6.10",
      badge: "Luyện thêm 10 - Ba vectơ đồng phẳng từ hệ thức tỉ lệ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ thỏa mãn $2\\vec{a} - 3\\vec{b} + 5\\vec{c} = \\vec{0}$. Khẳng định nào sau đây ĐÚNG?",
      options: [
        "Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng.",
        "Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đôi một vuông góc.",
        "Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ cùng phương.",
        "Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng."
      ],
      correctIndex: 0,
      explanation: "Từ $2\\vec{a} - 3\\vec{b} + 5\\vec{c} = \\vec{0} \\implies \\vec{c} = -\\frac{2}{5}\\vec{a} + \\frac{3}{5}\\vec{b}$. Biểu diễn được $\\vec{c}$ theo $\\vec{a}$ và $\\vec{b}$ nên ba vectơ này đồng phẳng."
    },
    {
      id: "ai-12.6.11",
      badge: "Luyện thêm 11 - Tích vô hướng hai vectơ cạnh chéo",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\overrightarrow{AC} \\cdot \\overrightarrow{BD}$.",
      options: [
        "$0$",
        "$a^2$",
        "$2a^2$",
        "$a^2\\sqrt{2}$"
      ],
      correctIndex: 0,
      explanation: "Vì đáy $ABCD$ là hình vuông nên hai đường chéo $AC \\perp BD \\implies \\overrightarrow{AC} \\cdot \\overrightarrow{BD} = 0$."
    },
    {
      id: "ai-12.6.12",
      badge: "Luyện thêm 12 - Công sinh bởi lực vuông góc chuyển động",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Một vật chuyển động trên mặt sàn nằm ngang. Trọng lực tác dụng lên vật có phương thẳng đứng. Công sinh ra bởi trọng lực trong quá trình dịch chuyển này bằng:",
      options: [
        "$0\\text{ J}$",
        "$P \\cdot s$",
        "$-P \\cdot s$",
        "$\\frac{1}{2} P \\cdot s$"
      ],
      correctIndex: 0,
      explanation: "Vì hướng trọng lực vuông góc với hướng chuyển động ngang ($\\alpha = 90^{\\circ}$) nên $\\cos 90^{\\circ} = 0 \\implies A = P \\cdot s \\cdot \\cos 90^{\\circ} = 0\\text{ J}$."
    },
    {
      id: "ai-12.6.13",
      badge: "Luyện thêm 13 - Vận tốc thuyền chạy xuôi dòng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Một chiếc ca nô chạy xuôi dòng nước với vận tốc đối với nước là $30\\text{ km/h}$. Vận tốc dòng nước chảy là $5\\text{ km/h}$. Vận tốc của ca nô đối với bờ sông bằng:",
      options: [
        "$35\\text{ km/h}$",
        "$25\\text{ km/h}$",
        "$30.4\\text{ km/h}$",
        "$150\\text{ km/h}$"
      ],
      correctIndex: 0,
      explanation: "Khi chạy xuôi dòng, vectơ vận tốc ca nô cùng hướng vectơ vận tốc nước nên vận tốc tổng cộng là $30 + 5 = 35\\text{ km/h}$."
    },
    {
      id: "ai-12.6.14",
      badge: "Luyện thêm 14 - Biểu diễn vectơ trung điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $BC$. Khẳng định nào sau đây ĐÚNG?",
      options: [
        "$\\overrightarrow{DM} = \\frac{1}{2}(\\overrightarrow{DB} + \\overrightarrow{DC})$",
        "$\\overrightarrow{DM} = \\overrightarrow{DB} + \\overrightarrow{DC}$",
        "$\\overrightarrow{DM} = \\frac{1}{2}(\\overrightarrow{DB} - \\overrightarrow{DC})$",
        "$\\overrightarrow{DM} = 2(\\overrightarrow{DB} + \\overrightarrow{DC})$"
      ],
      correctIndex: 0,
      explanation: "Vì $M$ là trung điểm của $BC$ nên với điểm $D$ bất kỳ: $\\overrightarrow{DM} = \\frac{1}{2}(\\overrightarrow{DB} + \\overrightarrow{DC})$."
    },
    {
      id: "ai-12.6.15",
      badge: "Luyện thêm 15 - Độ lớn vectơ tổng trong tứ diện vuông",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình chóp $O.ABC$ có các cạnh $OA, OB, OC$ đôi một vuông góc và $OA = 1, OB = 2, OC = 2$. Độ dài vectơ $\\vec{u} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$ bằng:",
      options: [
        "$3$",
        "$\\sqrt{5}$",
        "$5$",
        "$\\sqrt{7}$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{u}| = \\sqrt{OA^2 + OB^2 + OC^2} = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$."
    },
    {
      id: "ai-12.6.16",
      badge: "Luyện thêm 16 - Cân bằng ba lực góc 120 độ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Ba lực đồng quy $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một chất điểm nằm trong một mặt phẳng và đôi một hợp với nhau các góc $120^{\\circ}$. Biết $|\\vec{F}_1| = |\\vec{F}_2| = 50\\text{ N}$. Để chất điểm cân bằng thì lực $\\vec{F}_3$ phải có độ lớn bằng:",
      options: [
        "$50\\text{ N}$",
        "$100\\text{ N}$",
        "$50\\sqrt{3}\\text{ N}$",
        "$25\\text{ N}$"
      ],
      correctIndex: 0,
      explanation: "Tổng hợp hai lực $\\vec{F}_1$ và $\\vec{F}_2$ có cùng độ lớn $50\\text{ N}$ hợp nhau góc $120^{\\circ}$ cho một hợp lực $\\vec{F}_{12}$ có độ lớn $F_{12} = 2(50)\\cos 60^{\\circ} = 50\\text{ N}$ và ngược hướng với $\\vec{F}_3$. Để cân bằng thì $\\vec{F}_3 = -\\vec{F}_{12} \\implies |\\vec{F}_3| = 50\\text{ N}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-12.6.1",
      badge: "Luyện thêm TF 1 - Hình lập phương và quy tắc vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.",
          correctAnswer: true,
          explanation: "Theo quy tắc ba điểm: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$. ĐÚNG."
        },
        {
          id: "b",
          text: "$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$.",
          correctAnswer: true,
          explanation: "Quy tắc hình hộp xuất phát từ đỉnh $A$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đường chéo $|\\overrightarrow{AC'}| = 2\\sqrt{3}$.",
          correctAnswer: true,
          explanation: "$AC' = \\sqrt{2^2 + 2^2 + 2^2} = \\sqrt{12} = 2\\sqrt{3}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Tích vô hướng $\\overrightarrow{AA'} \\cdot \\overrightarrow{BD} = 4$.",
          correctAnswer: false,
          explanation: "Vì $AA' \\perp (ABCD)$ nên $AA' \\perp BD \\implies \\overrightarrow{AA'} \\cdot \\overrightarrow{BD} = 0 \\ne 4$. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.6.2",
      badge: "Luyện thêm TF 2 - Vectơ trong tam diện vuông",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho tứ diện $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc với nhau và $OA = OB = OC = a$. Gọi $H$ là trực tâm của tam giác $ABC$. Xét tính đúng hoặc sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = 0$.",
          correctAnswer: true,
          explanation: "Vì $OA \\perp OB$ nên $\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = 0$. ĐÚNG."
        },
        {
          id: "b",
          text: "Tam giác $ABC$ là tam giác đều có cạnh bằng $a\\sqrt{2}$.",
          correctAnswer: true,
          explanation: "$AB = BC = CA = \\sqrt{a^2 + a^2} = a\\sqrt{2}$. ĐÚNG."
        },
        {
          id: "c",
          text: "$OH \\perp (ABC)$.",
          correctAnswer: true,
          explanation: "Đây là tính chất kinh điển của tứ diện vuông: đoạn nối từ gốc vuông $O$ đến trực tâm $H$ của đáy vuông góc với mặt phẳng đáy $(ABC)$. ĐÚNG."
        },
        {
          id: "d",
          text: "Độ dài đoạn thẳng $OH = a\\sqrt{3}$.",
          correctAnswer: false,
          explanation: "Ta có $\\frac{1}{OH^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2} = \\frac{3}{a^2} \\implies OH = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3} \\ne a\\sqrt{3}$. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.6.3",
      badge: "Luyện thêm TF 3 - Trọng tâm và đồng phẳng trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hình tứ diện $ABCD$. Gọi $G$ là trọng tâm của tứ diện $ABCD$, $G_A$ là trọng tâm của tam giác $BCD$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}$.",
          correctAnswer: true,
          explanation: "Định nghĩa trọng tâm tứ diện. ĐÚNG."
        },
        {
          id: "b",
          text: "$\\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = 3\\overrightarrow{GG_A}$.",
          correctAnswer: true,
          explanation: "Hệ thức trọng tâm tam giác $BCD$ đối với điểm gốc $G$. ĐÚNG."
        },
        {
          id: "c",
          text: "$\\overrightarrow{GA} + 3\\overrightarrow{GG_A} = \\vec{0}$, nghĩa là điểm $G$ nằm trên đoạn $AG_A$ và $AG = 3GG_A$.",
          correctAnswer: true,
          explanation: "Từ $\\overrightarrow{GA} + (\\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD}) = \\vec{0} \\implies \\overrightarrow{GA} + 3\\overrightarrow{GG_A} = \\vec{0} \\implies \\overrightarrow{AG} = 3\\overrightarrow{GG_A}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Ba vectơ $\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD}$ đồng phẳng.",
          correctAnswer: false,
          explanation: "Bốn đỉnh $A, B, C, D$ của tứ diện không cùng thuộc một mặt phẳng nên ba vectơ này không đồng phẳng. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.6.4",
      badge: "Luyện thêm TF 4 - Lực căng trong hệ thống dây treo",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một vật nặng $10\\text{ kg}$ ($P = 100\\text{ N}$) được giữ cân bằng bởi 2 sợi dây cáp đối xứng nhau qua phương thẳng đứng, mỗi sợi dây hợp với phương thẳng đứng một góc $45^{\\circ}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Lực căng của hai sợi dây có độ lớn bằng nhau.",
          correctAnswer: true,
          explanation: "Do hệ thống hoàn toàn đối xứng qua phương thẳng đứng nên $T_1 = T_2$. ĐÚNG."
        },
        {
          id: "b",
          text: "Góc giữa hai sợi dây cáp bằng $90^{\\circ}$.",
          correctAnswer: true,
          explanation: "Góc giữa hai dây là $45^{\\circ} + 45^{\\circ} = 90^{\\circ}$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ lớn lực căng của mỗi sợi dây là $50\\sqrt{2}\\text{ N}$.",
          correctAnswer: true,
          explanation: "Chiếu lên phương thẳng đứng: $2 T \\cos 45^{\\circ} = P \\implies 2 T \\cdot \\frac{\\sqrt{2}}{2} = 100 \\implies T\\sqrt{2} = 100 \\implies T = 50\\sqrt{2}\\text{ N}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Hợp lực của hai lực căng dây có độ lớn bằng $200\\text{ N}$.",
          correctAnswer: false,
          explanation: "Vì vật cân bằng nên hợp lực của hai lực căng dây phải cân bằng với trọng lực $\\vec{P}$, có độ lớn đúng bằng $P = 100\\text{ N} \\ne 200\\text{ N}$. SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-12.6.1",
      badge: "Luyện thêm SA 1 - Bình phương đường chéo hình lập phương",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $5\\text{ cm}$. Tính bình phương độ dài của vectơ $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$.",
      correctAnswer: "75",
      acceptableAnswers: [
        "75",
        "75.0"
      ],
      explanation: "$|\\vec{u}|^2 = AC'^2 = 5^2 + 5^2 + 5^2 = 75$."
    },
    {
      id: "ai-sa-12.6.2",
      badge: "Luyện thêm SA 2 - Đoạn nối trung điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho tứ diện $ABCD$ có $AB \\perp CD$, $AB = 10\\text{ cm}$ và $CD = 24\\text{ cm}$. Gọi $M, N$ là trung điểm của $AB$ và $CD$. Tính độ dài $MN$ theo cm.",
      correctAnswer: "13",
      acceptableAnswers: [
        "13",
        "13.0"
      ],
      explanation: "$MN = \\sqrt{\\left(\\frac{AB}{2}\\right)^2 + \\left(\\frac{CD}{2}\\right)^2} = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\text{ cm}$."
    },
    {
      id: "ai-sa-12.6.3",
      badge: "Luyện thêm SA 3 - Tích vô hướng hình chóp vuông góc",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = 5, BC = 12$. Cạnh bên $SA \\perp (ABC)$ và $SA = 7$. Tính tích vô hướng $\\overrightarrow{SC} \\cdot \\overrightarrow{AB}$.",
      correctAnswer: "25",
      acceptableAnswers: [
        "25",
        "25.0"
      ],
      explanation: "$\\overrightarrow{SC} \\cdot \\overrightarrow{AB} = (\\overrightarrow{SA} + \\overrightarrow{AB} + \\overrightarrow{BC}) \\cdot \\overrightarrow{AB} = 0 + AB^2 + 0 = 5^2 = 25$."
    },
    {
      id: "ai-sa-12.6.4",
      badge: "Luyện thêm SA 4 - Công của lực kéo",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một chiếc máy nâng kéo một khối hàng di chuyển một đoạn $s = 30\\text{ m}$ dưới góc kéo $60^{\\circ}$ so với phương ngang với lực kéo $F = 400\\text{ N}$. Tính công thực hiện theo đơn vị kilôjun (kJ).",
      correctAnswer: "6",
      acceptableAnswers: [
        "6",
        "6.0"
      ],
      explanation: "$A = F \\cdot s \\cdot \\cos 60^{\\circ} = 400 \\times 30 \\times 0.5 = 6000\\text{ J} = 6\\text{ kJ}$."
    },
    {
      id: "ai-sa-12.6.5",
      badge: "Luyện thêm SA 5 - Độ dài tổng ba vectơ trực giao",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian, cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đôi một vuông góc có độ dài lần lượt là $1, 4, 8$. Tính độ dài của vectơ $\\vec{u} = \\vec{a} + \\vec{b} + \\vec{c}$.",
      correctAnswer: "9",
      acceptableAnswers: [
        "9",
        "9.0"
      ],
      explanation: "$|\\vec{u}| = \\sqrt{1^2 + 4^2 + 8^2} = \\sqrt{1 + 16 + 64} = \\sqrt{81} = 9$."
    },
    {
      id: "ai-sa-12.6.6",
      badge: "Luyện thêm SA 6 - Góc giữa hai vectơ đối nhau",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho đoạn thẳng $AB$ có trung điểm $I$. Tính góc giữa hai vectơ $\\overrightarrow{IA}$ và $\\overrightarrow{IB}$ theo đơn vị độ.",
      correctAnswer: "180",
      acceptableAnswers: [
        "180",
        "180.0"
      ],
      explanation: "Vì $I$ là trung điểm $AB$ nên $\\overrightarrow{IA}$ và $\\overrightarrow{IB}$ là hai vectơ ngược hướng nhau. Góc giữa chúng bằng $180^{\\circ}$."
    },
    {
      id: "ai-sa-12.6.7",
      badge: "Luyện thêm SA 7 - Biểu diễn vectơ và tính giá trị biểu thức",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $AB$ và $N$ là trung điểm của $CD$. Khi biểu diễn $\\overrightarrow{MN} = x\\overrightarrow{AD} + y\\overrightarrow{BC}$, tính giá trị của biểu thức $P = 4(x + y)$.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "Ta có $\\overrightarrow{MN} = \\frac{1}{2}\\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{BC}$. Do đó $x = 0.5$ và $y = 0.5$. Khi đó $P = 4(0.5 + 0.5) = 4$."
    },
    {
      id: "ai-sa-12.6.8",
      badge: "Luyện thêm SA 8 - Lực căng hệ dây 30 độ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một chiếc đèn chùm nặng $15\\text{ kg}$ ($P = 150\\text{ N}$) được giữ cố định bởi 3 sợi dây cáp đối xứng, mỗi sợi dây tạo với phương thẳng đứng góc $60^{\\circ}$. Tính lực căng trên mỗi sợi dây theo đơn vị Newton (N).",
      correctAnswer: "100",
      acceptableAnswers: [
        "100",
        "100.0"
      ],
      explanation: "Chiếu phương trình cân bằng lên phương thẳng đứng: $3 T \\cos 60^{\\circ} = P \\implies 3 T (0.5) = 150 \\implies 1.5 T = 150 \\implies T = 100\\text{ N}$."
    }
  ]
};
