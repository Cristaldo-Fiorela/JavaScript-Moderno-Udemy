/*
* Implicit Binding
se da por implicito donde encontrar el valor con la palabra.this
*/

const usuario = {
    nombre: 'Fio',
    edad: 25,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    },
    mascota: {
        nombre: 'Donna',
        edad: 3,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();