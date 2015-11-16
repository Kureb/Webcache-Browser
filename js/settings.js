document.addEventListener('DOMContentLoaded', function(){

  /* Insert the strings in popup.html */
  var i18nTitle = chrome.i18n.getMessage("extName");
  document.getElementById("title").innerHTML = i18nTitle;

  var i18nOptions = chrome.i18n.getMessage("options");
  document.getElementById("options").innerHTML = i18nOptions;

  var i18nCheckBoxCacheBrowser = chrome.i18n.getMessage("checkBoxCacheBrowsing");
  document.getElementById("enable_disable").innerHTML = i18nCheckBoxCacheBrowser;

  var i18nCheckBoxAutoDetection = chrome.i18n.getMessage("checkBoxAutoDetection");
  document.getElementById("auto_detection").innerHTML = i18nCheckBoxAutoDetection;

  var i18nInfos = chrome.i18n.getMessage("infos");
  document.getElementById("infos").textContent = i18nInfos;

  var i18nLinkGithub = chrome.i18n.getMessage("linkGithub");
  document.getElementById("linkGithub").textContent = i18nLinkGithub;



  /* watch the checkboxes 'cache-browser' and 'autodetection'
   * Both can't be check at the same time but both can be uncheck
   * at the same time
   */
  var active = document.getElementById('cache-browser');
  var autodetection = document.getElementById('autodetection');

  /* cache-browser */
  chrome.storage.sync.get("cache-browser", function(data){
    active.checked = data["cache-browser"];
  });
  /* add listener on change event */
  active.addEventListener("change", function(){
    chrome.storage.sync.set({'cache-browser': active.checked});
    autodetection.checked = false;
    chrome.storage.sync.set({'autodetection': false});

  });

  /* autodetection */
  chrome.storage.sync.get("autodetection", function(data){
    autodetection.checked = data["autodetection"];
  });
  /* add listener on change event */
  autodetection.addEventListener("change", function(){
      chrome.storage.sync.set({'autodetection': autodetection.checked});
      active.checked = false;
      chrome.storage.sync.set({'cache-browser': false});
  });

  /* open links in a new tab */
  document.getElementById("linkGithub").addEventListener('click',function(e){
    chrome.tabs.create({
      url: e.target.href
    })
  });


});
