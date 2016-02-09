var express = require('express');
var mongoose = require('mongoose');
var bodyPareser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// create app
var app = express();

//middleware
app.use(bodyPareser.urlencoded({extended: true}));
app.use(bodyPareser.json());
app.use(methodOverride('x-HTTP-Method-Override'));

//public api access
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/hello', function(req, res, next) {
	res.send('Hello World!');
	next();
});

//server
mongoose.connect('mongodb://localhost/pictureChat');
mongoose.connection.once('open', function() {
	
	//load models and routes
	app.models = require('./models/index.js');
	var routes = require('./routes');
	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
	});

	console.log('listening on port 27017...');
	app.listen(27017);
})

