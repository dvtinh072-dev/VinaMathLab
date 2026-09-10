"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Trophy,
  Flame,
  Heart,
  Star,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  Coins,
  Crown,
  Bot,
  RefreshCw,
  Zap,
  Edit3,
  Plus,
  Trash2,
  Shield,
  Save,
  Bookmark,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  CheckSquare,
  PenTool,
  HelpCircle,
  ListFilter,
  FileText,
  Video,
  PlayCircle,
  Eye,
  EyeOff,
  ExternalLink,
} from "lucide-react";
import { GRADE_6_AI_PRACTICE_DATA } from "@/data/grade6AiPracticeData";
import { GRADE_7_AI_PRACTICE_DATA } from "@/data/grade7AiPracticeData";
import { GRADE_8_AI_PRACTICE_DATA } from "@/data/grade8AiPracticeData";
import { GRADE_9_AI_PRACTICE_DATA } from "@/data/grade9AiPracticeData";
import { GRADE_10_AI_PRACTICE_DATA } from "@/data/grade10AiPracticeData";
import { GRADE_11_AI_PRACTICE_DATA } from "@/data/grade11AiPracticeData";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { GeometryDiagram, GeometryDiagramProps } from "@/components/math/GeometryDiagram";
import { useAuth } from "@/context/AuthContext";
import { QuestionEditModal } from "@/components/admin/QuestionEditModal";
import { AiQuestionGeneratorModal } from "@/components/admin/AiQuestionGeneratorModal";
import { 
  saveLocalStudentProgressUpdate,
  isQuestionAlreadySolved,
  markQuestionSolved,
  getSavedVideoPosition,
  saveVideoPosition,
  isVideoCompleted,
  markVideoCompleted
} from "@/lib/studentProgressClient";
import type { 
  TheorySection, 
  TrueFalseQuestion, 
  ShortAnswerQuestion, 
  ExamSetItem,
  VideoCheckpointQuestion 
} from "@/data/allGradesLessonsData";

export interface QuizQuestion {
  id: string | number;
  question: string;
  mathProblem?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  badge?: string;
  isAiGenerated?: boolean;
  source?: string;
  diagram?: {
    type: GeometryDiagramProps["type"];
    caption?: string;
    labels?: { [key: string]: string | number };
  };
}

interface Props {
  lessonTitle: string;
  gradeKey?: string;
  lessonId?: string;
  gradeTitle?: string;
  questions?: QuizQuestion[];
  theorySections?: TheorySection[];
  youtubeVideoId?: string;
  youtubeVideoTitle?: string;
  youtubeVideos?: { id: string; title: string }[];
  videoQuestions?: VideoCheckpointQuestion[];
  showTextTheory?: boolean;
  tips?: string[];
  traps?: string[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
  examSets?: ExamSetItem[];
}

/**
 * Tự động trích xuất YouTube Video ID chuẩn từ bất kỳ định dạng link hoặc ID nào
 * (ví dụ: https://www.youtube.com/watch?v=Alz53g47Nbk, https://youtu.be/Alz53g47Nbk hoặc Alz53g47Nbk)
 */
export function cleanYouTubeId(input?: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = trimmed.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  if (trimmed.length === 11 && !trimmed.includes("/") && !trimmed.includes(".")) {
    return trimmed;
  }
  return trimmed;
}

/**
 * Trả về đồ họa SVG biểu diễn trục số cho các khoảng, đoạn, nửa khoảng tương ứng
 */
export function getIntervalNumberLineSvg(pt: string): React.ReactNode | null {
  const text = pt.trim();
  if (text.includes("Khoảng $(a; b)")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <path d="M 25 9 L 35 25 M 40 9 L 50 25 M 55 9 L 65 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="75" y1="17" x2="185" y2="17" stroke="#38bdf8" strokeWidth="3" />
        <text x="75" y="23" textAnchor="middle" fill="#38bdf8" fontSize="18" fontWeight="bold">(</text>
        <text x="75" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">a</text>
        <text x="185" y="23" textAnchor="middle" fill="#38bdf8" fontSize="18" fontWeight="bold">)</text>
        <text x="185" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">b</text>
        <path d="M 195 9 L 205 25 M 210 9 L 220 25 M 225 9 L 235 25 M 240 9 L 250 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    );
  }
  if (text.includes("Khoảng $(a; +\\infty)")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <path d="M 25 9 L 35 25 M 45 9 L 55 25 M 65 9 L 75 25 M 85 9 L 95 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="105" y1="17" x2="258" y2="17" stroke="#06b6d4" strokeWidth="3" />
        <text x="105" y="23" textAnchor="middle" fill="#06b6d4" fontSize="18" fontWeight="bold">(</text>
        <text x="105" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">a</text>
      </svg>
    );
  }
  if (text.includes("Khoảng $(-\\infty; b)")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <line x1="15" y1="17" x2="165" y2="17" stroke="#a855f7" strokeWidth="3" />
        <text x="165" y="23" textAnchor="middle" fill="#a855f7" fontSize="18" fontWeight="bold">)</text>
        <text x="165" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">b</text>
        <path d="M 175 9 L 185 25 M 195 9 L 205 25 M 215 9 L 225 25 M 235 9 L 245 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    );
  }
  if (text.includes("Đoạn $[a; b]")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <path d="M 25 9 L 35 25 M 40 9 L 50 25 M 55 9 L 65 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="75" y1="17" x2="185" y2="17" stroke="#f59e0b" strokeWidth="3" />
        <text x="75" y="22" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold">[</text>
        <text x="75" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">a</text>
        <text x="185" y="22" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold">]</text>
        <text x="185" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">b</text>
        <path d="M 195 9 L 205 25 M 210 9 L 220 25 M 225 9 L 235 25 M 240 9 L 250 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    );
  }
  if (text.includes("Nửa khoảng $[a; b)")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <path d="M 25 9 L 35 25 M 40 9 L 50 25 M 55 9 L 65 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="75" y1="17" x2="185" y2="17" stroke="#10b981" strokeWidth="3" />
        <text x="75" y="22" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">[</text>
        <text x="75" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">a</text>
        <text x="185" y="23" textAnchor="middle" fill="#10b981" fontSize="18" fontWeight="bold">)</text>
        <text x="185" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">b</text>
        <path d="M 195 9 L 205 25 M 210 9 L 220 25 M 225 9 L 235 25 M 240 9 L 250 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    );
  }
  if (text.includes("Nửa khoảng $(a; b]")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <path d="M 25 9 L 35 25 M 40 9 L 50 25 M 55 9 L 65 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="75" y1="17" x2="185" y2="17" stroke="#10b981" strokeWidth="3" />
        <text x="75" y="23" textAnchor="middle" fill="#10b981" fontSize="18" fontWeight="bold">(</text>
        <text x="75" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">a</text>
        <text x="185" y="22" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">]</text>
        <text x="185" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">b</text>
        <path d="M 195 9 L 205 25 M 210 9 L 220 25 M 225 9 L 235 25 M 240 9 L 250 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    );
  }
  if (text.includes("Nửa khoảng $[a; +\\infty)")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <path d="M 25 9 L 35 25 M 45 9 L 55 25 M 65 9 L 75 25 M 85 9 L 95 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="105" y1="17" x2="258" y2="17" stroke="#06b6d4" strokeWidth="3" />
        <text x="105" y="22" textAnchor="middle" fill="#06b6d4" fontSize="16" fontWeight="bold">[</text>
        <text x="105" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">a</text>
      </svg>
    );
  }
  if (text.includes("Nửa khoảng $(-\\infty; b]")) {
    return (
      <svg viewBox="0 0 280 34" className="w-full h-auto select-none">
        <line x1="15" y1="17" x2="260" y2="17" stroke="#475569" strokeWidth="2" />
        <polygon points="268,17 258,13 258,21" fill="#94a3b8" />
        <line x1="15" y1="17" x2="165" y2="17" stroke="#a855f7" strokeWidth="3" />
        <text x="165" y="22" textAnchor="middle" fill="#a855f7" fontSize="16" fontWeight="bold">]</text>
        <text x="165" y="33" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">b</text>
        <path d="M 175 9 L 185 25 M 195 9 L 205 25 M 215 9 L 225 25 M 235 9 L 245 25" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.75" />
      </svg>
    );
  }
  return null;
}

/**
 * Định dạng số tự nhiên chuẩn Toán học Việt Nam (SGK):
 * - Không dùng dấu phẩy cho số tự nhiên từ 4 chữ số trở lên (dùng khoảng trắng ngăn cách)
 * - Chỉ dùng dấu phẩy cho số thập phân
 */
export function formatNaturalNumber(val: number | string): string {
  if (val === undefined || val === null) return "0";
  const str = val.toString();
  const parts = str.split(".");
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (parts.length > 1) {
    return `${intPart},${parts[1]}`;
  }
  return intPart;
}

/**
 * Chuyển số và ký tự sang dạng số mũ chỉ số trên (Superscript) chuẩn toán học:
 * 0 -> ⁰, 1 -> ¹, 2 -> ², 3 -> ³, 4 -> ⁴, 5 -> ⁵, 6 -> ⁶, 7 -> ⁷, 8 -> ⁸, 9 -> ⁹
 */
export function toSuperscript(val: number | string): string {
  const map: { [key: string]: string } = {
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
    "+": "⁺",
    "-": "⁻",
    "=": "⁼",
    "(": "⁽",
    ")": "⁾",
    "m": "ᵐ",
    "n": "ⁿ",
    "p": "ᵖ",
    "q": "ᑫ",
    "x": "ˣ",
  };
  return val
    .toString()
    .split("")
    .map((c) => map[c] || c)
    .join("");
}

/**
 * Thuật toán xáo trộn vị trí đáp án (Fisher-Yates) và cập nhật lại correctIndex chính xác
 */
function shuffleOptions(q: QuizQuestion): QuizQuestion {
  const originalCorrectOption = q.options[q.correctIndex];
  const indices = q.options.map((_, i) => i);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const shuffledOptions = indices.map((i) => q.options[i]);
  const newCorrectIndex = shuffledOptions.indexOf(originalCorrectOption);

  return {
    ...q,
    options: shuffledOptions,
    correctIndex: newCorrectIndex,
  };
}

/**
 * Thuật toán xáo trộn vị trí đáp án cho ví dụ minh họa video mỗi lần truy cập
 */
function shuffleVideoCheckpoint(vq: VideoCheckpointQuestion): VideoCheckpointQuestion {
  const originalCorrectOption = vq.options[vq.correctIndex];
  const indices = vq.options.map((_, i) => i);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const shuffledOptions = indices.map((i) => vq.options[i]);
  const newCorrectIndex = shuffledOptions.indexOf(originalCorrectOption);

  return {
    ...vq,
    options: shuffledOptions,
    correctIndex: newCorrectIndex,
  };
}

/**
 * HỆ THỐNG SINH ĐỀ "LUYỆN TẬP THÊM" TƯƠNG ỨNG 1-1 VỚI SỐ CÂU HỎI VÀ DẠNG BÀI SGK CỦA TỪNG BÀI HỌC
 * - Đúng chính xác số lượng bài tập của bài đó trong SGK
 * - Cùng dạng bài, khác số liệu, khác ngữ cảnh thực tế
 * - Không dùng dấu phẩy cho số tự nhiên ≥ 4 chữ số, dùng số mũ chỉ số trên
 */
