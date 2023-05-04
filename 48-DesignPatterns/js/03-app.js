// Singleton
// ! No permite crear multiples instansias de una misma clase
// Siempre retorna el objeto instanciado

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this; // asigna los valores del objeto
        } else {
            return instancia;
        }
    }
}

// Instanciando
const persona = new Persona('Fiore', 'correo@correo.com');
const persona2 = new Persona('Donna', 'correo@correo.com');

console.log(persona);