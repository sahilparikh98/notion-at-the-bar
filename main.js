const { menubar } = require('menubar');
const { app, Menu, Tray } = require('electron');
const path = require('path');

app.on('ready', () => {
  'use-strict';
  const iconPath = path.join(__dirname, "assets", "icon-white.png");
  let tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([{role: "quit"}]);

  const mb = menubar({
    index: "https://www.notion.so",
    showDockIcon: false,
    showOnAllWorkspaces: false,
    tray: tray,
  });

  mb.on('ready', () => {
    tray.on('right-click', () => {
      mb.tray.popUpContextMenu(contextMenu);
    });
  });
});
