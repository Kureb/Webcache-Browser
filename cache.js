/* Checks the preference of the user
 * If he wants to enable the extension
 * it calls the function which provides
 * him the cached version of the current site
 */
function cacheCheck() {
  chrome.storage.sync.get('cache-browser', function(data) {
    if(data["cache-browser"] == true)
      cacheBrowsing();
  });
}


/* Provides the cached version of the current site if
 * its available, otherwise, warns the user with a notification
 */
function cacheBrowsing() {
  var currentUrl = window.location.href;
  var currentProtocol = window.location.protocol;
  var searchBaseUrl = currentProtocol + "//webcache.googleusercontent.com/search?q=cache%3A";
  var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl);

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
}

/* When the page is loaded, we call the cacheCheck function */
cacheCheck();
