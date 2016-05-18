'use strict';

/**
 * @ngdoc service
 * @name clientApp.authentication
 * @description
 * # authentication
 * Service in the clientApp.
 */
 (function () {
angular.module('clientApp')
  	.service('authentication', authentication);
    // AngularJS will instantiate a singleton by calling "new" on this function
	authentication.$inject = ['$http', '$window'];
	function authentication ($http, $window) {

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
	      var payload;

	      if(token) {
	        payload = token.split('.')[1];
	        payload = $window.atob(payload);
	        payload = JSON.parse(payload);
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
	      return $http.post('/api/register', user).success(function(data){
	        saveToken(data.token);
	      });
	    };

	    var login = function(user) {
	      return $http.post('/api/login', user).success(function(data) {
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
	  }

    })();
