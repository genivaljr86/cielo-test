'use strict';
var angular = require('angular');

require('../../css/home.css')

function homeCtrl($scope, $sessionStorage, $state, $filter, LoginSvc, LancamentosSvc) {
  $scope.title = 'Cielo | Home';

  var { summary, items } = LancamentosSvc.get();

  $scope.items = items.map(row => {
    row.date = $filter('date')(new Date(Date.parse(row.date)), 'dd/MM/yyyy')
    row.grossAmount = $filter('currency')(row.grossAmount)
    row.netAmount = $filter('currency')(row.netAmount)
    return row
  });
  $scope.summary = summary;
  console.log(summary)
  $scope.headers = Object.keys(items[0]);

}

var stateConfig = {
  name: 'app.home',
  url: '/home',
  templateUrl: require('./home.html'),
  controller: 'homeCtrl'
};

homeCtrl.$inject = [
  '$scope',
  '$sessionStorage',
  '$state',
  '$filter',
  'LoginSvc',
  'LancamentosSvc'
]

function routeConfig($stateProvider) {
  $stateProvider.state(stateConfig)
}

angular.module('app')
  .controller('homeCtrl', homeCtrl)
  .config(['$stateProvider', routeConfig])

module.exports = stateConfig;
