@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  start "" "%~dp0Winter-Station-离线单文件.html"
  exit /b
)
node server.mjs --open
pause
