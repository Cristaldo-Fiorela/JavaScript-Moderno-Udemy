/*
SCOPE:
es el alcance de un valor de una variable
*/

// Scope global: Variable global
const cliente = 'Juan';

function mostrarCliente() {
    console.log(cliente);
}

mostrarCliente()


function mostrarEmpresa() {
    // Scope en funcion
    const empresa = 'Coco Channel';
}
// No se puede acceder a ella ya que solo existe dentro de una funcion
console.log(empresa);
mostrarEmpresa()


const login = true;

function clienteLogueado() {
    const cliente = 'Fio';
    console.log(cliente); // Fio

    if(login) {
        // Scope de bloque de codigo
        const cliente = 'Admin';
        console.log(cliente) // Admin
    }
}