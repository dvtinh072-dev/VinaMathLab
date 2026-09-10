"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getLocalStudentProgress, saveLocalStudentProgressUpdate, getLocalProgressStore } from "@/lib/studentProgressClient";

export interface UserProfile {
  id: string;
  role: "student" | "admin";
  fullName: string;
  schoolName?: string;
  studentCode?: string;
  username?: string;
  email?: string;
  grade?: string;
  schoolClass?: string;
  exp?: number;
  coins?: number;
  streak?: number;
  createdAt?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  role: "guest" | "student" | "admin";
  isAdmin: boolean;
  isStudent: boolean;
  isLoading: boolean;
  loginStudent: (identifier: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  loginAdmin: (username: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  registerStudent: (data: {
    fullName: string;
    schoolName?: string;
    username?: string;
    studentCode?: string;
    password: string;
    grade?: string;
    schoolClass?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  registerAdmin: (data: {
    fullName: string;
    username: string;
    email?: string;
    password: string;
    adminSecret: string;
  }) => Promise<{ success: boolean; error?: string }>;
  updateAdminCredentials: (data: {
    currentUsername: string;
    currentPassword: string;
    newUsername?: string;
    newPassword?: string;
    newFullName?: string;
  }) => Promise<{ success: boolean; error?: string; message?: string }>;
  logout: () => void;
  addExpAndCoins: (earnedExp: number, earnedCoins: number, currentStreak?: number) => Promise<void>;
  refreshProfile: () => Promise<void>;
  isAuthModalOpen: boolean;
  authModalConfig: { defaultRole: "student" | "admin"; defaultTab: "login" | "register" };
  openAuthModal: (defaultRole?: "student" | "admin", defaultTab?: "login" | "register") => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalConfig, setAuthModalConfig] = useState<{
    defaultRole: "student" | "admin";
    defaultTab: "login" | "register";
  }>({
    defaultRole: "student",
    defaultTab: "login",
  });

  // Hàm làm mới hồ sơ từ Cloud Database (Supabase)
  const refreshProfile = async (currentUser?: UserProfile | null) => {
    const targetUser = currentUser !== undefined ? currentUser : user;
    if (!targetUser || targetUser.role !== "student") return;

    const identifier = targetUser.id || targetUser.studentCode || targetUser.username || "";
    if (!identifier) return;

    try {
      const res = await fetch(`/api/student/progress?userId=${encodeURIComponent(identifier)}`);
      const data = await res.json();
      if (data.success) {
        const p = data.progress;
        const prof = data.profile;

        const bestExp = Math.max(targetUser.exp || 0, p?.exp || 0, prof?.exp || 0);
        const bestCoins = Math.max(targetUser.coins || 0, p?.coins || 0, prof?.coins || 0);
        const bestStreak = Math.max(targetUser.streak || 1, p?.streak || 1, prof?.streak || 1);

        const updated: UserProfile = {
          ...targetUser,
          fullName: prof?.fullName || targetUser.fullName,
          schoolName: prof?.schoolName || targetUser.schoolName,
          schoolClass: prof?.schoolClass || targetUser.schoolClass,
          grade: prof?.grade || targetUser.grade,
          exp: bestExp,
          coins: bestCoins,
          streak: bestStreak,
        };

        saveUserSession(updated);

        // Lưu progress cloud về localStorage của thiết bị này để dùng offline
        if (p) {
          saveLocalStudentProgressUpdate({
            userId: updated.id,
            studentCode: updated.studentCode,
            username: updated.username,
            fullName: updated.fullName,
            schoolName: updated.schoolName,
            schoolClass: updated.schoolClass,
            totalExp: bestExp,
            coins: bestCoins,
            streak: bestStreak,
            totalQuestions: 10,
          });

          // Cập nhật câu đã giải (solvedQuestions) vào localStorage thiết bị này
          if (p.solvedQuestions && typeof window !== "undefined") {
            const clean = identifier.trim().toLowerCase();
            localStorage.setItem(`vinamath_solved_questions_${clean}`, JSON.stringify(p.solvedQuestions));
          }
        }
      }
    } catch (err) {
      console.warn("Cloud sync on refresh warning:", err);
    }
  };

  // Tải trạng thái đăng nhập từ localStorage và đồng bộ ngay với Cloud khi khởi động
  useEffect(() => {
    try {
      // 1. Tự động đẩy tất cả tài khoản lưu trên trình duyệt này lên Supabase Cloud (cho phép trình duyệt khác đăng nhập ngay)
      const localUsers = getLocalRegisteredUsers();
      const saved = localStorage.getItem("vinamath_auth_user");
      const usersToSync = [...localUsers];
      if (saved) {
        try {
          const parsedAuth = JSON.parse(saved);
          if (
            parsedAuth &&
            !usersToSync.some(
              (u) =>
                u.id === parsedAuth.id ||
                (parsedAuth.username && u.username?.toLowerCase() === parsedAuth.username.toLowerCase())
            )
          ) {
            usersToSync.push(parsedAuth);
          }
        } catch {}
      }

      if (usersToSync.length > 0) {
        fetch("/api/auth/sync-local-users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ users: usersToSync }),
        }).catch((err) => console.warn("Auto sync local users error:", err));
      }

      // 1b. Tự động đẩy toàn bộ tiến độ học tập cục bộ lên Supabase Cloud
      try {
        const localProgStore = getLocalProgressStore();
        Object.values(localProgStore).forEach((p) => {
          if (p && (p.userId || p.studentCode || p.username)) {
            fetch("/api/student/progress", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(p),
            }).catch(() => {});
          }
        });
      } catch {}

      // 2. Kéo danh sách tài khoản từ Supabase Cloud về localStorage để luôn có dữ liệu đa nền tảng
      fetch("/api/auth/users")
        .then((res) => res.json())
        .then((data) => {
          if (data.success && Array.isArray(data.users)) {
            const currentLocal = getLocalRegisteredUsers();
            const mergedMap = new Map<string, any>();
            currentLocal.forEach((u) => {
              const k = (u.id || u.username || "").toLowerCase();
              if (k) mergedMap.set(k, u);
            });
            data.users.forEach((su: any) => {
              const k = (su.id || su.username || "").toLowerCase();
              if (k) {
                const existing = mergedMap.get(k);
                mergedMap.set(k, { ...existing, ...su });
              }
            });
            localStorage.setItem(
              "vinamath_local_registered_users",
              JSON.stringify(Array.from(mergedMap.values()))
            );
          }
        })
        .catch(() => {});

      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.role === "student") {
          const localMatched = localUsers.find(
            (u) =>
              u.id === parsed.id ||
              (parsed.username && u.username?.toLowerCase() === parsed.username.toLowerCase()) ||
              (parsed.studentCode && u.studentCode?.toUpperCase() === parsed.studentCode.toUpperCase())
          );
          const localProg =
            getLocalStudentProgress(parsed.id) ||
            getLocalStudentProgress(parsed.username) ||
            getLocalStudentProgress(parsed.studentCode);

          const bestExp = Math.max(parsed.exp || 0, localMatched?.exp || 0, (localProg as any)?.exp || 0);
          const bestCoins = Math.max(parsed.coins || 0, localMatched?.coins || 0, (localProg as any)?.coins || 0);
          const bestStreak = Math.max(parsed.streak || 1, localMatched?.streak || 1, (localProg as any)?.streak || 1);

          parsed.exp = bestExp;
          parsed.coins = bestCoins;
          parsed.streak = bestStreak;

          setUser(parsed);
          // Tự động tải dữ liệu mới nhất từ Supabase Cloud để đồng bộ điểm số đã làm ở thiết bị khác
          refreshProfile(parsed);
        } else {
          setUser(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load user from localStorage", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getLocalRegisteredUsers = (): any[] => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("vinamath_local_registered_users");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveLocalRegisteredUser = (userData: any) => {
    if (typeof window === "undefined") return;
    try {
      const users = getLocalRegisteredUsers();
      // Loại bỏ bản ghi cũ nếu trùng id hoặc username
      const filtered = users.filter(
        (u) =>
          u.id !== userData.id &&
          u.username?.toLowerCase() !== userData.username?.toLowerCase() &&
          (!userData.studentCode || u.studentCode !== userData.studentCode)
      );
      filtered.unshift(userData);
      localStorage.setItem("vinamath_local_registered_users", JSON.stringify(filtered));
    } catch (e) {
      console.error("Failed to save local registered user", e);
    }
  };

  const saveUserSession = (newUser: UserProfile | null) => {
    setUser(newUser);
    if (typeof window !== "undefined") {
      if (newUser) {
        localStorage.setItem("vinamath_auth_user", JSON.stringify(newUser));
      } else {
        localStorage.removeItem("vinamath_auth_user");
      }
    }
  };

  const isIdentifierDeletedLocally = (id: string) => {
    if (typeof window === "undefined") return false;
    try {
      const raw = localStorage.getItem("vinamath_deleted_user_ids");
      if (!raw) return false;
      const list: string[] = JSON.parse(raw);
      const clean = id.trim().toLowerCase();
      return list.some((item) => String(item).toLowerCase() === clean);
    } catch {
      return false;
    }
  };

  const loginStudent = async (identifier: string, pass: string) => {
    const cleanIdentifier = identifier.trim();
    const cleanPass = pass.trim();

    if (isIdentifierDeletedLocally(cleanIdentifier)) {
      return { success: false, error: "Tài khoản này đã bị xóa khỏi hệ thống." };
    }

    const localUsers = getLocalRegisteredUsers();
    const localMatched = localUsers.find(
      (u) =>
        u.role === "student" &&
        (u.username?.toLowerCase() === cleanIdentifier.toLowerCase() ||
          u.studentCode?.toUpperCase() === cleanIdentifier.toUpperCase() ||
          u.id === cleanIdentifier) &&
        u.password === cleanPass
    );
    const localProg = getLocalStudentProgress(cleanIdentifier);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "student",
          identifier: cleanIdentifier,
          studentCode: cleanIdentifier,
          username: cleanIdentifier,
          password: cleanPass,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        // Hợp nhất dữ liệu học sinh với số sao EXP, coins, streak cao nhất từ client để không bao giờ bị mất điểm
        const sUser = data.user;
        const highestExp = Math.max(
          sUser.exp || 0,
          localMatched?.exp || 0,
          (localProg as any)?.exp || 0
        );
        const highestCoins = Math.max(
          sUser.coins || 0,
          localMatched?.coins || 0,
          (localProg as any)?.coins || 0
        );
        const highestStreak = Math.max(
          sUser.streak || 1,
          localMatched?.streak || 1,
          (localProg as any)?.streak || 1
        );

        const mergedUser: UserProfile = {
          ...sUser,
          exp: highestExp,
          coins: highestCoins,
          streak: highestStreak,
        };

        saveUserSession(mergedUser);

        saveLocalRegisteredUser({
          ...(localMatched || {}),
          ...mergedUser,
          password: cleanPass,
        });

        saveLocalStudentProgressUpdate({
          userId: mergedUser.id,
          studentCode: mergedUser.studentCode,
          username: mergedUser.username,
          fullName: mergedUser.fullName,
          schoolName: mergedUser.schoolName,
          schoolClass: mergedUser.schoolClass,
          totalExp: highestExp,
          coins: highestCoins,
          streak: highestStreak,
        });

        // Nếu máy chủ chưa kịp cập nhật điểm tích lũy trước đó, gửi đồng bộ ngay lập tức
        if (highestExp > (sUser.exp || 0)) {
          fetch("/api/auth/update-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              studentId: mergedUser.id || mergedUser.studentCode,
              username: mergedUser.username,
              earnedExp: highestExp - (sUser.exp || 0),
              earnedCoins: Math.max(0, highestCoins - (sUser.coins || 0)),
              streak: highestStreak,
            }),
          }).catch(() => {});
        }

        return { success: true };
      }
      if (data.error && data.error.includes("đã bị xóa")) {
        return { success: false, error: data.error };
      }
    } catch (e) {
      console.warn("Server login request failed, trying local fallback...", e);
    }

