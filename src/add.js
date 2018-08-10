const electron = require('electron');
const path = require('path');
const remote = electron.remote;
const ipc = electron.ipcRenderer;

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', closeWindow);

const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', () => {
    ipc.send('update-notify-value', document.getElementById('notifyVal').value);
    closeWindow();
})

function closeWindow() {
    var window = remote.getCurrentWindow();
    window.close();
}