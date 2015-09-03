var searchBaseUrl = "http://webcache.googleusercontent.com/search?q=cache%3A";
var currentUrl = window.location.href;
var cacheViewUrl = searchBaseUrl + encodeURIComponent(currentUrl);
//Avant d'envoyer la requête, vérifier qu'on tombe pas sur l'erreur
//404 du cache google
$.ajax(cacheViewUrl,
   {
      statusCode: {
      404: function() {
         alert('page not found');
      }
   }, success: function() {
     chrome.runtime.sendMessage({
       redirect: cacheViewUrl
     })
   }
});
