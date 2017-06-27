var express = require('express');
var router = express();
//var Comentario=require("../models/comentario").Comentario;
var listado_comentarios=require("../controllers/comentarioController");
/* GET users listing. */
// router.get('/comentario', function(req, res) {
//   res.send(comentario.render);
// res.end();
// });
// module.exports = router;
require("../server");
router.get("/listado",listado_comentarios.listar);
//router.get('/listado', function(req, res) {
 // Comentario.find({},function(err,doc){
 // 	console.log(doc);
 // 	res.json(doc);

 // });
  
//});
 module.exports = router;
