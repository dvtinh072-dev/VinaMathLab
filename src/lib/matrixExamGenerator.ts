import { ExamMatrix, MatrixTopicItem } from "@/types/examMatrix";
import { QuestionData } from "@/components/exam/ExamEngine";
import { MultipleChoiceQuestionData } from "@/components/exam/QuestionMultipleChoice";
import { TrueFalseQuestionData } from "@/components/exam/QuestionTrueFalse";
import { ShortAnswerQuestionData } from "@/components/exam/QuestionShortAnswer";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { GRADE_10_DETAILED_LESSONS } from "@/data/grade10LessonsData";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { parseExamText } from "@/lib/examParser";
import { getAiConfiguration } from "@/lib/geminiChatService";

export interface MatrixGenerationResult {
  title: string;
  gradeNumber: number;
  targetClass: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: QuestionData[];
  projectCount: number;
  aiCount: number;
  warnings: string[];
}

/**
 * Extracts and compiles all candidate questions from the project repository
 */
export function getProjectQuestionsPool(gradeNumber: number): QuestionData[] {
  const pool: QuestionData[] = [];

  // 1. From SAMPLE_EXAMS
  Object.values(SAMPLE_EXAMS).forEach((exam) => {
    if (!exam.gradeNumber || exam.gradeNumber === gradeNumber) {
      exam.questions.forEach((q) => {
        pool.push(q);
      });
    }
  });

  // 2. From DETAILED_LESSONS
  const lessonsMap = gradeNumber === 6 ? GRADE_6_DETAILED_LESSONS : gradeNumber === 10 ? GRADE_10_DETAILED_LESSONS : {};

  Object.values(lessonsMap).forEach((lesson: any) => {
    const chapterName = lesson.bookChapter || lesson.title || "";
    const lessonTitle = lesson.title || "";

    // Video questions
    if (Array.isArray(lesson.videoQuestions)) {
      lesson.videoQuestions.forEach((vq: any, idx: number) => {
        if (vq.options && Array.isArray(vq.options) && vq.options.length >= 4) {
          const keys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
          const correctKey = keys[vq.correctIndex ?? 0] || "A";
          pool.push({
            id: `proj-vq-${lesson.id}-${idx}`,
            type: "multiple_choice",
            index: idx + 1,
            stem: vq.question || vq.title || "",
            options: vq.options.slice(0, 4).map((text: string, i: number) => ({
              key: keys[i] || "A",
              text,
            })),
            correctKey,
            explanation: vq.explanation || "",
            topic: `${chapterName} - ${lessonTitle}`,
            difficulty: idx <= 1 ? "NB" : "TH",
          });
        }
      });
    }

    // Practice / SGK questions
    if (Array.isArray(lesson.quizQuestions)) {
      lesson.quizQuestions.forEach((qz: any, idx: number) => {
        if (qz.options && Array.isArray(qz.options) && qz.options.length >= 4) {
          const keys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
          const correctKey = keys[qz.correctIndex ?? 0] || "A";
          pool.push({
            id: `proj-qz-${lesson.id}-${idx}`,
            type: "multiple_choice",
            index: idx + 1,
            stem: qz.question || "",
            options: qz.options.slice(0, 4).map((text: string, i: number) => ({
              key: keys[i] || "A",
              text,
            })),
            correctKey,
            explanation: qz.explanation || "",
            topic: `${chapterName} - ${lessonTitle}`,
            difficulty: idx < 3 ? "NB" : idx < 7 ? "TH" : idx < 9 ? "VD" : "VDC",
          });
        }
      });
    }
  });

  return pool;
}

/**
 * Filter questions in pool matching a topic and difficulty
 */
