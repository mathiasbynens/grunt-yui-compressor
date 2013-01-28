"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
		'min': {
			'dist': {
				'src': 'examples/example.js',
				'dest': 'examples/example.min.js'
			}
		},
		'cssmin': {
			'dist': {
				'src': 'examples/example.css',
				'dest': 'examples/example.min.css'
			}
		},
		'watch': {
			'files': '<%= jshint.dev.files.src %>',
			'tasks': 'default'
		},
		'jshint': {
			'dev': {
				files: {
					src: ['gruntFile.js', 'tasks/*.js', 'tasks/lib/*.js']
				}
			},
			'options': {
				'curly': true,
				'immed': true,
				'latedef': true,
				'newcap': true,
				'noarg': true,
				'undef': true,
				'boss': true,
				'eqnull': true,
				'node': true,
				'es5': true,
				'trailing': true,
				'smarttabs': true
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['jshint:dev', 'min', 'cssmin']);
};