@echo off
chcp 65001 >nul
title VinaMath 2026 - May Chu Tu Dong

echo ===================================================================
echo             HỆ THỐNG HỌC LIỆU TOÁN HỌC VINAMATH 2026
echo ===================================================================
echo.
echo [*] 1. Kiểm tra và giải phóng cổng 3000 nếu có tiến trình cũ bị kẹt...

for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do (
    echo     - Đang tắt tiến trình cũ chiếm cổng (PID: %%a)...
    taskkill /F /PID %%a >nul 2>&1
)

echo [*] 2. Khởi động máy chủ phát triển VinaMath (Next.js)...
cd /d "%~dp0"
start "VinaMath Next.js Server (Giữ cửa sổ này để duy trì máy chủ)" cmd /k "npm run dev"

echo [*] 3. Đang đợi máy chủ hoàn tất khởi động (5 giây)...
timeout /t 5 /nobreak >nul

echo [*] 4. Tự động mở trình duyệt web tới bài học...
start http://localhost:3000/hoc-tap/lop-10/t10-b1-menh-de

echo.
echo ===================================================================
echo  THÀNH CÔNG! Máy chủ đang chạy tại: http://localhost:3000
echo  Lưu ý: Không đóng cửa sổ dòng lệnh máy chủ để web không bị ngắt.
echo ===================================================================
timeout /t 3 >nul
