import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
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
    console.error("Lỗi lưu file usersData.json:", e);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      currentUsername,
      currentPassword,
      newUsername,
      newPassword,
      newFullName,
    } = body;

    const cleanCurrentUsername = (currentUsername || "").trim();
    const cleanCurrentPassword = (currentPassword || "").trim();
    const cleanNewUsername = (newUsername || "").trim();
    const cleanNewPassword = (newPassword || "").trim();
    const cleanNewFullName = (newFullName || "").trim();

    if (!cleanCurrentUsername || !cleanCurrentPassword) {
      return NextResponse.json(
        { error: "Vui lòng nhập tên đăng nhập và mật khẩu hiện tại để xác thực." },
        { status: 400 }
      );
    }

    if (!cleanNewUsername && !cleanNewPassword && !cleanNewFullName) {
      return NextResponse.json(
        { error: "Vui lòng nhập ít nhất một thông tin muốn thay đổi." },
        { status: 400 }
      );
    }

    if (cleanNewUsername && cleanNewUsername.length < 3) {
      return NextResponse.json(
        { error: "Tên đăng nhập mới phải có ít nhất 3 ký tự." },
        { status: 400 }
      );
    }

    if (cleanNewPassword && cleanNewPassword.length < 6) {
      return NextResponse.json(
        { error: "Mật khẩu mới phải có ít nhất 6 ký tự." },
        { status: 400 }
      );
    }

    // 1. Xác thực tài khoản Admin hiện tại
    let adminUser: any = null;

    // Kiểm tra trong DB Prisma
    try {
      adminUser = await prisma.user.findFirst({
        where: {
          role: "admin",
          password: cleanCurrentPassword,
          OR: [
            { username: cleanCurrentUsername },
            { username: cleanCurrentUsername.toLowerCase() },
            { email: cleanCurrentUsername },
            { id: cleanCurrentUsername },
          ],
        },
      });
    } catch (e) {
      console.warn("Prisma admin verify error:", e);
    }

    // Kiểm tra trong file JSON nếu DB chưa có
    const fallbackList = getFallbackUsers();
    if (!adminUser) {
      adminUser = fallbackList.find(
        (u) =>
          u.role === "admin" &&
          (u.username?.toLowerCase() === cleanCurrentUsername.toLowerCase() ||
            u.email?.toLowerCase() === cleanCurrentUsername.toLowerCase() ||
            u.id === cleanCurrentUsername) &&
          u.password === cleanCurrentPassword
      );
    }

    // Kiểm tra nếu là tài khoản admin mặc định khi chưa từng đổi
    if (!adminUser && cleanCurrentUsername.toLowerCase() === "admin" && cleanCurrentPassword === "admin123") {
      adminUser = {
        id: "u-admin-1",
        role: "admin",
        username: "admin",
        password: "admin123",
        fullName: "Quản Trị Viên VinaMath",
        email: "admin@vinamath.edu.vn",
      };
    }

    if (!adminUser) {
      return NextResponse.json(
        { error: "Mật khẩu hiện tại hoặc tên đăng nhập không chính xác." },
        { status: 401 }
      );
    }

    const updatedUsername = cleanNewUsername || adminUser.username;
    const updatedPassword = cleanNewPassword || adminUser.password;
    const updatedFullName = cleanNewFullName || adminUser.fullName || "Quản Trị Viên VinaMath";

    // 2. Kiểm tra nếu đổi username thì username mới đã bị trùng với tài khoản nào khác chưa
    if (cleanNewUsername && cleanNewUsername.toLowerCase() !== adminUser.username?.toLowerCase()) {
      // Check in DB
      try {
        const existedInDb = await prisma.user.findFirst({
          where: {
            username: cleanNewUsername,
            NOT: { id: adminUser.id },
          },
        });
        if (existedInDb) {
          return NextResponse.json(
            { error: `Tên đăng nhập "${cleanNewUsername}" đã được sử dụng. Vui lòng chọn tên khác.` },
            { status: 409 }
          );
        }
      } catch {}

      // Check in JSON
      const isExistedInJson = fallbackList.some(
        (u) =>
          u.id !== adminUser.id &&
          u.username?.toLowerCase() === cleanNewUsername.toLowerCase()
      );
      if (isExistedInJson) {
        return NextResponse.json(
          { error: `Tên đăng nhập "${cleanNewUsername}" đã được sử dụng. Vui lòng chọn tên khác.` },
          { status: 409 }
        );
      }
    }

    // 3. Cập nhật vào Supabase Cloud Database (Đồng bộ đa thiết bị)
    try {
      await supabase.from("users").upsert({
        id: adminUser.id,
        username: updatedUsername.toLowerCase(),
        password_hash: updatedPassword,
        full_name: updatedFullName,
        role: "admin",
        email: adminUser.email || `${updatedUsername}@vinamath.edu.vn`,
      });
    } catch (suErr) {
      console.warn("Supabase update admin credentials warning:", suErr);
    }

    // 3b. Cập nhật vào DB Prisma
    try {
      await prisma.user.upsert({
        where: { id: adminUser.id },
        update: {
          username: updatedUsername,
          password: updatedPassword,
          fullName: updatedFullName,
        },
        create: {
          id: adminUser.id,
          role: "admin",
          username: updatedUsername,
          password: updatedPassword,
          fullName: updatedFullName,
          email: adminUser.email || `${updatedUsername}@vinamath.edu.vn`,
        },
      });
    } catch (dbErr) {
      console.warn("Prisma update admin credentials warning:", dbErr);
    }

    // 4. Cập nhật vào file usersData.json
    let foundInJson = false;
    const updatedFallback = fallbackList.map((u) => {
      if (
        u.id === adminUser.id ||
        (u.role === "admin" && u.username?.toLowerCase() === cleanCurrentUsername.toLowerCase())
      ) {
        foundInJson = true;
        return {
          ...u,
          username: updatedUsername,
          password: updatedPassword,
          fullName: updatedFullName,
        };
      }
      return u;
    });

    if (!foundInJson) {
      updatedFallback.unshift({
        id: adminUser.id || `u-admin-${Date.now()}`,
        role: "admin",
        username: updatedUsername,
        password: updatedPassword,
        fullName: updatedFullName,
        email: adminUser.email || `${updatedUsername}@vinamath.edu.vn`,
        createdAt: new Date().toISOString(),
      });
    }

    saveFallbackUsers(updatedFallback);

    const updatedUser = {
      id: adminUser.id,
      role: "admin",
      username: updatedUsername,
      fullName: updatedFullName,
      email: adminUser.email || `${updatedUsername}@vinamath.edu.vn`,
    };

    return NextResponse.json({
      success: true,
      message: "Cập nhật tài khoản quản trị viên thành công!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Change credentials error:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi máy chủ trong quá trình cập nhật thông tin." },
      { status: 500 }
    );
  }
}
