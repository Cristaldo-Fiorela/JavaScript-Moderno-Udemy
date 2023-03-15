// Cambiando css con DOM
const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


// Como mejor practica es mejor el colocar y quitar clases
const card = document.querySelector('.car');
card.classList.add('nueva-clase', 'segunda-clase'); // añade
card.classList.remove('card') // elimina
console.log(card.classList)
