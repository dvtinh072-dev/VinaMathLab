"use client";

import React from "react";

export interface GeometryDiagramProps {
  type:
    | "tam-giac-deu"
    | "hinh-vuong"
    | "luc-giac-deu"
    | "hinh-chu-nhat"
    | "hinh-thoi"
    | "hinh-binh-hanh"
    | "hinh-thang-can"
    | "doan-thang-trung-diem"
    | "diem-duong-thang"
    | "tia-goc"
    | "goc-nhon"
    | "goc-vuong"
    | "goc-tu"
    | "goc-bet"
    | "doi-xung-truc"
    | "doi-xung-tam"
    | "luoi-dien-tich";
  caption?: string;
  labels?: { [key: string]: string | number };
  className?: string;
}

export function GeometryDiagram({ type, caption, labels = {}, className = "" }: GeometryDiagramProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 my-2 ${className}`}>
      <div className="w-full max-w-[280px] h-[160px] flex items-center justify-center">
        {renderSvg(type, labels)}
      </div>
      {caption && (
        <span className="text-[11px] font-bold text-cyan-300 mt-1 text-center bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
          📐 {caption}
        </span>
      )}
    </div>
  );
}

function renderSvg(type: string, labels: { [key: string]: string | number }) {
  switch (type) {
    case "tam-giac-deu":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <polygon
            points="100,20 30,130 170,130"
            fill="rgba(6, 182, 212, 0.15)"
            stroke="#06b6d4"
            strokeWidth="3"
          />
          {/* Tick marks on equal sides */}
          <line x1="62" y1="72" x2="68" y2="78" stroke="#f59e0b" strokeWidth="2" />
          <line x1="132" y1="78" x2="138" y2="72" stroke="#f59e0b" strokeWidth="2" />
          <line x1="98" y1="127" x2="98" y2="133" stroke="#f59e0b" strokeWidth="2" />

          {/* Vertices */}
          <circle cx="100" cy="20" r="4" fill="#38bdf8" />
          <circle cx="30" cy="130" r="4" fill="#38bdf8" />
          <circle cx="170" cy="130" r="4" fill="#38bdf8" />

          {/* Labels */}
          <text x="100" y="12" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">A</text>
          <text x="18" y="140" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">B</text>
          <text x="182" y="140" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>
          <text x="100" y="145" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">a = {labels.a || "6 cm"}</text>
        </svg>
      );

    case "hinh-vuong":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect
            x="45"
            y="20"
            width="110"
            height="110"
            fill="rgba(168, 85, 247, 0.15)"
            stroke="#a855f7"
            strokeWidth="3"
            rx="2"
          />
          {/* Right angle marks */}
          <path d="M 45 32 L 57 32 L 57 20" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 143 20 L 143 32 L 155 32" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 155 118 L 143 118 L 143 130" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 57 130 L 57 118 L 45 118" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Labels */}
          <text x="35" y="20" fill="#c084fc" fontSize="13" fontWeight="bold">A</text>
          <text x="162" y="20" fill="#c084fc" fontSize="13" fontWeight="bold">B</text>
          <text x="162" y="135" fill="#c084fc" fontSize="13" fontWeight="bold">C</text>
          <text x="35" y="135" fill="#c084fc" fontSize="13" fontWeight="bold">D</text>
          <text x="100" y="145" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">cạnh = {labels.a || "5 cm"}</text>
        </svg>
      );

    case "luc-giac-deu":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Hexagon vertices around center (100, 75) radius 55 */}
          <polygon
            points="100,20 148,48 148,102 100,130 52,102 52,48"
            fill="rgba(234, 179, 8, 0.15)"
            stroke="#eab308"
            strokeWidth="3"
          />
          {/* Inner diagonals connecting opposite vertices */}
          <line x1="100" y1="20" x2="100" y2="130" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="148" y1="48" x2="52" y2="102" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="148" y1="102" x2="52" y2="48" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3" />
          {/* Center O */}
          <circle cx="100" cy="75" r="3" fill="#facc15" />
          <text x="106" y="80" fill="#fef08a" fontSize="11" fontWeight="bold">O</text>

          {/* Labels */}
          <text x="100" y="14" fill="#fde047" fontSize="12" fontWeight="bold" textAnchor="middle">A</text>
          <text x="156" y="48" fill="#fde047" fontSize="12" fontWeight="bold">B</text>
          <text x="156" y="110" fill="#fde047" fontSize="12" fontWeight="bold">C</text>
          <text x="100" y="144" fill="#fde047" fontSize="12" fontWeight="bold" textAnchor="middle">D</text>
          <text x="40" y="110" fill="#fde047" fontSize="12" fontWeight="bold">E</text>
          <text x="40" y="48" fill="#fde047" fontSize="12" fontWeight="bold">F</text>
        </svg>
      );

    case "hinh-chu-nhat":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect
            x="30"
            y="35"
            width="140"
            height="80"
            fill="rgba(14, 165, 233, 0.15)"
            stroke="#0ea5e9"
            strokeWidth="3"
            rx="2"
          />
          {/* Right angles */}
          <path d="M 30 45 L 40 45 L 40 35" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 160 35 L 160 45 L 170 45" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 170 105 L 160 105 L 160 115" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 40 115 L 40 105 L 30 105" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Labels */}
          <text x="20" y="35" fill="#38bdf8" fontSize="13" fontWeight="bold">A</text>
          <text x="175" y="35" fill="#38bdf8" fontSize="13" fontWeight="bold">B</text>
          <text x="175" y="125" fill="#38bdf8" fontSize="13" fontWeight="bold">C</text>
          <text x="20" y="125" fill="#38bdf8" fontSize="13" fontWeight="bold">D</text>
          <text x="100" y="27" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">a = {labels.a || "12 cm"}</text>
          <text x="180" y="80" fill="#f59e0b" fontSize="11" fontWeight="bold">b = {labels.b || "8 cm"}</text>
        </svg>
      );

    case "hinh-thoi":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <polygon
            points="100,15 165,75 100,135 35,75"
            fill="rgba(244, 63, 94, 0.15)"
            stroke="#f43f5e"
            strokeWidth="3"
          />
          {/* Diagonals */}
          <line x1="100" y1="15" x2="100" y2="135" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="35" y1="75" x2="165" y2="75" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="3,3" />
          {/* Right angle at center */}
          <path d="M 100 67 L 108 67 L 108 75" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="100" cy="75" r="2.5" fill="#fda4af" />
          <text x="105" y="70" fill="#fecdd3" fontSize="10" fontWeight="bold">O</text>

          {/* Labels */}
          <text x="100" y="10" fill="#fb7185" fontSize="13" fontWeight="bold" textAnchor="middle">A</text>
          <text x="175" y="80" fill="#fb7185" fontSize="13" fontWeight="bold">B</text>
          <text x="100" y="147" fill="#fb7185" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>
          <text x="22" y="80" fill="#fb7185" fontSize="13" fontWeight="bold">D</text>
          <text x="100" y="90" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">d₁={labels.d1 || "6 cm"}, d₂={labels.d2 || "8 cm"}</text>
        </svg>
      );

    case "hinh-binh-hanh":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <polygon
            points="65,30 175,30 135,120 25,120"
            fill="rgba(16, 185, 129, 0.15)"
            stroke="#10b981"
            strokeWidth="3"
          />
          {/* Height line */}
          <line x1="65" y1="30" x2="65" y2="120" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 65 110 L 75 110 L 75 120" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="70" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold">h = {labels.h || "4 cm"}</text>

          {/* Labels */}
          <text x="55" y="25" fill="#6ee7b7" fontSize="13" fontWeight="bold">A</text>
          <text x="180" y="25" fill="#6ee7b7" fontSize="13" fontWeight="bold">B</text>
          <text x="142" y="130" fill="#6ee7b7" fontSize="13" fontWeight="bold">C</text>
          <text x="15" y="130" fill="#6ee7b7" fontSize="13" fontWeight="bold">D</text>
          <text x="80" y="135" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">đáy a = {labels.a || "10 cm"}</text>
        </svg>
      );

    case "hinh-thang-can":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <polygon
            points="60,35 140,35 170,115 30,115"
            fill="rgba(249, 115, 22, 0.15)"
            stroke="#f97316"
            strokeWidth="3"
          />
          {/* Equal side ticks */}
          <line x1="42" y1="72" x2="48" y2="78" stroke="#f59e0b" strokeWidth="2" />
          <line x1="152" y1="78" x2="158" y2="72" stroke="#f59e0b" strokeWidth="2" />

          {/* Labels */}
          <text x="52" y="28" fill="#fdba74" fontSize="13" fontWeight="bold">A</text>
          <text x="145" y="28" fill="#fdba74" fontSize="13" fontWeight="bold">B</text>
          <text x="175" y="125" fill="#fdba74" fontSize="13" fontWeight="bold">C</text>
          <text x="20" y="125" fill="#fdba74" fontSize="13" fontWeight="bold">D</text>
          <text x="100" y="25" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">đáy nhỏ a = {labels.a || "4 cm"}</text>
          <text x="100" y="135" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">đáy lớn b = {labels.b || "8 cm"}</text>
        </svg>
      );

    case "doan-thang-trung-diem":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Line segment AB */}
          <line x1="30" y1="75" x2="170" y2="75" stroke="#38bdf8" strokeWidth="3" />
          {/* Midpoint M */}
          <circle cx="30" cy="75" r="4" fill="#38bdf8" />
          <circle cx="100" cy="75" r="5" fill="#f59e0b" />
          <circle cx="170" cy="75" r="4" fill="#38bdf8" />

          {/* Equal ticks on AM and MB */}
          <line x1="63" y1="68" x2="63" y2="82" stroke="#f59e0b" strokeWidth="2" />
          <line x1="67" y1="68" x2="67" y2="82" stroke="#f59e0b" strokeWidth="2" />
          <line x1="133" y1="68" x2="133" y2="82" stroke="#f59e0b" strokeWidth="2" />
          <line x1="137" y1="68" x2="137" y2="82" stroke="#f59e0b" strokeWidth="2" />

          {/* Labels */}
          <text x="30" y="60" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">A</text>
          <text x="100" y="58" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">M (Trung điểm)</text>
          <text x="170" y="60" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">B</text>
          <text x="100" y="105" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">AM = MB = {labels.len || "4 cm"} (AB = {labels.total || "8 cm"})</text>
        </svg>
      );

    case "goc-vuong":
    case "goc-nhon":
    case "goc-tu":
    case "goc-bet":
      const angleDeg = type === "goc-vuong" ? 90 : type === "goc-nhon" ? 45 : type === "goc-tu" ? 135 : 180;
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Vertex O at (70, 110) */}
          <line x1="70" y1="110" x2="170" y2="110" stroke="#06b6d4" strokeWidth="2.5" />
          {type === "goc-vuong" ? (
            <>
              <line x1="70" y1="110" x2="70" y2="20" stroke="#06b6d4" strokeWidth="2.5" />
              <path d="M 70 95 L 85 95 L 85 110" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="60" y="125" fill="#38bdf8" fontSize="13" fontWeight="bold">O</text>
              <text x="175" y="115" fill="#38bdf8" fontSize="13" fontWeight="bold">x</text>
              <text x="70" y="15" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">y</text>
              <text x="110" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold">∠xOy = 90° (Góc vuông)</text>
            </>
          ) : type === "goc-nhon" ? (
            <>
              <line x1="70" y1="110" x2="145" y2="35" stroke="#06b6d4" strokeWidth="2.5" />
              <path d="M 100 110 A 30 30 0 0 0 91 89" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="60" y="125" fill="#38bdf8" fontSize="13" fontWeight="bold">O</text>
              <text x="175" y="115" fill="#38bdf8" fontSize="13" fontWeight="bold">x</text>
              <text x="150" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold">y</text>
              <text x="115" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold">∠xOy &lt; 90° (Góc nhọn)</text>
            </>
          ) : type === "goc-tu" ? (
            <>
              <line x1="110" y1="110" x2="210" y2="110" stroke="#06b6d4" strokeWidth="2.5" />
              <line x1="110" y1="110" x2="35" y2="35" stroke="#06b6d4" strokeWidth="2.5" />
              <path d="M 140 110 A 30 30 0 0 0 89 89" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="110" y="125" fill="#38bdf8" fontSize="13" fontWeight="bold">O</text>
              <text x="195" y="115" fill="#38bdf8" fontSize="13" fontWeight="bold">x</text>
              <text x="25" y="35" fill="#38bdf8" fontSize="13" fontWeight="bold">y</text>
              <text x="115" y="55" fill="#f59e0b" fontSize="11" fontWeight="bold">90° &lt; ∠xOy &lt; 180° (Góc tù)</text>
            </>
          ) : (
            <>
              <line x1="20" y1="80" x2="180" y2="80" stroke="#06b6d4" strokeWidth="2.5" />
              <circle cx="100" cy="80" r="4" fill="#f59e0b" />
              <path d="M 70 80 A 30 30 0 0 1 130 80" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="100" y="100" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">O</text>
              <text x="15" y="75" fill="#38bdf8" fontSize="13" fontWeight="bold">x</text>
              <text x="185" y="75" fill="#38bdf8" fontSize="13" fontWeight="bold">y</text>
              <text x="100" y="45" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">∠xOy = 180° (Góc bẹt)</text>
            </>
          )}
        </svg>
      );

    case "doi-xung-truc":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Axis of symmetry */}
          <line x1="100" y1="10" x2="100" y2="140" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
          <text x="105" y="20" fill="#f59e0b" fontSize="11" fontWeight="bold">Trục d</text>
          {/* Left shape */}
          <polygon points="40,40 85,30 75,110 30,90" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
          {/* Symmetrical right shape */}
          <polygon points="160,40 115,30 125,110 170,90" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
          <text x="100" y="145" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Hai hình đối xứng qua trục d</text>
        </svg>
      );

    case "doi-xung-tam":
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Center of symmetry O */}
          <circle cx="100" cy="75" r="4" fill="#f59e0b" />
          <text x="106" y="80" fill="#f59e0b" fontSize="12" fontWeight="bold">O</text>
          {/* Shape 1 */}
          <polygon points="50,30 85,25 70,60" fill="rgba(168, 85, 247, 0.25)" stroke="#c084fc" strokeWidth="2" />
          {/* Point reflection through O */}
          <polygon points="150,120 115,125 130,90" fill="rgba(168, 85, 247, 0.25)" stroke="#c084fc" strokeWidth="2" />
          <line x1="50" y1="30" x2="150" y2="120" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
          <text x="100" y="145" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">Đối xứng qua tâm O</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="40" y="30" width="120" height="90" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="2" rx="4" />
          <text x="100" y="80" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">Hình minh họa Toán 6</text>
        </svg>
      );
  }
}
