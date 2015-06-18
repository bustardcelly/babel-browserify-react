'use strict';
var path = require('path');
var gulp = require('gulp');

var source = require('vinyl-source-stream');
var babelify = require('babelify');
var reactify = require('reactify');
var browserify = require('browserify');

var srcDir = [process.cwd(), 'app'].join(path.sep);
var distDir = [process.cwd(), 'dist'].join(path.sep);

gulp.task('default', function() {
  var out = [distDir, 'script'].join(path.sep);
  var b = browserify({
    entries: [srcDir, 'script', 'index.js'].join(path.sep),
    debug: true,
    transform: [babelify, reactify]
  });

  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(out));
});
