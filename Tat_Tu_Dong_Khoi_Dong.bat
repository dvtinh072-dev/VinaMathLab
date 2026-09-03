@echo off
chcp 65001 >nul
title Tat Tu Dong Khoi Dong VinaMath

set "VBS_FILE=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\Start_VinaMath_Background.vbs"

if exist "%VBS_FILE%" (
    del "%VBS_FILE%"
    echo [*] Đã tắt chế độ tự động khởi động VinaMath cùng Windows thành công!
) else (
    echo [*] Chế độ tự động khởi động hiện không được bật.
)
echo.
pause
