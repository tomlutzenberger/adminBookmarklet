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

/*global global,window,require,describe,it,beforeEach*/
/*jslint esnext:true */


const assert = require('assert');
const rewire = require('rewire');

const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();
global.window = mock.getWindow();
global.document = window.document;


const script = rewire('../adminBookmarklet.js');
const adminBookmarklet = script.__get__('adminBookmarklet');

const ZERO = 0;
const FIRST = 0;


const addMetaGenerator = (name) => {
    const meta = document.createElement('meta');
    meta.name = 'generator';
    meta.content = name;
    document.getElementsByTagName('head')[FIRST].appendChild(meta);
};


describe('adminBookmarklet', () => {

    describe('#getSystems()', () => {
        it('should return an array', () => {
            assert.ok(Array.isArray(adminBookmarklet().getSystems()));
        });

        it('should contain at least 1 element', () => {
            assert.ok(adminBookmarklet().getSystems().length > ZERO);
        });
    });


    describe('#parseHead()', () => {
        it('should return a string', () => {
            assert.ok(typeof adminBookmarklet().parseHead() === 'string');
        });
    });


    describe('#getAdminPath()', () => {
        beforeEach(() => {
            const meta = document.getElementsByTagName('meta');
            [...meta].map((element) => {
                element.parentNode.removeChild(element);
            });
        });

        it('should return a string', () => {
            assert.ok(typeof adminBookmarklet().getAdminPath() === 'string');
        });

        it('should return "cadmin" for Cloudrexx sites', () => {
            addMetaGenerator('Cloudrexx');
            assert.ok(adminBookmarklet().getAdminPath() === 'cadmin');
        });

        it('should return "user" for Drupal sites', () => {
            addMetaGenerator('Drupal');
            assert.ok(adminBookmarklet().getAdminPath() === 'user');
        });

        it('should return "login" for Jimdo sites', () => {
            addMetaGenerator('Jimdo');
            assert.ok(adminBookmarklet().getAdminPath() === 'login');
        });

        it('should return "administrator" for Joomla sites', () => {
            addMetaGenerator('Joomla');
            assert.ok(adminBookmarklet().getAdminPath() === 'administrator');
        });

        it('should return "admin" for Magento sites', () => {
            addMetaGenerator('Magento');
            assert.ok(adminBookmarklet().getAdminPath() === 'admin');
        });

        it('should return "admin" for Pimcore sites', () => {
            addMetaGenerator('Pimcore');
            assert.ok(adminBookmarklet().getAdminPath() === 'admin');
        });

        it('should return "backend" for Sefrengo sites', () => {
            addMetaGenerator('Sefrengo');
            assert.ok(adminBookmarklet().getAdminPath() === 'backend');
        });

        it('should return "typo3" for Typo3 sites', () => {
            addMetaGenerator('TYPO3');
            assert.ok(adminBookmarklet().getAdminPath() === 'typo3');
        });

        it('should return "wp-admin" for Wordpress sites', () => {
            addMetaGenerator('Wordpress');
            assert.ok(adminBookmarklet().getAdminPath() === 'wp-admin');
        });

        it('should return "login" for Weebly sites', () => {
            addMetaGenerator('Weebly');
            assert.ok(adminBookmarklet().getAdminPath() === 'login');
        });

        it('should return "login.php" for xt-commerce sites', () => {
            addMetaGenerator('xt-commerce');
            assert.ok(adminBookmarklet().getAdminPath() === 'login.php');
        });
    });

});
