var mongoose = require('mongoose');

//Create
var pictureSchema = new mongoose.Schema({
	img: {
		type: String,
		required: true
	},
	sender: {
		type: String,
		requred: false
	},
	receiver: {
		type: String,
		required: false
	}
});

//export model schema
//mongoose.model('Picture', pictureSchema);
module.exports = pictureSchema;
