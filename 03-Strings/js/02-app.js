//Metodos String
const producto = "Monitor 20 pulgadas";

console.log(producto);

// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);

//Devuelve el numero de posicion donde comienza la palabra que idiquemos
console.log(producto.indexOf('pulgadas'));
console.log(producto.indexOf('Tablet')); // si no existe devuelve -1

// Busca si dentro del string incluye aquello que estamos indicando
// si lo incluye devuelve "true" de lo contrario "false"
// compara los caracteres de manera estricta (diferencia mayus de minusculas)

console.log(producto.includes('Tablet'));  //false
console.log(producto.includes('Monitor')); // true
console.log(producto.includes('monitor')); // false

