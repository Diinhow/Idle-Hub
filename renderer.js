// ---------------------------------------------------------------------------
// Ícones (SVG originais, sem emoji)
// ---------------------------------------------------------------------------
const ICONS = {
  apps: '<svg viewBox="0 0 20 20" fill="currentColor"><rect x="2" y="2" width="6" height="6" rx="1.4"/><rect x="12" y="2" width="6" height="6" rx="1.4"/><rect x="2" y="12" width="6" height="6" rx="1.4"/><rect x="12" y="12" width="6" height="6" rx="1.4"/></svg>',
  controller: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 8.2h2M6.5 7.2v2M12.7 8.7h.01M15 7.3h.01"/><path d="M4.3 7.8c-1.5 0-2.6 1.7-2.3 3.7l.6 3.2c.2 1.2 1.7 1.8 2.6 1l1.5-1.4c.5-.5 1.2-.8 1.9-.8h2.8c.7 0 1.4.3 1.9.8l1.5 1.4c.9.8 2.4.2 2.6-1l.6-3.2c.3-2-.8-3.7-2.3-3.7H4.3z"/></svg>',
  swords: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 3l6.5 6.5M17 3l-6.5 6.5"/><path d="M3 17l6-6M17 17l-6-6"/><path d="M4.2 4.2l-1.6-1M15.8 4.2l1.6-1M4.2 15.8l-1.6 1M15.8 15.8l1.6 1"/></svg>',
  shield: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 2.2l5.8 2v4.1c0 3.9-2.4 7.1-5.8 8.1-3.4-1-5.8-4.2-5.8-8.1V4.2L10 2.2z"/></svg>',
  flame: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.8 1c.9 2.8-1.8 3.9-1.8 6.6a2.8 2.8 0 005.6 0c0-.9-.4-1.6-.9-2.1 1.9.9 3.3 3.1 3.3 5.4A6.2 6.2 0 013 11.6c0-4.2 3.3-6.1 4.7-9 .4 1.1.2 2.2-.5 3 .8-1.1 1.7-2.4 2.1-4.6z"/></svg>',
  leaf: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16C4 8.3 9.8 3.3 16.5 3.3c0 6.7-4.8 12.7-12.5 12.7z"/><path d="M4 16c2-2.9 4.8-5.7 8.5-7.6"/></svg>',
  drop: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2c2.9 3.9 5.8 7.3 5.8 10.6a5.8 5.8 0 11-11.6 0C4.2 9.3 7.1 5.9 10 2z"/></svg>',
  bolt: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.8 1L3.4 11.6h4.7l-.9 7.4 8.4-10.6h-4.7l.9-7.4z"/></svg>',
  star: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.3l2.5 5.7 6.2.6-4.7 4.1 1.4 6-5.4-3.1-5.4 3.1 1.4-6-4.7-4.1 6.2-.6L10 1.3z"/></svg>',
  crown: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.2 14.8L1.3 7l3.8 2.8L10 4l4.9 5.8L18.7 7l-.9 7.8H2.2z"/></svg>',
  ghost: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.2a5.8 5.8 0 00-5.8 5.8v7.8l1.9-1.9 1.9 1.9 2-1.9 1.9 1.9 1.9-1.9V8a5.8 5.8 0 00-5.8-5.8z"/><circle cx="7.7" cy="8.2" r="1" fill="#0e1424"/><circle cx="12.3" cy="8.2" r="1" fill="#0e1424"/></svg>',
  rocket: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.3c2.7 1 4 3.7 3.5 7.2-.9.9-1.9 1.7-2.8 1.9l-2.6 4.6-1.8-1.8.9-2.7c-1.9.5-2.8-.8-2.8-.8s-1.4-1-.9-2.8L9.6 5c0-.9.9-1.8 1.9-2.7z"/><circle cx="10.6" cy="6.7" r="1"/></svg>',
};
const ICON_KEYS = ['apps', 'controller', 'swords', 'shield', 'flame', 'leaf', 'drop', 'bolt', 'star', 'crown', 'ghost', 'rocket'];
const COLORS = ['#fbbf24', '#34d399', '#ec4899', '#7c6cff', '#fb923c', '#fb7185', '#38bdf8'];
const DEFAULT_URL = 'https://www.google.com/';
const LAYOUT_LABELS = { auto: 'Grade automática', single: 'Painel único', columns: 'Colunas', rows: 'Linhas', free: 'Livre' };

// ---------------------------------------------------------------------------
// Estado global
// ---------------------------------------------------------------------------
let state = {
  nextWorkspaceId: 1,
  nextAccountId: 1,
  activeWorkspaceId: null,
  sidebarCollapsed: false,
  workspaces: [], // { id, name, color, iconKey, defaultUrl, layout, accounts: [...] }
  settings: {
    idioma: 'sistema',
    tema: 'escuro',
    iniciarComSistema: false,
    reabrirUltimoWorkspace: true,
    urlInicialPadrao: DEFAULT_URL,
    zoomPadrao: 1,
    layoutPadrao: 'auto',
    downloadsPath: null,
    perguntarOndeSalvar: true,
  },
};
let activeAccountId = null;
let saveTimer = null;

