angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  // Your code here
  $scope.shortenLink = function(link) {
    Shorten.shortenLink(link)
    .then(function(link){
      $scope.submittedLink = link;
    });
  }

});
