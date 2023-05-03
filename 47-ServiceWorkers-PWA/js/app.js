/*
* Progresive web application
-Son rapidas - en menos de 5seg cargan
-Instalable - en telefono o computadora
-Conexion offline 

* Service Workes
-Son script corriendo todo el tiempo detras de escena
-Funcionan Offline
- No tienen acceso al DOM
-Cargan defroma instantanea
-Sincronizan los datos detras de escena o sin interferir en la navegacion

* Funciones no disponibles en Service Workes
- window(self)
-document(caches)
-local storage (fetch)
 */

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instalo correctamente', registrado))
        .catch( error => console.log('Fallo la instalacion...', error));
} else {
    console.log('No soporto 💅💋');
}