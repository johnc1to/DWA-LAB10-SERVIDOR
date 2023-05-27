//Rutas pedido
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

//api/productos
router.post('/', pedidoController.crearPedido);
router.get('/', pedidoController.obtenerPedido);
router.put('/:id', pedidoController.actualizarPedido);
router.get('/:id', pedidoController.verPedido);
router.delete('/:id', pedidoController.eliminarPedido);

module.exports = router;