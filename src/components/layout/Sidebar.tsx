"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GradeData } from "@/data/curriculumData";
import { BookOpen, Layers, Compass, BarChart3, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

interface Props {
  gradeData: GradeData;
}

export function Sidebar({ gradeData }: Props) {
  const pathname = usePathname();
  const { user, isStudent, isAdmin, openAuthModal } = useAuth();
  const isAuthenticated = Boolean(user && (isStudent || isAdmin));
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({
    [gradeData.chapters[0]?.id || ""]: true,
  });

  const toggleChapter = (chapterId: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const strandConfig = {
    daiso: { label: "Đại số & Giải tích", icon: Layers, color: "text-blue-500" },
    hinhhoc: { label: "Hình học & Đo lường", icon: Compass, color: "text-emerald-500" },
    thongke: { label: "Thống kê & Xác suất", icon: BarChart3, color: "text-amber-500" },
  };

  const activeRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [pathname]);

  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-20">
      <div className="p-3 sm:p-3.5 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:max-h-[calc(100vh-6rem)]">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-primary">
              Hệ Thống Học Liệu
            </span>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
              {gradeData.title}
            </h3>
          </div>

          {/* Toggle Button for Mobile Only */}
          <button
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="lg:hidden px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1"
          >
            <span>{mobileExpanded ? "Thu gọn danh mục" : "Xem bài khác"}</span>
            <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", mobileExpanded ? "rotate-180" : "")} />
          </button>
        </div>

        {/* Chapters Accordion Navigation - Ẩn mặc định trên mobile để học sinh tập trung làm bài, bấm 'Xem bài khác' để mở */}
        <nav className={cn(
          "space-y-2 mt-2 overflow-y-auto pr-1 flex-1 overscroll-contain transition-all duration-300",
          !mobileExpanded && "hidden lg:block",
          mobileExpanded && "block max-h-72 lg:max-h-none"
        )}>
          {gradeData.chapters.map((chapter) => {
            const isOpen = openChapters[chapter.id] ?? true;

            return (
              <div key={chapter.id} className="space-y-1">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between p-1.5 rounded-lg text-left text-xs font-black text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                >
                  <span className="truncate group-hover:text-primary">{chapter.title}</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200", !isOpen && "-rotate-90")} />
                </button>

                {isOpen && (
                  <div className="space-y-0.5 pl-2 border-l-2 border-slate-200 dark:border-slate-800 ml-1.5">
                    {chapter.lessons.map((lesson) => {
                      const strand = strandConfig[lesson.strand];
                      const StrandIcon = strand.icon;
                      const href = `/hoc-tap/${gradeData.grade}/${lesson.id}`;
                      const active = pathname === href;

                      return (
                        <Link
                          key={lesson.id}
                          ref={active ? activeRef : null}
                          href={href}
                          onClick={(e) => {
                            if (!isAuthenticated) {
                              e.preventDefault();
                              openAuthModal("student", "login");
                            }
                          }}
                          className={cn(
                            "group flex items-start gap-1.5 p-1.5 rounded-lg text-xs transition-all cursor-pointer",
                            active
                              ? "bg-primary text-white font-bold shadow-md shadow-primary/20"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900"
                          )}
                        >
                          <StrandIcon
                            className={cn("w-3 h-3 mt-0.5 shrink-0", active ? "text-white" : strand.color)}
                          />
                          <div className="flex-1 leading-tight truncate">
                            <div className="truncate font-semibold">{lesson.title}</div>
                          </div>
                          <ChevronRight
                            className={cn(
                              "w-3 h-3 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
                              active && "opacity-100"
                            )}
                          />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
