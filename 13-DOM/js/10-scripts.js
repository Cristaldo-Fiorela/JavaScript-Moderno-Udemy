// GENERANDO HTML CON JS
const enlace = document.createElement('A');

// agregando texto
enlace.textContent = 'Nuevo enlace';
// añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace)

// Seleccionando la navegacion
const navegacion = document.querySelector('.navegacion');

// forma para imprimir 1
navegacion.appendChild(enlace)

// forma para imprimir 2
// Chequeamos el indice donde insertar
console.log(navegacion.children);
// tiene que tener dos argumentos, el elemento a pasar y su nodo de referencia
navegacion.insertBefore(enlace, navegacion.children[1]);
