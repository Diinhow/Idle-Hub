// ---------------------------------------------------------------------------
// i18n — traduções reais (pt/en/es), aplicadas sem precisar recarregar
// ---------------------------------------------------------------------------
// ============================================================
// Verificação de atualizações — link do Gist com o arquivo de versão.
// EDITE AQUI (só no código-fonte, não aparece em nenhum lugar da interface)
// se um dia você trocar de Gist. Formato esperado do arquivo .json dentro
// dele: { "version": "1.3.0", "url": "https://...", "message": "..." }
// ============================================================
const UPDATE_GIST_URL = 'https://gist.github.com/Diinhow/b9261f1077c60b5dbcd4dccba8eb67e8';

// ============================================================
// Tema padrão para quem abre o app pela primeira vez.
// Troque para 'neon' se quiser que o tema Neon já venha ativado de cara
// (quem já tiver o app instalado e já tiver escolhido um tema não é afetado
// por essa constante — ela só vale pra configuração inicial/em branco).
// Valores válidos: 'escuro' | 'neon'
// ============================================================
const DEFAULT_THEME = 'escuro';

const I18N = {
  pt: {
    addAccount: 'Adicionar conta', emptyTitle: 'Nenhuma conta aberta',
    emptyDesc: 'Adicione contas a este workspace. Cada conta é uma sessão independente — login, cookies e cache próprios.',
    emptyBtn: 'Adicionar primeira conta', connected: 'Conectado', noActiveAccount: 'Nenhuma conta ativa',
    activeAccountSuffix: '{name} ativa', editAccount: 'Editar conta', accountName: 'Nome da conta',
    initialUrl: 'URL inicial / padrão', cancel: 'Cancelar', save: 'Salvar', editWorkspace: 'Editar workspace',
    collapseSidebar: 'Recolher barra lateral', closeAllTitle: 'Fechar todas as contas abertas',
    nameLabel: 'NOME', colorLabel: 'COR', iconLabel: 'ÍCONE', defaultUrlLabel: 'URL PADRÃO', layoutsLabel: 'LAYOUTS',
    layoutAuto: 'Grade automática', layoutSingle: 'Painel único', layoutColumns: 'Colunas', layoutRows: 'Linhas', layoutFree: 'Livre (redimensionável)',
    ctxReload: 'Recarregar', ctxDefaultUrl: 'Ir para a URL padrão', ctxMute: 'Silenciar painel', ctxUnmute: 'Reativar som',
    ctxClose: 'Fechar conta', ctxEdit: 'Editar conta', ctxDuplicate: 'Duplicar conta', ctxClearData: 'Limpar dados da sessão', ctxDelete: 'Excluir conta',
    ctxDevtools: 'Abrir DevTools (F12)',
    wsCtxEdit: 'Editar workspace', wsCtxDuplicate: 'Duplicar workspace', wsCtxDelete: 'Excluir workspace',
    confirmBtn: 'Confirmar', shortcutsTitle: 'Atalhos de teclado', settingsTitleModal: 'Configurações',
    tabGeneral: 'Geral', tabNav: 'Navegação', tabDownloads: 'Downloads', tabUpdates: 'Atualizações', tabAbout: 'Sobre',
    langLabel: 'Idioma', langSystem: 'Sistema', themeLabel: 'Tema', themeDark: 'Escuro',
    startWithSystem: 'Inicializar com o sistema', reopenLast: 'Reabrir o último workspace ao iniciar',
    cleanModeLabel: 'Modo tela limpa', cleanModeDesc: 'Esconde as barras, a lateral e os cabeçalhos dos painéis (Ctrl+Shift+Z)',
    edgeRevealLabel: 'Mostrar a interface ao encostar nas bordas',
    edgeRevealDesc: 'No modo tela limpa: encoste no topo para as barras, na lateral esquerda para o menu de contas',
    presentationTitle: 'Modo apresentação/gravação (Ctrl+Shift+P)',
    presentationModeLabel: 'Modo apresentação / gravação',
    presentationModeDesc: 'Borra nomes e URLs nos cabeçalhos (contas, sidebar, barra de endereço) — passe o mouse para revelar (Ctrl+Shift+P)',
    ecoModeTitle: 'Modo Eco — reduz uso de CPU (Ctrl+Shift+E)',
    ecoModeLabel: 'Modo Eco',
    ecoModeDesc: 'Reduz o uso de CPU da conta em foco deixando as animações mais lentas — o progresso do jogo não é afetado, só a atualização visual',
    shcEcoMode: 'Modo Eco (reduz CPU)',
    shcPresentation: 'Modo apresentação/gravação',
    exportBtn: 'Exportar workspaces', importBtn: 'Importar workspaces',
    defaultUrlSettings: 'URL inicial padrão', defaultZoomSettings: 'Zoom padrão para novas contas', defaultLayoutSettings: 'Layout padrão',
    downloadsFolder: 'Pasta de downloads', downloadsFolderDefault: 'Pasta padrão do sistema', chooseFolder: 'Escolher pasta...',
    askEachDownload: 'Perguntar onde salvar cada download',
    updatesIntro: 'O Idle Hub verifica um arquivo simples de versão (não baixa nem instala nada sozinho) — só avisa se tiver algo novo.',
    checkUpdates: 'Verificar atualizações',
    checkingUpdates: 'Verificando...', updatesUpToDate: 'Você está usando a versão mais recente deste projeto.',
    updateInvalidUrl: 'Configure um link de Gist válido (https://gist.github.com/usuario/id) antes de verificar.',
    updateCheckFailed: 'Não foi possível verificar atualizações agora. Confira o link do Gist e sua conexão com a internet.',
    updateAvailableBody: 'Tem uma versão nova disponível: {version}.',
    updateToastTitle: 'Atualização disponível', updateToastOpen: 'Abrir link',
    updateToastBody: 'Tem uma versão nova disponível: {version}.',
    aboutDesc: 'Gerenciador multi-sessão com workspaces: organize contas ilimitadas em grupos, cada uma com sessão isolada.',
    versionLabel: 'Versão', downloadsHead: 'DOWNLOADS', downloadsEmpty: 'Nenhum download nesta sessão',
    back: 'Voltar', forward: 'Avançar', reloadTitle: 'Recarregar (Ctrl+R)', homeTitle: 'Ir para a URL padrão do workspace',
    addressPh: 'Digite uma URL e pressione Enter… (Ctrl+L)', goAllTitle: 'Abrir esta URL em todas as contas abertas (deste workspace)',
    muteTitle: 'Silenciar conta ativa (Ctrl+M)', zoomTitle: 'Zoom da conta ativa', downloadsTitle: 'Downloads',
    cleanModeTitle: 'Modo tela limpa (Ctrl+Shift+Z)', fullscreenTitle: 'Tela cheia (F11)', settingsTitle: 'Configurações (Ctrl+,)', helpTitle: 'Ajuda / Atalhos (F1)',
    statusOnline: 'Online', statusClosed: 'Fechada', accountWord: 'Conta', copySuffix: '(cópia)',
    shcPanel19: 'Selecionar painel 1–9', shcNextPanel: 'Próximo painel', shcNewWorkspace: 'Novo workspace', shcNewAccount: 'Nova conta',
    shcReloadActive: 'Recarregar painel ativo', shcReloadNoCache: 'Recarregar ignorando cache', shcReloadAll: 'Recarregar todas',
    shcMuteActive: 'Silenciar painel ativo', shcMuteAll: 'Silenciar todas', shcFocusAddress: 'Focar barra de endereço',
    shcZoomIn: 'Aumentar zoom', shcZoomOut: 'Diminuir zoom', shcZoomReset: 'Restaurar zoom (100%)',
    shcCleanMode: 'Modo tela limpa', shcFullscreen: 'Tela cheia', shcSettings: 'Configurações', shcHelp: 'Ajuda',
    shcDeleteAccount: 'Excluir conta ativa', shcDevtools: 'Abrir DevTools da conta ativa',
    changeBtn: 'Alterar', pressKeys: 'Pressione uma tecla... (Esc cancela)',
    resetShortcutsBtn: 'Restaurar padrões', resetShortcutsTitle: 'Restaurar atalhos padrão?',
    resetShortcutsBody: 'Todos os atalhos personalizados voltam para o valor original. Essa ação não pode ser desfeita.',
    resetDividersBtn: 'Redefinir tamanho das divisórias',
    dblClickHint: 'Duplo clique para maximizar/restaurar',
    confirmDeleteWsTitle: 'Excluir este workspace?', confirmDeleteWsBody: 'O workspace e todas as suas contas serão removidos da lista. As sessões salvas em disco não são apagadas.',
    confirmDeleteAccTitle: 'Excluir esta conta?', confirmDeleteAccBody: 'A conta "{name}" será removida da lista. A sessão salva em disco não é apagada automaticamente.',
    confirmCloseAllTitle: 'Fechar todas as contas?', confirmCloseAllBody: 'Isso vai fechar {count} conta(s) aberta(s) neste workspace. As sessões salvas em disco não são apagadas.',
    confirmClearDataTitle: 'Limpar dados da sessão?', confirmClearDataBody: 'Cookies, cache e login da conta "{name}" serão apagados. Essa ação não pode ser desfeita.',
    confirmImportTitle: 'Importar workspaces?', confirmImportBody: 'Isso vai substituir todos os workspaces e contas atuais por este arquivo.',
    backupSaved: 'Backup salvo em:\n{path}',
  },
  en: {
    addAccount: 'Add account', emptyTitle: 'No accounts open',
    emptyDesc: 'Add accounts to this workspace. Each account is an independent session — its own login, cookies and cache.',
    emptyBtn: 'Add first account', connected: 'Connected', noActiveAccount: 'No active account',
    activeAccountSuffix: '{name} active', editAccount: 'Edit account', accountName: 'Account name',
    initialUrl: 'Initial / default URL', cancel: 'Cancel', save: 'Save', editWorkspace: 'Edit workspace',
    collapseSidebar: 'Collapse sidebar', closeAllTitle: 'Close all open accounts',
    nameLabel: 'NAME', colorLabel: 'COLOR', iconLabel: 'ICON', defaultUrlLabel: 'DEFAULT URL', layoutsLabel: 'LAYOUTS',
    layoutAuto: 'Auto grid', layoutSingle: 'Single panel', layoutColumns: 'Columns', layoutRows: 'Rows', layoutFree: 'Free (resizable)',
    ctxReload: 'Reload', ctxDefaultUrl: 'Go to default URL', ctxMute: 'Mute panel', ctxUnmute: 'Unmute',
    ctxClose: 'Close account', ctxEdit: 'Edit account', ctxDuplicate: 'Duplicate account', ctxClearData: 'Clear session data', ctxDelete: 'Delete account',
    ctxDevtools: 'Open DevTools (F12)',
    wsCtxEdit: 'Edit workspace', wsCtxDuplicate: 'Duplicate workspace', wsCtxDelete: 'Delete workspace',
    confirmBtn: 'Confirm', shortcutsTitle: 'Keyboard shortcuts', settingsTitleModal: 'Settings',
    tabGeneral: 'General', tabNav: 'Browsing', tabDownloads: 'Downloads', tabUpdates: 'Updates', tabAbout: 'About',
    langLabel: 'Language', langSystem: 'System', themeLabel: 'Theme', themeDark: 'Dark',
    startWithSystem: 'Launch on system startup', reopenLast: 'Reopen last workspace on launch',
    cleanModeLabel: 'Clean screen mode', cleanModeDesc: 'Hides the bars, sidebar and panel headers (Ctrl+Shift+Z)',
    edgeRevealLabel: 'Reveal interface near screen edges',
    edgeRevealDesc: 'In clean mode: hover the top edge for the bars, left edge for the accounts panel',
    presentationTitle: 'Presentation/recording mode (Ctrl+Shift+P)',
    presentationModeLabel: 'Presentation / recording mode',
    presentationModeDesc: 'Blurs names and URLs in headers (accounts, sidebar, address bar) — hover to reveal (Ctrl+Shift+P)',
    ecoModeTitle: 'Eco mode — reduces CPU usage (Ctrl+Shift+E)',
    ecoModeLabel: 'Eco mode',
    ecoModeDesc: "Reduces CPU usage of the focused account by slowing down animations — game progress isn't affected, only how often the screen redraws",
    shcEcoMode: 'Eco mode (reduce CPU)',
    shcPresentation: 'Presentation/recording mode',
    exportBtn: 'Export workspaces', importBtn: 'Import workspaces',
    defaultUrlSettings: 'Default initial URL', defaultZoomSettings: 'Default zoom for new accounts', defaultLayoutSettings: 'Default layout',
    downloadsFolder: 'Downloads folder', downloadsFolderDefault: 'System default folder', chooseFolder: 'Choose folder...',
    askEachDownload: 'Ask where to save each download',
    updatesIntro: "Idle Hub checks a simple version file (it doesn't download or install anything on its own) — it just lets you know if there's something new.",
    checkUpdates: 'Check for updates',
    checkingUpdates: 'Checking...', updatesUpToDate: 'You are using the latest version of this project.',
    updateInvalidUrl: 'Set a valid Gist link (https://gist.github.com/user/id) before checking.',
    updateCheckFailed: "Couldn't check for updates right now. Check the Gist link and your internet connection.",
    updateAvailableBody: 'A new version is available: {version}.',
    updateToastTitle: 'Update available', updateToastOpen: 'Open link',
    updateToastBody: 'A new version is available: {version}.',
    aboutDesc: 'Multi-session manager with workspaces: organize unlimited accounts into groups, each with an isolated session.',
    versionLabel: 'Version', downloadsHead: 'DOWNLOADS', downloadsEmpty: 'No downloads this session',
    back: 'Back', forward: 'Forward', reloadTitle: 'Reload (Ctrl+R)', homeTitle: "Go to the workspace's default URL",
    addressPh: 'Type a URL and press Enter… (Ctrl+L)', goAllTitle: 'Open this URL in all open accounts (this workspace)',
    muteTitle: 'Mute active account (Ctrl+M)', zoomTitle: 'Zoom of the active account', downloadsTitle: 'Downloads',
    cleanModeTitle: 'Clean screen mode (Ctrl+Shift+Z)', fullscreenTitle: 'Fullscreen (F11)', settingsTitle: 'Settings (Ctrl+,)', helpTitle: 'Help / Shortcuts (F1)',
    statusOnline: 'Online', statusClosed: 'Closed', accountWord: 'Account', copySuffix: '(copy)',
    shcPanel19: 'Select panel 1–9', shcNextPanel: 'Next panel', shcNewWorkspace: 'New workspace', shcNewAccount: 'New account',
    shcReloadActive: 'Reload active panel', shcReloadNoCache: 'Reload ignoring cache', shcReloadAll: 'Reload all',
    shcMuteActive: 'Mute active panel', shcMuteAll: 'Mute all', shcFocusAddress: 'Focus address bar',
    shcZoomIn: 'Zoom in', shcZoomOut: 'Zoom out', shcZoomReset: 'Reset zoom (100%)',
    shcCleanMode: 'Clean screen mode', shcFullscreen: 'Fullscreen', shcSettings: 'Settings', shcHelp: 'Help',
    shcDeleteAccount: 'Delete active account', shcDevtools: "Open active account's DevTools",
    changeBtn: 'Change', pressKeys: 'Press a key... (Esc cancels)',
    resetShortcutsBtn: 'Reset to defaults', resetShortcutsTitle: 'Reset default shortcuts?',
    resetShortcutsBody: 'All custom shortcuts go back to their original value. This cannot be undone.',
    resetDividersBtn: 'Reset divider sizes',
    dblClickHint: 'Double-click to maximize/restore',
    confirmDeleteWsTitle: 'Delete this workspace?', confirmDeleteWsBody: 'The workspace and all its accounts will be removed from the list. Sessions saved on disk are not deleted.',
    confirmDeleteAccTitle: 'Delete this account?', confirmDeleteAccBody: 'The account "{name}" will be removed from the list. The session saved on disk is not automatically deleted.',
    confirmCloseAllTitle: 'Close all accounts?', confirmCloseAllBody: 'This will close {count} open account(s) in this workspace. Sessions saved on disk are not deleted.',
    confirmClearDataTitle: 'Clear session data?', confirmClearDataBody: 'Cookies, cache and login for "{name}" will be erased. This cannot be undone.',
    confirmImportTitle: 'Import workspaces?', confirmImportBody: 'This will replace all current workspaces and accounts with this file.',
    backupSaved: 'Backup saved to:\n{path}',
  },
  es: {
    addAccount: 'Añadir cuenta', emptyTitle: 'Ninguna cuenta abierta',
    emptyDesc: 'Añade cuentas a este workspace. Cada cuenta es una sesión independiente: su propio inicio de sesión, cookies y caché.',
    emptyBtn: 'Añadir primera cuenta', connected: 'Conectado', noActiveAccount: 'Ninguna cuenta activa',
    activeAccountSuffix: '{name} activa', editAccount: 'Editar cuenta', accountName: 'Nombre de la cuenta',
    initialUrl: 'URL inicial / predeterminada', cancel: 'Cancelar', save: 'Guardar', editWorkspace: 'Editar workspace',
    collapseSidebar: 'Contraer barra lateral', closeAllTitle: 'Cerrar todas las cuentas abiertas',
    nameLabel: 'NOMBRE', colorLabel: 'COLOR', iconLabel: 'ICONO', defaultUrlLabel: 'URL PREDETERMINADA', layoutsLabel: 'DISEÑOS',
    layoutAuto: 'Cuadrícula automática', layoutSingle: 'Panel único', layoutColumns: 'Columnas', layoutRows: 'Filas', layoutFree: 'Libre (redimensionable)',
    ctxReload: 'Recargar', ctxDefaultUrl: 'Ir a la URL predeterminada', ctxMute: 'Silenciar panel', ctxUnmute: 'Reactivar sonido',
    ctxClose: 'Cerrar cuenta', ctxEdit: 'Editar cuenta', ctxDuplicate: 'Duplicar cuenta', ctxClearData: 'Borrar datos de la sesión', ctxDelete: 'Eliminar cuenta',
    ctxDevtools: 'Abrir DevTools (F12)',
    wsCtxEdit: 'Editar workspace', wsCtxDuplicate: 'Duplicar workspace', wsCtxDelete: 'Eliminar workspace',
    confirmBtn: 'Confirmar', shortcutsTitle: 'Atajos de teclado', settingsTitleModal: 'Configuración',
    tabGeneral: 'General', tabNav: 'Navegación', tabDownloads: 'Descargas', tabUpdates: 'Actualizaciones', tabAbout: 'Acerca de',
    langLabel: 'Idioma', langSystem: 'Sistema', themeLabel: 'Tema', themeDark: 'Oscuro',
    startWithSystem: 'Iniciar con el sistema', reopenLast: 'Reabrir el último workspace al iniciar',
    cleanModeLabel: 'Modo pantalla limpia', cleanModeDesc: 'Oculta las barras, la lateral y los encabezados de los paneles (Ctrl+Shift+Z)',
    edgeRevealLabel: 'Mostrar la interfaz al tocar los bordes',
    edgeRevealDesc: 'En modo pantalla limpia: toca el borde superior para las barras, el izquierdo para el menú de cuentas',
    presentationTitle: 'Modo presentación/grabación (Ctrl+Shift+P)',
    presentationModeLabel: 'Modo presentación / grabación',
    presentationModeDesc: 'Difumina nombres y URLs en los encabezados (cuentas, barra lateral, barra de direcciones) — pasa el mouse para revelar (Ctrl+Shift+P)',
    ecoModeTitle: 'Modo Eco — reduce el uso de CPU (Ctrl+Shift+E)',
    ecoModeLabel: 'Modo Eco',
    ecoModeDesc: 'Reduce el uso de CPU de la cuenta activa ralentizando las animaciones — el progreso del juego no se ve afectado, solo la frecuencia de actualización visual',
    shcEcoMode: 'Modo Eco (reduce CPU)',
    shcPresentation: 'Modo presentación/grabación',
    exportBtn: 'Exportar workspaces', importBtn: 'Importar workspaces',
    defaultUrlSettings: 'URL inicial predeterminada', defaultZoomSettings: 'Zoom predeterminado para nuevas cuentas', defaultLayoutSettings: 'Diseño predeterminado',
    downloadsFolder: 'Carpeta de descargas', downloadsFolderDefault: 'Carpeta predeterminada del sistema', chooseFolder: 'Elegir carpeta...',
    askEachDownload: 'Preguntar dónde guardar cada descarga',
    updatesIntro: 'Idle Hub verifica un archivo simple de versión (no descarga ni instala nada por su cuenta) — solo avisa si hay algo nuevo.',
    checkUpdates: 'Buscar actualizaciones',
    checkingUpdates: 'Verificando...', updatesUpToDate: 'Estás usando la versión más reciente de este proyecto.',
    updateInvalidUrl: 'Configura un enlace de Gist válido (https://gist.github.com/usuario/id) antes de verificar.',
    updateCheckFailed: 'No se pudo verificar actualizaciones ahora. Revisa el enlace del Gist y tu conexión a internet.',
    updateAvailableBody: 'Hay una versión nueva disponible: {version}.',
    updateToastTitle: 'Actualización disponible', updateToastOpen: 'Abrir enlace',
    updateToastBody: 'Hay una versión nueva disponible: {version}.',
    aboutDesc: 'Gestor multisesión con workspaces: organiza cuentas ilimitadas en grupos, cada una con sesión aislada.',
    versionLabel: 'Versión', downloadsHead: 'DESCARGAS', downloadsEmpty: 'Ninguna descarga en esta sesión',
    back: 'Atrás', forward: 'Adelante', reloadTitle: 'Recargar (Ctrl+R)', homeTitle: 'Ir a la URL predeterminada del workspace',
    addressPh: 'Escribe una URL y presiona Enter… (Ctrl+L)', goAllTitle: 'Abrir esta URL en todas las cuentas abiertas (este workspace)',
    muteTitle: 'Silenciar cuenta activa (Ctrl+M)', zoomTitle: 'Zoom de la cuenta activa', downloadsTitle: 'Descargas',
    cleanModeTitle: 'Modo pantalla limpia (Ctrl+Shift+Z)', fullscreenTitle: 'Pantalla completa (F11)', settingsTitle: 'Configuración (Ctrl+,)', helpTitle: 'Ayuda / Atajos (F1)',
    statusOnline: 'Online', statusClosed: 'Cerrada', accountWord: 'Cuenta', copySuffix: '(copia)',
    shcPanel19: 'Seleccionar panel 1–9', shcNextPanel: 'Panel siguiente', shcNewWorkspace: 'Nuevo workspace', shcNewAccount: 'Nueva cuenta',
    shcReloadActive: 'Recargar panel activo', shcReloadNoCache: 'Recargar ignorando caché', shcReloadAll: 'Recargar todas',
    shcMuteActive: 'Silenciar panel activo', shcMuteAll: 'Silenciar todas', shcFocusAddress: 'Enfocar barra de direcciones',
    shcZoomIn: 'Acercar zoom', shcZoomOut: 'Alejar zoom', shcZoomReset: 'Restablecer zoom (100%)',
    shcCleanMode: 'Modo pantalla limpia', shcFullscreen: 'Pantalla completa', shcSettings: 'Configuración', shcHelp: 'Ayuda',
    shcDeleteAccount: 'Eliminar cuenta activa', shcDevtools: 'Abrir DevTools de la cuenta activa',
    changeBtn: 'Cambiar', pressKeys: 'Presiona una tecla... (Esc cancela)',
    resetShortcutsBtn: 'Restablecer predeterminados', resetShortcutsTitle: '¿Restablecer atajos predeterminados?',
    resetShortcutsBody: 'Todos los atajos personalizados vuelven a su valor original. Esta acción no se puede deshacer.',
    resetDividersBtn: 'Restablecer tamaño de las divisiones',
    dblClickHint: 'Doble clic para maximizar/restaurar',
    confirmDeleteWsTitle: '¿Eliminar este workspace?', confirmDeleteWsBody: 'El workspace y todas sus cuentas se eliminarán de la lista. Las sesiones guardadas en disco no se borran.',
    confirmDeleteAccTitle: '¿Eliminar esta cuenta?', confirmDeleteAccBody: 'La cuenta "{name}" se eliminará de la lista. La sesión guardada en disco no se borra automáticamente.',
    confirmCloseAllTitle: '¿Cerrar todas las cuentas?', confirmCloseAllBody: 'Esto cerrará {count} cuenta(s) abierta(s) en este workspace. Las sesiones guardadas en disco no se borran.',
    confirmClearDataTitle: '¿Borrar datos de la sesión?', confirmClearDataBody: 'Se borrarán cookies, caché e inicio de sesión de "{name}". Esta acción no se puede deshacer.',
    confirmImportTitle: '¿Importar workspaces?', confirmImportBody: 'Esto reemplazará todos los workspaces y cuentas actuales por este archivo.',
    backupSaved: 'Copia de seguridad guardada en:\n{path}',
  },
};
let currentLang = 'pt';
function t(key, vars) {
  let str = (I18N[currentLang] && I18N[currentLang][key]) || I18N.pt[key] || key;
  if (vars) Object.keys(vars).forEach((k) => { str = str.replace(`{${k}}`, vars[k]); });
  return str;
}
function detectSystemLang() {
  const l = (navigator.language || 'pt').toLowerCase();
  if (l.startsWith('pt')) return 'pt';
  if (l.startsWith('es')) return 'es';
  return 'en';
}
function applyLanguage(langSetting) {
  currentLang = langSetting === 'sistema' ? detectSystemLang() : (I18N[langSetting] ? langSetting : 'pt');
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => { el.dataset.tooltip = t(el.dataset.i18nTitle); });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  renderSidebar(); updateStatusBar(); renderShortcutsList();
  if (!$('#downloads-popover').classList.contains('hidden')) renderDownloadsList();
}
function applyTheme(tema) {
  document.body.classList.toggle('theme-neon', tema === 'neon');
}