function filterPoolQuestions(
  pool: QuestionData[],
  type: "multiple_choice" | "true_false" | "short_answer",
  topicKeywords: string[],
  difficulty: "NB" | "TH" | "VD" | "VDC",
  usedIds: Set<string>
): QuestionData[] {
  return pool.filter((q) => {
    if (usedIds.has(q.id)) return false;
    if (q.type !== type) return false;

    // Check difficulty if present
    if (q.difficulty && q.difficulty !== difficulty) return false;

    // Check topic match (case-insensitive substring match)
    const textToCheck = `${q.topic || ""} ${q.stem || ""}`.toLowerCase();
    const hasTopicMatch =
      topicKeywords.length === 0 ||
      topicKeywords.some((kw) => textToCheck.includes(kw.toLowerCase()));

    return hasTopicMatch;
  });
}

/**
 * Main Generator Function: Assembles exam based on ExamMatrix
 */
export async function generateExamFromMatrix(matrix: ExamMatrix): Promise<MatrixGenerationResult> {
  const warnings: string[] = [];
  const usedIds = new Set<string>();
  const projectPool = getProjectQuestionsPool(matrix.gradeNumber);

  const selectedPart1: MultipleChoiceQuestionData[] = [];
  const selectedPart2: TrueFalseQuestionData[] = [];
  const selectedPart3: ShortAnswerQuestionData[] = [];

  let projectCount = 0;
  let aiCount = 0;

  // Track requirements that couldn't be fulfilled by local pool
  const unfulfilledRequests: {
    topic: string;
    part: 1 | 2 | 3;
    difficulty: "NB" | "TH" | "VD" | "VDC";
    count: number;
  }[] = [];

  // Helper to extract keywords from topic name
  const getKeywords = (topicName: string): string[] => {
    return topicName
      .replace(/^chương\s+[ivx\d]+[:\s\-]*/i, "")
      .replace(/^bài\s+\d+[:\s\-]*/i, "")
      .split(/[,;&–\-\+]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 2);
  };

  // 1. First pass: Pull from local Project Pool if source is "project" or "hybrid"
  if (matrix.sourceOption === "project" || matrix.sourceOption === "hybrid") {
    for (const item of matrix.topics) {
      const keywords = getKeywords(item.topicName);

      // Part 1: Multiple choice
      const diffLevels: ("nb" | "th" | "vd" | "vdc")[] = ["nb", "th", "vd", "vdc"];
      for (const dKey of diffLevels) {
        const required = item.part1[dKey] || 0;
        if (required <= 0) continue;
        const diffUpper = dKey.toUpperCase() as "NB" | "TH" | "VD" | "VDC";

        const candidates = filterPoolQuestions(projectPool, "multiple_choice", keywords, diffUpper, usedIds);
        // Fallback: without topic keywords if strict pool was small
        const fallbackCandidates = candidates.length < required
          ? projectPool.filter((q) => q.type === "multiple_choice" && !usedIds.has(q.id) && (q.difficulty === diffUpper || !q.difficulty))
          : [];

        const merged = [...candidates, ...fallbackCandidates];
        const taken = merged.slice(0, required) as MultipleChoiceQuestionData[];

        taken.forEach((q) => {
          usedIds.add(q.id);
          selectedPart1.push(q);
          projectCount++;
        });

        if (taken.length < required) {
          unfulfilledRequests.push({
            topic: item.topicName,
            part: 1,
            difficulty: diffUpper,
            count: required - taken.length,
          });
        }
      }

      // Part 2: True / False
      for (const dKey of diffLevels) {
        const required = item.part2[dKey] || 0;
        if (required <= 0) continue;
        const diffUpper = dKey.toUpperCase() as "NB" | "TH" | "VD" | "VDC";

        const candidates = filterPoolQuestions(projectPool, "true_false", keywords, diffUpper, usedIds);
        const taken = candidates.slice(0, required) as TrueFalseQuestionData[];

        taken.forEach((q) => {
          usedIds.add(q.id);
          selectedPart2.push(q);
          projectCount++;
        });

        if (taken.length < required) {
          unfulfilledRequests.push({
            topic: item.topicName,
            part: 2,
            difficulty: diffUpper,
            count: required - taken.length,
          });
        }
      }

      // Part 3: Short Answer
      for (const dKey of diffLevels) {
        const required = item.part3[dKey] || 0;
        if (required <= 0) continue;
        const diffUpper = dKey.toUpperCase() as "NB" | "TH" | "VD" | "VDC";

        const candidates = filterPoolQuestions(projectPool, "short_answer", keywords, diffUpper, usedIds);
        const taken = candidates.slice(0, required) as ShortAnswerQuestionData[];

        taken.forEach((q) => {
          usedIds.add(q.id);
          selectedPart3.push(q);
          projectCount++;
        });

        if (taken.length < required) {
          unfulfilledRequests.push({
            topic: item.topicName,
            part: 3,
            difficulty: diffUpper,
            count: required - taken.length,
          });
        }
      }
    }
  } else {
    // If sourceOption === "internet", queue all requirements for AI generation
    for (const item of matrix.topics) {
      const diffLevels: ("nb" | "th" | "vd" | "vdc")[] = ["nb", "th", "vd", "vdc"];
      for (const dKey of diffLevels) {
        const diffUpper = dKey.toUpperCase() as "NB" | "TH" | "VD" | "VDC";
        if (item.part1[dKey] > 0) {
          unfulfilledRequests.push({ topic: item.topicName, part: 1, difficulty: diffUpper, count: item.part1[dKey] });
        }
        if (item.part2[dKey] > 0) {
          unfulfilledRequests.push({ topic: item.topicName, part: 2, difficulty: diffUpper, count: item.part2[dKey] });
        }
        if (item.part3[dKey] > 0) {
          unfulfilledRequests.push({ topic: item.topicName, part: 3, difficulty: diffUpper, count: item.part3[dKey] });
        }
      }
    }
  }

  // 2. Second pass: Generate unfulfilled questions from AI / Internet if applicable
  if (unfulfilledRequests.length > 0 && (matrix.sourceOption === "internet" || matrix.sourceOption === "hybrid")) {
    const aiConfig = await getAiConfiguration();
    if (aiConfig.geminiApiKey) {
      try {
        const aiQuestions = await generateQuestionsWithGemini(unfulfilledRequests, matrix.gradeNumber, aiConfig.geminiApiKey);
        aiQuestions.forEach((q) => {
          if (q.type === "multiple_choice") selectedPart1.push(q);
          else if (q.type === "true_false") selectedPart2.push(q);
          else if (q.type === "short_answer") selectedPart3.push(q);
          aiCount++;
        });
      } catch (err: any) {
        warnings.push("Không thể kết nối Internet/AI để sinh thêm câu hỏi: " + (err?.message || "Lỗi API"));
      }
    } else {
      warnings.push("Hệ thống chưa cấu hình Gemini API Key nên các câu hỏi chưa có trong kho dự án không thể tạo thêm từ Internet/AI.");
    }
  }

  // Re-index all questions sequentially
  const finalQuestions: QuestionData[] = [];
  let currentIndex = 1;

  // Part 1: Multiple choice
  selectedPart1.forEach((q) => {
    finalQuestions.push({
      ...q,
      id: `matrix-q-${currentIndex}`,
      index: currentIndex,
    });
    currentIndex++;
  });

  // Part 2: True / False
  selectedPart2.forEach((q) => {
    finalQuestions.push({
      ...q,
      id: `matrix-q-${currentIndex}`,
      index: currentIndex,
    });
    currentIndex++;
  });

  // Part 3: Short Answer
  selectedPart3.forEach((q) => {
    finalQuestions.push({
      ...q,
      id: `matrix-q-${currentIndex}`,
      index: currentIndex,
    });
    currentIndex++;
  });

  return {
    title: matrix.title || `Đề Kiểm Tra Ma Trận - Toán ${matrix.gradeNumber}`,
    gradeNumber: matrix.gradeNumber,
    targetClass: matrix.targetClass || "Tất cả các lớp",
    durationMinutes: matrix.durationMinutes || 45,
    totalQuestions: finalQuestions.length,
    questions: finalQuestions,
    projectCount,
    aiCount,
    warnings,
  };
}

