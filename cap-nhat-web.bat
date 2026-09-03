@echo off
chcp 65001 > nul
set "PATH=C:\Program Files\Git\cmd;%PATH%"
echo ===================================================
echo     ĐANG TỰ ĐỘNG CẬP NHẬT VinaMathLab LÊN VERCEL
echo ===================================================
git add .
set /p msg="Nhap noi dung cap nhat (hoac an Enter de dung mac dinh): "
if "%msg%"=="" set msg=Cap nhat tinh nang moi
git commit -m "%msg%"
git push
echo.
echo ===================================================
echo   ĐÃ ĐẨY LÊN GITHUB! Vercel dang tu dong build...
echo ===================================================
pause
