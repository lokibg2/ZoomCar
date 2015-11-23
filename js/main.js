//(function(){
	        

	var app = angular.module('track',['angular-loading-bar', 'vAccordion','LocalStorageModule' ]);
	
	app.controller('HeadController', function($scope, $http) {
    	$http.get("http://zoomcar-ui.0x10.info/api/courier?type=json&query=api_hits")
    	.success(function(response) {$scope.apiHits = response.api_hits;});
    	
    	$http.get("http://zoomcar-ui.0x10.info/api/courier?type=json&query=list_parcel")
    	.success(function(response) {$scope.parcels = response.parcels;
    			$scope.parcels[5].price = "68352";
    	} );

    	$scope.fun = function(x,y){
    		$http.get("http://pelias.mapzen.com/reverse?lat="+x+"&lon="+y)
    	.success(function(response) {$scope.addr = response.features[0].properties.text;} );
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


//})();

