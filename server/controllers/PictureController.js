var restful = require('node-restful');

module.exports = function(app, route) {

	//controller setup
	var rest = restful.model(
		'picture',
		app.models.picture
		).methods(['get', 'put', 'post', 'delete']);

	//register in app
	rest.register(app, route);

	//return middleware
	return function(req, res, next) {
		next();
	};
};