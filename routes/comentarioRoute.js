var express = require('express');
var router = express();
var listado_comentarios = require("../controllers/comentarioController");

/* GET users listing. */
require("../server");

router.get("/listado", listado_comentarios.listar);
router.get("/listado/:id", listado_comentarios.buscarUno);
router.post("/agregar", listado_comentarios.crear);
router.delete("/eliminar/:id", listado_comentarios.remover);
router.put("/actualizar", listado_comentarios.actualizar);

module.exports = router;
