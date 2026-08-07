const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('nativeAPI', {
  getProcessStats: () => ipcRenderer.invoke('get-process-stats'),
  getPidForWebContents: (id) => ipcRenderer.invoke('get-pid-for-webcontents', id),
  saveState: (data) => ipcRenderer.invoke('save-state', data),
  loadState: () => ipcRenderer.invoke('load-state'),
  clearPartition: (partition) => ipcRenderer.invoke('clear-partition', partition),

  getVersions: () => ipcRenderer.invoke('get-versions'),
  getLoginItem: () => ipcRenderer.invoke('get-login-item'),
  setLoginItem: (enabled) => ipcRenderer.invoke('set-login-item', enabled),
  chooseDownloadsFolder: () => ipcRenderer.invoke('choose-downloads-folder'),
  exportState: (data) => ipcRenderer.invoke('export-state', data),
  importState: () => ipcRenderer.invoke('import-state'),
  registerPartitionDownloads: (partition) => ipcRenderer.send('register-partition-downloads', partition),
  onDownloadEvent: (callback) => ipcRenderer.on('download-event', (event, data) => callback(data)),

  minimize: () => ipcRenderer.send('win-minimize'),
  maximize: () => ipcRenderer.send('win-maximize'),
  close: () => ipcRenderer.send('win-close'),
  toggleFullscreen: () => ipcRenderer.invoke('toggle-fullscreen'),
  isFullscreen: () => ipcRenderer.invoke('is-fullscreen'),
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  checkForUpdates: (gistUrl) => ipcRenderer.invoke('check-for-updates', gistUrl),

  loadCredentials: () => ipcRenderer.invoke('load-credentials'),
  saveCredentials: (data) => ipcRenderer.invoke('save-credentials', data),
  deleteCredentials: (accountId) => ipcRenderer.invoke('delete-credentials', accountId),
});
