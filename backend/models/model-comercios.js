const fs = require('fs');

//Ruta relativa al "package.json"
const fileComercios = './backend/json/comercios.json';

const obtenerJson = () => {
    //Leemos el archivo con comercios
    const archivoComercios = fs.readFileSync(fileComercios, 'utf-8');

    //Lo transformamos a JSON
    const comerciosJSON = JSON.parse(archivoComercios);

    return comerciosJSON;
};

module.exports = {obtenerJson};