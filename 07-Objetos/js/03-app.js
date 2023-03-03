const producto = {
    nombre : "monitor",
    precio: 300,
    disponible: true,
}

// AGREGAR NUEVAS PROPIEDADES
producto.imagen = "imagen.jpg";

// ELIMINAR PROPIEDAD
delete producto.disponible;



console.log(producto);