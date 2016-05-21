'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PicturesCtrl
 * @description
 * # PicturesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PicturesCtrl', function ($scope, Picture, authentication) {
  	var currentUser = authentication.currentUser();
  	$scope.currentUser = currentUser;
  	Picture.getList({'sender': currentUser.email}).then(function(response) {
  		$scope.pictures = response;
  	});
  	$scope.logout = function() {
  		authentication.logout();
  	}
  });
