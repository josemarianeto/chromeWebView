const { app, BrowserWindow } = require('electron');


function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1280,
        height: 860,
        webPreferences: {}
    });

  win.loadURL("Your link here");

}

app.on('ready', createWindow);