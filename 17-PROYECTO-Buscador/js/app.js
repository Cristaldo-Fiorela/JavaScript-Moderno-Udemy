// Variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const formulario = document.querySelector('#buscador');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '', 
    year: '', 
    minimo: '',
    maximo: '',
    puertas: '', 
    transmision: '', 
    precio: '', 
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos

    // Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de busqueda
    marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value;
        filtrarAuto();
    })
    year.addEventListener('change', e => {
        datosBusqueda.year = parseInt(e.target.value);
        filtrarAuto(); 
    })
    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value;
    })
    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value;
    })
    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = e.target.value;
    })
    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value;
    })
    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value;
    })

// Funciones
function mostrarAutos(autos) {
    limpiarHTML(); // Elimina el HTML previo

    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color ${color}
        `
        //insertar en el html
        resultado.appendChild(autoHTML);
    })
}


// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
// Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i-- ) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al selector
    }
}

// Filtros de select
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );

    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca) {
        return auto.marca == marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if(year) {
        return auto.year == year;
    }
    return auto;
}

