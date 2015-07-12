'use strict';

var gulp         = require('gulp');
var concat       = require('gulp-concat');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function() {
  return gulp.src(['app/requires/bootstrap.min.css', 'app/styles/*.scss'])
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'))
});
