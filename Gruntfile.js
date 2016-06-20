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
    }
  });

  // load and register tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify', 'jshint']);
};
