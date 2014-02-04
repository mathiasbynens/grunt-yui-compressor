'use strict';

var grunt = require('grunt');

exports.yui_compressor = {
	setUp: function (done) {
		// setup here if necessary 
		done();
	},

	min_simple: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/simple.min.js');
		var expected = grunt.file.read('test/expected/simple.min.js');
		test.equal(actual, expected, 'should minify a JavaScript file correctly.');

		test.done();
	},

	min_w_breaks: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/w_breaks.min.js');
		var expected = grunt.file.read('test/expected/w_breaks.min.js');
		test.equal(actual, expected, 'should minify a JavaScript file using the line break option correctly.');

		test.done();
	},
	cssmin_simple: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/simple.min.css');
		var expected = grunt.file.read('test/expected/simple.min.css');
		test.equal(actual, expected, 'should minify a CSS file correctly.');

		test.done();
	},

	cssmin_w_breaks: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/w_breaks.min.css');
		var expected = grunt.file.read('test/expected/w_breaks.min.css');
		test.equal(actual, expected, 'should minify a CSS file using the line break option correctly.');

		test.done();
	}
};
