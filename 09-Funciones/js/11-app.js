// VENTAJAS DE ARROW FUNCTION

const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`)
}
aprendiendo('JavaScript', 'Vue.js')

// Si solo le pasas un parametro, los parentesis pueden eliminarse
const aprendiendo2 = tecnologia => `aprendiendo ${tecnologia} con arrow functions 2`;

console.log(aprendiendo2('JavaScript'))


// Si tenemos ambos, necesitamos el parentesis
const aprendiendo3 = (tecnologia, tecnologia2) => `aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo3('JavaScript', 'Vue.js'))