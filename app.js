var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();

var config = require('./config/config');
require('./config/express')(app);

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'public')));

// Load all models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

// Initialize MongoDB
require('./config/mongo')(app, config);

// Websocket support
require('./config/websocket')(app);

// API routes
require('./config/routes')(app);

module.exports = app;