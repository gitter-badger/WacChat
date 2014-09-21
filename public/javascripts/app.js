var wacc2014App = angular.module('wacc2014', ['ngRoute', 'wacc2014Controllers', 'wacc2014Services']);
var wacc2014Controllers = angular.module('wacc2014Controllers', []);
var wacc2014Services = angular.module('wacc2014Services', ['ngResource']);

wacc2014App.config(['$routeProvider', 
  function($routeProvider) {
  $routeProvider
    .otherwise({
      redirectTo:'/',
      controller:'ChatController',
      templateUrl:'views/chat.html'
    });
}]);