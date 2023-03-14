/*
==== BREAK Y CONTINUE
break detiene nuestro loop completamente, sin importar si se cumple una condicion o no.
continue <- no detiene la ejecucion del codigo pero si de la siguiente linea a este y vuelve a ejecutar el codigo desde el comienzo
*/

for(let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log('CINCO SHINY ✨');
        //break;
        continue;
    }
    console.log(`Numero: ${i}`);
}

// Recorriendo mi carrito
const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio : 500 },
    { nombre: 'Television', precio : 100 },
    { nombre: 'Tablet', precio : 200, descuento: true},
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio : 400 },
    { nombre: 'Celular', precio : 700 },
]

for(let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i].nombre);
}