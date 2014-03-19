module.exports = function(grunt) {
  grunt.initConfig({
    app: {
      production: {
        url: 'http://pierrickcaen.fr',
        destination: '.production'
      },
      development: {
        url: '',
        destination: '.development'
      },
      jekyll: {
        source: 'app/templates'
      },
      root: 'app'
    },
    autoprefixer: {
      development: {
        files: [{
          expand: true,
          cwd: '<%= app.development.destination %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= app.development.destination %>/styles/'
        }]
      },
      production: {
        files: [{
          expand: true,
          cwd: '<%= app.production.destination %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= app.production.destination %>/styles/'
        }]
      },
      options: {
        browsers: ['last 1 version']
      }
    },
    coffee: {
      development: {
        expand: true,
        cwd: '<%= app.root %>/scripts',
        src: '{,*/}*.coffee',
        dest: '<%= app.development.destination %>/scripts/',
        ext: '.js'
      },
      production: {
        expand: true,
        cwd: '<%= app.root %>/scripts',
        src: '{,*/}*.coffee',
        dest: '<%= app.production.destination %>/scripts/',
        ext: '.js'
      }
    },
    compass: {
      options: {
        sassDir: '<%= app.root %>/styles',
        cssDir: '<%= app.development.destination %>/styles',
        fontsDir: '<%= app.root %>/fonts',
        imagesDir: '<%= app.root %>/images',
        javascriptsDir: '<%= app.root %>/scripts',
        relativeAssets: false,
        assetCacheBuster: false
      },
      production: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          httpPath: '<%= app.production.url %>',
          cssDir: '<%= app.production.destination %>/styles',
        }
      },
      development: {
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: ['<%= app.development.destination %>']
        }
      }
    },
    cssmin: {
      vendor: {
        files: {
          '<%= app.production.destination %>/styles/vendor.min.css': [
            '<%= app.production.destination %>/styles/vendor.css'
          ]
        }
      },
      main: {
        files: {
          '<%= app.production.destination %>/styles/main.min.css': [
            '<%= app.production.destination %>/styles/main.css'
          ]
        },
        options: {
          banner: '/* Pierrick CAEN - porfolio */'
        }
      }
    },
    uglify: {
      vendor: {
        files: {
          '<%= app.production.destination %>/scripts/vendor.min.js': [
            // from temp/
          ]
        }
      },
      main: {
        files: {
          '<%= app.production.destination %>/scripts/main.min.js': [
            // from temp/
          ]
        },
        options: {
          banner: '/* Pierrick CAEN - porfolio */'
        }
      }
    },
    imagemin: {
      production: {
        files: [{
          expand: true,
          cwd: '<%= app.root %>/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= app.production.destination %>/images'
        }]
      }
    },
    jshint: {
      all: ['Gruntfile.js', '<%= app.development.destination %>/scripts/**/*.js']
    },
    svgmin: {
      production: {
        files: [{
          expand: true,
          cwd: '<%= app.root %>/images',
          src: ['**/*.{svg}'],
          dest: '<%= app.production.destination %>/images'
        }]
      }
    },
    watch: {
      compass: {
        files: ['<%= app.root %>/styles/{,*/}*.sass'],
        tasks: ['compass:development', 'autoprefixer']
      },
      js: {
        files: ['<%= app.root %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:development', 'jshint']
      },
      jekyll: {
        files: ['<%= app.jekyll.source %>/{,*/}*.*'],
        tasks: [
          'exec:development',
          'compass:development',
          'autoprefixer:development',
          'coffee:development',
          'jshint',
          'copy:development'
        ]
      },
      options: {
        livereload: '<%= connect.options.livereload %>'
      }
    },
    exec: {
      production: {
        cmd: 'jekyll build --source <%= app.jekyll.source %> --destination <%= app.production.destination %>'
      },
      development: {
        cmd: 'jekyll build --source <%= app.jekyll.source %> --destination <%= app.development.destination %>'
      }
    },
    replace: {
      production: {
        src: '<%= app.production.destination %>/{,*/}*.html',
        dest: '<%= app.production.destination %>/',
        replacements: [{
          from: '.css',
          to: '.min.css'
        },
        {
          from: '.js',
          to: '.min.js'
        }]
      }
    },
    clean: {
      files: ['*.html', 'sitemap.xml', 'projects/', 'blog/', 'images/', 'fonts/', 'scripts/', 'styles/']
    },
    copy: {
      development: {
        files: [
          {expand: true, flatten: true, src: ['<%= app.root %>/images/**'], dest: '<%= app.development.destination %>/images/'},
          {expand: true, flatten: true, src: ['<%= app.root %>/fonts/*'], dest: '<%= app.development.destination %>/fonts/'},
        ]
      },
      production_output: {
        files: [
          {expand: true, flatten: true, src: ['<%= app.root %>/fonts/*'], dest: '<%= app.production.destination %>/fonts/'}
        ]
      },
      production: {
        files: [
          {
            expand: true,
            cwd: ['<%= app.jekyll.source %>'],
            src: [
              '{,*/}*.html',
              'sitemap.xml',
              'fonts/*.*'
            ],
            dest: '<%= app.production.destination %>/'
          }
        ]
      }
    }
  });

  grunt.registerTask('default', ['production']);
  grunt.registerTask('build', ['production']);
  grunt.registerTask('production', [
    'clean',
    'exec:production',
    'compass:production',
    'autoprefixer:production',
    'coffee:production',
    'jshint',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'copy:production_output',
    'replace:production'
  ]);

  grunt.registerTask('serve', ['development']);
  grunt.registerTask('server', ['development']);
  grunt.registerTask('development', [
    'exec:development',
    'compass:development',
    'autoprefixer:development',
    'coffee:development',
    'jshint',
    'copy:development',
    'connect:livereload',
    'watch'
  ]);

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-text-replace');
};
