var app = angular.module('app', [])
app.controller('appCtrl', ['$scope', '$rootScope', appCtrl])

function appCtrl($scope, $rootScope) {
    $scope.firstName = 'jimmy'
}


app.directive('ngCustomDirective', ngCustomDirective);

function ngCustomDirective() {
    return {
        restrict : "EA",
        template : "This is first name: {{firstName}}",
        scope: {},
        controller: function ($scope) {
            $scope.firstName = 'sub-firstName';
        }
    };
}


app.directive('ngCustomDirective2', ngCustomDirective2);

function ngCustomDirective2() {
    return {
        restrict : "EA",
        template : "This is first name: {{firstName}}",
        scope: {},
        controller: function ($scope) {
            $scope.firstName = 'sub2-firstName';
        }
    };
}