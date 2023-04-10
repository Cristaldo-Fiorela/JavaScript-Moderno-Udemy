/*
WeakMaps
-sirven para mantener serie de datos como privados
*/

const producto = {
    idProducto : 10,
}

const weakmap = new WeakMap();

//Metodos que funcionan
weakmap.set(producto, 'Monitor');
console.log(weakmap.has(producto)); // true
//console.log(weakmap.delete(producto));


// Funciona diferente
// Trae el valor indicado pero "esconde" de primera los valores indicados en la constante producto, es decir "valores privados"
console.log(weakmap.get(producto));

//Metodos que no funcionan
console.log(weakmap.size);

console.log(weakmap);