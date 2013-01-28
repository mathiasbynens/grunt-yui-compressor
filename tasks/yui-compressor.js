module.exports = function(grunt) {

	var yuiCompressor = require('./lib/yui-compressor.js').init(grunt);

	grunt.registerMultiTask('min', 'Minify JavaScript files with YUI Compressor.', function() {
		yuiCompressor({
			'type': 'js',
			'source': this.file.src,
			'destination': this.file.dest,
			'fn': this.async()
		});
	});

	grunt.registerMultiTask('cssmin', 'Minify CSS files with YUI Compressor.', function() {
		yuiCompressor({
			'type': 'css',
			'source': this.file.src,
			'destination': this.file.dest,
			'fn': this.async()
		});
	});

};