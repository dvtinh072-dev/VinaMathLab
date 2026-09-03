@echo off
chcp 65001 >nul
title Tao Loi Tat VinaMath Ngoai Desktop

echo ===================================================================
echo             TẠO LỐI TẮT VINAMATH NGOÀI DESKTOP
echo ===================================================================
echo.
echo [*] Đang tạo biểu tượng lối tắt "VinaMath 2026" trên Desktop...

powershell -Command "$ws = New-Object -ComObject WScript.Shell; $desktopPath = [Environment]::GetFolderPath('Desktop'); $s = $ws.CreateShortcut($desktopPath + '\VinaMath 2026.lnk'); $s.TargetPath = '%~dp0Chay_VinaMath.bat'; $s.WorkingDirectory = '%~dp0'; $s.Description = 'Hệ Thống Học Liệu Toán Học VinaMath 2026'; $s.Save()"

echo.
echo [*] ĐÃ TẠO THÀNH CÔNG!
echo     Bạn có thể ra ngoài màn hình chính (Desktop) và bấm đúp vào icon:
echo     "VinaMath 2026" để mở trang web bất cứ lúc nào!
echo ===================================================================
echo.
pause
