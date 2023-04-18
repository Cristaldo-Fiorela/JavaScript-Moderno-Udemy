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
            // limpiar el HTML previo
            limpiarHTML();

            if(datos.code === '404') {
                mostarError('Ciudad no entontrada');
                return;
            }

            // Imprime la respuesta en el HTML
            mostarClima(datos);
        })
}

function mostarClima(datos) {
    const { name, main: {temp, temp_max, temp_min} } =  datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    // Mostrando el nombre de la ciudad
    const nombreCiudad = document.createElement('P');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    // temperatura actual
    const actual = document.createElement('P');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    // temperatura maxima
    const tempMaxima = document.createElement('P');
    tempMaxima.innerHTML = `Max ${max} &#8451;`;
    tempMaxima.classList.add('text-xl');

    // temperatura minima
    const tempMinima = document.createElement('P');
    tempMinima.innerHTML = `Min ${min} &#8451;`;
    tempMinima.classList.add('text-xl');

    // Contenedor donde imprimimos el resultado de la busqueda
    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');

    // Mostrar en el HTML
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}