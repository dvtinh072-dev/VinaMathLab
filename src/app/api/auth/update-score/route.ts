import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

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

    // Cập nhật Prisma DB
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
          exp: users[studentIndex].exp,
          coins: users[studentIndex].coins,
          streak: users[studentIndex].streak,
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
