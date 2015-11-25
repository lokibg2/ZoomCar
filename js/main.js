(function(){


	var app = angular.module('track',['angular-loading-bar', 'vAccordion','LocalStorageModule' ]);
	
	app.controller('HeadController', function($scope, $http) {
   $http.get("http://zoomcar-ui.0x10.info/api/courier?type=json&query=api_hits")
   .success(function(response) {$scope.apiHits = response.api_hits;});

   $http.get("http://zoomcar-ui.0x10.info/api/courier?type=json&query=list_parcel")
   .success(function(response) {$scope.parcels = response.parcels;
     $scope.parcels[5].price = "68352";
     for(i = 0; i < $scope.parcels.length; i++){
         $scoper.parcels[i].loc = false; 
     }
   } );

   $scope.fun = function(x,y){
    $http.get("https://pelias.mapzen.com/v1/reverse?api_key=search-Oat5foA&point.lat="+x+"&point.lon="+y)
    .success(function(response) {
      $scope.addr = response.features[0].properties.neighbourhood+','+response.features[0].properties.locality+','+response.features[0].properties.region;
  } );

  }

  $scope.store = function submit(key, val) {
    return localStorageService.set(key, val);
  }

  $scope.get =  function getItem(key) {
    return localStorageService.get(key);
  }

});

	app.config(function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  });

	app.controller('MainController', function ($scope) {

    $scope.expandCallback = function (index, id) {
      console.log('expand:', index, id);


    };

    $scope.collapseCallback = function (index, id) {
      console.log('collapse:', index, id);
    };


  });


})();

