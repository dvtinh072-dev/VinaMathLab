import { QuestionData } from "@/components/exam/ExamEngine";
import { MultipleChoiceQuestionData } from "@/components/exam/QuestionMultipleChoice";
import { TrueFalseQuestionData } from "@/components/exam/QuestionTrueFalse";
import { ShortAnswerQuestionData } from "@/components/exam/QuestionShortAnswer";

export interface ParsedExamResult {
  title: string;
  subtitle?: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: QuestionData[];
  errors: string[];
}

/**
 * Intelligent Vietnamese Exam Parser
 * Supports:
 * - Part I: Multiple choice (4 options A, B, C, D)
 * - Part II: True / False (4 sub-items a, b, c, d)
 * - Part III: Short answer (fill-in / numeric answer)
 */
export function parseExamText(rawText: string, defaultGradeNumber = 10): ParsedExamResult {
  const errors: string[] = [];
  const lines = rawText.replace(/\r\n/g, "\n").split("\n");

  let title = "Đề Kiểm Tra Môn Toán";
  let durationMinutes = 45;
  let subtitle = "";

  // 1. Try to detect title and duration from header lines
  const contentLines: string[] = [];
  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const timeMatch = line.match(/thời gian(?: làm bài)?[:\s]+(\d+)\s*(?:phút|p)/i);
    if (timeMatch) {
      durationMinutes = parseInt(timeMatch[1], 10) || 45;
    }

    if (/^(?:đề thi|đề kiểm tra|bài kiểm tra|khảo sát)/i.test(line)) {
      title = line;
    } else if (/^(?:môn|chương|học kỳ|lớp|chuyên đề)/i.test(line) && !subtitle) {
      subtitle = line;
    }
  }

  // 2. Normalize text and split into question blocks
  // Regex to detect start of a question: "Câu 1:", "Câu 1.", "Bài 1:", "1.", "[Câu 1]"
  const questionSplitRegex = /(?:^|\n)\s*(?:\[?(?:Câu|Bài)\s*(\d+)\]?[\.:\)]|\b(\d+)\.[\s\t]+(?=[A-ZĐSÀ-Ỹa-z\$\\\*]))/g;

  const rawClean = rawText.replace(/\r\n/g, "\n");
  const splitIndices: { index: number; qNum: number }[] = [];
  let match: RegExpExecArray | null;

  while ((match = questionSplitRegex.exec(rawClean)) !== null) {
    const qNum = parseInt(match[1] || match[2], 10);
    splitIndices.push({ index: match.index, qNum });
  }

  const questions: QuestionData[] = [];

  // Parse trailing answer key grid if present at the end of the text (e.g. "BẢNG ĐÁP ÁN: 1.A 2.B 3.C...")
  const answerGrid: { [qNum: number]: string } = {};
  const answerGridMatch = rawClean.match(/(?:bảng\s+đáp\s+án|đáp\s+án\s+chi\s+tiết|hướng\s+dẫn\s+chấm)[\s\S]*$/i);
  if (answerGridMatch) {
    const gridText = answerGridMatch[0];
    const gridItemRegex = /(?:câu\s*)?(\d+)[\s\.:\-_]+([A-D]|[a-d]|[\d\.,\-\/]+)/gi;
    let gMatch: RegExpExecArray | null;
    while ((gMatch = gridItemRegex.exec(gridText)) !== null) {
      const qN = parseInt(gMatch[1], 10);
      answerGrid[qN] = gMatch[2].toUpperCase();
    }
  }

  // If no split matches found, try alternative line-by-line fallback
  if (splitIndices.length === 0) {
    // Fallback: parse single question or simple list
    errors.push("Không tìm thấy các câu hỏi theo mẫu 'Câu 1:', 'Câu 2:'... Vui lòng kiểm tra định dạng.");
    return {
      title,
      subtitle,
      durationMinutes,
      totalQuestions: 0,
      questions: [],
      errors,
    };
  }

  for (let i = 0; i < splitIndices.length; i++) {
    const start = splitIndices[i].index;
    const end = i < splitIndices.length - 1 ? splitIndices[i + 1].index : (answerGridMatch ? answerGridMatch.index : rawClean.length);
    const blockText = rawClean.substring(start, end).trim();
    const qNum = splitIndices[i].qNum || i + 1;

    try {
      const q = parseSingleQuestionBlock(blockText, qNum, answerGrid[qNum]);
      if (q) {
        questions.push(q);
      } else {
        errors.push(`Không thể nhận diện câu ${qNum}`);
      }
    } catch (err: any) {
      errors.push(`Lỗi phân tích câu ${qNum}: ${err?.message || "Cú pháp không hợp lệ"}`);
    }
  }

  return {
    title,
    subtitle,
    durationMinutes,
    totalQuestions: questions.length,
    questions,
    errors,
  };
}

