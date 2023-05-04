/*
* Design Patterns

Soluciones tipicas a problemas comunes en el desarrollo de sofware
Son soluciones a problemas de diseño de codigo
son soluciones probadas
son soluciones conocidad por todos
son conocidas por todos

* Existen diferentes tipos
-De creacion => crea objetos y permite reutilizar codigo
-De estructura =>comunicacion de objetos y classes en grandes proyectos
-Comportamiento => se encargan de como se comportan y cominucan los objetos
*/

// * Class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');

console.log(persona);