var Compressor = require('node-minify').minify;

exports.init = function(grunt) {

	// Refactored out the `min_max_info` and `concat` helpers here
	// because `grunt.helper` is removed in future Grunt versions
	var minMax = require('grunt-lib-contrib').init(grunt).minMaxInfo;
	var concat = function(source) {
		// Kinda hacky, but that’s how I roll…
		return source.map(function(filepath) {
			return grunt.file.read(filepath);
		}).join('\n');
	};

	return function(options) {
		var source = grunt.file.expand(options.source);
		var destination = options.destination;
		var max = concat(source);
		var min;
		var report = options.report;
		var opts = [];
		if (options.linebreak) {
			opts.push('--line-break', options.linebreak);
		}

		// Ugly hack to create the destination path automatically if needed
		if (!grunt.file.exists(destination)) {
			grunt.file.write(destination, '');
		}

		// Minify all the things!
		new Compressor({
			'type': 'yui-' + options.type,
			'fileIn': source,
			'fileOut': destination,
			'options': opts,
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
