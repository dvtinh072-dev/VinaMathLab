"use client";

import React, { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathFormattedTextProps {
  text?: string | null;
  className?: string;
}

/**
 * Hàm chuẩn hóa an toàn:
 * 1. Bảo vệ các khối LaTeX đã có sẵn trong $...$
 * 2. Tự động chuyển đổi các phân số chưa bọc ($a/b$, $-3/4$, $21/28$), hỗn số, góc và ký hiệu unicode sang LaTeX chuẩn
 * 3. Khôi phục các khối LaTeX
 */
export function formatMathInText(rawText?: string | null): string {
  if (!rawText || typeof rawText !== "string") return "";

  // Bước 1: Bảo vệ các khối LaTeX có sẵn $...$ hoặc $$...$$
  const mathBlocks: string[] = [];
  let protectedText = rawText.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(math);
    return `___MATH_BLOCK_DISPLAY_${idx}___`;
  });

  protectedText = protectedText.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(math);
    return `___MATH_BLOCK_INLINE_${idx}___`;
  });

  // Bước 2: Chuẩn hóa trên phần text thường còn lại

  // 2.0. Loại bỏ các backslash escape thừa ngoài khối math (ví dụ: 6\ 205 -> 6 205, ;\  -> ; )
  protectedText = protectedText.replace(/\\(\s+)/g, "$1");

  // 2.1. Thay thế ký hiệu góc: ∠xOy -> $\widehat{xOy}$
  protectedText = protectedText.replace(/∠([a-zA-Z0-9]+)/g, (_, angle) => {
    return `$\\widehat{${angle}}$`;
  });

  // 2.2. Thay thế hỗn số: 2 3/4, 3 1/2 -> $2\frac{3}{4}$
  protectedText = protectedText.replace(/(^|[\s(,;=><+\-])(\d+)\s+(\d+)\/(\d+)(?=[\s),;=><+\-]|$)/g, (_, prefix, whole, num, den) => {
    return `${prefix}$${whole}\\frac{${num}}{${den}}$`;
  });

  // 2.3. Thay thế phân số dạng số và đại số: -3/4, 6/-8, 21/28, x/4, a/b
  protectedText = protectedText.replace(/(^|[\s(,;=><+\-])([xXa-zA-Z]|-?\d+)\s*\/\s*([a-zA-Z]|-?\d+)(?=[\s),;=><+\-]|$)/g, (_, prefix, num, den) => {
    return `${prefix}$\\frac{${num}}{${den}}$`;
  });

  // 2.4. Chuẩn hóa ký hiệu toán học unicode đứng một mình sang LaTeX
  protectedText = protectedText.replace(/(^|[\s])([a-zA-Z0-9]+)\s*∈\s*([a-zA-Z0-9ℕℤℚℝ*]+)(?=[\s,;.]|$)/g, (_, prefix, elem, set) => {
    let formattedSet = set === "ℕ*" ? "\\mathbb{N}^*" : set === "ℕ" ? "\\mathbb{N}" : set === "ℤ" ? "\\mathbb{Z}" : set;
    return `${prefix}$${elem} \\in ${formattedSet}$`;
  });

  protectedText = protectedText.replace(/(^|[\s])([a-zA-Z0-9]+)\s*∉\s*([a-zA-Z0-9ℕℤℚℝ*]+)(?=[\s,;.]|$)/g, (_, prefix, elem, set) => {
    let formattedSet = set === "ℕ*" ? "\\mathbb{N}^*" : set === "ℕ" ? "\\mathbb{N}" : set === "ℤ" ? "\\mathbb{Z}" : set;
    return `${prefix}$${elem} \\notin ${formattedSet}$`;
  });

  // Bước 3: Khôi phục các khối LaTeX đã bảo vệ
  let restored = protectedText.replace(/___MATH_BLOCK_DISPLAY_(\d+)___/g, (_, idx) => {
    return `$$${mathBlocks[Number(idx)]}$$`;
  });

  restored = restored.replace(/___MATH_BLOCK_INLINE_(\d+)___/g, (_, idx) => {
    return `$${mathBlocks[Number(idx)]}$`;
  });

  return restored;
}

export function MathFormattedText({ text, className = "" }: MathFormattedTextProps) {
  // Render an toàn tuyệt đối với KaTeX
  const renderedHtml = useMemo(() => {
    if (!text || typeof text !== "string") return "";

    const processed = formatMathInText(text);

    // Tách các đoạn Text và các đoạn Math ($...$ hoặc $$...$$)
    const parts = processed.split(/(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g);

    return parts
      .map((part) => {
        if (!part) return "";

        if (part.startsWith("$$") && part.endsWith("$$") && part.length > 4) {
          const content = part.slice(2, -2);
          try {
            return katex.renderToString(content, {
              displayMode: true,
              throwOnError: true,
              strict: false,
            });
          } catch {
            return `<span>${content}</span>`;
          }
        }

        if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
          const content = part.slice(1, -1);
          try {
            return `<span class="inline-math-item mx-0.5 align-middle text-amber-300 font-semibold">${katex.renderToString(
              content,
              {
                displayMode: false,
                throwOnError: true,
                strict: false,
              }
            )}</span>`;
          } catch {
            // Fallback an toàn khi KaTeX parse không thành công
            return `<span class="text-amber-300 font-bold">${content}</span>`;
          }
        }

        // Văn bản thường: escape HTML an toàn và hỗ trợ xuống dòng
        return part
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\n/g, "<br/>");
      })
      .join("");
  }, [text]);

  return (
    <span
      className={`inline-math-container leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}
