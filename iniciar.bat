@echo off
cd /d "%~dp0"
where npm >nul 2>nul || (
  echo.
  echo O Node.js nao esta instalado. Baixe a versao LTS em https://nodejs.org
  echo Depois de instalar, feche e abra este arquivo de novo.
  echo.
  pause
  exit /b
)
if not exist node_modules (
  echo Primeira vez: instalando o necessario. Isso pode levar alguns minutos...
  call npm install
)
echo Abrindo o IdleLabs...
rem 2>nul descarta os logs do Chromium (ex.: STUN/WebRTC) que so poluem o terminal
call npm start 2>nul
