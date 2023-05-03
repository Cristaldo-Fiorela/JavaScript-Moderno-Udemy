
// Cuando se instala el service worker se ejecuta solo 1 vez
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    console.log(e)
})

// Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service Worker activado');

    console.log(e);
})