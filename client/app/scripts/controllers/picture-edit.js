'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PictureEditCtrl
 * @description
 * # PictureEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PictureEditCtrl', function ($scope, $routeParams, Picture, $location) {
  	$scope.editPicture = true;
  	Picture.one($routeParams.id).get().then(function(picture) {
  		$scope.picture = picture;
	  	$scope.savePicture = function() {
	  		$scope.picture.save().then(function() {
	  			$location.path('/picture/' + $routeParams.id);
	  		});
	  	};
  	});
  });
