// DOM Selectors
const selectCategories = document.querySelector('#categorias');

// Event Listener
document.addEventListener('DOMContentLoaded', iniciarApp);

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

        console.log(option);
    }); 
}