// DOM Selectors
const selectCategories = document.querySelector('#categorias');
const resultado =  document.querySelector('#resultado');
const modalFooter = document.querySelector('.modal-footer');
const toastDiv = document.querySelector('#toast');
const toastBody = document.querySelector('.toast-body');
const favoritosDiv= document.querySelector('.favoritos')

const modal = new bootstrap.Modal('#modal', {});

// Event Listener
document.addEventListener('DOMContentLoaded', iniciarApp);

//selectCategories.addEventListener('change', seleccionarCategoria);


// Function
function iniciarApp() {
    if(selectCategories) {
        selectCategories.addEventListener('change', seleccionarCategoria);

        obtenerCategorias();
    }
    if(favoritosDiv) {
        obtenerFavoritos();
    }
}

function obtenerCategorias(){
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then( resultado => mostrarCategorias(resultado.categories))
}

function mostrarCategorias(categorias = []) {
    categorias.forEach( categoria => {
        const { strCategory } = categoria;
        const option = document.createElement('OPTION');
        option.value = strCategory;
        option.textContent = strCategory;
        selectCategories.appendChild(option)
    }); 
}

function seleccionarCategoria(e) {
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    
    fetch(url)
        .then( respuesta => respuesta.json())
        .then ( resultado =>  mostrarRecetas(resultado.meals));
}

function mostrarRecetas(recetas = []) {

    limpiarHTML(resultado);

    const heading = document.createElement('H2');
    heading.classList.add('text-center', 'text-black', 'my-5');
    heading.textContent = recetas.length ? 'Resultados' : 'No Hay Resultado';
    resultado.appendChild(heading);


    // iterar en los resultados
    recetas.forEach( receta => {
        const { idMeal, strMeal, strMealThumb } = receta;

        const recetaContenedor = document.createElement('DIV');
        recetaContenedor.classList.add('col-md-4');

        const recetaCard = document.createElement('DIV');
        recetaCard.classList.add('card', 'mb-4');

        const recetaImagen = document.createElement('IMG');
        recetaImagen.classList.add('card-img-top');
        recetaImagen.alt = `Imagen de la receta ${strMeal ??  receta.title}`;
        recetaImagen.src = strMealThumb ?? receta.img;

        const recetaCardBody = document.createElement('DIV');
        recetaCardBody.classList.add('card-body');

        const recetaHeading = document.createElement('H3');
        recetaHeading.classList.add('card-title', 'mb-3');
        recetaHeading.textContent = strMeal ?? receta.title;

        const recetaBtn = document.createElement('BUTTON');
        recetaBtn.classList.add('btn', 'btn-danger', 'w-100');
        recetaBtn.textContent = 'Ver Receta';
        // recetaBtn.dataset.bsTarget = '#modal';
        // recetaBtn.dataset.bsToggle = 'modal';
        recetaBtn.onclick = function () {
            seleccionarReceta(idMeal ??  receta.id);
        }

        //Inyectar en el codigo HTML
        recetaCardBody.appendChild(recetaHeading);
        recetaCardBody.appendChild(recetaBtn);

        recetaCard.appendChild(recetaImagen);
        recetaCard.appendChild(recetaCardBody);

        recetaContenedor.appendChild(recetaCard);

        resultado.appendChild(recetaContenedor);
    })
}

function seleccionarReceta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarRecetaModal(resultado.meals[0]))

}

function mostrarRecetaModal(receta) {
    const {idMeal, strInstructions, strMeal, strMealThumb} = receta;

    // Añadir contenido al modal
    const modalTitle = document.querySelector('.modal .modal-title');
    const modalBody = document.querySelector('.modal .modal-body');

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
        <img class="img-fluid" src=${strMealThumb} alt="receta ${strMeal}" />
        <h3>Instrucciones</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredientes y cantidades</h3>
    `;

    const listGroup = document.createElement('UL');
    listGroup.classList.add('list-group');

    //Mostrar cantidades e ingredientes
    for(let i = 1; i <= 20; i++) {
        if(receta[`strIngredient${i}`]) {

            const ingrediente = receta[`strIngredient${i}`];
            const cantidad = receta[`strMeasure${i}`];

            const ingredienteLi = document.createElement('LI');
            ingredienteLi.classList.add('list-group-item');
            ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

            listGroup.appendChild(ingredienteLi)
        }
    }

    modalBody.appendChild(listGroup);

    // Limpiando el footer del modal para evitar la multiplicacion de botones en este
    limpiarHTML(modalFooter);

    // * Botones de cerrar y favoritos
    const btnFavorito = document.createElement('BUTTON');
    btnFavorito.classList.add('btn', 'btn-danger', 'col');
    btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

    // * Local Storage
    btnFavorito.onclick = function() {
        if(existeStorage(idMeal)) {
            eliminarFavorito(idMeal);
            btnFavorito.textContent = 'Guardar Favorito'
            mostrarToast('Eliminado correctamente');
            return
        }

        agregarFavorito({
            id: idMeal,
            title: strMeal,
            img: strMealThumb
        });
        btnFavorito.textContent = 'Eliminar favorito';
        mostrarToast('Agregando correctamente');
    }

    const btnCerrarModal = document.createElement('BUTTON');
    btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
    btnCerrarModal.textContent = 'Cerrar';
    btnCerrarModal.onclick = function() {
        modal.hide();
    }

    modalFooter.appendChild(btnFavorito);
    modalFooter.appendChild(btnCerrarModal);

    //Muestra el modal
    modal.show();
}

function agregarFavorito(receta) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]))
}

function eliminarFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    const nuevosFavoritos = favoritos.filter( favorito => favorito.id  !== id);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
}

function existeStorage(id) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    return favoritos.some( favorito => favorito.id === id);
}

function mostrarToast(mensaje) {
    const toast = new bootstrap.Toast(toastDiv);
    toastBody.textContent = mensaje;
    toast.show();
}

function obtenerFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

    if(favoritos.length) {
        mostrarRecetas(favoritos);
        return
    }

    const noFavoritos = document.createElement('P');
    noFavoritos.textContent = 'No hay favoritos aun';
    noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
    resultado.appendChild(noFavoritos);
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}