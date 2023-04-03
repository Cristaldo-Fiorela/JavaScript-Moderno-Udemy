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

const fio = new Cliente('fio', 4000);
console.log(fio.mostrarInformacion());
//console.log(fio.bienvenida()); <= es propio de nuestro objeto creado
console.log(Cliente.bienvenida());

console.log(fio);
