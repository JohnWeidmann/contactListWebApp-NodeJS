var express = require('express');

var ObjectId = require('mongojs').ObjectID;
//require the module 
var mongojs = require('mongojs');
//which mongo database and collection
var db = mongojs('contactlist',['contactlist'])

var router = express.Router();

router.get('/contactlist', function(req,res){
	db.contactlist.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	})

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

//add
router.post('/contactlist', function(req,res){
	//check if server can ready the data
	//console.log(req.body);
	//send data to the database AND sends the data back to our controller
	db.contactlist.insert(req.body, function(err,doc){
		res.json(doc);
	})
});
//delte
router.delete('/contactlist/:id', function(req,res){						//refers to item we are removing
	db.contactlist.remove({_id:ObjectId(req.params.id) }, function(err,doc){
		//send back item we are removing
		res.json(doc);
	});
});
//edit
router.get('/contactlist/:id',function(req,res){
	db.contactlist.findOne({_id:ObjectId(req.params.id)}, function(err,doc){
		res.json(doc);
	});
});
//update
router.put('/contactlist/:id',function(req,res){
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
	db.contactlist.findAndModify({
		query:{_id: ObjectId(req.params.id)},
		update:{ $set: {name:req.body.name,email:req.body.email,number:req.body.number}},
		new: true}, function(err,doc){
			res.json(doc);
	});
});


module.exports = router;