module.exports = function(grunt) {

	var Compressor = require('node-minify').minify;

	grunt.registerHelper('yui-compressor', function(options) {
		var source = options.source,
		    destination = options.destination,
		    max = grunt.helper('concat', source),
		    min;
		new Compressor({
			'type': 'yui-' + options.type,
			'fileIn': source,
			'fileOut': destination,
			'callback': function(error) {
				if (error) {
					grunt.warn(error);
					return options.fn();
				}
				min = grunt.file.read(destination);
				grunt.log.writeln('File `' + destination + '` created.');
				grunt.helper('min_max_info', min, max);
				// Let grunt know the asynchronous task has completed
				options.fn();
			}
		});
	});

	grunt.registerMultiTask('min', 'Minify JavaScript files with YUI Compressor.', function() {
		var done = this.async(),
		    source = grunt.file.expandFiles(this.file.src),
		    destination = this.file.dest;
		grunt.helper('yui-compressor', {
			'type': 'js',
			'source': source,
			'destination': destination,
			'fn': this.async()
		});
	});

	grunt.registerMultiTask('cssmin', 'Minify CSS files with YUI Compressor.', function() {
		var source = grunt.file.expandFiles(this.file.src),
		    destination = this.file.dest;
		grunt.helper('yui-compressor', {
			'type': 'css',
			'source': source,
			'destination': destination,
			'fn': this.async()
		});
	});

};