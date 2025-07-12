/*
Ver ip local en Linux
En terminal: ip addr show

Buscamos el relacionado con la ip local, en mi caso es wlp3s0
En la línea que contiene inet, buscamos la ip y la copiamos sin la máscara (172.16.100.208/16 por ej)
*/
//Martu
// const ip = '192.168.100.141';
//Val
const ip = '192.168.1.88';

const API_URL = `http://${ip}:3017`;

export default API_URL;