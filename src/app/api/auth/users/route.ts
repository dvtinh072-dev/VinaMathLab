import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

const usersFilePath = path.join(process.cwd(), "src/data/usersData.json");

function getFallbackUsers() {
  try {
    if (!fs.existsSync(usersFilePath)) return [];
    const data = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function GET() {
  try {
    const fallbackUsers = getFallbackUsers();
    let dbUsers: any[] = [];

    // 1. Thử lấy từ Prisma DB
    try {
      dbUsers = await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          studentCode: true,
          email: true,
          fullName: true,
          role: true,
          grade: true,
          schoolClass: true,
          exp: true,
          coins: true,
          streak: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      });
    } catch (dbErr) {
      console.warn("Prisma users query warning:", dbErr);
    }

    // 2. Gộp danh sách người dùng từ cả DB và usersData.json để không bị mất bất kỳ tài khoản nào
    const userMap = new Map<string, any>();

    // Đưa users từ file JSON vào trước
    fallbackUsers.forEach((u: any) => {
      const { password, ...safeUser } = u;
      const key = u.id || u.username?.toLowerCase() || u.studentCode;
      if (key) {
        userMap.set(key, safeUser);
      }
    });

    // Đưa users từ DB vào (ghi đè hoặc bổ sung)
    dbUsers.forEach((u: any) => {
      const key = u.id || u.username?.toLowerCase() || u.studentCode;
      if (key) {
        const existing = userMap.get(key);
        userMap.set(key, { ...existing, ...u });
      }
    });

    const mergedUsers = Array.from(userMap.values());
    return NextResponse.json({ success: true, users: mergedUsers });
  } catch (error) {
    console.error("Fetch users error:", error);
    return NextResponse.json({ error: "Lỗi tải danh sách người dùng." }, { status: 500 });
  }
}

// Xóa tài khoản thành viên (Admin quyền xóa)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    let userId = searchParams.get("id") || searchParams.get("userId");

    if (!userId) {
      try {
        const body = await req.json();
        userId = body.id || body.userId;
      } catch {}
    }

    if (!userId) {
      return NextResponse.json({ error: "Thiếu ID người dùng cần xóa." }, { status: 400 });
    }

    // 1. Xóa khỏi Prisma DB nếu tồn tại
    try {
      await prisma.user.deleteMany({
        where: {
          OR: [
            { id: userId },
            { username: userId },
            { studentCode: userId }
          ]
        }
      });
    } catch (dbErr) {
      console.warn("Prisma user delete warning:", dbErr);
    }

    // 2. Xóa khỏi file usersData.json
    try {
      if (fs.existsSync(usersFilePath)) {
        const fileContent = fs.readFileSync(usersFilePath, "utf-8");
        const list = JSON.parse(fileContent);
        const filtered = list.filter(
          (u: any) => u.id !== userId && u.username !== userId && u.studentCode !== userId
        );
        fs.writeFileSync(usersFilePath, JSON.stringify(filtered, null, 2), "utf-8");
      }
    } catch (fsErr) {
      console.error("Lỗi xóa user khỏi usersData.json:", fsErr);
    }

    // 3. Xóa tiến độ học tập liên quan trong studentProgressData.json
    try {
      const progressPath = path.join(process.cwd(), "src/data/studentProgressData.json");
      if (fs.existsSync(progressPath)) {
        const progContent = fs.readFileSync(progressPath, "utf-8");
        const progStore = JSON.parse(progContent);
        let changed = false;
        Object.keys(progStore).forEach((key) => {
          const item = progStore[key];
          if (
            key === userId ||
            item?.userId === userId ||
            item?.studentCode === userId ||
            item?.username === userId
          ) {
            delete progStore[key];
            changed = true;
          }
        });
        if (changed) {
          fs.writeFileSync(progressPath, JSON.stringify(progStore, null, 2), "utf-8");
        }
      }
    } catch (progErr) {
      console.warn("Lỗi dọn tiến độ khi xóa user:", progErr);
    }

    return NextResponse.json({ success: true, message: "Đã xóa thành viên thành công." });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json({ error: "Lỗi máy chủ khi xóa thành viên." }, { status: 500 });
  }
}