// ---------------------------------------------------------------------------
// Ícones: baseados na biblioteca Lucide (https://lucide.dev, licença ISC — open source de verdade)
// ---------------------------------------------------------------------------
const ICONS = {
  apps: '<svg viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
  controller: '<svg viewBox="0 0 24 24"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>',
  swords: '<svg viewBox="0 0 24 24"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  drop: '<svg viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
  crown: '<svg viewBox="0 0 24 24"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>',
  ghost: '<svg viewBox="0 0 24 24"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>',
};
const ICON_KEYS = ['apps', 'controller', 'swords', 'shield', 'flame', 'leaf', 'drop', 'bolt', 'star', 'crown', 'ghost', 'rocket'];
const ICONS_MINI = {
  reload: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
  expand: '<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  soundOn: '<svg viewBox="0 0 24 24"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>',
  soundOff: '<svg viewBox="0 0 24 24"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>',
};
function muteIcon(muted) { return muted ? ICONS_MINI.soundOff : ICONS_MINI.soundOn; }

const COLORS = ['#e3b341', '#38bdf8', '#34d399', '#f87171', '#a78bfa', '#fb923c', '#f472b6', '#22d3ee'];
const ACCOUNT_COLORS = COLORS;
const DEFAULT_URL = 'https://www.google.com/';

// ---------------------------------------------------------------------------
// Estado global
// ---------------------------------------------------------------------------
let state = {
  nextWorkspaceId: 1, nextAccountId: 1, activeWorkspaceId: null, sidebarCollapsed: false,
  workspaces: [], settings: null, scripts: [],
};
let activeAccountId = null;
let saveTimer = null;

const $ = (sel) => document.querySelector(sel);
const workspaceIconsEl = $('#workspace-icons');
const accountListEl = $('#account-list');
const grid = $('#grid');
const addressBar = $('#address-bar');

