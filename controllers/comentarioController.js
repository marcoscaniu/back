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
}

}
// function list(req, res, next) {
//   Comentario.find().exec((err, coment) => {
//     if (err) {
//       res.json({success: false, message: err})
//       console.log({success: false, message: err})
//     } else {
//       res.json({success: true, message: coment})
//       console.log({success: true, message: coment})
//     }
//   })
//   //res.send("holas aqui estoy pos");
// }




// var getErrorMessage=function(err){
// 	if(err.errors){
// 		for(var errName in err.errors){
// 			if(err.errors[errName].message) return err.errors[errName].message;
// 		}
// 	}else{
// 		return "error desconocido";
// 	}
// };
// //crear un nuevo metodo controller que crea el objeto
// exports.create=function(req,res){
// //crea un nuevo objeto
// 	var comentario=new Comentario(req.body);
// 	//configura la propiedad del objeto
// 	comentario.creador=req.user;
// 	//salvar el articulo
// 	comentario.save(function (err){
// 		if(err){
// 			return res.status(400).send({
// 				message:getErrorMessage(err)
// 			});
// 		}else{
// 		//enviar una representacion del json del objeto
// 			res.json(comentario);
// 		}
// 	});
// };

// //crear un nuevo metodo controller que recupera   una lista de los objetos
// exports.list=function(req,res,next){
// //usar el metodo find para obtener la lista de objetos
// res.send("hola");
// 	//  Comentario.find({},"descripcion",function(err,comentario){
// 	// if(err){
// 	//  	return next(err);
	 	
// 	//  }else{
// 	//  	res.json(Comentario);
// 	//  	console.log(Comentario);
// 	//  }
// 	//  });
// };

// module.exports=function listar(req,res){
// 	console.log("esta 2");
	
// 	//  Comentario.find({},"descripcion",function(err,comentario){
// 	// if(err){
// 	//  	return next(err);
// 	//  	console.log(err);
// 	//  }else{
// 	//  	res.json(Comentario);
// 	//  	console.log(Comentario);
// 	//  }
// 	//  });
// };