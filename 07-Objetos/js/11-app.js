//PALABRA RESERVADA THIS

const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`el producto ${this.nombre} tiene el precio de: ${this.precio}`)
    }
}

producto.mostrarInfo()
