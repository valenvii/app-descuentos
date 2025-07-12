const fs = require('fs');

//Ruta relativa al "package.json"
const fileDescuentos = './backend/json/descuentos.json';

const obtenerJson = () => {
    //Leemos el archivo con descuentos
    const archivoDescuentos = fs.readFileSync(fileDescuentos, 'utf-8');

    //Lo transformamos a JSON
    const descuentosJSON = JSON.parse(archivoDescuentos);

    return descuentosJSON;
};

module.exports = {obtenerJson};