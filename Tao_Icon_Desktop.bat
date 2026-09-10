@echo off
chcp 65001 >nul
title Tao Loi Tat VinaMath 2026 Ngoai Desktop

echo ===================================================================
echo             TAO LOI TAT VINAMATH NGOAI MAN HINH CHINH (DESKTOP)
echo ===================================================================
echo.
echo [*] Dang tao bieu tuong loi tat VinaMath 2026 ngoai Desktop...

cscript //nologo "%~dp0public\create_shortcut.vbs" "%~dp0"

echo.
echo [*] DA TAO LOI TAT THANH CONG!
echo     Ban hay ra ngoai man hinh Desktop de thay icon "VinaMath 2026"
echo     voi logo thuong hieu VinaMath 2026 sac net!
echo ===================================================================
echo.
pause
