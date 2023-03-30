/*
    Prototype
*/

// Objeto literal
// no es dinamico
// es el mas comun
const cliente = {
    nombre: 'Juan',
    saldo: 500,
}
console.log(cliente);
console.log(typeof cliente);

// Constructor de objeto
// programacion orientada a objetos
// dinamico
// menos comun al usar
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juan', 500);
console.log(juan)
