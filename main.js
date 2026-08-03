const { app, BrowserWindow, ipcMain, webContents, session, Menu, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const https = require('https');

let mainWindow;
const STATE_FILE = () => path.join(app.getPath('userData'), 'state.json');
const registeredPartitions = new Set();

function createWindow() {
  // Em desenvolvimento (npm start), usa build/icon.png se existir — sem quebrar
  // caso o arquivo ainda não tenha sido criado. No build final (.exe/.AppImage/.dmg)
  // quem define o ícone é a config "build" do package.json (electron-builder).
  const devIconPath = path.join(__dirname, 'build', 'icon.png');
  const devIcon = fs.existsSync(devIconPath) ? devIconPath : undefined;

  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#05070b',
    title: 'Idle Hub',
    icon: devIcon,
    frame: false, // usamos nossa própria titlebar em HTML — remove a barra nativa e o menu File/Edit/View...
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
      sandbox: false,
    },
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null); // remove qualquer resquício do menu padrão (File/Edit/View/Window/Help)
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ---------------------------------------------------------------------------
// Estatísticas reais de CPU/RAM
// ---------------------------------------------------------------------------
ipcMain.handle('get-process-stats', async () => {
  const metrics = app.getAppMetrics();
  return metrics.map((m) => ({
    pid: m.pid,
    type: m.type,
    cpu: m.cpu ? m.cpu.percentCPUUsage : 0,
    memoryMB: m.memory ? Math.round(m.memory.workingSetSize / 1024) : 0,
  }));
});

ipcMain.handle('get-pid-for-webcontents', (event, webContentsId) => {
  const wc = webContents.fromId(webContentsId);
  return wc ? wc.getOSProcessId() : null;
});

// ---------------------------------------------------------------------------
// Persistência (salvar/restaurar contas, workspaces e configurações)
// ---------------------------------------------------------------------------
ipcMain.handle('save-state', (event, data) => {
  try {
    fs.writeFileSync(STATE_FILE(), JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Falha ao salvar estado:', err);
    return false;
  }
});

ipcMain.handle('load-state', () => {
  try {
    if (!fs.existsSync(STATE_FILE())) return null;
    return JSON.parse(fs.readFileSync(STATE_FILE(), 'utf-8'));
  } catch (err) {
    console.error('Falha ao carregar estado:', err);
    return null;
  }
});

// ---------------------------------------------------------------------------
// Limpar dados de sessão (cookies/localStorage/cache) de uma partição
// ---------------------------------------------------------------------------
ipcMain.handle('clear-partition', async (event, partition) => {
  try {
    await session.fromPartition(partition).clearStorageData();
    return true;
  } catch (err) {
    console.error('Falha ao limpar partição:', err);
    return false;
  }
});

// ---------------------------------------------------------------------------
// Configurações: versões, iniciar com o sistema, exportar/importar, downloads
// ---------------------------------------------------------------------------
ipcMain.handle('get-versions', () => ({
  app: app.getVersion(),
  electron: process.versions.electron,
  chrome: process.versions.chrome,
}));

ipcMain.handle('get-login-item', () => app.getLoginItemSettings().openAtLogin);
ipcMain.handle('set-login-item', (event, enabled) => {
  try {
    app.setLoginItemSettings({ openAtLogin: !!enabled });
    return true;
  } catch (err) {
    console.error('Falha ao configurar início automático:', err);
    return false;
  }
});

ipcMain.handle('choose-downloads-folder', async () => {
  const result = await dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] });
  if (result.canceled || !result.filePaths.length) return null;
  return result.filePaths[0];
});

ipcMain.handle('export-state', async (event, data) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: 'multi-conta-manager-backup.json',
    filters: [{ name: 'JSON', extensions: ['json'] }],
  });
  if (result.canceled || !result.filePath) return { ok: false };
  try {
    fs.writeFileSync(result.filePath, JSON.stringify(data, null, 2), 'utf-8');
    return { ok: true, path: result.filePath };
  } catch (err) {
    console.error('Falha ao exportar:', err);
    return { ok: false };
  }
});

ipcMain.handle('import-state', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [{ name: 'JSON', extensions: ['json'] }],
  });
  if (result.canceled || !result.filePaths.length) return null;
  try {
    return JSON.parse(fs.readFileSync(result.filePaths[0], 'utf-8'));
  } catch (err) {
    console.error('Falha ao importar:', err);
    return null;
  }
});

