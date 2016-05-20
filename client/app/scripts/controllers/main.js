'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Picture, $location) {
  	$scope.savePicture = function() {
  		var canvas = document.getElementById('SketchPad');
  		var picture = {
  			img: canvas.toDataURL()
  		}
  		Picture.post(picture).then(function() {
  			var ctx = canvas.getContext('2d');
	      	ctx.save();
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.restore();
			ctx.beginPath();
  		});
  	};
  });