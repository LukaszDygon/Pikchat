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
  ]).config(function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('http://localhost:27017');

    $routeProvider
      .when("/", {
        templateUrl: 'views/splash.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/home', {
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
        controllerAs: 'vm',
        css: 'styles/css/pikchat-splash.css'
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
  .run(function($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/register')
        return;
      if ($location.path() !== '/' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
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
    return UserRestangular.service('user');
  });
