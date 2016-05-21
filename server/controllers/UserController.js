var restful = require('node-restful');
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = function(app, route) {

  //controller setup
  var rest = restful.model(
    'user',
    app.models.user
    ).methods(['get', 'put', 'post', 'delete']);

  //register in app
  rest.register(app, route);

  //return middleware
  return function(req, res, next) {
    next();
  };
};

module.exports.register = function(req, res) {
  var user = new User();
  console.log("registering");
  console.log(req.body.name);
  console.log(req.body.email);
  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
  console.log("user ", user.name, " registered successfully")
};

module.exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};