module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
      all: {
        mainFiles: {
          'react': ['react.js', 'JSXTransformer.js']
        },
        dest: 'build/_bower.js',
        cssDest: 'build/_bower.css',
        exclude: [
        ],
        dependencies: {
        },
        bowerOptions: {
          relative: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.registerTask('default', ['bower_concat']);
};
