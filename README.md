# Multi Conta Manager (Electron)

Um app de desktop (Windows/Mac/Linux) para gerenciar **várias contas/sessões de navegador em grade**, organizadas em workspaces: cada conta roda numa sessão isolada (cookies e login separados), com grid automático, estatísticas reais de CPU/RAM e configurações persistentes.

## O que já funciona

### Workspaces
- Clique no "+" da coluna de ícones e o workspace já é criado na hora (sem preencher nada antes).
- **Clique direito no ícone do workspace** abre um menu: Editar workspace, Duplicar workspace, Excluir workspace.
- Modal "Editar workspace": nome, cor (7 opções), ícone (12 ícones em SVG — nenhum emoji), URL padrão (usada ao criar novas contas nesse workspace) e Layout.
- **5 layouts por workspace**: Grade automática, Painel único, Colunas, Linhas e Livre.
- **Duplicar workspace**: cria uma cópia com a mesma cor/ícone/layout/URL padrão e uma cópia de cada conta (com sessão própria e independente, inicialmente fechada).
- **Excluir workspace**: sempre precisa sobrar pelo menos um; a opção fica desabilitada nesse caso.

### Contas
- Sessões totalmente isoladas por conta (`partition` própria) — pode logar com contas diferentes no mesmo site sem misturar cookies.
- Contas "Closed" x "Online": fechar só esconde a aba (a sessão continua salva); "Excluir conta" remove de vez.
- Menu de contexto por conta (clique direito): Recarregar, Ir para a URL padrão, Silenciar painel, Fechar conta, Editar conta, Duplicar conta, Limpar dados da sessão, Excluir conta.
- Estado vazio ("Nenhuma conta aberta") com cartão explicativo e botão "+ Adicionar primeira conta".

### Interface
- **Sem a barra de menu nativa** (File/Edit/View/Window/Help) — janela totalmente sem moldura (`frame: false`), com titlebar própria (minimizar/maximizar/fechar).
- Barra lateral recolhível (ícone dedicado + tira para expandir de novo).
- Paleta de cores baseada no arquivo `.css` de referência que você enviou: fundo `#070a12`, superfícies `#0e1424`, bordas `#232c44`, texto `#eef1f8`/`#9aa5bd`, acento principal âmbar `#fbbf24`, acento secundário violeta `#7c6cff`, sucesso `#34d399`, perigo `#f87171`. (Só reaproveitei os valores de cor — nenhum seletor/estrutura CSS da Idle Labs foi copiado; veja a nota mais abaixo.)
- Drag-and-drop para reordenar contas e workspaces.

### Configurações (novo)
Ícone de engrenagem na coluna de ícones abre um modal com abas:
- **Geral**: idioma, tema, iniciar com o sistema (real, via `app.setLoginItemSettings`), reabrir o último workspace ao iniciar, exportar/importar workspaces (diálogo de arquivo real, gera/lê um `.json`).
- **Navegação**: URL inicial padrão, zoom padrão (aplicado de verdade via `webview.setZoomFactor`), layout padrão para novos workspaces.
- **Downloads**: escolher pasta de destino (diálogo real) e alternar se cada download pergunta onde salvar (implementado via `session.will-download` por partição).
- **Atualizações**: painel simples informativo (não há servidor de atualização real conectado — é só um placeholder).
- **Sobre**: nome do app, descrição, versão do app/Electron/Chromium (lidas de verdade do processo em execução).

### Persistência
Workspaces, contas, cores, ícones, layouts e todas as configurações acima são salvos automaticamente em `state.json` (pasta de dados do usuário do Electron) e restaurados ao reabrir o app.

## Como rodar (modo desenvolvimento)
```bash
cd idle-labs-manager
npm install
npm start
```

## Como gerar um instalador (.exe / .dmg / .AppImage)
```bash
npm install
npm run dist
```

## Sobre o design e os arquivos que você enviou
- O visual foi recriado do zero olhando os prints de tela que você mandou, e a **paleta de cores** foi extraída do arquivo `.css` que você enviou (`eb90a0ea8d5ee166.css`) — mas esse arquivo é, na prática, o CSS de produção (Tailwind) compilado do app comercial Idle Labs (confirmado pelo cabeçalho `tailwindcss v4.3.3` e pelas dezenas de milhares de classes utilitárias minificadas). Reaproveitei apenas os **valores de cor** (hex), que não são protegidos por direitos autorais isoladamente — não copiei nenhum seletor, classe ou estrutura CSS de dentro do arquivo.
- Os `.zip` enviados anteriormente (rotulados como "descompilado" e depois como "open source") continuam não sendo usados: ambos têm a mesma estrutura de build compilado (`out-idlelabs/main/index.js`, `renderer/assets/index-HASH.js/css`), sem `LICENSE` nem código-fonte legível — ou seja, é o app comercial compilado, não um repositório aberto de verdade.

## Próximos passos possíveis
- Atalhos de teclado para trocar de conta ativa.
- Redimensionamento manual (arrastar bordas) no layout "Livre" — hoje ele usa um tamanho fixo com quebra de linha.
- Conectar a aba "Atualizações" a um serviço de auto-update real (ex: `electron-updater`).
