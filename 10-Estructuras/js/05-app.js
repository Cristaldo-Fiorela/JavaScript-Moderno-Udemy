// Switch case

const metodoPago = 'efectivo';

// dentro se coloca aquello que se quiera comprobar
// Al tener multiples condiciones es mas facil de leer
switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break; // <- detiene la ejecucion del case
    case 'cheque' :
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta' :
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default: // <- es obligatorio en todo switch
        console.log(`Aun no has seleccionado un metodo de pago`)
}

function pagar() {
    console.log('Pagando con...')
}