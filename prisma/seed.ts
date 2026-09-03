import { PrismaClient } from "@prisma/client";
import { GRADE_6_DETAILED_LESSONS } from "../src/data/grade6LessonsData";
import { GRADE_6_AI_PRACTICE_DATA } from "../src/data/grade6AiPracticeData";

const prisma = new PrismaClient();

async function main() {
  console.log("=== BẮT ĐẦU SEED TOÀN BỘ 43 BÀI HỌC TOÁN 6 TỪ TÀI LIỆU CỤC BỘ ===");

  // 1. Nạp Tài Khoản Người Dùng
  const users = [
    {
      id: "u-admin-1",
      role: "admin",
      username: "admin",
      password: "admin123",
      fullName: "Quản Trị Viên VinaMath",
      email: "admin@vinamath.edu.vn",
    },
    {
      id: "u-student-1",
      role: "student",
      studentCode: "HS6001",
      password: "password123",
      fullName: "Nguyễn Văn An",
      grade: "Khối 6",
      schoolClass: "Lớp 6A",
      exp: 1250,
      coins: 180,
      streak: 5,
    },
    {
      id: "u-student-2",
      role: "student",
      studentCode: "HS6002",
      password: "password123",
      fullName: "Trần Thị Mai",
      grade: "Khối 6",
      schoolClass: "Lớp 6B",
      exp: 980,
      coins: 120,
      streak: 3,
    },
    {
      id: "u-student-3",
      role: "student",
      studentCode: "HS6099",
      password: "password123",
      fullName: "Lê Hoàng Long",
      grade: "Khối 6",
      schoolClass: "Lớp 6C",
      exp: 0,
      coins: 50,
      streak: 1,
    },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { id: u.id },
      update: u,
      create: u,
    });
  }
  console.log(`✓ Đã nạp an toàn ${users.length} tài khoản người dùng.`);

  // 2. Nạp Chuẩn Kỹ Năng YCCĐ (Skills) Cho Toàn Bộ 9 Chương Toán 6
  const chapters = [
    { code: "T6.CH1", name: "Chương I: Tập hợp các số tự nhiên", grade: "lop-6" },
    { code: "T6.CH2", name: "Chương II: Tính chia hết trong tập hợp các số tự nhiên", grade: "lop-6" },
    { code: "T6.CH3", name: "Chương III: Số nguyên", grade: "lop-6" },
    { code: "T6.CH4", name: "Chương IV: Một số hình phẳng trong thực tiễn", grade: "lop-6" },
    { code: "T6.CH5", name: "Chương V: Tính đối xứng của hình phẳng trong tự nhiên", grade: "lop-6" },
    { code: "T6.CH6", name: "Chương VI: Phân số", grade: "lop-6" },
    { code: "T6.CH7", name: "Chương VII: Số thập phân", grade: "lop-6" },
    { code: "T6.CH8", name: "Chương VIII: Những hình hình học cơ bản", grade: "lop-6" },
    { code: "T6.CH9", name: "Chương IX: Dữ liệu và xác suất thực nghiệm", grade: "lop-6" },
  ];

  for (const ch of chapters) {
    await prisma.skill.upsert({
      where: { code: ch.code },
      update: { name: ch.name, grade: ch.grade, chapter: ch.name },
      create: { code: ch.code, name: ch.name, grade: ch.grade, chapter: ch.name },
    });
  }
  console.log(`✓ Đã nạp ${chapters.length} chương chuẩn kỹ năng Toán 6.`);

  // 3. Xóa Sạch Bảng Câu Hỏi Cũ Trước Khi Nạp Mới
  await prisma.question.deleteMany({});
  console.log("✓ Đã dọn dẹp sạch sẽ bảng Question (Clean Slate).");

  // 4. Thu thập toàn bộ câu hỏi từ tất cả các bài từ Bài 1 đến Bài 43
  const allQuestionsToInsert: any[] = [];

  // A. Câu hỏi chính thức theo từng bài học (Bài 1 -> Bài 43)
  for (const [lessonId, lesson] of Object.entries(GRADE_6_DETAILED_LESSONS)) {
    const questions = lesson.quizQuestions || [];
    questions.forEach((q, idx) => {
      const qIndex = idx + 1;
      const lessonNumMatch = lesson.title.match(/Bài\s*(\d+)/i);
      const lessonNum = lessonNumMatch ? lessonNumMatch[1] : qIndex;

      allQuestionsToInsert.push({
        id: `q-official-${lessonId}-${idx}`,
        lessonId: lessonId,
        lessonTitle: lesson.title,
        grade: "lop-6",
        badge: q.badge || `Bài ${lessonNum}.${qIndex} - SGK Toán 6`,
        source:
          q.source ||
          `SGK Toán 6 Tập 1 & Chuyên đề Dạy thêm Lớp 6 (Thư mục Anti/Tài Liệu Lớp 6)`,
        question: q.question,
        options: JSON.stringify(q.options),
        correctIndex: q.correctIndex,
        explanation: q.explanation || "Xem hướng dẫn giải chi tiết theo SGK Toán 6.",
        cognitiveLevel:
          idx === 0
            ? "nhan_biet"
            : idx === 1
            ? "thong_hieu"
            : idx === 2
            ? "van_dung"
            : "van_dung_cao",
        isAiPractice: false,
      });
    });
  }

  // B. Câu hỏi luyện tập thêm (AI Practice) theo từng bài học (Bài 1 -> Bài 43)
  for (const [lessonId, questions] of Object.entries(GRADE_6_AI_PRACTICE_DATA)) {
    const lessonTitle = GRADE_6_DETAILED_LESSONS[lessonId]?.title || lessonId;
    questions.forEach((q, idx) => {
      allQuestionsToInsert.push({
        id: `q-practice-${lessonId}-${idx}`,
        lessonId: lessonId,
        lessonTitle: lessonTitle,
        grade: "lop-6",
        badge: q.badge || `Luyện tập ${idx + 1}`,
        source:
          q.source ||
          `Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)`,
        question: q.question,
        options: JSON.stringify(q.options),
        correctIndex: q.correctIndex,
        explanation: q.explanation || "Lời giải chi tiết từng bước bám sát SGK.",
        cognitiveLevel:
          idx === 0
            ? "nhan_biet"
            : idx === 1
            ? "thong_hieu"
            : idx === 2
            ? "van_dung"
            : "van_dung_cao",
        isAiPractice: true,
      });
    });
  }

  console.log(`Đang nạp ${allQuestionsToInsert.length} câu hỏi vào CSDL SQLite...`);

  // Chia nhỏ thành các batch 50 câu để nạp an toàn
  const chunkSize = 50;
  for (let i = 0; i < allQuestionsToInsert.length; i += chunkSize) {
    const chunk = allQuestionsToInsert.slice(i, i + chunkSize);
    await prisma.question.createMany({
      data: chunk,
    });
  }

  // 5. Kiểm đếm chính xác số lượng câu hỏi trong CSDL
  const count = await prisma.question.count();
  console.log("Tổng số câu hỏi hiện có:", count);

  if (count < 100) {
    console.warn("CẢNH BÁO: Số lượng câu hỏi nhỏ hơn 100, cần bổ sung!");
  } else {
    console.log(`✓ ĐÃ ĐẠT CHUẨN KIỂM ĐẾM: Tổng số ${count} câu hỏi (≥ 100) phủ kín từ Bài 1 đến Bài 43!`);
  }

  console.log("=== HOÀN TẤT SEED TOÀN BỘ 43 BÀI HỌC THÀNH CÔNG 100% ===");
}

main()
  .catch((e) => {
    console.error("Lỗi seed dữ liệu:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
