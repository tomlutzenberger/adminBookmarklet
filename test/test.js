
/*global global,window,require,describe,it,beforeEach,afterEach*/
/*jslint esnext:true */

const assert = require('assert');
const rewire = require('rewire');

const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();
global.window = mock.getWindow();
global.document = window.document;


const script = rewire('../adminBookmark.js');
const adminBookmark = script.__get__('adminBookmark');


describe('adminBookmark', () => {

    describe('#getSystems()', () => {
        it('should return an array', () => {
            assert.ok(Array.isArray(adminBookmark().getSystems()));
        });

        it('should contain at least 1 element', () => {
            assert.ok(adminBookmark().getSystems().length > 0);
        });
    });


    describe('#parseHead()', () => {
        it('should return a string', () => {
            assert.ok(typeof adminBookmark().parseHead() === 'string');
        });
    });


    describe('#getAdminPath()', () => {
        it('should return a string', () => {
            assert.ok(typeof adminBookmark().getAdminPath() === 'string');
        });

        it('should return "wp-admin" for wordpress sites', () => {
            const meta = document.createElement('meta');
            meta.name = 'generator';
            meta.content = 'Wordpress';
            document.getElementsByTagName('head')[0].appendChild(meta);

            assert.ok(adminBookmark().getAdminPath() === 'wp-admin');
        });

        it('should return "typo3" for Typo3 sites', () => {
            const meta = document.createElement('meta');
            meta.name = 'generator';
            meta.content = 'TYPO3';
            document.getElementsByTagName('head')[0].appendChild(meta);

            assert.ok(adminBookmark().getAdminPath() === 'typo3');
        });
    });

});

