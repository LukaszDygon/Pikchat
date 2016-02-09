'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PictureViewCtrl
 * @description
 * # PictureViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PictureViewCtrl', function ($scope, $routeParams, Picture) {
  	$scope.viewPicture = true;
  	$scope.picture = Picture.one($routeParams.id).get().$object;
  });