function generateSimilarAiQuestions(lessonId: string, lessonTitle: string, baseQuestions: QuizQuestion[]): QuizQuestion[] {
  const ts = Date.now();
  const id = lessonId.toLowerCase();

  // 1. Kiểm tra trong cơ sở dữ liệu câu hỏi Luyện Tập Thêm 1-1 chuyên sâu (Lớp 6, 7, 8, 9, 10 & 11)
  const g11Direct = GRADE_11_AI_PRACTICE_DATA[lessonId] || GRADE_11_AI_PRACTICE_DATA[id];
  if (g11Direct?.quizQuestions && g11Direct.quizQuestions.length > 0) {
    return g11Direct.quizQuestions.map((q, idx) => ({
      ...q,
      id: `${q.id}-${ts}-${idx}`,
      isAiGenerated: true,
    }));
  }

  const g10Direct = GRADE_10_AI_PRACTICE_DATA[lessonId] || GRADE_10_AI_PRACTICE_DATA[id];
  if (g10Direct?.quizQuestions && g10Direct.quizQuestions.length > 0) {
    return g10Direct.quizQuestions.map((q, idx) => ({
      ...q,
      id: `${q.id}-${ts}-${idx}`,
      isAiGenerated: true,
    }));
  }

  const directData =
    GRADE_6_AI_PRACTICE_DATA[lessonId] ||
    GRADE_6_AI_PRACTICE_DATA[id] ||
    GRADE_7_AI_PRACTICE_DATA[lessonId] ||
    GRADE_7_AI_PRACTICE_DATA[id] ||
    GRADE_8_AI_PRACTICE_DATA[lessonId] ||
    GRADE_8_AI_PRACTICE_DATA[id] ||
    GRADE_9_AI_PRACTICE_DATA[lessonId] ||
    GRADE_9_AI_PRACTICE_DATA[id];
  if (directData && directData.length > 0) {
    return directData.map((q, idx) => ({
      ...q,
      id: `${q.id}-${ts}-${idx}`,
      isAiGenerated: true,
    }));
  }

  const allAiDatasets = { ...GRADE_6_AI_PRACTICE_DATA, ...GRADE_7_AI_PRACTICE_DATA, ...GRADE_8_AI_PRACTICE_DATA, ...GRADE_9_AI_PRACTICE_DATA };
  for (const [key, questions] of Object.entries(allAiDatasets)) {
    const cleanKey = key.replace("t6-", "").replace("t7-", "").replace("t8-", "").replace("t9-", "");
    const cleanId = id.replace("t6-", "").replace("t7-", "").replace("t8-", "").replace("t9-", "");
    if (cleanKey === cleanId || cleanId.includes(cleanKey) || cleanKey.includes(cleanId)) {
      return questions.map((q, idx) => ({
        ...q,
        id: `${q.id}-${ts}-${idx}`,
        isAiGenerated: true,
      }));
    }
  }

  // =========================================================================
  // BÀI 1: TẬP HỢP (Tương ứng 5 bài: 1.1 -> 1.5)
  // =========================================================================
  if (id.includes("b1-tap-hop") || (id.includes("tap-hop") && !id.includes("so-nguyen") && !id.includes("so-tu-nhien"))) {
    const cityPool = [
      { name: "ĐÀ NẴNG", letters: "{D; A; N; G}" },
      { name: "VIỆT NAM", letters: "{V; I; E; T; N; A; M}" },
      { name: "HẢI PHÒNG", letters: "{H; A; I; P; O; N; G}" },
      { name: "CẦN THƠ", letters: "{C; A; N; T; H; O}" },
      { name: "NHA TRANG", letters: "{N; H; A; T; R; G}" },
    ];
    const pickedCity = cityPool[Math.floor(Math.random() * cityPool.length)];
    const divK = [4, 5, 6, 7][Math.floor(Math.random() * 4)];
    const limitN = [8, 9, 11, 12, 15][Math.floor(Math.random() * 5)];

    return [
      {
        id: `ai-1.1-${ts}`,
        badge: "🤖 Tương tự Bài 1.1 SGK",
        isAiGenerated: true,
        question: "Cho hai tập hợp M = {m; n; p; u; v} và N = {n; q; v; t; k}. Hãy chọn khẳng định ĐÚNG về quan hệ thuộc và không thuộc:",
        options: ["n ∈ M và q ∉ M", "q ∈ M và n ∉ M", "m ∉ M và p ∉ M", "u ∉ M và v ∉ M"],
        correctIndex: 0,
        explanation: "Phần tử n có mặt trong M nên n ∈ M. Phần tử q không có mặt trong M nên q ∉ M.",
      },
      {
        id: `ai-1.2-${ts}`,
        badge: "🤖 Tương tự Bài 1.2 SGK",
        isAiGenerated: true,
        question: `Cho tập hợp V = {x ∈ ℕ | x chia hết cho ${divK}}. Trong các số {0; ${divK}; ${divK + 2}; ${divK * 3}; ${divK * 2 + 1}}, những số nào thuộc tập hợp V?`,
        options: [
          `0; ${divK}; ${divK * 3} ∈ V và ${divK + 2}; ${divK * 2 + 1} ∉ V`,
          `${divK + 2}; ${divK * 2 + 1} ∈ V`,
          `Chỉ có 0 ∉ V`,
          `Tất cả các số đều không thuộc V`,
        ],
        correctIndex: 0,
        explanation: `Các số 0, ${divK}, ${divK * 3} chia hết cho ${divK} nên thuộc V. Các số ${divK + 2}, ${divK * 2 + 1} không chia hết cho ${divK} nên không thuộc V.`,
      },
      {
        id: `ai-1.3-${ts}`,
        badge: "🤖 Tương tự Bài 1.3 SGK",
        isAiGenerated: true,
        question: `Bằng cách liệt kê các phần tử, viết tập hợp P các chữ cái tiếng Việt có mặt trong cụm từ "${pickedCity.name}":`,
        options: [`P = ${pickedCity.letters}`, `P = {${pickedCity.name.split("").join("; ")}}`, `P = {A; B; C; D}`, `P = {X; Y; Z}`],
        correctIndex: 0,
        explanation: `Mỗi chữ cái chỉ được viết một lần duy nhất. Vậy P = ${pickedCity.letters}.`,
      },
      {
        id: `ai-1.4-${ts}`,
        badge: "🤖 Tương tự Bài 1.4 SGK",
        isAiGenerated: true,
        question: `Bằng cách nêu dấu hiệu đặc trưng, hãy viết tập hợp B các số tự nhiên nhỏ hơn ${limitN}:`,
        options: [`B = {x ∈ ℕ | x < ${limitN}}`, `B = {x ∈ ℕ* | x < ${limitN}}`, `B = {x ∈ ℕ | x ≤ ${limitN}}`, `B = {x ∈ ℤ | x < ${limitN}}`],
        correctIndex: 0,
        explanation: `Tập hợp các số tự nhiên nhỏ hơn ${limitN} (từ 0 đến ${limitN - 1}) được viết theo dấu hiệu đặc trưng là B = {x ∈ ℕ | x < ${limitN}}.`,
      },
      {
        id: `ai-1.5-${ts}`,
        badge: "🤖 Tương tự Bài 1.5 SGK",
        isAiGenerated: true,
        question: "Gọi T là tập hợp các tháng dương lịch có 30 ngày trong năm. Khẳng định nào sau đây là ĐÚNG?",
        options: ["Tháng 4 ∈ T và Tháng 1 ∉ T", "Tháng 1 ∈ T và Tháng 3 ∈ T", "Tháng 2 ∈ T", "Tháng 4 ∉ T"],
        correctIndex: 0,
        explanation: "Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11 nên Tháng 4 ∈ T. Tháng 1 có 31 ngày nên Tháng 1 ∉ T.",
      },
    ];
  }

  // =========================================================================
  // BÀI 2: CÁCH GHI SỐ TỰ NHIÊN (Tương ứng 8 bài: 1.6 -> 1.12 + Vận dụng)
  // =========================================================================
  if (id.includes("b2-cach-ghi-so-tu-nhien")) {
    const rand5Digit = Math.floor(Math.random() * 70000) + 20000;
    const tenThousandsDigit = Math.floor(rand5Digit / 10000);
    const thousandsDigit = Math.floor((rand5Digit % 10000) / 1000);
    const valYear = 2026 + Math.floor(Math.random() * 5);

    return [
      {
        id: `ai-2.1-${ts}`,
        badge: "🤖 Tương tự Bài 1.6 SGK",
        isAiGenerated: true,
        question: `Cho số tự nhiên ${formatNaturalNumber(rand5Digit)}. Giá trị của chữ số ${thousandsDigit} đứng ở hàng nghìn là bao nhiêu?`,
        options: [`${formatNaturalNumber(thousandsDigit * 1000)} (hàng nghìn)`, `${thousandsDigit * 100}`, `${thousandsDigit * 10}`, `${thousandsDigit}`],
        correctIndex: 0,
        explanation: `Chữ số ${thousandsDigit} đứng ở hàng nghìn nên có giá trị là ${thousandsDigit} × 1 000 = ${formatNaturalNumber(thousandsDigit * 1000)}.`,
      },
      {
        id: `ai-2.2-${ts}`,
        badge: "🤖 Tương tự Bài 1.7 SGK",
        isAiGenerated: true,
        question: `Chữ số ${tenThousandsDigit} đứng ở hàng nào trong một số tự nhiên nếu nó có giá trị bằng ${formatNaturalNumber(tenThousandsDigit * 10000)}?`,
        options: ["Hàng chục nghìn", "Hàng nghìn", "Hàng trăm", "Hàng triệu"],
        correctIndex: 0,
        explanation: `Giá trị ${formatNaturalNumber(tenThousandsDigit * 10000)} = ${tenThousandsDigit} × 10 000 nên chữ số ${tenThousandsDigit} đứng ở hàng chục nghìn.`,
      },
      {
        id: `ai-2.3-${ts}`,
        badge: "🤖 Tương tự Bài 1.8 SGK",
        isAiGenerated: true,
        question: "Đọc các số La Mã sau trong hệ thập phân: XVIII, XXIV, XXVII:",
        options: ["18; 24; 27", "18; 26; 27", "17; 24; 27", "18; 24; 28"],
        correctIndex: 0,
        explanation: "XVIII = 10 + 8 = 18; XXIV = 20 + 4 = 24; XXVII = 20 + 7 = 27.",
      },
      {
        id: `ai-2.4-${ts}`,
        badge: "🤖 Tương tự Bài 1.9 SGK",
        isAiGenerated: true,
        question: "Viết các số 19 và 26 dưới dạng số La Mã chuẩn SGK:",
        options: ["XIX và XXVI", "IXX và XXVI", "XIX và XXIV", "XVIIII và XXVI"],
        correctIndex: 0,
        explanation: "19 = 10 (X) + 9 (IX) = XIX. 26 = 20 (XX) + 6 (VI) = XXVI.",
      },
      {
        id: `ai-2.5-${ts}`,
        badge: "🤖 Tương tự Bài 1.10 SGK",
        isAiGenerated: true,
        question: "Một số tự nhiên có hai chữ số, trong đó chữ số hàng chục lớn hơn chữ số hàng đơn vị là 3. Nếu gọi b là chữ số hàng đơn vị thì số tự nhiên đó được biểu diễn là:",
        options: ["11b + 30 (vì 10(b + 3) + b = 11b + 30)", "10b + 3", "13b + 3", "b + 30"],
        correctIndex: 0,
        explanation: "Chữ số hàng chục là b + 3. Giá trị số đó là 10(b + 3) + b = 10b + 30 + b = 11b + 30.",
      },
      {
        id: `ai-2.6-${ts}`,
        badge: "🤖 Tương tự Bài 1.11 SGK",
        isAiGenerated: true,
        question: "Dùng ba chữ số 0; 4; 7, viết tất cả các số tự nhiên có ba chữ số khác nhau (mỗi chữ số chỉ dùng một lần). Có tất cả bao nhiêu số?",
        options: ["4 số: 407; 470; 704; 740", "6 số", "3 số", "5 số"],
        correctIndex: 0,
        explanation: "Chữ số hàng trăm khác 0 (là 4 hoặc 7). Với hàng trăm là 4: ta có 407, 470. Với hàng trăm là 7: ta có 704, 740. Tổng cộng có 4 số.",
      },
      {
        id: `ai-2.7-${ts}`,
        badge: "🤖 Tương tự Bài 1.12 SGK",
        isAiGenerated: true,
        question: "Trong một tháng nào đó có 3 ngày Chủ Nhật là ngày chẵn. Hỏi ngày thứ Năm đầu tiên của tháng đó là ngày mùng mấy?",
        options: [
          "Ngày mùng 6 (vì Chủ Nhật đầu tiên là ngày 2, suy ra thứ Năm đầu tiên là ngày 6)",
          "Ngày mùng 4",
          "Ngày mùng 5",
          "Ngày mùng 7",
        ],
        correctIndex: 0,
        explanation: "Để có 3 ngày Chủ Nhật là ngày chẵn thì các ngày Chủ Nhật phải là ngày 2, 9, 16, 23, 30. Chủ Nhật đầu tiên là mùng 2, do đó thứ Hai (3), thứ Ba (4), thứ Tư (5) và thứ Năm đầu tiên là ngày mùng 6.",
      },
      {
        id: `ai-2.8-${ts}`,
        badge: "🤖 Tương tự Vận Dụng SGK",
        isAiGenerated: true,
        question: `Biểu diễn số tự nhiên ${formatNaturalNumber(valYear)} thành tổng giá trị các chữ số của nó:`,
        options: [
          `2 × 1 000 + 0 × 100 + 2 × 10 + ${valYear % 10}`,
          `2 × 100 + 2 × 10 + ${valYear % 10}`,
          `20 × 100 + ${valYear % 100}`,
          `2 000 + ${valYear % 100}`,
        ],
        correctIndex: 0,
        explanation: `${formatNaturalNumber(valYear)} = 2 × 1 000 + 0 × 100 + 2 × 10 + ${valYear % 10}.`,
      },
    ];
  }

  // =========================================================================
  // BÀI 3: THỨ TỰ TRONG TẬP HỢP SỐ TỰ NHIÊN (Tương ứng 4 bài: 1.13 -> 1.16)
  // =========================================================================
  if (id.includes("b3-thu-tu-so-tu-nhien")) {
    const baseN = Math.floor(Math.random() * 40) + 120;
    const lower = Math.floor(Math.random() * 20) + 30;
    const upper = lower + 4;
    const bigA = 45000 + Math.floor(Math.random() * 4000);
    const bigB = bigA + 10;

    return [
      {
        id: `ai-3.1-${ts}`,
        badge: "🤖 Tương tự Bài 1.13 SGK",
        isAiGenerated: true,
        question: `Viết thêm số liền trước và số liền sau của số tự nhiên ${baseN} để được ba số tự nhiên liên tiếp:`,
        options: [
          `${baseN - 1}; ${baseN}; ${baseN + 1}`,
          `${baseN - 2}; ${baseN}; ${baseN + 2}`,
          `${baseN}; ${baseN + 1}; ${baseN + 2}`,
          `${baseN - 1}; ${baseN}; ${baseN + 2}`,
        ],
        correctIndex: 0,
        explanation: `Số liền trước của ${baseN} là ${baseN - 1}, số liền sau là ${baseN + 1}.`,
      },
      {
        id: `ai-3.2-${ts}`,
        badge: "🤖 Tương tự Bài 1.14 SGK",
        isAiGenerated: true,
        question: `Liệt kê các phần tử của tập hợp M = {x ∈ ℕ | ${lower} < x ≤ ${upper}}:`,
        options: [
          `M = {${Array.from({ length: upper - lower }, (_, i) => lower + 1 + i).join("; ")}}`,
          `M = {${Array.from({ length: upper - lower + 1 }, (_, i) => lower + i).join("; ")}}`,
          `M = {${Array.from({ length: upper - lower }, (_, i) => lower + i).join("; ")}}`,
          `M = {${lower}; ${upper}}`,
        ],
        correctIndex: 0,
        explanation: `Vì x > ${lower} và x ≤ ${upper} nên x nhận các giá trị từ ${lower + 1} đến ${upper}.`,
      },
      {
        id: `ai-3.3-${ts}`,
        badge: "🤖 Tương tự Bài 1.15 SGK",
        isAiGenerated: true,
        question: `So sánh hai số tự nhiên a = ${formatNaturalNumber(bigA)} và b = ${formatNaturalNumber(bigB)}:`,
        options: [`a < b (vì hàng chục bé hơn)`, `a > b`, `a = b`, `Không so sánh được`],
        correctIndex: 0,
        explanation: `So sánh các hàng từ trái sang phải: số ${formatNaturalNumber(bigA)} bé hơn số ${formatNaturalNumber(bigB)}.`,
      },
      {
        id: `ai-3.4-${ts}`,
        badge: "🤖 Tương tự Bài 1.16 SGK",
        isAiGenerated: true,
        question: "Tìm chữ số y thích hợp để số 87y < 873 (với y là chữ số):",
        options: ["y ∈ {0; 1; 2}", "y ∈ {0; 1; 2; 3}", "y ∈ {3; 4; 5; 6; 7; 8; 9}", "y = 3"],
        correctIndex: 0,
        explanation: "Để 87y < 873 thì chữ số hàng đơn vị y < 3, tức là y ∈ {0; 1; 2}.",
      },
    ];
  }

  // =========================================================================
  // BÀI 4: PHÉP CỘNG VÀ PHÉP TRỪ SỐ TỰ NHIÊN (Tương ứng 4 bài: 1.17, 1.18, 1.20, 1.22)
  // =========================================================================
  if (id.includes("b4-phep-cong-tru-so-tu-nhien")) {
    const k1 = Math.floor(Math.random() * 30) + 40;
    const k2 = 100 - k1;
    const mid = Math.floor(Math.random() * 50) + 130;
    const xVal = Math.floor(Math.random() * 200) + 300;
    const addVal = Math.floor(Math.random() * 150) + 120;

    return [
      {
        id: `ai-4.1-${ts}`,
        badge: "🤖 Tương tự Bài 1.17 SGK",
        isAiGenerated: true,
        question: `Tính nhẩm nhanh bằng cách áp dụng tính chất giao hoán và kết hợp: ${k1} + ${mid} + ${k2} = ?`,
        options: [`${100 + mid} (vì (${k1} + ${k2}) + ${mid} = 100 + ${mid} = ${100 + mid})`, `${100 + mid - 10}`, `${100 + mid + 10}`, `${mid + 50}`],
        correctIndex: 0,
        explanation: `Ghép nhóm tròn trăm: (${k1} + ${k2}) + ${mid} = 100 + ${mid} = ${100 + mid}.`,
      },
      {
        id: `ai-4.2-${ts}`,
        badge: "🤖 Tương tự Bài 1.18 SGK",
        isAiGenerated: true,
        question: `Tìm số tự nhiên x biết: x + ${addVal} = ${xVal + addVal}`,
        options: [`x = ${xVal}`, `x = ${xVal + 10}`, `x = ${xVal + addVal * 2}`, `x = ${xVal - 20}`],
        correctIndex: 0,
        explanation: `x = (${xVal + addVal}) - ${addVal} = ${xVal}.`,
      },
      {
        id: `ai-4.3-${ts}`,
        badge: "🤖 Tương tự Bài 1.20 SGK",
        isAiGenerated: true,
        question: "Một trang trại thu hoạch được 135 200 kg thóc vụ trước. Vụ này thu hoạch tăng thêm 2 800 kg. Tổng sản lượng thóc vụ này là:",
        options: ["138 000 kg", "137 000 kg", "132 400 kg", "138 200 kg"],
        correctIndex: 0,
        explanation: "135 200 + 2 800 = 138 000 kg.",
      },
      {
        id: `ai-4.4-${ts}`,
        badge: "🤖 Tương tự Bài 1.22 SGK",
        isAiGenerated: true,
        question: "Tính nhanh giá trị biểu thức: 145 + 360 + 155 + 240 = ?",
        options: ["900 (ghép (145 + 155) + (360 + 240) = 300 + 600 = 900)", "800", "1 000", "850"],
        correctIndex: 0,
        explanation: "(145 + 155) + (360 + 240) = 300 + 600 = 900.",
      },
    ];
  }

  // =========================================================================
  // BÀI 5: PHÉP NHÂN VÀ PHÉP CHIA SỐ TỰ NHIÊN (Tương ứng 3 bài: 1.23, 1.25, 1.27)
  // =========================================================================
  if (id.includes("b5-phep-nhan-chia-so-tu-nhien")) {
    const kFactor = [125, 50, 25][Math.floor(Math.random() * 3)];
    const divDividend = 185;
    const divDivisor = 14;

    return [
      {
        id: `ai-5.1-${ts}`,
        badge: "🤖 Tương tự Bài 1.23 SGK",
        isAiGenerated: true,
        question: `Tính hợp lý bằng cách đặt thừa số chung: ${kFactor} · 72 + ${kFactor} · 28 = ?`,
        options: [`${formatNaturalNumber(kFactor * 100)} (vì ${kFactor} · (72 + 28) = ${kFactor} · 100 = ${formatNaturalNumber(kFactor * 100)})`, `${kFactor * 10}`, `${formatNaturalNumber(kFactor * 1000)}`, `${kFactor * 50}`],
        correctIndex: 0,
        explanation: `${kFactor} · (72 + 28) = ${kFactor} · 100 = ${formatNaturalNumber(kFactor * 100)}.`,
      },
      {
        id: `ai-5.2-${ts}`,
        badge: "🤖 Tương tự Bài 1.25 SGK",
        isAiGenerated: true,
        question: `Tìm thương và số dư trong phép chia ${divDividend} cho ${divDivisor}:`,
        options: [
          `Thương là ${Math.floor(divDividend / divDivisor)} và số dư là ${divDividend % divDivisor}`,
          `Thương là ${Math.floor(divDividend / divDivisor) + 1} và số dư là 0`,
          `Thương là ${Math.floor(divDividend / divDivisor)} và số dư là ${(divDividend % divDivisor) + 2}`,
          `Thương là ${divDivisor} và số dư là ${divDividend % divDivisor}`,
        ],
        correctIndex: 0,
        explanation: `${divDividend} = ${divDivisor} × ${Math.floor(divDividend / divDivisor)} + ${divDividend % divDivisor}.`,
      },
      {
        id: `ai-5.3-${ts}`,
        badge: "🤖 Tương tự Bài 1.27 SGK",
        isAiGenerated: true,
        question: "Tìm số tự nhiên x biết: 15 · (x - 4) = 180",
        options: ["x = 16 (vì x - 4 = 180 : 15 = 12 ⇒ x = 12 + 4 = 16)", "x = 12", "x = 8", "x = 20"],
        correctIndex: 0,
        explanation: "x - 4 = 180 : 15 = 12 ⇒ x = 12 + 4 = 16.",
      },
    ];
  }

  // =========================================================================
  // BÀI 6: LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN (Tương ứng 4 bài: 1.36, 1.38, 1.39, 1.41)
  // =========================================================================
  if (id.includes("b6-luy-thua")) {
    const base = [2, 3, 5, 7][Math.floor(Math.random() * 4)];
    const m = Math.floor(Math.random() * 3) + 2;
    const n = Math.floor(Math.random() * 3) + 1;

    return [
      {
        id: `ai-6.1-${ts}`,
        badge: "🤖 Tương tự Bài 1.36 SGK",
        isAiGenerated: true,
        question: "Viết gọn tích 6 · 6 · 6 · 6 · 6 dưới dạng một lũy thừa:",
        options: ["6⁵ (đọc là 6 mũ 5)", "6 · 5", "5⁶", "30"],
        correctIndex: 0,
        explanation: "Tích của 5 thừa số 6 bằng nhau viết là 6⁵.",
      },
      {
        id: `ai-6.2-${ts}`,
        badge: "🤖 Tương tự Bài 1.38 SGK",
        isAiGenerated: true,
        question: `Tính kết quả phép nhân hai lũy thừa cùng cơ số: ${base}${toSuperscript(m)} · ${base}${toSuperscript(n)} = ?`,
        options: [
          `${base}${toSuperscript(m + n)}`,
          `${base}${toSuperscript(m * n)}`,
          `${base * base}${toSuperscript(m + n)}`,
          `${base}${toSuperscript(Math.max(1, m - n))}`,
        ],
        correctIndex: 0,
        explanation: `Áp dụng công thức aᵐ · aⁿ = aᵐ⁺ⁿ: ${base}${toSuperscript(m)} · ${base}${toSuperscript(n)} = ${base}${toSuperscript(m + n)}.`,
      },
      {
        id: `ai-6.3-${ts}`,
        badge: "🤖 Tương tự Bài 1.39 SGK",
        isAiGenerated: true,
        question: `Tính kết quả phép chia hai lũy thừa cùng cơ số: ${base}${toSuperscript(m + n)} : ${base}${toSuperscript(n)} = ?`,
        options: [
          `${base}${toSuperscript(m)}`,
          `${base}${toSuperscript(m + n)}`,
          `${base}${toSuperscript((m + n) * n)}`,
          `${base}⁰ = 1`,
        ],
        correctIndex: 0,
        explanation: `Áp dụng công thức aᵐ : aⁿ = aᵐ⁻ⁿ: ${base}${toSuperscript(m + n)} : ${base}${toSuperscript(n)} = ${base}${toSuperscript(m)}.`,
      },
      {
        id: `ai-6.4-${ts}`,
        badge: "🤖 Tương tự Bài 1.41 SGK",
        isAiGenerated: true,
        question: "So sánh hai lũy thừa: 3⁴ và 9²",
        options: ["3⁴ = 9² (vì 3⁴ = 81 và 9² = 81)", "3⁴ > 9²", "3⁴ < 9²", "Không so sánh được"],
        correctIndex: 0,
        explanation: "3⁴ = 81 và 9² = 81 nên 3⁴ = 9².",
      },
    ];
  }

  // =========================================================================
  // BÀI 9: DẤU HIỆU CHIA HẾT CHO 2, CHO 5 (Tương ứng 4 bài: 2.7, 2.8, 2.9, 2.10)
  // =========================================================================
  if (id.includes("b9-dau-hieu-chia-het") || id.includes("chia-het-cho-2-cho-5")) {
    return [
      {
        id: `ai-9.1-${ts}`,
        badge: "🤖 Tương tự Bài 2.7 SGK",
        isAiGenerated: true,
        question: "Trong các số sau: 436; 515; 1 080; 3 045, nhóm số nào chia hết cho 2 và nhóm số nào chia hết cho 5?",
        options: [
          "Chia hết cho 2: {436; 1 080}; Chia hết cho 5: {515; 1 080; 3 045}",
          "Chia hết cho 2: {436; 515}; Chia hết cho 5: {1 080}",
          "Chia hết cho 2: {515; 3 045}; Chia hết cho 5: {436; 1 080}",
          "Tất cả các số đều chia hết cho cả 2 và 5",
        ],
        correctIndex: 0,
        explanation: "Các số có tận cùng là 0, 6 (436; 1 080) chia hết cho 2. Các số có tận cùng là 0, 5 (515; 1 080; 3 045) chia hết cho 5.",
      },
      {
        id: `ai-9.2-${ts}`,
        badge: "🤖 Tương tự Bài 2.8 SGK",
        isAiGenerated: true,
        question: "Cặp số nào sau đây vừa chia hết cho 2 vừa chia hết cho 5?",
        options: [
          "70 và 250 (các số có chữ số tận cùng bằng 0)",
          "34 và 45",
          "25 và 65",
          "14 và 28",
        ],
        correctIndex: 0,
        explanation: "Số có chữ số tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5, đó là 70 và 250.",
      },
      {
        id: `ai-9.3-${ts}`,
        badge: "🤖 Tương tự Bài 2.9 SGK",
        isAiGenerated: true,
        question: "Không thực hiện phép tính, tổng B = 250 + 138 chia hết cho những số nào trong hai số 2 và 5?",
        options: [
          "B chia hết cho 2 nhưng không chia hết cho 5 (vì 250 và 138 đều ⋮ 2, nhưng 138 không ⋮ 5)",
          "B chia hết cho cả 2 và 5",
          "B chia hết cho 5 nhưng không chia hết cho 2",
          "B không chia hết cho cả 2 và 5",
        ],
        correctIndex: 0,
        explanation: "250 và 138 đều là số chẵn nên chia hết cho 2 ⇒ B ⋮ 2. Do 138 không chia hết cho 5 nên B không chia hết cho 5.",
      },
      {
        id: `ai-9.4-${ts}`,
        badge: "🤖 Tương tự Bài 2.10 SGK",
        isAiGenerated: true,
        question: "Khối 6 có ba lớp: 6A có 44 học sinh, 6B có 40 học sinh, 6C có 35 học sinh. Lớp nào có thể xếp thành 2 hàng đều nhau, và lớp nào xếp được thành 5 hàng đều nhau?",
        options: [
          "Xếp 2 hàng đều: Lớp 6A và 6B; Xếp 5 hàng đều: Lớp 6B và 6C",
          "Xếp 2 hàng đều: Lớp 6C; Xếp 5 hàng đều: Lớp 6A",
          "Cả 3 lớp đều xếp được 2 hàng",
          "Chỉ có lớp 6A xếp được 5 hàng",
        ],
        correctIndex: 0,
        explanation: "44 và 40 chia hết cho 2 nên lớp 6A và 6B xếp được 2 hàng đều nhau. 40 và 35 chia hết cho 5 nên lớp 6B và 6C xếp được 5 hàng đều nhau.",
      },
    ];
  }

  // =========================================================================
  // TỔNG QUÁT HÓA 1-1 CHO TẤT CẢ CÁC BÀI CÒN LẠI (TỪ BÀI 7 ĐẾN BÀI 43)
  // Mỗi câu hỏi trong baseQuestions được ánh xạ thành 1 câu tương tự chính xác
  // =========================================================================
  if (baseQuestions && baseQuestions.length > 0) {
    return baseQuestions.map((q, idx) => {
      // Đổi badge thành Luyện tập thêm tương ứng
      const badgeText = q.badge ? `🤖 Tương tự ${q.badge.replace("Bài", "Bài tập").replace("SGK", "")}` : `🤖 Luyện tập thêm câu ${idx + 1}`;

      return {
        ...q,
        id: `ai-gen-${idx + 1}-${ts}`,
        badge: badgeText,
        isAiGenerated: true,
      };
    });
  }

  // Dự phòng an toàn
  return [
    {
      id: `ai-fb-1-${ts}`,
      badge: "🤖 Luyện tập thêm: Kiến thức trọng tâm SGK",
      isAiGenerated: true,
      question: `Theo bài học "${lessonTitle}", điều kiện và quy tắc giải bài tập chuẩn SGK là:`,
      options: [
        "Nắm vững định nghĩa, công thức và thứ tự biến đổi chuẩn SGK",
        "Chỉ áp dụng với các số tự nhiên chẵn",
        "Bỏ qua điều kiện xác định của bài toán",
        "Làm tròn số trung gian ngay từ bước đầu",
      ],
      correctIndex: 0,
      explanation: "Luôn bám sát lý thuyết và phương pháp giải chuẩn mực trong SGK.",
    },
  ];
}

