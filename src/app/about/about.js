'use strict';
var angular = require('angular');

function aboutCtrl($scope, $sessionStorage, $state, $filter) {
  $scope.state = 'about'
}

var stateConfig = {
  name: 'home.about',
  url: '/about',
  templateUrl: require('./about.html'),
  controller: 'aboutCtrl'
};

aboutCtrl.$inject = [
  '$scope',
  '$sessionStorage',
  '$state',
  '$filter'
]

function routeConfig($stateProvider) {
  $stateProvider.state(stateConfig)
}

angular.module('app')
  .controller('aboutCtrl', aboutCtrl)
  .config(['$stateProvider', routeConfig])

module.exports = stateConfig;
