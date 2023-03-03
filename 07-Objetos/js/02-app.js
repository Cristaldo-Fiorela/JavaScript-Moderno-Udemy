const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}

// formas de acceder al objeto:

//1. Sintaxis de punto
console.log(producto.nombre)

//2. Sintaxis con corchetes 
console.log(producto["nombre"])

var perro = {
    nombre: 'Lola',
    amigos: ['Pelusa', 'Bingo'],
};

console.log(perro['amigos'])
console.log(perro.amigos)

const obj = {
    'propiedad-uno': 'el valor',
    'La casa Embrujada': 'no me asusta'
}
