const fs = require('fs');

//Ruta relativa al "package.json"
const fileComercios = './backend/json/comercios.json';

const obtenerJson = () => {
    //Leemos el archivo con comercios
    const archivoComercios = fs.readFileSync(fileComercios, 'utf-8');
    const comerciosJSON = JSON.parse(archivoComercios);

    return comerciosJSON;
};

const escribirJson = (comerciosJSON) => {
    const jsonData = JSON.stringify(comerciosJSON);

    //Escribimos el archivo con comercios actualizado
    fs.writeFileSync(archivoComercios, jsonData, 'utf-8');
};


module.exports = {obtenerJson};