function defaultSettings() {
  return {
    idioma: 'sistema', tema: DEFAULT_THEME, iniciarComSistema: false, reabrirUltimoWorkspace: true,
    urlInicialPadrao: DEFAULT_URL, zoomPadrao: 1, layoutPadrao: 'auto',
    downloadsPath: null, perguntarOndeSalvar: true, modoTelaLimpa: false, encostarBordas: true,
    modoApresentacao: false,
    modoEco: false,
  };
}

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------
function normalizeUrl(u) { return /^https?:\/\//i.test(u) ? u : 'https://' + u; }
function escapeHtml(str) { const d = document.createElement('div'); d.textContent = str == null ? '' : str; return d.innerHTML; }
function formatUptime(createdAt) {
  const totalSecs = Math.floor((Date.now() - createdAt) / 1000);
  const days = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs % 86400) / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m ${secs}s`;
}
function getActiveWorkspace() { return state.workspaces.find((w) => w.id === state.activeWorkspaceId) || state.workspaces[0]; }
function getAccountById(id) {
  for (const ws of state.workspaces) { const a = ws.accounts.find((x) => x.id === id); if (a) return a; }
  return null;
}
function getActiveAccount() { return activeAccountId ? getAccountById(activeAccountId) : null; }
function getActiveCard() { return activeAccountId ? grid.querySelector(`.account-card[data-id="${activeAccountId}"]`) : null; }
function getActiveWebview() { const card = getActiveCard(); return card ? card.querySelector('webview') : null; }
function getOpenAccountsOfActiveWorkspace() {
  const ws = getActiveWorkspace();
  return ws ? ws.accounts.filter((a) => a.status === 'open') : [];
}
let isDirty = false;
function schedulePersist() {
  isDirty = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persistState, 400);
}
function serializeState() {
  return {
    nextWorkspaceId: state.nextWorkspaceId, nextAccountId: state.nextAccountId,
    activeWorkspaceId: state.activeWorkspaceId, sidebarCollapsed: state.sidebarCollapsed, settings: state.settings,
    scripts: state.scripts,
    workspaces: state.workspaces.map((ws) => ({
      id: ws.id, name: ws.name, color: ws.color, iconKey: ws.iconKey, defaultUrl: ws.defaultUrl, layout: ws.layout,
      accounts: ws.accounts.map((a) => ({
        id: a.id, name: a.name, url: a.url, defaultUrl: a.defaultUrl, partition: a.partition,
        colorIdx: a.colorIdx, status: a.status, muted: !!a.muted, createdAt: a.createdAt,
        zoomFactor: a.zoomFactor || 1, freeWidth: a.freeWidth || null, freeHeight: a.freeHeight || null,
      })),
      autoGridColFr: ws.autoGridColFr || null, autoGridRowFr: ws.autoGridRowFr || null,
    })),
  };
}
async function persistState() {
  isDirty = false;
  try { await window.nativeAPI.saveState(serializeState()); } catch (err) { console.error('Erro ao salvar estado', err); }
}

// ---------------------------------------------------------------------------
// Inicialização
// ---------------------------------------------------------------------------
async function init() {
  let loaded = null;
  try { loaded = await window.nativeAPI.loadState(); } catch (err) { console.error('Erro ao carregar estado salvo', err); }

  if (loaded && loaded.workspaces && loaded.workspaces.length) {
    state = loaded;
    if (!Array.isArray(state.scripts)) state.scripts = [];
    state.settings = { ...defaultSettings(), ...(state.settings || {}) };
    state.workspaces.forEach((ws) => {
      if (!ws.color) ws.color = COLORS[0];
      if (!ws.iconKey) ws.iconKey = 'apps';
      if (!ws.layout) ws.layout = state.settings.layoutPadrao || 'auto';
      if (!ws.defaultUrl) ws.defaultUrl = state.settings.urlInicialPadrao || DEFAULT_URL;
      ws.accounts.forEach((a) => { if (!a.zoomFactor) a.zoomFactor = 1; a.webContentsId = null; a.pid = null; });
    });
    if (state.settings.reabrirUltimoWorkspace === false) state.activeWorkspaceId = state.workspaces[0].id;
  } else {
    state.settings = defaultSettings();
    const wsId = state.nextWorkspaceId++;
    const ws = { id: wsId, name: 'Principal', color: COLORS[0], iconKey: 'apps', defaultUrl: state.settings.urlInicialPadrao, layout: state.settings.layoutPadrao, accounts: [] };
    state.workspaces.push(ws);
    state.activeWorkspaceId = wsId;
    const accId = state.nextAccountId++;
    ws.accounts.push({
      id: accId, name: 'Conta 1', url: ws.defaultUrl, defaultUrl: ws.defaultUrl,
      partition: `persist:conta-${accId}`, colorIdx: 0, status: 'open', muted: false, zoomFactor: 1,
      createdAt: Date.now(), webContentsId: null, pid: null,
    });
  }

  if (!state.activeWorkspaceId) state.activeWorkspaceId = state.workspaces[0].id;
  if (state.sidebarCollapsed) applySidebarCollapsed(true);

  applyLanguage(state.settings.idioma);
  applyTheme(state.settings.tema);
  applyCleanMode();
  applyPresentationMode();
  applyEcoMode();
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
  updateNavButtons();
  updateZoomLabel();
  updateMuteButton();

  try { state.settings.iniciarComSistema = !!(await window.nativeAPI.getLoginItem()); } catch (err) { /* ignore */ }

  checkForUpdatesOnStartup();
}

// ---------------------------------------------------------------------------
// Sidebar recolher/expandir
// ---------------------------------------------------------------------------
function applySidebarCollapsed(collapsed) {
  $('#sidebar').classList.toggle('collapsed', collapsed);
  $('#sidebar-collapsed-strip').classList.toggle('hidden', !collapsed);
}
$('#collapse-sidebar-btn').addEventListener('click', () => { state.sidebarCollapsed = true; applySidebarCollapsed(true); schedulePersist(); });
$('#expand-sidebar-btn').addEventListener('click', () => { state.sidebarCollapsed = false; applySidebarCollapsed(false); schedulePersist(); });

// ---------------------------------------------------------------------------
// Modo tela limpa (+ revelar interface ao encostar nas bordas)
// ---------------------------------------------------------------------------
function applyCleanMode() {
  document.body.classList.toggle('clean-mode', !!state.settings.modoTelaLimpa);
  document.body.classList.toggle('edge-reveal', !!state.settings.encostarBordas);
  $('#topbar-cleanmode') && $('#topbar-cleanmode').classList.toggle('active-state', !!state.settings.modoTelaLimpa);
}
function toggleCleanMode() {
  state.settings.modoTelaLimpa = !state.settings.modoTelaLimpa;
  applyCleanMode();
  schedulePersist();
}

// ---------------------------------------------------------------------------
// Modo apresentação/gravação: borra nomes/URLs sensíveis nos cabeçalhos
// (cards, sidebar, barra de endereço). Passar o mouse revela na hora.
// ---------------------------------------------------------------------------
function applyPresentationMode() {
  const on = !!state.settings.modoApresentacao;
  document.body.classList.toggle('presentation-mode', on);
  $('#topbar-presentation') && $('#topbar-presentation').classList.toggle('active-state', on);
}
function togglePresentationMode() {
  state.settings.modoApresentacao = !state.settings.modoApresentacao;
  applyPresentationMode();
  schedulePersist();
}

// ---------------------------------------------------------------------------
// Modo Eco: reduz o uso de CPU da conta em foco também (não só das que já
// estão em segundo plano), trocando o requestAnimationFrame por uma versão
// mais lenta. O progresso do jogo não é afetado — só a frequência de
// atualização visual cai.
// ---------------------------------------------------------------------------
function applyEcoMode() {
  $('#topbar-eco') && $('#topbar-eco').classList.toggle('active-state', !!state.settings.modoEco);
  refreshAllRafThrottles();
}
function toggleEcoMode() {
  state.settings.modoEco = !state.settings.modoEco;
  applyEcoMode();
  schedulePersist();
}
let revealTimer = null;
function revealTop() { clearTimeout(revealTimer); document.body.classList.add('reveal-top'); }
function revealLeft() { clearTimeout(revealTimer); document.body.classList.add('reveal-left'); }
function scheduleHide() {
  clearTimeout(revealTimer);
  revealTimer = setTimeout(() => { document.body.classList.remove('reveal-top', 'reveal-left'); }, 400);
}
$('#edge-trigger-top').addEventListener('mouseenter', revealTop);
$('#edge-trigger-left').addEventListener('mouseenter', revealLeft);
[$('#edge-trigger-top'), $('#edge-trigger-left'), $('#titlebar'), $('#toolbar'), $('#workspace-rail'), $('#sidebar')].forEach((el) => {
  el.addEventListener('mouseleave', scheduleHide);
  el.addEventListener('mouseenter', () => clearTimeout(revealTimer));
});

// ---------------------------------------------------------------------------
// Modal de confirmação genérico
// ---------------------------------------------------------------------------
const confirmOverlay = $('#confirm-overlay');
let confirmCallback = null;
function showConfirm(title, body, onConfirm) {
  $('#confirm-title').textContent = title;
  $('#confirm-body').textContent = body;
  confirmCallback = onConfirm;
  confirmOverlay.classList.remove('hidden');
}
function hideConfirm() { confirmOverlay.classList.add('hidden'); confirmCallback = null; }
$('#confirm-ok').addEventListener('click', () => { const cb = confirmCallback; hideConfirm(); if (cb) cb(); });
$('#confirm-cancel').addEventListener('click', hideConfirm);
$('#confirm-close').addEventListener('click', hideConfirm);
confirmOverlay.addEventListener('click', (e) => { if (e.target === confirmOverlay) hideConfirm(); });

// ---------------------------------------------------------------------------
// Workspaces
// ---------------------------------------------------------------------------
// Acha o menor número "livre" pra um nome tipo "Prefixo N" — se você excluir
// "Conta 3" e criar outra, ela reaproveita o "3" em vez de virar "Conta 4".
// (o id interno de cada conta/workspace continua sempre único e crescente —
// só o NÚMERO NO NOME é reaproveitado, o que é seguro pois nomes podem repetir.)
function nextSequentialName(existingNames, prefix) {
  const used = new Set();
  const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`^${escaped}\\s+(\\d+)$`);
  existingNames.forEach((n) => { const m = n.match(re); if (m) used.add(Number(m[1])); });
  let i = 1;
  while (used.has(i)) i++;
  return `${prefix} ${i}`;
}

function createWorkspace() {
  const id = state.nextWorkspaceId++;
  const idx = state.workspaces.length;
  const name = nextSequentialName(state.workspaces.map((w) => w.name), 'Workspace');
  const ws = {
    id, name, color: COLORS[idx % COLORS.length], iconKey: ICON_KEYS[idx % ICON_KEYS.length],
    defaultUrl: state.settings.urlInicialPadrao || DEFAULT_URL, layout: state.settings.layoutPadrao || 'auto', accounts: [],
  };
  state.workspaces.push(ws);
  state.activeWorkspaceId = id;
  activeAccountId = null;
  renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar(); schedulePersist();
  requestAnimationFrame(() => {
    const el = workspaceIconsEl.querySelector(`.ws-icon[data-id="${id}"]`);
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}
function switchWorkspace(id) {
  if (state.activeWorkspaceId === id) return;
  state.activeWorkspaceId = id;
  activeAccountId = null;
  renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar();
  updateNavButtons(); updateZoomLabel(); updateMuteButton();
}
function reorderWorkspace(draggedId, targetId) {
  const from = state.workspaces.findIndex((w) => w.id === draggedId);
  const to = state.workspaces.findIndex((w) => w.id === targetId);
  if (from === -1 || to === -1 || from === to) return;
  const [item] = state.workspaces.splice(from, 1);
  state.workspaces.splice(to, 0, item);
  renderWorkspaceRail(); schedulePersist();
}
function duplicateWorkspace(id) {
  const src = state.workspaces.find((w) => w.id === id);
  if (!src) return;
  const newId = state.nextWorkspaceId++;
  const copy = {
    id: newId, name: `${src.name} ${t('copySuffix')}`, color: src.color, iconKey: src.iconKey, defaultUrl: src.defaultUrl, layout: src.layout,
    accounts: src.accounts.map((a) => {
      const newAccId = state.nextAccountId++;
      return {
        id: newAccId, name: a.name, url: a.defaultUrl, defaultUrl: a.defaultUrl, partition: `persist:conta-${newAccId}`,
        colorIdx: a.colorIdx, status: 'closed', muted: false, zoomFactor: 1, createdAt: Date.now(), webContentsId: null, pid: null,
      };
    }),
  };
  state.workspaces.push(copy);
  state.activeWorkspaceId = newId;
  activeAccountId = null;
  renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar(); schedulePersist();
}
function deleteWorkspace(id) {
  if (state.workspaces.length <= 1) return;
  state.workspaces = state.workspaces.filter((w) => w.id !== id);
  if (state.activeWorkspaceId === id) state.activeWorkspaceId = state.workspaces[0].id;
  activeAccountId = null;
  renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar(); schedulePersist();
}
function confirmDeleteWorkspace(id) {
  const ws = state.workspaces.find((w) => w.id === id);
  if (!ws || state.workspaces.length <= 1) return;
  showConfirm(t('confirmDeleteWsTitle'), t('confirmDeleteWsBody'), () => deleteWorkspace(id));
}
function renderWorkspaceRail() {
  workspaceIconsEl.innerHTML = '';
  state.workspaces.forEach((ws) => {
    const el = document.createElement('div');
    el.className = 'ws-icon' + (ws.id === state.activeWorkspaceId ? ' active' : '');
    el.draggable = true;
    el.dataset.id = ws.id;
    el.dataset.tooltip = ws.name;
    el.style.setProperty('--ws-color', ws.color);
    const openCount = ws.accounts.filter((a) => a.status === 'open').length;
    el.innerHTML = `<span class="ws-indicator" style="background:${ws.color}"></span>${ICONS[ws.iconKey] || ICONS.apps}<span class="ws-badge">${openCount}</span>`;
    el.addEventListener('click', () => switchWorkspace(ws.id));
    el.addEventListener('contextmenu', (e) => { e.preventDefault(); openWsContextMenu(e.clientX, e.clientY, ws.id); });
    el.addEventListener('dragstart', (e) => { el.classList.add('dragging'); e.dataTransfer.setData('text/ws-id', String(ws.id)); });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
    el.addEventListener('dragover', (e) => e.preventDefault());
    el.addEventListener('drop', (e) => { e.preventDefault(); const draggedId = Number(e.dataTransfer.getData('text/ws-id')); if (draggedId) reorderWorkspace(draggedId, ws.id); });
    workspaceIconsEl.appendChild(el);
  });
}

// ---------------------------------------------------------------------------
// Menu de contexto do workspace
// ---------------------------------------------------------------------------
const wsCtxMenu = $('#ws-context-menu');
let ctxWorkspaceId = null;
function openWsContextMenu(x, y, wsId) {
  ctxWorkspaceId = wsId;
  const deleteBtn = wsCtxMenu.querySelector('[data-action="delete"]');
  deleteBtn.disabled = state.workspaces.length <= 1;
  wsCtxMenu.classList.remove('hidden');
  const w = 200, h = 160;
  wsCtxMenu.style.left = `${Math.max(4, Math.min(x, window.innerWidth - w - 8))}px`;
  wsCtxMenu.style.top = `${Math.max(4, Math.min(y, window.innerHeight - h - 8))}px`;
}
function closeWsContextMenu() { wsCtxMenu.classList.add('hidden'); ctxWorkspaceId = null; }
document.addEventListener('click', (e) => { if (!wsCtxMenu.contains(e.target)) closeWsContextMenu(); });
wsCtxMenu.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn || ctxWorkspaceId == null || btn.disabled) return;
  const id = ctxWorkspaceId, action = btn.dataset.action;
  if (action === 'edit') { switchWorkspace(id); openWorkspaceEditModal(); }
  else if (action === 'duplicate') duplicateWorkspace(id);
  else if (action === 'delete') confirmDeleteWorkspace(id);
  closeWsContextMenu();
});

// ---------------------------------------------------------------------------
// Modal "Editar workspace"
// ---------------------------------------------------------------------------
const wsEditOverlay = $('#ws-edit-overlay');
let wsEditColor = null, wsEditIcon = null;
function openWorkspaceEditModal() {
  const ws = getActiveWorkspace();
  if (!ws) return;
  $('#ws-edit-name').value = ws.name;
  $('#ws-edit-url').value = ws.defaultUrl || '';
  $('#ws-edit-layout').value = ws.layout || 'auto';
  wsEditColor = ws.color; wsEditIcon = ws.iconKey;
  renderWsEditColors(); renderWsEditIcons();
  updateResetDividersVisibility();
  wsEditOverlay.classList.remove('hidden');
  $('#ws-edit-name').focus();
}
function updateResetDividersVisibility() {
  $('#ws-edit-reset-dividers').classList.toggle('hidden', $('#ws-edit-layout').value !== 'auto');
}
$('#ws-edit-layout').addEventListener('change', updateResetDividersVisibility);
$('#ws-edit-reset-dividers').addEventListener('click', () => {
  const ws = getActiveWorkspace();
  if (!ws) return;
  ws.autoGridColFr = null;
  ws.autoGridRowFr = null;
  renderGrid();
  schedulePersist();
});
function renderWsEditColors() {
  const wrap = $('#ws-edit-colors'); wrap.innerHTML = '';
  COLORS.forEach((c) => {
    const b = document.createElement('button');
    b.style.background = c; b.style.color = c;
    if (c === wsEditColor) b.classList.add('selected');
    b.addEventListener('click', () => { wsEditColor = c; renderWsEditColors(); });
    wrap.appendChild(b);
  });
}
function renderWsEditIcons() {
  const wrap = $('#ws-edit-icons'); wrap.innerHTML = '';
  ICON_KEYS.forEach((key) => {
    const b = document.createElement('button');
    b.innerHTML = ICONS[key];
    if (key === wsEditIcon) b.classList.add('selected');
    b.addEventListener('click', () => { wsEditIcon = key; renderWsEditIcons(); });
    wrap.appendChild(b);
  });
}
$('#rename-workspace-btn').addEventListener('click', openWorkspaceEditModal);
$('#ws-edit-close').addEventListener('click', () => wsEditOverlay.classList.add('hidden'));
wsEditOverlay.addEventListener('click', (e) => { if (e.target === wsEditOverlay) wsEditOverlay.classList.add('hidden'); });
$('#ws-edit-save').addEventListener('click', () => {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const name = $('#ws-edit-name').value.trim();
  const url = $('#ws-edit-url').value.trim();
  if (name) ws.name = name;
  ws.color = wsEditColor || ws.color;
  ws.iconKey = wsEditIcon || ws.iconKey;
  ws.defaultUrl = url ? normalizeUrl(url) : ws.defaultUrl;
  ws.layout = $('#ws-edit-layout').value;
  wsEditOverlay.classList.add('hidden');
  renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar(); schedulePersist();
});

// ---------------------------------------------------------------------------
// Contas: criação instantânea (sem modal) / abrir / fechar / duplicar / editar / excluir / limpar
// ---------------------------------------------------------------------------
function createAccount(name, url, openImmediately = true) {
  const ws = getActiveWorkspace();
  if (!ws) return null;
  const id = state.nextAccountId++;
  const finalUrl = url && url.trim() ? normalizeUrl(url.trim()) : (ws.defaultUrl || DEFAULT_URL);
  const account = {
    id, name: name || `${t('accountWord')} ${id}`, url: finalUrl, defaultUrl: finalUrl,
    partition: `persist:conta-${id}`, colorIdx: ws.accounts.length % ACCOUNT_COLORS.length,
    status: openImmediately ? 'open' : 'closed', muted: false, zoomFactor: state.settings.zoomPadrao || 1,
    createdAt: Date.now(), webContentsId: null, pid: null,
  };
  ws.accounts.push(account);
  renderWorkspaceRail(); renderSidebar(); renderGrid();
  setActiveAccount(id);
  schedulePersist();
  return account;
}
// Clique em "Adicionar conta": cria na hora com um nome aleatório, sem pedir confirmação
// (editar nome/URL depois é feito pelo menu de contexto "Editar conta")
function quickCreateAccount() {
  const ws = getActiveWorkspace();
  const name = nextSequentialName(ws ? ws.accounts.map((a) => a.name) : [], t('accountWord'));
  createAccount(name, null, true);
}
function openAccount(id, urlOverride) {
  const acc = getAccountById(id);
  if (!acc) return;
  if (urlOverride) acc.url = urlOverride;
  acc.status = 'open';
  renderSidebar(); renderGrid();
  setActiveAccount(id);
  schedulePersist();
}
function closeAccount(id) {
  const acc = getAccountById(id);
  if (!acc) return;
  acc.status = 'closed'; acc.webContentsId = null; acc.pid = null;
  if (activeAccountId === id) activeAccountId = null;
  renderSidebar(); renderGrid(); updateStatusBar(); updateNavButtons(); updateZoomLabel(); updateMuteButton();
  schedulePersist();
}
function closeAllAccountsOfActiveWorkspace() {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const open = ws.accounts.filter((a) => a.status === 'open');
  if (!open.length) return;
  showConfirm(t('confirmCloseAllTitle'), t('confirmCloseAllBody', { count: open.length }), () => {
    open.forEach((a) => { a.status = 'closed'; a.webContentsId = null; a.pid = null; });
    activeAccountId = null;
    renderSidebar(); renderGrid(); updateStatusBar(); updateNavButtons(); updateZoomLabel(); updateMuteButton();
    schedulePersist();
  });
}
function deleteAccount(id) {
  const acc = getAccountById(id);
  if (!acc) return;
  showConfirm(t('confirmDeleteAccTitle'), t('confirmDeleteAccBody', { name: acc.name }), () => {
    const ws = getActiveWorkspace();
    if (!ws) return;
    ws.accounts = ws.accounts.filter((a) => a.id !== id);
    if (activeAccountId === id) activeAccountId = null;
    renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar(); schedulePersist();
  });
}
function duplicateAccount(id) {
  const ws = getActiveWorkspace();
  const src = getAccountById(id);
  if (!ws || !src) return;
  const newId = state.nextAccountId++;
  const copy = {
    id: newId, name: `${src.name} ${t('copySuffix')}`, url: src.defaultUrl, defaultUrl: src.defaultUrl,
    partition: `persist:conta-${newId}`, colorIdx: ws.accounts.length % ACCOUNT_COLORS.length,
    status: 'open', muted: false, zoomFactor: src.zoomFactor || 1, createdAt: Date.now(), webContentsId: null, pid: null,
  };
  ws.accounts.push(copy);
  renderWorkspaceRail(); renderSidebar(); renderGrid();
  setActiveAccount(newId);
  schedulePersist();
}
function editAccount(id, name, url) {
  const acc = getAccountById(id);
  if (!acc) return;
  if (name.trim()) acc.name = name.trim();
  const trimmedUrl = url.trim();
  if (trimmedUrl) {
    const full = normalizeUrl(trimmedUrl);
    // Só navega se a URL realmente mudou — antes, salvar só o nome (com o
    // campo de URL ainda preenchido com o valor atual) fazia a página
    // recarregar de volta pra URL padrão do nada, perdendo o progresso.
    const changed = full !== acc.defaultUrl;
    acc.defaultUrl = full;
    if (changed) {
      acc.url = full;
      if (acc.status === 'open') {
        const webview = grid.querySelector(`.account-card[data-id="${acc.id}"] webview`);
        if (webview) webview.loadURL(full);
      }
    }
  }
  renderSidebar(); renderGrid(); schedulePersist();
}
function clearAccountData(id) {
  const acc = getAccountById(id);
  if (!acc) return;
  showConfirm(t('confirmClearDataTitle'), t('confirmClearDataBody', { name: acc.name }), async () => {
    await window.nativeAPI.clearPartition(acc.partition);
    if (acc.status === 'open') {
      const webview = grid.querySelector(`.account-card[data-id="${acc.id}"] webview`);
      if (webview) webview.reload();
    }
  });
}
function reorderAccount(draggedId, targetId) {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const from = ws.accounts.findIndex((a) => a.id === draggedId);
  const to = ws.accounts.findIndex((a) => a.id === targetId);
  if (from === -1 || to === -1 || from === to) return;
  const [item] = ws.accounts.splice(from, 1);
  ws.accounts.splice(to, 0, item);
  renderSidebar(); renderGrid(); schedulePersist();
}
function setActiveAccount(id) {
  if (activeAccountId === id) return;
  const previousId = activeAccountId;
  activeAccountId = id;

  // Se a conta anterior estava maximizada, a maximização "segue" pra conta
  // que você acabou de selecionar, em vez de ficar presa na antiga cobrindo a tela.
  const prevCard = previousId != null ? grid.querySelector(`.account-card[data-id="${previousId}"]`) : null;
  if (prevCard && prevCard.classList.contains('maximized')) {
    prevCard.classList.remove('maximized');
    const newCard = grid.querySelector(`.account-card[data-id="${id}"]`);
    if (newCard) newCard.classList.add('maximized');
  }

  const acc = getAccountById(id);
  if (acc) addressBar.value = acc.url;
  renderSidebar();
  const ws = getActiveWorkspace();
  if (ws && ws.layout === 'single') renderGrid();
  document.querySelectorAll('.account-card').forEach((el) => el.classList.toggle('active-card', Number(el.dataset.id) === id));
  updateStatusBar(); updateNavButtons(); updateZoomLabel(); updateMuteButton();
}

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------
function renderSidebar() {
  const ws = getActiveWorkspace();
  $('#workspace-title').textContent = ws ? ws.name : '';
  $('#workspace-icon-badge').innerHTML = ws ? ICONS[ws.iconKey] || ICONS.apps : '';
  $('#workspace-icon-badge').style.color = ws ? ws.color : '';
  accountListEl.innerHTML = '';
  if (!ws) return;

  ws.accounts.forEach((acc) => {
    const item = document.createElement('div');
    item.className = 'account-item' + (acc.id === activeAccountId ? ' active' : '') + (acc.status === 'closed' ? ' closed' : '');
    item.dataset.id = acc.id;
    item.draggable = true;
    const statsLine = acc.status === 'open' ? `CPU —  RAM —` : '';
    item.innerHTML = `
      <div class="row1">
        <span class="dot ${acc.status === 'closed' ? 'closed-dot' : ''}" style="background:${acc.status === 'closed' ? '' : ACCOUNT_COLORS[acc.colorIdx % ACCOUNT_COLORS.length]}"></span>
        <span class="blur-target">${escapeHtml(acc.name)}</span>
      </div>
      <div class="row2">${acc.status === 'open' ? t('statusOnline') + ' · ' + formatUptime(acc.createdAt) : t('statusClosed')}</div>
      <div class="row3" data-stats="${acc.id}">${statsLine}</div>
    `;
    item.addEventListener('click', () => { if (acc.status === 'closed') openAccount(acc.id); else setActiveAccount(acc.id); });
    item.addEventListener('contextmenu', (e) => { e.preventDefault(); openContextMenu(e.clientX, e.clientY, acc.id); });
    item.addEventListener('dragstart', (e) => { item.classList.add('dragging'); e.dataTransfer.setData('text/acc-id', String(acc.id)); });
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
    item.addEventListener('dragover', (e) => { e.preventDefault(); item.classList.add('drag-over'); });
    item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
    item.addEventListener('drop', (e) => {
      e.preventDefault(); item.classList.remove('drag-over');
      const draggedId = Number(e.dataTransfer.getData('text/acc-id'));
      if (draggedId) reorderAccount(draggedId, acc.id);
    });
    accountListEl.appendChild(item);
  });
}
$('#close-all-btn').addEventListener('click', closeAllAccountsOfActiveWorkspace);

// ---------------------------------------------------------------------------
// Grid principal — mantém webviews de TODOS os workspaces montadas (nunca
// remove/reparenta ao trocar de workspace: só oculta com display:none),
// para que as contas continuem rodando em segundo plano sem recarregar.
// ---------------------------------------------------------------------------
function computeAutoGrid(n) {
  if (n === 0) return { cols: 1, rows: 1 };
  const cols = Math.ceil(Math.sqrt(n));
  return { cols, rows: Math.ceil(n / cols) };
}

// ---------------------------------------------------------------------------
// Divisórias arrastáveis na Grade automática (estilo editor de código:
// arrastar a linha entre 2 painéis vizinhos só redimensiona esses dois)
//
// Otimizações:
// - "criar" (DOM + listeners) só roda quando o grid é reconstruído; durante
//   o arraste usamos "reposicionar", que só recalcula números e atualiza
//   `style.left`/`style.top` dos elementos já existentes (sem recriar nada).
// - o tamanho do container é lido (grid.clientWidth/Height) UMA vez no
//   mousedown, não a cada mousemove — ler layout logo depois de escrever
//   `gridTemplateColumns` força um reflow síncrono ("layout thrashing");
//   guardando o valor em cache evitamos qualquer leitura de layout durante
//   o arraste inteiro.
// - as atualizações de mousemove são agrupadas com requestAnimationFrame,
//   então mesmo que o mouse dispare dezenas de eventos entre frames, só
//   aplicamos uma vez por frame.
// ---------------------------------------------------------------------------
const GRID_PADDING = 6; // deve bater com o padding do #grid no CSS
const GRID_GAP = 6;
const MIN_FR = 0.2;

function clearAutoGridGutters() {
  grid.querySelectorAll('.col-gutter, .row-gutter').forEach((el) => el.remove());
}

function computeTrackBoundaries(fracArray, containerSize, gap) {
  const totalFr = fracArray.reduce((a, b) => a + b, 0) || 1;
  const totalGaps = gap * Math.max(fracArray.length - 1, 0);
  const usable = Math.max(containerSize - totalGaps, 0);
  let pos = 0;
  const boundaries = [];
  fracArray.forEach((fr) => {
    pos += (fr / totalFr) * usable;
    boundaries.push(pos);
    pos += gap;
  });
  return boundaries; // boundaries[i] = borda direita/inferior da faixa i (antes do gap seguinte)
}

// Recria os elementos de divisória do zero (cara — só na renderização do grid)
function layoutAutoGridGutters(ws, cols, rows) {
  clearAutoGridGutters();
  if (!ws || ws.layout !== 'auto') return;
  const contentWidth = grid.clientWidth - GRID_PADDING * 2;
  const contentHeight = grid.clientHeight - GRID_PADDING * 2;

  if (cols > 1) {
    for (let i = 0; i < cols - 1; i++) {
      const gutter = document.createElement('div');
      gutter.className = 'col-gutter';
      gutter.addEventListener('mousedown', (e) => startColumnDrag(e, ws, i));
      grid.appendChild(gutter);
    }
    repositionGutters('col', ws.autoGridColFr, contentWidth);
  }
  if (rows > 1) {
    for (let i = 0; i < rows - 1; i++) {
      const gutter = document.createElement('div');
      gutter.className = 'row-gutter';
      gutter.addEventListener('mousedown', (e) => startRowDrag(e, ws, i));
      grid.appendChild(gutter);
    }
    repositionGutters('row', ws.autoGridRowFr, contentHeight);
  }
}

// Só reposiciona os elementos já existentes — nenhuma leitura de layout,
// nenhuma criação de nó/listener. Chamado a cada frame durante o arraste.
function repositionGutters(axis, fracArray, containerSize) {
  const boundaries = computeTrackBoundaries(fracArray, containerSize, GRID_GAP);
  const els = grid.querySelectorAll(axis === 'col' ? '.col-gutter' : '.row-gutter');
  const prop = axis === 'col' ? 'left' : 'top';
  els.forEach((el, idx) => {
    el.style[prop] = `${GRID_PADDING + boundaries[idx] + GRID_GAP / 2 - 3}px`;
  });
}

function startAxisDrag(e, ws, i, axis) {
  e.preventDefault();
  const isCol = axis === 'col';
  const frArray = isCol ? ws.autoGridColFr : ws.autoGridRowFr;
  const startPos = isCol ? e.clientX : e.clientY;
  const startA = frArray[i];
  const startB = frArray[i + 1];
  const sum = startA + startB;
  // Lido UMA vez — o tamanho do container não muda durante o arraste de um só eixo.
  const containerSize = (isCol ? grid.clientWidth : grid.clientHeight) - GRID_PADDING * 2;
  const totalFr = frArray.reduce((a, b) => a + b, 0);
  const frPerPixel = totalFr / Math.max(containerSize, 1);

  // Cada <webview> roda num processo separado e "engole" os eventos de mouse
  // quando o cursor passa por cima dela — por isso o arraste "parava" ao
  // cruzar outra conta. Uma camada transparente por cima de tudo (elemento
  // comum do documento, não um webview) captura o mouse o tempo todo,
  // independente de sobre qual conta o cursor esteja passando.
  const captureLayer = document.createElement('div');
  captureLayer.className = 'drag-capture-layer';
  captureLayer.style.cursor = isCol ? 'col-resize' : 'row-resize';
  document.body.appendChild(captureLayer);
  document.body.style.cursor = isCol ? 'col-resize' : 'row-resize';

  let rafId = null;
  let lastEvent = null;

  function apply() {
    rafId = null;
    const deltaFr = ((isCol ? lastEvent.clientX : lastEvent.clientY) - startPos) * frPerPixel;
    // Clamp preservando a soma (startA+startB) — garante os dois lados dentro
    // do limite mínimo ao mesmo tempo, sem os "saltos" do clamp sequencial.
    let newA = Math.min(Math.max(startA + deltaFr, MIN_FR), sum - MIN_FR);
    const newB = sum - newA;
    frArray[i] = newA;
    frArray[i + 1] = newB;
    grid.style[isCol ? 'gridTemplateColumns' : 'gridTemplateRows'] = frArray.map((v) => `${v.toFixed(4)}fr`).join(' ');
    repositionGutters(axis, frArray, containerSize);
  }
  function onMove(ev) {
    lastEvent = ev;
    if (rafId == null) rafId = requestAnimationFrame(apply);
  }
  function onUp() {
    captureLayer.removeEventListener('mousemove', onMove);
    captureLayer.removeEventListener('mouseup', onUp);
    captureLayer.remove();
    if (rafId != null) cancelAnimationFrame(rafId);
    document.body.style.cursor = '';
    schedulePersist();
  }
  captureLayer.addEventListener('mousemove', onMove);
  captureLayer.addEventListener('mouseup', onUp);
  captureLayer.addEventListener('mouseleave', onUp);
}
function startColumnDrag(e, ws, i) { startAxisDrag(e, ws, i, 'col'); }
function startRowDrag(e, ws, i) { startAxisDrag(e, ws, i, 'row'); }

function renderGrid() {
  const ws = getActiveWorkspace();
  const layout = ws ? (ws.layout || 'auto') : 'auto';
  const allOpenThisWorkspace = ws ? ws.accounts.filter((a) => a.status === 'open') : [];

  let visibleAccounts = allOpenThisWorkspace;
  if (layout === 'single') {
    const active = allOpenThisWorkspace.find((a) => a.id === activeAccountId);
    visibleAccounts = active ? [active] : (allOpenThisWorkspace[0] ? [allOpenThisWorkspace[0]] : []);
  }
  const visibleOrder = new Map(visibleAccounts.map((a, idx) => [a.id, idx]));

  grid.classList.toggle('layout-single', layout === 'single');
  grid.classList.toggle('layout-free', layout === 'free');

  const allOpenIdsEverywhere = new Set(state.workspaces.flatMap((w) => w.accounts.filter((a) => a.status === 'open').map((a) => a.id)));
  Array.from(grid.children).forEach((child) => {
    if (!child.classList || !child.classList.contains('account-card')) return;
    const id = Number(child.dataset.id);
    if (!allOpenIdsEverywhere.has(id)) { child.remove(); rafThrottleState.delete(id); return; }
    const isVisible = visibleOrder.has(id);
    if (isVisible) { child.style.display = ''; child.style.order = String(visibleOrder.get(id)); }
    else { child.style.display = 'none'; }
    const webview = child.querySelector('webview');
    if (webview) applyRafThrottle(webview, id, isVisible);
  });

  visibleAccounts.forEach((acc, idx) => {
    if (!grid.querySelector(`.account-card[data-id="${acc.id}"]`)) {
      const card = buildCard(acc);
      card.style.order = String(idx);
      grid.appendChild(card);
    }
  });

  if (layout === 'columns') {
    grid.style.gridTemplateColumns = `repeat(${Math.max(visibleAccounts.length, 1)}, 1fr)`;
    grid.style.gridTemplateRows = '1fr';
  } else if (layout === 'rows') {
    grid.style.gridTemplateColumns = '1fr';
    grid.style.gridTemplateRows = `repeat(${Math.max(visibleAccounts.length, 1)}, 1fr)`;
  } else if (layout === 'single' || layout === 'free') {
    grid.style.gridTemplateColumns = ''; grid.style.gridTemplateRows = '';
  } else {
    const { cols, rows } = computeAutoGrid(visibleAccounts.length);
    if (ws) {
      if (!Array.isArray(ws.autoGridColFr) || ws.autoGridColFr.length !== cols) ws.autoGridColFr = new Array(cols).fill(1);
      if (!Array.isArray(ws.autoGridRowFr) || ws.autoGridRowFr.length !== rows) ws.autoGridRowFr = new Array(rows).fill(1);
      grid.style.gridTemplateColumns = ws.autoGridColFr.map((v) => `${v}fr`).join(' ');
      grid.style.gridTemplateRows = ws.autoGridRowFr.map((v) => `${v}fr`).join(' ');
    } else {
      grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }
  }

  const emptyEl = $('#grid-empty-state');
  if (emptyEl) emptyEl.classList.toggle('hidden', visibleAccounts.length !== 0);

  clearAutoGridGutters();
  if (layout === 'auto' && ws) {
    const { cols, rows } = computeAutoGrid(visibleAccounts.length);
    if (cols > 1 || rows > 1) requestAnimationFrame(() => layoutAutoGridGutters(ws, cols, rows));
  }
}

// ---------------------------------------------------------------------------
// Throttle de requestAnimationFrame — corrige o "bug de segundo plano" (uma
// conta com display:none continua rodando a 60fps completos por dentro,
// já que o Electron não pausa isso sozinho) e serve de base pro Modo Eco.
//
// Como funciona: injetamos uma pequena função na página de cada conta que
// TROCA window.requestAnimationFrame por uma versão baseada em setTimeout
// com um intervalo configurável. O jogo continua recebendo os "ticks" de
// animação normalmente (com o timestamp certo), só que com menos frequência
// — jogos idle/incremental calculam progresso pela diferença de tempo real
// (Date.now()), não pela quantidade de frames, então o progresso NÃO se
// perde, só a frequência de redesenho cai. Nada é pausado/congelado.
// ---------------------------------------------------------------------------
const RAF_THROTTLE_INJECT = `(function(){
  if (window.__idleHubRafPatched) return;
  window.__idleHubRafPatched = true;
  var nativeRAF = window.requestAnimationFrame.bind(window);
  var nativeCAF = window.cancelAnimationFrame.bind(window);
  var throttleMs = 0;
  var pending = Object.create(null);
  var nextId = 1;
  window.__idleHubSetRafThrottle = function(ms) { throttleMs = ms || 0; };
  window.requestAnimationFrame = function(cb) {
    if (!throttleMs) return nativeRAF(cb);
    var id = nextId++;
    pending[id] = setTimeout(function(){ delete pending[id]; cb(performance.now()); }, throttleMs);
    return id;
  };
  window.cancelAnimationFrame = function(id) {
    if (pending[id]) { clearTimeout(pending[id]); delete pending[id]; return; }
    nativeCAF(id);
  };
})();`;

const BACKGROUND_THROTTLE_MS = 1500; // contas ocultas (outro workspace, ou cobertas no layout "Painel único")
const ECO_ACTIVE_THROTTLE_MS = 200;  // conta visível, mas com Modo Eco ligado
const rafThrottleState = new Map(); // accountId -> valor já aplicado (evita mandar executeJavaScript à toa)

function computeThrottleFor(isVisible) {
  if (!isVisible) return BACKGROUND_THROTTLE_MS;
  return state.settings.modoEco ? ECO_ACTIVE_THROTTLE_MS : 0;
}
function applyRafThrottle(webview, accountId, isVisible) {
  const ms = computeThrottleFor(isVisible);
  if (rafThrottleState.get(accountId) === ms) return;
  rafThrottleState.set(accountId, ms);
  webview.executeJavaScript(`window.__idleHubSetRafThrottle && window.__idleHubSetRafThrottle(${ms})`).catch(() => {});
}
// Chamado ao ligar/desligar o Modo Eco — reaplica o throttle certo em tudo
// que já está montado (contas ocultas não mudam, só as visíveis).
function refreshAllRafThrottles() {
  document.querySelectorAll('.account-card').forEach((card) => {
    const id = Number(card.dataset.id);
    const isVisible = card.style.display !== 'none';
    const webview = card.querySelector('webview');
    if (webview) applyRafThrottle(webview, id, isVisible);
  });
}

function buildCard(acc) {
  const card = document.createElement('div');
  card.className = 'account-card';
  card.dataset.id = acc.id;
  card.draggable = true;

  const ws = state.workspaces.find((w) => w.accounts.some((a) => a.id === acc.id));
  if (ws && ws.layout === 'free') {
    card.style.width = (acc.freeWidth || 420) + 'px';
    card.style.height = (acc.freeHeight || 300) + 'px';
  }

  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <span class="drag-handle">::</span>
    <span class="dot" style="background:${ACCOUNT_COLORS[acc.colorIdx % ACCOUNT_COLORS.length]}"></span>
    <span class="name blur-target">${escapeHtml(acc.name)}</span>
    <span class="url blur-target">${escapeHtml(acc.url)}</span>
    <button class="mute" title="Mudo">${muteIcon(acc.muted)}</button>
    <button class="reload" title="Recarregar">${ICONS_MINI.reload}</button>
    <button class="expand" title="Maximizar/Restaurar">${ICONS_MINI.expand}</button>
    <button class="close" title="Fechar conta">${ICONS_MINI.close}</button>
  `;

  const wrap = document.createElement('div');
  wrap.className = 'card-webview-wrap';

  const webview = document.createElement('webview');
  webview.setAttribute('src', acc.url);
  webview.setAttribute('partition', acc.partition);
  webview.setAttribute('allowpopups', '');
  try { window.nativeAPI.registerPartitionDownloads(acc.partition); } catch (err) { /* ignore */ }

  // Interagir com o conteúdo da página seleciona a conta automaticamente
  webview.addEventListener('focus', () => setActiveAccount(acc.id));

  webview.addEventListener('dom-ready', () => {
    acc.webContentsId = webview.getWebContentsId();
    if (acc.muted) webview.setAudioMuted(true);
    webview.setZoomFactor(acc.zoomFactor || 1);
    if (acc.id === activeAccountId) { updateNavButtons(); updateZoomLabel(); }
    rafThrottleState.delete(acc.id); // página recarregou — a patch some, precisa injetar de novo
    webview.executeJavaScript(RAF_THROTTLE_INJECT).then(() => {
      applyRafThrottle(webview, acc.id, card.style.display !== 'none');
    }).catch((err) => console.error('Erro ao aplicar throttle de rAF:', err));
    if (ws) {
      state.scripts.filter((s) => scriptAppliesToAccount(s, ws.id, acc.id)).forEach((s) => {
        webview.executeJavaScript(s.code).catch((err) => console.error(`Erro no script "${s.name}":`, err));
      });
    }
  });
  webview.addEventListener('did-navigate', (e) => {
    acc.url = e.url;
    header.querySelector('.url').textContent = e.url;
    if (acc.id === activeAccountId) { addressBar.value = e.url; updateNavButtons(); }
    schedulePersist();
  });
  webview.addEventListener('did-navigate-in-page', (e) => {
    acc.url = e.url;
    header.querySelector('.url').textContent = e.url;
    if (acc.id === activeAccountId) updateNavButtons();
  });

  wrap.appendChild(webview);
  card.appendChild(header);
  card.appendChild(wrap);

  card.addEventListener('mousedown', () => setActiveAccount(acc.id));
  card.addEventListener('contextmenu', (e) => { e.preventDefault(); openContextMenu(e.clientX, e.clientY, acc.id); });

  header.querySelector('.mute').addEventListener('click', (ev) => {
    ev.stopPropagation();
    acc.muted = !acc.muted;
    webview.setAudioMuted(acc.muted);
    header.querySelector('.mute').innerHTML = muteIcon(acc.muted);
    if (acc.id === activeAccountId) updateMuteButton();
    schedulePersist();
  });
  header.querySelector('.reload').addEventListener('click', (ev) => { ev.stopPropagation(); webview.reload(); });
  header.dataset.tooltip = t('dblClickHint');
  header.querySelector('.expand').addEventListener('click', (ev) => { ev.stopPropagation(); card.classList.toggle('maximized'); });
  header.addEventListener('dblclick', (ev) => {
    if (ev.target.closest('button')) return; // duplo-clique num botão do cabeçalho não deve maximizar
    card.classList.toggle('maximized');
  });
  header.querySelector('.close').addEventListener('click', (ev) => { ev.stopPropagation(); closeAccount(acc.id); });

  card.addEventListener('dragstart', (e) => { card.classList.add('dragging'); e.dataTransfer.setData('text/acc-id', String(acc.id)); });
  card.addEventListener('dragend', () => card.classList.remove('dragging'));
  card.addEventListener('dragover', (e) => { e.preventDefault(); card.classList.add('drag-over'); });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', (e) => {
    e.preventDefault(); card.classList.remove('drag-over');
    const draggedId = Number(e.dataTransfer.getData('text/acc-id'));
    if (draggedId) reorderAccount(draggedId, acc.id);
  });

  if (ws && ws.layout === 'free' && 'ResizeObserver' in window) {
    let resizeTimer = null;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = Math.round(entry.contentRect.width + 2);
        const h = Math.round(entry.contentRect.height + 34);
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { acc.freeWidth = w; acc.freeHeight = h; schedulePersist(); }, 300);
      }
    });
    observer.observe(card);
  }

  return card;
}

