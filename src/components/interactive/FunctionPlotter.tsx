"use client";

import React, { useState, useMemo } from "react";
import { Sliders, RefreshCw, Eye, EyeOff, Info } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";
import { getQuadraticKeyPoints } from "@/lib/mathCalculations";

type FunctionType = "quadratic" | "cubic" | "sinusoidal";

export function FunctionPlotter() {
  const [funcType, setFuncType] = useState<FunctionType>("quadratic");
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);
  const [showKeyPoints, setShowKeyPoints] = useState(true);
  const [showTangent, setShowTangent] = useState(false);
  const [tangentX, setTangentX] = useState(1);

  const width = 560;
  const height = 400;
  const scale = 28;
  const originX = width / 2;
  const originY = height / 2;

  const toSvgX = (x: number) => originX + x * scale;
  const toSvgY = (y: number) => originY - y * scale;

  const curvePath = useMemo(() => {
    let d = "";
    const step = 0.1;
    const minX = -originX / scale - 1;
    const maxX = (width - originX) / scale + 1;

    for (let x = minX; x <= maxX; x += step) {
      let y = 0;
      if (funcType === "quadratic") {
        y = a * x * x + b * x + c;
      } else if (funcType === "cubic") {
        y = a * 0.2 * Math.pow(x, 3) + b * 0.5 * x * x + c * x;
      } else if (funcType === "sinusoidal") {
        y = a * 2 * Math.sin(b * x) + c;
      }

      const svgX = toSvgX(x);
      const svgY = toSvgY(y);

      if (d === "") {
        d += `M ${svgX} ${svgY}`;
      } else {
        d += ` L ${svgX} ${svgY}`;
      }
    }
    return d;
  }, [funcType, a, b, c]);

  const quadProps = useMemo(() => {
    if (funcType !== "quadratic" || a === 0) return null;
    return getQuadraticKeyPoints(a, b, c);
  }, [funcType, a, b, c]);

  const tangentData = useMemo(() => {
    if (funcType !== "quadratic" || !showTangent) return null;
    const y0 = a * tangentX * tangentX + b * tangentX + c;
    const slope = 2 * a * tangentX + b;
    const x1 = tangentX - 4;
    const y1 = y0 + slope * (x1 - tangentX);
    const x2 = tangentX + 4;
    const y2 = y0 + slope * (x2 - tangentX);

    return {
      x0: tangentX,
      y0,
      slope,
      x1: toSvgX(x1),
      y1: toSvgY(y1),
      x2: toSvgX(x2),
      y2: toSvgY(y2),
    };
  }, [funcType, showTangent, tangentX, a, b, c]);

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-sm space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-primary" />
            Khám phá Đồ thị Hàm số Tương tác
          </h3>
          <p className="text-xs text-slate-500">Kéo thanh trượt tham số để quan sát sự biến thiên và tiếp tuyến của đồ thị</p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => { setFuncType("quadratic"); setA(1); setB(-2); setC(-3); }}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${funcType === "quadratic" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-600 dark:text-slate-400"}`}
          >
            Bậc 2 (Parabol)
          </button>
          <button
            onClick={() => { setFuncType("cubic"); setA(1); setB(0); setC(-3); }}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${funcType === "cubic" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-600 dark:text-slate-400"}`}
          >
            Bậc 3
          </button>
          <button
            onClick={() => { setFuncType("sinusoidal"); setA(1); setB(1); setC(0); }}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${funcType === "sinusoidal" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-600 dark:text-slate-400"}`}
          >
            Lượng giác (Sin)
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">Hàm số hiện tại:</span>
          {funcType === "quadratic" && (
            <MathFormula math={`f(x) = ${a === 1 ? "" : a === -1 ? "-" : a}x^2 ${b >= 0 ? "+" : ""}${b}x ${c >= 0 ? "+" : ""}${c}`} />
          )}
          {funcType === "cubic" && (
            <MathFormula math={`f(x) = ${a} \\cdot 0.2 x^3 ${b >= 0 ? "+" : ""}${b} \\cdot 0.5 x^2 ${c >= 0 ? "+" : ""}${c}x`} />
          )}
          {funcType === "sinusoidal" && (
            <MathFormula math={`f(x) = ${a * 2}\\sin(${b}x) ${c >= 0 ? "+" : ""}${c}`} />
          )}
        </div>

        <button
          onClick={() => { setA(1); setB(-2); setC(-3); setTangentX(1); }}
          className="text-xs text-slate-500 hover:text-primary flex items-center gap-1"
          title="Đặt lại mặc định"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Mặc định
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-inner relative flex justify-center items-center">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[440px] select-none">
            <defs>
              <pattern id="grid" width={scale} height={scale} patternUnits="userSpaceOnUse">
                <path d={`M ${scale} 0 L 0 0 0 ${scale}`} fill="none" stroke="#334155" strokeWidth="0.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width={width} height={height} fill="url(#grid)" />

            <line x1="0" y1={originY} x2={width} y2={originY} stroke="#64748B" strokeWidth="1.5" />
            <line x1={originX} y1="0" x2={originX} y2={height} stroke="#64748B" strokeWidth="1.5" />

            <text x={width - 15} y={originY - 8} fill="#94A3B8" fontSize="12" fontWeight="bold">x</text>
            <text x={originX + 8} y={15} fill="#94A3B8" fontSize="12" fontWeight="bold">y</text>
            <text x={originX - 12} y={originY + 14} fill="#64748B" fontSize="10">O</text>

            {[-8, -6, -4, -2, 2, 4, 6, 8].map(tick => (
              <g key={`xtick-${tick}`}>
                <line x1={toSvgX(tick)} y1={originY - 3} x2={toSvgX(tick)} y2={originY + 3} stroke="#64748B" />
                <text x={toSvgX(tick)} y={originY + 14} fill="#64748B" fontSize="9" textAnchor="middle">{tick}</text>
              </g>
            ))}
            {[-6, -4, -2, 2, 4, 6].map(tick => (
              <g key={`ytick-${tick}`}>
                <line x1={originX - 3} y1={toSvgY(tick)} x2={originX + 3} y2={toSvgY(tick)} stroke="#64748B" />
                <text x={originX - 10} y={toSvgY(tick) + 3} fill="#64748B" fontSize="9" textAnchor="end">{tick}</text>
              </g>
            ))}

            <clipPath id="graphClip">
              <rect x="0" y="0" width={width} height={height} />
            </clipPath>
            <path d={curvePath} fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" clipPath="url(#graphClip)" />

            {tangentData && (
              <g clipPath="url(#graphClip)">
                <line x1={tangentData.x1} y1={tangentData.y1} x2={tangentData.x2} y2={tangentData.y2} stroke="#DC2626" strokeWidth="2" strokeDasharray="5,3" />
                <circle cx={toSvgX(tangentData.x0)} cy={toSvgY(tangentData.y0)} r="5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                <text x={toSvgX(tangentData.x0) + 8} y={toSvgY(tangentData.y0) - 8} fill="#F87171" fontSize="10" fontWeight="bold">
                  M({tangentData.x0}, {tangentData.y0.toFixed(1)})
                </text>
              </g>
            )}

            {showKeyPoints && quadProps && (
              <g clipPath="url(#graphClip)">
                <line
                  x1={toSvgX(quadProps.axisOfSymmetry)}
                  y1="0"
                  x2={toSvgX(quadProps.axisOfSymmetry)}
                  y2={height}
                  stroke="#D97706"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />

                <circle cx={toSvgX(quadProps.vertex.x)} cy={toSvgY(quadProps.vertex.y)} r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
                <text x={toSvgX(quadProps.vertex.x) + 8} y={toSvgY(quadProps.vertex.y) - 6} fill="#FBBF24" fontSize="10" fontWeight="bold">
                  Đỉnh I({quadProps.vertex.x.toFixed(1)}, {quadProps.vertex.y.toFixed(1)})
                </text>

                {quadProps.roots.map((root, i) => (
                  <g key={`root-${i}`}>
                    <circle cx={toSvgX(root)} cy={originY} r="4" fill="#059669" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x={toSvgX(root)} y={originY - 8} fill="#34D399" fontSize="10" textAnchor="middle" fontWeight="bold">
                      x{i + 1}={root.toFixed(1)}
                    </text>
                  </g>
                ))}
              </g>
            )}
          </svg>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-500">Điều chỉnh Tham số</h4>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Hệ số a:</span>
                <span className="text-primary font-bold">{a}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={a}
                onChange={e => setA(parseFloat(e.target.value) || 0.1)}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Hệ số b:</span>
                <span className="text-primary font-bold">{b}</span>
              </div>
              <input
                type="range"
                min="-8"
                max="8"
                step="0.5"
                value={b}
                onChange={e => setB(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Hệ số c:</span>
                <span className="text-primary font-bold">{c}</span>
              </div>
              <input
                type="range"
                min="-8"
                max="8"
                step="0.5"
                value={c}
                onChange={e => setC(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          {funcType === "quadratic" && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Điểm đặc biệt (Đỉnh, Nghiệm)</span>
                <button
                  onClick={() => setShowKeyPoints(!showKeyPoints)}
                  className="p-1 rounded text-slate-600 hover:text-primary"
                >
                  {showKeyPoints ? <Eye className="w-4 h-4 text-emerald-600" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-2">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Tiếp tuyến tại điểm x₀</span>
                <button
                  onClick={() => setShowTangent(!showTangent)}
                  className="p-1 rounded text-slate-600 hover:text-primary"
                >
                  {showTangent ? <Eye className="w-4 h-4 text-red-600" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              {showTangent && (
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Vị trí x₀:</span>
                    <span className="font-bold text-red-600">{tangentX}</span>
                  </div>
                  <input
                    type="range"
                    min="-4"
                    max="4"
                    step="0.2"
                    value={tangentX}
                    onChange={e => setTangentX(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  {tangentData && (
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700 mt-1">
                      Hệ số góc k = f&apos;(x₀) = <span className="font-bold text-red-600">{tangentData.slope.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {quadProps && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs space-y-1.5 text-amber-950 dark:text-amber-200">
              <div className="font-bold flex items-center gap-1.5 text-amber-900 dark:text-amber-300">
                <Info className="w-3.5 h-3.5" /> Tính chất Đại số:
              </div>
              <div>• Biệt thức: <MathFormula math={`\\Delta = ${quadProps.delta.toFixed(2)}`} /></div>
              <div>• Trục đối xứng: <MathFormula math={`x = ${quadProps.axisOfSymmetry.toFixed(2)}`} /></div>
              <div>• Bề lõm: <strong className="font-semibold">{a > 0 ? "Quay lên trên (a > 0)" : "Quay xuống dưới (a < 0)"}</strong></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
