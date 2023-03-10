// Comparador estricto
const puntaje = 1000;
const puntaje2 = '1000';

console.log(typeof puntaje)
console.log(typeof puntaje2)

if(puntaje != 1000) { // !== diferente 
    console.log('Si es diferente');
}

if(puntaje == '1000') { // == igual a
    console.log('Si es igual');
} 

//operador estricto
if(puntaje === '1000') { // === igual a tipo de dato y tipo de valor
    console.log('Si es igual');
} else {
    console.log('No es igual');
}