const $ = (sel) => document.querySelector(sel);
const workspaceIconsEl = $('#workspace-icons');
const accountListEl = $('#account-list');
const grid = $('#grid');
const addressBar = $('#address-bar');

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------
function normalizeUrl(u) {
  if (!/^https?:\/\//i.test(u)) return 'https://' + u;
  return u;
}
function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str == null ? '' : str;
  return d.innerHTML;
}
function formatUptime(createdAt) {
  const secs = Math.floor((Date.now() - createdAt) / 1000);
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}m ${s}s`;
}
function getActiveWorkspace() {
  return state.workspaces.find((w) => w.id === state.activeWorkspaceId) || state.workspaces[0];
}
function getAccountById(id) {
  for (const ws of state.workspaces) {
    const a = ws.accounts.find((x) => x.id === id);
    if (a) return a;
  }
  return null;
}
function schedulePersist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persistState, 400);
}
function serializeState() {
  return {
    nextWorkspaceId: state.nextWorkspaceId,
    nextAccountId: state.nextAccountId,
    activeWorkspaceId: state.activeWorkspaceId,
    sidebarCollapsed: state.sidebarCollapsed,
    settings: state.settings,
    workspaces: state.workspaces.map((ws) => ({
      id: ws.id,
      name: ws.name,
      color: ws.color,
      iconKey: ws.iconKey,
      defaultUrl: ws.defaultUrl,
      layout: ws.layout,
      accounts: ws.accounts.map((a) => ({
        id: a.id, name: a.name, url: a.url, defaultUrl: a.defaultUrl, partition: a.partition,
        colorIdx: a.colorIdx, status: a.status, muted: !!a.muted, createdAt: a.createdAt,
      })),
    })),
  };
}
async function persistState() {
  try { await window.nativeAPI.saveState(serializeState()); }
  catch (err) { console.error('Erro ao salvar estado', err); }
}

// ---------------------------------------------------------------------------
// Inicialização / carregamento
// ---------------------------------------------------------------------------
async function init() {
  let loaded = null;
  try { loaded = await window.nativeAPI.loadState(); }
  catch (err) { console.error('Erro ao carregar estado salvo', err); }

  let isFirstBoot = true;
  if (loaded && loaded.workspaces && loaded.workspaces.length) {
    isFirstBoot = false;
    state = loaded;
    if (!state.settings) state.settings = { ...defaultSettings() };
    else state.settings = { ...defaultSettings(), ...state.settings };
    state.workspaces.forEach((ws) => {
      if (!ws.color) ws.color = COLORS[0];
      if (!ws.iconKey) ws.iconKey = 'apps';
      if (!ws.layout) ws.layout = state.settings.layoutPadrao || 'auto';
      if (!ws.defaultUrl) ws.defaultUrl = state.settings.urlInicialPadrao || DEFAULT_URL;
    });
    if (state.settings.reabrirUltimoWorkspace === false) {
      state.activeWorkspaceId = state.workspaces[0].id;
    }
  } else {
    const wsId = state.nextWorkspaceId++;
    const ws = { id: wsId, name: 'Principal', color: COLORS[0], iconKey: 'apps', defaultUrl: state.settings.urlInicialPadrao || DEFAULT_URL, layout: state.settings.layoutPadrao || 'auto', accounts: [] };
    state.workspaces.push(ws);
    state.activeWorkspaceId = wsId;
    const accId = state.nextAccountId++;
    ws.accounts.push({
      id: accId, name: 'Conta 1', url: ws.defaultUrl, defaultUrl: ws.defaultUrl,
      partition: `persist:conta-${accId}`, colorIdx: 0, status: 'open', muted: false,
      createdAt: Date.now(), webContentsId: null, pid: null,
    });
  }

  if (!state.activeWorkspaceId) state.activeWorkspaceId = state.workspaces[0].id;
  if (state.sidebarCollapsed) applySidebarCollapsed(true);

  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();

  // sincroniza toggle "iniciar com o sistema" com o estado real do SO
  try {
    const realLoginItem = await window.nativeAPI.getLoginItem();
    state.settings.iniciarComSistema = !!realLoginItem;
  } catch (err) { /* plataforma pode não suportar */ }
}

function defaultSettings() {
  return {
    idioma: 'sistema',
    tema: 'escuro',
    iniciarComSistema: false,
    reabrirUltimoWorkspace: true,
    urlInicialPadrao: DEFAULT_URL,
    zoomPadrao: 1,
    layoutPadrao: 'auto',
    downloadsPath: null,
    perguntarOndeSalvar: true,
  };
}

// ---------------------------------------------------------------------------
// Sidebar recolher/expandir
// ---------------------------------------------------------------------------
function applySidebarCollapsed(collapsed) {
  $('#sidebar').classList.toggle('collapsed', collapsed);
  $('#sidebar-collapsed-strip').classList.toggle('hidden', !collapsed);
}
$('#collapse-sidebar-btn').addEventListener('click', () => {
  state.sidebarCollapsed = true;
  applySidebarCollapsed(true);
  schedulePersist();
});
$('#expand-sidebar-btn').addEventListener('click', () => {
  state.sidebarCollapsed = false;
  applySidebarCollapsed(false);
  schedulePersist();
});

// ---------------------------------------------------------------------------
// Workspaces
// ---------------------------------------------------------------------------
function createWorkspace() {
  const id = state.nextWorkspaceId++;
  const idx = state.workspaces.length;
  const ws = {
    id,
    name: `Workspace ${id}`,
    color: COLORS[idx % COLORS.length],
    iconKey: ICON_KEYS[idx % ICON_KEYS.length],
    defaultUrl: state.settings.urlInicialPadrao || DEFAULT_URL,
    layout: state.settings.layoutPadrao || 'auto',
    accounts: [],
  };
  state.workspaces.push(ws);
  state.activeWorkspaceId = id;
  activeAccountId = null;
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
  schedulePersist();

  requestAnimationFrame(() => {
    const el = workspaceIconsEl.querySelector(`.ws-icon[data-id="${id}"]`);
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}

function switchWorkspace(id) {
  state.activeWorkspaceId = id;
  activeAccountId = null;
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
}

function reorderWorkspace(draggedId, targetId) {
  const from = state.workspaces.findIndex((w) => w.id === draggedId);
  const to = state.workspaces.findIndex((w) => w.id === targetId);
  if (from === -1 || to === -1 || from === to) return;
  const [item] = state.workspaces.splice(from, 1);
  state.workspaces.splice(to, 0, item);
  renderWorkspaceRail();
  schedulePersist();
}

function duplicateWorkspace(id) {
  const src = state.workspaces.find((w) => w.id === id);
  if (!src) return;
  const newId = state.nextWorkspaceId++;
  const copy = {
    id: newId,
    name: `${src.name} (cópia)`,
    color: src.color,
    iconKey: src.iconKey,
    defaultUrl: src.defaultUrl,
    layout: src.layout,
    accounts: src.accounts.map((a) => {
      const newAccId = state.nextAccountId++;
      return {
        id: newAccId, name: a.name, url: a.defaultUrl, defaultUrl: a.defaultUrl,
        partition: `persist:conta-${newAccId}`, colorIdx: a.colorIdx,
        status: 'closed', muted: false, createdAt: Date.now(), webContentsId: null, pid: null,
      };
    }),
  };
  state.workspaces.push(copy);
  state.activeWorkspaceId = newId;
  activeAccountId = null;
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
  schedulePersist();
}

function deleteWorkspace(id) {
  if (state.workspaces.length <= 1) return; // sempre precisa sobrar pelo menos 1
  state.workspaces = state.workspaces.filter((w) => w.id !== id);
  if (state.activeWorkspaceId === id) {
    state.activeWorkspaceId = state.workspaces[0].id;
  }
  activeAccountId = null;
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
  schedulePersist();
}

function renderWorkspaceRail() {
  workspaceIconsEl.innerHTML = '';
  state.workspaces.forEach((ws) => {
    const el = document.createElement('div');
    el.className = 'ws-icon' + (ws.id === state.activeWorkspaceId ? ' active' : '');
    el.draggable = true;
    el.dataset.id = ws.id;
    el.title = ws.name;
    el.style.color = ws.color;
    el.innerHTML = `${ICONS[ws.iconKey] || ICONS.apps}<span class="ws-badge">${ws.accounts.length}</span>`;
    el.addEventListener('click', () => switchWorkspace(ws.id));
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      openWsContextMenu(e.clientX, e.clientY, ws.id);
    });

    el.addEventListener('dragstart', (e) => {
      el.classList.add('dragging');
      e.dataTransfer.setData('text/ws-id', String(ws.id));
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
    el.addEventListener('dragover', (e) => e.preventDefault());
    el.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedId = Number(e.dataTransfer.getData('text/ws-id'));
      if (draggedId) reorderWorkspace(draggedId, ws.id);
    });

    workspaceIconsEl.appendChild(el);
  });
}

// ---------------------------------------------------------------------------
// Menu de contexto do workspace (clique direito no ícone do rail)
// ---------------------------------------------------------------------------
const wsCtxMenu = $('#ws-context-menu');
let ctxWorkspaceId = null;

function openWsContextMenu(x, y, wsId) {
  ctxWorkspaceId = wsId;
  const deleteBtn = wsCtxMenu.querySelector('[data-action="delete"]');
  deleteBtn.disabled = state.workspaces.length <= 1;
  deleteBtn.style.opacity = state.workspaces.length <= 1 ? '.4' : '1';
  wsCtxMenu.classList.remove('hidden');
  const w = 200, h = 160;
  const px = Math.min(x, window.innerWidth - w - 8);
  const py = Math.min(y, window.innerHeight - h - 8);
  wsCtxMenu.style.left = `${Math.max(4, px)}px`;
  wsCtxMenu.style.top = `${Math.max(4, py)}px`;
}
function closeWsContextMenu() { wsCtxMenu.classList.add('hidden'); ctxWorkspaceId = null; }
document.addEventListener('click', (e) => { if (!wsCtxMenu.contains(e.target)) closeWsContextMenu(); });
wsCtxMenu.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn || ctxWorkspaceId == null || btn.disabled) return;
  const id = ctxWorkspaceId;
  const action = btn.dataset.action;
  if (action === 'edit') {
    switchWorkspace(id);
    openWorkspaceEditModal();
  } else if (action === 'duplicate') {
    duplicateWorkspace(id);
  } else if (action === 'delete') {
    const ws = state.workspaces.find((w) => w.id === id);
    if (ws && state.workspaces.length > 1) {
      const ok = window.confirm(`Excluir o workspace "${ws.name}"? Todas as contas dele (${ws.accounts.length}) serão removidas também. Esta ação não pode ser desfeita.`);
      if (ok) deleteWorkspace(id);
    }
  }
  closeWsContextMenu();
});

// ---------------------------------------------------------------------------
// Modal "Editar workspace"
// ---------------------------------------------------------------------------
const wsEditOverlay = $('#ws-edit-overlay');
let wsEditColor = null;
let wsEditIcon = null;

function openWorkspaceEditModal() {
  const ws = getActiveWorkspace();
  if (!ws) return;
  $('#ws-edit-name').value = ws.name;
  $('#ws-edit-url').value = ws.defaultUrl || '';
  $('#ws-edit-layout').value = ws.layout || 'auto';
  wsEditColor = ws.color;
  wsEditIcon = ws.iconKey;
  renderWsEditColors();
  renderWsEditIcons();

  wsEditOverlay.classList.remove('hidden');
  $('#ws-edit-name').focus();
}
function renderWsEditColors() {
  const wrap = $('#ws-edit-colors');
  wrap.innerHTML = '';
  COLORS.forEach((c) => {
    const b = document.createElement('button');
    b.style.background = c;
    b.style.color = c;
    if (c === wsEditColor) b.classList.add('selected');
    b.addEventListener('click', () => { wsEditColor = c; renderWsEditColors(); });
    wrap.appendChild(b);
  });
}
function renderWsEditIcons() {
  const wrap = $('#ws-edit-icons');
  wrap.innerHTML = '';
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
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
  schedulePersist();
});

// ---------------------------------------------------------------------------
// Contas: criar / abrir / fechar / duplicar / editar / excluir / limpar
// ---------------------------------------------------------------------------
function createAccount(name, url, openImmediately = true) {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const id = state.nextAccountId++;
  const finalUrl = url && url.trim() ? normalizeUrl(url.trim()) : (ws.defaultUrl || DEFAULT_URL);
  const account = {
    id, name: name || `Conta ${id}`, url: finalUrl, defaultUrl: finalUrl,
    partition: `persist:conta-${id}`, colorIdx: ws.accounts.length % 8,
    status: openImmediately ? 'open' : 'closed', muted: false,
    createdAt: Date.now(), webContentsId: null, pid: null,
  };
  ws.accounts.push(account);
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  setActiveAccount(id);
  schedulePersist();
}
function openAccount(id, urlOverride) {
  const acc = getAccountById(id);
  if (!acc) return;
  if (urlOverride) acc.url = urlOverride;
  acc.status = 'open';
  renderSidebar();
  renderGrid();
  setActiveAccount(id);
  schedulePersist();
}
function closeAccount(id) {
  const acc = getAccountById(id);
  if (!acc) return;
  acc.status = 'closed';
  acc.webContentsId = null;
  acc.pid = null;
  if (activeAccountId === id) activeAccountId = null;
  renderSidebar();
  renderGrid();
  updateStatusBar();
  schedulePersist();
}
function deleteAccount(id) {
  const ws = getActiveWorkspace();
  if (!ws) return;
  ws.accounts = ws.accounts.filter((a) => a.id !== id);
  if (activeAccountId === id) activeAccountId = null;
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  updateStatusBar();
  schedulePersist();
}
function duplicateAccount(id) {
  const ws = getActiveWorkspace();
  const src = getAccountById(id);
  if (!ws || !src) return;
  const newId = state.nextAccountId++;
  const copy = {
    id: newId, name: `${src.name} (cópia)`, url: src.defaultUrl, defaultUrl: src.defaultUrl,
    partition: `persist:conta-${newId}`, colorIdx: ws.accounts.length % 8,
    status: 'open', muted: false, createdAt: Date.now(), webContentsId: null, pid: null,
  };
  ws.accounts.push(copy);
  renderWorkspaceRail();
  renderSidebar();
  renderGrid();
  setActiveAccount(newId);
  schedulePersist();
}
function editAccount(id, name, url) {
  const acc = getAccountById(id);
  if (!acc) return;
  if (name.trim()) acc.name = name.trim();
  if (url.trim()) {
    const full = normalizeUrl(url.trim());
    acc.defaultUrl = full;
    acc.url = full;
    if (acc.status === 'open') {
      const card = grid.querySelector(`.account-card[data-id="${acc.id}"]`);
      const webview = card && card.querySelector('webview');
      if (webview) webview.loadURL(full);
    }
  }
  renderSidebar();
  renderGrid();
  schedulePersist();
}
async function clearAccountData(id) {
  const acc = getAccountById(id);
  if (!acc) return;
  await window.nativeAPI.clearPartition(acc.partition);
  if (acc.status === 'open') {
    const card = grid.querySelector(`.account-card[data-id="${acc.id}"]`);
    const webview = card && card.querySelector('webview');
    if (webview) webview.reload();
  }
}
function reorderAccount(draggedId, targetId) {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const from = ws.accounts.findIndex((a) => a.id === draggedId);
  const to = ws.accounts.findIndex((a) => a.id === targetId);
  if (from === -1 || to === -1 || from === to) return;
  const [item] = ws.accounts.splice(from, 1);
  ws.accounts.splice(to, 0, item);
  renderSidebar();
  renderGrid();
  schedulePersist();
}
function setActiveAccount(id) {
  activeAccountId = id;
  const acc = getAccountById(id);
  if (acc) addressBar.value = acc.url;
  renderSidebar();
  const ws = getActiveWorkspace();
  if (ws && ws.layout === 'single') renderGrid();
  document.querySelectorAll('.account-card').forEach((el) => {
    el.classList.toggle('active-card', Number(el.dataset.id) === id);
  });
  updateStatusBar();
}

// ---------------------------------------------------------------------------
// Sidebar (lista de contas do workspace ativo)
// ---------------------------------------------------------------------------
const ACCOUNT_COLORS = ['#fbbf24', '#7c6cff', '#34d399', '#ec4899', '#a78bfa', '#fb7185', '#38bdf8', '#facc15'];

function renderSidebar() {
  const ws = getActiveWorkspace();
  $('#workspace-title').textContent = ws ? ws.name : '';
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
        ${escapeHtml(acc.name)}
      </div>
      <div class="row2">${acc.status === 'open' ? 'Online · ' + formatUptime(acc.createdAt) : 'Closed'}</div>
      <div class="row3" data-stats="${acc.id}">${statsLine}</div>
    `;

    item.addEventListener('click', () => {
      if (acc.status === 'closed') openAccount(acc.id);
      else setActiveAccount(acc.id);
    });
    item.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      openContextMenu(e.clientX, e.clientY, acc.id);
    });

    item.addEventListener('dragstart', (e) => {
      item.classList.add('dragging');
      e.dataTransfer.setData('text/acc-id', String(acc.id));
    });
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
    item.addEventListener('dragover', (e) => { e.preventDefault(); item.classList.add('drag-over'); });
    item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
    item.addEventListener('drop', (e) => {
      e.preventDefault();
      item.classList.remove('drag-over');
      const draggedId = Number(e.dataTransfer.getData('text/acc-id'));
      if (draggedId) reorderAccount(draggedId, acc.id);
    });

    accountListEl.appendChild(item);
  });
}

