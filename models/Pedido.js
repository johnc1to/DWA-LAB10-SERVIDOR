const mongoose = require('mongoose');

const PedidoSchema = mongoose.Schema({
    
    pedido: {
        type: String,
        require: true
    },
    mesa: {
        type: String,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema)