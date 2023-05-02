/*
 * CURRYING
- divide una funcion  que toma mas de un parametro en argumentos en forma parcial

* PARTIALS
-Pasos en los que dividimos la funciones
 */

const suma = (a,b,c) => a + b + c;
console.log(suma(1,2,3)); // 6

// CURRYING
const parcial = (a) => (b,c) => suma(a, b, c);
// PARTIALS
const primerNumero = parcial(5); // a
const resultado = primerNumero(4,3) // b,c
console.log(resultado); // 12

// CURRYING
const parcial2 = a => b => c => suma(a, b, c);

// PARTIALS
const primerNumero2 = parcial2(5); // a
const segundoNumero2 = primerNumero2(4) // b
const resultado2 = segundoNumero2(3) // c
console.log(resultado2) // 12

// CURRYING + PARTIALS
const resultadoParcial3 = parcial2(5)(4)(3);