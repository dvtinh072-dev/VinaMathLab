@echo off
chcp 65001 >nul
title Cai Dat Tu Dong Khoi Dong VinaMath Cung Windows

echo ===================================================================
echo     CÀI ĐẶT TỰ ĐỘNG KHỞI CHẠY MÁY CHỦ VINAMATH CÙNG WINDOWS
echo ===================================================================
echo.
echo Khi bật tính năng này, mỗi khi bạn mở máy tính, máy chủ VinaMath sẽ
echo tự động chạy ngầm sẵn ở cổng 3000, không bao giờ lo bị tắt!
echo.

set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "TARGET_BAT=%~dp0Chay_VinaMath.bat"
set "VBS_FILE=%STARTUP_FOLDER%\Start_VinaMath_Background.vbs"

echo Set WshShell = CreateObject("WScript.Shell") > "%VBS_FILE%"
echo WshShell.CurrentDirectory = "%~dp0" >> "%VBS_FILE%"
echo WshShell.Run "cmd /c ""%TARGET_BAT%""", 0, False >> "%VBS_FILE%"

echo [*] Đã tạo tiến trình tự động khởi động tại:
echo     "%VBS_FILE%"
echo.
echo ===================================================================
echo  ĐÃ CÀI ĐẶT THÀNH CÔNG!
echo  Từ nay mỗi khi bật máy tính, web VinaMath sẽ luôn luôn sẵn sàng.
echo ===================================================================
pause
