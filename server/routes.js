var express = require('express');
module.exports = {
	'/picture': require('./controllers/PictureController'),
	'/user': require('./controllers/UserController')
};