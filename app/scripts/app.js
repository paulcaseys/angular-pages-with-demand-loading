'use strict';

/**
 * @ngdoc overview
 * @name angularBoilerplateApp
 * @description
 * # angularBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularBoilerplateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/waypoint', {
        templateUrl: 'views/waypoint.html',
        controller: 'WaypointCtrl',
        controllerAs: 'waypoint'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
