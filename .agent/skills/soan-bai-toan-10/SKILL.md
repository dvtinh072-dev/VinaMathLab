---
name: soan-bai-toan-10
description: >
  Quy chuẩn bắt buộc khi biên soạn bài học, bài tập trắc nghiệm, đúng/sai, trả lời ngắn và đề ôn tập cuối chương môn Toán 10 (Bộ sách Kết nối tri thức và cấu trúc mới Bộ GD&ĐT từ 2025).
  Kích hoạt khi người dùng yêu cầu soạn bài, biên tập bài học, cập nhật bài tập hoặc ra đề ôn tập cuối chương cho Toán 10.
---

# Quy Chuẩn Biên Soạn Bài Học & Đề Ôn Tập Môn Toán 10 (VinaMath)

Tài liệu này tổng hợp toàn bộ các quy tắc, nguyên tắc sư phạm và chỉ đạo bắt buộc từ người dùng đã được thống nhất qua các bài học và bài ôn tập Chương I & Chương II Toán 10.

---

## I. NGUYÊN TẮC BIÊN SOẠN BÀI HỌC TOÁN 10

### 1. Lý thuyết cốt lõi & Trực quan hóa:
- **Lý thuyết tinh gọn**: Chỉ nêu ngắn gọn các định nghĩa, định lý và công thức trọng tâm nhất. Không viết dài dòng hay diễn giải thừa.
- **Biểu diễn khoảng, đoạn**:
  - Tách các khoảng, đoạn, nửa khoảng thành **từng dòng riêng biệt**.
  - Biểu diễn **ngay trên trục số minh họa tương ứng bên dưới** mỗi dòng, không vẽ riêng ở nơi khác để tránh lặp lại.
  - Phép hiệu tập hợp $A \setminus B$ bắt buộc dùng ký hiệu Set-Minus `∖` (U+2216), tuyệt đối không để mất ký tự; phần bù $C_{\mathbb{R}} B$ hiển thị chỉ số dưới $\mathbb{R}$ rõ ràng, dễ nhìn.
- **Ví dụ minh họa**:
  - Phân tích kỹ lưỡng từng ví dụ, các câu $a, b$ bắt buộc **xuống dòng riêng biệt**.
  - Ví dụ về số thực, khoảng đoạn (Ví dụ 1b, 2b): vẽ trục số SVG trực quan.
  - Ví dụ bài toán thực tế (Ví dụ 3): vẽ **Sơ đồ Ven SVG tối giản** (chỉ giữ lại số và biểu tượng như bóng đá ⚽, bóng rổ 🏀, cầu lông 🏸; bỏ hết chữ thừa trong hình).

### 2. Định mức số lượng câu hỏi cho mỗi bài học:
Mỗi bài học Toán 10 bắt buộc có đầy đủ 3 phần thi theo chuẩn Bộ GD&ĐT 2025:
- **Phần I: 20 câu Trắc nghiệm 4 lựa chọn** (Trắc nghiệm nhiều lựa chọn).
- **Phần II: 8 câu Trắc nghiệm Đúng / Sai** (Mỗi câu gồm đủ 4 ý độc lập $a, b, c, d$).
- **Phần III: 12 câu Trắc nghiệm Trả lời ngắn**.
- Đồng thời bổ sung **bộ Luyện thêm AI đối ứng 1-1** (cũng gồm đúng 20 TN, 8 Đ/S, 12 TLN) trong `src/data/grade10AiPracticeData.ts`.

---

## II. QUY CHUẨN BÀI "ÔN TẬP CUỐI CHƯƠNG" TOÁN 10

### 1. Vị trí và Lý thuyết:
- **Vị trí**: Chèn bài "Ôn tập cuối chương" vào ngay sau bài học cuối cùng của chương đó (ví dụ sau Bài 2 trong Chương I), trước khi sang chương mới.
- **Tuyệt đối BỎ phần Kiến thức cần nhớ**: Thiết lập `theorySections: []` để không hiển thị tab lý thuyết. Học sinh khi vào ôn tập chương sẽ vào thẳng làm đề thi thực chiến.

### 2. Cấu trúc 3 Đề ôn tập cuối chương:
Cung cấp **3 đề ôn tập tổng hợp** (Đề 1, Đề 2, Đề 3). Mỗi đề gồm:
- **Phần I: 12 câu Trắc nghiệm 4 lựa chọn** (3,0 điểm)
- **Phần II: 4 câu Trắc nghiệm Đúng / Sai** (4,0 điểm - 16 ý độc lập)
- **Phần III: 6 câu Trắc nghiệm Trả lời ngắn** (3,0 điểm)

### 3. Ma trận phân hóa điểm số chuẩn Bộ GD&ĐT (Thang điểm 10,0):
$$\mathbf{30\%\ \text{Nhận biết (3,0đ)} \quad+\quad 40\%\ \text{Thông hiểu (4,0đ)} \quad+\quad 30\%\ \text{Vận dụng (3,0đ)}} = \mathbf{10,0\ \text{điểm}}$$
- **12 câu TN (3,0đ)**: 6 Nhận biết (1,5đ) + 4 Thông hiểu (1,0đ) + 2 Vận dụng (0,5đ).
- **4 câu Đ/S (4,0đ)**: 6 ý Nhận biết + 8 ý Thông hiểu + 2 ý Vận dụng.
- **6 câu TLN (3,0đ)**: 2 Thông hiểu (1,0đ) + 4 Vận dụng (2,0đ).

### 4. Kỷ luật nguồn đề & Tránh trùng lặp (Cực kỳ quan trọng):
- **Lấy đề từ dự án, không tự ý chế đề, không tự ý thêm bớt ý**.
- **TUYỆT ĐỐI KHÔNG ĐƯỢC LẤY TRÙNG các câu đã lấy trong phần bài tập của mỗi bài** (không lấy câu hỏi từ tab Bài tập của Bài 1, Bài 2,...).
- Lấy từ ngân hàng câu hỏi chuyên sâu / Luyện thêm AI của chương trong dự án (`grade10AiPracticeData.ts`).
- **Không trùng lặp giữa các đề thi với nhau**: Tất cả các câu hỏi giữa Đề 1, Đề 2, Đề 3 phải là các câu hỏi hoàn toàn phân biệt.
