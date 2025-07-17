const fs = require('fs');

//Ruta relativa al "package.json"
const fileComercios = './backend/json/comercios.json';

const obtenerJson = () => {
    //Leemos el archivo con comercios
    const archivoComercios = fs.readFileSync(fileComercios, 'utf-8');
    const comerciosJSON = JSON.parse(archivoComercios);

    return comerciosJSON;
};

const cambiarImagen = (nombreComercio, nuevaImagen) => {

    const comerciosJSON = obtenerJson();

    const comercio = comerciosJSON.find(unComercio => unComercio.nombre == nombreComercio);

    if(comercio) {
        comercio.imagen = nuevaImagen;
        escribirJson(comerciosJSON);
    }
};

module.exports = {obtenerJson, cambiarImagen};