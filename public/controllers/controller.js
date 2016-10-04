//long hand//

/*var app = angular.module('contactListApp', []);

app.controller('contactListController', function($scope){
	console.log("hello");
});*/


//short hand with dummy data//

/*angular.module('contactListApp', [])

.controller('contactListController', function($scope){
	
	person1 = {

		name: 'John',
		email: 'john@email.com',
		number: '11111111111'
	};
	
	person2 = {

		name: 'Jim',
		email: 'Jim@email.com',
		number: '22222222222',

	};
	
	person3 = {

		name: 'James',
		email: 'James@email.com',
		number: '3333333333',

	};

	var contactList = [person1, person2,person3];
	$scope.list = contactList;
});*/

//using server for get request

angular.module('contactListApp', [])

.controller('contactListController',function($scope,$http){
			
			$http.get('/contactlist').success(function(response){
				console.log("i got the data I requested"); 
				$scope.list = response;
			});
		
			$scope.addContact = function(){
				console.log($scope.contact);
				//$scope.contact the info passing to the server
				$http.post('/contactlist',$scope.contact)
				//.success(function(response){ 
				//});
			};
		});