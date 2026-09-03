"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Sparkles, ChevronRight, MessageSquare, Award } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export interface ScenarioFrame {
  id: number;
  character: "teacher" | "student" | "robot";
  characterName: string;
  avatar: string;
  speech: string;
  visualGraphic: "triangle" | "savings" | "graph" | "circle" | "fraction" | "box" | "vector";
  mathNote?: string;
  actionPrompt?: string;
}

interface Props {
  title: string;
  topicTitle: string;
  frames?: ScenarioFrame[];
}

export function VisualStoryScenario({ title, topicTitle, frames }: Props) {
  const defaultFrames: ScenarioFrame[] = [
    {
      id: 1,
      character: "student",
      characterName: "Minh (Học sinh)",
      avatar: "🧑‍🎓",
      speech: `Thầy ơi, bài học "${topicTitle}" này chúng em sẽ ứng dụng vào tình huống thực tế nào trong cuộc sống ạ?`,
      visualGraphic: "triangle",
      mathNote: "\\text{Thắc mắc từ thực tiễn}",
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: `Chào Minh! Em hãy tưởng tượng ta cần đo chiều cao một ngọn tháp cổ hoặc tính toán quỹ đạo chuyển động mà không thể trèo lên đỉnh tháp.`,
      visualGraphic: "graph",
      mathNote: "h = d \\cdot \\tan \\alpha",
      actionPrompt: "Quan sát mô hình toán học",
    },
    {
      id: 3,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: `Nhờ vào các định lý toán học trong bài, chúng ta biến bài toán thực tế phức tạp thành các phép tính toán học cực kỳ đơn giản và chuẩn xác!`,
      visualGraphic: "circle",
      mathNote: "\\Delta = b^2 - 4ac \\ge 0",
      actionPrompt: "Sẵn sàng khám phá lý thuyết!",
    },
  ];

  const storyFrames = frames && frames.length > 0 ? frames : defaultFrames;
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentFrameIndex((prev) => {
          if (prev >= storyFrames.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, storyFrames.length]);

  const currentFrame = storyFrames[currentFrameIndex];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-5 sm:p-7 shadow-xl space-y-5 text-white">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-amber-400/20 text-amber-300">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
              Hoạt Cảnh Tình Huống Thực Tế
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-white">
              {title || `Tình Huống Dẫn Nhập: ${topicTitle}`}
            </h3>
          </div>
        </div>

        {/* Video-style Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-bold flex items-center gap-1 border border-white/10"
            title={isPlaying ? "Tạm dừng" : "Tự động phát hoạt cảnh"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-300" /> : <Play className="w-3.5 h-3.5 text-cyan-300" />}
            <span className="hidden sm:inline">{isPlaying ? "Dừng" : "Phát video"}</span>
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentFrameIndex(0);
            }}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all text-xs border border-white/10"
            title="Xem lại từ đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Animated Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left Graphic Animation Stage (5 cols) */}
        <div className="md:col-span-5 relative h-48 sm:h-56 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center overflow-hidden p-4">
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-pink-500/10 animate-pulse" />

          {/* Dynamic Graphic Model representation */}
          <div className="relative z-10 text-center space-y-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-rose-500 p-0.5 shadow-xl shadow-indigo-500/30 flex items-center justify-center animate-float">
              <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl">
                {currentFrame.character === "teacher" ? "📐" : "💡"}
              </div>
            </div>

            {currentFrame.mathNote && (
              <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/20 text-xs text-cyan-300 font-mono inline-block shadow-md">
                <MathFormula math={currentFrame.mathNote} />
              </div>
            )}
          </div>
        </div>

        {/* Right Dialogue & Story Text (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          {/* Character Tag */}
          <div className="flex items-center gap-2.5">
            <span className="text-3xl p-1 rounded-2xl bg-white/10 border border-white/15">
              {currentFrame.avatar}
            </span>
            <div>
              <span className="text-xs font-bold text-slate-300 block">{currentFrame.characterName}</span>
              <span className="text-[10px] text-cyan-400 font-medium">Khung cảnh {currentFrameIndex + 1} / {storyFrames.length}</span>
            </div>
          </div>

          {/* Speech Bubble */}
          <div className="relative p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg space-y-2">
            <MessageSquare className="w-4 h-4 text-cyan-400 absolute -top-2 -left-2 bg-slate-900 rounded-full p-0.5 border border-cyan-400/50" />
            <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
              {currentFrame.speech}
            </p>
          </div>

          {/* Timeline Step Indicators & Next Button */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              {storyFrames.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentFrameIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentFrameIndex
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                if (currentFrameIndex < storyFrames.length - 1) {
                  setCurrentFrameIndex(currentFrameIndex + 1);
                } else {
                  setCurrentFrameIndex(0);
                }
              }}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs flex items-center gap-1 hover:scale-105 transition-transform shadow-md"
            >
              <span>{currentFrameIndex < storyFrames.length - 1 ? "Tiếp cảnh" : "Xem lại"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
