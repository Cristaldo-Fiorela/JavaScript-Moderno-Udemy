/* 
    Conserva nuestras variables como privadas
    Esto hace que no se sobreescriban si se declaran en otro archivo
    No permite utilizar el contenido de la variable fuera de esta funcion

(function(){
    console.log('desde un IIFE');
    const nombreCliente = 'Juan'
}());
*/

export const nombreCliente = 'Juan';
export const ahorro =  200;