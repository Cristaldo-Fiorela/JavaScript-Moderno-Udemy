// Eliminando elementos DOM

// eliminando elementos por si mismos
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

// eliminando desde el padre...
const navegacion = document.querySelector('.navegcion');
// miramos los indices de los elementos
console.log(navegacion.children);
// se debe pasar la referencia de posicion del elemento que queremos eliminar
navegacion.removeChild( navegacion.children[2]); 