// ---------------------------------------------------------------------------
// Menu de contexto (conta)
// ---------------------------------------------------------------------------
const ctxMenu = $('#context-menu');
let ctxAccountId = null;
function openContextMenu(x, y, accountId) {
  ctxAccountId = accountId;
  const acc = getAccountById(accountId);
  if (!acc) return;
  const muteBtn = ctxMenu.querySelector('[data-action="mute"] span');
  muteBtn.textContent = acc.muted ? t('ctxUnmute') : t('ctxMute');
  const closeBtn = ctxMenu.querySelector('[data-action="close"]');
  closeBtn.style.display = acc.status === 'open' ? 'flex' : 'none';
  ctxMenu.classList.remove('hidden');
  const w = 220, h = 340;
  ctxMenu.style.left = `${Math.max(4, Math.min(x, window.innerWidth - w - 8))}px`;
  ctxMenu.style.top = `${Math.max(4, Math.min(y, window.innerHeight - h - 8))}px`;
}
function closeContextMenu() { ctxMenu.classList.add('hidden'); ctxAccountId = null; }
document.addEventListener('click', (e) => { if (!ctxMenu.contains(e.target)) closeContextMenu(); });
ctxMenu.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn || ctxAccountId == null) return;
  const id = ctxAccountId, acc = getAccountById(id), action = btn.dataset.action;
  switch (action) {
    case 'reload': {
      const webview = grid.querySelector(`.account-card[data-id="${id}"] webview`);
      if (webview) webview.reload(); else if (acc) openAccount(id);
      break;
    }
    case 'devtools': {
      const webview = grid.querySelector(`.account-card[data-id="${id}"] webview`);
      if (webview) { if (webview.isDevToolsOpened()) webview.closeDevTools(); else webview.openDevTools(); }
      else if (acc) openAccount(id);
      break;
    }
    case 'default-url': {
      if (!acc) break;
      if (acc.status === 'open') {
        const webview = grid.querySelector(`.account-card[data-id="${id}"] webview`);
        if (webview) webview.loadURL(acc.defaultUrl);
        acc.url = acc.defaultUrl;
      } else openAccount(id, acc.defaultUrl);
      break;
    }
    case 'mute': {
      if (!acc) break;
      acc.muted = !acc.muted;
      const card = grid.querySelector(`.account-card[data-id="${id}"]`);
      const webview = card && card.querySelector('webview');
      if (webview) webview.setAudioMuted(acc.muted);
      const cardMuteBtn = card && card.querySelector('.mute');
      if (cardMuteBtn) cardMuteBtn.innerHTML = muteIcon(acc.muted);
      if (id === activeAccountId) updateMuteButton();
      schedulePersist();
      break;
    }
    case 'close': closeAccount(id); break;
    case 'edit': openAccountModal('edit', id); break;
    case 'duplicate': duplicateAccount(id); break;
    case 'clear-data': clearAccountData(id); break;
    case 'delete': deleteAccount(id); break;
  }
  closeContextMenu();
});

