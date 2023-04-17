window.addEventListener('online', actilizarEstado);
window.addEventListener('offline', actilizarEstado);

function actilizarEstado() {
    if(navigator.onLine) {
        console.log('Estas conectado');
    } else {
        console.log('No estas conectado');
    }
}