module.exports = function(grunt) {
  var config = {
    bower_path: 'bower_components',
    build_path: '.build',
    component_path: 'site_components',
    dest_path: 'source/assets',
    css: '<%= config.component_path %>/css',
    js: '<%= config.component_path %>/js',
    images: '<%= config.component_path %>/img',
  };
  grunt.registerTask('default', [ 'concat', 'sass', 'copy', 'cssmin', 'uglify', 'clean' ]);
  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      bootstrap: {
        src: [
          // Individually named to control the order in which they're compiled. Tooltip must be loaded before Popover.
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/affix.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/alert.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/button.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/carousel.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/collapse.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/dropdown.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/modal.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/tooltip.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/popover.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/scrollspy.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/js/tab.js',
          '<%= config.bower_path %>/bootstrap-sass-twbs/assets/javascripts/bootstrap/transition.js'
        ],
        dest: '<%= config.build_path %>/bootstrap.js'
      },
    },
    // Compile this ourselves instead of using Bootstrap's grunt file/letting Jekyll compile it for us
    sass: {
      dist: {
        options: {
          expand: true,
        },
        files: {
          '<%= config.build_path %>/bootstrap.css': '<%= config.bower_path %>/bootstrap-sass-twbs/assets/stylesheets/_bootstrap.scss'
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            nonull: true,
            src: ['<%= config.bower_path %>/jquery/dist/jquery.js'],
            dest: '<%= config.build_path %>/jquery.js'
          },
          {
            nonull: true,
            expand: true,
            cwd: '<%= config.component_path %>/css/',
            src: ['*.css'],
            dest: '<%= config.build_path %>'
          },
          {
            nonull: true,
            expand: true,
            cwd: '<%= config.component_path %>/js/',
            src: ['*.js'],
            dest: '<%= config.build_path %>'
          },
        ]
      }
    },
    cssmin: {
      minify: {
        files: [
          {
            expand: true,
            cwd: '<%= config.build_path %>/',
            src: ['*.css', '!*.min.css'],
            dest: '<%= config.dest_path %>/css/',
            ext: '.min.css'
          }
        ]
      }
    },
    uglify: {
      options: {
        compress: true,
        mangle: false,
        warnings: false,
        preserveComments: 'some',
      },
      build: {
        files: [
          {
            expand: true,
            src: '**/*.js',
            cwd: '<%= config.build_path %>/',
            dest: '<%= config.dest_path %>/js/',
            ext: '.min.js'
          },
        ]
      }
    },
    clean: {
      build: {
        src: [ '<%= config.build_path %>']
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-watch');
};