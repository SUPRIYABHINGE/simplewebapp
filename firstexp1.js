var exp=require('express');

var app=exp();

app.get('/home',function(req,res){


  res.send("<h1>welcome to web app</h1>");


})
app.listen(9000,function(){

console.log("get started");


});