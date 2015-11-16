_**Webcache Browser**_ is a Chrome Extension which allows you to navigate through the Google Cache without going back to the original site when you click a link.

**The Google What ?**
> Google Cache is normally referred as the copies of the web pages cached by Google. Google crawls the web and takes snapshots of each page as a backup just in case the current page is not available. These pages then become part of Google's cache. These Google cached pages can be extremely useful if a site is temporary down, you can always access these page by visiting Google’s cached version.

To make it simple, when you are on a website which is currently unavailable (for example, you have a 404 error), you may have the chance to access an earlier version cached by Google.

As you may know, the fastest way to view a cached version of a webpage is to add "cache:" in front of the url in your browser. 
<br> `http://www.domain.com/page.html` becomes `cache:http://www.domain.com/page.html`

But, if the page is dynamically generated, you may have a 404 error from Google Cache itself.
Secondly, if you are on a Google cached page and you click on whatever link you find on the page, you will quit the cached version and go back to the original site, which may still be unavailable.

With Webcache Browser, you no longer need to worry about this two points. You can click, click, click again, click a thousand times and you will still be redirected to the cached version except when it is impossible. When the extension finds that you will arrived on a 404 error of Google Cache itself, Webcache Browser let you where you are but notify you (in the top-right corner) that where is no cache available at this moment for this page.


***

**How do I make it works ?**

Install it from [chrome web store](https://chrome.google.com/webstore/detail/webcache-browser/hpfdnbgcidlajjdipdfdehdabklpnfcd "web store"). 
<br> ![icon](https://cloud.githubusercontent.com/assets/3968618/9980629/8fa51c90-5fa0-11e5-9e3f-a38beb91062f.png) You will now have a new extension icon to the right of your address bar. 
<br> Even if it is just freshly installed, you can still browse the web without being disturbed by a redirection to the webcache, because the default behavior of the extension is to let you browse normally unless you specify your need to view the cached version.

If you want to enable the feature, you have to click on the extension's icon and select the checkbox. From this moment CacheBrowser is active. If you are done, you can disable it by the same way : click on the icon and unselect the checkbox.


![checkbox](https://cloud.githubusercontent.com/assets/3968618/11193085/ef68cf56-8ca4-11e5-92ba-ded45b91c85c.png)



If you have just the need to see the cached version of the current page without lost some time to enable, reload, dowhateveryouwantonthepage, disable, you also have the possibility to be redirect directly through the item in the context menu.

![contextMenu](https://cloud.githubusercontent.com/assets/3968618/11193086/ef7f404c-8ca4-11e5-9e5b-5d4521d0c67a.png)


The **autodetection** option allows you to browse normally th internet, until you reach a unavailable page. At this moment, Webcache Browser will detect it and redirect you to the cached version if it exists.



***

**What's next ?**

It is planned to add some others features like :
* <s>Autodetection option : If a webpage is not found, Webcache Browser will automatically redirect to the cached version</s> : Done in 1.3.0
* <s>Internationalization (i18n) :   Adapt the extension to various languages</s> : Done in 1.2.0
* Any ideas?

***


**Copyright**

* Icons made by Freepik from [flaticon](www.flaticon.com "flaticon") is licensed by CC BY 3.0
* Use of Javascript librairie [JQuery](https://jquery.org "jquery") under MIT license
* Use of Javascript librairie [Notify](http://notifyjs.com/ "notify") under MIT license
* Use of "Flat UI - Custom checkboxes" by [Geoffrey Crofte](http://codepen.io/anon/pen/XmOVEa "Flat UI")

Webcache Browser has been written by [Alexandre DAUSSY](http://alexandredaussy.fr/ "my website") / [Kureb](https://github.com/Kureb "my github profile") licenced under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/ "licence")