/**
 * Generate specific missing questions using Gemini AI
 */
async function generateQuestionsWithGemini(
  requests: { topic: string; part: 1 | 2 | 3; difficulty: string; count: number }[],
  gradeNumber: number,
  apiKey: string
): Promise<QuestionData[]> {
  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(apiKey);

  const requestSummary = requests
    .map(
      (r, i) =>
        `${i + 1}. Chủ đề: "${r.topic}" - Dạng: Phần ${r.part} (${r.part === 1 ? "Trắc nghiệm 4 lựa chọn A,B,C,D" : r.part === 2 ? "Đúng/Sai 4 ý a,b,c,d" : "Trả lời ngắn/Điền số"}) - Mức độ: ${r.difficulty} - Số lượng: ${r.count} câu`
    )
    .join("\n");

  const prompt = `Bạn là chuyên gia ra đề thi môn Toán lớp ${gradeNumber} theo chương trình mới của Bộ Giáo dục & Đào tạo Việt Nam.
Hãy biên soạn các câu hỏi toán học theo đúng ma trận yêu cầu dưới đây:

${requestSummary}

QUY TẮC BẮT BUỘC:
1. Mọi công thức Toán học phải được đặt trong dấu $...$ (ví dụ: $x^2 + 2x - 3 = 0$, $\\frac{a}{\\sin A} = 2R$).
2. Vectơ nhiều chữ cái phải dùng \\overrightarrow{AB}, \\overrightarrow{MN}, \\overrightarrow{CD}.
3. Mỗi câu hỏi phải trình bày đúng cấu trúc:
   - Dạng trắc nghiệm 4 lựa chọn:
     Câu X: [Đề bài]
     A. [Ý A]
     B. [Ý B]
     C. [Ý C]
     D. [Ý D]
     Đáp án: [A hoặc B hoặc C hoặc D]
     Lời giải: [Hướng dẫn giải ngắn gọn]
   - Dạng Đúng/Sai:
     Câu Y: [Đề bài]
     a) [Ý a] (Đúng hoặc Sai)
     b) [Ý b] (Đúng hoặc Sai)
     c) [Ý c] (Đúng hoặc Sai)
     d) [Ý d] (Đúng hoặc Sai)
     Lời giải: [Giải thích]
   - Dạng Trả lời ngắn:
     Câu Z: [Đề bài]
     Đáp số: [Giá trị]
     Lời giải: [Giải thích]
4. Không thêm lời chào, xuất trực tiếp danh sách câu hỏi.`;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: { temperature: 0.3 },
  });

  const res = await model.generateContent(prompt);
  const text = res.response.text();

  if (!text) return [];

  const parsed = parseExamText(text, gradeNumber);
  return parsed.questions;
}

