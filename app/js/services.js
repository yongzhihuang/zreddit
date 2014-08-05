'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('redditAPIService', function($http) {
  	var redditAPI = {};

  	redditAPI.getPosts = function(subreddit) {
      var sub = subreddit || 'all';

  		return $http({
  			method: 'GET',
  			responseType: 'json',
  			url: 'http://www.reddit.com/r/' + sub + '.json?limit=100'
  		});
  	}

  	return redditAPI;
  });
