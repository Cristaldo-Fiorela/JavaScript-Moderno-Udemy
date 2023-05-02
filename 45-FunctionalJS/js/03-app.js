/*
    * Higher Order Functions
funcion que toma o retorna una funcion como aregumento.
La mayoria de loa array methods son Higher Order Functions
 */

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

const resultado1 = carrito.filter(producto => {
    return producto.precio > 400;
})

console.log(resultado);

//* Aplicando Higher Order Functions
// Declaramos una function expression generica que funciona sobre 1 productos
const mayor400 = producto => {
    return producto.precio > 400
}

// Asignamos la funcion anterior creada como argumento. Iterando en el array que queremos trabajando sobre cada producto.   
const resultado = carrito.filter(mayor400);
console.log(resultado);