const notificarBtn = document.querySelector('#notificar');
const verNotificacion = document.querySelector('#verNotificacion');


notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        })
});

verNotificacion.addEventListener('click', () => {
    if( Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: '../img/ccj.png',
            body: 'Codigo con Juan, aprende con proyectos reales'
        })

        notificacion.onclick =  function() {
            window.open('https://www.codigoconjuan.com')
        }
    }
})