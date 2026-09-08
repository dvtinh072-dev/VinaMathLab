import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getDeletedIdentifiers } from "@/lib/deletedUsers";

const progressFilePath = path.join(process.cwd(), "src/data/studentProgressData.json");
const usersFilePath = path.join(process.cwd(), "src/data/usersData.json");

function getProgressStore(): Record<string, any> {
  try {
    if (!fs.existsSync(progressFilePath)) return {};
    const data = fs.readFileSync(progressFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading studentProgressData.json:", error);
    return {};
  }
}

function saveProgressStore(store: Record<string, any>) {
  try {
    fs.writeFileSync(progressFilePath, JSON.stringify(store, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving studentProgressData.json:", e);
  }
}

async function getUsersListAsync(): Promise<any[]> {
  const fallbackUsers = getFallbackUsersList();
  let dbUsers: any[] = [];
  try {
    const { prisma } = await import("@/lib/prisma");
    dbUsers = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        studentCode: true,
        fullName: true,
        role: true,
        grade: true,
        schoolClass: true,
        exp: true,
        coins: true,
        streak: true,
        createdAt: true,
      },
    });
  } catch (e) {
    // Prisma fallback
  }

  const userMap = new Map<string, any>();
  fallbackUsers.forEach((u) => {
    const key = (u.id || u.username || u.studentCode || "").toLowerCase();
    if (key) userMap.set(key, u);
  });
  dbUsers.forEach((u) => {
    const key = (u.id || u.username || u.studentCode || "").toLowerCase();
    if (key) {
      const existing = userMap.get(key) || {};
      userMap.set(key, { ...existing, ...u });
    }
  });

  return Array.from(userMap.values());
}

