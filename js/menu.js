chrome.contextMenus.create({
  "type": "normal",
  "title": "See cached version",
  "contexts": ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"],
  "onclick": function (info, tab) {
      chrome.tabs.sendMessage(tab.id, {
        "functiontoInvoke": "cache"
      });
  }
});
