@echo off
chcp 65001 >nul
:: Kiem tra quyen Admin
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Dang yeu cau quyen Administrator...
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

title Don Dep Windows Update Cache
cls
echo =================================================================
echo        TIEN TRINH DON DEP WINDOWS UPDATE CACHE (~6.1 GB)
echo =================================================================
echo.
echo [1/3] Dang tam dung dich vu Windows Update va BITS...
net stop wuauserv >nul 2>&1
net stop bits >nul 2>&1
net stop dosvc >nul 2>&1

echo [2/3] Dang xoa cac tep cap nhat cu trong SoftwareDistribution\Download...
del /f /s /q "%windir%\SoftwareDistribution\Download\*.*" >nul 2>&1
for /d %%p in ("%windir%\SoftwareDistribution\Download\*") do rmdir /s /q "%%p" >nul 2>&1

echo [3/3] Dang khoi dong lai dich vu Windows Update...
net start wuauserv >nul 2>&1
net start bits >nul 2>&1

echo.
echo =================================================================
echo   HOAN TAT XOA THANH CONG! DA GIAI PHONG DUNG LUONG BO DEM.
echo =================================================================
echo.
pause
