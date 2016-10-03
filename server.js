var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); //look for static files js html css etc
app.use('/bootstrap', express.static(__dirname + '/public/bower_components/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/public/bower_components/jquery/dist'));
app.use('/angular', express.static(__dirname + '/public/bower_components/angular'));
//app.use('bower_components',express.static(__dirname + '/bower_components')); 
app.listen(3000);
console.log('server running on port 3000');