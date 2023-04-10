import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js'


console.log(nombreCliente, ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

//Importar empresa 
const empresa = new Empresa('Codigo con Juan', 100, 'Aprendizaje en linea');
console.log(empresa.mostrarInformacion());