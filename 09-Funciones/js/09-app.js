// FUNCIONES DE PROPIEDAD

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function() {
        console.log('pausando')
    },
    borrar: function(id) {
        console.log(`Cancion con ${id} borrada`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo playlist  ${nombre}`)
    },
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Musica sad');
reproductor.crearPlaylist('Kpop');
reproductor.reproducirPlaylist('Kpop');

// reproductor.borrar = function(id) {
//     console.log(`Cancion con ${id} borrada`)
// }
