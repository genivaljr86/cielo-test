'use strict';
var angular = require('angular');

function paymentsCtrl($scope, $sessionStorage, $state, $filter) {
  $scope.state = 'payments'
}

var stateConfig = {
  name: 'app.payments',
  url: '/payments',
  templateUrl: require('./payments.html'),
  controller: 'paymentsCtrl'
};

paymentsCtrl.$inject = [
  '$scope',
  '$sessionStorage',
  '$state',
  '$filter'
]

function routeConfig($stateProvider) {
  $stateProvider.state(stateConfig)
}

angular.module('app')
  .controller('paymentsCtrl', paymentsCtrl)
  .config(['$stateProvider', routeConfig])

module.exports = stateConfig;
