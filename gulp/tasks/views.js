'use strict';

var gulp         = require('gulp');


gulp.task('views', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('build'));
});
