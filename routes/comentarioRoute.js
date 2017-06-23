var express = require('express');
var router = express.Router();
var comentario=require("../controllers/comentarioController");
/* GET users listing. */
router.get('/comentario', function(req, res) {
  res.send(comentario.render);
res.end();
});
module.exports = router;
