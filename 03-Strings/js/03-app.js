// Concatenar y template strings
const producto = "Monitor 20 pulgadas";
const precio = "30 USD";

console.log(producto);
console.log(producto.concat(precio)); // usando variables
console.log(producto.concat(" en descuento")); // indicando un valor

//Formas de combinar ambas
console.log( producto + " con un precio de: " + precio);
console.log( "El producto " , producto , " tiene un precio de " , precio);

// Con template strings
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
