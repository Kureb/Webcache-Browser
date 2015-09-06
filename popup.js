var searchBaseUrl = "http://webcache.googleusercontent.com/search?q=cache%3A";
var currentUrl = window.location.href;
var fullVersion = '&strip=0&vwsrc=0';
var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl) + fullVersion;

/* Before making the redirection, check if
* the request come back with no status code (404..)
* Doing a HEAD request instead of the default GET will only returns the headers
* and indicates whether the page exists (reponse codes 200 - 299 ) or not
* (response codes 400 - 499)
*/
$.ajax({
  type: 'HEAD',
  url: cacheViewUrl,
  success: function() {
    chrome.runtime.sendMessage({
      redirect: cacheViewUrl
    })
  },
  error: function() {
    // page does not exist
    $.notify("Sorry, no cache is available for this page.", "warn", { clickToHide: true, autoHide: false });
  }
});
