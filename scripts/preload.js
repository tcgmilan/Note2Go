const { contextBridge, ipcRenderer } = require("electron")
const fs = require("fs-extra")

contextBridge.exposeInMainWorld("darkmode", {
    toggle : () => ipcRenderer.invoke("dark-mode:toggle"),
    system : () => ipcRenderer.invoke("dark-mode:system")

})