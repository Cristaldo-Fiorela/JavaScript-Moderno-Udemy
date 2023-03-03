//OBJECT LITERAL
const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}

//OBJECT CONSTRUCTOR

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this. disponible = true;
}

const producto2 = new Producto("Monitor de 24 pulgadas", 500)
console.log(producto2)