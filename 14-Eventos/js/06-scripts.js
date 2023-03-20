// Event Bubbling
// Al presionar en un elemento se disparan mas elementos, es decir "se propaga" hacia los demas
// puede causar resultados no esperados


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Como detener la propagacion? con stopPropagation()
cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card')
})

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info')
})
titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo')
})