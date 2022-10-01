'use strict';
function summaryCard() {
    return {
        restrict: 'A',
        scope: {
            subtitle: '@',
            theme: '@',
            value: '@',
            icon: '@'
        },
        templateUrl: require('./summary-card.html')
    }
}

angular.module('app')
    .directive('summaryCard', summaryCard)

module.exports = {
    name: 'summaryCard',
    directive: summaryCard
}

