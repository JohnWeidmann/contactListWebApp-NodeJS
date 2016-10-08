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
			/*$button_add = $("#add-btn");
			//$button.removeClass("btn btn-primary").addClass("btn btn-warning");
			//$button.html("Update");
			//$button.attr("ng-click","update()");
			$button_add.css("display","none");
			$button_update = $("#update-btn");
			$button_update.css("display","");*/

			//recompile angular element, changing add contact button to update button during edit
			//only works if you recompile the element
			//compile($button);
		});
	};

	$scope.update = function(){
		//$the currently select list is always index 0
		//get the selected list and change its values to the value in the in put boxes
		//then make calls to the database to change its values
		//$scope.list[0] = $scope.contact;
		console.log($scope);
		$http.put('/contactlist/' + $scope.contact._id,$scope.contact).success(function(response){
			/*$button = $("#add-update-btn");
			$button.removeClass("btn btn-warning").addClass("btn btn-primary");
			$button.html("Add Contact");
			$button.attr("ng-click","addContact()");
			clearScopeContact($scope)*/
			//recompile angular element, changing add contact button to update button during edit
			//only works if you recompile the element
			//compile($button);
			/*$button_add = $("#add-btn");
			$button_update = $("#update-btn");
			//$button.removeClass("btn btn-primary").addClass("btn btn-warning");
			//$button.html("Update");
			//$button.attr("ng-click","update()");*/
			//$button_add.css("display","block");
			//$button_update.css("display","none");
			clearScopeContact($scope);
			refresh();
		});
	};

	/*function compile(element){
	  	var el = angular.element(element);    
		  	$scope = el.scope();
		    $injector = el.injector();
		    $injector.invoke(function($compile){
		    $compile(el)($scope);
    	});    
	};*/
	var clearScopeContact = function(scope){$scope.contact=""};
});
