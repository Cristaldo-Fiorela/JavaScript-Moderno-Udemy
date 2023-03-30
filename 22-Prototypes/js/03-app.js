// Creando el constructor del objeto cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

/*
    CREANDO FUNCIONES EXCLUSIVAS DE UN PROTOTYPE
    Los prototype pueden establecer metodos para usar con dicho objeto creado por prototype.
    La diferencia entre function y arrow function es que function busca en el objeto mientras que el arrow function busca en la ventana global.
*/
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

// Instanciarlo
const pedro = new Cliente ('Pedro', 6000);
pedro.tipoCliente();
console.log(pedro)

/*
*/
