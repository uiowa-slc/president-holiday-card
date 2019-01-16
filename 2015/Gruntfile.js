module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/app.css' : 'scss/app.scss'
        },                  // Target
        options: {              // Target options
          style: 'compressed',
          loadPath: [
          'bower_components/foundation/scss'
          ]
        }
      }
    },
    //concat all the files into the build folder includePaths: 

    concat: {
      js:{
        src: [
         // 'bower_components/foundation/js/foundation.min.js',
          'bower_components/fitvids/jquery.fitvids.js',
          //'bower_components/jquery-ui/jquery-ui.js',
          //'bower_components/imagesloaded/imagesloaded.pkgd.js',
          //'bower_components/BigVideo.js/lib/bigvideo.js',
          'javascript/*.js'
        ],
        dest: 'build/build.src.js'
      }
    },

    //minify those concated files
    //toggle mangle to leave variable names intact

    uglify: {
      my_target:{
        files:{
        'build/build.js': ['build/build.src.js'],
        }
      }
    },

    watch: {
      scripts: {
        files: ['javascript/*.js', 'javascript/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: true,
        }
      },
      css: {
        files: ['scss/*.scss',
                'scss/**/*.scss',
                ],
        tasks: ['sass'],
        options: {
          spawn: true,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // Note: order of tasks is very important
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);

};