// ---------------------------------------------------------------------------
// Grid principal (webviews das contas ABERTAS do workspace ativo)
// ---------------------------------------------------------------------------
function computeAutoGrid(n) {
  if (n === 0) return { cols: 1, rows: 1 };
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  return { cols, rows };
}

function renderGrid() {
  const ws = getActiveWorkspace();
  const allOpen = ws ? ws.accounts.filter((a) => a.status === 'open') : [];
  const layout = ws ? (ws.layout || 'auto') : 'auto';

  let visibleAccounts = allOpen;
  if (layout === 'single') {
    const active = allOpen.find((a) => a.id === activeAccountId);
    visibleAccounts = active ? [active] : (allOpen[0] ? [allOpen[0]] : []);
  }

  grid.classList.toggle('layout-single', layout === 'single');
  grid.classList.toggle('layout-free', layout === 'free');

  const existingIds = new Set(Array.from(grid.children).map((c) => Number(c.dataset.id)));
  const currentIds = new Set(visibleAccounts.map((a) => a.id));

  Array.from(grid.children).forEach((child) => {
    if (!currentIds.has(Number(child.dataset.id))) child.remove();
  });

  visibleAccounts.forEach((acc, idx) => {
    let card = grid.querySelector(`.account-card[data-id="${acc.id}"]`);
    if (!card) {
      card = buildCard(acc);
      grid.appendChild(card);
    }
    if (grid.children[idx] !== card) grid.insertBefore(card, grid.children[idx] || null);
  });

  if (layout === 'columns') {
    grid.style.gridTemplateColumns = `repeat(${Math.max(visibleAccounts.length, 1)}, 1fr)`;
    grid.style.gridTemplateRows = '1fr';
  } else if (layout === 'rows') {
    grid.style.gridTemplateColumns = '1fr';
    grid.style.gridTemplateRows = `repeat(${Math.max(visibleAccounts.length, 1)}, 1fr)`;
  } else if (layout === 'single' || layout === 'free') {
    grid.style.gridTemplateColumns = '';
    grid.style.gridTemplateRows = '';
  } else {
    const { cols, rows } = computeAutoGrid(visibleAccounts.length);
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  }

  if (visibleAccounts.length === 0) {
    grid.innerHTML = `
      <div class="card-empty-hint">
        <div class="empty-state-card">
          <h3>Nenhuma conta aberta</h3>
          <p>Adicione contas a este workspace. Cada conta é uma sessão independente — login, cookies e cache próprios.</p>
          <button id="empty-add-account-btn">+ Adicionar primeira conta</button>
        </div>
      </div>`;
    const btn = $('#empty-add-account-btn');
    if (btn) btn.addEventListener('click', () => openAccountModal('create'));
  }
}

