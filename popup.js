var searchBaseUrl = "http://webcache.googleusercontent.com/search?q=cache%3A";
var currentUrl = window.location.href;
if (!currentUrl.includes(searchBaseUrl)) {
  var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl);
  chrome.extension.sendRequest({
    redirect: cacheViewUrl
  })

}
