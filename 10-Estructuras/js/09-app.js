// Estructuras de control y el operador ternario
const autenticado = false;
const puedePagar = true;

console.log( autenticado && puedePagar ? 'Si puede pagar' : 'No esta autenticado')
console.log( autenticado || puedePagar ? 'Si puede pagar' : 'No esta autenticado')

// Uso de if anidado
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if ( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if (efectivo > totalPagar) {
        console.log('Si podemos pagar');
    } else {
        console.log('Otra forma de pago')
    }
} else {
    console.log('Fondos insuficientes');
}


// If anidado dentro del ternario
console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar': 'No esta autenticado')
