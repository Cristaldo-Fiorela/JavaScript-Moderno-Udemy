// operador &&

const usuario = true;
const puedePagar = true;

// revisa que se cumplan todas las condiciones a la vez
if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usuario) {
    console.log('No puedes comprar');
} else if (!usuario) {
    console.log('Inicia sesion o crea una cuenta');
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
} 