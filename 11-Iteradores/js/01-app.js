// For Loop
// El codigo se ejecuta hasta que el codigo deje de cumplir una condicion

// 1. inicializador
// 2. condicion a revisar
// 3. incremento
for(let i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
}

// En un for loop como indentificar los numeros pares de los impares
// no hay condicion para los impares asi que lo dejamos en el else
// realizamos con modulo la condicion de los pares.

for(let i =0; i <= 20; i++) {
    if( i % 2 === 0) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}

// Recorriendo mi carrito
const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio : 500 },
    { nombre: 'Television', precio : 100 },
    { nombre: 'Tablet', precio : 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio : 400 },
    { nombre: 'Celular', precio : 700 },
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
