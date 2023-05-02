/*
* EVENT LOOP o LOOP DE EVENTOS EN JS
Docu: https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop
*/

console.log('Primero'); // 1

setTimeout(() => {
    console.log('Segundo') // 5
}, 0);

console.log('Tercero'); // 2

setTimeout(() => {
    console.log('Cuarto'); // 6
}, 0);

new Promise(function(resolve) { 
    resolve('Desconocido...'); // 4
}).then(console.log)

console.log('Ultimo'); // 3

function hola() {
    console.log('hola');
}
hola();