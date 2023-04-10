import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';

console.log(nombreCliente, ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());