#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1
if ! command -v npm >/dev/null 2>&1; then
  echo "O Node.js nao esta instalado. Baixe a versao LTS em https://nodejs.org"
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "Primeira vez: instalando o necessario. Isso pode levar alguns minutos..."
  npm install
fi
echo "Abrindo o IdleHub..."
# O erro do Electron precisa aparecer: descartar o stderr escondia a causa quando o app
# nao abria (o proprio app ja silencia o spam do Chromium via log-level).
npm start
code=$?
if [ $code -ne 0 ]; then
  echo
  echo "O IdleHub fechou com erro (codigo $code)."
  echo "Se a mensagem acima falar de sandbox ou namespace, tente:  npm start -- --no-sandbox"
  echo "Se falar de biblioteca faltando (libgbm, libnss3, libatk...), instale os pacotes que o seu sistema pedir."
  read -r -p "Enter para fechar..." _
fi
