var mongoose = require('mongoose');

//Create
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

//export model schema
module.exports = MovieSchema;