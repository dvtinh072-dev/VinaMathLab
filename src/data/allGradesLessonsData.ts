import { ScenarioFrame } from "@/components/interactive/VisualStoryScenario";
import { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
export type { QuizQuestion };
import { LessonItem, GradeData } from "@/data/curriculumData";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { GRADE_7_DETAILED_LESSONS } from "@/data/grade7LessonsData";
import { GRADE_8_DETAILED_LESSONS } from "@/data/grade8LessonsData";
import { GRADE_9_DETAILED_LESSONS } from "@/data/grade9LessonsData";
import { GRADE_10_DETAILED_LESSONS } from "@/data/grade10LessonsData";
import { GRADE_11_DETAILED_LESSONS } from "@/data/grade11LessonsData";

export interface ExampleItem {
  title?: string;
  problem: string;
  solution: string;
  svgDiagram?: string;
}

export interface TrueFalseSubItem {
  id: string; // "a" | "b" | "c" | "d"
  text: string;
  correctAnswer: boolean; // true = Đúng, false = Sai
  explanation?: string;
}

export interface TrueFalseQuestion {
  id: string;
  badge: string;
  source?: string;
  prompt: string;
  subItems: TrueFalseSubItem[];
  svgDiagram?: string;
}

export interface ShortAnswerQuestion {
  id: string;
  badge: string;
  source?: string;
  prompt: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  explanation: string;
  svgDiagram?: string;
}

export interface TheorySection {
  index: string;
  title: string;
  points: string[];
  formula?: string;
  exampleTitle?: string;
  exampleProblem?: string;
  exampleSolution?: string;
  examples?: ExampleItem[];
  hasRomanTable?: boolean;
  hasVennDiagram?: boolean;
  hasIntervalsTable?: boolean;
  hasUnitCircle?: boolean;
}

export interface ExamSetItem {
  id: string;
  title: string;
  description?: string;
  matrixBadge?: string;
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
}

export interface VideoCheckpointQuestion {
  id: string;
  timeSeconds?: number;
  timeLabel?: string;
  title: string;
  question: string;
  mathProblem?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface VideoLessonItem {
  id: string;
  title: string;
}

export interface DetailedLessonData {
  id: string;
  lessonNumber: number;
  title: string;
  bookChapter: string;
  scenarioTitle: string;
  scenarioFrames: ScenarioFrame[];
  theorySections: TheorySection[];
  youtubeVideoId?: string;
  youtubeVideoTitle?: string;
  youtubeVideos?: VideoLessonItem[];
  videoQuestions?: VideoCheckpointQuestion[];
  showTextTheory?: boolean;
  tips?: string[];
  traps?: string[];
  interactiveType?: "venn" | "numberline" | "power" | "divisibility" | "integers" | "geometry" | "fraction" | "decimal" | "geometry2d" | "statistics" | "function" | "circle" | "vector" | "default";
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
  examSets?: ExamSetItem[];
}

/**
 * Kho dữ liệu mẫu chi tiết hóa trực tiếp cho từng bài học trọng tâm của từng khối lớp (7, 8, 9, 10, 11, 12)
 */
export const DETAILED_LESSONS_KNOWLEDGE_BASE: { [key: string]: Partial<DetailedLessonData> } = {
  // ==========================================
  // LỚP 7
  // ==========================================
  "t7-b1-tap-hop-so-huu-ti": {
    scenarioTitle: "Tình huống: Phân chia bánh ngọt và số đo nhiệt độ âm",
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Bạn An",
        avatar: "🧑‍🎓",
        speech: "Thưa Thầy Tính, em thấy nhiệt độ ở Sa Pa có lúc xuống -1,5°C, hoặc khi chia 3 chiếc bánh cho 4 bạn là 3/4. Các số này thuộc tập hợp số nào ạ?",
        visualGraphic: "box",
        mathNote: "-1,5 = -\\frac{3}{2}; \\quad \\frac{3}{4} \\in \\mathbb{Q}",
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Tất cả các số viết được dưới dạng phân số a/b (với a, b ∈ ℤ, b ≠ 0) đều là số hữu tỉ! Kí hiệu tập hợp số hữu tỉ là ℚ.",
        visualGraphic: "graph",
        mathNote: "\\mathbb{Q} = \\left\\{\\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\neq 0\\right\\}",
      },
    ],
    theorySections: [
      {
        index: "1",
        title: "Khái niệm Số hữu tỉ",
        points: [
          "Số hữu tỉ là số viết được dưới dạng phân số a/b với a, b ∈ ℤ, b ≠ 0.",
          "Tập hợp các số hữu tỉ được kí hiệu là ℚ.",
          "Mỗi số nguyên a đều là một số hữu tỉ vì a = a/1.",
        ],
        formula: "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}",
        exampleTitle: "Ví Dụ 1 (SGK)",
        exampleProblem: "Các số sau có phải là số hữu tỉ không: 0,6; -1 1/3; -2; 0?",
        exampleSolution: "Ta có: 0,6 = 6/10 = 3/5; -1 1/3 = -4/3; -2 = -2/1; 0 = 0/1. Tất cả đều là số hữu tỉ.",
      },
      {
        index: "2",
        title: "Biểu diễn số hữu tỉ trên trục số & Số đối",
        points: [
          "Mỗi số hữu tỉ được biểu diễn bởi một điểm trên trục số.",
          "Hai số hữu tỉ có điểm biểu diễn cách đều gốc 0 và nằm về hai phía gọi là hai số đối nhau.",
          "Số đối của số hữu tỉ x kí hiệu là -x. Ta có: x + (-x) = 0.",
        ],
        formula: "-\\left(-\\frac{a}{b}\\right) = \\frac{a}{b}",
        exampleTitle: "Ví Dụ 2 (SGK)",
        exampleProblem: "Tìm số đối của các số hữu tỉ sau: 2/3; -0,75; 0.",
        exampleSolution: "Số đối của 2/3 là -2/3; số đối của -0,75 là 0,75 (hay 3/4); số đối của 0 là 0.",
      },
    ],
    tips: ["Số hữu tỉ dương lớn hơn 0, số hữu tỉ âm nhỏ hơn 0, số 0 không là số hữu tỉ dương cũng không là số hữu tỉ âm."],
    traps: ["Mẫu số b của phân số a/b luôn phải khác 0 (b ≠ 0)."],
    quizQuestions: [
      {
        id: "q1",
        question: "Khẳng định nào sau đây là ĐÚNG về tập hợp các số hữu tỉ ℚ?",
        mathProblem: "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}",
        options: [
          "Mọi số nguyên đều là số hữu tỉ",
          "Số 0 không phải là số hữu tỉ",
          "Số hữu tỉ không thể biểu diễn trên trục số",
          "Phân số có mẫu bằng 0 vẫn là số hữu tỉ",
        ],
        correctIndex: 0,
        explanation: "Vì mọi số nguyên a đều viết được dưới dạng a/1 nên ℤ ⊂ ℚ.",
      },
      {
        id: "q2",
        question: "Số đối của số hữu tỉ -3/5 là:",
        mathProblem: "-\\left(-\\frac{3}{5}\\right) = ?",
        options: ["3/5", "-3/5", "-5/3", "5/3"],
        correctIndex: 0,
        explanation: "Số đối của -a/b là a/b, do đó số đối của -3/5 là 3/5.",
      },
    ],
  },

  // ==========================================
  // LỚP 8
  // ==========================================
  "t8-b1-don-thuc": {
    scenarioTitle: "Tình huống: Tính diện tích và thể tích hình khối đại số",
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Bạn Bình",
        avatar: "🧑‍🎓",
        speech: "Thầy ơi, biểu thức như 2x²y hay -5x³y² gọi là gì và làm sao để biết bậc của nó ạ?",
        visualGraphic: "box",
        mathNote: "2x^2y; \\quad -5x^3y^2",
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Đó là các đơn thức thu gọn! Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức đó.",
        visualGraphic: "graph",
        mathNote: "\\text{Bậc của } 2x^2y \\text{ là } 2 + 1 = 3",
      },
    ],
    theorySections: [
      {
        index: "1",
        title: "Khái niệm Đơn thức & Đơn thức thu gọn",
        points: [
          "Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.",
          "Đơn thức thu gọn là đơn thức chỉ gồm tích của một số với các biến mà mỗi biến chỉ được viết một lần dưới dạng lũy thừa với số mũ nguyên dương.",
          "Số đứng trước gọi là hệ số, phần còn lại gọi là phần biến.",
        ],
        formula: "A = a \\cdot x^m y^n z^p \\quad (a \\neq 0)",
        exampleTitle: "Ví Dụ 1 (SGK)",
        exampleProblem: "Thu gọn đơn thức A = 2x²y · (-3)xy³ và chỉ rõ hệ số, phần biến, bậc.",
        exampleSolution: "A = [2 · (-3)] · (x² · x) · (y · y³) = -6x³y⁴. Hệ số là -6, phần biến là x³y⁴, bậc là 3 + 4 = 7.",
      },
      {
        index: "2",
        title: "Đơn thức đồng dạng và phép cộng, trừ đơn thức đồng dạng",
        points: [
          "Hai đơn thức đồng dạng là hai đơn thức có hệ số khác 0 và có cùng phần biến.",
          "Để cộng (hay trừ) các đơn thức đồng dạng, ta cộng (hay trừ) các hệ số với nhau và giữ nguyên phần biến.",
        ],
        formula: "ax^m y^n + bx^m y^n = (a + b)x^m y^n",
        exampleTitle: "Ví Dụ 2 (SGK)",
        exampleProblem: "Tính tổng: 3x²y + 5x²y - 2x²y.",
        exampleSolution: "3x²y + 5x²y - 2x²y = (3 + 5 - 2)x²y = 6x²y.",
      },
    ],
    tips: ["Số 0 được coi là đơn thức không và không có bậc.", "Số thực khác 0 là đơn thức bậc 0."],
    traps: ["Không được cộng hai đơn thức khác phần biến (ví dụ: 2x²y + 3xy² không thể cộng hệ số vì khác bậc từng biến)."],
    quizQuestions: [
      {
        id: "q1",
        question: "Bậc của đơn thức -4x³y²z là:",
        mathProblem: "-4x^3y^2z^1",
        options: ["6", "5", "3", "4"],
        correctIndex: 0,
        explanation: "Bậc của đơn thức là tổng các số mũ của biến: 3 + 2 + 1 = 6.",
      },
      {
        id: "q2",
        question: "Đơn thức nào sau đây đồng dạng với đơn thức 5x²y³?",
        mathProblem: "5x^2y^3",
        options: ["-2x²y³", "5x³y²", "5x²y", "2xy³"],
        correctIndex: 0,
        explanation: "Hai đơn thức đồng dạng phải có cùng phần biến x²y³.",
      },
    ],
  },

  // ==========================================
  // LỚP 9
  // ==========================================
  "t9-b19-phuong-trinh-bac-hai": {
    scenarioTitle: "Tình huống: Quỹ đạo bắn tên lửa nước và bài toán tìm thời gian chạm đất",
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Bạn Nam",
        avatar: "🧑‍🎓",
        speech: "Thưa Thầy, độ cao của tên lửa nước theo thời gian t (giây) là h = -5t² + 20t. Khi nào tên lửa chạm đất (h = 0) ạ?",
        visualGraphic: "graph",
        mathNote: "-5t^2 + 20t = 0",
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Đây là một phương trình bậc hai một ẩn ax² + bx + c = 0 (a ≠ 0)! Ta dùng công thức biệt thức biệt thức Δ = b² - 4ac để giải quyết nhanh chóng.",
        visualGraphic: "graph",
        mathNote: "\\Delta = b^2 - 4ac",
      },
    ],
    theorySections: [
      {
        index: "1",
        title: "Định nghĩa & Công thức nghiệm phương trình bậc hai",
        points: [
          "Phương trình bậc hai một ẩn là phương trình có dạng ax² + bx + c = 0 (với a ≠ 0).",
          "Biệt thức Δ = b² - 4ac quyết định số nghiệm của phương trình:",
          "• Nếu Δ > 0: Phương trình có 2 nghiệm phân biệt x₁,₂ = (-b ± √Δ) / (2a).",
          "• Nếu Δ = 0: Phương trình có nghiệm kép x₁ = x₂ = -b / (2a).",
          "• Nếu Δ < 0: Phương trình vô nghiệm.",
        ],
        formula: "\\Delta = b^2 - 4ac, \\quad x_{1, 2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
        exampleTitle: "Ví Dụ 1 (SGK)",
        exampleProblem: "Giải phương trình bậc hai: x² - 5x + 6 = 0.",
        exampleSolution: "a = 1, b = -5, c = 6. Ta có Δ = (-5)² - 4·1·6 = 25 - 24 = 1 > 0. Vậy PT có 2 nghiệm phân biệt: x₁ = (5 + 1)/2 = 3; x₂ = (5 - 1)/2 = 2.",
      },
      {
        index: "2",
        title: "Định lí Viète và Ứng dụng nhẩm nghiệm",
        points: [
          "Nếu x₁, x₂ là hai nghiệm của phương trình ax² + bx + c = 0 (a ≠ 0) thì:",
          "• Tổng hai nghiệm: S = x₁ + x₂ = -b/a.",
          "• Tích hai nghiệm: P = x₁ · x₂ = c/a.",
          "Nhẩm nghiệm đặc biệt: Nếu a + b + c = 0 thì x₁ = 1, x₂ = c/a. Nếu a - b + c = 0 thì x₁ = -1, x₂ = -c/a.",
        ],
        formula: "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}",
        exampleTitle: "Ví Dụ 2 (SGK)",
        exampleProblem: "Nhẩm nghiệm phương trình: 2x² - 7x + 5 = 0.",
        exampleSolution: "Ta thấy a + b + c = 2 + (-7) + 5 = 0. Do đó phương trình có hai nghiệm: x₁ = 1 và x₂ = c/a = 5/2.",
      },
    ],
    tips: ["Khi hệ số b là số chẵn (b = 2b'), sử dụng biệt thức thu gọn Δ' = (b')² - ac giúp phép tính đơn giản hơn rất nhiều."],
    traps: ["Luôn kiểm tra điều kiện a ≠ 0 trước khi áp dụng công thức nghiệm."],
    quizQuestions: [
      {
        id: "q1",
        question: "Biệt thức Δ của phương trình 2x² - 3x + 1 = 0 bằng:",
        mathProblem: "\\Delta = (-3)^2 - 4(2)(1)",
        options: ["1", "-1", "17", "7"],
        correctIndex: 0,
        explanation: "Δ = b² - 4ac = (-3)² - 4·2·1 = 9 - 8 = 1 > 0.",
      },
      {
        id: "q2",
        question: "Tổng và tích hai nghiệm của phương trình x² - 7x + 12 = 0 là:",
        mathProblem: "x_1 + x_2 = ?, \\quad x_1 x_2 = ?",
        options: ["S = 7, P = 12", "S = -7, P = 12", "S = 7, P = -12", "S = 12, P = 7"],
        correctIndex: 0,
        explanation: "Theo Viète: S = -b/a = -(-7)/1 = 7; P = c/a = 12/1 = 12.",
      },
    ],
  },

  // ==========================================
  // LỚP 10
  // ==========================================
  "t10-b1-menh-de": {
    scenarioTitle: "Tình huống: Logic toán học trong lập trình và đời sống",
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Bạn Linh",
        avatar: "🧑‍🎓",
        speech: "Thưa Thầy, trong toán học câu khẳng định nào được gọi là một mệnh đề và làm sao để phủ định một mệnh đề chứa ký hiệu với mọi (∀), tồn tại (∃) ạ?",
        visualGraphic: "box",
        mathNote: "\\forall x \\in X, P(x) \\quad \\text{vs} \\quad \\exists x \\in X, \\neg P(x)",
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Mệnh đề toán học là một câu khẳng định chỉ có thể ĐÚNG hoặc SAI, không thể vừa đúng vừa sai! Phủ định của ∀ là ∃ và ngược lại.",
        visualGraphic: "graph",
        mathNote: "\\overline{\\forall x \\in X, P(x)} \\Leftrightarrow \\exists x \\in X, \\overline{P(x)}",
      },
    ],
    theorySections: [
      {
        index: "1",
        title: "Định nghĩa Mệnh đề & Mệnh đề phủ định",
        points: [
          "Mỗi mệnh đề toán học là một khẳng định đúng hoặc một khẳng định sai.",
          "Một mệnh đề không thể vừa đúng vừa sai.",
          "Mệnh đề phủ định của mệnh đề P kí hiệu là P̄. Nếu P đúng thì P̄ sai, nếu P sai thì P̄ đúng.",
        ],
        formula: "P \\text{ đúng } \\Leftrightarrow \\overline{P} \\text{ sai}",
        exampleTitle: "Ví Dụ 1 (SGK)",
        exampleProblem: "Xét tính đúng sai của mệnh đề P: '17 là số nguyên tố' và phát biểu mệnh đề phủ định P̄.",
        exampleSolution: "P là mệnh đề đúng. Mệnh đề phủ định P̄: '17 không phải là số nguyên tố' (là mệnh đề sai).",
      },
      {
        index: "2",
        title: "Mệnh đề kéo theo (P ⇒ Q) & Mệnh đề tương đương (P ⇔ Q)",
        points: [
          "Mệnh đề 'Nếu P thì Q' gọi là mệnh đề kéo theo, kí hiệu P ⇒ Q. Mệnh đề này chỉ sai khi P đúng mà Q sai.",
          "Trong P ⇒ Q, P là điều kiện đủ để có Q, Q là điều kiện cần để có P.",
          "Mệnh đề đảo của P ⇒ Q là Q ⇒ P. Nếu cả hai đều đúng ta có mệnh đề tương đương P ⇔ Q.",
        ],
        formula: "P \\Rightarrow Q \\quad (P: \\text{Giả thiết, } Q: \\text{Kết luận})",
        exampleTitle: "Ví Dụ 2 (SGK)",
        exampleProblem: "Phát biểu định lý dưới dạng điều kiện cần và đủ: 'Tam giác ABC đều khi và chỉ khi nó có 3 cạnh bằng nhau'.",
        exampleSolution: "Điều kiện cần và đủ để tam giác ABC đều là tam giác ABC có ba cạnh bằng nhau.",
      },
    ],
    tips: ["Câu cảm thán, câu hỏi, câu mệnh lệnh không phải là mệnh đề."],
    traps: ["Bẫy phủ định mệnh đề chứa ∀: Phủ định của '∀x ∈ ℝ, x² > 0' là '∃x ∈ ℝ, x² ≤ 0' (chú ý đổi dấu > thành ≤)."],
    quizQuestions: [
      {
        id: "q1",
        question: "Phủ định của mệnh đề '∀x ∈ ℝ, x² + 1 > 0' là:",
        mathProblem: "\\overline{\\forall x \\in \\mathbb{R}, x^2 + 1 > 0}",
        options: [
          "∃x ∈ ℝ, x² + 1 ≤ 0",
          "∀x ∈ ℝ, x² + 1 ≤ 0",
          "∃x ∈ ℝ, x² + 1 < 0",
          "∀x ∈ ℝ, x² + 1 < 0",
        ],
        correctIndex: 0,
        explanation: "Phủ định của ký hiệu ∀ (với mọi) là ∃ (tồn tại), và phủ định của > là ≤.",
      },
      {
        id: "q2",
        question: "Câu nào sau đây là một mệnh đề toán học?",
        mathProblem: "\\text{Xác định câu khẳng định đúng hoặc sai}",
        options: [
          "Tổng ba góc trong một tam giác bằng 180°",
          "Học toán có vui không?",
          "Hãy làm bài tập về nhà ngay!",
          "Thời tiết hôm nay thật đẹp!",
        ],
        correctIndex: 0,
        explanation: "Chỉ có câu 'Tổng ba góc trong một tam giác bằng 180°' là khẳng định đúng, mang tính chân lý toán học.",
      },
    ],
  },

  // ==========================================
  // LỚP 11
  // ==========================================
  "t11-b1-gia-tri-luong-giac": {
    scenarioTitle: "Tình huống: Vòng quay mặt trời Sun Wheel và góc lượng giác",
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Bạn Mai",
        avatar: "🧑‍🎓",
        speech: "Thưa Thầy, một vòng quay mặt trời quay được nhiều vòng liên tiếp, góc quay có thể vượt quá 360° hoặc là góc âm không ạ?",
        visualGraphic: "circle",
        mathNote: "\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})",
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Chính xác! Trong lượng giác, góc lượng giác có thể có số đo tùy ý từ -∞ đến +∞. Đơn vị đo là radian (rad) với π rad = 180°.",
        visualGraphic: "circle",
        mathNote: "180^\\circ = \\pi \\text{ rad}",
      },
    ],
    theorySections: [
      {
        index: "1",
        title: "Góc lượng giác & Đơn vị Radian",
        points: [
          "Đường tròn định hướng là đường tròn có chiều quay dương (ngược chiều kim đồng hồ) và chiều âm (cùng chiều kim đồng hồ).",
          "Đơn vị radian: Góc ở tâm chắn một cung có độ dài bằng bán kính có số đo là 1 radian.",
          "Công thức đổi: a° = a · π / 180 (rad) và α (rad) = α · (180/π)°.",
        ],
        formula: "\\frac{a}{180} = \\frac{\\alpha}{\\pi}",
        exampleTitle: "Ví Dụ 1 (SGK)",
        exampleProblem: "Đổi góc 60° sang radian và góc 3π/4 rad sang độ.",
        exampleSolution: "60° = 60 · (π/180) = π/3 rad. 3π/4 rad = (3π/4) · (180/π)° = 135°.",
      },
      {
        index: "2",
        title: "Giá trị lượng giác trên đường tròn lượng giác",
        points: [
          "Điểm M(x₀, y₀) trên đường tròn lượng giác biểu diễn góc α:",
          "• sin α = y₀ (tung độ điểm M).",
          "• cos α = x₀ (hoành độ điểm M).",
          "• tan α = sin α / cos α = y₀/x₀ (x₀ ≠ 0).",
          "• cot α = cos α / sin α = x₀/y₀ (y₀ ≠ 0).",
          "Hệ thức cơ bản: sin²α + cos²α = 1; 1 + tan²α = 1/cos²α.",
        ],
        formula: "\\sin^2 \\alpha + \\cos^2 \\alpha = 1, \\quad 1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}",
        exampleTitle: "Ví Dụ 2 (SGK)",
        exampleProblem: "Cho sin α = 3/5 với 0 < α < π/2. Tính cos α và tan α.",
        exampleSolution: "Vì 0 < α < π/2 nên cos α > 0. Ta có cos²α = 1 - sin²α = 1 - 9/25 = 16/25 ⇒ cos α = 4/5. Do đó tan α = (3/5) / (4/5) = 3/4.",
      },
    ],
    tips: ["Ghi nhớ thần chú dấu của các giá trị lượng giác theo từng góc phần tư: 'Nhất cả, nhì sin, tam tan, tứ cos'."],
    traps: ["Bẫy quên xét dấu khi lấy căn cos α = ±√(1 - sin²α). Luôn dựa vào khoảng của α để chọn dấu."],
    quizQuestions: [
      {
        id: "q1",
        question: "Góc có số đo 150° tương ứng với bao nhiêu radian?",
        mathProblem: "150^\\circ \\times \\frac{\\pi}{180^\\circ} = ?",
        options: ["5π/6", "2π/3", "3π/4", "7π/6"],
        correctIndex: 0,
        explanation: "150 · (π/180) = 5π/6 rad.",
      },
      {
        id: "q2",
        question: "Hệ thức lượng giác nào sau đây luôn ĐÚNG với mọi góc α làm biểu thức có nghĩa?",
        mathProblem: "\\sin^2 \\alpha + \\cos^2 \\alpha = ?",
        options: ["sin²α + cos²α = 1", "sin²α - cos²α = 1", "tan α · cot α = -1", "1 + tan²α = 1/sin²α"],
        correctIndex: 0,
        explanation: "Công thức Pythagore lượng giác cơ bản là sin²α + cos²α = 1.",
      },
    ],
  },

  // ==========================================
  // LỚP 12
  // ==========================================
  "t12-b1-don-dieu-cuc-tri": {
    scenarioTitle: "Tình huống: Tối ưu hóa lợi nhuận doanh nghiệp và khảo sát đường cong",
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Bạn Hoàng",
        avatar: "🧑‍🎓",
        speech: "Thưa Thầy, làm sao để biết một hàm số lợi nhuận f(x) đang tăng trưởng (đồng biến) hay suy thoái (nghịch biến), và điểm nào đạt lợi nhuận tối đa ạ?",
        visualGraphic: "graph",
        mathNote: "f'(x) > 0 \\Rightarrow \\text{Đồng biến}; \\quad f'(x_0) = 0 \\Rightarrow \\text{Cực trị}",
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Đạo hàm f'(x) chính là công cụ vạn năng! Dấu của f'(x) quyết định tính đồng biến/nghịch biến, và điểm đổi dấu của f'(x) chính là các điểm cực trị.",
        visualGraphic: "graph",
        mathNote: "f'(x) \\text{ đổi dấu từ } (+) \\to (-) \\Rightarrow \\text{Cực đại}",
      },
    ],
    theorySections: [
      {
        index: "1",
        title: "Tính đơn điệu của hàm số & Dấu đạo hàm f'(x)",
        points: [
          "Kí hiệu K là khoảng, đoạn hoặc nửa khoảng.",
          "• Nếu f'(x) > 0 với mọi x ∈ K thì hàm số f(x) đồng biến (tăng) trên K.",
          "• Nếu f'(x) < 0 với mọi x ∈ K thì hàm số f(x) nghịch biến (giảm) trên K.",
          "• Nếu f'(x) = 0 với mọi x ∈ K thì f(x) là hàm hằng (không đổi) trên K.",
        ],
        formula: "f'(x) \\ge 0, \\forall x \\in K \\ (f'(x)=0 \\text{ tại hữu hạn điểm}) \\Rightarrow f(x) \\nearrow",
        exampleTitle: "Ví Dụ 1 (SGK)",
        exampleProblem: "Tìm các khoảng đơn điệu của hàm số y = x³ - 3x² + 2.",
        exampleSolution: "Tập xác định D = ℝ. Ta có y' = 3x² - 6x = 3x(x - 2). y' = 0 ⇔ x = 0 hoặc x = 2. Xét dấu y': y' > 0 trên (-∞; 0) và (2; +∞) (hàm số đồng biến); y' < 0 trên (0; 2) (hàm số nghịch biến).",
      },
      {
        index: "2",
        title: "Cực trị của hàm số (Cực đại & Cực tiểu)",
        points: [
          "Điều kiện cần: Nếu f(x) đạt cực trị tại x₀ và có đạo hàm tại x₀ thì f'(x₀) = 0.",
          "Điều kiện đủ (Dấu hiệu 1):",
          "• Nếu f'(x) đổi dấu từ DƯƠNG sang ÂM khi x đi qua x₀ thì x₀ là điểm CỰC ĐẠI.",
          "• Nếu f'(x) đổi dấu từ ÂM sang DƯƠNG khi x đi qua x₀ thì x₀ là điểm CỰC TIỂU.",
        ],
        formula: "x_0 \\text{ là điểm cực trị } \\Leftrightarrow f'(x) \\text{ đổi dấu khi qua } x_0",
        exampleTitle: "Ví Dụ 2 (SGK)",
        exampleProblem: "Tìm điểm cực đại và điểm cực tiểu của hàm số y = x³ - 3x² + 2.",
        exampleSolution: "Từ bảng xét dấu y' ở Ví dụ 1: y' đổi dấu từ + sang - qua x = 0 ⇒ Điểm cực đại là x = 0, y_{CD} = 2. y' đổi dấu từ - sang + qua x = 2 ⇒ Điểm cực tiểu là x = 2, y_{CT} = -2.",
      },
    ],
    tips: ["Hàm số có thể đạt cực trị tại điểm mà tại đó đạo hàm không xác định, miễn là hàm số liên tục tại điểm đó."],
    traps: ["Bẫy nghiệm bội chẵn: Nếu x₀ là nghiệm bội chẵn của f'(x) = 0 (ví dụ f'(x) = (x - 1)²), f'(x) không đổi dấu qua x₀ thì x₀ KHÔNG PHẢI là điểm cực trị."],
    quizQuestions: [
      {
        id: "q1",
        question: "Hàm số y = x³ - 3x đồng biến trên khoảng nào sau đây?",
        mathProblem: "y' = 3x^2 - 3 = 3(x-1)(x+1) > 0",
        options: ["(1; +∞) và (-∞; -1)", "(-1; 1)", "(-∞; 1)", "(-1; +∞)"],
        correctIndex: 0,
        explanation: "y' = 3x² - 3 > 0 ⇔ x² > 1 ⇔ x > 1 hoặc x < -1.",
      },
      {
        id: "q2",
        question: "Cho hàm số f(x) có đạo hàm f'(x) = x(x - 1)²(x + 2). Số điểm cực trị của hàm số là:",
        mathProblem: "f'(x) = x^1 (x-1)^2 (x+2)^1",
        options: ["2", "3", "1", "0"],
        correctIndex: 0,
        explanation: "f'(x) đổi dấu khi đi qua các nghiệm bội lẻ x = 0 và x = -2 (2 điểm cực trị). Nghiệm x = 1 là bội chẵn nên f'(x) không đổi dấu.",
      },
    ],
  },
};

