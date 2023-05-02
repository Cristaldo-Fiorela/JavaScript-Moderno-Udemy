/*
HOSTING:
- existen dos fases: 
1. Registra las funciones
2. Las manda a llamar
*/

obtenerCliente('Fio');
function obtenerCliente( nombre ) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2('Ana'); // ! Marca error
const obtenerCliente2 = function( nombre ) {
    console.log(`El nombre del cliente es ${nombre}`);
}