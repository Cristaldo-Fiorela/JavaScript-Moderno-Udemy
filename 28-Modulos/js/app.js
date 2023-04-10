import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js'

nuevaFuncion();

console.log(clienteNombre);
console.log(ahorro);
console.log(mostrarInformacion(clienteNombre, ahorro));

tieneSaldo(ahorro)

const cliente = new Cliente(clienteNombre, ahorro);

console.log(cliente.mostrarInformacion());

//Importar empresa 
const empresa = new Empresa('Codigo con Juan', 100, 'Aprendizaje en linea');
console.log(empresa.mostrarInformacion());