"use client";

import React, { useState, useRef, useMemo } from "react";
import { Circle } from "lucide-react";

export function CircleTheorems() {
  const center = { x: 250, y: 220 };
  const radius = 140;

  const [angleA, setAngleA] = useState(Math.PI * 0.85);
  const [angleB, setAngleB] = useState(Math.PI * 0.15);
  const [angleM, setAngleM] = useState(Math.PI * 1.5);

  const [dragging, setDragging] = useState<"A" | "B" | "M" | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const getCirclePoint = (angle: number) => ({
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  });

  const pA = useMemo(() => getCirclePoint(angleA), [angleA]);
  const pB = useMemo(() => getCirclePoint(angleB), [angleB]);
  const pM = useMemo(() => getCirclePoint(angleM), [angleM]);

  const centralAngleDeg = useMemo(() => {
    let diff = (angleB - angleA) % (2 * Math.PI);
    if (diff < 0) diff += 2 * Math.PI;
    const deg = (diff * 180) / Math.PI;
    return deg > 180 ? 360 - deg : deg;
  }, [angleA, angleB]);

  const inscribedAngleDeg = useMemo(() => {
    return centralAngleDeg / 2;
  }, [centralAngleDeg]);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 500;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 440;

    const angle = Math.atan2(mouseY - center.y, mouseX - center.x);
    if (dragging === "A") setAngleA(angle);
    if (dragging === "B") setAngleB(angle);
    if (dragging === "M") setAngleM(angle);
  };

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-sm space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Circle className="w-5 h-5 text-primary" />
            Định lý Góc Nội Tiếp & Góc Ở Tâm (SGK Lớp 9 Kết Nối Tri Thức)
          </h3>
          <p className="text-xs text-slate-500">Kéo điểm M chạy trên đường tròn để thấy số đo góc nội tiếp luôn bằng nửa góc ở tâm</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-inner relative flex justify-center items-center">
          <svg
            ref={svgRef}
            viewBox="0 0 500 440"
            className="w-full h-auto max-h-[440px] select-none cursor-crosshair touch-none"
            onPointerMove={handlePointerMove}
            onPointerUp={() => setDragging(null)}
          >
            <circle cx={center.x} cy={center.y} r={radius} fill="none" stroke="#64748B" strokeWidth="2" />
            <circle cx={center.x} cy={center.y} r="4" fill="#94A3B8" />
            <text x={center.x + 8} y={center.y + 12} fill="#94A3B8" fontSize="12" fontWeight="bold">O</text>

            <line x1={center.x} y1={center.y} x2={pA.x} y2={pA.y} stroke="#D97706" strokeWidth="2" strokeDasharray="4,3" />
            <line x1={center.x} y1={center.y} x2={pB.x} y2={pB.y} stroke="#D97706" strokeWidth="2" strokeDasharray="4,3" />

            <line x1={pM.x} y1={pM.y} x2={pA.x} y2={pA.y} stroke="#2563EB" strokeWidth="2.5" />
            <line x1={pM.x} y1={pM.y} x2={pB.x} y2={pB.y} stroke="#2563EB" strokeWidth="2.5" />

            <line x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y} stroke="#059669" strokeWidth="2" />

            <g onPointerDown={() => setDragging("A")} className="cursor-grab active:cursor-grabbing">
              <circle cx={pA.x} cy={pA.y} r="7" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
              <text x={pA.x - 14} y={pA.y} fill="#FFFFFF" fontSize="13" fontWeight="bold">A</text>
            </g>

            <g onPointerDown={() => setDragging("B")} className="cursor-grab active:cursor-grabbing">
              <circle cx={pB.x} cy={pB.y} r="7" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
              <text x={pB.x + 10} y={pB.y} fill="#FFFFFF" fontSize="13" fontWeight="bold">B</text>
            </g>

            <g onPointerDown={() => setDragging("M")} className="cursor-grab active:cursor-grabbing">
              <circle cx={pM.x} cy={pM.y} r="9" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
              <text x={pM.x} y={pM.y - 14} fill="#60A5FA" fontSize="14" fontWeight="bold" textAnchor="middle">M</text>
            </g>
          </svg>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-500">So sánh Số đo Góc</h4>

            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <div className="text-xs text-amber-800 dark:text-amber-300">Góc ở tâm:</div>
              <div className="text-xl font-extrabold text-amber-600">{centralAngleDeg.toFixed(1)}°</div>
            </div>

            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <div className="text-xs text-blue-800 dark:text-blue-300">Góc nội tiếp:</div>
              <div className="text-xl font-extrabold text-blue-600">{inscribedAngleDeg.toFixed(1)}°</div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200">
              <strong>Định lý:</strong> Số đo góc nội tiếp bằng một nửa số đo góc ở tâm cùng chắn một cung!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
