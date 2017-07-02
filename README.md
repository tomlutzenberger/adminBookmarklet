# adminBookmarklet

[![Releases](https://img.shields.io/github/release/tomlutzenberger/adminBookmarklet.svg?maxAge=2592000&style=flat-square)](https://github.com/tomlutzenberger/adminBookmarklet/releases)
[![License](https://img.shields.io/github/license/tomlutzenberger/adminBookmarklet.svg?maxAge=2592000&style=flat-square)](https://github.com/tomlutzenberger/adminBookmarklet/blob/master/LICENSE)
![David](https://img.shields.io/david/tomlutzenberger/adminBookmarklet.svg?maxAge=2592000&style=flat-square)
![David DEV](https://img.shields.io/david/dev/tomlutzenberger/adminBookmarklet.svg?maxAge=2592000&style=flat-square)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%99%A5-red.svg?style=flat-square)

## What is adminBookmarklet?

adminBookmarklet is a dynamic bookmark written in pure JavaScript to quickly access the login page of your CMS or E-Commerce system (might work with custom systems as well).

## Who is this for and why?

adminBookmarklet was created to minimize effort.

It's for _"lazy"_ people (like me :grinning:) or those who don't want to waste time with copy-pasting URL's to login.\
Developers, content managers, marketing people; everyone who works with websites or shops.

**The story behind:**

I was working for a web agency with a lot of customers and websites.\
Everytime I needed to login into the backend of a website I had to do the following steps:

1. Copy the frontend URL/Domain
1. Open new tab
1. Paste, maybe remove unwanted characters/path
1. Add the admin path

I was tired of doing this a million times each day :arrow_right: adminBookmarklet

## How does it work?

You got 2 options:

1. After creating a new bookmark in your browser, you can paste the **[minified script](https://github.com/tomlutzenberger/adminBookmarklet/blob/master/adminBookmarklet.min.js)** into the url field of the bookmark.\
1. Or **- the easier way -** you can just **drag the button** from [https://tomlutzenberger.github.io/adminBookmarklet](https://tomlutzenberger.github.io/adminBookmarklet/) to your bookmark bar.

Now when you click on it, the script opens a new window/tab and adds the admin path to the current website's domain.\
Since **[v2.0](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.0)** a couple of systems are detected automatically.

The fallback `/admin` will be used if your system is not supported (Please let me know, so I can add it)

![IMPORTANT NOTE](https://img.shields.io/badge/!!!-Important_Note-red.svg?style=flat-square)\
**In order to detect the system, its name must be present in the `<head>` tag.**

## What systems are supported?

![Cloudrexx](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/cloudrexx.png "Cloudrexx")
![Drupal](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/drupal.png "Drupal")
![Jimdo](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/jimdo.png "Jimdo")
![Joomla!](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/joomla.png "Joomla!")
![Magento](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/magento.png "Magento")
![Pimcore](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/pimcore.png "Pimcore")
![Sefrengo](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/sefrengo.png "Sefrengo")
![Typo3](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/typo3.png "Typo3")
![Weebly](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/weebly.png "Weebly")
![Wordpress](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/wordpress.png "Wordpress")
![XT-commerce](https://raw.githubusercontent.com/tomlutzenberger/adminBookmarklet/master/assets/xt-commerce.png "XT-commerce")

## What URLs are supported?

adminBookmarklet supports almost any kind of URL.

- **Domains with protocol:** [http://yourdomain.com](#)
- **Domains without protocol:** [yourdomain.com](#)
- **Domains with ports:** [http://your.domain.com:8080](#)
- **Subdomains:** [http://your.domain.com](#)
- **IP's:** [192.168.1.1/path](#)

## What browsers are supported?

![Browser Support IE8: supported](https://img.shields.io/badge/IE_8-supported-brightgreen.svg?style=flat-square)
![Browser Support IE9: supported](https://img.shields.io/badge/IE_9-supported-brightgreen.svg?style=flat-square)
![Browser Support IE10: supported](https://img.shields.io/badge/IE_10-supported-brightgreen.svg?style=flat-square)
![Browser Support IE11: supported](https://img.shields.io/badge/IE_11-supported-brightgreen.svg?style=flat-square)
![Browser Support Edge: issues](https://img.shields.io/badge/Edge-issues-orange.svg?style=flat-square)

![Browser Support Firefox 47+: supported with issues](https://img.shields.io/badge/Firefox_47+-supported_with_issues-blue.svg?style=flat-square)
![Browser Support Firefox 50: supported](https://img.shields.io/badge/Firefox_50+-supported-brightgreen.svg?style=flat-square)

![Browser Support Chrome 45+: supported](https://img.shields.io/badge/Chrome_45+-supported-brightgreen.svg?style=flat-square)

![Browser Support Oper: supported](https://img.shields.io/badge/Opera_40+-supported-brightgreen.svg?style=flat-square)

![Browser Support Vivaldi 1.2+: supported with issues](https://img.shields.io/badge/Vivaldi_1.2+-supported_with_issues-blue.svg?style=flat-square)

## Browser Issues

- Both **Vivaldi** and **Firefox < 50** keep the JavaScript in the URL bar after clicking the bookmarklet
- **Edge** is untestable due to the fact that it won't let you edit bookmarks and is therefore failing. See [**Microsoft Answers:** Edit bookmarks in Microsoft Edge](http://answers.microsoft.com/en-us/windows/forum/windows_10-networking/edit-bookmarks-in-microsoft-edge/d5e4d187-3247-4e11-9869-e56e4dcb2af7)

## License

This script is published under the **MIT License** and can be used for any commercial and personal projects.

## Changelog

- 2017-07-02 [**v3.0**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v3.0) Completely rewritten code base using ES6, unit tests and redesigned docs page
- 2017-02-21 [**v2.8**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.8) Improved system matching and added social share buttons to docs
- 2016-10-15 [**v2.6**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.6) Fixed port and protocol handling
- 2016-10-13 [**v2.4**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.4) Adding Github page
- 2016-09-22 [**v2.2**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.2) Some minor tweaks and switching to native domain extraction
- 2016-09-16 [**v2.1**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.1) Added Cloudrexx, Sefrengo and XT-commerce
- 2016-09-08 [**v2.0**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v2.0) Added functionality to detect Systems/CMS itself
- 2016-06-21 [**v1.0**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v1.0) Second release with strict environment. Including some cleanup and linting
- 2015-11-13 [**v0.2**](https://github.com/tomlutzenberger/adminBookmarklet/releases/tag/v0.2) First release
