'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []);
	services.value('version', '0.1');

services.factory('pageContentService', ['$rootScope', '$routeParams','$route', '$http', '$q', function($rootScope, $routeParams, $route, $http, $q){

function PageService() {
    
        var self = this;
        self.page = {};
        //    Initially the name is unknown....
        self.page[$routeParams.pageId] = null;
          
        //    getName returns a promise which when fulfilled returns the name.
        self.getPage = function(urlPrefix, urlSuffix) {
            urlPrefix = urlPrefix || "";
            urlSuffix = urlSuffix || "";
            //    Create a deferred operation.
            var deferred = $q.defer();
            var prefixedUrl = urlPrefix + $route.current.params.pageId + urlSuffix;
            
            //    If we already have the name, we can resolve the promise.
            if((self.page[prefixedUrl] !== undefined) && (self.page[prefixedUrl] !== null) ) {
                deferred.resolve(self.page[prefixedUrl]);
                //console.log('cached page found: self.page['+ prefixedUrl+'] =  ' + self.page[prefixedUrl]);
            } else {
            	
                //    Get the name from the server.
                $http.get(prefixedUrl)
                .success(function(response) {
                	
                    self.page[prefixedUrl] = response;
                    //console.log('uncached page found: ' + response.body);
                    deferred.resolve(response);
                })
                .error(function(response) {
                    deferred.reject(response);
                });
            }
            
            //    Now return the promise.
            return deferred.promise;
        };
    }
    return new PageService();
}]);