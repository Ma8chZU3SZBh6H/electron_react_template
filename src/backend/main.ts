import {app, App, BrowserWindow} from "electron"


function createMainWindow(){
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL("http://localhost:8080/");
}

app.on("ready", createMainWindow);