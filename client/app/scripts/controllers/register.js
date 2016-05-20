'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function (Restangular, authentication, $location) {
    var vm = this;

	vm.credentials = {
	  name : "",
	  email : "",
	  password : ""
	};

	vm.onSubmit = function () {
	  authentication
	    .register(JSON.stringify(vm.credentials))
	    .error(function(err){
	      alert("error " + err + vm.credentials.name + "  " + vm.credentials.email);
	    })
	    .then(function(){
	      $location.path('/');
    	});
	}
});
