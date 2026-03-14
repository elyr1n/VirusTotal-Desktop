require("dotenv").config();
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
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

  win.loadFile("html/virustotal-desktop.html");
}

app.whenReady().then(createWindow);

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

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return { error: err.message };
  }
});
