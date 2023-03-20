// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const  listaCursos = document.querySelector('#lista-cursos');

registrarEventListeners();
function registrarEventListeners() {
    // cuando agregas un curso precionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leetDatosCurso(cursoSeleccionado)
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leetDatosCurso(curso) {
    console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    }
    console.log(infoCurso);
}