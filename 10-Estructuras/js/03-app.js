// Operador Mayor que y menor que

const dinero = 500;
const totalAPagar = 300;

if( dinero < totalAPagar ) { // menor a 
    console.log('Fondos insuficientes');
} else {
    console.log('Si podemos pagar');
}

if( dinero >= totalAPagar ) { // mayor o igual
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}