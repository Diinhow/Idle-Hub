# ⚡ Idle Labs — Navegador Multi‑Sessão com Workspaces

<div align="center">
<img src="docs/banner_idlelab.png" width="880" alt="Banner Idle Lab">

![Electron](https://img.shields.io/badge/Electron-31.0.0-47848f?style=for-the-badge&logo=electron)
![License](https://img.shields.io/badge/License-MIT-f1c644?style=for-the-badge&logo=opensource)
![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-0a0d14?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ativo-4caf50?style=for-the-badge)

**Organize contas ilimitadas em workspaces isolados — cada sessão com seus próprios cookies, cache e logins.**

</div>

---

> [!NOTE]
> **📖 Documentação Interativa**:  
> Para visualizar a documentação completa com layout estilizado, acesse o arquivo **[`index.html`](https://diinhow.github.io/Idle-Labs/)** diretamente no seu navegador.

---

## 🖼️ Capturas de Tela

<div align="center">

<img src="docs/modo-simples.png" width="880" alt="Modo Simples: painel com os números das quatro contas">
<img src="docs/userscript.png" width="880" alt="Suporte para UserScript/Tampermonkey">

</div>

> Esta é a versão que roda a partir do código. Não tem executável pronto pra baixar: você pega o código, olha o que ele faz e roda você mesmo. Assim a confiança fica com você, não comigo.

> 🔰 **Nunca mexeu com isso?** Tem um passo a passo pra leigo aqui: **[TUTORIAL.md](docs/TUTORIAL.md)** (ou o arquivo `COMO USAR.txt` dentro da pasta).

> ### 🔒 Seus dados de login ficam só no seu computador
> Login e senha são criptografados no seu próprio PC e nunca saem dele. Nada de servidor, nada de repositório. O código está todo aqui pra você conferir.


## 🚀 Visão Geral

**Idle Labs** é um aplicativo desktop construído com **Electron** que transforma seu navegador em um **gerenciador de sessões múltiplas**. Ele permite criar **workspaces** (ex: "Principal", "Trabalho", "Pessoal") e, dentro de cada um, adicionar quantas **contas** desejar — cada uma com **cookies, cache e logins totalmente isolados**.

Ideal para quem gerencia múltiplos perfis em jogos, redes sociais, e‑commerce ou qualquer serviço que exija login único por sessão.


## ✨ Funcionalidades

| Ícone | Funcionalidade | Descrição |
| :---: | :--- | :--- |
| 📂 | **Workspaces** | Organize suas contas em categorias visuais com ícones, cores e layouts personalizados. Crie, duplique, renomeie e reordene via drag‑and‑drop. |
| 👤 | **Contas Isoladas** | Cada conta roda em uma partição separada do Electron. Cookies, cache, localStorage e sessões são totalmente independentes. |
| 🧩 | **Layouts Flexíveis** | Escolha entre grade automática, painel único, colunas, linhas ou livre para organizar os painéis de cada workspace. |
| 🔄 | **Recarregamento em Segundo Plano** | Troque entre workspaces sem perder o estado das contas — tudo permanece em memória e continua rodando em background. |
| 🔇 | **Controle de Áudio** | Silencie painéis individuais ou todos de uma vez. Ideal para evitar sons indesejados de várias sessões abertas. |
| 📊 | **Métricas em Tempo Real** | Acompanhe CPU, RAM e FPS de cada conta e do processo principal na barra de status. |
| 🔍 | **Barra de URL Universal** | Digite uma URL e ela será aberta em todas as contas abertas do workspace atual com um clique. |
| 💾 | **Persistência Local** | Tudo é salvo automaticamente em `state.json`. Ao reabrir, o aplicativo restaura exatamente onde você parou. |
| 🌐 | **Export/Import** | Exporte toda a configuração de workspaces e contas para um arquivo `.json` e importe em outra máquina. |
| ⌨️ | **Atalhos de Teclado** | Navegue rapidamente entre painéis, recarregue, silencie e muito mais com atalhos intuitivos. |
| 🎨 | **Temas Claro/Escuro** | Escolha o tema que melhor se adapta à sua preferência visual. |

---

## 📦 Instalação

### Pré‑requisitos

Você precisa do Node.js instalado uma vez. Depois é rápido.

**1. Instale o Node.js**
Baixe a versão LTS em [nodejs.org](https://nodejs.org) e instale (é next, next, finish).

**2. Baixe este código**
Clique no botão verde **Code** aqui em cima e depois em **Download ZIP**. Extraia a pasta onde quiser. Quem usa Git pode clonar:
```bash
git clone https://github.com/Diinhow/Idle-Labs.git
cd Idle-Labs
```
## Como rodar (modo desenvolvimento)
```bash
npm install
npm start
```

## Como gerar um instalador (.exe / .dmg / .AppImage)
```bash
npm install
npm run dist
```

## Licença

MIT License. Projeto independente.
Idle Labs is made available under the MIT License — you are free to use it for commercial, non-commercial, closed or open projects.