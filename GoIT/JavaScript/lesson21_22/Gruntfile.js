module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  	grunt.initConfig({
  	    pkg: grunt.file.readJSON('package.json'),

      babel: {
        options: {
         sourceMap: false,
         presets : ['es2015']
      },
	    dist: {
	      files: [{
	          expand : true,
            cwd : 'js/src',
            src : ['*.js'],
            dest : 'js/dist',
            ext : '.js',
            extDot : 'first'
	      }]
	    }
	},

      watch: {
	    	babel: {
		    	files: 'js/src/*.js',
		    	tasks: ['babel']
	    	}
	    }
        });

  // Load the plugin that provides the "" task.

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-phantom');

  // Default task(s).
  grunt.registerTask('default', ['babel','watch']);

};
