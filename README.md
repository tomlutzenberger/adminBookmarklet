# adminBookmark

The adminBookmark was created to minimize the effort of a lazy web developer.

Everytime i needed to login into the backend of a web project i had to do all the following steps:

1. Copy the frontend URL/Domain
2. Open new tab
3. Paste, maybe remove unwanted characters
4. Add the admin path


I was tired of doing this a million times each day.
**So here's the result.**


## How does it work?

After creating a new bookmark in your browser, you can paste the minified script into the url field.

Now when you click on it, the domain of the website you're currently on, adds the defined admin path and open's it in a new window/tab.

You can use whatever path you like. This can be simply `/admin`, `/typo3` or something else.

## What URL's are supported?

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

 * 2016-06-21 [**v1.0**](https://github.com/tomlutzenberger/adminBookmark/releases/tag/v1.0) Second release with strict environment. Including some cleanup and linting
 * 2015-11-13 [**v0.2**](https://github.com/tomlutzenberger/adminBookmark/releases/tag/v0.2) First release
