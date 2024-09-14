import path from "path";
import { writeFile } from "fs";
import { app, desktopCapturer, dialog, ipcMain, Menu } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

// ipcMain.on("message", async (event, arg) => {
//   event.reply("message", `${arg} World!`);
// });

ipcMain.on("select-source", async (event, arg) => {
  const inputSources = await desktopCapturer.getSources({
    types: ["screen", "window"],
  });

  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map((source) => {
      return {
        label: source.name,
        click: () => event.reply("select-source", source),
      };
    })
  );

  videoOptionsMenu.popup();
});

ipcMain.on("save-dialog", async (event, buffer) => {
  const { filePath } = await dialog.showSaveDialog({
    buttonLabel: "Save Video",
    defaultPath: `vid-${Date.now()}.webm`,
  });

  writeFile(filePath, buffer, () => {
    console.log("Video saved successfully");
  });
});
