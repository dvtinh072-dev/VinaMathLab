// Client-side helper for managing student progress with localStorage fallback and server sync
export interface LessonProgressItem {
  lessonId: string;
  gradeKey: string;
  lessonTitle: string;
  videoWatchedSeconds: number;
  isCompleted: boolean;
  score: number;
  totalQuestions: number;
  lastStudiedAt: string;
}

export interface WrongQuestionItem {
  id: string;
  questionId: string;
  badge: string;
  questionText: string;
  lessonId: string;
  lessonTitle: string;
  gradeKey: string;
  wrongCount: number;
  lastSelectedOption: string;
  correctOption: string;
  explanation: string;
  isResolved: boolean;
  lastWrongAt: string;
}

export interface StudentProgressRecord {
  userId: string;
  studentCode?: string;
  username?: string;
  fullName?: string;
  schoolName?: string;
  schoolClass?: string;
  exp?: number;
  coins?: number;
  streak?: number;
  totalVideoMinutes: number;
  totalCompletedLessons: number;
  lessons: Record<string, LessonProgressItem>;
  wrongQuestions: Record<string, WrongQuestionItem>;
  updatedAt: string;
}

const LOCAL_PROGRESS_KEY = "vinamath_student_progress_store";

export function getLocalProgressStore(): Record<string, StudentProgressRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(LOCAL_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("Lỗi đọc local progress store:", e);
    return {};
  }
}

export function saveLocalProgressStore(store: Record<string, StudentProgressRecord>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(store));
  } catch (e) {
    console.warn("Lỗi ghi local progress store:", e);
  }
}

export function getLocalStudentProgress(
  identifier: string | null | undefined
): StudentProgressRecord | null {
  if (!identifier) return null;
  const store = getLocalProgressStore();
  const clean = identifier.trim().toLowerCase();

  // Tìm kiếm theo mọi khóa: ID, studentCode, username
  if (store[identifier]) return store[identifier];
  if (store[clean]) return store[clean];

  for (const record of Object.values(store)) {
    if (
      record.userId?.toLowerCase() === clean ||
      record.studentCode?.toLowerCase() === clean ||
      record.username?.toLowerCase() === clean
    ) {
      return record;
    }
  }

  return null;
}

