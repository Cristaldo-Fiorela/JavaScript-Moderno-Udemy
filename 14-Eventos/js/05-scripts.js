// window.addEventListener('scroll', () => {
//     console.log('scrolling...');
// })

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 100) {
        console.log('el elemento ya esta visible')
    } else {
        console.log('Aun no esta visible, dar mas scroll');
    }
})