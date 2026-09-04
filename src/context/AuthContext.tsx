"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
  logout: () => void;
  addExpAndCoins: (earnedExp: number, earnedCoins: number, currentStreak?: number) => Promise<void>;
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

  // Tải trạng thái đăng nhập từ localStorage khi khởi động
  useEffect(() => {
    try {
      const saved = localStorage.getItem("vinamath_auth_user");
      if (saved) {
        setUser(JSON.parse(saved));
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

  const loginStudent = async (identifier: string, pass: string) => {
    const cleanIdentifier = identifier.trim();
    const cleanPass = pass.trim();

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

      if (res.ok) {
        const data = await res.json();
        saveUserSession(data.user);
        return { success: true };
      }
    } catch (e) {
      console.warn("Server login request failed, trying local fallback...", e);
    }

    // Fallback: Kiểm tra trong bộ nhớ cục bộ (localStorage)
    const localUsers = getLocalRegisteredUsers();
    const matched = localUsers.find(
      (u) =>
        u.role === "student" &&
        (u.username?.toLowerCase() === cleanIdentifier.toLowerCase() ||
          u.studentCode?.toUpperCase() === cleanIdentifier.toUpperCase() ||
          u.id === cleanIdentifier) &&
        u.password === cleanPass
    );

    if (matched) {
      const { password: _, ...safeUser } = matched;
      saveUserSession(safeUser);
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
      return { success: true };
    }

    // Default hardcoded admin check if offline
    if (cleanUsername.toLowerCase() === "admin" && cleanPass === "admin123") {
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

  const logout = () => {
    saveUserSession(null);
  };

  const addExpAndCoins = async (earnedExp: number, earnedCoins: number, currentStreak?: number) => {
    if (!user || user.role !== "student") return;

    const newExp = (user.exp || 0) + earnedExp;
    const newCoins = (user.coins || 0) + earnedCoins;
    const newStreak = currentStreak !== undefined ? Math.max(user.streak || 0, currentStreak) : user.streak;

    const updated = { ...user, exp: newExp, coins: newCoins, streak: newStreak };
    saveUserSession(updated);

    try {
      await fetch("/api/auth/update-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: user.id || user.studentCode,
          earnedExp,
          earnedCoins,
          streak: currentStreak,
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
        logout,
        addExpAndCoins,
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
