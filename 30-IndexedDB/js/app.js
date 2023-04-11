document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})

function crmDB() {
    // crear base de datos version 1.0
    // nombre como string, numero de version
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la BD');
    }
    //Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');
    }
    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function () {
        console.log('Este metodo solo se ejecuta una vez....');
    }
}