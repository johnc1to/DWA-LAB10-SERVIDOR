const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/pedidos', require('./routes/pedido'));

app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})