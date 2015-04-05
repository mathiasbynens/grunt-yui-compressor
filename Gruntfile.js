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
					'charset': 'utf-8'
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
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', [
		'min',
		'cssmin'
	]);

};
