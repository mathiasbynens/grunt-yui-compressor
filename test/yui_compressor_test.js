'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

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
    test.equal(actual, expected, 'should minify a CSS file correctly.');

    test.done();
  }
};
