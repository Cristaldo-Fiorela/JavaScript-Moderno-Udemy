const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}

producto.disponible = false;

console.log(producto)

delete producto.precio

console.log(producto)

