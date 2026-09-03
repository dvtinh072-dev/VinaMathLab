"use client";

import React, { useState } from "react";
import { Sparkles, Dices, RotateCcw, Play } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function ProbabilitySimulatorLab() {
  const [diceRolls, setDiceRolls] = useState<number[]>([3, 5, 2, 6, 1, 4, 6]);
  const [targetFace, setTargetFace] = useState<number>(6);

  const rollOnce = () => {
    const r = Math.floor(Math.random() * 6) + 1;
    setDiceRolls((prev) => [r, ...prev.slice(0, 49)]);
  };

  const roll10Times = () => {
    const newRolls: number[] = [];
    for (let i = 0; i < 10; i++) {
      newRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    setDiceRolls((prev) => [...newRolls, ...prev.slice(0, 40)]);
  };

  const resetRolls = () => {
    setDiceRolls([]);
  };

  const total = diceRolls.length;
  const countTarget = diceRolls.filter((r) => r === targetFace).length;
  const empiricalProb = total > 0 ? (countTarget / total).toFixed(3) : "0";
  const theoreticalProb = (1 / 6).toFixed(3);

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-rose-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
            <Dices className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Thí Nghiệm Xác Suất Thực Nghiệm (Tung Xúc Xắc)
            </h3>
            <span className="text-[11px] text-slate-400">
              Mô phỏng gieo xúc xắc ngẫu nhiên và so sánh tần số thực nghiệm với xác suất lý thuyết
            </span>
          </div>
        </div>
      </div>

      {/* Simulator Controls & Dice Display */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Latest Roll Big Dice Stage */}
        <div className="md:col-span-5 relative h-48 rounded-2xl bg-slate-950 border border-rose-500/30 flex flex-col items-center justify-center p-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 p-1 shadow-xl shadow-rose-500/40 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center text-4xl font-black text-white">
              {diceRolls.length > 0 ? diceRolls[0] : "🎲"}
            </div>
          </div>
          <span className="text-xs text-slate-400 mt-2">Kết quả lần gieo gần nhất</span>
        </div>

        {/* Action Buttons & Target Selector */}
        <div className="md:col-span-7 space-y-4">
          <div className="space-y-1.5 text-xs">
            <span className="text-slate-300 font-bold block">Chọn mặt xúc xắc cần theo dõi sự kiện:</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((face) => (
                <button
                  key={face}
                  onClick={() => setTargetFace(face)}
                  className={`flex-1 py-1.5 rounded-xl font-black text-xs transition-all ${
                    targetFace === face
                      ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  Mặt {face}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={rollOnce}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs flex items-center gap-1.5 hover:scale-105 transition-transform shadow-md"
            >
              <Play className="w-3.5 h-3.5" /> Gieo 1 Lần
            </button>
            <button
              onClick={roll10Times}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:scale-105 transition-transform shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" /> Gieo 10 Lần
            </button>
            <button
              onClick={resetRolls}
              className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Xóa
            </button>
          </div>
        </div>
      </div>

      {/* Probability Results Comparison */}
      <div className="p-4 rounded-2xl bg-black/60 border border-rose-500/30 space-y-2 text-xs">
        <div className="text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Thống kê xác suất thực nghiệm sự kiện &quot;Xuất hiện mặt {targetFace}&quot;:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-rose-400/40">
            <span className="text-slate-400 text-[10px] block">Xác suất thực nghiệm:</span>
            <MathFormula math={`P_{\\text{thực nghiệm}} = \\frac{k}{n} = \\frac{${countTarget}}{${total}} \\approx ${empiricalProb}`} />
            <span className="text-[10px] text-slate-400 block mt-1">Xuất hiện {countTarget} lần trên tổng số {total} lần gieo</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-cyan-400/40">
            <span className="text-slate-400 text-[10px] block">Xác suất lý thuyết:</span>
            <MathFormula math={`P_{\\text{lý thuyết}} = \\frac{1}{6} \\approx ${theoreticalProb}`} />
            <span className="text-[10px] text-slate-400 block mt-1">Khi n càng lớn, xác suất thực nghiệm càng tiến gần xác suất lý thuyết!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
