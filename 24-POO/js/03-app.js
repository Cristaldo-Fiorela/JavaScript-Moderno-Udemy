// Class declaration
class Cliente {
    constructor(nombre, saldo){
        // van los valores que va a tener el producto una vez instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Las estaticas para mostrarlas no requieren una instancia
    static bienvenida() {
        return `Bienbenida al cajero`
    }
}

//Herencia 
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        // super es una funcion que va a buscar los atributos que indiquemos en el constructor padre del objeto que hereda los metodos.
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
}

const fio = new Cliente('fio', 4000);
const empresa = new Empresa('Codigo con Juan', 500, 1232190, 'Aprendizaje en Linea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());