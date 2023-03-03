// Forma declarativa
const carrito = [];
let resultado;

//Definir un producto
const producto = {
    nombre: 'Monitor',
    precio: 400,
}

const producto2 = {
    nombre: 'Celular',
    precio: 800,
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}

// Forma declarativa, no modifica el objeto actual
resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [ producto3, ...resultado]


console.table(resultado)
