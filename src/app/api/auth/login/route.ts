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
    const { role, studentCode, username, password } = body;

    let user: any = null;

    // 1. Thử xác thực từ Prisma DB
    try {
      if (role === "admin") {
        user = await prisma.user.findFirst({
          where: {
            role: "admin",
            password: password,
            OR: [
              { username: username },
              { email: username },
            ],
          },
        });
      } else {
        const codeClean = (studentCode || "").trim().toUpperCase();
        user = await prisma.user.findFirst({
          where: {
            role: "student",
            studentCode: codeClean,
            password: password,
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
            (u.username === username || u.email === username) &&
            u.password === password
        );
      } else {
        const codeClean = (studentCode || "").trim().toUpperCase();
        user = fallbackUsers.find(
          (u: any) =>
            u.role === "student" &&
            u.studentCode?.toUpperCase() === codeClean &&
            u.password === password
        );
      }
    }

    if (!user) {
      return NextResponse.json(
        {
          error:
            role === "admin"
              ? "Tên đăng nhập hoặc mật khẩu quản trị viên không chính xác."
              : "Mã học sinh hoặc mật khẩu không chính xác.",
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
