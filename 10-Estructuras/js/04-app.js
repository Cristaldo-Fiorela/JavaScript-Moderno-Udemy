const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = false;

if( dinero < totalAPagar ) { // menor a 
    console.log('Fondos insuficientes');
} else if(cheque) {
    console.log('Podemos pagar con cheque');
} else if(tarjeta) {
    console.log('Podemos pagar con la tarjeta');
} else {
    console.log('Si podemos pagar');
}

// En los if se ejecuta la primer condicion que se cumpla e ignora las demas.
// se pueden agregar cuantos else if requiramos