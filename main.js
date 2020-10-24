const { menubar } = require('menubar');

const mb = menubar({
  index: "https://www.notion.so",
  icon: "icon-white.png",
  showDockIcon: false,
  showOnAllWorkspaces: false,
});

mb.on('ready', () => {
  console.log("menubar is ready");
})