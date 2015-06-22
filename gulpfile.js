'use strict';
var path = require('path');
var gulp = require('gulp');

var source = require('vinyl-source-stream');
var babelify = require('babelify');
var reactify = require('reactify');
var browserify = require('browserify');

var cssnextify = require('gulp-cssnext');

var srcDir = [process.cwd(), 'app'].join(path.sep);
var distDir = [process.cwd(), 'dist'].join(path.sep);

gulp.task('styles', function() {
  gulp.src([srcDir, 'style', 'index.css'].join(path.sep))
      .pipe(cssnextify({
        compress: true
      }))
      .pipe(gulp.dest([distDir, 'style'].join(path.sep)));
});

gulp.task('copy', function() {
  gulp.src([srcDir, 'index.html'].join(path.sep))
      .pipe(gulp.dest(distDir));
});

gulp.task('scripts', function() {
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

gulp.task('default', ['scripts', 'styles', 'copy'], function() {
});

