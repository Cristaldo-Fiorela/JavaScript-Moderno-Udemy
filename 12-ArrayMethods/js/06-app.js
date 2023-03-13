const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// en un every todos los elementos deben cumplir la condicion sino devulve false
const resultado = carrito.every(producto => producto.precio < 1000); // true
const resultado2 = carrito.every(producto => producto.precio < 500); // false

// con some
const resultado3 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);