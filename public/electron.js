const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const isDev = require('electron-is-dev');
let mainWindow;
require('../api/app');

function createWindow() {
  mainWindow = new BrowserWindow({width: 1920, height: 1080});
  mainWindow.loadURL(
    isDev ?
      'http://localhost:3000' :
      `file://${path.join(__dirname, '../build/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null));
  // mainWindow.removeMenu();
}

app.on('ready', () => {
  createWindow();

  // React developer tools initialization
  if (isDev) {
    const {default: installExtension, REACT_DEVELOPER_TOOLS} = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
