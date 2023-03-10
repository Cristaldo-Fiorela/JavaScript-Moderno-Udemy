//Buenas practicas a la hora de evaluar booleans
const autenticado = true;

// Manera incorrecta de declarar esta condicion ya que se da de manera implicita que autenticado es true
if(autenticado === true) {
    console.log('Si puedes ver netflix');
} else {
    console.log('No puedes ver netflix');
}

// Manera correcta
if(autenticado) {
    console.log('Si puedes ver netflix');
} else {
    console.log('No puedes ver netflix');
}

// Operador ternario
console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado');