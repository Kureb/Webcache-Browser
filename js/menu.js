chrome.contextMenus.create({
    "type": "normal",
    "title": "Google Cached Version",
    "contexts": ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"],
    "onclick": function(info, tab) {
        var tabUrl = encodeURIComponent(tab.url);
        var tabTitle = encodeURIComponent(tab.title);
        chrome.tabs.update(tab.id, {
            url: "http://webcache.googleusercontent.com/search?q=cache:" + tabUrl
        });
    }
});
