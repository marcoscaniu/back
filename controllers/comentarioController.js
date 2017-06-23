"use strict"
var mongoose=require("mongoose");
var Comentario=require("../models/comentario");

var getErrorMessage=function(err){
	if(err.errors){
		for(var errName in err.errors){
			if(err.errors[errName].message) return err.errors[errName].message;
		}
	}else{
		return "error desconocido";
	}
};
//crear un nuevo metodo controller que crea el objeto
exports.create=function(req,res){
//crea un nuevo objeto
	var comentario=new Comentario(req.body);
	//configura la propiedad del objeto
	comentario.creador=req.user;
	//salvar el articulo
	comentario.save(function (err){
		if(err){
			return res.status(400).send({
				message:getErrorMessage(err)
			});
		}else{
		//enviar una representacion del json del objeto
			res.json(comentario);
		}
	});
};

//crear un nuevo metodo controller que recupera   una lista de los objetos
exports.list=function(req,res){
//usar el metodo find para obtener la lista de objetos

	 comentario.find({},function(err,comentario){
	if(err){
	 	return next(err);
	 }else{
	 	res.json(comentario);
	 }
	 });
};