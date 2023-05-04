// Mixin Pattern
// Forma de agregar funciones a una classe una vez ya creada la classe

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre}. Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Nombre persona: ${this.nombre}.`)
    }
}

// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const cliente = new Persona('Fio', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

console.log('==============')

const cliente2 = new Cliente('Cliente Fio', 'correo@correo.com')
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();