import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

const usersFilePath = path.join(process.cwd(), "src/data/usersData.json");
const ADMIN_SECRET_KEY = "VINAMATH2026";

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
    console.error("Error writing users file:", e);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { role, fullName, password } = body;
    const users = getUsers();

    if (role === "admin") {
      const { username, email, adminSecret } = body;

      if (!username || !password || !fullName) {
        return NextResponse.json(
          { error: "Vui lòng điền đầy đủ họ tên, tên đăng nhập và mật khẩu." },
          { status: 400 }
        );
      }

      if (adminSecret !== ADMIN_SECRET_KEY) {
        return NextResponse.json(
          { error: "Mã bảo mật Quản trị viên (Admin Secret Key) không chính xác." },
          { status: 403 }
        );
      }

      const isExisted = users.some(
        (u: any) => u.role === "admin" && (u.username === username || (email && u.email === email))
      );

      if (isExisted) {
        return NextResponse.json(
          { error: "Tên đăng nhập hoặc Email quản trị viên đã tồn tại." },
          { status: 409 }
        );
      }

      const newAdmin = {
        id: `u-admin-${Date.now()}`,
        role: "admin",
        username,
        email: email || `${username}@vinamath.edu.vn`,
        password,
        fullName,
        createdAt: new Date().toISOString(),
      };

      // 1. Lưu vào file JSON fallback
      users.push(newAdmin);
      saveUsers(users);

      // 2. Lưu vào Prisma DB
      try {
        await prisma.user.create({
          data: {
            id: newAdmin.id,
            role: "admin",
            username: newAdmin.username,
            email: newAdmin.email,
            password: newAdmin.password,
            fullName: newAdmin.fullName,
          },
        });
      } catch (dbErr) {
        console.warn("Prisma user insert warning:", dbErr);
      }

      const { password: _, ...userWithoutPass } = newAdmin;
      return NextResponse.json({ success: true, user: userWithoutPass });
    } else {
      // Đăng ký tài khoản Học Sinh
      const { fullName, schoolName, schoolClass, grade, username, studentCode, password } = body;

      if (!fullName || !password) {
        return NextResponse.json(
          { error: "Vui lòng điền đầy đủ họ và tên cùng mật khẩu." },
          { status: 400 }
        );
      }

      const cleanUsername = (username || studentCode || "").trim().toLowerCase();
      const finalCode =
        studentCode ? studentCode.trim().toUpperCase() : `HS${Math.floor(1000 + Math.random() * 9000)}`;

      if (cleanUsername) {
        const isUserExisted = users.some(
          (u: any) =>
            u.username?.toLowerCase() === cleanUsername ||
            u.studentCode?.toLowerCase() === cleanUsername
        );
        if (isUserExisted) {
          return NextResponse.json(
            { error: `Tên đăng nhập "${cleanUsername}" đã được sử dụng. Vui lòng chọn tên khác.` },
            { status: 409 }
          );
        }
      }

      const newStudent = {
        id: `u-student-${Date.now()}`,
        role: "student",
        username: cleanUsername || finalCode.toLowerCase(),
        studentCode: finalCode,
        password,
        fullName: fullName.trim(),
        schoolName: (schoolName || "THCS VinaMath").trim(),
        grade: grade || "Khối 6",
        schoolClass: (schoolClass || "Lớp 6A").trim(),
        exp: 0,
        coins: 50,
        streak: 1,
        createdAt: new Date().toISOString(),
      };

      // 1. Lưu vào file JSON fallback
      users.push(newStudent);
      saveUsers(users);

      // 2. Lưu vào Prisma DB
      try {
        await prisma.user.create({
          data: {
            id: newStudent.id,
            role: "student",
            username: newStudent.username,
            studentCode: newStudent.studentCode,
            password: newStudent.password,
            fullName: newStudent.fullName,
            grade: newStudent.grade,
            schoolClass: newStudent.schoolClass,
            exp: newStudent.exp,
            coins: newStudent.coins,
            streak: newStudent.streak,
          },
        });
      } catch (dbErr) {
        console.warn("Prisma user insert warning:", dbErr);
      }

      const { password: _, ...userWithoutPass } = newStudent;
      return NextResponse.json({ success: true, user: userWithoutPass });
    }
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi máy chủ trong quá trình đăng ký." },
      { status: 500 }
    );
  }
}
