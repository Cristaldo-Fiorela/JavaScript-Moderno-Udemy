const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
console.log(navegacion.children); // enlista los elementos html ignorando los espacios en blanco

console.log(navegacion.children[0].nodeType);
console.log(navegacion.children[1].nodeName);

// traversing the DOM
// navega a traves de los diferentes elementos
const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde trevensing the DOM'
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);


// traversing de hijo a padre
console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.parentElement.parentElement);
console.log(card.parentElement.parentElement.parentElement); // main


// avanzando en elementos
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// volver al anterior elemento
console.log(card);
console.log(card.previousElementSibling);
console.log(card.previousElementSibling.previousElementSibling);







