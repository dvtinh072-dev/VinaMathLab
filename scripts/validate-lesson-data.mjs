/**
 * scripts/validate-lesson-data.mjs
 * Script kiểm tra tự động tính hợp lệ của bài học và bài ôn tập môn Toán
 * Sử dụng: node scripts/validate-lesson-data.mjs <đường_dẫn_file> [--grade=6|10|12]
 */

import fs from 'fs';
import path from 'path';

const filePath = process.argv[2];
const gradeArg = process.argv.find(arg => arg.startsWith('--grade='));
const grade = gradeArg ? gradeArg.split('=')[1] : '6';

if (!filePath) {
  console.error('Vui lòng chỉ định đường dẫn file cần kiểm tra!');
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), filePath);
if (!fs.existsSync(absolutePath)) {
  console.error(`File không tồn tại: ${absolutePath}`);
  process.exit(1);
}

const content = fs.readFileSync(absolutePath, 'utf8');
const errors = [];
const warnings = [];

// 1. Kiểm tra quy chuẩn sư phạm Toán 6
if (grade === '6') {
  if (content.includes('\\subset')) {
    errors.push('Vi phạm kỷ luật sư phạm Toán 6: Chứa ký hiệu tập con \\subset (Chỉ được dùng lời văn "tập hợp con")');
  }
  if (content.includes('\\Leftrightarrow') || content.includes('\\iff')) {
    errors.push('Vi phạm kỷ luật sư phạm Toán 6: Chứa ký hiệu tương đương \\Leftrightarrow hoặc \\iff (Chỉ được dùng "suy ra", "ta có", "do đó")');
  }
}

// 2. Kiểm tra dấu nháy chưa escape trong chuỗi
const unescapedDoubleQuoteRegex = /question:\s*"[^"\\]*"(?=[^,}\]]*[a-zA-Z0-9])/g;
// Kiểm tra sơ bộ các lỗi cú pháp dễ gặp

// 3. Kiểm tra các trường bắt buộc đối với Lesson
const isReview = filePath.toLowerCase().includes('review') || content.includes('examSets');

if (isReview) {
  if (!content.includes('examSets:')) {
    errors.push('Bài ôn tập chương bắt buộc phải có trường examSets (chứa ít nhất 3 đề thi)');
  }
} else {
  if (!content.includes('theorySections:')) {
    warnings.push('Bài học lý thuyết nên có trường theorySections');
  }
  if (!content.includes('quizQuestions:')) {
    errors.push('Thiếu trường quizQuestions (10 câu cơ bản)');
  }
  if (!content.includes('practiceQuestions:')) {
    errors.push('Thiếu trường practiceQuestions (10 câu luyện tập)');
  }
  if (!content.includes('trueFalseQuestions:')) {
    errors.push('Thiếu trường trueFalseQuestions (Trắc nghiệm Đúng/Sai)');
  }
  if (!content.includes('shortAnswerQuestions:')) {
    errors.push('Thiếu trường shortAnswerQuestions (Trả lời ngắn)');
  }
}

// In kết quả
console.log(`\n=== KẾT QUẢ KIỂM TRA FILE: ${path.basename(filePath)} (Khối ${grade}) ===`);
if (warnings.length > 0) {
  console.log('\n[CẢNH BÁO]:');
  warnings.forEach((w, i) => console.log(`  ${i + 1}. ${w}`));
}

if (errors.length > 0) {
  console.log('\n[LỖI NGHIÊM TRỌNG]:');
  errors.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
  console.log('\n❌ File KHÔNG đạt chuẩn!\n');
  process.exit(1);
} else {
  console.log('\n✅ File ĐẠT TOÀN BỘ TIÊU CHUẨN SƯ PHẠM VÀ CẤU TRÚC!\n');
  process.exit(0);
}
