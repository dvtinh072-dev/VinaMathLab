"use client";

import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function VectorExplorer() {
  const [ux, setUx] = useState(3);
  const [uy, setUy] = useState(2);
  const [vx, setVx] = useState(1);
  const [vy, setVy] = useState(-3);

  const width = 500;
  const height = 400;
  const scale = 25;
  const originX = width / 2;
  const originY = height / 2;

  const toSvgX = (x: number) => originX + x * scale;
  const toSvgY = (y: number) => originY - y * scale;

  const sumVector = { x: ux + vx, y: uy + vy };
  const dotProduct = ux * vx + uy * vy;
  const lenU = Math.sqrt(ux * ux + uy * uy);
  const lenV = Math.sqrt(vx * vx + vy * vy);
  const cosTheta = lenU > 0 && lenV > 0 ? dotProduct / (lenU * lenV) : 0;
  const angleDeg = (Math.acos(Math.max(-1, Math.min(1, cosTheta))) * 180) / Math.PI;

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-sm space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <MoveRight className="w-5 h-5 text-primary" />
            Khám phá Vector & Tích Vô Hướng (Toán Lớp 10 & 12)
          </h3>
          <p className="text-xs text-slate-500">Quan sát phép cộng vector theo quy tắc hình bình hành và tích vô hướng</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-inner relative flex justify-center items-center">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[400px] select-none">
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#2563EB" />
              </marker>
              <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#DC2626" />
              </marker>
              <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#059669" />
              </marker>
            </defs>

            <line x1="0" y1={originY} x2={width} y2={originY} stroke="#475569" strokeWidth="1" />
            <line x1={originX} y1="0" x2={originX} y2={height} stroke="#475569" strokeWidth="1" />

            <line x1={toSvgX(ux)} y1={toSvgY(uy)} x2={toSvgX(sumVector.x)} y2={toSvgY(sumVector.y)} stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" />
            <line x1={toSvgX(vx)} y1={toSvgY(vy)} x2={toSvgX(sumVector.x)} y2={toSvgY(sumVector.y)} stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" />

            <line x1={originX} y1={originY} x2={toSvgX(ux)} y2={toSvgY(uy)} stroke="#2563EB" strokeWidth="3" markerEnd="url(#arrowBlue)" />
            <text x={toSvgX(ux) + 8} y={toSvgY(uy) - 6} fill="#60A5FA" fontSize="12" fontWeight="bold">u({ux}, {uy})</text>

            <line x1={originX} y1={originY} x2={toSvgX(vx)} y2={toSvgY(vy)} stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowRed)" />
            <text x={toSvgX(vx) + 8} y={toSvgY(vy) + 12} fill="#F87171" fontSize="12" fontWeight="bold">v({vx}, {vy})</text>

            <line x1={originX} y1={originY} x2={toSvgX(sumVector.x)} y2={toSvgY(sumVector.y)} stroke="#059669" strokeWidth="3.5" markerEnd="url(#arrowGreen)" />
            <text x={toSvgX(sumVector.x) + 8} y={toSvgY(sumVector.y) - 6} fill="#34D399" fontSize="12" fontWeight="bold">u+v({sumVector.x}, {sumVector.y})</text>
          </svg>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-500">Tọa độ Vector</h4>

            <div className="space-y-2">
              <div className="text-xs font-medium text-blue-600">Vector u(x, y):</div>
              <div className="grid grid-cols-2 gap-2">
                <input type="number" value={ux} onChange={e => setUx(parseInt(e.target.value) || 0)} className="p-1.5 rounded text-xs border text-center dark:bg-slate-800" />
                <input type="number" value={uy} onChange={e => setUy(parseInt(e.target.value) || 0)} className="p-1.5 rounded text-xs border text-center dark:bg-slate-800" />
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-2">
              <div className="text-xs font-medium text-red-600">Vector v(x, y):</div>
              <div className="grid grid-cols-2 gap-2">
                <input type="number" value={vx} onChange={e => setVx(parseInt(e.target.value) || 0)} className="p-1.5 rounded text-xs border text-center dark:bg-slate-800" />
                <input type="number" value={vy} onChange={e => setVy(parseInt(e.target.value) || 0)} className="p-1.5 rounded text-xs border text-center dark:bg-slate-800" />
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <div>• Tích vô hướng: <MathFormula math={`\\vec{u} \\cdot \\vec{v} = ${dotProduct}`} /></div>
            <div>• Độ dài: <span className="font-bold">|u| = {lenU.toFixed(2)}</span>, <span className="font-bold">|v| = {lenV.toFixed(2)}</span></div>
            <div>• Góc giữa 2 vector: <span className="font-bold text-primary">{angleDeg.toFixed(1)}°</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
