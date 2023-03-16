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
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';
    }

    console.log(footer.classList);
}

// function mostrarOcultarFooter {
//     constructor() {
//         if (footer.classList.contains('activo')) {
//             footer.classList.remove('activo');
//             this.classList.remove('activo');
//             this.textContent = 'Idioma y Moneda';
//         } else {
//             footer.classList.add('activo');
//             this.classList.add('activo');
//             this.textContent = 'X Cerrar';
//         }

//         console.log(footer.classList);
//     }
// }

// This hace referencia a lo que llamo a ejecutar nuestra funcion de ocultar footer (no me anda 😢)