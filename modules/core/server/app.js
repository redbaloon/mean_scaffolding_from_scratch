/**
 * Main application file
 */

// Express web server
var express = require('express');

// Mongoose with an active connection
var mongoose = require('./include/dbConnect');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Environment set from the dispatcher (index.js) if not passed 
// when calling node: 
// $ NODE_ENV="pippo" node path/to/index.js
console.log(`Environment is set to ${process.env.NODE_ENV}`);
console.log('Listening on port 3000...');
app.listen(3000);