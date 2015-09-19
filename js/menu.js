chrome.contextMenus.create({
  "type": "normal",
  "title": "See cached version",
  "contexts": ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"],
  "onclick": function (tab) {
      chrome.tabs.sendMessage(tab.id, {
        "functiontoInvoke": "cache"
      });
  }
});
