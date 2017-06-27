var express = require('express');
var router = express.Router();
var rutas_comentario = require('./comentarioRoute');
var users = require('./users');


/* GET home page. */

router.use('/', users);
router.use('/comentarios', rutas_comentario);

module.exports = router;
