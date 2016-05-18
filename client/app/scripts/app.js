'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('http://localhost:27017');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl',
      })
      .when('/create/picture', {
        templateUrl: 'views/picture-add.html',
        controller: 'PictureAddCtrl'
      })
      .when('/picture/:id', {
        templateUrl: 'views/picture-view.html',
        controller: 'PictureViewCtrl'
      })
      .when('/picture/:id/edit', {
        templateUrl: 'views/picture-edit.html',
        controller: 'PictureEditCtrl'
      })
      .when('/picture/:id/delete', {
        templateUrl: 'views/picture-delete.html',
        controller: 'PictureDeleteCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    })

  .factory('PictureRestangular', function(Restangular) { 
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Picture', function(PictureRestangular) {
    return PictureRestangular.service('picture');
  })
  .factory('UserRestangular', function(Restangular) { 
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('User', function(UserRestangular) {
    return PictureRestangular.service('user');
  });