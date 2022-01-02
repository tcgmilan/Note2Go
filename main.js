const { app, BrowserWindow, ipcMain, nativeTheme, ipcRenderer  } = require("electron")
const path = require("path")



//#region APP

const CreateMain = () =>{
    const win = new BrowserWindow({
        width : 700,
        height : 700,
        webPreferences : {
            preload : path.join(__dirname, "./scripts/preload.js"),
            nodeIntegration: true
        }
    })
    win.loadFile("index.html")
    setTimeout(() =>{
        win.loadFile("./html/list_notes.html")
    }, 3500)
    exports.win = win

//#region  DARK MODE
 
    ipcMain.handle("dark-mode:toggle", () =>{
    if(nativeTheme.shouldUseDarkColors){
        nativeTheme.themeSource = "light"
    }
    else{
        nativeTheme.themeSource = "dark"
    }
    return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle("dark-mode:system", () =>{
        nativeTheme.themeSource = "system"
    })
    
//#endregion
}
//#endregion


app.whenReady().then(() =>{
    CreateMain()
    app.on("activate", () =>{
        if(BrowserWindow.getAllWindows().length == 0){
            CreateWindow()
        }
    })
})

app.on("window-all-closed", () =>{
    if(process.platform != "darwin"){
        app.quit()
    }
})