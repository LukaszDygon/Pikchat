'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PictureAddCtrl
 * @description
 * # PictureAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PictureAddCtrl', function ($scope, Picture, $location) {
  	$scope.picture = {};
  	$scope.savePicture = function() {
  		Picture.post($scope.picture).then(function() {
  			$location.path('/pictures');
  		});
  	};
  });
