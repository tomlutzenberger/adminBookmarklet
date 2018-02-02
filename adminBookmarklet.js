/*!
 * adminBookmarklet v3.0
 * Dynamic Bookmarklet to quickly access the backend of your tool
 *
 * Copyright (c) 2018 - Tom Lutzenberger (lutzenbergerthomas at gmail dot com)
 * https://github.com/tomlutzenberger/adminBookmarklet
 * https://tomlutzenberger.github.io/adminBookmarklet/
 *
 * @license: Licensed under the MIT license
 * https://github.com/tomlutzenberger/adminBookmarklet/blob/master/LICENSE
 */

/*globals document,window*/
/*jslint esnext:true */


const adminBookmarklet = () => {

    'use strict';

    const ZERO = 0;
    const FIRST = 0;


    const getSystems = () => {
        return [
            {
                name: 'cloudrexx',
                path: 'cadmin'
            },
            {
                name: 'drupal',
                path: 'user'
            },
            {
                name: 'jimdo',
                path: 'login'
            },
            {
                name: 'joomla',
                path: 'administrator'
            },
            {
                name: 'magento',
                path: 'admin'
            },
            {
                name: 'pimcore',
                path: 'admin'
            },
            {
                name: 'sefrengo',
                path: 'backend'
            },
            {
                name: 'typo3',
                path: 'typo3'
            },
            {
                name: 'weebly',
                path: 'login'
            },
            {
                name: 'wordpress',
                path: 'wp-admin'
            },
            {
                name: 'xt-commerce',
                path: 'login.php'
            }
        ];
    };



    const parseHead = () => {
        /* Select the content of <head>, strip all whitespaces and return */
        let head = document.getElementsByTagName('head')[FIRST].innerHTML;

        return head.replace(/\s/g, '');
    };



    const getAdminPath = () => {
        let
            system = [],
            headContent = parseHead();

        system = getSystems().filter((systemObj) => {
            let pattern = new RegExp(systemObj.name, 'im');

            return pattern.test(headContent);
        });

        return system.length > ZERO ? system[FIRST].path : 'admin';
    };



    return {getSystems, parseHead, getAdminPath};
};


window.open(window.location.protocol + '//' + window.location.host + '/' + adminBookmarklet().getAdminPath(), '_blank');
