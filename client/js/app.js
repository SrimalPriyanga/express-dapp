'use strict';

// Declare app level module which depends on filters, and services

angular.module('express-dapp',
  [
    'express-dapp.controllers',
    'express-dapp.filters',
    'express-dapp.services',
    'express-dapp.directives',
    'ui.router',
    'ngMaterial'
  ]
)
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '',
        template: '<h1>Main State</h1>',
        controller: 'MainCtrl'
      })
      .state('view1', {
        url: '/state1',
        templateUrl: '/view1-tpl',
        controller: 'MyCtrl1'
      })
      .state('view2', {
        url: '/state2',
        templateUrl: '/view2-tpl',
        controller: 'MyCtrl2'
      });

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
  }
]);
