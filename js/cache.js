/* Checks the preference of the user
 * If he wants to enable the extension
 * it calls the function which provides
 * him the cached version of the current site
 */
function checkOptions() {

chrome.storage.sync.get(null, function(items) {
  var allKeys = Object.keys(items);
  for (var item in items) {
    if (items.hasOwnProperty(item)) {
      //$.notify(item + ' ' + items[item]);
      if(items[item]) {
        switch (item) {
          case "autodetection":
            autoDetection();
            break;
          case "cache-browser":
            cacheBrowsing();
            break;
        }
      }
    }
  }
});

}

/* For each page visited, detects if there is a need to view
 * a cached version because of unavailability
 */
function autoDetection() {
  //$.notify("in autodection()");
  var currentUrl = window.location.href;
  $.ajax({
    type: 'GET',
    url: currentUrl,
    error: function() {
        cacheBrowsing();
    }
  });
}

/* Provides the cached version of the current site if
 * its available, otherwise, warns the user with a notification
 */
function cacheBrowsing() {
  //$.notify("in cacheBrowsing()");
  var currentUrl = window.location.href;
  var currentProtocol = window.location.protocol;
  var searchBaseUrl = currentProtocol + "//webcache.googleusercontent.com/search?q=cache%3A";
  var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl);

  /* Before making the redirection, check if
  * the request come back with no status code (404..)
  * Doing a HEAD request instead of the default GET will only returns the headers
  * and indicates whether the page exists (response codes 200 - 299 ) or not
  * (response codes 400 - 499)
  */
  var successfull = false;
  $.ajax({
    type: 'HEAD',
    url: cacheViewUrl,
    success: function() {
      successfull = true;
      chrome.runtime.sendMessage({
        redirect: cacheViewUrl
      })
    },
    complete: function() {
      if (!successfull)
      $.notify(chrome.i18n.getMessage("noCacheAvailable"), "warn", { clickToHide: true, autoHide: false });
    }
  });
}

/* When the page is loaded, we call the cacheCheck function */
checkOptions();

/* Looking if somebody clicks on the context menu */
chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "cache") {
        cacheBrowsing();
    }
});
