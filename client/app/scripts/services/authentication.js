'use strict';

/**
 * @ngdoc service
 * @name clientApp.authentication
 * @description
 * # authentication
 * Service in the clientApp.
 */
angular.module('clientApp')
  	.service('authentication', function ($http, $window, Restangular) {
  		var serverURL = 'http://localhost:27017/'; 
	    var saveToken = function (token) {
	      $window.localStorage['session-token'] = token;
	    };

	    var getToken = function () {
	      return $window.localStorage['session-token'];
	    };

	    var logout = function() {
	      $window.localStorage.removeItem('session-token');
	    };

	    var isLoggedIn = function () {
	      var token = getToken();
	      var payload = {};

	      if(token) {
	        payload = token.split('.')[1];
	        payload = $window.atob(payload);
	        payload = JSON.parse(payload);
	      } else {
	      	payload = Date.now();
	      }

	      if (payload.exp > Date.now() / 1000) { return true; }
	      return false;
	    };

	    var currentUser = function() {
	      if(isLoggedIn()){
	        var token = getToken();
	        var payload = token.split('.')[1];
	        payload = $window.atob(payload);
	        payload = JSON.parse(payload);
	        return {
	          email : payload.email,
	          name : payload.name
	        };
	      }
	    };

	    var register = function(user) {
	    	//alert("registering " + user.name);

	      	return $http({method: 'POST', url: serverURL + 'api/register', data: user, headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        		})
	      	.success(function(data){
	        	saveToken(data.token);
	        });
	    };

	    var login = function(user) {
	    	//alert(user);
	      	return $http({method: 'POST', url: serverURL + 'api/login', data: user, headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        		})
	      	.success(function(data) {
	        saveToken(data.token);
	      });
	    };

	    return {
	      saveToken : saveToken,
	      getToken : getToken,
	      logout : logout,
	      isLoggedIn : isLoggedIn,
	      currentUser : currentUser,
	      register : register,
	      login : login
	    };


    });
