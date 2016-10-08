
angular.module('contactListApp', [])

.controller('contactListController',function($scope,$http){

	var refresh = function(){
		$http.get('/contactlist').success(function(response){ 
			$scope.list = response;
		});
	};

	refresh();

	$scope.remove = function(id){
		if (confirm('Are you sure ?')) {
    		$http.delete('/contactlist/' + id).success(function(response){
				refresh();
			});
    	} 
	};

	$scope.addContact = function(){
		//$scope.contact the info passing to the server
		$http.post('/contactlist',$scope.contact).success(function(response){ 
			//"response" is the response from the server as the argument"
			clearScopeContact($scope);
			refresh();
		});
	};

	$scope.edit = function(id){
		$http.get('/contactlist/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.update = function(){
		$http.put('/contactlist/' + $scope.contact._id,$scope.contact).success(function(response){
			clearScopeContact($scope);
			refresh();
		});
	};

	var clearScopeContact = function(scope){$scope.contact=""};
});
