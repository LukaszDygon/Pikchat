var mongoose = require('mongoose');

//Create
var pictureSchema = new mongoose.Schema({
	img: {
		type: String,
		required: true}
});

//export model schema
//mongoose.model('Picture', pictureSchema);
module.exports = pictureSchema;
