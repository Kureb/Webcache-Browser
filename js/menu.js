chrome.contextMenus.create({
  "type": "normal",
  "title": "See cached version",
  "contexts": ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"],
  "onclick": function (info, tab) {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        "functiontoInvoke": "cache"
      });
    });
  }
});
