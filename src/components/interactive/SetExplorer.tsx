"use client";

import React, { useState } from "react";
import { Sparkles, Plus, Trash2, CheckCircle } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function SetExplorer() {
  const [elements, setElements] = useState<string[]>(["0", "1", "2", "3", "4"]);
  const [inputVal, setInputVal] = useState<string>("");
  const [checkVal, setCheckVal] = useState<string>("");
  const [checkResult, setCheckResult] = useState<string | null>(null);

  const addElement = () => {
    const trimmed = inputVal.trim();
    if (!trimmed) return;
    if (elements.includes(trimmed)) {
      alert(`Phần tử "${trimmed}" đã có trong tập hợp! Mỗi phần tử chỉ được viết 1 lần.`);
      return;
    }
    setElements([...elements, trimmed]);
    setInputVal("");
    setCheckResult(null);
  };

  const removeElement = (item: string) => {
    setElements(elements.filter((el) => el !== item));
    setCheckResult(null);
  };

  const verifyBelonging = () => {
    const trimmed = checkVal.trim();
    if (!trimmed) return;
    if (elements.includes(trimmed)) {
      setCheckResult(`${trimmed} \\in A \\quad \\text{(${trimmed} THUỘC tập hợp A)}`);
    } else {
      setCheckResult(`${trimmed} \\notin A \\quad \\text{(${trimmed} KHÔNG THUỘC tập hợp A)}`);
    }
  };

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-cyan-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Mô Phỏng Tập Hợp & Sơ Đồ Venn
            </h3>
            <span className="text-[11px] text-slate-400">
              Trực quan hóa tập hợp A dưới dạng vòng tròn đóng (Sơ đồ Venn)
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Venn Diagram Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Venn Diagram Visual Stage */}
        <div className="md:col-span-6 relative h-64 rounded-2xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center p-4 overflow-hidden">
          {/* Outer Boundary Space */}
          <div className="absolute top-2 left-3 text-[10px] font-bold text-slate-500 uppercase">
            Mặt phẳng không gian (Các đối tượng ngoài A)
          </div>

          {/* Venn Circle / Ellipse A */}
          <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full border-3 border-dashed border-cyan-400 bg-gradient-to-br from-cyan-500/15 via-indigo-600/15 to-blue-500/15 flex flex-col items-center justify-center p-4 shadow-2xl shadow-cyan-500/20">
            <span className="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-cyan-500 text-slate-950 font-black text-xs shadow-md">
              Tập Hợp A
            </span>

            {/* Elements inside Venn circle */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-[160px]">
              {elements.length === 0 ? (
                <span className="text-xs text-slate-400 italic">Tập hợp rỗng ∅</span>
              ) : (
                elements.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/15 border border-cyan-400/40 text-cyan-200 text-xs font-black shadow-sm group hover:bg-rose-500/40 hover:border-rose-400 cursor-pointer transition-colors"
                    onClick={() => removeElement(item)}
                    title="Bấm để xóa khỏi tập hợp A"
                  >
                    • {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Controls & Verification Tool */}
        <div className="md:col-span-6 space-y-4">
          {/* Display Set notation */}
          <div className="p-3.5 rounded-2xl bg-black/60 border border-white/15">
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
              Ký hiệu viết theo toán học:
            </span>
            <div className="text-sm font-bold text-cyan-300">
              <MathFormula math={`A = \\{${elements.join("; ")}\\}`} />
            </div>
          </div>

          {/* Add Element Tool */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              1. Thêm phần tử mới vào tập hợp A:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addElement()}
                placeholder="Nhập số hoặc chữ (vd: 5, hoa, táo...)"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={addElement}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs flex items-center gap-1 hover:scale-105 transition-transform"
              >
                <Plus className="w-3.5 h-3.5" /> Thêm
              </button>
            </div>
          </div>

          {/* Verify Element Belonging Tool */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <label className="text-xs font-bold text-slate-300 block">
              2. Kiểm tra phần tử thuộc hay không thuộc (∈ hay ∉):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={checkVal}
                onChange={(e) => setCheckVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && verifyBelonging()}
                placeholder="Nhập phần tử cần kiểm tra (vd: 2 hoặc 9)"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={verifyBelonging}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center gap-1 hover:scale-105 transition-transform"
              >
                <CheckCircle className="w-3.5 h-3.5" /> Kiểm Tra
              </button>
            </div>

            {checkResult && (
              <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs font-bold text-cyan-300 animate-in fade-in duration-150 text-center">
                <MathFormula math={checkResult} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
