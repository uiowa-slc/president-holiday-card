// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/:pageId/', {
    templateUrl: 'mysite/src/partials/page.html', 
    controller: 'PageCtrl',
    resolve: {
      page: function(pageContentService){
        //console.log('/:pageId:/ detected as route');
        //console.log(pageContentService.getPage());
        return pageContentService.getPage('','/feed');
        
      }
    }
  }); 
  $routeProvider.otherwise({redirectTo: '/home'});
  $locationProvider.html5Mode(true);
}]);
