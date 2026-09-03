"use client";

import React, { useState } from "react";
import { Sparkles, Box } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

type SolidType = "prism" | "pyramid" | "cylinder" | "cone" | "sphere" | "oxyz";

export function Space3DLab() {
  const [solid, setSolid] = useState<SolidType>("prism");
  const [paramR, setParamR] = useState<number>(4);
  const [paramH, setParamH] = useState<number>(6);

  let volumeFormula = "";
  let areaFormula = "";

  if (solid === "prism") {
    volumeFormula = `V = S_{\\text{đáy}} \\times h = (${paramR} \\times ${paramR}) \\times ${paramH} = ${paramR * paramR * paramH}`;
    areaFormula = `S_{xq} = C_{\\text{đáy}} \\times h = (4 \\times ${paramR}) \\times ${paramH} = ${4 * paramR * paramH}`;
  } else if (solid === "pyramid") {
    volumeFormula = `V = \\frac{1}{3} S_{\\text{đáy}} \\times h = \\frac{1}{3} (${paramR}^2) \\times ${paramH} = ${((paramR * paramR * paramH) / 3).toFixed(2)}`;
    areaFormula = `S_{xq} = p \\times d \\approx ${(2 * paramR * Math.sqrt(paramH * paramH + (paramR / 2) * (paramR / 2))).toFixed(2)}`;
  } else if (solid === "cylinder") {
    volumeFormula = `V = \\pi r^2 h = \\pi \\times ${paramR}^2 \\times ${paramH} \\approx ${(3.1416 * paramR * paramR * paramH).toFixed(2)}`;
    areaFormula = `S_{xq} = 2\\pi r h = 2\\pi \\times ${paramR} \\times ${paramH} \\approx ${(2 * 3.1416 * paramR * paramH).toFixed(2)}`;
  } else if (solid === "cone") {
    volumeFormula = `V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\times ${paramR}^2 \\times ${paramH} \\approx ${((3.1416 * paramR * paramR * paramH) / 3).toFixed(2)}`;
    areaFormula = `S_{xq} = \\pi r l = \\pi \\times ${paramR} \\times \\sqrt{${paramR}^2 + ${paramH}^2} \\approx ${(3.1416 * paramR * Math.sqrt(paramR * paramR + paramH * paramH)).toFixed(2)}`;
  } else if (solid === "sphere") {
    volumeFormula = `V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\pi \\times ${paramR}^3 \\approx ${((4 / 3) * 3.1416 * Math.pow(paramR, 3)).toFixed(2)}`;
    areaFormula = `S = 4\\pi r^2 = 4\\pi \\times ${paramR}^2 \\approx ${(4 * 3.1416 * paramR * paramR).toFixed(2)}`;
  } else if (solid === "oxyz") {
    volumeFormula = `\\vec{u} = (x; y; z) = (${paramR}; ${paramH}; 2)`;
    areaFormula = `|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2} = \\sqrt{${paramR}^2 + ${paramH}^2 + 4} = ${Math.sqrt(paramR * paramR + paramH * paramH + 4).toFixed(2)}`;
  }

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
            <Box className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Hình Không Gian & Tọa Độ Oxyz
            </h3>
            <span className="text-[11px] text-slate-400">
              Mô hình hóa hình lăng trụ, chóp, trụ, nón, cầu và vectơ không gian 3D
            </span>
          </div>
        </div>
      </div>

      {/* Solid Type Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "prism", label: "Lăng Trụ Đứng" },
          { id: "pyramid", label: "Hình Chóp Đều" },
          { id: "cylinder", label: "Hình Trụ" },
          { id: "cone", label: "Hình Nón" },
          { id: "sphere", label: "Hình Cầu" },
          { id: "oxyz", label: "Tọa Độ Oxyz" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSolid(tab.id as SolidType)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              solid === tab.id
                ? "bg-blue-500 text-white shadow-md font-black"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Visual Canvas & Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* SVG 3D Isometric Projection Stage */}
        <div className="md:col-span-6 relative h-60 rounded-2xl bg-slate-950 border border-blue-500/30 flex items-center justify-center p-4">
          <svg viewBox="0 0 200 200" className="w-52 h-52">
            {solid === "prism" && (
              <g stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.15)">
                <polygon points="50,140 110,160 160,130 100,110" />
                <polygon points="50,60 110,80 160,50 100,30" />
                <line x1="50" y1="140" x2="50" y2="60" />
                <line x1="110" y1="160" x2="110" y2="80" />
                <line x1="160" y1="130" x2="160" y2="50" />
                <line x1="100" y1="110" x2="100" y2="30" strokeDasharray="3,3" />
              </g>
            )}
            {solid === "pyramid" && (
              <g stroke="#f59e0b" strokeWidth="2" fill="rgba(245, 158, 11, 0.15)">
                <polygon points="40,150 110,165 160,135 90,120" />
                <line x1="100" y1="30" x2="40" y2="150" />
                <line x1="100" y1="30" x2="110" y2="165" />
                <line x1="100" y1="30" x2="160" y2="135" />
                <line x1="100" y1="30" x2="90" y2="120" strokeDasharray="3,3" />
              </g>
            )}
            {solid === "cylinder" && (
              <g stroke="#a855f7" strokeWidth="2" fill="rgba(168, 85, 247, 0.15)">
                <ellipse cx="100" cy="50" rx="60" ry="20" />
                <ellipse cx="100" cy="150" rx="60" ry="20" />
                <line x1="40" y1="50" x2="40" y2="150" />
                <line x1="160" y1="50" x2="160" y2="150" />
              </g>
            )}
            {solid === "cone" && (
              <g stroke="#ec4899" strokeWidth="2" fill="rgba(236, 72, 153, 0.15)">
                <ellipse cx="100" cy="150" rx="60" ry="20" />
                <line x1="100" y1="30" x2="40" y2="150" />
                <line x1="100" y1="30" x2="160" y2="150" />
                <line x1="100" y1="30" x2="100" y2="150" strokeDasharray="3,3" stroke="#f43f5e" />
              </g>
            )}
            {solid === "sphere" && (
              <g stroke="#10b981" strokeWidth="2" fill="rgba(16, 185, 129, 0.15)">
                <circle cx="100" cy="100" r="65" />
                <ellipse cx="100" cy="100" rx="65" ry="22" strokeDasharray="4,4" />
              </g>
            )}
            {solid === "oxyz" && (
              <g stroke="#64748b" strokeWidth="1.5">
                <line x1="100" y1="100" x2="185" y2="100" stroke="#3b82f6" strokeWidth="2" />
                <line x1="100" y1="100" x2="100" y2="15" stroke="#10b981" strokeWidth="2" />
                <line x1="100" y1="100" x2="35" y2="160" stroke="#f43f5e" strokeWidth="2" />
                <text x="180" y="95" fill="#3b82f6" fontSize="10" fontWeight="bold">Oy</text>
                <text x="105" y="20" fill="#10b981" fontSize="10" fontWeight="bold">Oz</text>
                <text x="30" y="165" fill="#f43f5e" fontSize="10" fontWeight="bold">Ox</text>
                {/* Vector arrow */}
                <line x1="100" y1="100" x2="145" y2="60" stroke="#f59e0b" strokeWidth="3" />
                <circle cx="145" cy="60" r="4" fill="#f59e0b" />
                <text x="150" y="55" fill="#fbbf24" fontSize="10" fontWeight="bold">M(x,y,z)</text>
              </g>
            )}
          </svg>
        </div>

        {/* Sliders & Formulas Output */}
        <div className="md:col-span-6 space-y-4">
          <div className="space-y-3 p-4 rounded-2xl bg-black/50 border border-white/10">
            <div>
              <div className="flex justify-between text-xs font-bold text-blue-300">
                <span>Bán kính r (hoặc cạnh đáy a):</span>
                <span className="font-mono">{paramR}</span>
              </div>
              <input
                type="range"
                min={2}
                max={12}
                value={paramR}
                onChange={(e) => setParamR(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>

            {solid !== "sphere" && (
              <div>
                <div className="flex justify-between text-xs font-bold text-cyan-300">
                  <span>Chiều cao h (hoặc tọa độ y):</span>
                  <span className="font-mono">{paramH}</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={15}
                  value={paramH}
                  onChange={(e) => setParamH(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>
            )}
          </div>

          {/* Realtime Volume & Area Display */}
          <div className="p-4 rounded-2xl bg-black/60 border border-blue-400/30 space-y-2 text-xs">
            <div className="text-blue-300 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Kết quả tính toán không gian:
            </div>
            <div className="space-y-1.5">
              <p>• <strong>{solid === "oxyz" ? "Tọa độ vectơ:" : "Thể tích (V):"}</strong> <MathFormula math={volumeFormula} /></p>
              <p>• <strong>{solid === "oxyz" ? "Độ dài vectơ:" : "Diện tích (S):"}</strong> <MathFormula math={areaFormula} /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
