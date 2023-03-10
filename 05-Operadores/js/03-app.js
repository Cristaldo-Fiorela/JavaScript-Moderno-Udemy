// Comparacion de Null y Undefined
// Undefined

let numero;
console.log(numero);
//console.log(typeof numero); // undefined

// Null

let numero2 = null;
console.log(numero2);
// console.log(typeof numero2); // objeto

console.log(numero == numero2) // true -> compara su valor
console.log(numero === numero2) // false -> compara su valor y tipo (undefined y objeto)