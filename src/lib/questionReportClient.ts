export interface QuestionReportItem {
  id: string;
  lessonId: string;
  lessonTitle: string;
  gradeKey?: string;
  questionId: string | number;
  questionBadge?: string;
  sectionTab: "multiple_choice" | "true_false" | "short_answer";
  quizMode: "sgk" | "ai";
  questionText: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  explanation?: string;
  reportReason: string;
  description?: string;
  reporter?: {
    userId?: string;
    studentCode?: string;
    fullName?: string;
    schoolClass?: string;
    username?: string;
  };
  status: "pending" | "resolved" | "dismissed";
  adminNote?: string;
  createdAt: string;
  updatedAt: string;
}

const LOCAL_REPORTS_KEY = "vinamath_question_reports_cache";

export function getLocalReports(): QuestionReportItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_REPORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Lỗi đọc local reports:", e);
    return [];
  }
}

export function saveLocalReports(reports: QuestionReportItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_REPORTS_KEY, JSON.stringify(reports));
  } catch (e) {
    console.warn("Lỗi lưu local reports:", e);
  }
}

export async function sendQuestionReport(payload: Omit<QuestionReportItem, "id" | "status" | "createdAt" | "updatedAt">): Promise<{ success: boolean; report?: QuestionReportItem; error?: string }> {
  const localItem: QuestionReportItem = {
    ...payload,
    id: "rep_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Cache locally
  const current = getLocalReports();
  current.unshift(localItem);
  saveLocalReports(current);

  // Send to server API
  try {
    const res = await fetch("/api/admin/question-reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok && data.success && data.report) {
      // Replace local item with server item
      const updated = getLocalReports().map((r) => (r.id === localItem.id ? data.report : r));
      saveLocalReports(updated);
      return { success: true, report: data.report };
    }
    return { success: true, report: localItem };
  } catch (err: any) {
    console.warn("Lỗi gửi báo cáo lên server, đã lưu offline vào local:", err);
    return { success: true, report: localItem };
  }
}

export async function fetchQuestionReports(): Promise<QuestionReportItem[]> {
  const local = getLocalReports();
  try {
    const res = await fetch("/api/admin/question-reports");
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.reports)) {
      const mergedMap = new Map<string, QuestionReportItem>();
      data.reports.forEach((r: QuestionReportItem) => mergedMap.set(r.id, r));
      local.forEach((r) => {
        if (!mergedMap.has(r.id)) {
          mergedMap.set(r.id, r);
        }
      });
      const mergedList = Array.from(mergedMap.values());
      mergedList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      saveLocalReports(mergedList);
      return mergedList;
    }
  } catch (err) {
    console.warn("Lỗi fetch reports từ server, dùng cache local:", err);
  }
  return local;
}

export async function updateQuestionReportStatus(id: string, status: "pending" | "resolved" | "dismissed", adminNote?: string): Promise<boolean> {
  // Update local
  const list = getLocalReports().map((r) => {
    if (r.id === id) {
      return {
        ...r,
        status,
        adminNote: adminNote !== undefined ? adminNote : r.adminNote,
        updatedAt: new Date().toISOString(),
      };
    }
    return r;
  });
  saveLocalReports(list);

  try {
    const res = await fetch("/api/admin/question-reports", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status, adminNote }),
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch {
    return true;
  }
}

export async function deleteQuestionReport(id: string): Promise<boolean> {
  const list = getLocalReports().filter((r) => r.id !== id);
  saveLocalReports(list);

  try {
    const res = await fetch(`/api/admin/question-reports?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch {
    return true;
  }
}
