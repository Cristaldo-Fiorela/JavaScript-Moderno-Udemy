/* 
Set permite eliminar duplicados
Puede manejar de manera mas rapida una cantidad alta de datos
Set son solo valores, no un valor-clave como lo seria un objeto
*/

const carrito =  new Set();

// Metodos del set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Guitarra');

// Existe en el set?
console.log(carrito.has('Guitarra'));
// Metodo para ver el largo de los Set equivalente a .lenght
console.log(carrito.size);

//Borrando en set
console.log(carrito.delete('Guitarra'));

// Los Sets son iterables
/* 
    al iterar puede poseer hasta 3 parametros.
    1. El elemento iterado (valor)
    2. El "index", al no tener clave y solo valor, repite la respuesta de arriba
    4. El Set al que pertenece
*/
carrito.forEach((producto, index, pertenece )=> {
    console.log(producto);
})
