'use strict';

var gulp   = require('gulp');
var path   = require('path');
var tinylr = require('tiny-lr')();
var config = require('../config');


function notifyLiveReload(event) {
  var fileName = path.relative(__dirname, event.path);

  tinylr.changed({
    body: { files: [fileName] }
  });
}

gulp.task('livereload', function() {
  tinylr.listen( config.express.portlr );
});

gulp.task('watch', function() {
  gulp.watch('app/styles/*.scss', ['styles']);
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/*.html', ['views']);
  gulp.watch('build/css/*.css', notifyLiveReload);
  gulp.watch('build/*.html', notifyLiveReload);
  gulp.watch('build/js/*.js', notifyLiveReload);
});
