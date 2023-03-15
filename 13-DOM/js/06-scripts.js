const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//FORMAS DE IMPRIMIR CONTENIDO

console.log(encabezado.innerText); // <= obsoleto
// si en el CSS - visibility: hidden; no lo va a encontrar.

console.log(encabezado.textContent);
// si en el CSS - visibility: hidden; si lo va a encontrar.

console.log(encabezado.innerHTML); // se tra el el HTML

// EJERCITANDO cambios
const nuevoHeading = 'Nuevo heading'
document.querySelector('.contenido-hero h1').textContent = 'huevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;