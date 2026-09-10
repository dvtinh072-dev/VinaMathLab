import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { isUserDeleted } from "@/lib/deletedUsers";
import { supabase } from "@/lib/supabaseClient";

const usersFilePath = path.join(process.cwd(), "src/data/usersData.json");

function getFallbackUsers(): any[] {
  try {
    if (!fs.existsSync(usersFilePath)) return [];
    const data = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveFallbackUsers(users: any[]) {
  try {
    const dir = path.dirname(usersFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
  } catch (e) {
    console.error("Lỗi lưu usersData.json:", e);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { users } = body;

    if (!users || !Array.isArray(users) || users.length === 0) {
      return NextResponse.json({ success: true, message: "Không có tài khoản nào cần đồng bộ.", syncedCount: 0 });
    }

    const fallbackUsers = getFallbackUsers();
    let syncedCount = 0;

    for (const u of users) {
      if (!u) continue;
      const rawUsername = (u.username || u.studentCode || u.id || "").trim();
      const loginKey = rawUsername.toLowerCase();
      if (!loginKey) continue;

      if (isUserDeleted(loginKey) || isUserDeleted(u.id) || isUserDeleted(u.studentCode)) {
        continue;
      }

      const role = u.role === "admin" ? "admin" : u.role === "teacher" ? "teacher" : "student";
      const cleanPassword = (u.password || u.password_hash || "").trim();
      const fullName = (u.fullName || u.full_name || rawUsername).trim();
      const studentCode = u.studentCode || u.student_code || (role === "student" ? rawUsername.toUpperCase() : null);
      const email = u.email || (role === "admin" ? `${loginKey}@vinamath.edu.vn` : role === "teacher" ? `${loginKey}@vinamath.edu.vn` : null);
      const schoolName = u.schoolName || u.school_name || "THCS VinaMath";
      const grade = u.grade || "Khối 6";
      const schoolClass = u.schoolClass || u.school_class || (role === "teacher" ? "Lớp 6A4" : "Lớp 6A");
      const exp = Number(u.exp) || 0;
      const coins = Number(u.coins) || 0;
      const streak = Number(u.streak) || 1;
      const id = u.id || (role === "admin" ? `u-admin-${Date.now()}` : role === "teacher" ? `u-teacher-${Date.now()}` : `u-student-${Date.now()}`);

      // 1. Đồng bộ lên Supabase Cloud Database
      try {
        const queryFilter = studentCode
          ? `id.eq.${id},username.ilike.${loginKey},student_code.ilike.${studentCode}`
          : `id.eq.${id},username.ilike.${loginKey}`;

        const { data: existingUser } = await supabase
          .from("users")
          .select("*")
          .or(queryFilter)
          .maybeSingle();

        if (existingUser) {
          const bestExp = Math.max(existingUser.exp || 0, exp);
          const bestCoins = Math.max(existingUser.coins || 0, coins);
          const bestStreak = Math.max(existingUser.streak || 1, streak);

          const updatePayload: any = {
            full_name: fullName || existingUser.full_name,
            school_name: schoolName || existingUser.school_name,
            grade: grade || existingUser.grade,
            school_class: schoolClass || existingUser.school_class,
            exp: bestExp,
            coins: bestCoins,
            streak: bestStreak,
          };

          if (cleanPassword && (!existingUser.password_hash || existingUser.password_hash === "123456")) {
            updatePayload.password_hash = cleanPassword;
          }

          await supabase
            .from("users")
            .update(updatePayload)
            .eq("id", existingUser.id);
        } else {
          await supabase.from("users").insert({
            id,
            username: loginKey,
            student_code: studentCode,
            email,
            password_hash: cleanPassword || "123456",
            full_name: fullName,
            role,
            school_name: schoolName,
            grade,
            school_class: schoolClass,
            exp,
            coins,
            streak,
            created_at: u.createdAt || new Date().toISOString(),
          });
        }
        syncedCount++;
      } catch (suErr) {
        console.warn("Lỗi sync user lên Supabase:", suErr);
      }

      // 2. Đồng bộ vào file usersData.json
      const existingIdx = fallbackUsers.findIndex(
        (fu: any) =>
          fu.id === id ||
          fu.username?.toLowerCase() === loginKey ||
          (studentCode && fu.studentCode?.toUpperCase() === studentCode.toUpperCase())
      );

      if (existingIdx !== -1) {
        fallbackUsers[existingIdx] = {
          ...fallbackUsers[existingIdx],
          fullName: fullName || fallbackUsers[existingIdx].fullName,
          password: cleanPassword || fallbackUsers[existingIdx].password,
          exp: Math.max(fallbackUsers[existingIdx].exp || 0, exp),
          coins: Math.max(fallbackUsers[existingIdx].coins || 0, coins),
          streak: Math.max(fallbackUsers[existingIdx].streak || 1, streak),
        };
      } else {
        fallbackUsers.push({
          id,
          role,
          username: loginKey,
          studentCode,
          password: cleanPassword || "123456",
          fullName,
          schoolName,
          grade,
          schoolClass,
          exp,
          coins,
          streak,
          email,
          createdAt: u.createdAt || new Date().toISOString(),
        });
      }

      // 3. Đồng bộ vào SQLite Prisma DB
      try {
        await prisma.user.upsert({
          where: { id },
          update: {
            fullName,
            password: cleanPassword || undefined,
            exp: { set: exp },
            coins: { set: coins },
            streak: { set: streak },
          },
          create: {
            id,
            role,
            username: loginKey,
            studentCode,
            email,
            password: cleanPassword || "123456",
            fullName,
            grade,
            schoolClass,
            exp,
            coins,
            streak,
          },
        });
      } catch {}
    }

    saveFallbackUsers(fallbackUsers);

    return NextResponse.json({
      success: true,
      message: `Đã đồng bộ ${syncedCount} tài khoản lên Cloud thành công.`,
      syncedCount,
    });
  } catch (error) {
    console.error("Sync local users error:", error);
    return NextResponse.json({ error: "Lỗi đồng bộ tài khoản cục bộ." }, { status: 500 });
  }
}
