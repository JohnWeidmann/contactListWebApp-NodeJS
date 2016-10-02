var express = require('express');
var app = express();

//app.use(express.static(__dirname + "/public")); //look for static files js html css etc

app.listen(3000);
console.log('server running on port 3000');