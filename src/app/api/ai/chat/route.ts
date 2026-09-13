import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { queryEducationalKnowledgeBase } from "@/data/educationalKnowledgeBase";
import { CURRICULUM_DATA } from "@/data/curriculumData";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { GRADE_10_DETAILED_LESSONS } from "@/data/grade10LessonsData";
import { GRADE_11_DETAILED_LESSONS } from "@/data/grade11LessonsData";
import { supabase } from "@/lib/supabaseClient";

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
    console.error("Lỗi đọc aiChatLogsData.json:", err);
    return [];
  }
}

function writeLocalChatLogs(logs: AiChatMessageLog[]): void {
  try {
    fs.writeFileSync(chatLogsFilePath, JSON.stringify(logs, null, 2), "utf-8");
  } catch (err) {
    console.error("Lỗi ghi aiChatLogsData.json:", err);
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
    let logs = readLocalChatLogs();
    try {
      const { data, error } = await supabase
        .from("ai_chat_logs")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && Array.isArray(data) && data.length > 0) {
        const suLogs: AiChatMessageLog[] = data.map((item: any) => ({
          id: item.id,
          studentId: item.student_id || item.studentId,
          studentName: item.student_name || item.studentName,
          studentClass: item.student_class || item.studentClass,
          question: item.question,
          answer: item.answer,
          sources: item.sources || [],
          isAnsweredFromKnowledge: item.is_answered_from_knowledge ?? item.isAnsweredFromKnowledge ?? true,
          topic: item.topic,
          grade: item.grade,
          timestamp: item.created_at || item.timestamp,
        }));
        const map = new Map<string, AiChatMessageLog>();
        logs.forEach((l) => map.set(l.id, l));
        suLogs.forEach((l) => map.set(l.id, l));
        logs = Array.from(map.values());
      }
    } catch {}
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    return NextResponse.json({ success: true, logs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    let logs = readLocalChatLogs();
    if (id === "all") {
      logs = [];
    } else if (id) {
      logs = logs.filter((l) => l.id !== id);
    }
    writeLocalChatLogs(logs);
    try {
      if (id === "all") {
        await supabase.from("ai_chat_logs").delete().neq("id", "");
      } else if (id) {
        await supabase.from("ai_chat_logs").delete().eq("id", id);
      }
    } catch {}
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
    const kbResult = queryEducationalKnowledgeBase(trimmedQ);
    let answerText = "";
    let sourcesList: { title: string; citation: string; url?: string }[] = [];
    let isKnowledgeHit = false;
    let identifiedTopic = "";
    let identifiedGrade = 0;

    if (kbResult.match) {
      const k = kbResult.match;
      isKnowledgeHit = true;
      identifiedTopic = k.topic;
      identifiedGrade = k.grade;
      const stepText = k.standardSteps && k.standardSteps.length > 0
        ? "\n#### 📌 Các bước áp dụng chuẩn:\n" + k.standardSteps.join("\n") + "\n"
        : "";
      answerText = "Chào em! Thầy/Cô AI **Vina** đã đối chiếu và tra cứu câu hỏi của em trong học liệu chính thống:\n\n" +
        "### 📖 " + k.topic + "\n" +
        k.officialContent + "\n" +
        stepText +
        "\n> ⚠️ **Cam kết tư liệu chính thống:** Toàn bộ câu trả lời trên được trích dẫn chính xác theo chuẩn chương trình GDPT 2018 của Bộ Giáo dục và Đào tạo, tuyệt đối không suy diễn ngoài tài liệu sư phạm.";
      sourcesList = [{
        title: k.sourceName,
        citation: k.sourceCitation,
        url: k.sourceUrl,
      }];
    } else {
      const curMatch = searchCurriculumLessons(trimmedQ);
      if (curMatch) {
        isKnowledgeHit = true;
        identifiedTopic = curMatch.lessonTitle;
        identifiedGrade = curMatch.gradeNumber || 0;
        const descText = curMatch.description ? "**Tóm tắt cốt lõi:** " + curMatch.description + "\n\n" : "";
        const theoryText = curMatch.theory ? "**Kiến thức trọng tâm:**\n- " + curMatch.theory.points.join("\n- ") + "\n" : "";
        const formulaText = curMatch.formulas && curMatch.formulas.length > 0 ? "\n**Công thức trọng tâm:**\n$$" + curMatch.formulas.join("$$ và $$") + "$$\n" : "";
        answerText = "Chào em! AI **Vina** xin gửi tới em kiến thức chuẩn của **" + curMatch.lessonTitle + "** (" + curMatch.bookChapter + "):\n\n" +
          descText + theoryText + formulaText +
          "\n> ⚠️ **Cam kết tư liệu:** Trích xuất nguyên bản từ hệ thống giáo án điện tử SGK Kết nối tri thức với cuộc sống của dự án VinaMath.";
        sourcesList = [{
          title: "SGK Kết Nối Tri Thức Với Cuộc Sống - " + curMatch.bookChapter,
          citation: "Chương trình Giáo dục phổ thông 2018 môn Toán, " + curMatch.lessonTitle,
          url: "https://hanhtrangso.nxbgd.vn",
        }];
      } else {
        isKnowledgeHit = false;
        answerText = "Chào em! Trợ lý AI **Vina** tuân thủ nguyên tắc sư phạm: **\"Tuyệt đối không tự suy diễn hoặc bịa đặt kiến thức khi chưa có tư liệu giáo dục chính thống đối chiếu\"**.\n\n" +
          "Hiện tại, hệ thống chưa tìm thấy mục bài học hoặc định lý đối chiếu chính xác cho câu hỏi:\n" +
          "*" + trimmedQ + "*\n\n" +
          "💡 **Gợi ý cho em:**\n" +
          "1. Em có thể nhập từ khóa ngắn gọn hơn (ví dụ: *\"định lý cosin\"*, *\"hằng đẳng thức\"*, *\"căn bậc hai\"*, *\"cấp số cộng\"*, *\"đạo hàm\"*...).\n" +
          "2. Hoặc ghi rõ lớp học (ví dụ: *\"Toán 6 dấu hiệu chia hết\"*, *\"Toán 10 công thức lượng giác\"*).\n" +
          "3. Thầy/Cô quản trị đã ghi nhận câu hỏi này để kịp thời bổ sung tài liệu chính thống giải đáp cho em!";
        sourcesList = [{
          title: "Bộ Giáo Dục và Đào Tạo - Chương trình GDPT 2018",
          citation: "Cổng thông tin điện tử Bộ GD&ĐT: moet.gov.vn & Thư viện sách giáo khoa số",
          url: "https://moet.gov.vn",
        }];
      }
    }

    const logItem: AiChatMessageLog = {
      id: "chat_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      studentId: studentInfo?.userId || studentInfo?.studentCode || studentInfo?.username,
      studentName: studentInfo?.fullName || studentInfo?.username || "Học sinh (Khách)",
      studentClass: studentInfo?.schoolClass,
      question: trimmedQ,
      answer: answerText,
      sources: sourcesList,
      isAnsweredFromKnowledge: isKnowledgeHit,
      topic: identifiedTopic || undefined,
      grade: identifiedGrade > 0 ? identifiedGrade : undefined,
      timestamp: new Date().toISOString(),
    };
    const logs = readLocalChatLogs();
    logs.unshift(logItem);
    writeLocalChatLogs(logs);
    try {
      await supabase.from("ai_chat_logs").insert([{
        id: logItem.id,
        student_id: logItem.studentId,
        student_name: logItem.studentName,
        student_class: logItem.studentClass,
        question: logItem.question,
        answer: logItem.answer,
        sources: logItem.sources,
        is_answered_from_knowledge: logItem.isAnsweredFromKnowledge,
        topic: logItem.topic,
        grade: logItem.grade,
        created_at: logItem.timestamp,
      }]);
    } catch {}
    return NextResponse.json({
      success: true,
      reply: answerText,
      sources: sourcesList,
      isAnsweredFromKnowledge: isKnowledgeHit,
      logId: logItem.id,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}