// ---------------------------------------------------------------------------
// Toolbar: voltar / avançar / recarregar / início / endereço / aplicar a todas
// ---------------------------------------------------------------------------
function updateNavButtons() {
  const webview = getActiveWebview();
  const back = $('#nav-back'), fwd = $('#nav-forward');
  if (!webview) { back.disabled = true; fwd.disabled = true; return; }
  try { back.disabled = !webview.canGoBack(); fwd.disabled = !webview.canGoForward(); }
  catch (err) { back.disabled = true; fwd.disabled = true; }
}
$('#nav-back').addEventListener('click', () => { const w = getActiveWebview(); if (w && w.canGoBack()) w.goBack(); });
$('#nav-forward').addEventListener('click', () => { const w = getActiveWebview(); if (w && w.canGoForward()) w.goForward(); });
$('#nav-reload').addEventListener('click', () => { const w = getActiveWebview(); if (w) w.reload(); });
$('#nav-home').addEventListener('click', () => {
  const ws = getActiveWorkspace(), w = getActiveWebview();
  if (w && ws) { w.loadURL(ws.defaultUrl); const acc = getActiveAccount(); if (acc) acc.url = ws.defaultUrl; }
});
function navigateActive(url) {
  if (!activeAccountId) return;
  const full = normalizeUrl(url.trim());
  const webview = getActiveWebview();
  if (webview) webview.loadURL(full);
  const acc = getAccountById(activeAccountId);
  if (acc) acc.url = full;
}
function navigateAllOpen(url) {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const full = normalizeUrl(url.trim());
  ws.accounts.filter((a) => a.status === 'open').forEach((acc) => {
    const webview = grid.querySelector(`.account-card[data-id="${acc.id}"] webview`);
    if (webview) webview.loadURL(full);
    acc.url = full;
  });
}
$('#nav-go-all').addEventListener('click', () => navigateAllOpen(addressBar.value || DEFAULT_URL));
addressBar.addEventListener('keydown', (e) => { if (e.key === 'Enter') navigateActive(addressBar.value); });

