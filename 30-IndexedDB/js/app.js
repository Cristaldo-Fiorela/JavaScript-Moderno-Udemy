let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000)
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

        DB = crmDB.result
    }
    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;
        console.log(db);


        // Permite crear las columnas de nuestra base de datos
        const objectStore = db.createObjectStore('crm', {
            // creamos una configuracion de como queremos que sea nuestra base de datos
            keyPath: 'crm',
            // al agregar uno auto incrementa el id
            autoIncrement: true,
        })
        
        // Definir las columnas
        // createIndex(CMR, keypath(nombre con el que hacemos referencia para consultar la tabla buscada), opciones { dato unico: si o no} )
        objectStore.createIndex('nombre','nombre', { unique: false });
        objectStore.createIndex('email','email', { unique: true });
        objectStore.createIndex('telefono','telefono', { unique: false });

        console.log('Columnas Creadas')
    }
}

function crearCliente() {
    let transaction =  DB.transaction(['crm'], 'readwrite'); // readonly para solo leer

    transaction.oncomplete = function() {
        console.log('Transaccion Completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 1238907,
        nombre: 'fiore',
        email: 'fiore@gmail.com',
    }

    const peticion = objectStore.add(nuevoCliente);
    // const actualiza = objectStore.put(nuevoCliente);    
    // const elimina = objectStore.delete(nuevoCliente);

    console.log(peticion);
}