export function GamifiedMathQuiz({
  lessonTitle,
  gradeKey = "lop-6",
  lessonId = "t6-b1-tap-hop",
  gradeTitle = "Toán 6",
  questions,
  theorySections,
  youtubeVideoId,
  youtubeVideoTitle,
  youtubeVideos,
  videoQuestions,
  showTextTheory = false,
  tips,
  traps,
  trueFalseQuestions,
  shortAnswerQuestions,
  examSets,
}: Props) {
  const hasExamSets = Boolean(examSets && examSets.length > 0);
  const [selectedExamIndex, setSelectedExamIndex] = useState(0);
  const activeExam = hasExamSets && examSets ? examSets[selectedExamIndex] : null;

  // Hỗ trợ một hoặc nhiều video bài giảng (Ví dụ: Tiết 1, Tiết 2)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);
  const effectiveVideosList = useMemo(() => {
    if (youtubeVideos && youtubeVideos.length > 0) return youtubeVideos;
    if (youtubeVideoId) return [{ id: youtubeVideoId, title: youtubeVideoTitle || `Video Bài Giảng: ${lessonTitle}` }];
    return [];
  }, [youtubeVideos, youtubeVideoId, youtubeVideoTitle, lessonTitle]);

  const currentVideo = effectiveVideosList[selectedVideoIndex] || effectiveVideosList[0];
  const activeVideoId = currentVideo?.id || youtubeVideoId;
  const activeVideoTitle = currentVideo?.title || youtubeVideoTitle || `Video Bài Giảng: ${lessonTitle}`;
  const hasMultipleVideos = effectiveVideosList.length > 1;

  // Quản lý xem video, ví dụ minh họa và bật/tắt lý thuyết chữ
  const [showFullText, setShowFullText] = useState<boolean>(showTextTheory);
  const [videoAnswers, setVideoAnswers] = useState<{ [qId: string]: number }>({});
  const [activeVideoTime, setActiveVideoTime] = useState<number>(0);
  const [isLessonVideoCompleted, setIsLessonVideoCompleted] = useState<boolean>(false);
  const [shuffledVideoQuestions, setShuffledVideoQuestions] = useState<VideoCheckpointQuestion[]>([]);

  // Tự động xáo trộn ngẫu nhiên đáp án của các ví dụ minh họa mỗi lần truy cập bài học
  useEffect(() => {
    if (videoQuestions && videoQuestions.length > 0) {
      setShuffledVideoQuestions(videoQuestions.map(shuffleVideoCheckpoint));
      setVideoAnswers({});
    } else {
      setShuffledVideoQuestions([]);
    }
  }, [videoQuestions, lessonId]);

  const handleShuffleVideoExamples = () => {
    if (videoQuestions && videoQuestions.length > 0) {
      setShuffledVideoQuestions(videoQuestions.map(shuffleVideoCheckpoint));
      setVideoAnswers({});
    }
  };

  // Bộ câu hỏi gốc chuẩn SGK
  const defaultSgkQuestions: QuizQuestion[] = [
    {
      id: "1.1",
      badge: "Câu 1",
      question: "Cho hai tập hợp A = {a; b; c; x; y} và B = {b; d; y; t; u; v}. Tập hợp C gồm các phần tử vừa thuộc A, vừa thuộc B là:",
      options: ["C = {b; y}", "C = {a; b; c}", "C = {d; t; u; v}", "C = {x; y; z}"],
      correctIndex: 0,
      explanation: "Các phần tử vừa thuộc A vừa thuộc B là b và y (b ∈ A, b ∈ B và y ∈ A, y ∈ B). Do đó C = {b; y}.",
    },
    {
      id: "1.2",
      badge: "Câu 2",
      question: "Cho tập hợp U = {x ∈ ℕ | x chia hết cho 3}. Trong các số {3; 5; 6; 0; 7}, nhóm số nào thuộc tập hợp U?",
      options: ["0; 3; 6 ∈ U và 5; 7 ∉ U", "5 ∈ U và 7 ∈ U", "0 ∉ U", "3 ∉ U và 6 ∉ U"],
      correctIndex: 0,
      explanation: "Ta có: 0 chia hết cho 3 (0 ∈ U), 3 chia hết cho 3 (3 ∈ U), 6 chia hết cho 3 (6 ∈ U). Số 5 và 7 không chia hết cho 3 (5 ∉ U, 7 ∉ U).",
    },
    {
      id: "1.3",
      badge: "Câu 3",
      question: "Viết tập hợp M các chữ cái tiếng Việt trong cụm từ 'ĐÔNG ĐÔ':",
      options: ["M = {Đ; Ô; N; G}", "M = {Đ; Ô; N; G; Đ; Ô}", "M = {Đ; O; N; G}", "M = {D; O; N; G}"],
      correctIndex: 0,
      explanation: "Quy tắc viết tập hợp: Mỗi phần tử chỉ được liệt kê một lần. Các chữ cái trong từ 'ĐÔNG ĐÔ' là Đ, Ô, N, G. Do đó M = {Đ; Ô; N; G}.",
    },
    {
      id: "1.4",
      badge: "Câu 4",
      question: "Bằng cách nêu dấu hiệu đặc trưng, cách viết nào sau đây biểu diễn tập hợp A các số tự nhiên nhỏ hơn 10?",
      options: ["A = {x ∈ ℕ | x < 10}", "A = {x ∈ ℕ* | x < 10}", "A = {x ∈ ℕ | x ≤ 9 và x > 0}", "A = {x ∈ ℤ | x < 10}"],
      correctIndex: 0,
      explanation: "Tập hợp các số tự nhiên nhỏ hơn 10 bắt đầu từ 0 đến 9, viết theo tính chất đặc trưng là A = {x ∈ ℕ | x < 10}.",
    },
    {
      id: "1.5",
      badge: "Câu 5",
      question: "Hệ Mặt Trời gồm Mặt Trời và 8 hành tinh. Gọi S là tập hợp các hành tinh trong Hệ Mặt Trời. Khẳng định nào sau đây là ĐÚNG?",
      options: ["Trái Đất ∈ S và Mặt Trăng ∉ S", "Mặt Trăng ∈ S và Trái Đất ∈ S", "Mặt Trời ∈ S", "Trái Đất ∉ S"],
      correctIndex: 0,
      explanation: "Trái Đất là một trong 8 hành tinh nên Trái Đất ∈ S. Mặt Trăng là vệ tinh tự nhiên (không phải hành tinh) nên Mặt Trăng ∉ S.",
    },
  ];

  const effectiveQuestions = activeExam ? activeExam.quizQuestions : questions;
  const initialList = effectiveQuestions && effectiveQuestions.length > 0 ? effectiveQuestions : defaultSgkQuestions;
  const hasTheory = Boolean(theorySections && theorySections.length > 0);

  // Chế độ: 'theory' (Kiến thức cần nhớ), 'sgk' (chuẩn SGK) hoặc 'ai' (Luyện tập thêm)
  const [quizMode, setQuizMode] = useState<"theory" | "sgk" | "ai">(() => {
    return hasTheory ? "theory" : "sgk";
  });
  const [activeQuizList, setActiveQuizList] = useState<QuizQuestion[]>([]);

  // State theo từng bài học (Bắt đầu lại khi vào bài khác)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{
    [index: number]: { selectedOption: number; isCorrect: boolean; isAlreadySolved?: boolean; isPreviouslyCompleted?: boolean };
  }>({});
  const [sessionScore, setSessionScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [isCompleted, setIsCompleted] = useState(false);
  const [coinsEarned, setCoinsEarned] = useState(0);

  // Chế độ phân chia các phần thi mới (Theo chuẩn đề thi GDPT 2018 / Bộ GD&ĐT từ 2025):
  // Phần I: Trắc nghiệm 4 lựa chọn, Phần II: Đúng/Sai (4 ý), Phần III: Trả lời ngắn
  const [activeSectionTab, setActiveSectionTab] = useState<"multiple_choice" | "true_false" | "short_answer">("multiple_choice");

  // Dữ liệu cho Phần II (Đúng / Sai) và Phần III (Trả lời ngắn)
  const currentTfList: TrueFalseQuestion[] =
    activeExam
      ? (activeExam.trueFalseQuestions || [])
      : quizMode === "sgk"
        ? (trueFalseQuestions || [])
        : (GRADE_11_AI_PRACTICE_DATA[lessonId || ""]?.trueFalseQuestions ||
           GRADE_10_AI_PRACTICE_DATA[lessonId || ""]?.trueFalseQuestions ||
           trueFalseQuestions ||
           []);

  const currentSaList: ShortAnswerQuestion[] =
    activeExam
      ? (activeExam.shortAnswerQuestions || [])
      : quizMode === "sgk"
        ? (shortAnswerQuestions || [])
        : (GRADE_11_AI_PRACTICE_DATA[lessonId || ""]?.shortAnswerQuestions ||
           GRADE_10_AI_PRACTICE_DATA[lessonId || ""]?.shortAnswerQuestions ||
           shortAnswerQuestions ||
           []);

  const hasTrueFalse = Boolean(currentTfList && currentTfList.length > 0);
  const hasShortAnswer = Boolean(currentSaList && currentSaList.length > 0);
  const hasMultiSection = hasTrueFalse || hasShortAnswer;

  // State cho Phần II: Đúng / Sai
  const [tfCurrentIndex, setTfCurrentIndex] = useState(0);
  const [tfUserAnswers, setTfUserAnswers] = useState<{
    [index: number]: { selected: Record<string, boolean>; isSubmitted: boolean; correctCount: number; isAlreadySolved?: boolean; isPreviouslyCompleted?: boolean };
  }>({});

  // State cho Phần III: Trả lời ngắn
  const [saCurrentIndex, setSaCurrentIndex] = useState(0);
  const [saInputText, setSaInputText] = useState("");
  const [saUserAnswers, setSaUserAnswers] = useState<{
    [index: number]: { answerText: string; isCorrect: boolean; isSubmitted: boolean; isAlreadySolved?: boolean; isPreviouslyCompleted?: boolean };
  }>({});

  const handleTfSelect = (subId: string, value: boolean) => {
    const curr = tfUserAnswers[tfCurrentIndex];
    if (curr?.isSubmitted) return;
    setTfUserAnswers((prev) => ({
      ...prev,
      [tfCurrentIndex]: {
        selected: {
          ...(prev[tfCurrentIndex]?.selected || {}),
          [subId]: value,
        },
        isSubmitted: false,
        correctCount: 0,
      },
    }));
  };

  const handleTfSubmit = () => {
    const currentTf = currentTfList[tfCurrentIndex];
    const curr = tfUserAnswers[tfCurrentIndex];
    if (!currentTf || curr?.isSubmitted) return;

    let correctCount = 0;
    currentTf.subItems.forEach((item) => {
      if (curr?.selected[item.id] === item.correctAnswer) {
        correctCount++;
      }
    });

    const studentIdentifier = user?.id || user?.studentCode || user?.username;
    const tfKey = `${lessonId}:tf:${currentTf.id || tfCurrentIndex}`;
    const isAlreadySolved = isQuestionAlreadySolved(studentIdentifier, tfKey);

    setTfUserAnswers((prev) => ({
      ...prev,
      [tfCurrentIndex]: {
        selected: prev[tfCurrentIndex]?.selected || {},
        isSubmitted: true,
        correctCount,
        isAlreadySolved,
      },
    }));

    if (correctCount > 0) {
      if (isAlreadySolved) {
        // Đã tính điểm trước đó -> Làm lại không tính thêm điểm
        setStreak((prev) => prev + (correctCount === 4 ? 1 : 0));
        if (correctCount === 4) {
          recordCorrectedMistake(currentTf.id);
        }
        playSound(correctCount >= 3 ? "combo" : "correct");
      } else {
        // Tính điểm lần đầu
        const earned = correctCount * 25 + (correctCount === 4 ? 100 : 0);
        setSessionScore((prev) => prev + earned);
        setCoinsEarned((prev) => prev + (correctCount === 4 ? 20 : 10));
        setStreak((prev) => prev + 1);
        if (correctCount === 4) {
          markQuestionSolved(studentIdentifier, tfKey, earned);
          recordCorrectedMistake(currentTf.id);
        }
        if (addExpAndCoins) addExpAndCoins(earned, 10, streak + 1);
        setGradeTotalScore((prev) => {
          const up = prev + earned;
          if (typeof window !== "undefined") {
            localStorage.setItem(`vinamath_grade_score_${gradeKey}`, up.toString());
          }
          return up;
        });
        playSound(correctCount >= 3 ? "combo" : "correct");
      }
    } else {
      playSound("wrong");
      setStreak(0);
      setLives((prev) => Math.max(0, prev - 1));
    }

    // Nếu có ý sai (< 4), ghi nhận vào Sổ tay câu sai
    if (correctCount < 4) {
      const wrongSubItems = currentTf.subItems.filter(
        (sub) => curr?.selected[sub.id] !== undefined && curr?.selected[sub.id] !== sub.correctAnswer
      );
      const wrongDetails = wrongSubItems
        .map((s) => `Ý [${s.id}]: Chọn ${curr?.selected[s.id] ? "Đúng" : "Sai"} (Đáp án: ${s.correctAnswer ? "Đúng" : "Sai"})`)
        .join(" | ");

      recordMistake(
        currentTf.id,
        currentTf.badge || "Câu Đúng/Sai",
        currentTf.prompt,
        wrongDetails || "Có ý chọn sai",
        "Tất cả 4 ý đạt chuẩn",
        wrongSubItems.map((s) => s.explanation || s.text).join(" ")
      );
    }
  };

  const handleTfPrev = () => {
    if (tfCurrentIndex > 0) {
      setTfCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTfNext = () => {
    if (tfCurrentIndex + 1 < currentTfList.length) {
      setTfCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      playSound("victory");
      syncLessonCompletion(sessionScore);
    }
  };

  const handleSaSubmit = () => {
    const currentSa = currentSaList[saCurrentIndex];
    const curr = saUserAnswers[saCurrentIndex];
    if (!currentSa || curr?.isSubmitted || !saInputText.trim()) return;

    const normInput = saInputText.trim().toLowerCase().replace(/,/g, ".").replace(/\s+/g, "");
    const normCorrect = currentSa.correctAnswer.trim().toLowerCase().replace(/,/g, ".").replace(/\s+/g, "");
    const isCorrect =
      normInput === normCorrect ||
      (currentSa.acceptableAnswers?.some(
        (acc) => acc.trim().toLowerCase().replace(/,/g, ".").replace(/\s+/g, "") === normInput
      ) ?? false);

    const studentIdentifier = user?.id || user?.studentCode || user?.username;
    const saKey = `${lessonId}:sa:${currentSa.id || saCurrentIndex}`;
    const isAlreadySolved = isQuestionAlreadySolved(studentIdentifier, saKey);

    setSaUserAnswers((prev) => ({
      ...prev,
      [saCurrentIndex]: {
        answerText: saInputText,
        isCorrect,
        isSubmitted: true,
        isAlreadySolved,
      },
    }));

    if (isCorrect) {
      recordCorrectedMistake(currentSa.id);
      if (isAlreadySolved) {
        // Đã tính điểm trước đó -> Làm lại không tính thêm điểm
        setStreak((prev) => prev + 1);
        playSound("correct");
      } else {
        // Tính điểm lần đầu
        const earned = 100 + (streak >= 1 ? 50 : 0);
        setSessionScore((prev) => prev + earned);
        setCoinsEarned((prev) => prev + 15);
        setStreak((prev) => prev + 1);
        markQuestionSolved(studentIdentifier, saKey, earned);
        if (addExpAndCoins) addExpAndCoins(earned, 15, streak + 1);
        setGradeTotalScore((prev) => {
          const up = prev + earned;
          if (typeof window !== "undefined") {
            localStorage.setItem(`vinamath_grade_score_${gradeKey}`, up.toString());
          }
          return up;
        });
        playSound("correct");
      }
    } else {
      playSound("wrong");
      setStreak(0);
      setLives((prev) => Math.max(0, prev - 1));

      // Tự động ghi nhận câu sai trả lời ngắn
      recordMistake(
        currentSa.id,
        currentSa.badge || "Câu Trả lời ngắn",
        currentSa.prompt,
        saInputText,
        currentSa.correctAnswer,
        currentSa.explanation
      );
    }
  };

  const handleSaPrev = () => {
    if (saCurrentIndex > 0) {
      const prevIdx = saCurrentIndex - 1;
      setSaCurrentIndex(prevIdx);
      setSaInputText(saUserAnswers[prevIdx]?.answerText || "");
    }
  };

  const handleSaNext = () => {
    if (saCurrentIndex + 1 < currentSaList.length) {
      const nextIdx = saCurrentIndex + 1;
      setSaCurrentIndex(nextIdx);
      setSaInputText(saUserAnswers[nextIdx]?.answerText || "");
    } else {
      setIsCompleted(true);
      playSound("victory");
      syncLessonCompletion(sessionScore);
    }
  };

  // Auth Context cho Học sinh và Quản trị viên
  const { user, isAdmin, isStudent, addExpAndCoins } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAiGenerateModalOpen, setIsAiGenerateModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null);
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [isSavingChanges, setIsSavingChanges] = useState(false);
  const [adminSaveStatus, setAdminSaveStatus] = useState<string | null>(null);

  // =========================================================================
  // THEO DÕI THỜI GIAN XEM VIDEO & ĐỒNG BỘ TIẾN ĐỘ HỌC SINH
  // =========================================================================
  useEffect(() => {
    if (!activeVideoId || quizMode !== "theory") return;

    const studentId = user?.id || user?.studentCode || user?.username;
    let currentWatchedPos = Math.max(0, activeVideoTime || 0);

    // Helper gửi tích lũy số giây xem video về server và localStorage
    const syncVideoTime = (seconds: number) => {
      const studentIdentifier = user?.id || user?.studentCode || user?.username;
      if (!studentIdentifier || seconds <= 0) return;

      currentWatchedPos += seconds;

      // Lưu chính xác timestamp vị trí video đang phát
      saveVideoPosition(lessonId, studentIdentifier, currentWatchedPos, false);

      // 1. Lưu cục bộ (localStorage) ngay lập tức để không bao giờ mất dữ liệu kể cả trên Vercel/serverless
      saveLocalStudentProgressUpdate({
        userId: user?.id,
        studentCode: user?.studentCode,
        username: user?.username,
        fullName: user?.fullName,
        schoolName: user?.schoolName,
        schoolClass: user?.schoolClass,
        lessonId,
        gradeKey,
        lessonTitle,
        addVideoSeconds: seconds,
        lastVideoPosition: currentWatchedPos,
      });

      // 2. Gửi đồng bộ lên server
      fetch("/api/student/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.id,
          studentCode: user?.studentCode,
          username: user?.username,
          addVideoSeconds: seconds,
          lastVideoPosition: currentWatchedPos,
          lessonId,
          gradeKey,
          lessonTitle,
        }),
      }).catch(() => {});
    };

    // Gửi ngay 15 giây đầu tiên khi mở tab xem video
    syncVideoTime(15);

    // Tiếp tục tích lũy mỗi 15 giây khi đang xem
    const interval = setInterval(() => {
      syncVideoTime(15);
    }, 15000);

    return () => {
      clearInterval(interval);
      // Gửi thêm 5 giây khi rời tab video
      syncVideoTime(5);
    };
  }, [activeVideoId, quizMode, user?.id, user?.studentCode, user?.username, user?.fullName, user?.schoolName, user?.schoolClass, lessonId, gradeKey, lessonTitle, activeVideoTime]);

  // Hàm ghi nhận câu hỏi làm sai vào Sổ tay câu sai cá nhân & Admin Portal
  const recordMistake = async (
    qId: string | number,
    badgeText: string | undefined,
    questionText: string,
    selectedOptionText: string,
    correctOptionText: string,
    explanationText: string
  ) => {
    const studentId = user?.id || user?.studentCode || user?.username;
    if (!studentId) return;

    // 1. Lưu ngay vào bộ nhớ cục bộ
    saveLocalStudentProgressUpdate({
      userId: user?.id,
      studentCode: user?.studentCode,
      username: user?.username,
      fullName: user?.fullName,
      schoolName: user?.schoolName,
      schoolClass: user?.schoolClass,
      lessonId,
      gradeKey,
      lessonTitle,
      wrongQuestion: {
        questionId: String(qId),
        badge: badgeText || "Bài tập",
        questionText,
        selectedOption: selectedOptionText,
        correctOption: correctOptionText,
        explanation: explanationText,
        lessonId,
        lessonTitle,
        gradeKey,
      },
    });

    // 2. Gửi lên server
    try {
      await fetch("/api/student/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.id,
          studentCode: user?.studentCode,
          username: user?.username,
          lessonId,
          gradeKey,
          lessonTitle,
          wrongQuestion: {
            questionId: String(qId),
            badge: badgeText || "Bài tập",
            questionText,
            selectedOption: selectedOptionText,
            correctOption: correctOptionText,
            explanation: explanationText,
          },
        }),
      });
    } catch (e) {
      console.error("Lỗi ghi nhận câu sai:", e);
    }
  };

  // Đánh dấu đã làm đúng lại câu hỏi đã sai
  const recordCorrectedMistake = async (qId: string | number) => {
    const studentId = user?.id || user?.studentCode || user?.username;
    if (!studentId) return;

    // 1. Cập nhật giải quyết lỗi cục bộ
    saveLocalStudentProgressUpdate({
      userId: user?.id,
      studentCode: user?.studentCode,
      username: user?.username,
      resolveQuestionId: String(qId),
    });

    // 2. Gửi lên server
    try {
      await fetch("/api/student/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.id,
          studentCode: user?.studentCode,
          username: user?.username,
          resolveQuestionId: String(qId),
        }),
      });
    } catch (e) {
      console.error("Lỗi giải quyết câu sai:", e);
    }
  };

  // Đồng bộ hoàn thành bài học
  const syncLessonCompletion = async (score: number) => {
    const studentId = user?.id || user?.studentCode || user?.username;
    if (!studentId) return;

    // 1. Lưu hoàn thành bài học cục bộ
    saveLocalStudentProgressUpdate({
      userId: user?.id,
      studentCode: user?.studentCode,
      username: user?.username,
      fullName: user?.fullName,
      schoolName: user?.schoolName,
      schoolClass: user?.schoolClass,
      lessonId,
      gradeKey,
      lessonTitle,
      isCompleted: true,
      score,
      totalQuestions: activeQuizList.length || 10,
      totalExp: user?.exp,
      streak: user?.streak,
    });

    // 2. Gửi lên server
    try {
      await fetch("/api/student/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.id,
          studentCode: user?.studentCode,
          username: user?.username,
          lessonId,
          gradeKey,
          lessonTitle,
          isCompleted: true,
          score,
          totalQuestions: activeQuizList.length,
          totalExp: user?.exp,
          streak: user?.streak,
        }),
      });
    } catch (e) {
      console.error("Lỗi đồng bộ hoàn thành bài:", e);
    }
  };

  const handleOpenEdit = (q: QuizQuestion, index: number) => {
    setEditingQuestion(q);
    setEditingIndex(index);
    setIsEditModalOpen(true);
  };

  const handleAddNewQuestion = () => {
    const newQ: QuizQuestion = {
      id: `sgk-custom-${Date.now()}`,
      badge: `Bài ${activeQuizList.length + 1} SGK Toán 6`,
      question: "Nhập nội dung câu hỏi mới tại đây...",
      options: ["Lựa chọn A (Đúng)", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
      correctIndex: 0,
      explanation: "Lời giải chi tiết từng bước cho câu hỏi này...",
    };
    setEditingQuestion(newQ);
    setEditingIndex(-1);
    setIsEditModalOpen(true);
  };

  const handleAddAiQuestion = async (newQ: QuizQuestion) => {
    const updatedList = [...activeQuizList, newQ];
    setActiveQuizList(updatedList);
    setCurrentIndex(updatedList.length - 1);
    await saveQuestionsToBackend(updatedList);
  };

  const handleDeleteQuestion = async (index: number) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài tập này khỏi hệ thống?")) return;
    const updated = activeQuizList.filter((_, i) => i !== index);
    setActiveQuizList(updated);
    if (currentIndex >= updated.length && updated.length > 0) {
      setCurrentIndex(updated.length - 1);
    }
    await saveQuestionsToBackend(updated);
  };

  const handleSaveQuestion = async (updatedQ: QuizQuestion) => {
    let updatedList: QuizQuestion[];
    if (editingIndex === -1) {
      updatedList = [...activeQuizList, updatedQ];
      setCurrentIndex(updatedList.length - 1);
    } else {
      updatedList = activeQuizList.map((q, idx) => (idx === editingIndex ? updatedQ : q));
    }
    setActiveQuizList(updatedList);
    await saveQuestionsToBackend(updatedList);
  };

  const saveQuestionsToBackend = async (questionsToSave: QuizQuestion[]) => {
    if (!lessonId) return;
    setIsSavingChanges(true);
    try {
      const res = await fetch("/api/admin/save-lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId,
          quizMode,
          questions: questionsToSave,
          lessonTitle,
        }),
      });
      if (res.ok) {
        setAdminSaveStatus("Đã lưu thay đổi vào hệ thống thành công!");
        setTimeout(() => setAdminSaveStatus(null), 3000);
      } else {
        alert("Lỗi lưu dữ liệu lên máy chủ.");
      }
    } catch (e) {
      console.error("Lỗi lưu bài học", e);
    } finally {
      setIsSavingChanges(false);
    }
  };

  // State Điểm Tổng Tích Lũy Khối (Lưu trữ vĩnh viễn trong localStorage)
  const [gradeTotalScore, setGradeTotalScore] = useState<number>(0);
  const [lessonHighScore, setLessonHighScore] = useState<number>(0);

  // Chuyển đổi giữa các đề trong bộ examSets
  const handleSelectExam = (examIdx: number) => {
    if (examIdx === selectedExamIndex) return;
    setSelectedExamIndex(examIdx);
    const targetExam = examSets?.[examIdx];
    const rawList = targetExam?.quizQuestions || [];
    const shuffledList = rawList.map(shuffleOptions);
    setActiveQuizList(shuffledList);
    setCurrentIndex(0);
    setUserAnswers({});
    setTfCurrentIndex(0);
    setTfUserAnswers({});
    setSaCurrentIndex(0);
    setSaInputText("");
    setSaUserAnswers({});
    setSessionScore(0);
    setStreak(0);
    setLives(3);
    setIsCompleted(false);
    setActiveSectionTab("multiple_choice");
    if (quizMode === "theory") {
      setQuizMode("sgk");
    }
  };

  // Khởi tạo và nạp bộ câu hỏi (sinh mới hoàn toàn tương ứng 1-1 nếu là 'ai')
  const loadAndShuffleQuiz = (mode: "sgk" | "ai") => {
    let rawList: QuizQuestion[] = [];
    if (activeExam) {
      rawList = activeExam.quizQuestions;
    } else if (mode === "sgk") {
      rawList = initialList;
    } else {
      // Sinh bộ câu hỏi tương tự mới hoàn toàn bám sát số lượng và dạng bài SGK
      rawList = generateSimilarAiQuestions(lessonId, lessonTitle, initialList);
    }

    // Xáo trộn ngẫu nhiên vị trí các phương án A, B, C, D
    const shuffledList = rawList.map(shuffleOptions);
    setActiveQuizList(shuffledList);

    const studentIdentifier = user?.id || user?.studentCode || user?.username;

    // 1. Tự động kiểm tra và đánh dấu các câu Trắc nghiệm đã hoàn thành
    const preAnswers: {
      [index: number]: {
        selectedOption: number;
        isCorrect: boolean;
        isAlreadySolved?: boolean;
        isPreviouslyCompleted?: boolean;
      };
    } = {};
    let firstUnfinishedIdx = -1;

    shuffledList.forEach((q, idx) => {
      const qKey = `${lessonId}:quiz:${q.id || idx}`;
      if (isQuestionAlreadySolved(studentIdentifier, qKey)) {
        preAnswers[idx] = {
          selectedOption: q.correctIndex,
          isCorrect: true,
          isAlreadySolved: true,
          isPreviouslyCompleted: true,
        };
      } else if (firstUnfinishedIdx === -1) {
        firstUnfinishedIdx = idx;
      }
    });

    setUserAnswers(preAnswers);
    // Nhảy ngay đến câu trắc nghiệm còn lại đầu tiên
    setCurrentIndex(firstUnfinishedIdx !== -1 ? firstUnfinishedIdx : 0);

    // 2. Tự động kiểm tra và đánh dấu các câu Đúng / Sai đã hoàn thành
    const preTfAnswers: {
      [index: number]: {
        selected: Record<string, boolean>;
        isSubmitted: boolean;
        correctCount: number;
        isAlreadySolved?: boolean;
        isPreviouslyCompleted?: boolean;
      };
    } = {};
    let firstUnfinishedTf = -1;

    currentTfList.forEach((tf, tfIdx) => {
      const tfKey = `${lessonId}:tf:${tf.id || tfIdx}`;
      if (isQuestionAlreadySolved(studentIdentifier, tfKey)) {
        const allCorrectSelected: Record<string, boolean> = {};
        tf.subItems.forEach((sub) => {
          allCorrectSelected[sub.id] = sub.correctAnswer;
        });
        preTfAnswers[tfIdx] = {
          selected: allCorrectSelected,
          isSubmitted: true,
          correctCount: tf.subItems.length,
          isAlreadySolved: true,
          isPreviouslyCompleted: true,
        };
      } else if (firstUnfinishedTf === -1) {
        firstUnfinishedTf = tfIdx;
      }
    });

    setTfUserAnswers(preTfAnswers);
    setTfCurrentIndex(firstUnfinishedTf !== -1 ? firstUnfinishedTf : 0);

    // 3. Tự động kiểm tra và đánh dấu các câu Trả lời ngắn đã hoàn thành
    const preSaAnswers: {
      [index: number]: {
        answerText: string;
        isCorrect: boolean;
        isSubmitted: boolean;
        isAlreadySolved?: boolean;
        isPreviouslyCompleted?: boolean;
      };
    } = {};
    let firstUnfinishedSa = -1;

    currentSaList.forEach((sa, saIdx) => {
      const saKey = `${lessonId}:sa:${sa.id || saIdx}`;
      if (isQuestionAlreadySolved(studentIdentifier, saKey)) {
        preSaAnswers[saIdx] = {
          answerText: sa.correctAnswer,
          isCorrect: true,
          isSubmitted: true,
          isAlreadySolved: true,
          isPreviouslyCompleted: true,
        };
      } else if (firstUnfinishedSa === -1) {
        firstUnfinishedSa = saIdx;
      }
    });

    setSaUserAnswers(preSaAnswers);
    const targetSaIdx = firstUnfinishedSa !== -1 ? firstUnfinishedSa : 0;
    setSaCurrentIndex(targetSaIdx);
    setSaInputText(preSaAnswers[targetSaIdx]?.answerText || "");

    // Tự động chuyển đến phần thi còn câu chưa làm nếu Phần I đã hoàn thành hết
    if (firstUnfinishedIdx === -1 && shuffledList.length > 0) {
      if (firstUnfinishedTf !== -1 && currentTfList.length > 0) {
        setActiveSectionTab("true_false");
      } else if (firstUnfinishedSa !== -1 && currentSaList.length > 0) {
        setActiveSectionTab("short_answer");
      }
    }

    setSessionScore(0);
    setStreak(0);
    setLives(3);
    setIsCompleted(false);
    setCoinsEarned(0);
  };

  useEffect(() => {
    loadAndShuffleQuiz("sgk");

    if (typeof window !== "undefined") {
      const studentId = user?.id || user?.studentCode || user?.username;

      // Khôi phục vị trí video đang xem dở & trạng thái video đã hoàn thành
      const savedPos = getSavedVideoPosition(lessonId, studentId);
      if (savedPos > 5) {
        setActiveVideoTime(savedPos);
      }
      const videoDone = isVideoCompleted(lessonId, studentId);
      setIsLessonVideoCompleted(videoDone);

      const savedGradeScore = localStorage.getItem(`vinamath_grade_score_${gradeKey}`);
      const initialScore = Math.max(
        savedGradeScore ? Number(savedGradeScore) : 0,
        user?.exp || 0
      );
      setGradeTotalScore(initialScore > 0 ? initialScore : 100);

      const savedLessonBest = localStorage.getItem(`vinamath_lesson_score_${gradeKey}_${lessonId}`);
      if (savedLessonBest) {
        setLessonHighScore(Number(savedLessonBest));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gradeKey, lessonId]);

  // Luôn đồng bộ gradeTotalScore, vị trí video và câu hỏi đã giải khi học sinh đăng nhập
  useEffect(() => {
    if (user?.exp !== undefined && user.exp > 0) {
      setGradeTotalScore((prev) => Math.max(prev, user.exp || 0));
    }

    const studentId = user?.id || user?.studentCode || user?.username;
    if (!studentId) return;

    // 1. Khôi phục video position nếu chưa nạp
    const savedPos = getSavedVideoPosition(lessonId, studentId);
    if (savedPos > 5 && activeVideoTime === 0) {
      setActiveVideoTime(savedPos);
    }
    const videoDone = isVideoCompleted(lessonId, studentId);
    setIsLessonVideoCompleted(videoDone);

    // 2. Tự động kiểm tra và đánh dấu các câu Multiple Choice đã hoàn thành
    if (activeQuizList.length > 0) {
      setUserAnswers((prev) => {
        let hasChanges = false;
        const updated = { ...prev };
        activeQuizList.forEach((q, idx) => {
          if (!updated[idx]) {
            const qKey = `${lessonId}:quiz:${q.id || idx}`;
            if (isQuestionAlreadySolved(studentId, qKey)) {
              updated[idx] = {
                selectedOption: q.correctIndex,
                isCorrect: true,
                isAlreadySolved: true,
                isPreviouslyCompleted: true,
              };
              hasChanges = true;
            }
          }
        });
        return hasChanges ? updated : prev;
      });
    }

    // 3. Tự động kiểm tra các câu True / False đã hoàn thành
    if (currentTfList.length > 0) {
      setTfUserAnswers((prev) => {
        let hasChanges = false;
        const updated = { ...prev };
        currentTfList.forEach((tf, tfIdx) => {
          if (!updated[tfIdx]) {
            const tfKey = `${lessonId}:tf:${tf.id || tfIdx}`;
            if (isQuestionAlreadySolved(studentId, tfKey)) {
              const allCorrectSelected: Record<string, boolean> = {};
              tf.subItems.forEach((sub) => {
                allCorrectSelected[sub.id] = sub.correctAnswer;
              });
              updated[tfIdx] = {
                selected: allCorrectSelected,
                isSubmitted: true,
                correctCount: tf.subItems.length,
                isAlreadySolved: true,
                isPreviouslyCompleted: true,
              };
              hasChanges = true;
            }
          }
        });
        return hasChanges ? updated : prev;
      });
    }

    // 4. Tự động kiểm tra các câu Short Answer đã hoàn thành
    if (currentSaList.length > 0) {
      setSaUserAnswers((prev) => {
        let hasChanges = false;
        const updated = { ...prev };
        currentSaList.forEach((sa, saIdx) => {
          if (!updated[saIdx]) {
            const saKey = `${lessonId}:sa:${sa.id || saIdx}`;
            if (isQuestionAlreadySolved(studentId, saKey)) {
              updated[saIdx] = {
                answerText: sa.correctAnswer,
                isCorrect: true,
                isSubmitted: true,
                isAlreadySolved: true,
                isPreviouslyCompleted: true,
              };
              hasChanges = true;
            }
          }
        });
        return hasChanges ? updated : prev;
      });
    }
  }, [user?.id, user?.studentCode, user?.username, user?.exp, lessonId]);

  // Âm thanh tương tác Web Audio API
  const playSound = (type: "correct" | "wrong" | "victory" | "combo" | "ai") => {
    try {
      const AudioContext =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "correct") {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "combo") {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);
        osc.frequency.setValueAtTime(1046.5, ctx.currentTime + 0.16);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === "ai") {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === "wrong") {
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === "victory") {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
        osc.frequency.setValueAtTime(1046.5, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.35, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch {
      // Audio fallback
    }
  };

  const handleSelect = (idx: number) => {
    if (userAnswers[currentIndex] !== undefined || isCompleted || !activeQuizList[currentIndex]) return;

    const currentQ = activeQuizList[currentIndex];
    const isCorrect = idx === currentQ.correctIndex;
    const studentIdentifier = user?.id || user?.studentCode || user?.username;
    const questionKey = `${lessonId}:quiz:${currentQ.id || currentIndex}`;
    const isAlreadySolved = isQuestionAlreadySolved(studentIdentifier, questionKey);

    setUserAnswers((prev) => ({ 
      ...prev, 
      [currentIndex]: { selectedOption: idx, isCorrect, isAlreadySolved } 
    }));

    if (isCorrect) {
      // Nếu câu này trước đó học sinh từng sai, ghi nhận đã giải quyết xong
      recordCorrectedMistake(currentQ.id);

      // NẾU CÂU NÀY ĐÃ TÍNH ĐIỂM RỒI -> LÀM LẠI LẦN 2 KHÔNG TÍNH ĐIỂM NỮA
      if (isAlreadySolved) {
        setStreak((prev) => prev + 1);
        if (streak >= 1) {
          playSound("combo");
        } else {
          playSound("correct");
        }
        return;
      }

      // NẾU LÀM ĐÚNG LẦN ĐẦU -> TÍNH ĐIỂM ĐẦY ĐỦ VÀ ĐÁNH DẤU ĐÃ GIẢI ĐÚNG
      const basePoints = 100;
      const comboBonus = streak >= 1 ? 50 : 0;
      const earned = basePoints + comboBonus;

      setSessionScore((prev) => prev + earned);
      setCoinsEarned((prev) => prev + 10);
      setStreak((prev) => prev + 1);

      // Đánh dấu câu hỏi đã nhận điểm để lần 2 không cộng thêm điểm
      markQuestionSolved(studentIdentifier, questionKey, earned);

      // Cập nhật điểm vào hồ sơ học sinh nếu đã đăng nhập
      if (addExpAndCoins) {
        addExpAndCoins(earned, 10, streak + 1);
      }

      // Cập nhật điểm tổng khối
      setGradeTotalScore((prev) => {
        const updated = prev + earned;
        if (typeof window !== "undefined") {
          localStorage.setItem(`vinamath_grade_score_${gradeKey}`, updated.toString());
        }
        return updated;
      });

      if (streak >= 1) {
        playSound("combo");
      } else {
        playSound("correct");
      }
    } else {
      playSound("wrong");
      setStreak(0);
      setLives((prev) => Math.max(0, prev - 1));

      // Tự động lưu câu làm sai vào Sổ tay câu sai học sinh & Admin Portal
      recordMistake(
        currentQ.id,
        currentQ.badge,
        currentQ.question,
        currentQ.options[idx] || "Không xác định",
        currentQ.options[currentQ.correctIndex] || "Không xác định",
        currentQ.explanation
      );
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < activeQuizList.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      playSound("victory");

      // Đồng bộ hoàn thành bài lên máy chủ
      syncLessonCompletion(sessionScore);

      if (sessionScore > lessonHighScore) {
        setLessonHighScore(sessionScore);
        if (typeof window !== "undefined") {
          localStorage.setItem(`vinamath_lesson_score_${gradeKey}_${lessonId}`, sessionScore.toString());
        }
      }
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    if (idx >= 0 && idx < activeQuizList.length) {
      setCurrentIndex(idx);
    }
  };

  const handleSwitchMode = (mode: "theory" | "sgk" | "ai") => {
    setQuizMode(mode);
    playSound(mode === "theory" ? "combo" : "ai");
    if (mode !== "theory") {
      loadAndShuffleQuiz(mode);
    }
  };

  // Cấp bậc danh hiệu khối
  const getGradeRank = (points: number) => {
    if (points >= 3000) return { title: "👑 Thần Đồng Toán Học", color: "text-amber-300 bg-amber-500/20 border-amber-400" };
    if (points >= 1500) return { title: "🥇 Cao Thủ VinaMath", color: "text-cyan-300 bg-cyan-500/20 border-cyan-400" };
    if (points >= 500) return { title: "🥈 Chiến Binh Số Học", color: "text-purple-300 bg-purple-500/20 border-purple-400" };
    return { title: "🥉 Tập Sự Toán Học", color: "text-slate-300 bg-slate-800 border-slate-700" };
  };

  // Tự động nhận diện hình vẽ hình học trực quan cho bài toán
  const resolveQuestionDiagram = (q: QuizQuestion, id?: string) => {
    if (!q) return null;
    if (q.diagram) {
      if ((q.diagram.type as string) === "none") return null;
      return q.diagram;
    }

    const lId = (id || "").toLowerCase();

    // TUYỆT ĐỐI KHÔNG tự động gán hình vẽ cho các bài học Số học, Đại số, Thống kê
    const isArithmeticOrAlgebra = 
      lId.includes("tap-hop") ||
      lId.includes("so-tu-nhien") ||
      lId.includes("thu-tu") ||
      lId.includes("phep-") ||
      lId.includes("luy-thua") ||
      lId.includes("chia-het") ||
      lId.includes("so-nguyen") ||
      lId.includes("phan-so") ||
      lId.includes("so-huu-ti") ||
      lId.includes("so-thuc") ||
      lId.includes("thap-phan") ||
      lId.includes("ti-so") ||
      lId.includes("xac-suat") ||
      lId.includes("du-lieu") ||
      lId.includes("don-thuc") ||
      lId.includes("da-thuc") ||
      lId.includes("hang-dang-thuc") ||
      lId.includes("phuong-trinh") ||
      lId.includes("he-phuong-trinh") ||
      lId.includes("can-thuc") ||
      lId.includes("bat-phuong-trinh") ||
      lId.includes("bang-thong-ke") ||
      lId.includes("bieu-do") ||
      lId.includes("luong-giac") ||
      lId.includes("t11-") ||
      lId.includes("t10-");

    if (isArithmeticOrAlgebra) return null;

    const text = (q.question + " " + q.explanation).toLowerCase();
    if (text.includes("tia số") || text.includes("tập hợp") || text.includes("số tự nhiên")) {
      return null;
    }

    // Chỉ tự động nhận diện hình học khi thuộc các bài học Hình học thực thụ
    const isGeometryLesson = 
      lId.includes("tam-giac") || 
      lId.includes("hinh-vuong") || 
      lId.includes("luc-giac") || 
      lId.includes("hinh-thoi") || 
      lId.includes("hinh-binh-hanh") || 
      lId.includes("hinh-thang") || 
      lId.includes("hinh-chu-nhat") ||
      lId.includes("truc-doi-xung") || 
      lId.includes("tam-doi-xung") ||
      lId.includes("trung-diem") || 
      lId.includes("goc") ||
      lId.includes("diem-va-duong-thang") ||
      lId.includes("chuong-4") ||
      lId.includes("chuong-5") ||
      lId.includes("chuong-8");

    if (!isGeometryLesson) return null;

    if (lId.includes("tam-giac") || text.includes("tam giác đều")) {
      return { type: "tam-giac-deu" as const, caption: "Tam giác đều: 3 cạnh bằng nhau, 3 góc bằng 60°" };
    }
    if (text.includes("hình vuông")) {
      return { type: "hinh-vuong" as const, caption: "Hình vuông: 4 cạnh bằng nhau, 4 góc vuông" };
    }
    if (text.includes("lục giác đều")) {
      return { type: "luc-giac-deu" as const, caption: "Lục giác đều: 6 cạnh bằng nhau, tâm O" };
    }
    if (text.includes("hình thoi")) {
      return { type: "hinh-thoi" as const, caption: "Hình thoi: 4 cạnh bằng nhau, 2 đường chéo vuông góc" };
    }
    if (text.includes("hình bình hành")) {
      return { type: "hinh-binh-hanh" as const, caption: "Hình bình hành: Các cặp cạnh đối song song và bằng nhau" };
    }
    if (text.includes("hình thang cân")) {
      return { type: "hinh-thang-can" as const, caption: "Hình thang cân: Hai đáy song song, 2 cạnh bên bằng nhau" };
    }
    if (text.includes("hình chữ nhật")) {
      return { type: "hinh-chu-nhat" as const, caption: "Hình chữ nhật: 4 góc vuông, 2 đường chéo bằng nhau" };
    }
    if (lId.includes("truc-doi-xung") || text.includes("trục đối xứng")) {
      return { type: "doi-xung-truc" as const, caption: "Hình có trục đối xứng d" };
    }
    if (lId.includes("tam-doi-xung") || text.includes("tâm đối xứng")) {
      return { type: "doi-xung-tam" as const, caption: "Hình có tâm đối xứng O" };
    }
    if (lId.includes("trung-diem") && text.includes("trung điểm")) {
      return { type: "doan-thang-trung-diem" as const, caption: "Đoạn thẳng và trung điểm M" };
    }
    if (text.includes("góc vuông") || text.includes("90°") || text.includes("90 độ")) {
      return { type: "goc-vuong" as const, caption: "Góc vuông: ∠xOy = 90°" };
    }
    if (text.includes("góc nhọn")) {
      return { type: "goc-nhon" as const, caption: "Góc nhọn: 0° đến 90°" };
    }
    if (text.includes("góc tù")) {
      return { type: "goc-tu" as const, caption: "Góc tù: 90° đến 180°" };
    }
    if (text.includes("góc bẹt") || text.includes("180°") || text.includes("180 độ")) {
      return { type: "goc-bet" as const, caption: "Góc bẹt: ∠xOy = 180°" };
    }
    return null;
  };

  const rank = getGradeRank(gradeTotalScore);
  const currentQ = activeQuizList[currentIndex];

  if (!currentQ && quizMode !== "theory") return null;
  const diagramInfo = currentQ ? resolveQuestionDiagram(currentQ, lessonId) : null;

  const currentAnswer = userAnswers[currentIndex];
  const isAnswered = currentAnswer !== undefined;
  const selectedOption = currentAnswer ? currentAnswer.selectedOption : null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#090D16] border sm:border-2 border-amber-500/40 p-2.5 sm:p-5 text-white space-y-3 sm:space-y-3.5 shadow-2xl backdrop-blur-2xl">
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-0 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Admin Quick Save Status */}
      {adminSaveStatus && (
        <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{adminSaveStatus}</span>
        </div>
      )}

      {/* ================================================================= */}
      {/* HEADER BẢNG ĐIỂM & ĐIỀU KHIỂN CHẾ ĐỘ GỌN GÀNG 1 DÒNG             */}
      {/* ================================================================= */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-2.5 pb-2.5 border-b border-slate-800">
        {/* Điểm tích lũy khối */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/30 shrink-0">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider">
                Khối {gradeTitle}:
              </span>
              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md border ${rank.color}`}>
                {rank.title}
              </span>
            </div>
            <div className="text-base font-black text-white tracking-tight flex items-center gap-1.5">
              <span>{formatNaturalNumber(gradeTotalScore)} EXP</span>
              <span className="text-[10px] font-bold text-amber-300 flex items-center gap-0.5 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20">
                <Coins className="w-3 h-3 text-yellow-400" /> +{coinsEarned}
              </span>
            </div>
          </div>
        </div>

        {/* Chuyển đổi chế độ & Trạng thái (Tim, Streak, Điểm bài) */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switchers */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {hasTheory && (
              <button
                onClick={() => setQuizMode("theory")}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black flex items-center gap-1.5 transition-all ${
                  quizMode === "theory"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-sm"
                    : "text-emerald-400 hover:text-white"
                }`}
              >
                {activeVideoId ? <Video className="w-3 h-3 text-rose-400" /> : <BookOpen className="w-3 h-3 text-emerald-300" />}
                <span>{activeVideoId ? "🎬 Video bài giảng" : "📖 Kiến thức cần nhớ"}</span>
              </button>
            )}

            <button
              onClick={() => handleSwitchMode("sgk")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-black flex items-center gap-1.5 transition-all ${
                quizMode === "sgk"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{hasExamSets ? `📝 Đề luyện tập (${initialList.length})` : `📚 Bài tập (${initialList.length})`}</span>
            </button>

            {!hasExamSets && (
              <button
                onClick={() => handleSwitchMode("ai")}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black flex items-center gap-1.5 transition-all ${
                  quizMode === "ai"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                    : "text-amber-400 hover:text-white"
                }`}
              >
                <Bot className="w-3 h-3 text-amber-300" />
                <span>Luyện thêm ({initialList.length})</span>
              </button>
            )}
          </div>

          {/* Tim sinh mệnh (khi làm bài) */}
          {quizMode !== "theory" && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-slate-900/90 border border-rose-500/30">
              {Array.from({ length: 3 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-3.5 h-3.5 transition-all duration-300 ${
                    i < lives
                      ? "text-rose-500 fill-rose-500 scale-105 drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]"
                      : "text-slate-700"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Streak Combo */}
          {quizMode !== "theory" && streak > 1 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-[10px] animate-bounce shadow-md">
              <Flame className="w-3 h-3 fill-slate-950" />
              <span>x{streak}</span>
            </div>
          )}

          {/* Điểm bài này */}
          {quizMode !== "theory" && (
            <div className="px-2.5 py-1 rounded-xl bg-slate-900/90 border border-amber-500/40 flex items-center gap-1 text-[11px] font-black text-amber-300">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>+{sessionScore}</span>
            </div>
          )}
        </div>
      </div>

      {/* ================================================================= */}
      {/* THANH CHỌN BỘ ĐỀ ÔN TẬP CUỐI CHƯƠNG (NẾU CÓ EXAMSETS)             */}
      {/* ================================================================= */}
      {hasExamSets && examSets && (
        <div className="w-full p-2.5 rounded-xl bg-slate-950/95 border border-purple-500/30 shadow-inner flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
            <FileText className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Chọn đề ôn tập:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {examSets.map((exSet, eIdx) => (
              <button
                key={exSet.id}
                onClick={() => handleSelectExam(eIdx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  selectedExamIndex === eIdx
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 ring-1 ring-purple-400"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                }`}
              >
                <span>{exSet.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-purple-200 font-semibold">
                  12 TN • 4 Đ/S • 6 TLN
                </span>
              </button>
            ))}
          </div>
          <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-950/30 px-2.5 py-1 rounded-lg border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ma trận điểm: 30% NB • 40% TH • 30% VD (10.0 điểm)</span>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* THANH CHUYỂN ĐỔI 3 PHẦN THI THEO CHUẨN MỚI CỦA BỘ GD&ĐT           */}
      {/* ================================================================= */}
      {quizMode !== "theory" && hasMultiSection && (
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-950/90 border border-slate-800 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveSectionTab("multiple_choice")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 shrink-0 transition-all ${
              activeSectionTab === "multiple_choice"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Phần I: Trắc nghiệm ({activeQuizList.length} câu)</span>
          </button>

          {hasTrueFalse && (
            <button
              onClick={() => setActiveSectionTab("true_false")}
              className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 shrink-0 transition-all ${
                activeSectionTab === "true_false"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 scale-[1.02]"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Phần II: Đúng / Sai ({currentTfList.length} câu - {currentTfList.length * 4} ý)</span>
            </button>
          )}

          {hasShortAnswer && (
            <button
              onClick={() => setActiveSectionTab("short_answer")}
              className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 shrink-0 transition-all ${
                activeSectionTab === "short_answer"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 scale-[1.02]"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Phần III: Trả lời ngắn ({currentSaList.length} câu)</span>
            </button>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* THANH TIẾN TRÌNH CÂU HỎI TRONG BÀI (CHỈ HIỂN THỊ KHI LÀM BÀI)      */}
      {/* ================================================================= */}
      {quizMode !== "theory" && (
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-bold text-slate-300">
            <span className="flex items-center gap-1 text-cyan-400">
              <Award className="w-3.5 h-3.5" />
              {activeSectionTab === "multiple_choice"
                ? `Vòng ${currentIndex + 1} / ${activeQuizList.length}`
                : activeSectionTab === "true_false"
                ? `Câu ${tfCurrentIndex + 1} / ${currentTfList.length} (Đúng / Sai)`
                : `Câu ${saCurrentIndex + 1} / ${currentSaList.length} (Trả lời ngắn)`}
            </span>
            <span className="text-amber-400 text-[10px]">
              +100 EXP ⭐ {streak >= 1 && "(+50 EXP Streak 🔥)"}
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-amber-400 to-yellow-400 rounded-full transition-all duration-300 shadow-sm"
              style={{
                width: `${
                  activeSectionTab === "multiple_choice"
                    ? ((currentIndex + 1) / Math.max(1, activeQuizList.length)) * 100
                    : activeSectionTab === "true_false"
                    ? ((tfCurrentIndex + 1) / Math.max(1, currentTfList.length)) * 100
                    : ((saCurrentIndex + 1) / Math.max(1, currentSaList.length)) * 100
                }%`,
              }}
            />
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* THANH ĐIỀU HƯỚNG CÂU HỎI: CÂU TRƯỚC / CÁC CÂU [1..N] / CÂU TIẾP     */}
      {/* ================================================================= */}
      {quizMode !== "theory" && !isCompleted && (
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/80 border border-slate-800">
          {/* Nút Quay lại câu trước */}
          <button
            onClick={
              activeSectionTab === "multiple_choice"
                ? handlePrev
                : activeSectionTab === "true_false"
                ? handleTfPrev
                : handleSaPrev
            }
            disabled={
              activeSectionTab === "multiple_choice"
                ? currentIndex === 0
                : activeSectionTab === "true_false"
                ? tfCurrentIndex === 0
                : saCurrentIndex === 0
            }
            className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all ${
              (activeSectionTab === "multiple_choice"
                ? currentIndex === 0
                : activeSectionTab === "true_false"
                ? tfCurrentIndex === 0
                : saCurrentIndex === 0)
                ? "opacity-30 cursor-not-allowed text-slate-500 bg-slate-900 border border-slate-800"
                : "bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:scale-105 shadow-sm active:scale-95"
            }`}
            title="Quay lại câu trước"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Câu Trước</span>
          </button>

          {/* Danh sách các câu hỏi [1] [2] [3]... */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[50vw] sm:max-w-md py-1 px-1 scrollbar-none touch-pan-x">
            {activeSectionTab === "multiple_choice"
              ? activeQuizList.map((q, idx) => {
                  const ans = userAnswers[idx];
                  const isCurrent = idx === currentIndex;
                  const studentId = user?.id || user?.studentCode || user?.username;
                  const isPrevSolved = isQuestionAlreadySolved(studentId, `${lessonId}:quiz:${q.id || idx}`);
                  const isDone = Boolean(ans?.isPreviouslyCompleted || isPrevSolved || (ans && ans.isCorrect));

                  let pillStyle = "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600";
                  if (isCurrent) {
                    pillStyle = "bg-cyan-500 text-slate-950 font-black border-cyan-300 shadow-md shadow-cyan-500/40 scale-105";
                  } else if (isDone) {
                    pillStyle = "bg-emerald-950/90 text-emerald-300 border-emerald-500/70 hover:border-emerald-400";
                  } else if (ans && !ans.isCorrect) {
                    pillStyle = "bg-rose-950/90 text-rose-300 border-rose-500/70";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`w-8 h-8 sm:w-7 sm:h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border transition-all active:scale-95 ${pillStyle}`}
                      title={`Chuyển sang Câu ${idx + 1}${isDone ? " (Đã hoàn thành đạt điểm)" : ""}`}
                    >
                      {isDone && !isCurrent ? (
                        <span className="flex items-center text-[10px] text-emerald-400 font-black">✓{idx + 1}</span>
                      ) : (
                        idx + 1
                      )}
                    </button>
                  );
                })
              : activeSectionTab === "true_false"
              ? currentTfList.map((tf, idx) => {
                  const ans = tfUserAnswers[idx];
                  const isCurrent = idx === tfCurrentIndex;
                  const studentId = user?.id || user?.studentCode || user?.username;
                  const isPrevSolved = isQuestionAlreadySolved(studentId, `${lessonId}:tf:${tf.id || idx}`);
                  const isDone = Boolean(ans?.isPreviouslyCompleted || isPrevSolved || (ans && ans.correctCount === 4));

                  let pillStyle = "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600";
                  if (isCurrent) {
                    pillStyle = "bg-amber-500 text-slate-950 font-black border-amber-300 shadow-md shadow-amber-500/40 scale-105";
                  } else if (isDone) {
                    pillStyle = "bg-emerald-950/90 text-emerald-300 border-emerald-500/70 hover:border-emerald-400";
                  } else if (ans && ans.isSubmitted) {
                    pillStyle =
                      ans.correctCount >= 2
                        ? "bg-amber-950/90 text-amber-300 border-amber-500/70"
                        : "bg-rose-950/90 text-rose-300 border-rose-500/70";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setTfCurrentIndex(idx)}
                      className={`w-8 h-8 sm:w-7 sm:h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border transition-all active:scale-95 ${pillStyle}`}
                      title={`Chuyển sang Câu Đúng/Sai ${idx + 1}${isDone ? " (Đã hoàn thành đạt điểm)" : ""}`}
                    >
                      {isDone && !isCurrent ? (
                        <span className="flex items-center text-[10px] text-emerald-400 font-black">✓{idx + 1}</span>
                      ) : (
                        idx + 1
                      )}
                    </button>
                  );
                })
              : currentSaList.map((sa, idx) => {
                  const ans = saUserAnswers[idx];
                  const isCurrent = idx === saCurrentIndex;
                  const studentId = user?.id || user?.studentCode || user?.username;
                  const isPrevSolved = isQuestionAlreadySolved(studentId, `${lessonId}:sa:${sa.id || idx}`);
                  const isDone = Boolean(ans?.isPreviouslyCompleted || isPrevSolved || (ans && ans.isCorrect));

                  let pillStyle = "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600";
                  if (isCurrent) {
                    pillStyle = "bg-emerald-500 text-slate-950 font-black border-emerald-300 shadow-md shadow-emerald-500/40 scale-105";
                  } else if (isDone) {
                    pillStyle = "bg-emerald-950/90 text-emerald-300 border-emerald-500/70 hover:border-emerald-400";
                  } else if (ans && ans.isSubmitted && !ans.isCorrect) {
                    pillStyle = "bg-rose-950/90 text-rose-300 border-rose-500/70";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSaCurrentIndex(idx);
                        setSaInputText(saUserAnswers[idx]?.answerText || "");
                      }}
                      className={`w-8 h-8 sm:w-7 sm:h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border transition-all active:scale-95 ${pillStyle}`}
                      title={`Chuyển sang Câu Trả lời ngắn ${idx + 1}${isDone ? " (Đã hoàn thành đạt điểm)" : ""}`}
                    >
                      {isDone && !isCurrent ? (
                        <span className="flex items-center text-[10px] text-emerald-400 font-black">✓{idx + 1}</span>
                      ) : (
                        idx + 1
                      )}
                    </button>
                  );
                })}
          </div>

          {/* Nút Câu Kế Tiếp */}
          <button
            onClick={
              activeSectionTab === "multiple_choice"
                ? handleNext
                : activeSectionTab === "true_false"
                ? handleTfNext
                : handleSaNext
            }
            className="px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:from-amber-400 hover:to-yellow-300 hover:scale-105 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
            title="Chuyển sang câu kế tiếp"
          >
            <span className="hidden sm:inline">
              {(activeSectionTab === "multiple_choice"
                ? currentIndex + 1 === activeQuizList.length
                : activeSectionTab === "true_false"
                ? tfCurrentIndex + 1 === currentTfList.length
                : saCurrentIndex + 1 === currentSaList.length)
                ? "Tổng Kết"
                : "Câu Kế Tiếp"}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ================================================================= */}
      {/* TRƯỜNG ĐẤU: KIẾN THỨC CẦN NHỚ / BÀI TẬP GAME / MÀN HÌNH HOÀN THÀNH */}
      {/* ================================================================= */}
      {quizMode === "theory" ? (
        <div className="space-y-4 pt-1 animate-in fade-in-50 duration-200">
          {/* 1. KHUNG NHÚNG VIDEO BÀI GIẢNG YOUTUBE (NẾU CÓ) */}
          {(activeVideoId || hasMultipleVideos) && (
            <div className="space-y-3 p-3 sm:p-5 rounded-2xl bg-[#0b1120] border-2 border-rose-500/40 shadow-2xl">
              {/* Header Video */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    <Video className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
                      <span>{activeVideoTitle || youtubeVideoTitle || `Video Bài Giảng: ${lessonTitle}`}</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase">
                        Trực Quan
                      </span>
                    </h2>
                    <p className="text-[11px] text-slate-400">Xem video bài giảng kết hợp trả lời câu hỏi kiểm tra nhanh bên dưới</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!isLessonVideoCompleted ? (
                    <button
                      onClick={() => {
                        const studentId = user?.id || user?.studentCode || user?.username;
                        markVideoCompleted(lessonId, studentId);
                        setIsLessonVideoCompleted(true);
                        playSound("victory");
                      }}
                      className="px-2.5 py-1 rounded-xl text-[11px] font-black bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 hover:text-white flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      title="Đánh dấu bạn đã xem xong toàn bộ video bài học này"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Đã xem xong video</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Đã hoàn thành video</span>
                    </span>
                  )}

                  <button
                    onClick={() => handleSwitchMode("sgk")}
                    className="px-3 py-1 rounded-xl text-[11px] font-black bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>Làm bài tập ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Nút Xem lại lý thuyết chữ khi cần */}
                  {theorySections && theorySections.length > 0 && (
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-slate-900 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      {showFullText ? <EyeOff className="w-3.5 h-3.5 text-slate-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{showFullText ? "Thu gọn bản chữ" : "Giáo án chữ"}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Thanh chọn tiết học / video bài giảng khi bài có nhiều video */}
              {hasMultipleVideos && (
                <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-slate-900/90 border border-slate-700/70 shadow-sm animate-in fade-in duration-200">
                  <span className="text-[11px] font-bold text-slate-300 pl-1 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-rose-400" />
                    <span>Chọn tiết học / video bài giảng:</span>
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {effectiveVideosList.map((vid: { id: string; title: string }, idx: number) => {
                      const isSelected = selectedVideoIndex === idx;
                      return (
                        <button
                          key={vid.id || idx}
                          onClick={() => {
                            setSelectedVideoIndex(idx);
                            setActiveVideoTime(0);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-rose-600 to-pink-500 text-white shadow-md shadow-rose-500/30 border border-rose-400"
                              : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                          }`}
                        >
                          <PlayCircle className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-rose-400"}`} />
                          <span>{vid.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Thông báo học sinh đã xem hoàn thành video */}
              {isLessonVideoCompleted && (
                <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 flex flex-wrap items-center justify-between gap-3 shadow-lg animate-in fade-in duration-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-black text-emerald-200">
                        🎉 Bạn đã xem hoàn thành video này trong lượt học trước!
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Không cần xem lại video trừ khi muốn ôn tập. Bạn có thể chuyển sang giải bài tập còn lại ngay.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSwitchMode("sgk")}
                      className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Vào làm bài tập ngay</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Thông báo đang phát tiếp từ vị trí trước đó */}
              {activeVideoTime > 0 && (
                <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex flex-wrap items-center justify-between gap-2 text-xs shadow-md animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <PlayCircle className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
                    <span>
                      Đang phát tiếp từ vị trí đã xem: {Math.floor(activeVideoTime / 60)} phút {(activeVideoTime % 60).toString().padStart(2, "0")} giây
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const studentId = user?.id || user?.studentCode || user?.username;
                        saveVideoPosition(lessonId, studentId, 0, false);
                        setActiveVideoTime(0);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 text-cyan-400" />
                      <span>Phát lại từ đầu video</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Video Embed Frame Responsive 16:9 */}
              {(() => {
                const effectiveVideoId = cleanYouTubeId(activeVideoId);
                if (!effectiveVideoId) return null;

                const iframeSrc = `https://www.youtube.com/embed/${effectiveVideoId}?rel=0${
                  activeVideoTime > 0 ? `&start=${activeVideoTime}&autoplay=1` : ""
                }`;

                return (
                  <>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
                      <iframe
                        key={`${effectiveVideoId}-${activeVideoTime}`}
                        className="w-full h-full"
                        src={iframeSrc}
                        title={activeVideoTitle || lessonTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>

                    {/* Thanh trợ giúp xem video khi mạng chặn nhúng */}
                    <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] text-slate-400">
                      <div className="flex items-center gap-2">
                        <span>Không phát được video trên khung nhúng?</span>
                        <a
                          href={`https://www.youtube.com/watch?v=${effectiveVideoId}${activeVideoTime > 0 ? `&t=${activeVideoTime}s` : ""}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-rose-400 hover:text-rose-300 font-bold hover:underline"
                        >
                          <span>Mở xem trên YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {activeVideoTime > 0 && (
                        <button
                          onClick={() => {
                            const studentId = user?.id || user?.studentCode || user?.username;
                            saveVideoPosition(lessonId, studentId, 0, false);
                            setActiveVideoTime(0);
                          }}
                          className="text-[11px] text-slate-400 hover:text-rose-400 underline cursor-pointer"
                        >
                          Xem lại từ đầu
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}

              {/* 2. CÁC VÍ DỤ MINH HỌA CỦNG CỐ KIẾN THỨC TỪ VIDEO */}
              {((shuffledVideoQuestions && shuffledVideoQuestions.length > 0) || (videoQuestions && videoQuestions.length > 0)) && (() => {
                const displayQuestions = shuffledVideoQuestions.length > 0 ? shuffledVideoQuestions : (videoQuestions || []);
                return (
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-black text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                        Ví dụ minh họa củng cố kiến thức video ({displayQuestions.length} ví dụ):
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleShuffleVideoExamples}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 hover:text-white bg-amber-950/60 hover:bg-amber-900/80 px-2 py-0.5 rounded border border-amber-500/40 transition-all cursor-pointer shadow-sm"
                          title="Xáo trộn ngẫu nhiên thứ tự các phương án lựa chọn A, B, C, D"
                        >
                          <RefreshCw className="w-2.5 h-2.5 text-amber-400" />
                          <span>Đảo đáp án</span>
                        </button>
                        <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
                          Mỗi câu đúng nhận +50 EXP ⭐
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {displayQuestions.map((vq, vIdx) => {
                        const selected = videoAnswers[vq.id];
                        const isVAnswered = selected !== undefined;
                        const isVCorrect = selected === vq.correctIndex;

                        return (
                          <div
                            key={vq.id}
                            className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-black bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm">
                                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                {vq.title || `Ví dụ minh họa ${vIdx + 1}`}
                              </span>
                            </div>

                            <div className="text-xs sm:text-sm font-bold text-white">
                              <MathFormattedText text={vq.question} />
                            </div>

                            {/* Options Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {vq.options.map((vOpt, optIdx) => {
                                const isThisSelected = selected === optIdx;
                                const isThisCorrect = optIdx === vq.correctIndex;

                                let vBtnStyle = "bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-200 hover:border-amber-500/50";
                                if (isVAnswered) {
                                  if (isThisCorrect) {
                                    vBtnStyle = "bg-emerald-950/90 border-emerald-400 text-emerald-100 shadow-sm";
                                  } else if (isThisSelected && !isThisCorrect) {
                                    vBtnStyle = "bg-rose-950/90 border-rose-500 text-rose-100";
                                  } else {
                                    vBtnStyle = "bg-slate-900/40 border-slate-850 text-slate-500 opacity-50";
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => {
                                      if (isVAnswered) return;
                                      setVideoAnswers((prev) => ({ ...prev, [vq.id]: optIdx }));
                                      if (optIdx === vq.correctIndex) {
                                        const studentId = user?.id || user?.studentCode || user?.username;
                                        const vqKey = `${lessonId}:vq:${vq.id || vIdx}`;
                                        const isAlreadySolved = isQuestionAlreadySolved(studentId, vqKey);
                                        if (!isAlreadySolved) {
                                          setSessionScore((s) => s + 50);
                                          setCoinsEarned((c) => c + 5);
                                          if (addExpAndCoins) addExpAndCoins(50, 5, 1);
                                          markQuestionSolved(studentId, vqKey, 50);
                                        }
                                        playSound("correct");
                                        recordCorrectedMistake(vq.id);
                                      } else {
                                        playSound("wrong");
                                        recordMistake(
                                          vq.id,
                                          vq.title || "Ví dụ video",
                                          vq.question,
                                          vq.options[optIdx] || "Không xác định",
                                          vq.options[vq.correctIndex] || "Không xác định",
                                          vq.explanation
                                        );
                                      }
                                    }}
                                    disabled={isVAnswered}
                                    className={`p-2.5 rounded-xl border text-left text-xs font-bold flex items-start gap-2 transition-all min-h-[40px] ${vBtnStyle}`}
                                  >
                                    <span className="w-5 h-5 rounded-md bg-white/10 text-amber-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                      <MathFormattedText text={vOpt} />
                                    </div>
                                    {isVAnswered && isThisCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />}
                                    {isVAnswered && isThisSelected && !isThisCorrect && <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Phản hồi giải thích và nút thử lại */}
                            {isVAnswered && (
                              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-xs text-slate-200 animate-in fade-in-50 space-y-2">
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <span className="font-bold text-amber-300">💡 Giải thích chi tiết: </span>
                                    <MathFormattedText text={vq.explanation} />
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      // Cho phép làm lại ví dụ này và tự động xáo trộn lại câu hỏi đó
                                      setVideoAnswers((prev) => {
                                        const next = { ...prev };
                                        delete next[vq.id];
                                        return next;
                                      });
                                      setShuffledVideoQuestions((prevList) =>
                                        prevList.map((item) => (item.id === vq.id ? shuffleVideoCheckpoint(item) : item))
                                      );
                                    }}
                                    className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 shrink-0 transition-all cursor-pointer"
                                    title="Làm lại ví dụ này và đảo lại thứ tự đáp án"
                                  >
                                    <RefreshCw className="w-3 h-3 text-amber-400" />
                                    <span>Làm lại</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* 3. BẢN GIÁO ÁN CHỮ ĐÃ ĐƯỢC ĐÓNG GÓI (CHỈ HIỂN THỊ KHI BẬT HOẶC KHI BÀI CHƯA CÓ VIDEO) */}
          {(!activeVideoId || showFullText) && (
            <div className="space-y-4 animate-in fade-in-50 duration-200">
              {/* Banner giới thiệu */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/40 shadow-lg flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 shadow-md">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                      <span>Kiến thức trọng tâm cần nhớ (Giáo án lưu trữ)</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Chuẩn SGK
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400">
                      Toàn bộ nội dung lý thuyết tóm tắt và ví dụ mẫu đã được đóng gói an toàn
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleSwitchMode("sgk")}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs flex items-center gap-2 shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Vào làm bài tập ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

          {/* Danh sách các phần lý thuyết */}
          <div className="grid grid-cols-1 gap-4">
            {theorySections?.map((section) => (
              <div
                key={section.index}
                className="rounded-2xl bg-[#0f172a]/90 border border-slate-800 hover:border-slate-700 transition-all p-4 sm:p-5 space-y-3.5 shadow-md"
              >
                {/* Section Header */}
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-md shrink-0">
                    {section.index}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-emerald-300 tracking-tight">
                    <MathFormattedText text={section.title} />
                  </h3>
                </div>

                {/* Points list */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-200 leading-relaxed pl-1 sm:pl-2">
                  {section.points.map((pt, pIdx) => {
                    const isIndented = pt.startsWith("    ") || pt.startsWith("\t") || pt.startsWith("  ");
                    const numberLineSvg = getIntervalNumberLineSvg(pt);

                    if (numberLineSvg) {
                      return (
                        <div
                          key={pIdx}
                          className={`flex flex-col md:flex-row md:items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 my-1 shadow-sm hover:border-teal-500/40 transition-colors ${
                            isIndented ? "ml-3 sm:ml-6" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm">
                            <span className="shrink-0 text-cyan-400 text-[10px]">▪</span>
                            <div className="flex-1 font-medium">
                              <MathFormattedText text={pt.trim()} />
                            </div>
                          </div>
                          <div className="w-full md:w-60 lg:w-72 shrink-0 bg-slate-950/80 px-2 py-0.5 rounded-lg border border-slate-800/80">
                            {numberLineSvg}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={pIdx}
                        className={`flex items-start gap-2.5 ${isIndented ? "pl-5 sm:pl-7 text-slate-300" : ""}`}
                      >
                        <span className={`mt-1 shrink-0 ${isIndented ? "text-cyan-400 text-[10px]" : "text-emerald-400"}`}>
                          {isIndented ? "▪" : "•"}
                        </span>
                        <div className="flex-1">
                          <MathFormattedText text={pt.trim()} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bảng số La Mã từ 1 đến 30 thành 2 dòng */}
                {section.hasRomanTable && (
                  <div className="overflow-x-auto rounded-2xl border border-amber-500/40 bg-slate-950/80 p-3 my-2 shadow-lg space-y-3.5">
                    {/* Dòng 1: Từ 1 đến 15 */}
                    <div className="overflow-x-auto">
                      <div className="text-[11px] font-black text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <span>📌 Dòng 1: Số La Mã từ 1 đến 15</span>
                      </div>
                      <table className="w-full text-center text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-slate-300 border border-slate-800">
                            <th className="p-1.5 font-bold text-cyan-400 border border-slate-800 bg-slate-900/90 whitespace-nowrap">Số tự nhiên</th>
                            {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                              <th key={n} className="p-1.5 font-bold border border-slate-800 min-w-[32px]">{n}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-amber-300 font-bold bg-amber-500/10 border border-slate-800">
                            <td className="p-1.5 text-slate-400 font-bold border border-slate-800 bg-slate-900/90 whitespace-nowrap">Số La Mã</td>
                            {["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"].map((r, i) => (
                              <td key={i} className="p-1.5 border border-slate-800 font-serif font-black tracking-wider text-[11px] sm:text-xs">{r}</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Dòng 2: Từ 16 đến 30 */}
                    <div className="overflow-x-auto">
                      <div className="text-[11px] font-black text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <span>📌 Dòng 2: Số La Mã từ 16 đến 30</span>
                      </div>
                      <table className="w-full text-center text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-slate-300 border border-slate-800">
                            <th className="p-1.5 font-bold text-cyan-400 border border-slate-800 bg-slate-900/90 whitespace-nowrap">Số tự nhiên</th>
                            {Array.from({ length: 15 }, (_, i) => i + 16).map((n) => (
                              <th key={n} className="p-1.5 font-bold border border-slate-800 min-w-[36px]">{n}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-amber-300 font-bold bg-amber-500/10 border border-slate-800">
                            <td className="p-1.5 text-slate-400 font-bold border border-slate-800 bg-slate-900/90 whitespace-nowrap">Số La Mã</td>
                            {["XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX"].map((r, i) => (
                              <td key={i} className="p-1.5 border border-slate-800 font-serif font-black tracking-wider text-[11px] sm:text-xs">{r}</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Biểu đồ Ven thể hiện mối quan hệ giữa 3 tập hợp ℕ, ℤ và ℚ */}
                {section.hasVennDiagram && (
                  <div className="overflow-x-auto rounded-2xl border border-sky-500/30 bg-slate-950/80 p-3 sm:p-4 my-2.5 shadow-lg flex flex-col items-center">
                    <div className="w-full text-center mb-2">
                      <span className="text-[11px] sm:text-xs font-black text-sky-400 uppercase tracking-wider">
                        📊 Biểu đồ Ven: Mối quan hệ giữa ℕ, ℤ và ℚ
                      </span>
                    </div>
                    <div className="w-full max-w-md flex justify-center">
                      <svg
                        viewBox="0 0 500 240"
                        className="w-full h-auto drop-shadow-md select-none font-sans"
                      >
                        <defs>
                          <linearGradient id="vennQ" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.08" />
                          </linearGradient>
                          <linearGradient id="vennZ" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.12" />
                          </linearGradient>
                          <linearGradient id="vennN" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#047857" stopOpacity="0.22" />
                          </linearGradient>
                        </defs>

                        {/* Vòng ngoài cùng: Tập hợp số hữu tỉ ℚ */}
                        <ellipse
                          cx="260"
                          cy="125"
                          rx="235"
                          ry="105"
                          fill="url(#vennQ)"
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />
                        {/* Ký hiệu ℚ */}
                        <g transform="translate(80, 70)">
                          <circle cx="0" cy="0" r="22" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                          <text x="0" y="8" textAnchor="middle" fill="#7dd3fc" fontSize="24" fontWeight="bold" fontFamily="serif">ℚ</text>
                        </g>

                        {/* Vòng ở giữa: Tập hợp số nguyên ℤ */}
                        <ellipse
                          cx="290"
                          cy="132"
                          rx="160"
                          ry="80"
                          fill="url(#vennZ)"
                          stroke="#c084fc"
                          strokeWidth="2.5"
                        />
                        {/* Ký hiệu ℤ */}
                        <g transform="translate(185, 95)">
                          <circle cx="0" cy="0" r="20" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
                          <text x="0" y="7" textAnchor="middle" fill="#f3e8ff" fontSize="22" fontWeight="bold" fontFamily="serif">ℤ</text>
                        </g>

                        {/* Vòng trong cùng: Tập hợp số tự nhiên ℕ */}
                        <ellipse
                          cx="330"
                          cy="140"
                          rx="90"
                          ry="55"
                          fill="url(#vennN)"
                          stroke="#34d399"
                          strokeWidth="2.5"
                        />
                        {/* Ký hiệu ℕ */}
                        <g transform="translate(330, 140)">
                          <circle cx="0" cy="0" r="22" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
                          <text x="0" y="8" textAnchor="middle" fill="#a7f3d0" fontSize="24" fontWeight="bold" fontFamily="serif">ℕ</text>
                        </g>
                      </svg>
                    </div>
                    <div className="mt-2.5 text-center text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
                      💡 <strong className="text-emerald-400">Ghi nhớ:</strong> Mọi số tự nhiên đều là số nguyên. Mọi số nguyên đều là số hữu tỉ.
                    </div>
                  </div>
                )}

                {/* Đường tròn lượng giác trực quan chuẩn toán học 11 */}
                {section.hasUnitCircle && (
                  <div className="overflow-x-auto rounded-2xl border border-sky-500/30 bg-slate-950/90 p-3 sm:p-4 my-3 shadow-xl flex flex-col items-center select-none">
                    <div className="w-full text-center mb-2">
                      <span className="text-xs sm:text-sm font-black text-sky-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
                        🧭 Đường Tròn Lượng Giác Trực Quan (Tâm O, R = 1)
                      </span>
                    </div>
                    <div className="w-full max-w-sm flex justify-center">
                      <svg viewBox="-160 -160 320 320" className="w-full h-auto drop-shadow-lg font-sans">
                        {/* Khung nền tối sang trọng */}
                        <rect x="-155" y="-155" width="310" height="310" rx="16" fill="#0b1120" stroke="#1e293b" strokeWidth="1.5"/>
                        
                        {/* Đường tròn đơn vị R = 100 */}
                        <circle cx="0" cy="0" r="100" fill="#030712" stroke="#38bdf8" strokeWidth="2.5" />
                        
                        {/* Trục hoành Cos (Ox) */}
                        <line x1="-135" y1="0" x2="135" y2="0" stroke="#94a3b8" strokeWidth="2" />
                        <polygon points="143,0 132,-5 132,5" fill="#94a3b8" />
                        <text x="135" y="16" fill="#38bdf8" fontSize="12" fontWeight="bold">cos</text>
                        <text x="135" y="-7" fill="#cbd5e1" fontSize="11">x</text>

                        {/* Trục tung Sin (Oy) */}
                        <line x1="0" y1="135" x2="0" y2="-135" stroke="#94a3b8" strokeWidth="2" />
                        <polygon points="0,-143 -5,-132 5,-132" fill="#94a3b8" />
                        <text x="8" y="-132" fill="#34d399" fontSize="12" fontWeight="bold">sin</text>
                        <text x="-16" y="-132" fill="#cbd5e1" fontSize="11">y</text>

                        {/* Gốc toạ độ O */}
                        <text x="-12" y="14" fill="#64748b" fontSize="12" fontWeight="bold">O</text>

                        {/* 4 điểm mốc đặc biệt trên đường tròn R=1 */}
                        {/* A(1; 0) - Gốc của các cung lượng giác */}
                        <circle cx="100" cy="0" r="5" fill="#38bdf8" />
                        <text x="105" y="-6" fill="#38bdf8" fontSize="11" fontWeight="bold">A(1; 0)</text>
                        <text x="75" y="15" fill="#f59e0b" fontSize="10" fontWeight="bold">α = 0</text>

                        {/* B(0; 1) - Ứng với π/2 */}
                        <circle cx="0" cy="-100" r="5" fill="#34d399" />
                        <text x="8" y="-103" fill="#34d399" fontSize="11" fontWeight="bold">B(0; 1)</text>
                        <text x="8" y="-88" fill="#f59e0b" fontSize="10" fontWeight="bold">π/2 (90°)</text>

                        {/* A'(-1; 0) - Ứng với π */}
                        <circle cx="-100" cy="0" r="5" fill="#f43f5e" />
                        <text x="-145" y="-6" fill="#f43f5e" fontSize="11" fontWeight="bold">A&apos;(-1; 0)</text>
                        <text x="-132" y="15" fill="#f59e0b" fontSize="10" fontWeight="bold">π (180°)</text>

                        {/* B'(0; -1) - Ứng với 3π/2 */}
                        <circle cx="0" cy="100" r="5" fill="#f43f5e" />
                        <text x="8" y="118" fill="#f43f5e" fontSize="11" fontWeight="bold">B&apos;(0; -1)</text>
                        <text x="8" y="103" fill="#f59e0b" fontSize="10" fontWeight="bold">3π/2 (270°)</text>

                        {/* Điểm M(cosα; sinα) mẫu với α = π/3 = 60° */}
                        <line x1="0" y1="0" x2="50" y2="-86.6" stroke="#f59e0b" strokeWidth="2.2" />
                        <circle cx="50" cy="-86.6" r="5.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="58" y="-90" fill="#f59e0b" fontSize="12" fontWeight="bold">M(cosα; sinα)</text>

                        {/* Dóng vuông góc xuống trục Cos và Sin */}
                        <line x1="50" y1="-86.6" x2="50" y2="0" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="50" cy="0" r="3.5" fill="#38bdf8" />
                        <text x="40" y="15" fill="#38bdf8" fontSize="10" fontWeight="bold">cosα</text>

                        <line x1="50" y1="-86.6" x2="0" y2="-86.6" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="0" cy="-86.6" r="3.5" fill="#34d399" />
                        <text x="-34" y="-84" fill="#34d399" fontSize="10" fontWeight="bold">sinα</text>

                        {/* Cung quay chiều dương α */}
                        <path d="M 30 0 A 30 30 0 0 0 15 -25.98" fill="none" stroke="#f59e0b" strokeWidth="2" />
                        <polygon points="15,-25.98 12,-18 19,-21" fill="#f59e0b" />
                        <text x="22" y="-10" fill="#f59e0b" fontSize="11" fontWeight="bold">α</text>

                        {/* Nhãn 4 Góc phần tư */}
                        <rect x="36" y="-55" width="48" height="20" rx="5" fill="#1e293b" opacity="0.9" stroke="#38bdf8" strokeWidth="0.8"/>
                        <text x="60" y="-41" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">GPT I (+,+)</text>

                        <rect x="-84" y="-55" width="48" height="20" rx="5" fill="#1e293b" opacity="0.9" stroke="#94a3b8" strokeWidth="0.8"/>
                        <text x="-60" y="-41" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">GPT II (-,+)</text>

                        <rect x="-88" y="38" width="52" height="20" rx="5" fill="#1e293b" opacity="0.9" stroke="#94a3b8" strokeWidth="0.8"/>
                        <text x="-62" y="52" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">GPT III (-,-)</text>

                        <rect x="36" y="38" width="50" height="20" rx="5" fill="#1e293b" opacity="0.9" stroke="#94a3b8" strokeWidth="0.8"/>
                        <text x="61" y="52" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">GPT IV (+,-)</text>

                        {/* Chiều quay dương (+) quy ước */}
                        <path d="M 80 -80 A 115 115 0 0 0 30 -110" fill="none" stroke="#e2e8f0" strokeWidth="1.8" />
                        <polygon points="30,-110 39,-106 36,-115" fill="#e2e8f0" />
                        <text x="66" y="-106" fill="#e2e8f0" fontSize="10" fontWeight="bold">Chiều dương (+)</text>
                      </svg>
                    </div>
                    <div className="mt-2 text-center text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
                      💡 <strong className="text-cyan-400">Ghi nhớ cốt lõi:</strong> Trục hoành là trục <strong className="text-sky-300">cos</strong>, trục tung là trục <strong className="text-emerald-300">sin</strong>. Chiều ngược chiều kim đồng hồ là <strong className="text-amber-300">chiều dương (+)</strong>.
                    </div>
                  </div>
                )}

                {/* Formula Callout */}
                {section.formula && (
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      Ký hiệu / Công thức cốt lõi
                    </span>
                    <div className="text-sm sm:text-base font-bold text-emerald-200">
                      <MathFormattedText text={`$$${section.formula}$$`} />
                    </div>
                  </div>
                )}

                {/* Example Box (hỗ trợ nhiều ví dụ hoặc 1 ví dụ) */}
                {section.examples && section.examples.length > 0 ? (
                  <div className="space-y-3">
                    {section.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-purple-500/30 space-y-2 text-xs">
                        {ex.title && (
                          <div className="flex items-center gap-1.5 text-purple-300 font-bold">
                            <Lightbulb className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                            <MathFormattedText text={ex.title} />
                          </div>
                        )}
                        <div className="text-slate-300 pl-2 border-l-2 border-purple-500/40 space-y-1">
                          <span className="font-bold text-white block mb-0.5">Đề bài: </span>
                          {ex.problem
                            .split("\n")
                            .filter((line) => line.trim().length > 0)
                            .map((line, pIdx) => {
                              const isSubItem = /^[a-d]\)/i.test(line.trim());
                              return (
                                <div
                                  key={pIdx}
                                  className={`leading-relaxed ${isSubItem ? "pl-3 text-purple-200 font-medium" : ""}`}
                                >
                                  <MathFormattedText text={line.trim()} />
                                </div>
                              );
                            })}
                        </div>
                        <div className="text-slate-300 pl-2 border-l-2 border-emerald-500/40 bg-emerald-950/20 p-2.5 rounded-r-lg space-y-1">
                          <span className="font-bold text-emerald-300 block mb-1">Lời giải mẫu: </span>
                          {ex.solution
                            .split("\n")
                            .filter((line) => line.trim().length > 0)
                            .map((line, lIdx) => (
                              <div key={lIdx} className="leading-relaxed">
                                <MathFormattedText text={line.trim()} />
                              </div>
                            ))}
                          {ex.svgDiagram && (
                            <div
                              className="mt-3 p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col items-center justify-center shadow-inner overflow-x-auto select-none"
                              dangerouslySetInnerHTML={{ __html: ex.svgDiagram }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : section.exampleProblem && section.exampleSolution ? (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-purple-500/30 space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 text-purple-300 font-bold">
                      <Lightbulb className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      <MathFormattedText text={section.exampleTitle || ""} />
                    </div>
                    <div className="text-slate-300 pl-2 border-l-2 border-purple-500/40 space-y-1">
                      <span className="font-bold text-white block mb-0.5">Đề bài: </span>
                      {section.exampleProblem
                        .split("\n")
                        .filter((line) => line.trim().length > 0)
                        .map((line, pIdx) => {
                          const isSubItem = /^[a-d]\)/i.test(line.trim());
                          return (
                            <div
                              key={pIdx}
                              className={`leading-relaxed ${isSubItem ? "pl-3 text-purple-200 font-medium" : ""}`}
                            >
                              <MathFormattedText text={line.trim()} />
                            </div>
                          );
                        })}
                    </div>
                    <div className="text-slate-300 pl-2 border-l-2 border-emerald-500/40 bg-emerald-950/20 p-2.5 rounded-r-lg space-y-1">
                      <span className="font-bold text-emerald-300 block mb-1">Lời giải mẫu: </span>
                      {(section.exampleSolution || "")
                        .split("\n")
                        .filter((line) => line.trim().length > 0)
                        .map((line, lIdx) => (
                          <div key={lIdx} className="leading-relaxed">
                            <MathFormattedText text={line.trim()} />
                          </div>
                        ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Khối Mẹo & Bẫy Cần Lưu Ý (chỉ hiện khi có dữ liệu) */}
          {((tips && tips.length > 0) || (traps && traps.length > 0)) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {tips && tips.length > 0 && (
                <div className="p-4 rounded-2xl bg-cyan-950/25 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs sm:text-sm">
                    <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>💡 Mẹo ghi nhớ & Giải nhanh</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
                    {tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <div className="flex-1"><MathFormattedText text={tip} /></div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {traps && traps.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>⚠️ Cảnh báo bẫy hay mất điểm</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
                    {traps.map((trap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400">•</span>
                        <div className="flex-1"><MathFormattedText text={trap} /></div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900 to-cyan-950/50 border border-cyan-500/40 flex flex-wrap items-center justify-between gap-3 shadow-xl">
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Sẵn sàng làm bài tập?
              </div>
              <div className="text-[11px] text-slate-400">
                Vận dụng các kiến thức vừa ôn tập vào giải bài tập ({initialList.length} câu hỏi).
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSwitchMode("sgk")}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-black text-xs sm:text-sm hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all"
              >
                <span>Bắt đầu làm bài tập ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSwitchMode("ai")}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Bot className="w-3.5 h-3.5 text-pink-400" />
                <span>Luyện thêm</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : !isCompleted ? (
        activeSectionTab === "true_false" && currentTfList.length > 0 ? (
          /* ========================================================= */
          /* PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG / SAI (4 CÂU - MỖI CÂU 4 Ý) */
          /* ========================================================= */
          (() => {
            const currentTf = currentTfList[tfCurrentIndex];
            const currentTfAns = tfUserAnswers[tfCurrentIndex] || { selected: {}, isSubmitted: false, correctCount: 0 };
            const allSubSelected = currentTf && currentTf.subItems.every((sub) => currentTfAns.selected[sub.id] !== undefined);

            if (!currentTf) return null;

            return (
              <div className="space-y-3 pt-0.5 animate-in fade-in-50 duration-200">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#131B2E] border border-amber-500/40 space-y-3 shadow-md">
                  {/* Banner Đã hoàn thành */}
                  {currentTfAns.isPreviouslyCompleted && (
                    <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-bold animate-in fade-in duration-150">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Đã hoàn thành câu Đúng / Sai này trong lượt học trước (4/4 ý đúng) - Không cần làm lại</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-200 shrink-0 font-black">
                        Đã nhận điểm ⭐
                      </span>
                    </div>
                  )}

                  {/* Top Bar: Badge & Source */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <CheckSquare className="w-3 h-3" />
                      {(() => {
                        const prefix = `Câu ${tfCurrentIndex + 1} (Đúng / Sai)`;
                        if (!currentTf.badge) return prefix;
                        const cleaned = currentTf.badge
                          .replace(/^(?:(?:Câu|Đúng\/Sai|ĐS|Bài)\s*[\d.]+(?:\s*(?:Bài|TN)\s*[\d.]*)?)+[\s.:-]*\s*/i, "")
                          .replace(/^SGK.*$/i, "")
                          .trim();
                        return cleaned ? `${prefix} - ${cleaned}` : prefix;
                      })()}
                    </span>

                    {currentTf.source && (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 truncate max-w-[280px] sm:max-w-xs"
                        title={currentTf.source}
                      >
                        <Bookmark className="w-2.5 h-2.5 shrink-0 text-cyan-400" />
                        <span className="truncate">Nguồn: {currentTf.source}</span>
                      </span>
                    )}
                  </div>

                  {/* Đề bài chung */}
                  <div className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    <MathFormattedText text={currentTf.prompt} />
                  </div>

                  {/* Danh sách 4 ý a, b, c, d */}
                  <div className="space-y-2.5 pt-1">
                    {currentTf.subItems.map((sub) => {
                      const userChoice = currentTfAns.selected[sub.id];
                      const isSubSubmitted = currentTfAns.isSubmitted;
                      const isUserCorrect = userChoice === sub.correctAnswer;

                      return (
                        <div
                          key={sub.id}
                          className={`p-3 rounded-xl border transition-all ${
                            isSubSubmitted
                              ? isUserCorrect
                                ? "bg-emerald-950/30 border-emerald-500/50"
                                : "bg-rose-950/30 border-rose-500/50"
                              : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                            <div className="flex items-start gap-2 flex-1 min-w-0">
                              <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                                {sub.id}
                              </span>
                              <div className="text-xs sm:text-sm font-medium text-slate-100 leading-relaxed break-words">
                                <MathFormattedText text={sub.text} />
                              </div>
                            </div>

                            {/* 2 Nút Đúng / Sai */}
                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                              <button
                                onClick={() => handleTfSelect(sub.id, true)}
                                disabled={isSubSubmitted}
                                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1 ${
                                  userChoice === true
                                    ? isSubSubmitted
                                      ? sub.correctAnswer === true
                                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/40"
                                        : "bg-rose-600 text-white shadow-md shadow-rose-600/40"
                                      : "bg-cyan-500 text-slate-950 ring-2 ring-cyan-300 shadow-md"
                                    : isSubSubmitted && sub.correctAnswer === true
                                    ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/60"
                                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                                }`}
                              >
                                {isSubSubmitted && userChoice === true && (
                                  isUserCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />
                                )}
                                <span>Đúng</span>
                              </button>

                              <button
                                onClick={() => handleTfSelect(sub.id, false)}
                                disabled={isSubSubmitted}
                                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1 ${
                                  userChoice === false
                                    ? isSubSubmitted
                                      ? sub.correctAnswer === false
                                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/40"
                                        : "bg-rose-600 text-white shadow-md shadow-rose-600/40"
                                      : "bg-cyan-500 text-slate-950 ring-2 ring-cyan-300 shadow-md"
                                    : isSubSubmitted && sub.correctAnswer === false
                                    ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/60"
                                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                                }`}
                              >
                                {isSubSubmitted && userChoice === false && (
                                  isUserCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />
                                )}
                                <span>Sai</span>
                              </button>
                            </div>
                          </div>

                          {/* Lời giải thích từng ý */}
                          {isSubSubmitted && sub.explanation && (
                            <div className="mt-2.5 pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300 flex items-start gap-1.5">
                              <Lightbulb className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-amber-300">Ý {sub.id}: </strong>
                                <MathFormattedText text={sub.explanation} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Nút kiểm tra hoặc thông báo kết quả */}
                  {!currentTfAns.isSubmitted ? (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleTfSubmit}
                        disabled={!allSubSelected}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all ${
                          allSubSelected
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:scale-105 shadow-md shadow-amber-500/30 cursor-pointer active:scale-95"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{allSubSelected ? "Kiểm tra đáp án" : "Hãy chọn Đúng / Sai cho cả 4 ý"}</span>
                      </button>
                    </div>
                  ) : (
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-amber-500/20">
                      <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-yellow-400" />
                        {currentTfAns.isAlreadySolved ? (
                          <span className="text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30 font-black">
                            🎯 Đã tính điểm trước đó (Làm lại: +0 EXP)
                          </span>
                        ) : (
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            +{currentTfAns.correctCount * 25 + (currentTfAns.correctCount === 4 ? 100 : 0)} EXP
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleTfPrev}
                          disabled={tfCurrentIndex === 0}
                          className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1 transition-all ${
                            tfCurrentIndex === 0
                              ? "opacity-30 cursor-not-allowed text-slate-500 bg-slate-900 border border-slate-800"
                              : "bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:scale-105"
                          }`}
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Câu Trước</span>
                        </button>

                        <button
                          onClick={handleTfNext}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-1.5 hover:scale-105 transition-transform shadow-md shadow-amber-500/30"
                        >
                          <span>{tfCurrentIndex + 1 === currentTfList.length ? "Xong Phần II" : "Câu Kế Tiếp"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()
        ) : activeSectionTab === "short_answer" && currentSaList.length > 0 ? (
          /* ========================================================= */
          /* PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (6 CÂU)            */
          /* ========================================================= */
          (() => {
            const currentSa = currentSaList[saCurrentIndex];
            const currentSaAns = saUserAnswers[saCurrentIndex];

            if (!currentSa) return null;

            return (
              <div className="space-y-3 pt-0.5 animate-in fade-in-50 duration-200">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#131B2E] border border-emerald-500/40 space-y-3 shadow-md">
                  {/* Banner Đã hoàn thành */}
                  {currentSaAns?.isPreviouslyCompleted && (
                    <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-bold animate-in fade-in duration-150">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Đã hoàn thành câu Trả lời ngắn này trong lượt học trước (Đáp án: {currentSa.correctAnswer}) - Không cần làm lại</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-200 shrink-0 font-black">
                        Đã nhận điểm ⭐
                      </span>
                    </div>
                  )}

                  {/* Top Bar: Badge & Source */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <PenTool className="w-3 h-3" />
                      {(() => {
                        const prefix = `Câu ${saCurrentIndex + 1} (Trả lời ngắn)`;
                        if (!currentSa.badge) return prefix;
                        const cleaned = currentSa.badge
                          .replace(/^(?:(?:Câu|Trả lời ngắn|TLN|Bài)\s*[\d.]+(?:\s*(?:Bài|TN)\s*[\d.]*)?)+[\s.:-]*\s*/i, "")
                          .replace(/^SGK.*$/i, "")
                          .trim();
                        return cleaned ? `${prefix} - ${cleaned}` : prefix;
                      })()}
                    </span>

                    {currentSa.source && (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 truncate max-w-[280px] sm:max-w-xs"
                        title={currentSa.source}
                      >
                        <Bookmark className="w-2.5 h-2.5 shrink-0 text-cyan-400" />
                        <span className="truncate">Nguồn: {currentSa.source}</span>
                      </span>
                    )}
                  </div>

                  {/* Prompt Text */}
                  <div className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    <MathFormattedText text={currentSa.prompt} />
                  </div>

                  {/* Sơ đồ trực quan Venn SVG nếu có */}
                  {currentSa.svgDiagram && (
                    <div
                      className="my-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-center shadow-inner overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: currentSa.svgDiagram }}
                    />
                  )}

                  {/* Input Box & Submit Button */}
                  {!currentSaAns?.isSubmitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSaSubmit();
                      }}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2"
                    >
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={saInputText}
                          onChange={(e) => setSaInputText(e.target.value)}
                          placeholder="Nhập đáp số của bạn (ví dụ: 3, 5, 1/2, 10...)"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border-2 border-emerald-500/40 text-white placeholder-slate-500 text-sm font-bold focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!saInputText.trim()}
                        className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${
                          saInputText.trim()
                            ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:scale-105 shadow-md shadow-emerald-500/30 cursor-pointer active:scale-95"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Kiểm tra đáp án</span>
                      </button>
                    </form>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-cyan-400/40 space-y-2 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-black">
                          {currentSaAns.isCorrect ? (
                            currentSaAns.isAlreadySolved ? (
                              <span className="text-amber-300 flex items-center gap-1 bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 text-[11px] font-black">
                                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Chính xác! (Đã tính điểm trước đó: +0 EXP)
                              </span>
                            ) : (
                              <span className="text-emerald-400 flex items-center gap-1 bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                                <CheckCircle2 className="w-4 h-4" /> Chính xác! (+100 EXP ⭐)
                              </span>
                            )
                          ) : (
                            <span className="text-rose-400 flex items-center gap-1 bg-rose-500/20 px-2.5 py-1 rounded-lg border border-rose-500/30">
                              <XCircle className="w-4 h-4" /> Chưa chính xác (Đáp số đúng: {currentSa.correctAnswer})
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-bold text-slate-400">
                          Bạn đã nhập: <strong className="text-white">{currentSaAns.answerText}</strong>
                        </span>
                      </div>

                      {/* Detailed Explanation */}
                      <div className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium pt-1">
                        <div className="text-amber-300 font-bold text-xs uppercase mb-1 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> Lời giải chi tiết:
                        </div>
                        <MathFormattedText text={currentSa.explanation} />
                      </div>

                      <div className="pt-2 flex justify-between items-center border-t border-cyan-400/20">
                        <button
                          onClick={handleSaPrev}
                          disabled={saCurrentIndex === 0}
                          className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
                            saCurrentIndex === 0
                              ? "opacity-30 cursor-not-allowed text-slate-500 bg-slate-900 border border-slate-800"
                              : "bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:scale-105"
                          }`}
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Câu Trước</span>
                        </button>

                        <button
                          onClick={handleSaNext}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-1.5 hover:scale-105 transition-transform shadow-md shadow-emerald-500/30"
                        >
                          <span>{saCurrentIndex + 1 === currentSaList.length ? "Xong Phần III" : "Câu Kế Tiếp"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()
        ) : (
          /* ========================================================= */
          /* PHẦN I: CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (10 CÂU)           */
          /* ========================================================= */
          <div className="space-y-3 pt-0.5">
            {/* Question Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#131B2E] border border-cyan-500/30 space-y-2 shadow-md">
                {/* Top Bar: Badge & Admin Edit Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                      currentQ.isAiGenerated
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {currentQ.isAiGenerated ? <Bot className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                    {currentQ.isAiGenerated
                      ? `Luyện tập ${currentIndex + 1}`
                      : (() => {
                          const prefix = `Câu ${currentIndex + 1}`;
                          if (!currentQ.badge) return prefix;
                          if (currentQ.badge.startsWith("🤖")) return currentQ.badge;
                          const cleaned = currentQ.badge
                            .replace(/^(?:(?:Câu|Bài|Dạng)\s*[\d.]+(?:\s*(?:Bài|TN)\s*[\d.]*)?)+[\s.:-]*\s*/i, "")
                            .replace(/^SGK.*$/i, "")
                            .replace(/^Bài tập.*$/i, "")
                            .trim();
                          return cleaned ? `${prefix} - ${cleaned}` : prefix;
                        })()}
                  </span>

                {currentQ.source && (
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 truncate max-w-[280px] sm:max-w-xs"
                    title={currentQ.source}
                  >
                    <Bookmark className="w-2.5 h-2.5 shrink-0 text-cyan-400" />
                    <span className="truncate">Nguồn: {currentQ.source}</span>
                  </span>
                )}

              {/* Admin Actions */}
              {isAdmin && (
                <div className="flex flex-wrap items-center gap-1.5 ml-auto">
                  <button
                    onClick={() => handleOpenEdit(currentQ, currentIndex)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black hover:bg-amber-500/40 transition-all flex items-center gap-1 shadow-sm"
                    title="Chỉnh sửa nội dung câu hỏi này"
                  >
                    <Edit3 className="w-3 h-3" /> Sửa câu này
                  </button>
                  <button
                    onClick={handleAddNewQuestion}
                    className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black hover:bg-emerald-500/40 transition-all flex items-center gap-1"
                    title="Thêm bài tập mới vào bài học"
                  >
                    <Plus className="w-3 h-3" /> Thêm bài
                  </button>
                  <button
                    onClick={() => setIsAiGenerateModalOpen(true)}
                    className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 text-purple-200 border border-purple-400/50 text-[10px] font-black transition-all flex items-center gap-1 shadow-sm hover:scale-105 active:scale-95"
                    title="AI tự sinh câu hỏi theo mức độ nhận thức (Nhận biết, Thông hiểu, Vận dụng) và YCCĐ Bộ GD&ĐT"
                  >
                    <Bot className="w-3 h-3 text-purple-300" />
                    <span>Thêm từ AI</span>
                  </button>

                  {activeQuizList.length > 1 && (
                    <button
                      onClick={() => handleDeleteQuestion(currentIndex)}
                      className="p-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] hover:bg-rose-500/40 transition-all"
                      title="Xóa bài tập này"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Banner Đã hoàn thành trong lượt học trước */}
            {userAnswers[currentIndex]?.isPreviouslyCompleted && (
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-bold animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Đã hoàn thành câu hỏi này trong lượt học trước - Không cần làm lại</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-200 shrink-0 font-black">
                  Đã nhận +100 EXP ⭐
                </span>
              </div>
            )}

            {/* Question Text with KaTeX Math & Fractions */}
            <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
              <MathFormattedText text={currentQ.question} />
            </h4>

            {/* Hình vẽ hình học trực quan nếu có */}
            {diagramInfo && (
              <GeometryDiagram
                type={diagramInfo.type}
                caption={diagramInfo.caption}
              />
            )}
          </div>

          {/* Options Grid (ĐÃ ĐƯỢC TỰ ĐỘNG XÁO TRỘN VỊ TRÍ & TỰ CO DÃN VỪA KHUNG) */}
          {(() => {
            const isAnyOptionLong = currentQ.options.some((opt) => opt.length > 28);

            return (
              <div className={`grid gap-2.5 ${isAnyOptionLong ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let btnStyle =
                    "bg-[#131B2E] hover:bg-[#1C2740] border-slate-700/80 text-white hover:border-cyan-400 hover:scale-[1.002]";

                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle =
                        "bg-emerald-950/90 border-emerald-400 text-emerald-100 shadow-md shadow-emerald-500/30";
                    } else if (isSelected && !isCorrect) {
                      btnStyle = "bg-rose-950/90 border-rose-500 text-rose-100 shadow-md shadow-rose-500/30";
                    } else {
                      btnStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-40";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`p-3 sm:p-3.5 rounded-xl border-2 text-left font-bold text-xs sm:text-sm flex items-start justify-between gap-3 transition-all duration-150 shadow-sm min-h-[48px] ${btnStyle}`}
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <span className="w-6 h-6 rounded-lg bg-white/10 text-cyan-300 font-black text-xs flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <div className="font-bold flex-1 min-w-0 break-words leading-relaxed text-xs sm:text-sm overflow-visible">
                          <MathFormattedText text={opt} />
                        </div>
                      </div>

                      {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                      {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                    </button>
                  );
                })}
              </div>
            );
          })()}

          {/* Detailed Solution Explanation & Next Button */}
          {isAnswered && (
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-cyan-400/40 space-y-2 animate-in fade-in slide-in-from-bottom-1 duration-150">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-300 font-black text-xs uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" /> Lời Giải Chi Tiết:
                </div>
                {selectedOption === currentQ.correctIndex ? (
                  userAnswers[currentIndex]?.isPreviouslyCompleted ? (
                    <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Đã hoàn thành trước đó (Đã đạt điểm)
                    </span>
                  ) : userAnswers[currentIndex]?.isAlreadySolved ? (
                    <span className="text-[10px] font-black text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Đã tính điểm trước đó (Làm lại: +0 EXP)
                    </span>
                  ) : (
                    <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      +100 EXP ⭐
                    </span>
                  )
                ) : (
                  <span className="text-[10px] font-black text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-500/30">
                    Chưa Đúng (Mất 1 ❤️)
                  </span>
                )}
              </div>

              <div className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                <MathFormattedText text={currentQ.explanation} />
              </div>

              {currentQ.source && (
                <div className="flex items-center gap-1.5 text-[10px] text-cyan-300/90 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                  <Bookmark className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>Trích dẫn nguồn: <strong className="text-cyan-200">{currentQ.source}</strong></span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between gap-2 border-t border-cyan-400/20">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
                    currentIndex === 0
                      ? "opacity-30 cursor-not-allowed text-slate-500 bg-slate-900 border border-slate-800"
                      : "bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:scale-105 shadow-sm"
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Câu Trước</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-1.5 hover:scale-105 transition-transform shadow-md shadow-amber-500/30"
                >
                  <span>{currentIndex + 1 === activeQuizList.length ? "Xem Tổng Kết Điểm" : "Câu Kế Tiếp"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
        )
      ) : (
        /* MÀN HÌNH CHIẾN THẮNG & THƯỞNG ĐIỂM */
        <div className="py-5 text-center space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-xl shadow-amber-500/40 animate-bounce">
            <Crown className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              🎉 Chúc Mừng Bạn Đã Hoàn Thành Vòng Thử Thách!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Bạn đã xuất sắc ghi thêm điểm thưởng danh giá vào bảng thành tích Khối {gradeTitle}!
            </p>
          </div>

          {/* Reward Cards */}
          <div className="grid grid-cols-3 gap-2.5 max-w-lg mx-auto text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 space-y-0.5">
              <span className="text-slate-400 text-[9px] uppercase font-bold block">EXP Vòng Này</span>
              <span className="text-lg font-black text-amber-300">+{sessionScore}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/40 space-y-0.5">
              <span className="text-slate-400 text-[9px] uppercase font-bold block">Tổng EXP {gradeTitle}</span>
              <span className="text-lg font-black text-cyan-300">{formatNaturalNumber(gradeTotalScore)}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/40 space-y-0.5">
              <span className="text-slate-400 text-[9px] uppercase font-bold block">VinaCoins</span>
              <span className="text-lg font-black text-purple-300">+{coinsEarned} 🪙</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-1">
            <button
              onClick={() => handleSwitchMode("ai")}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 hover:scale-105 transition-transform shadow-md shadow-purple-500/40"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>Luyện tập thêm ({initialList.length} câu tương tự)</span>
            </button>
          </div>
        </div>
      )}

      {/* Admin Question Edit Modal */}
      {isEditModalOpen && editingQuestion && (
        <QuestionEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          question={editingQuestion}
          onSave={handleSaveQuestion}
        />
      )}

      {/* Admin AI Question Generator Modal */}
      {isAiGenerateModalOpen && (
        <AiQuestionGeneratorModal
          isOpen={isAiGenerateModalOpen}
          onClose={() => setIsAiGenerateModalOpen(false)}
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          existingQuestions={activeQuizList}
          onAddQuestion={handleAddAiQuestion}
        />
      )}
    </div>
  );
}
