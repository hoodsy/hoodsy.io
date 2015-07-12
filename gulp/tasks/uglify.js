'use strict';

var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('uglify', function() {
  return gulp.src('build/js/main.js')
  	.pipe(rename({suffix: '.min'}))
  	.pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
