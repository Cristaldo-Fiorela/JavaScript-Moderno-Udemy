/* */

// Class declaration
class Cliente {
    constructor(nombre, saldo){
        // van los valores que va a tener el producto una vez instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const fio = new Cliente('fio', 4000);
console.log(fio.mostrarInformacion());
console.log(fio);

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const fio2 = new Cliente('fio', 4000);
console.log(fio2);