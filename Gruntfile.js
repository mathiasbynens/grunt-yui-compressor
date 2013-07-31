module.exports = function(grunt) {

	grunt.initConfig({
		'min': {
			'dist': {
				'options': {
					'report': 'gzip'
				},
				'files': [{
					'src': 'examples/example.js',
					'dest': 'examples/example.min.js'
				}]
			},
			'charset': {
				'options': {
					'report': 'gzip',
					'charset': 'utf8'
				},
				'files': [{
					'src': 'examples/example.utf8.js',
					'dest': 'examples/example.utf8.min.js'
				}]
			}
		},
		'cssmin': {
			'dist': {
				'options': {
					'report': false
				},
				'files': [{
					'src': 'examples/example.css',
					'dest': 'examples/example.min.css'
				}]
			}
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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadTasks('tasks');

	grunt.registerTask('default', [
		'min',
		'cssmin'
	]);

};
