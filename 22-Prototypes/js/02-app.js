/*
    Al crear prototipos de objetos estamos estableciento un framework de trabajo que permite controlar el manejo de objetos en proyectos en equipo.
*/

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new Cliente('juan', 500);


function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CJJ = new Empresa('Codigo con Juan', 400, 'Cursos en Linea')
console.log(formatearCliente(CJJ));