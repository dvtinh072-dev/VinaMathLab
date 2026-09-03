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
    // 1. Thử lấy từ Prisma DB
    try {
      const dbUsers = await prisma.user.findMany({
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

      if (dbUsers && dbUsers.length > 0) {
        return NextResponse.json({ success: true, users: dbUsers });
      }
    } catch (dbErr) {
      console.warn("Prisma users query failed, using fallback:", dbErr);
    }

    // 2. Fallback sang usersData.json
    const users = getFallbackUsers();
    const safeUsers = users.map(({ password, ...rest }: any) => rest);
    return NextResponse.json({ success: true, users: safeUsers });
  } catch (error) {
    console.error("Fetch users error:", error);
    return NextResponse.json({ error: "Lỗi tải danh sách người dùng." }, { status: 500 });
  }
}
