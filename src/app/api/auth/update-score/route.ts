import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabaseClient";

const usersFilePath = path.join(process.cwd(), "src/data/usersData.json");

function getUsers() {
  try {
    if (!fs.existsSync(usersFilePath)) return [];
    const data = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveUsers(users: any[]) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving users file:", e);
  }
}

export async function POST(req: Request) {
  try {
    const { studentId, username, earnedExp, earnedCoins, streak, totalExp, totalCoins } = await req.json();
    const searchKey = (studentId || username || "").trim();
    if (!searchKey) {
      return NextResponse.json({ error: "Thiếu studentId hoặc username" }, { status: 400 });
    }

    const cleanKey = searchKey.toLowerCase();
    const users = getUsers();
    let studentIndex = users.findIndex(
      (u: any) =>
        u.id?.toLowerCase() === cleanKey ||
        u.studentCode?.toLowerCase() === cleanKey ||
        u.username?.toLowerCase() === cleanKey
    );

    if (studentIndex === -1) {
      // Nếu chưa có trong JSON (ví dụ đăng ký qua Prisma), thử tìm trong Prisma
      try {
        const dbUser = await prisma.user.findFirst({
          where: {
            OR: [
              { id: searchKey },
              { username: cleanKey },
              { studentCode: searchKey.toUpperCase() },
              { studentCode: searchKey },
            ],
          },
        });
        if (dbUser) {
          users.push(dbUser);
          studentIndex = users.length - 1;
        }
      } catch (e) {
        console.warn("Prisma fallback lookup warning:", e);
      }
    }

    // Nếu vẫn chưa có trong local, thử tìm trên Supabase
    let suUserId = searchKey;
    if (studentIndex === -1) {
      try {
        const { data: suUser } = await supabase
          .from("users")
          .select("*")
          .or(`id.eq.${searchKey},username.eq.${cleanKey},student_code.ilike.${cleanKey}`)
          .maybeSingle();

        if (suUser) {
          users.push({
            id: suUser.id,
            username: suUser.username,
            studentCode: suUser.student_code,
            fullName: suUser.full_name,
            role: suUser.role,
            schoolName: suUser.school_name,
            grade: suUser.grade,
            schoolClass: suUser.school_class,
            exp: suUser.exp,
            coins: suUser.coins,
            streak: suUser.streak,
          });
          studentIndex = users.length - 1;
          suUserId = suUser.id;
        }
      } catch {}
    } else {
      suUserId = users[studentIndex].id || searchKey;
    }

    if (studentIndex === -1) {
      return NextResponse.json({ error: "Không tìm thấy học sinh" }, { status: 404 });
    }

    if (totalExp !== undefined) {
      users[studentIndex].exp = Math.max(users[studentIndex].exp || 0, totalExp);
    } else if (earnedExp) {
      users[studentIndex].exp = (users[studentIndex].exp || 0) + earnedExp;
    }

    if (totalCoins !== undefined) {
      users[studentIndex].coins = Math.max(users[studentIndex].coins || 0, totalCoins);
    } else if (earnedCoins) {
      users[studentIndex].coins = (users[studentIndex].coins || 0) + earnedCoins;
    }

    if (streak !== undefined) {
      users[studentIndex].streak = Math.max(users[studentIndex].streak || 1, streak);
    }

    saveUsers(users);

    const updatedExp = users[studentIndex].exp;
    const updatedCoins = users[studentIndex].coins;
    const updatedStreak = users[studentIndex].streak;

    // 1. Cập nhật Supabase Cloud Database
    try {
      await supabase
        .from("users")
        .update({
          exp: updatedExp,
          coins: updatedCoins,
          streak: updatedStreak,
        })
        .or(`id.eq.${suUserId},username.eq.${cleanKey}`);
    } catch (suErr) {
      console.warn("Supabase update-score warning:", suErr);
    }

    // 2. Cập nhật Prisma DB
    try {
      await prisma.user.updateMany({
        where: {
          OR: [
            { id: users[studentIndex].id },
            { username: users[studentIndex].username },
            { studentCode: users[studentIndex].studentCode },
          ],
        },
        data: {
          exp: updatedExp,
          coins: updatedCoins,
          streak: updatedStreak,
        },
      });
    } catch (dbErr) {
      console.warn("Prisma score update warning:", dbErr);
    }

    const { password: _, ...safeUser } = users[studentIndex];
    return NextResponse.json({ success: true, user: safeUser });
  } catch (error) {
    console.error("Update score error:", error);
    return NextResponse.json({ error: "Lỗi cập nhật điểm" }, { status: 500 });
  }
}
