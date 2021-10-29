import {app, App, BrowserWindow} from "electron"
import isDev from "electron-is-dev"

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(isDev ? "http://localhost:8080/" : `file://${app.getAppPath()}/dist/frontend/index.html`);
}

app.on("ready", createMainWindow);