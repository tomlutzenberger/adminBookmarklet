/*
 * adminBookmark v2.0
 * One-click bookmarklet for quick administration access independent from the domain
 *
 * Copyright (c) 2016 - Tom Lutzenberger (lutzenbergerthomas at gmail dot com)
 * https://github.com/tomlutzenberger/adminBookmark
 *
 * Released under the MIT license
 * https://github.com/tomlutzenberger/adminBookmark/LICENSE
 */

javascript:
(function () {

  'use strict';
  /*globals document,window*/


  var systems = {
      'drupal' : 'user',
      'jimdo' : 'login',
      'joomla' : 'administrator',
      'magento' : 'admin',
      'pimcore' : 'admin',
      'typo3' : 'typo3',
      'weebly' : 'login',
      'wordpress' : 'wp-admin'
    };



  function extractDomain() {

    /* Get the current url */
    var url = window.location.href,

    /*
    * Search the url for a protocol like "://"
    * If indexOf() returns something bigger than -1 (error code), take 2 as index, otherwise 0
    */
      index = url.indexOf('://') > -1 ? 2 : 0;

    /*
    * To get the domain, we split the url using "/" as delimiter and get the n-th part (before defined index = 2 or 0)
    * In case there's a port in the remaining string, we also split that of (delimiter ":") and take the first part
    * Finally we return the extracted domain
    */
    return url.split('/')[index].split(':')[0];
  }



  function parseHead() {
    /* Select the content of <head>, strip all whitespaces and return */
    var head = document.getElementsByTagName("head")[0].innerHTML;

    return head.replace(/\s/g, '');
  }



  function checkForSystem(headContent, name) {
    /* Test 'headContent' for the string in 'name' (case-insensitive + multiline mode) */
    var pattern = new RegExp(name, 'im');

    return pattern.test(headContent);
  }



  function getAdminPath() {
    var
      systemName = '',
      headContent = parseHead();

    /* Loop through all systems */
    for (systemName in systems) {

      /* Only check if the given object has its own property */
      if (systems.hasOwnProperty(systemName)) {

        /* Check the head for an occurance of the name and return the admin path on success */
        if (checkForSystem(headContent, systemName)) {
          return systems[systemName];
        }
      }
    }

    /* If no match, return 'admin' as fallback */
    return 'admin';
  }



  // Open a new window/tab with extracted domain + your admin string
  window.open('//' + extractDomain() + '/' + getAdminPath(), '_blank');

})();
