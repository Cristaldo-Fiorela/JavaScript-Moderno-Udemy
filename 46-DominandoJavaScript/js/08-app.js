/*
Self
se refiere a la ventana global
*/

console.log(window === self);

self.onload = () => {
    console.log('Ventana lista');
}

const producto = {
    nombre: 'Monitor de 20 Pulgadas', 
    precio: 30,
    disponible: true,
    mostarInfo: function() {
        const self = this;
        return `El producto: ${self.nombre} tiene un precio de ${self.precio}`
    }
}

console.log(producto.mostarInfo());