function parseSingleQuestionBlock(block: string, qIndex: number, gridAns?: string): QuestionData | null {
  // Extract explanation if present
  let explanation = "";
  let mainBlock = block;
  const explMatch = block.match(/(?:\n\s*(?:lời giải|hướng dẫn giải|giải thích)[\s:]*)([\s\S]*)$/i);
  if (explMatch) {
    explanation = explMatch[1].trim();
    mainBlock = block.substring(0, explMatch.index).trim();
  }

  // Remove question prefix "Câu 1: " from stem
  const headerMatch = mainBlock.match(/^\s*(?:\[?(?:Câu|Bài)\s*\d+\]?[\.:\)]|\d+\.[\s\t]+)/i);
  let content = mainBlock;
  if (headerMatch) {
    content = mainBlock.substring(headerMatch[0].length).trim();
  }

  // Check Question Type:
  // Type B: True/False (Has a), b), c), d) options)
  const isTrueFalse = /(?:^|\n)\s*[a-d]\s*[\)\.]/i.test(content) && /(?:đúng|sai|[đĐ][\s,;\.]|[sS][\s,;\.])/i.test(content + " " + explanation);

  if (isTrueFalse) {
    return parseTrueFalseQuestion(content, qIndex, explanation);
  }

  // Type A: Multiple choice (Has A., B., C., D. options)
  const hasOptions = /[A-D]\s*[\.\)]/i.test(content);
  if (hasOptions) {
    return parseMultipleChoiceQuestion(content, qIndex, explanation, gridAns);
  }

  // Type C: Short answer (No A/B/C/D, has "Đáp án:", "Đáp số:" or numeric answer)
  return parseShortAnswerQuestion(content, qIndex, explanation, gridAns);
}

