var searchBaseUrl = "http://webcache.googleusercontent.com/search?q=cache%3A";
var currentUrl = window.location.href;
//Ou ajouter le webcache dans le manifest
if (!currentUrl.includes(searchBaseUrl)) {
  var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl);
  chrome.runtime.sendMessage({
    redirect: cacheViewUrl
  })
}
