"use client";

import React, { useState } from "react";
import { Sparkles, Compass } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function TrigCircleLab() {
  const [angleDeg, setAngleDeg] = useState<number>(45);

  const rad = (angleDeg * Math.PI) / 180;
  const sinVal = Math.sin(rad);
  const cosVal = Math.cos(rad);
  const tanVal = Math.abs(cosVal) > 0.001 ? Math.tan(rad) : Infinity;

  // Center is (100, 100), radius is 75
  const cx = 100;
  const cy = 100;
  const r = 75;

  const px = cx + r * cosVal;
  const py = cy - r * sinVal; // SVG y goes down

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-cyan-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Compass className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Đường Tròn Lượng Giác & Giá Trị Lượng Giác
            </h3>
            <span className="text-[11px] text-slate-400">
              Kéo góc α để quan sát trực tiếp sin α, cos α, tan α trên hệ trục tọa độ
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* SVG Unit Circle */}
        <div className="md:col-span-6 relative h-64 rounded-2xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center p-4">
          <svg viewBox="0 0 200 200" className="w-56 h-56">
            {/* Coordinate Axes */}
            <line x1="10" y1="100" x2="190" y2="100" stroke="#475569" strokeWidth="1.5" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#475569" strokeWidth="1.5" />
            <text x="185" y="95" fill="#94a3b8" fontSize="9" fontWeight="bold">x (cos)</text>
            <text x="105" y="18" fill="#94a3b8" fontSize="9" fontWeight="bold">y (sin)</text>

            {/* Unit Circle */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3,3" />

            {/* Angle Ray */}
            <line x1={cx} y1={cy} x2={px} y2={py} stroke="#f59e0b" strokeWidth="2.5" />

            {/* Projections: cos projection (blue horizontal), sin projection (rose vertical) */}
            <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            <line x1={px} y1={cy} x2={px} y2={py} stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />

            {/* Point M */}
            <circle cx={px} cy={py} r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <text x={px + 6} y={py - 6} fill="#fbbf24" fontSize="10" fontWeight="bold">M</text>
          </svg>
        </div>

        {/* Controls & Realtime Math Values */}
        <div className="md:col-span-6 space-y-4">
          <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2">
            <div className="flex justify-between text-xs font-bold text-amber-300">
              <span>Góc lượng giác α:</span>
              <span className="font-mono text-sm">{angleDeg}° ({((angleDeg * Math.PI) / 180).toFixed(2)} rad)</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              step={5}
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            {/* Quick buttons */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[0, 30, 45, 60, 90, 120, 135, 150, 180, 270, 360].map((d) => (
                <button
                  key={d}
                  onClick={() => setAngleDeg(d)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                    angleDeg === d ? "bg-amber-400 text-slate-950" : "bg-white/10 text-slate-300 hover:bg-white/20"
                  }`}
                >
                  {d}°
                </button>
              ))}
            </div>
          </div>

          {/* Realtime Values Output */}
          <div className="p-4 rounded-2xl bg-black/60 border border-cyan-400/30 space-y-2 text-xs">
            <div className="text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Giá trị lượng giác tương ứng:
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/40">
                <span className="text-blue-300 text-[10px] block font-bold">Trục Cosin (hoành độ):</span>
                <MathFormula math={`\\cos(${angleDeg}^\\circ) = ${cosVal.toFixed(4)}`} />
              </div>
              <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40">
                <span className="text-rose-300 text-[10px] block font-bold">Trục Sin (tung độ):</span>
                <MathFormula math={`\\sin(${angleDeg}^\\circ) = ${sinVal.toFixed(4)}`} />
              </div>
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/40 col-span-2">
                <span className="text-amber-300 text-[10px] block font-bold">Tang và Hệ thức cơ bản:</span>
                <MathFormula math={`\\tan(${angleDeg}^\\circ) = ${Math.abs(tanVal) > 1000 ? "\\text{Không xác định}" : tanVal.toFixed(4)}; \\quad \\sin^2 \\alpha + \\cos^2 \\alpha = 1`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
