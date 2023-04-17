// * Cargando JSON
// Permite la comunicacion entre el navegador y el servidor indepentientemente del lenguaje de programacion que se este utilizando

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos );

function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        // .then(console.log(respuesta => {
        //     console.log(respuesta)
        //     console.log(typeof respuesta)
        // }))
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado));
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p> Empleado: ${nombre}</p>
        <p> id: ${id}</p>
        <p> empresa: ${empresa}</p>
        <p> trabajo: ${trabajo}</p>
    `
}