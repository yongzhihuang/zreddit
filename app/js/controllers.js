'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('postlist', function($scope, redditAPIService) {
  	$scope.postList = [];

  	redditAPIService.getPosts().success(function (response) {
  		angular.forEach(response.data.children, function(value, key) {
       if (value.data.url.indexOf('imgur') !== -1) {
       		value.data.url = value.data.url.replace('.png', 'm.png');
       		value.data.url = value.data.url.replace('.jpg', 'm.jpg');
       		value.data.url = value.data.url.replace('.gif', 'm.gif');
       }
     	});

  		$scope.postList = response.data.children;
  	
  	});
  });
