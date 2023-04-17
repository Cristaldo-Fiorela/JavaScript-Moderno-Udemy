/*
* FETCH API
- nativa de javascript
- consulta a la url y obtiene una respuesta
- contiene implicito reject y resolve pero se puede acceder a este con, por ejemplo, .catch 
*/
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = '../data/datos.txt';

    fetch(url)
        // como quiero los datos
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
        })
        // contenido de la respuesta
        .then(datos => {
            console.log(datos);
        }) 
        // Atrapando el error en caso de fallo
        .catch(error => {
            console.log(error);
        })
}