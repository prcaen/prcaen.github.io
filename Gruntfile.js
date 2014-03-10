// Directory structure

// - app
// -- images/
// -- fonts/
// -- scripts/
// -- styles/
// -- templates/ (jekyll)
// - images
// - fonts/
// - scripts
// - styles
// - *.html
// - Gruntfile.js
// - package.json
// - sitemap.xml
// - sitemap.xml.gz
// - robots.txt

// Gitignore
// app/templates/_site


module.exports = function(grunt) {
  grunt.initConfig({
    app: {
      production: {
        url: 'http://pierrickcaen.fr',
        destination: ''
      },
      development: {
        url: '',
        destination: 'app/templates/_site'
      },
      jekyll: {
        source: 'app/templates',
        destination: 'app/templates/_site'
      },
      root: 'app',
      destination: ''
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
          httpPath: '<%= app.production.url %>'
        }
      },
      development: {
        files: {
          'main.css': '{,*/}*.sass',
          'vendor.css': 'vendor/{,*/}*.sass'
        }
      }
    },
    cssmin: {
      vendor: {
        files: {
          '<%= app.production.destination %>/styles/vendor.min.css': [
            // from temp/
          ]
        }
      },
      main: {
        files: {
          '<%= app.production.destination %>/styles/main.min.css': [
            // from temp/
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
      options: {
        livereload: true
      }
    },
    exec: {
      production: {
        cmd: 'jekyll build --source <%= app.jekyll.source %> --destination <%= app.jekyll.destination %>'
      },
      development: {
        cmd: 'jekyll build --source <%= app.jekyll.source %> --destination <%= app.jekyll.destination %>'
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
    clean: ['*.html', 'sitemap.xml', 'projects/', 'blog/', 'images/', 'fonts/', 'scripts/', 'styles/'],
    copy: {
      development: {
        files: [
          {expand: true, src: ['<%= app.root %>/images/**'], dest: '<%= app.jekyll.destination %>/images/'},
          {expand: true, src: ['<%= app.root %>/fonts/*'], dest: '<%= app.jekyll.destination %>/fonts/'},
        ]
      },
      production: {
        files: [
          {
            expand: true,
            cwd: ['<%= app.jekyll.destination %>'],
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
    'jshint',
    'clean',
    'exec:production',
    'compass:production',
    'copy:production',
    'autoprefixer',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
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
    'copy:development'
  ]);

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-coffee');
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
