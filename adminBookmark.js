/*
 * adminBookmark v1.0
 * One-click bookmarklet for quick administration access independent from the domain
 *
 * Copyright (c) 2015 - Tom Lutzenberger (lutzenbergerthomas at gmail dot com)
 * https://github.com/tomlutzenberger/adminBookmark
 *
 * Released under the MIT license
 * https://github.com/tomlutzenberger/adminBookmark/LICENSE
 */

/*globals window*/

function extractDomain() {

  'use strict';

  // Get the current url
  var url = window.location.href;

  /*
  * Search the url for a protocol like "://"
  * If indexOf() returns something bigger than -1 (error code), take 2 as index, otherwise 0
  */
  var index = url.indexOf('://') > -1 ? 2 : 0;

  /*
  * To get the domain, we split the url using "/" as delimiter and get the n-th part (before defined index = 2 or 0)
  * In case there's a port in the remaining string, we also split that of (delimiter ":") and take the first part
  * Finally we return the extracted domain
  */
  return url.split('/')[index].split(':')[0];
}

// Open a new window/tab with extracted domain + your admin string
window.open('//' + extractDomain() + '/admin', '_blank');
