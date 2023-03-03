const producto = {
    nombre : "monitor",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre

// console.log(producto.nombre)

const { nombre, precio, disponible } = producto;
console.log(nombre)
console.log(precio)
console.log(disponible)

const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true
