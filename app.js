var fs = require('fs');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongodb');
var mongoose = require('mongoose');

var config = require('./config/config');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(config.db);

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = mongoose.connection;
    next();
});


// Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) {
    var file_name = __dirname + '/app/models/' + file
    console.log("Requiring model: "+ file_name)
    require(file_name);
  }
});

// API routes
var api = require('./config/routes/api');
var messages = require('./config/routes/messages');

app.use('/api', api);
app.use('/api/messages', messages);

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;