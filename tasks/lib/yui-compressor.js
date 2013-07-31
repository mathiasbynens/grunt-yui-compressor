var Compressor = require('node-minify').minify;

exports.init = function(grunt) {

	// Refactored out the `min_max_info` and `concat` helpers here
	// because `grunt.helper` is removed in future Grunt versions
	var minMax = require('grunt-lib-contrib').init(grunt).minMaxInfo,
		concat = function(source) {
			// Kinda hacky, but that’s how I roll…
			return source.map(function(filepath) {
				return grunt.file.read(filepath);
			}).join('\n');
		};

	return function(options) {
		var source = grunt.file.expand(options.source),
			destination = options.destination,
			max = concat(source),
			min,
			report = options.report;

		// Ugly hack to create the destination path automatically if needed
		grunt.file.write(destination, '');

		// Minify all the things!
		new Compressor({
			'type': 'yui-' + options.type,
			'fileIn': source,
			'fileOut': destination,
			'options': [ options.charset ? '--charset '+options.charset : '' ],
			'callback': function(error) {
				if (error) {
					grunt.warn(error);
					return options.fn();
				}
				min = grunt.file.read(destination);
				grunt.log.writeln('File `' + destination + '` created.');
				minMax(min, max, report);
				// Let Grunt know the asynchronous task has completed
				options.fn();
			}
		});
	};
};
