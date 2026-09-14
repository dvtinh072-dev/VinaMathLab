import fs from "fs";
import path from "path";
import { CustomExam, StudentExamSubmission, ExamFolder } from "@/types/customExam";

const examsFilePath = path.join(process.cwd(), "src/data/customTeacherExams.json");
const submissionsFilePath = path.join(process.cwd(), "src/data/studentExamSubmissions.json");
const foldersFilePath = path.join(process.cwd(), "src/data/teacherExamFolders.json");

// Default initial folders for teacher
const DEFAULT_FOLDERS: ExamFolder[] = [
  { id: "folder-all", name: "Tất cả đề thi", icon: "folder", color: "blue" },
  { id: "folder-cv7991", name: "Đề chuẩn CV 7991 (2025)", icon: "sparkles", color: "amber" },
  { id: "folder-gk1", name: "Đề Giữa Học Kỳ 1", icon: "calendar", color: "sky" },
  { id: "folder-ck1", name: "Đề Cuối Học Kỳ 1", icon: "book-open", color: "indigo" },
  { id: "folder-gk2", name: "Đề Giữa Học Kỳ 2", icon: "calendar", color: "teal" },
  { id: "folder-ck2", name: "Đề Cuối Học Kỳ 2", icon: "book-open", color: "emerald" },
  { id: "folder-chuyende", name: "Đề Khảo Sát & Chuyên Đề", icon: "layers", color: "purple" },
];

// In-memory fallback caches for serverless environments
let inMemoryExams: CustomExam[] = [];
let inMemorySubmissions: StudentExamSubmission[] = [];
let inMemoryFolders: ExamFolder[] = DEFAULT_FOLDERS;

// Ensure files exist
function ensureFiles() {
  try {
    const dir = path.join(process.cwd(), "src/data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(examsFilePath)) {
      fs.writeFileSync(examsFilePath, JSON.stringify([], null, 2), "utf-8");
    }
    if (!fs.existsSync(submissionsFilePath)) {
      fs.writeFileSync(submissionsFilePath, JSON.stringify([], null, 2), "utf-8");
    }
    if (!fs.existsSync(foldersFilePath)) {
      fs.writeFileSync(foldersFilePath, JSON.stringify(DEFAULT_FOLDERS, null, 2), "utf-8");
    }
  } catch (e) {
    console.warn("Could not ensure data files:", e);
  }
}

// Read all exams
export function getAllCustomExams(): CustomExam[] {
  ensureFiles();
  try {
    if (fs.existsSync(examsFilePath)) {
      const data = fs.readFileSync(examsFilePath, "utf-8");
      const list = JSON.parse(data);
      if (Array.isArray(list)) {
        inMemoryExams = list;
        return list;
      }
    }
  } catch (e) {
    console.warn("Error reading customTeacherExams.json, using memory cache:", e);
  }
  return inMemoryExams;
}

// Get single exam by ID
export function getCustomExamById(id: string): CustomExam | null {
  const exams = getAllCustomExams();
  return exams.find((e) => e.id === id) || null;
}

