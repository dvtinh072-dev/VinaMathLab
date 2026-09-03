"use client";

import React, { useState, useRef, useMemo } from "react";
import { Compass, Eye } from "lucide-react";
import { calculateTriangleProperties, Point2D } from "@/lib/mathCalculations";

export function TriangleExplorer() {
  const [pointA, setPointA] = useState<Point2D>({ x: 250, y: 70 });
  const [pointB, setPointB] = useState<Point2D>({ x: 100, y: 350 });
  const [pointC, setPointC] = useState<Point2D>({ x: 420, y: 350 });

  const [activeCenter, setActiveCenter] = useState<"centroid" | "orthocenter" | "circumcenter" | "incenter">("circumcenter");
  const [showEulerLine, setShowEulerLine] = useState(false);
  const [showCircles, setShowCircles] = useState(true);

  const [dragging, setDragging] = useState<"A" | "B" | "C" | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handlePointerDown = (vertex: "A" | "B" | "C") => {
    setDragging(vertex);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.max(30, Math.min(470, ((e.clientX - rect.left) / rect.width) * 500));
    const y = Math.max(30, Math.min(430, ((e.clientY - rect.top) / rect.height) * 440));

    if (dragging === "A") setPointA({ x, y });
    if (dragging === "B") setPointB({ x, y });
    if (dragging === "C") setPointC({ x, y });
  };

  const handlePointerUp = () => {
    setDragging(null);
  };

  const geo = useMemo(() => {
    return calculateTriangleProperties(pointA, pointB, pointC);
  }, [pointA, pointB, pointC]);

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-sm space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Compass className="w-5 h-5 text-primary" />
            Phòng Thí Nghiệm Hình Học Tam Giác Động
          </h3>
          <p className="text-xs text-slate-500">Kéo các đỉnh A, B, C để khám phá 4 điểm đặc biệt (G, H, O, I) và đường thẳng Euler</p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setActiveCenter("circumcenter")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeCenter === "circumcenter" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-600 dark:text-slate-400"}`}
          >
            Tâm Ngoại tiếp (O)
          </button>
          <button
            onClick={() => setActiveCenter("incenter")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeCenter === "incenter" ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600" : "text-slate-600 dark:text-slate-400"}`}
          >
            Tâm Nội tiếp (I)
          </button>
          <button
            onClick={() => setActiveCenter("centroid")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeCenter === "centroid" ? "bg-white dark:bg-slate-700 shadow-sm text-amber-600" : "text-slate-600 dark:text-slate-400"}`}
          >
            Trọng tâm (G)
          </button>
          <button
            onClick={() => setActiveCenter("orthocenter")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${activeCenter === "orthocenter" ? "bg-white dark:bg-slate-700 shadow-sm text-red-600" : "text-slate-600 dark:text-slate-400"}`}
          >
            Trực tâm (H)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-inner relative flex justify-center items-center">
          <svg
            ref={svgRef}
            viewBox="0 0 500 440"
            className="w-full h-auto max-h-[440px] select-none cursor-crosshair touch-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <defs>
              <pattern id="triGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.4" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="500" height="440" fill="url(#triGrid)" />

            {showCircles && activeCenter === "circumcenter" && geo.circumradius > 0 && (
              <circle
                cx={geo.circumcenter.x}
                cy={geo.circumcenter.y}
                r={geo.circumradius}
                fill="#2563EB"
                fillOpacity="0.05"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeDasharray="6,4"
              />
            )}

            {showCircles && activeCenter === "incenter" && geo.inradius > 0 && (
              <circle
                cx={geo.incenter.x}
                cy={geo.incenter.y}
                r={geo.inradius}
                fill="#059669"
                fillOpacity="0.08"
                stroke="#059669"
                strokeWidth="1.5"
              />
            )}

            {showEulerLine && (
              <line
                x1={geo.orthocenter.x - (geo.circumcenter.x - geo.orthocenter.x) * 2}
                y1={geo.orthocenter.y - (geo.circumcenter.y - geo.orthocenter.y) * 2}
                x2={geo.circumcenter.x + (geo.circumcenter.x - geo.orthocenter.x) * 2}
                y2={geo.circumcenter.y + (geo.circumcenter.y - geo.orthocenter.y) * 2}
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            )}

            <polygon
              points={`${pointA.x},${pointA.y} ${pointB.x},${pointB.y} ${pointC.x},${pointC.y}`}
              fill="#2563EB"
              fillOpacity="0.12"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {(activeCenter === "centroid" || showEulerLine) && (
              <g>
                <circle cx={geo.centroid.x} cy={geo.centroid.y} r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
                <text x={geo.centroid.x + 8} y={geo.centroid.y - 6} fill="#FBBF24" fontSize="12" fontWeight="bold">G (Trọng tâm)</text>
              </g>
            )}

            {(activeCenter === "circumcenter" || showEulerLine) && (
              <g>
                <circle cx={geo.circumcenter.x} cy={geo.circumcenter.y} r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                <text x={geo.circumcenter.x + 8} y={geo.circumcenter.y - 6} fill="#60A5FA" fontSize="12" fontWeight="bold">O (Tâm ngoại tiếp)</text>
              </g>
            )}

            {activeCenter === "incenter" && (
              <g>
                <circle cx={geo.incenter.x} cy={geo.incenter.y} r="5" fill="#059669" stroke="#FFFFFF" strokeWidth="2" />
                <text x={geo.incenter.x + 8} y={geo.incenter.y - 6} fill="#34D399" fontSize="12" fontWeight="bold">I (Tâm nội tiếp)</text>
              </g>
            )}

            {(activeCenter === "orthocenter" || showEulerLine) && (
              <g>
                <circle cx={geo.orthocenter.x} cy={geo.orthocenter.y} r="5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                <text x={geo.orthocenter.x + 8} y={geo.orthocenter.y - 6} fill="#F87171" fontSize="12" fontWeight="bold">H (Trực tâm)</text>
              </g>
            )}

            {[
              { id: "A", point: pointA, label: "A" },
              { id: "B", point: pointB, label: "B" },
              { id: "C", point: pointC, label: "C" },
            ].map(v => (
              <g
                key={v.id}
                onPointerDown={() => handlePointerDown(v.id as "A" | "B" | "C")}
                className="cursor-grab active:cursor-grabbing"
              >
                <circle cx={v.point.x} cy={v.point.y} r="9" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2.5" />
                <text x={v.point.x} y={v.point.y - 14} fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">{v.label}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-500">Thông số Tam Giác</h4>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-500">Cạnh a (BC):</span>
                <div className="font-bold text-slate-800 dark:text-slate-200">{geo.sideA.toFixed(1)} px</div>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-500">Cạnh b (CA):</span>
                <div className="font-bold text-slate-800 dark:text-slate-200">{geo.sideB.toFixed(1)} px</div>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-500">Cạnh c (AB):</span>
                <div className="font-bold text-slate-800 dark:text-slate-200">{geo.sideC.toFixed(1)} px</div>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-500">Diện tích S:</span>
                <div className="font-bold text-primary">{geo.area.toFixed(1)} px²</div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Góc A:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{geo.angleA.toFixed(1)}°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Góc B:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{geo.angleB.toFixed(1)}°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Góc C:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{geo.angleC.toFixed(1)}°</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-700 dark:text-slate-300">Đường thẳng Euler (H-G-O)</span>
              <button
                onClick={() => setShowEulerLine(!showEulerLine)}
                className="p-1 rounded text-slate-600 hover:text-purple-600"
              >
                <Eye className={`w-4 h-4 ${showEulerLine ? "text-purple-600" : ""}`} />
              </button>
            </div>
            <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-800 pt-2">
              <span className="font-medium text-slate-700 dark:text-slate-300">Đường tròn nội/ngoại tiếp</span>
              <button
                onClick={() => setShowCircles(!showCircles)}
                className="p-1 rounded text-slate-600 hover:text-primary"
              >
                <Eye className={`w-4 h-4 ${showCircles ? "text-primary" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
