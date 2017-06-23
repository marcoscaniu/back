var mongoose=require("mongoose"),
	Schema=mongoose.Schema;
	
	
var ComentarioSchema=new Schema({
	descripcion:String
	
});
mongoose.model("comentario",ComentarioSchema);
