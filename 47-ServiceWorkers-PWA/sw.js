const nombreCache = 'apv-v1';
const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];

// Cuando se instala el service worker se ejecuta solo 1 vez
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    // Espera a que se descarguen los caches indicados en la variable archivos
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
})

// Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service Worker activado');

    console.log(e);
})

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request) // identifica el tipo de request
            .then( respuestaCache => {
                return respuestaCache;
            })
            .catch( () =>  caches.match('/error.html'))
    )
})