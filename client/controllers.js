'use strict';

/* Controllers */

angular.module('express-dapp.controllers', []).
  controller('MainCtrl', function ($scope, $http) {

    $scope.fromMainctrl = 'This line from "Mainctrl" ';

    //$http({
    //  method: 'GET',
    //  url: '/api/name'
    //}).
    //success(function (data, status, headers, config) {
    //  $scope.name = data.name;
    //}).
    //error(function (data, status, headers, config) {
    //  $scope.name = 'Error!';
    //});

  }).
  controller('MyCtrl1', function ($scope) {
    $scope.fromMyCtrl1 = 'This line from "MyCtrl1" ';

  }).
  controller('MyCtrl2', function ($scope) {
    $scope.fromMyCtrl2 = 'This line from "MyCtrl2" ';

  });
