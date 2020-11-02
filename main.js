var express = require('express');  //inlcude the 'Express' framework
var app = express();  //attach the express function to 'app' variable
var log = require('morgan')  // tool for logging & debugging HTTP request
var mongoose = require('mongoose');  // Bring in 'mongoose' an interface to Mongo
var PORT = 8080;

// Connect to DB
mongoose.connect('mongodb://localhost:27017/assetTracking', {useNewUrlParser: true, useUnifiedTopology: true});

// Log HTTP request & responses
app.use(log('dev'));  // Use the logging tool in the 'dev' preset

// ROUTES - HTTP requests handled here
app.get('/', function(req,res){ // Server responds to HTTP GET request @ '/' URI with a callback function which takes in two perameters 'req' (request) & 'res' (response).
	res.send('working');  // The response to the request
});

app.listen(PORT, console.log('Server running at localhost:' + PORT));  // start the Express server at 'localhost:PORT'