function buildCard(acc) {
  const card = document.createElement('div');
  card.className = 'account-card';
  card.dataset.id = acc.id;
  card.draggable = true;

  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <span class="drag-handle">::</span>
    <span class="dot" style="background:${ACCOUNT_COLORS[acc.colorIdx % ACCOUNT_COLORS.length]}"></span>
    <span class="name">${escapeHtml(acc.name)}</span>
    <span class="url">${escapeHtml(acc.url)}</span>
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

  webview.addEventListener('dom-ready', () => {
    acc.webContentsId = webview.getWebContentsId();
    if (acc.muted) webview.setAudioMuted(true);
    if (state.settings.zoomPadrao && state.settings.zoomPadrao !== 1) {
      webview.setZoomFactor(state.settings.zoomPadrao);
    }
  });
  webview.addEventListener('did-navigate', (e) => {
    acc.url = e.url;
    header.querySelector('.url').textContent = e.url;
    if (acc.id === activeAccountId) addressBar.value = e.url;
    schedulePersist();
  });
  webview.addEventListener('did-navigate-in-page', (e) => {
    acc.url = e.url;
    header.querySelector('.url').textContent = e.url;
  });

  wrap.appendChild(webview);
  card.appendChild(header);
  card.appendChild(wrap);

  card.addEventListener('mousedown', () => setActiveAccount(acc.id));
  card.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    openContextMenu(e.clientX, e.clientY, acc.id);
  });

  header.querySelector('.mute').addEventListener('click', (ev) => {
    ev.stopPropagation();
    acc.muted = !acc.muted;
    webview.setAudioMuted(acc.muted);
    header.querySelector('.mute').innerHTML = muteIcon(acc.muted);
    schedulePersist();
  });
  header.querySelector('.reload').addEventListener('click', (ev) => { ev.stopPropagation(); webview.reload(); });
  header.querySelector('.expand').addEventListener('click', (ev) => { ev.stopPropagation(); card.classList.toggle('maximized'); });
  header.querySelector('.close').addEventListener('click', (ev) => { ev.stopPropagation(); closeAccount(acc.id); });

  card.addEventListener('dragstart', (e) => { card.classList.add('dragging'); e.dataTransfer.setData('text/acc-id', String(acc.id)); });
  card.addEventListener('dragend', () => card.classList.remove('dragging'));
  card.addEventListener('dragover', (e) => { e.preventDefault(); card.classList.add('drag-over'); });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', (e) => {
    e.preventDefault();
    card.classList.remove('drag-over');
    const draggedId = Number(e.dataTransfer.getData('text/acc-id'));
    if (draggedId) reorderAccount(draggedId, acc.id);
  });

  return card;
}

