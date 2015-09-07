chrome.runtime.onMessage.addListener(function (request, sender) {
  chrome.tabs.update(sender.tab.id, {
    url: request.redirect
  });
});

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({'cache-browser': false});
});
