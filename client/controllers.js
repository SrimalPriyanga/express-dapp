'use strict';

/* Controllers */

angular.module('express-dapp.controllers', []).
  controller('MainCtrl', function ($scope, $http) {

    $scope.test = 'okkkkkkkkkkkkk';

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    $scope.test = 'okkkkkkkkkkkkk1';

  }).
  controller('MyCtrl2', function ($scope) {
    $scope.test = 'okkkkkkkkkkkkk2';

  });
