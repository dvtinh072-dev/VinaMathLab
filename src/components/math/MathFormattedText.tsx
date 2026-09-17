"use client";

import React, { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathFormattedTextProps {
  text?: string | null;
  className?: string;
}

/**
 * Chuẩn hóa an toàn ký tự xuống dòng literal \n
 * Tuyệt đối không thay thế nếu \n là phần đầu của các lệnh LaTeX: \ne, \neq, \neg, \notin, \not, \nabla, \natural, \nu, \nsubseteq, \nexists, \ngtr, \nless, \nparallel, \nsim, \ncong, \nmid...
 */
export function safeUnescapeNewlines(text?: string | null): string {
  if (!text || typeof text !== "string") return "";
  return text.replace(/\\n(?!(?:e|eq|eg|otin|ot|abla|atural|u|subseteq|exists|gtr|less|parallel|sim|cong|mid)\b)/g, "\n");
}

/**
 * Hàm chuẩn hóa an toàn:
 * 1. Bảo vệ các khối LaTeX đã có sẵn trong $...$
 * 2. Tự động chuyển đổi các phân số chưa bọc ($a/b$, $-3/4$, $21/28$), hỗn số, góc và ký hiệu unicode sang LaTeX chuẩn
 * 3. Khôi phục các khối LaTeX
 */
export function formatMathInText(rawText?: string | null): string {
  if (!rawText || typeof rawText !== "string") return "";

  // Chuẩn hóa ký tự xuống dòng an toàn (bảo vệ \ne, \notin...)
  const unescapedText = safeUnescapeNewlines(rawText);

  // Bước 1: Bảo vệ các khối LaTeX có sẵn $...$ hoặc $$...$$
  const mathBlocks: string[] = [];
  let protectedText = unescapedText.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
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

  // 2.1. Tự động bảo vệ khoảng/nửa khoảng chứa lệnh LaTeX chưa bọc $...$: (-\infty; +\infty), [0; +\infty)
  protectedText = protectedText.replace(/([(\[][^)\]\n]*?\\[a-zA-Z]+[^)\]\n]*?[)\]])/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(math);
    return `___MATH_BLOCK_INLINE_${idx}___`;
  });

  // 2.2. Tự động bảo vệ các lệnh LaTeX độc lập chưa có $: \sqrt{3}, \vec{a}, \frac{a}{b}, \pm, \infty
  protectedText = protectedText.replace(/(\\[a-zA-Z]+(?:\{[^}]*\}|\^\{[^}]*\}|_[^}\s]+)*(?:\s*[\+\-\*\/=><]\s*\S+)?)/g, (_, math) => {
    const idx = mathBlocks.length;
    mathBlocks.push(math);
    return `___MATH_BLOCK_INLINE_${idx}___`;
  });

  // 2.3. Thay thế ký hiệu góc: ∠xOy -> $\widehat{xOy}$
  protectedText = protectedText.replace(/∠([a-zA-Z0-9]+)/g, (_, angle) => {
    return `$\\widehat{${angle}}$`;
  });

  // 2.4. Thay thế hỗn số: 2 3/4, 3 1/2 -> $2\frac{3}{4}$
  protectedText = protectedText.replace(/(^|[\s(,;=><+\-])(\d+)\s+(\d+)\/(\d+)(?=[\s),;=><+\-]|$)/g, (_, prefix, whole, num, den) => {
    return `${prefix}$${whole}\\frac{${num}}{${den}}$`;
  });

  // 2.5. Thay thế phân số dạng số và đại số: -3/4, 6/-8, 21/28, x/4, a/b
  protectedText = protectedText.replace(/(^|[\s(,;=><+\-])([xXa-zA-Z]|-?\d+)\s*\/\s*([a-zA-Z]|-?\d+)(?=[\s),;=><+\-]|$)/g, (_, prefix, num, den) => {
    return `${prefix}$\\frac{${num}}{${den}}$`;
  });

  // 2.6. Chuẩn hóa căn bậc hai unicode: √2, 4√2, -√3 -> $\sqrt{2}$, $4\sqrt{2}$, $-\sqrt{3}$
  protectedText = protectedText.replace(/(^|[\s(,;=><+\-])(-?\d*)√(\d+)(?=[\s),;=><+\-]|$)/g, (_, prefix, coef, num) => {
    if (!coef || coef === "") return `${prefix}$\\sqrt{${num}}$`;
    if (coef === "-") return `${prefix}$-\\sqrt{${num}}$`;
    return `${prefix}$${coef}\\sqrt{${num}}$`;
  });

  // 2.7. Tự động bọc khoảng số hoặc tọa độ độc lập: [0; 4), (1; 7], (3; 2), A(-2; 0)
  if (/^\s*(?:[a-zA-Z]\s*)?[(\[]\s*-?\d+(?:[\.,]\d+)?\s*;\s*-?\d+(?:[\.,]\d+)?\s*[)\]]\s*$/.test(protectedText)) {
    const trimmed = protectedText.trim();
    const idx = mathBlocks.length;
    mathBlocks.push(trimmed);
    protectedText = `___MATH_BLOCK_INLINE_${idx}___`;
  }

  // 2.8. Chuẩn hóa ký hiệu toán học unicode đứng một mình sang LaTeX
  protectedText = protectedText.replace(/(^|[\s])([a-zA-Z0-9]+)\s*∈\s*([a-zA-Z0-9ℕℤℚℝ*]+)(?=[\s,;.]|$)/g, (_, prefix, elem, set) => {
    let formattedSet = set === "ℕ*" ? "\\mathbb{N}^*" : set === "ℕ" ? "\\mathbb{N}" : set === "ℤ" ? "\\mathbb{Z}" : set;
    return `${prefix}$${elem} \\in ${formattedSet}$`;
  });

  // 2.9. Tự động chuyển đổi chuỗi chỉ chứa số nguyên/thập phân/phân số đứng độc lập sang LaTeX
  if (/^\s*-?\d+(?:[\.,]\d+)?\s*$/.test(protectedText)) {
    const numClean = protectedText.trim().replace('.', '{,}');
    const idx = mathBlocks.length;
    mathBlocks.push(numClean);
    protectedText = `___MATH_BLOCK_INLINE_${idx}___`;
  }

  // Bước 3: Khôi phục các khối LaTeX đã bảo vệ
  let restored = protectedText.replace(/___MATH_BLOCK_DISPLAY_(\d+)___/g, (_, idx) => {
    return `$$${mathBlocks[Number(idx)]}$$`;
  });

  restored = restored.replace(/___MATH_BLOCK_INLINE_(\d+)___/g, (_, idx) => {
    return `$${mathBlocks[Number(idx)]}$`;
  });

  return restored;
}

