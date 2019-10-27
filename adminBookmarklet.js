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

/*jslint esnext:true */


/**
 * @method adminBookmarklet
 * @description Main object holding all methods
 *
 * @return {Object} Public object methods
 */
const adminBookmarklet = () => {

    'use strict';

    /**
     * @property ZERO
     * @description Constant representing the number zero
     *
     * @type {Integer}
     */
    const ZERO = 0;

    /**
     * @property FIRST
     * @description Constant representing the first index of every array
     *
     * @type {Integer}
     */
    const FIRST = 0;


    /**
     * @method getSystems
     * @description Get a mapping of all supported systems and corresponding paths
     *
     * @return {Object[]}
     */
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



    /**
     * @method parseHead
     * @description Parse the current document's `<head>` HTML and return it without whitespaces
     *
     * @return {String} The HTML
     */
    const parseHead = () => {
        /* Select the content of <head>, strip all whitespaces and return */
        let head = document.getElementsByTagName('head')[FIRST].innerHTML;

        return head.replace(/\s/g, '');
    };



    /**
     * @method getAdminPath
     * @description Get the admin path depending on detected system or `admin` as default
     *
     * @return {String} Admin path
     */
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