function getFallbackUsersList(): any[] {
  try {
    if (!fs.existsSync(usersFilePath)) return [];
    const data = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// GET: Lấy tiến độ của 1 học sinh HOẶC toàn bộ học sinh (dành cho Admin)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const mode = searchParams.get("mode"); // "all" | "summary"
    const store = getProgressStore();
    const users = await getUsersListAsync();
    const deletedSet = getDeletedIdentifiers();

    // 1. Chế độ Admin: Lấy báo cáo tổng thể hoặc danh sách toàn bộ học sinh
    if (mode === "all" || mode === "admin") {
      const studentUsers = users.filter((u) => {
        if (u.role !== "student") return false;
        const uId = u.id?.toLowerCase();
        const uName = u.username?.toLowerCase();
        const uCode = u.studentCode?.toLowerCase();
        if ((uId && deletedSet.has(uId)) || (uName && deletedSet.has(uName)) || (uCode && deletedSet.has(uCode))) {
          return false;
        }
        return true;
      });
      const detailedList = studentUsers.map((stu) => {
        const p =
          store[stu.id] ||
          (stu.studentCode ? store[stu.studentCode] : null) ||
          (stu.username ? store[stu.username] : null) ||
          (stu.username ? store[stu.username.toLowerCase()] : null) || {
            userId: stu.id,
            totalVideoMinutes: 0,
            totalCompletedLessons: 0,
            lessons: {},
            wrongQuestions: {},
          };

        const wrongList = Object.values(p.wrongQuestions || {});
        const activeWrongs = wrongList.filter((w: any) => !w.isResolved);
        const resolvedWrongs = wrongList.filter((w: any) => w.isResolved);
        const totalWrongAttempts = wrongList.reduce((sum: number, w: any) => sum + (w.wrongCount || 1), 0);

        return {
          id: stu.id,
          studentCode: stu.studentCode,
          username: stu.username || stu.studentCode?.toLowerCase(),
          fullName: stu.fullName,
          schoolName: stu.schoolName || "THCS VinaMath",
          grade: stu.grade || "Khối 6",
          schoolClass: stu.schoolClass || "Lớp 6A",
          exp: stu.exp || 0,
          coins: stu.coins || 0,
          streak: stu.streak || 1,
          createdAt: stu.createdAt,
          totalVideoMinutes: p.totalVideoMinutes || 0,
          totalCompletedLessons: Object.values(p.lessons || {}).filter((l: any) => l.isCompleted).length,
          lessonsProgress: p.lessons || {},
          wrongQuestionsList: wrongList,
          activeWrongCount: activeWrongs.length,
          resolvedWrongCount: resolvedWrongs.length,
          totalWrongAttempts,
        };
      });

      // Thống kê các câu hỏi bị sai nhiều nhất (Top Difficult Questions)
      const questionMistakesMap: Record<string, {
        questionId: string;
        badge?: string;
        questionText: string;
        lessonId: string;
        lessonTitle?: string;
        totalWrongAttempts: number;
        affectedStudentsCount: number;
        explanation?: string;
        correctOption?: string;
      }> = {};

      detailedList.forEach((stu) => {
        stu.wrongQuestionsList.forEach((w: any) => {
          if (!questionMistakesMap[w.questionId]) {
            questionMistakesMap[w.questionId] = {
              questionId: w.questionId,
              badge: w.badge,
              questionText: w.questionText,
              lessonId: w.lessonId,
              lessonTitle: w.lessonTitle,
              totalWrongAttempts: 0,
              affectedStudentsCount: 0,
              explanation: w.explanation,
              correctOption: w.correctOption,
            };
          }
          questionMistakesMap[w.questionId].totalWrongAttempts += (w.wrongCount || 1);
          questionMistakesMap[w.questionId].affectedStudentsCount += 1;
        });
      });

      const topMistakes = Object.values(questionMistakesMap).sort(
        (a, b) => b.totalWrongAttempts - a.totalWrongAttempts
      );

      return NextResponse.json({
        success: true,
        students: detailedList,
        topMistakes,
        kpi: {
          totalStudents: studentUsers.length,
          totalVideoHours: Math.round(detailedList.reduce((acc, s) => acc + s.totalVideoMinutes, 0) / 60 * 10) / 10,
          totalCompletedLessons: detailedList.reduce((acc, s) => acc + s.totalCompletedLessons, 0),
          totalWrongEncountered: detailedList.reduce((acc, s) => acc + s.totalWrongAttempts, 0),
        },
      });
    }

    // 2. Chế độ học sinh cá nhân: Lấy dữ liệu của 1 học sinh
    if (!userId) {
      return NextResponse.json({ error: "Thiếu userId" }, { status: 400 });
    }

    const cleanUserId = userId.trim().toLowerCase();
    const studentUser = users.find(
      (u) =>
        u.id?.toLowerCase() === cleanUserId ||
        u.studentCode?.toLowerCase() === cleanUserId ||
        u.username?.toLowerCase() === cleanUserId
    );

    const canonicalKey = studentUser?.id || userId;
    const p =
      store[canonicalKey] ||
      store[userId] ||
      (studentUser?.studentCode ? store[studentUser.studentCode] : null) ||
      (studentUser?.username ? store[studentUser.username] : null) || {
        userId: canonicalKey,
        studentCode: studentUser?.studentCode,
        username: studentUser?.username,
        fullName: studentUser?.fullName,
        schoolName: studentUser?.schoolName || "THCS VinaMath",
        schoolClass: studentUser?.schoolClass || "Lớp 6A",
        totalVideoMinutes: 0,
        totalCompletedLessons: 0,
        lessons: {},
        wrongQuestions: {},
        updatedAt: new Date().toISOString(),
      };

    return NextResponse.json({
      success: true,
      progress: p,
      profile: studentUser ? {
        id: studentUser.id,
        studentCode: studentUser.studentCode,
        username: studentUser.username,
        fullName: studentUser.fullName,
        schoolName: studentUser.schoolName || "THCS VinaMath",
        grade: studentUser.grade || "Khối 6",
        schoolClass: studentUser.schoolClass || "Lớp 6A",
        exp: studentUser.exp || 0,
        coins: studentUser.coins || 0,
        streak: studentUser.streak || 1,
      } : null,
    });
  } catch (error) {
    console.error("GET student progress error:", error);
    return NextResponse.json({ error: "Lỗi tải tiến độ học tập." }, { status: 500 });
  }
}

