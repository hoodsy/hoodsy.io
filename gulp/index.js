'use strict';

var fs          = require('fs');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var onlyScripts = require('./util/scriptFilter');
var tasks       = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});


/*
** Streaming Tasks
*/

gulp.task('default',
	[ 'styles',
	  'scripts',
	  'views', 
	  'express', 
	  'livereload', 
	  'watch' ]);

gulp.task('assets',
	[ 'images',
	  'fonts' ]);

gulp.task('production', function() {	
	runSequence(
		['images','fonts','styles','scripts','views'],
		['minify','uglify'],
		 'express'); 
});
