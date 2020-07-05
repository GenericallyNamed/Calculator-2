const {remote} = require('electron');
document.getElementById('closeBtn').addEventListener('click', closeWindow);
document.getElementById('minimizeBtn').addEventListener('click', minimizeWindow);
document.getElementById('maximizeBtn').addEventListener('click', maximizeWindow);
console.log("identified elements");


function closeWindow () {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.close();
}

function minimizeWindow () {  
    var window = remote.BrowserWindow.getFocusedWindow();
    window.minimize();
}

function maximizeWindow () {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.isMaximized() ? window.unmaximize() : window.maximize();
}

