// Cortar espacios en blanco de un String
const producto = "             Monitor 20 pulgadas         ";

console.log(producto);

// Eliminar el inicio y el final individualmente
console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());

// Elimina todos los espacios
console.log(producto.trim());
