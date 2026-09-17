---
name: soan-bai-toan-12
description: >
  Quy chuẩn bắt buộc khi biên soạn bài học, bài tập trắc nghiệm, đúng/sai, trả lời ngắn và vẽ hình đồ thị, bảng biến thiên môn Toán 12 (Chương trình GDPT 2018 Kết nối tri thức và định dạng thi tốt nghiệp THPT, ĐGNL từ 2025).
  Kích hoạt khi người dùng yêu cầu soạn bài, cập nhật bài tập, vẽ bảng biến thiên hoặc vẽ đồ thị hàm số cho Toán 12.
---

# Quy Chuẩn Biên Soạn Bài Học & Bài Tập Môn Toán 12 (VinaMath)

Tài liệu này tổng hợp toàn bộ các quy tắc, nguyên tắc sư phạm và chỉ đạo bắt buộc từ người dùng đã được chuẩn hóa qua Bài 1 Toán 12:

---

## I. NGUYÊN TẮC HÌNH HỌC VÀ TRỰC QUAN HÓA (BBT & ĐỒ THỊ)

### 1. Bảng biến thiên (BBT) & Bảng xét dấu:
- **Tuyệt đối không mô tả bằng lời trừu tượng** (cấm các câu *"đồ thị đi lên, đi xuống..."*). Mọi câu hỏi nhận biết tính đơn điệu, cực trị, tiệm cận bắt buộc phải có **Bảng biến thiên SVG trực quan**.
- **Khung bảng chuẩn mực SGK**: Viền chữ nhật bao quanh, đường kẻ dọc phân cách cột nhãn, đường kẻ ngang phân tách dòng $x, y', y$.
- **Mũi tên biến thiên**: Dùng `marker-end` nhọn sắc nét, mũi tên đi lên (`#38bdf8`) từ $-\infty$ lên $y_{\text{CĐ}}$, mũi tên đi xuống (`#f43f5e`) về $y_{\text{CT}}$.

### 2. Vẽ đồ thị hàm số & Hệ trục tọa độ $Oxy$:
- **Độ dài đơn vị hai trục BẮT BUỘC PHẢI GIỐNG NHAU 100% (tỉ lệ trực chuẩn 1:1, $u_x = u_y = u$)**: Tuyệt đối không co giãn 2 trục khác nhau làm méo/bẹp hình học. Đoạn $[0; -4]$ trên $Oy$ phải dài gấp đúng 4 lần đoạn $[0; 1]$ trên $Ox$.
- **Đồ thị phải đi qua CHÍNH XÁC CÁC ĐIỂM MỐC**: Chấm điểm mốc tại đâu (giao điểm $Ox$, đỉnh, giao điểm $Oy$), đường cong phải đi xuyên qua đúng tâm điểm đó, sai số $0.000\text{px}$.
- **Vạch chia đơn vị (Tick Marks)**: Bắt buộc có các vạch chia đơn vị nhỏ đều đặn đúng khoảng cách $u$ trên cả 2 trục.
- **Lưới ô vuông trực chuẩn**: Có lưới $u \times u$ mờ nhẹ nền sau giúp kiểm tra đối chiếu trực quan từng tọa độ.

---

## II. CẤU TRÚC ĐỊNH MỨC BÀI TẬP BÀI HỌC TOÁN 12
Mỗi bài học Toán 12 có 2 kho bài tập đối ứng 1-1:
- **Phần I: 12 câu Trắc nghiệm 4 lựa chọn**.
- **Phần II: 4 câu Trắc nghiệm Đúng / Sai (16 ý độc lập)**.
- **Phần III: 8 câu Trắc nghiệm Trả lời ngắn**.
- **Kho Luyện thêm AI (AI Practice)**: Cấu trúc số lượng và ma trận đối ứng 1-1, thay số và tình huống thực tế mới, lưu tại `src/data/grade12AiPracticeData.ts`.

---

## III. KỶ LUẬT DỮ LIỆU & KIỂM ĐỊNH TOÁN HỌC
1. Không được trùng dạng câu hỏi trong cùng một bài học.
2. Đáp án trả lời ngắn phải khai báo đầy đủ mảng `acceptableAnswers`.
3. Mọi công thức Toán viết đúng chuẩn KaTeX, kiểm tra qua `audit_katex_g12.js` đạt 0 lỗi trước khi build.