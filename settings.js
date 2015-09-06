document.addEventListener('DOMContentLoaded', function(){

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