    // Fallback: Kiểm tra trong bộ nhớ cục bộ (localStorage)
    if (localMatched) {
      if (
        isIdentifierDeletedLocally(localMatched.id) ||
        isIdentifierDeletedLocally(localMatched.username || "") ||
        isIdentifierDeletedLocally(localMatched.studentCode || "")
      ) {
        return { success: false, error: "Tài khoản này đã bị xóa khỏi hệ thống." };
      }
      const highestExp = Math.max(localMatched.exp || 0, (localProg as any)?.exp || 0);
      const highestCoins = Math.max(localMatched.coins || 0, (localProg as any)?.coins || 0);
      const highestStreak = Math.max(localMatched.streak || 1, (localProg as any)?.streak || 1);

      const { password: _, ...safeUser } = localMatched;
      safeUser.exp = highestExp;
      safeUser.coins = highestCoins;
      safeUser.streak = highestStreak;

      saveUserSession(safeUser);

      // Đẩy ngay tài khoản này lên Supabase Cloud để các thiết bị khác cũng đăng nhập được
      fetch("/api/auth/sync-local-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users: [localMatched] }),
      }).catch(() => {});

      return { success: true };
    }

    return {
      success: false,
      error: "Tên đăng nhập hoặc mật khẩu không chính xác.",
    };
  };

  const loginAdmin = async (username: string, pass: string) => {
    const cleanUsername = username.trim();
    const cleanPass = pass.trim();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "admin", username: cleanUsername, password: cleanPass }),
      });

      if (res.ok) {
        const data = await res.json();
        saveUserSession(data.user);
        return { success: true };
      }
    } catch (e) {
      console.warn("Server admin login failed, trying fallback...", e);
    }

    // Fallback local admin check
    const localUsers = getLocalRegisteredUsers();
    const matched = localUsers.find(
      (u) =>
        u.role === "admin" &&
        (u.username?.toLowerCase() === cleanUsername.toLowerCase() ||
          u.email?.toLowerCase() === cleanUsername.toLowerCase()) &&
        u.password === cleanPass
    );

    if (matched) {
      const { password: _, ...safeUser } = matched;
      saveUserSession(safeUser);

      // Đẩy ngay tài khoản admin này lên Supabase Cloud để các thiết bị khác cũng đăng nhập được
      fetch("/api/auth/sync-local-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users: [matched] }),
      }).catch(() => {});

      return { success: true };
    }

    // Check if an admin was already updated or created in local storage
    const hasCustomAdmin = localUsers.some((u) => u.role === "admin");

    // Default hardcoded admin check if offline and no custom admin exists
    if (!hasCustomAdmin && cleanUsername.toLowerCase() === "admin" && cleanPass === "admin123") {
      const fallbackAdmin: UserProfile = {
        id: "u-admin-1",
        role: "admin",
        username: "admin",
        fullName: "Quản Trị Viên VinaMath",
        email: "admin@vinamath.edu.vn",
      };
      saveUserSession(fallbackAdmin);
      return { success: true };
    }

    return {
      success: false,
      error: "Tài khoản quản trị viên hoặc mật khẩu không chính xác.",
    };
  };

  const registerStudent = async (studentData: {
    fullName: string;
    schoolName?: string;
    username?: string;
    studentCode?: string;
    password: string;
    grade?: string;
    schoolClass?: string;
  }) => {
    const cleanUsername = (studentData.username || studentData.studentCode || "").trim().toLowerCase().replace(/\s+/g, "");
    const cleanPass = studentData.password.trim();

    const newStudentLocal = {
      id: `u-student-${Date.now()}`,
      role: "student",
      username: cleanUsername || `hs${Math.floor(10000 + Math.random() * 90000)}`,
      studentCode: studentData.studentCode?.trim().toUpperCase() || cleanUsername.toUpperCase(),
      password: cleanPass,
      fullName: studentData.fullName.trim(),
      schoolName: (studentData.schoolName || "THCS VinaMath").trim(),
      grade: studentData.grade || "Khối 6",
      schoolClass: (studentData.schoolClass || "Lớp 6A").trim(),
      exp: 0,
      coins: 50,
      streak: 1,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "student",
          ...studentData,
          username: cleanUsername,
          password: cleanPass,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        // Lưu kèm password vào local fallback để luôn luôn đăng nhập được
        saveLocalRegisteredUser({ ...newStudentLocal, ...data.user, password: cleanPass });
        saveUserSession(data.user);
        return { success: true };
      }
      if (!res.ok) {
        return { success: false, error: data.error || "Đăng ký thất bại." };
      }
    } catch (e) {
      console.warn("API register failed, saving locally...", e);
      // Nếu server không phản hồi, lưu cục bộ để người dùng không bị kẹt
      saveLocalRegisteredUser(newStudentLocal);
      const { password: _, ...safeUser } = newStudentLocal;
      saveUserSession(safeUser as UserProfile);
      return { success: true };
    }

    return { success: false, error: "Đăng ký thất bại." };
  };

  const registerAdmin = async (adminData: {
    fullName: string;
    username: string;
    email?: string;
    password: string;
    adminSecret: string;
  }) => {
    const cleanUsername = adminData.username.trim();
    const cleanPass = adminData.password.trim();

    const newAdminLocal = {
      id: `u-admin-${Date.now()}`,
      role: "admin",
      username: cleanUsername,
      email: (adminData.email || `${cleanUsername}@vinamath.edu.vn`).trim(),
      password: cleanPass,
      fullName: adminData.fullName.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "admin",
          ...adminData,
          username: cleanUsername,
          password: cleanPass,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        saveLocalRegisteredUser({ ...newAdminLocal, ...data.user, password: cleanPass });
        saveUserSession(data.user);
        return { success: true };
      }
      if (!res.ok) {
        return { success: false, error: data.error || "Đăng ký admin thất bại." };
      }
    } catch (e) {
      console.warn("API admin register failed, saving locally...", e);
      saveLocalRegisteredUser(newAdminLocal);
      const { password: _, ...safeUser } = newAdminLocal;
      saveUserSession(safeUser as UserProfile);
      return { success: true };
    }

    return { success: false, error: "Đăng ký admin thất bại." };
  };

  const updateAdminCredentials = async (data: {
    currentUsername: string;
    currentPassword: string;
    newUsername?: string;
    newPassword?: string;
    newFullName?: string;
  }) => {
    try {
      const res = await fetch("/api/auth/change-credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        return { success: false, error: resData.error || "Không thể cập nhật thông tin admin." };
      }

      const updatedUser = resData.user;
      // Cập nhật cả localStorage local users với thông tin mật khẩu mới
      const localUsers = getLocalRegisteredUsers();
      const updatedLocalUsers = localUsers.map((u) => {
        if (
          u.role === "admin" &&
          (u.username?.toLowerCase() === data.currentUsername.trim().toLowerCase() ||
            u.id === updatedUser.id)
        ) {
          return {
            ...u,
            username: updatedUser.username,
            fullName: updatedUser.fullName,
            password: (data.newPassword || data.currentPassword).trim(),
          };
        }
        return u;
      });

      const foundAdmin = localUsers.some(
        (u) =>
          u.role === "admin" &&
          (u.username?.toLowerCase() === data.currentUsername.trim().toLowerCase() ||
            u.id === updatedUser.id)
      );

      if (!foundAdmin) {
        updatedLocalUsers.unshift({
          id: updatedUser.id,
          role: "admin",
          username: updatedUser.username,
          fullName: updatedUser.fullName,
          password: (data.newPassword || data.currentPassword).trim(),
          email: updatedUser.email,
          createdAt: new Date().toISOString(),
        });
      }

      localStorage.setItem("vinamath_local_registered_users", JSON.stringify(updatedLocalUsers));
      saveUserSession(updatedUser);

      return {
        success: true,
        message: resData.message || "Cập nhật tài khoản quản trị viên thành công!",
      };
    } catch (e) {
      console.error("updateAdminCredentials error:", e);
      return { success: false, error: "Đã xảy ra lỗi khi kết nối tới máy chủ." };
    }
  };

  const logout = () => {
    saveUserSession(null);
  };

  const addExpAndCoins = async (earnedExp: number, earnedCoins: number, currentStreak?: number) => {
    if (!user || user.role !== "student") return;

    const newExp = (user.exp || 0) + earnedExp;
    const newCoins = (user.coins || 0) + earnedCoins;
    const newStreak = currentStreak !== undefined ? currentStreak : (user.streak || 1);

    const updatedUser: UserProfile = {
      ...user,
      exp: newExp,
      coins: newCoins,
      streak: newStreak,
    };

    saveUserSession(updatedUser);

    // 1. Lưu vào danh sách local registered users (tìm theo id, username, studentCode)
    const localUsers = getLocalRegisteredUsers();
    const idx = localUsers.findIndex(
      (u) =>
        u.id === user.id ||
        (user.username && u.username?.toLowerCase() === user.username.toLowerCase()) ||
        (user.studentCode && u.studentCode?.toUpperCase() === user.studentCode.toUpperCase())
    );
    if (idx !== -1) {
      localUsers[idx] = { ...localUsers[idx], exp: newExp, coins: newCoins, streak: newStreak };
      localStorage.setItem("vinamath_local_registered_users", JSON.stringify(localUsers));
    } else {
      localUsers.unshift({ ...updatedUser });
      localStorage.setItem("vinamath_local_registered_users", JSON.stringify(localUsers));
    }

    // 2. Lưu vào local progress store để bảo toàn điểm tuyệt đối
    saveLocalStudentProgressUpdate({
      userId: user.id,
      studentCode: user.studentCode,
      username: user.username,
      totalExp: newExp,
      coins: newCoins,
      streak: newStreak,
    });

    // 3. Đồng bộ điểm tới backend (/api/auth/update-score)
    try {
      await fetch("/api/auth/update-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: user.id || user.studentCode,
          username: user.username,
          earnedExp,
          earnedCoins,
          streak: newStreak,
        }),
      });
    } catch (e) {
      console.error("Failed to sync score to backend", e);
    }
  };

  const openAuthModal = (defaultRole: "student" | "admin" = "student", defaultTab: "login" | "register" = "login") => {
    setAuthModalConfig({ defaultRole, defaultTab });
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const role = user ? user.role : "guest";
  const isAdmin = role === "admin";
  const isStudent = role === "student";

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAdmin,
        isStudent,
        isLoading,
        loginStudent,
        loginAdmin,
        registerStudent,
        registerAdmin,
        updateAdminCredentials,
        logout,
        addExpAndCoins,
        refreshProfile,
        isAuthModalOpen,
        authModalConfig,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
