// Mas Strings methods
const producto = "Monitor 20 pulgadas";

// .replace para reemplazar
// recibe dos parametros: aquello que queremos reemplazar y aquello por lo que queremos reemplazar.
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));


// .slice para cortar
// recibe dos parametros: posicion y cantidad de espacios desde la posicion de que cortar.
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

// alternatica a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "Juan";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

