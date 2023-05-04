// Constructor Pattern

// Se usa una clase principal (padre)
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Las demas clases heredan de la clase principal (hijos)
// Clases abstractas
class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');

const cliente = new Cliente('Fio', 'correo@correo.com', 'AvenidaX');
console.log(cliente)