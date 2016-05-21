'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Picture, User, $location, authentication) {
    $scope.users = User.getList().$object;
    $scope.receiver = authentication.currentUser();
    $scope.currentUser = authentication.currentUser();

    $scope.getPictures = function(receiver) {
      var currentUser = authentication.currentUser();
      $scope.receiver = receiver;
      Picture.getList({'sender': currentUser.email, 'receiver': $scope.receiver.email}).then(function(response) {
        $scope.senderPictures = response;
      });
      Picture.getList({'sender': $scope.receiver.email, 'receiver': currentUser.email}).then(function(response) {
        $scope.receiverPictures = response;
      });
    }
    $scope.savePicture = function(receiver) {
      var canvas = document.getElementById('SketchPad');
      var picture = {
        img: canvas.toDataURL(),
        sender: authentication.currentUser().email,
        receiver: $scope.receiver.email
      }
      Picture.post(picture).then(function() {
        var ctx = canvas.getContext('2d');
          ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      ctx.beginPath();
      $scope.getPictures($scope.receiver);
      });
    };
    $scope.getReceiverPictures = function() {
      Picture.getList({'sender': $scope.receiver.email}).then(function(response) {
        $scope.pictures = response;
      });
    }
    $scope.getPictures($scope.receiver);
  });