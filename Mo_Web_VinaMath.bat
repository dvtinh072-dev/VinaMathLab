@echo off
title VinaMath 2026 - Khoi Dong May Chu & Mo Trinh Duyet
color 0B

echo ========================================================
echo         NEN TANG TOAN HOC TUONG TAC VINAMATH 2026
echo ========================================================
echo.
echo [*] Dang kiem tra va khoi chay trinh duyet...
start http://localhost:3000/

echo [*] Dang khoi chay may chu Next.js dev server...
cd /d "E:\Anti"
call npm run dev

pause
