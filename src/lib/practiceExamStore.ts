import { PracticeExamResult, PracticeExamSummary } from "@/types/practiceExam";

const PRACTICE_EXAM_STORE_KEY = "vinamath_practice_exam_results";

/**
 * Lấy toàn bộ danh sách kết quả thi thử từ localStorage
 */
export function getAllPracticeResults(userId?: string): PracticeExamResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PRACTICE_EXAM_STORE_KEY);
    if (!raw) return [];
    const list: PracticeExamResult[] = JSON.parse(raw);
    if (!Array.isArray(list)) return [];

    if (userId) {
      const cleanUser = userId.trim().toLowerCase();
      return list.filter(
        (item) => !item.userId || item.userId.trim().toLowerCase() === cleanUser || item.studentName?.trim().toLowerCase() === cleanUser
      );
    }
    return list;
  } catch (e) {
    console.warn("Lỗi đọc kết quả thi thử từ localStorage:", e);
    return [];
  }
}

/**
 * Lấy danh sách kết quả thi thử của 1 đề thi cụ thể
 */
export function getPracticeResultsByExamId(
  examId: string,
  userId?: string
): PracticeExamResult[] {
  const all = getAllPracticeResults(userId);
  return all.filter((item) => item.examId === examId);
}

/**
 * Lấy kết quả thi thử mới nhất của 1 đề thi
 */
export function getLatestPracticeResult(
  examId: string,
  userId?: string
): PracticeExamResult | null {
  const results = getPracticeResultsByExamId(examId, userId);
  return results.length > 0 ? results[0] : null;
}

/**
 * Lấy điểm số cao nhất của 1 đề thi
 */
export function getBestPracticeScore(
  examId: string,
  userId?: string
): number | null {
  const results = getPracticeResultsByExamId(examId, userId);
  if (results.length === 0) return null;
  return Math.max(...results.map((r) => r.score));
}

/**
 * Lưu kết quả thi thử vào localStorage và đồng bộ máy chủ
 */
export function saveLocalPracticeResult(result: PracticeExamResult): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getAllPracticeResults();
    // Đưa kết quả mới nhất lên đầu danh sách
    const updated = [result, ...existing.filter((item) => item.id !== result.id)].slice(0, 200);
    localStorage.setItem(PRACTICE_EXAM_STORE_KEY, JSON.stringify(updated));

    // Bắn sự kiện CustomEvent để các component trên màn hình cập nhật tức thì
    window.dispatchEvent(
      new CustomEvent("vinamath_practice_exam_saved", { detail: result })
    );

    // Đồng bộ lên máy chủ (background async)
    fetch("/api/student/practice-exams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    }).catch((err) => {
      console.warn("Đồng bộ kết quả thi thử lên server thất bại (đã lưu offline):", err);
    });
  } catch (e) {
    console.warn("Lỗi lưu kết quả thi thử vào localStorage:", e);
  }
}

/**
 * Tải và đồng bộ kết quả thi thử từ máy chủ về thiết bị hiện tại (hỗ trợ đa thiết bị)
 */
export async function fetchAndSyncPracticeResults(userId: string): Promise<PracticeExamResult[]> {
  if (!userId) return [];
  const localList = getAllPracticeResults(userId);

  try {
    const res = await fetch(`/api/student/practice-exams?userId=${encodeURIComponent(userId)}`);
    const data = await res.json();
    if (data.success && Array.isArray(data.results)) {
      const serverList: PracticeExamResult[] = data.results;

      // Hợp nhất dữ liệu giữa Server và Local
      const mergedMap = new Map<string, PracticeExamResult>();
      serverList.forEach((item) => mergedMap.set(item.id, item));

      // Những bài nào chỉ có ở local thì backup lên server
      localList.forEach((item) => {
        if (!mergedMap.has(item.id)) {
          mergedMap.set(item.id, item);
          fetch("/api/student/practice-exams", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          }).catch(() => {});
        }
      });

      const mergedList = Array.from(mergedMap.values()).sort(
        (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      );

      // Lưu lại vào localStorage của thiết bị hiện tại
      if (typeof window !== "undefined") {
        const fullLocal = getAllPracticeResults();
        const otherUsersData = fullLocal.filter(
          (x) => x.userId && x.userId.toLowerCase() !== userId.toLowerCase()
        );
        const combined = [...mergedList, ...otherUsersData].slice(0, 300);
        localStorage.setItem(PRACTICE_EXAM_STORE_KEY, JSON.stringify(combined));
        window.dispatchEvent(new CustomEvent("vinamath_practice_exam_saved"));
      }

      return mergedList;
    }
  } catch (e) {
    console.warn("Lỗi tải kết quả thi từ server, dùng cache local:", e);
  }

  return localList;
}

/**
 * Lấy bảng tổng hợp kết quả thi thử theo từng đề thi (đếm số lần thi, điểm cao nhất, điểm gần nhất)
 */
export function getPracticeHistorySummary(
  userId?: string
): Record<string, PracticeExamSummary> {
  const all = getAllPracticeResults(userId);
  const summaryMap: Record<string, PracticeExamSummary> = {};

  for (const res of all) {
    if (!summaryMap[res.examId]) {
      summaryMap[res.examId] = {
        examId: res.examId,
        attemptsCount: 1,
        bestScore: res.score,
        latestScore: res.score,
        latestSubmittedAt: res.submittedAt,
      };
    } else {
      const cur = summaryMap[res.examId];
      cur.attemptsCount += 1;
      cur.bestScore = Math.max(cur.bestScore, res.score);
    }
  }

  return summaryMap;
}

/**
 * Xóa 1 lần thi cụ thể
 */
export function deletePracticeResult(resultId: string): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getAllPracticeResults();
    const filtered = existing.filter((r) => r.id !== resultId);
    localStorage.setItem(PRACTICE_EXAM_STORE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new CustomEvent("vinamath_practice_exam_saved"));

    // Đồng bộ xóa trên server
    fetch(`/api/student/practice-exams?id=${encodeURIComponent(resultId)}`, {
      method: "DELETE",
    }).catch(() => {});
  } catch (e) {
    console.warn("Lỗi xóa kết quả thi thử:", e);
  }
}
