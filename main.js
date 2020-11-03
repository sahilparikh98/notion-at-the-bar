const { menubar } = require('menubar');
const { app, Menu, Tray } = require('electron');

app.on('ready', () => {
  'use-strict';
  let tray = new Tray("icon-white.png");
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
