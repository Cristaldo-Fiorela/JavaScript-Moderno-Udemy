// .forEach

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar js'];

// Como segundo parametro colocado esta implicito como el indice del array a recorrer
pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} ${pendiente}`)
})

pendientes.forEach(pendiente => console.log(pendiente));

const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio : 500 },
    { nombre: 'Television', precio : 100 },
    { nombre: 'Tablet', precio : 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio : 400 },
    { nombre: 'Celular', precio : 700 },
]

carrito.forEach( producto => console.log(producto.precio));
// No crea un arreglo nuevo

// MAP
// crea un arreglo nuevo
const nuevoArreglo = carrito.map( producto => console.log(producto.precio));
const nuevoArreglo2 = carrito.map( producto => console.log(producto.precio));

console.log(nuevoArreglo); // crea el arreglo nuevo
console.log(nuevoArreglo2); // no crea arreglo