// ---------------------------------------------------------------------------
// Toolbar: mudo / zoom / downloads / modo tela limpa / tela cheia / config / ajuda
// ---------------------------------------------------------------------------
function updateMuteButton() {
  const acc = getActiveAccount();
  const btn = $('#topbar-mute');
  btn.innerHTML = muteIcon(acc ? acc.muted : false);
  btn.classList.toggle('active-state', !!(acc && acc.muted));
}
$('#topbar-mute').addEventListener('click', () => {
  const acc = getActiveAccount();
  if (!acc) return;
  acc.muted = !acc.muted;
  const webview = getActiveWebview();
  if (webview) webview.setAudioMuted(acc.muted);
  const card = getActiveCard();
  const cardMuteBtn = card && card.querySelector('.mute');
  if (cardMuteBtn) cardMuteBtn.innerHTML = muteIcon(acc.muted);
  updateMuteButton();
  schedulePersist();
});

function updateZoomLabel() {
  const acc = getActiveAccount();
  $('#zoom-label').textContent = `${Math.round((acc ? acc.zoomFactor || 1 : 1) * 100)}%`;
}
function adjustZoom(delta) {
  const acc = getActiveAccount();
  const webview = getActiveWebview();
  if (!acc || !webview) return;
  let z = Math.min(2, Math.max(0.5, Math.round(((acc.zoomFactor || 1) + delta) * 100) / 100));
  acc.zoomFactor = z;
  webview.setZoomFactor(z);
  updateZoomLabel();
  schedulePersist();
}
function resetZoom() {
  const acc = getActiveAccount();
  const webview = getActiveWebview();
  if (!acc || !webview) return;
  acc.zoomFactor = 1;
  webview.setZoomFactor(1);
  updateZoomLabel();
  schedulePersist();
}
$('#topbar-zoom').addEventListener('click', (e) => { e.stopPropagation(); $('#downloads-popover').classList.add('hidden'); $('#zoom-popover').classList.toggle('hidden'); });
document.addEventListener('click', () => $('#zoom-popover').classList.add('hidden'));
$('#zoom-popover').addEventListener('click', (e) => e.stopPropagation());
$('#zoom-in').addEventListener('click', () => adjustZoom(0.1));
$('#zoom-out').addEventListener('click', () => adjustZoom(-0.1));
$('#zoom-reset').addEventListener('click', resetZoom);

// ---------------------------------------------------------------------------
// Downloads: popover flutuante com os downloads desta sessão
// ---------------------------------------------------------------------------
let downloadsLog = [];
function formatBytes(n) {
  if (!n) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0; let v = n;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
  return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}
function renderDownloadsList() {
  const wrap = $('#downloads-list');
  if (!downloadsLog.length) {
    wrap.innerHTML = `<div class="downloads-empty">${t('downloadsEmpty')}</div>`;
    return;
  }
  wrap.innerHTML = downloadsLog.slice().reverse().map((d) => {
    let statusLabel;
    if (d.state === 'completed') statusLabel = `✓ ${formatBytes(d.totalBytes || d.receivedBytes)}`;
    else if (d.state === 'progressing') statusLabel = `${formatBytes(d.receivedBytes)} / ${formatBytes(d.totalBytes)}`;
    else if (d.state === 'cancelled' || d.state === 'interrupted') statusLabel = '✕';
    else statusLabel = '…';
    return `<div class="download-item">
      <span class="download-name" title="${escapeHtml(d.filename || '')}">${escapeHtml(d.filename || '')}</span>
      <span class="download-status ${d.state}">${statusLabel}</span>
    </div>`;
  }).join('');
}
try {
  window.nativeAPI.onDownloadEvent((data) => {
    const idx = downloadsLog.findIndex((d) => d.id === data.id);
    if (idx === -1) downloadsLog.push(data);
    else downloadsLog[idx] = { ...downloadsLog[idx], ...data };
    if (downloadsLog.length > 50) downloadsLog = downloadsLog.slice(-50);
    if (!$('#downloads-popover').classList.contains('hidden')) renderDownloadsList();
  });
} catch (err) { /* ignore */ }
$('#topbar-downloads').addEventListener('click', (e) => {
  e.stopPropagation();
  $('#zoom-popover').classList.add('hidden');
  const pop = $('#downloads-popover');
  pop.classList.toggle('hidden');
  if (!pop.classList.contains('hidden')) renderDownloadsList();
});
$('#downloads-popover').addEventListener('click', (e) => e.stopPropagation());
document.addEventListener('click', () => $('#downloads-popover').classList.add('hidden'));

$('#topbar-eco').addEventListener('click', toggleEcoMode);
$('#topbar-presentation').addEventListener('click', togglePresentationMode);
$('#topbar-cleanmode').addEventListener('click', toggleCleanMode);
$('#topbar-fullscreen').addEventListener('click', async () => { try { await window.nativeAPI.toggleFullscreen(); } catch (err) { /* ignore */ } });
$('#topbar-settings').addEventListener('click', () => openSettingsModal());
$('#topbar-help').addEventListener('click', () => openShortcutsModal());

// ---------------------------------------------------------------------------
// Atalhos de teclado — sistema com combinações remapeáveis pelo usuário
// ---------------------------------------------------------------------------
const ACTION_DEFS = [
  { id: 'nextPanel', labelKey: 'shcNextPanel', def: { ctrl: true, key: 'Tab' } },
  { id: 'newWorkspace', labelKey: 'shcNewWorkspace', def: { ctrl: true, shift: true, key: 'n' } },
  { id: 'newAccount', labelKey: 'shcNewAccount', def: { ctrl: true, key: 'n' } },
  { id: 'deleteAccount', labelKey: 'shcDeleteAccount', def: { ctrl: true, key: 'x' } },
  { id: 'devtools', labelKey: 'shcDevtools', def: { key: 'F12' } },
  { id: 'reloadActive', labelKey: 'shcReloadActive', def: { ctrl: true, key: 'r' } },
  { id: 'reloadNoCache', labelKey: 'shcReloadNoCache', def: { ctrl: true, shift: true, key: 'r' } },
  { id: 'reloadAll', labelKey: 'shcReloadAll', def: { ctrl: true, alt: true, key: 'r' } },
  { id: 'muteActive', labelKey: 'shcMuteActive', def: { ctrl: true, key: 'm' } },
  { id: 'muteAll', labelKey: 'shcMuteAll', def: { ctrl: true, shift: true, key: 'm' } },
  { id: 'focusAddress', labelKey: 'shcFocusAddress', def: { ctrl: true, key: 'l' } },
  { id: 'zoomIn', labelKey: 'shcZoomIn', def: { ctrl: true, key: '=' } },
  { id: 'zoomOut', labelKey: 'shcZoomOut', def: { ctrl: true, key: '-' } },
  { id: 'zoomReset', labelKey: 'shcZoomReset', def: { ctrl: true, key: '0' } },
  { id: 'cleanMode', labelKey: 'shcCleanMode', def: { ctrl: true, shift: true, key: 'z' } },
  { id: 'presentationMode', labelKey: 'shcPresentation', def: { ctrl: true, shift: true, key: 'p' } },
  { id: 'ecoMode', labelKey: 'shcEcoMode', def: { ctrl: true, shift: true, key: 'e' } },
  { id: 'fullscreen', labelKey: 'shcFullscreen', def: { key: 'F11' } },
  { id: 'settings', labelKey: 'shcSettings', def: { ctrl: true, key: ',' } },
  { id: 'help', labelKey: 'shcHelp', def: { key: 'F1' } },
];
// Combos que continuam sendo o padrão do sistema operacional/navegador
// (recortar/copiar/colar/desfazer/refazer) enquanto o foco estiver num campo
// de texto NOSSO (endereço, nome de script, etc.) — nunca interceptamos esses
// ali, mesmo que "excluir conta" use Ctrl+X por padrão.
const NATIVE_EDIT_KEYS = ['x', 'c', 'v', 'a', 'z', 'y'];

function getBinding(actionId) {
  const custom = state.settings.keybindings && state.settings.keybindings[actionId];
  if (custom) return custom;
  const def = ACTION_DEFS.find((a) => a.id === actionId);
  return def ? def.def : null;
}
function normalizeKey(key) {
  return key.length === 1 ? key.toLowerCase() : key;
}
function comboMatches(e, combo) {
  if (!combo) return false;
  const hasCtrl = e.ctrlKey || e.metaKey;
  if (hasCtrl !== !!combo.ctrl) return false;
  if (e.shiftKey !== !!combo.shift) return false;
  if (e.altKey !== !!combo.alt) return false;
  return normalizeKey(e.key) === combo.key;
}
function comboToKeyParts(combo) {
  if (!combo) return ['—'];
  const parts = [];
  if (combo.ctrl) parts.push('Ctrl');
  if (combo.shift) parts.push('Shift');
  if (combo.alt) parts.push('Alt');
  let k = combo.key;
  if (k === ' ') k = 'Space';
  else if (k.length === 1) k = k.toUpperCase();
  parts.push(k);
  return parts;
}
function isEditableTarget(target) {
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable;
}

