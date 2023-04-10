/*
Symbols:
-Ningun Symbol es igual a otro Symbol
- Las propiedades que utilizan un Symbol no son iterables
- Se puede definir la descripcion de un symbol
*/

const sym = Symbol();
const sym2 = Symbol();

console.log(Symbol() === Symbol());
console.log(sym === sym2);

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Fiore';
persona[apellido] = 'Cristaldo';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

for(let i in persona) {
    console.log(i);
}

// Definir la descripcion de un symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';
