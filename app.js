var express = require('express');
var app = express();
var port = 3100;

app.get('/',function(req,res){
	res.send("hi i am here");
})

app.get('/books',function(req,res){
	res.send("this is book")
})


app.listen(port,function(err){
	console.log("server running on "+port)
})