import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { getDeletedIdentifiers, addDeletedIdentifiers } from "@/lib/deletedUsers";
import { supabase } from "@/lib/supabaseClient";
import { parseAssignedClasses } from "@/lib/teacherClassUtils";

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
    const deletedSet = getDeletedIdentifiers();
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

    // 1b. Thử lấy từ Supabase Cloud Database (Đồng bộ đa thiết bị)
    let suUsers: any[] = [];
    try {
      const { data } = await supabase.from("users").select("*");
      if (data) {
        suUsers = data.map((u: any) => ({
          id: u.id,
          username: u.username,
          studentCode: u.student_code,
          email: u.email,
          fullName: u.full_name,
          role: u.role,
          schoolName: u.school_name,
          grade: u.grade,
          schoolClass: u.school_class,
          exp: u.exp,
          coins: u.coins,
          streak: u.streak,
          createdAt: u.created_at,
        }));
      }
    } catch (suErr) {
      console.warn("Supabase users query warning:", suErr);
    }

    // 2. Gộp danh sách người dùng từ cả DB và usersData.json để không bị mất bất kỳ tài khoản nào
    const userMap = new Map<string, any>();

    // Đưa users từ file JSON vào trước (loại trừ tài khoản đã bị xóa)
    fallbackUsers.forEach((u: any) => {
      const idKey = u.id?.toLowerCase();
      const usernameKey = u.username?.toLowerCase();
      const codeKey = u.studentCode?.toLowerCase();

      if (
        (idKey && deletedSet.has(idKey)) ||
        (usernameKey && deletedSet.has(usernameKey)) ||
        (codeKey && deletedSet.has(codeKey))
      ) {
        return; // Bỏ qua tài khoản đã xóa
      }

      const { password, ...safeUser } = u;
      const key = u.id || usernameKey || u.studentCode;
      if (key) {
        userMap.set(key, safeUser);
      }
    });

    // Đưa users từ DB vào (ghi đè hoặc bổ sung, loại trừ tài khoản đã bị xóa)
    dbUsers.forEach((u: any) => {
      const idKey = u.id?.toLowerCase();
      const usernameKey = u.username?.toLowerCase();
      const codeKey = u.studentCode?.toLowerCase();

      if (
        (idKey && deletedSet.has(idKey)) ||
        (usernameKey && deletedSet.has(usernameKey)) ||
        (codeKey && deletedSet.has(codeKey))
      ) {
        return; // Bỏ qua tài khoản đã xóa
      }

      const key = u.id || usernameKey || u.studentCode;
      if (key) {
        const existing = userMap.get(key);
        userMap.set(key, { ...existing, ...u });
      }
    });

    // Đưa users từ Supabase Cloud vào (ưu tiên số sao/exp cao nhất)
    suUsers.forEach((u: any) => {
      const idKey = u.id?.toLowerCase();
      const usernameKey = u.username?.toLowerCase();
      const codeKey = u.studentCode?.toLowerCase();

      if (
        (idKey && deletedSet.has(idKey)) ||
        (usernameKey && deletedSet.has(usernameKey)) ||
        (codeKey && deletedSet.has(codeKey))
      ) {
        return;
      }

      const key = u.id || usernameKey || u.studentCode;
      if (key) {
        const existing = userMap.get(key);
        const bestExp = Math.max(existing?.exp || 0, u.exp || 0);
        const bestCoins = Math.max(existing?.coins || 0, u.coins || 0);
        const bestStreak = Math.max(existing?.streak || 1, u.streak || 1);
        userMap.set(key, { ...existing, ...u, exp: bestExp, coins: bestCoins, streak: bestStreak });
      }
    });

    const mergedUsers = Array.from(userMap.values()).map((u: any) => {
      if (u.role === "teacher") {
        return {
          ...u,
          assignedClasses: parseAssignedClasses(u.assignedClasses || u.schoolClass || u.school_class),
        };
      }
      return u;
    });
    return NextResponse.json({ success: true, users: mergedUsers });
  } catch (error) {
    console.error("Fetch users error:", error);
    return NextResponse.json({ error: "Lỗi tải danh sách người dùng." }, { status: 500 });
  }
}

