var express = require('express');

 var app = express();

app.use(express.static(__dirname + '/public')); //look for static files js html css etc
app.use('/bootstrap', express.static(__dirname + '/public/bower_components/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/public/bower_components/jquery/dist'));
app.use('/angular', express.static(__dirname + '/public/bower_components/angular'));
app.use('/controllers', express.static(__dirname + '/public/controllers'));

//tells the server to listen for create contact route
app.get('/contactlist', function(req,res){
	
	console.log("I recieved Get for /contactlist");
	//for testing the request from the controller WORKS!
	/*person1 = {

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
	res.json(contactList);*/
	
	//import from the mongodb
});
app.listen(3000);
console.log('server running on port 3000');