'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('redditAPIService', function($http) {
  	var redditAPI = {};

  	redditAPI.getPosts = function() {
  		return $http({
  			method: 'GET',
  			responseType: 'json',
  			url: 'http://www.reddit.com/.json?limit=100'
  		});
  	}

  	return redditAPI;
  });
