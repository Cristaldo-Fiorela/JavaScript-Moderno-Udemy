// DOM Selectors
const selectCategories = document.querySelector('#categorias');
const resultado =  document.querySelector('#resultado');

const modal = new bootstrap.Modal('#modal', {});

// Event Listener
document.addEventListener('DOMContentLoaded', iniciarApp);
selectCategories.addEventListener('change', seleccionarCategoria);


// Function
function iniciarApp() {
    obtenerCategorias()
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
        recetaImagen.alt = `Imagen de la receta ${strMeal}`;
        recetaImagen.src = strMealThumb;

        const recetaCardBody = document.createElement('DIV');
        recetaCardBody.classList.add('card-body');

        const recetaHeading = document.createElement('H3');
        recetaHeading.classList.add('card-title', 'mb-3');
        recetaHeading.textContent = strMeal;

        const recetaBtn = document.createElement('BUTTON');
        recetaBtn.classList.add('btn', 'btn-danger', 'w-100');
        recetaBtn.textContent = 'Ver Receta';
        // recetaBtn.dataset.bsTarget = '#modal';
        // recetaBtn.dataset.bsToggle = 'modal';
        recetaBtn.onclick = function () {
            seleccionarReceta(idMeal);
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

    // Añador contenido al modal
    const modalTitle = document.querySelector('.modal .modal-title');
    const modalBody = document.querySelector('.modal .modal-body');

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
        <img class="img-fluid" src=${strMealThumb} alt="receta ${strMeal}" />
        <h3>Instrucciones</h3>
        <p>${strInstructions}</p>
    `;

    //Muestra el modal
    modal.show();
}
function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}