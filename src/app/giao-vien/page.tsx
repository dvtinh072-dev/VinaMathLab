"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TEACHER_RESOURCES } from "@/data/teacherResources";
import { FolderGit2, Download, FileText, Code2, Sparkles, Filter, CheckCircle2 } from "lucide-react";

export default function GiaoVienPage() {
  const [filterType, setFilterType] = useState<string>("all");
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const filtered = TEACHER_RESOURCES.filter(
    (res) => filterType === "all" || res.type === filterType
  );

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-blue-700 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5" />
            Không Gian Dành Cho Giáo Viên Toán
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Kho Giáo Án, Chuyên Đề & Ngân Hàng Đề Thi 2026
          </h1>
          <p className="text-sm text-emerald-100 leading-relaxed">
            Hệ thống tài liệu chuẩn Công văn 5512, bản đặc tả ma trận đề thi tốt nghiệp THPT mới, và các gói mã nguồn LaTeX hỗ trợ giảng dạy.
          </p>
        </div>

        <Link
          href="/ai-studio"
          className="px-5 py-3 rounded-2xl bg-white text-emerald-900 font-bold text-xs md:text-sm shadow-lg hover:bg-emerald-50 transition-all flex items-center gap-2 shrink-0"
        >
          <Sparkles className="w-4 h-4 text-purple-600" /> Dùng AI Sinh Đề Thi Mới
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <button
          onClick={() => setFilterType("all")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filterType === "all"
              ? "bg-primary text-white shadow-sm"
              : "bg-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
          }`}
        >
          Tất cả tài nguyên
        </button>
        <button
          onClick={() => setFilterType("giao_an")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filterType === "giao_an"
              ? "bg-primary text-white shadow-sm"
              : "bg-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
          }`}
        >
          Giáo án (CV 5512)
        </button>
        <button
          onClick={() => setFilterType("chuyen_de")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filterType === "chuyen_de"
              ? "bg-primary text-white shadow-sm"
              : "bg-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
          }`}
        >
          Chuyên đề bồi dưỡng
        </button>
        <button
          onClick={() => setFilterType("de_thi")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filterType === "de_thi"
              ? "bg-primary text-white shadow-sm"
              : "bg-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
          }`}
        >
          Ma trận & Bản đặc tả
        </button>
        <button
          onClick={() => setFilterType("latex_template")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filterType === "latex_template"
              ? "bg-primary text-white shadow-sm"
              : "bg-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
          }`}
        >
          Mẫu mã nguồn LaTeX
        </button>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((res) => (
          <div
            key={res.id}
            className="p-6 rounded-3xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold uppercase">
                  {res.grade} • {res.strand}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {res.downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} lượt tải
                </span>
              </div>

              <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-slate-100 leading-snug">
                {res.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {res.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {res.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500">
                Tác giả: <strong>{res.author}</strong> ({res.fileSize})
              </div>

              <button
                onClick={() => handleDownload(res.id)}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm hover:bg-primary/90 transition-all flex items-center gap-1.5 shrink-0"
              >
                {downloadedId === res.id ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" /> Đã Tải Về
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Tải Tài Liệu
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
