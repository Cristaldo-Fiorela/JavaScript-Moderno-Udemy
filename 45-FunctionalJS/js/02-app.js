// Pasando las FUNCIONES declaradas como argumentos, caracteristica de la programaciones funcional

const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultiplicar =  fn => fn(10,20);

// Asignando las funciones como argumentos
console.log(sumarOMultiplicar( suma ));
console.log(sumarOMultiplicar( multiplicar ));