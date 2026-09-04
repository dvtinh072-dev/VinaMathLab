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
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "student", identifier, studentCode: identifier, username: identifier, password: pass }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Đăng nhập thất bại." };
      }
      saveUserSession(data.user);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Lỗi kết nối máy chủ." };
    }
  };

  const loginAdmin = async (username: string, pass: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "admin", username, password: pass }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Đăng nhập admin thất bại." };
      }
      saveUserSession(data.user);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Lỗi kết nối máy chủ." };
    }
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
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "student", ...studentData }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Đăng ký thất bại." };
      }
      saveUserSession(data.user);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Lỗi kết nối máy chủ." };
    }
  };

  const registerAdmin = async (adminData: {
    fullName: string;
    username: string;
    email?: string;
    password: string;
    adminSecret: string;
  }) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "admin", ...adminData }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Đăng ký admin thất bại." };
      }
      saveUserSession(data.user);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Lỗi kết nối máy chủ." };
    }
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
