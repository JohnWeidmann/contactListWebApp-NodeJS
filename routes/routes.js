var express = require('express');
var ObjectId = require('mongojs').ObjectID; 
var mongojs = require('mongojs');
//which mongo database and collection
var db = mongojs('contactlist',['contactlist'])

var router = express.Router();

router.get('/contactlist', function(req,res){
	db.contactlist.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	})
});

//add
router.post('/contactlist', function(req,res){
	//check if server can ready the data
	//send data to the database AND sends the data back to our controller
	db.contactlist.insert(req.body, function(err,doc){
		res.json(doc);
	})
});
//delte
router.delete('/contactlist/:id', function(req,res){//refers to item we are removing
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
	db.contactlist.findAndModify({
		query:{_id: ObjectId(req.params.id)},
		update:{ $set: {name:req.body.name,email:req.body.email,number:req.body.number}},
		new: true}, function(err,doc){
			res.json(doc);
	});
});

module.exports = router;