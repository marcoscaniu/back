 var mongoose=require("mongoose");
var Schema 	=mongoose.Schema;
	
var ComentarioSchema=new Schema({
 	descripcion:String
	
 });
// mongoose.model("Comentario",ComentarioSchema);
var Comentario=mongoose.model("comentarios",ComentarioSchema);

module.exports.Comentario=Comentario;
