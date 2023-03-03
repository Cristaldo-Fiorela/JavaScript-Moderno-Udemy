//METODOS DE ARREGLOS

const meses = ['Enero', 'Febrero', 'Marzo'];


// Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');

// console.table(meses)

// Ejemplo carrito

const carrito = [];

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

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3) // se agrega al comienzo


console.table(carrito)
