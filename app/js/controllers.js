'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('postlist', function($scope, redditAPIService) {
  	
    $scope.postList = [];

  	redditAPIService.getPosts().success(function (response) {
  		angular.forEach(response.data.children, function(value, key) {
       if (value.data.url.indexOf('imgur') !== -1) {
       		value.data.urlcompressed = value.data.url.replace('.png', 'm.png');
       		value.data.urlcompressed = value.data.url.replace('.jpg', 'm.jpg');
       }
     	});

  		$scope.postList = response.data.children;
  	});

    $scope.$on('fetchReddit', function(event, sub) {
      redditAPIService.getPosts(sub).success(function (response) {
        angular.forEach(response.data.children, function(value, key) {
         if (value.data.url.indexOf('imgur') !== -1) {
            value.data.urlcompressed = value.data.url.replace('.png', 'm.png');
            value.data.urlcompressed = value.data.url.replace('.jpg', 'm.jpg');
         }
        });

        $scope.postList = response.data.children;
      });
    });

  })
  .controller('subredditList', function($scope, redditAPIService) {
    $scope.subList = [
      'all',
      'technology',
      'askreddit',
      'leagueoflegends',
      'webdev',
      'javascript',
      'pics',
      'adviceanimals',
      'gaming',
      'explainlikeimfive',
      'videos',
      'nyc'
    ];

    //default selection to be 1
    $scope.selectedOption = $scope.subList[1];

    //update when something is selected
    $scope.update = function(selectedOption) {
      $scope.$emit('fetchReddit', selectedOption);
    };
  });
