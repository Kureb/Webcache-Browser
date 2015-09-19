chrome.contextMenus.create({
  "type": "normal",
  "title": chrome.i18n.getMessage("contextMenu"),
  "contexts": ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"],
  "onclick": function (info, tab) {
      chrome.tabs.sendMessage(tab.id, {
        "functiontoInvoke": "cache"
      });
  }
});
