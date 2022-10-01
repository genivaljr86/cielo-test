'use strict';
var angular = require('angular');

function appCtrl($scope, $state) {
    $scope.state = 'app'
    $scope.navBar = require('../includes/navbar.html')
    $scope.links = $state.get()
        .filter(x => x.name.startsWith('app.'))
        .map(x => {
            return {
                title: x.url.slice(1),
                link: x.name
            }
        });

    $scope.signout = signout;

    function signout() {
        $state.go('login')
    }
}

var stateConfig = {
    name: 'app',
    url: '/app',
    templateUrl: require('./app.html'),
    controller: 'appCtrl'
};

appCtrl.$inject = [
    '$scope',
    '$state'
]

function routeConfig($stateProvider) {
    $stateProvider.state(stateConfig)
}

angular.module('app')
    .controller('appCtrl', appCtrl)
    .config(['$stateProvider', routeConfig])

module.exports = stateConfig;
