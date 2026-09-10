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
