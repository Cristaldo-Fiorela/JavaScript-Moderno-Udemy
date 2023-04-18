const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

// *Event Listeners
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})


// * Funciones
function buscarClima(e) {
    e.preventDefault();

    //Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        //Hubo un error
        mostarError('Ambos campos son obligatorios')
    }
    //Consultamos la API
    consultarAPI(ciudad, pais);
}

function mostarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    // Crear una alerta
    if(!alerta) {
        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <strong class="block">${mensaje}</strong>
        `;

        container.appendChild(alerta);

        //Se elimina la alerta despues de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(ciudad, pais) {
    const appId = '366495dde71fe237ae2df8bc251740da';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    fetch(url)
        .then( respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)

            if(datos.code === '404') {
                mostarError('Ciudad no entontrada');
            }
        })
}