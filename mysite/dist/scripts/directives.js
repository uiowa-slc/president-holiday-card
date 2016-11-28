'use strict';

/* Directives */

angular.module('myApp.directives', [])
  
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  .directive('slickSlider',function($timeout){
   return {
    restrict: 'A',
	   link: function(scope,element,attrs) {
	     $timeout(function() {
	         $(element).slick(scope.$eval(attrs.slickSlider));
	     });
	   }
  }
 }); 