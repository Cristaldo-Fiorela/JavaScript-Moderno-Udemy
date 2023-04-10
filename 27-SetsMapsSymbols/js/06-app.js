const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

function crearIterador() {
    // Definiendo nuesto contador inicial
    let i = 0;

    return {
        siguiente: () => {
            // evalua el fin del carro con true-false
            const fin = ( i >= carrito.length);
            // retorna el valor actual del carrito
            // "si no llegamos al final queremos obtener el valor de nuestra posicion actual, de lo contrario si llegamos al final devolvemos undefined"
            const valor = !fin ? carrito[i++]: undefined;

            return {
                fin, 
                valor,
            }
        }
    }
}

// Utilizar la funcion del iterador "crearIterador" que retorna nuestra funcion de "siguiente"
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente()); // posicion 0
console.log(recorrerCarrito.siguiente()); // posicion 1
console.log(recorrerCarrito.siguiente()); // posicion 2
console.log(recorrerCarrito.siguiente()); // undefined