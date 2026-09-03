"use client";

import React, { useState } from "react";
import { Sparkles, Calculator, CheckCircle2 } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export function DivisibilityLab() {
  const [numA, setNumA] = useState<number>(24);
  const [numB, setNumB] = useState<number>(36);

  // Helper functions
  const isPrime = (n: number) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const getDivisors = (n: number) => {
    const divs: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) divs.push(i);
    }
    return divs;
  };

  const getPrimeFactors = (n: number): { [prime: number]: number } => {
    const factors: { [prime: number]: number } = {};
    let d = 2;
    let temp = n;
    while (temp > 1 && d <= n) {
      if (temp % d === 0) {
        factors[d] = (factors[d] || 0) + 1;
        temp /= d;
      } else {
        d++;
      }
    }
    return factors;
  };

  const formatPrimeFactorization = (factors: { [prime: number]: number }) => {
    const parts = Object.entries(factors).map(([p, exp]) => (exp === 1 ? `${p}` : `${p}^{${exp}}`));
    return parts.length > 0 ? parts.join(" \\cdot ") : "1";
  };

  const gcd = (a: number, b: number): number => (!b ? a : gcd(b, a % b));
  const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

  const divsA = getDivisors(numA);
  const divsB = getDivisors(numB);
  const commonDivs = divsA.filter((d) => divsB.includes(d));
  const ucln = gcd(numA, numB);
  const bcnn = lcm(numA, numB);

  return (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 text-white space-y-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
            <Calculator className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Phòng Thí Nghiệm: Tính Chia Hết, Số Nguyên Tố, ƯCLN & BCNN
            </h3>
            <span className="text-[11px] text-slate-400">
              Phân tích số ra thừa số nguyên tố và tìm ước chung / bội chung trực quan
            </span>
          </div>
        </div>
      </div>

      {/* Input Number Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-black/50 border border-emerald-500/20 space-y-2">
          <div className="flex justify-between text-xs font-bold text-emerald-300">
            <span>Số thứ nhất a:</span>
            <span className="font-mono text-sm">{numA} {isPrime(numA) ? "(Số nguyên tố)" : "(Hợp số)"}</span>
          </div>
          <input
            type="range"
            min={2}
            max={120}
            value={numA}
            onChange={(e) => setNumA(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-2xl bg-black/50 border border-cyan-500/20 space-y-2">
          <div className="flex justify-between text-xs font-bold text-cyan-300">
            <span>Số thứ hai b:</span>
            <span className="font-mono text-sm">{numB} {isPrime(numB) ? "(Số nguyên tố)" : "(Hợp số)"}</span>
          </div>
          <input
            type="range"
            min={2}
            max={120}
            value={numB}
            onChange={(e) => setNumB(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Prime Factorization Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Phân tích {numA} ra thừa số nguyên tố:</span>
          <div className="text-sm font-bold text-emerald-300">
            <MathFormula math={`${numA} = ${formatPrimeFactorization(getPrimeFactors(numA))}`} />
          </div>
          <div className="text-[11px] text-slate-400">
            Tập ước: Ư({numA}) = {'{'}{divsA.join("; ")}{'}'}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Phân tích {numB} ra thừa số nguyên tố:</span>
          <div className="text-sm font-bold text-cyan-300">
            <MathFormula math={`${numB} = ${formatPrimeFactorization(getPrimeFactors(numB))}`} />
          </div>
          <div className="text-[11px] text-slate-400">
            Tập ước: Ư({numB}) = {'{'}{divsB.join("; ")}{'}'}
          </div>
        </div>
      </div>

      {/* GCD & LCM Summary Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-cyan-950/60 border border-emerald-400/30 space-y-3">
        <div className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> Kết quả tính toán ƯCLN & BCNN ({numA}, {numB}):
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/40 space-y-1">
            <div className="font-bold text-emerald-300">Ước Chung Lớn Nhất (ƯCLN):</div>
            <MathFormula math={`\\text{ƯCLN}(${numA}, ${numB}) = ${ucln}`} />
            <div className="text-[10px] text-slate-400">Ước chung: {'{'}{commonDivs.join("; ")}{'}'}</div>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/40 space-y-1">
            <div className="font-bold text-cyan-300">Bội Chung Nhỏ Nhất (BCNN):</div>
            <MathFormula math={`\\text{BCNN}(${numA}, ${numB}) = ${bcnn}`} />
            <div className="text-[10px] text-slate-400">Kiểm tra: {numA} × {numB} = {numA * numB} = {ucln} × {bcnn}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
