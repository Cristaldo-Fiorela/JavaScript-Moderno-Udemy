/*
Propiedades privadas de JavaScript
 */

class Cliente {
    //Permite acceder a este desde un metodo de clase pero no desde un objeto.
    #nombre
    //Accediendo el nombre desde metodo
    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }

    // Manera normal de acceder sin crear metodos para el nombre
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienbenida al cajero`
    }
}

const fio = new Cliente('fio', 4000);
console.log(fio.mostrarInformacion());
console.log(fio.saldo);
//console.log(fio.#nombre); <= no funciona acceder a este como un objeto.