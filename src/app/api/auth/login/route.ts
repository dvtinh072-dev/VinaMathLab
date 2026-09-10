import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { isUserDeleted } from "@/lib/deletedUsers";
import { supabase } from "@/lib/supabaseClient";

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

    // Nếu tài khoản đã bị xóa trên hệ thống, từ chối đăng nhập ngay lập tức
    if (isUserDeleted(loginKey)) {
      return NextResponse.json(
        { error: "Tài khoản này đã bị xóa khỏi hệ thống." },
        { status: 403 }
      );
    }

    let user: any = null;

    // 1. Xác thực qua Supabase Cloud Database (Ưu tiên số 1 - Đồng bộ đám mây cho cả di động & máy tính)
    try {
      if (role === "admin") {
        const { data: suUser, error } = await supabase
          .from("users")
          .select("*")
          .eq("role", "admin")
          .eq("password_hash", cleanPassword)
          .or(`username.ilike.${loginKey},email.ilike.${loginKey},id.eq.${loginKey}`)
          .maybeSingle();

        if (suUser && !error) {
          user = {
            id: suUser.id,
            username: suUser.username,
            studentCode: suUser.student_code,
            email: suUser.email,
            password: suUser.password_hash,
            fullName: suUser.full_name,
            role: suUser.role,
            schoolName: suUser.school_name,
            grade: suUser.grade,
            schoolClass: suUser.school_class,
            exp: suUser.exp,
            coins: suUser.coins,
            streak: suUser.streak,
            createdAt: suUser.created_at,
          };
        }
      } else {
        const { data: suUser, error } = await supabase
          .from("users")
          .select("*")
          .eq("role", "student")
          .eq("password_hash", cleanPassword)
          .or(`username.ilike.${loginKey},student_code.ilike.${loginKey},id.eq.${loginKey}`)
          .maybeSingle();

        if (suUser && !error) {
          user = {
            id: suUser.id,
            username: suUser.username,
            studentCode: suUser.student_code,
            email: suUser.email,
            password: suUser.password_hash,
            fullName: suUser.full_name,
            role: suUser.role,
            schoolName: suUser.school_name,
            grade: suUser.grade,
            schoolClass: suUser.school_class,
            exp: suUser.exp,
            coins: suUser.coins,
            streak: suUser.streak,
            createdAt: suUser.created_at,
          };
        }
      }
    } catch (supabaseErr) {
      console.warn("Supabase query warning, falling back to local database:", supabaseErr);
    }

    // 2. Thử xác thực từ Prisma DB nếu Supabase offline
    if (!user) {
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
    }

    // 3. Fallback sang file usersData.json nếu chưa tìm thấy trong DB
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

    // Kiểm tra chéo xem user này có nằm trong danh sách đã xóa không
    if (
      isUserDeleted(user.id) ||
      isUserDeleted(user.username) ||
      isUserDeleted(user.studentCode) ||
      isUserDeleted(user.email)
    ) {
      return NextResponse.json(
        { error: "Tài khoản này đã bị xóa khỏi hệ thống." },
        { status: 403 }
      );
    }

    // Đảm bảo user được lưu / cập nhật trên Supabase Cloud
    try {
      await supabase.from("users").upsert({
        id: user.id,
        username: user.username?.toLowerCase(),
        student_code: user.studentCode || null,
        email: user.email || null,
        password_hash: user.password || cleanPassword,
        full_name: user.fullName || user.username,
        role: user.role,
        school_name: user.schoolName || null,
        grade: user.grade || null,
        school_class: user.schoolClass || null,
        exp: user.exp || 0,
        coins: user.coins || 0,
        streak: user.streak || 1,
        last_login: new Date().toISOString(),
      }, { onConflict: "id" });
    } catch (suErr) {
      console.warn("Supabase upsert on login warning:", suErr);
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
