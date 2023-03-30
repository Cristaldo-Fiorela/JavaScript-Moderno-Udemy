// Obteniendo datos de localStorage

const nombre = localStorage.getItem('nombre');
console.log(nombre);
// si el valor buscado no existe, obtenemos NULL

// Obteniendo objetos y arrays
// Para ello usamos JSON.parse para volver a convertir nuestro string en un objeto
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);