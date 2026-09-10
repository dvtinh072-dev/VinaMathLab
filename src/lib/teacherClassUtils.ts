/**
 * Utility functions for Teacher Class Assignment & Permissions
 */

export function normalizeClass(c?: string): string {
  if (!c) return "";
  return c
    .trim()
    .toLowerCase()
    .replace(/^lớp\s*/i, "")
    .replace(/^lop\s*/i, "")
    .replace(/\s+/g, "");
}

export function parseAssignedClasses(raw: any): string[] {
  if (Array.isArray(raw)) return raw.map(String).map((c) => c.trim()).filter(Boolean);
  if (!raw || typeof raw !== "string") return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.map(String).map((c) => c.trim()).filter(Boolean);
  } catch {}
  return raw
    .split(",")
    .map((c: string) => c.trim())
    .filter(Boolean);
}

export function isStudentInAssignedClasses(assignedClasses: string[], studentClass?: string): boolean {
  if (!studentClass || !assignedClasses || assignedClasses.length === 0) return false;
  const sNorm = normalizeClass(studentClass);
  if (!sNorm) return false;

  return assignedClasses.some((ac) => {
    const acNorm = normalizeClass(ac);
    return acNorm === sNorm || acNorm.includes(sNorm) || sNorm.includes(acNorm);
  });
}

export function isStudentInSpecificClass(targetClass: string, studentClass?: string): boolean {
  if (!targetClass || !studentClass) return false;
  if (targetClass === "all") return true;
  const tNorm = normalizeClass(targetClass);
  const sNorm = normalizeClass(studentClass);
  return tNorm === sNorm || tNorm.includes(sNorm) || sNorm.includes(tNorm);
}

/**
 * Kiểm tra quyền truy cập học liệu theo Khối của học sinh:
 * - Admin và Giáo viên được xem toàn bộ các khối.
 * - Học sinh đăng ký khối nào thì CHỈ ĐƯỢC HỌC KHỐI ĐÓ, không được xem khối khác.
 */
export function canAccessGrade(user: any, targetGradeId: string): {
  allowed: boolean;
  reason?: "NOT_AUTHENTICATED" | "GRADE_MISMATCH";
  userGradeNum?: number;
  targetGradeNum?: number;
  userGradeLabel?: string;
  targetGradeLabel?: string;
} {
  if (!user) {
    return { allowed: false, reason: "NOT_AUTHENTICATED" };
  }

  // Admin hoặc Giáo viên có toàn quyền truy cập xem học liệu các khối
  if (user.role === "admin" || user.role === "teacher") {
    return { allowed: true };
  }

  // Trích xuất số khối của bài học / trang đích (ví dụ 'lop-6' -> 6, 'lop-10' -> 10)
  const targetMatch = targetGradeId.match(/(\d+)/);
  const targetGradeNum = targetMatch ? parseInt(targetMatch[1], 10) : null;

  // Trích xuất số khối đã đăng ký của học sinh (ví dụ 'Khối 6', 'lop-6', '6A', '6' -> 6)
  const userGradeStr = user.grade || user.schoolClass || "";
  const userMatch = userGradeStr.match(/(\d+)/);
  const userGradeNum = userMatch ? parseInt(userMatch[1], 10) : null;

  if (targetGradeNum !== null && userGradeNum !== null) {
    if (targetGradeNum === userGradeNum) {
      return { allowed: true };
    } else {
      return {
        allowed: false,
        reason: "GRADE_MISMATCH",
        userGradeNum,
        targetGradeNum,
        userGradeLabel: `Toán ${userGradeNum} (Khối ${userGradeNum})`,
        targetGradeLabel: `Toán ${targetGradeNum} (Khối ${targetGradeNum})`,
      };
    }
  }

  // Mặc định cho phép nếu không thể xác định
  return { allowed: true };
}

export function getUserGradeKey(user: any): string {
  if (!user) return "lop-6";
  const userGradeStr = user.grade || user.schoolClass || "";
  const match = userGradeStr.match(/(\d+)/);
  return match ? `lop-${match[1]}` : "lop-6";
}

