var app = angular.module('app', [])
app.controller('appCtrl', ['$scope', '$rootScope', '$filter', appCtrl])

function appCtrl($scope, $rootScope, $filter) {
    $scope.firstName = $filter('customFilter')('jimmy', 'a', 'b', 'c');
}


app.filter('customFilter', appendFilter)
function appendFilter() {
    var count = 1;
    return function (value) {
        count ++ ;
        var args = Array.prototype.slice.call(arguments, 1);
        return value + args.toString() + count;
    }
}