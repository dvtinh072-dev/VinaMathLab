"use client";

import React, { useState } from "react";
import { Sparkles, BarChart3, Plus, Trash2 } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function StatisticsChartLab() {
  const [dataPoints, setDataPoints] = useState<{ label: string; value: number }[]>([
    { label: "Thứ 2", value: 8 },
    { label: "Thứ 3", value: 12 },
    { label: "Thứ 4", value: 6 },
    { label: "Thứ 5", value: 15 },
    { label: "Thứ 6", value: 9 },
  ]);

  const [newLabel, setNewLabel] = useState("");
  const [newVal, setNewVal] = useState("");

  const addPoint = () => {
    if (!newLabel || !newVal) return;
    setDataPoints([...dataPoints, { label: newLabel, value: Number(newVal) }]);
    setNewLabel("");
    setNewVal("");
  };

  const removePoint = (idx: number) => {
    setDataPoints(dataPoints.filter((_, i) => i !== idx));
  };

  const values = dataPoints.map((d) => d.value);
  const n = values.length;
  const sum = values.reduce((a, b) => a + b, 0);
  const mean = n > 0 ? (sum / n).toFixed(2) : "0";

  const sortedVals = [...values].sort((a, b) => a - b);
  const median =
    n === 0
      ? 0
      : n % 2 === 1
      ? sortedVals[Math.floor(n / 2)]
      : ((sortedVals[n / 2 - 1] + sortedVals[n / 2]) / 2).toFixed(2);

  const maxVal = Math.max(1, ...values);

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-amber-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
            <BarChart3 className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Biểu Đồ Thống Kê & Số Đặc Trưng
            </h3>
            <span className="text-[11px] text-slate-400">
              Trực quan hóa biểu đồ cột, tính Số trung bình cộng, Trung vị và Tần số
            </span>
          </div>
        </div>
      </div>

      {/* Visual Bar Chart */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
        <div className="h-44 flex items-end gap-3 sm:gap-6 pt-6 px-4 border-b border-slate-700">
          {dataPoints.map((item, idx) => {
            const hPct = (item.value / maxVal) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                <span className="text-[10px] font-mono text-amber-300 font-bold opacity-80 group-hover:opacity-100">
                  {item.value}
                </span>
                <div
                  className="w-full bg-gradient-to-t from-amber-600 via-yellow-500 to-amber-400 rounded-t-xl transition-all duration-300 shadow-md group-hover:brightness-125"
                  style={{ height: `${Math.max(8, hPct)}%` }}
                />
                <span className="text-[10px] text-slate-400 truncate max-w-[60px] text-center mt-1">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Controls to add/remove data */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <input
            type="text"
            placeholder="Tên mục (vd: T7)"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white w-28 text-xs"
          />
          <input
            type="number"
            placeholder="Số lượng"
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white w-24 text-xs"
          />
          <button
            onClick={addPoint}
            className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center gap-1 hover:scale-105 transition-transform"
          >
            <Plus className="w-3.5 h-3.5" /> Thêm Cột
          </button>
        </div>
      </div>

      {/* Statistical Summary Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-400/30 space-y-1 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">Số trung bình cộng (x̄)</span>
          <div className="text-lg font-black text-amber-300">{mean}</div>
          <span className="text-[10px] text-slate-500">Tổng: {sum} / {n} mẫu</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/60 border border-cyan-400/30 space-y-1 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">Trung vị (Me)</span>
          <div className="text-lg font-black text-cyan-300">{median}</div>
          <span className="text-[10px] text-slate-500">Điểm nằm chính giữa</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/60 border border-purple-400/30 space-y-1 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">Khoảng biến thiên (R)</span>
          <div className="text-lg font-black text-purple-300">{values.length > 0 ? Math.max(...values) - Math.min(...values) : 0}</div>
          <span className="text-[10px] text-slate-500">Max ({Math.max(...values)}) - Min ({Math.min(...values)})</span>
        </div>
      </div>
    </div>
  );
}
