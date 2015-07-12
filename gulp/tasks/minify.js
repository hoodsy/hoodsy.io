'use strict';

var gulp      = require('gulp');
var rename    = require('gulp-rename');
var minifycss = require('gulp-minify-css');


gulp.task('minify', function() {
  return gulp.src('build/css/main.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'));
});
