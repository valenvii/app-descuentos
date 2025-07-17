const fs = require('fs');

//Ruta relativa al "package.json"
const fileDescuentos = './backend/json/descuentos.json';

const obtenerJson = () => {
    //Leemos el archivo con descuentos
    const archivoDescuentos = fs.readFileSync(fileDescuentos, 'utf-8');
    const descuentosJSON = JSON.parse(archivoDescuentos);

    return descuentosJSON;
};

const escribirJson = (descuentosJSON) => {
    const jsonData = JSON.stringify(descuentosJSON);
    //Escribimos el archivo con comercios actualizado
    fs.writeFileSync(archivoDescuentos, jsonData, 'utf-8');
};

const obtenerDescuentosComercio = (nombreComercio) => {
    //Obtiene los descuentos para un nombre de comercio

    const descuentosJSON = obtenerJson();
    //buscamos el tipo de patron que tenga el mismo nombre que el pasado por parámetro
    const descuentos = descuentosJSON.find(descuento => descuento.comercio == nombreComercio);

    return descuentos;
};

const obtenerDescuento = (nombreComercio, idDescuento) => {
    //Obtiene un descuento de un comercio

    let descuento = null;
    //Obtenemos los descuentos para ese nombre de comercio
    const descuentos = obtenerDescuentosComercio(nombreComercio);

    if(descuentos) {
        //Si existen descuentos para ese comercio 
        descuento = (descs.descuentos).find(desc => desc.id == idDescuento);
    }

    return descuento;
};

/*
Algo asi deberia ser para obtener todos los descuentos, pero calculo que esto te devuelve una lista de listas. Tipo una lista en donde cada elem es 
la lista de descuentos de cada comercio. Para desp usarla para paginacion. 

const obtenerDescuentos = () => {
    //Obtiene todos los descuentos

    let listaDescuentos = null;
    const descuentosJSON = obtenerJson();
    listaDescuentos = descuentos.map(function (descuento) {return descuento.descuentos});

    return listaDescuentos;
};

const obtenerListaDescuentos = (cantidad, inicio) => {
    let listaDescuentos = null
    const descuentos = obtenerJson();
    
};

*/

const existenDescuentos = (nombreComercio) => {
    //Devuelve verdadero si ese comercio tiene descuentos
    let existen = false;
    const descuentos = obtenerDescuentosComercio(nombreComercio);

    if(descuentos) {
        existen = true;
    }

    return existen;
};

const existeDescuento = (nombreComercio, idDescuento) => {
    //Devuelve verdadero si ese comercio contiene a ese descuento
    let existe = false;
    const descuento = obtenerDescuento(nombreComercio, idDescuento);

    if(descuento) {
        existe = true;
    }

    return existe;
};

const agregarDescuento = (nuevoDescuento, nombreComercio) => {
    //Agrega un descuento a un comercio

    const descuentosJSON = obtenerJson();
    //buscamos el tipo de patron que tenga el mismo nombre que el pasado por parámetro
    const listaDescuentos = descuentosJSON.find(descuento => descuento.comercio == nombreComercio);

    if(listaDescuentos) {
        (listaDescuentos.descuentos).push(nuevoDescuento);
        escribirJson(descuentosJSON);
    }
};

const eliminarDescuento = (nombreComercio, idDescuento) => {
    //Invalida un descuento de un comercio

    const descuentosJSON = obtenerJson();
    const listaDescuentos = descuentosJSON.find(lisDescuentos => lisDescuentos.nombre == nombreComercio);

    if(listaDescuentos) {
        const descuento = (listaDescuentos.descuentos).find(desc => desc.id == idDescuento);

        if(descuento) {
            listaDescuentos.descuentos = (listaDescuentos.descuentos).filter(desc => desc.id !== idDescuento);
            escribirJson(descuentosJSON);
        }
    }
}; 

module.exports = {obtenerJson, escribirJson, obtenerDescuento, obtenerDescuentosComercio, existenDescuentos, existeDescuento, agregarDescuento, eliminarDescuento};