// Downloads dentro das <webview>: cada conta usa sua própria partição/sessão,
// então registramos o listener de download nela assim que a conta é criada.
function handleDownload(event, item, webContents) {
  const downloadId = `dl-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const send = (payload) => { if (mainWindow) mainWindow.webContents.send('download-event', { id: downloadId, ...payload }); };
  send({ state: 'started', filename: item.getFilename(), url: item.getURL(), startTime: Date.now() });

  try {
    let settings = {};
    if (fs.existsSync(STATE_FILE())) {
      const raw = JSON.parse(fs.readFileSync(STATE_FILE(), 'utf-8'));
      settings = raw.settings || {};
    }
    const folder = settings.downloadsPath || app.getPath('downloads');
    if (settings.perguntarOndeSalvar !== false) {
      const chosen = dialog.showSaveDialogSync(mainWindow, { defaultPath: path.join(folder, item.getFilename()) });
      if (chosen) item.setSavePath(chosen);
      else { item.cancel(); send({ state: 'cancelled' }); return; }
    } else {
      item.setSavePath(path.join(folder, item.getFilename()));
    }
  } catch (err) {
    console.error('Erro ao tratar download:', err);
  }

  item.on('updated', (e, state) => {
    if (state === 'progressing') {
      send({ state: 'progressing', receivedBytes: item.getReceivedBytes(), totalBytes: item.getTotalBytes() });
    } else if (state === 'interrupted') {
      send({ state: 'interrupted' });
    }
  });
  item.once('done', (e, state) => {
    send({ state: state === 'completed' ? 'completed' : 'cancelled', savePath: item.getSavePath() });
  });
}

ipcMain.on('register-partition-downloads', (event, partition) => {
  if (registeredPartitions.has(partition)) return;
  registeredPartitions.add(partition);
  session.fromPartition(partition).on('will-download', handleDownload);
});

// ---------------------------------------------------------------------------
// Controles de janela custom
// ---------------------------------------------------------------------------
ipcMain.on('win-minimize', () => mainWindow && mainWindow.minimize());
ipcMain.on('win-maximize', () => {
  if (!mainWindow) return;
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  else mainWindow.maximize();
});
ipcMain.on('win-close', () => mainWindow && mainWindow.close());

ipcMain.handle('toggle-fullscreen', () => {
  if (!mainWindow) return false;
  const next = !mainWindow.isFullScreen();
  mainWindow.setFullScreen(next);
  return next;
});
ipcMain.handle('is-fullscreen', () => (mainWindow ? mainWindow.isFullScreen() : false));

ipcMain.handle('open-external', (event, url) => {
  if (/^https?:\/\//i.test(url)) shell.openExternal(url);
});

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'idle-hub-update-check', Accept: 'application/vnd.github+json' },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (err) { reject(err); }
      });
    });
    req.on('error', reject);
    req.setTimeout(10000, () => req.destroy(new Error('timeout')));
  });
}

// Verificação de atualização via um Gist do GitHub contendo um JSON simples
// tipo { "version": "1.3.0", "url": "...", "message": "..." }. Compara com a
// versão real do app (package.json) — SEM baixar/instalar nada, só avisa.
ipcMain.handle('check-for-updates', async (event, gistUrl) => {
  try {
    const match = String(gistUrl || '').match(/gist\.github(?:usercontent)?\.com\/[^/]+\/([a-f0-9]+)/i);
    const gistId = match ? match[1] : null;
    if (!gistId) return { ok: false, error: 'invalid-url' };

    const data = await fetchJson(`https://api.github.com/gists/${gistId}`);
    if (!data || !data.files) return { ok: false, error: 'gist-error' };

    const fileKeys = Object.keys(data.files);
    const fileKey = fileKeys.find((k) => k.toLowerCase().endsWith('.json')) || fileKeys[0];
    if (!fileKey || !data.files[fileKey] || typeof data.files[fileKey].content !== 'string') {
      return { ok: false, error: 'no-file' };
    }

    let remote;
    try { remote = JSON.parse(data.files[fileKey].content); }
    catch (err) { return { ok: false, error: 'bad-json' }; }
    if (!remote || !remote.version) return { ok: false, error: 'no-version-field' };

    const localVersion = app.getVersion();
    return {
      ok: true,
      upToDate: String(remote.version) === String(localVersion),
      remoteVersion: remote.version,
      localVersion,
      updateUrl: remote.url || null,
      message: remote.message || null,
    };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
});