function parseMultipleChoiceQuestion(
  content: string,
  qIndex: number,
  explanation: string,
  gridAns?: string
): MultipleChoiceQuestionData | null {
  // Extract correct answer if present: "Đáp án: A", "Chọn A", "ĐA: A"
  let correctKey: "A" | "B" | "C" | "D" = (gridAns as any) || "A";
  const ansMatch = content.match(/(?:đáp án|chọn|đáp số|đa)[:\s]+([A-D])/i);
  if (ansMatch) {
    correctKey = ansMatch[1].toUpperCase() as "A" | "B" | "C" | "D";
    // Remove answer line from content
    content = content.replace(ansMatch[0], "").trim();
  }

  // Find option splits: A., B., C., D.
  // Can be on same line: "A. 1 B. 2 C. 3 D. 4" or on separate lines
  const optRegex = /(?:^|[\s\t\n])([A-D])[\.\)]\s*/g;
  const optMatches: { key: "A" | "B" | "C" | "D"; index: number; length: number }[] = [];
  let m: RegExpExecArray | null;

  while ((m = optRegex.exec(content)) !== null) {
    const key = m[1].toUpperCase() as "A" | "B" | "C" | "D";
    // Avoid false positives inside formulas
    optMatches.push({ key, index: m.index, length: m[0].length });
  }

  // Filter to keep canonical A, B, C, D in order
  const filteredOpts: { key: "A" | "B" | "C" | "D"; index: number; length: number }[] = [];
  const expected = ["A", "B", "C", "D"];
  let expIdx = 0;
  for (const om of optMatches) {
    if (om.key === expected[expIdx]) {
      filteredOpts.push(om);
      expIdx++;
      if (expIdx >= 4) break;
    }
  }

  if (filteredOpts.length < 2) {
    // Fallback: cannot parse 4 options reliably
    return null;
  }

  const stem = content.substring(0, filteredOpts[0].index).trim();
  const options: { key: "A" | "B" | "C" | "D"; text: string }[] = [];

  for (let i = 0; i < filteredOpts.length; i++) {
    const start = filteredOpts[i].index + filteredOpts[i].length;
    const end = i < filteredOpts.length - 1 ? filteredOpts[i + 1].index : content.length;
    const optText = content.substring(start, end).trim().replace(/[,\.;\s]+$/, "");
    options.push({
      key: filteredOpts[i].key,
      text: optText,
    });
  }

  // Ensure 4 options
  while (options.length < 4) {
    const nextKey = expected[options.length] as "A" | "B" | "C" | "D";
    options.push({ key: nextKey, text: "---" });
  }

  return {
    id: `custom-mc-${qIndex}`,
    type: "multiple_choice",
    index: qIndex,
    stem: stem || `Câu hỏi ${qIndex}`,
    options: options.slice(0, 4),
    correctKey,
    explanation: explanation || `Đáp án đúng là phương án ${correctKey}.`,
  };
}

function parseTrueFalseQuestion(
  content: string,
  qIndex: number,
  explanation: string
): TrueFalseQuestionData | null {
  // Sub-items regex: a), b), c), d)
  const subRegex = /(?:^|[\n\s])([a-d])\s*[\)\.]\s*/gi;
  const matches: { key: "a" | "b" | "c" | "d"; index: number; length: number }[] = [];
  let m: RegExpExecArray | null;

  while ((m = subRegex.exec(content)) !== null) {
    matches.push({
      key: m[1].toLowerCase() as "a" | "b" | "c" | "d",
      index: m.index,
      length: m[0].length,
    });
  }

  // Filter canonical a, b, c, d
  const canonical: { key: "a" | "b" | "c" | "d"; index: number; length: number }[] = [];
  const expected = ["a", "b", "c", "d"];
  let expIdx = 0;
  for (const item of matches) {
    if (item.key === expected[expIdx]) {
      canonical.push(item);
      expIdx++;
      if (expIdx >= 4) break;
    }
  }

  if (canonical.length < 2) return null;

  const stem = content.substring(0, canonical[0].index).trim();
  const subQuestions: { key: "a" | "b" | "c" | "d"; text: string; isCorrect: boolean }[] = [];

  for (let i = 0; i < canonical.length; i++) {
    const start = canonical[i].index + canonical[i].length;
    const end = i < canonical.length - 1 ? canonical[i + 1].index : content.length;
    let itemText = content.substring(start, end).trim();

    // Check if right at the end or in text there is (Đ) or (S) or [Đúng], [Sai]
    let isCorrect = true;
    const tfMatch = itemText.match(/[\(\[]?(?:đúng|sai|[đĐ]|[sS])[\)\]]?$/i);
    if (tfMatch) {
      const word = tfMatch[0].toLowerCase();
      isCorrect = word.includes("đ");
      itemText = itemText.substring(0, tfMatch.index).trim();
    } else {
      // Check in explanation for mentions like "a) Đúng" or "a - S"
      const expMatch = explanation.match(new RegExp(`${canonical[i].key}\\s*[\\)\\.:\\-]\\s*([đĐsS]|đúng|sai)`, "i"));
      if (expMatch) {
        isCorrect = /^[đĐ]|đúng/i.test(expMatch[1]);
      }
    }

    subQuestions.push({
      key: canonical[i].key,
      text: itemText.replace(/[,\.;\s]+$/, ""),
      isCorrect,
    });
  }

  // Ensure 4 sub questions
  while (subQuestions.length < 4) {
    const k = expected[subQuestions.length] as "a" | "b" | "c" | "d";
    subQuestions.push({ key: k, text: "---", isCorrect: true });
  }

  return {
    id: `custom-tf-${qIndex}`,
    type: "true_false",
    index: qIndex,
    stem: stem || `Xét tính đúng sai của các khẳng định sau:`,
    subQuestions: subQuestions.slice(0, 4),
    explanation: explanation || "Xem lời giải chi tiết của từng ý khẳng định.",
  };
}

