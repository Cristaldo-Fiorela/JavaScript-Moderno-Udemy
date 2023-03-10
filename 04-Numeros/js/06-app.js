//Convertir strings a numeros...

const numero1 = 20;
const numero2 = "20";
const numero3 = "Uno";
const numero4 = 20.2;

console.log(numero1);
// Convierte de string a numero entero
console.log(Number.parseInt(numero1));
// Convierte en un numero florante, con una fraccion
console.log(Number.parseFloat(numero2));
// NAN - no es un numero
console.log(Number.parseInt(numero3)); 


// Revisar si un numero es entero o no 

console.log(Number.isInteger(numero4)); // false
console.log(Number.isInteger(numero3)); // false



