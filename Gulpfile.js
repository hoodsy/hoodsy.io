var gulp         = require('gulp'),
    config       = require('config'),
    size         = require('gulp-size'),
    nodemailer   = require('nodemailer'),
    rename       = require('gulp-rename'),
    bodyParser   = require('body-parser'),
    imagemin     = require('gulp-imagemin'),
    sass         = require('gulp-ruby-sass'),
    minifycss    = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/send', function(req, res) {

    // Authenticate with Gmail
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: config.email,
        pass: config.password
      }
    });

    // Create email text from contact form
    var emailBody = req.body.name 
            + '\n'+ req.body.email 
         + '\n\n' + req.body.message;

    // Create email
    var mailOptions = {
      from: 'Hoodsy Labs <bernard.logan4@gmail.com>',
      to: 'bernard.logan4@gmail.com',
      subject: 'Contact Message From: ' + req.body.name,
      text: emailBody
    };

    // send email
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
      }else{
        console.log('Message sent: ' + info.response);
      }
    });
  res.send();
  });

  app.listen(4000);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('styles', function() {
      return gulp.src('styles/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

gulp.task('images', function() {
    return gulp.src('app/assets/images/*.png')
    .pipe(imagemin({  optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('images'))
    .pipe(size());
});

gulp.task('watch', function() {
  gulp.watch('styles/*.scss', ['styles']);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('css/*.css', notifyLiveReload);
});

gulp.task('default', ['styles', 'images', 'express', 'livereload', 'watch'], function() {

});
