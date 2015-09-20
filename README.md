_**CacheBrowser**_ is a Chrome Extension which allows you to navigate through the Google Cache without going back to the original site when you click a link.

**The Google What ?**
> Google Cache is normally referred as the copies of the web pages cached by Google. Google crawls the web and takes snapshots of each page as a backup just in case the current page is not available. These pages then become part of Google's cache. These Google cached pages can be extremely useful if a site is temporary down, you can always access these page by visiting Google’s cached version.

To make it simple, when you are on a website which is currently unavailable (for example, you have a 404 error), you may have the chance to access an earlier version cached by Google.

As you may know, the fastest way to view a cached version of a webpage is to add "cache:" in front of the url in your browser. 
<br> `http://www.domain.com/page.html` becomes `cache:http://www.domain.com/page.html`

But, if the page is dynamically generated, you may have a 404 error from Google Cache itself.
Secondly, if you are on a Google cached page and you click on whatever link you find on the page, you will quit the cached version and go back to the original site, which may still be unavailable.

With CacheBrowser, you no longer need to worry about this two points. You can click, click, click again, click a thousand times and you will still be redirected to the cached version except when it is impossible. When the extension finds that you will arrived on a 404 error of Google Cache itself, CacheBrowser let you where you are but notify you (in the top-right corner) that where is no cache available at this moment for this page.


***

**How do I make it works ?**

Install it from [insert chrome market link when it's released]. You will now have a new extension icon to the right of your address bar. ![capture d ecran 2015-09-20 a 14 05 08](https://cloud.githubusercontent.com/assets/3968618/9980629/8fa51c90-5fa0-11e5-9e3f-a38beb91062f.png)
<br> Even if it is just freshly installed, you can still browse the web without being disturbed by a redirection to the webcache, because the default behavior of the extension is to let you browse normally unless you specify your need to view the cached version.

If you want to enable the feature, you have to click on the extension's icon and select the checkbox. From this moment CacheBrowser is active. If you are done, you can disable it by the same way : click on the icon and unselect the checkbox.

![checkbox](https://cloud.githubusercontent.com/assets/3968618/9743325/fc696488-5665-11e5-8836-33b64cb1b307.png)

If you have just the need to see the cached version of the current page without lost some time to enable, reload, dowhateveryouwantonthepage, disable, you also have the possibility to be redirect directly through the item in the context menu.

![contextMenu](https://cloud.githubusercontent.com/assets/3968618/9977986/92b61dd2-5f1c-11e5-8bb9-d32c324319ab.png)


The **autodetection** option allows you to browse normally th internet, until you reach a unavailable page. At this moment, CacheBrowser will detect it and redirect you to the cached version if it exists.



***

**What's next ?**

It is planned to add some others features like :
* <s>Autodetection option : If a webpage is not found, CacheBrowser will automatically redirect to the cached version</s> : Done in 1.3.0
* Use of others cache services like Wayback Machine and/or Coral CDN
* <s>Internationalization (i18n) :   Adapt the extension to various languages</s> : Done in 1.2.0

***

**What's impossible ?**

I am unable to automatically change all links of a page by the cached version because either I make no verification and you may arrived on a 404 of Google cache, or I make the verifications .. and Google kicked me because of the height number of request done in a small time. Second case is unthinkable and first one is not smart. I prefer let you click on a link and make the verification at this moment even if it is a little bit longer than normally browse the website.

***

**Copyright**

* Icons made by Freepik from [flaticon](www.flaticon.com "flaticon") is licensed by CC BY 3.0
* Use of Javascript librairie [JQuery](https://jquery.org "jquery") under MIT license
* Use of Javascript librairie [Notify](http://notifyjs.com/ "notify") under MIT license

CacheBrowser has been written by [Alexandre DAUSSY](http://alexandredaussy.fr/ "my website") / [Kureb](https://github.com/Kureb "my github profile") licenced under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/ "licence")
