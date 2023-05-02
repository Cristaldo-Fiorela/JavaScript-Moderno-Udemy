/*
    * FUNCTIONAL JS
    crear tu codigo utilizando funciones
    las funciones deben tomar una entrada y tener una salida
    pasar funciones como argumentos
    ! No se permite la modificacion de los datos
    Sintaxis enfocado en las matematicas

    * CONCEPTOS CLAVE DE FUNCTIONAL JS
    Inmutabilidad
    Separar Funciones de datos 
    First-class functions

    * INMUTABILIDAD
    -un dato no puede cambiarse (let o var)
    -los datos no deben modificarse (utiliza const casi siempre);

    * SEPARAR FUNCIONES DE DATOS
    utilizado en funciones que retornan un nuevo dato o array methods. Devuelve un resultado pero nunca modifica los datos originales

    * FIRST CLASS FUNCTIONS
    poder crear dunciones que parezcan cualquier variable como lo es function expression
    asignar una funcion como si fuera un valor, ya sea un string, un boolean, un numero, un objeto o un arreglo
 */

const suma = function (a, b) {
    return a + b;
}

const resultado = suma;

console.log(resultado(10,20))