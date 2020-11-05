var express = require('express');  //inlcude the 'Express' framework
var path = require('path');
var log = require('morgan')  // tool for logging & debugging HTTP request
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');  // Bring in 'mongoose' an interface to Mongo
var app = express();  //attach the express function to 'app' variable
var upload = multer();
var PORT = 8080;

// Connect to DB
const connectDb = () => {
	return mongoose.connect('mongodb://localhost:27017/assetTracking', {useNewUrlParser: true, useUnifiedTopology: true});
};
var User = require('./models/user');

// Log HTTP request & responses
app.use(log('dev'));  // Use the logging tool in the 'dev' preset

// Use PUG template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

// ROUTES - HTTP requests handled here
app.get('/', function(req,res){ // Server responds to HTTP GET request @ '/' URI with a callback function which takes in two perameters 'req' (request) & 'res' (response).
	res.render('index');  // The response to the request
});

app.post('/login', function(req, res){
	console.log(req.body);
	mongoose.model('User').find(function(err,users){
		for(var i=0; i<users.length; i++){
			console.log(users[i].username);
			if(users[i].username === req.body.username){
				res.redirect('/user')
				//res.send('Correct Username and Password')
			}
			else{
				res.send('Incorrect Username or Password');
			};
		};
	});
})

app.get('/user', function(req,res){
	res.send('Successfully logged in')
});

app.get('/asset', function(req,res){
	res.render('asset');
});

connectDb().then(async () => {
	app.listen(PORT, () =>
		console.log('Server running at localhost:' + PORT));
});
