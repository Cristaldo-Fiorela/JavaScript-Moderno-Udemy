// Probar 2 valores
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(10, 5);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado !== esperado) {
                console.error(`El ${resultado} es diferente a los esperado, la prueba no paso`);
            } else {
                console.log('la prueba paso correctamente');
            }
        }, 
        toEqual( resultado) {
            if (resultado !== esperado) {
                console.error(`El ${resultado} no es igual a los esperado, la prueba no paso`);
            } else {
                console.log('la prueba paso correctamente');
            }
        }
    }
}