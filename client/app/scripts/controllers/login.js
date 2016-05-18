'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function (Restangular, authentication, $location) {
    var vm = this;

	  vm.credentials = {
	    email : "",
	    password : ""
	  };

	  vm.onSubmit = function () {
	    authentication
	    .login(vm.credentials)
	    .error(function(err){
	      alert(err);
	    })
	    .then(function(){
	      $location.path('profile');
	    });
	  };
  });
