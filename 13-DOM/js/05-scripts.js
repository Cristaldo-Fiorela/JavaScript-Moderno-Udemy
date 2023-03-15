/*
QUERYSELECTORALL
retorna todos los elementos que cumplan con la condicion del selector.
sintaxis similar a selector de css
Los selectores pueden ser tan especificos como lo requiramos
*/

const card = document.querySelectorAll('.card');
console.log(card);

// Si no existe el elemento retorna un nodeList vacio
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);