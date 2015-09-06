var searchBaseUrl = "https://webcache.googleusercontent.com/search?q=cache%3A";
var currentUrl = window.location.href;
var fullVersion = '&strip=0&vwsrc=0';
var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl) + fullVersion;
//Before making the redirection, check if we will not
//the request come back with no status code (404..)
//TODO : si pas success
$.ajax(cacheViewUrl,
  {
    success: function() {
      chrome.runtime.sendMessage({
        redirect: cacheViewUrl
      })
    }
    /*,
    error: function() {
      alert("Cache unavailable");
    }*/
});
