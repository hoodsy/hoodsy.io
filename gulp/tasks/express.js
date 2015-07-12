'use strict';

var gulp         = require('gulp');
var morgan       = require('morgan');
var express      = require('express');
var config       = require('../config');
var nodemailer   = require('nodemailer');
var bodyParser   = require('body-parser');
var livereload   = require('connect-livereload');


gulp.task('express', function() {
  
  var app = express();
  app.use(morgan('dev'));
  app.use(livereload({port: config.express.portlr}) );
  app.use(express.static('build'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

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
      if(error){ console.log(error); }
      else{ console.log('Message sent: ' + info.response); }
    });

  res.send();  
  });

  // app.listen( config.express.port );
  app.listen( config.express.port );
});
