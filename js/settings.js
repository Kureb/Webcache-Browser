document.addEventListener('DOMContentLoaded', function(){

  var i18nTitle = chrome.i18n.getMessage("extName");
  document.getElementById("title").innerHTML = i18nTitle;

  var i18nCheckBoxCacheBrowser = chrome.i18n.getMessage("checkBoxCacheBrowsing");
  document.getElementById("enable_disable").innerHTML = i18nCheckBoxCacheBrowser;

    var input = document.getElementById('cache-browser');

    // set the initial state of the checkbox
    chrome.storage.sync.get("cache-browser", function(data){
        if (data["cache-browser"]){
          input.checked = true;
        } else {
          input.checked = false;
        }
      });


    input.addEventListener("change", function(){
        chrome.storage.sync.set({'cache-browser': input.checked});
    });


});
