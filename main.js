const { app, BrowserWindow, ipcMain, webContents, session, Menu, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const STATE_FILE = () => path.join(app.getPath('userData'), 'state.json');
const registeredPartitions = new Set();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#070a12',
    title: 'Multi Conta Manager',
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
function handleDownload(event, item) {
  try {
    let settings = {};
    if (fs.existsSync(STATE_FILE())) {
      const raw = JSON.parse(fs.readFileSync(STATE_FILE(), 'utf-8'));
      settings = raw.settings || {};
    }
    const folder = settings.downloadsPath || app.getPath('downloads');
    if (settings.perguntarOndeSalvar !== false) {
      const chosen = dialog.showSaveDialogSync(mainWindow, {
        defaultPath: path.join(folder, item.getFilename()),
      });
      if (chosen) item.setSavePath(chosen);
      else item.cancel();
    } else {
      item.setSavePath(path.join(folder, item.getFilename()));
    }
  } catch (err) {
    console.error('Erro ao tratar download:', err);
  }
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