function runAction(id) {
  switch (id) {
    case 'nextPanel': {
      const open = getOpenAccountsOfActiveWorkspace();
      if (!open.length) return;
      const idx = open.findIndex((a) => a.id === activeAccountId);
      setActiveAccount(open[(idx + 1) % open.length].id);
      break;
    }
    case 'newWorkspace': createWorkspace(); break;
    case 'newAccount': quickCreateAccount(); break;
    case 'deleteAccount': if (activeAccountId) deleteAccount(activeAccountId); break;
    case 'devtools': {
      const w = getActiveWebview();
      if (w) { if (w.isDevToolsOpened()) w.closeDevTools(); else w.openDevTools(); }
      break;
    }
    case 'reloadActive': { const w = getActiveWebview(); if (w) w.reload(); break; }
    case 'reloadNoCache': { const w = getActiveWebview(); if (w) w.reloadIgnoringCache(); break; }
    case 'reloadAll':
      getOpenAccountsOfActiveWorkspace().forEach((acc) => {
        const w = grid.querySelector(`.account-card[data-id="${acc.id}"] webview`);
        if (w) w.reload();
      });
      break;
    case 'muteActive': $('#topbar-mute').click(); break;
    case 'muteAll': {
      const open = getOpenAccountsOfActiveWorkspace();
      const anyUnmuted = open.some((a) => !a.muted);
      open.forEach((acc) => {
        acc.muted = anyUnmuted;
        const w = grid.querySelector(`.account-card[data-id="${acc.id}"] webview`);
        if (w) w.setAudioMuted(anyUnmuted);
        const btn = grid.querySelector(`.account-card[data-id="${acc.id}"] .mute`);
        if (btn) btn.innerHTML = muteIcon(anyUnmuted);
      });
      updateMuteButton(); schedulePersist();
      break;
    }
    case 'focusAddress': addressBar.focus(); addressBar.select(); break;
    case 'zoomIn': adjustZoom(0.1); break;
    case 'zoomOut': adjustZoom(-0.1); break;
    case 'zoomReset': resetZoom(); break;
    case 'cleanMode': toggleCleanMode(); break;
    case 'presentationMode': togglePresentationMode(); break;
    case 'ecoMode': toggleEcoMode(); break;
    case 'fullscreen': window.nativeAPI.toggleFullscreen(); break;
    case 'settings': openSettingsModal(); break;
    case 'help': openShortcutsModal(); break;
  }
}

window.addEventListener('keydown', (e) => {
  // Modo "capturando nova tecla" no editor de atalhos tem prioridade sobre tudo
  if (capturingActionId) { captureKeybinding(e); return; }

  const mod = e.ctrlKey || e.metaKey;

  // Nunca atrapalha recortar/copiar/colar/desfazer normais enquanto o foco
  // está num campo de texto nosso (mesmo que "Excluir conta" use Ctrl+X).
  if (isEditableTarget(e.target) && mod && !e.altKey && NATIVE_EDIT_KEYS.includes(e.key.toLowerCase())) return;

  // Ctrl+1..9 seleciona o painel — é uma faixa, não faz parte do remapeamento
  if (mod && !e.shiftKey && !e.altKey && /^[1-9]$/.test(e.key)) {
    e.preventDefault();
    const open = getOpenAccountsOfActiveWorkspace();
    const acc = open[Number(e.key) - 1];
    if (acc) setActiveAccount(acc.id);
    return;
  }

  for (const def of ACTION_DEFS) {
    if (comboMatches(e, getBinding(def.id))) { e.preventDefault(); runAction(def.id); return; }
  }
});

// ---------------------------------------------------------------------------
// Modal: Atalhos de teclado (editável — clique em "Alterar" pra remapear)
// ---------------------------------------------------------------------------
let capturingActionId = null;
function startCapture(actionId, btnEl) {
  capturingActionId = actionId;
  document.querySelectorAll('.shortcut-change-btn').forEach((b) => b.classList.remove('capturing'));
  btnEl.textContent = t('pressKeys');
  btnEl.classList.add('capturing');
}
function captureKeybinding(e) {
  e.preventDefault();
  if (e.key === 'Escape') { capturingActionId = null; renderShortcutsList(); return; }
  if (['Control', 'Shift', 'Alt', 'Meta'].includes(e.key)) return; // espera uma tecla "de verdade", não só o modificador
  const combo = { ctrl: e.ctrlKey || e.metaKey, shift: e.shiftKey, alt: e.altKey, key: normalizeKey(e.key) };
  if (!state.settings.keybindings) state.settings.keybindings = {};
  state.settings.keybindings[capturingActionId] = combo;
  capturingActionId = null;
  schedulePersist();
  renderShortcutsList();
}
function renderShortcutsList() {
  const wrap = $('#shortcuts-list');
  wrap.innerHTML = '';

  const fixedRow = document.createElement('div');
  fixedRow.className = 'shortcut-row';
  fixedRow.innerHTML = `<span>${escapeHtml(t('shcPanel19'))}</span><span class="kbd-group"><kbd>Ctrl</kbd><span class="plus">+</span><kbd>1–9</kbd></span>`;
  wrap.appendChild(fixedRow);

  ACTION_DEFS.forEach((def) => {
    const combo = getBinding(def.id);
    const row = document.createElement('div');
    row.className = 'shortcut-row';
    const kbdHtml = comboToKeyParts(combo).map((k) => `<kbd>${escapeHtml(k)}</kbd>`).join('<span class="plus">+</span>');
    row.innerHTML = `
      <span>${escapeHtml(t(def.labelKey))}</span>
      <span class="shortcut-edit-wrap">
        <span class="kbd-group">${kbdHtml}</span>
        <button class="shortcut-change-btn" type="button">${escapeHtml(t('changeBtn'))}</button>
      </span>`;
    row.querySelector('.shortcut-change-btn').addEventListener('click', (e) => startCapture(def.id, e.currentTarget));
    wrap.appendChild(row);
  });
}
function openShortcutsModal() { capturingActionId = null; renderShortcutsList(); $('#shortcuts-overlay').classList.remove('hidden'); }
$('#shortcuts-close').addEventListener('click', () => { capturingActionId = null; $('#shortcuts-overlay').classList.add('hidden'); });
$('#shortcuts-overlay').addEventListener('click', (e) => { if (e.target === $('#shortcuts-overlay')) { capturingActionId = null; $('#shortcuts-overlay').classList.add('hidden'); } });
$('#shortcuts-reset').addEventListener('click', () => {
  showConfirm(t('resetShortcutsTitle'), t('resetShortcutsBody'), () => {
    state.settings.keybindings = {};
    schedulePersist();
    renderShortcutsList();
  });
});

// ---------------------------------------------------------------------------
// Modal: editar conta (a criação agora é instantânea, sem modal)
// ---------------------------------------------------------------------------
const overlay = $('#modal-overlay');
let modalTargetId = null;
function openAccountModal(mode, accountId) {
  modalTargetId = accountId || null;
  const acc = getAccountById(accountId);
  $('#modal-name').value = acc ? acc.name : '';
  $('#modal-url').value = acc ? acc.defaultUrl : '';
  overlay.classList.remove('hidden');
  $('#modal-name').focus();
}
$('#modal-cancel').addEventListener('click', () => overlay.classList.add('hidden'));
$('#modal-confirm').addEventListener('click', () => {
  const name = $('#modal-name').value.trim();
  const url = $('#modal-url').value.trim();
  overlay.classList.add('hidden');
  if (modalTargetId != null) editAccount(modalTargetId, name, url);
});
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.add('hidden'); });

$('#add-account-btn').addEventListener('click', quickCreateAccount);
$('#empty-add-account-btn').addEventListener('click', quickCreateAccount);
$('#add-workspace-btn').addEventListener('click', () => createWorkspace());

// ---------------------------------------------------------------------------
// Titlebar custom
// ---------------------------------------------------------------------------
$('#btn-min').addEventListener('click', () => window.nativeAPI.minimize());
$('#btn-max').addEventListener('click', () => window.nativeAPI.maximize());
$('#btn-close').addEventListener('click', () => window.nativeAPI.close());

// ATENÇÃO: coloque aqui o seu link real de doação (Pix/Ko-fi/GitHub Sponsors/Patreon etc.)
const DONATE_URL = 'https://github.com/sponsors/';
$('#donate-btn').addEventListener('click', () => window.nativeAPI.openExternal(DONATE_URL));

// ---------------------------------------------------------------------------
// Barra de status
// ---------------------------------------------------------------------------
function layoutLabel(layout) {
  const map = { auto: 'layoutAuto', single: 'layoutSingle', columns: 'layoutColumns', rows: 'layoutRows', free: 'layoutFree' };
  return t(map[layout] || 'layoutAuto');
}
function updateStatusBar() {
  const ws = getActiveWorkspace();
  const openCount = ws ? ws.accounts.filter((a) => a.status === 'open').length : 0;
  $('#status-workspace').innerHTML = `${ws ? escapeHtml(ws.name) : ''} · ${layoutLabel(ws ? ws.layout : 'auto')} · <span id="status-count">${openCount}</span>`;
  const acc = getActiveAccount();
  $('#status-active').textContent = acc ? t('activeAccountSuffix', { name: acc.name }) : t('noActiveAccount');
}

// ---------------------------------------------------------------------------
// Estatísticas reais de CPU / RAM
// ---------------------------------------------------------------------------
async function refreshStats() {
  try {
    const metrics = await window.nativeAPI.getProcessStats();
    const byPid = new Map(metrics.map((m) => [m.pid, m]));
    let totalCpu = 0, totalMem = 0;
    const ws = getActiveWorkspace();
    const allOpenAccounts = state.workspaces.flatMap((w) => w.accounts.filter((a) => a.status === 'open'));
    for (const acc of allOpenAccounts) {
      if (acc.webContentsId != null && acc.pid == null) acc.pid = await window.nativeAPI.getPidForWebContents(acc.webContentsId);
      const m = acc.pid != null ? byPid.get(acc.pid) : null;
      if (ws && ws.accounts.includes(acc)) {
        const el = document.querySelector(`[data-stats="${acc.id}"]`);
        if (el) el.textContent = `CPU ${m ? m.cpu.toFixed(1) + '%' : '—'}  RAM ${m ? m.memoryMB + ' MB' : '—'}`;
      }
      if (m) { totalCpu += m.cpu; totalMem += m.memoryMB; }
    }
    $('#status-cpu').textContent = `CPU ${totalCpu.toFixed(1)}%`;
    $('#status-ram').textContent = `RAM ${totalMem} MB`;
  } catch (err) { console.error('Erro ao obter estatísticas', err); }
}
setInterval(refreshStats, 2000);
// Atualiza só o texto do cronômetro "Online · Xm Ys" a cada segundo, sem
// recriar a lista inteira da sidebar (evita descartar nós/listeners à toa).
function updateUptimeTimers() {
  document.querySelectorAll('.account-item:not(.closed)').forEach((item) => {
    const acc = getAccountById(Number(item.dataset.id));
    if (!acc || acc.status !== 'open') return;
    const row2 = item.querySelector('.row2');
    if (row2) row2.textContent = `${t('statusOnline')} · ${formatUptime(acc.createdAt)}`;
  });
}
setInterval(updateUptimeTimers, 1000);
setInterval(() => { if (isDirty) persistState(); }, 15000);
window.addEventListener('beforeunload', () => { persistState(); });

// ---------------------------------------------------------------------------
// Atalhos de teclado globais
// ---------------------------------------------------------------------------
// (Os atalhos de teclado agora são tratados pelo sistema data-driven definido
// mais acima, junto com o editor de atalhos do modal de Ajuda — ver ACTION_DEFS.)

// ---------------------------------------------------------------------------
// Modal: Configurações
// ---------------------------------------------------------------------------
const settingsOverlay = $('#settings-overlay');
function switchSettingsTab(tab) {
  document.querySelectorAll('.settings-tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.settings-panel').forEach((p) => p.classList.toggle('active', p.dataset.panel === tab));
}
document.querySelectorAll('.settings-tab').forEach((b) => b.addEventListener('click', () => switchSettingsTab(b.dataset.tab)));

async function openSettingsModal() {
  const s = state.settings;
  $('#update-result-box').classList.add('hidden');
  $('#set-idioma').value = s.idioma;
  $('#set-tema').value = s.tema;
  $('#set-login-item').checked = !!s.iniciarComSistema;
  $('#set-reopen-last').checked = s.reabrirUltimoWorkspace !== false;
  $('#set-clean-mode').checked = !!s.modoTelaLimpa;
  $('#set-edge-reveal').checked = s.encostarBordas !== false;
  $('#set-presentation-mode').checked = !!s.modoApresentacao;
  $('#set-eco-mode').checked = !!s.modoEco;
  $('#set-url-padrao').value = s.urlInicialPadrao || DEFAULT_URL;
  $('#set-zoom').value = String(s.zoomPadrao || 1);
  $('#set-layout-padrao').value = s.layoutPadrao || 'auto';
  $('#set-downloads-path').textContent = s.downloadsPath || t('downloadsFolderDefault');
  $('#set-ask-download').checked = s.perguntarOndeSalvar !== false;
  switchSettingsTab('geral');
  settingsOverlay.classList.remove('hidden');
  try {
    const v = await window.nativeAPI.getVersions();
    $('#about-version').textContent = v.app;
    $('#about-electron').textContent = v.electron;
    $('#about-chrome').textContent = v.chrome;
  } catch (err) { /* ignore */ }
}
$('#settings-close').addEventListener('click', () => settingsOverlay.classList.add('hidden'));
settingsOverlay.addEventListener('click', (e) => { if (e.target === settingsOverlay) settingsOverlay.classList.add('hidden'); });

