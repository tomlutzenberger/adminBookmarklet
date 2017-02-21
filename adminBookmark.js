/*
 * adminBookmark v2.8
 * Dynamic Bookmarklet to quickly access the backend of your tool
 *
 * Copyright (c) 2017 - Tom Lutzenberger (lutzenbergerthomas at gmail dot com)
 * https://github.com/tomlutzenberger/adminBookmark
 *
 * Released under the MIT license
 * https://github.com/tomlutzenberger/adminBookmark/LICENSE
 * https://tomlutzenberger.github.io/adminBookmark/
 */

/*globals document,window*/

(function () {

  'use strict';

  var systems = [
    { name: 'cloudrexx',   path : 'cadmin'        },
    { name: 'drupal',      path : 'user'          },
    { name: 'jimdo',       path : 'login'         },
    { name: 'joomla',      path : 'administrator' },
    { name: 'magento',     path : 'admin'         },
    { name: 'pimcore',     path : 'admin'         },
    { name: 'sefrengo',    path : 'backend'       },
    { name: 'typo3',       path : 'typo3'         },
    { name: 'weebly',      path : 'login'         },
    { name: 'wordpress',   path : 'wp-admin'      },
    { name: 'xt-commerce', path : 'login.php'     }
  ];



  function parseHead() {
    /* Select the content of <head>, strip all whitespaces and return */
    var head = document.getElementsByTagName('head')[0].innerHTML;

    return head.replace(/\s/g, '');
  }



  function getAdminPath() {
    var
      system = [],
      headContent = parseHead();

    system = systems.filter(function (systemObj) {
      var pattern = new RegExp(systemObj.name, 'im');

      return pattern.test(headContent);
    });

    return system.length > 0 ? system[0].path : 'admin';
  }



  // Open a new window/tab with domain + detected admin string
  window.open(window.location.protocol + '//' + window.location.host + '/' + getAdminPath(), '_blank');

}());
