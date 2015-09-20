document.addEventListener('DOMContentLoaded', function(){

  /* Insert the strings in popup.html */
  var i18nTitle = chrome.i18n.getMessage("extName");
  document.getElementById("title").innerHTML = i18nTitle;

  var i18nCheckBoxCacheBrowser = chrome.i18n.getMessage("checkBoxCacheBrowsing");
  document.getElementById("enable_disable").innerHTML = i18nCheckBoxCacheBrowser;

  var i18nCheckBoxAutoDetection = chrome.i18n.getMessage("checkBoxAutoDetection");
  document.getElementById("auto_detection").innerHTML = i18nCheckBoxAutoDetection;



  /* watch the checkboxes 'cache-browser' and 'autodetection'
   * Both can't be check at the same time but both can be uncheck
   * at the same time
   */
  var input = document.getElementById('cache-browser');
  var autodetection = document.getElementById('autodetection');

  /* cvache-browser */
  chrome.storage.sync.get("cache-browser", function(data){
    input.checked = data["cache-browser"];
  });
  /* add listener on change event */
  input.addEventListener("change", function(){
    chrome.storage.sync.set({'cache-browser': input.checked});
    autodetection.checked = false;
  });

  /* autodetection */
  chrome.storage.sync.get("autodetection", function(data){
    autodetection.checked = data["autodetection"];
  });
  /* add listener on change event */
  autodetection.addEventListener("change", function(){
      chrome.storage.sync.set({'autodetection': autodetection.checked});
      input.checked = false;
  });

});
