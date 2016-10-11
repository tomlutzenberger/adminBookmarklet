/*jshint scripturl:true*/
/*global module*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: 'javascript:',
        quoteStyle: 1,
        screwIE8: true
      },
      target: {
        files: {
          'adminBookmark.min.js': 'adminBookmark.js'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'adminBookmark.js']
    },

    pug: {
      release: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'docs/index.html': 'docs/index.pug'
        }
      }
    }
  });

  // load and register tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-pug');

  grunt.registerTask('default', ['uglify', 'pug']);
  grunt.registerTask('lint', ['jshint']);
};
