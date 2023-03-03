"use strict";

const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}

Object.seal( producto )
producto.disponible  = false; //si existe si puedo modificarlo
// producto.imagen = "imagen.jpg"; // no existe, no puedo agregar objetos

console.log(producto)

console.log(Object.isSealed(producto))
