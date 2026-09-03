import { DetailedLessonData } from "@/data/allGradesLessonsData";

/**
 * HỆ THỐNG GIÁO ÁN CHI TIẾT & BỘ CÂU HỎI BÀI TẬP SGK TOÁN 7
 * Bám sát 100% tài liệu nội bộ dự án: TOÁN 7 - BỘ 2 & SGK Toán 7 Kết Nối Tri Thức
 */
export const GRADE_7_DETAILED_LESSONS: { [key: string]: DetailedLessonData } = {
  "t7-b1-tap-hop-so-huu-ti": {
    "id": "t7-b1-tap-hop-so-huu-ti",
    "lessonNumber": 1,
    "title": "Bài 1: Tập hợp các số hữu tỉ",
    "bookChapter": "Chương I: Số hữu tỉ",
    "scenarioTitle": "Tình huống: Phân chia bánh ngọt và nhiệt độ âm",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm số hữu tỉ & Tập hợp ℚ",
        "points": [
          "Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\ne 0$.",
          "Tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$.",
          "Mối quan hệ giữa các tập hợp số: Mọi số tự nhiên đều là số nguyên, mọi số nguyên đều là số hữu tỉ (minh họa bằng biểu đồ Ven bên dưới).",
          "Mỗi số nguyên $a$ đều là một số hữu tỉ vì $a = \\frac{a}{1}$.",
          "Các phân số bằng nhau biểu diễn cùng một số hữu tỉ."
        ],
        "hasVennDiagram": true,
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề & SGK Trang 6)",
        "exampleProblem": "Giải thích vì sao các số $0,6$; $-1\\frac{1}{3}$; $-2$; $0$ đều là các số hữu tỉ.",
        "exampleSolution": "Ta viết các số dưới dạng phân số:\n• $0,6 = \\frac{6}{10} = \\frac{3}{5} \\in \\mathbb{Q}$\n• $-1\\frac{1}{3} = -\\frac{4}{3} \\in \\mathbb{Q}$\n• $-2 = \\frac{-2}{1} \\in \\mathbb{Q}$\n• $0 = \\frac{0}{1} \\in \\mathbb{Q}$.\nVì các số đều viết được dưới dạng phân số với tử và mẫu là các số nguyên, mẫu khác 0 nên chúng đều là số hữu tỉ."
      },
      {
        "index": "2",
        "title": "Biểu diễn số hữu tỉ trên trục số & Số đối",
        "points": [
          "Mỗi số hữu tỉ được biểu diễn bởi một điểm trên trục số nằm ngang.",
          "Hai số hữu tỉ có điểm biểu diễn cách đều gốc 0 và nằm về hai phía của điểm gốc 0 gọi là hai số đối nhau.",
          "Số đối của số hữu tỉ $x$ kí hiệu là $-x$. Ta luôn có: $x + (-x) = 0$ và $-(-x) = x$."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề & SGK Trang 7)",
        "exampleProblem": "Tìm số đối của các số hữu tỉ sau: $\\frac{3}{5}$; $-0,75$; $0$.",
        "exampleSolution": "• Số đối của $\\frac{3}{5}$ là $-\\frac{3}{5}$.\n• Số đối của $-0,75$ là $0,75$ (hay $\\frac{3}{4}$).\n• Số đối của số 0 là chính nó (số 0)."
      },
      {
        "index": "3",
        "title": "So sánh hai số hữu tỉ & Tính chất bắc cầu",
        "points": [
          "Với hai số hữu tỉ bất kì $x, y$, ta luôn có: hoặc $x < y$, hoặc $x > y$, hoặc $x = y$.",
          "Để so sánh hai số hữu tỉ, ta viết chúng dưới dạng hai phân số có cùng mẫu dương rồi so sánh hai tử số: phân số nào có tử lớn hơn thì số hữu tỉ đó lớn hơn.",
          "Tính chất bắc cầu: Nếu $x < y$ và $y < z$ thì $x < z$."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 2 & SGK)",
        "exampleProblem": "So sánh hai số hữu tỉ $x = -0,75$ và $y = -\\frac{5}{6}$.",
        "exampleSolution": "Ta đưa về hai phân số có cùng mẫu dương (mẫu chung là 12):\n• $x = -0,75 = -\\frac{3}{4} = -\\frac{9}{12}$\n• $y = -\\frac{5}{6} = -\\frac{10}{12}$\nVì $-9 > -10$ nên $-\\frac{9}{12} > -\\frac{10}{12}$, suy ra $-0,75 > -\\frac{5}{6}$."
      },
      {
        "index": "4",
        "title": "Phân loại số hữu tỉ (Dương, Âm, Số 0)",
        "points": [
          "Số hữu tỉ lớn hơn 0 gọi là số hữu tỉ dương. Phân số $\\frac{a}{b}$ là số hữu tỉ dương khi $a, b$ cùng dấu.",
          "Số hữu tỉ nhỏ hơn 0 gọi là số hữu tỉ âm. Phân số $\\frac{a}{b}$ là số hữu tỉ âm khi $a, b$ khác dấu.",
          "Số 0 không là số hữu tỉ dương, cũng không là số hữu tỉ âm."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 1)",
        "exampleProblem": "Trong các số sau: $\\frac{2}{3}; -\\frac{4}{7}; 0; \\frac{-5}{-9}; -1,2$, hãy chỉ rõ số nào là số hữu tỉ dương, số nào là số hữu tỉ âm.",
        "exampleSolution": "• Số hữu tỉ dương: $\\frac{2}{3}$ và $\\frac{-5}{-9}$ (vì $\\frac{-5}{-9} = \\frac{5}{9} > 0$).\n• Số hữu tỉ âm: $-\\frac{4}{7}$ và $-1,2$.\n• Số 0 không là số hữu tỉ dương, cũng không là số hữu tỉ âm."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-7.1.1",
        "badge": "Câu 1 - Định nghĩa số hữu tỉ",
        "source": "Tài liệu chuyên đề Toán 7 Chương 1 & SGK Toán 7 Trang 6",
        "question": "Khẳng định nào sau đây là ĐÚNG về định nghĩa số hữu tỉ?",
        "options": [
          "Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\ne 0$",
          "Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{N}$",
          "Mọi số hữu tỉ đều là số tự nhiên",
          "Phân số có mẫu bằng 0 vẫn biểu diễn một số hữu tỉ"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\ne 0$. Tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$."
      },
      {
        "id": "quiz-7.1.2",
        "badge": "Câu 2 - Quan hệ tập hợp",
        "source": "Tài liệu chuyên đề Toán 7 Câu 31 & Bài 2",
        "question": "Khẳng định nào sau đây là SAI?",
        "options": [
          "Số 0 là một số hữu tỉ dương",
          "Số 9 là một số tự nhiên ($9 \\in \\mathbb{N}$)",
          "Số $-2$ là một số nguyên âm ($-2 \\in \\mathbb{Z}$)",
          "Số $-\\frac{10}{11}$ là một số hữu tỉ ($-\\frac{10}{11} \\in \\mathbb{Q}$)"
        ],
        "correctIndex": 0,
        "explanation": "Số 0 không là số hữu tỉ dương và cũng không là số hữu tỉ âm. Do đó khẳng định 'Số 0 là một số hữu tỉ dương' là khẳng định sai."
      },
      {
        "id": "quiz-7.1.3",
        "badge": "Câu 3 - Phân số biểu diễn số hữu tỉ",
        "source": "Tài liệu chuyên đề Toán 7 Bài 3",
        "question": "Trong các phân số sau, phân số nào biểu diễn số hữu tỉ $-\\frac{3}{4}$?",
        "options": [
          "$\\frac{15}{-20}$",
          "$-\\frac{12}{15}$",
          "$\\frac{24}{32}$",
          "$-\\frac{20}{28}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta rút gọn phân số: $\\frac{15}{-20} = \\frac{15 : (-5)}{-20 : (-5)} = -\\frac{3}{4}$. Các phân số còn lại rút gọn không ra $-\\frac{3}{4}$."
      },
      {
        "id": "quiz-7.1.4",
        "badge": "Câu 4 - Số thập phân sang phân số",
        "source": "Tài liệu chuyên đề Toán 7 Câu 27",
        "question": "Trong các phân số sau, phân số nào biểu diễn số hữu tỉ $0,125$?",
        "options": [
          "$\\frac{1}{8}$",
          "$\\frac{1}{4}$",
          "$\\frac{1}{16}$",
          "$\\frac{1}{125}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $0,125 = \\frac{125}{1\\ 000} = \\frac{125 : 125}{1\\ 000 : 125} = \\frac{1}{8}$."
      },
      {
        "id": "quiz-7.1.5",
        "badge": "Câu 5 - Số đối của số hữu tỉ",
        "source": "SGK Toán 7 Tập 1 Trang 7",
        "question": "Số đối của số hữu tỉ $-\\frac{3}{5}$ là:",
        "options": [
          "$\\frac{3}{5}$",
          "$-\\frac{3}{5}$",
          "$-\\frac{5}{3}$",
          "$\\frac{5}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "Số đối của số hữu tỉ $x$ kí hiệu là $-x$. Ta có số đối của $-\\frac{3}{5}$ là $-\\left(-\\frac{3}{5}\\right) = \\frac{3}{5}$."
      },
      {
        "id": "quiz-7.1.6",
        "badge": "Câu 6 - Trục số hữu tỉ",
        "source": "Tài liệu chuyên đề Toán 7 Trang 1 & SGK Trang 7",
        "question": "Trên trục số nằm ngang có chiều từ trái sang phải, điểm biểu diễn số hữu tỉ âm luôn nằm ở vị trí nào so với điểm gốc 0?",
        "options": [
          "Nằm ở bên trái điểm gốc 0",
          "Nằm ở bên phải điểm gốc 0",
          "Trùng với điểm gốc 0",
          "Cách điểm gốc 0 đúng 1 đơn vị"
        ],
        "correctIndex": 0,
        "explanation": "Trên trục số nằm ngang, các số nhỏ hơn 0 (số âm) nằm ở bên trái điểm gốc 0, các số lớn hơn 0 (số dương) nằm ở bên phải điểm gốc 0."
      },
      {
        "id": "quiz-7.1.7",
        "badge": "Câu 7 - Dấu của số hữu tỉ",
        "source": "Tài liệu chuyên đề Toán 7 Câu 28",
        "question": "Cho hai số nguyên $x$ và $y$ ($y \\ne 0$). Nếu $x$ và $y$ trái dấu thì số hữu tỉ $a = \\frac{x}{y}$ là:",
        "options": [
          "$a < 0$",
          "$a > 0$",
          "$a = 0$",
          "$a \\ge 0$"
        ],
        "correctIndex": 0,
        "explanation": "Thương của hai số nguyên trái dấu luôn là một số âm. Do đó nếu $x$ và $y$ trái dấu thì $\\frac{x}{y} < 0$ (số hữu tỉ âm)."
      },
      {
        "id": "quiz-7.1.8",
        "badge": "Câu 8 - So sánh hai số hữu tỉ âm",
        "source": "Tài liệu chuyên đề Toán 7 Câu 5 & Bài 5",
        "question": "So sánh hai số hữu tỉ $x = -\\frac{2}{5}$ và $y = -\\frac{1}{3}$, khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "$x < y$",
          "$x > y$",
          "$x = y$",
          "$|x| < |y|$"
        ],
        "correctIndex": 0,
        "explanation": "Quy đồng mẫu dương với mẫu chung 15: $x = -\\frac{2}{5} = -\\frac{6}{15}$; $y = -\\frac{1}{3} = -\\frac{5}{15}$. Vì $-6 < -5$ nên $-\\frac{6}{15} < -\\frac{5}{15}$, suy ra $x < y$."
      },
      {
        "id": "quiz-7.1.9",
        "badge": "Câu 9 - Số hữu tỉ xen giữa",
        "source": "Tài liệu chuyên đề Toán 7 Câu 30",
        "question": "Số hữu tỉ nào sau đây nằm giữa $-\\frac{1}{4}$ và $\\frac{1}{2}$?",
        "options": [
          "$\\frac{3}{8}$",
          "$\\frac{5}{8}$",
          "$-\\frac{5}{8}$",
          "$-\\frac{2}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "Quy đồng về mẫu chung 8: $-\\frac{1}{4} = -\\frac{2}{8}$ và $\\frac{1}{2} = \\frac{4}{8}$. Vì $-2 < 3 < 4$ nên $-\\frac{2}{8} < \\frac{3}{8} < \\frac{4}{8}$, vậy số $\\frac{3}{8}$ nằm giữa $-\\frac{1}{4}$ và $\\frac{1}{2}$."
      },
      {
        "id": "quiz-7.1.10",
        "badge": "Câu 10 - Vận dụng thực tế",
        "source": "Tài liệu chuyên đề Toán 7 Bài 7 (Trang 2)",
        "question": "Bảng đo độ cao so với mực nước biển của bốn rãnh đại dương: Rãnh Puerto Rico ($-8,6\\text{ km}$), Rãnh Romanche ($-7,7\\text{ km}$), Rãnh Philippine ($-10,5\\text{ km}$), Rãnh Peru – Chile ($-8,0\\text{ km}$). Rãnh đại dương nào có độ cao thấp nhất (sâu nhất)?",
        "options": [
          "Rãnh Philippine ($-10,5\\text{ km}$)",
          "Rãnh Puerto Rico ($-8,6\\text{ km}$)",
          "Rãnh Peru – Chile ($-8,0\\text{ km}$)",
          "Rãnh Romanche ($-7,7\\text{ km}$)"
        ],
        "correctIndex": 0,
        "explanation": "So sánh các số hữu tỉ âm: $-10,5 < -8,6 < -8,0 < -7,7$. Vì $-10,5$ là giá trị nhỏ nhất nên rãnh Philippine có độ cao thấp nhất (sâu nhất so với mực nước biển)."
      }
    ]
  },
  "t7-b2-cong-tru-nhan-chia-so-huu-ti": {
    "id": "t7-b2-cong-tru-nhan-chia-so-huu-ti",
    "lessonNumber": 2,
    "title": "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ",
    "bookChapter": "Chương I: Số hữu tỉ",
    "scenarioTitle": "Tình huống: Nối ống nước và tính toán chi phí",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Cộng và trừ hai số hữu tỉ",
        "points": [
          "Muốn cộng hoặc trừ hai số hữu tỉ, ta viết chúng dưới dạng hai phân số có cùng một mẫu dương rồi áp dụng quy tắc cộng, trừ phân số:",
          "  $\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m}$",
          "  $\\frac{a}{m} - \\frac{b}{m} = \\frac{a - b}{m}$ (với $a, b, m \\in \\mathbb{Z},\\ m > 0$).",
          "Phép cộng số hữu tỉ có đầy đủ các tính chất: giao hoán, kết hợp, cộng với số 0, cộng với số đối."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề & SGK Trang 11)",
        "exampleProblem": "Tính: a) $-\\frac{3}{5} + \\frac{7}{5}$;  b) $\\frac{1}{2} - \\left(-\\frac{1}{3}\\right)$.",
        "exampleSolution": "a) $-\\frac{3}{5} + \\frac{7}{5} = \\frac{-3 + 7}{5} = \\frac{4}{5}$.\nb) Đưa về cùng mẫu dương 6: $\\frac{1}{2} - \\left(-\\frac{1}{3}\\right) = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$."
      },
      {
        "index": "2",
        "title": "Quy tắc chuyển vế",
        "points": [
          "Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu \"+\" đổi thành dấu \"-\" và dấu \"-\" đổi thành dấu \"+\".",
          "Với mọi $x, y, z \\in \\mathbb{Q}$:",
          "  $x + y = z \\Rightarrow x = z - y$",
          "  $x - y = z \\Rightarrow x = z + y$."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Trang 4 & SGK Trang 12)",
        "exampleProblem": "Tìm số hữu tỉ $x$, biết: $x - \\frac{1}{5} = \\frac{3}{10}$.",
        "exampleSolution": "Chuyển số hạng $-\\frac{1}{5}$ từ vế trái sang vế phải và đổi dấu:\n$x = \\frac{3}{10} + \\frac{1}{5} = \\frac{3}{10} + \\frac{2}{10} = \\frac{5}{10} = \\frac{1}{2}$.\nVậy $x = \\frac{1}{2}$."
      },
      {
        "index": "3",
        "title": "Nhân và chia hai số hữu tỉ",
        "points": [
          "Phép nhân hai số hữu tỉ: Ta nhân các tử với nhau và nhân các mẫu với nhau rồi rút gọn: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$ (với $b, d \\ne 0$).",
          "Phép chia hai số hữu tỉ: Ta lấy số bị chia nhân với số nghịch đảo của số chia: $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$ (với $b, c, d \\ne 0$).",
          "Thương của phép chia số hữu tỉ $x$ cho số hữu tỉ $y$ ($y \\ne 0$) gọi là tỉ số của $x$ và $y$, kí hiệu là $\\frac{x}{y}$ hay $x : y$."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 7 & SGK Trang 13)",
        "exampleProblem": "Tính: a) $-\\frac{3}{4} \\cdot \\frac{8}{15}$;  b) $-\\frac{4}{5} : \\left(-\\frac{8}{15}\\right)$.",
        "exampleSolution": "a) $-\\frac{3}{4} \\cdot \\frac{8}{15} = \\frac{-3 \\cdot 8}{4 \\cdot 15} = \\frac{-1 \\cdot 2}{1 \\cdot 5} = -\\frac{2}{5}$.\nb) $-\\frac{4}{5} : \\left(-\\frac{8}{15}\\right) = -\\frac{4}{5} \\cdot \\left(-\\frac{15}{8}\\right) = \\frac{4 \\cdot 15}{5 \\cdot 8} = \\frac{1 \\cdot 3}{1 \\cdot 2} = \\frac{3}{2}$."
      },
      {
        "index": "4",
        "title": "Tính chất phép nhân & Tính giá trị biểu thức hợp lý",
        "points": [
          "Tính chất giao hoán: $a \\cdot b = b \\cdot a$.",
          "Tính chất kết hợp: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$.",
          "Tính chất phân phối của phép nhân đối với phép cộng và phép trừ:",
          "  $a \\cdot (b + c) = a \\cdot b + a \\cdot c$",
          "  $a \\cdot (b - c) = a \\cdot b - a \\cdot c$."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 8 & SGK Trang 14)",
        "exampleProblem": "Tính giá trị biểu thức một cách hợp lý: $A = \\frac{3}{7} \\cdot \\left(-\\frac{5}{9}\\right) + \\frac{3}{7} \\cdot \\left(-\\frac{4}{9}\\right)$.",
        "exampleSolution": "Áp dụng tính chất phân phối, đặt thừa số chung $\\frac{3}{7}$:\n$A = \\frac{3}{7} \\cdot \\left(-\\frac{5}{9} + -\\frac{4}{9}\\right) = \\frac{3}{7} \\cdot \\left(-\\frac{9}{9}\\right) = \\frac{3}{7} \\cdot (-1) = -\\frac{3}{7}$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-7.2.1",
        "badge": "Câu 1 - Cộng hai số hữu tỉ cùng mẫu",
        "source": "Tài liệu chuyên đề Toán 7 Bài 1.1 (Trang 4)",
        "question": "Kết quả của phép tính $-\\frac{3}{5} + \\frac{7}{5}$ là:",
        "options": [
          "$\\frac{4}{5}$",
          "$-\\frac{4}{5}$",
          "$2$",
          "$-\\frac{10}{5}$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng hai phân số cùng mẫu dương: $-\\frac{3}{5} + \\frac{7}{5} = \\frac{-3 + 7}{5} = \\frac{4}{5}$."
      },
      {
        "id": "quiz-7.2.2",
        "badge": "Câu 2 - Trừ hai số hữu tỉ khác mẫu",
        "source": "Tài liệu chuyên đề Toán 7 Câu 6 (Trang 34)",
        "question": "Kết quả của phép tính $-\\frac{1}{4} - \\left(-\\frac{3}{8}\\right)$ là:",
        "options": [
          "$\\frac{1}{8}$",
          "$-\\frac{5}{8}$",
          "$-\\frac{1}{8}$",
          "$-\\frac{1}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $-\\frac{1}{4} - \\left(-\\frac{3}{8}\\right) = -\\frac{2}{8} + \\frac{3}{8} = \\frac{1}{8}$."
      },
      {
        "id": "quiz-7.2.3",
        "badge": "Câu 3 - Định lý quy tắc chuyển vế",
        "source": "Tài liệu chuyên đề Toán 7 Câu 1 (Trang 34)",
        "question": "Với mọi $x, y, z \\in \\mathbb{Q}$ thỏa mãn $x + y = z$. Áp dụng quy tắc chuyển vế thì:",
        "options": [
          "$x = z - y$",
          "$x = y - z$",
          "$x = z + y$",
          "$x = -z - y$"
        ],
        "correctIndex": 0,
        "explanation": "Theo quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó. Do đó $x + y = z \\Rightarrow x = z - y$."
      },
      {
        "id": "quiz-7.2.4",
        "badge": "Câu 4 - Tìm x bằng chuyển vế",
        "source": "Tài liệu chuyên đề Toán 7 Câu 7 (Trang 34)",
        "question": "Giá trị của $x$ thỏa mãn đẳng thức $x - \\frac{1}{5} = \\frac{3}{10}$ là:",
        "options": [
          "$x = \\frac{1}{2}$",
          "$x = \\frac{1}{10}$",
          "$x = \\frac{4}{15}$",
          "$x = -\\frac{2}{15}$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển $-\\frac{1}{5}$ sang vế phải: $x = \\frac{3}{10} + \\frac{1}{5} = \\frac{3}{10} + \\frac{2}{10} = \\frac{5}{10} = \\frac{1}{2}$."
      },
      {
        "id": "quiz-7.2.5",
        "badge": "Câu 5 - Quy tắc dấu ngoặc",
        "source": "Tài liệu chuyên đề Toán 7 Câu 4 (Trang 34)",
        "question": "Bỏ dấu ngoặc biểu thức sau: $x - (-y + z + t)$, ta được kết quả là:",
        "options": [
          "$x + y - z - t$",
          "$x - y + z + t$",
          "$x + y + z + t$",
          "$x - y - z - t$"
        ],
        "correctIndex": 0,
        "explanation": "Khi bỏ dấu ngoặc có dấu \"-\" đằng trước, ta phải đổi dấu tất cả các số hạng trong dấu ngoặc: dấu \"-\" thành \"+\" và dấu \"+\" thành \"-\". Vậy $x - (-y + z + t) = x + y - z - t$."
      },
      {
        "id": "quiz-7.2.6",
        "badge": "Câu 6 - Phép nhân hai số hữu tỉ",
        "source": "Tài liệu chuyên đề Toán 7 Bài 9.1 (Trang 7)",
        "question": "Kết quả của phép tính nhân $-\\frac{1}{3} \\cdot \\left(-\\frac{9}{13}\\right)$ là:",
        "options": [
          "$\\frac{3}{13}$",
          "$-\\frac{3}{13}$",
          "$\\frac{9}{39}$",
          "$-\\frac{1}{13}$"
        ],
        "correctIndex": 0,
        "explanation": "Tích của hai số âm là số dương: $-\\frac{1}{3} \\cdot \\left(-\\frac{9}{13}\\right) = \\frac{1 \\cdot 9}{3 \\cdot 13} = \\frac{3}{13}$."
      },
      {
        "id": "quiz-7.2.7",
        "badge": "Câu 7 - Phép chia hai số hữu tỉ",
        "source": "Tài liệu chuyên đề Toán 7 Bài 10.1 (Trang 7)",
        "question": "Kết quả của phép chia $-\\frac{4}{5} : \\left(-\\frac{8}{15}\\right)$ là:",
        "options": [
          "$\\frac{3}{2}$",
          "$-\\frac{3}{2}$",
          "$\\frac{2}{3}$",
          "$-\\frac{2}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "Thực hiện phép chia: $-\\frac{4}{5} : \\left(-\\frac{8}{15}\\right) = -\\frac{4}{5} \\cdot \\left(-\\frac{15}{8}\\right) = \\frac{4 \\cdot 15}{5 \\cdot 8} = \\frac{3}{2}$."
      },
      {
        "id": "quiz-7.2.8",
        "badge": "Câu 8 - Tính giá trị biểu thức phân phối",
        "source": "Tài liệu chuyên đề Toán 7 Bài 11 (Trang 8)",
        "question": "Giá trị của biểu thức $A = \\frac{3}{7} \\cdot \\left(-\\frac{5}{9}\\right) + \\frac{3}{7} \\cdot \\left(-\\frac{4}{9}\\right)$ là:",
        "options": [
          "$-\\frac{3}{7}$",
          "$\\frac{3}{7}$",
          "$-\\frac{9}{7}$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng tính chất phân phối: $A = \\frac{3}{7} \\cdot \\left(-\\frac{5}{9} + -\\frac{4}{9}\\right) = \\frac{3}{7} \\cdot (-1) = -\\frac{3}{7}$."
      },
      {
        "id": "quiz-7.2.9",
        "badge": "Câu 9 - Số nghịch đảo của số thập phân",
        "source": "Tài liệu chuyên đề Mục 2 (Trang 4) & SGK Toán 7",
        "question": "Số nghịch đảo của số hữu tỉ $-2,5$ là:",
        "options": [
          "$-\\frac{2}{5}$",
          "$\\frac{2}{5}$",
          "$-\\frac{5}{2}$",
          "$\\frac{5}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta viết $-2,5 = -\\frac{5}{2}$. Số nghịch đảo của $-\\frac{5}{2}$ là $-\\frac{2}{5}$ (vì $-\\frac{5}{2} \\cdot \\left(-\\frac{2}{5}\\right) = 1$)."
      },
      {
        "id": "quiz-7.2.10",
        "badge": "Câu 10 - Ứng dụng thực tế nối ống nước",
        "source": "Tài liệu chuyên đề Toán 7 Bài 14 (Trang 8)",
        "question": "Hai đoạn ống nước có chiều dài lần lượt là $0,8\\text{ m}$ và $1,35\\text{ m}$. Người ta nối hai đầu ống để tạo thành một ống mới, phần nối chung dài $\\frac{2}{25}\\text{ m}$ ($0,08\\text{ m}$). Chiều dài đoạn ống nước mới là:",
        "options": [
          "$2,07\\text{ m}$",
          "$2,15\\text{ m}$",
          "$2,23\\text{ m}$",
          "$1,99\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Chiều dài đoạn ống mới bằng tổng chiều dài hai ống trừ đi phần nối chung: $0,8 + 1,35 - 0,08 = 2,07\\text{ m}$."
      }
    ]
  },
  "t7-b3-luy-thua-so-huu-ti": {
    "id": "t7-b3-luy-thua-so-huu-ti",
    "lessonNumber": 3,
    "title": "Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ",
    "bookChapter": "Chương I: Số hữu tỉ",
    "scenarioTitle": "Tình huống: Khối lượng thiên thể và thể tích Rubik",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Lũy thừa với số mũ tự nhiên",
        "points": [
          "Lũy thừa bậc $n$ của số hữu tỉ $x$ (kí hiệu $x^n$) là tích của $n$ thừa số bằng nhau, mỗi thừa số bằng $x$:",
          "  $x^n = \\underbrace{x \\cdot x \\cdots x}_{n\\text{ thừa số}} \\quad (x \\in \\mathbb{Q},\\ n \\in \\mathbb{N},\\ n > 1)$.",
          "  Trong đó: $x$ là cơ số, $n$ là số mũ.",
          "Quy ước: $x^1 = x$; $x^0 = 1$ (với $x \\ne 0$).",
          "Với phân số: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ ($a, b \\in \\mathbb{Z},\\ b \\ne 0$).",
          "Dấu của lũy thừa:",
          "  Lũy thừa bậc chẵn của một số âm luôn là số dương: $(-x)^{2k} > 0$.",
          "  Lũy thừa bậc lẻ của một số âm luôn là số âm: $(-x)^{2k+1} < 0$."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Trang 16 & SGK Trang 18)",
        "exampleProblem": "Tính: a) $\\left(-\\frac{2}{3}\\right)^3$;  b) $\\left(-\\frac{1}{2}\\right)^4$.",
        "exampleSolution": "a) $\\left(-\\frac{2}{3}\\right)^3 = \\frac{(-2)^3}{3^3} = -\\frac{8}{27}$.\nb) $\\left(-\\frac{1}{2}\\right)^4 = \\frac{(-1)^4}{2^4} = \\frac{1}{16}$."
      },
      {
        "index": "2",
        "title": "Nhân và chia hai lũy thừa cùng cơ số",
        "points": [
          "Với số hữu tỉ $x$ và các số tự nhiên $m, n$:",
          "  Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: $x^m \\cdot x^n = x^{m + n}$.",
          "  Khi chia hai lũy thừa cùng cơ số khác 0, ta giữ nguyên cơ số và trừ các số mũ: $x^m : x^n = x^{m - n}$ ($x \\ne 0,\\ m \\ge n$)."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Trang 17 & SGK Trang 19)",
        "exampleProblem": "Tính: a) $\\left(-\\frac{1}{3}\\right)^2 \\cdot \\left(-\\frac{1}{3}\\right)^3$;  b) $(0,5)^6 : (0,5)^4$.",
        "exampleSolution": "a) $\\left(-\\frac{1}{3}\\right)^2 \\cdot \\left(-\\frac{1}{3}\\right)^3 = \\left(-\\frac{1}{3}\\right)^{2+3} = \\left(-\\frac{1}{3}\\right)^5 = -\\frac{1}{243}$.\nb) $(0,5)^6 : (0,5)^4 = (0,5)^{6-4} = (0,5)^2 = 0,25$."
      },
      {
        "index": "3",
        "title": "Lũy thừa của lũy thừa",
        "points": [
          "Khi tính lũy thừa của một lũy thừa, ta giữ nguyên cơ số và nhân hai số mũ:",
          "  $(x^m)^n = x^{m \\cdot n} \\quad (m, n \\in \\mathbb{N})$."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 18 & SGK Trang 19)",
        "exampleProblem": "Viết các biểu thức sau dưới dạng một lũy thừa: a) $\\left[\\left(-\\frac{2}{5}\\right)^3\\right]^2$;  b) Viết $2^{20}$ dưới dạng lũy thừa có số mũ là $5$.",
        "exampleSolution": "a) $\\left[\\left(-\\frac{2}{5}\\right)^3\\right]^2 = \\left(-\\frac{2}{5}\\right)^{3 \\cdot 2} = \\left(-\\frac{2}{5}\\right)^6 = \\left(\\frac{2}{5}\\right)^6$.\nb) Ta có $20 = 4 \\cdot 5$, do đó $2^{20} = (2^4)^5 = 16^5$."
      },
      {
        "index": "4",
        "title": "Lũy thừa của một tích và một thương",
        "points": [
          "Lũy thừa của một tích bằng tích các lũy thừa: $(x \\cdot y)^n = x^n \\cdot y^n$.",
          "Lũy thừa của một thương bằng thương các lũy thừa: $\\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n}$ ($y \\ne 0$)."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 18 & SGK Trang 20)",
        "exampleProblem": "Tính nhanh: a) $A = (0,25)^4 \\cdot 4^4$;  b) $B = \\frac{9^3}{27^2}$.",
        "exampleSolution": "a) Đưa về lũy thừa của một tích: $A = (0,25 \\cdot 4)^4 = 1^4 = 1$.\nb) Đưa về cùng cơ số $3$: $B = \\frac{(3^2)^3}{(3^3)^2} = \\frac{3^6}{3^6} = 1$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-7.3.1",
        "badge": "Câu 1 - Định nghĩa lũy thừa phân số",
        "source": "Tài liệu chuyên đề Toán 7 Bài 4.21 (Trang 17) & SGK Trang 18",
        "question": "Kết quả của phép tính $\\left(-\\frac{2}{3}\\right)^3$ là:",
        "options": [
          "$-\\frac{8}{27}$",
          "$\\frac{8}{27}$",
          "$-\\frac{6}{9}$",
          "$\\frac{6}{9}$"
        ],
        "correctIndex": 0,
        "explanation": "Theo quy tắc lũy thừa phân số: $\\left(-\\frac{2}{3}\\right)^3 = \\frac{(-2)^3}{3^3} = \\frac{-8}{27} = -\\frac{8}{27}$."
      },
      {
        "id": "quiz-7.3.2",
        "badge": "Câu 2 - Lũy thừa số thập phân âm bậc chẵn",
        "source": "Tài liệu chuyên đề Toán 7 Bài 3.3 (Trang 16)",
        "question": "Giá trị của $(-0,5)^2$ là:",
        "options": [
          "$0,25$",
          "$-0,25$",
          "$-1$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "Lũy thừa bậc chẵn của số âm là số dương: $(-0,5)^2 = (-0,5) \\cdot (-0,5) = 0,25$."
      },
      {
        "id": "quiz-7.3.3",
        "badge": "Câu 3 - Nhân hai lũy thừa cùng cơ số",
        "source": "Tài liệu chuyên đề Toán 7 Bài 5.17 (Trang 17)",
        "question": "Thu gọn tích $\\left(-\\frac{1}{2}\\right)^3 \\cdot \\left(-\\frac{1}{2}\\right)^2$ dưới dạng một lũy thừa ta được:",
        "options": [
          "$\\left(-\\frac{1}{2}\\right)^5$",
          "$\\left(-\\frac{1}{2}\\right)^6$",
          "$\\left(-\\frac{1}{4}\\right)^5$",
          "$\\left(-\\frac{1}{4}\\right)^6$"
        ],
        "correctIndex": 0,
        "explanation": "Giữ nguyên cơ số và cộng các số mũ: $\\left(-\\frac{1}{2}\\right)^3 \\cdot \\left(-\\frac{1}{2}\\right)^2 = \\left(-\\frac{1}{2}\\right)^{3+2} = \\left(-\\frac{1}{2}\\right)^5$."
      },
      {
        "id": "quiz-7.3.4",
        "badge": "Câu 4 - Chia hai lũy thừa cùng cơ số",
        "source": "Tài liệu chuyên đề Toán 7 Bài 8.1 (Trang 19)",
        "question": "Kết quả của phép chia $\\left(\\frac{3}{4}\\right)^6 : \\left(\\frac{3}{4}\\right)^4$ là:",
        "options": [
          "$\\frac{9}{16}$",
          "$\\frac{3}{4}$",
          "$\\frac{27}{64}$",
          "$\\frac{81}{256}$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng quy tắc chia hai lũy thừa cùng cơ số: $\\left(\\frac{3}{4}\\right)^6 : \\left(\\frac{3}{4}\\right)^4 = \\left(\\frac{3}{4}\\right)^{6-4} = \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$."
      },
      {
        "id": "quiz-7.3.5",
        "badge": "Câu 5 - Lũy thừa của lũy thừa",
        "source": "Tài liệu chuyên đề Toán 7 Câu 40 (Trang 36)",
        "question": "Viết số $(0,125)^5$ dưới dạng lũy thừa của cơ số $0,5$ là:",
        "options": [
          "$(0,5)^{15}$",
          "$(0,5)^{10}$",
          "$(0,5)^8$",
          "$(0,5)^7$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $0,125 = (0,5)^3$. Khi đó: $(0,125)^5 = \\left[(0,5)^3\\right]^5 = (0,5)^{3 \\cdot 5} = (0,5)^{15}$."
      },
      {
        "id": "quiz-7.3.6",
        "badge": "Câu 6 - Lũy thừa của một tích",
        "source": "Tài liệu chuyên đề Toán 7 Bài 6.1 (Trang 18) & SGK Trang 20",
        "question": "Giá trị của biểu thức $(0,25)^4 \\cdot 4^4$ là:",
        "options": [
          "$1$",
          "$0$",
          "$4$",
          "$16$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng công thức lũy thừa của một tích: $(0,25)^4 \\cdot 4^4 = (0,25 \\cdot 4)^4 = 1^4 = 1$."
      },
      {
        "id": "quiz-7.3.7",
        "badge": "Câu 7 - Đưa về lũy thừa cùng số mũ",
        "source": "Tài liệu chuyên đề Toán 7 Câu 41 (Trang 36)",
        "question": "Viết số $2^{20}$ dưới dạng lũy thừa có số mũ bằng $5$ là:",
        "options": [
          "$16^5$",
          "$8^5$",
          "$32^5$",
          "$64^5$"
        ],
        "correctIndex": 0,
        "explanation": "Ta phân tích số mũ $20 = 4 \\cdot 5$. Khi đó: $2^{20} = (2^4)^5 = 16^5$."
      },
      {
        "id": "quiz-7.3.8",
        "badge": "Câu 8 - Tìm số mũ n",
        "source": "Tài liệu chuyên đề Toán 7 Câu 43 (Trang 36)",
        "question": "Số tự nhiên $n$ thỏa mãn $\\left(\\frac{5}{3}\\right)^n = \\frac{625}{81}$ là:",
        "options": [
          "$n = 4$",
          "$n = 3$",
          "$n = 2$",
          "$n = 5$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $625 = 5^4$ và $81 = 3^4$, suy ra $\\frac{625}{81} = \\left(\\frac{5}{3}\\right)^4$. Do đó $\\left(\\frac{5}{3}\\right)^n = \\left(\\frac{5}{3}\\right)^4 \\Rightarrow n = 4$."
      },
      {
        "id": "quiz-7.3.9",
        "badge": "Câu 9 - Tìm cơ số x mũ chẵn",
        "source": "Tài liệu chuyên đề Toán 7 Câu 44 (Trang 37)",
        "question": "Các giá trị của số hữu tỉ $x$ thỏa mãn $x^2 = \\frac{4}{9}$ là:",
        "options": [
          "$x = \\pm\\frac{2}{3}$",
          "$x = \\frac{2}{3}$",
          "$x = -\\frac{2}{3}$",
          "$x = \\pm\\frac{4}{9}$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ và $\\left(-\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ nên có 2 giá trị thỏa mãn là $x = \\pm\\frac{2}{3}$."
      },
      {
        "id": "quiz-7.3.10",
        "badge": "Câu 10 - Ứng dụng thực tế thể tích lập phương",
        "source": "SGK Toán 7 Bài 1.25 (Trang 21)",
        "question": "Một khối rubik hình lập phương có độ dài cạnh là $5,5\\text{ cm}$. Thể tích của khối rubik đó là:",
        "options": [
          "$166,375\\text{ cm}^3$",
          "$30,25\\text{ cm}^3$",
          "$121\\text{ cm}^3$",
          "$181,5\\text{ cm}^3$"
        ],
        "correctIndex": 0,
        "explanation": "Thể tích hình lập phương có cạnh $a$ là $V = a^3$. Do đó $V = (5,5)^3 = 5,5 \\cdot 5,5 \\cdot 5,5 = 166,375\\text{ cm}^3$."
      }
    ]
  }
};
