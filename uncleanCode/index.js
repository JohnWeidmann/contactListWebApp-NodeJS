<!DOCTYPE html>
<html ng-app="contactListApp">
<head>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
	<title>Contact List App</title>
</head>
<body>
	<div class="container" ng-controller="contactListController">
		<h1>Contact List App</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Number</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input class="form-control" ng-model="contact.name"></td>
					<td><input class="form-control" ng-model="contact.email"></td>
					<td><input class="form-control" ng-model="contact.number"></td>
					<!-- <td><button class="btn btn-primary" id="add-update-btn" ng-click="addContact()">Add Contact</td> -->
					<td><button class="btn btn-primary" id="add-btn" ng-click="addContact()">Add Contact</td>
					<td><button class="btn btn-warning" id="update-btn" ng-click="update()" style="display:none">Update</td>
				</tr>
				<tr ng-repeat="contact in list">
					<td>{{contact.name}}</td>
					<td>{{contact.email}}</td>
					<td>{{contact.number}}</td>
					<td><button class="btn btn-danger"  id="remove-btn" ng-click="remove(contact._id)">Remove</button></td>
					<td><button class="btn btn-warning" id="edit-btn" ng-click="edit(contact._id)">Edit</button></td>
				</tr>
			</tbody>
		</table>	
	</div>
<script type="text/javascript" src="jquery/jquery.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
<script src="angular/angular.js"></script>
<script src="controllers/controller.js"></script>
<script src="scripts/index.js"></script>
</body>
</html>