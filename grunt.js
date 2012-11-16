module.exports = function(grunt) {

	grunt.initConfig({
		'meta': {
			'banner': '/*!       \n'+
					  ' *  Banner\n'+
					  ' */       \n'
		},
		'min': {
			'dist': {
				'src': [
					'<banner>',
					'examples/example.js'
				],
				'dest': 'examples/example.min.js'
			}
		},
		'cssmin': {
			'dist': {
				'src': 'examples/example.css',
				'dest': 'examples/example.min.css'
			}
		},
		'lint': {
			'files': ['grunt.js', 'tasks/yui-compressor.js']
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
			},
			'globals': {}
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', 'lint min cssmin');

};