// FUNCIONES QUE RETORNAS FUNCIONES
const obtenerCliente = () => () => console.log('Juan pablo');
const fn = obtenerCliente();
fn(); // 'Juan pablo'