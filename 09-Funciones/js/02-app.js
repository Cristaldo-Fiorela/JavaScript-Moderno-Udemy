//DIFERENCIAS ENTRE ESTAS FUNCIONES


// Declaracion de funcion
sumar(); // 4
function sumar() {
    console.log( 2 + 2 )
}

// Expresion de funcion (function expression)
sumar2(); //error
const sumar2 = function () {
    console.log(3 + 3)
}

//Lo que pasa por detras en el hosting del archivo js
// const sumar2; // etapa de creacion
// sumar2();  // etapa de ejecucion

// sumar2 = function() {

// }
