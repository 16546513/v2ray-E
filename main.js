const { app, BrowserWindow, Menu } = require('electron')

const config = require('./config.json')
const { width, height, title, icon } = config.app

function createWindow() {
  let win = new BrowserWindow({
    title,
    width,
    height,
    icon,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadFile(config.file)
  config.dev && win.webContents.openDevTools()
}

Menu.setApplicationMenu(null)
app.whenReady().then(createWindow)
