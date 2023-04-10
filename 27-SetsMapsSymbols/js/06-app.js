function crearIterador() {
    let i = 0;

    return {
        siguiente: () => {
            const fin = ( i >= carrito.length);
            const valor = !fin ? carrito[i++]: undefined;
            return {
                fin, 
                valor,
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

// Utilizar le iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente()); // posicion 0
console.log(recorrerCarrito.siguiente()); // posicion 1
console.log(recorrerCarrito.siguiente()); // posicion 2
console.log(recorrerCarrito.siguiente()); // undefined