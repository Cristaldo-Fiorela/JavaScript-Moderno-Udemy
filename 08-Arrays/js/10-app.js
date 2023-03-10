// .map y .forEach
const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio : 500 },
    { nombre: 'Television', precio : 100 },
    { nombre: 'Tablet', precio : 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio : 400 },
    { nombre: 'Celular', precio : 700 },
]

// Llena una variable con un nuevo array
const nuevoarray = carrito.map( function(producto) {
    return`${producto.nombre} - Precio: ${producto.precio}`;
})
// No llena una variable con un nuevo array
const nuevoarray2 = carrito.forEach( function(producto) {
    return`${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoarray);
console.log(nuevoarray2);