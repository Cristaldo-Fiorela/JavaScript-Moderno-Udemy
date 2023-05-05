/*
* Ventajas de testing
-mejora la calidad de tu sofware evitando bugs
- probar todos los diferentes escenarios puede ser complicado o tardado, pero hay herramientas que automatizan las pruebas
- liberar nuevas versiones sin las preocupaciones de que algo salga mal
-tenes pruebas hara que una persona que no ha mantenido un proyecto conozca lo que hace cada parte
- se testea como se integran las diferentes partes de la app entre si.

*Tipos de testing 
- End to End = mas interactivo, simula algunos click, llenar formularios y asegurarse de que se muestre en pantalla lo que se desea
- Integracion - revisar que  multiples partes de nuestro proyecto funcionen bien
- Unit = revisa que cada parte por si sola funcione bien
- Static =  revisar por errores en el codigo mientra vas escribiendo

* Herramientas de testing
- Jest. Es popular, es necesario tener instalado Node.js
- Cypress.  Herramienta para hacer testing End to End
 */


// Probar 2 valores
function suma(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

let resultado =  suma(2,2);
let esperado = 3;

if(resultado !== esperado) {
    console.error(`El ${resultado} es diferente a los esperado, la prueba no paso`);
} else {
    console.log('la prueba paso correctamente');
}

resultado =  restar(10,5);
esperado = 6;

if(resultado !== esperado) {
    console.error(`El ${resultado} es diferente a los esperado, la prueba no paso`);
} else {
    console.log('la prueba paso correctamente');
}