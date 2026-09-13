import fs from "fs";
import path from "path";
import { CustomExam, StudentExamSubmission } from "@/types/customExam";

const examsFilePath = path.join(process.cwd(), "src/data/customTeacherExams.json");
const submissionsFilePath = path.join(process.cwd(), "src/data/studentExamSubmissions.json");

// In-memory fallback caches for serverless environments
let inMemoryExams: CustomExam[] = [];
let inMemorySubmissions: StudentExamSubmission[] = [];

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
