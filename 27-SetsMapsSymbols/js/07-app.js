/*
Generador
- funcion que retorna un iterador
- comienza con * en el nombre de la funcion
*/

function *crearGenerador() {
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador);
;

