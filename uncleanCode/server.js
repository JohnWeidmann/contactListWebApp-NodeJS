var express = require('express');
var app = express();
//need this to parase the response body
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var routes = require('./routes/routes.js');

//app.use(bodyParser.json());
app.use('/',routes);
app.use(express.static(__dirname + '/public')); //look for static files js html css etc
app.use('/bootstrap', express.static(__dirname + '/public/bower_components/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/public/bower_components/jquery/dist'));
app.use('/angular', express.static(__dirname + '/public/bower_components/angular'));
app.use('/controllers', express.static(__dirname + '/public/controllers'));
app.use('/scripts',express.static(__dirname + '/public/resources/scripts'));

//tells the server to listen for create contact route
/*app.get('/contactlist', function(req,res){
	db.contactlist.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	})
	//for testing the request from the controller WORKS!
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
	res.json(contactList);
	
	//import from the mongodb


});*/
//need body parser for req.body
/*app.post('/contactlist', function(req,res){
	//check if server can ready the data
	//console.log(req.body);
	//send data to the database AND sends the data back to our controller
	db.contactlist.insert(req.body, function(err,doc){
		res.json(doc);
	})
});

app.delete('/contactlist/:id', function(req,res){						//refers to item we are removing
	db.contactlist.remove({_id:ObjectId(req.params.id) }, function(err,doc){
		//send back item we are removing
		res.json(doc);
	});
});
//edit
app.get('/contactlist/:id',function(req,res){
	db.contactlist.findOne({_id:ObjectId(req.params.id)}, function(err,doc){
		res.json(doc);
	});
});
//update
app.put('/contactlist/:id',function(req,res){
	/*db.contactlist.findAndModify({
		query:{_id: ObjectId(req.params.id)},
		update:{ $set: {name: req.body.name,email: req.body.email,number:req.body.number}},
		new: true}, function(err,doc){
			db.contactlist.remove({_id:req.params.id},function(err,doc){
				if(err){
					console.log("ERRR BITCH");
				}
				res.json(doc); 
		});
	});*/
	/*db.contactlist.findAndModify({
		query:{_id: ObjectId(req.params.id)},
		update:{ $set: {name: req.body.name,email: req.body.email,number:req.body.number}},
		new: true}, function(err,doc){
			res.json(doc);
	});
});
*/
app.listen(3000);
console.log('server running on port 3000');

//https://www.npmjs.com/package/mongojs-models define scheme and models for mongojs
//https://www.npmjs.com/package/mongojs great format conntect string examples
//http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express full stack training web good