import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getDeletedIdentifiers } from "@/lib/deletedUsers";
import { supabase } from "@/lib/supabaseClient";

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

  // Supabase users
  let suUsers: any[] = [];
  try {
    const { data } = await supabase.from("users").select("*");
    if (data) {
      suUsers = data.map((u: any) => ({
        id: u.id,
        username: u.username,
        studentCode: u.student_code,
        fullName: u.full_name,
        role: u.role,
        schoolName: u.school_name,
        grade: u.grade,
        schoolClass: u.school_class,
        exp: u.exp,
        coins: u.coins,
        streak: u.streak,
        createdAt: u.created_at,
      }));
    }
  } catch (suErr) {}

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
  suUsers.forEach((u) => {
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

      // Thử đọc toàn bộ progress từ Supabase để hợp nhất
      let suProgressMap: Record<string, any> = {};
      try {
        const { data: suData } = await supabase.from("student_progress").select("*");
        if (suData) {
          suData.forEach((row: any) => {
            const key = (row.id || row.user_id || row.username || "").toLowerCase();
            suProgressMap[key] = {
              userId: row.user_id || row.id,
              studentCode: row.student_code,
              username: row.username,
              fullName: row.full_name,
              totalVideoMinutes: row.total_video_minutes || 0,
              totalCompletedLessons: row.total_completed_lessons || 0,
              lessons: row.lessons || {},
              wrongQuestions: row.wrong_questions || {},
              solvedQuestions: row.solved_questions || {},
              updatedAt: row.updated_at,
            };
          });
        }
      } catch {}

      const detailedList = studentUsers.map((stu) => {
        const canonicalKey = stu.id?.toLowerCase() || "";
        const p =
          suProgressMap[canonicalKey] ||
          store[canonicalKey] ||
          store[stu.id] ||
          (stu.studentCode ? store[stu.studentCode] : null) ||
          (stu.username ? store[stu.username] : null) || {
            userId: stu.id,
            studentCode: stu.studentCode,
            username: stu.username,
            fullName: stu.fullName,
            schoolName: stu.schoolName || "THCS VinaMath",
            schoolClass: stu.schoolClass || "Lớp 6A",
            totalVideoMinutes: 0,
            totalCompletedLessons: 0,
            lessons: {},
            wrongQuestions: {},
            updatedAt: stu.createdAt || new Date().toISOString(),
          };

        const wrongQuestionsList = Object.values(p.wrongQuestions || {});
        const activeMistakesCount = wrongQuestionsList.filter((w: any) => !w.isResolved).length;

        return {
          id: stu.id,
          studentCode: stu.studentCode || stu.id,
          username: stu.username || stu.id,
          fullName: stu.fullName || "Học sinh",
          schoolName: stu.schoolName || "THCS VinaMath",
          grade: stu.grade || "Khối 6",
          schoolClass: stu.schoolClass || "Lớp 6A",
          exp: Math.max(stu.exp || 0, p.exp || 0),
          coins: Math.max(stu.coins || 0, p.coins || 0),
          streak: Math.max(stu.streak || 1, p.streak || 1),
          totalVideoMinutes: p.totalVideoMinutes || 0,
          totalCompletedLessons: p.totalCompletedLessons || 0,
          activeMistakesCount,
          totalWrongAttempts: wrongQuestionsList.length,
          lastActive: p.updatedAt || stu.createdAt,
          wrongQuestionsList,
          lessons: p.lessons || {},
        };
      });

      const questionMistakesMap: Record<string, {
        questionId: string;
        badge: string;
        questionText: string;
        lessonId: string;
        lessonTitle: string;
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

    // 2.1. Đọc từ Supabase trước (Đồng bộ đám mây giữa điện thoại & máy tính)
    let suProgressRecord: any = null;
    try {
      const { data: suData } = await supabase
        .from("student_progress")
        .select("*")
        .or(`id.eq.${canonicalKey},user_id.eq.${canonicalKey},username.eq.${cleanUserId}`)
        .maybeSingle();

      if (suData) {
        suProgressRecord = {
          userId: suData.user_id || canonicalKey,
          studentCode: suData.student_code || studentUser?.studentCode,
          username: suData.username || studentUser?.username,
          fullName: suData.full_name || studentUser?.fullName,
          schoolName: studentUser?.schoolName || "THCS VinaMath",
          schoolClass: studentUser?.schoolClass || "Lớp 6A",
          totalVideoMinutes: suData.total_video_minutes || 0,
          totalCompletedLessons: suData.total_completed_lessons || 0,
          lessons: suData.lessons || {},
          wrongQuestions: suData.wrong_questions || {},
          solvedQuestions: suData.solved_questions || {},
          updatedAt: suData.updated_at,
        };
      }
    } catch {}

    const p =
      suProgressRecord ||
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
        exp: Math.max(studentUser.exp || 0, p.exp || 0),
        coins: Math.max(studentUser.coins || 0, p.coins || 0),
        streak: Math.max(studentUser.streak || 1, p.streak || 1),
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
      earnedExp,
      totalExp,
      earnedCoins,
      coins,
      streak,
      lessonId,
      gradeKey,
      lessonTitle,
      addVideoSeconds,
      lastVideoPosition,
      isVideoCompleted,
      isCompleted,
      score,
      totalQuestions,
      wrongQuestion,
      resolveQuestionId,
      solvedQuestionId,
      solvedExp,
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

    const targetKey = studentUser?.id || userId || studentCode || username;

    if (!store[targetKey]) {
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
          lessonTitle: lessonTitle || "",
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
      if (lastVideoPosition !== undefined) {
        l.lastVideoPosition = lastVideoPosition;
      }
      if (isVideoCompleted !== undefined) {
        l.isVideoCompleted = Boolean(isVideoCompleted);
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

    // 2. Cập nhật câu sai
    if (wrongQuestion && wrongQuestion.questionId) {
      const qId = wrongQuestion.questionId;
      if (!studentRecord.wrongQuestions) studentRecord.wrongQuestions = {};

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
        const w = studentRecord.wrongQuestions[qId];
        w.wrongCount = (w.wrongCount || 0) + 1;
        w.isResolved = false;
        if (wrongQuestion.selectedOption) w.lastSelectedOption = wrongQuestion.selectedOption;
        if (wrongQuestion.correctOption) w.correctOption = wrongQuestion.correctOption;
        w.lastWrongAt = new Date().toISOString();
      }
    }

    // 3. Đánh dấu câu hỏi đã được làm lại đúng (Resolve)
    if (resolveQuestionId && studentRecord.wrongQuestions?.[resolveQuestionId]) {
      studentRecord.wrongQuestions[resolveQuestionId].isResolved = true;
    }

    // 3b. Ghi nhận câu hỏi đã được giải đúng
    if (solvedQuestionId) {
      if (!studentRecord.solvedQuestions) studentRecord.solvedQuestions = {};
      studentRecord.solvedQuestions[solvedQuestionId] = {
        solvedAt: new Date().toISOString(),
        earnedExp: solvedExp || 100,
      };
    }

    // 4. Cập nhật EXP, Coins, Streak nếu có
    if (totalExp !== undefined) {
      studentRecord.exp = Math.max(studentRecord.exp || 0, totalExp);
    } else if (earnedExp) {
      studentRecord.exp = (studentRecord.exp || 0) + earnedExp;
    }

    if (coins !== undefined) {
      studentRecord.coins = Math.max(studentRecord.coins || 0, coins);
    } else if (earnedCoins) {
      studentRecord.coins = (studentRecord.coins || 0) + earnedCoins;
    }

    if (streak !== undefined) {
      studentRecord.streak = Math.max(studentRecord.streak || 1, streak);
    }

    // 5. Tính toán lại tổng hợp
    let totalSec = 0;
    let completedCount = 0;
    Object.values(studentRecord.lessons).forEach((item: any) => {
      totalSec += (item.videoWatchedSeconds || 0);
      if (item.isCompleted) completedCount++;
    });

    studentRecord.totalVideoMinutes = Math.round(totalSec / 60);
    studentRecord.totalCompletedLessons = completedCount;
    studentRecord.updatedAt = new Date().toISOString();

    // 6. Lưu vào bộ nhớ file JSON cục bộ
    saveProgressStore(store);

    // 7. Lưu vào Supabase Cloud Database (Đồng bộ ngay lên đám mây)
    try {
      await supabase.from("student_progress").upsert({
        id: targetKey,
        user_id: targetKey,
        username: studentUser?.username || username,
        student_code: studentUser?.studentCode || studentCode,
        full_name: studentUser?.fullName,
        grade_key: gradeKey || "lop-6",
        total_video_minutes: studentRecord.totalVideoMinutes,
        total_completed_lessons: studentRecord.totalCompletedLessons,
        lessons: studentRecord.lessons,
        wrong_questions: studentRecord.wrongQuestions,
        solved_questions: studentRecord.solvedQuestions || {},
        updated_at: studentRecord.updatedAt,
      }, { onConflict: "id" });
    } catch (suErr) {
      console.warn("Supabase student_progress upsert warning:", suErr);
    }

    // 8. Đồng bộ điểm học sinh vào Supabase users, usersData.json và Prisma DB
    if (studentUser && (earnedExp || totalExp !== undefined || earnedCoins || coins !== undefined || streak !== undefined)) {
      try {
        const usersList = getFallbackUsersList();
        const uIdx = usersList.findIndex(
          (u: any) =>
            u.id === studentUser.id ||
            (studentUser.username && u.username?.toLowerCase() === studentUser.username.toLowerCase()) ||
            (studentUser.studentCode && u.studentCode?.toUpperCase() === studentUser.studentCode.toUpperCase())
        );
        if (uIdx !== -1) {
          if (studentRecord.exp !== undefined) usersList[uIdx].exp = studentRecord.exp;
          if (studentRecord.coins !== undefined) usersList[uIdx].coins = studentRecord.coins;
          if (studentRecord.streak !== undefined) usersList[uIdx].streak = studentRecord.streak;
          fs.writeFileSync(usersFilePath, JSON.stringify(usersList, null, 2), "utf-8");
        }

        // Cập nhật Supabase users table
        await supabase
          .from("users")
          .update({
            exp: studentRecord.exp,
            coins: studentRecord.coins,
            streak: studentRecord.streak,
          })
          .eq("id", studentUser.id);

        const { prisma } = await import("@/lib/prisma");
        await prisma.user.updateMany({
          where: {
            OR: [
              { id: studentUser.id },
              { username: studentUser.username },
              { studentCode: studentUser.studentCode },
            ],
          },
          data: {
            exp: studentRecord.exp,
            coins: studentRecord.coins,
            streak: studentRecord.streak,
          },
        });
      } catch (dbErr) {
        console.warn("Lỗi cập nhật điểm người dùng qua progress API:", dbErr);
      }
    }

    return NextResponse.json({ success: true, progress: studentRecord });
  } catch (error) {
    console.error("POST student progress error:", error);
    return NextResponse.json({ error: "Lỗi cập nhật tiến độ học tập." }, { status: 500 });
  }
}
