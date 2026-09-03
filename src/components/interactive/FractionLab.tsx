"use client";

import React, { useState } from "react";
import { Sparkles, PieChart } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function FractionLab() {
  const [numA, setNumA] = useState<number>(3);
  const [denA, setDenA] = useState<number>(4);
  const [numB, setNumB] = useState<number>(1);
  const [denB, setDenB] = useState<number>(2);

  const gcd = (a: number, b: number): number => (!b ? Math.abs(a) : gcd(b, a % b));

  // Fraction addition
  const sumNum = numA * denB + numB * denA;
  const sumDen = denA * denB;
  const sumGcd = gcd(sumNum, sumDen);
  const simSumNum = sumNum / sumGcd;
  const simSumDen = sumDen / sumGcd;

  // Fraction multiplication
  const prodNum = numA * numB;
  const prodDen = denA * denB;
  const prodGcd = gcd(prodNum, prodDen);
  const simProdNum = prodNum / prodGcd;
  const simProdDen = prodDen / prodGcd;

  const valA = numA / denA;
  const valB = numB / denB;

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-purple-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
            <PieChart className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Mô Phỏng Phân Số, Quy Đồng & Phép Tính
            </h3>
            <span className="text-[11px] text-slate-400">
              Trực quan hóa tỉ lệ phân số bằng hình tròn và thanh đo trực quan
            </span>
          </div>
        </div>
      </div>

      {/* Visual Fraction Bars / Pies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Fraction A Visual */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-4 text-center">
          <div className="text-sm font-black text-purple-300">
            Phân số thứ nhất: <MathFormula math={`\\frac{${numA}}{${denA}} = ${(valA).toFixed(3)}`} />
          </div>

          {/* Circular Pie Chart SVG */}
          <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#1e293b" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="transparent"
                stroke="#a855f7"
                strokeWidth="4"
                strokeDasharray={`${Math.min(100, Math.max(0, (numA / denA) * 100))}, 100`}
              />
            </svg>
            <span className="absolute text-xs font-black text-purple-200">
              {Math.round((numA / denA) * 100)}%
            </span>
          </div>

          {/* Controls A */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Tử số a: {numA}</span>
              <input
                type="range"
                min={1}
                max={12}
                value={numA}
                onChange={(e) => setNumA(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Mẫu số b: {denA}</span>
              <input
                type="range"
                min={1}
                max={12}
                value={denA}
                onChange={(e) => setDenA(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Fraction B Visual */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4 text-center">
          <div className="text-sm font-black text-cyan-300">
            Phân số thứ hai: <MathFormula math={`\\frac{${numB}}{${denB}} = ${(valB).toFixed(3)}`} />
          </div>

          {/* Circular Pie Chart SVG */}
          <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#1e293b" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="transparent"
                stroke="#06b6d4"
                strokeWidth="4"
                strokeDasharray={`${Math.min(100, Math.max(0, (numB / denB) * 100))}, 100`}
              />
            </svg>
            <span className="absolute text-xs font-black text-cyan-200">
              {Math.round((numB / denB) * 100)}%
            </span>
          </div>

          {/* Controls B */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Tử số c: {numB}</span>
              <input
                type="range"
                min={1}
                max={12}
                value={numB}
                onChange={(e) => setNumB(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Mẫu số d: {denB}</span>
              <input
                type="range"
                min={1}
                max={12}
                value={denB}
                onChange={(e) => setDenB(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Calculations Summary */}
      <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-2 text-xs">
        <div className="text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Kết quả các phép toán phân số:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-slate-900 border border-purple-400/30">
            <span className="text-slate-400 text-[10px] block">Phép cộng (quy đồng mẫu):</span>
            <MathFormula math={`\\frac{${numA}}{${denA}} + \\frac{${numB}}{${denB}} = \\frac{${sumNum}}{${sumDen}} = \\frac{${simSumNum}}{${simSumDen}}`} />
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-cyan-400/30">
            <span className="text-slate-400 text-[10px] block">Phép nhân:</span>
            <MathFormula math={`\\frac{${numA}}{${denA}} \\cdot \\frac{${numB}}{${denB}} = \\frac{${prodNum}}{${prodDen}} = \\frac{${simProdNum}}{${simProdDen}}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
