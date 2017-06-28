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
/*jslint esnext:true */


const adminBookmark = () => {

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


window.open(window.location.protocol + '//' + window.location.host + '/' + adminBookmark().getAdminPath(), '_blank');
