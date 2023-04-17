// * Visibility State
// detiene procesos cuando los usuarios no esten viendo.

document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutas la funcion para reproducir el video');
    } else {
        console.log('pausar el video')
    }
})