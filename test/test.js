
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

        it('should return "wp-admin" for Wordpress sites', () => {
            addMetaGenerator('Wordpress');
            assert.ok(adminBookmarklet().getAdminPath() === 'wp-admin');
        });

        it('should return "typo3" for Typo3 sites', () => {
            addMetaGenerator('TYPO3');
            assert.ok(adminBookmarklet().getAdminPath() === 'typo3');
        });
    });

});