// Tạo tài khoản mới (Ví dụ: Thêm Giáo Viên do Admin phân quyền)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, username, password, schoolName, role = "teacher", assignedClasses = [], schoolClass, grade } = body;
    const cleanUsername = (username || "").trim().toLowerCase();
    const cleanPassword = (password || "").trim();
    const cleanFullName = (fullName || cleanUsername).trim();

    if (!cleanUsername || !cleanPassword) {
      return NextResponse.json({ error: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu." }, { status: 400 });
    }

    const assignedClassStr = Array.isArray(assignedClasses) && assignedClasses.length > 0
      ? assignedClasses.join(", ")
      : (schoolClass || "");

    const newId = `u-${role}-${Date.now()}`;
    const newUser: any = {
      id: newId,
      username: cleanUsername,
      password: cleanPassword,
      fullName: cleanFullName,
      role: role,
      schoolName: schoolName || "THCS VinaMath",
      grade: grade || (role === "teacher" ? "Giáo Viên" : "Khối 6"),
      schoolClass: assignedClassStr,
      assignedClasses: Array.isArray(assignedClasses) && assignedClasses.length > 0 ? assignedClasses : parseAssignedClasses(assignedClassStr),
      email: `${cleanUsername}@vinamath.edu.vn`,
      exp: 0,
      coins: 100,
      streak: 1,
      createdAt: new Date().toISOString(),
    };

    // 1. Lưu vào Supabase Cloud
    try {
      await supabase.from("users").upsert({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        password_hash: cleanPassword,
        full_name: newUser.fullName,
        role: newUser.role,
        school_name: newUser.schoolName,
        grade: newUser.grade,
        school_class: newUser.schoolClass,
        exp: newUser.exp,
        coins: newUser.coins,
        streak: newUser.streak,
        created_at: newUser.createdAt,
      }, { onConflict: "username" });
    } catch (suErr) {
      console.warn("Supabase upsert teacher warning:", suErr);
    }

    // 2. Lưu vào Prisma DB nếu có
    try {
      await prisma.user.upsert({
        where: { username: cleanUsername },
        update: {
          fullName: cleanFullName,
          password: cleanPassword,
          role: role,
          schoolClass: assignedClassStr,
        },
        create: {
          id: newId,
          username: cleanUsername,
          password: cleanPassword,
          fullName: cleanFullName,
          role: role,
          schoolClass: assignedClassStr,
          grade: newUser.grade,
        }
      });
    } catch (dbErr) {
      console.warn("Prisma upsert teacher warning:", dbErr);
    }

    // 3. Lưu vào usersData.json
    try {
      const fallbackUsers = getFallbackUsers();
      const existingIdx = fallbackUsers.findIndex((u: any) => u.username?.toLowerCase() === cleanUsername);
      if (existingIdx >= 0) {
        fallbackUsers[existingIdx] = { ...fallbackUsers[existingIdx], ...newUser };
      } else {
        fallbackUsers.unshift(newUser);
      }
      fs.writeFileSync(usersFilePath, JSON.stringify(fallbackUsers, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Lỗi ghi usersData.json:", fsErr);
    }

    const { password: _, ...safeUser } = newUser;
    return NextResponse.json({ success: true, user: safeUser, message: "Tạo tài khoản thành công." });
  } catch (error) {
    console.error("Create user error:", error);
    return NextResponse.json({ error: "Lỗi máy chủ khi tạo tài khoản." }, { status: 500 });
  }
}

// Cập nhật tài khoản (Admin sửa phân công lớp, đổi mật khẩu giáo viên)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, username, fullName, schoolName, assignedClasses, schoolClass, password } = body;
    const cleanUsername = (username || "").trim().toLowerCase();

    const assignedClassStr = Array.isArray(assignedClasses)
      ? assignedClasses.join(", ")
      : schoolClass !== undefined ? schoolClass : undefined;

    // 1. Cập nhật Supabase Cloud
    try {
      const updateData: any = {};
      if (fullName) updateData.full_name = fullName.trim();
      if (schoolName) updateData.school_name = schoolName.trim();
      if (assignedClassStr !== undefined) updateData.school_class = assignedClassStr;
      if (password && password.trim()) updateData.password_hash = password.trim();

      if (id) {
        await supabase.from("users").update(updateData).eq("id", id);
      } else if (cleanUsername) {
        await supabase.from("users").update(updateData).eq("username", cleanUsername);
      }
    } catch (suErr) {
      console.warn("Supabase update teacher warning:", suErr);
    }

    // 2. Cập nhật Prisma DB
    try {
      const dbUpdate: any = {};
      if (fullName) dbUpdate.fullName = fullName.trim();
      if (assignedClassStr !== undefined) dbUpdate.schoolClass = assignedClassStr;
      if (password && password.trim()) dbUpdate.password = password.trim();

      if (id) {
        await prisma.user.updateMany({ where: { id }, data: dbUpdate });
      } else if (cleanUsername) {
        await prisma.user.updateMany({ where: { username: cleanUsername }, data: dbUpdate });
      }
    } catch (dbErr) {}

    // 3. Cập nhật usersData.json
    try {
      const fallbackUsers = getFallbackUsers();
      const idx = fallbackUsers.findIndex(
        (u: any) => (id && u.id === id) || (cleanUsername && u.username?.toLowerCase() === cleanUsername)
      );
      if (idx >= 0) {
        if (fullName) fallbackUsers[idx].fullName = fullName.trim();
        if (schoolName) fallbackUsers[idx].schoolName = schoolName.trim();
        if (assignedClassStr !== undefined) {
          fallbackUsers[idx].schoolClass = assignedClassStr;
          fallbackUsers[idx].assignedClasses = parseAssignedClasses(assignedClassStr);
        }
        if (password && password.trim()) fallbackUsers[idx].password = password.trim();
        fs.writeFileSync(usersFilePath, JSON.stringify(fallbackUsers, null, 2), "utf-8");
      }
    } catch (fsErr) {}

    return NextResponse.json({ success: true, message: "Cập nhật tài khoản và phân quyền thành công." });
  } catch (error) {
    console.error("Update user error:", error);
    return NextResponse.json({ error: "Lỗi máy chủ khi cập nhật tài khoản." }, { status: 500 });
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

    const cleanUserId = userId.trim();
    const lowerUserId = cleanUserId.toLowerCase();

    // Bảo vệ không cho xóa các tài khoản mặc định của hệ thống
    const defaultProtectedUsers = ["admin", "u-admin-1", "dvtinh072", "u-admin-dvtinh072", "gv_toan6", "u-teacher-toan6", "gv_toan10", "u-teacher-toan10"];
    if (defaultProtectedUsers.includes(lowerUserId)) {
      return NextResponse.json(
        { error: "Không thể xóa tài khoản mặc định của hệ thống." },
        { status: 403 }
      );
    }

    // 0. Tìm thông tin chi tiết user (để thu thập mọi identifiers: id, username, studentCode, email)
    const identifiersToDelete = new Set<string>([cleanUserId]);

    // Tìm trong file usersData.json
    try {
      if (fs.existsSync(usersFilePath)) {
        const fileContent = fs.readFileSync(usersFilePath, "utf-8");
        const list = JSON.parse(fileContent);
        const match = list.find(
          (u: any) =>
            u.id === cleanUserId ||
            u.username?.toLowerCase() === cleanUserId.toLowerCase() ||
            u.studentCode?.toLowerCase() === cleanUserId.toLowerCase()
        );
        if (match) {
          if (match.id) identifiersToDelete.add(match.id);
          if (match.username) identifiersToDelete.add(match.username);
          if (match.studentCode) identifiersToDelete.add(match.studentCode);
          if (match.email) identifiersToDelete.add(match.email);
        }
      }
    } catch {}

    // Tìm trong Prisma DB
    try {
      const dbMatch = await prisma.user.findFirst({
        where: {
          OR: [
            { id: cleanUserId },
            { username: cleanUserId },
            { studentCode: cleanUserId },
            { email: cleanUserId }
          ]
        }
      });
      if (dbMatch) {
        if (dbMatch.id) identifiersToDelete.add(dbMatch.id);
        if (dbMatch.username) identifiersToDelete.add(dbMatch.username);
        if (dbMatch.studentCode) identifiersToDelete.add(dbMatch.studentCode);
        if (dbMatch.email) identifiersToDelete.add(dbMatch.email);
      }
    } catch {}

    // 1b. Xóa khỏi Supabase Cloud Database (Đồng bộ đa thiết bị)
    try {
      const idArr = Array.from(identifiersToDelete);
      for (const val of idArr) {
        await supabase.from("users").delete().or(`id.eq.${val},username.eq.${val.toLowerCase()},student_code.ilike.${val}`);
        await supabase.from("student_progress").delete().or(`id.eq.${val},user_id.eq.${val},username.eq.${val.toLowerCase()}`);
      }
    } catch (suErr) {
      console.warn("Supabase user delete warning:", suErr);
    }

    // 2. Xóa khỏi Prisma DB nếu tồn tại
    try {
      await prisma.user.deleteMany({
        where: {
          OR: [
            { id: cleanUserId },
            { username: cleanUserId },
            { studentCode: cleanUserId }
          ]
        }
      });
    } catch (dbErr) {
      console.warn("Prisma user delete warning:", dbErr);
    }

    // 3. Xóa khỏi file usersData.json
    try {
      if (fs.existsSync(usersFilePath)) {
        const fileContent = fs.readFileSync(usersFilePath, "utf-8");
        const list = JSON.parse(fileContent);
        const filtered = list.filter((u: any) => {
          const uId = u.id?.toLowerCase();
          const uName = u.username?.toLowerCase();
          const uCode = u.studentCode?.toLowerCase();
          return (
            !identifiersToDelete.has(u.id) &&
            !identifiersToDelete.has(u.username) &&
            !identifiersToDelete.has(u.studentCode) &&
            (!uId || !identifiersToDelete.has(uId)) &&
            (!uName || !identifiersToDelete.has(uName)) &&
            (!uCode || !identifiersToDelete.has(uCode))
          );
        });
        fs.writeFileSync(usersFilePath, JSON.stringify(filtered, null, 2), "utf-8");
      }
    } catch (fsErr) {
      console.error("Lỗi xóa user khỏi usersData.json:", fsErr);
    }

    // 4. Xóa tiến độ học tập liên quan trong studentProgressData.json
    try {
      const progressPath = path.join(process.cwd(), "src/data/studentProgressData.json");
      if (fs.existsSync(progressPath)) {
        const progContent = fs.readFileSync(progressPath, "utf-8");
        const progStore = JSON.parse(progContent);
        let changed = false;
        Object.keys(progStore).forEach((key) => {
          const item = progStore[key];
          const kLower = key.toLowerCase();
          const isTarget =
            identifiersToDelete.has(key) ||
            identifiersToDelete.has(kLower) ||
            (item?.userId && identifiersToDelete.has(item.userId)) ||
            (item?.studentCode && identifiersToDelete.has(item.studentCode)) ||
            (item?.username && identifiersToDelete.has(item.username));

          if (isTarget) {
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

    return NextResponse.json({
      success: true,
      message: "Đã xóa thành viên thành công.",
      deletedIdentifiers: Array.from(identifiersToDelete)
    });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json({ error: "Lỗi máy chủ khi xóa thành viên." }, { status: 500 });
  }
}


