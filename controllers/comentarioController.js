"use strict"
var mongoose=require("mongoose");
var Comentario=require("../models/comentario");
 
module.exports={
	listar:function(req,res){
		mongoose.model("comentarios").find(function(err,docs){
			if(err){
				res.send("problemas");
				console.log(err);
			}
		res.send(docs);
		console.log(docs);
		})
	},
	crear:function(req,res){
		var comen={
			descripcion:req.body.des
		}
		mongoose.model("comentarios").create(comen,function(err,docs){
			if(err){
				res.send("algo a ocurrrido!!");
			}
			res.send("Comentario añadido con exito!!");
		})

	},
	buscarUno:function(req,res){
		mongoose.model("comentarios").find({_id:req.params.id},function(err,docs){
			if(err){
				res.send("problemas");
				console.log(err);
			}
		res.send(docs);
		console.log(docs);
		})
	},

	remover:function(req,res){

		mongoose.model("comentarios").remove({_id:req.params.id},function(err,docs){
			res.send("Comentario eliminado con exito!!");
		})
	}


}
