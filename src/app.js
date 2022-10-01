'use strict';

// angular
var angular = require('angular');
require('@uirouter/angularjs');
require('ngstorage');

// bootstrap and deps
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');
require('font-awesome/css/font-awesome.css')
require('popper.js/dist/popper.js');
require('jquery/dist/jquery.js');

// util
function importAll(r) {
  r.keys().forEach(r);
}

// begin module
angular.module('app', ['ui.router', 'ngStorage']);

// app deps
require('./constants.js');

function addAuthGuard($rootScope, $location, $sessionStorage, $state) {
  // redirect to login page if not logged in and trying to access a restricted page
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    if ($location.path() != '/login' && !$sessionStorage.user) {
      $location.path('/login');
    }
  });
}

function defaultRoute($urlRouterProvider) {
  $urlRouterProvider.otherwise('app/home')
}


// services
importAll(require.context('./services', false, /\.js$/));

// filters
importAll(require.context('./filters', false, /\.js$/));

// directives
importAll(require.context('./directives', true, /\.js$/))

// routers
// importAll(require.context('../login', false, /.js$/))
importAll(require.context('./app', true, /.js$/))

angular.module('app')
  .config(['$urlRouterProvider', defaultRoute])
  .run(['$rootScope', '$location', '$sessionStorage', addAuthGuard])

module.exports = angular.module('app');
// load index
require('./index.html')
console.log('module Ready')




