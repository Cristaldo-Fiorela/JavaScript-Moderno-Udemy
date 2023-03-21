// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const  listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

registrarEventListeners();
function registrarEventListeners() {
    // cuando agregas un curso precionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', (e) => {
        articulosCarrito = []; // reseteamos el arreglo

        limpiarHTML(); //Eliminamos todo el html
    })
}

// Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    } 
}

function eliminarCurso(e) {
    //console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')) {
        console.log(e.target)
        const cursoId = e.target.getAttribute('data-id'); // obtiene el id del html 

        // Eliminar del arreglo  de articulosCarritos por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        //console.log(articulosCarrito)

        carritoHTML(); // itera sobre el carrito y muestra su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    console.log(infoCurso);

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)

    if(existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        }) 
    } else {
        // agregar elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}


// Muestra el carrito de compras en el html
function carritoHTML() {
    // limpiar el HTML
    limpiarHTML();

    // Recore el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;

    // agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos del tbody
function limpiarHTML() {
    // forma lenta
    //contenedorCarrito.innerHTML = '';

    // Mientas exista un hijo, el elemento padre elimina el 1er hijo
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

