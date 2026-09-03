"use client";

import React, { useState } from "react";
import { Sparkles, MoveHorizontal, ArrowLeftRight } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function NumberLineLab() {
  const [valA, setValA] = useState<number>(-3);
  const [valB, setValB] = useState<number>(4);

  const min = -10;
  const max = 10;
  const range = max - min;

  const getPercent = (v: number) => ((v - min) / range) * 100;

  const distance = Math.abs(valA - valB);
  const midpoint = (valA + valB) / 2;

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-cyan-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <MoveHorizontal className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Trục Số & So Sánh Số Thực / Số Nguyên
            </h3>
            <span className="text-[11px] text-slate-400">
              Trực quan hóa vị trí các số, số đối, khoảng cách và thứ tự trên trục số
            </span>
          </div>
        </div>
      </div>

      {/* Visual Number Line Stage */}
      <div className="relative h-44 rounded-2xl bg-slate-950 border border-cyan-500/30 p-6 flex flex-col justify-center overflow-hidden">
        {/* Main Line with Arrow */}
        <div className="relative w-full h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-rose-500 rounded-full">
          {/* Arrow Head */}
          <div className="absolute -right-2 -top-1.5 w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-rose-500" />

          {/* Tick marks from -10 to 10 */}
          {Array.from({ length: 21 }, (_, i) => i - 10).map((tick) => {
            const pct = getPercent(tick);
            const isZero = tick === 0;
            return (
              <div
                key={tick}
                className="absolute flex flex-col items-center"
                style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
              >
                <div className={`w-0.5 ${isZero ? "h-6 -top-2.5 bg-amber-400" : "h-3 -top-1 bg-slate-600"}`} />
                <span className={`text-[10px] mt-3 font-mono ${isZero ? "text-amber-400 font-black text-xs" : "text-slate-500"}`}>
                  {tick}
                </span>
              </div>
            );
          })}

          {/* Distance Segment between A and B */}
          <div
            className="absolute -top-1 h-3 bg-cyan-400/30 border-y border-cyan-300 rounded"
            style={{
              left: `${Math.min(getPercent(valA), getPercent(valB))}%`,
              width: `${Math.abs(getPercent(valA) - getPercent(valB))}%`,
            }}
          />

          {/* Point A Marker */}
          <div
            className="absolute -top-4 flex flex-col items-center transition-all duration-150 z-20 cursor-pointer"
            style={{ left: `${getPercent(valA)}%`, transform: "translateX(-50%)" }}
          >
            <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white font-black text-xs shadow-md border border-blue-400">
              A ({valA})
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white shadow-lg mt-0.5" />
          </div>

          {/* Point B Marker */}
          <div
            className="absolute -top-4 flex flex-col items-center transition-all duration-150 z-20 cursor-pointer"
            style={{ left: `${getPercent(valB)}%`, transform: "translateX(-50%)" }}
          >
            <span className="px-2 py-0.5 rounded-md bg-rose-600 text-white font-black text-xs shadow-md border border-rose-400">
              B ({valB})
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white shadow-lg mt-0.5" />
          </div>
        </div>
      </div>

      {/* Interactive Controls & Mathematical Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Sliders Control */}
        <div className="space-y-4 p-4 rounded-2xl bg-black/50 border border-white/10">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-blue-300">
              <span>Điều chỉnh điểm A:</span>
              <span className="font-mono text-sm">{valA}</span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={1}
              value={valA}
              onChange={(e) => setValA(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-rose-300">
              <span>Điều chỉnh điểm B:</span>
              <span className="font-mono text-sm">{valB}</span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={1}
              value={valB}
              onChange={(e) => setValB(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Calculated Results */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs">
          <div className="text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Phân tích toán học trực quan:
          </div>
          <div className="space-y-1 text-slate-200">
            <p>
              • <strong>So sánh thứ tự:</strong> {valA < valB ? `${valA} < ${valB} (Điểm A nằm bên trái B)` : valA > valB ? `${valA} > ${valB} (Điểm A nằm bên phải B)` : `${valA} = ${valB} (Hai điểm trùng nhau)`}
            </p>
            <p>
              • <strong>Khoảng cách AB:</strong> <MathFormula math={`d(A, B) = |${valA} - (${valB})| = ${distance}`} />
            </p>
            <p>
              • <strong>Số đối của A ({valA}):</strong> là <span className="text-cyan-300 font-bold">{-valA}</span> (cách đều gốc 0).
            </p>
            <p>
              • <strong>Trung điểm của AB:</strong> <MathFormula math={`M = \\frac{${valA} + (${valB})}{2} = ${midpoint}`} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
