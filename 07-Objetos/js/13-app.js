//METODOS DE OBJETOS

const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}


// Hace un objeto con los nombres de las propiedades del objeto.
// Utilizado muchas veces cuando por ejemplo saber si un objeto esta vacio, si la consulta de un clienta a una base de datos fue exitosa y posee informacion
console.log(Object.keys(producto)); 


// Retorna los valores claves de las propiedades
console.log(Object.values(producto));

// Retorna todo
console.log(Object.entries(producto));