const ICONS_MINI = {
  reload: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a6 6 0 11-2-4.5M16 3v4h-4"/></svg>',
  expand: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3H3v4M13 3h4v4M13 17h4v-4M7 17H3v-4"/></svg>',
  close: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 5l10 10M15 5L5 15"/></svg>',
  soundOn: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h3l4 3V4L6 7H3z"/><path d="M14 7a4 4 0 010 6"/></svg>',
  soundOff: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h3l4 3V4L6 7H3z"/><path d="M13 8l4 4M17 8l-4 4"/></svg>',
};
function muteIcon(muted) { return muted ? ICONS_MINI.soundOff : ICONS_MINI.soundOn; }

// ---------------------------------------------------------------------------
// Menu de contexto
// ---------------------------------------------------------------------------
const ctxMenu = $('#context-menu');
let ctxAccountId = null;

function openContextMenu(x, y, accountId) {
  ctxAccountId = accountId;
  const acc = getAccountById(accountId);
  if (!acc) return;

  const muteBtn = ctxMenu.querySelector('[data-action="mute"]');
  muteBtn.innerHTML = `${muteIcon(acc.muted)} ${acc.muted ? 'Reativar som' : 'Silenciar painel'}`;

  const closeBtn = ctxMenu.querySelector('[data-action="close"]');
  closeBtn.style.display = acc.status === 'open' ? 'flex' : 'none';

  ctxMenu.classList.remove('hidden');
  const menuWidth = 220, menuHeight = 340;
  const px = Math.min(x, window.innerWidth - menuWidth - 8);
  const py = Math.min(y, window.innerHeight - menuHeight - 8);
  ctxMenu.style.left = `${Math.max(4, px)}px`;
  ctxMenu.style.top = `${Math.max(4, py)}px`;
}
function closeContextMenu() { ctxMenu.classList.add('hidden'); ctxAccountId = null; }
document.addEventListener('click', (e) => { if (!ctxMenu.contains(e.target)) closeContextMenu(); });
ctxMenu.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn || ctxAccountId == null) return;
  const id = ctxAccountId;
  const acc = getAccountById(id);
  const action = btn.dataset.action;

  switch (action) {
    case 'reload': {
      const card = grid.querySelector(`.account-card[data-id="${id}"]`);
      const webview = card && card.querySelector('webview');
      if (webview) webview.reload(); else if (acc) openAccount(id);
      break;
    }
    case 'default-url': {
      if (!acc) break;
      if (acc.status === 'open') {
        const card = grid.querySelector(`.account-card[data-id="${id}"]`);
        const webview = card && card.querySelector('webview');
        if (webview) webview.loadURL(acc.defaultUrl);
        acc.url = acc.defaultUrl;
      } else { openAccount(id, acc.defaultUrl); }
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
// Barra de endereço (topbar)
// ---------------------------------------------------------------------------
function navigateActive(url) {
  if (!activeAccountId) return;
  const full = normalizeUrl(url.trim());
  const card = grid.querySelector(`.account-card[data-id="${activeAccountId}"]`);
  const webview = card && card.querySelector('webview');
  if (webview) webview.loadURL(full);
  const acc = getAccountById(activeAccountId);
  if (acc) acc.url = full;
}
function navigateAllOpen(url) {
  const ws = getActiveWorkspace();
  if (!ws) return;
  const full = normalizeUrl(url.trim());
  ws.accounts.filter((a) => a.status === 'open').forEach((acc) => {
    const card = grid.querySelector(`.account-card[data-id="${acc.id}"]`);
    const webview = card && card.querySelector('webview');
    if (webview) webview.loadURL(full);
    acc.url = full;
  });
}
$('#nav-go').addEventListener('click', () => navigateActive(addressBar.value));
addressBar.addEventListener('keydown', (e) => { if (e.key === 'Enter') navigateActive(addressBar.value); });
$('#nav-go-all').addEventListener('click', () => navigateAllOpen(addressBar.value || DEFAULT_URL));
$('#nav-reload').addEventListener('click', () => {
  if (!activeAccountId) return;
  const card = grid.querySelector(`.account-card[data-id="${activeAccountId}"]`);
  const webview = card && card.querySelector('webview');
  if (webview) webview.reload();
});

// ---------------------------------------------------------------------------
// Modal: adicionar / editar conta
// ---------------------------------------------------------------------------
const overlay = $('#modal-overlay');
let modalMode = 'create';
let modalTargetId = null;

function openAccountModal(mode, accountId) {
  modalMode = mode;
  modalTargetId = accountId || null;
  const ws = getActiveWorkspace();
  if (mode === 'edit' && accountId) {
    const acc = getAccountById(accountId);
    $('#modal-title').textContent = 'Editar conta';
    $('#modal-confirm').textContent = 'Salvar';
    $('#modal-name').value = acc ? acc.name : '';
    $('#modal-url').value = acc ? acc.defaultUrl : '';
  } else {
    $('#modal-title').textContent = 'Adicionar conta';
    $('#modal-confirm').textContent = 'Adicionar';
    $('#modal-name').value = `Conta ${state.nextAccountId}`;
    $('#modal-url').value = (ws && ws.defaultUrl) || addressBar.value || DEFAULT_URL;
  }
  overlay.classList.remove('hidden');
  $('#modal-name').focus();
}
$('#add-account-btn').addEventListener('click', () => openAccountModal('create'));
$('#modal-cancel').addEventListener('click', () => overlay.classList.add('hidden'));
$('#modal-confirm').addEventListener('click', () => {
  const name = $('#modal-name').value.trim();
  const url = $('#modal-url').value.trim();
  overlay.classList.add('hidden');
  if (modalMode === 'edit' && modalTargetId != null) editAccount(modalTargetId, name, url);
  else createAccount(name, url);
});
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.add('hidden'); });

