var app = angular.module('app', [])
app.controller('appCtrl', ['$scope', '$rootScope', appCtrl])

function appCtrl($scope, $rootScope) {
    $scope.firstName = 12345678.0123;
}