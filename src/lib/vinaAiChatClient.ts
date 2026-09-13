export interface ChatMessage {
  id: string;
  sender: "user" | "vina";
  text: string;
  sources?: {
    title: string;
    citation: string;
    url?: string;
  }[];
  isAnsweredFromKnowledge?: boolean;
  timestamp: string;
}

export interface AiChatLogItem {
  id: string;
  studentId?: string;
  studentName?: string;
  studentClass?: string;
  question: string;
  answer: string;
  sources: {
    title: string;
    citation: string;
    url?: string;
  }[];
  isAnsweredFromKnowledge: boolean;
  topic?: string;
  grade?: number;
  timestamp: string;
}

const LOCAL_CHAT_HISTORY_KEY = "vinamath_vina_chat_history";

export function getLocalChatHistory(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_CHAT_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Lỗi đọc local chat history:", e);
    return [];
  }
}

export function saveLocalChatHistory(history: ChatMessage[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_CHAT_HISTORY_KEY, JSON.stringify(history.slice(-30)));
  } catch (e) {
    console.warn("Lỗi lưu local chat history:", e);
  }
}

export async function askVinaAi(
  question: string,
  studentInfo?: {
    userId?: string;
    studentCode?: string;
    username?: string;
    fullName?: string;
    schoolClass?: string;
  }
): Promise<{
  success: boolean;
  reply?: string;
  sources?: { title: string; citation: string; url?: string }[];
  isAnsweredFromKnowledge?: boolean;
  error?: string;
}> {
  try {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, studentInfo }),
    });
    const data = await res.json();
    return data;
  } catch (err: any) {
    return {
      success: false,
      error: "Không thể kết nối với máy chủ lúc này. Vui lòng kiểm tra đường truyền mạng.",
    };
  }
}

export async function fetchAdminChatLogs(): Promise<AiChatLogItem[]> {
  try {
    const res = await fetch("/api/ai/chat");
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.logs)) {
      return data.logs;
    }
  } catch (e) {
    console.warn("Lỗi lấy lịch sử chat:", e);
  }
  return [];
}

export async function deleteAdminChatLog(id: string): Promise<boolean> {
  try {
    const res = await fetch("/api/ai/chat?id=" + encodeURIComponent(id), {
      method: "DELETE",
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch {
    return false;
  }
}