'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PictureDeleteCtrl
 * @description
 * # PictureDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PictureDeleteCtrl', function ($scope, $routeParams, Picture, $location) {
  	$scope.picture = Picture.one($routeParams.id).get().$object;
  	$scope.deletePicture = function() {
  		$scope.picture.remove().then(function() {
  			$location.path('/pictures');
  		});
  	};
  	$scope.back = function() {
  		$location.patj('/picture/; + $routeParams.id');
  	};
  });
