"use strict";

const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}

Object.freeze(producto)

// producto.disponible  = false;
// producto.imagen = "imagen.jpg";

console.log(producto)

console.log(Object.isFrozen(producto))