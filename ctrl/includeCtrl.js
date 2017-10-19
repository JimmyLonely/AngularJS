var app = angular.module('myApp', []);

app.controller('includeCtrl', ['$scope', myFun])
function myFun($scope) {
    $scope.names = [
        'a', 'b', 'c'
    ];

    //$scope.includeHtml = '../html/includeCtrl.html';
}

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'http://*.baidu.com*'
    ]);
});