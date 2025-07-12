//npx nodemon server.js

//importa el express (módulo que te permite ahorrar código de ejecución del código)
const express = require('express');
const routerDescuento = require('./routers/router-descuentos.js');
const routerComercio = require('./routers/router-comercios.js');

//instancia express
const app = express();

//const ip = '172.16.100.208';
const ip = 'localhost';
const puerto = '3017';

//Se dirige al index
app.get('/', (req, res) => { // '/' indica la raiz
    res.send('Hola?');
});

//routers
app.use('/api/descuentos', routerDescuento);
app.use('/api/comercio', routerComercio);

//Server en el puerto especificado
app.listen(puerto, () => {
    console.log('Entremos! http://' + ip + ':' + puerto);
});