// ---------------------------------------------------------------------------
// Workspace: "+" cria na hora (sem modal)
// ---------------------------------------------------------------------------
$('#add-workspace-btn').addEventListener('click', () => createWorkspace());

// ---------------------------------------------------------------------------
// Titlebar custom
// ---------------------------------------------------------------------------
$('#btn-min').addEventListener('click', () => window.nativeAPI.minimize());
$('#btn-max').addEventListener('click', () => window.nativeAPI.maximize());
$('#btn-close').addEventListener('click', () => window.nativeAPI.close());

// ---------------------------------------------------------------------------
// Barra de status
// ---------------------------------------------------------------------------
function updateStatusBar() {
  const ws = getActiveWorkspace();
  const openCount = ws ? ws.accounts.filter((a) => a.status === 'open').length : 0;
  const layoutLabel = ws ? (LAYOUT_LABELS[ws.layout] || 'Grade automática') : 'Grade automática';
  $('#status-workspace').innerHTML = `${ws ? escapeHtml(ws.name) : ''} · ${layoutLabel} · <span id="status-count">${openCount}</span>`;
  const acc = activeAccountId ? getAccountById(activeAccountId) : null;
  $('#status-active').textContent = acc ? `${acc.name} ativa` : 'Nenhuma conta ativa';
}

