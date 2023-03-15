/*
======= QUERYSELECTOR =======
-Sintaxis similar a selector de css
-Retorna solamente al primero que encuentre, es decir retorna como max 1 elemento. 
-Si no existe no retorna nada
-Los selectores pueden ser tan especificos como lo requiramos
*/

const card = document.querySelector('.card');
console.log(card);

// podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionando el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log(segundoCard);

// Seleccionando formulario con id
const formulario = document.querySelector('#formulario');
const formulario2 = document.querySelector('.contenido-hero #formulario');

console.log(formulario);
console.log(formulario2);

// Selector de etiqueta
const navegacion = document.querySelector('nav');
console.log(navegacion)


// Selector de atributo
const atributo = document.querySelector('a[href="#footer"]')
console.log(atributo);