//Eventos con el mouse

const nav = document.querySelector('.navegacion');

// registrando un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
})
//
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
})
//
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'white';
})
//
nav.addEventListener('mouseup', () => {
    console.log('click en nav');
})
// doble click
nav.addEventListener('dblclick', () => {
    console.log('doble click');
})