/**
 * Chuẩn hóa ký hiệu vectơ theo chuẩn SGK Toán học:
 * - Vectơ hai điểm đầu cuối: \vec{AB}, \vec{MN} -> \overrightarrow{AB}, \overrightarrow{MN} (mũi tên kéo dài phủ cả 2 chữ cái)
 * - Vectơ một ký tự: \vec{a}, \vec{u}, \vec{v}, \vec{0} -> giữ nguyên
 */
export function normalizeVectorNotation(latex: string): string {
  if (!latex || typeof latex !== "string") return "";
  return latex.replace(/\\vec\{([A-Z][A-Z0-9']{1,})\}/g, (_, points) => `\\overrightarrow{${points}}`);
}

/**
 * Chuyển đổi Markdown Table sang HTML Table chuẩn hóa, hỗ trợ responsive & KaTeX
 */
export function convertMarkdownTablesToHtml(src: string): string {
  if (!src || !src.includes("|")) return src;

  // Chuẩn hóa \n an toàn trước
  const normalized = safeUnescapeNewlines(src);

  // Regex tìm khối bảng markdown: bắt đầu và kết thúc bởi các dòng có chứa |
  const mdTableRegex = /(?:^|\n)(\|[^\n]+\|\r?\n\|[-:\s|]+\|\r?\n(?:\|[^\n]+\|\r?\n?)+)/g;
  return normalized.replace(mdTableRegex, (match, tableBlock) => {
    const lines = tableBlock
      .trim()
      .split(/\r?\n/)
      .map((l: string) => l.trim())
      .filter((l: string) => l.startsWith("|") && l.endsWith("|"));

    if (lines.length < 2) return match;

    const parseRow = (line: string) => {
      return line
        .slice(1, -1)
        .split("|")
        .map((cell: string) => cell.trim());
    };

    const headerCells = parseRow(lines[0]);
    // lines[1] là hàng phân cách |---|---|
    const bodyRows = lines.slice(2).map(parseRow);

    let html = `<div class="overflow-x-auto my-3"><table class="w-full max-w-xl mx-auto text-center border-collapse border border-slate-700 text-sm bg-slate-900/60 rounded-lg shadow-sm"><thead><tr class="border-b border-slate-700 bg-slate-800/80">`;
    headerCells.forEach((c: string) => {
      html += `<th class="border border-slate-700 px-3 py-2 font-semibold text-white">${c}</th>`;
    });
    html += `</tr></thead><tbody>`;
    bodyRows.forEach((row: string[]) => {
      html += `<tr class="border-b border-slate-700/60 hover:bg-slate-800/40">`;
      row.forEach((c: string, idx: number) => {
        const isHeaderCol = idx === 0;
        const tag = isHeaderCol ? "th" : "td";
        const cls = isHeaderCol
          ? "border border-slate-700 px-3 py-2 font-semibold text-white bg-slate-800/60"
          : "border border-slate-700 px-3 py-2 text-slate-200";
        html += `<${tag} class="${cls}">${c}</${tag}>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    return "\n" + html + "\n";
  });
}

/**
 * Tự động xuống dòng và bọc display mode $$...$$ cho các hệ phương trình/hệ bất phương trình (\begin{cases})
 * để dấu ngoặc nhọn ôm trọn cả hệ, không bị gãy dòng hoặc dính liền câu văn
 */
export function formatCasesInText(text: string): string {
  if (!text || typeof text !== "string" || !text.includes("\\begin{cases}")) return text;

  // Nếu toàn bộ chuỗi chỉ là một hệ phương trình trắc nghiệm đơn thuần (ví dụ trong nút bấm phương án A, B, C, D)
  if (/^\s*(?:[A-D]\.\s*)?\$\\begin\{cases\}[\s\S]*?\\end\{cases\}\s*[\.\?]?\s*$/.test(text)) {
    return text;
  }

  // Nếu chuỗi là một hệ phương trình không có dấu $ bọc ngoài (ví dụ keyFormulas)
  if (/^\s*\\begin\{cases\}[\s\S]*?\\end\{cases\}\s*$/.test(text)) {
    return `$$${text.trim()}$$`;
  }

  // Chuẩn hóa \n an toàn trước
  let result = safeUnescapeNewlines(text);

  // Tự động chuyển đổi hệ phương trình inline $\begin{cases}...\end{cases}$ thành display block $$\begin{cases}...\end{cases}$$
  // Giữ nguyên các khối display math $$...$$ đã có (sử dụng lookaround để không bắt nhầm $$)
  result = result.replace(
    /([^\n$]+?)(\s*:?)\s*(?<!\$)\$(?!\$)(\\begin\{cases\}[\s\S]*?\\end\{cases\})(?<!\$)\$(?!\$)([,\.\?]?)(\s*)/g,
    (match, prefix, colon, mathContent, punctuation, suffix) => {
      // Bỏ qua nếu là tiền tố nhãn phương án trắc nghiệm như "A. "
      if (/^\s*[A-D]\.\s*$/.test(prefix)) {
        return match;
      }

      // Chuẩn hóa tiền tố lời dẫn kết thúc bằng dấu ':'
      let cleanPrefix = prefix.trimEnd();
      if (!cleanPrefix.endsWith(":") && !cleanPrefix.endsWith("?")) {
        cleanPrefix = `${cleanPrefix}:`;
      }

      // Xử lý từ ngữ tiếp nối sau hệ phương trình (ví dụ: "ta thu được phương trình:", "có bao nhiêu nghiệm?", "là:")
      let tail = punctuation && punctuation !== "." && punctuation !== ":" && punctuation !== "?" ? punctuation.trim() : "";
      if (suffix && suffix.trim()) {
        tail = tail ? `${tail} ${suffix.trim()}` : suffix.trim();
      }

      if (tail) {
        return `${cleanPrefix}\n$$${mathContent}$$\n${tail}\n`;
      }
      return `${cleanPrefix}\n$$${mathContent}$$\n`;
    }
  );

  return result;
}

export function MathFormattedText({ text, className = "" }: MathFormattedTextProps) {
  // Render an toàn tuyệt đối với KaTeX và hỗ trợ bảng HTML responsive
  const renderedHtml = useMemo(() => {
    if (!text || typeof text !== "string") return "";

    // Bước 0.1: Chuyển đổi Markdown Table sang HTML Table (nếu có) và unescape \\n
    const textWithTables = convertMarkdownTablesToHtml(text);

    // Bước 0.2: Tự động xuống dòng cho hệ phương trình (\begin{cases}) để tròn ý và không bị gãy ngoặc nhọn
    const textWithFormattedCases = formatCasesInText(textWithTables);

    // Bước 0.3: Bảo vệ các khối bảng HTML <div class="overflow-x-auto...">...</div> hoặc <table...>...</table>
    const htmlBlocks: string[] = [];
    const textWithProtectedHtml = textWithFormattedCases.replace(/(<div\s+class="overflow-x-auto[^>]*>[\s\S]*?<\/div>|<table[\s\S]*?<\/table>)/gi, (_, table) => {
      const idx = htmlBlocks.length;
      htmlBlocks.push(table);
      return `___HTML_TABLE_BLOCK_${idx}___`;
    });

    const processed = formatMathInText(textWithProtectedHtml);

    // Tách các đoạn Text, HTML blocks, và Math ($...$ hoặc $$...$$)
    const parts = processed.split(/(___HTML_TABLE_BLOCK_\d+___|\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g);

    const rendered = parts
      .map((part, idx) => {
        if (!part) return "";

        // Kiểm tra khối HTML Table
        const htmlMatch = part.match(/^___HTML_TABLE_BLOCK_(\d+)___$/);
        if (htmlMatch) {
          const rawTable = htmlBlocks[Number(htmlMatch[1])];
          // Render các biểu thức math nằm bên trong bảng (ví dụ $15; 20$)
          return rawTable.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
            try {
              const normalizedMath = normalizeVectorNotation(math);
              return `<span class="inline-math-item inline-block whitespace-nowrap mx-0.5 align-middle text-amber-300 font-semibold">${katex.renderToString(
                normalizedMath,
                { displayMode: false, throwOnError: false, strict: false }
              )}</span>`;
            } catch {
              return math;
            }
          });
        }

        if (part.startsWith("$$") && part.endsWith("$$") && part.length > 4) {
          const content = normalizeVectorNotation(part.slice(2, -2));
          try {
            return `<span class="block my-2.5 text-center overflow-x-auto select-none">${katex.renderToString(content, {
              displayMode: true,
              throwOnError: false,
              strict: false,
            })}</span>`;
          } catch {
            return `<span class="block my-2 text-center text-amber-300 font-bold">${content}</span>`;
          }
        }

        if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
          const content = normalizeVectorNotation(part.slice(1, -1));
          // Kiểm tra nếu phần tử tiếp theo bắt đầu bằng dấu câu (, . ; : ? ! )) thì bỏ lề phải để không bị hở dấu
          const nextPart = parts[idx + 1] || "";
          const hasPunctuationAfter = /^[.,;:?!)]/.test(nextPart.trimStart());
          const mrClass = hasPunctuationAfter ? "mr-0" : "mr-0.5";
          try {
            return `<span class="inline-math-item inline-block whitespace-nowrap ml-0.5 ${mrClass} align-middle text-amber-300 font-semibold">${katex.renderToString(
              content,
              {
                displayMode: false,
                throwOnError: false,
                strict: false,
              }
            )}</span>`;
          } catch {
            // Fallback an toàn khi KaTeX parse không thành công
            return `<span class="inline-block whitespace-nowrap text-amber-300 font-bold">${content}</span>`;
          }
        }

        // Văn bản thường: escape HTML an toàn và hỗ trợ xuống dòng
        const unescaped = safeUnescapeNewlines(part);
        return unescaped
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\n/g, "<br/>");
      })
      .join("");

    return rendered;
  }, [text]);

  return (
    <span
      className={`inline-math-container leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}
