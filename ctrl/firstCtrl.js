var app = angular.module('myApp', []);
app.controller('calcName', ['$scope', '$rootScope', firstCtrl]);

function firstCtrl() {
    arguments[0].name = 'jimmy';
    arguments[1].name = 'root';
}