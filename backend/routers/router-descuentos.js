const express = require('express');
const router = express.Router();

const {obtenerJson} = require('./../models/model-descuentos.js');

router.use(express.json());

//get de todos los descuentos
router.get('/', (req, res) => {
    //obtenemos el json con todos los datos y lo devolvemos
    const descuentosJSON = obtenerJson();

    res.send(descuentosJSON);
});

module.exports = router;