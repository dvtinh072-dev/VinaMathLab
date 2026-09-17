# Quy Chuẩn Bắt Buộc Về Bảng Biến Thiên & Vẽ Đồ Thị Hàm Số

Tất cả các tác vụ biên soạn, cập nhật bài học, ngân hàng câu hỏi, bài tập cơ bản và luyện tập AI từ lớp 10, 11, 12 trên hệ thống VinaMath **BẮT BUỘC PHẢI TUÂN THỦ NGHIÊM NGẶT** các quy định hình học và đồ họa sau đây:

---

## 1. QUY CHUẨN VỀ BẢNG BIẾN THIÊN (BBT) & BẢNG XÉT DẤU

### 1.1. Cấm tuyệt đối mô tả bằng lời trừu tượng:
- **KHÔNG ĐƯỢC** dùng câu chữ mô tả biến thiên như: *"hàm số có đồ thị đi lên từ trái sang phải trên khoảng...", "đi xuống từ cực đại về cực tiểu..."* gây khó hiểu, tối nghĩa cho học sinh.
- Mọi câu hỏi liên quan đến nhận biết khoảng đơn điệu, cực trị, giá trị lớn nhất - nhỏ nhất từ hàm số trừu tượng **BẮT BUỘC PHẢI VẼ BẢNG BIẾN THIÊN HOẶC ĐỒ THỊ TRỰC QUAN BẰNG SVG**.

### 1.2. Cấu trúc chuẩn mực của Bảng biến thiên SVG:
- **Khung viền**: Khung chữ nhật bao quanh sắc nét, đường kẻ dọc phân cách cột nhãn ($x, y', y$) và các đường kẻ ngang phân tách từng dòng.
- **Dòng $x$**: Căn chỉnh rõ ràng $-\infty$, các điểm nghiệm $x_1, x_2...$, và $+\infty$.
- **Dòng $y'$**:
  - Dấu đạo hàm dương ($+$) hiển thị màu xanh `#10b981`.
  - Dấu đạo hàm âm ($-$) hiển thị màu đỏ/hồng `#f43f5e`.
  - Nghiệm của đạo hàm bằng $0$ đặt thẳng hàng bên dưới điểm nghiệm $x$.
  - Điểm không xác định dùng dấu gạch kép song song ($\|$).
- **Dòng $y$**:
  - Mũi tên nét mảnh có đầu nhọn (`marker-end`) chỉ đúng chiều biến thiên.
  - Mũi tên đi lên màu xanh dương `#38bdf8`, mũi tên đi xuống màu hồng/đỏ `#f43f5e`.
  - Vị trí giá trị cực đại ($y_{\text{CĐ}}$) phải đặt ở phía trên cao, giá trị cực tiểu ($y_{\text{CT}}$) phải đặt ở phía dưới thấp.

---

## 2. QUY CHUẨN VỀ VẼ ĐỒ THỊ HÀM SỐ & HỆ TRỤC TỌA ĐỘ $Oxy$

### 2.1. Đơn vị trên hai trục $Ox$ và $Oy$ BẮT BUỘC PHẢI BẰNG NHAU 100% ($u_x = u_y = 1:1$):
- Hệ trục tọa độ Decartes trong SGK toán học là **hệ trục trực chuẩn**. Do đó:
  $$\text{Độ dài } 1 \text{ đơn vị trên trục } Ox \equiv \text{Độ dài } 1 \text{ đơn vị trên trục } Oy = u \text{ (pixels)}$$
- **TUYỆT ĐỐI KHÔNG ĐƯỢC CO GIÃN 2 TRỤC KHÁC NHAU** làm bẹp hình hoặc méo tỉ lệ hình học (ví dụ: cấm đặt $u_x = 40\text{px}$ mà $u_y = 15\text{px}$).
- Khi thể hiện điểm cực trị như $(1; -4)$, khoảng cách từ $0$ đến $-4$ trên trục tung **bắt buộc phải dài gấp đúng 4 lần** khoảng cách từ $0$ đến $1$ trên trục hoành.

### 2.2. Đồ thị BẮT BUỘC PHẢI ĐI QUA CHÍNH XÁC CÁC ĐIỂM MỐC:
- **Giao điểm với $Ox$**: Đồ thị phải cắt ngang qua đúng tâm điểm chấm tròn đánh dấu trên trục hoành.
- **Giao điểm với $Oy$**: Đồ thị phải cắt đúng giá trị $y(0)$ trên trục tung.
- **Đỉnh / Cực trị**: Đáy hoặc đỉnh của đường cong phải chạm chính xác vào tâm điểm cực trị $(x_0, y_0)$, không được nằm lơ lửng bên trên hay bên dưới.
- **Sử dụng toán học chính xác**: Khi vẽ Parabol bằng Bézier bậc hai (`path d="M P0 Q P1 P2"`), điểm kiểm soát $P_1$ phải được tính toán chính xác theo giải tích:
  $$Y_{P_1} = 2 Y_{\text{đỉnh}} - \frac{Y_{P_0} + Y_{P_2}}{2}$$
  để sai số tọa độ của toàn bộ đường cong bằng đúng $0.000\text{px}$.

### 2.3. Vạch chia đơn vị (Tick Marks) & Lưới tọa độ ô vuông (Grid):
- **Vạch chia đơn vị**: Cả hai trục $Ox$ và $Oy$ phải có các vạch chia nhỏ đều đặn đúng khoảng cách $1$ đơn vị ($u$), giúp học sinh và giáo viên nhận biết ngay tỉ lệ trực chuẩn 1:1.
- **Lưới tọa độ ô vuông**: Khuyến khích có lưới ô vuông $u \times u$ mờ nhẹ (`stroke="#1e293b"`) làm nền để các điểm mốc tọa độ nằm khớp hoàn toàn vào các mắt lưới như trên Geogebra.
- **Đường dóng tọa độ cực trị**: Đường dóng từ cực trị $(x_0, y_0)$ vuông góc vào trục $Ox$ và $Oy$ phải dùng nét đứt (`stroke-dasharray="3 3"`), có chấm tròn nhỏ tại giao điểm trên trục và nhãn số rõ ràng.