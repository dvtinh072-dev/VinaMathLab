# 📚 CHIẾN LƯỢC XÂY DỰNG VÀ PHÁT TRIỂN HỆ THỐNG NGÂN HÀNG ĐỀ TOÁN HỌC (VINAMATHLAB)

> **Tài liệu đúc kết kinh nghiệm từ Khối 10 & Lộ trình nhân rộng toàn diện cho các khối 6, 7, 8, 9, 11, 12.**  
> **Cập nhật ngày:** 14/09/2026 | **Phiên bản:** v1.0.0

---

## I. TỔNG KẾT KẾT QUẢ KHỐI 10

### 1. Dữ liệu câu hỏi độc quyền
- **Tổng số câu hỏi được số hóa:** **813 câu hỏi** chất lượng cao.
- **Tỉ lệ trùng lặp:** **0.0%** (Được kiểm tra đối chiếu qua bộ băm Fingerprint của 362 câu hỏi trong `grade10LessonsData.ts` và `grade10AiPracticeData.ts`).
- **Phân bổ theo 10 chương chuẩn SGK Kết nối tri thức:**
  1. Chương I: Mệnh đề và tập hợp (**298 câu**)
  2. Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (**31 câu**)
  3. Chương III: Hệ thức lượng trong tam giác (**184 câu**)
  4. Chương IV: Vectơ (**68 câu**)
  5. Chương V: Các số đặc trưng đo xu thế trung tâm và độ phân tán (**48 câu**)
  6. Chương VI: Hàm số bậc hai và đồ thị (**39 câu**)
  7. Chương VII: Phương pháp tọa độ trong mặt phẳng (**57 câu**)
  8. Chương VIII: Đại số tổ hợp (**51 câu**)
  9. Chương IX: Tính xác suất cổ điển (**27 câu**)
  10. Chương X: Chuyên đề học tập Toán 10 (**10 câu**)

### 2. Kiến trúc lưu trữ Server-side On-demand siêu nhẹ
- **Vấn đề đã giải quyết:** Không nhúng toàn bộ 813 câu hỏi vào client bundle (gây chậm web và lộ đề).
- **Giải pháp:**
  - `src/data/bank/grade10/catalog.json`: Chỉ nặng **~2.8 KB**, chứa mục lục và thống kê số lượng câu hỏi theo chương, mức độ, dạng bài.
  - Các file dữ liệu từng chương: `c1-menh-de-va-tap-hop.json`, `c2-...json`,... được lưu trên server và chỉ nạp vào RAM khi có yêu cầu rút đề (On-demand).
  - Web client chỉ nhận đúng đề thi hoàn chỉnh (15 - 25 KB) sau khi bốc ngẫu nhiên.

### 3. Tính năng Rút đề thông minh trực tiếp trên Web
- Tích hợp trực tiếp tại màn hình **Quản lý Đề thi của Giáo viên** (`/giao-vien`).
- **3 Mẫu cấu hình đề thi chuẩn Bộ GD&ĐT 2025:**
  - ⚡ **15 Phút:** 10 câu Trắc nghiệm 4 lựa chọn (5 NB, 3 TH, 2 VD).
  - ⏱️ **45 Phút (Định kỳ / 1 tiết):** 12 Trắc nghiệm + 2 Đúng/Sai + 4 Trả lời ngắn (6 NB, 6 TH, 4 VD, 2 VDC).
  - 🎯 **90 Phút (Học kỳ - Chuẩn Công văn 7991):** 12 Trắc nghiệm + 4 Đúng/Sai + 6 Trả lời ngắn (7 NB, 7 TH, 5 VD, 3 VDC).
- **Lọc theo phạm vi kiến thức:** Toàn bộ chương trình hoặc lựa chọn từng chương linh hoạt.
- **Tùy chỉnh phân bổ mức độ:** Thanh cân bằng tự động theo tỉ lệ vàng 35% (NB) - 35% (TH) - 20% (VD) - 10% (VDC).

---

## II. QUY TRÌNH TỰ ĐỘNG BỔ SUNG CÂU HỎI KHI CÓ TÀI LIỆU MỚI

Khi Thầy/Cô bổ sung tài liệu mới vào dự án (ví dụ các thư mục `1. LỚP 10_BỘ 1`, `Toan_10`, `Tai_lieu_moi/`...):

1. Hệ thống tự động quét và nhận diện file Word (.docx) hoặc PDF mới.
2. Bộ chuẩn hóa bóc tách nội dung, chuyển công thức Toán về chuẩn KaTeX LaTeX.
3. Bộ lọc chống trùng lặp (Anti-Duplication Filter) đối chiếu với kho câu hỏi hiện có.
4. Phân loại câu hỏi vào từng chương và mức độ tương ứng.
5. Ghi vào file JSON phân mảnh và tự động cập nhật lại `catalog.json`.
6. Giáo viên trên Web lập tức thấy số lượng câu hỏi mới trong bảng rút đề.

---

## III. LỘ TRÌNH NHÂN RỘNG CHO CÁC KHỐI TOÁN CÒN LẠI

| Giai đoạn | Khối lớp | Nguồn tài liệu dự kiến | Mục tiêu số lượng câu hỏi | Trạng thái |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | **Toán 10** | `1. LỚP 10_BỘ 1`, `Toan_10` | **813 câu** | **Hoàn thành 100%** |
| **P2** | **Toán 6** | Sách KNTT & Bộ 10 câu luyện thêm | 500 - 600 câu | Sẵn sàng triển khai |
| **P3** | **Toán 11** | Tài liệu Giữa kỳ & Cuối kỳ KNTT | 800 - 1000 câu | Kế hoạch tiếp theo |
| **P4** | **Toán 12** | Đề minh họa & Thi tốt nghiệp BGD | 1200 - 1500 câu | Kế hoạch tiếp theo |
| **P5** | **Toán 7, 8, 9** | Sách mới & Đề thi vào 10 | 600 câu / khối | Hoàn thiện toàn diện |
