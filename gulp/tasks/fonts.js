'use strict';

var gulp = require('gulp');


gulp.task('fonts', function() {
	return gulp.src('app/assets/fonts/**/*')
		.pipe(gulp.dest('build/fonts'));
});