// Evento Submit (formularios)
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario)

function  validarFormulario(e) {
    e.preventDefault(); // <= detiene la accion por default, en este caso enviar el formulario
    console.log('Consultando la API');
    console.log(e.target.value);
}