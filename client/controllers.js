'use strict';

/* Controllers */

angular.module('express-dapp.controllers', []).
  controller('MainCtrl', function ($scope) {

    //Execute any code here
    $scope.fromMainctrl = 'This line from "Mainctrl" ';

  }).
  controller('MyCtrl1', function ($scope) {

    //Execute any code here
    $scope.fromMyCtrl1 = 'This line from "MyCtrl1" ';

  }).
  controller('MyCtrl2', function ($scope) {

    //Execute any code here
    $scope.fromMyCtrl2 = 'This line from "MyCtrl2" ';

  });
