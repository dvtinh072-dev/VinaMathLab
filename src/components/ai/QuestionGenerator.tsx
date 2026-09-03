"use client";

import React, { useState } from "react";
import { Sparkles, Copy, Check, RefreshCw, FileText, Code2, Download } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

interface GeneratedQuestion {
  stem: string;
  type: "multiple_choice" | "true_false" | "short_answer";
  options?: { key: string; text: string }[];
  subQuestions?: { key: string; text: string; isCorrect: boolean }[];
  correctAnswer?: string;
  explanation: string;
  latexCode: string;
}

export function QuestionGenerator() {
  const [grade, setGrade] = useState("lop-12");
  const [topic, setTopic] = useState("khao-sat-ham-so");
  const [formatType, setFormatType] = useState<"multiple_choice" | "true_false" | "short_answer">("true_false");
  const [difficulty, setDifficulty] = useState<"NB" | "TH" | "VD" | "VDC">("VD");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sample generated question repository for AI studio demo
  const [currentResult, setCurrentResult] = useState<GeneratedQuestion>({
    type: "true_false",
    stem: "Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ $(a \\neq 0)$ có đồ thị như hình vẽ. Biết đồ thị cắt trục hoành tại 3 điểm phân biệt có hoành độ $-1, 1, 3$. Xét tính đúng sai của các khẳng định sau:",
    subQuestions: [
      { key: "a", text: "Hàm số đạt cực đại tại điểm $x = 1 - \\frac{2\\sqrt{3}}{3}$.", isCorrect: true },
      { key: "b", text: "Giá trị của đạo hàm tại điểm uốn $x_0 = 1$ là $f'(1) > 0$.", isCorrect: false },
      { key: "c", text: "Phương trình $f(x) = m$ có 3 nghiệm thực phân biệt khi và chỉ khi $y_{\\text{CĐ}} > m > y_{\\text{CT}}$.", isCorrect: true },
      { key: "d", text: "Tích phân diện tích giới hạn bởi đồ thị và trục hoành trên đoạn $[-1; 3]$ bằng $\\int_{-1}^{3} f(x) \\, dx$.", isCorrect: false },
    ],
    explanation: "- a) Đúng: Theo tính đối xứng của hàm bậc 3 qua điểm uốn $x_U = \\frac{-1+1+3}{3} = 1$.\n- b) Sai: Tại điểm uốn $x = 1$, tiếp tuyến có hệ số góc âm $f'(1) < 0$.\n- c) Đúng: Số giao điểm bằng số nghiệm của phương trình tương giao.\n- d) Sai: Vì $f(x)$ đổi dấu trên $[-1; 3]$ nên diện tích đúng phải là $\\int_{-1}^{3} |f(x)| \\, dx$.",
    latexCode: `\\begin{ex}%[Dự án VinaMath AI]%[12D1-3]
Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ $(a \\neq 0)$ cắt trục hoành tại 3 điểm phân biệt $-1, 1, 3$. Xét tính đúng sai:
\\choiceTF
{\\True Hàm số đạt cực đại tại $x = 1 - \\frac{2\\sqrt{3}}{3}$}
{Giá trị của đạo hàm tại điểm uốn $x_0 = 1$ là $f'(1) > 0$}
{\\True Phương trình $f(x) = m$ có 3 nghiệm thực phân biệt khi $y_{\\text{CĐ}} > m > y_{\\text{CT}}$}
{Diện tích hình phẳng giới hạn bởi đồ thị trên $[-1; 3]$ là $\\int_{-1}^{3} f(x)\\,dx$}
\\loigiai{
...
}
\\end{ex}`,
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      if (formatType === "multiple_choice") {
        setCurrentResult({
          type: "multiple_choice",
          stem: `Một hồ chứa nước có dạng hình trụ có thể tích $V = 1000\\pi\\text{ m}^3$. Chi phí làm nắp và đáy là $1.5$ triệu đồng/m², chi phí làm thân hình trụ là $1.0$ triệu đồng/m². Để tổng chi phí xây dựng là nhỏ nhất thì bán kính đáy $R$ bằng:`,
          options: [
            { key: "A", text: "R = 10\\text{ m}" },
            { key: "B", text: "R = 5\\sqrt{2}\\text{ m}" },
            { key: "C", text: "R = \\sqrt[3]{500}\\text{ m}" },
            { key: "D", text: "R = \\sqrt[3]{1000}\\text{ m}" },
          ],
          explanation: "Ta có $V = \\pi R^2 h = 1000\\pi \\Rightarrow h = \\frac{1000}{R^2}$. Tổng chi phí $C(R) = 1.5(2\\pi R^2) + 1.0(2\\pi R h) = 3\\pi R^2 + \\frac{2000\\pi}{R}$. Áp dụng BĐT Cauchy: $C(R) = 3\\pi R^2 + \\frac{1000\\pi}{R} + \\frac{1000\\pi}{R} \\ge 3\\sqrt[3]{3\\pi \\cdot 1000\\pi \\cdot 1000\\pi}$. Dấu bằng khi $3\\pi R^2 = \\frac{1000\\pi}{R} \\Leftrightarrow R^3 = \\frac{1000}{3} \\Rightarrow R = \\sqrt[3]{\\frac{1000}{3}}$.",
          latexCode: `\\begin{ex}%[VinaMath AI]%[12D1-5]
Một hồ chứa nước hình trụ có $V = 1000\\pi\\text{ m}^3$. Bán kính đáy để chi phí xây dựng nhỏ nhất là:
\\choice
{\\True $R = \\sqrt[3]{500}\\text{ m}$}
{$R = 10\\text{ m}$}
{$R = 5\\sqrt{2}\\text{ m}$}
{$R = 8\\text{ m}$}
\\loigiai{...}
\\end{ex}`,
        });
      } else if (formatType === "short_answer") {
        setCurrentResult({
          type: "short_answer",
          stem: `Tìm giá trị lớn nhất của hàm số $f(x) = -x^4 + 8x^2 + 10$ trên đoạn $[-1; 3]$.`,
          correctAnswer: "26",
          explanation: "Đạo hàm $f'(x) = -4x^3 + 16x = -4x(x^2 - 4) = 0 \\Leftrightarrow x = 0, x = 2, x = -2$ (loại $x = -2$ vì $\\notin [-1; 3]$).\nTính giá trị:\n- $f(-1) = 17$\n- $f(0) = 10$\n- $f(2) = -(16) + 8(4) + 10 = 26$\n- $f(3) = -(81) + 8(9) + 10 = 1$.\nVậy $\\max_{[-1; 3]} f(x) = 26$ tại $x = 2$.",
          latexCode: `\\begin{ex}%[VinaMath AI]%[12D1-2]
Giá trị lớn nhất của hàm số $f(x) = -x^4 + 8x^2 + 10$ trên đoạn $[-1; 3]$ bằng \\shortans{26}.
\\loigiai{...}
\\end{ex}`,
        });
      }
    }, 600);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            VinaMath AI Question Engine 2026
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            AI Studio Sinh Câu Hỏi Toán Chuẩn Bộ GD&ĐT
          </h1>
          <p className="text-sm text-blue-100 max-w-2xl">
            Tự động sinh câu hỏi Toán phân hóa 4 mức độ tư duy, bám sát SGK Kết nối tri thức và xuất bản định dạng LaTeX / Word tức thì.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Filter & Controls Panel */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Cấu hình Ma trận Đề
          </h3>

          {/* Grade Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Khối Lớp (SGK Kết nối tri thức):</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="lop-6">Toán Lớp 6</option>
              <option value="lop-9">Toán Lớp 9</option>
              <option value="lop-10">Toán Lớp 10</option>
              <option value="lop-11">Toán Lớp 11</option>
              <option value="lop-12">Toán Lớp 12</option>
            </select>
          </div>

          {/* Format Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Định dạng Câu hỏi Chuẩn BGD:</label>
            <div className="grid grid-cols-1 gap-1.5 text-xs font-medium">
              <button
                onClick={() => setFormatType("multiple_choice")}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  formatType === "multiple_choice"
                    ? "bg-primary/10 border-primary text-primary font-bold"
                    : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                1. Trắc nghiệm 4 lựa chọn (Phần I)
              </button>
              <button
                onClick={() => setFormatType("true_false")}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  formatType === "true_false"
                    ? "bg-purple-500/10 border-purple-600 text-purple-600 font-bold"
                    : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                2. Trắc nghiệm Đúng / Sai 4 ý (Phần II)
              </button>
              <button
                onClick={() => setFormatType("short_answer")}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  formatType === "short_answer"
                    ? "bg-amber-500/10 border-amber-600 text-amber-600 font-bold"
                    : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                3. Trả lời ngắn / Điền số (Phần III)
              </button>
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Mức độ Nhận thức (4 bậc):</label>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => setDifficulty("NB")}
                className={`py-2 rounded-lg border text-center ${difficulty === "NB" ? "bg-blue-600 text-white border-blue-600" : "border-slate-200 dark:border-slate-700"}`}
              >
                Nhận biết (NB)
              </button>
              <button
                onClick={() => setDifficulty("TH")}
                className={`py-2 rounded-lg border text-center ${difficulty === "TH" ? "bg-emerald-600 text-white border-emerald-600" : "border-slate-200 dark:border-slate-700"}`}
              >
                Thông hiểu (TH)
              </button>
              <button
                onClick={() => setDifficulty("VD")}
                className={`py-2 rounded-lg border text-center ${difficulty === "VD" ? "bg-amber-600 text-white border-amber-600" : "border-slate-200 dark:border-slate-700"}`}
              >
                Vận dụng (VD)
              </button>
              <button
                onClick={() => setDifficulty("VDC")}
                className={`py-2 rounded-lg border text-center ${difficulty === "VDC" ? "bg-red-600 text-white border-red-600" : "border-slate-200 dark:border-slate-700"}`}
              >
                Vận dụng cao (VDC)
              </button>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" /> AI Đang Sinh Dữ Liệu...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Sinh Câu Hỏi Tự Động
              </>
            )}
          </button>
        </div>

        {/* Right Preview & Export Studio */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold">
                Mức độ: {difficulty}
              </span>
              <span className="text-xs text-slate-500">Render KaTeX Chuẩn xác 100%</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(currentResult.latexCode)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1 text-slate-700 dark:text-slate-300"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Code2 className="w-3.5 h-3.5 text-primary" />}
                Copy LaTeX
              </button>
              <button
                onClick={() => copyToClipboard(currentResult.stem + "\n" + currentResult.explanation)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1 text-slate-700 dark:text-slate-300"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" /> Copy Văn bản
              </button>
            </div>
          </div>

          {/* Live Preview Area */}
          <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="text-slate-900 dark:text-slate-100 font-medium text-sm md:text-base leading-relaxed">
              <MathFormula math={currentResult.stem} />
            </div>

            {/* If Multiple Choice */}
            {currentResult.type === "multiple_choice" && currentResult.options && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                {currentResult.options.map((opt) => (
                  <div key={opt.key} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {opt.key}
                    </span>
                    <MathFormula math={opt.text} />
                  </div>
                ))}
              </div>
            )}

            {/* If True / False */}
            {currentResult.type === "true_false" && currentResult.subQuestions && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-800">
                {currentResult.subQuestions.map((sub) => (
                  <div key={sub.key} className="p-3.5 flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-primary">{sub.key})</span>
                      <MathFormula math={sub.text} />
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${sub.isCorrect ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"}`}>
                      {sub.isCorrect ? "Đúng" : "Sai"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* If Short Answer */}
            {currentResult.type === "short_answer" && (
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs flex items-center gap-2 text-amber-900 dark:text-amber-200">
                <strong>Đáp án số học:</strong>
                <span className="font-mono text-base font-extrabold">{currentResult.correctAnswer}</span>
              </div>
            )}

            {/* Detailed Explanation */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
              <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Lời giải chi tiết & Phương pháp giải:
              </div>
              <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                <MathFormula math={currentResult.explanation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
