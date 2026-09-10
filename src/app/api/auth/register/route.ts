import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabaseClient";

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

      // 1. Lưu vào Supabase Cloud
      try {
        await supabase.from("users").upsert({
          id: newAdmin.id,
          username: newAdmin.username.toLowerCase(),
          email: newAdmin.email,
          password_hash: newAdmin.password,
          full_name: newAdmin.fullName,
          role: "admin",
          created_at: newAdmin.createdAt,
        });
      } catch (suErr) {
        console.warn("Supabase insert admin warning:", suErr);
      }

      // 2. Lưu vào file JSON fallback
      users.push(newAdmin);
      saveUsers(users);

      // 3. Lưu vào Prisma DB
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
      // Đăng ký tài khoản Học Sinh (Không cần Mã HS, chỉ cần username)
      const { fullName, schoolName, schoolClass, grade, username, studentCode, password } = body;

      if (!fullName || !password) {
        return NextResponse.json(
          { error: "Vui lòng điền đầy đủ họ và tên cùng mật khẩu." },
          { status: 400 }
        );
      }

      // Tên đăng nhập: nếu không nhập username thì lấy studentCode hoặc tự sinh ngẫu nhiên
      let rawUsername = (username || studentCode || "").trim().toLowerCase().replace(/\s+/g, "");
      if (!rawUsername) {
        rawUsername = `hs${Math.floor(10000 + Math.random() * 90000)}`;
      }

      const cleanUsername = rawUsername;
      const internalCode = studentCode ? studentCode.trim().toUpperCase() : cleanUsername.toUpperCase();

      // Kiểm tra trùng trên Supabase
      try {
        const { data: suFound } = await supabase
          .from("users")
          .select("id")
          .eq("username", cleanUsername)
          .maybeSingle();

        if (suFound) {
          return NextResponse.json(
            { error: `Tên đăng nhập "${cleanUsername}" đã được sử dụng. Vui lòng chọn tên khác.` },
            { status: 409 }
          );
        }
      } catch {}

      // Kiểm tra trùng username trong usersData.json
      const isUserExistedInJson = users.some(
        (u: any) =>
          u.username?.toLowerCase() === cleanUsername ||
          (u.studentCode && u.studentCode.toLowerCase() === cleanUsername)
      );

      // Kiểm tra trùng username trong DB
      let isUserExistedInDb = false;
      try {
        const found = await prisma.user.findFirst({
          where: {
            OR: [
              { username: cleanUsername },
              { studentCode: internalCode }
            ]
          }
        });
        if (found) isUserExistedInDb = true;
      } catch {}

      if (isUserExistedInJson || isUserExistedInDb) {
        return NextResponse.json(
          { error: `Tên đăng nhập "${cleanUsername}" đã được sử dụng. Vui lòng chọn tên khác.` },
          { status: 409 }
        );
      }

      const newStudent = {
        id: `u-student-${Date.now()}`,
        role: "student",
        username: cleanUsername,
        studentCode: internalCode,
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

      // 1. Lưu vào Supabase Cloud
      try {
        await supabase.from("users").upsert({
          id: newStudent.id,
          username: newStudent.username,
          student_code: newStudent.studentCode,
          password_hash: newStudent.password,
          full_name: newStudent.fullName,
          role: "student",
          school_name: newStudent.schoolName,
          grade: newStudent.grade,
          school_class: newStudent.schoolClass,
          exp: newStudent.exp,
          coins: newStudent.coins,
          streak: newStudent.streak,
          created_at: newStudent.createdAt,
        });
      } catch (suErr) {
        console.warn("Supabase insert student warning:", suErr);
      }

      // 2. Lưu vào file JSON
      users.push(newStudent);
      saveUsers(users);

      // 3. Lưu vào Prisma DB
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