$('#set-idioma').addEventListener('change', (e) => { state.settings.idioma = e.target.value; applyLanguage(e.target.value); schedulePersist(); });
$('#set-tema').addEventListener('change', (e) => { state.settings.tema = e.target.value; applyTheme(e.target.value); schedulePersist(); });
$('#set-login-item').addEventListener('change', async (e) => {
  state.settings.iniciarComSistema = e.target.checked;
  schedulePersist();
  try { await window.nativeAPI.setLoginItem(e.target.checked); } catch (err) { console.error(err); }
});
$('#set-reopen-last').addEventListener('change', (e) => { state.settings.reabrirUltimoWorkspace = e.target.checked; schedulePersist(); });
$('#set-clean-mode').addEventListener('change', (e) => { state.settings.modoTelaLimpa = e.target.checked; applyCleanMode(); schedulePersist(); });
$('#set-edge-reveal').addEventListener('change', (e) => { state.settings.encostarBordas = e.target.checked; applyCleanMode(); schedulePersist(); });
$('#set-presentation-mode').addEventListener('change', (e) => { state.settings.modoApresentacao = e.target.checked; applyPresentationMode(); schedulePersist(); });
$('#set-eco-mode').addEventListener('change', (e) => { state.settings.modoEco = e.target.checked; applyEcoMode(); schedulePersist(); });
$('#set-url-padrao').addEventListener('change', (e) => { state.settings.urlInicialPadrao = normalizeUrl(e.target.value.trim() || DEFAULT_URL); schedulePersist(); });
$('#set-zoom').addEventListener('change', (e) => { state.settings.zoomPadrao = parseFloat(e.target.value); schedulePersist(); });
$('#set-layout-padrao').addEventListener('change', (e) => { state.settings.layoutPadrao = e.target.value; schedulePersist(); });
$('#set-choose-folder').addEventListener('click', async () => {
  try {
    const folder = await window.nativeAPI.chooseDownloadsFolder();
    if (folder) { state.settings.downloadsPath = folder; $('#set-downloads-path').textContent = folder; schedulePersist(); }
  } catch (err) { console.error(err); }
});
$('#set-ask-download').addEventListener('change', (e) => { state.settings.perguntarOndeSalvar = e.target.checked; schedulePersist(); });
$('#set-export').addEventListener('click', async () => {
  try { const result = await window.nativeAPI.exportState(serializeState()); if (result && result.ok) alert(t('backupSaved', { path: result.path })); }
  catch (err) { console.error(err); }
});
$('#set-import').addEventListener('click', async () => {
  try {
    const data = await window.nativeAPI.importState();
    if (!data || !data.workspaces) return;
    showConfirm(t('confirmImportTitle'), t('confirmImportBody'), () => {
      state = data;
      if (!state.settings) state.settings = defaultSettings();
      activeAccountId = null;
      if (!state.activeWorkspaceId && state.workspaces.length) state.activeWorkspaceId = state.workspaces[0].id;
      applyLanguage(state.settings.idioma); applyTheme(state.settings.tema); applyCleanMode();
      renderWorkspaceRail(); renderSidebar(); renderGrid(); updateStatusBar(); schedulePersist();
      settingsOverlay.classList.add('hidden');
    });
  } catch (err) { console.error(err); }
});
// ---------------------------------------------------------------------------
// Verificação de atualização via Gist (JSON simples com "version"/"url"/
// "message"). Sem download/instalação automática — só compara e avisa.
// A URL do Gist é fixa em UPDATE_GIST_URL (topo do arquivo), não aparece
// em lugar nenhum da interface.
// ---------------------------------------------------------------------------

function renderUpdateResult(html, stateClass) {
  const box = $('#update-result-box');
  box.classList.remove('hidden');
  box.className = `update-result ${stateClass}`;
  box.innerHTML = html;
  const openBtn = box.querySelector('.update-open-link');
  if (openBtn) openBtn.addEventListener('click', () => window.nativeAPI.openExternal(openBtn.dataset.url));
}
function updateErrorMessage(error) {
  if (error === 'invalid-url') return t('updateInvalidUrl');
  return t('updateCheckFailed');
}
$('#set-check-updates').addEventListener('click', async () => {
  const btn = $('#set-check-updates');
  const gistUrl = UPDATE_GIST_URL;
  if (!gistUrl) { renderUpdateResult(`<div class="update-result-row">${escapeHtml(t('updateInvalidUrl'))}</div>`, 'state-error'); return; }
  btn.disabled = true;
  renderUpdateResult(`<div class="update-result-row"><svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg> ${escapeHtml(t('checkingUpdates'))}</div>`, 'state-checking');
  try {
    const result = await window.nativeAPI.checkForUpdates(gistUrl);
    if (!result.ok) {
      renderUpdateResult(`<div class="update-result-row">${escapeHtml(updateErrorMessage(result.error))}</div>`, 'state-error');
    } else if (result.upToDate) {
      renderUpdateResult(`<div class="update-result-row"><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg> ${escapeHtml(t('updatesUpToDate'))}</div>`, 'state-ok');
    } else {
      const msg = result.message ? `${result.message} ` : '';
      let html = `<div class="update-result-row">${escapeHtml(msg + t('updateAvailableBody', { version: result.remoteVersion }))}</div>`;
      if (result.updateUrl) html += `<button class="ghost-btn update-open-link" type="button" data-url="${escapeHtml(result.updateUrl)}">${escapeHtml(t('updateToastOpen'))}</button>`;
      renderUpdateResult(html, 'state-update');
    }
  } catch (err) {
    console.error(err);
    renderUpdateResult(`<div class="update-result-row">${escapeHtml(t('updateCheckFailed'))}</div>`, 'state-error');
  } finally {
    btn.disabled = false;
  }
});

// Verificação silenciosa ao abrir o app — só mostra o toast se houver
// atualização de verdade; erros/link não configurado ficam em silêncio.
let updateToastTimer = null;
function showUpdateToast(remoteVersion, updateUrl, message) {
  const toast = $('#update-toast');
  $('#update-toast-text').textContent = message || t('updateToastBody', { version: remoteVersion });
  const openBtn = $('#update-toast-open');
  if (updateUrl) {
    openBtn.classList.remove('hidden');
    openBtn.onclick = () => window.nativeAPI.openExternal(updateUrl);
  } else {
    openBtn.classList.add('hidden');
  }
  toast.classList.remove('hidden', 'closing');
  clearTimeout(updateToastTimer);
  updateToastTimer = setTimeout(closeUpdateToast, 60000); // 1 minuto
}
function closeUpdateToast() {
  const toast = $('#update-toast');
  if (toast.classList.contains('hidden')) return;
  clearTimeout(updateToastTimer);
  toast.classList.add('closing');
  setTimeout(() => toast.classList.add('hidden'), 200);
}
$('#update-toast-close').addEventListener('click', closeUpdateToast);

function checkForUpdatesOnStartup() {
  const gistUrl = UPDATE_GIST_URL;
  if (!gistUrl) return;
  window.nativeAPI.checkForUpdates(gistUrl).then((result) => {
    if (result.ok && !result.upToDate) {
      showUpdateToast(result.remoteVersion, result.updateUrl, result.message);
    }
  }).catch(() => { /* silencioso — não incomoda o usuário com erro de rede ao abrir o app */ });
}

// ---------------------------------------------------------------------------
// Scripts / Extras — userscripts estilo Tampermonkey, com alvo por workspace/conta
// ---------------------------------------------------------------------------
function scriptAppliesToAccount(script, workspaceId, accountId) {
  if (!script.enabled) return false;
  if (!script.scopeWorkspaceId) return true; // aplica em todos os workspaces e contas
  if (script.scopeWorkspaceId !== workspaceId) return false;
  if (!script.scopeAccountIds || !script.scopeAccountIds.length) return true; // todo o workspace
  return script.scopeAccountIds.includes(accountId);
}
function scopeSummary(script) {
  if (!script.scopeWorkspaceId) return 'Todos os workspaces e contas';
  const ws = state.workspaces.find((w) => w.id === script.scopeWorkspaceId);
  const wsName = ws ? ws.name : '?';
  if (!script.scopeAccountIds || !script.scopeAccountIds.length) return `${wsName} · todas as contas`;
  return `${wsName} · ${script.scopeAccountIds.length} conta(s)`;
}
function injectScriptIntoOpenMatches(script) {
  document.querySelectorAll('.account-card').forEach((card) => {
    const accId = Number(card.dataset.id);
    const acc = getAccountById(accId);
    if (!acc) return;
    const ws = state.workspaces.find((w) => w.accounts.some((a) => a.id === accId));
    if (!ws || !scriptAppliesToAccount(script, ws.id, accId)) return;
    const webview = card.querySelector('webview');
    if (webview) webview.executeJavaScript(script.code).catch((err) => console.error(`Erro no script "${script.name}":`, err));
  });
}

let editingScriptId = null;

function populateScriptTargetWorkspaces() {
  const sel = $('#script-target-ws');
  const current = sel.value;
  sel.innerHTML = '<option value="">Todos os workspaces e contas</option>' +
    state.workspaces.map((w) => `<option value="${w.id}">${escapeHtml(w.name)}</option>`).join('');
  sel.value = current && state.workspaces.some((w) => String(w.id) === current) ? current : '';
}
function renderScriptTargetAccounts() {
  const wsId = Number($('#script-target-ws').value) || null;
  const wrap = $('#script-target-accounts-wrap');
  const list = $('#script-target-accounts');
  if (!wsId) { wrap.style.display = 'none'; list.innerHTML = ''; return; }
  const ws = state.workspaces.find((w) => w.id === wsId);
  wrap.style.display = '';
  if (!ws || !ws.accounts.length) { list.innerHTML = '<span class="settings-subtext">Este workspace não tem contas.</span>'; return; }
  list.innerHTML = ws.accounts.map((a) => `
    <label><input type="checkbox" value="${a.id}"> ${escapeHtml(a.name)}</label>
  `).join('');
}
$('#script-target-ws').addEventListener('change', renderScriptTargetAccounts);

function renderScriptsList() {
  const wrap = $('#scripts-list');
  if (!state.scripts.length) { wrap.innerHTML = '<span class="settings-subtext">Nenhum script adicionado ainda.</span>'; return; }
  wrap.innerHTML = '';
  state.scripts.forEach((script) => {
    const row = document.createElement('div');
    row.className = 'script-row';
    row.innerHTML = `
      <input type="checkbox" ${script.enabled ? 'checked' : ''} title="Ativar/desativar" />
      <div class="script-info">
        <div class="script-name">${escapeHtml(script.name)}</div>
        <div class="script-scope">${escapeHtml(scopeSummary(script))}</div>
      </div>
      <button class="script-edit" title="Editar">
        <svg viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
      </button>
      <button class="script-delete" title="Excluir">
        <svg viewBox="0 0 24 24"><path d="M4 6h16"/><path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m2 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
      </button>
    `;
    row.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
      script.enabled = e.target.checked;
      schedulePersist();
      if (script.enabled) injectScriptIntoOpenMatches(script);
    });
    row.querySelector('.script-edit').addEventListener('click', () => startEditScript(script.id));
    row.querySelector('.script-delete').addEventListener('click', () => {
      showConfirm('Excluir este script?', `O script "${script.name}" será removido permanentemente.`, () => {
        state.scripts = state.scripts.filter((s) => s.id !== script.id);
        renderScriptsList(); schedulePersist();
      });
    });
    wrap.appendChild(row);
  });
}

function resetScriptForm() {
  editingScriptId = null;
  $('#scripts-form-title').textContent = 'Adicionar script';
  $('#script-save-btn').textContent = '+ Adicionar script';
  $('#script-cancel-edit').classList.add('hidden');
  $('#script-name').value = '';
  $('#script-code').value = '';
  $('#script-target-ws').value = '';
  renderScriptTargetAccounts();
}
function startEditScript(id) {
  const script = state.scripts.find((s) => s.id === id);
  if (!script) return;
  editingScriptId = id;
  $('#scripts-form-title').textContent = 'Editar script';
  $('#script-save-btn').textContent = 'Salvar alterações';
  $('#script-cancel-edit').classList.remove('hidden');
  $('#script-name').value = script.name;
  $('#script-code').value = script.code;
  $('#script-target-ws').value = script.scopeWorkspaceId || '';
  renderScriptTargetAccounts();
  if (script.scopeAccountIds && script.scopeAccountIds.length) {
    document.querySelectorAll('#script-target-accounts input[type="checkbox"]').forEach((cb) => {
      cb.checked = script.scopeAccountIds.includes(Number(cb.value));
    });
  }
  $('#script-name').scrollIntoView({ block: 'nearest' });
}
$('#script-cancel-edit').addEventListener('click', resetScriptForm);

$('#script-save-btn').addEventListener('click', () => {
  const name = $('#script-name').value.trim();
  const code = $('#script-code').value;
  if (!name || !code.trim()) return;
  const scopeWorkspaceId = Number($('#script-target-ws').value) || null;
  const checkedAccounts = Array.from(document.querySelectorAll('#script-target-accounts input[type="checkbox"]:checked')).map((cb) => Number(cb.value));

  if (editingScriptId != null) {
    const script = state.scripts.find((s) => s.id === editingScriptId);
    if (script) {
      script.name = name; script.code = code; script.scopeWorkspaceId = scopeWorkspaceId;
      script.scopeAccountIds = checkedAccounts.length ? checkedAccounts : null;
      if (script.enabled) injectScriptIntoOpenMatches(script);
    }
  } else {
    const script = {
      id: Date.now(), name, code, enabled: true,
      scopeWorkspaceId, scopeAccountIds: checkedAccounts.length ? checkedAccounts : null,
    };
    state.scripts.push(script);
    injectScriptIntoOpenMatches(script);
  }
  resetScriptForm();
  renderScriptsList();
  schedulePersist();
});

function openScriptsModal() {
  populateScriptTargetWorkspaces();
  resetScriptForm();
  renderScriptsList();
  $('#scripts-overlay').classList.remove('hidden');
}
$('#open-scripts-btn').addEventListener('click', openScriptsModal);
$('#scripts-close').addEventListener('click', () => $('#scripts-overlay').classList.add('hidden'));
$('#scripts-overlay').addEventListener('click', (e) => { if (e.target === $('#scripts-overlay')) $('#scripts-overlay').classList.add('hidden'); });

// ---------------------------------------------------------------------------
// Tooltip customizado — substitui o balão nativo do sistema (lento e feio)
// por um bem mais rápido de aparecer e no estilo visual do app. Qualquer
// elemento com atributo data-tooltip="texto" ganha o tooltip automaticamente.
// ---------------------------------------------------------------------------
const TOOLTIP_DELAY_MS = 150;
let tooltipEl = null;
let tooltipTimer = null;
let currentTooltipTarget = null;

function positionTooltip(target) {
  const rect = target.getBoundingClientRect();
  const tRect = tooltipEl.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - tRect.width / 2;
  left = Math.max(6, Math.min(left, window.innerWidth - tRect.width - 6));
  let top = rect.bottom + 8;
  if (top + tRect.height > window.innerHeight - 6) top = rect.top - tRect.height - 8;
  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.top = `${top}px`;
}
function showTooltip(target) {
  const text = target.dataset.tooltip;
  if (!text) return;
  tooltipEl.textContent = text;
  tooltipEl.classList.remove('hidden');
  positionTooltip(target);
  requestAnimationFrame(() => tooltipEl.classList.add('visible'));
}
function hideTooltip() {
  if (!tooltipEl) return;
  tooltipEl.classList.remove('visible');
  currentTooltipTarget = null;
  clearTimeout(tooltipTimer);
}
function initTooltipSystem() {
  tooltipEl = $('#app-tooltip');
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (!target || target === currentTooltipTarget) return;
    currentTooltipTarget = target;
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => showTooltip(target), TOOLTIP_DELAY_MS);
  });
  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (!target || target !== currentTooltipTarget) return;
    if (e.relatedTarget && target.contains(e.relatedTarget)) return;
    hideTooltip();
  });
  document.addEventListener('mousedown', hideTooltip);
  document.addEventListener('wheel', hideTooltip, { passive: true });
  window.addEventListener('blur', hideTooltip);
}
initTooltipSystem();

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
window.addEventListener('resize', () => {
  const ws = getActiveWorkspace();
  if (ws && ws.layout === 'auto') {
    const { cols, rows } = computeAutoGrid(getOpenAccountsOfActiveWorkspace().length);
    if (cols > 1 || rows > 1) layoutAutoGridGutters(ws, cols, rows);
  }
});
init();
