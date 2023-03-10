// Comparacion de valores
// cada uno de estos metodos devuelve true o false (boolean) dependiendo el resultado

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si 2 numeros son iguales (valor)
console.log(numero1 == numero2); // true
console.log(numero2 == numero1); // true

//Comparador estricto (valor y tipo de dato)
console.log(numero2 === numero1); // false
console.log(numero1 === parseInt(numero2)); // true
console.log(typeof numero1);
console.log(typeof numero1);

// Diferente o "no es igual a..."
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // true
console.log(numero1 != numero2); // false
console.log(numero1 != parseInt(numero2)); // false
