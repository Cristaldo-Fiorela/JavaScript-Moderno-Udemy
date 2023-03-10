// El objeto Math

let resultado;

//PI
resultado = Math.PI;

// Redondear segun de que numero entero este mas cerca
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);
resultado = Math.round(2.4);

// Redondear hacia arriba
resultado = Math.ceil(2.1);

//Redondear hacia abajo
resultado = Math.floor(2.9);

// Raiz cuadrada
resultado = Math.sqrt(144);

// Valor Absoluto
resultado = Math.abs(-500);

// Potencia
resultado = Math.pow(2, 4);

// Minimo
resultado = Math.min(3, 5, 1, 12, -3);

// Maximo
resultado = Math.max(3, 5, 1, 12, -3);

// Aleatorio
resultado = Math.random();
resultado = Math.random() * 20; // le indica que tiene que ser mayor a 1

// Aleatorio dentro de un rango
resultado = Math.floor( Math.random() * 30);

console.log(resultado);