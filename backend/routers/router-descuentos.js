const express = require('express');
const router = express.Router();

const {obtenerJson, escribirJson, obtenerDescuento, obtenerDescuentosComercio, existenDescuentos, existeDescuento, agregarDescuento, eliminarDescuento} = require('./../models/model-descuentos.js');

router.use(express.json());

//get de todos los descuentos 
router.get('/', (req, res) => {
    const descuentosJSON = obtenerJson();

    res.send(descuentosJSON);
});

module.exports = router;