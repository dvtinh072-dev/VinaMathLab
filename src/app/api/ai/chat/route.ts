import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { queryEducationalKnowledgeBase } from "@/data/educationalKnowledgeBase";
import { CURRICULUM_DATA } from "@/data/curriculumData";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { GRADE_10_DETAILED_LESSONS } from "@/data/grade10LessonsData";
import { GRADE_11_DETAILED_LESSONS } from "@/data/grade11LessonsData";
import { supabase } from "@/lib/supabaseClient";
import { generateHybridAiResponse } from "@/lib/geminiChatService";

export interface AiChatMessageLog {
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
  aiProvider?: "Gemini + SGK" | "ChatGPT + SGK" | "Học liệu SGK chuẩn" | "Học liệu SGK nội bộ";
  topic?: string;
  grade?: number;
  timestamp: string;
}

const chatLogsFilePath = path.join(process.cwd(), "src/data/aiChatLogsData.json");

function readLocalChatLogs(): AiChatMessageLog[] {
  try {
    if (!fs.existsSync(chatLogsFilePath)) return [];
    const raw = fs.readFileSync(chatLogsFilePath, "utf-8");
    return JSON.parse(raw) || [];
  } catch (err) {
    console.warn("Lỗi đọc aiChatLogsData.json:", err);
    return [];
  }
}

function writeLocalChatLogs(logs: AiChatMessageLog[]): void {
  try {
    fs.writeFileSync(chatLogsFilePath, JSON.stringify(logs, null, 2), "utf-8");
  } catch (err) {
    console.warn("Lỗi ghi aiChatLogsData.json (môi trường serverless):", err);
  }
}

/**
 * Đọc logs từ Supabase Cloud Database (Đảm bảo lưu vĩnh viễn trên Vercel/Cloud)
 */
async function readCloudChatLogs(): Promise<AiChatMessageLog[]> {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("school_class")
      .eq("id", "system_ai_chat_logs")
      .single();

    if (!error && data && data.school_class) {
      const parsed = JSON.parse(data.school_class);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Lỗi đọc logs từ Supabase Cloud:", err);
  }
  return [];
}

/**
 * Lưu logs vào Supabase Cloud Database
 */
async function writeCloudChatLogs(logs: AiChatMessageLog[]): Promise<boolean> {
  try {
    // Giữ tối đa 500 bản ghi mới nhất để bảo đảm dung lượng và tốc độ
    const limitedLogs = logs.slice(0, 500);
    const { error } = await supabase.from("users").upsert({
      id: "system_ai_chat_logs",
      username: "system_ai_chat_logs",
      role: "system",
      full_name: "AI Chat Logs Cloud Storage",
      password_hash: "system_log_hash",
      school_class: JSON.stringify(limitedLogs),
    });

    return !error;
  } catch (err) {
    console.error("Lỗi ghi logs lên Supabase Cloud:", err);
    return false;
  }
}

function searchCurriculumLessons(q: string) {
  const normQ = q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const allDetailed = [
    ...Object.values(GRADE_6_DETAILED_LESSONS),
    ...Object.values(GRADE_10_DETAILED_LESSONS),
    ...Object.values(GRADE_11_DETAILED_LESSONS),
  ];
  for (const lesson of allDetailed) {
    const normTitle = lesson.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (normQ.includes(normTitle) || normTitle.includes(normQ)) {
      return {
        lessonTitle: lesson.title,
        bookChapter: lesson.bookChapter,
        theory: lesson.theorySections?.[0],
      };
    }
  }
  for (const gradeKey of Object.keys(CURRICULUM_DATA)) {
    const g = CURRICULUM_DATA[gradeKey];
    for (const chapter of g.chapters) {
      for (const les of chapter.lessons) {
        const normLes = les.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (normQ.includes(normLes) || normLes.includes(normQ)) {
          return {
            lessonTitle: les.title,
            bookChapter: chapter.title,
            description: les.description,
            formulas: les.keyFormulas,
            gradeNumber: g.gradeNumber,
          };
        }
      }
    }
  }
  return null;
}

