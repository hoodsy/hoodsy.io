'use strict';

var gulp   = require('gulp');
var concat = require('gulp-concat');


gulp.task('scripts', function() {
  return gulp.src(['app/requires/jquery.js', 'app/requires/*.js', 'app/js/*.js'], {base: 'app'})
  	.pipe(concat('main.js'))
  	.pipe(gulp.dest('build/js'))
});
