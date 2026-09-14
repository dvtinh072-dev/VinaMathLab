import fs from "fs";
import path from "path";
import {
  BankQuestion,
  QuestionBankCatalog,
  DrawExamConfig,
  QuestionType,
  CognitiveLevel,
} from "@/types/questionBank";
import { QuestionData } from "@/components/exam/ExamEngine";
import { MultipleChoiceQuestionData } from "@/components/exam/QuestionMultipleChoice";
import { TrueFalseQuestionData } from "@/components/exam/QuestionTrueFalse";
import { ShortAnswerQuestionData } from "@/components/exam/QuestionShortAnswer";

import { CustomExam } from "@/types/customExam";

const BANK_BASE_DIR = path.join(process.cwd(), "src/data/bank");

/**
 * Lấy mục lục thống kê của ngân hàng câu hỏi theo khối (chỉ đọc file catalog.json siêu nhẹ)
 */
export function getQuestionBankCatalog(gradeNumber: number = 10): QuestionBankCatalog | null {
  try {
    const catalogPath = path.join(BANK_BASE_DIR, `grade${gradeNumber}`, "catalog.json");
    if (!fs.existsSync(catalogPath)) return null;
    const raw = fs.readFileSync(catalogPath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Lỗi đọc catalog ngân hàng câu hỏi:", err);
    return null;
  }
}

/**
 * Lấy danh sách câu hỏi của một chương cụ thể
 */
export function getChapterQuestions(gradeNumber: number = 10, fileKey: string): BankQuestion[] {
  try {
    const filePath = path.join(BANK_BASE_DIR, `grade${gradeNumber}`, `${fileKey}.json`);
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Lỗi đọc câu hỏi chương ${fileKey}:`, err);
    return [];
  }
}

/**
 * Thuật toán xáo trộn mảng ngẫu nhiên (Fisher-Yates shuffle)
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Thuật toán RÚT ĐỀ THÔNG MINH từ Ngân hàng câu hỏi
 */
export function drawExamFromBank(config: DrawExamConfig): {
  exam: CustomExam;
  stats: {
    totalRequested: number;
    totalDrawn: number;
    byPart: { part1: number; part2: number; part3: number; part4: number };
    byLevel: Record<CognitiveLevel, number>;
  };
  warnings: string[];
} {
  const warnings: string[] = [];
  const catalog = getQuestionBankCatalog(config.gradeNumber);

  if (!catalog) {
    throw new Error(`Không tìm thấy ngân hàng đề của Khối ${config.gradeNumber}`);
  }

  // 1. Xác định các chương cần nạp
  let targetChapters = catalog.chapters;
  if (config.scopeMode === "selected_chapters" && config.selectedChapterIds.length > 0) {
    targetChapters = catalog.chapters.filter((c) =>
      config.selectedChapterIds.includes(c.chapterId)
    );
  }

  if (targetChapters.length === 0) {
    targetChapters = catalog.chapters;
    warnings.push("Không có chương hợp lệ được chọn, tự động dùng toàn bộ chương trình.");
  }

  // 2. Tải câu hỏi từ các file JSON của các chương được chọn
  let candidateQuestions: BankQuestion[] = [];
  targetChapters.forEach((ch) => {
    const questions = getChapterQuestions(config.gradeNumber, ch.fileKey);
    candidateQuestions = candidateQuestions.concat(questions);
  });

  // 3. Phân chia theo dạng câu hỏi
  const mcCandidates = shuffleArray(candidateQuestions.filter((q) => q.type === "multiple_choice"));
  const tfCandidates = shuffleArray(candidateQuestions.filter((q) => q.type === "true_false"));
  const saCandidates = shuffleArray(candidateQuestions.filter((q) => q.type === "short_answer"));
  const essayCandidates = shuffleArray(candidateQuestions.filter((q) => q.type === "essay"));

  // 4. Hàm rút câu hỏi theo tỉ lệ mức độ
  function drawByLevel(
    pool: BankQuestion[],
    requestedCount: number,
    levelDist: { NB: number; TH: number; VD: number; VDC: number }
  ): BankQuestion[] {
    if (requestedCount <= 0 || pool.length === 0) return [];
    if (pool.length <= requestedCount) return [...pool];

    const totalWeight =
      (levelDist.NB || 0) + (levelDist.TH || 0) + (levelDist.VD || 0) + (levelDist.VDC || 0) || 100;

    const targetNB = Math.round((requestedCount * (levelDist.NB || 0)) / totalWeight);
    const targetTH = Math.round((requestedCount * (levelDist.TH || 0)) / totalWeight);
    const targetVD = Math.round((requestedCount * (levelDist.VD || 0)) / totalWeight);
    const targetVDC = requestedCount - targetNB - targetTH - targetVD;

    const quotas: Record<CognitiveLevel, number> = {
      NB: Math.max(0, targetNB),
      TH: Math.max(0, targetTH),
      VD: Math.max(0, targetVD),
      VDC: Math.max(0, targetVDC),
    };

    const selected: BankQuestion[] = [];
    const usedIds = new Set<string>();

    // Rút theo quota của từng mức độ
    (["NB", "TH", "VD", "VDC"] as CognitiveLevel[]).forEach((lvl) => {
      const needed = quotas[lvl];
      const matchLevel = pool.filter((q) => q.level === lvl && !usedIds.has(q.id));
      const taken = matchLevel.slice(0, needed);
      taken.forEach((q) => {
        selected.push(q);
        usedIds.add(q.id);
      });
    });

    // Nếu thiếu, bù ngẫu nhiên từ phần còn lại của pool
    if (selected.length < requestedCount) {
      const remaining = pool.filter((q) => !usedIds.has(q.id));
      const neededMore = requestedCount - selected.length;
      remaining.slice(0, neededMore).forEach((q) => {
        selected.push(q);
        usedIds.add(q.id);
      });
    }

    return selected.slice(0, requestedCount);
  }

  // 5. Thực hiện rút cho từng phần
  const selectedMC = drawByLevel(mcCandidates, config.counts.multiple_choice || 0, config.levelDistribution);
  const selectedTF = drawByLevel(tfCandidates, config.counts.true_false || 0, config.levelDistribution);
  const selectedSA = drawByLevel(saCandidates, config.counts.short_answer || 0, config.levelDistribution);
  const selectedEssay = drawByLevel(essayCandidates, config.counts.essay || 0, config.levelDistribution);

  // 6. Chuyển đổi sang định dạng QuestionData của ExamEngine
  const examQuestions: QuestionData[] = [];
  let globalIdx = 1;

  // Phần I: Trắc nghiệm 4 lựa chọn (MC)
  selectedMC.forEach((q) => {
    const keys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
    const options = (q.options && q.options.length >= 2)
      ? q.options.map((opt, i) => ({
          key: (opt.key || keys[i] || "A") as "A" | "B" | "C" | "D",
          text: opt.text,
        }))
      : [
          { key: "A" as const, text: "Khẳng định đúng" },
          { key: "B" as const, text: "Khẳng định sai" },
          { key: "C" as const, text: "Không xác định" },
          { key: "D" as const, text: "Cả 3 đều đúng" },
        ];

    const correctKey = (q.correctKey || "A") as "A" | "B" | "C" | "D";

    const mcq: MultipleChoiceQuestionData = {
      id: q.id,
      type: "multiple_choice",
      index: globalIdx++,
      stem: q.stem,
      options,
      correctKey,
      explanation: q.explanation || "Học sinh áp dụng định nghĩa và tính chất cơ bản để suy ra đáp án đúng.",
      topic: q.chapterName,
      difficulty: q.level,
    };
    examQuestions.push(mcq);
  });

  // Phần II: Trắc nghiệm Đúng / Sai (TF)
  selectedTF.forEach((q) => {
    const defaultStatements = [
      { key: "a" as const, text: "Mệnh đề hoặc phát biểu thứ nhất", isCorrect: true },
      { key: "b" as const, text: "Mệnh đề hoặc phát biểu thứ hai", isCorrect: false },
      { key: "c" as const, text: "Mệnh đề hoặc phát biểu thứ ba", isCorrect: true },
      { key: "d" as const, text: "Mệnh đề hoặc phát biểu thứ tư", isCorrect: false },
    ];
    let subQuestions = defaultStatements;
    if (q.statements && q.statements.length > 0) {
      subQuestions = q.statements.slice(0, 4).map((st, idx) => ({
        key: ["a", "b", "c", "d"][idx] as "a" | "b" | "c" | "d",
        text: st.text,
        isCorrect: Boolean(st.isCorrect),
      }));
    }
    const tfq: TrueFalseQuestionData = {
      id: q.id,
      type: "true_false",
      index: globalIdx++,
      stem: q.stem,
      subQuestions,
      explanation: q.explanation || "Học sinh kiểm tra từng mệnh đề theo định nghĩa và công thức.",
      topic: q.chapterName,
      difficulty: q.level,
    };
    examQuestions.push(tfq);
  });

  // Phần III: Trả lời ngắn (SA)
  selectedSA.forEach((q) => {
    const saq: ShortAnswerQuestionData = {
      id: q.id,
      type: "short_answer",
      index: globalIdx++,
      stem: q.stem,
      correctAnswer: q.correctAnswer || "0",
      explanation: q.explanation || "Học sinh giải chi tiết và điền đáp số cuối cùng.",
      topic: q.chapterName,
      difficulty: q.level,
    };
    examQuestions.push(saq);
  });

  // Thống kê kết quả
  const byLevelCount: Record<CognitiveLevel, number> = { NB: 0, TH: 0, VD: 0, VDC: 0 };
  [...selectedMC, ...selectedTF, ...selectedSA, ...selectedEssay].forEach((q) => {
    if (byLevelCount[q.level] !== undefined) byLevelCount[q.level]++;
  });

  const examId = `exam-bank-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

  return {
    exam: {
      id: examId,
      title: config.title || `Đề Khảo Sát Toán ${config.gradeNumber} - Rút Từ Ngân Hàng`,
      grade: `lop-${config.gradeNumber}`,
      gradeNumber: config.gradeNumber,
      targetClass: config.targetClass || `Lớp ${config.gradeNumber}`,
      folderId: "folder-all",
      folderName: "Tất cả đề thi",
      durationMinutes: config.durationMinutes || 45,
      totalQuestions: examQuestions.length,
      questions: examQuestions,
      createdAt: new Date().toISOString(),
      allowReviewAnswers: true,
      antiCheatEnabled: true,
    },
    stats: {
      totalRequested:
        (config.counts.multiple_choice || 0) +
        (config.counts.true_false || 0) +
        (config.counts.short_answer || 0) +
        (config.counts.essay || 0),
      totalDrawn: examQuestions.length,
      byPart: {
        part1: selectedMC.length,
        part2: selectedTF.length,
        part3: selectedSA.length,
        part4: selectedEssay.length,
      },
      byLevel: byLevelCount,
    },
    warnings,
  };
}
