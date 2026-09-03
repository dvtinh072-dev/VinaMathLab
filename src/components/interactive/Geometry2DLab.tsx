"use client";

import React, { useState } from "react";
import { Sparkles, Shapes } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

type ShapeType = "equilateral_triangle" | "square" | "hexagon" | "rectangle" | "rhombus" | "trapezoid";

export function Geometry2DLab() {
  const [shape, setShape] = useState<ShapeType>("square");
  const [sideA, setSideA] = useState<number>(6);
  const [sideB, setSideB] = useState<number>(4);
  const [height, setHeight] = useState<number>(5);

  let perimeterFormula = "";
  let perimeterValue = 0;
  let areaFormula = "";
  let areaValue = 0;

  if (shape === "equilateral_triangle") {
    perimeterFormula = `C = 3a = 3 \\times ${sideA} = ${3 * sideA}`;
    perimeterValue = 3 * sideA;
    areaFormula = `S = \\frac{a^2 \\sqrt{3}}{4} \\approx ${((sideA * sideA * 1.732) / 4).toFixed(2)}`;
    areaValue = Number(((sideA * sideA * 1.732) / 4).toFixed(2));
  } else if (shape === "square") {
    perimeterFormula = `C = 4a = 4 \\times ${sideA} = ${4 * sideA}`;
    perimeterValue = 4 * sideA;
    areaFormula = `S = a^2 = ${sideA}^2 = ${sideA * sideA}`;
    areaValue = sideA * sideA;
  } else if (shape === "hexagon") {
    perimeterFormula = `C = 6a = 6 \\times ${sideA} = ${6 * sideA}`;
    perimeterValue = 6 * sideA;
    areaFormula = `S = \\frac{3\\sqrt{3}}{2} a^2 \\approx ${(2.598 * sideA * sideA).toFixed(2)}`;
    areaValue = Number((2.598 * sideA * sideA).toFixed(2));
  } else if (shape === "rectangle") {
    perimeterFormula = `C = 2(a + b) = 2(${sideA} + ${sideB}) = ${2 * (sideA + sideB)}`;
    perimeterValue = 2 * (sideA + sideB);
    areaFormula = `S = a \\times b = ${sideA} \\times ${sideB} = ${sideA * sideB}`;
    areaValue = sideA * sideB;
  } else if (shape === "rhombus") {
    perimeterFormula = `C = 4a = 4 \\times ${sideA} = ${4 * sideA}`;
    perimeterValue = 4 * sideA;
    areaFormula = `S = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times ${sideA} \\times ${sideB} = ${(0.5 * sideA * sideB).toFixed(2)}`;
    areaValue = 0.5 * sideA * sideB;
  } else if (shape === "trapezoid") {
    perimeterFormula = `\\text{Chu vi} = a + b + c + d`;
    perimeterValue = sideA + sideB + 2 * Math.sqrt(height * height + 1);
    areaFormula = `S = \\frac{(a + b) \\times h}{2} = \\frac{(${sideA} + ${sideB}) \\times ${height}}{2} = ${((sideA + sideB) * height) / 2}`;
    areaValue = ((sideA + sideB) * height) / 2;
  }

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
            <Shapes className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Khám Phá Hình Học Phẳng, Chu Vi & Diện Tích
            </h3>
            <span className="text-[11px] text-slate-400">
              Mô hình hóa tam giác đều, hình vuông, lục giác đều, hình chữ nhật, thoi, thang cân
            </span>
          </div>
        </div>
      </div>

      {/* Shape Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "equilateral_triangle", label: "Tam Giác Đều" },
          { id: "square", label: "Hình Vuông" },
          { id: "hexagon", label: "Lục Giác Đều" },
          { id: "rectangle", label: "Hình Chữ Nhật" },
          { id: "rhombus", label: "Hình Thoi" },
          { id: "trapezoid", label: "Hình Thang" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setShape(tab.id as ShapeType)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              shape === tab.id
                ? "bg-emerald-500 text-slate-950 shadow-md font-black"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Visual Canvas & Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* SVG Drawing Canvas */}
        <div className="md:col-span-6 relative h-56 rounded-2xl bg-slate-950 border border-emerald-500/30 flex items-center justify-center p-4">
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            {shape === "equilateral_triangle" && (
              <polygon points="100,20 20,170 180,170" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="3" />
            )}
            {shape === "square" && (
              <rect x="35" y="35" width="130" height="130" rx="4" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="3" />
            )}
            {shape === "hexagon" && (
              <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="3" />
            )}
            {shape === "rectangle" && (
              <rect x="20" y="50" width="160" height="100" rx="4" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="3" />
            )}
            {shape === "rhombus" && (
              <polygon points="100,20 175,100 100,180 25,100" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="3" />
            )}
            {shape === "trapezoid" && (
              <polygon points="50,45 150,45 180,155 20,155" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="3" />
            )}
          </svg>
        </div>

        {/* Sliders & Formula Outputs */}
        <div className="md:col-span-6 space-y-4">
          <div className="space-y-3 p-4 rounded-2xl bg-black/50 border border-white/10">
            <div>
              <div className="flex justify-between text-xs font-bold text-emerald-300">
                <span>Cạnh a (hoặc đáy 1):</span>
                <span className="font-mono">{sideA} cm</span>
              </div>
              <input
                type="range"
                min={2}
                max={15}
                value={sideA}
                onChange={(e) => setSideA(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            {(shape === "rectangle" || shape === "rhombus" || shape === "trapezoid") && (
              <div>
                <div className="flex justify-between text-xs font-bold text-cyan-300">
                  <span>Cạnh b (hoặc đáy 2 / đường chéo 2):</span>
                  <span className="font-mono">{sideB} cm</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={15}
                  value={sideB}
                  onChange={(e) => setSideB(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>
            )}

            {shape === "trapezoid" && (
              <div>
                <div className="flex justify-between text-xs font-bold text-amber-300">
                  <span>Chiều cao h:</span>
                  <span className="font-mono">{height} cm</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={12}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            )}
          </div>

          {/* Results */}
          <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-2 text-xs">
            <div className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Kết quả tính toán:
            </div>
            <div className="space-y-1.5">
              <p>• <strong>Chu vi:</strong> <MathFormula math={perimeterFormula} /></p>
              <p>• <strong>Diện tích:</strong> <MathFormula math={areaFormula} /> (cm²)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
