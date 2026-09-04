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
    console.error("Error reading fallback users data:", error);
    return [];
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { role, studentCode, username, identifier, password } = body;
    const loginKey = (identifier || username || studentCode || "").trim().toLowerCase();
    const cleanPassword = (password || "").trim();

    let user: any = null;

    // 1. Thử xác thực từ Prisma DB
    try {
      if (role === "admin") {
        user = await prisma.user.findFirst({
          where: {
            role: "admin",
            password: cleanPassword,
            OR: [
              { username: loginKey },
              { email: loginKey },
            ],
          },
        });
      } else {
        user = await prisma.user.findFirst({
          where: {
            role: "student",
            password: cleanPassword,
            OR: [
              { username: loginKey },
              { studentCode: loginKey.toUpperCase() },
              { studentCode: loginKey },
              { id: loginKey },
            ],
          },
        });
      }
    } catch (dbError) {
      console.warn("Prisma query failed, falling back to JSON file:", dbError);
    }

    // 2. Fallback sang file usersData.json nếu chưa tìm thấy trong DB
    if (!user) {
      const fallbackUsers = getFallbackUsers();
      if (role === "admin") {
        user = fallbackUsers.find(
          (u: any) =>
            u.role === "admin" &&
            (u.username?.toLowerCase() === loginKey || u.email?.toLowerCase() === loginKey) &&
            (u.password || "").trim() === cleanPassword
        );
      } else {
        user = fallbackUsers.find(
          (u: any) =>
            u.role === "student" &&
            (u.username?.toLowerCase() === loginKey ||
             u.studentCode?.toLowerCase() === loginKey ||
             u.studentCode?.toUpperCase() === loginKey.toUpperCase() ||
             u.id?.toLowerCase() === loginKey) &&
            (u.password || "").trim() === cleanPassword
        );
      }
    }

    if (!user) {
      return NextResponse.json(
        {
          error:
            role === "admin"
              ? "Tên đăng nhập hoặc mật khẩu quản trị viên không chính xác."
              : "Tên đăng nhập hoặc mật khẩu không chính xác.",
        },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPass } = user;
    return NextResponse.json({ success: true, user: userWithoutPass });
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi máy chủ trong quá trình đăng nhập." },
      { status: 500 }
    );
  }
}
