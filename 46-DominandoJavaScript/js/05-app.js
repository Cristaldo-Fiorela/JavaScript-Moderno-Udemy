/*
* EXPLICIT BINDING
- se le indica donde buscar la informacion utilizando los metodos nativos de js llamados call(), apply() y bind()
*/

function persona(elemento1, elemento2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${elemento1} y ${elemento2}`)
}

const informacion = {
    nombre: 'Fio'
}
const musicaFavorita = ['Pop', 'Kpop'];

// Se debe pasar cada elemento de forma individual
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// Puede tomar un arreglo completo
persona.apply(informacion, musicaFavorita);

// Crea una nueva funcion, que se debe llamar, y al igual que call se debe pasar cada elemento de forma individual.
const nuevaFuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
nuevaFuncion();