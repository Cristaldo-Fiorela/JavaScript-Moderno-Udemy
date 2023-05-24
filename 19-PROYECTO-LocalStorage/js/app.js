// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    //Cuando el usuari agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        crearHTML();
    })
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');

        return; // evita que se ejecutan mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
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

// Muestra un listado de los tweets
function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //Agregar boton de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML

            const li = document.createElement('LI');

            // Añadir el texto
            li.innerHTML = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar);

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los tweets actuales al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet 
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id != id );

    crearHTML();
}

//Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}