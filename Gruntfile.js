module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
       all: ["js/main.js"]
    },
    uglify: {
      dest: {
        files: {
          "js/min.js": ["js/main.js"]
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          "css/min.css": ["css/main.css", "css/mfglabs_iconset.css", "css/normalize.min.css", "syntax.css"]
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: "img/src/",
          src: ["**/*.{png,jpg,gif}"],
          dest: "img/dest/"
        }]
      }
    },
    watch: {
      js: {
        files: ["js/*.js"],
        tasks: ["jshint", "uglify"],
        options: { spawn: false }
      },
      css: {
        files: ["css/*.css"],
        tasks: ["cssmin"],
        options: { spawn: false }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["jshint", "uglify", "cssmin", "imagemin"]);
};