// ---------------------------------------------------------------------------
// Estatísticas reais de CPU / RAM (via processo principal)
// ---------------------------------------------------------------------------
async function refreshStats() {
  try {
    const metrics = await window.nativeAPI.getProcessStats();
    const byPid = new Map(metrics.map((m) => [m.pid, m]));
    let totalCpu = 0, totalMem = 0;
    const ws = getActiveWorkspace();
    const allOpenAccounts = state.workspaces.flatMap((w) => w.accounts.filter((a) => a.status === 'open'));

    for (const acc of allOpenAccounts) {
      if (acc.webContentsId != null && acc.pid == null) {
        acc.pid = await window.nativeAPI.getPidForWebContents(acc.webContentsId);
      }
      const m = acc.pid != null ? byPid.get(acc.pid) : null;
      if (ws && ws.accounts.includes(acc)) {
        const cpuTxt = m ? `${m.cpu.toFixed(1)}%` : '—';
        const ramTxt = m ? `${m.memoryMB} MB` : '—';
        const el = document.querySelector(`[data-stats="${acc.id}"]`);
        if (el) el.textContent = `CPU ${cpuTxt}  RAM ${ramTxt}`;
      }
      if (m) { totalCpu += m.cpu; totalMem += m.memoryMB; }
    }
    $('#status-cpu').textContent = `CPU ${totalCpu.toFixed(1)}%`;
    $('#status-ram').textContent = `RAM ${totalMem} MB`;
  } catch (err) { console.error('Erro ao obter estatísticas', err); }
}