export async function GET() {
  try {
    const localLogs = readLocalChatLogs();
    const cloudLogs = await readCloudChatLogs();

    // Gộp dữ liệu từ Cloud và Local, ưu tiên Cloud
    const map = new Map<string, AiChatMessageLog>();
    localLogs.forEach((l) => map.set(l.id, l));
    cloudLogs.forEach((l) => map.set(l.id, l));

    const allLogs = Array.from(map.values());
    allLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json({ success: true, logs: allLogs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const cloudLogs = await readCloudChatLogs();
    const localLogs = readLocalChatLogs();

    let updatedLogs: AiChatMessageLog[] = [];
    if (id !== "all" && id) {
      const map = new Map<string, AiChatMessageLog>();
      localLogs.forEach((l) => map.set(l.id, l));
      cloudLogs.forEach((l) => map.set(l.id, l));
      map.delete(id);
      updatedLogs = Array.from(map.values());
    }

    // Cập nhật cả Cloud và Local
    await writeCloudChatLogs(updatedLogs);
    writeLocalChatLogs(updatedLogs);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, studentInfo } = body;

    if (!question || typeof question !== "string" || !question.trim()) {
      return NextResponse.json(
        { success: false, error: "Vui lòng nhập câu hỏi của em." },
        { status: 400 }
      );
    }

    const trimmedQ = question.trim();

    // 1. Kiểm tra trong CSDL Kiến thức Sư phạm chuẩn (Grounding)
    const kbResult = queryEducationalKnowledgeBase(trimmedQ);
    const curMatch = !kbResult.match ? searchCurriculumLessons(trimmedQ) : null;

    let identifiedTopic = kbResult.match?.topic || curMatch?.lessonTitle || "";
    let identifiedGrade = kbResult.match?.grade || curMatch?.gradeNumber || 0;

    // 2. Gọi Hybrid AI Response (kết hợp Gemini/ChatGPT và Học liệu SGK)
    const hybridResponse = await generateHybridAiResponse({
      question: trimmedQ,
      knowledgeMatch: kbResult.match,
      curriculumMatch: curMatch,
      studentInfo,
    });

    const answerText = hybridResponse.reply;
    const sourcesList = hybridResponse.sources;
    const isKnowledgeHit = hybridResponse.isGroundedWithKnowledge;
    const aiProviderUsed = hybridResponse.providerUsed;

    // 3. Tạo bản ghi log hỏi đáp chi tiết
    const logItem: AiChatMessageLog = {
      id: "chat_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      studentId: studentInfo?.userId || studentInfo?.studentCode || studentInfo?.username || "guest",
      studentName: studentInfo?.fullName || studentInfo?.username || "Học sinh (Khách)",
      studentClass: studentInfo?.schoolClass || "Tự do",
      question: trimmedQ,
      answer: answerText,
      sources: sourcesList,
      isAnsweredFromKnowledge: isKnowledgeHit,
      aiProvider: aiProviderUsed,
      topic: identifiedTopic || undefined,
      grade: identifiedGrade > 0 ? identifiedGrade : undefined,
      timestamp: new Date().toISOString(),
    };

    // 4. Lưu đồng bộ lên Supabase Cloud Database và file Local
    try {
      const currentCloudLogs = await readCloudChatLogs();
      currentCloudLogs.unshift(logItem);
      await writeCloudChatLogs(currentCloudLogs);
    } catch (cloudErr) {
      console.warn("Lỗi đồng bộ log lên Cloud:", cloudErr);
    }

    try {
      const localLogs = readLocalChatLogs();
      localLogs.unshift(logItem);
      writeLocalChatLogs(localLogs);
    } catch (localErr) {
      console.warn("Lỗi lưu log local:", localErr);
    }

    return NextResponse.json({
      success: true,
      reply: answerText,
      sources: sourcesList,
      isAnsweredFromKnowledge: isKnowledgeHit,
      aiProvider: aiProviderUsed,
      logId: logItem.id,
    });
  } catch (error: any) {
    console.error("Lỗi xử lý AI Chat:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