function parseShortAnswerQuestion(
  content: string,
  qIndex: number,
  explanation: string,
  gridAns?: string
): ShortAnswerQuestionData {
  let correctAnswer = gridAns || "0";
  const ansMatch = content.match(/(?:đáp án|đáp số|kết quả)[:\s]+([^\n\r]+)/i);
  let stem = content;
  if (ansMatch) {
    correctAnswer = ansMatch[1].trim();
    stem = content.replace(ansMatch[0], "").trim();
  }

  // Clean answer
  correctAnswer = correctAnswer.replace(/[,\.;\s]+$/, "").trim();

  return {
    id: `custom-sa-${qIndex}`,
    type: "short_answer",
    index: qIndex,
    stem: stem || `Câu hỏi trả lời ngắn số ${qIndex}`,
    correctAnswer: correctAnswer || "0",
    acceptableAnswers: [correctAnswer || "0"],
    explanation: explanation || `Đáp số chính xác là ${correctAnswer}.`,
  };
}

/**
 * Pre-built Sample Exams for instant testing without typing
 */
export const SAMPLE_TEACHER_EXAM_TEXT_GRADE_10 = `ĐỀ KIỂM TRA 45 PHÚT HÌNH HỌC VECTƠ - TOÁN 10
Thời gian làm bài: 45 phút
Phần I: Trắc nghiệm 4 lựa chọn (Mỗi câu trả lời đúng được 0.25 điểm)

Câu 1: Cho ba điểm phân biệt $A, B, C$ thẳng hàng. Khẳng định nào sau đây là đúng?
A. $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương
B. $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng
C. $\\overrightarrow{AB} = \\overrightarrow{AC}$
D. $|\\overrightarrow{AB}| = |\\overrightarrow{AC}|$
Đáp án: A
Lời giải: Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương.

Câu 2: Cho hình bình hành $ABCD$ tâm $O$. Khẳng định nào sau đây là sai?
A. $\\overrightarrow{AB} = \\overrightarrow{DC}$
B. $\\overrightarrow{AD} = \\overrightarrow{BC}$
C. $\\overrightarrow{OA} = \\overrightarrow{OC}$
D. $\\overrightarrow{AO} = \\overrightarrow{OC}$
Đáp án: C
Lời giải: Vì $O$ là trung điểm của $AC$ nên $\\overrightarrow{OA} và $\\overrightarrow{OC}$ là hai vectơ đối nhau, suy ra $\\overrightarrow{OA} = -\\overrightarrow{OC}$ chứ không bằng nhau.

Câu 3: Cho tam giác $ABC$ đều cạnh $a$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AC}$ bằng:
A. $a\\sqrt{3}$
B. $\\frac{a\\sqrt{3}}{2}$
C. $2a$
D. $a$
Đáp án: A
Lời giải: Gọi $M$ là trung điểm $BC$, ta có $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$. Tam giác đều cạnh $a$ có trung tuyến $AM = \\frac{a\\sqrt{3}}{2}$. Do đó $|\\overrightarrow{AB} + \\overrightarrow{AC}| = 2 \\cdot \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$.

Phần II: Trắc nghiệm Đúng / Sai (Mỗi câu có 4 ý a, b, c, d)

Câu 4: Cho hình vuông $ABCD$ tâm $O$ cạnh $a$. Xét tính đúng sai của các mệnh đề sau:
a) Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ cùng hướng. (Sai)
b) Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng $a\\sqrt{2}$. (Đúng)
c) Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$. (Đúng)
d) Vectơ đối của $\\overrightarrow{OA}$ là $\\overrightarrow{CO}$. (Sai)
Lời giải:
a) Sai vì $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ ngược hướng.
b) Đúng vì $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$, độ dài đường chéo hình vuông là $a\\sqrt{2}$.
c) Đúng vì $AB \\perp AD \\Rightarrow \\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$.
d) Sai vì $\\overrightarrow{OA} = \\overrightarrow{CO}$, vectơ đối của $\\overrightarrow{OA}$ là $\\overrightarrow{AO}$ hoặc $\\overrightarrow{OC}$.

Phần III: Trắc nghiệm Trả lời ngắn / Điền số (Mỗi câu trả lời đúng được 0.5 điểm)

Câu 5: Cho tam giác $ABC$ có trọng tâm $G$. Biết diện tích tam giác $ABC$ bằng $54\\text{ cm}^2$. Tính diện tích tam giác $GAB$.
Đáp số: 18
Lời giải: Trọng tâm $G$ chia tam giác $ABC$ thành ba tam giác có diện tích bằng nhau: $S_{GAB} = S_{GBC} = S_{GCA} = \\frac{1}{3} S_{ABC} = \\frac{54}{3} = 18\\text{ cm}^2$.

Câu 6: Cho hình chữ nhật $ABCD$ có $AB = 6, AD = 8$. Tính độ dài vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD}$.
Đáp số: 10
Lời giải: Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Độ dài đường chéo $AC = \\sqrt{AB^2 + AD^2} = \\sqrt{6^2 + 8^2} = 10$.`;

