/*
* New Binding
- es lo que se conoce como programacion orientada a objetos en versiones anteriores de js
*/

function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// * Window Binding

// Asignando el valor a la ventana global
window.color = 'negro';
function hola() {
    console.log(color);
}
hola();