// process.env.NODE_ENV=process.env.NODE_ENV||"development";

// var mongoose=require("../back-end/config/mongoose");
// var	express=require("../back-end/config/express");
	
// var db=mongoose();
// var app=express();
// app.listen(3000);
// module.exports=app;

// console.log("conectado!!");
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/red', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});
app.listen(8080);