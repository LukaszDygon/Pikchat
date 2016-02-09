'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PicturesCtrl
 * @description
 * # PicturesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PicturesCtrl', function ($scope, Picture) {
  	$scope.pictures = Picture.getList().$object;
  });