export function saveLocalStudentProgressUpdate(params: {
  userId?: string;
  studentCode?: string;
  username?: string;
  fullName?: string;
  schoolName?: string;
  schoolClass?: string;
  exp?: number;
  totalExp?: number;
  earnedExp?: number;
  coins?: number;
  earnedCoins?: number;
  streak?: number;
  lessonId?: string;
  gradeKey?: string;
  lessonTitle?: string;
  addVideoSeconds?: number;
  isCompleted?: boolean;
  score?: number;
  totalQuestions?: number;
  wrongQuestion?: {
    questionId: string;
    badge?: string;
    questionText: string;
    selectedOption?: string;
    correctOption?: string;
    explanation?: string;
    lessonId?: string;
    lessonTitle?: string;
    gradeKey?: string;
  };
  resolveQuestionId?: string;
}): StudentProgressRecord | null {
  if (typeof window === "undefined") return null;

  const key = (params.userId || params.studentCode || params.username || "").trim().toLowerCase();
  if (!key) return null;

  const store = getLocalProgressStore();
  let existing = getLocalStudentProgress(key);

  const canonicalKey = params.userId || existing?.userId || key;

  if (!existing) {
    existing = {
      userId: canonicalKey,
      studentCode: params.studentCode,
      username: params.username,
      fullName: params.fullName,
      schoolName: params.schoolName || "THCS VinaMath",
      schoolClass: params.schoolClass || "Lớp 6A",
      exp: params.totalExp !== undefined ? params.totalExp : (params.exp || 0),
      coins: params.coins !== undefined ? params.coins : 50,
      streak: params.streak !== undefined ? params.streak : 1,
      totalVideoMinutes: 0,
      totalCompletedLessons: 0,
      lessons: {},
      wrongQuestions: {},
      updatedAt: new Date().toISOString(),
    };
  }

  // Cập nhật EXP, Coins, Streak
  if (params.totalExp !== undefined) {
    existing.exp = Math.max(existing.exp || 0, params.totalExp);
  } else if (params.exp !== undefined) {
    existing.exp = Math.max(existing.exp || 0, params.exp);
  } else if (params.earnedExp !== undefined && params.earnedExp > 0) {
    existing.exp = (existing.exp || 0) + params.earnedExp;
  }

  if (params.coins !== undefined) {
    existing.coins = Math.max(existing.coins || 0, params.coins);
  } else if (params.earnedCoins !== undefined && params.earnedCoins > 0) {
    existing.coins = (existing.coins || 0) + params.earnedCoins;
  }

  if (params.streak !== undefined) {
    existing.streak = Math.max(existing.streak || 1, params.streak);
  }

  // 1. Cập nhật bài học & video
  if (params.lessonId) {
    const lId = params.lessonId;
    if (!existing.lessons[lId]) {
      existing.lessons[lId] = {
        lessonId: lId,
        gradeKey: params.gradeKey || "lop-6",
        lessonTitle: params.lessonTitle || lId,
        videoWatchedSeconds: 0,
        isCompleted: false,
        score: 0,
        totalQuestions: params.totalQuestions || 10,
        lastStudiedAt: new Date().toISOString(),
      };
    }

    const l = existing.lessons[lId];
    if (params.addVideoSeconds && typeof params.addVideoSeconds === "number") {
      l.videoWatchedSeconds = (l.videoWatchedSeconds || 0) + Math.max(0, params.addVideoSeconds);
    }
    if (params.isCompleted !== undefined) {
      l.isCompleted = Boolean(params.isCompleted);
    }
    if (params.score !== undefined) {
      l.score = Math.max(l.score || 0, params.score);
    }
    if (params.totalQuestions !== undefined) {
      l.totalQuestions = params.totalQuestions;
    }
    l.lastStudiedAt = new Date().toISOString();
  }

  // 2. Cập nhật câu sai
  if (params.wrongQuestion && params.wrongQuestion.questionId) {
    const qId = params.wrongQuestion.questionId;
    if (!existing.wrongQuestions[qId]) {
      existing.wrongQuestions[qId] = {
        id: `wq-${canonicalKey}-${qId}`,
        questionId: qId,
        badge: params.wrongQuestion.badge || "",
        questionText: params.wrongQuestion.questionText || "",
        lessonId: params.lessonId || params.wrongQuestion.lessonId || "",
        lessonTitle: params.lessonTitle || params.wrongQuestion.lessonTitle || "",
        gradeKey: params.gradeKey || params.wrongQuestion.gradeKey || "lop-6",
        wrongCount: 1,
        lastSelectedOption: params.wrongQuestion.selectedOption || "",
        correctOption: params.wrongQuestion.correctOption || "",
        explanation: params.wrongQuestion.explanation || "",
        isResolved: false,
        lastWrongAt: new Date().toISOString(),
      };
    } else {
      const w = existing.wrongQuestions[qId];
      w.wrongCount = (w.wrongCount || 0) + 1;
      w.isResolved = false;
      if (params.wrongQuestion.selectedOption) w.lastSelectedOption = params.wrongQuestion.selectedOption;
      if (params.wrongQuestion.correctOption) w.correctOption = params.wrongQuestion.correctOption;
      w.lastWrongAt = new Date().toISOString();
    }
  }

  // 3. Giải quyết câu sai khi làm đúng lại
  if (params.resolveQuestionId && existing.wrongQuestions[params.resolveQuestionId]) {
    existing.wrongQuestions[params.resolveQuestionId].isResolved = true;
  }

  // 4. Tính toán tổng thời lượng video & bài học hoàn thành
  let totalSec = 0;
  let completedCount = 0;
  Object.values(existing.lessons).forEach((item) => {
    totalSec += item.videoWatchedSeconds || 0;
    if (item.isCompleted) completedCount++;
  });

  existing.totalVideoMinutes = Math.round(totalSec / 60);
  existing.totalCompletedLessons = completedCount;
  existing.updatedAt = new Date().toISOString();

  // Lưu lại vào store
  store[canonicalKey] = existing;
  if (params.studentCode) store[params.studentCode.toLowerCase()] = existing;
  if (params.username) store[params.username.toLowerCase()] = existing;

  saveLocalProgressStore(store);
  return existing;
}
