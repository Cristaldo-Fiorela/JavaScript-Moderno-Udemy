// IntersectionObserver: permite identificar un elemento una vez que es visible en el navegador
// isIntersecting => cambia de true a false dependiendo si el elemento seleccionado se ve o no

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting)
        console.log('Ya esta visible')
    });

    observer.observe(document.querySelector('.premium'));
});

