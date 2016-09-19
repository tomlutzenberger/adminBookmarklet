# adminBookmark v2.1

The adminBookmark was created to minimize the effort of a lazy web developer.

Everytime I needed to login into the backend of a website I had to do the following steps:

1. Copy the frontend URL/Domain
2. Open new tab
3. Paste, maybe remove unwanted characters
4. Add the admin path


I was tired of doing this a million times each day.
**So here's the result.**


## How does it work?

After creating a new bookmark in your browser, you can paste the minified script into the url field.

Now when you click on it, the domain of the website you're currently on, adds the defined admin path and open's it in a new window/tab.

Since v2.0 a couple of systems are detected automatically. If your system is not supported, you will be directed to the fallback, `/admin`.

**If so, please let me know, so I can add it.**


## What systems are supported?

* Cloudrexx
* Drupal
* Jimdo
* Joomla!
* Magento
* Pimcore
* Sefrengo
* Typo3
* Weebly
* Wordpress
* XT-commerce


## What kind of URL's are supported?

The script supports a lot.
<dl>
  <dt>Domains with a protocol</dt>
  <dd>http://yourdomain.com</dd>

  <dt>Domains without protocol</dt>
  <dd>yourdomain.com</dd>

  <dt>Subdomains</dt>
  <dd>http://your.domain.com</dd>

  <dt>It doesn't care about subpages or other paths</dt>
  <dd>http://yourdomain.com/some-page</dd>

  <dt>Even IP's</dt>
  <dd>192.168.1.1/path</dd>

  <dt>And Ports (if the port is available)</dt>
  <dd>http://your.domain.com:8080</dd>
</dl>

## License

This script is published under the **MIT License** and can be used for any commercial and personal projects.


## Changelog

 * 2016-09-16 [**v2.1**](https://github.com/tomlutzenberger/adminBookmark/releases/tag/v2.1) Added Cloudrexx, Sefrengo and XT-commerce
 * 2016-09-08 [**v2.0**](https://github.com/tomlutzenberger/adminBookmark/releases/tag/v2.0) Added functionality to detect Systems/CMS itself
 * 2016-06-21 [**v1.0**](https://github.com/tomlutzenberger/adminBookmark/releases/tag/v1.0) Second release with strict environment. Including some cleanup and linting
 * 2015-11-13 [**v0.2**](https://github.com/tomlutzenberger/adminBookmark/releases/tag/v0.2) First release
