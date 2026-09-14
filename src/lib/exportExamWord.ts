import { CustomExam } from "@/types/customExam";
import { QuestionData } from "@/components/exam/ExamEngine";
import { MultipleChoiceQuestionData } from "@/components/exam/QuestionMultipleChoice";
import { TrueFalseQuestionData } from "@/components/exam/QuestionTrueFalse";
import { ShortAnswerQuestionData } from "@/components/exam/QuestionShortAnswer";

export interface ExportWordOptions {
  includeAnswers?: boolean;   // Kèm bảng đáp án và lời giải chi tiết
  schoolName?: string;        // Tên trường (VD: "TRƯỜNG THPT CHUYÊN HÀ NỘI - AMSTERDAM")
  examCode?: string;          // Mã đề thi (VD: "101")
}

/**
 * Chuẩn hóa chuỗi hiển thị công thức toán học trong Word
 * Giữ nguyên TeX code dạng $...$ để MathType (Alt+\\) hoặc Equation (Alt+=) nhận diện
 */
function cleanMathForWord(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br/>");
}

/**
 * Xuất đề thi ra file Word (.doc) tương thích 100% Microsoft Word, MathType và Equation
 */
export function exportExamToWord(exam: CustomExam, options: ExportWordOptions = {}) {
  const {
    includeAnswers = false,
    schoolName = "SỞ GIÁO DỤC VÀ ĐÀO TẠO",
    examCode = "101"
  } = options;

  const questions = exam.questions || [];
  const mcQuestions = questions.filter(q => q.type === "multiple_choice") as MultipleChoiceQuestionData[];
  const tfQuestions = questions.filter(q => q.type === "true_false") as TrueFalseQuestionData[];
  const saQuestions = questions.filter(q => q.type === "short_answer") as ShortAnswerQuestionData[];

  let qNumber = 1;

  // Render Phần I: Trắc nghiệm 4 phương án
  let part1Html = "";
  if (mcQuestions.length > 0) {
    part1Html += `
      <div class="part-title">PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN</div>
      <p class="part-instruction"><em>Thí sinh trả lời từ câu 1 đến câu ${mcQuestions.length}. Mỗi câu hỏi thí sinh chỉ chọn một phương án.</em></p>
    `;

    mcQuestions.forEach((q) => {
      const num = qNumber++;
      const optA = q.options.find(o => o.key === "A")?.text || "";
      const optB = q.options.find(o => o.key === "B")?.text || "";
      const optC = q.options.find(o => o.key === "C")?.text || "";
      const optD = q.options.find(o => o.key === "D")?.text || "";

      part1Html += `
        <div class="question-block">
          <p class="question-stem"><strong>Câu ${num}:</strong> ${cleanMathForWord(q.stem)}</p>
          <table class="options-table">
            <tr>
              <td style="width: 25%;"><strong>A.</strong> ${cleanMathForWord(optA)}</td>
              <td style="width: 25%;"><strong>B.</strong> ${cleanMathForWord(optB)}</td>
              <td style="width: 25%;"><strong>C.</strong> ${cleanMathForWord(optC)}</td>
              <td style="width: 25%;"><strong>D.</strong> ${cleanMathForWord(optD)}</td>
            </tr>
          </table>
        </div>
      `;
    });
  }

  // Render Phần II: Đúng / Sai
  let part2Html = "";
  if (tfQuestions.length > 0) {
    part2Html += `
      <div class="part-title">PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI</div>
      <p class="part-instruction"><em>Thí sinh trả lời từ câu ${qNumber} đến câu ${qNumber + tfQuestions.length - 1}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.</em></p>
    `;

    tfQuestions.forEach((q) => {
      const num = qNumber++;
      part2Html += `
        <div class="question-block">
          <p class="question-stem"><strong>Câu ${num}:</strong> ${cleanMathForWord(q.stem)}</p>
          <table class="sub-table" style="width: 100%; border-collapse: collapse; margin-bottom: 8pt;">
      `;

      q.subQuestions.forEach((sub) => {
        part2Html += `
          <tr>
            <td style="width: 5%; vertical-align: top; font-weight: bold; padding: 2pt;">${sub.key})</td>
            <td style="width: 80%; vertical-align: top; padding: 2pt;">${cleanMathForWord(sub.text)}</td>
            <td style="width: 15%; vertical-align: top; text-align: right; padding: 2pt; color: #666;">[ Đúng / Sai ]</td>
          </tr>
        `;
      });

      part2Html += `
          </table>
        </div>
      `;
    });
  }

  // Render Phần III: Trả lời ngắn
  let part3Html = "";
  if (saQuestions.length > 0) {
    part3Html += `
      <div class="part-title">PHẦN III. CÂU TRẮC NGHIỆM DẠNG TRẢ LỜI NGẮN</div>
      <p class="part-instruction"><em>Thí sinh trả lời từ câu ${qNumber} đến câu ${qNumber + saQuestions.length - 1}. Thí sinh ghi đáp số vào phiếu trả lời.</em></p>
    `;

    saQuestions.forEach((q) => {
      const num = qNumber++;
      part3Html += `
        <div class="question-block">
          <p class="question-stem"><strong>Câu ${num}:</strong> ${cleanMathForWord(q.stem)}</p>
          <p style="margin-left: 20pt; margin-bottom: 8pt; color: #444;"><strong>Đáp số:</strong> ....................................................................................................</p>
        </div>
      `;
    });
  }

  // Render Bảng Đáp Án & Hướng Dẫn Chấm (nếu chọn includeAnswers)
  let answersHtml = "";
  if (includeAnswers) {
    answersHtml += `
      <div style="page-break-before: always;"></div>
      <div class="exam-header" style="text-align: center;">
        <h2 style="font-size: 14pt; margin-bottom: 4pt; text-transform: uppercase;">BẢNG ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT</h2>
        <p style="font-size: 11pt; margin-top: 0;">MÔN: TOÁN • ĐỀ THI: ${cleanMathForWord(exam.title)}</p>
      </div>

      <div class="part-title">I. BẢNG ĐÁP ÁN NHANH</div>
    `;

    // Bảng đáp án Phần I
    if (mcQuestions.length > 0) {
      answersHtml += `
        <p><strong>Phần I. Trắc nghiệm 4 lựa chọn (0.25 điểm / câu)</strong></p>
        <table class="answer-key-table">
          <tr>
            ${mcQuestions.map((_, i) => `<th>Câu ${i + 1}</th>`).join("")}
          </tr>
          <tr>
            ${mcQuestions.map(q => `<td style="font-weight: bold; color: #b91c1c;">${q.correctKey || "A"}</td>`).join("")}
          </tr>
        </table>
      `;
    }

    // Bảng đáp án Phần II
    if (tfQuestions.length > 0) {
      answersHtml += `
        <p style="margin-top: 12pt;"><strong>Phần II. Trắc nghiệm Đúng / Sai</strong></p>
        <table class="answer-key-table" style="width: 80%;">
          <tr>
            <th>Câu</th>
            <th>Ý a</th>
            <th>Ý b</th>
            <th>Ý c</th>
            <th>Ý d</th>
          </tr>
      `;
      tfQuestions.forEach((q, idx) => {
        const cNum = mcQuestions.length + idx + 1;
        const subA = q.subQuestions.find(s => s.key === "a")?.isCorrect ? "Đ" : "S";
        const subB = q.subQuestions.find(s => s.key === "b")?.isCorrect ? "Đ" : "S";
        const subC = q.subQuestions.find(s => s.key === "c")?.isCorrect ? "Đ" : "S";
        const subD = q.subQuestions.find(s => s.key === "d")?.isCorrect ? "Đ" : "S";
        answersHtml += `
          <tr>
            <td><strong>Câu ${cNum}</strong></td>
            <td style="font-weight: bold; color: ${subA === 'Đ' ? '#047857' : '#b91c1c'}">${subA}</td>
            <td style="font-weight: bold; color: ${subB === 'Đ' ? '#047857' : '#b91c1c'}">${subB}</td>
            <td style="font-weight: bold; color: ${subC === 'Đ' ? '#047857' : '#b91c1c'}">${subC}</td>
            <td style="font-weight: bold; color: ${subD === 'Đ' ? '#047857' : '#b91c1c'}">${subD}</td>
          </tr>
        `;
      });
      answersHtml += `</table>`;
    }

    // Bảng đáp án Phần III
    if (saQuestions.length > 0) {
      answersHtml += `
        <p style="margin-top: 12pt;"><strong>Phần III. Trả lời ngắn (0.5 điểm / câu)</strong></p>
        <table class="answer-key-table" style="width: 60%;">
          <tr>
            <th>Câu</th>
            <th>Đáp số chính xác</th>
          </tr>
      `;
      saQuestions.forEach((q, idx) => {
        const cNum = mcQuestions.length + tfQuestions.length + idx + 1;
        answersHtml += `
          <tr>
            <td><strong>Câu ${cNum}</strong></td>
            <td style="font-weight: bold; color: #0284c7;">${cleanMathForWord(q.correctAnswer || "")}</td>
          </tr>
        `;
      });
      answersHtml += `</table>`;
    }

    // Lời giải chi tiết
    answersHtml += `<div class="part-title" style="margin-top: 20pt;">II. LỜI GIẢI CHI TIẾT</div>`;

    questions.forEach((q, idx) => {
      const cNum = idx + 1;
      let expContent = q.explanation || "Áp dụng định lý và kiến thức trọng tâm để tìm ra đáp án.";
      answersHtml += `
        <div class="explanation-box" style="margin-bottom: 12pt; border: 1px solid #e2e8f0; padding: 8pt 12pt; border-radius: 6pt; background-color: #fafafa;">
          <p style="margin: 0 0 4pt 0;"><strong>Câu ${cNum}:</strong> ${cleanMathForWord(q.stem)}</p>
          <p style="margin: 0; color: #047857;"><strong>Lời giải chi tiết:</strong> ${cleanMathForWord(expContent)}</p>
        </div>
      `;
    });
  }

  // Toàn bộ tài liệu HTML Word
  const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>${cleanMathForWord(exam.title)}</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        @page Section1 {
          size: 595.3pt 841.9pt; /* Khổ A4 tiêu chuẩn */
          margin: 2.0cm 2.0cm 2.0cm 2.0cm;
          mso-header-margin: 36.0pt;
          mso-footer-margin: 36.0pt;
          mso-paper-source: 0;
        }
        div.Section1 { page: Section1; }
        body {
          font-family: 'Times New Roman', serif;
          font-size: 12.0pt;
          line-height: 1.35;
          color: #000000;
        }
        table.header-table {
          width: 100%;
          border-collapse: collapse;
          border: none;
          margin-bottom: 15pt;
        }
        table.header-table td {
          border: none;
          vertical-align: top;
          padding: 2pt;
        }
        .text-center { text-align: center; }
        .part-title {
          font-weight: bold;
          font-size: 12pt;
          margin-top: 14pt;
          margin-bottom: 3pt;
          text-transform: uppercase;
        }
        .part-instruction {
          font-style: italic;
          font-size: 11pt;
          margin-top: 0;
          margin-bottom: 8pt;
          color: #333333;
        }
        .question-block {
          margin-bottom: 10pt;
        }
        .question-stem {
          margin-top: 4pt;
          margin-bottom: 4pt;
          text-align: justify;
        }
        table.options-table {
          width: 100%;
          border-collapse: collapse;
          border: none;
          margin-top: 2pt;
          margin-bottom: 6pt;
        }
        table.options-table td {
          border: none;
          padding: 2pt 4pt;
          vertical-align: top;
        }
        .answer-key-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 8pt;
          margin-bottom: 12pt;
        }
        .answer-key-table th, .answer-key-table td {
          border: 1px solid #000000;
          padding: 4pt 6pt;
          text-align: center;
          font-size: 10.5pt;
        }
        .answer-key-table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        .mathtype-box {
          margin-top: 25pt;
          padding: 8pt 12pt;
          border: 1px dashed #999999;
          background-color: #f8fafc;
          font-size: 10pt;
          color: #475569;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="Section1">
        <!-- Khung Tiêu Đề Đề Thi -->
        <table class="header-table">
          <tr>
            <td style="width: 45%; text-align: center;">
              <span style="font-size: 11pt;">${cleanMathForWord(schoolName)}</span><br/>
              <strong>LỚP: ${cleanMathForWord(exam.targetClass || "10A1")}</strong><br/>
              <span style="font-size: 10.5pt;">Năm học: 2025 - 2026</span>
            </td>
            <td style="width: 55%; text-align: center;">
              <strong style="font-size: 13pt; text-transform: uppercase;">${cleanMathForWord(exam.title)}</strong><br/>
              <strong>MÔN: TOÁN</strong><br/>
              <span style="font-size: 11pt;">Thời gian làm bài: <strong>${exam.durationMinutes} phút</strong> <em>(Không kể thời gian phát đề)</em></span><br/>
              <span style="font-size: 10.5pt; font-style: italic;">Mã đề thi: <strong>${examCode}</strong></span>
            </td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #000; margin-bottom: 12pt;" />

        <!-- Họ tên học sinh -->
        <table style="width: 100%; margin-bottom: 15pt; font-size: 11.5pt;">
          <tr>
            <td style="width: 60%;">Họ và tên thí sinh: .......................................................................</td>
            <td style="width: 40%; text-align: right;">Số báo danh: ..........................................</td>
          </tr>
        </table>

        <!-- Nội dung đề thi 3 phần -->
        ${part1Html}
        ${part2Html}
        ${part3Html}

        <div style="text-align: center; margin-top: 15pt; margin-bottom: 15pt; font-weight: bold;">
          ---------- HẾT ----------
        </div>

        <!-- Hướng dẫn sử dụng MathType / Word Equation -->
        <div class="mathtype-box">
          📌 <strong>HƯỚNG DẪN CHO THẦY/CÔ CHUYỂN ĐỔI CÔNG THỨC TOÁN TRÊN WORD:</strong><br/>
          • <strong>Chuyển sang MathType:</strong> Nếu máy tính có cài MathType, Thầy/Cô chỉ cần vào tab <strong>MathType &gt; Toggle TeX</strong> (hoặc bấm tổ hợp phím <strong>Alt + \\</strong>), toàn bộ ký hiệu LaTeX $...$ trong tài liệu sẽ tự động chuyển thành công thức MathType tương tác!<br/>
          • <strong>Chuyển sang Word Equation:</strong> Bôi đen công thức LaTeX $...$ và bấm tổ hợp phím <strong>Alt + =</strong> để chuyển thành Equation gốc của Microsoft Word.<br/>
          • Hệ thống VinaMathLab đã định dạng sẵn tiêu chuẩn lề A4, font Times New Roman 12pt để Thầy/Cô có thể in trực tiếp làm đề kiểm tra.
        </div>

        <!-- Phần Đáp án và Lời giải chi tiết -->
        ${answersHtml}
      </div>
    </body>
    </html>
  `;

  // Tạo Blob và kích hoạt tải về trên Client
  const blob = new Blob(["\ufeff" + htmlContent], {
    type: "application/msword;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const cleanTitle = (exam.title || "De_Kiem_Tra")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, "_");
  const fileName = includeAnswers
    ? `[VinaMathLab]_De_Thi_Va_Dap_An_${cleanTitle}_${exam.targetClass || "Lop"}.doc`
    : `[VinaMathLab]_De_Thi_${cleanTitle}_${exam.targetClass || "Lop"}.doc`;

  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
