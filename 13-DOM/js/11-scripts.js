const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    console.log('Diste click en el boton');
});

/// Con una funcion
btnFlotante.addEventListener('click', () => {
    mostrarOcultarFooter()
});

function mostrarOcultarFooter(){
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        this.classList.remove('activo');
        this.textContent = ('Idioma y Monera')
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent.add('X Cerrar')
    }

    console.log(footer.classList);
}

// This hace referencia a lo que llamo a ejecutar nuestra funcion de ocultar footer