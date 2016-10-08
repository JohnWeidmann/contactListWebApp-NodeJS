var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var routes = require('./routes/routes.js');

app.use('/',routes);
app.use(express.static(__dirname + '/public')); //look for static files js html css etc
app.use('/bootstrap', express.static(__dirname + '/public/bower_components/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/public/bower_components/jquery/dist'));
app.use('/angular', express.static(__dirname + '/public/bower_components/angular'));
app.use('/controllers', express.static(__dirname + '/public/controllers'));
app.use('/scripts',express.static(__dirname + '/public/resources/scripts'));

app.listen(3000);
console.log('server running on port 3000');
