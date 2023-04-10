/*
Los Maps:
-son listas ordenadas en llave y valor. Como un objeto
- La llave y valor puede ser cualquier tipo de dato
- Tienen mejor performance que un objeto
*/

const cliente =  new Map();

//Agrega un elemento
cliente.set('nombre', 'Karen'); 
cliente.set('tipo', 'Premium'); 
cliente.set(400, 'saldo'); 
cliente.set([0], true); 
cliente.set(true, true); 
// tamaño
console.log(cliente.size);
// posee X valor?
console.log(cliente.has('nombre2')); // false
console.log(cliente.has('saldo')); // true
// tomar un valor
console.log(cliente.get('nombre'));
cliente.delete('saldo');

const paciente = new Map ([ ['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Patricia'); // <= como tiene un valor inicial igual a uno dendro de la variable, lo reasigna a los nuevos valores indicados

console.log(cliente);
// Los Maps son iterables
/* 
    al iterar puede poseer hasta 3 parametros.
    1. El elemento iterado (valor)
    2. El "index", que es el primer valor osea las keys/llaves
*/
paciente.forEach( (datos, index) => {
    console.log(datos);
})