// Forma declarativa
const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor',
    precio: 400,
}

const producto2 = {
    nombre: 'Celular',
    precio: 800,
}
const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}
const producto4 = {
    nombre: 'Auriculares',
    precio: 100,
}
carrito.push(producto)
carrito.push(producto2)
carrito.push(producto4)
carrito.unshift(producto3);

console.table(carrito);

// //Eliminar ultimo elemento de un arreglo
// carrito.pop(); 
// //Eliminar primer elemento de un arreglo
// carrito.shift(); 


// carrito.splice(1, 2) // toma dos parametros, el primero la posicion y el segundo la cantidad de elementos a partir de la posicion indicada que queremos que elimine



console.table(carrito);