'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('PageCtrl', function ($rootScope, $scope, $location, $route, $routeParams, page) {
  	$scope.page = page;
  	$rootScope.title = page.title;
  	$rootScope.section =  page.section;
  	$scope.$on("$routeChangeSuccess", function (event, current) {
  		$scope.title = page.title;
  		$scope.section = page.section;
      $('body').html(page.body).foundation();

        var container;
        container = document.getElementById('card');
        
        cardWidth = $("#card").width();
        cardHeight = $("#card").height();
        
        SCREEN_WIDTH = cardWidth;
        SCREEN_HEIGHT = cardHeight;
        
        windowHalfX = cardWidth / 2;
        windowHalfY = cardWidth / 2;

        snowInit();
    });
  
	})



  .controller('CvCtrl', ['$scope', function($scope) {
  		$scope.page = pageContentService.get();

  }])

  .controller('MyCtrl2', ['$scope', function($scope) {

  }])

  .controller('MyCtrl1', ['$scope', function($scope) {

  }]);


