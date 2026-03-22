require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, ipcMain, dialog } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 640,
    autoHideMenuBar: true,
    icon: "images/icon.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile("html/virustotal.html");
}

app.whenReady().then(createWindow);

ipcMain.on("open-page", (event, page) => {
  mainWindow.loadFile(path.join(__dirname, "..", "html", `${page}.html`));
});

ipcMain.handle("open-file", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "All Files", extensions: ["*"] }],
  });
  return result;
});

ipcMain.handle("virustotal-analyze", async (event, fileId) => {
  try {
    const response = await fetch(
      `https://www.virustotal.com/api/v3/files/${fileId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": process.env.VIRUSTOTAL_API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    return { error: err.message };
  }
});
