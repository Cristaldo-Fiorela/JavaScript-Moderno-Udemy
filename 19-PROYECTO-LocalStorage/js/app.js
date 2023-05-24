// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();
    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        
        return; // evita que se ejecutan mas lineas de codigo
    } 

    console.log('AGREGANDO TWEet');
};

// Mostrar mensaje de eror
function mostrarError(mensaje) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    // Insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    
    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}