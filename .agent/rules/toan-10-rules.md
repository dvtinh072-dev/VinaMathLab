# Quy Chuẩn Bắt Buộc Khi Soạn Bài Học & Đề Ôn Tập Toán 10

Mọi tác vụ liên quan đến biên soạn, chỉnh sửa, bổ sung bài học và đề ôn luyện môn Toán 10 trên hệ thống VinaMath bắt buộc phải tuân thủ nghiêm ngặt các điều sau:

## 1. Lý thuyết & Minh họa trực quan:
- Lý thuyết tinh gọn, đúng bản chất toán học.
- Các khoảng, đoạn, nửa khoảng phải **tách thành từng dòng riêng biệt** kèm theo **biểu diễn trục số tương ứng ngay bên dưới**.
- Ký hiệu phép hiệu tập hợp $A \setminus B$ dùng Unicode Set-Minus `∖` (U+2216), phần bù $C_{\mathbb{R}} B$ rõ nét.
- Ví dụ minh họa: Phân tích kỹ, các câu $a, b$ phải **xuống dòng riêng biệt**; bài toán thực tế vẽ **Sơ đồ Ven SVG tối giản** (chỉ giữ lại số và biểu tượng thể thao/môn học, bỏ hết chữ thừa trong hình).

## 2. Định mức bài tập mỗi bài học Toán 10:
- **20 câu Trắc nghiệm 4 lựa chọn** (Phần I).
- **8 câu Đúng / Sai (mỗi câu 4 ý độc lập)** (Phần II).
- **12 câu Trả lời ngắn** (Phần III).
- Bổ sung bộ **Luyện thêm AI đối ứng 1-1** (20 TN, 8 Đ/S, 12 TLN) trong `grade10AiPracticeData.ts`.

## 3. Quy chuẩn bài "Ôn tập cuối chương" Toán 10:
- **Vị trí**: Chèn ngay sau bài học cuối của chương (trước chương tiếp theo).
- **Bỏ phần Kiến thức cần nhớ**: Thiết lập `theorySections: []`, vào thẳng các đề ôn tập.
- **Cung cấp 3 đề ôn luyện tổng hợp** (Đề 1, Đề 2, Đề 3).
- **Cấu trúc mỗi đề**:
  - 12 câu Trắc nghiệm 4 lựa chọn (3,0 điểm).
  - 4 câu Đúng / Sai (4,0 điểm - 16 ý độc lập).
  - 6 câu Trả lời ngắn (3,0 điểm).
  - Ma trận điểm chuẩn Bộ GD&ĐT: **30% Nhận biết (3,0đ) • 40% Thông hiểu (4,0đ) • 30% Vận dụng (3,0đ)**.
- **Kỷ luật dữ liệu**:
  - Lấy đề từ dự án, không tự ý chế đề, không tự ý thêm bớt ý.
  - **TUYỆT ĐỐI KHÔNG ĐƯỢC LẤY TRÙNG các câu đã có trong phần bài tập của mỗi bài** (lấy từ nguồn luyện tập AI chuyên sâu của chương).
  - Không trùng lặp giữa các đề với nhau (cả 3 đề đều là các câu hỏi phân biệt 100%).