export const SAMPLE_TEACHER_EXAM_TEXT_GRADE_6 = `ĐỀ KHẢO SÁT CHẤT LƯỢNG TOÁN 6
Thời gian làm bài: 45 phút

Câu 1: Tập hợp các số tự nhiên nhỏ hơn 5 được viết là:
A. {0; 1; 2; 3; 4}
B. {1; 2; 3; 4; 5}
C. {0; 1; 2; 3; 4; 5}
D. {1; 2; 3; 4}
Đáp án: A
Lời giải: Các số tự nhiên nhỏ hơn 5 là 0, 1, 2, 3, 4.

Câu 2: Số nguyên tố là số:
A. Lớn hơn 1, chỉ có hai ước là 1 và chính nó
B. Chia hết cho 2
C. Lớn hơn 0, có nhiều hơn 2 ước
D. Số lẻ bất kỳ
Đáp án: A
Lời giải: Theo định nghĩa, số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.

Câu 3: Xét tính đúng sai của các phát biểu sau về số học:
a) Số 0 là số nguyên tố nhỏ nhất. (Sai)
b) Số 2 là số nguyên tố chẵn duy nhất. (Đúng)
c) Hợp số là số tự nhiên lớn hơn 1, có nhiều hơn 2 ước. (Đúng)
d) Tổng hai số lẻ luôn là số lẻ. (Sai)
Lời giải: 0 không phải số nguyên tố (a Sai). 2 là số nguyên tố chẵn duy nhất (b Đúng). Hợp số có nhiều hơn 2 ước (c Đúng). Tổng hai số lẻ là số chẵn (d Sai).

Câu 4: Tìm số tự nhiên $x$, biết: $3x - 5 = 25$.
Đáp số: 10
Lời giải: $3x = 25 + 5 = 30 \\Rightarrow x = 30 : 3 = 10$.`;
