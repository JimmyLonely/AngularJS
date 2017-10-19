var app = angular.module('app', [])
app.controller('appCtrl', ['$scope', '$rootScope', '$filter', 'customService', appCtrl])

function appCtrl($scope, $rootScope, $filter, $customService) {
    $scope.firstName = $customService.name;
    $scope.lastName = $customService.fun1(1);
}

app.service('customService', $customService);

function $customService() {
    var self = this;
    self.name = 'jimmy'
    self.fun1 = function (value) {
        return value + '.service'
    }

    self.funToUpperCase = function (value) {
        return value.toUpperCase();
    }
}