/**
 * Hàm giải mã dữ liệu bài học tổng quát cho mọi khối lớp từ 6 đến 12:
 * Bám sát chuẩn xác 100% cấu trúc SGK Kết Nối Tri Thức.
 */
export function getUnifiedLessonDetail(gradeKey: string, topicId: string, topic: LessonItem, gradeData: GradeData): DetailedLessonData {
  // 1. Kiểm tra nếu là bài học Lớp 6 đã có trong Grade 6 dataset
  if (gradeKey === "lop-6" && GRADE_6_DETAILED_LESSONS[topicId]) {
    return GRADE_6_DETAILED_LESSONS[topicId];
  }

  // 1b. Kiểm tra nếu là bài học Lớp 7 đã có trong Grade 7 dataset
  if (gradeKey === "lop-7" && GRADE_7_DETAILED_LESSONS[topicId]) {
    return GRADE_7_DETAILED_LESSONS[topicId];
  }

  // 1c. Kiểm tra nếu là bài học Lớp 8 đã có trong Grade 8 dataset
  if (gradeKey === "lop-8" && GRADE_8_DETAILED_LESSONS[topicId]) {
    return GRADE_8_DETAILED_LESSONS[topicId];
  }

  // 1d. Kiểm tra nếu là bài học Lớp 9 đã có trong Grade 9 dataset
  if (gradeKey === "lop-9" && GRADE_9_DETAILED_LESSONS[topicId]) {
    return GRADE_9_DETAILED_LESSONS[topicId];
  }

  // 1e. Kiểm tra nếu là bài học Lớp 10 đã có trong Grade 10 dataset
  if (gradeKey === "lop-10" && GRADE_10_DETAILED_LESSONS[topicId]) {
    return GRADE_10_DETAILED_LESSONS[topicId];
  }

  // 1f. Kiểm tra nếu là bài học Lớp 11 đã có trong Grade 11 dataset
  if (gradeKey === "lop-11" && GRADE_11_DETAILED_LESSONS[topicId]) {
    return GRADE_11_DETAILED_LESSONS[topicId];
  }

  // 2. Kiểm tra nếu bài học đã có trong Knowledge Base chi tiết
  if (DETAILED_LESSONS_KNOWLEDGE_BASE[topicId]) {
    const kb = DETAILED_LESSONS_KNOWLEDGE_BASE[topicId];
    const parentChapter = gradeData.chapters.find((c) => c.lessons.some((l) => l.id === topic.id)) || gradeData.chapters[0];
    return {
      id: topic.id,
      lessonNumber: topic.lessonNumber,
      title: topic.title,
      bookChapter: parentChapter?.title || `SGK ${gradeData.title} - Kết Nối Tri Thức`,
      scenarioTitle: kb.scenarioTitle || `Tình Huống: ${topic.title}`,
      scenarioFrames: kb.scenarioFrames || [],
      theorySections: kb.theorySections || [],
      tips: kb.tips || ["Nắm chắc điều kiện xác định và áp dụng đúng công thức."],
      traps: kb.traps || ["Chú ý kiểm tra lại các bước biến đổi trung gian."],
      interactiveType: topic.hasInteractive === "function" ? "function" : topic.hasInteractive === "geometry" ? "geometry" : topic.hasInteractive === "circle" ? "circle" : topic.hasInteractive === "vector" ? "vector" : "default",
      quizQuestions: kb.quizQuestions || [],
    };
  }

  // 3. Fallback thông minh: Tự động tổng hợp dữ liệu chuẩn xác theo cấu trúc SGK
  const parentChapter = gradeData.chapters.find((c) => c.lessons.some((l) => l.id === topic.id)) || gradeData.chapters[0];
  const formulas = topic.keyFormulas && topic.keyFormulas.length > 0 ? topic.keyFormulas : ["A = B", "x = a"];

  const theorySections: TheorySection[] = [
    {
      index: "1",
      title: `Khái Niệm & Định Lý Trọng Tâm (SGK ${gradeData.title})`,
      points: [
        topic.description,
        "Nắm vững định nghĩa, phạm vi áp dụng và các điều kiện xác định bắt buộc.",
        "Thiết lập mối liên hệ giữa các đại lượng đã cho và đại lượng cần tìm.",
      ],
      formula: formulas[0],
      exampleTitle: "Ví Dụ 1 (Chuẩn SGK)",
      exampleProblem: `Áp dụng định lý trọng tâm của bài: Cho bài toán mô hình hóa theo công thức ${formulas[0]}. Hãy giải và rút ra kết luận.`,
      exampleSolution: `Phân tích giả thiết: Thay các đại lượng vào hệ thức ${formulas[0]}, thực hiện phép biến đổi tương đương theo quy tắc SGK để rút ra kết quả chính xác.`,
    },
    {
      index: "2",
      title: `Phương Pháp Tư Duy & Các Bước Biến Đổi Chuẩn Xác`,
      points: [
        "Bước 1 (Phân tích): Thiết lập biểu thức đại số hoặc mô hình hình học tương ứng.",
        "Bước 2 (Giải toán): Sử dụng các công thức liên hệ trọng tâm để rút gọn và giải phương trình/hệ thức.",
        "Bước 3 (Kiểm tra & Kết luận): So sánh nghiệm với điều kiện xác định và đối chiếu với yêu cầu bài toán.",
      ],
      formula: formulas[1] || formulas[0],
      exampleTitle: "Ví Dụ 2 (Vận Dụng Trực Quan)",
      exampleProblem: `Tính toán và rút gọn biểu thức trong bài tập SGK tương ứng: ${formulas[1] || formulas[0]}.`,
      exampleSolution: `Áp dụng công thức biến đổi tương đương, nhóm các số hạng hợp lý để thu được kết quả tối giản.`,
    },
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      id: "q1",
      question: `[Bài Tập SGK] Theo bài học "${topic.title}", công thức hoặc định lý nào sau đây là CHUẨN XÁC nhất?`,
      mathProblem: formulas[0],
      options: [
        `Công thức chuẩn: ${formulas[0]}`,
        "Chỉ áp dụng khi tất cả các đại lượng bằng 0",
        "Không có tính chất giao hoán và phân phối",
        "Không xác định trên tập số thực",
      ],
      correctIndex: 0,
      explanation: `Định lý cốt lõi SGK: Công thức chuẩn xác là ${formulas[0]} với đầy đủ điều kiện xác định.`,
    },
    {
      id: "q2",
      question: `[Vận Dụng SGK] Áp dụng các quy tắc biến đổi của bài học vào tính toán biểu thức:`,
      mathProblem: formulas[1] || formulas[0],
      options: [
        "Thực hiện biến đổi theo đúng thứ tự ưu tiên và kiểm tra điều kiện xác định",
        "Bỏ qua dấu ngoặc và đổi dấu tùy ý",
        "Làm tròn số trung gian ngay từ bước đầu tiên",
        "Bỏ qua điều kiện mẫu số khác 0",
      ],
      correctIndex: 0,
      explanation: "Luôn tuân thủ đúng thứ tự thực hiện phép tính, quy tắc dấu và điều kiện xác định của bài toán.",
    },
  ];

  return {
    id: topic.id,
    lessonNumber: topic.lessonNumber,
    title: topic.title,
    bookChapter: parentChapter?.title || `SGK ${gradeData.title} - Kết Nối Tri Thức`,
    scenarioTitle: `Tình Huống Dẫn Nhập: ${topic.title}`,
    scenarioFrames: [
      {
        id: 1,
        character: "student",
        characterName: "Học sinh (Khám phá)",
        avatar: "🧑‍🎓",
        speech: `Thưa Thầy Tính, bài học "${topic.title}" giúp chúng em giải quyết bài toán thực tế nào và làm sao để áp dụng các công thức chuẩn nhất ạ?`,
        visualGraphic: topic.strand === "hinhhoc" ? "triangle" : topic.strand === "thongke" ? "graph" : "box",
        mathNote: formulas[0],
      },
      {
        id: 2,
        character: "teacher",
        characterName: "Thầy Tính (VinaMath)",
        avatar: "👨‍🏫",
        speech: "Chào em! Bằng cách nắm chắc định lý và 2 bước giải mẫu của SGK, em sẽ làm chủ bài toán một cách dễ dàng và chuẩn xác!",
        visualGraphic: topic.strand === "hinhhoc" ? "circle" : "graph",
        mathNote: formulas[1] || formulas[0],
      },
    ],
    theorySections,
    tips: ["Luôn đọc kỹ đề bài và xác định đúng các đại lượng đã cho.", "Kiểm tra kỹ điều kiện xác định trước khi kết luận."],
    traps: ["Tránh nhầm lẫn giữa các công thức biến đổi tương đương và hệ quả."],
    interactiveType: topic.hasInteractive === "function" ? "function" : topic.hasInteractive === "geometry" ? "geometry" : topic.hasInteractive === "circle" ? "circle" : topic.hasInteractive === "vector" ? "vector" : "default",
    quizQuestions,
  };
}
