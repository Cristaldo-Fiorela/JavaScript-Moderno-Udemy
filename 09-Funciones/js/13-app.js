// FUNCIONES DE PROPIEDAD

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:() => console.log('pausando'),
    borrar: id => console.log(`Cancion con ${id} borrada`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist  ${nombre}`),
    nuevaCancion: cancion => {
        this.cancion = cancion;
        console.log(`Añadiendo cancion ${this.cancion}`)
    },
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Musica sad');
reproductor.crearPlaylist('Kpop');
reproductor.reproducirPlaylist('Kpop');
reproductor.nuevaCancion('La butakera');

// reproductor.borrar = function(id) {
//     console.log(`Cancion con ${id} borrada`)
// }
