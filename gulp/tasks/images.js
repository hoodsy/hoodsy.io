'use strict';

var gulp     = require('gulp');
var size     = require('gulp-size');
var imagemin = require('gulp-imagemin');


gulp.task('images', function() {
  return gulp.src(['app/assets/images/*', 'app/assets/images/favicon/*'])
  .pipe(imagemin({  optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest('build/images'))
  .pipe(size());
});
