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
    const { studentId, earnedExp, earnedCoins, streak } = await req.json();
    if (!studentId) {
      return NextResponse.json({ error: "Thiếu studentId" }, { status: 400 });
    }

    const users = getUsers();
    const studentIndex = users.findIndex(
      (u: any) => u.id === studentId || u.studentCode === studentId
    );

    if (studentIndex === -1) {
      return NextResponse.json({ error: "Không tìm thấy học sinh" }, { status: 404 });
    }

    users[studentIndex].exp = (users[studentIndex].exp || 0) + (earnedExp || 0);
    users[studentIndex].coins = (users[studentIndex].coins || 0) + (earnedCoins || 0);
    if (streak !== undefined) {
      users[studentIndex].streak = Math.max(users[studentIndex].streak || 0, streak);
    }

    saveUsers(users);

    // Cập nhật Prisma DB
    try {
      await prisma.user.updateMany({
        where: {
          OR: [{ id: studentId }, { studentCode: studentId }],
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