setInterval(refreshStats, 2000);
setInterval(renderSidebar, 1000);
setInterval(schedulePersist, 15000);
window.addEventListener('beforeunload', () => { persistState(); });

// ---------------------------------------------------------------------------
// Modal: Configurações
// ---------------------------------------------------------------------------
const settingsOverlay = $('#settings-overlay');

function switchSettingsTab(tab) {
  document.querySelectorAll('.settings-tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.settings-panel').forEach((p) => p.classList.toggle('active', p.dataset.panel === tab));
}
document.querySelectorAll('.settings-tab').forEach((b) => {
  b.addEventListener('click', () => switchSettingsTab(b.dataset.tab));
});

async function openSettingsModal() {
  const s = state.settings;
  $('#set-idioma').value = s.idioma;
  $('#set-tema').value = s.tema;
  $('#set-login-item').checked = !!s.iniciarComSistema;
  $('#set-reopen-last').checked = s.reabrirUltimoWorkspace !== false;
  $('#set-url-padrao').value = s.urlInicialPadrao || DEFAULT_URL;
  $('#set-zoom').value = String(s.zoomPadrao || 1);
  $('#set-layout-padrao').value = s.layoutPadrao || 'auto';
  $('#set-downloads-path').textContent = s.downloadsPath || 'Pasta padrão do sistema';
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
$('#open-settings-btn').addEventListener('click', openSettingsModal);
$('#settings-close').addEventListener('click', () => settingsOverlay.classList.add('hidden'));
settingsOverlay.addEventListener('click', (e) => { if (e.target === settingsOverlay) settingsOverlay.classList.add('hidden'); });

$('#set-idioma').addEventListener('change', (e) => { state.settings.idioma = e.target.value; schedulePersist(); });
$('#set-tema').addEventListener('change', (e) => { state.settings.tema = e.target.value; schedulePersist(); });

$('#set-login-item').addEventListener('change', async (e) => {
  const enabled = e.target.checked;
  state.settings.iniciarComSistema = enabled;
  schedulePersist();
  try { await window.nativeAPI.setLoginItem(enabled); } catch (err) { console.error(err); }
});
$('#set-reopen-last').addEventListener('change', (e) => {
  state.settings.reabrirUltimoWorkspace = e.target.checked;
  schedulePersist();
});

$('#set-url-padrao').addEventListener('change', (e) => {
  state.settings.urlInicialPadrao = normalizeUrl(e.target.value.trim() || DEFAULT_URL);
  schedulePersist();
});
$('#set-zoom').addEventListener('change', (e) => {
  state.settings.zoomPadrao = parseFloat(e.target.value);
  schedulePersist();
});
$('#set-layout-padrao').addEventListener('change', (e) => {
  state.settings.layoutPadrao = e.target.value;
  schedulePersist();
});

$('#set-choose-folder').addEventListener('click', async () => {
  try {
    const folder = await window.nativeAPI.chooseDownloadsFolder();
    if (folder) {
      state.settings.downloadsPath = folder;
      $('#set-downloads-path').textContent = folder;
      schedulePersist();
    }
  } catch (err) { console.error(err); }
});
$('#set-ask-download').addEventListener('change', (e) => {
  state.settings.perguntarOndeSalvar = e.target.checked;
  schedulePersist();
});

$('#set-export').addEventListener('click', async () => {
  try {
    const result = await window.nativeAPI.exportState(serializeState());
    if (result && result.ok) alert(`Backup salvo em:\n${result.path}`);
  } catch (err) { console.error(err); }
});
$('#set-import').addEventListener('click', async () => {
  try {
    const data = await window.nativeAPI.importState();
    if (!data || !data.workspaces) return;
    const ok = window.confirm('Importar este arquivo vai substituir todos os workspaces e contas atuais. Continuar?');
    if (!ok) return;
    state = data;
    if (!state.settings) state.settings = defaultSettings();
    activeAccountId = null;
    if (!state.activeWorkspaceId && state.workspaces.length) state.activeWorkspaceId = state.workspaces[0].id;
    renderWorkspaceRail();
    renderSidebar();
    renderGrid();
    updateStatusBar();
    schedulePersist();
    settingsOverlay.classList.add('hidden');
  } catch (err) { console.error(err); }
});

$('#set-check-updates').addEventListener('click', () => {
  alert('Você está usando a versão mais recente deste projeto.');
});

init();