// POST: Cập nhật tiến độ học tập (xem video, câu sai, hoàn thành bài)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      studentCode,
      username,
      lessonId,
      gradeKey,
      lessonTitle,
      addVideoSeconds,
      isCompleted,
      score,
      totalQuestions,
      wrongQuestion, // { questionId, badge, questionText, selectedOption, correctOption, explanation }
      resolveQuestionId, // questionId đã sửa thành công
    } = body;

    if (!userId && !studentCode && !username) {
      return NextResponse.json({ error: "Thiếu định danh học sinh (userId / studentCode)" }, { status: 400 });
    }

    const store = getProgressStore();
    const users = await getUsersListAsync();
    const cleanId = (userId || studentCode || username || "").trim().toLowerCase();

    const studentUser = users.find(
      (u) =>
        u.id?.toLowerCase() === cleanId ||
        u.studentCode?.toLowerCase() === cleanId ||
        u.username?.toLowerCase() === cleanId
    );

    // Dùng ID chuẩn của học sinh làm targetKey chính
    const targetKey = studentUser?.id || userId || studentCode || username;

    if (!store[targetKey]) {
      // Kiểm tra xem đã từng lưu bằng studentCode hay username chưa
      const altRecord =
        (studentUser?.studentCode ? store[studentUser.studentCode] : null) ||
        (studentUser?.username ? store[studentUser.username] : null);

      if (altRecord) {
        store[targetKey] = { ...altRecord, userId: targetKey };
      } else {
        store[targetKey] = {
          userId: targetKey,
          studentCode: studentUser?.studentCode || studentCode,
          username: studentUser?.username || username,
          fullName: studentUser?.fullName,
          schoolName: studentUser?.schoolName || "THCS VinaMath",
          schoolClass: studentUser?.schoolClass || "Lớp 6A",
          totalVideoMinutes: 0,
          totalCompletedLessons: 0,
          lessons: {},
          wrongQuestions: {},
          updatedAt: new Date().toISOString(),
        };
      }
    }

    const studentRecord = store[targetKey];

    // 1. Cập nhật tiến độ bài học & thời gian xem video
    if (lessonId) {
      if (!studentRecord.lessons[lessonId]) {
        studentRecord.lessons[lessonId] = {
          lessonId,
          gradeKey: gradeKey || "lop-6",
          lessonTitle: lessonTitle || lessonId,
          videoWatchedSeconds: 0,
          isCompleted: false,
          score: 0,
          totalQuestions: totalQuestions || 10,
          lastStudiedAt: new Date().toISOString(),
        };
      }

      const l = studentRecord.lessons[lessonId];
      if (addVideoSeconds && typeof addVideoSeconds === "number") {
        l.videoWatchedSeconds = (l.videoWatchedSeconds || 0) + Math.max(0, addVideoSeconds);
      }
      if (isCompleted !== undefined) {
        l.isCompleted = Boolean(isCompleted);
      }
      if (score !== undefined) {
        l.score = Math.max(l.score || 0, score);
      }
      if (totalQuestions !== undefined) {
        l.totalQuestions = totalQuestions;
      }
      l.lastStudiedAt = new Date().toISOString();
    }

    // 2. Ghi nhận câu hỏi làm sai (kèm đếm số lần sai wrongCount)
    if (wrongQuestion && wrongQuestion.questionId) {
      const qId = wrongQuestion.questionId;
      if (!studentRecord.wrongQuestions[qId]) {
        studentRecord.wrongQuestions[qId] = {
          id: `wq-${targetKey}-${qId}`,
          questionId: qId,
          badge: wrongQuestion.badge || "",
          questionText: wrongQuestion.questionText || "",
          lessonId: lessonId || wrongQuestion.lessonId || "",
          lessonTitle: lessonTitle || wrongQuestion.lessonTitle || "",
          gradeKey: gradeKey || wrongQuestion.gradeKey || "lop-6",
          wrongCount: 1,
          lastSelectedOption: wrongQuestion.selectedOption || "",
          correctOption: wrongQuestion.correctOption || "",
          explanation: wrongQuestion.explanation || "",
          isResolved: false,
          lastWrongAt: new Date().toISOString(),
        };
      } else {
        const existing = studentRecord.wrongQuestions[qId];
        existing.wrongCount = (existing.wrongCount || 0) + 1;
        existing.isResolved = false; // Đánh dấu lại là chưa resolved vì vừa làm sai tiếp
        if (wrongQuestion.selectedOption) existing.lastSelectedOption = wrongQuestion.selectedOption;
        if (wrongQuestion.correctOption) existing.correctOption = wrongQuestion.correctOption;
        existing.lastWrongAt = new Date().toISOString();
      }
    }

    // 3. Đánh dấu câu hỏi đã được làm lại đúng (Resolve)
    if (resolveQuestionId && studentRecord.wrongQuestions[resolveQuestionId]) {
      studentRecord.wrongQuestions[resolveQuestionId].isResolved = true;
    }

    // 4. Tính toán lại tổng hợp
    let totalSec = 0;
    let completedCount = 0;
    Object.values(studentRecord.lessons).forEach((item: any) => {
      totalSec += (item.videoWatchedSeconds || 0);
      if (item.isCompleted) completedCount++;
    });

    studentRecord.totalVideoMinutes = Math.round(totalSec / 60);
    studentRecord.totalCompletedLessons = completedCount;
    studentRecord.updatedAt = new Date().toISOString();

    saveProgressStore(store);

    return NextResponse.json({ success: true, progress: studentRecord });
  } catch (error) {
    console.error("POST student progress error:", error);
    return NextResponse.json({ error: "Lỗi cập nhật tiến độ học tập." }, { status: 500 });
  }
}
