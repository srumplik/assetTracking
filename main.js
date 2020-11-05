var express = require('express');  //inlcude the 'Express' framework
var app = express();  //attach the express function to 'app' variable
var log = require('morgan')  // tool for logging & debugging HTTP request
var mongoose = require('mongoose');  // Bring in 'mongoose' an interface to Mongo
var path = require('path');
var PORT = 8080;

// Connect to DB
mongoose.connect('mongodb://localhost:27017/assetTracking', {useNewUrlParser: true, useUnifiedTopology: true});
var User = require('./models/user');

// Log HTTP request & responses
app.use(log('dev'));  // Use the logging tool in the 'dev' preset

// Use PUG template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

// ROUTES - HTTP requests handled here
app.get('/', function(req,res){ // Server responds to HTTP GET request @ '/' URI with a callback function which takes in two perameters 'req' (request) & 'res' (response).
	res.render('index');  // The response to the request
});

app.get('/users', function(req,res){
	mongoose.model('User').find(function(err,users){
		for()
		res.send(users);
	});
})

app.get('/asset', function(req,res){
	res.render('asset');
});

app.listen(PORT, console.log('Server running at localhost:' + PORT));  // start the Express server at 'localhost:PORT'