/**
 * Intelligent Matrix Text / File Content Parser
 * Detects topics, Part I, II, III and cognitive levels from raw matrix text
 */
export function parseMatrixFromRawText(rawText: string, defaultGradeNumber = 10): ExamMatrix {
  const lines = rawText.replace(/\r\n/g, "\n").split("\n");
  let title = `Ma Trận Đề Kiểm Tra Toán ${defaultGradeNumber}`;
  let durationMinutes = 45;

  const topics: MatrixTopicItem[] = [];

  // Look for title and duration
  for (const line of lines.slice(0, 5)) {
    if (/ma\s*trận|đặc\s*tả/i.test(line)) {
      title = line.trim();
    }
    const timeMatch = line.match(/thời gian[:\s]+(\d+)/i);
    if (timeMatch) {
      durationMinutes = parseInt(timeMatch[1], 10);
    }
  }

  // 1. Try parsing CSV formatted matrix (e.g. from downloaded template)
  const csvLines = lines.filter((l) => l.includes(",") && !l.toLowerCase().startsWith("stt"));
  for (const line of csvLines) {
    const parts = line.split(",").map((s) => s.trim().replace(/^"|"$/g, ""));
    if (parts.length >= 5 && parts[1]) {
      const topicName = parts[1];
      if (topicName && !/tổng|cộng|stt/i.test(topicName)) {
        // If row has numbers for Part I, II, III
        // Expected columns: [STT, Topic, Comp, P1_NB, P1_TH, P1_VD, P1_VDC, P2_NB, P2_TH, P2_VD, P2_VDC, P3_NB, P3_TH, P3_VD, P3_VDC]
        const p1_nb = parseInt(parts[3], 10) || 0;
        const p1_th = parseInt(parts[4], 10) || 0;
        const p1_vd = parseInt(parts[5], 10) || 0;
        const p1_vdc = parseInt(parts[6], 10) || 0;

        const p2_nb = parseInt(parts[7], 10) || 0;
        const p2_th = parseInt(parts[8], 10) || 0;
        const p2_vd = parseInt(parts[9], 10) || 0;
        const p2_vdc = parseInt(parts[10], 10) || 0;

        const p3_nb = parseInt(parts[11], 10) || 0;
        const p3_th = parseInt(parts[12], 10) || 0;
        const p3_vd = parseInt(parts[13], 10) || 0;
        const p3_vdc = parseInt(parts[14], 10) || 0;

        topics.push({
          id: `topic-${topics.length + 1}`,
          topicName,
          competencyRequired: parts[2] || undefined,
          part1: { nb: p1_nb, th: p1_th, vd: p1_vd, vdc: p1_vdc },
          part2: { nb: p2_nb, th: p2_th, vd: p2_vd, vdc: p2_vdc },
          part3: { nb: p3_nb, th: p3_th, vd: p3_vd, vdc: p3_vdc },
        });
      }
    }
  }

  // 2. If no CSV topics parsed, use regex to detect chapter / topic lines from text or Word extraction
  if (topics.length === 0) {
    const topicRegex = /(?:^|\n)\s*(?:(?:\d+[\.:\)]|[IVXLCDM]+[\.:\)]|Chương|Chủ đề|Bài)\s+)([^\n\r]+)/gi;
    let match: RegExpExecArray | null;

    while ((match = topicRegex.exec(rawText)) !== null) {
      const topicName = match[1].trim();
      if (topicName.length > 3 && !/tổng|cộng|thời gian|điểm|hướng dẫn|công văn|phụ lục/i.test(topicName)) {
        topics.push({
          id: `topic-${topics.length + 1}`,
          topicName,
          part1: { nb: 3, th: 2, vd: 0, vdc: 0 },
          part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
          part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
        });
      }
    }
  }

  // 3. Fallback to 2 standard CV 7991 default topics if none found
  if (topics.length === 0) {
    topics.push({
      id: "topic-1",
      topicName: defaultGradeNumber === 10 ? "Chương I: Mệnh đề và tập hợp" : "Chương I: Số tự nhiên",
      part1: { nb: 4, th: 2, vd: 0, vdc: 0 },
      part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
      part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
    });
    topics.push({
      id: "topic-2",
      topicName: defaultGradeNumber === 10 ? "Chương IV: Vectơ và các phép toán" : "Chương II: Tính chất chia hết",
      part1: { nb: 4, th: 2, vd: 0, vdc: 0 },
      part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
      part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
    });
  }

  return {
    title,
    grade: `lop-${defaultGradeNumber}`,
    gradeNumber: defaultGradeNumber,
    targetClass: "Tất cả các lớp",
    durationMinutes,
    topics,
    sourceOption: "hybrid",
  };
}