// Save or update exam
export function saveCustomExam(exam: CustomExam): boolean {
  ensureFiles();
  try {
    const exams = getAllCustomExams();
    const existingIdx = exams.findIndex((e) => e.id === exam.id);
    if (existingIdx >= 0) {
      exams[existingIdx] = exam;
    } else {
      exams.unshift(exam);
    }
    inMemoryExams = exams;
    fs.writeFileSync(examsFilePath, JSON.stringify(exams, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Error saving custom exam:", e);
    // Even if fs fails on readonly serverless, in-memory cache holds it
    const existingIdx = inMemoryExams.findIndex((e) => e.id === exam.id);
    if (existingIdx >= 0) {
      inMemoryExams[existingIdx] = exam;
    } else {
      inMemoryExams.unshift(exam);
    }
    return true;
  }
}

// Delete exam
export function deleteCustomExam(id: string): boolean {
  ensureFiles();
  try {
    const exams = getAllCustomExams();
    const filtered = exams.filter((e) => e.id !== id);
    inMemoryExams = filtered;
    fs.writeFileSync(examsFilePath, JSON.stringify(filtered, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Error deleting custom exam:", e);
    inMemoryExams = inMemoryExams.filter((e) => e.id !== id);
    return true;
  }
}

// Read submissions
export function getAllExamSubmissions(): StudentExamSubmission[] {
  ensureFiles();
  try {
    if (fs.existsSync(submissionsFilePath)) {
      const data = fs.readFileSync(submissionsFilePath, "utf-8");
      const list = JSON.parse(data);
      if (Array.isArray(list)) {
        inMemorySubmissions = list;
        return list;
      }
    }
  } catch (e) {
    console.warn("Error reading studentExamSubmissions.json, using memory cache:", e);
  }
  return inMemorySubmissions;
}

// Get submissions for a specific exam
export function getSubmissionsByExamId(examId: string): StudentExamSubmission[] {
  const all = getAllExamSubmissions();
  return all.filter((s) => s.examId === examId);
}

// Save student submission
export function saveExamSubmission(submission: StudentExamSubmission): boolean {
  ensureFiles();
  try {
    const all = getAllExamSubmissions();
    all.unshift(submission);
    inMemorySubmissions = all;
    fs.writeFileSync(submissionsFilePath, JSON.stringify(all, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Error saving student exam submission:", e);
    inMemorySubmissions.unshift(submission);
    return true;
  }
}

// =========================================================================
// EXAM FOLDERS CRUD OPERATIONS
// =========================================================================

// Read all folders
export function getAllExamFolders(): ExamFolder[] {
  ensureFiles();
  try {
    if (fs.existsSync(foldersFilePath)) {
      const data = fs.readFileSync(foldersFilePath, "utf-8");
      const list = JSON.parse(data);
      if (Array.isArray(list) && list.length > 0) {
        inMemoryFolders = list;
        return list;
      }
    }
  } catch (e) {
    console.warn("Error reading teacherExamFolders.json:", e);
  }
  return inMemoryFolders;
}

// Create or update folder
export function saveExamFolder(folder: ExamFolder): boolean {
  ensureFiles();
  try {
    const folders = getAllExamFolders();
    const idx = folders.findIndex((f) => f.id === folder.id);
    if (idx >= 0) {
      folders[idx] = folder;
    } else {
      folders.push(folder);
    }
    inMemoryFolders = folders;
    fs.writeFileSync(foldersFilePath, JSON.stringify(folders, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Error saving exam folder:", e);
    const idx = inMemoryFolders.findIndex((f) => f.id === folder.id);
    if (idx >= 0) inMemoryFolders[idx] = folder;
    else inMemoryFolders.push(folder);
    return true;
  }
}

// Delete folder (and reset exams in this folder to folder-all)
export function deleteExamFolder(folderId: string): boolean {
  ensureFiles();
  if (folderId === "folder-all") return false; // Không xóa folder gốc
  try {
    const folders = getAllExamFolders();
    const filtered = folders.filter((f) => f.id !== folderId);
    inMemoryFolders = filtered;
    fs.writeFileSync(foldersFilePath, JSON.stringify(filtered, null, 2), "utf-8");

    // Cập nhật các đề thi đang trong folder này về folder-all
    const exams = getAllCustomExams();
    let hasChanged = false;
    exams.forEach((exam) => {
      if (exam.folderId === folderId) {
        exam.folderId = "folder-all";
        exam.folderName = "Tất cả đề thi";
        hasChanged = true;
      }
    });
    if (hasChanged) {
      inMemoryExams = exams;
      fs.writeFileSync(examsFilePath, JSON.stringify(exams, null, 2), "utf-8");
    }

    return true;
  } catch (e) {
    console.error("Error deleting exam folder:", e);
    inMemoryFolders = inMemoryFolders.filter((f) => f.id !== folderId);
    return true;
  }
}

// Move exam to a folder
export function moveExamToFolder(examId: string, folderId: string, folderName?: string): boolean {
  ensureFiles();
  try {
    const exams = getAllCustomExams();
    const target = exams.find((e) => e.id === examId);
    if (!target) return false;

    target.folderId = folderId;
    if (folderName) {
      target.folderName = folderName;
    } else {
      const folders = getAllExamFolders();
      const f = folders.find((item) => item.id === folderId);
      target.folderName = f?.name || "Tất cả đề thi";
    }

    inMemoryExams = exams;
    fs.writeFileSync(examsFilePath, JSON.stringify(exams, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Error moving exam to folder:", e);
    return false;
  }
}

