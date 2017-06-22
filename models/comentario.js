var mongoose=require("mongoose"),
	Schema=mongoose.Schema;
	
	
var ComentarioSchema=new Schema({
	descripcion:{
	type:String
	}
});
mongoose.model("comentario",ComentarioSchema);
