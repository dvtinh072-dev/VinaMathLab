"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { RotateCcw, Play, Pause, ZoomIn, ZoomOut, Move3D, Eye } from "lucide-react";

export type Solid3DType = "pyramid-abcd" | "pyramid-g1g2" | "pyramid-so" | "pyramid-m-sc" | "pyramid-am-so" | "pyramid-trapezoid" | "pyramid-parallel" | "pyramid-mn-ad" | "pyramid-mn-ab" | "tetrahedron" | "tetrahedron-dm" | "tetrahedron-mn" | "tetrahedron-mnpq" | "tetrahedron-sg" | "tetrahedron-3centroids";

interface Point3D {
  name: string;
  x: number;
  y: number;
  z: number;
  color?: string;
  isSpecial?: boolean;
}

interface Edge3D {
  from: string;
  to: string;
  style?: "solid" | "dashed" | "highlight-solid" | "highlight-dashed";
  color?: string;
}

interface Interactive3DGeometryViewerProps {
  type?: Solid3DType;
  fallbackSvg?: string;
  caption?: string;
  className?: string;
}

export function Interactive3DGeometryViewer({
  type,
  fallbackSvg,
  caption,
  className = ""
}: Interactive3DGeometryViewerProps) {
  // If no type is provided or recognized, try to infer from fallbackSvg or just render fallbackSvg
  const detectedType = useMemo<Solid3DType | null>(() => {
    if (type) return type;
    if (!fallbackSvg) return null;
    if (fallbackSvg.includes("G1") && fallbackSvg.includes("G2")) return "pyramid-g1g2";
    if (fallbackSvg.includes("SO") || fallbackSvg.includes(">O<")) {
      if (fallbackSvg.includes("AM") || (fallbackSvg.includes(">M<") && fallbackSvg.includes(">I<"))) {
        return "pyramid-am-so";
      }
      return "pyramid-so";
    }
    if (fallbackSvg.includes("A'") && fallbackSvg.includes("SG")) return "tetrahedron-sg";
    if (fallbackSvg.includes("MNPQ")) return "tetrahedron-mnpq";
    if (fallbackSvg.includes("MN") && fallbackSvg.includes(">P<") && fallbackSvg.includes(">Q<") && fallbackSvg.includes(">G<")) return "tetrahedron-3centroids";
    if (fallbackSvg.includes(">I<") && fallbackSvg.includes(">S<") && fallbackSvg.includes(">D<")) return "pyramid-trapezoid";
    if (fallbackSvg.includes(">E<") && fallbackSvg.includes(">S<") && fallbackSvg.includes(">D<")) return "pyramid-trapezoid";
    if (fallbackSvg.includes(">d<") && fallbackSvg.includes(">S<")) return "pyramid-parallel";
    if (fallbackSvg.includes(">M<") && fallbackSvg.includes(">N<") && fallbackSvg.includes(">S<")) {
      if (fallbackSvg.includes("M") && fallbackSvg.includes("AD")) return "pyramid-mn-ad";
      return "pyramid-mn-ab";
    }
    if (fallbackSvg.includes(">M<") && fallbackSvg.includes(">S<") && fallbackSvg.includes(">C<")) return "pyramid-m-sc";
    if (fallbackSvg.includes(">M<") && fallbackSvg.includes(">D<") && fallbackSvg.includes(">A<") && !fallbackSvg.includes(">S<")) return "tetrahedron-dm";
    if (fallbackSvg.includes(">M<") && fallbackSvg.includes(">N<") && fallbackSvg.includes(">A<") && !fallbackSvg.includes(">S<")) return "tetrahedron-mn";
    if (fallbackSvg.includes(">S<") && fallbackSvg.includes(">A<") && fallbackSvg.includes(">B<") && fallbackSvg.includes(">C<") && fallbackSvg.includes(">D<")) return "pyramid-abcd";
    if (fallbackSvg.includes(">A<") && fallbackSvg.includes(">B<") && fallbackSvg.includes(">C<") && fallbackSvg.includes(">D<") && !fallbackSvg.includes(">S<")) return "tetrahedron";
    return null;
  }, [type, fallbackSvg]);

  // View state
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [yaw, setYaw] = useState<number>(30); // Góc xoay ngang (-180 to 180)
  const [pitch, setPitch] = useState<number>(20); // Góc xoay dọc (-90 to 90)
  const [zoom, setZoom] = useState<number>(1);
  const [heightParam, setHeightParam] = useState<number>(2.4); // Độ cao đỉnh S / A
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(false);

  // Dragging interaction
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate loop
  useEffect(() => {
    if (!isAutoRotate || !isInteractive) return;
    const interval = setInterval(() => {
      setYaw((prev) => (prev + 1.2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotate, isInteractive]);

  // Mouse / Touch handlers
  const handlePointerDown = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - lastMousePosRef.current.x;
    const dy = clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: clientX, y: clientY };

    setYaw((prev) => (prev + dx * 0.7) % 360);
    setPitch((prev) => Math.max(-80, Math.min(80, prev + dy * 0.7)));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const resetView = () => {
    setYaw(30);
    setPitch(20);
    setZoom(1);
    setHeightParam(2.4);
    setIsAutoRotate(false);
  };

  // Build 3D model data based on solid type
  const modelData = useMemo(() => {
    const t = detectedType || "pyramid-abcd";
    const points: Point3D[] = [];
    const edges: Edge3D[] = [];

    if (t.startsWith("pyramid")) {
      // Đáy hình chóp ABCD: A(sau-trái), B(trước-trái), C(trước-phải), D(sau-phải)
      const A = { name: "A", x: -1.4, y: 0, z: -1.3 };
      const B = { name: "B", x: -2.0, y: 0, z: 1.2 };
      const C = { name: "C", x: 1.8, y: 0, z: 1.2 };
      const D = { name: "D", x: 1.6, y: 0, z: -1.3 };
      const S = { name: "S", x: 0, y: heightParam, z: 0, color: "#38bdf8" };

      points.push(S, A, B, C, D);

      // Cạnh đáy
      edges.push({ from: "A", to: "B" });
      edges.push({ from: "B", to: "C" });
      edges.push({ from: "C", to: "D" });
      edges.push({ from: "D", to: "A", style: "dashed" });

      // Cạnh bên
      edges.push({ from: "S", to: "A", style: "dashed" });
      edges.push({ from: "S", to: "B" });
      edges.push({ from: "S", to: "C" });
      edges.push({ from: "S", to: "D" });

      // Cụ thể từng dạng
      if (t === "pyramid-so" || t === "pyramid-am-so") {
        const O = { name: "O", x: 0, y: 0, z: 0, color: "#f59e0b" };
        points.push(O);
        edges.push({ from: "A", to: "C", style: "dashed", color: "#94a3b8" });
        edges.push({ from: "B", to: "D", style: "dashed", color: "#94a3b8" });
        edges.push({ from: "S", to: "O", style: "highlight-dashed", color: "#f59e0b" });

        if (t === "pyramid-am-so") {
          const M = { name: "M", x: 0.9, y: heightParam * 0.5, z: 0.6, color: "#f59e0b" };
          const I = { name: "I", x: 0, y: heightParam * 0.33, z: 0, color: "#ec4899" };
          points.push(M, I);
          edges.push({ from: "A", to: "M", style: "highlight-dashed", color: "#ec4899" });
        }
            } else if (t === "pyramid-g1g2") {
        // G1 trọng tâm SAB: S(0, h, 0), A(-1.4, 0, -1.3), B(-2.0, 0, 1.2)
        const G1 = { name: "G1", x: -1.13, y: heightParam * 0.33, z: -0.03, color: "#f59e0b" };
        // G2 trọng tâm SAD: S(0, h, 0), A(-1.4, 0, -1.3), D(1.6, 0, -1.3)
        const G2 = { name: "G2", x: 0.07, y: heightParam * 0.33, z: -0.87, color: "#f59e0b" };
        points.push(G1, G2);
        edges.push({ from: "G1", to: "G2", style: "highlight-dashed", color: "#f59e0b" });
      } else if (t === "pyramid-m-sc") {
        const M = { name: "M", x: 0.9, y: heightParam * 0.5, z: 0.6, color: "#f59e0b" };
        points.push(M);
      } else if (t === "pyramid-trapezoid") {
        // Đáy thang kéo dài AD và BC cắt nhau tại I
        const I = { name: "I", x: 2.8, y: 0, z: 1.2, color: "#f59e0b" };
        points.push(I);
        edges.push({ from: "C", to: "I" });
        edges.push({ from: "D", to: "I", style: "dashed" });
        edges.push({ from: "S", to: "I", style: "highlight-solid", color: "#f59e0b" });
      } else if (t === "pyramid-parallel") {
        // Đường thẳng d qua S song song AB, CD
        const d1 = { name: "", x: -2.0, y: heightParam, z: 0 };
        const d2 = { name: "d", x: 2.0, y: heightParam, z: 0, color: "#f59e0b" };
        points.push(d1, d2);
        edges.push({ from: "", to: "d", style: "highlight-solid", color: "#f59e0b" });
      } else if (t === "pyramid-mn-ad") {
        const M = { name: "M", x: -0.7, y: heightParam * 0.5, z: -0.65, color: "#f59e0b" };
        const N = { name: "N", x: 0.8, y: heightParam * 0.5, z: -0.65, color: "#f59e0b" };
        points.push(M, N);
        edges.push({ from: "M", to: "N", style: "highlight-dashed", color: "#f59e0b" });
      } else if (t === "pyramid-mn-ab") {
        const M = { name: "M", x: -0.7, y: heightParam * 0.5, z: -0.65, color: "#f59e0b" };
        const N = { name: "N", x: -1.0, y: heightParam * 0.5, z: 0.6, color: "#f59e0b" };
        points.push(M, N);
        edges.push({ from: "M", to: "N", style: "highlight-solid", color: "#f59e0b" });
      }
    } else {
      // Tứ diện ABCD
      const A = { name: "A", x: 0, y: heightParam, z: 0, color: "#38bdf8" };
      const B = { name: "B", x: -1.8, y: 0, z: 1.3 };
      const C = { name: "C", x: 0.3, y: 0, z: 1.8 };
      const D = { name: "D", x: 1.8, y: 0, z: -0.8 };

      points.push(A, B, C, D);

      edges.push({ from: "B", to: "D", style: "dashed" }); // cạnh đáy sau khuất
      edges.push({ from: "B", to: "C" });
      edges.push({ from: "C", to: "D" });
      edges.push({ from: "A", to: "B" });
      edges.push({ from: "A", to: "C" });
      edges.push({ from: "A", to: "D" });

      if (t === "tetrahedron-dm") {
        const M = { name: "M", x: -0.9, y: heightParam * 0.5, z: 0.65, color: "#f59e0b" };
        points.push(M);
        edges.push({ from: "D", to: "M", style: "highlight-solid", color: "#f59e0b" });
      } else if (t === "tetrahedron-mn") {
        const M = { name: "M", x: -0.9, y: heightParam * 0.5, z: 0.65, color: "#f59e0b" };
        const N = { name: "N", x: 1.05, y: 0, z: 0.5, color: "#f59e0b" };
        points.push(M, N);
        edges.push({ from: "M", to: "N", style: "highlight-dashed", color: "#f59e0b" });
      } else if (t === "tetrahedron-mnpq") {
        const M = { name: "M", x: -0.9, y: heightParam * 0.5, z: 0.65, color: "#f59e0b" };
        const N = { name: "N", x: -0.75, y: 0, z: 1.55, color: "#f59e0b" };
        const P = { name: "P", x: 1.05, y: 0, z: 0.5, color: "#f59e0b" };
        const Q = { name: "Q", x: 0.9, y: heightParam * 0.5, z: -0.4, color: "#f59e0b" };
        points.push(M, N, P, Q);
        edges.push({ from: "M", to: "N", style: "highlight-solid", color: "#f59e0b" });
        edges.push({ from: "N", to: "P", style: "highlight-solid", color: "#f59e0b" });
        edges.push({ from: "P", to: "Q", style: "highlight-dashed", color: "#f59e0b" });
        edges.push({ from: "Q", to: "M", style: "highlight-dashed", color: "#f59e0b" });
      } else if (t === "tetrahedron-sg") {
        const A_prime = { name: "A'", x: 1.05, y: 0, z: 0.5, color: "#38bdf8" };
        const G = { name: "G", x: 0.1, y: 0, z: 0.77, color: "#f59e0b" };
        const M = { name: "M", x: 0.05, y: heightParam * 0.4, z: 0.38, color: "#f59e0b" };
        points.push(A_prime, G, M);
        edges.push({ from: "B", to: "A_prime", style: "dashed" });
        edges.push({ from: "A", to: "G", style: "highlight-dashed", color: "#f59e0b" });
      } else if (t === "tetrahedron-3centroids") {
        const G = { name: "G", x: 0.07, y: heightParam * 0.25, z: 0.57, color: "#ef4444" };
        points.push(G);
      }
    }

    return { points, edges };
  }, [detectedType, heightParam]);

  // Project 3D points to 2D screen coordinates
  const projected = useMemo(() => {
    const radYaw = (yaw * Math.PI) / 180;
    const radPitch = (pitch * Math.PI) / 180;
    const cosY = Math.cos(radYaw);
    const sinY = Math.sin(radYaw);
    const cosP = Math.cos(radPitch);
    const sinP = Math.sin(radPitch);

    const scale = 58 * zoom;
    const cx = 160;
    const cy = 135;

    const map = new Map<string, { x: number; y: number; zDepth: number; name: string; color?: string }>();

    modelData.points.forEach((pt) => {
      // 1. Rotate Y (Yaw)
      const x1 = pt.x * cosY - pt.z * sinY;
      const z1 = pt.x * sinY + pt.z * cosY;

      // 2. Rotate X (Pitch)
      const y2 = pt.y * cosP - z1 * sinP;
      const z2 = pt.y * sinP + z1 * cosP;

      // 3. Project to 2D Screen
      const sx = cx + x1 * scale;
      const sy = cy - y2 * scale;

      map.set(pt.name, {
        x: sx,
        y: sy,
        zDepth: z2,
        name: pt.name,
        color: pt.color
      });
    });

    return map;
  }, [modelData.points, yaw, pitch, zoom]);

  // Render static SVG fallback if not interactive mode
  if (!isInteractive && fallbackSvg) {
    return (
      <div className={`relative group my-3 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/85 border border-slate-800 shadow-xl overflow-hidden ${className}`}>
        <div
          className="w-full flex justify-center"
          dangerouslySetInnerHTML={{ __html: fallbackSvg }}
        />
        {/* Button to activate 3D Interactive Mode */}
        <div className="mt-2.5 flex items-center justify-between w-full max-w-sm px-2">
          <button
            type="button"
            onClick={() => setIsInteractive(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md hover:from-blue-500 hover:to-indigo-500 transition-all active:scale-95"
            title="Chạm hoặc kéo để xoay hình học không gian 3D 360 độ"
          >
            <Move3D className="w-3.5 h-3.5 animate-pulse" />
            <span>Xoay 3D & Kéo hình tương tác</span>
          </button>
          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
            <Eye className="w-3 h-3 text-cyan-400" /> Chuẩn nét khuất SGK
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative my-3 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/40 shadow-2xl overflow-hidden select-none ${className}`}
    >
      {/* Top Banner Toolbar */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-lg bg-blue-500/20 text-cyan-400">
            <Move3D className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold text-cyan-200">
            Mô hình 3D tương tác (Kéo chuột / Vuốt để xoay)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isAutoRotate ? "bg-amber-500 text-slate-950 font-bold" : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
            title={isAutoRotate ? "Dừng xoay" : "Tự động xoay tròn 360°"}
          >
            {isAutoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={resetView}
            className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 transition-colors"
            title="Đặt lại góc nhìn chuẩn SGK"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.4, z + 0.15))}
            className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 transition-colors"
            title="Phóng to"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.7, z - 0.15))}
            className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 transition-colors"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          {fallbackSvg && (
            <button
              type="button"
              onClick={() => setIsInteractive(false)}
              className="ml-1 text-[11px] px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              Về hình phẳng
            </button>
          )}
        </div>
      </div>

      {/* SVG Canvas with Interactive Orbit Controls */}
      <div
        className="w-full flex justify-center cursor-grab active:cursor-grabbing touch-none"
        onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
        onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 1) {
            handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchEnd={handlePointerUp}
      >
        <svg
          viewBox="0 0 320 250"
          className="w-full max-w-xs sm:max-w-sm h-60 drop-shadow-md select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle 3D grid plane */}
          <ellipse cx="160" cy="205" rx="100" ry="24" fill="rgba(56, 189, 248, 0.04)" />

          {/* Render 3D Edges */}
          {modelData.edges.map((edge, idx) => {
            const p1 = projected.get(edge.from);
            const p2 = projected.get(edge.to);
            if (!p1 || !p2) return null;

            // Determine if edge is back/hidden based on depth and angle
            const isBehind = (p1.zDepth + p2.zDepth) / 2 < -0.2;
            const isDashed = edge.style?.includes("dashed") || (isBehind && !edge.style?.includes("highlight"));

            const strokeColor =
              edge.color ||
              (edge.style?.includes("highlight")
                ? "#f59e0b"
                : isDashed
                ? "#94a3b8"
                : "#38bdf8");

            const strokeWidth = edge.style?.includes("highlight") ? 2.2 : isDashed ? 1.6 : 2;

            return (
              <line
                key={idx}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={isDashed ? "5 5" : undefined}
                strokeLinecap="round"
              />
            );
          })}

          {/* Render 3D Points & Labels */}
          {Array.from(projected.values()).map((p, idx) => {
            if (!p.name) return null;
            const isHighlight = p.color && p.color !== "#38bdf8";

            return (
              <g key={idx}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHighlight ? 4 : 3.5}
                  fill={p.color || "#38bdf8"}
                  stroke="#0f172a"
                  strokeWidth="1.2"
                />
                <text
                  x={p.x + 6}
                  y={p.y - 6}
                  fill="#f8fafc"
                  fontSize="13"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))"
                >
                  {p.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Height Parameter Slider */}
      <div className="w-full max-w-xs mt-2 px-2 flex items-center justify-between gap-3 text-[11px] text-slate-300">
        <span className="font-semibold text-cyan-300 whitespace-nowrap">Độ cao đỉnh:</span>
        <input
          type="range"
          min="1.4"
          max="3.4"
          step="0.1"
          value={heightParam}
          onChange={(e) => setHeightParam(parseFloat(e.target.value))}
          className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
        />
        <span className="font-mono text-cyan-400 min-w-[24px] text-right">
          {heightParam.toFixed(1)}
        </span>
      </div>

      {caption && (
        <span className="text-[11px] text-slate-400 mt-1 italic">
          {caption}
        </span>
      )}
    </div>
  );
}
