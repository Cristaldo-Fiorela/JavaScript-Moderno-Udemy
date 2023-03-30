// Creando el constructor del objeto cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function() {
    let tipo; 

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.salgo}, Tipo CLiente: ${this.tipoCliente()},`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -+ retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}
/* 
    Antes de crear una instancia debemos heredar.
    En el siguiente ejemplo vamos a heredar los metodos de Cliente a nuestro prototipo Persona. No viceversa.
*/
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo
// donde usamos el prototipo para agregar informacion
const pedroPascal = new Persona('Pedro', 5000, 7812387132)
console.log(pedroPascal.nombreClienteSaldo());


Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}
console.log(pedroPascal.mostrarTelefono())