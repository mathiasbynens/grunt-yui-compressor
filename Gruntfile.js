module.exports = function(grunt) {

	// Load required npm grunt tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Project configuration.
	grunt.initConfig({
		'min': {
			'dist': {
				'options': {
					'report': 'gzip'
				},
				'files': [{
					'src': 'test/fixtures/example.js',
					'dest': 'tmp/example.min.js'
				}]
			}
		},
		'cssmin': {
			'dist': {
				'options': {
					'report': false
				},
				'files': [{
					'src': 'test/fixtures/example.css',
					'dest': 'tmp/example.min.css'
				}]
			}
		},
		// Before generating any new files, remove any previously-created files.
		'clean': {
			'tests': ['tmp']
		},
		'lint': {
			'files': ['gruntFile.js', 'tasks/*.js', 'tasks/lib/*.js']
		},
		'watch': {
			'files': '<config:lint.files>',
			'tasks': 'default'
		},
		'jshint': {
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
		},


	    // Unit tests.
	    'nodeunit': {
	      tests: ['test/*_test.js']
	    }
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'min', 'cssmin', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
