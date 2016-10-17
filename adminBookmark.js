/*
 * adminBookmark v2.6
 * Dynamic Bookmarklet to quickly access the backend of your tool
 *
 * Copyright (c) 2016 - Tom Lutzenberger (lutzenbergerthomas at gmail dot com)
 * https://github.com/tomlutzenberger/adminBookmark
 *
 * Released under the MIT license
 * https://github.com/tomlutzenberger/adminBookmark/LICENSE
 * https://tomlutzenberger.github.io/adminBookmark/
 */

/*globals document,window*/

(function () {

  'use strict';

  var
    adminUrl = window.location.protocol + '//' + window.location.host + '/',
    systems = {
      'cloudrexx' : 'cadmin',
      'drupal' : 'user',
      'jimdo' : 'login',
      'joomla' : 'administrator',
      'magento' : 'admin',
      'pimcore' : 'admin',
      'sefrengo' : 'backend',
      'typo3' : 'typo3',
      'weebly' : 'login',
      'wordpress' : 'wp-admin',
      'xt-commerce' : 'login.php'
    };



  function parseHead() {
    /* Select the content of <head>, strip all whitespaces and return */
    var head = document.getElementsByTagName('head')[0].innerHTML;

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

    /* If there's no match, return 'admin' as fallback */
    return 'admin';
  }



  /* Open a new window/tab with domain + detected admin string */
  window.open(adminUrl + getAdminPath(), '_blank');

}());
