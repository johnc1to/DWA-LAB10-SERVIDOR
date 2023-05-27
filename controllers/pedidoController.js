const Pedido = require("../models/Pedido");

exports.crearPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);

        await pedido.save();
        res.send(pedido);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPedido = async (req, res) => {

    try {

        const pedidos = await Pedido.find();
        res.json(pedidos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPedido = async (req, res) => {

    try {

        const {_id, pedido, mesa, imagen} = new Pedido(req.body);
        let pedidos = await Pedido.findById(req.params.id);

        if(!pedidos){
            res.status(404).json({ msg: 'No existe el pedido'});
        }

        pedido._id = _id;
        pedidos.pedido = pedido;
        pedidos.mesa = mesa;
        pedidos.imagen = imagen;

        console.log(pedidos)

        pedidos = await Pedido.findOneAndUpdate({ _id: req.params.id }, pedidos, { new: true } );
        res.json(pedidos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPedido = async (req, res) => {

    try {

        let pedidos = await Pedido.findById(req.params.id);

        if(!pedidos){
            res.status(404).json({ msg: 'No existe el pedido'});
        }

        res.json(pedidos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPedido = async (req, res) => {

    try {

        let pedidos = await Pedido.findById(req.params.id);

        if(!pedidos){
            res.status(404).json({ msg: 'No existe el pedido'});
        }

        pedidos = await Pedido.findOneAndRemove(req.params.id);

        res.json({ msg: 'El pedido: ' + pedidos.pedido + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

