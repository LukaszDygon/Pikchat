var express = require('express');
var mongoose = require('mongoose');
var bodyPareser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// create app
var app = express();

//middleware
app.use(bodyPareser.urlencoded({extended: true}));
app.use(bodyPareser.json());
app.use(methodOverride('x-HTTP-Method-Override'));
app.use(cookieParser());
//public api access
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	//res.header('Access-Control-Allow-Headers', '*');
	next();
});

app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401);
		res.json({"message" : err.name + ": " + err.message});
	}
})

app.use('/hello', function(req, res, next) {
	res.send('Hello World!');
	next();
});

//server
mongoose.connect('mongodb://localhost/pictureChat');
mongoose.connection.once('open', function() {
	
	//load models and routes
	app.models = require('./models/index.js');
	var routes = require('./routes.js');

	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
	});
	var routerAPI = require('./api/routes.js');
	app.use('/api', routerAPI);
	console.log("api instantiated in mongoDB");
	//authentication middleware
	require('./passport.js');
	app.use(passport.initialize());
	app.use(passport.session());

	console.log('listening on port 27017...');
	app.listen(27017);
});
