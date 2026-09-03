import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const sgkDataPath = path.join(process.cwd(), "src/data/grade6LessonsData.ts");
const aiDataPath = path.join(process.cwd(), "src/data/grade6AiPracticeData.ts");

export async function POST(req: Request) {
  try {
    const { lessonId, quizMode, questions, lessonTitle, bookChapter } = await req.json();

    if (!lessonId || !questions || !Array.isArray(questions)) {
      return NextResponse.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
    }

    if (quizMode === "ai") {
      // Cập nhật bộ đề Luyện tập thêm trong grade6AiPracticeData.ts
      if (fs.existsSync(aiDataPath)) {
        const fileContent = fs.readFileSync(aiDataPath, "utf-8");
        const match = fileContent.match(/export const GRADE_6_AI_PRACTICE_DATA:[^=]+=\s*(\{[\s\S]+\});/);
        if (match) {
          const aiData = JSON.parse(match[1]);
          aiData[lessonId] = questions;

          const updatedContent = `import { QuizQuestion } from "@/data/allGradesLessonsData";

/**
 * BỘ ĐỀ LUYỆN TẬP THÊM (AI PRACTICE) 1-1 TƯƠNG ỨNG VỚI TỪNG BÀI TẬP SGK TOÁN 6
 * Dạng tương tự, khác số liệu, khác ngữ cảnh thực tế, chuẩn xác 100%
 */
export const GRADE_6_AI_PRACTICE_DATA: { [lessonId: string]: QuizQuestion[] } = ${JSON.stringify(aiData, null, 2)};
`;
          fs.writeFileSync(aiDataPath, updatedContent, "utf-8");
        }
      }
    } else {
      // Cập nhật bài tập SGK trong grade6LessonsData.ts
      if (fs.existsSync(sgkDataPath)) {
        const fileContent = fs.readFileSync(sgkDataPath, "utf-8");
        const match = fileContent.match(/export const GRADE_6_DETAILED_LESSONS:[^=]+=\s*(\{[\s\S]+\});\n\n\/\*\*/);
        if (match) {
          const sgkData = JSON.parse(match[1]);
          if (!sgkData[lessonId]) {
            sgkData[lessonId] = {
              id: lessonId,
              lessonNumber: 1,
              title: lessonTitle || "Bài học mới",
              bookChapter: bookChapter || "Chương I",
              scenarioTitle: `Tình huống: ${lessonTitle || "Bài học"}`,
              scenarioFrames: [],
              theorySections: [],
              tips: [],
              traps: [],
              quizQuestions: [],
            };
          }
          sgkData[lessonId].quizQuestions = questions;

          const updatedContent = `import { DetailedLessonData } from "@/data/allGradesLessonsData";
import { LessonItem, GradeData } from "@/data/curriculumData";

/**
 * HỆ THỐNG GIÁO ÁN CHI TIẾT & ĐẤU TRƯỜNG BÀI TẬP SGK TOÁN 6
 * Đầy đủ 43 Bài Học - Bám sát 100% Sách Giáo Khoa "Kết Nối Tri Thức Với Cuộc Sống" (Tập 1 & Tập 2)
 */
export const GRADE_6_DETAILED_LESSONS: { [key: string]: DetailedLessonData } = ${JSON.stringify(sgkData, null, 2)};

/**
 * Hàm lấy chi tiết bài học Lớp 6 chuẩn SGK
 */
export function getGrade6LessonDetail(lessonItem: LessonItem, gradeData: GradeData): DetailedLessonData {
  if (GRADE_6_DETAILED_LESSONS[lessonItem.id]) {
    return GRADE_6_DETAILED_LESSONS[lessonItem.id];
  }

  const parentChapter = gradeData.chapters.find((c) => c.lessons.some((l) => l.id === lessonItem.id)) || gradeData.chapters[0];
  const formulas = lessonItem.keyFormulas && lessonItem.keyFormulas.length > 0 ? lessonItem.keyFormulas : ["A = B"];

  return {
    id: lessonItem.id,
    lessonNumber: lessonItem.lessonNumber,
    title: lessonItem.title,
    bookChapter: parentChapter?.title || "SGK Toán 6 - Kết Nối Tri Thức",
    scenarioTitle: \`Tình Huống: \${lessonItem.title}\`,
    scenarioFrames: [],
    theorySections: [],
    tips: ["Nắm chắc định lý và quy tắc thực hiện phép toán trong SGK."],
    traps: ["Luôn kiểm tra kỹ điều kiện của bài toán."],
    interactiveType: "default",
    quizQuestions: [
      {
        id: \`sgk-\${lessonItem.lessonNumber}.1\`,
        badge: \`Bài \${lessonItem.lessonNumber}.1 SGK Toán 6\`,
        question: \`Theo bài học "\${lessonItem.title}", khẳng định nào sau đây là CHUẨN XÁC nhất?\`,
        options: [
          \`Định lý cốt lõi: \${formulas[0]}\`,
          "Chỉ áp dụng với các số tự nhiên chẵn",
          "Không có tính chất giao hoán và phân phối",
          "Bỏ qua điều kiện xác định",
        ],
        correctIndex: 0,
        explanation: \`Kiến thức cốt lõi SGK: Công thức và quy tắc chuẩn của bài học là \${formulas[0]}.\`,
      },
    ],
  };
}
`;
          fs.writeFileSync(sgkDataPath, updatedContent, "utf-8");
        }
      }
    }

    return NextResponse.json({ success: true, message: "Đã lưu thay đổi bài học thành công!" });
  } catch (error) {
    console.error("Error saving lesson data:", error);
    return NextResponse.json({ error: "Lỗi lưu dữ liệu bài học." }, { status: 500 });
  }
}
